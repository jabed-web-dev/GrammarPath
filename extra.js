/* GrammarPath extras: hash routing, vocabulary flashcards (Leitner), quiz, pronunciation, streak, backup */
(()=>{
const K={srs:'gp_srs',streak:'gp_streak'},INT=[0,1,3,7,14],DAY=864e5;
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const put=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const dstr=t=>new Date(t).toLocaleDateString('en-CA');
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
let vocab=null,sess=null;

/* ---------- vocabulary parsed from chapters 36–45 ---------- */
async function loadVocab(){
  if(vocab)return vocab;
  const out=[];
  await Promise.all(chapters.filter(c=>c.type==='vocabulary').map(async c=>{
    try{
      const t=await(await fetch(c.file)).text();
      for(const l of t.split('\n')){
        const m=l.match(/^\|\s*\*\*(.+?)\*\*\s*\|(.+?)\|(.+?)\|\s*$/);
        if(m)out.push({en:m[1].trim(),bn:m[2].trim(),ex:m[3].trim(),ch:c.id});
      }
    }catch(e){console.error('Vocabulary load failed',c.file,e)}
  }));
  return vocab=out;
}

/* ---------- streak ---------- */
function streak(){const s=load(K.streak,{last:'',n:0});return(s.last===dstr(Date.now())||s.last===dstr(Date.now()-DAY))?s.n:0}
function badge(){let b=$('#streakBadge');if(!b){b=document.createElement('span');b.id='streakBadge';b.className='streak';b.title='টানা অনুশীলনের দিন';$('.top-actions').prepend(b)}b.textContent='🔥 '+streak()}
function touch(){const s=load(K.streak,{last:'',n:0}),t=dstr(Date.now());if(s.last===t)return;s.n=s.last===dstr(Date.now()-DAY)?s.n+1:1;s.last=t;put(K.streak,s);badge()}

/* ---------- pronunciation ---------- */
function say(t){
  if(!('speechSynthesis'in window))return toast('এই ব্রাউজারে উচ্চারণ সাপোর্ট নেই।');
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='en-US';u.rate=.9;speechSynthesis.speak(u);
}

/* ---------- practice view ---------- */
function renderPractice(){
  $('#breadcrumb').innerHTML='Learning <span>›</span> Practice';
  const v=Object.values(load(K.srs,{})),due=v.filter(x=>x.due<=Date.now()).length,mastered=v.filter(x=>x.box>=4).length;
  content.innerHTML=`<div class="page-heading"><div class="eyebrow">VOCABULARY PRACTICE</div><h1>Practice</h1><p>৫০০ শব্দ flashcard ও quiz-এর মাধ্যমে মনে রাখো। প্রতিদিন অন্তত ১০টি শব্দ অনুশীলন করো।</p></div>
  <section class="stats-grid"><article class="stat-card"><div><strong>${streak()}</strong><span>🔥 দিনের streak</span></div></article><article class="stat-card"><div><strong>${v.length}</strong><span>শেখা শুরু</span></div></article><article class="stat-card"><div><strong>${due}</strong><span>Review বাকি</span></div></article><article class="stat-card"><div><strong>${mastered}</strong><span>মুখস্থ</span></div></article></section>
  <div class="toolbar"><button class="primary-btn" data-p="cards">🗂 Flashcards</button><button class="primary-btn" data-p="quiz">✅ Quiz</button></div>
  <div id="pBody"><div class="empty-state"><h3>শুরু করতে একটি বেছে নাও</h3><p>Flashcard-এ নতুন ও review-এর শব্দ মিলিয়ে ১০টি আসবে।</p></div></div>
  <div class="settings-card"><div><b>Backup</b><p>Progress, bookmark ও flashcard ডেটা ফাইলে সংরক্ষণ করো বা ফিরিয়ে আনো।</p></div><div class="btn-row"><button class="primary-btn" data-p="exportData">Export</button> <button class="primary-btn" data-p="importData">Import</button></div></div>`;
}
async function cards(){
  const v=await loadVocab(),srs=load(K.srs,{}),now=Date.now();
  const due=shuffle(v.filter(w=>srs[w.en]&&srs[w.en].due<=now)),fresh=shuffle(v.filter(w=>!srs[w.en]));
  const q=[...due,...fresh].slice(0,10);
  sess={type:'cards',q,i:0,flip:false,known:0,total:q.length,srs};drawCard();
}
function drawCard(){
  const s=sess,w=s.q[s.i],b=$('#pBody');if(!b)return;
  if(!w){b.innerHTML=`<div class="empty-state"><h3>🎉 সেশন শেষ!</h3><p>${s.known} / ${s.total} শব্দ চিনেছ।</p><button class="primary-btn" data-p="cards">আরও ১০টি</button></div>`;return}
  b.innerHTML=`<div class="fc-meta">${s.i+1} / ${s.q.length} · Chapter ${w.ch}</div><div class="fc-card" data-a="flip"><h2>${escapeHtml(w.en)}</h2>${s.flip?`<p class="fc-bn">${inline(w.bn)}</p><p class="fc-ex">${escapeHtml(w.ex)}</p>`:'<p class="fc-hint">অর্থ দেখতে ট্যাপ করো</p>'}</div><div class="fc-actions"><button class="primary-btn" data-a="say">🔊 শোনো</button>${s.flip?'<button class="primary-btn" data-a="no">আবার দেখব</button><button class="primary-btn" data-a="yes">জানি ✓</button>':''}</div>`;
}
async function quiz(){
  const v=await loadVocab();
  const q=shuffle(v).slice(0,10).map(w=>({w,opts:shuffle([w,...shuffle(v.filter(x=>x.bn!==w.bn)).slice(0,3)])}));
  sess={type:'quiz',q,i:0,score:0,answered:false};drawQuiz();
}
function drawQuiz(pi){
  const s=sess,c=s.q[s.i],b=$('#pBody');if(!b)return;
  if(!c){b.innerHTML=`<div class="empty-state"><h3>স্কোর: ${s.score} / ${s.q.length}</h3><p>${s.score>=8?'দারুণ করেছ!':'আবার চেষ্টা করলে আরও ভালো হবে।'}</p><button class="primary-btn" data-p="quiz">নতুন Quiz</button></div>`;return}
  b.innerHTML=`<div class="fc-meta">${s.i+1} / ${s.q.length} · Score ${s.score}</div><div class="fc-card"><h2>${escapeHtml(c.w.en)}</h2><p class="fc-hint">সঠিক বাংলা অর্থ কোনটি?</p></div><div class="opts">${c.opts.map((o,i)=>`<button class="opt ${s.answered?(o===c.w?'right':i===pi?'wrong':''):''}" data-a="opt" data-i="${i}">${inline(o.bn)}</button>`).join('')}</div>${s.answered?`<p class="fc-ex">${escapeHtml(c.w.ex)}</p><div class="fc-actions"><button class="primary-btn" data-a="say">🔊 শোনো</button><button class="primary-btn" data-a="next">${s.i<s.q.length-1?'পরের প্রশ্ন →':'ফলাফল দেখো'}</button></div>`:''}`;
}

/* ---------- backup ---------- */
function exportData(){
  const d={};Object.keys(localStorage).filter(k=>k.startsWith('gp_')).forEach(k=>d[k]=localStorage.getItem(k));
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(d)],{type:'application/json'}));a.download='grammarpath-backup.json';a.click();
}
function importData(){
  const i=document.createElement('input');i.type='file';i.accept='.json';
  i.onchange=async()=>{try{const d=JSON.parse(await i.files[0].text());Object.entries(d).forEach(([k,v])=>k.startsWith('gp_')&&localStorage.setItem(k,v));location.reload()}catch{toast('ফাইলটি পড়া যায়নি।')}};
  i.click();
}
const actions={cards,quiz,exportData,importData};

