import{w as u}from"./index-a4af7e81.js";let f="",b="";function g(n){f=n.base,b=n.assets||f}function m(n){let e=n.baseURI;if(!e){const t=n.getElementsByTagName("base");e=t.length?t[0].href:n.URL}return e}function _(){return{x:pageXOffset,y:pageYOffset}}function k(n){let e,t=null,r=null,a=null;for(const s of n.composedPath())s instanceof Element&&(!e&&s.nodeName.toUpperCase()==="A"&&(e=s),t===null&&(t=l(s,"data-sveltekit-noscroll")),r===null&&(r=l(s,"data-sveltekit-prefetch")),a===null&&(a=l(s,"data-sveltekit-reload")));const o=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:o,options:{noscroll:t,prefetch:r,reload:a}}}function l(n,e){const t=n.getAttribute(e);return t===null?t:t===""?!0:(t==="off",!1)}function d(n){const e=u(n);let t=!0;function r(){t=!0,e.update(s=>s)}function a(s){t=!1,e.set(s)}function o(s){let i;return e.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:r,set:a,subscribe:o}}function p(){const{set:n,subscribe:e}=u(!1);let t;async function r(){clearTimeout(t);const a=await fetch(`${b}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:o}=await a.json(),s=o!=="1709563865346";return s&&(n(!0),clearTimeout(t)),s}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:r}}function v(n){n.client}const w={url:d({}),page:d({}),navigating:u(null),updated:p()};export{_ as a,g as b,k as f,m as g,v as i,w as s};
