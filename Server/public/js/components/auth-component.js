import{S as t,i as o,a as e,b as s,s as n,e as i,c as r,n as a,d as u,f as c,l as m,g as l,r as g,h as p,j as d}from"./index-db20528a.js";import{sendText as f}from"../../../../../../../../../js/libraries/serverTools.js";import*as h from"../../../../../../../../../js/libraries/authTools.js";import"../../../../../../../../../js/components/login-component.js";import"../../../../../../../../../js/components/signup-component.js";function j(t){let o,e,n,p,d,f,h,j,w;return{c(){o=i("div"),e=i("div"),n=i("login-component"),p=r(),d=i("signup-component"),f=r(),h=i("div"),h.innerHTML="<span>OR</span>",this.c=a,u(e,"id","auth-grid-group"),u(h,"id","auth-or"),u(h,"class","pane"),u(o,"id","auth-group")},m(i,r){s(i,o,r),c(o,e),c(e,n),t[3](n),c(e,p),c(e,d),t[5](d),c(o,f),c(o,h),j||(w=[m(n,"click",t[4]),m(n,"keydown",y),m(d,"click",t[6]),m(d,"keydown",b)],j=!0)},p:a,i:a,o:a,d(e){e&&l(o),t[3](null),t[5](null),j=!1,g(w)}}}const y=()=>"",b=()=>"";function w(t,o,e){let s,n;h.redirectLogged();let i={googleInit:!1};function r(t){t==s?(e(0,s.focused=!0,s),e(1,n.focused=!1,n)):(e(0,s.focused=!1,s),e(1,n.focused=!0,n))}function a(t){console.log(t),f("/signup-google",t.credential,(t=>h.processLoginResponse(t,i.msgs,i.remember.checked)))}p("auth",i),function t(){"undefined"!=typeof google?(google.accounts.id.initialize({client_id:"93612176787-sr8qjqem4e3kok4msrnj8s1illt85a9g.apps.googleusercontent.com",callback:a,auto_select:!0,context:"signin"}),i.googleInit=!0):setTimeout(t,100)}();return[s,n,r,function(t){d[t?"unshift":"push"]((()=>{s=t,e(0,s)}))},()=>r(s),function(t){d[t?"unshift":"push"]((()=>{n=t,e(1,n)}))},()=>r(n)]}class k extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';@import '/css/auth.css';span{font-size:1.4rem;font-family:var(--sans-serif,sans-serif)}#auth-group{margin:auto;width:auto;margin-bottom:3rem}#auth-grid-group{display:grid;grid-template-columns:30rem 30rem;justify-content:center;gap:1.37rem;width:100%}#auth-or{display:flex;position:absolute;margin:auto;top:40%;left:50%;transform:translate(-50%, -50%);width:5.4rem;height:5.4rem;border-radius:6.8rem;background-color:white;align-items:center;justify-content:center;font-family:var(--sans-serif,sans-serif);font-weight:500}@media only screen and (max-width: 1200px){#auth-grid-group{display:grid;grid-template-columns:30rem;grid-template-rows:auto auto;justify-content:center;gap:1.37rem;width:100%}#auth-or{top:40rem}#auth-group{margin-top:2rem;margin-bottom:3rem}}</style>",o(this,{target:this.shadowRoot,props:e(this.attributes),customElement:!0},w,j,n,{},null),t&&t.target&&s(t.target,this,t.anchor)}}customElements.define("auth-component",k);export{k as default};
