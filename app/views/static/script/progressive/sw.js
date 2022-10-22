const PREFIX = "v5"
//Jouer avec offline
self.addEventListener("install",(event)=>{
  self.skipWaiting();
  event.waitUntil((async() => {
        const cache = await caches.open(PREFIX);
        cache.add(new Request("/offline-service-worker-template"))
    }
  )());
  console.log(`Install : ${PREFIX}`);
})
self.addEventListener("activate",()=>{
  clients.claim()
  console.log(`Activate : ${PREFIX}`);
})
self.addEventListener("fetch",(event)=>{
  //console.log(`Fetching : ${event.request.url} , Mode ${event.request.mode}`);
  console.log(`Fetching : ${PREFIX}`);
  if(event.request.mode === "navigate"){
    event.respondWith((async()=>{
      //  console.log("my requsets",event)
      try{
          const preloadResponse = await event.preloadResponse;
          if(preloadResponse){
            return preloadResponse
          }
          return await fetch(event.request);
      }catch(e){
        return new Response("Bonjour les gens")
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