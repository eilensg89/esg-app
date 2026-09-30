const ESG = {
  whatsapp: '17863032835',
  instagram: 'https://instagram.com/eilensg',
  services: {
    logo: {
      id: 'logo',
      name: 'De Logo a Personaje™',
      price: 250,
      value: 500,
      description: 'Convierte una marca básica en un sistema visual reutilizable con personaje, identidad, prompts y una demostración audiovisual.',
      agreementScope: [
        'Brief Estratégico de Marca ESG™ con definición esencial, audiencia, mensaje, bio sugerida, tono, tres columnas de contenido y 12 ideas iniciales.',
        'Ficha Visual de Marca en una sola referencia: logo base o revisión puntual, colores, tipografías y dirección visual.',
        'Character Master Sheet: personaje oficial, rasgos, anclas visuales, vistas de referencia, colores, variables permitidas y prompt maestro de consistencia.',
        'Mini Kit Visual: 9 stickers personalizados, 3 covers maestros y sistema de prompts para reutilizarlos.',
        'Prompts de producción: covers, generación rápida de imágenes y 3 prompts de animación para personaje, anuncio e imagen-a-video.',
        'Demostración audiovisual: 24 segundos totales de producción, entregados como 4×6 s, 2×12 s o 1×24 s.',
        'ESG Quick Content System™ para repetir el proceso de creación de imagen y video con la identidad definida.',
        'Entrega web organizada, entrenamiento del sistema, un día de contacto directo de hasta 8 horas laborables y acceso al canal de WhatsApp ESG.'
      ]
    },
    made57: { id:'made57', family:'made', name:'ESG Made™ · Video Visual Individual', price:57, description:'1 video visual de 15–30 segundos.', agreementScope:['1 video visual de 15–30 segundos.','Rostro generado con IA cuando aplique.','Transiciones suaves.','Música sugerida o integrada.','Subtítulos opcionales.','Precio de primera vez $57. Precio regular indicado: $87.'] },
    made100: { id:'made100', family:'made', name:'ESG Made™ · Mini Paquete Visual', price:100, description:'2 universos visuales · 10 imágenes + 10 videos de 6 segundos.', agreementScope:['2 universos visuales.','Universo 1: 5 imágenes + 5 videos cortos de 6 segundos.','Universo 2: 5 imágenes + 5 videos cortos de 6 segundos.','Total: 10 imágenes + 10 videos cortos (20 piezas).','2 revisiones del proyecto.','Dirección estética básica.','Entrega estimada: 5 días laborables después de recibir pago y materiales necesarios.'] },
    made200: { id:'made200', family:'made', name:'ESG Made™ · Sesión Visual Digital', price:200, description:'12 imágenes finales + 2 videos de 30 segundos.', agreementScope:['4 universos visuales organizados.','12 imágenes finales: 6 del universo 1 + 6 del universo 2.','2 videos finales de 30 segundos.','Cada video se construye con 6 escenas/clips de 5 segundos.','12 imágenes/escenas adicionales se producen internamente para construir los videos.','2 revisiones del proyecto.','Referencia de estilo visual.','Base Visual de Marca disponible por +$50.'] },
    made400: { id:'made400', family:'made', name:'ESG Made™ · Paquete Visual Pro', price:400, description:'Sesión Visual Digital + Base Visual de Marca + voz humana + enfoque comercial.', agreementScope:['Incluye la estructura completa de la Sesión Visual Digital.','12 imágenes visuales finales.','2 videos finales de 30 segundos.','Base Visual de Marca incluida.','Voz humana incluida.','Estilo anuncio comercial incluido.','2 revisiones del proyecto.'] },
    web250: { id:'web250', family:'web', name:'Web ESG™ · Web Esencial', price:250, description:'Web para presentar el negocio, explicar servicios y llevar al contacto.', agreementScope:['Diseño responsive para móvil y computadora.','Publicación técnica en GitHub/Vercel y HTTPS.','Conexión del dominio aportado por el cliente; compra o renovación del dominio no incluida.','Botones de WhatsApp y redes sociales.','SEO técnico básico, sitemap, robots.txt, Search Console e indexación inicial.','Configuración básica de Analytics.','Estructura de contenido y llamadas a la acción según información aprobada por el cliente.'] },
    web350: { id:'web350', family:'web', name:'Web ESG™ · Catálogo Fijo', price:350, description:'Catálogo visual para menús, pastelería, servicios o colecciones sin inventario.', agreementScope:['Incluye la base de Web ESG™.','Catálogo fijo organizado visualmente.','Ideal para productos o servicios que no requieren inventario ni variaciones dinámicas.','Botones de contacto o pedido según alcance aprobado.','Cambios posteriores pueden entrar en mantenimiento desde $50/mes según cantidad y complejidad.'] },
    web500: { id:'web500', family:'web', name:'Web ESG™ · Catálogo a WhatsApp', price:500, description:'Catálogo interactivo para explorar productos y cerrar el pedido por WhatsApp.', agreementScope:['Incluye la base de Web ESG™.','Catálogo interactivo con categorías/fichas y navegación pensada para móvil.','Flujo de pedido o consulta que termina en WhatsApp.','No incluye inventario de tienda online ni administración propia salvo que se contrate el módulo adicional.'] },
    web750: { id:'web750', family:'web', name:'Web ESG™ · Catálogo + Administrador', price:750, description:'Catálogo a WhatsApp con administrador propio.', agreementScope:['Incluye Web ESG™ · Catálogo a WhatsApp.','Incluye módulo de administrador propio para actualizar contenido definido en el alcance.','Capacitación básica para uso del administrador.'] },
    webShopify: { id:'webShopify', family:'web', name:'Web ESG™ · Tienda Shopify', price:500, isFrom:true, description:'E-commerce con carrito, variantes, inventario o checkout. Desde $500 según alcance.', agreementScope:['Configuración de tienda Shopify según alcance confirmado.','Diseño y estructura de la tienda.','Configuración básica de navegación y pagos disponibles en Shopify.','Suscripción de Shopify, dominio, aplicaciones pagas y comisiones de procesadores no incluidas.','El precio final puede variar según cantidad de productos, variantes, integraciones y carga de contenido.'] },
    continuityMixed: { id:'continuityMixed', family:'logo', name:'Continuidad ESG · Contenido de Marca', price:250, recurring:true, description:'Exclusivo para clientes de De Logo a Personaje™.', agreementScope:['Hasta 12 publicaciones mensuales.','Composición recomendada: 4 reels de hasta 15 s, 2 carruseles de 7 slides y 6 posts estáticos.','La producción visual se planifica internamente para mantener rentabilidad y coherencia.','1 ronda de revisión del bloque mensual.','No incluye rediseñar el personaje, rehacer branding ni cambios ilimitados.'] },
    continuityPromo: { id:'continuityPromo', family:'logo', name:'Continuidad ESG · Contenido Promocional', price:250, recurring:true, description:'Exclusivo para marcas que necesitan más flyers, banners y promociones.', agreementScope:['Hasta 16 publicaciones mensuales.','Composición recomendada: 4 reels de hasta 15 s + 12 flyers/posts estáticos construidos sobre la identidad y plantillas aprobadas.','1 ronda de revisión del bloque mensual.','La modalidad promocional supone reutilización del sistema visual aprobado; nuevas campañas o direcciones creativas pueden cotizarse aparte.'] }
  }
};

