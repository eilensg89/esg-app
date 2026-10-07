const ESG = {
  PROP_SHEET_ID: 'ESG_SHEET_ID',
  LEADS: 'LEADS',
  REFERIDOS: 'REFERIDOS',
  CONFIG: 'CONFIGURACION'
};

function configurarESG() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Abre Apps Script desde la hoja ESG CRM — Leads y Referidos.');
  PropertiesService.getScriptProperties().setProperty(ESG.PROP_SHEET_ID, ss.getId());
  return 'ESG CRM configurado correctamente.';
}

function doGet(e) {
  const ss = obtenerSpreadsheet_();
  const codigo = normalizarCodigo_(e && e.parameter ? (e.parameter.ref || e.parameter.codigo || '') : '');
  if (codigo) {
    const r = buscarReferido_(ss, codigo);
    return respuesta_({
      ok: true,
      referido: r ? {
        codigo: r.codigo,
        nombre: r.nombre,
        estado: r.estado,
        descuento: r.descuento
      } : null
    });
  }
  return respuesta_({ ok: true, sistema: 'ESG CRM', mensaje: 'Conexión activa' });
}

function doPost(e) {
  try {
    const data = obtenerDatos_(e);
    const ss = obtenerSpreadsheet_();
    const config = obtenerConfiguracion_(ss);
    const sheet = ss.getSheetByName(ESG.LEADS);
    if (!sheet) throw new Error('No existe la pestaña LEADS.');

    const ahora = new Date();
    const zona = Session.getScriptTimeZone();

    const nombreReferidoManual = valor_(
      data,
      'referido',
      'referralName',
      'nombreReferido',
      'nombre_referido'
    );

    const codigoReferido = normalizarCodigo_(
      valor_(data, 'codigoReferido', 'codigo_referido', 'ref') ||
      nombreReferidoManual
    );

    const referido = codigoReferido
      ? asegurarReferido_(ss, codigoReferido, nombreReferidoManual, config)
      : null;

    const emailCliente = valor_(data, 'email', 'correo');
    const whatsappCliente = valor_(data, 'whatsapp', 'telefono', 'phone');
    const nombreCliente = valor_(data, 'nombre', 'name');
    const servicio = valor_(data, 'servicio', 'service');
    const producto = valor_(data, 'producto', 'product');
    const formulario = valor_(data, 'formulario', 'form', 'type');
    const origen = valor_(data, 'origen', 'source', 'pagina');

    const esHora = esServicioHora_(servicio, origen, data);
    const precioBaseRaw = valor_(data, 'precioBase', 'precio_base', 'hourlyRate');
    const precioBaseNum = dineroNumero_(precioBaseRaw);

    let descuentoNum = 0;
    if (codigoReferido && !esHora) {
      descuentoNum = numeroSeguro_(referido && referido.descuento);
      if (!descuentoNum) descuentoNum = numeroSeguro_(config.DESCUENTO_REFERIDO);
      if (!descuentoNum) descuentoNum = numeroSeguro_(valor_(data, 'descuento'));
      if (!descuentoNum) descuentoNum = 5;
    }

    let totalNum = null;
    if (esHora) {
      totalNum = dineroNumero_(valor_(data, 'total', 'hourlyTotal'));
      if (totalNum === null) {
        const horas = numeroSeguro_(valor_(data, 'horas', 'hours')) || 1;
        const tarifa = precioBaseNum !== null ? precioBaseNum : (numeroSeguro_(config.PRECIO_HORA) || 25);
        totalNum = horas * tarifa;
      }
    } else if (precioBaseNum !== null) {
      totalNum = precioBaseNum * (1 - descuentoNum / 100);
    } else {
      totalNum = dineroNumero_(valor_(data, 'total'));
    }

    const precioBaseSheet = precioBaseNum !== null ? precioBaseNum.toFixed(2) : precioBaseRaw;
    const totalSheet = totalNum !== null ? totalNum.toFixed(2) : '';
    const descuentoSheet = descuentoNum ? String(descuentoNum) : '';

    const nombreReferido = referido
      ? referido.nombre
      : (nombreReferidoManual || codigoReferido || '');

    const primerLead = codigoReferido
      ? esPrimerLeadReferido_(sheet, codigoReferido, emailCliente, whatsappCliente)
      : false;

    const primerContrato = codigoReferido && formulario === 'contrato_firmado'
      ? esPrimerContratoReferido_(sheet, codigoReferido, emailCliente, whatsappCliente, servicio)
      : false;

    const id = Utilities.getUuid();

    const fila = [
      id,
      Utilities.formatDate(ahora, zona, 'yyyy-MM-dd'),
      Utilities.formatDate(ahora, zona, 'HH:mm:ss'),
      nombreCliente,
      emailCliente,
      whatsappCliente,
      servicio,
      producto,
      formulario,
      origen,
      nombreReferido,
      codigoReferido,
      descuentoSheet,
      precioBaseSheet,
      totalSheet,
      valor_(data, 'estado') || 'Nuevo',
      '',
      valor_(data, 'notas', 'mensaje', 'message'),
      valor_(data, 'horarioSolicitado', 'horario_solicitado'),
      valor_(data, 'horas', 'hours'),
      valor_(data, 'tipoSesion', 'tipo_sesion', 'recurrence'),
      valor_(data, 'pago', 'payment'),
      valor_(data, 'contrato') || (valor_(data, 'signature') ? 'Aceptado / firma electrónica registrada' : ''),
      'NO',
      Utilities.formatDate(ahora, zona, 'yyyy-MM-dd HH:mm:ss')
    ];

    sheet.appendRow(fila);

    if (referido) {
      actualizarEstadisticasReferido_(ss, referido, {
        primerLead,
        primerContrato,
        esHora,
        total: totalNum
      });
    }

    let emailEnviado = false;
    if (String(config.EMAIL_AUTOMATICO_ACTIVO || '').toUpperCase() === 'SI') {
      enviarCorreos_({
        config,
        data,
        referido,
        nombreReferido,
        codigoReferido,
        precioBase: precioBaseSheet,
        descuento: descuentoSheet,
        total: totalSheet,
        id
      });
      emailEnviado = true;
      sheet.getRange(sheet.getLastRow(), 24).setValue('SI');
    }

    return respuesta_({
      ok: true,
      id,
      referido: nombreReferido || null,
      codigoReferido: codigoReferido || null,
      precioBase: precioBaseSheet || null,
      descuento: descuentoSheet || null,
      total: totalSheet || null,
      emailEnviado
    });

  } catch (error) {
    return respuesta_({ ok: false, error: error.message });
  }
}

