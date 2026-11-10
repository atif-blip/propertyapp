var C="mahdar-v1";
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(["./","index.html","icon-192.png","icon-512.png"])}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(clients.claim())});
self.addEventListener("fetch",function(e){if(e.request.method!="GET")return;e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request,{ignoreSearch:true}).then(function(r){return r||caches.match("index.html")})}))});
