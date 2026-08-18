// Tiny IndexedDB key/value store — survives reloads and works offline.
const DB = 'champlin-field-report', STORE = 'kv';

// The connection is kept rather than reopened per call. A save triggered by
// the page being torn down (refresh, backgrounding) has to finish inside the
// teardown window, and an indexedDB.open round-trip before the transaction
// even starts was usually enough to lose that race.
let dbP = null;

function open() {
  if (dbP) return dbP;
  dbP = new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains(STORE)) r.result.createObjectStore(STORE); };
    r.onsuccess = () => {
      // A dropped connection (tab evicted, storage cleared) must not leave a
      // dead promise cached for the rest of the session.
      r.result.onclose = () => { dbP = null; };
      res(r.result);
    };
    r.onerror = () => { dbP = null; rej(r.error); };
  });
  return dbP;
}

async function tx(mode, fn) {
  const db = await open();
  return new Promise((res, rej) => {
    const t = db.transaction(STORE, mode);
    const req = fn(t.objectStore(STORE));
    t.oncomplete = () => res(req && req.result);
    t.onerror = () => rej(t.error);
  });
}

export const get = (k) => tx('readonly', s => s.get(k));
export const set = (k, v) => tx('readwrite', s => s.put(v, k));
export const del = (k) => tx('readwrite', s => s.delete(k));
