import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const l="feedback-form-state",e=document.querySelector(".feedback-form");e.querySelector("input");e.querySelector("textarea");e.addEventListener("input",m);e.addEventListener("submit",s);let t=JSON.parse(localStorage.getItem(l))||{};const{email:r,message:o}=e.elements;n();function m(a){t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()},localStorage.setItem(l,JSON.stringify(t))}function n(){t&&(r.value=t.email||"",o.value=t.message||"")}function s(a){if(a.preventDefault(),console.log({email:r.value,message:o.value}),r.value===""||o.value==="")return alert("Будь ласка, заповніть обидва поля.");localStorage.removeItem(l),a.currentTarget.reset(),t={}}
//# sourceMappingURL=commonHelpers2.js.map