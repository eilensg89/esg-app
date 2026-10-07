ESG Experience V4.6.7

Cambios:
- Video Visual Individual ahora exige elegir tarifa: primera vez $57 o regular $87.
- El total del contrato y el descuento por referido se recalculan con la tarifa seleccionada.
- Se eliminan botones grandes redundantes después de enviar contrato. Permanece el botón flotante Regresar y un acceso pequeño a Inicio.
- El webhook de Google Sheets crea automáticamente una ficha en REFERIDOS cuando entra un código nuevo.
- Si una ficha de referido existe pero está incompleta, completa nombre/estado/descuento/comisión por defecto sin borrar datos manuales.
- La comisión queda POR DEFINIR si no existe COMISION_REFERIDO_DEFAULT en CONFIGURACION.

Para actualizar Apps Script:
1. Reemplazar todo Código.gs por google-sheets-webhook-v4_6_7.gs
2. Guardar
3. Implementar > Administrar implementaciones > Editar > Nueva versión > Implementar
4. Mantener el mismo enlace /exec