const $ = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>[...r.querySelectorAll(s)];
const state = {
  screen:'home',
  serviceFamily:null,
  serviceSlide:0,
  applicationStep:0,
  selectedServiceId:'logo',
  application:{},
  agreement:null,
  signatureData:null
};

const serviceSlidesData = {
  logo:[
    {type:'hero', eyebrow:'DE LOGO A PERSONAJE™', title:'Tu marca no necesita parecerse a todas. Necesita que la reconozcan.', text:'Definimos una dirección clara, construimos un personaje reutilizable y te dejamos un sistema que puedas seguir usando.', price:'Oferta $250 · Valor $500', image:'/assets/elenia/elenia-portrait.webp'},
    {type:'features', title:'No recibes solo un personaje', text:'Recibes una base clara para que tu marca pueda verse, hablar y producir contenido con coherencia.', features:[
      ['Brief Estratégico de Marca ESG™','Nombre, definición, audiencia, mensaje, bio sugerida, tono, CTA, tres columnas de contenido y 12 ideas iniciales.'],
      ['Ficha Visual de Marca','Logo base o revisión puntual, paleta, tipografías y dirección visual reunidas en una referencia.'],
      ['Character Master Sheet','Personaje oficial, anclas visuales, perfiles, colores, vistas, variables y prompt maestro para mantener consistencia.'],
      ['Mini Kit Visual','9 stickers + 3 covers maestros + estructura reutilizable para crear contenido.'],
      ['Prompts y sistema rápido','Prompts para covers, imágenes y 3 prompts de animación; además, ESG Quick Content System™.'],
      ['Video de demostración','24 segundos totales: 4×6 s, 2×12 s o 1×24 s para demostrar lo que el personaje puede hacer.']
    ]},
    {type:'compare', title:'Organizamos tu presencia para que se reconozca', text:'No se trata de que todo sea idéntico. Se trata de que todo se sienta parte de la misma marca.'},
    {type:'continuity', title:'Después puedes mantener la marca activa por $250/mes', text:'Este beneficio se ofrece únicamente después de completar De Logo a Personaje™.', options:[
      ['Contenido de Marca','12 publicaciones','4 reels de hasta 15 s + 2 carruseles de 7 slides + 6 posts estáticos.'],
      ['Contenido Promocional','16 publicaciones','4 reels de hasta 15 s + 12 flyers/posts estáticos basados en la identidad y plantillas aprobadas.']
    ]},
    {type:'cta', title:'Tu personaje no termina en una imagen', text:'La idea es que puedas reutilizarlo, producir contenido y mantener una identidad reconocible incluso cuando uses inteligencia artificial.', serviceId:'logo', cta:'Quiero De Logo a Personaje™ por $250'}
  ],
  made:[
    {type:'hero', eyebrow:'ESG MADE™', title:'¿Ya tienes la idea? Nosotros la hacemos visible.', text:'Producción visual con IA para marcas, autoras y emprendedoras que quieren verse profesionales, coherentes y memorables.', price:'Desde $57', image:'/assets/elenia/esg-moto.webp', moto:true},
    {type:'packages', title:'Elige el nivel de producción', text:'La cantidad está explicada con claridad para que sepas qué recibes.', packages:[
      {id:'made57', kicker:'ENTRADA', name:'Video Visual Individual', price:'$57', body:'1 video de 15–30 s. Primera vez; regular $87.'},
      {id:'made100', kicker:'BÁSICO', name:'Mini Paquete Visual', price:'$100', body:'2 universos · 10 imágenes + 10 videos de 6 s.'},
      {id:'made200', kicker:'MÁS RECOMENDADO', name:'Sesión Visual Digital', price:'$200', body:'12 imágenes finales + 2 videos de 30 s.', recommended:true},
      {id:'made400', kicker:'PRO', name:'Paquete Visual Pro', price:'$400', body:'Sesión $200 + Base Visual + voz humana + estilo comercial.'}
    ]},
    {type:'addons', title:'Adicionales disponibles', items:[
      ['Base Visual de Marca','$100 sola · +$50 con el paquete de $200','Paleta, referencia estética, dirección de estilo y guía simple de coherencia.'],
      ['Voz humana','+$50 por video','Locutor o conductor natural según disponibilidad.'],
      ['Estilo anuncio comercial','+$50 por video','Guion más comercial, ritmo de anuncio y mayor intención de venta.'],
      ['Referidos','$10 + $10','Tu amiga recibe $10 de descuento y tú $10 de crédito visual cuando reserva un video o paquete creativo.']
    ]},
    {type:'cta', title:'Empieza por una pieza o construye un universo visual', text:'Puedes entrar con un video individual o elegir un paquete cuando necesitas coherencia y volumen de contenido.', serviceId:'made200', cta:'Quiero seleccionar mi paquete ESG Made™', picker:true}
  ],
  web:[
    {type:'hero', eyebrow:'WEB ESG™', title:'Tu web debe explicar, orientar y llevar a la acción sin complicarte.', text:'Diseñamos una experiencia clara para que la persona entienda qué haces y sepa cuál es el siguiente paso.', price:'Desde $250', image:'/assets/branding/esg-logo.png'},
    {type:'packages', title:'¿Qué necesitas que haga tu web?', text:'Escoge por función, no por términos técnicos.', packages:[
      {id:'web250', kicker:'PRESENTAR', name:'Web Esencial', price:'$250', body:'Para explicar tu negocio, servicios y contacto.'},
      {id:'web350', kicker:'MOSTRAR', name:'Catálogo Fijo', price:'$350', body:'Ideal para pastelería, menú, servicios o colecciones sin inventario.'},
      {id:'web500', kicker:'COTIZAR / PEDIR', name:'Catálogo a WhatsApp', price:'$500', body:'Explora productos y cierra el pedido o consulta por WhatsApp.', recommended:true},
      {id:'web750', kicker:'ADMINISTRAR', name:'Catálogo + Administrador', price:'$750', body:'Catálogo a WhatsApp + administrador propio.'},
      {id:'webShopify', kicker:'VENDER ONLINE', name:'Tienda Shopify', price:'desde $500', body:'Carrito, variantes, inventario o checkout. El precio final depende del alcance.'}
    ]},
    {type:'webIncluded', title:'Lo lógico ya va dentro de la web', items:[
      ['Responsive','Se adapta a teléfono y computadora.'],
      ['Publicación técnica','GitHub/Vercel, HTTPS y conexión de dominio. El dominio se paga aparte.'],
      ['Contacto directo','WhatsApp y redes enlazadas sin mostrar datos sensibles en pantalla.'],
      ['Google básico','SEO técnico básico, sitemap, robots.txt, Search Console e indexación inicial.'],
      ['Medición básica','Configuración inicial de Analytics.']
    ], extras:[
      ['Pagos simples sin inventario','+$50'],
      ['Reservas','+$50'],
      ['Sitio bilingüe','+$25'],
      ['SEO profesional','+$100'],
      ['Google Business Profile','+$100'],
      ['Formulario profesional ampliado','+$100'],
      ['Mantenimiento','desde $50/mes']
    ]},
    {type:'examples', title:'Ejemplos rápidos', examples:[
      ['Pastelería con menú estable','Catálogo fijo · $350'],
      ['Catálogo donde el cliente elige y escribe por WhatsApp','Catálogo a WhatsApp · $500'],
      ['Quiero entrar y actualizar el catálogo yo misma','Catálogo + administrador · $750'],
      ['Consulta de precio fijo con botón “Reservar y pagar”','Pago simple · +$50'],
      ['Tallas, colores, inventario, carrito y checkout','Tienda Shopify · desde $500']
    ]},
    {type:'cta', title:'La web correcta es la que resuelve tu necesidad sin obligarte a pagar funciones que no usas', text:'Selecciona la opción que más se parece a tu negocio. En la solicitud puedes indicar si estás de acuerdo con el precio, si quieres conversar opciones o si necesitas una cotización diferente.', serviceId:'web250', cta:'Quiero seleccionar mi Web ESG™', picker:true}
  ]
};

