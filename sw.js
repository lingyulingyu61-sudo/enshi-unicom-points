var CACHE_NAME = 'enshi-unicom-points-v6';
var CACHE_FILES = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './app.js',
  './assistant.png',
  './manifest.json'
];
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHE_FILES).catch(function(){});
    })
  );
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(names.map(function(name) {
        if (name !== CACHE_NAME) return caches.delete(name);
      }));
    })
  );
  self.clients.claim();
});
self.addEventListener('fetch', function(e) {
  var req = e.request;
  // HTML/navigation: network-first (always get latest when online)
  if (req.mode === 'navigate' || (req.method === 'GET' && req.headers.get('accept') && req.headers.get('accept').indexOf('text/html') !== -1)) {
    e.respondWith(
      fetch(req).then(function(resp) {
        if (resp && resp.status === 200) {
          var respClone = resp.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(req, respClone).catch(function(){});
          });
        }
        return resp;
      }).catch(function() {
        return caches.match(req).then(function(response) {
          return response || caches.match('./index.html');
        });
      })
    );
    return;
  }
  // CSS/JS: stale-while-revalidate (fast from cache, update in background)
  if (req.method === 'GET' && req.url.match(/\.(css|js|png|json|svg)$/)) {
    e.respondWith(
      caches.match(req).then(function(cached) {
        var fetchPromise = fetch(req).then(function(resp) {
          if (resp && resp.status === 200) {
            var respClone = resp.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(req, respClone).catch(function(){});
            });
          }
          return resp;
        }).catch(function() {
          return cached;
        });
        return cached || fetchPromise;
      })
    );
    return;
  }
  // Other assets: cache-first, fall back to network
  e.respondWith(
    caches.match(req).then(function(response) {
      if (response) return response;
      return fetch(req).then(function(resp) {
        if (resp && resp.status === 200 && req.method === 'GET') {
          var respClone = resp.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(req, respClone).catch(function(){});
          });
        }
        return resp;
      }).catch(function() {
        return caches.match('./index.html');
      });
    })
  );
});
