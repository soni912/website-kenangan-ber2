/* Local storage is used for visitor preferences, not for editing the album.
   Album content is intentionally managed in the source files by the website owner. */
const SiteStorage = {
  get(key, fallback = null) {
    try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { console.warn("LocalStorage unavailable:", error); }
  }
};