const CACHE_NAME = 'arzan-aim-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg', './pwa-192x192.png', './pwa-512x512.png', './pwa-maskable-512x512.png', './apple-touch-icon.png', './arzan-hero.jpg', './arzan-hospitality.jpg', './arzan-residential.jpg', './arzan-credit.jpg'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => { e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request))); });
