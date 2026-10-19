ESG Experience V4.6.8 — limpieza pública + calendario + referidos

CAMBIOS DE LA WEB
- Home: se eliminaron los dos bloques grandes extra de equipo/referidos. Se conserva la línea breve del hero.
- Testimonios: se eliminó el texto interno de “aquí podrá añadirse…”. Cuando existe captura real, ya no se repite debajo todo el testimonio escrito. La captura abre el original de Facebook.
- Testimonios: botón “Ver todos” para volver a la lista completa. El botón externo “Ver todos en Facebook” queda preparado mediante facebookReviewsUrl en site-config.js; solo se muestra cuando se coloque la URL real.
- Acompañamiento por hora: no participa en referidos ni descuentos. Se eliminaron todos los avisos de referido/pago automático.
- Acompañamiento por hora: se retiraron fecha/hora manuales y se usa el enlace real de Google Calendar. Se mantiene selector de horas + total estimado.
- Referidos: escribir un código manual ya NO lo guarda 30 días. Solo los enlaces reales ?ref=codigo conservan atribución hasta 30 días.
- Referidos: cuando existe una referencia persistente aparece una opción discreta para quitarla de esa solicitud.
- Para limpiar una referencia durante pruebas también puede abrirse /?clearref=1.
- Tienda: se ocultaron notas internas de construcción y placeholders de “añadir después”.

GOOGLE SHEETS / APPS SCRIPT
- Usar google-sheets-webhook-v4_6_8.gs como Código.gs completo.
- El endpoint GET muestra version: 4.6.8 para comprobar que la implementación correcta está activa.
- La contratación por hora se excluye del sistema de referidos también del lado del servidor.
- Los emails muestran el descuento con símbolo %.
- Se añadió reconstruirReferidosDesdeLeads(): crea/sincroniza la pestaña REFERIDOS utilizando los leads existentes.

ACTUALIZAR APPS SCRIPT
1. Reemplazar todo Código.gs por google-sheets-webhook-v4_6_8.gs.
2. Guardar.
3. Implementar > Administrar implementaciones > Editar > Nueva versión > Implementar.
4. Abrir el mismo /exec y comprobar que aparece "version":"4.6.8".
5. En el selector de funciones ejecutar UNA VEZ reconstruirReferidosDesdeLeads.
6. Volver a REFERIDOS: los códigos históricos (por ejemplo ana) deben aparecer con Nombre, Estado, Descuento, Leads y Ventas.
