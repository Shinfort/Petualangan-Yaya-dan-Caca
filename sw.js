const CACHE_NAME = 'yaya-caca-v1';

// File inti yang langsung disimpan saat Service Worker terpasang
const CORE_ASSETS = [
  './',
  './index.html',
  './story.html',
  './analytics-frame.html',
  './meta.xml',
  './manifest.webmanifest',
  './story_content/thumbnail.jpg',
  './story_content/triggers.js',
  './story_content/user.js',
  './html5/data/css/output.min.css',
  './html5/data/js/data.js',
  './html5/data/js/frame.js',
  './html5/data/js/paths.js',
  './html5/lib/scripts/bootstrapper.min.js',
  './html5/lib/scripts/frame.desktop.min.js',
  './html5/lib/scripts/frame.mobile.min.js',
  './html5/lib/scripts/slides.min.js',
  './html5/lib/stylesheets/desktop.min.css',
  './html5/lib/stylesheets/mobile.min.css',
  './html5/lib/stylesheets/mobile-fonts/open-sans-bold.woff',
  './html5/lib/stylesheets/mobile-fonts/open-sans-light.woff',
  './html5/lib/stylesheets/mobile-fonts/open-sans-regular.woff'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('Gagal memuat beberapa aset inti:', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Strategi Cache-First: Ambil dari cache dulu, bila belum ada unduh dan simpan ke cache
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Hanya proses request GET http/https
  if (req.method !== 'GET' || !req.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(req).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }

        // Simpan salinan ke cache
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Jika offline dan aset belum ada di cache
        if (req.headers.get('accept') && req.headers.get('accept').includes('text/html')) {
          return caches.match('./story.html') || caches.match('./index.html');
        }
      });
    })
  );
});

// Penanganan unduhan offline massal dari tombol di index.html
self.addEventListener('message', async (event) => {
  if (event.data && event.data.action === 'PRECACHE_ALL') {
    const assets = event.data.assets || [];
    const cache = await caches.open(CACHE_NAME);
    let completed = 0;
    const total = assets.length;

    for (const url of assets) {
      try {
        const match = await cache.match(url);
        if (!match) {
          const res = await fetch(url);
          if (res && res.status === 200) {
            await cache.put(url, res);
          }
        }
      } catch (err) {
        console.warn('Gagal unduh aset offline:', url, err);
      }
      completed++;
      if (event.source) {
        event.source.postMessage({
          action: 'PRECACHE_PROGRESS',
          completed,
          total,
          percent: Math.round((completed / total) * 100)
        });
      }
    }

    if (event.source) {
      event.source.postMessage({
        action: 'PRECACHE_COMPLETE',
        completed,
        total
      });
    }
  }
});