function enviarCorreos_({ config, data, referido, nombreReferido, codigoReferido, precioBase, descuento, total, id }) {
  const nombre = valor_(data, 'nombre', 'name') || 'Cliente';
  const email = valor_(data, 'email', 'correo');
  const servicio = valor_(data, 'servicio', 'service') || '';
  const producto = valor_(data, 'producto', 'product') || '';
  const solicitud = servicio || producto || 'Solicitud ESG';
  const whatsapp = valor_(data, 'whatsapp', 'telefono', 'phone');
  const horas = valor_(data, 'horas', 'hours');
  const horario = valor_(data, 'horarioSolicitado', 'horario_solicitado');
  const notas = valor_(data, 'notas', 'mensaje', 'message');
  const formulario = valor_(data, 'formulario', 'form', 'type');
  const origen = valor_(data, 'origen', 'source', 'pagina');
  const pago = valor_(data, 'pago', 'payment');
  const contrato = valor_(data, 'contrato') || (valor_(data, 'signature') ? 'Aceptado / firma electrónica registrada' : '');

  if (config.EMAIL_ADMIN) {
    const asuntoAdmin = `Nueva solicitud ESG — ${solicitud}`;
    const cuerpoAdmin =
      `Nueva solicitud recibida\n\n` +
      `Nombre: ${nombre}\n` +
      `Email: ${email || 'No indicado'}\n` +
      `WhatsApp: ${whatsapp || 'No indicado'}\n\n` +
      `Servicio / producto: ${solicitud}\n` +
      `Formulario: ${formulario || '—'}\n` +
      `Origen: ${origen || '—'}\n\n` +
      `Referido: ${nombreReferido || 'Directo'}\n` +
      `Código referido: ${codigoReferido || '—'}\n\n` +
      `Precio base: ${precioBase ? '$' + Number(precioBase).toFixed(2) : '—'}\n` +
      `Descuento: ${descuento ? descuento + '%' : '—'}\n` +
      `Total: ${total ? '$' + Number(total).toFixed(2) : '—'}\n\n` +
      `Horas: ${horas || '—'}\n` +
      `Horario: ${horario || '—'}\n` +
      `Pago: ${pago || '—'}\n` +
      `Contrato: ${contrato || '—'}\n\n` +
      `Notas: ${notas || '—'}\n\n` +
      `ID del lead: ${id}`;
    MailApp.sendEmail(config.EMAIL_ADMIN, asuntoAdmin, cuerpoAdmin);
  }

  if (email) {
    const asuntoCliente = `Recibimos tu solicitud — ${config.NOMBRE_NEGOCIO || 'ESG Experience'}`;
    let cuerpoCliente =
      `Hola ${nombre},\n\n` +
      `Recibimos correctamente tu solicitud para ${solicitud}.\n\n` +
      `Nuestro equipo revisará la información y te contactará para continuar con el proceso.\n\n`;

    if (codigoReferido) {
      cuerpoCliente += `Tu solicitud quedó registrada con el código de referido ${codigoReferido}.\n`;
      if (descuento) cuerpoCliente += `Beneficio de referido aplicado: ${descuento}% de descuento.\n`;
      if (total) cuerpoCliente += `Total estimado del servicio: $${Number(total).toFixed(2)}.\n`;
      cuerpoCliente += `\n`;
    }

    cuerpoCliente += `Gracias,\n${config.NOMBRE_NEGOCIO || 'ESG Experience'}`;
    MailApp.sendEmail(email, asuntoCliente, cuerpoCliente);
  }

  if (referido && referido.email) {
    const asuntoReferido = `Nuevo lead atribuido a tu enlace ESG`;
    const cuerpoReferido =
      `Hola ${referido.nombre},\n\n` +
      `Se registró un nuevo lead utilizando tu código de referido.\n\n` +
      `Servicio / producto: ${solicitud}\n` +
      `Código: ${codigoReferido || '—'}\n` +
      `Estado: solicitud recibida\n\n` +
      `El seguimiento comercial se realizará desde ESG Experience.`;
    MailApp.sendEmail(referido.email, asuntoReferido, cuerpoReferido);
  }
}

