V4.6.5 — PRECIOS + REFERIDOS FIX

Cambios puntuales sobre V4.6.4:
- Los contratos envían Precio base a Google Sheets.
- Los contratos de precio fijo también envían Total.
- El 5% solo se descuenta automáticamente del Total cuando el código de colaborador existe y está activo en referrals.js; si el código aún no está verificado, Precio base se registra y el descuento queda separado para confirmación.
- Acompañamiento por hora conserva hourlyTotal y la regla de coordinación manual cuando llega por referido.
- No se alteran rutas, formularios, calendario, tienda, assets ni navegación.

Google Apps Script:
Para que la columna Referido no quede vacía cuando un código todavía no existe en la pestaña REFERIDOS, sustituye esta expresión dentro de la fila:
  referido ? referido.nombre : ''
por:
  referido ? referido.nombre : (valor_(data, 'referido', 'referralName') || codigoReferido)

Para una colaboradora real, añade también su código y nombre en la pestaña REFERIDOS.
