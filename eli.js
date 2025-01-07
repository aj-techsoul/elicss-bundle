/* sweetalert2.all.min.js */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Sweetalert2=e()}(this,function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&s(i,n.prototype),i}).apply(null,arguments)}function d(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function f(e){return Object.keys(e).map(function(t){return e[t]})}function m(t){return Array.prototype.slice.call(t)}function h(t){console.error("".concat(N," ").concat(t))}function g(t,e){!function(t){-1===U.indexOf(t)&&(U.push(t),D(t))}('"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'))}function v(t){return t&&Promise.resolve(t)===t}function b(t){return t instanceof Element||function(t){return"object"===r(t)&&t.jquery}(t)}function t(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function y(){return document.body.querySelector(".".concat(z.container))}function w(t){var e=y();return e?e.querySelector(t):null}function e(t){return w(".".concat(t))}function C(){return e(z.popup)}function n(){var t=C();return m(t.querySelectorAll(".".concat(z.icon)))}function k(){var t=n().filter(function(t){return dt(t)});return t.length?t[0]:null}function x(){return e(z.title)}function P(){return e(z.content)}function A(){return e(z.image)}function B(){return e(z["progress-steps"])}function S(){return e(z["validation-message"])}function E(){return w(".".concat(z.actions," .").concat(z.confirm))}function T(){return w(".".concat(z.actions," .").concat(z.cancel))}function L(){return e(z.actions)}function O(){return e(z.header)}function M(){return e(z.footer)}function H(){return e(z["timer-progress-bar"])}function j(){return e(z.close)}function V(){var t=m(C().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=m(C().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return dt(t)})}function I(){return!K()&&!document.body.classList.contains(z["no-backdrop"])}function q(t,e){if(!e)return!1;for(var n=e.split(/\s+/),o=0;o<n.length;o++)if(!t.classList.contains(n[o]))return!1;return!0}function R(t,e,n){if(!function(e,n){m(e.classList).forEach(function(t){-1===f(z).indexOf(t)&&-1===f(W).indexOf(t)&&-1===f(n.showClass).indexOf(t)&&e.classList.remove(t)})}(t,e),e.customClass&&e.customClass[n]){if("string"!=typeof e.customClass[n]&&!e.customClass[n].forEach)return D("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(r(e.customClass[n]),'"'));ut(t,e.customClass[n])}}var N="SweetAlert2:",D=function(t){console.warn("".concat(N," ").concat(t))},U=[],F=function(t){return"function"==typeof t?t():t},_=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),z=t(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","show","hide","close","title","header","content","html-container","actions","confirm","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","scrollbar-measure"]),W=t(["success","warning","info","question","error"]),K=function(){return document.body.classList.contains(z["toast-shown"])},Y={previousBodyPadding:null};function Z(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return lt(t,z[e]);case"checkbox":return t.querySelector(".".concat(z.checkbox," input"));case"radio":return t.querySelector(".".concat(z.radio," input:checked"))||t.querySelector(".".concat(z.radio," input:first-child"));case"range":return t.querySelector(".".concat(z.range," input"));default:return lt(t,z.input)}}function Q(t){if(t.focus(),"file"!==t.type){var e=t.value;t.value="",t.value=e}}function $(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function J(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)}function X(t,e){var n=1<arguments.length&&void 0!==e?e:"flex";t.style.opacity="",t.style.display=n}function G(t){t.style.opacity="",t.style.display="none"}function tt(t,e,n){e?X(t,n):G(t)}function et(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function nt(t,e){var n=1<arguments.length&&void 0!==e&&e,o=H();dt(o)&&(n&&(o.style.transition="none",o.style.width="100%"),setTimeout(function(){o.style.transition="width ".concat(t/1e3,"s linear"),o.style.width="0%"},10))}function ot(){return"undefined"==typeof window||"undefined"==typeof document}function it(t){Qe.isVisible()&&ct!==t.target.value&&Qe.resetValidationMessage(),ct=t.target.value}function rt(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===r(t)?mt(e,t):t&&(e.innerHTML=t)}function at(t,e){var n=L(),o=E(),i=T();e.showConfirmButton||e.showCancelButton||G(n),R(n,e,"actions"),gt(o,"confirm",e),gt(i,"cancel",e),e.buttonsStyling?function(t,e,n){ut([t,e],z.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor);n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);var o=window.getComputedStyle(t).getPropertyValue("background-color");t.style.borderLeftColor=o,t.style.borderRightColor=o}(o,i,e):(st([o,i],z.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor=""),e.reverseButtons&&o.parentNode.insertBefore(i,o)}var ct,ut=function(t,e){$(t,e,!0)},st=function(t,e){$(t,e,!1)},lt=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(q(t.childNodes[n],e))return t.childNodes[n]},dt=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},pt='\n <div aria-labelledby="'.concat(z.title,'" aria-describedby="').concat(z.content,'" class="').concat(z.popup,'" tabindex="-1">\n   <div class="').concat(z.header,'">\n     <ul class="').concat(z["progress-steps"],'"></ul>\n     <div class="').concat(z.icon," ").concat(W.error,'"></div>\n     <div class="').concat(z.icon," ").concat(W.question,'"></div>\n     <div class="').concat(z.icon," ").concat(W.warning,'"></div>\n     <div class="').concat(z.icon," ").concat(W.info,'"></div>\n     <div class="').concat(z.icon," ").concat(W.success,'"></div>\n     <img class="').concat(z.image,'" />\n     <h2 class="').concat(z.title,'" id="').concat(z.title,'"></h2>\n     <button type="button" class="').concat(z.close,'"></button>\n   </div>\n   <div class="').concat(z.content,'">\n     <div id="').concat(z.content,'" class="').concat(z["html-container"],'"></div>\n     <input class="').concat(z.input,'" />\n     <input type="file" class="').concat(z.file,'" />\n     <div class="').concat(z.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(z.select,'"></select>\n     <div class="').concat(z.radio,'"></div>\n     <label for="').concat(z.checkbox,'" class="').concat(z.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(z.label,'"></span>\n     </label>\n     <textarea class="').concat(z.textarea,'"></textarea>\n     <div class="').concat(z["validation-message"],'" id="').concat(z["validation-message"],'"></div>\n   </div>\n   <div class="').concat(z.actions,'">\n     <button type="button" class="').concat(z.confirm,'">OK</button>\n     <button type="button" class="').concat(z.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(z.footer,'"></div>\n   <div class="').concat(z["timer-progress-bar"],'"></div>\n </div>\n').replace(/(^|\n)\s*/g,""),ft=function(t){if(!function(){var t=y();t&&(t.parentNode.removeChild(t),st([document.documentElement,document.body],[z["no-backdrop"],z["toast-shown"],z["has-column"]]))}(),ot())h("SweetAlert2 requires document to initialize");else{var e=document.createElement("div");e.className=z.container,e.innerHTML=pt;var n=function(t){return"string"==typeof t?document.querySelector(t):t}(t.target);n.appendChild(e),function(t){var e=C();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")}(t),function(t){"rtl"===window.getComputedStyle(t).direction&&ut(y(),z.rtl)}(n),function(){var t=P(),e=lt(t,z.input),n=lt(t,z.file),o=t.querySelector(".".concat(z.range," input")),i=t.querySelector(".".concat(z.range," output")),r=lt(t,z.select),a=t.querySelector(".".concat(z.checkbox," input")),c=lt(t,z.textarea);e.oninput=it,n.onchange=it,r.onchange=it,a.onchange=it,c.oninput=it,o.oninput=function(t){it(t),i.value=o.value},o.onchange=function(t){it(t),o.nextSibling.value=o.value}}()}},mt=function(t,e){if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},ht=function(){if(ot())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&void 0!==t.style[n])return e[n];return!1}();function gt(t,e,n){tt(t,n["show".concat(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(e),"Button")],"inline-block"),t.innerHTML=n["".concat(e,"ButtonText")],t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=z[e],R(t,n,"".concat(e,"Button")),ut(t,n["".concat(e,"ButtonClass")])}function vt(t,e){var n=y();n&&(function(t,e){"string"==typeof e?t.style.background=e:e||ut([document.documentElement,document.body],z["no-backdrop"])}(n,e.backdrop),!e.backdrop&&e.allowOutsideClick&&D('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),function(t,e){e in z?ut(t,z[e]):(D('The "position" parameter is not valid, defaulting to "center"'),ut(t,z.center))}(n,e.position),function(t,e){if(e&&"string"==typeof e){var n="grow-".concat(e);n in z&&ut(t,z[n])}}(n,e.grow),R(n,e,"container"))}function bt(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var yt={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},wt=["input","file","range","select","radio","checkbox","textarea"],Ct=function(t){if(!At[t.input])return h('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));var e=Pt(t.input),n=At[t.input](e,t);X(n),setTimeout(function(){Q(n)})},kt=function(t,e){var n=Z(P(),t);if(n)for(var o in!function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},xt=function(t){var e=Pt(t.input);t.customClass&&ut(e,t.customClass.input)},Pt=function(t){var e=z[t]?z[t]:z.input;return lt(P(),e)},At={};At.text=At.email=At.password=At.number=At.tel=At.url=function(t,e){return"string"==typeof e.inputValue||"number"==typeof e.inputValue?t.value=e.inputValue:v(e.inputValue)||D('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue),'"')),bt(t,e),t.type=e.input,t},At.file=function(t,e){return bt(t,e),t},At.range=function(t,e){var n=t.querySelector("input"),o=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,o.value=e.inputValue,t},At.select=function(t,e){if(t.innerHTML="",e.inputPlaceholder){var n=document.createElement("option");n.innerHTML=e.inputPlaceholder,n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return t},At.radio=function(t){return t.innerHTML="",t},At.checkbox=function(t,e){var n=Z(P(),"checkbox");return n.value=1,n.id=z.checkbox,n.checked=Boolean(e.inputValue),t.querySelector("span").innerHTML=e.inputPlaceholder,t},At.textarea=function(e,t){if(e.value=t.inputValue,bt(e,t),"MutationObserver"in window){var n=parseInt(window.getComputedStyle(C()).width),o=parseInt(window.getComputedStyle(C()).paddingLeft)+parseInt(window.getComputedStyle(C()).paddingRight);new MutationObserver(function(){var t=e.offsetWidth+o;C().style.width=n<t?"".concat(t,"px"):null}).observe(e,{attributes:!0,attributeFilter:["style"]})}return e};function Bt(t,e){var n=P().querySelector("#".concat(z.content));e.html?(rt(e.html,n),X(n,"block")):e.text?(n.textContent=e.text,X(n,"block")):G(n),function(t,o){var i=P(),e=yt.innerParams.get(t),r=!e||o.input!==e.input;wt.forEach(function(t){var e=z[t],n=lt(i,e);kt(t,o.inputAttributes),n.className=e,r&&G(n)}),o.input&&(r&&Ct(o),xt(o))}(t,e),R(P(),e,"content")}function St(t,i){var r=B();if(!i.progressSteps||0===i.progressSteps.length)return G(r);X(r),r.innerHTML="";var a=parseInt(null===i.currentProgressStep?Qe.getQueueStep():i.currentProgressStep);a>=i.progressSteps.length&&D("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(t,e){var n=function(t){var e=document.createElement("li");return ut(e,z["progress-step"]),e.innerHTML=t,e}(t);if(r.appendChild(n),e===a&&ut(n,z["active-progress-step"]),e!==i.progressSteps.length-1){var o=function(t){var e=document.createElement("li");return ut(e,z["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e}(t);r.appendChild(o)}})}function Et(t,e){var n=O();R(n,e,"header"),St(0,e),function(t,e){var n=yt.innerParams.get(t);if(n&&e.icon===n.icon&&k())R(k(),e,"icon");else if(Ot(),e.icon)if(-1!==Object.keys(W).indexOf(e.icon)){var o=w(".".concat(z.icon,".").concat(W[e.icon]));X(o),Ht(o,e),Mt(),R(o,e,"icon"),ut(o,e.showClass.icon)}else h('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon,'"'))}(t,e),function(t,e){var n=A();if(!e.imageUrl)return G(n);X(n),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),J(n,"width",e.imageWidth),J(n,"height",e.imageHeight),n.className=z.image,R(n,e,"image")}(0,e),function(t,e){var n=x();tt(n,e.title||e.titleText),e.title&&rt(e.title,n),e.titleText&&(n.innerText=e.titleText),R(n,e,"title")}(0,e),function(t,e){var n=j();n.innerHTML=e.closeButtonHtml,R(n,e,"closeButton"),tt(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)}(0,e)}function Tt(t,e){!function(t,e){var n=C();J(n,"width",e.width),J(n,"padding",e.padding),e.background&&(n.style.background=e.background),n.className=z.popup,e.toast?(ut([document.documentElement,document.body],z["toast-shown"]),ut(n,z.toast)):ut(n,z.modal),R(n,e,"popup"),"string"==typeof e.customClass&&ut(n,e.customClass),dt(n)&&ut(n,e.showClass.popup)}(0,e),vt(0,e),Et(t,e),Bt(t,e),at(0,e),function(t,e){var n=M();tt(n,e.footer),e.footer&&rt(e.footer,n),R(n,e,"footer")}(0,e),"function"==typeof e.onRender&&e.onRender(C())}function Lt(){return E()&&E().click()}var Ot=function(){for(var t=n(),e=0;e<t.length;e++)G(t[e])},Mt=function(){for(var t=C(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},Ht=function(t,e){if(t.innerHTML="",e.iconHtml)t.innerHTML=jt(e.iconHtml);else if("success"===e.icon)t.innerHTML='\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ';else if("error"===e.icon)t.innerHTML='\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ';else{t.innerHTML=jt({question:"?",warning:"!",info:"i"}[e.icon])}},jt=function(t){return'<div class="'.concat(z["icon-content"],'">').concat(t,"</div>")};function Vt(){var t=C();t||Qe.fire(),t=C();var e=L(),n=E();X(e),X(n,"inline-block"),ut([t,e],z.loading),n.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function It(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;Ft.restoreFocusTimeout=setTimeout(function(){Ft.previousActiveElement&&Ft.previousActiveElement.focus?(Ft.previousActiveElement.focus(),Ft.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})}function qt(){if(Ft.timeout)return function(){var t=H(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=parseInt(window.getComputedStyle(t).width),o=parseInt(e/n*100);t.style.removeProperty("transition"),t.style.width="".concat(o,"%")}(),Ft.timeout.stop()}function Rt(){if(Ft.timeout){var t=Ft.timeout.start();return nt(t),t}}function Nt(t){return Object.prototype.hasOwnProperty.call(_t,t)}function Dt(t){return Wt[t]}var Ut=[],Ft={},_t={title:"",titleText:"",text:"",html:"",footer:"",icon:null,iconHtml:null,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:"",target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",timer:null,timerProgressBar:!1,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onOpen:null,onRender:null,onClose:null,onAfterClose:null,scrollbarPadding:!0},zt=["title","titleText","text","html","icon","customClass","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","buttonsStyling","reverseButtons","imageUrl","imageWidth","imageHeight","imageAlt","progressSteps","currentProgressStep"],Wt={animation:'showClass" and "hideClass'},Kt=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],Yt=Object.freeze({isValidParameter:Nt,isUpdatableParameter:function(t){return-1!==zt.indexOf(t)},isDeprecatedParameter:Dt,argsToParams:function(o){var i={};return"object"!==r(o[0])||b(o[0])?["title","html","icon"].forEach(function(t,e){var n=o[e];"string"==typeof n||b(n)?i[t]=n:void 0!==n&&h("Unexpected type of ".concat(t,'! Expected "string" or "Element", got ').concat(r(n)))}):c(i,o[0]),i},isVisible:function(){return dt(C())},clickConfirm:Lt,clickCancel:function(){return T()&&T().click()},getContainer:y,getPopup:C,getTitle:x,getContent:P,getHtmlContainer:function(){return e(z["html-container"])},getImage:A,getIcon:k,getIcons:n,getCloseButton:j,getActions:L,getConfirmButton:E,getCancelButton:T,getHeader:O,getFooter:M,getFocusableElements:V,getValidationMessage:S,isLoading:function(){return C().hasAttribute("data-loading")},fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return l(this,e)},mixin:function(n){return function(t){function e(){return o(this,e),d(this,u(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t),a(e,[{key:"_main",value:function(t){return p(u(e.prototype),"_main",this).call(this,c({},n,t))}}]),e}(this)},queue:function(t){var r=this;Ut=t;function a(t,e){Ut=[],document.body.removeAttribute("data-swal2-queue-step"),t(e)}var c=[];return new Promise(function(i){!function e(n,o){n<Ut.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(Ut[n]).then(function(t){void 0!==t.value?(c.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:c})}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(t,e){return e&&e<Ut.length?Ut.splice(e,0,t):Ut.push(t)},deleteQueueStep:function(t){void 0!==Ut[t]&&Ut.splice(t,1)},showLoading:Vt,enableLoading:Vt,getTimerLeft:function(){return Ft.timeout&&Ft.timeout.getTimerLeft()},stopTimer:qt,resumeTimer:Rt,toggleTimer:function(){var t=Ft.timeout;return t&&(t.running?qt():Rt())},increaseTimer:function(t){if(Ft.timeout){var e=Ft.timeout.increase(t);return nt(e,!0),e}},isTimerRunning:function(){return Ft.timeout&&Ft.timeout.isRunning()}});function Zt(){var t=yt.innerParams.get(this);if(t){var e=yt.domCache.get(this);t.showConfirmButton||(G(e.confirmButton),t.showCancelButton||G(e.actions)),st([e.popup,e.actions],z.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.cancelButton.disabled=!1}}function Qt(){null===Y.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(Y.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Y.previousBodyPadding+function(){var t=document.createElement("div");t.className=z["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))}function $t(){return!!window.MSInputMethodContext&&!!document.documentMode}function Jt(){var t=y(),e=C();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var Xt=function(){var e,n=y();n.ontouchstart=function(t){e=t.target===n||!function(t){return!!(t.scrollHeight>t.clientHeight)}(n)&&"INPUT"!==t.target.tagName},n.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},Gt={swalPromiseResolve:new WeakMap};function te(t,e,n,o){n?ie(t,o):(It().then(function(){return ie(t,o)}),Ft.keydownTarget.removeEventListener("keydown",Ft.keydownHandler,{capture:Ft.keydownListenerCapture}),Ft.keydownHandlerAdded=!1),e.parentNode&&e.parentNode.removeChild(e),I()&&(null!==Y.previousBodyPadding&&(document.body.style.paddingRight="".concat(Y.previousBodyPadding,"px"),Y.previousBodyPadding=null),function(){if(q(document.body,z.iosfix)){var t=parseInt(document.body.style.top,10);st(document.body,z.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}}(),"undefined"!=typeof window&&$t()&&window.removeEventListener("resize",Jt),m(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})),st([document.documentElement,document.body],[z.shown,z["height-auto"],z["no-backdrop"],z["toast-shown"],z["toast-column"]])}function ee(t){var e=C();if(e){var n=yt.innerParams.get(this);if(n&&!q(e,n.hideClass.popup)){var o=Gt.swalPromiseResolve.get(this);st(e,n.showClass.popup),ut(e,n.hideClass.popup);var i=y();st(i,n.showClass.backdrop),ut(i,n.hideClass.backdrop),function(t,e,n){var o=y(),i=ht&&et(e),r=n.onClose,a=n.onAfterClose;if(r!==null&&typeof r==="function"){r(e)}if(i){oe(t,e,o,a)}else{te(t,o,K(),a)}}(this,e,n),o(t||{})}}}function ne(t){for(var e in t)t[e]=new WeakMap}var oe=function(t,e,n,o){Ft.swalCloseEventFinishedCallback=te.bind(null,t,n,K(),o),e.addEventListener(ht,function(t){t.target===e&&(Ft.swalCloseEventFinishedCallback(),delete Ft.swalCloseEventFinishedCallback)})},ie=function(t,e){setTimeout(function(){null!==e&&"function"==typeof e&&e(),C()||function(t){delete t.params,delete Ft.keydownHandler,delete Ft.keydownTarget,ne(yt),ne(Gt)}(t)})};function re(t,e,n){var o=yt.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function ae(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var ce=function(){function n(t,e){o(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return a(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),ue={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function se(t){!function(e){e.inputValidator||Object.keys(ue).forEach(function(t){e.input===t&&(e.inputValidator=ue[t])})}(t),t.showLoaderOnConfirm&&!t.preConfirm&&D("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=F(t.animation),function(t){t.target&&("string"!=typeof t.target||document.querySelector(t.target))&&("string"==typeof t.target||t.target.appendChild)||(D('Target parameter is not valid, defaulting to "body"'),t.target="body")}(t),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),ft(t)}function le(t,e){t.removeEventListener(ht,le),e.style.overflowY="auto"}function de(t){var e=y(),n=C();"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n),Ce(e,n,t),ye(e,n),I()&&we(e,t.scrollbarPadding),K()||Ft.previousActiveElement||(Ft.previousActiveElement=document.activeElement),"function"==typeof t.onOpen&&setTimeout(function(){return t.onOpen(n)})}function pe(t,e){"select"===e.input||"radio"===e.input?Ae(t,e):-1!==["text","email","number","tel","textarea"].indexOf(e.input)&&v(e.inputValue)&&Be(t,e)}function fe(t,e){t.disableButtons(),e.input?Te(t,e):Le(t,e,!0)}function me(t,e){t.disableButtons(),e(_.cancel)}function he(t,e){t.closePopup({value:e})}function ge(e,t,n,o){t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),n.toast||(t.keydownHandler=function(t){return He(e,t,n,o)},t.keydownTarget=n.keydownListenerCapture?window:C(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)}function ve(t,e,n){for(var o=V(),i=0;i<o.length;i++)return(e+=n)===o.length?e=0:-1===e&&(e=o.length-1),o[e].focus();C().focus()}function be(t,e,n){e.toast?Re(t,e,n):(De(t),Ue(t),Fe(t,e,n))}var ye=function(t,e){ht&&et(e)?(t.style.overflowY="hidden",e.addEventListener(ht,le.bind(null,e,t))):t.style.overflowY="auto"},we=function(t,e){!function(){if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!q(document.body,z.iosfix)){var t=document.body.scrollTop;document.body.style.top="".concat(-1*t,"px"),ut(document.body,z.iosfix),Xt()}}(),"undefined"!=typeof window&&$t()&&(Jt(),window.addEventListener("resize",Jt)),m(document.body.children).forEach(function(t){t===y()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,y())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))}),e&&Qt(),setTimeout(function(){t.scrollTop=0})},Ce=function(t,e,n){ut(t,n.showClass.backdrop),X(e),ut(e,n.showClass.popup),ut([document.documentElement,document.body],z.shown),n.heightAuto&&n.backdrop&&!n.toast&&ut([document.documentElement,document.body],z["height-auto"])},ke=function(t){return t.checked?1:0},xe=function(t){return t.checked?t.value:null},Pe=function(t){return t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},Ae=function(e,n){function o(t){return Se[n.input](i,Ee(t),n)}var i=P();v(n.inputOptions)?(Vt(),n.inputOptions.then(function(t){e.hideLoading(),o(t)})):"object"===r(n.inputOptions)?o(n.inputOptions):h("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))},Be=function(e,n){var o=e.getInput();G(o),n.inputValue.then(function(t){o.value="number"===n.input?parseFloat(t)||0:"".concat(t),X(o),o.focus(),e.hideLoading()}).catch(function(t){h("Error in inputValue promise: ".concat(t)),o.value="",X(o),o.focus(),e.hideLoading()})},Se={select:function(t,e,i){var r=lt(t,z.select);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("option");o.value=e,o.innerHTML=n,i.inputValue.toString()===e.toString()&&(o.selected=!0),r.appendChild(o)}),r.focus()},radio:function(t,e,a){var c=lt(t,z.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=z.radio,o.value=e,a.inputValue.toString()===e.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=z.label,i.appendChild(o),i.appendChild(r),c.appendChild(i)});var n=c.querySelectorAll("input");n.length&&n[0].focus()}},Ee=function(e){var n=[];return"undefined"!=typeof Map&&e instanceof Map?e.forEach(function(t,e){n.push([e,t])}):Object.keys(e).forEach(function(t){n.push([t,e[t]])}),n},Te=function(e,n){var o=function(t,e){var n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return ke(n);case"radio":return xe(n);case"file":return Pe(n);default:return e.inputAutoTrim?n.value.trim():n.value}}(e,n);n.inputValidator?(e.disableInput(),Promise.resolve().then(function(){return n.inputValidator(o,n.validationMessage)}).then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationMessage(t):Le(e,n,o)})):e.getInput().checkValidity()?Le(e,n,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},Le=function(e,t,n){(t.showLoaderOnConfirm&&Vt(),t.preConfirm)?(e.resetValidationMessage(),Promise.resolve().then(function(){return t.preConfirm(n,t.validationMessage)}).then(function(t){dt(S())||!1===t?e.hideLoading():he(e,void 0===t?n:t)})):he(e,n)},Oe=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"],Me=["Escape","Esc"],He=function(t,e,n,o){n.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?je(t,e,n):"Tab"===e.key?Ve(e,n):-1!==Oe.indexOf(e.key)?Ie():-1!==Me.indexOf(e.key)&&qe(e,n,o)},je=function(t,e,n){if(!e.isComposing&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(n.input))return;Lt(),e.preventDefault()}},Ve=function(t){for(var e=t.target,n=V(),o=-1,i=0;i<n.length;i++)if(e===n[i]){o=i;break}t.shiftKey?ve(0,o,-1):ve(0,o,1),t.stopPropagation(),t.preventDefault()},Ie=function(){var t=E(),e=T();document.activeElement===t&&dt(e)?e.focus():document.activeElement===e&&dt(t)&&t.focus()},qe=function(t,e,n){F(e.allowEscapeKey)&&(t.preventDefault(),n(_.esc))},Re=function(t,e,n){t.popup.onclick=function(){e.showConfirmButton||e.showCancelButton||e.showCloseButton||e.input||n(_.close)}},Ne=!1,De=function(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(Ne=!0)}}},Ue=function(e){e.container.onmousedown=function(){e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,t.target!==e.popup&&!e.popup.contains(t.target)||(Ne=!0)}}},Fe=function(e,n,o){e.container.onclick=function(t){Ne?Ne=!1:t.target===e.container&&F(n.allowOutsideClick)&&o(_.backdrop)}};var _e=function(t,e,n){var o=H();G(o),e.timer&&(t.timeout=new ce(function(){n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(X(o),setTimeout(function(){nt(e.timer)})))},ze=function(t,e){if(!e.toast)return F(e.allowEnterKey)?e.focusCancel&&dt(t.cancelButton)?t.cancelButton.focus():e.focusConfirm&&dt(t.confirmButton)?t.confirmButton.focus():void ve(0,-1,1):We()},We=function(){document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};var Ke,Ye=Object.freeze({hideLoading:Zt,disableLoading:Zt,getInput:function(t){var e=yt.innerParams.get(t||this),n=yt.domCache.get(t||this);return n?Z(n.content,e.input):null},close:ee,closePopup:ee,closeModal:ee,closeToast:ee,enableButtons:function(){re(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){re(this,["confirmButton","cancelButton"],!0)},enableInput:function(){return ae(this.getInput(),!1)},disableInput:function(){return ae(this.getInput(),!0)},showValidationMessage:function(t){var e=yt.domCache.get(this);e.validationMessage.innerHTML=t;var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),X(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",z["validation-message"]),Q(o),ut(o,z.inputerror))},resetValidationMessage:function(){var t=yt.domCache.get(this);t.validationMessage&&G(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),st(e,z.inputerror))},getProgressSteps:function(){return yt.domCache.get(this).progressSteps},_main:function(t){!function(t){for(var e in t)Nt(i=e)||D('Unknown parameter "'.concat(i,'"')),t.toast&&(o=e,-1!==Kt.indexOf(o)&&D('The parameter "'.concat(o,'" is incompatible with toasts'))),Dt(n=e)&&g(n,Dt(n));var n,o,i}(t),C()&&Ft.swalCloseEventFinishedCallback&&(Ft.swalCloseEventFinishedCallback(),delete Ft.swalCloseEventFinishedCallback),Ft.deferDisposalTimer&&(clearTimeout(Ft.deferDisposalTimer),delete Ft.deferDisposalTimer);var e=function(t){var e=c({},_t.showClass,t.showClass),n=c({},_t.hideClass,t.hideClass),o=c({},_t,t);if(o.showClass=e,o.hideClass=n,t.animation===false){o.showClass={popup:"",backdrop:"swal2-backdrop-show swal2-noanimation"};o.hideClass={}}return o}(t);se(e),Object.freeze(e),Ft.timeout&&(Ft.timeout.stop(),delete Ft.timeout),clearTimeout(Ft.restoreFocusTimeout);var n=function(t){var e={popup:C(),container:y(),content:P(),actions:L(),confirmButton:E(),cancelButton:T(),closeButton:j(),validationMessage:S(),progressSteps:B()};return yt.domCache.set(t,e),e}(this);return Tt(this,e),yt.innerParams.set(this,e),function(n,o,i){return new Promise(function(t){var e=function t(e){n.closePopup({dismiss:e})};Gt.swalPromiseResolve.set(n,t);_e(Ft,i,e);o.confirmButton.onclick=function(){return fe(n,i)};o.cancelButton.onclick=function(){return me(n,e)};o.closeButton.onclick=function(){return e(_.close)};be(o,i,e);ge(n,Ft,i,e);if(i.toast&&(i.input||i.footer||i.showCloseButton)){ut(document.body,z["toast-column"])}else{st(document.body,z["toast-column"])}pe(n,i);de(i);ze(o,i);o.container.scrollTop=0})}(this,n,e)},update:function(e){var t=C(),n=yt.innerParams.get(this);if(!t||q(t,n.hideClass.popup))return D("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");var o={};Object.keys(e).forEach(function(t){Qe.isUpdatableParameter(t)?o[t]=e[t]:D('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var i=c({},n,o);Tt(this,i),yt.innerParams.set(this,i),Object.defineProperties(this,{params:{value:c({},this.params,e),writable:!1,enumerable:!0}})}});function Ze(){if("undefined"!=typeof window){"undefined"==typeof Promise&&h("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),Ke=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);yt.promise.set(this,i)}}Ze.prototype.then=function(t){return yt.promise.get(this).then(t)},Ze.prototype.finally=function(t){return yt.promise.get(this).finally(t)},c(Ze.prototype,Ye),c(Ze,Yt),Object.keys(Ye).forEach(function(e){Ze[e]=function(){var t;if(Ke)return(t=Ke)[e].apply(t,arguments)}}),Ze.DismissReason=_,Ze.version="9.4.0";var Qe=Ze;return Qe.default=Qe}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.swal2-popup.swal2-toast .swal2-title{-webkit-box-flex:1;flex-grow:1;-webkit-box-pack:start;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{-webkit-box-pack:start;justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:-webkit-box;display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow-x:hidden;-webkit-transition:background-color .1s;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-center{-webkit-box-align:center;align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-self:stretch;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-column{-webkit-box-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{-webkit-box-align:center;align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:-webkit-box;display:flex;z-index:1;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.2)),to(rgba(0,0,0,.2)));background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{-webkit-box-pack:center;justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar{position:absolute;bottom:0;left:0;width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;-webkit-box-pack:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;-webkit-transition:color .1s ease-out;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;-webkit-box-pack:center;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;-webkit-transition:border-color .3s,box-shadow .3s;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;-webkit-box-pack:center;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;-webkit-box-flex:1;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{-webkit-box-align:center;align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{-webkit-transition:none;transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{-webkit-box-flex:1;flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{-webkit-box-pack:center;justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/* eli-library.js */
function eli(selector){
    const self =
    {
        element: document.querySelectorAll(selector),
        length : document.querySelectorAll(selector).length,
        do: (callback) => self.element.forEach((el) => {
            callback(el);
        }),
        on: (event,callback) => self.element.forEach((el) => {
            el.addEventListener(event, callback);
        }),
        append: (htmlelement) => self.element.forEach((el) => {
            el.insertAdjacentHTML('beforeend', htmlelement);
        }),
        prepend: (htmlelement) => self.element.forEach((el) => {
            el.insertAdjacentHTML('afterbegin', htmlelement);
        }),
        appendafter: (htmlelement) => self.element.forEach((el) => {
            el.insertAdjacentHTML('afterend', htmlelement);
        }),
        appendbefore: (htmlelement) => self.element.forEach((el) => {
            el.insertAdjacentHTML('beforebegin', htmlelement);
        }),
        submit : (callback) => esend(selector,function(data){
          //  console.log(data);
          //  document.querySelector('.result').innerHTML = data;
            var tag = 'Success';

            document.querySelector('.result').innerHTML = "";
            //document.querySelector('.result').innerHTML = "<script> window.location.reload(); </script>";
///////
//
var temp = document.createElement("div");
temp.innerHTML = data.result;
var script = temp.getElementsByTagName("script");
if(script[0]){
scriptcontent = script[0].innerHTML;

if(scriptcontent){
  RunScript('.result',scriptcontent);
}
}
///////


        //    var title = data.match("<script>(.*?)</script>")[1];
            // console.log(title);


            if(callback){
              callback(data);
            }


            if(data.result.indexOf(tag) !== -1){
              //  console.log(data.result);
                            //   Materialize.toast(data, 5000,'green');
                const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })

                Toast.fire({
                icon: 'success',
                title: data.result
                })

            }
            else
            {
              
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })

              Toast.fire({
                icon: 'error',
                title: data.result
              })

            }


          })


    }

    return self;
}


 function eget(url,format,callback)
 {
       var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
      //return this.responseText;
      var format = format || 'html';
      var format = format.toUpperCase();
          switch(format){
            case "JSON":
              data = JSON.parse(this.responseText);
            break;
            default:
              data = this.responseText;
            break;
          }
          callback(data);
     }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
 }

  function epost(url,senddata,callback)
 {

       var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
          data = this.responseText;
          if(callback){
          //  data = JSON.parse(data);
            callback(data);
          }
     }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(senddata);
 }

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


