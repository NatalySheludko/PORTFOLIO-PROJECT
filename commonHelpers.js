import{A as k,S as w,K as x,M as C,i as S}from"./assets/vendor-b30fa0f2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const y=document.querySelector(".mobile-menu-burger-btn"),g=document.querySelector(".mobile-menu-close-btn"),i=document.querySelector(".mobile-menu-wrapper"),M=document.querySelector(".mobile-menu-container");M.addEventListener("click",e=>{i.classList.remove("is-open")});y&&g&&i&&(y.addEventListener("click",function(){j()}),g.addEventListener("click",function(){i.classList.remove("is-open")}));function j(){i.classList.contains("is-open")?i.classList.remove("is-open"):i.classList.add("is-open")}document.addEventListener("click",function(e){const t=document.querySelector(".title-menu"),r=document.querySelector(".tablet-menu-wrapper");e.target===t||e.target.closest(".tablet-menu-link")?r.classList.toggle("is-open"):r.classList.remove("is-open"),document.querySelectorAll(".tablet-menu-link").forEach(function(n){n.addEventListener("click",function(){r.classList.add("visually-hidden")})}),document.querySelectorAll(".tablet-menu-item").forEach(function(n){n.addEventListener("click",function(){r.classList.remove("is-open")})})});function A(){return fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error("Not found");return e.json()}).then(e=>e).catch(e=>{throw console.error(e),e})}const P=document.querySelector(".accordeon-list");new k(P,{duration:600,showMultiple:!0,openOnInit:[0]});const T=document.querySelectorAll(".accordeon-title");T.forEach(e=>{e.addEventListener("click",function(){const t=e.querySelector(".title-icon"),r=e.nextElementSibling;t.classList.toggle("active-is"),r.classList.toggle("hidden")})});const I=document.querySelector(".swiper-next"),N=document.querySelector(".about-me-swiper-container"),v=new w(".about-me-skills",{modules:[x,C],speed:800,loop:!0,slidesPerView:2,slideActiveClass:"swiper-content-wrap-active",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},slideToClickedSlide:!0});I.addEventListener("click",()=>{v.slideNext()});N.addEventListener("keydown",function(e){e.preventDefault(),e.key==="Tab"?v.slideNext():v.slidePrev()});const u="/vanilla-app-template/assets/symbol-defs-bade43dc.svg",p=new w(".projects-block-slider.swiper-container",{slidesPerView:1,navigation:{nextEl:".projects-button-slider-next.swiper-button-next",prevEl:".projects-button-slider-prev.swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},on:{reachEnd:function(){document.querySelector(".projects-button-slider-next.swiper-button-next svg use").setAttribute("href",`${u}#icon-arrow-narrow-right`);var e=document.querySelector(".projects-button-slider-next");e.style.borderColor="grey"},reachBeginning:function(){document.querySelector(".projects-button-slider-prev.swiper-button-prev svg use").setAttribute("href",`${u}#icon-arrow-narrow-right`);var e=document.querySelector(".projects-button-slider-prev");e.style.borderColor="grey"},slideChange:function(){if(!p.isBeginning&&!p.isEnd){document.querySelector(".projects-button-slider-next.swiper-button-next svg use").setAttribute("href",`${u}#icon-arrow-right-white`),document.querySelector(".projects-button-slider-prev.swiper-button-prev svg use").setAttribute("href",`${u}#icon-arrow-right-white`);var e=document.querySelector(".projects-button-slider-prev"),t=document.querySelector(".projects-button-slider-next");e.style.borderColor="white",t.style.borderColor="white"}}}});document.addEventListener("keydown",function(e){e.keyCode===9&&(e.preventDefault(),e.shiftKey?p.slidePrev():p.slideNext())});const a={coversWrapperMenuList:document.querySelectorAll(".covers-wrapper-menu-list"),coversContent:document.querySelector(".covers-content")},O=new IntersectionObserver(e=>{if(e[0].isIntersecting)for(let t=0;t<a.coversWrapperMenuList.length;t+=1)a.coversWrapperMenuList[t].classList.add("covers-animation");else for(let t=0;t<a.coversWrapperMenuList.length;t+=1)a.coversWrapperMenuList[t].classList.remove("covers-animation")});O.observe(a.coversContent);function V(e){const t=document.querySelector(".reviews-gallery");if(t.innerHTML="",!e||e.length===0){t.textContent="Not found";return}const r=e.map(o=>`<div class="swiper-slide reviews-list"><img class="reviews-image" src="${o.avatar_url}" alt="user photo" width=48px
  height=48px border-radius=10px/>
  <h3 class="reviews-author">${o.author}</h3>
  <p class="reviews-text">${o.review}</p></div>`).join("");t.insertAdjacentHTML("beforeend",r)}document.addEventListener("DOMContentLoaded",async()=>{try{const e=await A();V(e);const t=new w(".swiper-reviews",{breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".section-reviews .swiper-button-next",prevEl:".section-reviews .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchRatio:1,loop:!1,on:{init:function(){h(this)},slideChange:function(){h(this)}}}),r=document.querySelector(".section-reviews .swiper-button-prev"),o=document.querySelector(".section-reviews .swiper-button-next");r.addEventListener("keydown",function(s){s.key==="Tab"&&(s.preventDefault(),t.slidePrev())}),o.addEventListener("keydown",function(s){s.key==="Tab"&&(s.preventDefault(),t.slideNext())})}catch(e){console.error(e)}});function h(e){const t=document.querySelector(".section-reviews .swiper-button-prev"),r=document.querySelector(".section-reviews .swiper-button-next");e.isBeginning?t.classList.add("disabled"):t.classList.remove("disabled"),e.isEnd?r.classList.add("disabled"):r.classList.remove("disabled")}const c=document.querySelector(".modal-window"),B=document.querySelector(".modal-close");function R(){return c.classList.add("is-open")}function z(){return c.classList.remove("is-open")}B.addEventListener("click",z);document.addEventListener("keydown",e=>{if(e.key==="Escape")return c.classList.remove("is-open")});c.addEventListener("click",e=>{if(e.target===c)return c.classList.remove("is-open")});async function W(e){try{const t=await fetch("https://portfolio-js.b.goit.study/api/requests",e);if(!t.ok)throw new Error("Not found");return t.json()}catch(t){throw t}}const $=document.querySelector(".footer-form-order"),b=document.querySelector(".email"),m=document.querySelector(".message");b.addEventListener("change",function(){D(b)});function E(e){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e.toLowerCase())}function D(e){q(e);const t=e.value,r=E(t),o=document.querySelector("label");r?(e.classList.remove("error-label"),e.classList.add("success-label"),L(e,"Success!","success"),o&&(o.classList.remove("error-label"),o.classList.add("success-label"))):(e.classList.remove("success-label"),e.classList.add("error-label"),L(e,"Invalid email, try again","error"),o&&(o.classList.remove("success-label"),o.classList.add("error-label")))}const f=document.createElement("label");function L(e,t,r){f.textContent=t,f.classList.add(r+"-label"),e.parentNode.children[0].after(f)}function q(e){const t=document.querySelector("label.success-label"),r=document.querySelector("label.error-label");t&&(t.innerHTML=""),r&&(r.innerHTML=""),e.classList.remove("error-label"),e.classList.remove("success-label")}m.addEventListener("change",H);function H(){m.value,m.value=K(m,20)}function K(e,t){const r=e.value;return r.length<=t?r:r.slice(0,t)+"..."}function U(){S.show({color:"red",message:"ERROR SERVER",position:"topCenter"})}$.addEventListener("submit",_);function _(e){e.preventDefault();const t=e.currentTarget.elements,r=t.email.value,o=t.comments.value;let s=E(r);const n={email:r.trim(),comment:o.trim()},l={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{s===!0&&o!=""?(W(l),R(),e.currentTarget.reset()):S.show({color:"red",message:"All form fields must be filled in",position:"topCenter"})}catch{U()}q(b)}const F=document.querySelectorAll(".faq-card");F.forEach(e=>e.addEventListener("click",()=>{e.classList.toggle("active")}));let G=document.querySelector(":root"),d=document.querySelector("button");d.addEventListener("click",()=>{G.classList.toggle("light-theme"),d.textContent==="SUN"?d.textContent="NIGHT":d.textContent="SUN"});
//# sourceMappingURL=commonHelpers.js.map
