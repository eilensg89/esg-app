const CACHE='esg-experience-v1';
const ASSETS=['/','/index.html','/css/app.css','/js/app.js','/assets/branding/esg-logo.png','/assets/branding/esg-butterfly.png','/assets/textures/leather-bg.webp','/assets/textures/stone-bg.webp','/assets/elenia/elenia-portrait.webp'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return; e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
