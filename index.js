/* empty css                      */import{a as g,S as b,i as c}from"./assets/vendor-C4-ZuMk8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const L="46829470-2665f0a199f61e35def0ecb3b",w="https://pixabay.com/api/";let u=1;const E=15;async function m(t,s=!1){s&&(u=1);const i=new URLSearchParams({key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:u,per_page:E});try{const o=await g.get(`${w}?${i.toString()}`);return u+=1,o.data}catch(o){throw o}}const y=document.querySelector(".gallery"),P=new b(".gallery a");P.refresh();function p(t){const s=t.map(({webformatURL:i,largeImageURL:o,tags:e,likes:r,views:l,comments:f,downloads:h})=>`
      <a href="${o}" class="gallery__item">
        <img src="${i}" alt="${e}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${r}</p>
          <p class="info-item"><b>Views:</b> ${l}</p>
          <p class="info-item"><b>Comments:</b> ${f}</p>
          <p class="info-item"><b>Downloads:</b> ${h}</p>
        </div>
      </a>`).join("");y.insertAdjacentHTML("beforeend",s)}const S=document.getElementById("form"),n=document.querySelector(".loader"),a=document.createElement("button");a.textContent="Load more";a.style.display="none";a.classList.add("load-more");document.body.appendChild(a);let d="";S.addEventListener("submit",async t=>{if(t.preventDefault(),y.innerHTML="",d=t.target.elements.searchquery.value.trim(),d===""){c.error({title:"Error",message:"Please enter a search query"});return}a.style.display="none",n.style.display="block";try{const s=await m(d,!0);n.style.display="none",s.hits.length===0?c.info({message:"Sorry, there are no images matching your search query. Please try again!"}):(p(s.hits),a.style.display="block")}catch(s){n.style.display="none",c.error({title:"Error",message:s.message})}});a.addEventListener("click",async()=>{n.style.display="block";try{const t=await m(d);n.style.display="none",t.hits.length===0?(c.info({message:"We're sorry, but you've reached the end of search results."}),a.style.display="none"):(p(t.hits),v())}catch(t){n.style.display="none",c.error({title:"Error",message:t.message})}});function v(){const{height:t}=y.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map