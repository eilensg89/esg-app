const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const WHATSAPP = '17863032835';

const services = {
  dlp: {
    id:'dlp', area:'identidad', name:'De Logo a Personaje™', short:'Sistema visual inicial + personaje reutilizable + dirección para continuar creando.',
    price:'$250', priceValue:250, fixed:true, perceived:'Valor percibido: $500',
    problem:'Convierte una marca básica o dispersa en un sistema visual reutilizable: dirección, personaje consistente, bases de contenido y una demostración audiovisual que enseña cómo puede cobrar vida la identidad.',
    ideal:[
      'Marcas que todavía no tienen una línea visual clara o sienten que cada publicación parece de una marca distinta.',
      'Negocios y marcas personales que quieren usar un personaje en posts, promociones, anuncios o videos sin empezar de cero en cada pieza.',
      'Proyectos que quieren una identidad utilizable sin entrar todavía en un proceso corporativo completo de branding.'
    ],
    includes:[
      'Auditoría Visual Express.',
      'Brief Estratégico de Marca ESG™.',
      'Ficha Visual de Marca.',
      'Logo base o revisión puntual del logo existente.',
      'Character Master Sheet completo.',
      '9 stickers personalizados.',
      '3 covers maestros con prompts reutilizables.',
      '1 ícono base para historias destacadas.',
      'Prompt maestro del personaje + reglas de consistencia + negative prompt.',
      '3 prompts de animación: personaje, anuncio/promoción e imagen a video.',
      'ESG Quick Content System™.',
      '24 segundos totales de aplicación audiovisual.',
      'Portal web de entrega.',
      'Entrenamiento del sistema.',
      '1 ronda de revisión/corrección dentro del alcance.'
    ],
    sections:[
      {title:'Auditoría + Mini Entrevista de Marca', body:`Antes de diseñar, ESG busca información real sobre el negocio, cliente, experiencia, problema que resuelve, objetivos, identidad existente y cómo quiere verse. La Auditoría Visual Express identifica qué puede mantenerse, qué necesita ajustes y cómo convertir lo existente en una base visual aplicable.`},
      {title:'Brief Estratégico de Marca ESG™', list:[
        'Nombre oficial y definición en una frase.','Qué hace, qué vende y para quién.','Público objetivo principal y necesidad que ayuda a resolver.','Diferencial principal y qué debe transmitir.','3–5 atributos de personalidad.','Mensaje principal y CTA.','Propuesta de biografía para redes.','Tono de comunicación, enfoques recomendados y qué evitar.','Tres columnas de contenido: Marca/Conexión · Valor/Información · Promoción/Acción.','12 ideas iniciales: 4 por cada columna.'
      ]},
      {title:'Ficha Visual de Marca', list:[
        'Logo principal existente o logo base/revisión puntual.','Paleta de colores con códigos HEX.','Tipografía principal y secundaria.','Estilo visual y tratamiento recomendado de imágenes.','Elementos gráficos recurrentes y referencia de composición.','Personaje integrado dentro del universo visual.'
      ], note:'El logo incluido no equivale a un proceso ilimitado de branding corporativo ni a múltiples rondas de exploración.'},
      {title:'Character Master Sheet — núcleo del servicio', list:[
        'Identidad: nombre si aplica, rol, personalidad, edad visual aproximada y estilo general.','Rasgos: piel, cabello, ojos, maquillaje cuando aplique, proporciones y características principales.','Anclas fijas: peinado, accesorios, joyería, uniforme/vestuario base, colores recurrentes y elementos que no deben cambiar.','Variables: ropa, pose, fondo, actividad, producto, expresión y otros elementos que sí pueden adaptarse.','Vistas: frontal, 3/4, perfil y cuerpo completo.','Expresiones: neutral, sonrisa, promocional/entusiasta y profesional según el proyecto.','Color: referencias de cabello, piel, ojos, vestuario y accesorios.','Prompt maestro: identidad + restricciones + negative prompt + reglas de consistencia + variables editables.'
      ]},
      {title:'Mini Kit Visual', list:['9 stickers personalizados.','Cover maestro 1 — Marca/Conexión + prompt.','Cover maestro 2 — Educativo/Valor + prompt.','Cover maestro 3 — Promoción/Acción + prompt.','1 ícono base para highlights.']},
      {title:'Sistema de prompts y creación rápida', list:['Prompt maestro del personaje.','3 prompts de covers.','Prompt rápido para publicaciones/flyers.','3 prompts de animación: personaje · anuncio/promoción · imagen a video.','ESG Quick Content System™: Imagen → prompt → referencia de marca/personaje → generar → ajustar → publicar. Video → imagen → prompt de animación → animar → texto/audio si aplica → exportar.']},
      {title:'Aplicación audiovisual — 24 segundos totales', body:'El cliente elige una distribución:', table:[['Configuración','Entrega'],['Microvideos','4 videos de 6 segundos'],['Combinados','2 videos de 12 segundos'],['Pieza principal','1 video de hasta 24 segundos']], note:'Las imágenes, pruebas, escenas y variantes utilizadas para construir los videos son recursos internos de producción. No se entregan automáticamente como publicaciones adicionales.'},
      {title:'Portal de entrega', body:'Organiza los activos finales del proyecto. Es una experiencia de entrega y no sustituye una web comercial con dominio, catálogo, pagos, automatizaciones o formularios.'}
    ],
    excludes:['Branding corporativo ilimitado.','Rediseño completo con múltiples rutas creativas.','Rondas ilimitadas de logo.','Producción mensual incluida.','Entrega automática de pruebas, escenas o variantes internas de producción.'],
    ctaNote:'La continuidad de $250/mes solo está disponible después de completar este servicio.'
  },
  continuidad: {
    id:'continuidad', area:'identidad', name:'Continuidad exclusiva™', short:'Contenido mensual sobre el sistema ya creado.',
    price:'$250/mes', fixed:false, gated:true,
    problem:'Mantiene activa la identidad creada en De Logo a Personaje™ sin reconstruir el personaje o la estrategia cada mes.',
    ideal:['Clientes que ya completaron De Logo a Personaje™.','Marcas que necesitan constancia sin perder coherencia.'],
    includes:['Solo disponible después de completar De Logo a Personaje™.','Trabaja sobre personaje, plantillas e identidad ya aprobados.'],
    sections:[
      {title:'Modalidad A — Contenido de Marca', list:['4 reels de hasta 15 s.','2 carruseles de 7 slides.','6 posts estáticos.','Total: 12 publicaciones.','Producción aproximada: ~32 imágenes.']},
      {title:'Modalidad B — Contenido Promocional', list:['4 reels de hasta 15 s.','12 flyers/posts estáticos.','Total: 16 publicaciones.','Producción aproximada: ~24 imágenes.'], note:'Pensada especialmente para emisoras, eventos, restaurantes, salones y negocios con promociones frecuentes.'}
    ],
    excludes:['Rediseño mensual del personaje.','Nueva estrategia completa cada mes.','Cambios ilimitados de identidad.'],
    noContract:true
  },
  video: {
    id:'video', area:'made', name:'Video Visual Individual', short:'Una pieza puntual para probar ESG Made o lanzar una promoción.', price:'$57 primera vez · $87 regular', priceValue:57, fixed:true, priceOptions:[{label:'Primera vez',value:57,display:'$57'},{label:'Precio regular',value:87,display:'$87'}],
    problem:'Produce un video independiente con IA y dirección visual sin contratar una sesión completa.',
    ideal:['Probar el servicio.','Lanzar una pieza puntual.','Presentar una promoción.','Producir un video independiente.'],
    includes:['1 video visual final de 15–30 segundos.','Rostro generado con IA cuando corresponda al concepto.','Transiciones suaves.','Música sugerida o integrada.','Subtítulos opcionales.','Kit Visual de Marca ESG™.','1 ronda de revisión/corrección dentro del alcance.'],
    excludes:['Sesión completa de imágenes.','Múltiples universos visuales.','Voz humana o tratamiento de anuncio comercial, salvo add-on.']
  },
  mini: {
    id:'mini', area:'made', name:'Mini Paquete Visual', short:'Dos universos visuales para explorar dirección y obtener volumen de contenido corto.', price:'$100', priceValue:100, fixed:true,
    problem:'Permite comparar dos líneas visuales y salir con contenido usable sin construir todavía una producción grande.',
    ideal:['Marcas que quieren explorar dos direcciones visuales.','Negocios que necesitan volumen de piezas cortas.'],
    includes:['Universo 1: 5 imágenes + 5 videos de 6 segundos.','Universo 2: 5 imágenes + 5 videos de 6 segundos.','Total: 10 imágenes + 10 videos = 20 piezas finales.','Dirección estética básica.','Kit Visual de Marca ESG™.','1 ronda de revisión/corrección.'],
    sections:[{title:'Entrega de referencia', body:'5 días laborables una vez recibidos pago, materiales y dirección aprobada. Los retrasos del cliente en materiales, respuestas o aprobaciones desplazan el calendario.'}],
    excludes:['Voz humana incluida.','Tratamiento de anuncio comercial incluido.','Revisiones ilimitadas.']
  },
  sesion: {
    id:'sesion', area:'made', name:'Sesión Visual Digital', short:'Cuatro universos organizados con imágenes finales y dos producciones audiovisuales nuevas.', price:'$200', priceValue:200, fixed:true,
    problem:'Crea una producción más completa sin reutilizar las mismas imágenes como si fueran contenido distinto.',
    ideal:['Marcas que necesitan imágenes listas para publicar y dos videos construidos con escenas nuevas.'],
    includes:['4 universos organizados.','Universo 1: 6 imágenes finales.','Universo 2: 6 imágenes finales.','Universo 3: 6 escenas nuevas para Video 1.','Video 1: 6 clips de 5 s → 1 video final de 30 s.','Universo 4: 6 escenas nuevas para Video 2.','Video 2: 6 clips de 5 s → 1 video final de 30 s.','Resultado final: 12 imágenes finales + 2 videos finales de 30 s.','Kit Visual de Marca ESG™.','Referencia de estilo visual.','1 ronda de revisión/corrección.'],
    sections:[{title:'Recursos internos de producción', body:'Las 12 escenas creadas para construir los videos son material de producción. No se cuentan automáticamente como 12 imágenes finales adicionales, salvo acuerdo expreso.'}],
    excludes:['Entrega automática de las 12 escenas internas como imágenes finales.','Voz humana incluida.','Tratamiento de anuncio comercial incluido.']
  },
  pro: {
    id:'pro', area:'made', name:'Paquete Visual Pro', short:'La Sesión Visual Digital elevada con voz, tratamiento comercial y cortes extra.', price:'$400', priceValue:400, fixed:true,
    problem:'Combina producción visual completa con una dirección más comercial para anuncios, teasers y promoción.',
    ideal:['Marcas que quieren contenido visual y una capa de comunicación comercial lista para usar.'],
    includes:['Todo lo incluido en la Sesión Visual Digital de $200.','12 imágenes visuales finales.','2 videos finales de 30 s.','Voz humana incluida en los 2 videos principales.','Tratamiento de anuncio comercial en los 2 videos principales.','2 cortes adicionales de 15 s.','2 propuestas de CTA/copy comercial.','Kit Visual de Marca ESG™.','1 ronda de revisión/corrección.'],
    sections:[{title:'Por qué el Pro sí tiene ventaja', body:'El paquete de $200 más voz (+$50 por video) y tratamiento comercial (+$50 por video) ya suma $400. El Pro conserva ese valor y añade 2 cortes de 15 s + 2 propuestas de CTA/copy.'}],
    excludes:['Revisiones ilimitadas.','Nueva estrategia completa fuera del alcance.']
  },
  webEssential: {
    id:'webEssential', area:'web', name:'Web Esencial', short:'Para presentar tu negocio, servicios y contacto de forma profesional.', price:'$250', priceValue:250, fixed:true,
    problem:'Permite que una persona encuentre el negocio, entienda qué ofrece y sepa cómo contactar o dar el siguiente paso.',
    ideal:['Negocios de servicios.','Profesionales.','Marcas que necesitan presencia clara sin catálogo complejo.'],
    includes:['Diseño responsive móvil y desktop.','Publicación técnica en GitHub/Vercel cuando sea el entorno aprobado.','HTTPS y configuración técnica de publicación.','Conexión de dominio existente del cliente.','Botón de WhatsApp y enlaces de redes sociales.','SEO técnico básico.','Títulos y meta descripciones básicas.','Sitemap y robots.txt.','Conexión inicial con Google Search Console e indexación.','Google Analytics básico cuando corresponda.','Kit Visual de Marca ESG™.','1 ronda de revisión/corrección dentro del alcance.'],
    sections:[{title:'Costos externos', body:'Dominio, servicios premium, cuentas de terceros, suscripciones y comisiones externas no están incluidos en el precio de ESG.'}],
    excludes:['Catálogo con inventario.','Carrito e-commerce.','Shopify.','Suscripciones o servicios externos del cliente.']
  },
  catalogFixed: {
    id:'catalogFixed', area:'web', name:'Catálogo fijo', short:'Catálogo organizado para ofertas estables sin inventario ni administración continua.', price:'$350', priceValue:350, fixed:true,
    problem:'Organiza productos o servicios estables en categorías y fichas, con consulta o pedido por WhatsApp.',
    ideal:['Pastelerías.','Menús.','Servicios.','Catálogos de referencia.','Negocios cuyos productos o precios no requieren control de inventario en tiempo real.'],
    includes:['Categorías para organizar la oferta.','Fichas de productos o servicios con información y precio cuando aplique.','Presentación visual coherente con la marca.','Botón de consulta/pedido por WhatsApp.','Kit Visual de Marca ESG™.','1 ronda de revisión/corrección.'],
    sections:[{title:'Cantidad de productos', body:'La matriz vigente no fija un límite público para Catálogo fijo. Si el volumen cambia materialmente el trabajo, el alcance se revisa antes del acuerdo.'}],
    excludes:['Inventario en tiempo real.','Carrito real.','Variaciones complejas.','Panel de administración propio incluido.','E-commerce completo.']
  },
  catalogWhats: {
    id:'catalogWhats', area:'web', name:'Catálogo a WhatsApp', short:'Catálogo interactivo con navegación y cierre de consulta o pedido por WhatsApp.', price:'$500', priceValue:500, fixed:true,
    problem:'Ofrece una experiencia más navegable antes de que el cliente llegue a WhatsApp.',
    ideal:['Negocios que necesitan categorías, filtros, fichas y una ruta clara hacia la conversación de venta.'],
    includes:['Categorías.','Subcategorías cuando el catálogo lo requiera.','Filtros o navegación para facilitar la búsqueda.','Fichas individuales de producto/servicio.','Selección o recorrido orientado a consulta/pedido.','Cierre en WhatsApp con información preparada para continuar la conversación.','Kit Visual de Marca ESG™.','1 ronda de revisión/corrección.'],
    sections:[{title:'Administrador opcional', body:'Si el cliente quiere actualizar el catálogo por sí mismo, puede añadir Administrador propio por +$250. Total: $750. Si prefiere que ESG haga cambios, puede utilizar mantenimiento y no necesita administrador.'}],
    excludes:['Administrador propio incluido.','Shopify.','Carrito e-commerce completo.','Inventario automático.']
  },
  catalogAdmin: {
    id:'catalogAdmin', area:'web', name:'Catálogo WhatsApp + Administrador', short:'Catálogo interactivo más capacidad para que el cliente actualice su propio catálogo.', price:'$750', priceValue:750, fixed:true,
    problem:'Combina la experiencia de Catálogo a WhatsApp con administración propia.',
    ideal:['Negocios que cambian productos con frecuencia y quieren gestionar su catálogo directamente.'],
    includes:['Todo lo incluido en Catálogo a WhatsApp.','Administrador propio (+$250).','Capacidad de actualización por parte del cliente.','Kit Visual de Marca ESG™.','1 ronda de revisión/corrección.'],
    excludes:['Shopify.','Aplicaciones o servicios externos no acordados.']
  },
  payments: {
    id:'payments', area:'web', name:'Pagos simples', short:'Botón o enlace de cobro fijo sin inventario, variaciones ni carrito.', price:'+$50', priceValue:50, fixed:false, addOn:true,
    problem:'Añade una ruta de cobro fija a una web o catálogo cuando no se necesita e-commerce.',
    ideal:['Consultas de precio fijo.','Reservas o cobros definidos.'],
    includes:['Enlace o botón de pago conectado al proveedor aprobado: Stripe, Square o PayPal según disponibilidad/configuración del cliente.'],
    excludes:['Inventario.','Tallas.','Colores.','Cantidades dinámicas.','Carrito.','Gestión de pedidos tipo tienda.'],
    sections:[{title:'Regla clara', body:'Pago simple no es e-commerce. Cuando hay inventario, variantes, carrito o administración de productos, la ruta correcta es Shopify u otra solución de tienda aprobada.'},{title:'Comisiones', body:'Las comisiones y condiciones del procesador pertenecen al cliente/proveedor.'}],
    noContract:true
  },
  shopify: {
    id:'shopify', area:'web', name:'Shopify', short:'Montaje inicial de tienda Shopify con hasta 50 productos cargados.', price:'Desde $200', priceValue:200, fixed:false,
    problem:'Crea una tienda para vender productos cuando existen necesidades reales de e-commerce.',
    ideal:['Negocios con inventario, variantes, carrito o administración de productos.'],
    includes:['Montaje inicial de Shopify dentro del alcance acordado.','Carga de hasta 50 productos.','Kit Visual de Marca ESG™.','Uso del portal independiente de productos.','1 ronda de revisión/corrección.'],
    sections:[{title:'Puede requerir cotización adicional', list:['Muchas variantes.','Configuraciones complejas.','Migraciones.','Aplicaciones pagadas.','Automatizaciones.','Integraciones especiales.','Requerimientos que aumenten el trabajo.']},{title:'Costos Shopify', body:'La suscripción de Shopify, dominio, aplicaciones y servicios externos los paga el cliente directamente.'}],
    excludes:['Suscripción Shopify.','Dominio.','Apps pagadas.','Servicios externos.','Precio fijo universal para tiendas complejas.']
  },
  maintenance: {
    id:'maintenance', area:'web', name:'Mantenimiento Web', short:'Actualizaciones según cantidad, frecuencia y complejidad.', price:'Desde $50/mes', priceValue:50, fixed:false,
    problem:'Mantiene actualizada una web o catálogo cuando el cliente prefiere que ESG realice cambios.',
    ideal:['Webs con ajustes periódicos.','Catálogos con cambios frecuentes.','Sistemas Shopify que requieren soporte recurrente.'],
    includes:['Precio definido según cantidad de cambios, frecuencia y complejidad.'],
    sections:[{title:'Cómo se cotiza', body:'Una web informativa con ajustes pequeños puede permanecer cerca del precio base. Un catálogo con cambios frecuentes o gran volumen puede requerir una cotización superior. Shopify y sistemas complejos pueden requerir mantenimiento específico.'}],
    excludes:['Tabla rígida de mantenimiento.','Cambios ilimitados.'],
  }
};

