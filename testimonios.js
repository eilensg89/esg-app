/*
  ESG EXPERIENCE™ — TESTIMONIOS
  Este archivo está separado a propósito para que pueda actualizarse sin tocar app.js.

  Para añadir un testimonio nuevo:
  1) Duplica uno de los objetos dentro de window.ESG_TESTIMONIOS.
  2) Cambia id, nombre, texto y enlaces.
  3) Si tienes una captura, súbela a /assets/testimonios/ y escribe su ruta en proofImage.
  4) Si más adelante tienes un video directo (.mp4/.webm), escribe la ruta en video.
  5) Si tienes un enlace a un antes/después, reel, historia destacada o caso de estudio, escríbelo en workUrl.

  Campos opcionales: services, proofImage, video, workUrl, workLabel.
*/

window.ESG_TESTIMONIOS = [
  {
    id: 'liane-hernandez',
    name: 'Liane Hernandez',
    services: ['De Logo a Personaje™', 'Catálogo Web', 'Administrador propio'],
    quote: 'Quedé súper feliz con el excelente trabajo que han hecho con mi marca en el proceso “De Logo a Personaje”. No solo fue la creación de mi marca, también me realizaron mi catálogo web y el administrador para que yo misma pueda actualizarlo, algo que para mí ha sido muy útil. Ahora mi marca está completa y profesional gracias a su trabajo y dedicación. Súper recomendada, no se van a arrepentir, se los aseguro.',
    facebookUrl: 'https://www.facebook.com/share/1T6ML3HmBN/?mibextid=wwXIfr',
    proofImage: '/assets/testimonios/liane-hernandez.jpeg',
    video: '',
    workUrl: '',
    workLabel: 'Ver ejemplos del trabajo'
  },
  {
    id: 'rosabel-nunez-gonzalez',
    name: 'Rosabel Núñez Gonzalez',
    services: ['De Logo a Personaje™', 'Dirección visual', 'Acompañamiento'],
    quote: 'Quiero dejar mi opinión porque el programa ESG en mi perfil “de logo a personaje” fue transformador. Me mejoró la estructura de mis diseños y la estética del perfil. Quiero resaltar que la guía de Eilen no solo para crear sino también para enseñar, como mismo lo hace en su canal de WhatsApp ha sido esencial para mí. Estoy feliz con toda la estructura que me creó y sobre todo con el apoyo que me ha dado. Recomendada 100%.',
    facebookUrl: 'https://www.facebook.com/share/1QGfMzzA8z/?mibextid=wwXIfr',
    proofImage: '/assets/testimonios/rosabel-nunez-gonzalez.jpeg',
    video: '',
    workUrl: '',
    workLabel: 'Ver ejemplos del trabajo'
  },
  {
    id: 'rosy-cabrera',
    name: 'Rosy Cabrera',
    services: ['ESG Experience™', 'Servicio creativo'],
    quote: 'Excelente creadora y profesional. Se nota la dedicación, creatividad y el cariño que pone en su trabajo. Brinda un servicio de calidad, con mucha atención a los detalles y siempre buscando ofrecer lo mejor. ¡Totalmente recomendada!',
    facebookUrl: 'https://www.facebook.com/share/1KBxyWF7oK/?mibextid=wwXIfr',
    proofImage: '/assets/testimonios/rosy-cabrera.jpeg',
    video: '',
    workUrl: '',
    workLabel: 'Ver ejemplos del trabajo'
  }
];