/* ---------- click handling ---------- */
document.addEventListener('click',e=>{
  const p=e.target.closest('[data-p]');if(p){actions[p.dataset.p]();return}
  const a=e.target.closest('[data-a]');if(!a||!sess)return;
  const s=sess,act=a.dataset.a;
  if(act==='say'){const c=s.q[s.i];say((c.w||c).en);return}
  if(s.type==='cards'){
    if(act==='flip'){s.flip=!s.flip;drawCard();return}
    if(act==='yes'||act==='no'){
      const w=s.q[s.i],r=s.srs[w.en]||{box:0},ok=act==='yes';
      r.box=ok?Math.min(r.box+1,4):0;r.due=Date.now()+(ok?INT[r.box]:0)*DAY;
      s.srs[w.en]=r;put(K.srs,s.srs);touch();if(ok)s.known++;s.i++;s.flip=false;drawCard();
    }
  }else{
    if(act==='opt'&&!s.answered){const i=+a.dataset.i;s.answered=true;if(s.q[s.i].opts[i]===s.q[s.i].w)s.score++;touch();drawQuiz(i);return}
    if(act==='next'){s.i++;s.answered=false;drawQuiz()}
  }
});

/* ---------- navigation: Practice view + hash routing (Back button works) ---------- */
let internal=false;
const setHash=h=>{if(location.hash.slice(1)!==h){internal=true;location.hash=h}};
const _nav=navigate,_open=openChapter;
window.navigate=function(v){
  if(v==='practice'){
    state.view=v;document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===v));
    $('#sidebar').classList.remove('open');$('#overlay').classList.remove('show');sess=null;renderPractice();window.scrollTo(0,0);
  }else _nav(v);
  setHash(v);
};
window.openChapter=function(id){setHash('chapter/'+id);return _open(id)};
function route(){
  const h=location.hash.slice(1)||'home',m=h.match(/^chapter\/(\d+)$/);
  if(m)window.openChapter(+m[1]);
  else if(['home','chapters','bookmarks','progress','practice'].includes(h))window.navigate(h);
}
window.addEventListener('hashchange',()=>{if(internal){internal=false;return}route()});

window.gpTouch=touch;
/* ---------- init ---------- */
$('#sidebar .side-link[data-view="progress"]').insertAdjacentHTML('beforebegin','<button class="side-link" data-view="practice"><span>✦</span> Practice <em>500</em></button>');
$('.mobile-nav').insertAdjacentHTML('beforeend','<button data-view="practice"><span>✦</span>Practice</button>');
badge();
document.addEventListener('DOMContentLoaded',()=>{if(location.hash)route()});
})();
