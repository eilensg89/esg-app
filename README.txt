ESG EXPERIENCE™ — WEB APP 2026

Esta versión está construida como una experiencia web tipo aplicación, no como una landing larga.

RUTAS COMPARTIBLES PRINCIPALES
/
/logo-a-personaje
/esg-made
/esg-made/video-individual
/esg-made/mini
/esg-made/sesion-visual
/esg-made/pro
/web-esg
/web-esg/esencial
/web-esg/catalogo-fijo
/web-esg/catalogo-whatsapp
/web-esg/shopify
/mia
/analisis
/entrevista/<servicio>
/contrato/<servicio>
/contrato-editor
/portal-productos
/testimonios

IMPORTANTE PARA VERCEL
- Subir index.html, app.js, styles.css, vercel.json y la carpeta assets/ DIRECTAMENTE a la raíz del repositorio.
- Root Directory en Vercel: ./
- vercel.json contiene rewrites para que los enlaces profundos funcionen al abrirlos directamente.

CONTRATO EDITABLE
- /contrato-editor abre la herramienta interna.
- Selecciona servicio, modifica precio, add-ons, fases o términos y genera un enlace personalizado.
- La plantilla base no se modifica.
- El cliente recibe la copia mediante el enlace generado.

PORTAL PRODUCTOS
- /portal-productos
- Guarda temporalmente la lista en localStorage del navegador.
- Exporta un archivo .xlsx real usando SheetJS.

TESTIMONIOS
- /testimonios muestra testimonios reales con enlace a la publicación original de Facebook.
- Los testimonios se administran desde el archivo independiente testimonios.js.
- Cada tarjeta puede incorporar captura, video y enlace al antes/después o trabajo realizado.
- Cada testimonio puede compartirse individualmente con /testimonios?id=<id>.
- Ver EDITAR_TESTIMONIOS.txt para actualizar esta sección sin tocar app.js.

CONTACTO
- WhatsApp se utiliza como canal automático de envío de análisis y briefs.
- El número no se muestra escrito en el footer porque esta versión no usa un footer tradicional.
- El canal gratuito está integrado en el dock inferior y en la pantalla inicial.

MÍA
- Se presenta como academia externa recomendada, no como producto de ESG.
- El botón final abre el enlace de afiliado de Beacons proporcionado por Eilen.


CORREO PRINCIPAL ESG
- info@reeymultiservices.com
- Está registrado como correo principal del proyecto. El envío automático por email requiere conectar posteriormente un servicio/backend; esta versión estática mantiene WhatsApp como envío operativo de briefs y análisis.