function esend(formid,callback){

      const form = document.querySelector(formid);
      const url = form.action;
      const files = document.querySelectorAll('[type=file]');
      const formData = new FormData(form);
      const progressbar = document.querySelector('.progress');
      console.log(files.length);
      if(files.length > 0){
        files.forEach((input) => {
          if(!input.classList.contains('swal2-file')){
          
          var fileinputname = input.attributes.name.value;
          for (let i = 0; i < input.files.length; i++) {
            let file = input.files[i];

            formData.append(fileinputname+'[]', file);
          }
        }
        })
      }
      else {
        console.log("No Files");
      }



       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             data = this.responseText;
             if(callback){
              if(isJson(data)){
                data = JSON.parse(data);
              }
              // 
             console.log(typeof data);


              if(typeof data == 'object'){

                var retdata = data.data || null;
                var retresult = data.result || null;
              }
              else
              {
                var retdata = null;
                var retresult = data || null;
              }
              var ret = { 'data':retdata,'result':retresult };
               callback(ret);
             }
          }
        };
       //xhttp.onprogress = updateProgress;
       xhttp.open("POST", url, true);

       if(progressbar){
         xhttp.onprogress = function (e) {
          //  console.log(e);
             if (e.lengthComputable) {
              total = progressbar.attributes.max.value;
              var cdiff = total / e.total;
              var progressvalue = e.loaded * cdiff;

                progressbar.attributes.value.value = progressvalue;
                  // console.log(progressvalue);
                console.log(e.loaded+  " / " + e.total);
             }
         }
       }

       xhttp.onloadstart = function (e) {
          console.log("start")
       }
       xhttp.onloadend = function (e) {
          console.log("end")
          // console.clear();
       }

    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //  console.log(formData);
       xhttp.send(formData);
}

