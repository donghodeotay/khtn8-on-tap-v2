/* app.js — KHTN 8 ôn tập tổng hợp. Single quiz with shuffle on retake. */
(function(){
  "use strict";
  function $(s,r){ return (r||document).querySelector(s); }
  function $$(s,r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); }
  function escapeRegex(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function escapeHtml(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function shuffle(a){ for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
  function pad2(n){ return n<10?"0"+n:""+n; }
  function fmtTime(ms){ var s=Math.max(0,Math.floor(ms/1000)); return pad2(Math.floor(s/60))+":"+pad2(s%60); }

  /* ----- glossary tooltip ----- */
  var TERM_REGEX=null, TERM_MAP=null;
  function buildMatcher(){
    if(!window.GLOSSARY||!window.GLOSSARY.length) return;
    var seen={}, unique=[];
    window.GLOSSARY.forEach(function(e){ var k=e[0].toLowerCase(); if(!seen[k]){ seen[k]=true; unique.push(e); } });
    var entries=unique.sort(function(a,b){ return b[0].length-a[0].length; });
    TERM_MAP={}; var parts=[];
    entries.forEach(function(e){ TERM_MAP[e[0].toLowerCase()]={en:e[1],type:e[2]||"term"}; parts.push(escapeRegex(e[0])); });
    try{ TERM_REGEX=new RegExp("(?<![\\p{L}\\p{N}])("+parts.join("|")+")(?![\\p{L}\\p{N}])","giu"); }
    catch(e){ TERM_REGEX=new RegExp("(^|[^\\w])("+parts.join("|")+")(?![\\w])","gi"); }
  }
  function wrap(text){
    if(!text) return "";
    if(!TERM_REGEX) return escapeHtml(text);
    TERM_REGEX.lastIndex=0;
    var out="", lastIdx=0, m;
    while((m=TERM_REGEX.exec(text))!==null){
      var matched=m[1]!==undefined&&TERM_MAP[m[1].toLowerCase()]?m[1]:(m[2]!==undefined?m[2]:m[0]);
      var prefix=m[1]&&!TERM_MAP[m[1].toLowerCase()]?m[1]:"";
      var matchStart=m.index+(prefix?prefix.length:0);
      var entry=TERM_MAP[matched.toLowerCase()];
      if(!entry) continue;
      out+=escapeHtml(text.slice(lastIdx, matchStart));
      if(prefix) out+=escapeHtml(prefix);
      var cls="term"+(entry.type==="common"?" term-common":"");
      out+='<span class="'+cls+'" tabindex="0" data-en="'+escapeHtml(entry.en)+'" data-vi="'+escapeHtml(matched)+'">'+escapeHtml(matched)+'</span>';
      lastIdx=matchStart+matched.length;
      if(m.index===TERM_REGEX.lastIndex) TERM_REGEX.lastIndex++;
    }
    out+=escapeHtml(text.slice(lastIdx));
    return out;
  }
  var tipEl=null, hideTimer=null;
  function getTip(){ if(!tipEl) tipEl=document.getElementById("term-tooltip"); return tipEl; }
  function position(target){
    var tip=getTip(); var r=target.getBoundingClientRect(); var tipR=tip.getBoundingClientRect(); var pad=8;
    var top=r.bottom+8, below=false;
    if(top+tipR.height+pad>window.innerHeight){ top=r.top-tipR.height-8; below=true; }
    var left=r.left+r.width/2-tipR.width/2;
    left=Math.max(pad, Math.min(left, window.innerWidth-tipR.width-pad));
    tip.style.left=left+"px"; tip.style.top=top+"px"; tip.classList.toggle("below", below);
  }
  function show(target){
    var tip=getTip(); if(!tip) return;
    tip.innerHTML='<div class="term-tooltip-en">'+escapeHtml(target.getAttribute("data-en"))+'</div><div class="term-tooltip-vi">'+escapeHtml(target.getAttribute("data-vi"))+'</div>';
    tip.classList.add("show"); position(target); target.classList.add("active");
    if(hideTimer){ clearTimeout(hideTimer); hideTimer=null; }
  }
  function hide(){
    var tip=getTip(); if(!tip) return;
    tip.classList.remove("show");
    document.querySelectorAll(".term.active, .term-common.active").forEach(function(el){ el.classList.remove("active"); });
  }
  function bindTips(root){
    $$(".term, .term-common", root).forEach(function(el){
      el.addEventListener("mouseenter", function(){ show(el); });
      el.addEventListener("mouseleave", function(){ hideTimer=setTimeout(function(){ hide(); }, 100); });
      el.addEventListener("click", function(ev){ ev.stopPropagation(); if(el.classList.contains("active")) hide(); else show(el); });
    });
  }
  document.addEventListener("click", function(e){ if(!e.target.closest||!e.target.closest(".term, .term-common")) hide(); });
  ["scroll","resize"].forEach(function(ev){ window.addEventListener(ev, function(){ var a=document.querySelector(".term.active, .term-common.active"); if(a) position(a); }, {passive:true}); });
  function richText(el, text){ el.innerHTML=wrap(text); bindTips(el); }

  /* ----- quiz state ----- */
  var qs=[], answers=[], locked=[], correct=0, startTs=0, timerId=null;
  function startQuiz(){
    qs = shuffle((window.QUESTIONS||[]).slice());
    answers = qs.map(function(){ return -1; });
    locked  = qs.map(function(){ return false; });
    correct = 0;
    startTs = Date.now();
    if(timerId) clearInterval(timerId);
    timerId = setInterval(updateTime, 500);
    render();
    updateStat();
    showScreen("screen-quiz");
  }
  function showScreen(id){
    $$(".screen").forEach(function(el){ el.classList.remove("active"); });
    $("#"+id).classList.add("active");
    window.scrollTo({top:0, behavior:"smooth"});
  }

  function render(){
    var box=$("#quiz-box"); box.innerHTML="";
    var letters=["A","B","C","D"];
    var subjLabel = {hoa:"Hóa", ly:"Lý", sinh:"Sinh"};
    var subjClass = {hoa:"chip-hoa", ly:"chip-ly", sinh:"chip-sinh"};
    qs.forEach(function(q, qi){
      var el=document.createElement("div"); el.className="question"; el.setAttribute("data-qi", qi);
      el.innerHTML =
        '<div class="q-header">'+
          '<span class="q-num">'+(qi+1)+'</span>'+
          '<span class="subject-chip '+(subjClass[q.subject]||'')+'">'+subjLabel[q.subject]+'</span>'+
          '<span class="q-text"></span>'+
        '</div>'+
        '<div class="options">'+
          q.options.map(function(_, i){ return '<div class="option" data-oi="'+i+'"><span class="option-letter">'+letters[i]+'</span><span class="option-text"></span></div>'; }).join("")+
        '</div>'+
        '<div class="feedback"><div class="feedback-title"></div><div class="feedback-body"></div></div>';
      richText($(".q-text", el), q.q);
      $$(".option", el).forEach(function(o, oi){
        richText($(".option-text", o), q.options[oi]);
        o.addEventListener("click", function(e){ if(e.target.closest(".term, .term-common")) return; answer(qi, oi); });
      });
      box.appendChild(el);
    });
  }

  function answer(qi, oi){
    if(locked[qi]) return;
    answers[qi]=oi; locked[qi]=true;
    var q=qs[qi], el=$('.question[data-qi="'+qi+'"]');
    $$(".option", el).forEach(function(o, k){
      o.classList.add("locked");
      if(k===q.correct) o.classList.add("correct");
      else if(k===oi) o.classList.add("wrong");
    });
    var fb=$(".feedback", el), ok=oi===q.correct;
    fb.classList.add("show"); fb.classList.toggle("correct", ok); fb.classList.toggle("wrong", !ok);
    var head=ok?"✓ Chính xác!":"✗ Chưa đúng. Đáp án đúng: "+["A","B","C","D"][q.correct]+".";
    $(".feedback-title", el).textContent=head;
    richText($(".feedback-body", el), q.explanation);
    if(ok) correct++;
    updateStat();
  }
  function score(){
    var c=0,w=0,s=0;
    qs.forEach(function(q,i){ if(answers[i]===-1) s++; else if(answers[i]===q.correct) c++; else w++; });
    return {correct:c, wrong:w, skipped:s, total:qs.length};
  }
  function updateStat(){
    var sc=score(), ans=sc.correct+sc.wrong;
    $("#quiz-progress").textContent=ans+"/"+sc.total;
    $("#quiz-score").textContent=sc.correct;
    $("#progress-fill").style.width=(ans/sc.total*100)+"%";
  }
  function updateTime(){
    $("#quiz-time").textContent = fmtTime(Date.now()-startTs);
  }
  function finish(){
    var sc=score();
    if(sc.skipped>0 && !confirm("Bạn chưa trả lời "+sc.skipped+" câu. Vẫn nộp bài?")) return;
    if(timerId){ clearInterval(timerId); timerId=null; }
    var elapsed = Date.now()-startTs;
    var pct = Math.round(sc.correct/sc.total*100);
    $("#result-percent").textContent=pct+"%";
    $("#result-fraction").textContent=sc.correct+" / "+sc.total;
    $("#stat-correct").textContent=sc.correct;
    $("#stat-wrong").textContent=sc.wrong;
    $("#stat-skipped").textContent=sc.skipped;
    $("#stat-time").textContent=fmtTime(elapsed);
    var fb;
    if(pct>=90) fb="Xuất sắc! Bạn nắm rất chắc kiến thức KHTN 8.";
    else if(pct>=75) fb="Rất tốt — chỉ cần ôn lại vài chỗ là hoàn hảo.";
    else if(pct>=50) fb="Khá ổn. Hãy xem lại các câu sai để củng cố.";
    else fb="Cần ôn tập thêm. Đừng nản — làm lại để cải thiện!";
    $("#result-feedback").textContent=fb;
    var fg=$("#rc-fg"); var circ=2*Math.PI*52;
    fg.setAttribute("stroke-dasharray",circ.toFixed(2));
    fg.setAttribute("stroke-dashoffset",circ.toFixed(2));
    fg.classList.remove("bad","warn");
    if(pct<50) fg.classList.add("bad");
    else if(pct<75) fg.classList.add("warn");
    requestAnimationFrame(function(){ fg.setAttribute("stroke-dashoffset",(circ*(1-pct/100)).toFixed(2)); });
    showScreen("screen-result");
  }

  function init(){
    buildMatcher();
    bindTips(document);
    $("#btn-start").addEventListener("click", startQuiz);
    $("#btn-finish").addEventListener("click", function(){ finish(); });
    $("#btn-retry").addEventListener("click", startQuiz);
    $("#btn-review").addEventListener("click", function(){ showScreen("screen-quiz"); });
    $("#btn-home").addEventListener("click", function(){ showScreen("screen-home"); });
    $("#btn-back").addEventListener("click", function(){
      var sc=score();
      if(sc.correct+sc.wrong>0 && !confirm("Bạn đang làm bài. Quay lại sẽ mất tiến độ. Tiếp tục?")) return;
      if(timerId){ clearInterval(timerId); timerId=null; }
      showScreen("screen-home");
    });
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
