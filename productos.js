/*
  ESG EXPERIENCE™ — CATÁLOGO DE PRODUCTOS
  Este archivo está separado para que pueda actualizarse sin tocar app.js.
  Puedes pedir a ChatGPT: "Modifica únicamente productos.js y agrega/edita este producto".
*/
window.ESG_PRODUCTOS = [
  {
    id: 'reto-creativo-21-dias',
    slug: 'reto-creativo-21-dias',
    name: 'Reto Creativo de 21 Días',
    price: '$19.99',
    status: 'preparacion',
    tag: 'Creatividad',
    stickerIcon: '21',
    stickerLine: 'Activa y entrena tu creatividad',
    short: 'Una experiencia guiada de 21 días para activar la creatividad y entrenar nuevas formas de observar, conectar y crear.',
    problem: 'Para personas que sienten que repiten ideas, se bloquean o quieren entrenar su creatividad con una ruta práctica.',
    result: 'Una estructura de 21 días para practicar creatividad de forma progresiva y convertir la observación, las conexiones y las ideas en un hábito creativo.',
    includes: [
      'Ruta guiada de 21 días.',
      'Ejercicios y actividades creativas organizadas por día.',
      'Experiencia diseñada para avanzar paso a paso sin saturación.'
    ],
    bonus: {
      name: 'Protocolo JSON',
      value: '$9.99',
      text: 'Incluido como bono sin costo adicional cuando esta oferta esté activa.'
    },
    landingUrl: '',
    checkoutUrl: '',
    examples: [],
    notes: 'La landing de venta individual se añadirá en una segunda etapa.'
  },
  {
    id: 'avatar-que-cuenta-y-vende',
    slug: 'avatar-que-cuenta-y-vende',
    name: 'Crea tu Avatar que Cuenta y Vende tu Historia',
    price: 'Precio por definir',
    status: 'preparacion',
    tag: 'Avatar + storytelling',
    stickerIcon: 'AV',
    stickerLine: 'Identidad + storytelling',
    short: 'Crea un avatar con identidad y conviértelo en un personaje capaz de protagonizar historias con intención comercial.',
    problem: 'Para quien no quiere un avatar bonito y vacío, sino un personaje consistente que tenga una función real dentro del contenido.',
    result: 'Un sistema para definir el avatar, mantener su consistencia y construir historias tipo héroe que puedan educar, conectar y vender.',
    includes: [
      'Ruta para definir el avatar y sus anclas de identidad.',
      'Prompt maestro reutilizable.',
      'Estructura de historia tipo héroe.',
      'Guiones y llamados a la acción reutilizables.'
    ],
    bonus: {
      name: 'Protocolo JSON',
      value: '$9.99',
      text: 'Incluido como bono sin costo adicional cuando esta oferta esté activa.'
    },
    landingUrl: '',
    checkoutUrl: '',
    examples: [],
    notes: 'Nombre y precio pueden ajustarse desde este archivo sin modificar la aplicación.'
  },
  {
    id: 'videos-clon-12s',
    slug: 'videos-clon-12s',
    name: 'Crea Videos de 12 Segundos con tu Clon',
    price: 'Precio por definir',
    status: 'preparacion',
    tag: 'Video + prompts',
    stickerIcon: '12s',
    stickerLine: 'Prompts para videos con tu clon',
    short: 'Herramienta que transforma lo que quieres crear en un prompt técnico listo para producir videos cortos con tu propio clon.',
    problem: 'Para quien tiene una idea de video pero necesita convertirla en una instrucción precisa, organizada y compatible con el flujo de generación que utiliza.',
    result: 'Describir la escena, acción e intención y obtener un prompt estructurado para llevarlo al generador correspondiente y producir videos de hasta 12 segundos con tu clon.',
    includes: [
      'Constructor guiado del prompt.',
      'Organización de escena, acción, estilo e intención.',
      'Ajuste de la instrucción al formato de video corto.',
      'Salida lista para copiar y utilizar en el generador correspondiente.'
    ],
    bonus: {
      name: 'Protocolo JSON',
      value: '$9.99',
      text: 'Incluido como bono sin costo adicional cuando esta oferta esté activa.'
    },
    landingUrl: '',
    checkoutUrl: '',
    examples: [],
    notes: 'El nombre comercial final y el precio todavía pueden definirse.'
  },
  {
    id: '2x1-visual-json',
    slug: '2x1-visual-json',
    name: '2×1 Visual ESG',
    price: '$9.99',
    status: 'preparacion',
    tag: '2×1 · Identidad + ejecución visual',
    stickerIcon: '2×1',
    stickerLine: 'Identidad visual + Protocolo JSON',
    short: 'Primero define cómo quieres verte y qué referencias buscar. Después usa el Protocolo JSON para convertir esa inspiración en una instrucción visual estructurada.',
    problem: 'El Protocolo JSON es mucho más útil cuando la persona ya sabe qué estilo quiere, qué imágenes buscar y qué tipo de contenido encaja con su identidad.',
    result: 'Una ruta breve para orientar identidad visual + contenido y, después, una herramienta para analizar referencias y convertirlas en prompts visuales aplicables.',
    includes: [
      'Herramienta 1: ruta guiada de identidad visual + dirección de contenido. Nombre comercial pendiente.',
      'Definición de personalidad visual, estilo, ropa/presencia y dirección estética.',
      'Términos de búsqueda e inspiración para Pinterest.',
      'Dirección sobre qué contenido observar o buscar en Instagram.',
      'Herramienta 2: Protocolo JSON.',
      'Conversión de una imagen de referencia en una estructura que la IA pueda interpretar para recrear el concepto integrando al usuario de forma realista.'
    ],
    offer: {
      label: '2 productos por el precio de 1',
      value: '$19.98',
      price: '$9.99',
      text: 'Cada herramienta tiene un valor individual de $9.99. La oferta reúne ambas por $9.99.'
    },
    bonus: null,
    landingUrl: '',
    checkoutUrl: '',
    examples: [],
    notes: 'El Protocolo JSON también puede ofrecerse individualmente por $9.99. El nombre comercial de la primera herramienta sigue abierto.'
  }
  ,{
    id: 'protocolo-json',
    slug: 'protocolo-json',
    name: 'Protocolo JSON',
    price: '$9.99',
    status: 'preparacion',
    tag: 'Referencia visual + prompt',
    stickerIcon: '{ }',
    stickerLine: 'Referencia visual → prompt estructurado',
    short: 'Convierte una imagen de referencia en una estructura clara para recrear su concepto e integrarte de forma realista.',
    problem: 'Para quien encuentra una imagen que le inspira pero necesita traducir su composición, estilo y elementos a una instrucción que la IA pueda interpretar.',
    result: 'Una ruta práctica para pasar de una referencia visual a un prompt estructurado y reutilizable.',
    includes: [
      'Lectura guiada de la imagen de referencia.',
      'Estructura organizada de escena, estilo y composición.',
      'Prompt preparado para adaptar la referencia al usuario.',
      'Uso independiente o como complemento del 2×1 Visual ESG.'
    ],
    bonus: null,
    landingUrl: '',
    checkoutUrl: '',
    examples: [],
    notes: 'También se incluye como bono en productos participantes y forma parte del 2×1 Visual ESG.'
  }

];