function delrow(field,row){
  Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: '',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {

    var did = field.getAttribute('data-id');  
    var tbl = field.getAttribute('data-action');
    var action = "p/delrow/"+field.getAttribute('data-action');
    epost(action,'id='+did,function(data){
        // console.log(data);
        var tag = 'Success';

                  // $('.result').html("");
                    
 if(data.indexOf(tag) !== -1){
               console.log(data);
              // hide the row
                    if(row){
                      document.querySelector(row+did).style.display = 'none';
                    }

                const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })

                Toast.fire({
                icon: 'success',
                title: data
                })

            }
            else
            {
              //    Materialize.toast(data, 5000,'red');
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })

              Toast.fire({
                icon: 'error',
                title: data
              })

            }


    })
  }
  else
  {
   console.log("You cancelled");
  }
});
}


/* Status Update */
function statusupdate(field){
  var dvalue = field.getAttribute('data-value');
  var id = field.getAttribute('data-id');
  var tbl = field.getAttribute('data-action');


  var action =  "p/STATUS_UPDATE/"+tbl;
  var senddata = 'id='+id+'&status='+dvalue;
  //alert(action);
  epost(action,senddata, function(data){

    data = JSON.parse(data);
    if(data.success){
      var tag = 'Successfully';
      // console.log(data);
        if(data.message.indexOf(tag) != -1){
            switch(dvalue){
                case '1':
                  // make it inactive
                  field.innerHTML = 'Inactive';
                  field.classList.add('red');
                  field.classList.remove('green');
                  field.setAttribute('data-value',0);
                break;
                case '0':
                  // make it active
                  field.innerHTML = 'Active';
                  field.classList.add('green');
                  field.classList.remove('red');
                  field.setAttribute('data-value',1);
                break;
            }
        }
    }    

  });
}


  function editData(field,modal,action){
      var id = field.getAttribute('data-id');
      var uid = field.getAttribute('data-uid');
      var csrf = field.getAttribute('csrf');
      var tbl = field.getAttribute('data-t');
      var editform = document.querySelector(modal+' form');
      editform.reset();

      var senddata = "id="+id+"&csrf="+csrf+"&tbl="+tbl+"&uid="+uid;
     // alert(action);
      epost("API/"+action,senddata, function(data){
          if(data != 'null')
          {
              var data = data;
              data.trim();
              data = data.replace(/\u0/,'');
            //  console.log(data);
              data = JSON.parse(data);
            //  console.log(data.id);
              // reset form values from json object
              if(data.id){
               for (const [name, valu] of Object.entries(data)) {
                  //  console.log(name, valu);

                  var el = editform.querySelectorAll('[name="'+name+'"]');
                //  console.log(el[0]);
                      if(el.length > 0){                        
                          type = el[0].type;

                  switch(type){
                      case 'checkbox':
                          el[0].setAttribute('checked', 'checked');
                          break;
                      case 'radio':
                          for (var i = 0; i < el.length; ++i) {
                              if (el[i].value == valu) {
                                el[i].setAttribute('checked','checked');
                              }
                            } 
                          break;
                      default:
                          el[0].value = valu;
                        break;
                  }
                 }                   
                }
              }

              document.querySelector(modal).classList.add('active');
              UpdateFields();

          }
          else
          {
            // Swal.fire({
            //       position: 'top-end',
            //       type: 'success',
            //       title: 'Unable to load data',
            //       showConfirmButton: false,
            //       timer: 1500
            //     })
          }
        });
    }

function getData(action,senddata='',embedtoid,processto){
    document.querySelector(processto).innerHTML = "<i class='mdi mdi-loading mdi-spin'></i>";
    epost(action,senddata,function(data){
        document.querySelector(embedtoid).innerHTML = data;
        document.querySelector(processto).innerHTML = "";
        //dtables.refresh();
    })
}


  function setFormData(action,formid){
      var form = document.querySelector(formid);
      var id = form.getAttribute('data-id');
      var csrf = form.getAttribute('csrf');
      var tbl = form.getAttribute('data-t');
      var editform = form;
      editform.reset();

      var senddata = "id="+id+"&csrf="+csrf+"&tbl="+tbl;
     // alert(action);
      epost("API/"+action,senddata, function(data){
          if(data)
          {
              var data = data;
              data.trim();
              data = data.replace(/\u0/,'');
             console.log(data);
              data = JSON.parse(data);
             console.log(data.id);
              // reset form values from json object
              if(data.id){
               for (const [name, valu] of Object.entries(data)) {
                   console.log(name, valu);

                  var el = editform.querySelectorAll('[name="'+name+'"]');
                 console.log(el[0]);
                      if(el.length > 0){                        
                          type = el[0].type;

                  switch(type){
                      case 'checkbox':
                          el[0].setAttribute('checked', 'checked');
                          break;
                      case 'radio':
                          for (var i = 0; i < el.length; ++i) {
                              if (el[i].value == valu) {
                                el[i].setAttribute('checked','checked');
                              }
                            } 
                          break;
                      default:
                          el[0].value = valu;
                        break;
                  }
                 }                   
                }
              }

            //  document.querySelector(modal).classList.add('active');
              UpdateFields();

          }
          else
          {
            Swal.fire({
                  position: 'top-end',
                  type: 'success',
                  title: 'Unable to load data',
                  showConfirmButton: false,
                  timer: 1500
                })
          }
        });
    }





function updatetrtd(data,container="table.edt > tbody",rowid=""){
    var data = data.data;

    if(rowid){
        // alert("update");
        //update
        var tcontainer = document.querySelector(container+" "+rowid);
        var tmpl = document.querySelector(container+' tr[template]').innerHTML;
        setData(data,tmpl,tcontainer,false);
       
    }
    else
    {
        //add new
        var tcontainer = document.querySelector(container);
        var tmpl = tcontainer.querySelector(" tr[template]").outerHTML;
        setData(data,tmpl,tcontainer,true);
    }
}

function modalSubmit(formid,options,callback){
      
      
    let formdom = document.querySelector(formid);
    var modalid =  modalid || options?.modalid || "#"+formdom.closest('.modal.active').id;
    
    var  rowcolumn = options?.rowcolumn?.name || 'id';
    var  tablebody = options?.tablebody || 'table.edt > tbody';

    if(formdom.querySelector("[name="+rowcolumn+"]") && formdom.querySelector("[name="+rowcolumn+"]").value){
    // do changes in the table
    
    
    // console.log(rowcolumn);

    var fieldid = formdom.querySelector("[name="+rowcolumn+"]").value || null;  
    var rowid = options?.rowid || "#row"+fieldid;
    }

    formvalidate(formid) ? eli(formid).submit(function(data){
        // console.log(data);
        var tag = 'Success';
        if(data.result.indexOf(tag) !== -1){
            // Successfull

            if(document.querySelector("table.edt tr"+rowid)){
                // change
                var trrow = document.querySelector("table.edt tr"+rowid);
                var rowdata = data.data;
                // console.log(rowdata);
                updatetrtd(data,'table.edt > tbody',rowid);
                // todo: get the row head,for loop create tds and replace with rowida
                
            }
            else
            {
                // add a row
                updatetrtd(data);
            }
 
            // just close the modal
            modal(modalid,'close');

        }
        else{
            // not successfull
        }

      if(callback){
        callback();
      }        
    }) : console.log("Form not filled properly");
}


async function fetchData(url,callback) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.text();
    
    if(callback){
      callback(data);
    }
    return data;
    } catch (error) {
    console.error('Fetch error:', error);
  }
}

    //  SSE
    async function eliLive(url,container,embed=true,callback,runonnew){
        var runonnew = runonnew || true;
        var csrf = await fetchData("API/currentcsrf");
        if (typeof EventSource !== "undefined") {
            var source = new EventSource(url+"?csrf="+csrf);
            source.onmessage = function(event) {
              var jsondata = JSON.parse(event.data);
              if(runonnew===true && jsondata.status==='new'){
                if(document.querySelector(container)){
                  if(embed){
                      document.querySelector(container).innerHTML = atob(jsondata.message);
                   }
                   else
                   {
                      document.querySelector(container).insertAdjacentHTML('afterend',atob(jsondata.message));
                   } 
                 }
               }

               if(runonnew === false){
                if(document.querySelector(container)){
                  if(embed){
                      document.querySelector(container).innerHTML = atob(jsondata.message);
                   }
                   else
                   {
                      document.querySelector(container).insertAdjacentHTML('afterend',atob(jsondata.message));
                   } 
                 }
               }
               


               if(callback){
                  callback(atob(jsondata.message),jsondata);
                }
            };


            

          } else {
            console.error("Sorry! your browser is not updated, Kindly use SSE enabled browser.");
          }
    }

    //  SSE Table
    async function eliTableUpdate(tblelement,embed=true,callback,runonnew){
        var tedt = document.querySelector(tblelement);
        var container = tedt.querySelector('tbody') || null;
        var query = tedt.getAttribute('query') || null;
        var url = "v/tbldata/"+query+"/";
        // console.log(template);
        var runonnew = runonnew || true;
        var csrf = await fetchData("API/currentcsrf");
        if (typeof EventSource !== "undefined") {
            var source = new EventSource(url+"?csrf="+csrf);
            source.onmessage = function(event) {
              var jsondata = JSON.parse(event.data);
              if(runonnew===true && jsondata.status==='new'){
                if(container){
                  if(embed){
                      container.innerHTML = atob(jsondata.message);
                   }
                   else
                   {
                      container.insertAdjacentHTML('afterend',atob(jsondata.message));
                   }
                 }
               }

               if(runonnew === false){
                if(container){
                  if(embed){
                      container.innerHTML = atob(jsondata.message);
                   }
                   else
                   {
                      container.insertAdjacentHTML('afterend',atob(jsondata.message));
                   } 
                 }
               }
               


               if(callback){
                  callback(atob(jsondata.message),jsondata);
                }

                elitable(tblelement).updatenumbers(tblelement);

            };
          } else {
            console.error("Sorry! your browser is not updated, Kindly use SSE enabled browser.");
          }
    }


  async function eliLiveX(url,container,embed=true,callback){
        if (typeof EventSource !== "undefined") {
            var source = new EventSource(url);
            source.onmessage = function(event) {
              var jsondata = JSON.parse(event.data);
              if(document.querySelector(container)){
                if(embed){
                    document.querySelector(container).innerHTML = atob(jsondata.message);
                 }
                 else
                 {
                    document.querySelector(container).insertAdjacentHTML('afterend',atob(jsondata.message));
                 } 
               }

               if(callback){
                  callback(atob(jsondata.message),jsondata);
                }
            };

          
          } else {
            console.error("Sorry! your browser is not updated, Kindly use SSE enabled browser.");
          }
    }



function wizardSubmit(formid,nextTabhref,options,callback){

    let formdom = document.querySelector(formid);
    // var modalid =  modalid || options?.modalid || "#"+formdom.closest('.modal.active').id;
    
    var  rowcolumn = options?.rowcolumn?.name || 'id';

    if(formdom.querySelector("[name="+rowcolumn+"]") && formdom.querySelector("[name="+rowcolumn+"]").value){
    // do changes in the table
    
    
    // console.log(rowcolumn);

    var fieldid = formdom.querySelector("[name="+rowcolumn+"]").value || null;  
    var rowid = options?.rowid || "#row"+fieldid;

    }

    formvalidate(formid) ? eli(formid).submit(function(data){
        console.log(data);
        var tag = 'Success';
        if(data.result.indexOf(tag) !== -1){
            // Successfull
            if(nextTabhref){
              tabActive(nextTabhref);
            }
            else
            {
              console.log("");

            }            

        }
        else{
            // not successfull
            console.log("Failed to Success");
        }

      if(callback){
        callback();
      }        
    }) : console.log("Form not filled properly");

}

//  Process Btn
function processSubmit(formid) {
  var currentbtn = event.target;  
      console.log('Analyzing '+formid);
      var form = document.querySelector(formid);
      var required =  document.querySelectorAll(formid+" [required] ");
  //  console.log(required);
      console.log(required.length +  " Required fields found");
  //  console.log(required);
      var checked = 0;
    if(required.length > 0){
      var i = 0;
      required.forEach((field) => {
        var x = field;

        console.log(required[i].validity.valid);
        if(required[i].validity.valid == false || checkvalidity(required[i]) == false ){
          required[i].validationMessage = " Please fill "+field.getAttribute('label');
          //console.log(i+" Please fill "+field.getAttribute('label'));
          if(required[i].offsetParent){
          required[i].offsetParent.style.borderColor = 'red';
          }
          x.addEventListener('change', function(e) {
            console.log(e.target.validity.valid);

            var inp = e.target;
            if(inp.validity.valid == false  || checkvalidity(inp) == false ){
                inp.validationMessage = " Please fill "+field.getAttribute('label');
                inp.offsetParent.style.borderColor = 'red';
              }
              else {
                  inp.offsetParent.style.borderColor = 'green';
              }
          });

        }
        else {
          //console.log("filled "+ field.value);
            if(required[i].offsetParent){
              required[i].offsetParent.style.borderColor = 'green';
            }

              checked = checked+1;
        }
        i++;
      })
      form.reportValidity();
    }

    // console.log(required.length + " : " + checked);
    if(required.length == checked){
      currentbtn.classList.add("processbtn");
      eli(formid).submit(doneBTN);
    }

}

function doneBTN(data=""){
              var tag = "Success";
              var tag2 = "success";

              if(data.result.indexOf(tag) !== -1 || data.result.indexOf(tag2) !== -1){

                const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })

                Toast.fire({
                icon: 'success',
                title: data.result
                })

                var type = "success";


            }
            else
            {
              
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })

              Toast.fire({
                icon: 'error',
                title: data.result
              })


              var type = "fail";
            }

// ===================


  document.querySelector(".processbtn")?.classList.add("donebtn");
  document.querySelector(".processbtn")?.classList.add(type);  
  document.querySelector(".processbtn")?.classList.remove("processbtn");  

  setTimeout(function(){
    document.querySelector(".donebtn")?.classList.remove(type);  
    document.querySelector(".donebtn")?.classList.remove("donebtn");
    document.querySelector(".modal.active")?.classList.remove('active');
  },3000)
}


function doneFormBTN(data="",embed=false){
              var tag = "Success";
              var tag2 = "success";

              if(typeof data == 'string'){
                var datax = data;
              }
              else
              {
                var datax = data.result;
              }

if(embed){
    document.querySelector(embed).innerHTML = datax;
}
else
{
            if(datax.indexOf(tag) !== -1 || datax.indexOf(tag2) !== -1){

              const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
              })

              Toast.fire({
              icon: 'success',
              title: datax
              })

              var type = "success";


              }
              else
              {

              const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
              })

              Toast.fire({
              icon: 'error',
              title: datax
              })


              var type = "fail";
              }
}



// ===================


  document.querySelector(".processbtn")?.classList.add("donebtn");
  document.querySelector(".processbtn")?.classList.add(type);  
  document.querySelector(".processbtn")?.classList.remove("processbtn");  

  setTimeout(function(){
    document.querySelector(".donebtn")?.classList.remove(type);  
    document.querySelector(".donebtn")?.classList.remove("donebtn");
    document.querySelector(".modal.active")?.classList.remove('active');
  },3000)
}


function eliFormBTN(el){
    // Correct the typo in getAttribute
    var action = el.getAttribute("action");
    var datax = el.getAttribute("data") || "";
    var method = el.getAttribute("method") || 'POST';
    var embed = el.getAttribute("embed") || false; // Convert string to boolean

    // Encode datax properly for URL encoding
    datax = encodeURIComponent(datax);
    el.classList.add("processbtn");
    // Assuming epost is a defined function that handles the request
    epost(action, "data=" + datax, function(data){
         doneFormBTN(data,embed);
    });
}

/* eli-forms.js */
function forminit(){

//Some Function
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}



// TAB
document.querySelectorAll('.tabs a').forEach(item => {
  item.style.cursor = "pointer";
  item.addEventListener('click', async function (e) {
    e.preventDefault();

    var tabref = this.getAttribute('href') || this.getAttribute('tabhref');
    
    if(this.parentElement.parentElement.querySelectorAll('li.active').length){
      this.parentElement.parentElement.querySelectorAll('li.active').forEach(itm=>{
        itm.classList.remove('active');
      })
    }


    if(document.querySelector(tabref+".tab-content").parentElement.querySelectorAll('.tab-content.active').length){
      document.querySelector(tabref+".tab-content").parentElement.querySelectorAll('.tab-content.active').forEach(itm=>{
        itm.classList.remove('active');
      })
    }

 // console.log(e);
    if(e.target.parentElement.nodeName === 'LI'){
      e.target.parentElement.classList.add("active");
    }

    var tabcontent = e.target.getAttribute('href') || e.target.getAttribute('tabhref');
    tabcontent = tabcontent.trim();
    // console.log(tabcontent);
    var tabc = document.querySelector(".tab-content"+tabcontent);
    // console.log(tabc);
    if(tabc){
      tabc.classList.add("active");
    }

 });
})


// search result
function searchResultClicked(field){
  console.log(field);
}

// SEARCH FIELD

