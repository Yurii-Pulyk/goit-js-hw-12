/* empty css                      */import{a as L,S as w,i as c}from"./assets/vendor-C4-ZuMk8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const E="46829470-2665f0a199f61e35def0ecb3b",P="https://pixabay.com/api/";let y=1;const S=15;async function f(t,r=!1){r&&(y=1);const i=new URLSearchParams({key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:y,per_page:S});try{const o=await L.get(`${P}?${i.toString()}`);return y+=1,o.data}catch(o){throw o}}const p=document.querySelector(".gallery");function h(t){const r=t.map(({webformatURL:i,largeImageURL:o,tags:e,likes:s,views:l,comments:g,downloads:b})=>`
      <a href="${o}" class="gallery__item">
        <img src="${i}" alt="${e}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${s}</p>
          <p class="info-item"><b>Views:</b> ${l}</p>
          <p class="info-item"><b>Comments:</b> ${g}</p>
          <p class="info-item"><b>Downloads:</b> ${b}</p>
        </div>
      </a>`).join("");p.insertAdjacentHTML("beforeend",r)}const v=new w(".gallery a");v.refresh();const $=document.getElementById("form"),a=document.querySelector(".loader"),n=document.createElement("button");n.textContent="Load more";n.style.display="none";n.classList.add("load-more");document.body.appendChild(n);let d="",m=0,u=0;$.addEventListener("submit",async t=>{if(t.preventDefault(),p.innerHTML="",d=t.target.elements.searchquery.value.trim(),d===""){c.error({title:"Error",message:"Please enter a search query"});return}n.style.display="none",a.style.display="block";try{const r=await f(d,!0);a.style.display="none",m=r.totalHits,u=r.hits.length,r.hits.length===0?c.info({message:"Sorry, there are no images matching your search query. Please try again!"}):(h(r.hits),n.style.display=u<m?"block":"none")}catch(r){a.style.display="none",c.error({title:"Error",message:r.message})}});n.addEventListener("click",async()=>{a.style.display="block";try{const t=await f(d);a.style.display="none",u+=t.hits.length,h(t.hits),q(),u>=m&&(c.info({message:"We're sorry, but you've reached the end of search results."}),n.style.display="none")}catch(t){a.style.display="none",c.error({title:"Error",message:t.message})}});function q(){const{height:t}=p.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
