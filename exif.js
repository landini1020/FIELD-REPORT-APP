// Minimal JPEG EXIF reader: DateTimeOriginal + GPS lat/lon. No deps.
export async function readExif(file) {
  const buf = await file.slice(0, 512 * 1024).arrayBuffer();
  const v = new DataView(buf);
  if (v.byteLength < 4 || v.getUint16(0) !== 0xffd8) return {};
  let off = 2;
  while (off + 4 < v.byteLength) {
    if (v.getUint8(off) !== 0xff) { off++; continue; }
    const marker = v.getUint8(off + 1);
    const size = v.getUint16(off + 2);
    if (marker === 0xe1) {
      // "Exif\0\0"
      if (v.getUint32(off + 4) === 0x45786966) return parseTiff(v, off + 10);
    }
    if (marker === 0xda) break;
    off += 2 + size;
  }
  return {};
}

function parseTiff(v, start) {
  const le = v.getUint16(start) === 0x4949;
  const u16 = (o) => v.getUint16(o, le);
  const u32 = (o) => v.getUint32(o, le);
  if (u16(start + 2) !== 0x2a) return {};
  const out = {};
  let gpsOff = null, exifOff = null;
  const readDir = (dirStart, collect) => {
    const n = u16(dirStart);
    for (let i = 0; i < n; i++) {
      const e = dirStart + 2 + i * 12;
      const tag = u16(e), type = u16(e + 2), count = u32(e + 4);
      const sizes = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 7: 1, 9: 4, 10: 8 };
      const bytes = (sizes[type] || 1) * count;
      const valOff = bytes > 4 ? start + u32(e + 8) : e + 8;
      collect(tag, type, count, valOff);
    }
    return u32(dirStart + 2 + n * 12);
  };
  const str = (o, c) => {
    let s = '';
    for (let i = 0; i < c - 1; i++) s += String.fromCharCode(v.getUint8(o + i));
    return s.trim();
  };
  const rat = (o) => u32(o) / (u32(o + 4) || 1);

  readDir(start + u32(start + 4), (tag, t, c, o) => {
    if (tag === 0x8769) exifOff = start + u32(o);
    if (tag === 0x8825) gpsOff = start + u32(o);
    if (tag === 0x0112) out.orientation = u16(o);
  });
  if (exifOff) readDir(exifOff, (tag, t, c, o) => {
    if (tag === 0x9003 || tag === 0x9004) out.taken = out.taken || str(o, c);
  });
  if (gpsOff) {
    const g = {};
    readDir(gpsOff, (tag, t, c, o) => {
      if (tag === 0x0001) g.latRef = String.fromCharCode(v.getUint8(o));
      if (tag === 0x0003) g.lonRef = String.fromCharCode(v.getUint8(o));
      if (tag === 0x0002) g.lat = [rat(o), rat(o + 8), rat(o + 16)];
      if (tag === 0x0004) g.lon = [rat(o), rat(o + 8), rat(o + 16)];
      if (tag === 0x0006) g.alt = rat(o);
    });
    const dms = (a, ref) => a && (a[0] + a[1] / 60 + a[2] / 3600) * (/[SW]/.test(ref || '') ? -1 : 1);
    if (g.lat && g.lon) { out.lat = dms(g.lat, g.latRef); out.lon = dms(g.lon, g.lonRef); }
    if (g.alt != null) out.alt = g.alt;
  }
  return out;
}

export function fmtExifDate(s) {
  if (!s) return null;
  const m = s.match(/(\d{4}):(\d{2}):(\d{2})[ T](\d{2}):(\d{2})/);
  if (!m) return null;
  return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]);
}

export function fmtCoord(lat, lon) {
  if (lat == null || lon == null) return null;
  const p = (x, a, b) => `${Math.abs(x).toFixed(6)}° ${x >= 0 ? a : b}`;
  return `${p(lat, 'N', 'S')}, ${p(lon, 'E', 'W')}`;
}
