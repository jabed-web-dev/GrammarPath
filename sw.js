const CACHE='grammarpath-v12';
const CORE=['./','./index.html','./styles.css','./app.js','./extra.js','./quiz.js','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png','./chapters/00_README_Study_Guide.md','./chapters/01_Parts_of_Speech.md','./chapters/02_Nouns.md','./chapters/03_Pronouns.md','./chapters/04_Determiners.md','./chapters/05_Articles.md','./chapters/06_Verbs.md','./chapters/07_Verb_Forms.md','./chapters/08_Regular_Irregular_Verbs.md','./chapters/09_Tenses.md','./chapters/10_Subject_Verb_Agreement.md','./chapters/11_Auxiliary_Verbs.md','./chapters/12_Modal_Verbs.md','./chapters/13_Gerund_Infinitive_Participles.md','./chapters/14_Adjectives.md','./chapters/15_Adverbs.md','./chapters/16_Degrees_of_Comparison.md','./chapters/17_Prepositions.md','./chapters/18_Conjunctions.md','./chapters/19_Phrases.md','./chapters/20_Clauses.md','./chapters/21_Relative_Clauses.md','./chapters/22_Sentence_Structure.md','./chapters/23_Sentence_Types.md','./chapters/24_Question_Formation.md','./chapters/25_Negation.md','./chapters/26_Active_Passive_Voice.md','./chapters/27_Direct_Indirect_Speech.md','./chapters/28_Conditionals.md','./chapters/29_Advanced_Agreement.md','./chapters/30_Word_Order.md','./chapters/31_Modifiers.md','./chapters/32_Comparison_Special_Structures.md','./chapters/33_Punctuation_Capitalization.md','./chapters/34_Common_Grammar_Errors.md','./chapters/35_Advanced_Grammar.md','./chapters/36_Nouns_Common.md','./chapters/37_Nouns_Practical.md','./chapters/38_Verbs_Daily.md','./chapters/39_Verbs_Practical.md','./chapters/40_Adjectives.md','./chapters/41_Adverbs_Prepositions.md','./chapters/42_Pronouns_Question_Words.md','./chapters/43_Phrasal_Verbs.md','./chapters/44_Collocations.md','./chapters/45_Expressions.md'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith(caches.open(CACHE).then(async c=>{
    const hit=await c.match(r);
    const net=fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res}).catch(()=>null);
    return hit||net.then(res=>res||(r.mode==='navigate'?c.match('./index.html'):Response.error()));
  }));
});
