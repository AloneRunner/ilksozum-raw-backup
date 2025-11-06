
const CACHE_NAME = 'ilk-sozum-v2'; // Version bump to invalidate old cache
const PLACEHOLDER_IMAGE = '/images/placeholder.png'; 

// Files that constitute the essential "shell" of the application.
// We only cache the absolute essentials. Dynamic content like images will be cached on first load.
const APP_SHELL_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw-register.js',
  PLACEHOLDER_IMAGE,
  '/images/icon-192x192.png',
  '/images/icon-512x512.png',
  '/audio/correct.mp3',
  '/audio/incorrect.mp3',
  '/audio/finish.mp3'
];

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log(`[Service Worker] Caching app shell`);
        const requests = APP_SHELL_FILES.map(url => new Request(url, { cache: 'reload' }));
        return cache.addAll(requests).catch(err => {
            console.error('[Service Worker] Failed to cache file during install:', err);
        });
      })
      .catch(err => {
          console.error('[Service Worker] Failed to open cache during install:', err);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate event');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log(`[Service Worker] Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
      return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                // For non-basic requests (like from CDNs), we can't cache them but should still return them.
                if (event.request.url.startsWith('https://')) {
                   return networkResponse;
                }
            }

            const responseToCache = networkResponse.clone();

            // Only attempt to cache http(s) requests. Some requests may come from
            // chrome-extension:// or other unsupported schemes which will throw
            // when passed to Cache.put. Skip those and swallow cache errors.
            try {
              const reqUrl = new URL(event.request.url);
              if (reqUrl.protocol === 'http:' || reqUrl.protocol === 'https:') {
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, responseToCache).catch((err) => {
                    console.warn('[Service Worker] cache.put failed, skipping:', err);
                  });
                }).catch(err => {
                  console.warn('[Service Worker] open cache failed:', err);
                });
              } else {
                // Non-http(s) scheme — skip caching.
                // This avoids errors like: Request scheme 'chrome-extension' is unsupported
              }
            } catch (err) {
              // If URL parsing fails or cache operations throw synchronously, ignore.
              console.warn('[Service Worker] Skipping cache for request:', event.request.url, err);
            }
            
            return networkResponse;
        });
      })
      .catch((error) => {
        console.error(`[Service Worker] Fetch failed for ${event.request.url}. Error:`, error);
        if (event.request.destination === 'image') {
          return caches.match(PLACEHOLDER_IMAGE);
        }
      })
  );
});

// Allow the page to tell SW to activate immediately
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', (event) => {
  // Notify all clients to reload after activation
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      clients.forEach(client => client.postMessage({ type: 'RELOAD_PAGE' }));
    })
  );
});
