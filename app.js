const projects = {
  "index.html": `<!doctype html>
<html lang="ar" dir="rtl">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>مشاركة الموقع</title><link rel="stylesheet" href="style.css"></head>
<body><main class="card"><h1>📍 مشاركة الموقع</h1><p>هذا مشروع تجريبي مولّد بواسطة Code AI.</p><button onclick="share()">مشاركة موقعي</button><p id="status"></p></main><script src="app.js"></script></body></html>`,
  "style.css": `body{font-family:Arial;background:#eef2ff;margin:0;min-height:100vh;display:grid;place-items:center}.card{background:white;padding:30px;border-radius:18px;box-shadow:0 12px 40px #0002;text-align:center;width:min(90%,420px)}button{background:#635bff;color:white;border:0;padding:12px 20px;border-radius:10px;cursor:pointer;font-size:16px}#status{color:#555}`,
  "app.js": `function share(){const s=document.getElementById('status');if(!navigator.geolocation){s.textContent='المتصفح لا يدعم تحديد الموقع.';return}s.textContent='جارٍ طلب إذن الموقع...';navigator.geolocation.getCurrentPosition(p=>{const {latitude,longitude}=p.coords;s.textContent='موقعك: '+latitude.toFixed(5)+', '+longitude.toFixed(5);},()=>s.textContent='تعذر الوصول للموقع. تأكد من السماح للموقع.');}`
};

let current="index.html";
const tree=document.getElementById("fileTree"), editor=document.getElementById("editor"), currentFile=document.getElementById("currentFile");
function renderTree(){tree.innerHTML=Object.keys(projects).map(f=>`<div class="file ${f===current?'active':''}" data-file="${f}">📄 ${f}</div>`).join("");document.querySelectorAll(".file").forEach(x=>x.onclick=()=>openFile(x.dataset.file))}
function openFile(f){current=f;editor.value=projects[f];currentFile.textContent=f;renderTree()}
renderTree();openFile(current);

const chat=document.getElementById("chat");
function add(role,text){const d=document.createElement("div");d.className="msg "+role;d.textContent=text;chat.appendChild(d);chat.scrollTop=chat.scrollHeight}
add("ai","مرحبًا! أنا Code AI 🤖\\nاكتب لي فكرة مشروعك، وسأولّد لك ملفات البداية. يمكنك تجربة زر «مشاركة موقع لعدة أشخاص».");