function money(n){ return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(Number(n||0)); }
function esc(s=''){ return String(s).replace(/[&<>'"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':'&quot;'}[m])); }
function showToast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2200); }
function goScreen(name){
  $$('.screen').forEach(x=>x.classList.toggle('active',x.dataset.screen===name));
  state.screen=name;
  $('#backBtn').hidden=name==='home';
  $('#menuSheet').classList.remove('open');
  $('#menuSheet').setAttribute('aria-hidden','true');
}

function renderService(family, start=0){
  state.serviceFamily=family; state.serviceSlide=start;
  const stage=$('#serviceSlides'); stage.innerHTML='';
  serviceSlidesData[family].forEach((s,i)=>stage.insertAdjacentHTML('beforeend',renderSlide(s,i)));
  $('#serviceDots').innerHTML=serviceSlidesData[family].map((_,i)=>`<i class="${i===start?'active':''}"></i>`).join('');
  updateServiceSlide(); goScreen('service');
  wireDynamicServiceButtons();
}
function renderSlide(s,i){
  let inner='';
  if(s.type==='hero'){
    inner=`<section class="service-hero organic-card"><div class="visual ${s.moto?'moto':''}"><img src="${s.image}" alt=""></div><div class="copy"><span class="eyebrow">${s.eyebrow}</span><h2>${s.title}</h2><p>${s.text}</p><span class="price-chip">${s.price}</span></div></section>`;
  } else if(s.type==='features'){
    inner=`<section class="panel"><span class="eyebrow">QUÉ RECIBES</span><h2>${s.title}</h2><p>${s.text}</p><ul class="feature-list">${s.features.map(x=>`<li><b>${x[0]}</b>${x[1]}</li>`).join('')}</ul></section>`;
  } else if(s.type==='compare'){
    const messy=['Promo','Foto','Tip','Evento','Frase','Venta','Info','Logo','Oferta'];
    const brand=['Marca','Valor','Acción','Marca','Valor','Acción','Marca','Valor','Acción'];
    inner=`<section class="panel"><span class="eyebrow">ANTES / DESPUÉS</span><h2>${s.title}</h2><p>${s.text}</p><div class="compare-wrap"><div><small>ANTES</small><div class="feed-grid messy">${messy.map(x=>`<span>${x}</span>`).join('')}</div></div><div class="compare-arrow">→</div><div><small>ESG</small><div class="feed-grid brand">${brand.map(x=>`<span>${x}</span>`).join('')}</div></div></div></section>`;
  } else if(s.type==='continuity'){
    inner=`<section class="panel"><span class="eyebrow">CONTINUIDAD EXCLUSIVA</span><h2>${s.title}</h2><p>${s.text}</p><div class="continuity-options">${s.options.map((o,idx)=>`<div class="continuity"><h3>${o[0]}</h3><b>${o[1]} · $250/mes</b><p>${o[2]}</p><button class="mini-btn choose-plan" data-id="${idx===0?'continuityMixed':'continuityPromo'}">Elegir esta modalidad →</button></div>`).join('')}</div></section>`;
  } else if(s.type==='packages'){
    inner=`<section class="panel"><span class="eyebrow">OPCIONES</span><h2>${s.title}</h2><p>${s.text}</p><div class="package-grid">${s.packages.map(p=>`<button class="package choose-plan ${p.recommended?'recommended':''}" data-id="${p.id}"><span class="kicker">${p.kicker}</span><h3>${p.name}</h3><div class="big-price">${p.price}</div><p>${p.body}</p></button>`).join('')}</div></section>`;
  } else if(s.type==='addons'){
    inner=`<section class="panel"><span class="eyebrow">ADD-ONS</span><h2>${s.title}</h2>${s.items.map(x=>`<div class="price-card"><div><strong>${x[0]}</strong><p>${x[2]}</p></div><span class="price">${x[1]}</span></div>`).join('')}</section>`;
  } else if(s.type==='webIncluded'){
    inner=`<section class="panel"><span class="eyebrow">INCLUIDO</span><h2>${s.title}</h2><ul class="feature-list">${s.items.map(x=>`<li><b>${x[0]}</b>${x[1]}</li>`).join('')}</ul><h3>Adicionales</h3>${s.extras.map(x=>`<div class="price-card"><strong>${x[0]}</strong><span class="price">${x[1]}</span></div>`).join('')}</section>`;
  } else if(s.type==='examples'){
    inner=`<section class="panel"><span class="eyebrow">EJEMPLOS</span><h2>${s.title}</h2>${s.examples.map(x=>`<div class="price-card"><strong>${x[0]}</strong><span class="price">${x[1]}</span></div>`).join('')}</section>`;
  } else if(s.type==='cta'){
    inner=`<section class="panel cta-panel"><img src="/assets/branding/esg-butterfly.png" alt="" style="width:62px;height:62px;object-fit:contain"><span class="eyebrow">SIGUIENTE PASO</span><h2>${s.title}</h2><p>${s.text}</p>${s.picker?`<button class="pill-btn gold wide" data-open-picker="${state.serviceFamily}">${s.cta}</button>`:`<button class="pill-btn gold wide start-application" data-id="${s.serviceId}">${s.cta}</button>`}<button class="text-cta whatsapp-link">Prefiero hablar primero por WhatsApp</button></section>`;
  }
  return `<article class="service-slide ${i===state.serviceSlide?'active':''}" data-index="${i}">${inner}</article>`;
}
function updateServiceSlide(){
  const slides=$$('.service-slide'); slides.forEach((x,i)=>x.classList.toggle('active',i===state.serviceSlide));
  $$('#serviceDots i').forEach((x,i)=>x.classList.toggle('active',i===state.serviceSlide));
  $('#servicePrev').style.visibility=state.serviceSlide===0?'hidden':'visible';
  const last=state.serviceSlide===slides.length-1;
  $('#serviceNext').style.visibility=last?'hidden':'visible';
}
function wireDynamicServiceButtons(){
  $$('.choose-plan').forEach(btn=>btn.addEventListener('click',()=>startApplication(btn.dataset.id)));
  $$('.start-application').forEach(btn=>btn.addEventListener('click',()=>startApplication(btn.dataset.id)));
  $$('[data-open-picker]').forEach(btn=>btn.addEventListener('click',()=>openPlanPicker(btn.dataset.openPicker)));
  wireContactButtons();
}
function openPlanPicker(family){
  const ids=family==='made'?['made57','made100','made200','made400']:['web250','web350','web500','web750','webShopify'];
  const html=`<div class="form-card"><span class="eyebrow">ELIGE UNA OPCIÓN</span><h3>${family==='made'?'ESG Made™':'Web ESG™'}</h3><div class="option-grid">${ids.map(id=>{const s=ESG.services[id];return `<label class="option-card"><input type="radio" name="quickPlan" value="${id}"><span>${s.name.replace(/^.*·\s*/,'')}<br>${s.isFrom?'desde ':''}${money(s.price)}</span></label>`}).join('')}</div><button class="pill-btn gold wide" id="confirmQuickPlan" style="margin-top:12px">Continuar</button></div>`;
  const current=$('.service-slide.active'); current.insertAdjacentHTML('beforeend',html);
  $('#confirmQuickPlan').addEventListener('click',()=>{const v=$('input[name="quickPlan"]:checked'); if(!v){showToast('Selecciona una opción');return;} startApplication(v.value);});
}

