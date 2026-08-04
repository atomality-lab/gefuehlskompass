const VERSION='0.7';
const CACHE=`gefuehlskompass-prototyp-v${VERSION}`;
const CORE=[
  './index.html?v=0.7',
  './styles.css?v=0.9',
  './app.js?v=0.9',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './version.json'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key.startsWith('gefuehlskompass-prototyp-')&&key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

async function networkFirst(request,fallback){
  try{
    const response=await fetch(request,{cache:'no-store'});
    if(response&&response.ok){
      const cache=await caches.open(CACHE);
      cache.put(request,response.clone());
    }
    return response;
  }catch(error){
    return (await caches.match(request)) || (fallback ? await caches.match(fallback) : Response.error());
  }
}

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;

  if(event.request.mode==='navigate'){
    event.respondWith(networkFirst(event.request,'./index.html?v=0.7'));
    return;
  }

  if(['script','style','worker'].includes(event.request.destination)||url.pathname.endsWith('/version.json')){
    event.respondWith(networkFirst(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached=>cached||networkFirst(event.request))
  );
});