//     var searchInputID = 0;
//     Array.from(document.querySelectorAll('input[type=search]:not(.default)')).forEach((item) => {
//       searchInputID += 1;
//     //
//       var type = item.getAttribute('type');
//       var geturl = item.getAttribute('get');
//       var label = item.getAttribute('label');
//       var licon = item.getAttribute('licon');
//       var ricon = item.getAttribute('ricon');
//       var rtype = item.getAttribute('resulttype');
//       var callback = item.getAttribute('cb');



//       var inputtag = item.outerHTML;

//       var inp = '';
//       var gr = '';
//       var inputpadding = 'noinputpadding';
//       if(licon){
//           var inp = inp + '<i class="'+ licon +'"></i>';
//           gr = gr + 'a';
//       }
//       if(label){
//           var inp = inp +  '<label>'+ label +'</label>';
//           inputpadding = '';
//       }

//       inp = inp +  item.outerHTML;
//       gr = gr + 1;
//       if(ricon){
//           var inp = inp +  '<i class="'+ ricon +'"></i>';
//           gr = gr + 'a';
//       }

//       var starttag = '<div id="searchInputID'+ searchInputID +'" class="input-field search-field ';
//       var endtag = '</div>';
//       var sresult = '<div class="searchresult '+rtype+'"></div>';

//       var finalinput = starttag + inputpadding + ' g'+gr+' ">'+ inp + sresult + endtag;
//       item.outerHTML = finalinput;

// /////// 2nd Part of Code ///
//           var sid = '#searchInputID'+searchInputID;
//           document.querySelector(sid+' input[type=search]').onkeyup = function(e) {
//             var sresult = e.target.parentElement.querySelector('.searchresult');
// if(e.target.value.length < 3){
//   sresult.innerHTML = "";
//   enableScroll();
// }
// else {

//             switch(e.key){
//               case 'ArrowDown':
// // press down to focus
//           sresult.querySelectorAll('.sri').forEach((sri) => {
//               sri.addEventListener('focus', function(e) {
//                 sri.onkeydown = function(e){
//                   disableScroll();
//                   if(e.key == 'ArrowDown'){
//                     if(sri.nextSibling){
//                       sri.nextSibling.focus();
//                     }
//                     else {
//                         sresult.previousSibling.focus();
//                     }
//                   }
//                   if(e.key == 'ArrowUp'){
//                     if(sri.previousSibling){
//                       sri.previousSibling.focus();
//                     }
//                     else {
//                         sresult.previousSibling.focus();
//                     }
//                   }
//                   if(e.keyCode == 13) {
//                       sresult.innerHTML = "";
//                       if(sresult.previousSibling){
//                         sresult.previousSibling.value = e.target.innerHTML;
//                       }
//                     //  console.log(e.target.innerHTML);
//                       enableScroll();
//                   }
//                   if(e.keyCode == 27) {
//                       sresult.innerHTML = "";
//                       enableScroll();
//                   }
//                 }
//               },true);
//               sresult.querySelector('.sri').focus();
//           });


// //console.log(document.querySelectorAll('.sri'));
// e.preventDefault();
//               break;
//               default:
// //any text written
// var q = e.target;
// var geturl = q.attributes.get.value;
// var dvr = "";
// if(geturl.indexOf('?') > 0 && geturl.charAt(geturl.length-1) != '&') {
//     dvr = '&';
// }
// else {
//       dvr = '?';
// }

// var qval = q.name +'='+ encodeURI(q.value);
// eget(geturl+dvr+qval,'',function(data){
//       var datajson = JSON.parse(data);
//     //  console.log(datajson.length);
//       if(typeof datajson =='object' && datajson.length > 0){
//         sresult.innerHTML = "";
//         //console.log(typeof datajson);
//         datajson.forEach((sr) => {

//           sresult.innerHTML += "<a  href='#' class='sri'>"+sr+"</a>";
//         })
//       }
//       else {
//         //console.log(typeof data);
//         sresult.innerHTML = "<a href='#' class='sri'>"+data+"</a>";
//       }
// })
//               break;
//             }

//           }
// }



//     })




// /*
//     Array.from(document.querySelectorAll('.searchresult')).forEach((item) => {
//         item.addEventListener('click', function (e) {
//           var srval = e.target.value;
//           var srinput = item.closest('div');
//           var inputtag = srinput.getElementsByTagName('input');
//           inputtag[0].value = srval;

//           Array.from(document.querySelectorAll('.searchresult')).forEach((item) => {
//             item.remove();
//           })

//           //.value = srval;
//         });
//     })
// */


// INPUT FIELD
    Array.from(document.querySelectorAll('input:not(.default)')).forEach((item) => {
      if(!item.parentElement.classList.contains("input-field")){
      var type = item.getAttribute('type');

      var label = item.getAttribute('label');
      var licon = item.getAttribute('licon');
      var ricon = item.getAttribute('ricon');

if(type!=='checkbox' && type!='radio' && type!='file' && type!="hidden" && type!='search' )
{
  var inp = '';
  var gr = '';
  var inputpadding = 'noinputpadding';
  if(licon){
      var inp = inp + '<i class="'+ licon +'"></i>';
      gr = gr + 'a';
  }
  if(label){
      var inp = inp +  '<label>'+ label +'</label>';
      inputpadding = '';
  }
  inp = inp +  item.outerHTML;
  gr = gr + 1;
  if(ricon){
      var inp = inp +  '<i class="'+ ricon +'"></i>';
      gr = gr + 'a';
  }
  var starttag = '<p class="input-field ';
  var endtag = '</p>';

  var finalinput = starttag + inputpadding + ' g'+gr+' ">'+ inp + endtag;
  item.outerHTML = finalinput;
}
}
    })

// RADIO FIELD
    Array.from(document.querySelectorAll('input[type=radio]:not(.default)')).forEach((item) => {
      if(!item.parentElement.parentElement.classList.contains("input-radio")){
      var label = item.getAttribute('label');
//      var ricon = item.getAttribute('ricon');

      var inp = '';
      var gr = '';
/*
<label><input type="radio" name="r" value="sr" label="Radio" class="default" > <span>Radio</span> </label>
*/


      inp = inp +  item.outerHTML;
      if(label){
          gr = gr + 'a';
          var inp = '<label class="radio-field"> '+ inp +' <span>'+ label +'</span></label>';
      }
      gr = gr + 1;



      var starttag = '<p class="input-radio';
      var endtag = '</p>';

      //var finalinput = starttag + 'g'+gr+' ">'+ inp + endtag;
      var finalinput = inp;

      item.outerHTML = finalinput;
    }
    })

// Checkbox FIELD
    Array.from(document.querySelectorAll('input[type=checkbox]:not(.default)')).forEach((item) => {
      if(!item.parentElement.parentElement.classList.contains("input-checkbox")){
/*
<p class="input-checkbox">
  <label> <input type="checkbox" label="Checkbox" class="default" name="s" value="">  <span>Checkbox</span> </label>
</p>
*/
      var label = item.getAttribute('label');

      var inp = '';
      var gr = '';

      inp = inp +  item.outerHTML;
      if(label){
          gr = gr + 'a';
          var inp = '<label>'+inp+'<span>'+label+'</span></label>';
      }
      gr = gr + 1;


      var starttag = '<p class="input-checkbox"> ';
      var endtag = '</p>';


      var finalinput = starttag+inp+endtag;
      //var finalinput = inp;
      item.outerHTML = finalinput;
    }
    })


// INPUT FILE
Array.from(document.querySelectorAll('input[type=file]:not(.default)')).forEach((item) => {
if(!item.parentElement.parentElement.classList.contains("input-file")){
/*
<p class="input-file">
    <label> <span class="mdi mdi-folder-upload">File Upload</span>
    <input type="file" name="" label="File Upload" value="" ricon="mdi mdi-upload">
    </label>
</p>
*/
  var fileinput = item;
  var label = item.getAttribute('label');
  var licon = item.getAttribute('licon');
  var ricon = item.getAttribute('ricon');
  var inp = '';
  var rinp = "";
  var gr = 'g';
  if(licon){
      var linp = "<span class='"+licon+"' >";
      gr = gr + 'a';
  }
  else {
    licon = "mdi mdi-upload";
    var  linp = "<span class='"+licon+"' >";
    gr = gr + 'a';
  }

  gr = gr + '1';

  if(ricon){
      var rinp = '<i class="'+ ricon +'"></i>';
      gr = gr + 'a';
  }



  if(label){
      var lbinp = '<label class="'+ gr +'">'+ linp + label + "</span> <span class='filename'></span>";
  }
  else {
      var lbinp = '<label class="'+ gr +'">'+ linp + " File Upload " + "</span> <span class='filename'></span>";
  }

  inp = lbinp + item.outerHTML;

  einp = "<p class='input-file' >" +  inp + rinp + "</label>" +  "</p>";
  item.outerHTML = einp;
  //console.log(fileinput);
}
})

// FIle Input onchange
Array.from(document.querySelectorAll('input[type=file]:not(.default)')).forEach((item) => {
    var label = item.previousSibling;
    var labelVal = item.getAttribute('label');
    item.addEventListener('change', function(e) {
                var fileName = '';
                console.log(this.files.length);
          		if( this.files && this.files.length > 1 ){
          			fileName = this.files.length + " ";
                fileName2 = labelVal.toLowerCase();
                fileName += fileName2.replace('upload','uploaded');
              }
          		else
              {
          			if(e.target.files[0].name)
                  fileName = e.target.files[0].name;
                else{
                  fileName = e.target.value.split('\/').pop();
                }
              }

          		if( fileName )
          			label.innerHTML = fileName;
          		else
          			label.innerHTML = labelVal;

          	})

})




// TEXTAREA

    Array.from(document.querySelectorAll('textarea:not(.default)')).forEach((item) => {
    if(!item.parentElement.classList.contains("input-field")){
//console.log(item);

      var label = item.getAttribute('label');
      if(label){
          var inp = '<p class="input-field"> <label>'+ label +'</label> '+ item.outerHTML +'</p>';
      }
      else {
        var inp = '<p class="input-field">'+ item.outerHTML +'</p>';
      }

      item.outerHTML = inp;
    }
    })




// SELECT


    Array.from(document.querySelectorAll('select:not(.default)')).forEach((item) => {
      if(!item.parentElement.classList.contains("input-field")){
      var label = item.getAttribute('label');
      if(label){
          var inp = '<p class="input-field"> <label>'+ label +'</label> '+ item.outerHTML +'</p>';
      }
      else {
        var inp = '<p class="input-field">'+ item.outerHTML +'</p>';
      }

      item.outerHTML = inp;
    }
    })




// MODAL

window.modal = function(modalid,action){
  if(modalid){
    switch(action){
      case "open":
        document.querySelector(modalid).classList.add('active');
          var modcont = document.querySelector(modalid).children[0];
          var modheight = modcont.offsetHeight;
          var winheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          console.log(modheight + ' - ' + winheight);
          if(modheight >= winheight){
              document.querySelector(modalid).classList.add('large');
          }
          closemodalon();
      break;
      case "close":
        document.querySelector(modalid).classList.remove('active');
      break;
      default:
        document.querySelector(modalid).classList.add('active');
      break;
    }
  }
}

window.closeAllModal = function(){
    document.querySelector('.modal.active').classList.remove('active');
}

window.closemodalon = function(){
  document.querySelector('.modal.active').addEventListener('click', function (e) {
    var mod = e.target.classList.contains('modal');
    if(mod == true){
      modal('#'+e.target.id,'close');
    }
  });

  document.addEventListener('keydown', function (e) {
  //  console.log(e);
    if(e.key === "Escape") {
            var mod = document.querySelector('.modal.active');
            if(mod){
              modal('#'+mod.id,'close');
            }
        }

  });
}

// Open Modal
Array.from(document.querySelectorAll('.modal-target')).forEach((item) => {
item.addEventListener('click', function (e) {
e.preventDefault();
  var href = item.getAttribute('href');
  var dtarget = item.getAttribute('modal-target');

  if(href){
    modal(href,'open');
    UpdateFields();
  }
  else if (dtarget) {
    modal(dtarget,'open');
    UpdateFields();
  }
  else {
    console.log('Unable to Specify Modal Target or href');
  }

  });
})



// Close Modal
Array.from(document.querySelectorAll('.modal .modalclosebtn')).forEach((item) => {
  item.addEventListener('click', function (e) {
    if(e.target.parentNode.parentNode.id){
      var modal = e.target.parentNode.parentNode.id;
      document.querySelector('#'+modal).classList.remove('active');
    }
  });
})



// Editable
Array.from(document.querySelectorAll('.editable')).forEach((item) => {
  item.setAttribute('readonly','true');


      item.addEventListener('keydown', function (e) {
          if(e.key === 'Enter'){
            item.setAttribute('readonly','true');
          }
      });

  item.addEventListener('dblclick', function (e) {
      if(e.target.hasAttribute('readonly')){
          e.target.removeAttribute('readonly');
      }
      else {
        e.target.setAttribute('readonly','true');
      }

  });
})



window.UpdateFields = function(){
// Input
Array.from(document.querySelectorAll('input:not(.default)')).forEach((item) => {

  if(item.value.length  > 0 || item.type == 'date'  || item.type == 'datetime'  || item.type == 'datetime-local' || item.type == 'time' ){
    if(item.previousElementSibling){
      item.previousElementSibling.classList.add('active');
    }
  }
  else if(item.previousElementSibling) {
    item.previousElementSibling.classList.remove('active');
  }

//console.log(item.type);

    item.addEventListener('keyup', function (e) {

      if(e.target.value.length > 0 && e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL'){
        e.target.previousElementSibling.classList.add('active');
      }
      if(e.target.value.length < 1  &&  e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL') {
        e.target.previousElementSibling.classList.remove('active');
      }

    });

})

// TEXTAREA

Array.from(document.querySelectorAll('textarea:not(.default)')).forEach((item) => {
// console.log(item.value);
  if(item.value.length  > 0){
    item.previousElementSibling.classList.add('active');
  }
  else if(item.previousElementSibling) {
    item.previousElementSibling.classList.remove('active');
  }


    item.addEventListener('keyup', function (e) {

      if(e.target.value.length > 0 && e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL'){
        e.target.previousElementSibling.classList.add('active');
      }
      if(e.target.value.length < 1  &&  e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL') {
        e.target.previousElementSibling.classList.remove('active');
      }

    });

})

// Select

Array.from(document.querySelectorAll('select:not(.default)')).forEach((item) => {
  //console.log("Great");
  //console.log(item);
  if(item.previousElementSibling){
    item.previousElementSibling.classList.add('active');
  }
  else if(item.previousElementSibling) {
    item.previousElementSibling.classList.remove('active');
  }

    item.addEventListener('change', function (e) {

      if(e.target.value.length > 0 && e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL'){
        e.target.previousElementSibling.classList.add('active');
      }
      if(e.target.value.length < 1  &&  e.target.previousElementSibling !== null && e.target.previousElementSibling.nodeName == 'LABEL') {
        e.target.previousElementSibling.classList.remove('active');
      }

    });

})
}

document.querySelectorAll('[charcount]').forEach((item) => {
  var apto = item.getAttribute('charcount');
  item.addEventListener('keyup', function(e) {
    var chrcount = item.value.length || item.innerHTML.length ;
    document.querySelector(apto).innerHTML = chrcount;
    document.querySelector(apto).classList.add('inbadge');
  });
})



UpdateFields();

//////////////
}

function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var systemZoom = width / window.screen.availWidth;
var left = (width - w) / 2 / systemZoom + dualScreenLeft
var top = (height - h) / 2 / systemZoom + dualScreenTop
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) newWindow.focus();
}

function searchresult(field){
  var searchvalue = field.value;
  if(searchvalue.length > 0){
  var restapi = 'https://restcountries.eu/rest/v2/name/'+searchvalue;
  var ul = '<ul class="searchresult"></ul>';
  var cdiv = field.closest('div');
  if(Array.from(document.querySelectorAll('.searchresult')).length < 1){
    cdiv.innerHTML += ul;
  }

  //console.log(searchvalue);
// console.log(restapi);
  httpGetAsync(restapi,httpsuccess);
  //console.log(ret);
}
else {
  Array.from(document.querySelectorAll('.searchresult')).forEach((item) => {
    item.remove();
  })
}

}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function httpsuccess(ev){
  var ev = JSON.parse(ev);
  if(ev.length  > 0){
    var li = "";
    ev.forEach((item) => {
      var countrycallingcode = item.callingCodes[0];
      var countryflag = item.flag;
        li = '<li value="'+ countrycallingcode +'"> <img src="'+ countryflag +'" height="10px" /> <strong> '+ countrycallingcode +' </strong></li>' + li;
        document.querySelector('.searchresult').innerHTML = li;
    })
  }
  else {
    console.log('No Data');
  }
}

const tabActive = function(href){
    var hrefid = href.substring(1);
    var tabbtn = document.querySelector("[id="+hrefid+"]");
    if(tabbtn){
      // hide the active tab
      tabbtn.parentElement.querySelector(".tab-content.active").classList.remove("active");
      // show the tab
      var tablinks = document.querySelectorAll("[href='"+href+"']");
      var tablinksactive = document.querySelector(".tabs li.active");
      console.log(tablinksactive);
      if(tablinksactive?.querySelector('a').getAttribute('href') != href ){
          tablinksactive?.classList.remove('active');
      }
      // console.log(tablinks);
      tablinks?.forEach(tl => {
        if(tl.parentElement.nodeName == 'LI'){
          tl.parentElement.classList.add('active');
        }
        else
        {
          tl.classList.add('active');
        }
        
      })
      tabbtn.classList.add("active");
    }
    
}



window.addEventListener('load', forminit(), false );


