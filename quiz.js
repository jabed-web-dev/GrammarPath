/* GrammarPath chapter quizzes: 80% to complete a chapter. Question format: [chapter, prompt, RIGHT, wrong1, wrong2, explanation] */
(()=>{
const QB=[
[1,"“She quickly ran home.” — ‘quickly’ কোন part of speech?","Adverb","Adjective","Noun","quickly ক্রিয়া ran-কে বর্ণনা করে।"],
[1,"“Happiness is important.” — ‘Happiness’ কী?","Noun","Verb","Adjective","অনুভূতির নাম হলো Noun।"],
[1,"“They are happy.” — ‘They’ কোন part of speech?","Pronoun","Noun","Verb","They কোনো noun-এর বদলে বসেছে।"],
[2,"‘child’-এর plural কোনটি?","children","childs","childrens","child একটি irregular plural।"],
[2,"কোনটি uncountable noun?","advice","book","chair","advice-এর plural হয় না।"],
[3,"This book is ___. (আমার)","mine","my","me","Possessive pronoun: mine।"],
[3,"She hurt ___. (নিজেকে)","herself","her","hers","কর্তা ও কর্ম একই হলে reflexive pronoun।"],
[4,"I don’t have ___ money.","any","some","many","Negative বাক্যে সাধারণত any।"],
[4,"___ students are present. (অনেক)","Many","Much","A little","students countable, তাই Many।"],
[5,"She is ___ honest girl.","an","a","the","honest-এর h উচ্চারিত হয় না, তাই an।"],
[5,"___ sun rises in the east.","The","A","An","একমাত্র বস্তুর আগে the।"],
[6,"He ___ to school every day.","goes","go","going","he-এর সঙ্গে V-s/es।"],
[6,"They ___ football now.","are playing","plays","play","now মানে চলমান কাজ।"],
[7,"I have ___ my homework.","done","did","do","have-এর পরে V3।"],
[7,"She has ___ the window.","broken","broke","break","has + V3 = broken।"],
[8,"‘go’-এর past form কোনটি?","went","goed","gone","go একটি irregular verb।"],
[8,"‘write’-এর past participle কোনটি?","written","wrote","writed","write–wrote–written।"],
[9,"I have lived here ___ 2020.","since","for","from","শুরুর সময়ের আগে since।"],
[9,"When I arrived, they ___.","were eating","are eating","will eat","অতীতের নির্দিষ্ট সময়ে চলমান কাজ।"],
[10,"The team ___ winning.","is","are","were","team এক ইউনিট হিসেবে singular।"],
[10,"Each of the boys ___ a book.","has","have","having","Each সবসময় singular।"],
[11,"___ she like tea?","Does","Do","Is","she-এর সঙ্গে Does।"],
[11,"He ___ not finished.","has","have","is","he-এর সঙ্গে has।"],
[12,"You ___ smoke here. (নিষেধ)","must not","need not","ought","must not মানে নিষেধ।"],
[12,"She ___ swim when she was five.","could","can","must","অতীতের সক্ষমতায় could।"],
[13,"I enjoy ___.","swimming","to swim","swim","enjoy-এর পরে gerund।"],
[13,"She decided ___ abroad.","to go","going","go","decide-এর পরে infinitive।"],
[14,"I am ___ in music.","interested","interesting","interest","অনুভূতি বোঝাতে -ed adjective।"],
[14,"She is a ___ girl.","beautiful","beautifully","beauty","Noun-এর আগে adjective বসে।"],
[15,"She sings ___.","beautifully","beautiful","beauty","ক্রিয়াকে বর্ণনা করে adverb।"],
[15,"He drives ___.","carefully","careful","care","drives-কে বর্ণনা করতে adverb।"],
[16,"This is the ___ book.","best","better","good","the-এর পরে superlative।"],
[16,"She is taller ___ me.","than","then","from","তুলনায় than।"],
[17,"I was born ___ 2001.","in","on","at","সালের আগে in।"],
[17,"The meeting is ___ Monday.","on","in","at","বারের নামের আগে on।"],
[18,"I stayed home ___ it was raining.","because","but","so","কারণ বোঝাতে because।"],
[18,"I was tired ___ I kept working. (বিপরীত)","but","because","so","বিপরীত ভাব বোঝাতে but।"],
[19,"কোনটি একটি phrase (clause নয়)?","after the class","he came","I know","এতে subject + verb নেই।"],
[19,"‘to read books’ কী ধরনের phrase?","Infinitive phrase","Prepositional phrase","Noun phrase","to + V1 = infinitive।"],
[19,"“in the morning” কোন ধরনের phrase?","Prepositional phrase","Verb phrase","Noun clause","Preposition দিয়ে শুরু হয়েছে।"],
[20,"“I know that he is honest.” — underlined অংশ?","Noun clause","Adjective clause","Adverb clause","know-এর কর্ম হিসেবে বসেছে।"],
[20,"“She stayed because she was ill.” — underlined অংশ?","Adverb clause","Noun clause","Adjective clause","কারণ বোঝাচ্ছে।"],
[21,"The man ___ lives next door is a doctor.","who","which","whose","মানুষের জন্য who।"],
[21,"This is the book ___ I bought.","that","who","whose","বস্তুর জন্য that/which।"],
[22,"“Ali reads a book.” — Subject কোনটি?","Ali","reads","book","যে কাজ করে সেই subject।"],
[22,"“Though it rained, we went out.” — বাক্যের ধরন?","Complex","Simple","Compound","একটি subordinate clause আছে।"],
[23,"“Close the door.” কোন ধরনের বাক্য?","Imperative","Interrogative","Exclamatory","আদেশ বোঝায়।"],
[23,"“What a beautiful day!” কোন ধরনের বাক্য?","Exclamatory","Declarative","Imperative","বিস্ময় প্রকাশ করছে।"],
[24,"___ do you live? (কোথায়)","Where","When","Why","জায়গা জানতে where।"],
[24,"“She works here.” — প্রশ্নরূপ কোনটি?","Does she work here?","Does she works here?","Is she work here?","Does-এর পরে V1।"],
[25,"He ___ like coffee.","doesn’t","don’t","isn’t","he-এর সঙ্গে doesn’t।"],
[25,"I don’t have ___ time.","any","no","none","not-এর সঙ্গে no নয়, any।"],
[26,"The letter ___ by Rina.","was written","wrote","is writing","Passive = be + V3।"],
[26,"“They clean the room.” — Passive কোনটি?","The room is cleaned.","The room cleaned.","The room is clean by them.","is + V3।"],
[27,"She said, “I am tired.” → She said that she ___ tired.","was","is","will be","Reported speech-এ tense পিছিয়ে যায়।"],
[27,"He said, “I will go.” → He said he ___ go.","would","will","did","will → would।"],
[28,"If it rains, I ___ at home.","will stay","would stay","stayed","Type 1: if + present, will + V1।"],
[28,"If I were rich, I ___ a car.","would buy","will buy","bought","Type 2: would + V1।"],
[29,"Bread and butter ___ my breakfast.","is","are","were","একটি যুগ্ম খাবার, তাই singular।"],
[29,"A number of students ___ absent.","are","is","was","A number of + plural verb।"],
[30,"কোন বাক্যের শব্দক্রম সঠিক?","I always drink tea.","I drink always tea.","Always I drink tea.","Frequency adverb সাধারণত verb-এর আগে।"],
[30,"কোনটি সঠিক?","Where is the station?","Where the station is?","Where is station the?","প্রশ্নে verb আগে বসে।"],
[31,"কোনটি সঠিক?","Running to the bus, I dropped my bag.","Running to the bus, my bag fell.","Running to the bus, the bag was dropped.","Modifier-এর কর্তা I হতে হবে।"],
[31,"“a very tall boy” — ‘very’ কাকে modify করছে?","tall","boy","a","adverb adjective-কে modify করে।"],
[32,"He is as tall ___ his brother.","as","than","like","as … as গঠন।"],
[32,"The more you read, ___ you learn.","the more","more","most","The more … the more।"],
[33,"The dog wagged ___ tail.","its","it’s","its’","it’s = it is; মালিকানায় its।"],
[33,"কোনটি সঠিক?","Dhaka is the capital of Bangladesh.","dhaka is the capital of bangladesh.","Dhaka is the Capital of bangladesh.","স্থানের নাম বড় হাতের অক্ষরে।"],
[34,"কোনটি সঠিক?","I agree with you.","I am agree with you.","I am agreeing you.","agree নিজেই verb।"],
[34,"She is good ___ English.","at","in","on","good at।"],
[34,"কোনটি সঠিক?","She doesn’t have any money.","She don’t have any money.","She doesn’t has any money.","she-এর সঙ্গে doesn’t + V1।"],
[35,"Not only ___ late, but he was also rude.","did he arrive","he arrived","arrived he","Not only আগে এলে inversion।"],
[35,"Had I known, I ___ you.","would have told","will tell","told","Type 3 conditional।"]
];
const KEY='gp_quiz',N=5,sh=a=>[...a].sort(()=>Math.random()-.5);
const scores=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch{return{}}};
const words=s=>s.trim().split(/\s+/).length;
let cq=null;

async function build(c){
  const own=QB.filter(q=>q[0]===c.id).map(q=>({q:q[1],a:q[2],o:sh([q[2],q[3],q[4]]),e:q[5]}));
  const t=await(await fetch(c.file)).text(),auto=[];
  if(c.type==='vocabulary'){
    const rows=[...t.matchAll(/^\|\s*\*\*(.+?)\*\*\s*\|(.+?)\|(.+?)\|\s*$/gm)].map(m=>({en:m[1].trim(),bn:m[2].trim(),ex:m[3].trim()}));
    return sh(rows).slice(0,N).map(w=>({q:`“${w.en}” শব্দের সঠিক বাংলা অর্থ কোনটি?`,a:w.bn,o:sh([w.bn,...sh(rows.filter(x=>x.bn!==w.bn)).slice(0,3).map(x=>x.bn)]),e:w.ex,say:w.en}));
  }
  for(const m of t.matchAll(/^ভুল:\s*\*([^*]+)\*[^→\n]*→\s*\*\*([^*]+)\*\*/gm)){
    const w=m[1].trim().replace(/[.\s]+$/,''),r=m[2].trim().replace(/[.\s]+$/,'');
    if(words(w)>=3&&words(r)>=3&&Math.abs(words(w)-words(r))<=1&&w!==r)auto.push({q:'কোন বাক্যটি সঠিক?',a:r,o:sh([r,w]),e:`ভুল রূপ: ${w}`});
  }
  return sh([...sh(own),...auto]).slice(0,N);
}

const root=()=>$('#cquiz');
function intro(){
  const b=(scores()[cq.id]||{}).best;
  root().innerHTML=`<div class="eyebrow">CHAPTER QUIZ</div><h3>নিজেকে যাচাই করো</h3><p>${cq.qs.length}টি প্রশ্ন · ৮০% বা তার বেশি সঠিক হলে অধ্যায়টি স্বয়ংক্রিয়ভাবে Completed হবে।${b!=null?`<br>সেরা ফল: <b>${b}%</b>`:''}</p><button class="primary-btn" data-cq="start">${b!=null?'আবার চেষ্টা করো':'Quiz শুরু করো'} →</button>`;
}
function drawQ(pi){
  const s=cq,q=s.qs[s.i],ok=s.res[s.i]===1;
  root().innerHTML=`<div class="eyebrow">QUESTION ${s.i+1} / ${s.qs.length}</div><div class="cq-bar">${s.qs.map((_,i)=>`<i class="${s.res[i]===1?'ok':s.res[i]===0?'bad':i===s.i?'on':''}"></i>`).join('')}</div><div class="cq-q">${escapeHtml(q.q)}</div><div class="opts">${q.o.map((o,i)=>`<button class="opt ${s.answered?(o===q.a?'right':i===pi?'wrong':''):''}" data-cq="opt" data-i="${i}" ${s.answered?'disabled':''}>${escapeHtml(o)}</button>`).join('')}</div>${s.answered?`<div class="cq-exp"><b>${ok?'✓ সঠিক!':'✗ সঠিক উত্তর: '+escapeHtml(q.a)}</b>${q.e?`<br>💡 ${escapeHtml(q.e)}`:''}</div><div class="fc-actions">${q.say?'<button class="primary-btn" data-cq="say">🔊 শোনো</button>':''}<button class="primary-btn" data-cq="next">${s.i<s.qs.length-1?'পরের প্রশ্ন →':'ফলাফল দেখো'}</button></div>`:''}`;
}
function result(){
  const s=cq,sc=s.res.filter(Boolean).length,p=Math.round(sc/s.qs.length*100),pass=p>=80;
  const all=scores(),prev=all[s.id]||{};all[s.id]={best:Math.max(prev.best||0,p),tries:(prev.tries||0)+1};
  localStorage.setItem(KEY,JSON.stringify(all));
  if(pass){
    if(!completed.has(s.id)){completed.add(s.id);save()}
    const btn=$('#markComplete');if(btn){btn.textContent='✓ Completed';btn.classList.add('completed-btn')}
    window.gpTouch&&window.gpTouch();
  }
  root().innerHTML=`<div class="cq-result"><div class="cq-score ${pass?'pass':'fail'}">${p}%</div><h3>${pass?'🎉 অভিনন্দন! অধ্যায়টি Completed':'আরেকবার চেষ্টা করো'}</h3><p>${sc} / ${s.qs.length} সঠিক।${pass?'':' ৮০% পেতে অধ্যায়টি আবার পড়ে নতুন প্রশ্নে চেষ্টা করো।'}</p><div class="fc-actions"><button class="primary-btn" data-cq="retry">আবার Quiz দাও</button>${pass&&s.id<TOTAL_CHAPTERS?`<button class="primary-btn" data-chapter="${s.id+1}">পরের অধ্যায় →</button>`:''}</div></div>`;
}
async function mount(id){
  const c=chapters.find(x=>x.id===id),end=$('.lesson-end');if(!c||!end)return;
  let qs;try{qs=await build(c)}catch(e){console.error('Quiz build failed',e);return}
  if(state.chapter!==id||qs.length<3||$('#cquiz'))return;
  $('.lesson-end').insertAdjacentHTML('beforebegin','<section class="cquiz" id="cquiz"></section>');
  cq={id,c,qs,fresh:false};intro();
}
document.addEventListener('click',async e=>{
  const b=e.target.closest('[data-cq]');if(!b||!cq||!root())return;
  const act=b.dataset.cq,s=cq;
  if(act==='start'||act==='retry'){
    if(s.fresh)s.qs=await build(s.c);
    s.fresh=true;s.i=0;s.res=[];s.answered=false;drawQ();return;
  }
  if(act==='opt'&&!s.answered){const i=+b.dataset.i;s.answered=true;s.res[s.i]=s.qs[s.i].o[i]===s.qs[s.i].a?1:0;drawQ(i);return}
  if(act==='next'){s.i++;s.answered=false;s.i<s.qs.length?drawQ():result();return}
  if(act==='say'&&'speechSynthesis'in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(s.qs[s.i].say);u.lang='en-US';u.rate=.9;speechSynthesis.speak(u)}
});
const _o=window.openChapter;
window.openChapter=async function(id){await _o(id);mount(id)};
})();
