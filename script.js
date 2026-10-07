const destinations=[
{name:"Sigiriya",location:"Central Sri Lanka",desc:"Ancient rock fortress surrounded by forest and royal history.",tags:["History","Nature"],img:"https://images.unsplash.com/photo-1586613832692-0fdbd5f5f7d4?auto=format&fit=crop&w=1000&q=85",map:"https://www.google.com/maps/search/?api=1&query=Sigiriya+Sri+Lanka",types:["nature","culture","adventure"]},
{name:"Ella",location:"Uva Province",desc:"Misty mountains, tea country, waterfalls and unforgettable views.",tags:["Mountains","Train"],img:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=85",map:"https://www.google.com/maps/search/?api=1&query=Ella+Sri+Lanka",types:["nature","mountains","train","adventure"]},
{name:"Kandy",location:"Central Province",desc:"Sacred temples, culture and the gateway to the hill country.",tags:["Culture","History"],img:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85",map:"https://www.google.com/maps/search/?api=1&query=Kandy+Sri+Lanka",types:["culture","food","mountains"]},
{name:"Nuwara Eliya",location:"Hill Country",desc:"Cool mountain air, tea estates and waterfalls.",tags:["Tea","Nature"],img:"https://images.unsplash.com/photo-1588598198321-9735e5f7c8cc?auto=format&fit=crop&w=1000&q=85",map:"https://www.google.com/maps/search/?api=1&query=Nuwara+Eliya+Sri+Lanka",types:["nature","mountains","train"]},
{name:"Mirissa",location:"South Coast",desc:"Golden beaches, turquoise water and a relaxed coastal atmosphere.",tags:["Beach","Ocean"],img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",map:"https://www.google.com/maps/search/?api=1&query=Mirissa+Sri+Lanka",types:["beaches","nature","food"]},
{name:"Galle",location:"Southern Province",desc:"Colonial charm, ocean views and the historic Galle Fort.",tags:["Heritage","Coast"],img:"https://images.unsplash.com/photo-1596627116790-af6f46dddb6f?auto=format&fit=crop&w=1000&q=85",map:"https://www.google.com/maps/search/?api=1&query=Galle+Sri+Lanka",types:["culture","beaches","food"]},
{name:"Yala",location:"Southern Sri Lanka",desc:"Wild landscapes and one of the island's best-known safari regions.",tags:["Wildlife","Safari"],img:"https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=85",map:"https://www.google.com/maps/search/?api=1&query=Yala+National+Park+Sri+Lanka",types:["wildlife","nature","adventure"]},
{name:"Trincomalee",location:"East Coast",desc:"Crystal-clear bays, beaches and a spectacular tropical coastline.",tags:["Beach","East"],img:"https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1000&q=85",map:"https://www.google.com/maps/search/?api=1&query=Trincomalee+Sri+Lanka",types:["beaches","nature"]},
{name:"Arugam Bay",location:"East Coast",desc:"A laid-back coastal escape famous for waves and adventure.",tags:["Surf","Adventure"],img:"https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1000&q=85",map:"https://www.google.com/maps/search/?api=1&query=Arugam+Bay+Sri+Lanka",types:["beaches","adventure","food"]},
{name:"Jaffna",location:"Northern Sri Lanka",desc:"Distinctive northern culture, food, temples and history.",tags:["Culture","Food"],img:"https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&w=1000&q=85",map:"https://www.google.com/maps/search/?api=1&query=Jaffna+Sri+Lanka",types:["culture","food"]}
];

const grid=document.querySelector("#destinationGrid");
function renderDest(list=destinations){
 grid.innerHTML=list.map((d,i)=>`<article class="dest-card" data-index="${destinations.indexOf(d)}"><div class="dest-img" style="background-image:url('${d.img}')"></div><div class="dest-content"><span class="dest-no">${String(destinations.indexOf(d)+1).padStart(2,"0")}</span><h3>${d.name}</h3><p>${d.desc}</p>${d.tags.map(t=>`<span class="tag">${t}</span>`).join("")}<a class="dest-open" href="${d.map}" target="_blank">MAP →</a></div></article>`).join("");
 document.querySelectorAll(".dest-card").forEach(c=>c.addEventListener("click",e=>{if(e.target.closest(".dest-open"))return;openModal(destinations[+c.dataset.index])}));
}
renderDest();

const filters=["ALL","NATURE","BEACHES","MOUNTAINS","CULTURE","WILDLIFE","FOOD","TRAIN","ADVENTURE"];
document.querySelector("#filters").innerHTML=filters.map((f,i)=>`<button class="filter ${i===0?"active":""}" data-filter="${f.toLowerCase()}">${f}</button>`).join("");
document.querySelectorAll(".filter").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");const f=btn.dataset.filter;renderDest(f==="all"?destinations:destinations.filter(d=>d.types.includes(f==="train"?"train":f)))});

const modal=document.querySelector("#modal");
function openModal(d){document.querySelector("#modalPhoto").style.backgroundImage=`url('${d.img}')`;document.querySelector("#modalLocation").textContent=d.location;document.querySelector("#modalTitle").textContent=d.name;document.querySelector("#modalText").textContent=d.desc+" Explore the landscape, local experiences and stories that make this destination special.";document.querySelector("#modalTags").innerHTML=d.tags.map(t=>`<span class="tag">${t}</span>`).join("");document.querySelector("#modalMap").href=d.map;modal.classList.add("open")}
document.querySelector(".modal-close").onclick=()=>modal.classList.remove("open");modal.onclick=e=>{if(e.target===modal)modal.classList.remove("open")};

const days=["3 DAYS","5 DAYS","7 DAYS","10 DAYS","14+ DAYS"],moods=["Nature","Beaches","Adventure","Culture","Wildlife","Food"];
let selectedDays="5 DAYS",selectedMood="Nature";
document.querySelector("#days").innerHTML=days.map((d,i)=>`<button class="choice ${i===1?"selected":""}" data-v="${d}">${d}</button>`).join("");
document.querySelector("#moods").innerHTML=moods.map((d,i)=>`<button class="choice ${i===0?"selected":""}" data-v="${d}">${d}</button>`).join("");
document.querySelectorAll(".choice").forEach(b=>b.onclick=()=>{b.parentElement.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");if(b.parentElement.id==="days")selectedDays=b.dataset.v;else selectedMood=b.dataset.v});
document.querySelector("#generatePlan").onclick=()=>{const n=selectedDays==="3 DAYS"?3:selectedDays==="5 DAYS"?5:selectedDays==="7 DAYS"?7:selectedDays==="10 DAYS"?10:14;const picks={Nature:["Ella","Nuwara Eliya","Kandy","Sigiriya"],Beaches:["Mirissa","Galle","Trincomalee","Arugam Bay"],Adventure:["Ella","Sigiriya","Arugam Bay","Yala"],Culture:["Kandy","Sigiriya","Galle","Jaffna"],Wildlife:["Yala","Minneriya","Udawalawe","Sigiriya"],Food:["Kandy","Jaffna","Galle","Colombo"]}[selectedMood];document.querySelector("#itinerary").innerHTML=`<span class="eyebrow">YOUR PERSONAL ROUTE</span><h3>${selectedDays} · ${selectedMood}</h3>${Array.from({length:Math.min(n,6)},(_,i)=>`<div class="day"><strong>DAY ${i+1}</strong><h4>${picks[i%picks.length]}</h4><span>Explore, experience and slow down.</span></div>`).join("")}`};

window.addEventListener("scroll",()=>document.querySelector("#navbar").classList.toggle("scrolled",scrollY>40));
document.querySelector(".menu-toggle").onclick=()=>document.querySelector(".nav-links").classList.toggle("open");

const counters=document.querySelectorAll("[data-count]");const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!e.target.dataset.done){e.target.dataset.done=1;let end=+e.target.dataset.count,start=0,step=Math.max(1,Math.ceil(end/45));const timer=setInterval(()=>{start+=step;if(start>=end){start=end;clearInterval(timer)}e.target.textContent=start.toLocaleString()+(end===1300?"+":end===2500?"+":"")},25)}}),{threshold:.6});counters.forEach(c=>observer.observe(c));

document.querySelectorAll(".gallery-grid img").forEach(img=>img.onclick=()=>{document.querySelector("#lightboxImg").src=img.src;document.querySelector("#lightbox").classList.add("open")});
document.querySelector("#lightbox").onclick=e=>{if(e.target.id==="lightbox"||e.target.tagName==="BUTTON")e.currentTarget.classList.remove("open")};

document.querySelector("#contactForm").onsubmit=e=>{e.preventDefault();document.querySelector("#formMsg").textContent="Thanks! Your message has been prepared successfully.";e.target.reset()};
