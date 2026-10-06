/* Trainingslog: Offline-Speicher. Bei jeder neuen Version der App die Nummer erhöhen. */
const V='trainingslog-3';
const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const url=new URL(r.url);
  if(r.mode==='navigate'||(url.origin===location.origin&&url.pathname.endsWith('index.html'))){
    /* Seite selbst: erst Netz, damit Updates ankommen; ohne Netz aus dem Speicher */
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put('./',cp));return res;})
      .catch(()=>caches.match('./').then(m=>m||caches.match('index.html'))));
    return;
  }
  /* alles andere (Icons, Schriften): erst Speicher, dann Netz */
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{
    if(res.ok||res.type==='opaque'){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));}
    return res;})));
});
