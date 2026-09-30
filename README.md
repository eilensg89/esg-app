# ESG Experience™ — Prototipo de Servicios

Prototipo mobile-first listo para GitHub + Vercel.

## Qué incluye

- Home tipo app con 3 rutas principales: De Logo a Personaje™, ESG Made™ y Web ESG™.
- Navegación por pantallas, no una landing interminable.
- Lenguaje visual aprobado: cuero marrón + piedra beige + relieve táctil + dorado + Elenia.
- Rutas de venta por servicio con precios y entregables.
- Comparación visual “antes / ESG” dentro de De Logo a Personaje™.
- Continuidad exclusiva de $250/mes para clientes de De Logo a Personaje™.
- Mini Entrevista de Marca de 10 preguntas, con selección de servicio/precio e información específica según la ruta elegida.
- Acuerdo de servicio generado desde la información del cliente.
- Firma dibujada en pantalla mediante canvas.
- Opción de pago completo o 2 pagos, con producción/entrega fraccionada.
- Preferencia de pago: Zelle, PayPal o tarjeta solicitada por WhatsApp.
- Confirmación por WhatsApp con el número oculto detrás del botón.
- Instagram oculto detrás del botón.
- PWA básica (manifest + service worker).
- Sección de testimonios preparada conceptualmente para incorporarla después sin cambiar la arquitectura.

## Despliegue rápido en Vercel

1. Sube toda esta carpeta a un repositorio de GitHub.
2. En Vercel, crea un proyecto desde ese repositorio.
3. Framework preset: **Other**.
4. No requiere build command.
5. Directorio de salida: raíz del proyecto.
6. Deploy.

`vercel.json` ya está incluido.

## Contactos configurados internamente

- WhatsApp: configurado en `js/app.js` y no mostrado como número en la interfaz.
- Instagram: configurado en `js/app.js` y no mostrado como @ en la interfaz.

## Importante sobre el acuerdo

Este prototipo genera el acuerdo, permite firma dibujada, impresión/guardado y confirmación por WhatsApp. Para convertirlo en un sistema con almacenamiento probatorio centralizado, envío automático de PDF y registro de auditoría persistente, hará falta conectar un backend/base de datos o un proveedor de firma en una siguiente fase.

## Archivos clave

- `index.html`: estructura de la app.
- `css/app.css`: sistema visual e interacción táctil.
- `js/app.js`: servicios, precios, mini entrevista, acuerdo, firma y WhatsApp.
- `DESIGN-SYSTEM.md`: reglas del estilo visual aprobado para reutilizarlo también en posts.
- `SERVICIOS-Y-PRECIOS.md`: matriz interna de referencia.
