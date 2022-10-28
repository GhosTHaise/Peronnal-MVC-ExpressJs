const PREFIX = "v1.2.0";
const BASE = `${location.protocol}//${location.host}`;
const CACHED_FILE = [
    //Uncomment this to save bootstrap in the cache
    //"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
    //"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
    "https://fonts.googleapis.com/css2?family=Raleway&display=swap",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    `${BASE}/styles/dist/output.css`
]
const LAZY_CACHE = [

]
//Jouer avec offline
self.addEventListener("install",(event)=>{
  self.skipWaiting();
  event.waitUntil((async() => {
        const cache = await caches.open(PREFIX);
        await Promise.all([...CACHED_FILE,"/offline-service-worker-template"].map( path => {
              return cache.add(new Request(path));
        }))
    }
  )());
  console.log(`Install : ${PREFIX}`);
})
self.addEventListener("activate",(event)=>{
  clients.claim();
  event.waitUntil((async ()=>{
    const keys = await caches.keys();
    await Promise.all(
      keys.map( key => {
        if(!key.includes(PREFIX)){
          return caches.delete(key);
        }
    }));
  }) ())
  console.log(`Activate : ${PREFIX}`);
})
self.addEventListener("fetch",(event)=>{
  //console.log(`Fetching : ${event.request.url} , Mode ${event.request.mode}`);
  console.log(`Fetching : ${PREFIX}`);
  if(event.request.mode === "navigate"){
    event.respondWith((async()=>{
      console.log("my requsets",event);
      //console.log("caches : ",caches)
      console.log("I am fetching : ",PREFIX);
      try{
          const preloadResponse = await event.preloadResponse;
          console.log("preload :",preloadResponse)
          if(preloadResponse){
            return preloadResponse
          }
          return await fetch(event.request);
      }catch(e){
        const cache = await caches.open(PREFIX);
        return await cache.match("/offline-service-worker-template");
      }
    })())
  }else if(CACHED_FILE.includes(event.request.url)){
      event.respondWith(caches.match(event.request.url))
  }else if(LAZY_CACHE.includes(event.request.url)){
    event.respondWith((async()=>{
      //console.log("my requsets",event);
      //console.log("caches : ",caches)
      console.log("I am fetching : ",PREFIX);
      try{
          const cache = await caches.open(PREFIX);
          const preloadResponse = await event.preloadResponse;
          if(preloadResponse){
            cache.put(event.request,preloadResponse.clone());
            return preloadResponse
          }
          const networkResponse =  await fetch(event.request);
          cache.put(event.request,networkResponse.clone());
          return networkResponse;
      }catch(e){
        const cache = await caches.open(PREFIX);
        return await cache.match(event.request);
      }
    })())
  }
});

/* const CACHE_NAME = 'sw-cache-example';
const toCache = [
  '/',
  '/index.html',
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function(cache) {
            return cache.addAll(toCache)
          })
          .then(self.skipWaiting())
      )
  })
  
  self.addEventListener('fetch', function(event) {
    console.log('used to intercept requests so we can check for the file or data in the cache')
  })
  
  self.addEventListener('activate', function(event) {
    console.log('this event triggers when the service worker activates')
  }) */