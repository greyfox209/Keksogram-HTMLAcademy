(()=>{var e={624:()=>{const e=["jpg","jpeg","png"],t=document.querySelector("#upload-file"),r=document.querySelector(".img-upload__preview").querySelector("img"),n=document.querySelectorAll(".effects__preview");t.addEventListener("change",(()=>{const o=t.files[0],s=o.name.toLowerCase();if(e.some((e=>s.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{r.src=e.result,r.width=600,r.height=600,n.forEach((t=>{t.style.backgroundImage=`url(${e.result})`}))})),e.readAsDataURL(o)}}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}(()=>{"use strict";const e=e=>"Esc"===e.key||"Escape"===e.key,t=document.querySelector(".big-picture"),n=document.querySelector("body"),o=document.querySelector(".big-picture__cancel"),s=document.querySelector("#comment").content.querySelector(".social__comment"),c=document.querySelector(".social__comments");let l=[];const i=t.querySelector(".social__comment-count"),a=t.querySelector(".comments-loader");let d=5;const u=()=>{t.classList.add("hidden"),n.classList.remove("modal-open"),o.removeEventListener("click",u),c.innerHTML="",document.removeEventListener("keydown",v),d=5,l=[]},m=e=>{d=e.length<5?e.length:d,l=e.slice(0,d),c.innerHTML="",i.textContent=`${l.length} из ${e.length} комментариев`;let t=document.createDocumentFragment();l.forEach((e=>{t.appendChild((e=>{const t=s.cloneNode(!0);return t.querySelector(".social__picture").src=e.avatar,t.querySelector(".social__picture").alt=e.name,t.querySelector(".social__text").textContent=e.message,t})(e))})),c.appendChild(t),e.length>5&&l.length<e.length?(a.classList.remove("hidden"),a.addEventListener("click",(()=>{m(e)}),{once:!0})):a.classList.add("hidden"),d+=5},v=t=>{e(t)&&u()},y=document.querySelector("#picture").content.querySelector(".picture"),p=document.querySelector(".pictures"),_=e=>{let r=document.createDocumentFragment();e.forEach((e=>{r.appendChild((e=>{const r=y.cloneNode(!0);return r.querySelector(".picture__img").src=e.url,r.querySelector(".picture__likes").textContent=e.likes,r.querySelector(".picture__comments").textContent=e.comments.length,r.addEventListener("click",(r=>{r.preventDefault(),(e=>{d=5,l=[],n.classList.add("modal-open"),t.querySelector(".big-picture__img > img").src=e.url,t.querySelector(".likes-count").textContent=e.likes,t.querySelector(".social__caption").textContent=e.description,o.addEventListener("click",u),t.classList.remove("hidden"),document.addEventListener("keydown",v),m(e.comments.slice())})(e)})),r})(e))})),p.appendChild(r)},g={GET:"https://22.javascript.pages.academy/kekstagram/data",POST:"https://22.javascript.pages.academy/kekstagram"},h=(e,t,r,n)=>{fetch(g[r],{method:r,body:n}).then((e=>e.json())).then((t=>{e(t)})).catch((()=>{t()}))},L=document.querySelector("main"),S=document.querySelector("#error").content,f=document.createDocumentFragment(),q=document.querySelector("#success").content,E=document.createDocumentFragment(),k=(t,r)=>{e(t)&&b(r)},w=e=>{k(e,".error"),document.removeEventListener("keydown",w)},C=e=>{k(e,".success"),document.removeEventListener("keydown",C)},b=e=>{document.querySelector(e).remove()},x=(e,t)=>{const r=S.cloneNode(!0);r.querySelector(".error__title").textContent=e,r.querySelector(".error__button").textContent=t;const n=r.querySelector(".error__button");r.querySelector(".error").addEventListener("click",(e=>{e.target.classList.contains("error__inner")||(document.removeEventListener("keydown",w),b(".error"))})),n.addEventListener("click",(()=>{b(".error")})),document.addEventListener("keydown",w),f.appendChild(r),L.appendChild(f)},V=document.querySelector(".img-upload__effects"),D=document.querySelector(".img-upload__effect-level"),T=document.querySelector(".effect-level__slider"),$=document.querySelector(".img-upload__preview > img"),I=document.querySelector(".effect-level__value");D.classList.add("visually-hidden");let F="";const M={none:()=>(D.classList.add("visually-hidden"),"none"),chrome:()=>(D.classList.remove("visually-hidden"),`grayscale(${.01*parseInt(I.value,10)})`),sepia:()=>(D.classList.remove("visually-hidden"),`sepia(${.01*parseInt(I.value,10)})`),marvin:()=>(D.classList.remove("visually-hidden"),`invert(${Math.floor(I.value)}%)`),phobos:()=>(D.classList.remove("visually-hidden"),`blur(${3*parseInt(I.value,10)*.01}px)`),heat:()=>(D.classList.remove("visually-hidden"),`brightness(${3*parseInt(I.value,10)*.01})`)};V.addEventListener("click",(e=>{if(e.target.classList.contains("effects__preview")){""!==F&&$.classList.remove(F),T.noUiSlider.set(100);let t=e.target.classList[1];F=t,$.classList.add(t),$.style.filter=M[t.replace("effects__preview--","")]()}})),noUiSlider.create(T,{range:{min:0,max:100},start:100,connect:"lower"}),T.noUiSlider.on("change",(()=>{I.value=Math.round(T.noUiSlider.get()),$.style.filter=M[F.replace("effects__preview--","")]()}));const U=document.querySelector("body"),j=document.querySelector(".img-upload__overlay"),N=document.querySelector("#upload-file"),O=document.querySelector("#upload-cancel");N.addEventListener("change",(function(){B(),j.classList.remove("hidden"),U.classList.add("modal-open"),document.addEventListener("keydown",P)}));const A=()=>{j.classList.add("hidden"),U.classList.remove("modal-open"),z.style.border="none",N.value="",J.reset(),T.noUiSlider.set(100),I.value=100,D.classList.add("visually-hidden"),$.style.filter=null,F&&$.classList.remove(F),document.removeEventListener("keydown",P)};O.addEventListener("click",(function(){A()}));const P=t=>{e(t)&&A()},G=j.querySelector(".scale__control--bigger"),H=j.querySelector(".scale__control--smaller"),R=j.querySelector(".scale__control--value"),W=j.querySelector(".img-upload__preview > img");let z=j.querySelector(".text__hashtags");const B=()=>{W.style="transform: scale(1.00)",R.value="100%"};G.addEventListener("click",(()=>{let e=parseInt(R.value,10)+25;e>=100&&(e=100),R.value=e+"%",e/=100,W.style.transform="scale("+e+")"})),H.addEventListener("click",(()=>{let e=parseInt(R.value,10)-25;e<=25&&(e=25),R.value=e+"%",e/=100,W.style.transform="scale("+e+")"}));const J=document.querySelector(".img-upload__form"),K=()=>{(e=>{const t=q.cloneNode(!0);t.querySelector(".success__title").textContent="Ура!",t.querySelector(".success").addEventListener("click",(e=>{e.target.classList.contains("success__inner")||(document.removeEventListener("keydown",C),b(".success"))})),document.addEventListener("keydown",C),E.appendChild(t),L.appendChild(E)})(),A()},Q=()=>{x("ЧТо-то пошло не так","Загрузить другой файл")};J.addEventListener("submit",(e=>{e.preventDefault(),h(K,Q,"POST",new FormData(e.target))}));let X=document.querySelector(".text__hashtags"),Y=document.querySelector(".text__description");Y.addEventListener("input",(()=>{Y.setCustomValidity(""),Y.value.length>140&&Y.setCustomValidity("Максимум 140 символов")})),X.addEventListener("input",(()=>{X.setCustomValidity(""),X.style.border="none";let e=X.value.toLowerCase().trim();if(!e)return;let t=e.split(/\s+/);0!==t.length&&(t.some((e=>"#"!==e[0]))&&X.setCustomValidity("Хэш-тег начинается с символа # (решётка)"),t.some((e=>"#"===e))&&X.setCustomValidity("Хэш-тег не может состоять только из решетки"),t.some((e=>e.indexOf("#",1)>=1))&&X.setCustomValidity("Хэш-теги разделяются пробелами"),t.some(((e,t,r)=>r.indexOf(e,t+1)>=t+1))&&X.setCustomValidity("Хэш-теги не должны повторяться"),t.some((e=>e.length>20))&&X.setCustomValidity("Максимальная длина хэш-тега 20 символов, включая решетку"),t.length>5&&X.setCustomValidity("Максимум 5 хэш-тегов"),X.checkValidity()?X.style.border="none":X.style.border="2px solid red")}));const Z=t=>{e(t)&&(t.preventDefault(),t.stopPropagation())};X.addEventListener("keydown",Z),Y.addEventListener("keydown",Z),r(624);const ee=document.querySelector(".img-filters");let te=[];const re={"filter-default":()=>{_(te.slice(0,25))},"filter-random":()=>{_((e=>{let t,r;for(let n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),r=e[t],e[t]=e[n],e[n]=r;return e})(te.slice()).slice(0,10))},"filter-discussed":()=>{_(te.slice().sort(((e,t)=>t.comments.length-e.comments.length)))}};h((e=>{ee.classList.remove("img-filters--inactive"),te=e.slice(),_(te.slice(0,25))}),(()=>{x("Ошибка загрузки, попробуйте еще раз","Закрыть")}),"GET");const ne=(e=>{let t=null;return(...e)=>{t&&window.clearTimeout(t),t=window.setTimeout((()=>{(e=>{e.target.classList.contains("img-filters__button")&&(document.querySelector(".img-filters__button--active").classList.remove("img-filters__button--active"),(()=>{const e=document.querySelectorAll(".picture");e&&e.forEach((e=>{e.remove()}))})(),e.target.classList.add("img-filters__button--active"),re[e.target.id]())})(...e)}),500)}})();ee.addEventListener("click",ne)})()})();
//# sourceMappingURL=main.bundle.js.map