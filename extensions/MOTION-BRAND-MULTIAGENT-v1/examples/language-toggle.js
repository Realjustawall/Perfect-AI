export async function setLocale(locale, {root=document.documentElement, refreshScroll}={}){
  const allowed = new Set(['fa','en']);
  if(!allowed.has(locale)) throw new Error('Unsupported locale: '+locale);
  root.lang=locale; root.dir=locale==='fa'?'rtl':'ltr';
  await document.fonts.ready;
  await new Promise(requestAnimationFrame);
  // Fonts affect trigger geometry and Three.js text regions.
  if(typeof refreshScroll==='function') refreshScroll();
  window.dispatchEvent(new CustomEvent('zt:locale-layout-ready',{detail:{locale}}));
}