function generate(prompt){
  const p=prompt.toLowerCase();
  if(p.includes("مشاركة")&&p.includes("موقع")){
    projects["index.html"]=`<!doctype html>
<html lang="ar" dir="rtl">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>مشاركة الموقع</title><link rel="stylesheet" href="style.css"></head>
<body>
<header><b>📍 مشاركة الموقع</b><span id="count">0 أشخاص</span></header>
<main><section id="map"><div class="pin me">أنت</div><div class="pin p1">أحمد</div><div class="pin p2">سارة</div></section>
<section class="people"><h2>الأشخاص المشاركون</h2><div class="person">🟢 أنت <small>متصل</small></div><div class="person">🔵 أحمد <small>متصل</small></div><div class="person">🟣 سارة <small>متصل</small></div><button onclick="requestLocation()">تحديث موقعي</button></section></main>
<script src="app.js"></script></body></html>`;
    projects["style.css"]=`*{box-sizing:border-box}body{margin:0;font-family:Arial;background:#eef2f7;color:#172033}header{height:60px;background:#111827;color:white;display:flex;justify-content:space-between;align-items:center;padding:0 18px}main{display:grid;grid-template-columns:1fr 320px;height:calc(100vh - 60px)}#map{position:relative;background:linear-gradient(#dbeafe 1px,transparent 1px),linear-gradient(90deg,#dbeafe 1px,transparent 1px);background-size:40px 40px;background-color:#f8fafc;overflow:hidden}.pin{position:absolute;background:white;padding:8px 10px;border-radius:20px;box-shadow:0 5px 20px #0002;font-weight:bold}.me{left:45%;top:45%}.p1{left:65%;top:30%}.p2{left:25%;top:65%}.people{background:white;padding:20px}.person{padding:13px;border-bottom:1px solid #eee;display:flex;justify-content:space-between}.person small{color:#16a34a}button{width:100%;margin-top:20px;padding:12px;border:0;border-radius:10px;background:#4f46e5;color:white}@media(max-width:700px){main{grid-template-columns:1fr;height:auto}.people{order:-1}#map{height:55vh}}`;
    projects["app.js"]=`function requestLocation(){const count=document.getElementById('count');if(!navigator.geolocation){alert('المتصفح لا يدعم الموقع');return}navigator.geolocation.getCurrentPosition(p=>{count.textContent='3 أشخاص • تم تحديث موقعك';alert('تم تحديث الموقع بنجاح\\n'+p.coords.latitude.toFixed(5)+', '+p.coords.longitude.toFixed(5));},()=>alert('اسمح للموقع من إعدادات المتصفح.'));}`;
    return "تم إنشاء نموذج أولي لموقع مشاركة الموقع. يحتوي على خريطة تجريبية، قائمة بالأشخاص، وتحديث موقع الجهاز عبر Geolocation.\\n\\nملاحظة: المشاركة الحقيقية بين عدة أجهزة تحتاج خادمًا وقاعدة بيانات/خدمة realtime؛ النسخة الحالية واجهة وتجربة محلية آمنة.";
  }
  if(p.includes("تسجيل")){projects["index.html"]=`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>تسجيل الدخول</title><link rel="stylesheet" href="style.css"></head><body><form><h1>تسجيل الدخول</h1><input placeholder="البريد الإلكتروني"><input type="password" placeholder="كلمة المرور"><button>دخول</button></form></body></html>`;projects["style.css"]=`body{font-family:Arial;background:#0f172a;display:grid;place-items:center;min-height:100vh}form{background:white;padding:30px;border-radius:18px;width:min(90%,360px)}input,button{width:100%;padding:12px;margin:7px 0;box-sizing:border-box}button{background:#635bff;color:white;border:0;border-radius:8px}`;delete projects["app.js"];return "تم إنشاء صفحة تسجيل دخول بسيطة وجاهزة للتعديل."}
  return "أستطيع إنشاء نموذج أولي من فكرتك. جرّب: «اصنع لي موقع مشاركة موقع لعدة أشخاص» أو «اصنع لي صفحة تسجيل دخول».";
}

document.getElementById("sendBtn").onclick=()=>{
  const p=document.getElementById("prompt").value.trim();if(!p)return;
  add("user",p);const result=generate(p);add("ai",result);renderTree();openFile(Object.keys(projects)[0]);document.getElementById("prompt").value="";
};
document.querySelectorAll(".quick button").forEach(b=>b.onclick=()=>{document.getElementById("prompt").value=b.dataset.prompt;document.getElementById("sendBtn").click()});
editor.addEventListener("input",()=>projects[current]=editor.value);
document.getElementById("copyBtn").onclick=async()=>{await navigator.clipboard.writeText(editor.value);toast("تم نسخ الكود");};
document.getElementById("previewBtn").onclick=()=>document.querySelector(".editor-panel").classList.toggle("previewing");
document.getElementById("newBtn").onclick=()=>{Object.keys(projects).forEach(k=>delete projects[k]);projects["index.html"]="<!-- ابدأ مشروعك هنا -->";current="index.html";renderTree();openFile(current);chat.innerHTML="";add("ai","تم إنشاء مشروع جديد. اكتب فكرتك في الأسفل.");};
document.getElementById("downloadBtn").onclick=()=>{
  const entries=Object.entries(projects);
  let out=`Code AI Project\\n\\n`;
  entries.forEach(([name,data])=>out+=`===== ${name} =====\\n${data}\\n\\n`);
  const blob=new Blob([out],{type:"text/plain;charset=utf-8"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="code-ai-project.txt";a.click();toast("تم تنزيل ملفات المشروع كملف نصي. لعمل ZIP حقيقي استخدم زر ZIP في النسخة المتقدمة.");
};
function toast(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2200)}
