import{S as t,i as e,a as n,b as i,s as l,e as o,n as r,d as s,g as a,h as c,o as d,t as m,c as u,f,m as h,p as g,j as p,r as b,w,x,H as y}from"./index-95aedb1a.js";import{getData as v}from"../../../../../../../../../js/libraries/serverTools.js";import{px2rem as k}from"../../../../../../../../../js/libraries/miscTools.js";function T(t,e,n){const i=t.slice();return i[24]=e[n],i[25]=e,i[26]=n,i}function H(t,e,n){const i=t.slice();return i[27]=e[n],i}function L(t,e,n){const i=t.slice();return i[27]=e[n],i}function j(t,e,n){const i=t.slice();return i[32]=e[n],i[33]=e,i[34]=n,i}function I(t,e,n){const i=t.slice();return i[35]=e[n],i[36]=e,i[37]=n,i}function M(t){let e,n,l,r,d,f,h=t[32].name+"",p=t[32];const b=()=>t[15](n,p),w=()=>t[15](null,p);function x(){return t[16](t[32])}return{c(){e=o("div"),n=o("button"),l=m(h),r=u(),s(n,"class","level0 heading-button"),s(e,"class","heading-button-wrapper")},m(t,o){i(t,e,o),a(e,n),a(n,l),b(),a(e,r),d||(f=g(n,"click",x),d=!0)},p(e,n){p!==(t=e)[32]&&(w(),p=t[32],b())},d(t){t&&c(e),w(),d=!1,f()}}}function z(t){let e,n=t[32],l=[];for(let e=0;e<n.length;e+=1)l[e]=A(I(t,n,e));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=w()},m(t,n){for(let e=0;e<l.length;e+=1)l[e].m(t,n);i(t,e,n)},p(t,i){if(784&i[0]){let o;for(n=t[32],o=0;o<n.length;o+=1){const r=I(t,n,o);l[o]?l[o].p(r,i):(l[o]=A(r),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(t){p(l,t),t&&c(e)}}}function A(t){let e,n,l,r,d,f,h=t[35].name+"",p=t[35];const b=()=>t[13](n,p),w=()=>t[13](null,p);function x(){return t[14](t[35])}return{c(){e=o("div"),n=o("button"),l=m(h),r=u(),s(n,"class","level1 heading-button"),s(e,"class","heading-button-wrapper")},m(t,o){i(t,e,o),a(e,n),a(n,l),b(),a(e,r),d||(f=g(n,"click",x),d=!0)},p(e,n){p!==(t=e)[35]&&(w(),p=t[35],b())},d(t){t&&c(e),w(),d=!1,f()}}}function Y(t){let e;let n=function(t,e){return Array.isArray(t[32])?z:M}(t),l=n(t);return{c(){l.c(),e=w()},m(t,n){l.m(t,n),i(t,e,n)},p(t,e){l.p(t,e)},d(t){l.d(t),t&&c(e)}}}function E(t){let e,n,l,d=t[24]+"";return{c(){e=o("p"),n=new y(!1),l=u(),n.a=l,s(e,"class","margin-end")},m(t,o){i(t,e,o),n.m(d,e),a(e,l)},p:r,d(t){t&&c(e)}}}function S(t){let e,n=t[24].slice(2,t[24].length)+"";return{c(){e=o("h1")},m(t,l){i(t,e,l),e.innerHTML=n},p:r,d(t){t&&c(e)}}}function V(t){let e,n,l,r,d,m=t[24].line+"",f=t[24];const p=()=>t[20](n,f),b=()=>t[20](null,f);return{c(){e=o("button"),n=o("h2"),l=u(),s(n,"id",t[24].id),h(e,"display","block"),h(e,"width","100%")},m(o,s){i(o,e,s),a(e,n),n.innerHTML=m,p(),a(e,l),r||(d=g(e,"click",(function(){x(t[6].scrollIntoView({block:"start"},!0))&&t[6].scrollIntoView({block:"start"},!0).apply(this,arguments)})),r=!0)},p(e,n){f!==(t=e)[24]&&(b(),f=t[24],p())},d(t){t&&c(e),b(),r=!1,d()}}}function C(t){let e,n,l,r,d,m=t[24].line+"",f=t[24];const p=()=>t[19](n,f),b=()=>t[19](null,f);return{c(){e=o("button"),n=o("h3"),l=u(),s(n,"id",t[24].id),h(e,"display","block"),h(e,"width","100%")},m(o,s){i(o,e,s),a(e,n),n.innerHTML=m,p(),a(e,l),r||(d=g(e,"click",(function(){x(t[6].scrollIntoView({block:"start"},!0))&&t[6].scrollIntoView({block:"start"},!0).apply(this,arguments)})),r=!0)},p(e,n){f!==(t=e)[24]&&(b(),f=t[24],p())},d(t){t&&c(e),b(),r=!1,d()}}}function O(t){let e,n,l=t[24].ol,r=[];for(let e=0;e<l.length;e+=1)r[e]=R(H(t,l,e));return{c(){e=o("ol");for(let t=0;t<r.length;t+=1)r[t].c();n=u()},m(t,l){i(t,e,l);for(let t=0;t<r.length;t+=1)r[t].m(e,null);a(e,n)},p(t,i){if(128&i[0]){let o;for(l=t[24].ol,o=0;o<l.length;o+=1){const s=H(t,l,o);r[o]?r[o].p(s,i):(r[o]=R(s),r[o].c(),r[o].m(e,n))}for(;o<r.length;o+=1)r[o].d(1);r.length=l.length}},d(t){t&&c(e),p(r,t)}}}function N(t){let e,n,l=t[24].ul,r=[];for(let e=0;e<l.length;e+=1)r[e]=_(L(t,l,e));return{c(){e=o("ul");for(let t=0;t<r.length;t+=1)r[t].c();n=u()},m(t,l){i(t,e,l);for(let t=0;t<r.length;t+=1)r[t].m(e,null);a(e,n)},p(t,i){if(128&i[0]){let o;for(l=t[24].ul,o=0;o<l.length;o+=1){const s=L(t,l,o);r[o]?r[o].p(s,i):(r[o]=_(s),r[o].c(),r[o].m(e,n))}for(;o<r.length;o+=1)r[o].d(1);r.length=l.length}},d(t){t&&c(e),p(r,t)}}}function R(t){let e,n=t[27]+"";return{c(){e=o("li")},m(t,l){i(t,e,l),e.innerHTML=n},p:r,d(t){t&&c(e)}}}function _(t){let e,n,l=t[27]+"";return{c(){e=o("li"),n=m(l)},m(t,l){i(t,e,l),a(e,n)},p:r,d(t){t&&c(e)}}}function B(t){let e,n=""!==t[24]&&function(t){let e,n=function(t,e){return t[24],"ul"==Object.keys(t[24])[0]?N:(t[24],"ol"==Object.keys(t[24])[0]?O:(t[24],"h3"==t[24].type?C:(t[24],"h2"==t[24].type?V:"#"==t[24][0]?S:E)))}(t),l=n(t);return{c(){l.c(),e=w()},m(t,n){l.m(t,n),i(t,e,n)},p(t,e){l.p(t,e)},d(t){l.d(t),t&&c(e)}}}(t);return{c(){n&&n.c(),e=w()},m(t,l){n&&n.m(t,l),i(t,e,l)},p(t,e){""!==t[24]&&n.p(t,e)},d(t){n&&n.d(t),t&&c(e)}}}function F(t){let e,n,l,r,d,b,w,x,y,v,k,H=t[8],L=[];for(let e=0;e<H.length;e+=1)L[e]=Y(j(t,H,e));let I=t[7],M=[];for(let e=0;e<I.length;e+=1)M[e]=B(T(t,I,e));return{c(){e=o("div"),n=o("button"),l=m("TABLE OF CONTENTS\r\n                    "),r=o("img"),b=u(),w=o("div");for(let t=0;t<L.length;t+=1)L[t].c();x=u(),y=o("div");for(let t=0;t<M.length;t+=1)M[t].c();f(r.src,d="../assets/arrow_down.svg")||s(r,"src","../assets/arrow_down.svg"),s(r,"alt","arrow down"),h(r,"transform","scaleY(-1)"),s(n,"id","toggle-content"),s(w,"class","module"),s(e,"id","table-content"),s(y,"id","main")},m(o,s){i(o,e,s),a(e,n),a(n,l),a(n,r),t[10](r),t[11](n),a(e,b),a(e,w);for(let t=0;t<L.length;t+=1)L[t].m(w,null);t[17](w),t[18](e),i(o,x,s),i(o,y,s);for(let t=0;t<M.length;t+=1)M[t].m(y,null);v||(k=g(n,"click",t[12]),v=!0)},p(t,e){if(784&e[0]){let n;for(H=t[8],n=0;n<H.length;n+=1){const i=j(t,H,n);L[n]?L[n].p(i,e):(L[n]=Y(i),L[n].c(),L[n].m(w,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=H.length}if(224&e[0]){let n;for(I=t[7],n=0;n<I.length;n+=1){const i=T(t,I,n);M[n]?M[n].p(i,e):(M[n]=B(i),M[n].c(),M[n].m(y,null))}for(;n<M.length;n+=1)M[n].d(1);M.length=I.length}},d(n){n&&c(e),t[10](null),t[11](null),p(L,n),t[17](null),t[18](null),n&&c(x),n&&c(y),p(M,n),v=!1,k()}}}function q(t){let e,n,d=t[0],m=F(t);return{c(){e=o("div"),n=o("div"),m.c(),this.c=r,s(n,"id","text-container"),s(e,"id","container")},m(t,l){i(t,e,l),a(e,n),m.m(n,null)},p(t,e){1&e[0]&&l(d,d=t[0])?(m.d(1),m=F(t),m.c(),m.m(n,null)):m.p(t,e)},i:r,o:r,d(t){t&&c(e),m.d(t)}}}function D(t,e){"none"==e.style.display||""==e.style.display?(e.style.display="initial",t.style.transform="scaleY(-1)",localStorage.setItem("manifesto-hide-content","false")):(e.style.display="none",t.style.transform="",localStorage.setItem("manifesto-hide-content","true"))}function G(t,e,n){let i,l,o,r,s,a=[],c=[],m={},u=[],f=0,h=0;const g=["ul","ol"];function p(t){m[t].scrollIntoView({block:"start"},!0)}v("/assets/manifesto.txt",(function(t){let e,l=t.split(/\r?\n/),o=0;for(let t=0;t<l.length;t++){let n=l[t],i=g.map((t=>n.includes("<"+t+">"))).findIndex((t=>t));if(-1!=i){let e=g[i],o={};o[e]=[];let r="</"+e+">";for(;;){if(t+=1,n=l[t],n.includes(r)){a.push(o);break}o[e].push(n)}}else if("###"==n.slice(0,3)){let t=n.slice(4,n.length),i=t.toLowerCase().trim().replaceAll(" ","-");e.push({id:i,name:t,index:o}),o+=1,a.push({type:"h3",id:i,line:t,index:o})}else if("##"==n.slice(0,2)){let t=n.slice(3,n.length),i=t.toLowerCase().trim().replaceAll(" ","-");u.push({id:t.toLowerCase().trim().replaceAll(" ","-"),name:t,index:o}),o+=1,e=[],u.push(e),a.push({type:"h2",id:i,line:t,index:o})}else a.push(n)}n(0,i+=1)})),addEventListener("scroll",(t=>{let e=k(window.scrollY);if(e>f||e<5){if(s.offsetHeight<window.innerHeight)h=-Math.min(k(window.scrollY),5);else{let t=k(s.offsetHeight-window.innerHeight);h=-Math.min(k(window.scrollY),5+t+2.5)}n(6,s.style.marginTop=h+"rem",s)}else s.offsetHeight>window.innerHeight&&(h<-5?(h+=f-e,n(6,s.style.marginTop=h+"rem",s)):n(6,s.style.marginTop="-5rem",s));f=k(window.scrollY)})),d((()=>{let t=localStorage.getItem("manifesto-hide-content");null!=t&&null!=t&&"true"==t&&D(o,r)}));return[i,l,o,r,c,m,s,a,u,p,function(t){b[t?"unshift":"push"]((()=>{o=t,n(2,o)}))},function(t){b[t?"unshift":"push"]((()=>{l=t,n(1,l)}))},()=>D(o,r),function(t,e){b[t?"unshift":"push"]((()=>{c[e.index]=t,n(4,c)}))},t=>p(t.id),function(t,e){b[t?"unshift":"push"]((()=>{c[e.index]=t,n(4,c)}))},t=>p(t.id),function(t){b[t?"unshift":"push"]((()=>{r=t,n(3,r)}))},function(t){b[t?"unshift":"push"]((()=>{s=t,n(6,s)}))},function(t,e){b[t?"unshift":"push"]((()=>{m[e.id]=t,n(5,m)}))},function(t,e){b[t?"unshift":"push"]((()=>{m[e.id]=t,n(5,m)}))}]}class J extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#table-content{position:fixed;display:flex;flex-direction:column;border:#a9a9a9 0.1rem solid;border-radius:1rem;padding:2rem;padding-right:0.8rem;padding-bottom:1.5rem;margin-bottom:2rem;width:20rem;height:max-content}#toggle-content{position:relative;width:100%;font-size:1.3rem;font-family:var(--sans-serif,sans-serif);text-align:left;margin-bottom:1rem;font-weight:bold}#toggle-content img{position:absolute;top:0rem;right:0.8rem;width:1.5rem}.module{position:relative;display:inline-block;width:100%;height:max-content;padding-right:1.2rem}.heading-button-wrapper{position:relative}.heading-button{color:black;height:auto;width:100%;padding-top:0.5rem;padding-bottom:0.5rem;text-align:left;font-family:var(--sans-serif,sans-serif);font-size:1.3rem}.level0{position:relative;padding-left:0.5rem;z-index:1}.level1{position:relative;padding-left:1.5rem;z-index:1;margin-left:1rem;border-left:#a9a9a9 0.1rem solid}.heading-button:hover{background-color:hsla(344, 73%, 57%, 0.12)}.heading-button:active{background-color:hsla(344, 73%, 57%, 0.5)}h1{margin-bottom:1rem;font-size:2.5rem;text-align:center}h2{margin-bottom:1rem;text-align:center}h3{margin-bottom:1rem}#text-container{position:relative;display:grid;grid-template-columns:20rem 800px 20rem;grid-gap:2rem;max-width:calc(100vw - 4rem);margin:auto}#container{display:flex;align-content:center;margin:auto;max-width:min(1800px,100vw);margin-top:1rem;margin-bottom:4rem}#main{grid-column:2}#main>p{margin-bottom:1rem}#container p{font-size:1.15rem;text-align:justify}@media only screen and (max-width: 1080px){#text-container{position:relative;display:grid;grid-template-columns:auto;grid-gap:2rem;max-width:calc(100vw - 4rem);margin:auto}#table-content{position:relative;border:#a9a9a9 0.1rem solid;border-radius:1rem;padding:2rem;padding-bottom:1.5rem;margin-bottom:2rem;height:max-content;width:100%}#main{grid-column:1}}</style>",e(this,{target:this.shadowRoot,props:n(this.attributes),customElement:!0},G,q,l,{},null,[-1,-1]),t&&t.target&&i(t.target,this,t.anchor)}}customElements.define("manifesto-component",J);export{J as default};