const faq = [
  ['¿Tengo que completar una entrevista antes de contratar?','No. Si el alcance y el precio ya están claros puedes firmar primero y completar la entrevista después. También puedes explicar primero tu proyecto si necesitas confirmar alcance.'],
  ['¿Puedo pagar en dos partes?','Sí. Si eliges dos pagos, la producción y la entrega también se dividen. La segunda fase no se entrega antes de recibir el segundo pago. La división concreta de fases se establece en el acuerdo cuando corresponda.'],
  ['¿Cuántas revisiones incluye cada entrega?','Una ronda de revisión/corrección dentro del alcance aprobado. Un nuevo concepto, una nueva estrategia o piezas nuevas se cotizan aparte.'],
  ['¿Cómo puedo pagar?','Zelle o PayPal. Si quieres pagar con tarjeta, solicitas el enlace por WhatsApp y ESG envía manualmente un Stripe Payment Link. Esta aplicación no solicita ni almacena números de tarjeta.'],
  ['¿El Kit Visual se cobra aparte?','No en ESG Made ni en Web ESG. El Kit Visual de Marca ESG™ está incluido según el alcance. La antigua Base Visual de Marca como add-on pagado fue eliminada.'],
  ['¿Los dominios y suscripciones externas están incluidos?','No. Dominio, Shopify, aplicaciones, servicios premium, comisiones y otros proveedores externos son costos del cliente cuando aplican.'],
  ['¿Las imágenes utilizadas para crear mis videos también se entregan?','No automáticamente cuando son recursos internos de producción. El entregable es el definido en el checklist de cada servicio.'],
  ['¿El portal de entrega de De Logo a Personaje es una web comercial?','No. Es un portal organizado de entrega de activos. Una web comercial, catálogo, pagos o Shopify pertenecen a Web ESG.'],
  ['¿Cuántos segundos de video incluye De Logo a Personaje™?','24 segundos totales, distribuidos como 4×6 s, 2×12 s o 1×24 s.'],
  ['¿Puedo contratar la continuidad de $250/mes directamente?','No. Es exclusiva para clientes que ya completaron De Logo a Personaje™.'],
  ['¿El Mini Paquete entrega 20 piezas?','Sí: 10 imágenes + 10 videos de 6 segundos.'],
  ['¿La Sesión de $200 entrega 24 imágenes?','No. Entrega 12 imágenes finales + 2 videos de 30 segundos. Las escenas adicionales creadas para los videos son recursos de producción.'],
  ['¿Shopify cuesta siempre $200?','No. Empieza en $200 como precio inicial de lanzamiento. Incluye hasta 50 productos en la base y puede aumentar según complejidad, variantes, migraciones, apps, automatizaciones o integraciones.']
];