/* eli-grid.js */
let headers = document.querySelectorAll('header');
//console.log(headers.length);
if(headers.length > 0){
headers.forEach((header) => {
let menubtn = header;
let nav = header.querySelector('nav:not(.social)');
menubtn.addEventListener('click', function(e) {
  if(e.target.nodeName == 'HEADER')
  {
    nav.classList.add('active');
  }

});

if(nav){

nav.addEventListener('click', function(e) {
  //console.log(e.target.nodeName);
  if(e.target.nodeName == 'NAV')
  {
    nav.classList.remove('active');
  }
});
}
});
}

/* eli-helpers.js */

// Collapse 


// Toggle element visibility
// Show an element
var show = async function (elem,timing) {
if(typeof elem === 'string'){
	elem = document.querySelector(elem);
}
if(typeof elem === 'object'){
var timing = timing || 350;
  // Get the natural height of the element
  var getHeight = function () {
    elem.style.display = 'block'; // Make it visible
    var height = elem.scrollHeight + 'px'; // Get it's height
    elem.style.display = ''; //  Hide it again
    return height;
  };

  var height = getHeight(); // Get the natural height
  elem.classList.add('is-visible'); // Make the element visible
  elem.style.height = height; // Update the max-height

  // Once the transition is complete, remove the inline max-height so the content can scale responsively
  window.setTimeout(function () {
    elem.style.height = '';
    elem.style.overflow = 'auto';
  }, timing);
}
};

// Hide an element
var hide = async function (elem,timing) {
// console.log(typeof elem);
if(typeof elem === 'string'){
	elem = document.querySelector(elem);
}
if(typeof elem === 'object'){
// console.log(typeof elem);	
var timing = timing || 350;

  // Give the element a height to change from
  elem.style.height = elem.scrollHeight + 'px';
  elem.style.overflow = 'hidden';


  // Set the height back to 0
  window.setTimeout(function () {
    elem.style.height = '0';
  }, 1);

  // When the transition is complete, hide it
  window.setTimeout(function () {
    elem.classList.remove('is-visible');
  }, timing);
}
};

// Toggle element visibility
var toggle = async function (elem, timing) {
	if(typeof elem === 'string'){
	elem = document.querySelector(elem);
}
if(typeof elem === 'object'){
	var timing = timing || 350;

  // If the element is visible, hide it
  if (elem.classList.contains('is-visible')) {
    await hide(elem,timing);
    return;
  }

  // Otherwise, show it
   await show(elem,timing);
}
};


// var ctoggle = async function (elem) {

//   elem2 = document.querySelector(elem);
//   elem3 = elem2.parentElement;
//   // If the element is visible, hide it
//   if (elem3.style.display == 'grid') {
//     elem3.style.display = 'none';
//     elem2.style.display = 'none';
//     return;
//   }
//   else
//   {
//     elem3.style.display = 'grid';
//     elem2.style.display = 'grid';
//   }

// };

// var btoggle = async function (field,elem) {

//   elem2 = document.querySelector(elem);
//   elem3 = elem2.parentElement;
//   // If the element is visible, hide it
//   if (field.value == 'no') {
//     elem3.style.display = 'none';
//     elem2.style.display = 'none';
//     return;
//   }
//   else
//   {
//     elem3.style.display = 'grid';
//     elem2.style.display = 'grid';
//   }

// };

// sidebar
// Show an element
var sbshow = async function (elem,timing) {
if(typeof elem === 'string'){
  elem = document.querySelector(elem);
}
if(typeof elem === 'object'){
var timing = timing || 350;
  // Get the natural height of the element
  var getWidth = function () {
    // elem.style.display = 'block'; // Make it visible
    var width = elem.clientWidth + 'px'; // Get it's width
    elem.style.display = ''; //  Hide it again
    return width;
  };

  var width = getWidth(); // Get the natural width
  elem.classList.add('is-visible'); // Make the element visible
  elem.style.width = width; // Update the max-height

  // Once the transition is complete, remove the inline max-height so the content can scale responsively
  window.setTimeout(function () {
    elem.style.width = '';
    elem.style.overflow = 'auto';
  }, timing);
}
// console.log("Show");
// console.log(elem);
};

// Hide an element
var sbhide = async function (elem,timing) {
// console.log(typeof elem);
if(typeof elem === 'string'){
  elem = document.querySelector(elem);
}
if(typeof elem === 'object'){
// console.log(typeof elem);  
var timing = timing || 350;

  // Give the element a width to change from
  elem.style.width = elem.clientWidth + 'px';
  elem.style.overflow = 'hidden';  


  // Set the width back to 0
  window.setTimeout(function () {
    elem.style.width = '0';
    elem.style.overflow = 'hidden';      
    elem.style.display = 'none';  
  }, 100);

  // When the transition is complete, hide it
  window.setTimeout(function () {
    elem.classList.remove('is-visible');
  }, timing);
}

// console.log("Hide");
// console.log(elem);
};

// Toggle element visibility
var sbtoggle = async function (elem, timing) {
  if(typeof elem === 'string'){
  elem = document.querySelector(elem);
}
if(typeof elem === 'object'){
  var timing = timing || 350;

  // If the element is visible, hide it
  if (elem.classList.contains('is-visible')) {
    sbhide(elem,timing);
    return;
  }

  // Otherwise, show it
   sbshow(elem,timing);
}

};


// Dropdown btn
var drpdwn = document.querySelectorAll(".btn-dropdown");
if(drpdwn.length > 0){
	drpdwn.forEach(btndp => {
		// console.log(btndp);
		var drp = btndp.querySelector(".dropdown");
		btndp.addEventListener('click',function(){
			//console.log(drp);
			toggle(drp,10);
			drp.addEventListener("mouseleave",function(){
				hide(drp,10);
			})
		})
	})
}



// Collapsible
var collapsible = document.querySelectorAll('.collapse-header');
if(collapsible.length > 0){
  collapsible.forEach(collapse => {
      collapse.addEventListener('click', async function(e){
          // console.log(collapse);
          ctarget = collapse.getAttribute('collapse-target');
          // alert(ctarget);
          if(ctarget){
            var cbody = document.querySelector(ctarget);
            if(cbody){
                await toggle(cbody);

                setTimeout(function(){
                    if(cbody.classList.contains('is-visible')){
                      // open                  
                      if(!collapse.classList.contains('active')){
                        collapse.classList.add('active');
                      }
                    }
                    else
                    {
                      //close
                      collapse.classList.remove('active');
                    }
                },350);
            }
          }
      })
  })
}

// Collapse End

// Copy to Clipboard
function copyText(element,callback) {
  if(typeof(element) == 'string'){
    var element = document.querySelector(element);
  }

  var range, selection, worked;

  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();        
    range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  
  try {
    document.execCommand('copy');
    console.log('text copied');
    callback();
  }
  catch (err) {
    console.error('unable to copy text');
  }
}

/* eli-validation.js */
/// Form Validation

function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if((inputtxt.value.match(phoneno)))
        {
          return true;
        }
      else
        {
          return false;
        }
}

function checkvalidity(inp){
  switch(inp.type){
    case "tel":
      var vvalid = phonenumber(inp);
    break;
    default:
      var vvalid = true;
    break;
  }

  return vvalid;
}


//Required eli_scripts
function validSubmit(formid){
      console.log('Analyzing '+formid);
      var form = document.querySelector(formid);
    var required =  document.querySelectorAll(formid+" [required] ");
  //  console.log(required);
    console.log(required.length +  " Required fields found");
  //  console.log(required);
    var checked = 0;
    if(required.length > 0){
      var i = 0;
      required.forEach((field) => {
        var x = field;

        console.log(required[i].validity.valid);
        if(required[i].validity.valid == false || checkvalidity(required[i]) == false ){
          required[i].validationMessage = " Please fill "+field.getAttribute('label');
          //console.log(i+" Please fill "+field.getAttribute('label'));
          if(required[i].offsetParent){
          required[i].offsetParent.style.borderColor = 'red';
          }
          x.addEventListener('change', function(e) {
            console.log(e.target.validity.valid);

            var inp = e.target;
            if(inp.validity.valid == false  || checkvalidity(inp) == false ){
                inp.validationMessage = " Please fill "+field.getAttribute('label');
                inp.offsetParent.style.borderColor = 'red';
              }
              else {
                  inp.offsetParent.style.borderColor = 'green';
              }
          });

        }
        else {
          //console.log("filled "+ field.value);
            if(required[i].offsetParent){
              required[i].offsetParent.style.borderColor = 'green';
            }

              checked = checked+1;
        }
        i++;
      })
      form.reportValidity();
    }

    console.log(required.length + " : " + checked);
    if(required.length == checked){
      eli(formid).submit();
    }

}
/* Validator */

// 
// only check validation
function formvalidate(formid){
  console.log('Analyzing '+formid);
  var form = document.querySelector(formid);
var required =  document.querySelectorAll(formid+" [required] ");
//  console.log(required);
console.log(required.length +  " Required fields found");
//  console.log(required);
var checked = 0;
if(required.length > 0){
  var i = 0;
  required.forEach((field) => {
    var x = field;

    // console.log(required[i].validity.valid);
    if(required[i].validity.valid == false || checkvalidity(required[i]) == false ){
      required[i].validationMessage = " Please fill "+field.getAttribute('label');
      //console.log(i+" Please fill "+field.getAttribute('label'));


          if(required[i].hasAttribute("multiple")){
          let selcont = required[i].parentElement;
          let selcont2 = selcont.querySelector('.eli-searchable-select-tag-options');
          selcont2.style.borderBottom = '2px solid green';
          }
          else
          {
            let selcont = required[i].parentElement;
           let selcont2 = selcont; 
           selcont2.style.border = '2px solid green';
          }

      if(required[i].offsetParent){
      required[i].offsetParent.style.borderColor = 'red';
      }
      x.addEventListener('change', function(e) {
        console.log(e.target);

        var inp = e.target;
        if(inp.validity.valid == false  || checkvalidity(inp) == false ){
          console.log('122'+inp);
            inp.validationMessage = " Please fill "+field.getAttribute('label');
            inp.offsetParent.style.borderColor = 'red';
          }
          else {
              inp.offsetParent.style.borderColor = 'green';
          }


          //  select
    if(inp.classList.contains("eli-searchable-select")){
        if(inp.validity.valid == false  || checkvalidity(inp) == false ){
          let selcont = inp.parentElement;
          

          if(required[i].hasAttribute("multiple")){
          let selcont2 = selcont.querySelector('.eli-searchable-select-tag-options');
          selcont2.style.borderBottom = '2px solid red';
          }
          else
          {
           let selcont2 = selcont; 
           selcont2.style.border = '2px solid red';
          }

        }
        else
        {
          let selcont = inp.parentElement;

          if(required[i].hasAttribute("multiple")){
          let selcont2 = selcont.querySelector('.eli-searchable-select-tag-options');
          selcont2.style.borderBottom = '2px solid green';
          }
          else
          {
           let selcont2 = selcont; 
           selcont2.style.border = '2px solid green';
          }
        }
        
        // console.log(selcont);
        // selcont.querySelector(".mdi").classList.add("red-text");
      }


      });

    }
    else {
      //console.log("filled "+ field.value);

                //  select
    if(required[i].classList.contains("eli-searchable-select")){
          let selcont = required[i].parentElement;

          if(required[i].hasAttribute("multiple")){
          let selcont2 = selcont.querySelector('.eli-searchable-select-tag-options');
          selcont2.style.borderBottom = '2px solid green';
          }
          else
          {
           let selcont2 = selcont; 
           selcont2.style.border = '2px solid green';
          }

          
      }


        if(required[i].offsetParent){
          required[i].offsetParent.style.borderColor = 'green';
        }

          checked = checked+1;
    }
    i++;
  })
  form.reportValidity();
}

console.log(required.length + " : " + checked);
  if(required.length == checked){
    return true;
  }
  else
  {
    return false;
  }
}
//

/* No Validation */
function eliSubmit(formid){
  eli(formid).submit();
}


/* eli-components.js */
/* Lazy Load */
/* https://github.com/tuupola/lazyload */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=s(r,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}"function"==typeof define&&define.amd&&(t=window);const r={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0},s=function(){let t={},e=!1,r=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);for(;r<o;r++)!function(r){for(let o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e&&"[object Object]"===Object.prototype.toString.call(r[o])?t[o]=s(!0,t[o],r[o]):t[o]=r[o])}(arguments[r]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,r={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(t){Array.prototype.forEach.call(t,function(t){if(t.isIntersecting){e.observer.unobserve(t.target);let r=t.target.getAttribute(e.settings.src),s=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(r&&(t.target.src=r),s&&(t.target.srcset=s)):t.target.style.backgroundImage="url("+r+")"}})},r),Array.prototype.forEach.call(this.images,function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;Array.prototype.forEach.call(this.images,function(e){let r=e.getAttribute(t.settings.src),s=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(r&&(e.src=r),s&&(e.srcset=s)):e.style.backgroundImage="url('"+r+"')"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,r){return new e(t,r)},t.jQuery){const r=t.jQuery;r.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(r.makeArray(this),t),this}}return e});
let lazyimages = document.querySelectorAll('img.lazyimg');
if(lazyimages.length > 0){
	new LazyLoad(lazyimages);	
}

// Alink
var alinks = document.querySelectorAll("alink");

alinks.forEach((alink) => {
  alink.addEventListener("click", function (e) {
    let href = this.getAttribute("href");
    let prompt = this.getAttribute("prompt");
    let aembed = this.getAttribute("embed");

    if (href) {
      // fetch href
      eget(href, "html", function (data) {
        if (prompt) {
          // prompt
          Swal.fire(data);
          // Swal.fire({
          //   title: data,
          //   timer: 5000,
          //   timerProgressBar: true
          // });
        }
        if (aembed) {
          // embed data
          let emcontainer = document.querySelector(aembed);
          // console.log(emcontainer);
          if (emcontainer) {
            emcontainer.innerHTML = data;
          }
        }
      });
    } else {
      // href is empty
    }
  });
});
/////////
//  Eli BGSRC
if(document.querySelectorAll('[bgsrc]').length > 0){
  document.querySelectorAll('[bgsrc]').forEach(bgx=>{
      var bgsrc = bgx.getAttribute('bgsrc');
      bgx.style.backgroundImage = "url("+bgsrc+")";
  })
}

/* eli-datatables.js */
function isValidURL(string) {
    try {
        new URL(string, window.location.href); // Use the current page's URL as the base
        return true;
    } catch (_) {
        return false;
    }
}

