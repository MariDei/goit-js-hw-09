import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const l="feedback-form-state",t=document.querySelector(".feedback-form"),m=t.querySelector("textarea");m.addEventListener("input",n);t.addEventListener("submit",i);let e=JSON.parse(localStorage.getItem(l))||{};const{email:r,message:o}=t.elements;s();function n(a){e={email:t.elements.email.value.trim(),message:t.elements.message.value.trim()},localStorage.setItem(l,JSON.stringify(e))}function s(){e&&(r.value=e.email||"",o.value=e.message||"")}function i(a){if(a.preventDefault(),console.log({email:r.value,message:o.value}),r.value===""||o.value==="")return alert("Будь ласка, заповніть обидва поля.");localStorage.removeItem(l),a.currentTarget.reset(),e={}}
//# sourceMappingURL=commonHelpers2.js.map
