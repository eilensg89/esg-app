const APP = window.ESG_CONFIG || {};

const services = window.ESG_SERVICIOS || {};
const serviceHubs = Array.isArray(window.ESG_SERVICE_HUBS) ? window.ESG_SERVICE_HUBS : [];
const serviceByPath = Object.fromEntries(Object.entries(services).map(([k,v])=>['/'+v.slug,k]));
const testimonialsData = Array.isArray(window.ESG_TESTIMONIOS) ? window.ESG_TESTIMONIOS : [];
const storeProducts = Array.isArray(window.ESG_PRODUCTOS) ? window.ESG_PRODUCTOS : [];
const worksData = Array.isArray(window.ESG_TRABAJOS) ? window.ESG_TRABAJOS : [];
const aboutData = window.ESG_ABOUT || {origin:[],trust:[]};
const miaData = window.ESG_MIA || {};
const referralProfiles = Array.isArray(window.ESG_REFERRALS) ? window.ESG_REFERRALS : [];
const app = document.getElementById('app');
const toast = document.getElementById('toast');
let currentTab = 0;

function showToast(msg){ toast.textContent=msg; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),1700); }
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function normalizeRef(v=''){return String(v||'').trim().toLowerCase().replace(/[^a-z0-9_-]/g,'').slice(0,40)}
function referralProfile(code=''){const c=normalizeRef(code);return referralProfiles.find(x=>x.active!==false&&normalizeRef(x.code)===c)||null}
function captureReferral(){
  if(APP.referral?.enabled===false) return;
  const code=normalizeRef(new URLSearchParams(location.search).get('ref')||'');
  if(!code) return;
  try{localStorage.setItem(APP.referral?.storageKey||'esgReferral',JSON.stringify({code,capturedAt:Date.now()}));}catch{}
}
function activeReferral(){
  if(APP.referral?.enabled===false) return null;
  try{
    const raw=JSON.parse(localStorage.getItem(APP.referral?.storageKey||'esgReferral')||'null');
    if(!raw?.code) return null;
    const max=(Number(APP.referral?.days)||30)*86400000;
    if(Date.now()-Number(raw.capturedAt||0)>max){localStorage.removeItem(APP.referral?.storageKey||'esgReferral');return null}
    const profile=referralProfile(raw.code);
    return {code:normalizeRef(raw.code),name:profile?.name||raw.code,verified:!!profile,profile};
  }catch{return null}
}
function referralData(manual=''){
  const typed=String(manual||'').trim();
  const typedCode=normalizeRef(typed);
  if(typedCode){try{localStorage.setItem(APP.referral?.storageKey||'esgReferral',JSON.stringify({code:typedCode,capturedAt:Date.now()}));}catch{}}
  const active=activeReferral();
  const code=typedCode||active?.code||'';
  const profile=referralProfile(code);
  return {referralCode:code,referralName:profile?.name||(typed||active?.name||''),referralVerified:!!profile,discountPercent:code?(Number(APP.referral?.discountPercent)||5):''};
}
function shareableUrl(raw=location.href){
  const u=new URL(raw,location.origin); const r=activeReferral();
  if(r?.code) u.searchParams.set('ref',r.code);
  return u.toString();
}
function go(path){ history.pushState({},'',path); captureReferral(); currentTab=0; render(); }
function back(){ if(history.length>1) history.back(); else go('/'); }
function route(){ return location.pathname.replace(/\/$/,'') || '/'; }
captureReferral();
function icon(name){ const map={back:'←',share:'↗',home:'⌂',services:'◇',analyse:'◎',channel:'◉',copy:'⧉',whatsapp:'W',phone:'☎',instagram:'◎'}; return map[name]||'•'; }
function shell(content,{backable=true,share=true,dock=true,brand=true}={}){
  const p=route();
  return `<div class="app-frame"><div class="app-shell">
    <header class="topbar">
      ${backable?`<button class="back-btn" data-back aria-label="Volver">${icon('back')}</button>`:''}
      ${brand?`<button class="brand-mini" data-go="/" aria-label="Inicio"><img src="/assets/ui-3d/brand/logo-esg-round-stone-gold.png" alt="ESG Experience"><span>ESG EXPERIENCE™</span></button>`:''}
      <div class="spacer"></div>
      ${share?`<button class="share-chip" data-share>Compartir ${icon('share')}</button>`:''}
    </header>
    <main class="screen">${content}</main>
    ${dock?dockHtml(p):''}
  </div></div>`;
}
function dockHtml(){return `<footer class="app-footer">
  <div class="footer-kicker">Conócenos y contáctanos</div>
  <div class="footer-links">
    <button class="footer-link" data-go="/sobre-eilen">Sobre EilenSG · Testimonios</button>
    <a class="footer-link" href="${APP.instagram}" target="_blank" rel="noopener">Sígueme en Instagram</a>
    <a class="footer-link" href="${APP.channel}" target="_blank" rel="noopener">Canal gratis</a>
  </div>
  <small>${esc(APP.copyright||'© ESG Experience™ · Todos los derechos reservados')}</small>
</footer>`;}
function shareBox(){return ''}
function assetNavButton(src,alt,path,cls=''){
  return `<button class="asset-nav ${cls}" data-go="${path}" aria-label="${esc(alt)}"><img src="${src}" alt="${esc(alt)}"></button>`;
}
function assetLinkButton(src,alt,href,cls=''){
  return `<a class="asset-nav ${cls}" href="${href}" target="_blank" rel="noopener" aria-label="${esc(alt)}"><img src="${src}" alt="${esc(alt)}"></a>`;
}
function teamReferralStrip(){
  const t=APP.team||{}; const r=APP.referral||{}; const active=activeReferral();
  return `<section class="team-referral-strip"><div class="team-copy"><b>${esc(t.headline||'ESG Experience™ es un equipo.')}</b><span>${esc(t.text||'Trabajamos con colaboradoras y colaboradores según cada proyecto.')}</span></div><div class="referral-copy"><b>${esc(r.publicTitle||'¿Vienes referido por alguien de nuestro equipo?')}</b><span>${esc(r.publicText||'Indica su nombre o código al solicitar tu cotización.')}</span>${active?`<small>Referencia detectada: <strong>${esc(active.name)}</strong></small>`:''}</div></section>`;
}
function referralFormBlock(){
  const active=activeReferral(); const pct=Number(APP.referral?.discountPercent)||5;
  return `<div class="referral-form-block"><b>¿Vienes de parte de alguien de nuestro equipo?</b><p>${active?`Detectamos el código <strong>${esc(active.code)}</strong>.`:`Escribe el nombre o código de la colaboradora o colaborador que te recomendó ESG.`} El beneficio de ${pct}% en servicios se confirma al preparar la cotización.</p><div class="field"><label for="referralManual">Nombre o código de referido</label><input id="referralManual" name="referralManual" type="text" value="${active?esc(active.code):''}" placeholder="Ej. ana"></div></div>`;
}
function productExternalUrl(p,url){
  const r=activeReferral();
  if(r?.code && p?.affiliateLinks?.[r.code]) return p.affiliateLinks[r.code];
  if(r?.code && r.profile?.productAffiliateUrls?.[p?.slug]) return r.profile.productAffiliateUrls[p.slug];
  return url;
}
function home(){return shell(`<div class="lux-home">
  <section class="lux-hero-panel">
    <div class="lux-hero-copy">
      <img class="lux-round-logo" src="/assets/ui-3d/brand/logo-esg-round-stone-gold.png" alt="ESG Experience™">
      <div class="lux-kicker">${esc(APP.home?.kicker||'Una experiencia para construir con dirección')}</div>
      <h1>${esc(APP.home?.title||'La IA puede generar todo menos tu marca')}</h1>
      <p>${esc(APP.home?.lead||'Explora soluciones para organizar tu identidad, crear contenido, construir tu presencia digital o aprender a hacerlo tú misma.')}</p>
      <div class="lux-team-line">ESG Experience™ es un equipo de colaboradoras y colaboradores.</div>
    </div>
    <div class="lux-avatar-wrap" aria-hidden="true">
      <div class="lux-avatar-plaque"><img src="/assets/ui-3d/brand/eilen-avatar-portrait.png" alt=""></div>
      <img class="lux-butterfly" src="/assets/ui-3d/brand/butterfly-gold-3d.png" alt="">
    </div>
  </section>

  <div class="lux-primary-actions lux-home-four">
    <div class="home-pathway">${assetNavButton('/assets/ui-3d/buttons/home/01-explorar-servicios.png','Explorar servicios','/servicios')}<div class="home-pathway-note">Para quien quiere delegar</div></div>
    <div class="home-pathway">${assetNavButton('/assets/ui-3d/buttons/home/11-tienda-esg.png','Tienda ESG','/tienda')}<div class="home-pathway-note">Para quien quiere ejecutar</div></div>
    <div class="home-pathway">${assetLinkButton('/assets/ui-3d/buttons/home/02-unirme-canal-gratis.png','Unirme al canal gratis',APP.channel)}<div class="home-pathway-note channel-note">Recursos gratis + información diaria</div></div>
    <div class="home-pathway">${assetNavButton('/assets/ui-3d/buttons/home/06-mia-monetiza-con-ia.png','MIA — Monetiza con IA','/mia')}<div class="home-pathway-note">Para quien quiere aprender</div></div>
  </div>

  ${teamReferralStrip()}
  <div class="lux-about-action">${assetNavButton('/assets/ui-3d/buttons/home/07-conoce-eilensg.png','Conoce a EilenSG','/sobre-eilen','wide')}</div>
  <div class="lux-home-signoff"><span>ESG EXPERIENCE™</span><small>BY REEY MULTISERVICES · Todos los derechos reservados</small></div>
</div>`,{backable:false,share:false,dock:false,brand:false});}
function homeTile(tag,name,desc,path,ico,mia=false){return `<button class="relief-card ${mia?'mia':''}" data-go="${path}"><div class="tile-icon">${ico}</div><div class="tag">${tag}</div><h3>${name}</h3><p>${desc}</p></button>`}
function servicesHome(){const hubs=(serviceHubs.length?serviceHubs:[
  {label:'De Logo a Personaje™',path:'/logo-a-personaje',asset:'/assets/ui-3d/buttons/home/03-de-logo-a-personaje.png'},
  {label:'ESG Made™',path:'/esg-made',asset:'/assets/ui-3d/buttons/home/04-esg-made.png'},
  {label:'Web ESG™',path:'/web-esg',asset:'/assets/ui-3d/buttons/home/05-web-esg.png'},
  {label:'Acompañamiento ESG por hora',path:'/acompanamiento-por-hora',asset:'/assets/ui-3d/buttons/home/12-acompanamiento-hora.svg'}
]).filter(x=>x.active!==false);return shell(`<div class="lux-services-page"><div class="breadcrumb">Servicios ESG</div><h1 class="section-title">¿Qué quieres resolver?</h1><p class="section-sub">Elige lo que quieres delegar o el tipo de acompañamiento que necesitas. Cada opción abre su propia ficha con alcance, precio y próximos pasos.</p><div class="lux-services-sticker-grid">${hubs.map(x=>assetNavButton(x.asset,x.label,x.path)).join('')}</div><div class="service-referral-note"><b>${esc(APP.referral?.publicTitle||'¿Vienes referido por alguien de nuestro equipo?')}</b><span>${esc(APP.referral?.publicText||'Indica su nombre o código al solicitar tu cotización.')}</span></div></div>${shareBox('Servicios ESG Experience™')}`);}
function familyMade(){return shell(`<div class="breadcrumb">Servicios / ESG Made™</div><h1 class="section-title">ESG Made™</h1><p class="section-sub">Visuales con IA para marcas que quieren verse coherentes y profesionales sin producir contenido al azar.</p><div class="product-list">
${productCard('Video Visual Individual','Una pieza puntual de 15–30 s.','$57 / $87','/esg-made/video-individual')}
${productCard('Mini Paquete Visual','2 universos · 10 imágenes + 10 videos.','$100','/esg-made/mini')}
${productCard('Sesión Visual Digital','12 imágenes finales + 2 videos de 30 s.','$200','/esg-made/sesion-visual')}
${productCard('Paquete Visual Pro','Sesión + voz + tratamiento comercial + cortes extra.','$400','/esg-made/pro')}
</div><button class="btn btn-ghost work-family-btn" data-go="/trabajos?familia=ESG%20Made%E2%84%A2">Ver trabajos reales de ESG Made™</button><div class="detail-card" style="margin-top:12px"><div class="detail-badge">Incluido en todos</div><h3>Kit Visual de Marca ESG™</h3><p class="section-sub" style="margin:0">Referencia visual del proyecto con identidad disponible, dirección cromática, estilo recomendado y reglas básicas de coherencia.</p></div>${shareBox('ESG Made™')}`);}
function familyWeb(){return shell(`<div class="breadcrumb">Servicios / Web ESG™</div><h1 class="section-title">Web ESG™</h1><p class="section-sub">Elige una web para presentar tu negocio, un catálogo para organizar tu oferta o una tienda Shopify para vender productos.</p><div class="product-list">
${productCard('Web Esencial','Presentar negocio, servicios y contacto.','$250','/web-esg/esencial')}
${productCard('Catálogo fijo','Oferta estable sin inventario.','$350','/web-esg/catalogo-fijo')}
${productCard('Catálogo a WhatsApp','Navegación + fichas + cierre por WhatsApp.','$500','/web-esg/catalogo-whatsapp')}
${productCard('Shopify','Montaje inicial + hasta 50 productos.','Desde $200','/web-esg/shopify')}
</div><button class="btn btn-ghost work-family-btn" data-go="/trabajos?familia=Web%20ESG%E2%84%A2">Ver proyectos Web ESG™</button><div class="detail-card" style="margin-top:12px"><h3>Complementos vigentes</h3><ul><li>Administrador propio: +$250.</li><li>Catálogo WhatsApp + administrador: $750.</li><li>Pagos simples: +$50.</li><li>Mantenimiento: desde $50/mes.</li></ul></div>${shareBox('Web ESG™')}`);}
function productCard(name,desc,price,path){return `<button class="product-card" data-go="${path}"><div><h3>${name}</h3><p>${desc}</p></div><div class="money">${price}</div></button>`}