function asegurarReferido_(ss, codigo, nombreManual, config) {
  const sheet = ss.getSheetByName(ESG.REFERIDOS);
  if (!sheet) throw new Error('No existe la pestaña REFERIDOS.');

  const codigoLimpio = normalizarCodigo_(codigo || nombreManual);
  if (!codigoLimpio) return null;

  const nombre = nombreReferido_(nombreManual, codigoLimpio);
  const descuento = numeroSeguro_(config.DESCUENTO_REFERIDO) || 5;
  const comisionDefault = String(config.COMISION_REFERIDO_DEFAULT || '').trim() || 'POR DEFINIR';

  let r = buscarReferido_(ss, codigoLimpio);

  if (r) {
    if (!String(r.nombre || '').trim()) sheet.getRange(r.row, 2).setValue(nombre);
    if (!String(r.estado || '').trim()) sheet.getRange(r.row, 5).setValue('Pendiente');
    if (!String(r.descuento || '').trim()) sheet.getRange(r.row, 6).setValue(descuento);
    if (!String(r.comision || '').trim()) sheet.getRange(r.row, 7).setValue(comisionDefault);
    if (!String(r.notas || '').trim()) {
      sheet.getRange(r.row, 14).setValue('Ficha detectada desde una solicitud web. Completar WhatsApp, email y comisión.');
    }
    return buscarReferido_(ss, codigoLimpio);
  }

  sheet.appendRow([
    codigoLimpio,
    nombre,
    '',
    '',
    'Pendiente',
    descuento,
    comisionDefault,
    '',
    '',
    0,
    0,
    0,
    0,
    'Creado automáticamente desde una solicitud web. Completar WhatsApp, email y comisión.'
  ]);

  return buscarReferido_(ss, codigoLimpio);
}