function elitable(selector){ 
    var i = 0;
    const self =
    {
        element: document.querySelectorAll(selector),
        length : document.querySelectorAll(selector).length,
        init: (htmlelement) => self.element.forEach((el) => {
            self.updateDataLink(el);
             self.initialize(el);
             self.multiselect(el);
             self.search(el);
             self.sort(el);
             self.pagein(el);
             self.scrollin(el);
             self.updateData(el);        
        }),
        refresh:(htmlelement) => self.element.forEach((el) => {
            self.initialize(el);
            self.multiselect(el);
            self.search(el);
            self.sort(el);
            self.pagein(el);
            self.scrollin(el);
            // self.updateData(el);
        }),
        initialize: (htmlelement) => self.element.forEach((el) => {

            if(el.hasAttribute('query')){

                    let eqvla = window.btoa(unescape(encodeURIComponent(el.getAttribute('query'))));
                   el.setAttribute('query',eqvla);
            }

            if(el.closest(".elitable_body")){
                var inits = false;
            }
            else
            {
                var inits = true;
            }

            // console.log(el);
            // console.log(inits);
            // console.log("----");

            // console.log(i);
            var tablehtml_header = '<div class="elitable_container"> <div class="elitable_header"> <div class="g laaa maaa sa1 xs1 s1 valign-c ggap elitable_header_child"></div><input type="search" placeholder="Search" name="q" class="elitable_searchbox" > </div><div class="elitable_body">';
            var tablehtml_footer = '</div><div class="elitable_footer"> <div class="g l1a m1a s1 xs1 ggap-1"><div></div><div class="g ga1a align-fc ggap-2"> <div class="g g1 align-fc"><svg  version="1.1" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class="elitable_progress progress-ring" width="30" height="30"><circle class="progress-ring__circle" fill="transparent" r="10" cx="15" cy="15"/></svg></div><div class="elitable_controls"> <i class="elitable_left mdi mdi-chevron-left"></i> <i class="elitable_right mdi mdi-chevron-right"></i> </div><div><span class="elitable_totalshowing">0</span> of <span class="elitable_totalrows">0</span> entries </div></div></div></div></div>';
            
            if(inits){
            el.insertAdjacentHTML('beforebegin', tablehtml_header+tablehtml_footer);
            var eb = document.querySelectorAll(".elitable_body")[i];
            // console.log(eb);
            // console.log(i);
            eb.appendChild(el);
            }
            i++;
        }),
        search: (htmlelement) => self.element.forEach((el) => { 
            var edt_container = el.parentElement.parentElement;
          // Declare variables
          var input, filter, table, tr, td, i, txtValue;        
            
          var settotalrow = function(){
              var i = 0;
              el.querySelectorAll("tbody > tr:not([template])").forEach(atr => {
                //   console.log(atr.style.display);
                  if(atr.style.display!=='none'){
                    i++;   
                  }
              });  
              var elifooter_totalshowing = edt_container.querySelector('.elitable_totalshowing');
              elifooter_totalshowing.innerText = i;
          }

            var inputfield = edt_container.querySelector(".elitable_searchbox");
            inputfield.addEventListener("keyup",function(e){

                            // filter

           filter = inputfield.value.toUpperCase();
           input = inputfield;
           table = el;
           tr = el.querySelectorAll("tbody > tr:not([template])");
      
          // Loop through all table rows, and hide those who don't match the search query
          for (i = 0; i < tr.length; i++) {
              var tds = tr[i].querySelectorAll("td");
              var show = false;
            tds.forEach(td => {
                if (td) {                    
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        show = true;
                    }
                }
            })
            if(show){
                tr[i].style.display = "";
            }
            else
            {
                tr[i].style.display = "none";
            }
          
          }          
            setTimeout(settotalrow,100);
            });

        }),
        sort: (htmlelement) => self.element.forEach((el) => {
            const ths = el.querySelectorAll("thead td, thead th");

            const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

            const cancelSortingOrder = () => {
                ths.forEach(th => {
                    th.classList.remove('asc');
                    th.classList.remove('desc');
                });
            };

            const comparer = (idx, asc) => {
                return (a, b) => {
                    const v1 = getCellValue(asc ? a : b, idx);
                    const v2 = getCellValue(asc ? b : a, idx);
                    return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
                };
            };

            if (ths.length > 0) {
                ths.forEach((th, thIndex) => {
                    th.addEventListener("click", function() {
                        const tbody = el.querySelector("tbody");
                        const isDescending = this.classList.contains('desc');
                        const isAscending = this.classList.contains('asc');

                        console.log(th," - ",isDescending);

                        // Cancel the current sorting order
                        cancelSortingOrder();

                        if (isDescending) {
                            // If the header has the 'desc' class, sort in ascending order
                            Array.from(tbody.querySelectorAll('tr'))
                                .sort(comparer(thIndex, true))
                                .forEach(tr => tbody.appendChild(tr));
                            this.classList.remove('desc');
                            this.classList.add('asc');
                        } else if (isAscending) {
                            // If the header has the 'asc' class, sort in descending order
                            Array.from(tbody.querySelectorAll('tr'))
                                .sort(comparer(thIndex, false))
                                .forEach(tr => tbody.appendChild(tr));
                            this.classList.remove('asc');
                            this.classList.add('desc');
                        } else {
                            // Default: sort in ascending order
                            Array.from(tbody.querySelectorAll('tr'))
                                .sort(comparer(thIndex, true))
                                .forEach(tr => tbody.appendChild(tr));
                            this.classList.add('asc');
                        }
                    });
                });
            }
        }),
        pagein: (htmlelement) => self.element.forEach((el) => {
            var edt_container = el.parentElement.parentElement;
            var total_rows = el.querySelectorAll("tbody tr:not([template])").length;                                   
            var etbl_body = edt_container.querySelector(".elitable_body");                    
            edt_container.querySelector(".elitable_totalrows").innerText = total_rows;
            
                var settotalrow = function(){
                    var i = 0;
                    el.querySelectorAll("tbody > tr:not([template])").forEach(atr => {
                        // console.log(atr.style.display);
                        if(atr.style.display!=='none'){
                            i++;
                        }
                    });  
                    edt_container.querySelector(".elitable_totalshowing").innerText = i;
                }
                
                var updateheight = function(limit){
                    limit = parseInt(limit) + 1;
                     var rowheight = el.querySelector("tbody > tr:not([template])")?.clientHeight;
                     var totalheight = limit * rowheight;
                     // etbl_body.style.maxHeight = totalheight+"px";
                     etbl_body.style.height = "fit-content";
                     settotalrow();
                }
            
                var rowlimit = edt_container.querySelector(".elitable_rowlimit")?.value || 10;
                edt_container.querySelector(".elitable_rowlimit")?.addEventListener("change",function(){
                    rowlimit = this.value;
                    updateheight(rowlimit);
                })                
                updateheight(rowlimit);

        }),
        scrollin: (htmlelement) => self.element.forEach((el) => {
            var edt_container = el.parentElement.parentElement;
            var tablewidth = el.clientWidth;            
            var mobileview = false;
            if(tablewidth <= 800){
                var mobileview = true;
            }
            // console.log(tablewidth);
            var showprogress = function(){

                if(mobileview){
                    var totallenght = edt_container.querySelector(".elitable_body tbody").scrollLeftMax || edt_container.querySelector(".elitable_body tbody").scrollWidth - edt_container.querySelector(".elitable_body tbody").clientWidth;                    
                    var lengthcovered = edt_container.querySelector(".elitable_body tbody").scrollLeft;                    
                    var lcp = lengthcovered / totallenght * 100;
                    // console.log(lcp);
                }
                else
                {
                    var totallenght = edt_container.querySelector(".elitable_body").scrollTopMax || edt_container.querySelector(".elitable_body").scrollHeight - edt_container.querySelector(".elitable_body").clientHeight;
                    var lengthcovered = edt_container.querySelector(".elitable_body").scrollTop;
                    var lcp = lengthcovered / totallenght * 100;
                    // console.log(lcp);
                }

                // console.log(edt_container.querySelectorAll(".elitable_body"));

                //  SVG progressbar
                var circle = edt_container.querySelector('.elitable_progress circle');
                var radius = circle.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle.style.strokeDasharray = `${circumference} ${circumference}`;
                circle.style.strokeDashoffset = `${circumference}`;

                function setProgress(percent) {
                const offset = circumference - percent / 100 * circumference;
                circle.style.strokeDashoffset = offset;
                circle.setAttribute("title",Math.round(percent)+"%");
                }

                setProgress(lcp);

                if (lcp < 101 && lcp > -1) {
                    lcp = lcp || 0;
                    setProgress(lcp);
                }                
            }

            

            var scrollit = function(directions){                

                if(mobileview){
                    var rowheight = el.querySelector(".elitable_body tbody tr:not([template])").clientWidth;     
                    // console.log(rowheight);               
                }
                else
                {
                    var rowheight = el.querySelector(".elitable_body tr:not([template])").clientHeight;
                }

                rowheight = rowheight - 1;

                if(directions == 'up'){               
                    if(mobileview){ 
                        edt_container.querySelector(".elitable_body tbody").scrollLeft = edt_container.querySelector(".elitable_body tbody").scrollLeft - rowheight;                    
                    }
                    else{
                        edt_container.querySelector(".elitable_body").scrollTop = edt_container.querySelector(".elitable_body").scrollTop - rowheight;                    
                    } 
                    
                }
                else
                {
                    if(mobileview){
                        edt_container.querySelector(".elitable_body tbody").scrollLeft = edt_container.querySelector(".elitable_body tbody").scrollLeft + rowheight;
                    }
                    else
                    {
                        edt_container.querySelector(".elitable_body").scrollTop = edt_container.querySelector(".elitable_body").scrollTop + rowheight;
                    }
                    
                }
                showprogress();
            }

            edt_container.querySelector(".elitable_controls > .elitable_left").addEventListener("click",function(e){
                scrollit('up');
            })
            edt_container.querySelector(".elitable_controls > .elitable_right").addEventListener("click",function(e){
                scrollit('down');
            })

            
            if(mobileview){
                edt_container.querySelector(".elitable_body tbody").addEventListener("scroll",function(){
                    showprogress();
                })
            }
            else
            {
                edt_container.querySelector(".elitable_body").addEventListener("scroll",function(){
                    showprogress();
                })
            }
            

        }),
        updatenumbers: (htmlelement) => self.element.forEach((el) => {
            var edt_container = el.parentElement.parentElement;

            var settotalrow = function(){
                var i = 0;
                el.querySelectorAll("tbody > tr:not([template])").forEach(atr => {
                    // console.log(atr.style.display);
                    if(atr.style.display!=='none'){
                        i++;
                    }
                });  
                edt_container.querySelector(".elitable_totalshowing").innerText = i;
            }

            setTimeout(function(){
                var totalrows = el.querySelectorAll("tbody tr:not([template])").length;  
                edt_container.querySelector(".elitable_totalrows").innerText = totalrows;
                settotalrow();                
            },1000);
            
        }),
        multiselect: (htmlelement) => self.element.forEach((el) => {
            var edt_container = el.parentElement.parentElement;
            if(edt_container.querySelector("table[multiselect]")){
                var theadcontainer = el.querySelector("thead tr") || el.querySelector("thead");
                var tbodyrows = el.querySelectorAll("tbody tr");
                theadcontainer.insertAdjacentHTML('afterbegin', "<th><input type='checkbox' class='default elitable_multiselect_checkbox' value='all' title='Select All' ></th>");
                tbodyrows.forEach(tbodytd => {                    
                    // console.log(tbodytd.id);
                    var rowid = tbodytd.id.match(/\d+/);
                    tbodytd.insertAdjacentHTML('afterbegin', "<td><input type='checkbox' class='default elitable_multiselect_children' name='elitable_multiselect' value='"+rowid+"' title='Select' ></td>");
                })
//  
                el.querySelector('.elitable_multiselect_checkbox').addEventListener('click',function(e){
                    if(e.target.checked){
                        var o = 0;
                        // console.log("checked all");
                        el.querySelectorAll(".elitable_multiselect_children:not([template])").forEach(tbtd => {
                            if(!tbtd.checked && tbtd.closest("tr").style.display!=="none"){
                                // tbtd.setAttribute("checked","checked");      
                                tbtd.checked = true;
                                o++;
                            }
                        })
                    }
                    else
                    {
                        var o = 0;                        
                        // console.log("deselect all")
                        el.querySelectorAll(".elitable_multiselect_children:not([template])").forEach(tbtd => {                                                        
                            if(tbtd.checked && tbtd.closest("tr").style.display!=="none"){
                                // tbtd.removeAttribute("checked");
                                tbtd.checked = false;
                                o++;                            
                            } 
                        })
                    }
                    
                    // console.log(o);
                    
                })
            }
        }),
        allchecked: (callback) => self.element.forEach((el) => {
            var elitable_checked = "";
            el.querySelectorAll(".elitable_multiselect_children:checked:not([template])").forEach(item => {
                // console.log(item);
                if(item.value!="null"){
                    elitable_checked = elitable_checked+item.value+",";
                }
            })
            elitable_checked = elitable_checked.replace(/(^,)|(,$)/g, "");
            // console.log(elitable_checked);
            callback(elitable_checked);
        }),
        update: (htmlelement) => self.element.forEach((el) => {            
                self.updatenumbers(el);              
        }),
        updateData: (htmlelement) => self.element.forEach((el) => {            
                if(el.getAttribute('data-url')){
                    var dataurl = el.getAttribute('data-url');
                    eget(dataurl,'',function(data){
                        /////////////////////
                        const tbody = el.querySelector('tbody');
                        const templateRow = el.querySelector('tr[template]');
                        data = JSON.parse(data);
                        data.forEach(item => {
                            const newRow = templateRow.cloneNode(true);

                            newRow.removeAttribute('template');
                            newRow.id = newRow.id.replace('{{id}}', item.id || '');

                            let newRowHTML = newRow.innerHTML;

                            // Replace placeholders with actual data or leave them blank if not present
                            Object.keys(item).forEach(key => {
                                const regex = new RegExp(`{{${key}}}`, 'g');
                                newRowHTML = newRowHTML.replace(regex, item[key] || '');
                            });

                            // Replace any remaining placeholders with an empty string
                            newRowHTML = newRowHTML.replace(/{{\w+}}/g, '');

                            newRow.innerHTML = newRowHTML;

                            tbody.appendChild(newRow);
                        });

                        // templateRow.remove(); // Remove the template row after use
                        /////////////////////
                        self.refresh();
                    })
                    // console.log(dataurl);
                }
        }),
        updateDataLink: (htmlelement) => self.element.forEach((el) => {
               
                if(el.getAttribute('data-url')){
                    var dataurl = el.getAttribute('data-url');
                    if(!isValidURL(dataurl)){
                        dataurl = atob(dataurl);
                    }
                    el.setAttribute('data-url',btoa(dataurl));
                    
                    eget(dataurl,'',function(data){
                        /////////////////////
                        const tbody = el.querySelector('tbody');
                        const templateRow = el.querySelector('tr[template]');
                        if(typeof data != 'object'){
                            data = JSON.parse(data);
                        }
                        // check if the data is inside data variable
                        if(data.data){
                            var data = data.data;
                        }
                        data.forEach(item => {
                            const newRow = templateRow.cloneNode(true);

                            newRow.removeAttribute('template');
                            newRow.id = newRow.id.replace('{{id}}', item.id || '');

                            let newRowHTML = newRow.innerHTML;

                            // Replace placeholders with actual data or leave them blank if not present
                            Object.keys(item).forEach(key => {
                                const regex = new RegExp(`{{${key}}}`, 'g');
                                newRowHTML = newRowHTML.replace(regex, item[key] || '');
                            });

                            // Replace any remaining placeholders with an empty string
                            newRowHTML = newRowHTML.replace(/{{\w+}}/g, '');

                            newRow.innerHTML = newRowHTML;

                            tbody.appendChild(newRow);
                        });

                        // templateRow.remove(); // Remove the template row after use
                        /////////////////////
                                                
                            self.refresh();
                    })
                    // console.log(dataurl);
                }
        })


    }

    return self;
}


