import{S as h,i as l}from"./assets/vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=document.querySelector(".form"),p=document.querySelector(".input");document.querySelector(".btn");const m=document.querySelector(".gallery"),u=document.querySelector(".spinner"),y=new h(".gallery a"),g="41458722-788aa599ff2a579d31eb49587",i=new URL("https://pixabay.com/api/");i.searchParams.append("key",`${g}`);i.searchParams.append("image_type","photo");i.searchParams.append("orientation","horizontal");i.searchParams.append("safesearch","true");let d;p.addEventListener("input",t=>{d=t.target.value});const P=()=>(i.searchParams.delete("q"),i.searchParams.append("q",`${d}`),fetch(i).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}));c.addEventListener("submit",t=>{t.preventDefault(),u.classList.add("loader"),m.innerHTML="",P().then(o=>{o.total===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),b(o.hits),y.refresh()}).catch(o=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{c.reset(),u.classList.remove("loader")})});function b(t){m.insertAdjacentHTML("afterbegin",t.reduce((o,{largeImageURL:s,webformatURL:n,likes:e,views:r,comments:a,downloads:f})=>o+`<li class="gallery-item">
          <a href="${s}">
          
            <div class="pic-item">
              <img src="${n}" alt="photo">
            </div>
            <ul class="information-list">
              <li class="information-item">likes<br>${e}</li>
              <li class="information-item">views<br>${r}</li>
              <li class="information-item">comments<br>${a}</li>
              <li class="information-item">downloads<br>${f}</li>
            </ul>
          
          </a>
        </li>`,""))}
//# sourceMappingURL=commonHelpers.js.map
