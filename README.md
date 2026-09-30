# ESG Experience App v3.0

Versión reconstruida para corregir la navegación y evitar mezclar un `index.html` nuevo con CSS/JS antiguos.

## Importante
- El CSS y JavaScript principales están **dentro de `index.html`**. Así, al reemplazar el `index.html`, no queda lógica vieja cacheada.
- Mantener la carpeta `assets/` junto al `index.html`.
- En Vercel, subir/desplegar **la carpeta completa**.
- Si el dominio ya mostraba una versión anterior, hacer un deployment nuevo y luego abrir el sitio en una pestaña privada para confirmar.

## Flujo
Home → Familia → Información → Paquete → Checklist → Alcance/Proceso → Mini entrevista → Acuerdo → Firma.

La ruta “Ya sé lo que necesito” también pasa por el detalle completo del servicio antes de la entrevista.