/* eli-searchable.js */
function searchable(selector) {
    const self = {
        element: document.querySelectorAll(selector),
        length: document.querySelectorAll(selector).length,
        do: (callback) => self.element.forEach((el) => {
            callback(el);
        }),
        on: (event, callback) => self.element.forEach((el) => {
            el.addEventListener(event, callback);
        }),
        append: (htmlelement) => self.element.forEach((el) => {
            el.insertAdjacentHTML('beforeend', htmlelement);
        }),
        prepend: (htmlelement) => self.element.forEach((el) => {
            el.insertAdjacentHTML('afterbegin', htmlelement);
        }),
        appendafter: (htmlelement) => self.element.forEach((el) => {
            el.insertAdjacentHTML('afterend', htmlelement);
        }),
        appendbefore: (htmlelement) => self.element.forEach((el) => {
            el.insertAdjacentHTML('beforebegin', htmlelement);
        }),
        init: (htmlelement) => self.element.forEach((el) => {
            self.searchable(el);
        }),
        searchable: (htmlelement) => self.element.forEach((el) => {

            el.addEventListener("keyup", function(e) {
                // console.log(this);

                if (el.getAttribute("dlist")) {
                    var dlist = el.getAttribute("dlist");
                    var searchable_node = el.getAttribute('searchable_node');
                    var dlist_container = document.querySelector(dlist);
                    var searchable_items = dlist_container.querySelectorAll(searchable_node);
                    // filter
                    filter = el.value.toUpperCase();
                    // console.log(filter);

                    // Loop through all table rows, and hide those who don't match the search query
                    for (i = 0; i < searchable_items.length; i++) {
                        var si = searchable_items[i];
                        var show = false;

                        if (si) {
                            txtValue = si.textContent || si.innerText;
                            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                // console.log(txtValue.toUpperCase());
                                show = true;
                                si.style.display = "";
                            } else {
                                si.style.display = "none";
                            }
                        }
                    }
                    // filter end
                } else {
                    console.error("EliCSS: Please mention dlist in eli-searchable");
                }
            })
        }),
        selectbox: (htmlelement) => self.element.forEach((el) => {
            // Multiple Select
            if (el.hasAttribute('multiple')) {                           
                var limit = 4;
                if (!el.classList.contains("default") && el.options.length <= limit) {
                    el.parentElement.style.paddingTop = '.7em';
                }
                // console.log(el); 
                var slbox_input = "";
                if (!el.classList.contains("no-search")) {
                    if (el.options.length > limit) {
                        slbox_input = '<input type="search" class="default eli-searchable-select-tag-searchbox" />';
                    }
                }
                var slbox_start = '<div class="eli-searchable-select-tag-container">' + slbox_input + '<ul class="eli-searchable-select-tag-options">';
                var slbox_end = '</ul></div>';
                var slopt = "";
                for (var i = 0; i < el.options.length; i++) {
                    if (el.options[i].value) {
                        var slopthtml = el.options[i].getAttribute("opthtml") || el.options[i].innerText;
                        var sloptval = el.options[i].value || el.options[i].innerText;
                        var sloptselected = el.options[i].selected;
                        var sloptselect = "";
                        var sloptactive = "";
                        var sloptdisable = "";
                        if (sloptselected) {
                            sloptselect = " selected='' ";
                            sloptactive = "selected";
                        }

                        if (el.options[i].hasAttribute("disabled")) {
                            sloptdisable = "disabled"
                        }

                        slopt += '<li class="' + sloptdisable + ' ' + sloptactive + '" tabindex="' + i + '" value="' + sloptval + '" >' + slopthtml + '</li>';
                    }
                }
                el.insertAdjacentHTML("afterend", slbox_start + slopt + slbox_end);

                el.nextElementSibling.querySelectorAll(".eli-searchable-select-tag-options > li").forEach(stagi => {
                    stagi.addEventListener("click", function(ed) {                      
                        var tbindex = ed.target.getAttribute('tabindex');                        
                        // el[tbindex].setAttribute("selected","");
                        if (ed.target.classList.contains("selected")) {
                            ed.target.classList.remove("selected");
                            if (el[tbindex].selected) {
                                el[tbindex].selected = false;
                            }
                        } else {
                            ed.target.classList.add("selected");
                            if (!el[tbindex].selected) {
                                el[tbindex].selected = true;
                            }
                        }
                    })
                })

                if (el.parentElement.querySelector(".eli-searchable-select-tag-searchbox")) {
                    el.parentElement.querySelector(".eli-searchable-select-tag-searchbox").addEventListener("keyup", function(e) {
                        var dlist = e.target.parentElement.querySelector(".eli-searchable-select-tag-options");
                        var searchable_node = "li";
                        var searchable_items = dlist.querySelectorAll(searchable_node);
                        // filter
                        filter = e.target.value.toUpperCase();
                        // console.log(filter);

                        // Loop through all table rows, and hide those who don't match the search query
                        for (i = 0; i < searchable_items.length; i++) {
                            var si = searchable_items[i];
                            var show = false;

                            if (si) {
                                txtValue = si.textContent || si.innerText;
                                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                    // console.log(txtValue.toUpperCase());
                                    show = true;
                                    si.style.display = "";
                                } else {
                                    si.style.display = "none";
                                }
                            }
                        }
                        // filter end   
                    })
                }
            } else {

                // Single Select    
                el.addEventListener("mousedown", function(e) {
                    // console.log(e.target);
                    if (e.target.classList.contains("default")) {
                        e.target.nextSibling.style.top = 'auto';
                        e.target.nextSibling.style.width = 'auto';
                    }

                    var selectcontainer = e.target.parentElement.querySelector(".eli-searchable-select-container");
                    selectcontainer.classList.add("active");
                    var inputbox = selectcontainer.querySelector(".eli-searchable-select-searchbox");
                    inputbox.focus();



                    // close on esc
                    inputbox.addEventListener("keyup", function(et) {
                        switch (et.keyCode) {
                            case 27:
                                // esc
                                et.target.closest(".eli-searchable-select-container").classList.remove('active');
                                el.focus();
                                // .classList.remove("active");
                                break;
                            case 40:
                                // down
                                var firstoption = et.target.parentElement.querySelector('.eli-searchable-select-optionsbox a:not([style="display: none;"]) ');
                                firstoption.focus();
                                var fieldvalue = firstoption.value || firstoption.innerText;
                                inputbox.value = fieldvalue;

                                break;
                        }
                        // console.log(et.keyCode);
                    })


                    var selectoption = function(field) {
                        var fieldvalue = field.value || field.innerText;
                        inputbox.value = "";
                        if (field.tabIndex) {
                            el[field.tabIndex].selected = "true";
                            el.focus();
                            selectcontainer.classList.remove("active");
                        }
                    }


                    selectcontainer.querySelector(".eli-searchable-select-optionsbox").addEventListener("keyup", function(et) {
                        console.log(et.target.innerText);
                        switch (et.keyCode) {
                            case 27:
                                // esc
                                et.target.closest(".eli-searchable-select-container").classList.remove('active');
                                el.focus();
                                break;
                            case 38:
                                // up
                                if (et.target.previousElementSibling) {
                                    et.target.previousElementSibling.focus();
                                    var fieldvalue = et.target.nextElementSibling.value || et.target.nextElementSibling.innerText;
                                    inputbox.value = fieldvalue;
                                }
                                break;
                            case 40:
                                // down
                                if (et.target.nextElementSibling) {
                                    et.target.nextElementSibling.focus();
                                    var fieldvalue = et.target.nextElementSibling.value || et.target.nextElementSibling.innerText;
                                    inputbox.value = fieldvalue;
                                }
                                break;
                            case 13:
                                // select
                                selectoption(et.target);
                                break;
                        }
                    })


                    selectcontainer.querySelector(".eli-searchable-select-optionsbox").addEventListener("click", function(et) {
                        selectoption(et.target);
                    })


                    // close on selecting a tag

                    // close on selecting other index or outside

                    document.addEventListener("click", function(e) {
                        // console.log(e.target.className);
                        if (!e.target.classList.contains('eli-searchable-select')) {
                            selectcontainer.classList.remove("active");
                        }
                    }, true)

                    //                console.log(document.activeElement);

                    e.preventDefault();
                })

                var parent = el.parentElement;

                var options = "";
                for (i = 0; i <= el.options.length; i++) {
                    if (el.options[i] && el.options[i].innerText) {
                        var optionbox = el.options[i];
                        var optiontxt = optionbox.getAttribute("opthtml") || optionbox.innerText;
                        var optionvalue = optionbox.value || optionbox.innerText;
                        options = options + "<a href='#' onclick='return false;' tabIndex='" + i + "' value='" + optionvalue + "' >" + optiontxt + "</a>";
                    }
                }
                var optionsbox = '<div class="eli-searchable-select-container"><input type="search" class="eli-searchable-select-searchbox default" ><div class="eli-searchable-select-optionsbox">' + options + '</div></div>';
                el.insertAdjacentHTML("afterend", optionsbox);

                if (parent.querySelector(".eli-searchable-select-searchbox")) {

                    parent.querySelector(".eli-searchable-select-searchbox").addEventListener("keyup", function(e) {
                        // console.log(this);
                        var dlist = parent.querySelector(".eli-searchable-select-optionsbox");
                        var searchable_node = "a";
                        var searchable_items = dlist.querySelectorAll(searchable_node);
                        // filter
                        filter = e.target.value.toUpperCase();
                        // console.log(filter);

                        // Loop through all table rows, and hide those who don't match the search query
                        for (i = 0; i < searchable_items.length; i++) {
                            var si = searchable_items[i];
                            var show = false;

                            if (si) {
                                txtValue = si.textContent || si.innerText;
                                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                    // console.log(txtValue.toUpperCase());
                                    show = true;
                                    si.style.display = "";
                                } else {
                                    si.style.display = "none";
                                }
                            }
                        }
                        // filter end   
                    })
                }
            }
        })
    }

    return self;
}

/* eli-datatemplating.js */
/**
 * Object.entriesFrom() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Object.fromEntries) {
	Object.fromEntries = function (entries){
		if (!entries || !entries[Symbol.iterator]) { throw new Error('Object.fromEntries() requires a single iterable argument'); }
		let obj = {};
		for (let [key, value] of entries) {
			obj[key] = value;
		}
		return obj;
	};
}


function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}


/* 
// Example 1	
var datacontainer = '#datapop';
var templatecontainer = document.querySelector(datacontainer);
var template = document.querySelector(datacontainer +' > tmp');

var data = fetch('http://localhost/rad/plugins-maker/jsonsgdata/data.php')
  .then(response => response.json())
  .then(json => setData(json,template.innerHTML,templatecontainer));
*/
//-------------------

// Example 2	
/*
var datacontainer = '#datapop';

var data = fetch('http://localhost/rad/plugins-maker/jsonsgdata/data.php')
  .then(response => response.json())
  .then(json => setDataQ(json,datacontainer));
*/
//-------------------

// Example 3	
//setDataQt("http://localhost/rad/plugins-maker/jsonsgdata/data.php",'#datapop');

