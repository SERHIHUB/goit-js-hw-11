import{S as f,i as p}from"./assets/vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),h=document.querySelector(".input");document.querySelector(".btn");const c=document.querySelector(".gallery"),u=document.querySelector(".spinner"),y=new f(".gallery a"),g="41458722-788aa599ff2a579d31eb49587",i=new URL("https://pixabay.com/api/");i.searchParams.append("key",`${g}`);i.searchParams.append("image_type","photo");i.searchParams.append("orientation","horizontal");i.searchParams.append("safesearch","true");let d;h.addEventListener("input",r=>{d=r.target.value});const b=()=>(i.searchParams.append("q",`${d}`),fetch(i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}));l.addEventListener("submit",r=>{r.preventDefault(),u.classList.add("loader"),b().then(o=>{o.total===0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),L(o.hits),y.refresh()}).catch(o=>console.log(o)).finally(()=>{l.reset(),u.classList.remove("loader")})});function L(r){c.innerHTML="",c.insertAdjacentHTML("afterbegin",r.reduce((o,{largeImageURL:s,webformatURL:a,likes:e,views:t,comments:n,downloads:m})=>o+`<li class="gallery-item">
          <a href="${s}">
          
            <div class="pic-item">
              <img src="${a}" alt="photo">
            </div>
            <ul class="information-list">
              <li class="information-item">likes<br>${e}</li>
              <li class="information-item">views<br>${t}</li>
              <li class="information-item">comments<br>${n}</li>
              <li class="information-item">downloads<br>${m}</li>
            </ul>
          
          </a>
        </li>`,""))}
//# sourceMappingURL=commonHelpers.js.map
