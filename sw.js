const CACHE_NAME = 'yaya-caca-v2';

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

// Fungsi helper: fetch dengan timeout dan retry
async function fetchWithRetry(url, timeoutMs = 120000, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res && res.status === 200) {
        return res;
      }
      throw new Error(`HTTP ${res ? res.status : 'no response'}`);
    } catch (err) {
      console.warn(`Percobaan ${attempt}/${maxRetries} gagal untuk ${url}:`, err.message);
      if (attempt < maxRetries) {
        // Tunggu sebelum retry (exponential backoff: 1s, 2s, 4s)
        await new Promise(r => setTimeout(r, 1000 * Math.pow(2, attempt - 1)));
      }
    }
  }
  return null; // Gagal setelah semua retry
}

// Penanganan unduhan offline massal dari tombol di index.html
self.addEventListener('message', async (event) => {
  if (event.data && event.data.action === 'PRECACHE_ALL') {
    const assets = event.data.assets || [];
    const cache = await caches.open(CACHE_NAME);
    let completed = 0;
    let failed = 0;
    const total = assets.length;
    const failedUrls = [];

    // Bagi aset jadi batch kecil (3 paralel) agar tidak kewalahan
    const BATCH_SIZE = 3;

    for (let i = 0; i < assets.length; i += BATCH_SIZE) {
      const batch = assets.slice(i, i + BATCH_SIZE);

      const results = await Promise.allSettled(
        batch.map(async (url) => {
          try {
            const match = await cache.match(url);
            if (match) {
              return { url, status: 'cached' };
            }

            const res = await fetchWithRetry(url);
            if (res) {
              await cache.put(url, res);
              return { url, status: 'downloaded' };
            } else {
              return { url, status: 'failed' };
            }
          } catch (err) {
            console.warn('Gagal unduh aset offline:', url, err);
            return { url, status: 'failed' };
          }
        })
      );

      // Hitung hasil batch
      for (const result of results) {
        completed++;
        if (result.status === 'fulfilled' && result.value.status === 'failed') {
          failed++;
          failedUrls.push(result.value.url);
        }

        // Kirim progress setiap file selesai
        if (event.source) {
          event.source.postMessage({
            action: 'PRECACHE_PROGRESS',
            completed,
            total,
            failed,
            percent: Math.round((completed / total) * 100)
          });
        }
      }
    }

    if (event.source) {
      if (failed > 0) {
        event.source.postMessage({
          action: 'PRECACHE_COMPLETE_WITH_ERRORS',
          completed,
          total,
          failed,
          failedUrls
        });
      } else {
        event.source.postMessage({
          action: 'PRECACHE_COMPLETE',
          completed,
          total
        });
      }
    }
  }

  // Perintah retry untuk file yang gagal
  if (event.data && event.data.action === 'PRECACHE_RETRY') {
    const assets = event.data.assets || [];
    const cache = await caches.open(CACHE_NAME);
    let completed = 0;
    let failed = 0;
    const total = assets.length;
    const failedUrls = [];

    for (const url of assets) {
      try {
        const match = await cache.match(url);
        if (!match) {
          const res = await fetchWithRetry(url, 180000, 3);
          if (res) {
            await cache.put(url, res);
          } else {
            failed++;
            failedUrls.push(url);
          }
        }
      } catch (err) {
        failed++;
        failedUrls.push(url);
      }
      completed++;
      if (event.source) {
        event.source.postMessage({
          action: 'PRECACHE_PROGRESS',
          completed,
          total,
          failed,
          percent: Math.round((completed / total) * 100)
        });
      }
    }

    if (event.source) {
      event.source.postMessage({
        action: failed > 0 ? 'PRECACHE_COMPLETE_WITH_ERRORS' : 'PRECACHE_COMPLETE',
        completed,
        total,
        failed,
        failedUrls
      });
    }
  }
});