const madeIds = ['video','mini','sesion','pro'];
const webIds = ['webEssential','catalogFixed','catalogWhats','shopify','maintenance'];

function escapeHtml(value=''){
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch]));
}
function showToast(msg){
  const el=$('#toast'); el.textContent=msg; el.classList.add('show'); clearTimeout(showToast.t); showToast.t=setTimeout(()=>el.classList.remove('show'),2600);
}
function openDialog(id){ const d=$(id); if(d && !d.open) d.showModal(); }
function closeDialogs(){ $$('dialog[open]').forEach(d=>d.close()); }

function renderCards(){
  const made=$('#made-grid');
  made.innerHTML=madeIds.map(id=>cardTemplate(services[id], id==='pro')).join('');
  const web=$('#web-grid');
  web.innerHTML=webIds.map(id=>cardTemplate(services[id], id==='catalogWhats')).join('');
}
function cardTemplate(s, featured=false){
  const bullets=s.includes.slice(0,4).map(x=>`<li>${escapeHtml(x)}</li>`).join('');
  return `<article class="service-card reveal ${featured?'featured':''}">
    <span class="service-meta">${escapeHtml(s.area==='made'?'ESG MADE™':'WEB ESG™')}</span>
    <div class="service-price">${escapeHtml(s.price)}</div>
    <h3>${escapeHtml(s.name)}</h3>
    <p>${escapeHtml(s.short)}</p>
    <ul>${bullets}</ul>
    <div class="card-actions">
      <button class="btn ${s.area==='made'?'btn-gold':'btn-dark'}" data-service-detail="${s.id}">Ver detalle</button>
      ${s.noContract?'':`<button class="btn ${s.area==='made'?'btn-ghost':'btn-outline-dark'}" ${s.fixed?`data-contract="${s.id}"`:`data-brief-service="${s.id}"`}>${s.fixed?'Contratar':'Explicar proyecto'}</button>`}
    </div>
  </article>`;
}

function renderFAQ(){
  $('#faq-list').innerHTML=faq.map(([q,a],i)=>`<div class="faq-item reveal"><button class="faq-question" aria-expanded="false"><span>${escapeHtml(q)}</span><span>+</span></button><div class="faq-answer">${escapeHtml(a)}</div></div>`).join('');
}