function storeStatusLabel(p){
  if(p.status==='disponible') return '<span class="store-status available">Disponible</span>';
  if(p.status==='oculto') return '<span class="store-status hidden">Oculto</span>';
  return '<span class="store-status">Próximamente</span>';
}
function storeSticker(p){
  const status=p.status==='disponible'?'Disponible':p.status==='preparacion'?'Próximamente':'';
  const price=p.price&&p.price!=='Precio por definir'?`<span class="store-sticker-price">${esc(p.price)}</span>`:'';
  return `<button class="store-sticker" data-go="/tienda/${esc(p.slug)}">
    <span class="store-sticker-medallion">${esc(p.stickerIcon||'ESG')}</span>
    <span class="store-sticker-copy"><small>${esc(p.tag||'Producto ESG')}</small><b>${esc(p.name)}</b><em>${esc(p.stickerLine||p.short)}</em></span>
    <span class="store-sticker-meta">${status?`<i>${esc(status)}</i>`:''}${price}<strong>›</strong></span>
  </button>`;
}
function storeHome(){
  return shell(`<div class="breadcrumb">Productos ESG / Tienda</div><div class="store-hero"><span class="admin-badge">Productos propios</span><h1 class="section-title">Tienda ESG</h1><p class="section-sub">Productos prácticos para quien quiere ejecutar por su cuenta. Toca un producto para ver qué resuelve, qué incluye y cómo funciona.</p></div>${storeProducts.length?`<div class="store-sticker-grid">${storeProducts.filter(p=>p.status!=='oculto').map(storeSticker).join('')}</div>`:`<div class="empty">La tienda está preparada. Todavía no hay productos cargados.</div>`}<div class="store-flex-note"><b>La tienda está preparada para crecer.</b><span>Podrás añadir, editar u ocultar productos sin cambiar la estructura principal de la web.</span></div>${shareBox('Tienda ESG')}`);
}
function storeProduct(){
  const slug=route().split('/').pop();
  const p=storeProducts.find(x=>x.slug===slug);
  if(!p) return shell(`<div class="breadcrumb">Tienda ESG</div><h1 class="section-title">Producto no encontrado</h1><button class="btn btn-gold" data-go="/tienda">Volver a la tienda</button>`);
  const list=(p.includes||[]).map(x=>`<li>${esc(x)}</li>`).join('');
  const bonus=p.bonus?`<div class="store-offer"><span>BONO INCLUIDO</span><h3>${esc(p.bonus.name)}</h3><p>Valor individual: ${esc(p.bonus.value||'')}</p><p>${esc(p.bonus.text||'')}</p></div>`:'';
  const offer=p.offer?`<div class="store-offer offer"><span>${esc(p.offer.label)}</span><h3>${esc(p.offer.price)}</h3><p>Valor combinado: ${esc(p.offer.value||'')}</p><p>${esc(p.offer.text||'')}</p></div>`:'';
  const examples=(p.examples||[]).length?`<div class="detail-card"><h3>Ejemplos / resultados</h3><div class="store-examples">${p.examples.map(e=>`<a href="${esc(e.url||'#')}" target="_blank" rel="noopener">${esc(e.label||'Ver ejemplo')}</a>`).join('')}</div></div>`:`<div class="detail-card store-placeholder"><h3>Ejemplos y resultados</h3><p>Aquí podrán añadirse después enlaces, carruseles de hasta 4 imágenes, casos reales, canales, reels o videos que demuestren qué se puede conseguir con esta herramienta.</p></div>`;
  let cta='';
  if(p.checkoutUrl){cta=`<a class="btn btn-gold" href="${esc(productExternalUrl(p,p.checkoutUrl))}" target="_blank" rel="noopener">Comprar ahora</a>`}
  else if(p.landingUrl){cta=`<a class="btn btn-gold" href="${esc(productExternalUrl(p,p.landingUrl))}" target="_blank" rel="noopener">Ver página completa</a>`}
  else {cta=`<button class="btn btn-gold" disabled aria-disabled="true">Página de compra en preparación</button>`}
  return shell(`<div class="breadcrumb">Tienda ESG / ${esc(p.name)}</div><div class="detail-head store-product-head"><div><span class="store-tag">${esc(p.tag||'Producto ESG')}</span><h1 class="section-title">${esc(p.name)}</h1><p class="section-sub">${esc(p.short)}</p></div><div class="detail-price">${esc(p.price)}</div></div>${offer}${bonus}<div class="detail-card"><h3>Qué resuelve</h3><p>${esc(p.problem||'')}</p><h3>Resultado</h3><p>${esc(p.result||'')}</p></div><div class="detail-card"><h3>Qué incluye</h3><ul>${list}</ul></div>${examples}${p.notes?`<div class="note store-product-note">${esc(p.notes)}</div>`:''}<div class="action-stack">${cta}<button class="btn btn-dark" data-go="/tienda">Ver todos los productos</button></div>${shareBox(p.name)}`);
}
function detail(key){ const s=services[key]; const panels=detailPanels(key,s); const tabNames=Object.keys(panels); const tabName=tabNames[Math.min(currentTab,tabNames.length-1)]; const actions=key==='hora'?`<div class="split-actions"><button class="btn btn-gold" data-contract="hora">Elegir horario y contratar</button><button class="btn btn-dark" data-analysis="hora">Primero quiero explicar lo que necesito</button></div>`:`<div class="split-actions"><button class="btn btn-gold" data-contract="${key}">Quiero contratarlo</button><button class="btn btn-dark" data-analysis="${key}">Quiero explicar mi proyecto</button></div><button class="btn btn-ghost" data-go="/trabajos?servicio=${key}">Ver trabajos reales</button>`; return shell(`<div class="breadcrumb">${s.family} / ${s.name}</div><div class="detail-head"><div><div class="detail-badge">${s.family}</div><h1 class="section-title">${s.name}</h1><p class="section-sub">${s.summary}</p></div><div class="detail-price">${s.price}</div></div>
<div class="tabbar">${tabNames.map((t,i)=>`<button class="tab ${i===currentTab?'active':''}" data-tab="${i}">${t}</button>`).join('')}</div>
<div class="detail-card detail-panel">${panels[tabName]}</div>
<div class="action-stack">${actions}</div>${shareBox(s.name)}`);}
function detailPanels(key,s){
  const list=arr=>`<ul>${arr.map(x=>`<li>${x}</li>`).join('')}</ul>`;
  if(key==='dlp') return {
    'Resumen':`<h3>Qué resuelve</h3><p>${s.intro}</p><h3>Para quién funciona</h3>${list(s.ideal)}`,
    'Qué incluye':`<h3>Checklist oficial</h3>${list(s.include)}`,
    '24 segundos':`<h3>Producción audiovisual incluida</h3><p>El total incluido es de 24 segundos y el cliente elige una distribución:</p>${list(['4 videos × 6 segundos.','2 videos × 12 segundos.','1 video de hasta 24 segundos.'])}<div class="note">Las pruebas, escenas y variantes internas usadas para construir los videos no son entregables automáticos.</div>`,
    'Continuidad':`<h3>Continuidad exclusiva · $250/mes</h3><p>Solo está disponible después de completar De Logo a Personaje™ y trabaja sobre la identidad ya aprobada.</p><ul><li><b>Contenido de Marca:</b> 4 reels de hasta 15 s + 2 carruseles de 7 slides + 6 posts = 12 publicaciones.</li><li><b>Contenido Promocional:</b> 4 reels de hasta 15 s + 12 flyers/posts = 16 publicaciones.</li></ul>`,
    'Condiciones':`<h3>Límites claros</h3>${list(s.limits)}<p>Incluye 1 ronda de revisión/corrección dentro del alcance.</p>`
  };
  if(key==='sesion') return {
    'Resumen':`<h3>Qué recibes</h3><p>${s.intro}</p><ul><li><b>12 imágenes finales.</b></li><li><b>2 videos finales de 30 segundos.</b></li><li>Kit Visual de Marca ESG™.</li><li>1 ronda de revisión.</li></ul>`,
    'Qué recibes':`<h3>Entregables finales</h3><ul><li>Universo 1: 6 imágenes finales.</li><li>Universo 2: 6 imágenes finales.</li><li>Video 1: 30 segundos.</li><li>Video 2: 30 segundos.</li></ul>`,
    'Cómo se produce':`<h3>Cuatro universos creativos</h3><p>Dos universos producen tus 12 imágenes finales. Otros dos universos se desarrollan específicamente para construir cada video con escenas nuevas.</p><ul><li>Universo 3: 6 escenas nuevas → Video 1.</li><li>Universo 4: 6 escenas nuevas → Video 2.</li></ul><div class="note">Por eso los videos no son simplemente animaciones de las mismas 12 imágenes finales.</div>`,
    'Condiciones':`<h3>Importante</h3>${list(s.limits)}`
  };
  if(key==='pro') return {
    'Resumen':`<h3>Versión Pro</h3><p>${s.intro}</p><ul><li>Todo el paquete de $200.</li><li>Voz humana en los 2 videos principales.</li><li>Tratamiento de anuncio comercial.</li><li>2 cortes adicionales de 15 s.</li><li>2 propuestas de CTA/copy.</li></ul>`,
    'Qué incluye':`<h3>Checklist</h3>${list(s.include)}`,
    'Ventaja Pro':`<h3>Por qué supera la suma de add-ons</h3><p>El paquete de $200 + voz en 2 videos + tratamiento comercial en 2 videos ya suma $400. El Pro mantiene ese precio y añade 2 cortes de 15 s + 2 propuestas de CTA/copy.</p>`,
    'Condiciones':`<h3>Condiciones</h3>${list(s.limits)}<p>Incluye 1 ronda de revisión/corrección.</p>`
  };
  if(key==='hora') return {
    'Resumen':`<h3>Ayuda cuando la necesitas</h3><p>${s.intro}</p><h3>Para quién funciona</h3>${list(s.ideal||[])}`,
    'Qué puede incluir':`<h3>Durante tu bloque</h3>${list(s.include)}`,
    'Cómo funciona':`<h3>$25 por hora</h3><p>Puedes solicitar una hora puntual o bloques recurrentes. Antes de reservar confirmamos qué quieres trabajar y si corresponde a esta modalidad. Si el proyecto requiere un servicio completo, te indicamos la opción adecuada antes de comenzar.</p>`,
    'Condiciones':`<h3>Límites claros</h3>${list(s.limits)}`
  };
  const panels={
    'Resumen':`<h3>Qué resuelve</h3><p>${s.intro}</p>`,
    'Qué incluye':`<h3>Checklist</h3>${list(s.include)}`,
    'Condiciones':`<h3>Límites y condiciones</h3>${list(s.limits)}<p>Incluye 1 ronda de revisión/corrección dentro del alcance.</p>`
  };
  if(key==='whatsapp') panels['Administrador']=`<h3>Administrador opcional</h3><p>Si quieres actualizar el catálogo por tu cuenta, se añade Administrador propio por +$250. Catálogo a WhatsApp + administrador = $750. Si prefieres que ESG haga cambios, puedes usar mantenimiento.</p>`;
  if(key==='shopify'){ panels['Puede aumentar']=`<h3>Cuándo requiere cotización adicional</h3>${list(s.limits.slice(0,1))}`; panels['Costos externos']=`<h3>Pagados por el cliente</h3><p>Suscripción Shopify, dominio, aplicaciones y servicios externos.</p>`; delete panels['Condiciones']; }
  if(key==='esencial'){ panels['Costos externos']=`<h3>No incluidos</h3>${list(s.limits)}`; }
  if(key==='fijo'){ panels['No incluye']=`<h3>No incluye</h3>${list(s.limits)}`; }
  return panels;
}
function mia(){const areas=(miaData.areas||[]).map(x=>`<div class="mia-mini"><b>${esc(x[0])}</b>${esc(x[1])}</div>`).join('');const inc=(miaData.includes||[]).map(x=>`<li>${esc(x)}</li>`).join('');return shell(`<div class="breadcrumb">Formación recomendada / MIA</div><section class="mia-stage"><span class="admin-badge">${esc(miaData.eyebrow||'Academia externa recomendada')}</span><div class="mia-mark">MIA</div><h2>${esc(miaData.title||'MIA — Monetiza con IA')}</h2><p>${esc(miaData.intro||'')}</p><div class="mia-grid">${areas}</div></section><div class="detail-card" style="margin-top:12px"><h3>Qué encontrarás</h3><ul>${inc}</ul><div class="note">${esc(miaData.disclosure||'')}</div></div><div class="action-stack"><a class="btn btn-purple" href="${APP.mia}" target="_blank" rel="noopener">Ver MIA y acceder</a></div>`);}
function analysis(prefill=''){ const s=prefill?services[prefill]:null; return shell(`<div class="breadcrumb">Análisis ESG</div><h1 class="section-title">No tienes que saber qué servicio necesitas</h1><p class="section-sub">Cuéntanos dónde estás y qué quieres conseguir. Al enviar, se prepara un mensaje estructurado para el equipo ESG por WhatsApp.</p><form class="form" id="analysis-form"><div class="form-section"><h3>Tu proyecto</h3>${field('name','Nombre completo','text',true)}${field('business','Negocio o marca','text',false)}${field('phone','WhatsApp','tel',true)}${field('email','Email','email',true)}${field('goal','¿Qué quieres conseguir?','textarea',true)}${field('current','¿Qué tienes actualmente?','textarea',false)}${field('block','¿Qué te está frenando?','textarea',false)}<div class="field"><label>¿Qué necesitas de ESG?</label><select name="need"><option ${!s?'selected':''}>Recomiéndame qué servicio necesito</option><option ${s?.family==='Identidad'?'selected':''}>De Logo a Personaje™</option><option ${s?.family==='ESG Made™'?'selected':''}>Producción visual / ESG Made™</option><option ${s?.family==='Web ESG™'?'selected':''}>Web ESG™</option><option ${s?.family==='Acompañamiento ESG™'?'selected':''}>Acompañamiento ESG por hora · $25/h</option><option>Necesito una cotización diferente</option><option>Otro</option></select></div>${field('notes','Comentarios o referencias','textarea',false)}${referralFormBlock()}</div><button class="btn btn-gold" type="submit">Enviar análisis por WhatsApp</button></form>${shareBox('Análisis ESG')}`);}
function field(name,label,type='text',req=false,placeholder=''){return `<div class="field"><label for="${name}">${label}${req?' *':''}</label>${type==='textarea'?`<textarea id="${name}" name="${name}" placeholder="${esc(placeholder)}" ${req?'required':''}></textarea>`:`<input id="${name}" name="${name}" type="${type}" placeholder="${esc(placeholder)}" ${req?'required':''}>`}</div>`}
function hourlyBookingBlock(){
  const h=APP.hourlyBooking||{}; const rate=Number(h.hourlyRate)||25; const min=Number(h.minHours)||1; const max=Number(h.maxHours)||8;
  const referred=!!activeReferral();
  const cal=(!referred && h.calendarUrl)?`<a class="btn btn-ghost" href="${esc(h.calendarUrl)}" target="_blank" rel="noopener">Ver disponibilidad y reservar horario</a>`:'';
  const referralNotice=referred?`<div class="note"><b>Solicitud con referido:</b> el calendario directo y el pago automático están deshabilitados. Completa tu solicitud y ESG coordinará contigo el horario y el pago de forma manual.</div>`:'';
  return `<div class="form-section hourly-booking"><h3>Elige tu bloque</h3><p class="section-sub">Selecciona la duración y el horario que prefieres. El total se calcula automáticamente a $${rate}/hora.</p><div class="hourly-grid"><div class="field"><label for="hours">Cantidad de horas *</label><input id="hours" name="hours" type="number" min="${min}" max="${max}" step="1" value="${min}" required></div><div class="field"><label for="requestedDate">Fecha preferida *</label><input id="requestedDate" name="requestedDate" type="date" required></div><div class="field"><label for="requestedTime">Hora preferida *</label><input id="requestedTime" name="requestedTime" type="time" required></div><div class="field"><label for="recurrence">Modalidad</label><select id="recurrence" name="recurrence"><option value="Una sola vez">Una sola vez</option><option value="Semanal recurrente">Quiero un bloque semanal recurrente</option><option value="Necesito coordinar varios bloques">Necesito coordinar varios bloques</option></select></div></div><div class="hourly-total"><span>Total estimado</span><strong id="hourly-total-value">$${rate}</strong></div><input type="hidden" name="hourlyRate" value="${rate}"><input type="hidden" id="hourlyTotal" name="hourlyTotal" value="${rate}"><div class="note">${esc(h.confirmationText||'La fecha y hora quedan sujetas a confirmación por WhatsApp.')}</div>${referralNotice}${cal}</div>`;
}
function deliveryFor(key){return (APP.delivery&&APP.delivery[key]) || {first:7,final:10,label:'7–10 días laborables estimados'};}
function contract(key){
  const s=services[key]||services.dlp;
  const custom=decodeContractParam()||{};
  const d=deliveryFor(key);
  const price=custom.price||s.price;
  const extras=custom.extras||'';
  const phase=custom.phase||'';
  const deliveryFirst=custom.deliveryFirst||d.first;
  const deliveryFinal=custom.deliveryFinal||d.final;
  const deliveryLabel=custom.deliveryLabel||d.label;
  const specialNotes=custom.specialNotes||'';
  const terms=custom.terms||defaultTerms();
  const isHourly=key==='hora';
  const calendarSection=isHourly?hourlyBookingBlock():`<div class="form-section"><h3>Calendario estimado</h3><p>Primera etapa o avance: hasta ${esc(deliveryFirst)} días laborables. Entrega final estimada: hasta ${esc(deliveryFinal)} días laborables, sujeto a materiales, aprobaciones y alcance acordado.</p>${specialNotes?`<div class="note"><b>Nota específica:</b> ${esc(specialNotes)}</div>`:''}</div>`;
  const referredHourly=isHourly && !!activeReferral();
  const paymentSection=isHourly?(referredHourly?`<div class="form-section"><h3>Pago</h3><div class="note"><b>Solicitud con referido:</b> no se procesa pago desde esta pantalla. ESG confirmará primero el referido, el descuento aplicable, la disponibilidad y la forma de pago.</div><input type="hidden" name="payment" value="Coordinación manual por referido"></div>`:`<div class="form-section"><h3>Pago</h3><div class="checks"><label class="check"><input type="radio" name="payment" value="100% antes del bloque" checked> 100% antes del bloque confirmado.</label></div><div class="note">El horario se confirma por WhatsApp. El pago se coordina después de confirmar disponibilidad.</div></div>`):`<div class="form-section"><h3>Modalidad de pago</h3><div class="checks"><label class="check"><input type="radio" name="payment" value="100% por adelantado" checked> 100% por adelantado.</label><label class="check"><input type="radio" name="payment" value="2 pagos"> 2 pagos. La producción y la entrega se dividen; la segunda fase no se entrega antes de recibir el segundo pago.</label></div>${phase?`<div class="note" style="margin-top:10px">${esc(phase)}</div>`:''}</div>`;
  const summaryPrice=isHourly?'$25/h':esc(price);
  return shell(`<div class="breadcrumb">Contrato / ${s.name}</div><h1 class="section-title">${isHourly?'Solicitud de acompañamiento por hora':'Acuerdo de servicio'}</h1><p class="section-sub">${isHourly?'Elige el bloque que necesitas, solicita una fecha y completa tus datos. Confirmaremos disponibilidad antes del pago.':'Revisa el alcance, precio, tiempos estimados y condiciones de esta versión antes de firmar.'}</p><form class="form" id="contract-form" data-service="${key}"><div class="summary-card"><div class="summary-row"><span>Servicio</span><span>${s.name}</span></div><div class="summary-row"><span>${isHourly?'Tarifa':'Precio acordado'}</span><span><b>${summaryPrice}</b></span></div><div class="summary-row"><span>Tiempo estimado</span><span>${esc(deliveryLabel)}</span></div>${extras?`<div class="summary-row"><span>Ajuste especial</span><span>${esc(extras)}</span></div>`:''}</div><div class="form-section"><h3>Alcance incluido</h3><ul>${s.include.map(x=>`<li>${x}</li>`).join('')}</ul>${extras?`<div class="note"><b>Ajuste personalizado:</b> ${esc(extras)}</div>`:''}</div>${calendarSection}<div class="form-section"><h3>Datos mínimos</h3>${field('name','Nombre completo','text',true,'Nombre y apellido')}${field('business','Negocio o marca','text',false,'Nombre del negocio, si aplica')}${field('phone','WhatsApp','tel',true,'Número con código de país')}${field('email','Email','email',true,'correo@ejemplo.com')}${referralFormBlock()}</div>${paymentSection}<div class="form-section"><h3>Términos</h3><div class="contract-preview">${esc(terms)}</div><label class="check" style="margin-top:10px"><input type="checkbox" required> He leído y acepto el alcance, precio, calendario y condiciones mostradas.</label>${field('signature','Firma electrónica — escribe tu nombre completo','text',true,'Escribe tu nombre como firma')}<p class="section-sub" style="margin:0">Al enviar, confirmas tu aceptación electrónica de esta versión del acuerdo.</p></div><input type="hidden" name="priceBase" value="${esc(price)}"><input type="hidden" name="delivery" value="${esc(deliveryLabel)}"><button class="btn btn-gold" type="submit">${isHourly?'Solicitar bloque y continuar':'Firmar y continuar al pago'}</button></form>`,{share:false});
}
function defaultTerms(){return APP.contractTerms || 'CONDICIONES OPERATIVAS ESG EXPERIENCE™';}
function encodeObj(o){return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replaceAll('+','-').replaceAll('/','_').replaceAll('=','')}
function decodeObj(s){try{ s=s.replaceAll('-','+').replaceAll('_','/'); while(s.length%4)s+='='; return JSON.parse(decodeURIComponent(escape(atob(s))))}catch{return null}}
function decodeContractParam(){const p=new URLSearchParams(location.search).get('c'); return p?decodeObj(p):null}
function contractEditor(){
  const firstKey=Object.keys(services)[0]; const d=deliveryFor(firstKey);
  return shell(`<div class="breadcrumb">Herramienta interna</div><span class="admin-badge">Constructor privado de contrato ESG</span><h1 class="section-title">Preparar contrato para un cliente</h1><p class="section-sub">Esta pantalla no forma parte del recorrido público. Edita la copia del cliente y genera un enlace cerrado para firma.</p><form class="form" id="contract-editor"><div class="form-section"><h3>Acuerdo comercial</h3><div class="field"><label>Servicio</label><select name="service" id="editor-service">${Object.entries(services).map(([k,s])=>`<option value="${k}">${s.name}</option>`).join('')}</select></div>${field('price','Precio final','text',true,'Ej. $300')}${field('extras','Entregable o ajuste adicional','textarea',false,'Ej. 1 video adicional de 15 segundos por +$50')}${field('phase','División especial de fases','textarea',false,'Describe cómo se divide el trabajo si aplica.')}</div><div class="form-section"><h3>Tiempos editables</h3>${field('deliveryFirst','Primera etapa / avance — días laborables','number',true,String(d.first))}${field('deliveryFinal','Entrega final — días laborables','number',true,String(d.final))}${field('deliveryLabel','Texto que verá el cliente','text',true,d.label)}${field('specialNotes','Notas específicas de este contrato','textarea',false,'Añade aquí cualquier condición particular acordada con este cliente.')}</div><div class="form-section"><h3>Términos editables</h3><div class="field"><label>Términos del contrato</label><textarea name="terms" id="editor-terms" style="min-height:260px">${esc(defaultTerms())}</textarea></div></div><button class="btn btn-gold" type="submit">Generar enlace del contrato</button></form><div id="editor-result"></div>`,{share:false,dock:false});
}
function contractComplete(data,key){const s=services[key]; const referralLine=data.referralCode?`\nReferido por: ${data.referralName||data.referralCode} (${data.referralCode}) · Beneficio ${data.discountPercent||APP.referral?.discountPercent||5}% sujeto a confirmación en cotización`:''; const bookingLine=key==='hora'?`\nHoras solicitadas: ${data.hours||1}\nFecha preferida: ${data.requestedDate||'-'}\nHora preferida: ${data.requestedTime||'-'}\nModalidad: ${data.recurrence||'Una sola vez'}\nTotal estimado: $${data.hourlyTotal||Number(APP.hourlyBooking?.hourlyRate)||25}`:''; const phoneMsg=`Hola ESG Experience. He completado el acuerdo para ${s.name}.\n\nNombre: ${data.name}\nNegocio: ${data.business||'-'}\nEmail: ${data.email}\nWhatsApp: ${data.phone}\nModalidad de pago: ${data.payment}${bookingLine}${referralLine}\n\n${key==='hora'?'Quiero confirmar disponibilidad para este bloque y coordinar el pago.':'Quiero continuar con el pago y la entrevista.'}`; return shell(`<div class="breadcrumb">Contrato / Siguiente paso</div><h1 class="section-title">${key==='hora'?'Solicitud registrada':'Acuerdo confirmado'}</h1><p class="section-sub">${key==='hora'?'Tu fecha y hora preferidas quedaron registradas. El siguiente paso es confirmar disponibilidad por WhatsApp antes del pago.':'El siguiente paso es coordinar el pago. Después puedes completar la entrevista de producción ahora o más tarde.'}</p>${key==='hora'?`<div class="summary-card"><div class="summary-row"><span>Horas</span><span>${esc(data.hours||'1')}</span></div><div class="summary-row"><span>Fecha</span><span>${esc(data.requestedDate||'-')}</span></div><div class="summary-row"><span>Hora</span><span>${esc(data.requestedTime||'-')}</span></div><div class="summary-row"><span>Total estimado</span><span><b>$${esc(data.hourlyTotal||String(Number(APP.hourlyBooking?.hourlyRate)||25))}</b></span></div></div>`:`<div class="detail-card"><h3>Métodos</h3><ul><li>Zelle.</li><li>PayPal.</li><li>Tarjeta: solicita por WhatsApp el Stripe Payment Link.</li></ul></div>`}<div class="action-stack"><a class="btn btn-gold" target="_blank" rel="noopener" href="https://wa.me/${APP.whatsapp}?text=${encodeURIComponent(phoneMsg)}">${key==='hora'?'Confirmar horario por WhatsApp':'Continuar por WhatsApp'}</a>${key==='hora'?`<button class="btn btn-dark" data-go="/servicios">Volver a servicios</button>`:`<button class="btn btn-dark" data-go="/entrevista/${key}">Completar entrevista ahora</button><button class="btn btn-ghost" data-go="/">Completar después</button>`}</div>`,{share:false});}
function interview(key){
  const s=services[key]||null; const family=s?.family||'Proyecto ESG';
  return shell(`<div class="breadcrumb">Entrevista / ${family}</div><h1 class="section-title">Brief del proyecto</h1><p class="section-sub">Cuéntanos lo necesario para comenzar con dirección. Cada pregunta incluye una guía breve.</p><form class="form" id="interview-form"><input type="hidden" name="service" value="${esc(s?.name||'Proyecto ESG')}"><div class="form-section"><h3>Tu proyecto</h3>${field('name','¿Cuál es tu nombre?','text',true,'Nombre y apellido')}${field('business','¿Cómo se llama tu negocio o marca?','text',false,'Si todavía no tiene nombre, puedes indicarlo.')}${field('objective','¿Qué quieres conseguir con este proyecto?','textarea',true,'Ej. presentar un servicio, lanzar una promoción, crear contenido o mejorar tu presencia digital.')}${field('audience','¿A quién quieres llegar?','textarea',false,'Describe brevemente a tu cliente o público principal.')}${field('identity','¿Ya tienes identidad visual o referencias?','textarea',false,'Cuéntanos si tienes logo, colores, tipografías o comparte enlaces/referencias.')}${field('materials','¿Qué materiales tienes disponibles?','textarea',false,'Fotos, videos, textos, productos, enlaces, documentos u otros recursos.')}${field('details','¿Qué debemos presentar, promocionar o respetar?','textarea',false,'Indica producto/servicio, plataforma donde se usará, fechas, formatos, requisitos, cosas que quieres evitar o cualquier detalle importante.')}${referralFormBlock()}</div><button class="btn btn-gold" type="submit">Enviar brief</button></form>`,{share:true});
}
function portalProducts(){return shell(`<div class="breadcrumb">Post-contratación</div><h1 class="section-title">Portal Maestro de Productos</h1><p class="section-sub">Para Catálogo fijo, Catálogo a WhatsApp y Shopify. Organiza Categoría → Subcategoría → Producto y exporta un Excel maestro.</p><form class="form" id="product-form"><div class="form-section"><h3>Proyecto</h3><div class="field"><label>Tipo</label><select name="type" id="product-type"><option>Catálogo fijo</option><option>Catálogo a WhatsApp</option><option>Shopify</option></select></div>${field('category','Categoría','text',true)}${field('subcategory','Subcategoría','text',false)}${field('name','Producto / servicio','text',true)}${field('code','Código interno / SKU','text',false)}${field('price','Precio o “desde”','text',false)}${field('variants','Variantes / modelos','textarea',false)}${field('description','Descripción completa','textarea',false)}${field('includes','Qué incluye','textarea',false)}${field('specs','Especificaciones / medidas / duración','textarea',false)}${field('conditions','Condiciones importantes','textarea',false)}${field('delivery','Tiempo de entrega / instalación','text',false)}${field('keywords','Palabras clave','text',false)}${field('cta','Llamada a la acción','text',false)}${field('media','Imágenes / archivos relacionados','textarea',false)}${field('notes','Observaciones para ESG','textarea',false)}</div><button class="btn btn-gold" type="submit">Añadir producto</button></form><div style="margin-top:12px" id="product-list"></div><div class="action-stack"><button class="btn btn-dark" id="export-xlsx">Exportar Excel maestro (.xlsx)</button><button class="btn btn-ghost" id="clear-products">Vaciar lista</button></div>`,{dock:false});}
function testimonialCard(t){
  const services=(t.services||[]).map(x=>`<span class="testimonial-tag">${esc(x)}</span>`).join('');
  const media=t.video
    ? `<video class="testimonial-video" controls playsinline ${t.proofImage?`poster="${esc(t.proofImage)}"`:''}><source src="${esc(t.video)}"></video>`
    : t.proofImage
      ? `<a class="testimonial-proof-link" href="${esc(t.facebookUrl||t.proofImage)}" target="_blank" rel="noopener"><img class="testimonial-proof" src="${esc(t.proofImage)}" alt="Captura del testimonio original de ${esc(t.name)}"></a>`
      : '';
  const facebook=t.facebookUrl?`<a class="btn btn-gold" href="${esc(t.facebookUrl)}" target="_blank" rel="noopener">Ver testimonio original</a>`:'';
  const work=t.workUrl?`<a class="btn btn-dark" href="${esc(t.workUrl)}" target="_blank" rel="noopener">${esc(t.workLabel||'Ver ejemplos del trabajo')}</a>`:'';
  return `<article class="testimonial-card" id="${esc(t.id)}">${media}<div class="testimonial-body"><div class="testimonial-head"><div><span class="testimonial-kicker">Experiencia real</span><h2>${esc(t.name)}</h2></div><button class="testimonial-share" data-testimonial-share="${esc(t.id)}" aria-label="Compartir testimonio">↗</button></div><div class="testimonial-tags">${services}</div><p class="testimonial-quote">“${esc(t.quote)}”</p><div class="testimonial-actions">${facebook}${work}<button class="btn btn-ghost" data-testimonial-share="${esc(t.id)}">Compartir esta historia</button></div>${!t.workUrl&&!t.video?`<p class="testimonial-future">Aquí podrá añadirse después el video del antes y después o un enlace al trabajo realizado sin modificar el resto de la app.</p>`:''}</div></article>`;
}
function testimonials(){
  const id=new URLSearchParams(location.search).get('id');
  const items=id?testimonialsData.filter(t=>t.id===id):testimonialsData;
  const title=id?'Una experiencia real':'Testimonios y trabajos reales';
  const intro=id?'Esta historia forma parte de los resultados compartidos por clientes de ESG Experience™.':'Experiencias reales con acceso a la recomendación original en Facebook. Cada historia puede incorporar también un video del antes y después o un enlace al trabajo realizado.';
  return shell(`<div class="breadcrumb">Confianza / Resultados</div><h1 class="section-title">${title}</h1><p class="section-sub">${intro}</p>${items.length?`<div class="testimonial-list">${items.map(testimonialCard).join('')}</div>`:`<div class="empty">Todavía no hay testimonios cargados.</div>`}<div class="action-stack testimonial-end"><button class="btn btn-gold" data-go="/servicios">Explorar servicios</button><button class="btn btn-dark" data-go="/analisis">Quiero analizar mi proyecto</button></div>${shareBox(id&&items[0]?`Testimonio de ${items[0].name}`:'Testimonios ESG Experience™')}`,{});
}
function workCard(w){
  const gallery=(w.gallery||[]).slice(0,4).map(src=>`<img src="${esc(src)}" alt="${esc(w.title||'Trabajo real')}">`).join('');
  return `<article class="work-card">${w.image?`<img class="work-cover" src="${esc(w.image)}" alt="${esc(w.title||'Trabajo real')}">`:''}${gallery?`<div class="work-gallery">${gallery}</div>`:''}<div class="work-body"><span class="testimonial-kicker">Trabajo real</span><h2>${esc(w.title||'Proyecto ESG')}</h2>${w.subtitle?`<p>${esc(w.subtitle)}</p>`:''}${w.result?`<div class="work-result">${esc(w.result)}</div>`:''}${w.url?`<a class="btn btn-gold" href="${esc(w.url)}" target="_blank" rel="noopener">${esc(w.urlLabel||'Ver resultado real')}</a>`:''}</div></article>`;
}
function works(){
  const q=new URLSearchParams(location.search); const serviceKey=q.get('servicio'); const family=q.get('familia');
  let items=worksData;
  if(serviceKey) items=items.filter(w=>(w.serviceKeys||[]).includes(serviceKey));
  if(family) items=items.filter(w=>(w.serviceKeys||[]).some(k=>services[k]?.family===family));
  const label=serviceKey?services[serviceKey]?.name:(family||'ESG Experience™');
  return shell(`<div class="breadcrumb">Portafolio / Trabajos reales</div><h1 class="section-title">Trabajos reales</h1><p class="section-sub">Ejemplos vinculados a ${esc(label||'este servicio')}.</p>${items.length?`<div class="work-list">${items.map(workCard).join('')}</div>`:`<div class="empty warm-empty">Estamos preparando los primeros ejemplos públicos para esta sección.</div>`}`);
}
function about(){
  const paragraphs=(aboutData.origin||[]).map(x=>`<p>${esc(x)}</p>`).join('');
  const trust=(aboutData.trust||[]).map(x=>`<li>${esc(x)}</li>`).join('');
  const ecosystem=(aboutData.ecosystem||[]).map(x=>`<div class="about-path"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join('');
  return shell(`<div class="about-page"><div class="breadcrumb">Sobre Eilen / ESG Experience™</div><span class="admin-badge">${esc(aboutData.eyebrow||'Detrás de ESG Experience™')}</span><h1 class="section-title">${esc(aboutData.title||'Sobre EilenSG')}</h1><section class="origin-card">${paragraphs}</section><section class="about-ecosystem"><div class="about-path-grid">${ecosystem}</div></section><section class="detail-card about-compact"><h3>${esc(aboutData.academyTitle||'Por qué recomiendo una academia')}</h3><p>${esc(aboutData.academy||'')}</p><button class="btn btn-purple" data-go="/mia">Conocer MIA — Monetiza con IA</button></section><section class="detail-card about-compact"><h3>${esc(aboutData.humanTitle||'Una razón personal')}</h3><p>${esc(aboutData.human||'')}</p></section><blockquote class="about-closing">“${esc(aboutData.closing||'')}”</blockquote><section class="detail-card"><h3>Por qué confiar</h3><ul>${trust}</ul></section><section class="about-testimonials"><div class="section-heading"><span class="testimonial-kicker">Recomendaciones verificables</span><h2>Lo que dicen quienes ya trabajaron conmigo</h2></div>${testimonialsData.length?`<div class="testimonial-list">${testimonialsData.map(testimonialCard).join('')}</div>`:`<div class="empty">Todavía no hay testimonios cargados.</div>`}</section><div class="action-stack"><button class="btn btn-ghost" data-go="/trabajos">Ver trabajos reales</button></div></div>`,{share:true});
}
function render(){ const p=route(); let html;
  if(p==='/') html=home();
  else if(p==='/servicios') html=servicesHome();
  else if(p==='/esg-made') html=familyMade();
  else if(p==='/web-esg') html=familyWeb();
  else if(p==='/mia') html=mia();
  else if(p==='/tienda') html=storeHome();
  else if(p.startsWith('/tienda/')) html=storeProduct();
  else if(p==='/analisis') html=analysis(new URLSearchParams(location.search).get('s')||'');
  else if(p==='/contrato-editor') html=contractEditor();
  else if(p==='/portal-productos') html=portalProducts();
  else if(p==='/testimonios' || p==='/sobre-eilen') html=about();
  else if(p==='/trabajos') html=works();
  else if(p.startsWith('/entrevista/')) html=interview(p.split('/').pop());
  else if(p.startsWith('/contrato/')) html=contract(p.split('/').pop());
  else if(serviceByPath[p]) html=detail(serviceByPath[p]);
  else html=home();
  app.innerHTML=html; bind(); if(p==='/portal-productos') renderProducts(); if(p==='/contrato-editor') syncEditorPrice(); }
function bind(){
  document.querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click',()=>go(el.dataset.go)));
  document.querySelectorAll('[data-back]').forEach(el=>el.addEventListener('click',back));
  document.querySelectorAll('[data-tab]').forEach(el=>el.addEventListener('click',()=>{currentTab=+el.dataset.tab;render()}));
  document.querySelectorAll('[data-contract]').forEach(el=>el.addEventListener('click',()=>go('/contrato/'+el.dataset.contract)));
  document.querySelectorAll('[data-analysis]').forEach(el=>el.addEventListener('click',()=>go('/analisis?s='+encodeURIComponent(el.dataset.analysis))));
  document.querySelectorAll('[data-share]').forEach(el=>el.addEventListener('click',()=>shareCurrent()));
  document.querySelectorAll('[data-copy]').forEach(el=>el.addEventListener('click',copyCurrent));
  document.querySelectorAll('[data-share-wa]').forEach(el=>el.addEventListener('click',()=>shareWhatsApp(el.dataset.shareTitle)));
  document.querySelectorAll('[data-testimonial-share]').forEach(el=>el.addEventListener('click',()=>shareTestimonial(el.dataset.testimonialShare)));
  document.getElementById('analysis-form')?.addEventListener('submit',submitAnalysis);
  document.getElementById('interview-form')?.addEventListener('submit',submitInterview);
  document.getElementById('contract-form')?.addEventListener('submit',submitContract);
  document.getElementById('hours')?.addEventListener('input',updateHourlyTotal);
  initHourlyDate();
  document.getElementById('contract-editor')?.addEventListener('submit',submitEditor);
  document.getElementById('editor-service')?.addEventListener('change',syncEditorPrice);
  document.getElementById('product-form')?.addEventListener('submit',addProduct);
  document.getElementById('export-xlsx')?.addEventListener('click',exportXlsx);
  document.getElementById('clear-products')?.addEventListener('click',()=>{localStorage.removeItem('esgProducts');renderProducts();showToast('Lista vaciada')});
}
function updateHourlyTotal(){const el=document.getElementById('hours');const out=document.getElementById('hourly-total-value');const hid=document.getElementById('hourlyTotal');if(!el||!out||!hid)return;const rate=Number(APP.hourlyBooking?.hourlyRate)||25;const min=Number(APP.hourlyBooking?.minHours)||1;const max=Number(APP.hourlyBooking?.maxHours)||8;const hrs=Math.min(max,Math.max(min,Number(el.value)||min));const total=hrs*rate;out.textContent=`$${total}`;hid.value=String(total)}
function initHourlyDate(){const d=document.getElementById('requestedDate');if(!d)return;const now=new Date();const local=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);d.min=local;updateHourlyTotal()}
async function shareCurrent(){ const url=shareableUrl(); const data={title:document.title,text:'Mira esta opción de ESG Experience™',url}; if(navigator.share){try{await navigator.share(data);return}catch{}} try{await navigator.clipboard.writeText(url);showToast('Enlace copiado')}catch{showToast('Copia el enlace del navegador')} }
async function copyCurrent(){try{await navigator.clipboard.writeText(shareableUrl());showToast('Enlace copiado')}catch{showToast('Copia el enlace del navegador')}}
function shareWhatsApp(title='ESG Experience™'){window.open(`https://wa.me/?text=${encodeURIComponent(`Creo que esto te puede interesar: ${title}
${shareableUrl()}`)}`,'_blank')}
async function shareTestimonial(id){const t=testimonialsData.find(x=>x.id===id);const url=shareableUrl(`${location.origin}/testimonios?id=${encodeURIComponent(id)}`);const data={title:t?`Testimonio de ${t.name} — ESG Experience™`:'Testimonio ESG Experience™',text:'Mira esta experiencia real compartida sobre ESG Experience™.',url};if(navigator.share){try{await navigator.share(data);return}catch{}}try{await navigator.clipboard.writeText(url);showToast('Enlace del testimonio copiado')}catch{showToast('Copia el enlace del navegador')}}
function fixedPriceNumber(value=''){
  const text=String(value||'').trim();
  const m=text.match(/^\$?\s*([0-9]+(?:\.[0-9]{1,2})?)\s*$/);
  return m?Number(m[1]):null;
}
function contractSheetTotal(basePrice,ref,key,data={}){
  if(key==='hora') return data.hourlyTotal||'';
  const amount=fixedPriceNumber(basePrice);
  if(amount===null) return '';
  // El descuento público se registra, pero solo se aplica automáticamente al total
  // cuando el código existe en el directorio local de colaboradores.
  const pct=ref?.referralVerified?Number(ref.discountPercent||0):0;
  const total=pct?amount*(1-pct/100):amount;
  return total.toFixed(2);
}
function postLead(payload){
  if(!APP.sheetsEndpoint) return;
  const normalized={
    ...payload,
    formulario: payload.formulario || payload.type || '',
    origen: payload.origen || location.pathname,
    servicio: payload.servicio || payload.service || payload.need || '',
    producto: payload.producto || payload.product || '',
    whatsapp: payload.whatsapp || payload.phone || '',
    codigoReferido: payload.codigoReferido || payload.referralCode || '',
    referido: payload.referido || payload.referralName || '',
    descuento: payload.descuento || payload.discountPercent || '',
    precioBase: payload.precioBase || payload.hourlyRate || '',
    total: payload.total || payload.hourlyTotal || '',
    horarioSolicitado: payload.horarioSolicitado || [payload.requestedDate,payload.requestedTime].filter(Boolean).join(' '),
    horas: payload.horas || payload.hours || '',
    tipoSesion: payload.tipoSesion || payload.recurrence || '',
    pago: payload.pago || payload.payment || '',
    contrato: payload.contrato || (payload.signature?'Aceptado / firma electrónica registrada':''),
    notas: payload.notas || payload.notes || payload.goal || payload.details || '',
    createdAt:new Date().toISOString(),
    page:shareableUrl(),
    source:'ESG Web App'
  };
  try{fetch(APP.sheetsEndpoint,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(normalized)});}catch{}
}
function submitAnalysis(e){e.preventDefault(); const d=Object.fromEntries(new FormData(e.currentTarget)); const ref=referralData(d.referralManual); postLead({type:'analisis',...d,...ref}); const refLine=ref.referralCode?`

REFERIDO POR:
${ref.referralName||ref.referralCode} (${ref.referralCode}) · Beneficio ${ref.discountPercent}% sujeto a confirmación en cotización`:''; const msg=`NUEVA SOLICITUD DE ANÁLISIS ESG

Nombre: ${d.name}
Negocio: ${d.business||'-'}
WhatsApp: ${d.phone}
Email: ${d.email}

OBJETIVO:
${d.goal}

SITUACIÓN ACTUAL:
${d.current||'-'}

QUÉ LE ESTÁ FRENANDO:
${d.block||'-'}

SOLICITA:
${d.need}

COMENTARIOS:
${d.notes||'-'}${refLine}`; window.open(`https://wa.me/${APP.whatsapp}?text=${encodeURIComponent(msg)}`,'_blank');}
function submitInterview(e){e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget)); const ref=referralData(d.referralManual); postLead({type:'brief',...d,...ref});const refLine=ref.referralCode?`

REFERIDO POR:
${ref.referralName||ref.referralCode} (${ref.referralCode})`:'';const msg=`NUEVO BRIEF ESG

Servicio: ${d.service}
Nombre: ${d.name}
Negocio: ${d.business||'-'}

OBJETIVO:
${d.objective}

PÚBLICO:
${d.audience||'-'}

IDENTIDAD / REFERENCIAS:
${d.identity||'-'}

MATERIALES:
${d.materials||'-'}

DETALLES IMPORTANTES:
${d.details||'-'}${refLine}`;window.open(`https://wa.me/${APP.whatsapp}?text=${encodeURIComponent(msg)}`,'_blank')}
function submitContract(e){e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));const ref=referralData(d.referralManual);const key=e.currentTarget.dataset.service;const priceBase=d.priceBase||services[key]?.price||'';const sheetTotal=contractSheetTotal(priceBase,ref,key,d);postLead({type:'contrato_firmado',service:services[key]?.name||key,...d,...ref,precioBase:priceBase,total:sheetTotal});sessionStorage.setItem('lastContractData',JSON.stringify({...d,...ref,priceBase,total:sheetTotal}));app.innerHTML=contractComplete({...d,...ref,priceBase,total:sheetTotal},key);bind();}
function syncEditorPrice(){const sel=document.getElementById('editor-service');const price=document.querySelector('#contract-editor [name=price]');if(sel&&price){const d=deliveryFor(sel.value);price.value=services[sel.value].price;const f=document.querySelector('#contract-editor [name=deliveryFirst]');const fin=document.querySelector('#contract-editor [name=deliveryFinal]');const lab=document.querySelector('#contract-editor [name=deliveryLabel]');if(f)f.value=d.first;if(fin)fin.value=d.final;if(lab)lab.value=d.label;}}
function submitEditor(e){e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));const payload={price:d.price,extras:d.extras,phase:d.phase,deliveryFirst:d.deliveryFirst,deliveryFinal:d.deliveryFinal,deliveryLabel:d.deliveryLabel,specialNotes:d.specialNotes,terms:d.terms};const url=`${location.origin}/contrato/${d.service}?c=${encodeObj(payload)}`;document.getElementById('editor-result').innerHTML=`<div class="summary-card" style="margin-top:12px"><b>Contrato personalizado listo</b><p class="section-sub">Este enlace conserva el precio, tiempos, notas específicas y términos de esta copia. La plantilla maestra no cambia.</p><div class="field"><input value="${esc(url)}" readonly></div><div class="split-actions"><button class="btn btn-gold" id="copy-contract-url">Copiar enlace</button><a class="btn btn-dark" href="${url}" target="_blank">Abrir contrato</a></div></div>`;document.getElementById('copy-contract-url').onclick=async()=>{await navigator.clipboard.writeText(url);showToast('Enlace del contrato copiado')};}
function loadProducts(){try{return JSON.parse(localStorage.getItem('esgProducts')||'[]')}catch{return []}}
function addProduct(e){e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));const a=loadProducts();a.push({...d,created:new Date().toISOString()});localStorage.setItem('esgProducts',JSON.stringify(a));e.currentTarget.reset();renderProducts();showToast('Producto añadido')}
function renderProducts(){const el=document.getElementById('product-list');if(!el)return;const a=loadProducts();el.innerHTML=a.length?`<div class="portal-list">${a.map((x,i)=>`<div class="portal-item"><strong>${i+1}. ${esc(x.name)} · ${esc(x.type)}</strong><small>${esc(x.category)}${x.subcategory?' → '+esc(x.subcategory):''}${x.price?' · '+esc(x.price):''}</small></div>`).join('')}</div>`:`<div class="empty">Todavía no hay productos cargados.</div>`}
function exportXlsx(){const a=loadProducts();if(!a.length){showToast('Añade al menos un producto');return}if(!window.XLSX){showToast('No se pudo cargar el exportador');return}const ws=XLSX.utils.json_to_sheet(a);const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Productos ESG');XLSX.writeFile(wb,'ESG_Productos_Maestro.xlsx');}
window.addEventListener('popstate',()=>{currentTab=0;render()});
document.addEventListener('click',e=>{if(e.target.closest('button,a'))return;});
render();