const baseQuestions = [
  ['brandName','¿Cómo se llama tu marca o cómo quieres que se llame?','text','Si todavía no tienes nombre, escribe tu nombre personal y explica brevemente qué quieres construir.'],
  ['offer','¿Qué haces, vendes o quieres vender?','textarea','Explícalo de la forma más sencilla posible. ¿Qué recibe exactamente una persona cuando te paga?'],
  ['difference','¿Qué experiencia, conocimiento o forma de hacer las cosas tienes que te diferencia?','textarea','Puede ser algo profesional, vivido o una manera particular de resolver el problema.'],
  ['audience','¿A quién quieres atraer?','textarea','Describe a UNA persona concreta: edad aproximada, profesión o situación, dónde está hoy y qué quiere conseguir.'],
  ['problem','¿Cuál es el principal problema que esa persona quiere resolver?','textarea','Si puedes, explica también cómo se siente por no haberlo resuelto todavía.'],
  ['result','¿Qué resultado quieres ayudarla a conseguir?','textarea','¿Qué debería cambiar, mejorar, conseguir, ahorrar, aprender o sentir?'],
  ['goal','¿Qué quieres lograr con tu marca durante los próximos 3–6 meses?','select','', ['Ganar visibilidad','Conseguir clientes','Vender una oferta','Monetizar mi audiencia','Lanzar un producto','Posicionarme como experta/o','Reposicionarme','Crecer una comunidad','Otra']],
  ['selling','¿Qué vendes actualmente o qué te gustaría vender primero?','textarea','Incluye producto/servicio, formato y precio aproximado si lo sabes.'],
  ['platforms','¿Dónde quieres comunicar tu marca y qué formato se te hace más natural?','textarea','Instagram, TikTok, LinkedIn, YouTube, Facebook, Email u otro. Indica si prefieres hablar, escribir, enseñar, contar historias, tutoriales, mostrar tu trabajo o no aparecer.'],
  ['feel','¿Cómo quieres que se sienta y se vea tu marca?','textarea','Escribe 3 palabras, lo que quieres evitar, colores que te gustan, referencias visuales y la acción principal que quieres que haga una persona después de ver tu contenido.']
];

