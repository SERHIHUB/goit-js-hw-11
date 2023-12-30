import{S as d,i as m}from"./assets/vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),f=document.querySelector(".input");document.querySelector(".btn");const p=document.querySelector(".gallery"),c=document.querySelector(".spinner"),h="41458722-788aa599ff2a579d31eb49587",i=new URL("https://pixabay.com/api/");i.searchParams.append("key",`${h}`);i.searchParams.append("image_type","photo");i.searchParams.append("orientation","horizontal");i.searchParams.append("safesearch","true");f.addEventListener("input",r=>{i.searchParams.append("q",`${r.target.value}`)});const y=()=>fetch(i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}),g=new d(".gallery a");l.addEventListener("submit",r=>{r.preventDefault(),c.classList.add("loader"),y().then(o=>{o.total===0&&m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),b(o.hits),g.refresh()}).catch(o=>console.log(o)).finally(()=>{l.reset(),c.classList.remove("loader")})});function b(r){p.insertAdjacentHTML("afterbegin",r.reduce((o,{largeImageURL:a,webformatURL:s,likes:e,views:t,comments:n,downloads:u})=>o+`<li class="gallery-item">
          <a class="imgLink" href="${a}">
          
            <div class="pic-item">
              <img src="${s}" alt="photo">
            </div>
            <ul class="information-list">
              <li class="information-item">likes<br>${e}</li>
              <li class="information-item">views<br>${t}</li>
              <li class="information-item">comments<br>${n}</li>
              <li class="information-item">downloads<br>${u}</li>
            </ul>
          
          </a>
        </li>`,""))}
//# sourceMappingURL=commonHelpers.js.map
