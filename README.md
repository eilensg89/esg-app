# ESG Experience App v2.3

Prototipo estático HTML/CSS/JS preparado para GitHub + Vercel.

## Flujo

1. Home con 3 rutas: De Logo a Personaje™, ESG Made™ y Web ESG™.
2. Cada familia vende y explica antes de pedir datos.
3. Cada paquete tiene: resumen, checklist completo, límites, proceso y pantalla final de confirmación.
4. El checklist vuelve a aparecer justo antes del botón de solicitud para que nadie llegue a la entrevista sin saber qué va a recibir.
5. La Mini Entrevista ESG explica por qué se pide la información y qué obtiene el cliente gracias a esas respuestas.
6. Servicios de precio fijo generan el acuerdo para firma.
7. Shopify muestra precio base de lanzamiento desde $200 para hasta 50 productos, pero pasa por revisión de alcance antes de generar un acuerdo definitivo.
8. Pago por tarjeta se solicita por WhatsApp; no hay checkout público de tarjeta.

## Navegación

La app usa `history.pushState` para que el botón superior y el botón atrás del navegador regresen a la pantalla/etapa anterior, no necesariamente al inicio.
Los clics dinámicos usan delegación global para evitar perder funcionalidad en desktop al re-renderizar pantallas.

## Testimonios

`data/testimonials.json` queda vacío. Cuando se agreguen testimonios, la sección se muestra automáticamente.

## Contactos

WhatsApp e Instagram permanecen detrás de botones; no se muestran como texto público en la interfaz.