function buscarReferido_(ss, codigo) {
  if (!codigo) return null;
  const sheet = ss.getSheetByName(ESG.REFERIDOS);
  if (!sheet || sheet.getLastRow() < 2) return null;

  const valores = sheet.getRange(2, 1, sheet.getLastRow() - 1, Math.max(sheet.getLastColumn(), 14)).getValues();
  const buscado = normalizarCodigo_(codigo);

  for (let i = 0; i < valores.length; i++) {
    const codigoFila = normalizarCodigo_(valores[i][0]);
    if (codigoFila === buscado) {
      return {
        row: i + 2,
        codigo: valores[i][0],
        nombre: valores[i][1] || nombreReferido_('', buscado),
        whatsapp: valores[i][2],
        email: valores[i][3],
        estado: valores[i][4],
        descuento: valores[i][5],
        comision: valores[i][6],
        linkESG: valores[i][7],
        linkExterno: valores[i][8],
        leads: numeroSeguro_(valores[i][9]),
        ventas: numeroSeguro_(valores[i][10]),
        comisionPendiente: numeroSeguro_(valores[i][11]),
        comisionPagada: numeroSeguro_(valores[i][12]),
        notas: valores[i][13]
      };
    }
  }
  return null;
}

function actualizarEstadisticasReferido_(ss, referido, info) {
  const sheet = ss.getSheetByName(ESG.REFERIDOS);
  if (!sheet || !referido || !referido.row) return;

  let leads = referido.leads || 0;
  let ventas = referido.ventas || 0;
  let pendiente = referido.comisionPendiente || 0;
  let notas = String(referido.notas || '');

  if (info.primerLead) leads += 1;

  if (info.primerContrato && !info.esHora) {
    ventas += 1;
    const comision = calcularComision_(referido.comision, info.total);
    if (comision !== null) {
      pendiente += comision;
    } else if (!/comisi[oó]n por definir/i.test(notas)) {
      notas = `${notas}${notas ? ' | ' : ''}Comisión por definir para contrato registrado.`;
    }
  }

  sheet.getRange(referido.row, 10).setValue(leads);
  sheet.getRange(referido.row, 11).setValue(ventas);
  sheet.getRange(referido.row, 12).setValue(pendiente ? pendiente.toFixed(2) : 0);
  sheet.getRange(referido.row, 14).setValue(notas);
}

function calcularComision_(regla, total) {
  if (total === null || total === undefined || total === '') return null;
  const txt = String(regla || '').trim();
  if (!txt || /por definir/i.test(txt)) return null;
  const monto = Number(total);
  if (!Number.isFinite(monto)) return null;

  if (txt.includes('%')) {
    const pct = numeroSeguro_(txt.replace('%', ''));
    return pct ? monto * pct / 100 : null;
  }

  if (txt.includes('$')) {
    const fijo = dineroNumero_(txt);
    return fijo;
  }

  const pct = numeroSeguro_(txt);
  return pct ? monto * pct / 100 : null;
}

