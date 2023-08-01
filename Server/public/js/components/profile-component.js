import{S as e,i as t,a as o,b as n,s as i,e as s,c as l,n as r,d as m,f as a,l as p,g as u,r as c,t as d,h as g,o as f,q as h,j as b,z as j}from"./index-6e99513e.js";import{w as y}from"./index-3db98739.js";import*as v from"../../../../../../../../../js/libraries/authTools.js";import{svgFromObject as x}from"../../../../../../../../../js/libraries/miscTools.js";import"../../../../../../../../../js/components/pane-aligner.js";import"../../../../../../../../../js/components/profile-general.js";import"../../../../../../../../../js/components/profile-groups.js";import"../../../../../../../../../js/components/profile-communes.js";import"../../../../../../../../../js/components/profile-coops.js";import"../../../../../../../../../js/components/profile-parties.js";import"../../../../../../../../../js/components/groups-add-component.js";function w(e){let t,o,i,m,a,p,c,d,g;return{c(){t=s("profile-general"),o=l(),i=s("profile-groups"),m=l(),a=s("profile-communes"),p=l(),c=s("profile-coops"),d=l(),g=s("profile-parties"),j(t,"display","none"),j(i,"display","none"),j(a,"display","none"),j(c,"display","none"),j(g,"display","none")},m(s,l){n(s,t,l),e[25](t),n(s,o,l),n(s,i,l),e[26](i),n(s,m,l),n(s,a,l),e[27](a),n(s,p,l),n(s,c,l),e[28](c),n(s,d,l),n(s,g,l),e[29](g)},p:r,d(n){n&&u(t),e[25](null),n&&u(o),n&&u(i),e[26](null),n&&u(m),n&&u(a),e[27](null),n&&u(p),n&&u(c),e[28](null),n&&u(d),n&&u(g),e[29](null)}}}function T(e){let t,o=1==e[11]&&w(e);return{c(){o&&o.c(),t=h()},m(e,i){o&&o.m(e,i),n(e,t,i)},p(e,n){1==e[11]?o?o.p(e,n):(o=w(e),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(e){o&&o.d(e),e&&u(t)}}}function k(e){let t,o,d,g,f,h,b,j,y,x,w,k,L,H,M,q,E,N=e[11],R=T(e);return{c(){t=s("pane-aligner"),o=s("div"),d=s("button"),d.innerHTML='<object id="general-img" class="icons" type="image/svg+xml" data="/img/profile/icons/general.svg" title="general"></object> \n            <span>general</span>',g=l(),f=s("button"),f.innerHTML='<object id="groups-img" class="icons" type="image/svg+xml" data="/img/common/groups.svg" title="groups"></object>             \n            <span>groups</span>',h=l(),b=s("button"),b.innerHTML='<object id="communes-img" class="icons" type="image/svg+xml" data="/img/common/communes.svg" title="communes"></object>             \n            <span>communes</span>',j=l(),y=s("button"),y.innerHTML='<object id="coops-img" class="icons" type="image/svg+xml" data="/img/common/coops.svg" title="coops"></object>             \n            <span>cooperatives</span>',x=l(),w=s("button"),w.innerHTML='<object id="parties-img" class="icons" type="image/svg+xml" data="/img/common/parties.svg" title="parties"></object>             \n            <span>parties</span>',k=l(),L=s("button"),L.innerHTML='<object id="logout-img" class="icons" type="image/svg+xml" data="/img/profile/icons/logout.svg" title=""></object>             \n            <span>logout</span>',H=l(),M=s("div"),R.c(),this.c=r,m(L,"id","logout-button"),m(o,"id","left-column"),m(o,"class","pane"),m(o,"slot","sidebar-left"),m(M,"id","main-column"),m(M,"slot","main")},m(i,s){n(i,t,s),a(t,o),a(o,d),e[14](d),a(o,g),a(o,f),e[16](f),a(o,h),a(o,b),e[18](b),a(o,j),a(o,y),e[20](y),a(o,x),a(o,w),e[22](w),a(o,k),a(o,L),e[24](o),a(t,H),a(t,M),R.m(M,null),q||(E=[p(d,"click",e[15]),p(f,"click",e[17]),p(b,"click",e[19]),p(y,"click",e[21]),p(w,"click",e[23]),p(L,"click",v.logout)],q=!0)},p(e,t){2048&t[0]&&i(N,N=e[11])?(R.d(1),R=T(e),R.c(),R.m(M,null)):R.p(e,t)},i:r,o:r,d(o){o&&u(t),e[14](null),e[16](null),e[18](null),e[20](null),e[22](null),e[24](null),R.d(o),q=!1,c(E)}}}function L(e){return null!=e&&null!=e}function H(e,t,o){let n,i,s,l,r,m,a,p,u,c,h,j,w,T;v.redirectNotLogged();let k={},H=y(0);d(e,H,(e=>o(11,n=e)));let M=y(0);function q(e,t){for(let e of p)e.style.display="none";for(let e of T)E(e,400,"#636363");e.style.display="initial",E(t,500,"#c52a28")}function E(e,t,o){let n=e.querySelector("object");if(null==n){setTimeout((()=>E(e,t,o)),100)}else{let i=x(n);if(null==i){setTimeout((()=>E(e,t,o)),100)}else e.style.fontWeight=t,i.setAttribute("fill",o)}}function N(){if(0!=Object.keys(k).length&&null!=i){for(let e of T)E(e,400,"#636363");E(T[0],500,"#c52a28")}else setTimeout(N,100)}function R(){if(p=[s,l,r,m,a],T=[u,c,h,j,w],1==n&&p.every((e=>L(e)))&&T.every((e=>L(e))))p=[s,l,r,m,a],T=[u,c,h,j,w],N(),o(1,s.style.display="initial",s);else{setTimeout((()=>R()),100)}}v.getUser(k,H),g("profile-component",{user:k,maps:{},reloadTrigger:function(){M.update((e=>e+1))}}),f((()=>{R()}));return[i,s,l,r,m,a,u,c,h,j,w,n,H,q,function(e){b[e?"unshift":"push"]((()=>{u=e,o(6,u)}))},()=>q(s,u),function(e){b[e?"unshift":"push"]((()=>{c=e,o(7,c)}))},()=>q(l,c),function(e){b[e?"unshift":"push"]((()=>{h=e,o(8,h)}))},()=>q(r,h),function(e){b[e?"unshift":"push"]((()=>{j=e,o(9,j)}))},()=>q(m,j),function(e){b[e?"unshift":"push"]((()=>{w=e,o(10,w)}))},()=>q(a,w),function(e){b[e?"unshift":"push"]((()=>{i=e,o(0,i)}))},function(e){b[e?"unshift":"push"]((()=>{s=e,o(1,s)}))},function(e){b[e?"unshift":"push"]((()=>{l=e,o(2,l)}))},function(e){b[e?"unshift":"push"]((()=>{r=e,o(3,r)}))},function(e){b[e?"unshift":"push"]((()=>{m=e,o(4,m)}))},function(e){b[e?"unshift":"push"]((()=>{a=e,o(5,a)}))}]}class M extends e{constructor(e){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#general-img{top:0rem}#groups-img{top:0.3rem}#coops-img{top:0rem}#parties-img{top:0rem}#logout-img{width:1.5rem}#logout-button{padding-top:1rem;padding-left:0.1rem}#left-column{position:relative;display:flex;flex-direction:column;width:15.2rem;padding:2rem;border-radius:0.64rem 0.64rem 0.64rem 0.64rem;gap:1rem}.icons{position:relative;width:1.8rem}#left-column button span{position:absolute;padding-left:3.4rem;margin-top:0rem;font-family:var(--sans-serif,sans-serif)}#left-column button{display:flex;flex-direction:row}#main-column{padding:1rem 2rem 1rem 2rem;height:100%;width:100%;border-radius:0 0.64rem 0.64rem 0;flex-grow:1;flex-shrink:1;min-height:20rem}pane-aligner{--width-main:800px;--width-left:10.5rem}@media only screen and (max-width: 1340px){#left-column{position:relative;margin-left:0rem;width:100%;border-radius:0.64rem 0.64rem 0rem 0}#main-column{border-radius:0.64rem;padding:3rem 0.5rem;padding-bottom:1.5rem;border-radius:0rem 0rem 0.64rem 0.64rem;width:100%}#logout-button{position:relative;bottom:0}#left-column button{margin-left:auto;margin-right:auto;width:10rem}#logout-button{padding-top:1rem;margin-bottom:0rem}}</style>",t(this,{target:this.shadowRoot,props:o(this.attributes),customElement:!0},H,k,i,{},null,[-1,-1]),e&&e.target&&n(e.target,this,e.anchor)}}customElements.define("profile-component",M);export{M as default};