function renderGuide(){
  const options=[
    ['Mi marca no se ve consistente.','dlp'],['Quiero un personaje para representar mi marca.','dlp'],['Necesito imágenes o videos.','made'],['Necesito contenido visual para promocionar.','made'],['Necesito una web para presentar mi negocio.','webEssential'],['Necesito mostrar productos o servicios.','catalogChoice'],['Quiero que los pedidos terminen en WhatsApp.','catalogWhats'],['Necesito vender con una tienda Shopify.','shopify'],['No estoy segura / quiero explicar mi proyecto.','custom']
  ];
  $('#guide-options').innerHTML=options.map(([label,target])=>`<button class="guide-option" data-guide-target="${target}"><strong>${escapeHtml(label)}</strong><span>Ver la ruta recomendada.</span></button>`).join('');
}
function showGuideResult(target){
  const out=$('#guide-result'); let html='';
  if(target==='made') html=`<h3>Tu ruta es ESG Made™</h3><p>Compara el Video Individual, Mini, Sesión y Pro según volumen y nivel de producción.</p><button class="btn btn-dark" data-result-jump="made">Ver ESG Made</button>`;
  else if(target==='catalogChoice') html=`<h3>Conviene comparar dos tipos de catálogo</h3><p>Catálogo fijo ($350) para oferta estable sin inventario, o Catálogo a WhatsApp ($500) si necesitas navegación, filtros y una experiencia más interactiva antes de la conversación.</p><button class="btn btn-dark" data-result-jump="web">Comparar Web ESG</button>`;
  else if(target==='custom') html=`<h3>Cuéntanos primero tu proyecto</h3><p>No generaremos un contrato definitivo hasta confirmar alcance y precio.</p><button class="btn btn-dark" data-result-brief="custom">Abrir brief</button>`;
  else {
    const s=services[target]; html=`<h3>${escapeHtml(s.name)}</h3><p>${escapeHtml(s.problem)}</p><div class="card-actions"><button class="btn btn-dark" data-result-detail="${s.id}">Ver detalle</button>${s.fixed?`<button class="btn btn-outline-dark" data-result-contract="${s.id}">Contratar</button>`:`<button class="btn btn-outline-dark" data-result-brief="${s.id}">Explicar proyecto</button>`}</div>`;
  }
  out.innerHTML=html; out.hidden=false; out.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function detailSection(sec){
  let inner='';
  if(sec.body) inner+=`<p>${escapeHtml(sec.body)}</p>`;
  if(sec.list) inner+=`<ul>${sec.list.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul>`;
  if(sec.table) inner+=`<table class="detail-table">${sec.table.map((r,i)=>`<tr>${r.map(c=>`<${i===0?'th':'td'}>${escapeHtml(c)}</${i===0?'th':'td'}>`).join('')}</tr>`).join('')}</table>`;
  if(sec.note) inner+=`<div class="detail-note">${escapeHtml(sec.note)}</div>`;
  return `<div class="detail-panel ${sec.full?'full':''}"><h4>${escapeHtml(sec.title)}</h4>${inner}</div>`;
}
function showServiceDetail(id){
  const s=services[id]; if(!s) return;
  const includes=`<div class="detail-panel"><h4>Qué incluye</h4><ul>${s.includes.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></div>`;
  const ideal=`<div class="detail-panel"><h4>Para quién funciona</h4><ul>${s.ideal.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></div>`;
  const excludes=`<div class="detail-panel full"><h4>Límites / qué no incluye</h4><ul>${(s.excludes||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></div>`;
  const sections=(s.sections||[]).map(detailSection).join('');
  $('#service-detail').innerHTML=`<div class="service-detail">
    <div class="service-detail-top"><div><span class="eyebrow dark">${escapeHtml(s.area==='identidad'?'IDENTIDAD ESG':s.area==='made'?'ESG MADE™':'WEB ESG™')}</span><h2 class="service-detail-title">${escapeHtml(s.name)}</h2>${s.perceived?`<span class="service-badge muted">${escapeHtml(s.perceived)}</span>`:''}</div><div class="service-detail-price">${escapeHtml(s.price)}</div></div>
    <p class="service-intro">${escapeHtml(s.problem)}</p>
    <div class="detail-grid">${ideal}${includes}${sections}${excludes}</div>
    ${s.ctaNote?`<div class="detail-note">${escapeHtml(s.ctaNote)}</div>`:''}
    <div class="detail-actions">
      ${s.noContract||s.gated?'':s.fixed?`<button class="btn btn-dark" data-dialog-contract="${s.id}">Contratar ahora</button>`:`<button class="btn btn-dark" data-dialog-brief="${s.id}">Explicar mi proyecto</button>`}
      <button class="btn btn-outline-dark" data-dialog-brief="${s.id}">${s.fixed?'Quiero explicar primero mi proyecto':'Necesito una cotización'}</button>
    </div>
  </div>`;
  openDialog('#service-dialog');
}

const compareMade = {
  headers:['Característica','Video','Mini','Sesión','Pro'],
  rows:[
    ['Precio','$57 primera vez / $87 regular','$100','$200','$400'],
    ['Universos','1 pieza','2','4','4 + dirección comercial'],
    ['Imágenes finales','—','10','12','12'],
    ['Videos','1','10','2','2 + 2 cortes'],
    ['Duración','15–30 s','10 × 6 s','2 × 30 s','2 × 30 s + 2 × 15 s'],
    ['Voz humana','Add-on','Add-on','Add-on','Incluida en 2 videos'],
    ['Tratamiento comercial','Add-on','Add-on','Add-on','Incluido en 2 videos'],
    ['CTA/copy','—','—','—','2 propuestas'],
    ['Kit Visual','Sí','Sí','Sí','Sí'],
    ['Revisión','1','1','1','1']
  ]
};
const compareWeb = {
  headers:['Característica','Web Esencial','Catálogo fijo','Catálogo WhatsApp','Catálogo + Admin','Shopify'],
  rows:[
    ['Precio','$250','$350','$500','$750','Desde $200'],
    ['Uso principal','Presentar negocio','Oferta estable','Explorar + cerrar en WhatsApp','WhatsApp + gestión propia','E-commerce'],
    ['Categorías','Según estructura','Sí','Sí','Sí','Sí'],
    ['Filtros','No necesarios','No necesariamente','Sí cuando aplique','Sí cuando aplique','Según tienda'],
    ['WhatsApp','Sí','Sí','Sí','Sí','Puede integrarse'],
    ['Inventario','No','No','No','No','Sí / según configuración'],
    ['Administrador','No','No','No','Sí','Shopify'],
    ['Pagos','Add-on fijo +$50 si aplica','Add-on fijo +$50 si aplica','Add-on fijo +$50 si aplica','Según alcance','E-commerce'],
    ['Productos incluidos','No aplica','Sin límite público fijado','Sin límite público fijado','Sin límite público fijado','Hasta 50 en base'],
    ['Kit Visual','Sí','Sí','Sí','Sí','Sí'],
    ['Revisión','1','1','1','1','1']
  ]
};
function renderCompare(kind='made'){
  const data=kind==='made'?compareMade:compareWeb;
  $('#compare-output').innerHTML=`<table class="compare-table"><thead><tr>${data.headers.map(h=>`<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${data.rows.map(r=>`<tr>${r.map(c=>`<td>${escapeHtml(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

const contractState = {serviceId:null,step:0,client:{},paymentMode:null,accepted:false,signature:false,signatureData:null,selectedPrice:null};
const contractSteps = ['Precio','Datos','Pago','Acuerdo','Firma','Método','Siguiente paso'];
function flowProgress(){
  $('#flow-progress').innerHTML=contractSteps.map((x,i)=>`<span class="flow-dot ${i<=contractState.step?'active':''}" title="${x}"></span>`).join('');
}
function startContract(serviceId){
  const s=services[serviceId]; if(!s) return;
  if(!s.fixed){ startBrief(serviceId); return; }
  contractState.serviceId=serviceId; contractState.step=0; contractState.client={}; contractState.paymentMode=null; contractState.accepted=false; contractState.signature=false; contractState.signatureData=null; contractState.selectedPrice=s.priceOptions?null:{display:s.price,value:s.priceValue};
  closeDialogs(); renderContractStep(); openDialog('#contract-dialog');
}
function renderContractStep(){
  flowProgress(); const s=services[contractState.serviceId]; const root=$('#contract-flow');
  if(contractState.step===0){
    root.innerHTML=`<div class="flow-panel"><span class="eyebrow dark">Ruta A · Contratar ahora</span><h2>${escapeHtml(s.name)}</h2><p>Antes de pedir datos, confirma que leíste el alcance y estás de acuerdo con el precio vigente.</p>${s.priceOptions?`<div class="choice-grid">${s.priceOptions.map(o=>`<button class="choice-card ${contractState.selectedPrice?.value===o.value?'selected':''}" data-price-option="${o.value}" data-price-display="${o.display}"><strong>${o.label}</strong><p>${o.display}</p></button>`).join('')}</div>`:''}<div class="flow-summary"><dl><dt>Servicio</dt><dd>${escapeHtml(s.name)}</dd><dt>Precio</dt><dd>${escapeHtml(contractState.selectedPrice?.display||s.price)}</dd><dt>Revisión</dt><dd>1 ronda dentro del alcance</dd></dl></div><div class="check-row"><input id="accept-price" type="checkbox"><label for="accept-price">He revisado el detalle del servicio y estoy de acuerdo con el precio seleccionado.</label></div><div class="flow-actions"><button class="btn btn-outline-dark" data-flow-detail>Volver al detalle</button><div class="right"><button class="btn btn-soft" data-flow-brief>Quiero explicar primero mi proyecto</button><button class="btn btn-dark" data-flow-next>Continuar</button></div></div></div>`;
  } else if(contractState.step===1){
    root.innerHTML=`<div class="flow-panel"><span class="eyebrow dark">Datos mínimos</span><h2>Solo lo necesario para el acuerdo</h2><p>El brief de producción se completa después. Aquí no pedimos materiales ni información extensa.</p><form id="client-form" class="form-grid"><div class="form-field"><label>Nombre completo *</label><input name="name" required value="${escapeHtml(contractState.client.name||'')}"></div><div class="form-field"><label>Nombre del negocio *</label><input name="business" required value="${escapeHtml(contractState.client.business||'')}"></div><div class="form-field"><label>WhatsApp *</label><input name="whatsapp" required value="${escapeHtml(contractState.client.whatsapp||'')}"></div><div class="form-field"><label>Email *</label><input name="email" type="email" required value="${escapeHtml(contractState.client.email||'')}"></div></form><div class="flow-actions"><button class="btn btn-outline-dark" data-flow-back>Atrás</button><button class="btn btn-dark" data-flow-next>Continuar</button></div></div>`;
  } else if(contractState.step===2){
    root.innerHTML=`<div class="flow-panel"><span class="eyebrow dark">Modalidad de pago</span><h2>Elige cómo quieres dividir la inversión</h2><div class="choice-grid"><button class="choice-card ${contractState.paymentMode==='full'?'selected':''}" data-pay-mode="full"><strong>100% por adelantado</strong><p>La producción inicia cuando ESG recibe el pago y la información necesaria.</p></button><button class="choice-card ${contractState.paymentMode==='two'?'selected':''}" data-pay-mode="two"><strong>2 pagos</strong><p>La producción y entrega también se dividen. La fase 2 no se entrega antes del segundo pago.</p></button></div><div class="detail-note">Si eliges 2 pagos, esta aplicación no inventa automáticamente una división de piezas o montos. La distribución concreta se establece en el acuerdo del proyecto.</div><div class="flow-actions"><button class="btn btn-outline-dark" data-flow-back>Atrás</button><button class="btn btn-dark" data-flow-next>Continuar</button></div></div>`;
  } else if(contractState.step===3){
    const c=contractState.client;
    root.innerHTML=`<div class="flow-panel"><span class="eyebrow dark">Acuerdo</span><h2>Revisa antes de firmar</h2><div class="flow-summary"><dl><dt>Cliente</dt><dd>${escapeHtml(c.name)}</dd><dt>Negocio</dt><dd>${escapeHtml(c.business)}</dd><dt>Servicio</dt><dd>${escapeHtml(s.name)}</dd><dt>Precio total</dt><dd>${escapeHtml(contractState.selectedPrice?.display||s.price)}</dd><dt>Modalidad</dt><dd>${contractState.paymentMode==='two'?'2 pagos':'100% por adelantado'}</dd></dl></div><div class="agreement-box"><h4>Alcance</h4><p>El servicio incluye los entregables descritos en el checklist vigente de ${escapeHtml(s.name)} y una ronda de revisión/corrección dentro del alcance aprobado.</p><h4>Inicio del trabajo</h4><p>La producción comienza cuando ESG Experience ha recibido el pago correspondiente y los materiales/información necesarios para ejecutar el alcance.</p><h4>Revisión</h4><p>Cambiar el concepto completo, rehacer estrategia o solicitar piezas nuevas se cotiza aparte.</p><h4>Pago</h4><p>${contractState.paymentMode==='two'?'El proyecto se trabajará en 2 pagos. La producción y entrega también se dividen; la segunda fase no se entrega antes de recibir el segundo pago. La división concreta de fases se confirmará con ESG.':'El proyecto se trabajará con 100% por adelantado.'}</p><h4>Servicios digitales</h4><p>Una vez iniciado el trabajo personalizado, los pagos son no reembolsables salvo cuando la legislación aplicable o el proveedor de pago establezcan lo contrario.</p><h4>Retrasos del cliente</h4><p>Los retrasos en materiales, respuestas o aprobaciones desplazan el calendario de entrega.</p><h4>Costos externos</h4><p>Cuando apliquen, dominio, suscripciones, aplicaciones, servicios premium y comisiones de terceros son responsabilidad del cliente y no forman parte de los honorarios de ESG salvo acuerdo expreso.</p></div><div class="check-row"><input id="accept-agreement" type="checkbox" ${contractState.accepted?'checked':''}><label for="accept-agreement">He leído y acepto el resumen del acuerdo y el alcance del servicio.</label></div><div class="flow-actions"><button class="btn btn-outline-dark" data-flow-back>Atrás</button><button class="btn btn-dark" data-flow-next>Continuar a firma</button></div></div>`;
  } else if(contractState.step===4){
    root.innerHTML=`<div class="flow-panel"><span class="eyebrow dark">Firma electrónica</span><h2>Firma dentro del recuadro</h2><p>Esta versión guarda la firma únicamente en tu navegador. Para producción pública, la firma debe conectarse a almacenamiento seguro o al sistema contractual definitivo.</p><div class="signature-wrap"><canvas id="signature-canvas" class="signature-canvas"></canvas><div class="signature-tools"><span>Firma de ${escapeHtml(contractState.client.name)}</span><button data-clear-signature>Limpiar</button></div></div><div class="flow-actions"><button class="btn btn-outline-dark" data-flow-back>Atrás</button><button class="btn btn-dark" data-flow-next>Confirmar firma</button></div></div>`; initSignature();
  } else if(contractState.step===5){
    root.innerHTML=`<div class="flow-panel"><span class="eyebrow dark">Método de pago</span><h2>Elige cómo quieres pagar</h2><p>No solicitamos ni almacenamos datos de tarjeta.</p><div class="payment-options"><div class="payment-option"><strong>Zelle</strong><p>Solicita por WhatsApp los datos vigentes de Zelle.</p><a class="btn btn-dark" target="_blank" rel="noopener" href="${waLink(`Hola ESG Experience, ya firmé mi acuerdo para ${s.name} y quiero los datos vigentes para pagar por Zelle.`)}">Solicitar datos</a></div><div class="payment-option"><strong>PayPal</strong><p>Solicita por WhatsApp el enlace o instrucciones vigentes de PayPal.</p><a class="btn btn-dark" target="_blank" rel="noopener" href="${waLink(`Hola ESG Experience, ya firmé mi acuerdo para ${s.name} y quiero pagar por PayPal.`)}">Solicitar PayPal</a></div><div class="payment-option"><strong>Tarjeta</strong><p>ESG envía manualmente un Stripe Payment Link.</p><a class="btn btn-dark" target="_blank" rel="noopener" href="${waLink(`Hola ESG Experience, ya firmé mi acuerdo para ${s.name} y quiero pagar con tarjeta. Envíame por favor el Stripe Payment Link.`)}">Quiero pagar con tarjeta</a></div></div><div class="detail-note">La producción comienza cuando ESG confirme el pago correspondiente y tenga la información/materiales necesarios.</div><div class="flow-actions"><button class="btn btn-outline-dark" data-flow-back>Atrás</button><button class="btn btn-dark" data-flow-next>Ya solicité / continuar</button></div></div>`;
  } else {
    const briefLabel=s.area==='identidad'?'Mini Entrevista de Marca':s.area==='made'?'Brief de Producción':'Mini Entrevista Web';
    root.innerHTML=`<div class="flow-panel"><span class="eyebrow dark">Siguiente paso</span><h2>${escapeHtml(briefLabel)}</h2><p>Puedes completarlo ahora o más tarde. El brief no bloquea la firma cuando el alcance y precio ya están definidos.</p><div class="flow-summary"><dl><dt>Servicio</dt><dd>${escapeHtml(s.name)}</dd><dt>Cliente</dt><dd>${escapeHtml(contractState.client.name)}</dd><dt>Modalidad</dt><dd>${contractState.paymentMode==='two'?'2 pagos':'100% por adelantado'}</dd><dt>Estado</dt><dd>Acuerdo revisado y firma capturada localmente</dd></dl></div><div class="flow-actions"><button class="btn btn-outline-dark" data-download-agreement>Descargar resumen</button><div class="right"><button class="btn btn-soft" data-finish-later>Completar después</button><button class="btn btn-dark" data-start-brief-now>Completar ahora</button></div></div></div>`;
  }
}
function waLink(text){ return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`; }
function persistContract(){
  const data={...contractState,savedAt:new Date().toISOString()}; localStorage.setItem('esgContractDraft',JSON.stringify(data));
}
function downloadAgreement(){
  const s=services[contractState.serviceId], c=contractState.client;
  const text=`ESG EXPERIENCE™ — RESUMEN DE ACUERDO\n\nCliente: ${c.name}\nNegocio: ${c.business}\nWhatsApp: ${c.whatsapp}\nEmail: ${c.email}\nServicio: ${s.name}\nPrecio: ${contractState.selectedPrice?.display||s.price}\nModalidad: ${contractState.paymentMode==='two'?'2 pagos':'100% por adelantado'}\nRevisión: 1 ronda dentro del alcance\n\nCondiciones:\n- La producción comienza cuando ESG recibe el pago correspondiente y la información/materiales necesarios.\n- Si se divide en 2 pagos, la producción y entrega también se dividen; la segunda fase no se entrega antes del segundo pago.\n- Cambiar concepto completo, rehacer estrategia o pedir piezas nuevas se cotiza aparte.\n- Una vez iniciado el trabajo personalizado, los pagos son no reembolsables salvo legislación aplicable o condiciones del proveedor de pago.\n- Los retrasos del cliente desplazan el calendario.\n\nGenerado: ${new Date().toLocaleString('es-US')}\n`;
  const blob=new Blob([text],{type:'text/plain;charset=utf-8'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`ESG_Acuerdo_${(c.business||c.name).replace(/[^a-z0-9]+/gi,'_')}.txt`; a.click(); URL.revokeObjectURL(a.href);
}

let signaturePad={canvas:null,ctx:null,drawing:false,hasInk:false};
function initSignature(){
  const canvas=$('#signature-canvas'); if(!canvas)return; const rect=canvas.getBoundingClientRect(); const dpr=window.devicePixelRatio||1; canvas.width=rect.width*dpr; canvas.height=190*dpr; const ctx=canvas.getContext('2d'); ctx.scale(dpr,dpr); ctx.lineWidth=2.2; ctx.lineCap='round'; ctx.strokeStyle='#3a1d0e'; signaturePad={canvas,ctx,drawing:false,hasInk:false};
  const pos=e=>{const r=canvas.getBoundingClientRect(); const p=e.touches?e.touches[0]:e; return {x:p.clientX-r.left,y:p.clientY-r.top}};
  const start=e=>{e.preventDefault(); const p=pos(e); signaturePad.drawing=true; ctx.beginPath(); ctx.moveTo(p.x,p.y)};
  const move=e=>{if(!signaturePad.drawing)return;e.preventDefault();const p=pos(e);ctx.lineTo(p.x,p.y);ctx.stroke();signaturePad.hasInk=true};
  const end=()=>signaturePad.drawing=false;
  ['mousedown','touchstart'].forEach(ev=>canvas.addEventListener(ev,start,{passive:false})); ['mousemove','touchmove'].forEach(ev=>canvas.addEventListener(ev,move,{passive:false})); ['mouseup','mouseleave','touchend'].forEach(ev=>canvas.addEventListener(ev,end));
}

function startBrief(serviceId='custom'){
  closeDialogs(); renderBrief(serviceId); openDialog('#brief-dialog');
}
function renderBrief(serviceId){
  const s=services[serviceId]; const area=s?.area||'custom';
  const title=area==='identidad'?'Mini Entrevista de Marca':area==='made'?'Brief de Producción':area==='web'?'Mini Entrevista Web':'Cuéntanos tu proyecto';
  let fields='';
  if(area==='identidad') fields=`
    ${field('Nombre del negocio','business',true)}${field('¿Qué hace y qué vende?','offer',true,'textarea')}${field('¿Para quién trabaja?','audience',false,'textarea')}${field('¿Qué problema ayuda a resolver?','problem',false,'textarea')}${field('¿Qué quieres que transmita la marca?','transmit',false,'textarea')}${field('¿Tienes logo o identidad existente?','identity',false,'textarea')}${field('Referencias o estilos que te gustan','refs',false,'textarea')}${field('Qué quieres evitar','avoid',false,'textarea')}`;
  else if(area==='made') fields=`
    ${field('Nombre del negocio','business',true)}${field('¿Qué vas a promocionar?','promote',true,'textarea')}${field('Objetivo principal','goal',true,'textarea')}${field('Formatos o plataformas','formats',false)}${field('Identidad existente','identity',false,'textarea')}${field('Referencias visuales','refs',false,'textarea')}${field('Textos, promociones o archivos disponibles','materials',false,'textarea')}`;
  else if(area==='web') fields=`
    ${field('Nombre del negocio','business',true)}${field('¿Qué hace el negocio?','offer',true,'textarea')}${field('Objetivo principal de la web','goal',true,'textarea')}${field('Dominio existente','domain',false)}${field('Páginas o secciones deseadas','pages',false,'textarea')}${field('Servicios a mostrar','services',false,'textarea')}${field('WhatsApp','whatsapp',false)}${field('Redes sociales','social',false,'textarea')}${field('¿Necesita catálogo, pagos o administración?','functionality',false,'textarea')}${field('Referencias, textos, fotografías o materiales','materials',false,'textarea')}`;
  else fields=`${field('Nombre','name',true)}${field('Negocio','business',false)}${field('WhatsApp','whatsapp',true)}${field('Email','email',true,'email')}${field('Cuéntanos qué necesitas resolver','need',true,'textarea')}${field('Presupuesto o rango, si quieres compartirlo','budget',false)}${field('Referencias o archivos disponibles','refs',false,'textarea')}`;
  $('#brief-flow').innerHTML=`<div class="brief-shell"><span class="eyebrow dark">Ruta B · Explicar primero</span><h2>${escapeHtml(title)}</h2><p>${s?`Servicio de referencia: ${escapeHtml(s.name)}. `:''}No se genera un contrato definitivo hasta confirmar alcance y precio cuando haya algo que revisar.</p><form id="brief-form" class="form-grid" data-brief-service="${escapeHtml(serviceId)}">${field('Nombre completo','name',true)}${field('WhatsApp','contactWhatsapp',true)}${field('Email','contactEmail',true,'email')}${fields}</form><div class="flow-actions"><button class="btn btn-outline-dark" data-cancel-brief>Cerrar</button><div class="right"><button class="btn btn-soft" data-save-brief>Guardar en este navegador</button><button class="btn btn-dark" data-send-brief>Enviar resumen por WhatsApp</button></div></div></div>`;
}
function field(label,name,required=false,type='text'){
  const cls=type==='textarea'?'form-field full':'form-field';
  return `<div class="${cls}"><label>${escapeHtml(label)}${required?' *':''}</label>${type==='textarea'?`<textarea name="${name}" ${required?'required':''}></textarea>`:`<input name="${name}" type="${type}" ${required?'required':''}>`}</div>`;
}
function formToObject(form){return Object.fromEntries(new FormData(form).entries())}
function briefSummary(serviceId,data){
  const s=services[serviceId]; const pairs=Object.entries(data).filter(([,v])=>String(v).trim()); return `Hola ESG Experience. Quiero explicar primero mi proyecto${s?` para ${s.name}`:''}.\n\n${pairs.map(([k,v])=>`${k}: ${v}`).join('\n')}`;
}

let productState={type:'catalog',categories:[],subcategories:[],products:[]};
function openProductPortal(){ closeDialogs(); renderProductPortal(); openDialog('#product-dialog'); }
function renderProductPortal(){
  $('#product-portal').innerHTML=`<div class="portal-shell"><span class="eyebrow dark">Herramienta operativa post-contratación</span><h2>Portal Maestro de Productos</h2><p>Se utiliza después de contratar para Catálogo fijo cuando requiere carga organizada, Catálogo a WhatsApp y Shopify. No forma parte de la landing comercial.</p><div class="brief-section"><div class="form-grid"><div class="form-field"><label>Tipo de proyecto</label><select id="portal-type"><option value="catalog" ${productState.type==='catalog'?'selected':''}>Catálogo Web / WhatsApp</option><option value="shopify" ${productState.type==='shopify'?'selected':''}>Shopify</option></select></div><div class="form-field"><label>Proyecto / negocio</label><input id="portal-project" value="${escapeHtml(localStorage.getItem('esgPortalProject')||'')}"></div></div></div><div class="portal-toolbar"><button class="btn btn-dark" data-add-category>+ Categoría</button><button class="btn btn-soft" data-add-subcategory>+ Subcategoría</button><button class="btn btn-soft" data-add-product>+ Producto</button><button class="btn btn-outline-dark" data-export-xls>Exportar Excel maestro</button></div><div id="portal-records">${renderPortalRecords()}</div></div>`;
}
function renderPortalRecords(){
  const cat=productState.categories.map((r,i)=>portalRecord('Categoría',r,i,'categories')).join('');
  const sub=productState.subcategories.map((r,i)=>portalRecord('Subcategoría',r,i,'subcategories')).join('');
  const prod=productState.products.map((r,i)=>portalRecord('Producto',r,i,'products')).join('');
  return (cat+sub+prod)||`<div class="portal-empty">Todavía no hay registros. Empieza por crear una categoría.</div>`;
}
function portalRecord(label,r,i,kind){
  const title=r.name||`${label} ${i+1}`; const detail=kind==='products'?(r.price?` · ${r.price}`:''):(r.description?` · ${r.description.slice(0,70)}`:'');
  return `<div class="portal-record"><div class="portal-record-header"><h4>${escapeHtml(label)} · ${escapeHtml(title)}${escapeHtml(detail)}</h4><div><button data-edit-record="${kind}:${i}">Editar</button> <button data-delete-record="${kind}:${i}">Eliminar</button></div></div></div>`;
}
function recordForm(kind,index=null){
  const existing=index!==null?productState[kind][index]:{}; const isProduct=kind==='products'; const isSub=kind==='subcategories';
  const shopify=productState.type==='shopify'&&isProduct;
  const categoryOptions=productState.categories.map(c=>`<option ${existing.category===c.name?'selected':''}>${escapeHtml(c.name)}</option>`).join('');
  const subOptions=productState.subcategories.map(c=>`<option ${existing.subcategory===c.name?'selected':''}>${escapeHtml(c.name)}</option>`).join('');
  const title=isProduct?'Producto / servicio':isSub?'Subcategoría':'Categoría';
  const common=`${field('Nombre','name',true)}${field('Descripción','description',false,'textarea')}`;
  let extra='';
  if(isSub) extra=`<div class="form-field"><label>Categoría</label><select name="category"><option value="">Seleccionar</option>${categoryOptions}</select></div>${field('Imagen representativa / nombre de archivo','image',false)}${field('Observaciones para ESG','notes',false,'textarea')}`;
  else if(kind==='categories') extra=`${field('Imagen representativa / nombre de archivo','image',false)}${field('Observaciones para ESG','notes',false,'textarea')}`;
  else extra=`<div class="form-field"><label>Categoría</label><select name="category"><option value="">Seleccionar</option>${categoryOptions}</select></div><div class="form-field"><label>Subcategoría</label><select name="subcategory"><option value="">Opcional</option>${subOptions}</select></div>${field('Código interno','code',false)}${field('Estado: activo / próximamente / oculto','status',false)}${field('Precio o “desde”','price',false)}${field('Variantes / modelos','variants',false,'textarea')}${field('Destacado sí/no','featured',false)}${field('Qué incluye','includes',false,'textarea')}${field('Especificaciones / medidas / duración','specs',false,'textarea')}${field('Condiciones importantes','conditions',false,'textarea')}${field('Garantía cuando aplique','warranty',false,'textarea')}${field('Tiempo de entrega o instalación','delivery',false)}${field('Palabras clave','keywords',false)}${field('Llamada a la acción','cta',false)}${field('Imágenes / nombres de archivos','images',false,'textarea')}${field('Observaciones para ESG','notes',false,'textarea')}${shopify?`${field('SKU','sku',false)}${field('Inventario','inventory',false)}${field('Multimedia adicional','media',false,'textarea')}`:''}`;
  $('#product-portal').innerHTML=`<div class="portal-shell"><span class="eyebrow dark">${index===null?'Nuevo':'Editar'} registro</span><h2>${title}</h2><form id="record-form" class="form-grid" data-kind="${kind}" data-index="${index===null?'':index}">${common}${extra}</form><div class="flow-actions"><button class="btn btn-outline-dark" data-return-portal>Cancelar</button><button class="btn btn-dark" data-save-record>Guardar registro</button></div></div>`;
  if(existing){ Object.entries(existing).forEach(([k,v])=>{const el=$(`[name="${k}"]`,$('#record-form')); if(el)el.value=v;}); }
}
function savePortal(){ localStorage.setItem('esgProductPortal',JSON.stringify(productState)); const p=$('#portal-project'); if(p)localStorage.setItem('esgPortalProject',p.value); }
function exportXls(){
  const project=$('#portal-project')?.value||localStorage.getItem('esgPortalProject')||'ESG_Project'; savePortal();
  const headers=['TipoRegistro','Proyecto','Categoria','Subcategoria','Codigo','Estado','Nombre','Precio','Variantes','Destacado','Descripcion','QueIncluye','Especificaciones','Condiciones','Garantia','Entrega','PalabrasClave','CTA','Imagenes','Observaciones','SKU','Inventario','Multimedia'];
  const rows=[];
  productState.categories.forEach(r=>rows.push(['Categoria',project,r.name,'','','',r.name,'','','',r.description||'','','','','','','','','',r.notes||'','','','']));
  productState.subcategories.forEach(r=>rows.push(['Subcategoria',project,r.category||'',r.name,'','',r.name,'','','',r.description||'','','','','','','','',r.image||'',r.notes||'','','','']));
  productState.products.forEach(r=>rows.push(['Producto',project,r.category||'',r.subcategory||'',r.code||'',r.status||'',r.name||'',r.price||'',r.variants||'',r.featured||'',r.description||'',r.includes||'',r.specs||'',r.conditions||'',r.warranty||'',r.delivery||'',r.keywords||'',r.cta||'',r.images||'',r.notes||'',r.sku||'',r.inventory||'',r.media||'']));
  const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const html=`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"><head><meta charset="UTF-8"></head><body><table border="1"><tr>${headers.map(h=>`<th>${esc(h)}</th>`).join('')}</tr>${rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table></body></html>`;
  const blob=new Blob([html],{type:'application/vnd.ms-excel;charset=utf-8'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`ESG_Excel_Maestro_${project.replace(/[^a-z0-9]+/gi,'_')}.xls`; a.click(); URL.revokeObjectURL(a.href); showToast('Excel maestro generado');
}

function setupEvents(){
  document.addEventListener('click',e=>{
    const t=e.target.closest('button,a'); if(!t)return;
    if(t.matches('[data-close-dialog]')) t.closest('dialog')?.close();
    if(t.matches('[data-open-guide]')) openDialog('#guide-dialog');
    if(t.matches('[data-open-categories]')) openDialog('#categories-dialog');
    if(t.matches('[data-open-product-portal]')) openProductPortal();
    if(t.matches('[data-scroll-target]')) document.getElementById(t.dataset.scrollTarget)?.scrollIntoView({behavior:'smooth'});
    if(t.matches('[data-category-jump]')){closeDialogs();document.getElementById(t.dataset.categoryJump)?.scrollIntoView({behavior:'smooth'});}
    if(t.matches('[data-custom-brief]')) startBrief('custom');
    if(t.matches('[data-service-detail]')) showServiceDetail(t.dataset.serviceDetail);
    if(t.matches('[data-contract]')) startContract(t.dataset.contract);
    if(t.matches('[data-brief-service]')) startBrief(t.dataset.briefService);
    if(t.matches('[data-guide-target]')) showGuideResult(t.dataset.guideTarget);
    if(t.matches('[data-result-jump]')){closeDialogs();document.getElementById(t.dataset.resultJump)?.scrollIntoView({behavior:'smooth'});}
    if(t.matches('[data-result-detail]')){closeDialogs();showServiceDetail(t.dataset.resultDetail);}
    if(t.matches('[data-result-contract]')) startContract(t.dataset.resultContract);
    if(t.matches('[data-result-brief]')) startBrief(t.dataset.resultBrief);
    if(t.matches('[data-dialog-contract]')) startContract(t.dataset.dialogContract);
    if(t.matches('[data-dialog-brief]')) startBrief(t.dataset.dialogBrief);
    if(t.matches('.faq-question')){const item=t.closest('.faq-item');item.classList.toggle('open');t.setAttribute('aria-expanded',item.classList.contains('open'));t.lastElementChild.textContent=item.classList.contains('open')?'−':'+';}
    if(t.matches('.compare-tab')){$$('.compare-tab').forEach(x=>x.classList.toggle('active',x===t));renderCompare(t.dataset.compare);}
    if(t.matches('[data-pay-mode]')){contractState.paymentMode=t.dataset.payMode;renderContractStep();}
    if(t.matches('[data-price-option]')){contractState.selectedPrice={value:Number(t.dataset.priceOption),display:t.dataset.priceDisplay};renderContractStep();}
    if(t.matches('[data-flow-detail]')){closeDialogs();showServiceDetail(contractState.serviceId);}
    if(t.matches('[data-flow-brief]')) startBrief(contractState.serviceId);
    if(t.matches('[data-flow-back]')){contractState.step=Math.max(0,contractState.step-1);renderContractStep();}
    if(t.matches('[data-flow-next]')) handleFlowNext();
    if(t.matches('[data-clear-signature]')){if(signaturePad.ctx){signaturePad.ctx.clearRect(0,0,signaturePad.canvas.width,signaturePad.canvas.height);signaturePad.hasInk=false;}}
    if(t.matches('[data-download-agreement]')) downloadAgreement();
    if(t.matches('[data-finish-later]')){persistContract();closeDialogs();showToast('Borrador guardado en este navegador');}
    if(t.matches('[data-start-brief-now]')) startBrief(contractState.serviceId);
    if(t.matches('[data-cancel-brief]')) closeDialogs();
    if(t.matches('[data-save-brief]')){const f=$('#brief-form'); if(!f)return; localStorage.setItem(`esgBrief_${f.dataset.briefService}`,JSON.stringify(formToObject(f)));showToast('Brief guardado en este navegador');}
    if(t.matches('[data-send-brief]')){const f=$('#brief-form');if(!f||!f.reportValidity())return;const data=formToObject(f);localStorage.setItem(`esgBrief_${f.dataset.briefService}`,JSON.stringify(data));window.open(waLink(briefSummary(f.dataset.briefService,data)),'_blank');}
    if(t.matches('[data-add-category]')) recordForm('categories');
    if(t.matches('[data-add-subcategory]')) recordForm('subcategories');
    if(t.matches('[data-add-product]')) recordForm('products');
    if(t.matches('[data-return-portal]')) renderProductPortal();
    if(t.matches('[data-save-record]')) saveRecord();
    if(t.matches('[data-edit-record]')){const [kind,i]=t.dataset.editRecord.split(':');recordForm(kind,Number(i));}
    if(t.matches('[data-delete-record]')){const [kind,i]=t.dataset.deleteRecord.split(':');productState[kind].splice(Number(i),1);savePortal();renderProductPortal();}
    if(t.matches('[data-export-xls]')) exportXls();
    if(t.matches('.nav-toggle')){const nav=$('#site-nav');nav.classList.toggle('open');t.setAttribute('aria-expanded',nav.classList.contains('open'));}
  });
  document.addEventListener('change',e=>{
    if(e.target.id==='accept-agreement') contractState.accepted=e.target.checked;
    if(e.target.id==='portal-type'){productState.type=e.target.value;savePortal();renderProductPortal();}
    if(e.target.id==='portal-project') localStorage.setItem('esgPortalProject',e.target.value);
  });
  $$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close();}));
}
function handleFlowNext(){
  if(contractState.step===0){const cb=$('#accept-price');const s=services[contractState.serviceId];if(s.priceOptions&&!contractState.selectedPrice){showToast('Selecciona el precio que corresponde');return;}if(!cb?.checked){showToast('Confirma que estás de acuerdo con el precio');return;}contractState.step++;}
  else if(contractState.step===1){const f=$('#client-form');if(!f?.reportValidity())return;contractState.client=formToObject(f);contractState.step++;}
  else if(contractState.step===2){if(!contractState.paymentMode){showToast('Selecciona una modalidad de pago');return;}contractState.step++;}
  else if(contractState.step===3){const cb=$('#accept-agreement');if(!cb?.checked){showToast('Debes aceptar el acuerdo antes de firmar');return;}contractState.accepted=true;contractState.step++;}
  else if(contractState.step===4){if(!signaturePad.hasInk){showToast('Firma dentro del recuadro para continuar');return;}contractState.signature=true; contractState.signatureData=signaturePad.canvas?.toDataURL('image/png')||null; persistContract();contractState.step++;}
  else if(contractState.step===5){persistContract();contractState.step++;}
  renderContractStep();
}
function saveRecord(){
  const f=$('#record-form'); if(!f||!f.reportValidity())return; const data=formToObject(f); const kind=f.dataset.kind; const idx=f.dataset.index;
  if(idx==='') productState[kind].push(data); else productState[kind][Number(idx)]=data;
  savePortal();renderProductPortal();showToast('Registro guardado');
}

function restorePortal(){ try{const p=JSON.parse(localStorage.getItem('esgProductPortal'));if(p)productState=p;}catch{} }
function setupReveal(){ const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08}); $$('.reveal').forEach(el=>obs.observe(el)); }
function setupNavClose(){ $$('#site-nav a').forEach(a=>a.addEventListener('click',()=>$('#site-nav').classList.remove('open'))); }

renderCards();renderFAQ();renderGuide();renderCompare('made');restorePortal();setupEvents();setupReveal();setupNavClose();