function startApplication(serviceId){
  state.selectedServiceId=serviceId in ESG.services?serviceId:'logo';
  state.applicationStep=0;
  state.application={serviceId:state.selectedServiceId};
  renderApplication(); goScreen('apply');
}
function applicationSteps(){
  const s=ESG.services[state.selectedServiceId];
  const intro=[{kind:'service'}];
  const q=[]; for(let i=0;i<baseQuestions.length;i+=2) q.push({kind:'base',items:baseQuestions.slice(i,i+2)});
  const links={kind:'links'};
  const specific={kind:'specific',family:s.family||s.id};
  const final={kind:'intent'};
  return [...intro,...q,links,specific,final];
}
function renderApplication(){
  const steps=applicationSteps();
  const wrap=$('#applySteps'); wrap.innerHTML=steps.map((st,i)=>`<section class="form-step ${i===state.applicationStep?'active':''}" data-apply-step="${i}">${renderApplicationStep(st)}</section>`).join('');
  wireApplicationInputs(); updateApplicationNav();
}
function renderApplicationStep(st){
  const service=ESG.services[state.selectedServiceId];
  if(st.kind==='service'){
    const family=service.family||service.id;
    const relevant=Object.values(ESG.services).filter(x=>family==='logo'?(x.id==='logo'||x.id.startsWith('continuity')):x.family===family);
    return `<div class="form-card"><span class="eyebrow">SERVICIO Y PRECIO</span><h3>¿Qué quieres solicitar?</h3><div class="option-grid">${relevant.map(x=>`<label class="option-card"><input type="radio" name="serviceId" value="${x.id}" ${x.id===state.selectedServiceId?'checked':''}><span>${x.name.replace(/^.*·\s*/,'')}<br>${x.isFrom?'desde ':''}${money(x.price)}${x.recurring?'/mes':''}</span></label>`).join('')}</div><div class="field"><span>Nombre completo</span><input name="clientName" value="${esc(state.application.clientName||'')}" required></div><div class="field"><span>WhatsApp</span><input name="clientPhone" inputmode="tel" value="${esc(state.application.clientPhone||'')}" placeholder="Incluye código de país" required></div><div class="field"><span>Correo</span><input name="clientEmail" type="email" value="${esc(state.application.clientEmail||'')}"></div></div>`;
  }
  if(st.kind==='base') return `<div class="form-card"><span class="eyebrow">MINI ENTREVISTA DE MARCA</span>${st.items.map(q=>renderField(q)).join('')}</div>`;
  if(st.kind==='links') return `<div class="form-card"><span class="eyebrow">PRESENCIA ACTUAL</span><h3>Enlaces y referencias</h3>${renderSimple('instagram','Instagram','text','@usuario o link')}${renderSimple('tiktok','TikTok','text','@usuario o link')}${renderSimple('facebook','Facebook','text','link de la página')}${renderSimple('website','Web actual','url','https://...')}${renderSimple('references','Marcas, cuentas o estilos que te gustan','textarea','Puedes pegar enlaces o describirlos.')}</div>`;
  if(st.kind==='specific') return renderSpecificQuestions(st.family);
  return `<div class="form-card"><span class="eyebrow">ANTES DE ENVIAR</span><h3>¿Cómo quieres continuar?</h3><div class="option-grid"><label class="option-card"><input type="radio" name="intent" value="agree"><span>Estoy de acuerdo con el precio mostrado</span></label><label class="option-card"><input type="radio" name="intent" value="talk"><span>Quiero conversar sobre opciones / precio</span></label><label class="option-card"><input type="radio" name="intent" value="custom"><span>Necesito una cotización diferente</span></label></div>${renderSimple('extraNote','¿Hay algo más que quieras contarnos?','textarea','Escribe cualquier detalle importante.')}</div>`;
}
function renderField(q){
  const [name,label,type,help,options]=q; const val=state.application[name]||'';
  if(type==='select') return `<label class="field"><span>${label}<small>${help||''}</small></span><select name="${name}" required><option value="">Selecciona</option>${options.map(o=>`<option ${val===o?'selected':''}>${o}</option>`).join('')}</select></label>`;
  if(type==='textarea') return `<label class="field"><span>${label}<small>${help||''}</small></span><textarea name="${name}" required>${esc(val)}</textarea></label>`;
  return `<label class="field"><span>${label}<small>${help||''}</small></span><input name="${name}" type="${type}" value="${esc(val)}" required></label>`;
}
function renderSimple(name,label,type='text',ph=''){
  const val=state.application[name]||'';
  return `<label class="field"><span>${label}</span>${type==='textarea'?`<textarea name="${name}" placeholder="${esc(ph)}">${esc(val)}</textarea>`:`<input name="${name}" type="${type}" placeholder="${esc(ph)}" value="${esc(val)}">`}</label>`;
}
function renderSpecificQuestions(family){
  if(family==='logo') return `<div class="form-card"><span class="eyebrow">DE LOGO A PERSONAJE™</span><h3>Para construir tu sistema visual</h3>${renderSimple('hasLogo','¿Ya tienes logo? Cuéntanos si quieres conservarlo, ajustarlo o explorar una nueva dirección.','textarea')}${renderSimple('characterRelation','¿Quieres que el personaje se parezca a ti o represente a otra persona/idea?','textarea')}${renderSimple('anchors','¿Qué características deben mantenerse siempre?','textarea','Cabello, accesorios, uniforme, joyería, gafas, tatuajes, etc.')}${renderSimple('contentNeeds','¿Qué contenido utilizarás más?','textarea','Promociones, educativo, entretenimiento, eventos, servicios, productos, etc.')}${renderSimple('avoidCharacter','¿Qué NO quieres ver en el personaje o en la identidad?','textarea')}</div>`;
  if(family==='made') return `<div class="form-card"><span class="eyebrow">ESG MADE™</span><h3>Sobre esta producción</h3>${renderSimple('madeObjective','¿Qué quieres promocionar o mostrar en esta producción?','textarea')}${renderSimple('madeIdentity','¿Ya tienes identidad de marca definida?','textarea','Logo, colores, tipografías, personaje o referencias.')}${renderSimple('madeFormats','¿Qué formatos necesitas principalmente?','textarea','Reels, posts, carruseles, flyers, anuncios, presentación, etc.')}${renderSimple('madeText','¿Hay textos, precios, promociones o productos que deban aparecer?','textarea')}</div>`;
  return `<div class="form-card"><span class="eyebrow">WEB ESG™</span><h3>Sobre tu web</h3>${renderSimple('webGoal','¿Qué quieres que una persona pueda hacer en tu web?','textarea','Conocerte, ver servicios, ver un catálogo, pedir por WhatsApp, pagar, reservar, etc.')}${renderSimple('domain','¿Ya tienes dominio?','text','Sí / No / No estoy segura/o')}${renderSimple('itemsCount','¿Cuántos productos o servicios aproximadamente quieres mostrar?','text')}${renderSimple('paymentNeed','¿Necesitas pagos desde la web?','textarea','Aclara si son pagos fijos sin inventario o si necesitas carrito, tallas, colores, cantidades o inventario.')}${renderSimple('selfManage','¿Quieres entrar y actualizar el contenido tú misma/o?','text','Sí / No / No estoy segura/o')}${renderSimple('webRefs','Comparte 1–3 webs que te gusten','textarea')}</div>`;
}
function wireApplicationInputs(){
  $$('#applyForm input, #applyForm textarea, #applyForm select').forEach(el=>{
    el.addEventListener('input',()=>saveApplicationField(el));
    el.addEventListener('change',()=>{saveApplicationField(el); if(el.name==='serviceId'){ state.selectedServiceId=el.value; state.application.serviceId=el.value; renderApplication(); }});
  });
}
function saveApplicationField(el){
  if(el.type==='radio'){ if(el.checked) state.application[el.name]=el.value; }
  else state.application[el.name]=el.value;
}
function validateCurrentApplicationStep(){
  const current=$('.form-step.active');
  let ok=true;
  $$('[required]',current).forEach(el=>{ if(!String(el.value||'').trim()){el.style.borderColor='#9b2c23';ok=false;} else el.style.borderColor=''; });
  const radios=[...new Set($$('input[type=radio]',current).map(x=>x.name))];
  radios.forEach(name=>{ if(!current.querySelector(`input[name="${name}"]:checked`)){ok=false;} });
  if(!ok) showToast('Completa los campos de este paso');
  return ok;
}
function updateApplicationNav(){
  const steps=applicationSteps();
  $('#applyPrev').style.visibility=state.applicationStep===0?'hidden':'visible';
  $('#applyNext').textContent=state.applicationStep===steps.length-1?'Revisar acuerdo →':'Continuar →';
  const pct=((state.applicationStep+1)/steps.length)*100; $('#applyProgress').style.width=`${pct}%`; $('#applyProgressLabel').textContent=`Paso ${state.applicationStep+1} de ${steps.length}`;
  $$('.form-step').forEach((x,i)=>x.classList.toggle('active',i===state.applicationStep));
  $('.screen-scroll.form-flow').scrollTo({top:0,behavior:'smooth'});
}
function nextApplication(){
  if(!validateCurrentApplicationStep()) return;
  const steps=applicationSteps();
  if(state.applicationStep<steps.length-1){state.applicationStep++;updateApplicationNav();return;}
  if(state.application.intent!=='agree'){
    openWhatsapp(`Hola Eilen. Completé la mini entrevista ESG para ${ESG.services[state.selectedServiceId].name}. Elegí: ${state.application.intent==='talk'?'quiero conversar sobre opciones/precio':'necesito una cotización diferente'}. Mi nombre es ${state.application.clientName||''}.`);
    return;
  }
  const selected=ESG.services[state.selectedServiceId];
  if(selected.isFrom){
    openWhatsapp(`Hola Eilen. Completé la mini entrevista ESG para ${selected.name}. Estoy de acuerdo en continuar, pero entiendo que el precio mostrado es \"desde ${money(selected.price)}\" y necesito confirmar el alcance y precio final antes de firmar. Mi nombre es ${state.application.clientName||''}.`);
    return;
  }
  prepareAgreement();
}