//-------------------
// SetData = raw1  = you need to first fetch then you need call this function with 
// jsondata,template_innerhtml and container under which it has to embed
function setData(json,templateHTML,container,append=true){
	if(json){

	if(append==false){
		container.innerHTML = "";
	}
	////////////////////////
	////////////////////////
	// console.log(json);
	
	var i = 0;
	for(var ix = Object.keys(json).length - 1; ix >= 0; ix--) {
		let j = json[Object.keys(json)[ix]];
		if(typeof j != 'object'){    		
			j = json;
			obj = false;
		}
		else
		{
			obj = true;
		}
	

	let temp = templateHTML;
		

		// /

   

    const removeEmptyOrNull = (obj) => {

      Object.keys(obj).forEach(k =>

        (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||

        (!obj[k] && obj[k] !== undefined) && delete obj[k]

      );

      return obj;

    };

   

    var oj = removeEmptyOrNull(j);		
    // console.log(oj);

		// /

		for (const [key, value] of Object.entries(oj)) {
			// console.log(key+" - "+ typeof value+" - "+value);
				

				let mask = '{{'+key+'}}';
				temp = temp.replace(new RegExp(mask, 'g'),value);
				temp = temp.replace('template=""',"");	
				i++;					
				if(obj==false && i == Object.entries(j).length){
					container.insertAdjacentHTML('beforeend',temp);	
				}
			}
			if(obj==true){
				container.insertAdjacentHTML('beforeend',temp);	
			}
	}
	}
	else
	{
		console.log("-- Something went wrong, we didn't got any data --");
	}
	///////////
	
	///////////
	///////////
}


// setDataQ =. is for quicker than setData and here just you need to fetch and then //send the parameter of json and main container
//
function setDataQ(json,tcontainer){
	var container = document.querySelector(tcontainer);
	var template = document.querySelector(tcontainer +' > [template]') || document.querySelector(tcontainer +' > tmp') || document.querySelector(tcontainer);
	var templateHTML2 = (document.querySelector(tcontainer +' > [template]')) ? template.outerHTML :  template.innerHTML;
	templateHTML = templateHTML2.replace('template=""',"");	
	// if(!document.querySelector(tcontainer +' > [template]')){
	// 	container.innerHTML = "";
	// }

	////////////////////////
	////////////////////////
	//console.log("Q");
	var i = 0;
	for(var ix = Object.keys(json).length - 1; ix >= 0; ix--) {
		let j = json[Object.keys(json)[ix]];
		if(typeof j != 'object'){    		
			j = json;
			obj = false;
		}
		else
		{
			obj = true;
		}
	
	let temp = templateHTML;
	// temp = temp.replace('template=""',"");	
		for (const [key, value] of Object.entries(j)) {
				let mask = '{{'+key+'}}';
				temp = temp.replace(new RegExp(mask, 'g'),value);	
				i++;					
				if(obj==false && i == Object.entries(j).length){
					container.insertAdjacentHTML('beforeend',temp);	
				}
			}
			if(obj==true){
				container.insertAdjacentHTML('beforeend',temp);	
			}
	}
	///////////

	///////////
	///////////
}


// setDataQt =. is more quicker than setData and here just you don't need to fetch. 
// You just need to call this function send the parameter of url to fetch json and main container
// 
function setDataQt(urljson,tcontainer,callback=""){
	var container = document.querySelector(tcontainer);
	var template = document.querySelector(tcontainer +' > [template]') || document.querySelector(tcontainer +' > tmp') || document.querySelector(tcontainer);
	var templateHTML = (document.querySelector(tcontainer +' > [template]')) ? template.outerHTML :  template.innerHTML;
// console.log(templateHTML);
fetch(urljson)
  .then(response => response.json())
  .then(json => {
  	json = json.data || json;
	if(!document.querySelector(tcontainer +' > [template]')){
		container.innerHTML = "";
	}

	////////////////////////
	// console.log(json);
	
	var i = 0;
	for(var ix = Object.keys(json).length - 1; ix >= 0; ix--) {
		let j = json[Object.keys(json)[ix]];	
		// console.log(j);
		if(typeof j != 'object'){
			j = json;
			obj = false;
		}
		else
		{
			obj = true;
		}

	let temp = templateHTML;
	temp = temp.replace('template=""',"");
	temp = temp.replace("template=''","");	
		for (const [key, value] of Object.entries(j)) {
				let mask = '{{'+key+'}}';
				temp = temp.replace(new RegExp(mask, 'g'),value);	
				i++;					
				if(obj==false && i == Object.entries(j).length){
					container.insertAdjacentHTML('beforeend',temp);	
				}
			}
			if(obj==true){
				container.insertAdjacentHTML('beforeend',temp);					
			}
	}
	///////////

		if(callback){
			callback();
		}
 
  });	
}


/* eli-image.js */

	var imgfields = document.querySelectorAll('.imgoptimize');	
	var ddpfields = document.querySelectorAll('.input-dragdrop');	


	if(imgfields.length > 0){
		init(imgfields);	
	}

	if(ddpfields.length > 0){
		init2(ddpfields);	
	}


function init(imgfields){
imgfields = imgfields || [];
//console.log(imgfields.length);
	imgfields.forEach(function(item){
		item.addEventListener('change',async function(e){			
			var field = e.target;			
			var maxwidth = field.getAttribute('maxwidth');
			var quality = field.getAttribute('quality');
			var exportimgtype = field.getAttribute('exportimgtype');
			var preview = field.getAttribute('preview');
			var textarea = field.getAttribute('data');
			// resetting 
			//alert(item.files.length);
			document.querySelector(textarea).innerHTML = "";
			document.querySelector(preview).innerHTML = "";
			//alert("passed");
			//console.log(item.files);
			for (var i = item.files.length - 1; i >= 0; i--) {
				//console.log(item.files[i]);
				// -- Making Dataurl -- //
				file = item.files[i];
				
				EXIF.getData(file);

		 		var optimg = await optimizeImg(file,{
		 			'maxwidth':maxwidth || '600px',
		 			'imgquality': quality || 60,
		 			'imgtype': exportimgtype || 'image/png',
		 			'preview': preview || '',
		 			'textarea': textarea || ''
		 		},function(optimg,options,file){
		 			// console.log(options.preview);
		 			if(options.preview){
		 				var previewbox = document.querySelector(preview);
						previewbox.insertAdjacentHTML("beforeend","<img src='"+optimg+"' alt='optimized'>");
		 			}
		 			// add the dataurl (optimg) in json and put that json inside the textarea

		 			var inputfieldjson = { 'name':file.name, 'data':optimg, 'type':options.imgtype, 'exifdata':file.exifdata };
		 			jsoninputfile(options.textarea,inputfieldjson);
		 			//console.log(inputfieldjson);
		 		});	
				//// 												
			}
			// console.log(item.files.length);
		})
	})	
}

function init2(imgfields,append){
	imgfields = imgfields || [];
	append = append || true;
// console.log(imgfields.length);
	imgfields.forEach(function(item){
		item.addEventListener('change',async function(e){				
			var field = e.target;			
			var maxwidth = field.getAttribute('maxwidth');
			var quality = field.getAttribute('quality');
			var exportimgtype = field.getAttribute('exportimgtype');
			var preview = field.getAttribute('preview');
			var controls = field.getAttribute('controls');
			var textarea = field.getAttribute('data');
			// resetting 
			// alert(item.files.length);
			if(!append){
				document.querySelector(textarea).innerHTML = "";
				document.querySelector(preview).innerHTML = "";
			}
			//alert("passed");
			// console.log(item.files);
			// alert(item.files.length);
			// alert(preview);
			let imgsitems = document.querySelectorAll(preview+" .imgitem");
			// alert(item.files.length);

			for (var i = 0; i < item.files.length; i++) {				
				// -- Making Dataurl -- //
				var indx = imgsitems.length + i;
				console.log(item.files[i]);
				// console.log(indx);
				file = item.files[i];
				
				EXIF.getData(file);

				// check maxlength

				// Crop

				// controls 

				// delete

				// info							
		 		var optimg = await optimizeImg(file,{
		 			'maxwidth': maxwidth || '800px',
		 			'imgquality': quality || 100,
		 			'imgtype': exportimgtype || 'image/png',
		 			'preview': preview || '',
		 			'textarea': textarea || '',
		 			'indxx': i,
		 			'imgfield' : imgfields
		 		},function(optimg,options,file){
		 			
		 			if(controls){
		 				var imgctrl = "<div class='imgcontrol'> <span onclick=\"imgdelete(this,'"+textarea+"','"+ options.indxx +"','"+options+"')\" class='delete mdi mdi-close'></span> <span class='crop mdi mdi-crop' onclick='cropzone(this)'></span> <span class='primary mdi mdi-check-circle' onclick='makeitprimary(this)'></span></div>";
		 			}
		 			else
		 			{
		 				var imgctrl = "";
		 			}
		 			// console.log(options.preview);
		 			if(options.preview){
		 				var previewbox = document.querySelector(preview);
						previewbox.insertAdjacentHTML("beforeend","<div class='imgitem'><img src='"+optimg+"' alt='optimized'>"+imgctrl+"</div>");
		 			}
		 			// add the dataurl (optimg) in json and put that json inside the textarea
		 			// file.exifdata = file.exifdata || "";
		 			// var inputfieldjson = { 'name':file.name, 'data':optimg, 'type':options.imgtype, 'exifdata':file.exifdata };
		 			// console.log(inputfieldjson);
		 			// jsoninputfile(options.textarea,inputfieldjson);
		 			//console.log(inputfieldjson);
		 			console.clear();
		 		});
				//		
			}
			// console.log(item.files.length);
		})
	})	
}

function imgdelete(field,textarea,index,options){

	console.log(options);

	index = parseInt(index);
	console.log(index);
	var txtar = document.querySelector(textarea);
	var data = JSON.parse("["+txtar.value+"]");
	// console.log(field.closest('.imgitem'));
		// remove from data 		
		const indexremove = data.indexOf(index);		
		if (data[index]) {
		  data.splice(index, 1);
		}
		// remove [] from start and end
		var datastring = JSON.stringify(data);
		datastring = datastring.substring(1);
		

		datastring = datastring.substring(0, datastring.length - 1);
		// put back to javascript
		// txtar.value = "";
		txtar.value = datastring;
		if(datastring == ""){
			// imgfields.value = "";
		}		
	field.closest(".imgitem").remove();
}

function optimizeImg(file,options,callback){

	options = options || "";

	imgtype = options.imgtype || "image/jpeg";
	imgquality = options.imgquality || 60;	

	if(!file) return "file not exist";

	const reader = new FileReader();
	reader.readAsDataURL(file);

	reader.onload = function(event){
		const imgElement = document.createElement("img");		
		imgElement.src = event.target.result;
		// breakpoint: here you can show preview
		
		imgElement.onload = function(e){			
			const canvas = document.createElement("canvas");
			// Max Width
			const MAX_WIDTH = options.maxwidth || 400;

			// Ratio
			const scaleSize = MAX_WIDTH / e.target.width;
			canvas.width = MAX_WIDTH;
			canvas.height = e.target.height * scaleSize;

			// 2D
			const ctx = canvas.getContext("2d");
			ctx.drawImage(e.target, 0,0, canvas.width, canvas.height);
			const srcEncoded = ctx.canvas.toDataURL(e.target,imgtype); // optimization takes place			

			//document.querySelector('.previewbox').insertAdjacentHTML("beforeend","<img src='"+srcEncoded+"' alt='optimized'>");
			if(callback){
				callback(srcEncoded,options,file);
			}

			//return srcEncoded;		
		}
	}

}

function makeitprimary(field){
	if(!field.parentElement.parentElement.classList.contains('active')){
		document.querySelectorAll(".imgitem.active")?.forEach(itm => {
			itm.classList.remove("active");
		})

		setTimeout(function(){
			field.parentElement.parentElement.classList.add('active');
		},100);
	}
}

function uploadCropped(callback){
	var inputfile = document.querySelector(".input-dragdrop");
	var previewbox = inputfile.getAttribute("preview");
	var txtarea = inputfile.getAttribute("data");
	if(previewbox && txtarea){
		var allimgs = document.querySelectorAll(previewbox+" .imgitem > img");
		if(allimgs.length > 0){
			document.querySelector(txtarea).value = "";
			allimgs.forEach(aimg => {
				$primary = false;
				if(aimg.parentElement.classList.contains('active')){
					$primary = true;
				}
				var randname = Math.random().toString(36).slice(2);	
				var jsondata = { 'name':randname, 'data':aimg.src, 'type':'image/png', 'exifdata':'', 'primary':$primary };
				jsoninputfile(txtarea,jsondata);
			})


			if(callback){
				callback();
			}
		}
		else
		{
			Swal.fire({
                  position: 'center',
                  type: 'info',
                  title: "Kindly upload some images",
                  showConfirmButton: false,
                  timer: 2000
                })
		}
	}
	else
	{
		console.log("input-dragdrop doesnt have attr of preview or data");
	}
}


function cropzone(field,modalid,cwidth){
	cwidth = cwidth || '400';
	modalid = modalid || '#cropp';
	// console.log();
	var imgx = field.parentElement.parentElement.querySelector('img');
	var cropped = document.querySelector("#cropimg");
	cropped.src = imgx.src;
	modal(modalid,'open');
	// console.log(typeof cropperObj);
	
	let cropperObj = new Cropper(document.querySelector("#cropimg"), {
		  aspectRatio: 1/1,
		  viewMode: 1,
		  crop(event) {		  			  	
		    // console.log(event.detail.x);
		    // console.log(event.detail.y);
		    // console.log(event.detail.width);
		    // console.log(event.detail.height);
		    // console.log(event.detail.rotate);
		    // console.log(event.detail.scaleX);
		    // console.log(event.detail.scaleY);		    
		 	}
		})
	// Save
	// save on click
	var save = document.querySelector(modalid+" #savecpic");
save.addEventListener('click',(event)=>{
  // get result to data uri
  let imgSrc = cropperObj.getCroppedCanvas({
		width: cwidth
	}).toDataURL();
  // remove hide class of img
  cropped.classList.remove('hide');  	
	modal(modalid,'close');
	// show image cropped
  cropped.src = imgSrc;
  imgx.src = imgSrc;

  // dwn.classList.remove('hide');
  // dwn.download = 'imagename.png';
  // dwn.setAttribute('href',imgSrc);  
	cropperObj.destroy();
	setTimeout(console.clear(),1000);
});
}



function jsoninputfile(textarea,jsondata){	
	var txtar = document.querySelector(textarea);
	
	if(txtar){
		if(typeof jsondata == 'object'){
			jsondata = JSON.stringify(jsondata);
		}
		var olddata = txtar.value;

		if(olddata){			
			document.querySelector(textarea).value = olddata+","+jsondata;	
			//var od = document.querySelector(textarea).innerHTML;
			//console.log(JSON.parse("["+od+"]"));			
		}
		else
		{
			document.querySelector(textarea).value = jsondata;
		}
		// document.write("["+document.querySelector(textarea).innerHTML+"]");
	}
	else
	{
		console.error('Eli:Please specify a textarea id as data attribute in the form with '+textarea);
	}
}

/**
 * Original file: /npm/exif-js@2.3.0/exif.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
(function(){var d=!1,l=function(e){return e instanceof l?e:this instanceof l?void(this.EXIFwrapped=e):new l(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=l),exports.EXIF=l):this.EXIF=l;var u=l.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},c=l.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},f=l.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},g=l.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},m=l.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function i(e){return!!e.exifdata}function r(i,o){function t(e){var t=p(e);i.exifdata=t||{};var n=function(e){var t=new DataView(e);d&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return d&&console.log("Not a valid JPEG"),!1;var n=2,r=e.byteLength;for(;n<r;){if(l=n,56===(s=t).getUint8(l)&&66===s.getUint8(l+1)&&73===s.getUint8(l+2)&&77===s.getUint8(l+3)&&4===s.getUint8(l+4)&&4===s.getUint8(l+5)){var i=t.getUint8(n+7);i%2!=0&&(i+=1),0===i&&(i=4);var o=n+8+i,a=t.getUint16(n+6+i);return S(e,o,a)}n++}var s,l}(e);if(i.iptcdata=n||{},l.isXmpEnabled){var r=function(e){if(!("DOMParser"in self))return;var t=new DataView(e);d&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return d&&console.log("Not a valid JPEG"),!1;var n=2,r=e.byteLength,i=new DOMParser;for(;n<r-4;){if("http"==y(t,n,4)){var o=n-1,a=t.getUint16(n-2)-1,s=y(t,o,a),l=s.indexOf("xmpmeta>")+8,u=(s=s.substring(s.indexOf("<x:xmpmeta"),l)).indexOf("x:xmpmeta")+10;s=s.slice(0,u)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+s.slice(u);var c=i.parseFromString(s,"text/xml");return x(c)}n++}}(e);i.xmpdata=r||{}}o&&o.call(i)}var e,n,r;if(i.src)if(/^data\:/i.test(i.src))t(function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,i=new ArrayBuffer(r),o=new Uint8Array(i),a=0;a<r;a++)o[a]=n.charCodeAt(a);return i}(i.src));else if(/^blob\:/i.test(i.src)){(s=new FileReader).onload=function(e){t(e.target.result)},e=i.src,n=function(e){s.readAsArrayBuffer(e)},(r=new XMLHttpRequest).open("GET",e,!0),r.responseType="blob",r.onload=function(e){200!=this.status&&0!==this.status||n(this.response)},r.send()}else{var a=new XMLHttpRequest;a.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";t(a.response),a=null},a.open("GET",i.src,!0),a.responseType="arraybuffer",a.send(null)}else if(self.FileReader&&(i instanceof self.Blob||i instanceof self.File)){var s;(s=new FileReader).onload=function(e){d&&console.log("Got file of length "+e.target.result.byteLength),t(e.target.result)},s.readAsArrayBuffer(i)}}function p(e){var t=new DataView(e);if(d&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return d&&console.log("Not a valid JPEG"),!1;for(var n,r=2,i=e.byteLength;r<i;){if(255!=t.getUint8(r))return d&&console.log("Not a valid marker at offset "+r+", found: "+t.getUint8(r)),!1;if(n=t.getUint8(r+1),d&&console.log(n),225==n)return d&&console.log("Found 0xFFE1 marker"),o(t,r+4,t.getUint16(r+2));r+=2+t.getUint16(r+2)}}var h={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function S(e,t,n){for(var r,i,o,a,s=new DataView(e),l={},u=t;u<t+n;)28===s.getUint8(u)&&2===s.getUint8(u+1)&&(a=s.getUint8(u+2))in h&&((o=s.getInt16(u+3))+5,i=h[a],r=y(s,u+5,o),l.hasOwnProperty(i)?l[i]instanceof Array?l[i].push(r):l[i]=[l[i],r]:l[i]=r),u++;return l}function P(e,t,n,r,i){var o,a,s,l=e.getUint16(n,!i),u={};for(s=0;s<l;s++)o=n+12*s+2,!(a=r[e.getUint16(o,!i)])&&d&&console.log("Unknown tag: "+e.getUint16(o,!i)),u[a]=F(e,o,t,n,i);return u}function F(e,t,n,r,i){var o,a,s,l,u,c,d=e.getUint16(t+2,!i),f=e.getUint32(t+4,!i),g=e.getUint32(t+8,!i)+n;switch(d){case 1:case 7:if(1==f)return e.getUint8(t+8,!i);for(o=4<f?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint8(o+l);return a;case 2:return y(e,o=4<f?g:t+8,f-1);case 3:if(1==f)return e.getUint16(t+8,!i);for(o=2<f?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint16(o+2*l,!i);return a;case 4:if(1==f)return e.getUint32(t+8,!i);for(a=[],l=0;l<f;l++)a[l]=e.getUint32(g+4*l,!i);return a;case 5:if(1==f)return u=e.getUint32(g,!i),c=e.getUint32(g+4,!i),(s=new Number(u/c)).numerator=u,s.denominator=c,s;for(a=[],l=0;l<f;l++)u=e.getUint32(g+8*l,!i),c=e.getUint32(g+4+8*l,!i),a[l]=new Number(u/c),a[l].numerator=u,a[l].denominator=c;return a;case 9:if(1==f)return e.getInt32(t+8,!i);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+4*l,!i);return a;case 10:if(1==f)return e.getInt32(g,!i)/e.getInt32(g+4,!i);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+8*l,!i)/e.getInt32(g+4+8*l,!i);return a}}function y(e,t,r){var i="";for(n=t;n<t+r;n++)i+=String.fromCharCode(e.getUint8(n));return i}function o(e,t){if("Exif"!=y(e,t,4))return d&&console.log("Not valid EXIF data! "+y(e,t,4)),!1;var n,r,i,o,a,s=t+6;if(18761==e.getUint16(s))n=!1;else{if(19789!=e.getUint16(s))return d&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(s+2,!n))return d&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var l=e.getUint32(s+4,!n);if(l<8)return d&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(s+4,!n)),!1;if((r=P(e,s,s+l,c,n)).ExifIFDPointer)for(i in o=P(e,s,s+r.ExifIFDPointer,u,n)){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":o[i]=m[i][o[i]];break;case"ExifVersion":case"FlashpixVersion":o[i]=String.fromCharCode(o[i][0],o[i][1],o[i][2],o[i][3]);break;case"ComponentsConfiguration":o[i]=m.Components[o[i][0]]+m.Components[o[i][1]]+m.Components[o[i][2]]+m.Components[o[i][3]]}r[i]=o[i]}if(r.GPSInfoIFDPointer)for(i in a=P(e,s,s+r.GPSInfoIFDPointer,f,n)){switch(i){case"GPSVersionID":a[i]=a[i][0]+"."+a[i][1]+"."+a[i][2]+"."+a[i][3]}r[i]=a[i]}return r.thumbnail=function(e,t,n,r){var i,o,a,s,l=(o=t+n,a=r,s=(i=e).getUint16(o,!a),i.getUint32(o+2+12*s,!a));if(!l)return{};if(l>e.byteLength)return{};var u=P(e,t,t+l,g,r);if(u.Compression)switch(u.Compression){case 6:if(u.JpegIFOffset&&u.JpegIFByteCount){var c=t+u.JpegIFOffset,d=u.JpegIFByteCount;u.blob=new Blob([new Uint8Array(e.buffer,c,d)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",u.Compression)}else 2==u.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return u}(e,s,l,n),r}function b(e){var t={};if(1==e.nodeType){if(0<e.attributes.length){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t["@attributes"][r.nodeName]=r.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var i=0;i<e.childNodes.length;i++){var o=e.childNodes.item(i),a=o.nodeName;if(null==t[a])t[a]=b(o);else{if(null==t[a].push){var s=t[a];t[a]=[],t[a].push(s)}t[a].push(b(o))}}return t}function x(e){try{var t={};if(0<e.children.length)for(var n=0;n<e.children.length;n++){var r=e.children.item(n),i=r.attributes;for(var o in i){var a=i[o],s=a.nodeName,l=a.nodeValue;void 0!==s&&(t[s]=l)}var u=r.nodeName;if(void 0===t[u])t[u]=b(r);else{if(void 0===t[u].push){var c=t[u];t[u]=[],t[u].push(c)}t[u].push(b(r))}}else t=e.textContent;return t}catch(e){console.log(e.message)}}l.enableXmp=function(){l.isXmpEnabled=!0},l.disableXmp=function(){l.isXmpEnabled=!1},l.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(i(e)?t&&t.call(e):r(e,t),!0)},l.getTag=function(e,t){if(i(e))return e.exifdata[t]},l.getIptcTag=function(e,t){if(i(e))return e.iptcdata[t]},l.getAllTags=function(e){if(!i(e))return{};var t,n=e.exifdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},l.getAllIptcTags=function(e){if(!i(e))return{};var t,n=e.iptcdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},l.pretty=function(e){if(!i(e))return"";var t,n=e.exifdata,r="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?r+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":r+=t+" : ["+n[t].length+" values]\r\n":r+=t+" : "+n[t]+"\r\n");return r},l.readFromBinaryFile=function(e){return p(e)},"function"==typeof define&&define.amd&&define("exif-js",[],function(){return l})}).call(this);




/* eli-carousel.js */
function elislider(elem,option){
	elem = elem || ".slider";
	var sliders = document.querySelectorAll(elem);
	sliders.forEach(slider => {
    slider.classList.add('initialised');
		// per sliders 
		// options
		let options = option || {};
		options.startindex= options.startindex || slider.getAttribute('startindex') || 0;
        options.slidetoscroll= options.slidetoscroll || slider.getAttribute('slidetoscroll') || 1;
        options.slidetoshow= options.slidetoshow || slider.getAttribute('slidetoshow') || 3;
        options.gap= options.gap || slider.getAttribute('gap') || 0;
        options.cover= options.cover || slider.getAttribute('cover') || true;
        options.height= options.height || slider.getAttribute('height') || 'auto';

        //console.log(options);
        ////////////
        
        //console.log(slider);
        //////////////////////////////////////////////////////
        // slider track
        // 
        var slidertrack = slider.children[0];
        // total slides count
        var totalslidescount = slidertrack.childElementCount;
        if(slidertrack.childElementCount === 0){
            slider.classList.remove('initialised');
        }
        // total slides
        var totalslides = slidertrack.children;
       	// per slide width
        // alert(totalslidescount);

        // console.log(slidertrack.clientWidth);

        var scwidth = slidertrack.clientWidth || slidertrack.scrollWidth;
        if(totalslidescount >= options.slidetoshow){
       	  var perslidewidth = scwidth / options.slidetoshow;
        }
        else
        {
          var perslidewidth = scwidth / slidetoshow;
          // alert(perslidewidth);
        }

        // console.log(slider);
       	// console.log("perslidewidth - "+ perslidewidth);
       //	console.log(document.querySelector('body').scrollWidth);
       	
       	
       	//////////////////////////////////////////////////////
       	// Controls
       	// 
       	var slidercontrol = slider.children[1];
       	var cprev = slidercontrol.querySelector(".slider-prev");
       	var cnext = slidercontrol.querySelector(".slider-next");

       	////////////////////////////////////////////////////////       	
    		// Setup
    		// 
    		// GAP
        slidertrack.style.gap = options.gap+"px";
        // placement
        for(i=0; i < totalslidescount; i++) {
        	slide = slidertrack.children[i];
          var slidewidth = parseInt(perslidewidth - (options.gap / 2));
          if(slidewidth == 0){
            slidewidth = '100';
          }

          var slidemessurement = "%";
          if(scwidth > 100){
             slidemessurement = "px";
          }

        	slide.style.width = slidewidth+slidemessurement;

          // slide click
          slide.addEventListener('click',function(e){
            let activeslide = slidertrack.querySelector("div.active");
            activeslide?.classList.remove("active");
            if(e.target.parentElement && e.target.parentElement.nodeName==='DIV'){
              aslide = e.target.parentElement;
              aslide.classList.add('active');         
            }
            

          })

        }
        // Initial Active Slide 
        var iactslide = slidertrack.children[options.startindex];
        // console.log(iactslide);
        if(typeof iactslide !== 'undefined'){
            iactslide.classList.add("active");
            slidertrack.scrollLeft = iactslide.offsetLeft;
        }
        /////////////////////////////////////////////////////////          
        // Events
        cnext.addEventListener("click",function(e){
            // check for active slide
            let activeslide = slidertrack.querySelector("div.active");
           // console.log(activeslide);
            // check next slide
              // console.log(activeslide.nextElementSibling);
              if(activeslide?.nextElementSibling)
              {
                let nextslide = activeslide.nextElementSibling;
                // make active as inactive
                activeslide.classList.remove('active');
                // make nextslide active
                nextslide.classList.add('active');
                // scroll towards the active
                slidertrack.scrollLeft = nextslide.offsetLeft;
              }
              else
              {
                // make next slide to first slide on null
                let nextslide = slidertrack.children[0];
                // make active as inactive
                activeslide?.classList.remove('active');
                // make nextslide active
                nextslide.classList.add('active');
                // scroll towards the active
                slidertrack.scrollLeft = nextslide.offsetLeft;
              }
        })

        // Prev
        cprev.addEventListener("click",function(e){
            // check for active slide
            let activeslide = slidertrack.querySelector("div.active");
            // check next slide
            
              if(activeslide?.previousElementSibling)
              {
                let previousslide = activeslide.previousElementSibling;
                // make active as inactive
                activeslide?.classList.remove('active');
                // make previousslide active
                previousslide.classList.add('active');
                // scroll towards the active
                slidertrack.scrollLeft = previousslide.offsetLeft;
              }
              else
              {
                // make previous slide to first slide on null
                previousslide = slidertrack.children[parseInt(totalslidescount - 1)];
                // make active as inactive
                activeslide?.classList.remove('active');
                // make previousslide active
                previousslide.classList.add('active');
                // scroll towards the active
                slidertrack.scrollLeft = previousslide.offsetLeft;
              }
        })

        
                

	})
}


// Automatically include eli.css in the head
const scriptPath = document.currentScript.src;
const cssPath = scriptPath.replace(/\/[^/]*$/, '/eli.css');
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = cssPath;
document.head.appendChild(link);
