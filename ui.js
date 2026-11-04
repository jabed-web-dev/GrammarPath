/* GrammarPath UI polish: consistent SVG icons, sidebar scroll lock, reader font-size control */
(()=>{
const P={
 '⌂':'<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 '▤':'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
 '☆':'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
 '◷':'<path d="M5 20v-6M12 20V5M19 20v-10"/>',
 '✦':'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16v4M17 18h4"/>',
 '✓':'<path d="M5 12.5l4.5 4.5L19 7.5"/>'};
const svg=p=>`<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
let fs=+localStorage.getItem('gp_fs')||16;
const applyFs=()=>document.documentElement.style.setProperty('--lesson-fs',fs+'px');
function refresh(){
  document.querySelectorAll('.side-link>span,.mobile-nav button>span,.stat-icon').forEach(el=>{const g=el.textContent.trim();if(P[g])el.innerHTML=svg(P[g])});
  const top=document.querySelector('.reader-top');
  if(top&&!top.querySelector('.fs-ctl'))top.querySelector('.reader-bookmark')?.insertAdjacentHTML('beforebegin','<span class="fs-ctl"><button data-fs="-2" aria-label="লেখা ছোট করো">A−</button><button data-fs="2" aria-label="লেখা বড় করো">A+</button></span>');
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-fs]');if(!b)return;fs=Math.min(24,Math.max(14,fs+ +b.dataset.fs));localStorage.setItem('gp_fs',fs);applyFs();toast('লেখার আকার: '+fs+'px')});
const sb=document.getElementById('sidebar');
new MutationObserver(()=>document.documentElement.classList.toggle('no-scroll',sb.classList.contains('open')&&innerWidth<=760)).observe(sb,{attributes:true,attributeFilter:['class']});
new MutationObserver(refresh).observe(document.getElementById('content'),{childList:true,subtree:true});
applyFs();refresh();
})();