function esPrimerLeadReferido_(sheet, codigo, email, whatsapp) {
  if (sheet.getLastRow() < 2) return true;
  const datos = sheet.getRange(2, 1, sheet.getLastRow() - 1, 25).getValues();
  const cod = normalizarCodigo_(codigo);
  const em = String(email || '').trim().toLowerCase();
  const ph = normalizarTelefono_(whatsapp);

  return !datos.some(fila => {
    const mismoCod = normalizarCodigo_(fila[11]) === cod;
    const mismoEmail = em && String(fila[4] || '').trim().toLowerCase() === em;
    const mismoPhone = ph && normalizarTelefono_(fila[5]) === ph;
    return mismoCod && (mismoEmail || mismoPhone);
  });
}

function esPrimerContratoReferido_(sheet, codigo, email, whatsapp, servicio) {
  if (sheet.getLastRow() < 2) return true;
  const datos = sheet.getRange(2, 1, sheet.getLastRow() - 1, 25).getValues();
  const cod = normalizarCodigo_(codigo);
  const em = String(email || '').trim().toLowerCase();
  const ph = normalizarTelefono_(whatsapp);
  const svc = String(servicio || '').trim().toLowerCase();

  return !datos.some(fila => {
    const mismoCod = normalizarCodigo_(fila[11]) === cod;
    const mismoEmail = em && String(fila[4] || '').trim().toLowerCase() === em;
    const mismoPhone = ph && normalizarTelefono_(fila[5]) === ph;
    const mismoServicio = String(fila[6] || '').trim().toLowerCase() === svc;
    const esContrato = String(fila[8] || '').trim().toLowerCase() === 'contrato_firmado';
    return mismoCod && (mismoEmail || mismoPhone) && mismoServicio && esContrato;
  });
}

function obtenerConfiguracion_(ss) {
  const sheet = ss.getSheetByName(ESG.CONFIG);
  if (!sheet) throw new Error('No existe la pestaña CONFIGURACION.');
  if (sheet.getLastRow() < 2) return {};

  const datos = sheet.getRange(2, 1, sheet.getLastRow() - 1, 2).getValues();
  const config = {};
  datos.forEach(fila => {
    const clave = String(fila[0] || '').trim();
    if (clave) config[clave] = fila[1];
  });
  return config;
}

function obtenerSpreadsheet_() {
  const id = PropertiesService.getScriptProperties().getProperty(ESG.PROP_SHEET_ID);
  if (!id) throw new Error('Primero ejecuta la función configurarESG una vez.');
  return SpreadsheetApp.openById(id);
}

function obtenerDatos_(e) {
  if (!e) return {};
  if (e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); } catch (error) {}
  }
  return e.parameter || {};
}

function valor_(obj, ...claves) {
  for (const clave of claves) {
    if (obj && obj[clave] !== undefined && obj[clave] !== null && String(obj[clave]).trim() !== '') {
      return obj[clave];
    }
  }
  return '';
}

function normalizarCodigo_(valor) {
  return String(valor || '').trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9_-]/g, '');
}

function nombreReferido_(manual, codigo) {
  const txt = String(manual || '').trim();
  if (txt && normalizarCodigo_(txt) !== codigo) return txt;
  return String(codigo || '').replace(/[-_]+/g, ' ').replace(/\b\w/g, m => m.toUpperCase());
}

function normalizarTelefono_(valor) {
  return String(valor || '').replace(/\D+/g, '');
}

function dineroNumero_(valor) {
  if (valor === null || valor === undefined || valor === '') return null;
  const limpio = String(valor).replace(/[^0-9.,-]/g, '').replace(/,/g, '');
  const n = Number(limpio);
  return Number.isFinite(n) ? n : null;
}

function numeroSeguro_(valor) {
  const n = Number(String(valor === undefined || valor === null ? '' : valor).replace(/[^0-9.-]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

function esServicioHora_(servicio, origen, data) {
  const texto = `${servicio || ''} ${origen || ''} ${valor_(data, 'tipoSesion', 'tipo_sesion') || ''}`.toLowerCase();
  return texto.includes('acompañamiento esg por hora') || texto.includes('/contrato/hora') || texto.includes('por hora');
}

function respuesta_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