function prepareAgreement(){
  const service=ESG.services[state.selectedServiceId];
  const code=`ESG-${new Date().getFullYear()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
  state.agreement={code,createdAt:new Date().toISOString(),serviceId:service.id,serviceName:service.name,price:service.price,isFrom:!!service.isFrom,clientName:state.application.clientName||'',clientPhone:state.application.clientPhone||'',clientEmail:state.application.clientEmail||'',brandName:state.application.brandName||''};
  $('#legalName').value=state.agreement.clientName;
  $('#agreementPhone').value=state.agreement.clientPhone;
  $('#agreementEmail').value=state.agreement.clientEmail;
  renderAgreement(); goScreen('agreement'); initSignature();
}
function renderAgreement(){
  const service=ESG.services[state.selectedServiceId];
  const today=new Intl.DateTimeFormat('es-US',{dateStyle:'long'}).format(new Date());
  const priceLabel=`${service.isFrom?'Desde ':''}${money(service.price)}${service.recurring?'/mes':''}`;
  $('#agreementDocument').innerHTML=`
    <h2>Acuerdo de Servicios Digitales ESG Experience™</h2>
    <div class="agreement-summary">
      <span>Referencia</span><strong>${state.agreement.code}</strong>
      <span>Cliente</span><strong>${esc(state.application.clientName||'')}</strong>
      <span>Marca</span><strong>${esc(state.application.brandName||'')}</strong>
      <span>Servicio</span><strong>${esc(service.name)}</strong>
      <span>Inversión</span><strong>${priceLabel}</strong>
      <span>Fecha</span><strong>${today}</strong>
    </div>
    <h3>1. Alcance contratado</h3>
    <p>ESG Experience™ realizará el servicio descrito arriba conforme a la información aprobada por el cliente y a los siguientes entregables:</p>
    <ul>${service.agreementScope.map(x=>`<li>${x}</li>`).join('')}</ul>
    <h3>2. Pago y comienzo del trabajo</h3>
    <p>Todos los servicios se pagan por adelantado. El trabajo comienza cuando ESG Experience haya recibido el pago correspondiente, la información solicitada, los archivos necesarios y las aprobaciones iniciales requeridas.</p>
    <p>Si el cliente elige dividir el pago en dos partes, la producción y entrega también se divide en dos fases. La segunda fase no comienza ni se entrega hasta recibir el segundo pago.</p>
    <h3>3. Tiempos de entrega</h3>
    <p>Cuando un servicio mensual se paga completo al inicio y el cliente entrega a tiempo todos los materiales, ESG recomienda producir y entregar el contenido del mes en un único bloque dentro de un plazo estimado de hasta 7 días hábiles, salvo que el servicio seleccionado indique otro plazo. Los retrasos del cliente desplazan proporcionalmente la fecha de entrega.</p>
    <h3>4. Revisiones</h3>
    <p>Cada entrega incluye una ronda de revisión y corrección, excepto cuando el paquete seleccionado indique expresamente un número distinto. La revisión cubre ajustes razonables dentro del concepto aprobado; no incluye cambiar completamente el concepto, rehacer la estrategia, crear piezas nuevas o solicitar una dirección creativa diferente. Cambios adicionales pueden cotizarse aparte.</p>
    <h3>5. Material de producción</h3>
    <p>Pruebas, variantes, prompts internos, escenas descartadas, imágenes auxiliares y demás recursos utilizados para producir el resultado final no forman parte automática de la entrega, salvo que se indiquen expresamente como entregables.</p>
    <h3>6. Servicios digitales, cancelación y reembolsos</h3>
    <p>Los servicios de ESG Experience requieren análisis, planificación, diseño, generación y producción personalizada. Una vez iniciado el trabajo, los pagos no son reembolsables, excepto cuando lo exija la legislación aplicable o las condiciones obligatorias del proveedor de pago utilizado.</p>
    <p>Si el cliente cancela después de iniciado el proyecto, conservará únicamente los entregables correspondientes al trabajo efectivamente realizado y pagado hasta ese momento, cuando aplique.</p>
    <h3>7. Formas de pago</h3>
    <p>ESG Experience acepta Zelle y PayPal. Si el cliente desea pagar con tarjeta, solicitará el enlace de pago directamente por WhatsApp. Suscripciones, dominios, aplicaciones, comisiones de procesadores u otros costos de terceros no están incluidos salvo que se indique expresamente.</p>
    <h3>8. Aceptación electrónica</h3>
    <p>Al escribir su nombre, marcar la casilla de aceptación y firmar en el recuadro, el cliente confirma que leyó y acepta el alcance, precio y condiciones mostradas en este acuerdo.</p>`;
}

let sigCtx=null, drawing=false, hasSignature=false;
function initSignature(){
  const c=$('#signatureCanvas'); sigCtx=c.getContext('2d'); sigCtx.clearRect(0,0,c.width,c.height); sigCtx.lineWidth=5; sigCtx.lineCap='round'; sigCtx.lineJoin='round'; sigCtx.strokeStyle='#4a2a18'; drawing=false; hasSignature=false;
}
function canvasPoint(e){ const c=$('#signatureCanvas'),r=c.getBoundingClientRect(); const p=e.touches?.[0]||e; return {x:(p.clientX-r.left)*(c.width/r.width), y:(p.clientY-r.top)*(c.height/r.height)}; }
function startDraw(e){ e.preventDefault(); drawing=true; hasSignature=true; const p=canvasPoint(e); sigCtx.beginPath(); sigCtx.moveTo(p.x,p.y); }
function moveDraw(e){ if(!drawing)return; e.preventDefault(); const p=canvasPoint(e); sigCtx.lineTo(p.x,p.y); sigCtx.stroke(); }
function endDraw(){ drawing=false; }
function finalizeAgreement(){
  const name=$('#legalName').value.trim(), phone=$('#agreementPhone').value.trim(), email=$('#agreementEmail').value.trim();
  if(!name||!phone||!$('#acceptTerms').checked||!hasSignature){ $('#agreementError').textContent='Completa tu nombre, WhatsApp, aceptación y firma.'; return; }
  $('#agreementError').textContent='';
  state.agreement.legalName=name; state.agreement.phone=phone; state.agreement.email=email; state.agreement.paymentPlan=$('input[name="paymentPlan"]:checked').value; state.agreement.paymentMethod=$('#paymentMethod').value; state.agreement.signedAt=new Date().toISOString(); state.signatureData=$('#signatureCanvas').toDataURL('image/png');
  const service=ESG.services[state.selectedServiceId];
  const detail=state.agreement.paymentPlan==='full'?`pago completo de ${money(service.price)}`:`dos pagos de ${money(service.price/2)} cada uno`;
  $('#doneText').textContent=`${name}, tu acuerdo ${state.agreement.code} para ${service.name} quedó preparado con ${detail}.`;
  goScreen('done');
}
function agreementText(){
  const s=ESG.services[state.selectedServiceId], a=state.agreement;
  return `ACUERDO ESG EXPERIENCE™\nReferencia: ${a.code}\nCliente: ${a.legalName}\nMarca: ${state.application.brandName||''}\nServicio: ${s.name}\nPrecio: ${s.isFrom?'Desde ':''}${money(s.price)}${s.recurring?'/mes':''}\nForma de pago: ${a.paymentPlan==='full'?'Pago completo por adelantado':'Dos pagos; producción y entrega en dos fases'}\nMétodo preferido: ${a.paymentMethod}\nFirmado: ${new Date(a.signedAt).toLocaleString()}\n\nEl cliente declara haber leído y aceptado el alcance, tiempos, revisiones, pago por adelantado y condiciones de servicios digitales mostradas en el acuerdo.`;
}
function openWhatsapp(text){ const url=`https://wa.me/${ESG.whatsapp}?text=${encodeURIComponent(text)}`; window.open(url,'_blank','noopener,noreferrer'); }
function wireContactButtons(){
  $$('.whatsapp-link').forEach(b=>b.onclick=()=>openWhatsapp('Hola Eilen. Vengo de la web de ESG Experience y quiero información sobre sus servicios.'));
  $$('.instagram-link').forEach(b=>b.onclick=()=>window.open(ESG.instagram,'_blank','noopener,noreferrer'));
}

$('#servicePrev').addEventListener('click',()=>{if(state.serviceSlide>0){state.serviceSlide--;updateServiceSlide();}});
$('#serviceNext').addEventListener('click',()=>{const max=serviceSlidesData[state.serviceFamily].length-1;if(state.serviceSlide<max){state.serviceSlide++;updateServiceSlide();}});
$$('.service-tile').forEach(b=>b.addEventListener('click',()=>renderService(b.dataset.service)));
$('#directApplyBtn').addEventListener('click',()=>startApplication('logo'));
$('#applyPrev').addEventListener('click',()=>{if(state.applicationStep>0){state.applicationStep--;updateApplicationNav();}else goScreen('home');});
$('#applyNext').addEventListener('click',nextApplication);
$('#backBtn').addEventListener('click',()=>{ if(state.screen==='service') goScreen('home'); else if(state.screen==='apply'){ if(state.applicationStep>0){state.applicationStep--;updateApplicationNav();} else goScreen('home'); } else if(state.screen==='agreement') goScreen('apply'); else if(state.screen==='done') goScreen('agreement'); else goScreen('home'); });
$('#menuBtn').addEventListener('click',()=>{$('#menuSheet').classList.add('open');$('#menuSheet').setAttribute('aria-hidden','false');});
$('#menuClose').addEventListener('click',()=>{$('#menuSheet').classList.remove('open');$('#menuSheet').setAttribute('aria-hidden','true');});
$('#menuApply').addEventListener('click',()=>startApplication('logo'));
$$('[data-go="home"]').forEach(b=>b.addEventListener('click',()=>goScreen('home')));
$('#clearSignature').addEventListener('click',initSignature);
$('#signAgreement').addEventListener('click',finalizeAgreement);
const sc=$('#signatureCanvas'); ['pointerdown'].forEach(ev=>sc.addEventListener(ev,startDraw)); sc.addEventListener('pointermove',moveDraw); window.addEventListener('pointerup',endDraw); sc.addEventListener('touchstart',startDraw,{passive:false}); sc.addEventListener('touchmove',moveDraw,{passive:false}); sc.addEventListener('touchend',endDraw);
$('#sendWhatsappAgreement').addEventListener('click',()=>openWhatsapp(`Hola Eilen. He completado y firmado mi acuerdo ESG Experience.\n\n${agreementText()}\n\nQuedo pendiente de las instrucciones de pago.`));
$('#shareClientCopy').addEventListener('click',async()=>{const txt=agreementText(); if(navigator.share){try{await navigator.share({title:'Mi acuerdo ESG Experience',text:txt});}catch{}} else {window.open(`https://wa.me/?text=${encodeURIComponent(txt)}`,'_blank','noopener,noreferrer');}});
$('#printAgreement').addEventListener('click',()=>{goScreen('agreement');setTimeout(()=>window.print(),200)});
wireContactButtons();

if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));
