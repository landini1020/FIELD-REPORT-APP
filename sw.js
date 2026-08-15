const CACHE = 'field-report-v4';
const CORE = ['./','index.html','support.js','exif.js','store.js','logo.svg','manifest.webmanifest',
'icon-180.png','icon-192.png','icon-512.png',
'plans/A101.png','plans/A102.png','plans/A103.png',
'ds/_ds_bundle.js','ds/styles.css','ds/tokens/fonts.css','ds/tokens/colors.css','ds/tokens/typography.css','ds/tokens/spacing.css','ds/tokens/base.css',
// The PDF renderer ships with the app so plan sets open with no signal.
'pdf/pdf.min.mjs','pdf/pdf.worker.min.mjs',
'pdf/standard_fonts/FoxitDingbats.pfb','pdf/standard_fonts/FoxitFixed.pfb','pdf/standard_fonts/FoxitFixedBold.pfb',
'pdf/standard_fonts/FoxitFixedBoldItalic.pfb','pdf/standard_fonts/FoxitFixedItalic.pfb',
'pdf/standard_fonts/FoxitSerif.pfb','pdf/standard_fonts/FoxitSerifBold.pfb','pdf/standard_fonts/FoxitSerifBoldItalic.pfb',
'pdf/standard_fonts/FoxitSerifItalic.pfb','pdf/standard_fonts/FoxitSymbol.pfb',
'pdf/standard_fonts/LiberationSans-Bold.ttf','pdf/standard_fonts/LiberationSans-BoldItalic.ttf',
'pdf/standard_fonts/LiberationSans-Italic.ttf','pdf/standard_fonts/LiberationSans-Regular.ttf'];

self.addEventListener('install', e => {
  // One missing file must not fail the whole install.
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {}))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // let the CDN handle its own

  const isDoc = req.mode === 'navigate' || req.destination === 'document';

  e.respondWith((async () => {
    // The app shell is network-first, so a new deploy is picked up on reload
    // instead of being pinned to a stale cached copy forever.
    if (isDoc) {
      try {
        const res = await fetch(req);
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put('index.html', copy)).catch(() => {});
        }
        return res;
      } catch (err) {
        const shell = await caches.match('index.html');
        if (shell) return shell;
        throw err;
      }
    }

    // Static assets are cache-first (that is what makes it work with no signal).
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const res = await fetch(req);
      if (res && res.ok && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    } catch (err) {
      // Never fall back to HTML here — returning the shell for an image
      // request is what silently blanks the plan sheets.
      throw err;
    }
  })());
});
