import{S as t,i as n,a as e,b as i,s as o,p as r,n as s,g as a,q as l,o as m,e as c,v as u,c as p,d,t as g,f as h,w as f,l as b,x as v,r as x}from"./index-db20528a.js";import{w as q}from"./index-720c0a59.js";import{loadLocaleContent as _}from"../../../../../../../../../js/libraries/serverTools.js";import{shuffleArray as z}from"../../../../../../../../../js/libraries/miscTools.js";function w(t,n,e){const i=t.slice();return i[19]=n[e],i[21]=e,i}function y(t){let n,e,r,s,l,m,b,v,x=t[5].heading+"",q=t[0],_=S(t);return{c(){n=c("div"),e=c("div"),r=c("h1"),s=u(x),l=p(),m=c("img"),v=p(),_.c(),d(m,"id","compass-img"),g(m.src,b="/img/common/compass.svg")||d(m,"src","/img/common/compass.svg"),d(m,"alt","compass"),d(e,"id","text-container"),d(n,"id","container")},m(t,o){i(t,n,o),h(n,e),h(e,r),h(r,s),h(e,l),h(e,m),h(e,v),_.m(e,null)},p(t,n){32&n&&x!==(x=t[5].heading+"")&&f(s,x),1&n&&o(q,q=t[0])?(_.d(1),_=S(t),_.c(),_.m(e,null)):_.p(t,n)},d(t){t&&a(n),_.d(t)}}}function k(t){let n,e,o,r,s,l,m,g,v,x,q,_,z,w,y,k,j,C,S,B,M,N,T,D;return{c(){n=c("p"),n.textContent="You are compatible with ...",e=p(),o=c("ul"),r=c("li"),s=u("capitalism by "),l=c("span"),m=u(t[2]),g=u("%"),v=p(),x=c("li"),q=u("vanguardism by "),_=c("span"),z=u(t[3]),w=u("%"),y=p(),k=c("li"),j=u("libertarian socialism by "),C=c("span"),S=u(t[4]),B=u("%"),M=p(),N=c("button"),N.textContent="back",d(o,"class","results-list"),d(N,"class","quiz-buttons")},m(a,c){i(a,n,c),i(a,e,c),i(a,o,c),h(o,r),h(r,s),h(r,l),h(l,m),h(r,g),h(o,v),h(o,x),h(x,q),h(x,_),h(_,z),h(x,w),h(o,y),h(o,k),h(k,j),h(k,C),h(C,S),h(k,B),i(a,M,c),i(a,N,c),T||(D=b(N,"click",t[16]),T=!0)},p(t,n){4&n&&f(m,t[2]),8&n&&f(z,t[3]),16&n&&f(S,t[4])},d(t){t&&a(n),t&&a(e),t&&a(o),t&&a(M),t&&a(N),T=!1,D()}}}function j(t){let n,e,o,r,s,l,m,g,q,_=t[5].qs[t[0]].q+"",z=t[5].qs[t[0]].as,y=[];for(let n=0;n<z.length;n+=1)y[n]=C(w(t,z,n));return{c(){n=c("p"),e=u(_),o=p(),r=c("div");for(let t=0;t<y.length;t+=1)y[t].c();s=p(),l=c("button"),l.textContent="back",m=c("button"),m.textContent="next",d(r,"class","quiz-inputs"),d(l,"class","quiz-buttons"),d(m,"class","quiz-buttons")},m(a,c){i(a,n,c),h(n,e),i(a,o,c),i(a,r,c);for(let t=0;t<y.length;t+=1)y[t].m(r,null);i(a,s,c),i(a,l,c),i(a,m,c),g||(q=[b(l,"click",t[14]),b(m,"click",t[15])],g=!0)},p(t,n){if(33&n&&_!==(_=t[5].qs[t[0]].q+"")&&f(e,_),35&n){let e;for(z=t[5].qs[t[0]].as,e=0;e<z.length;e+=1){const i=w(t,z,e);y[e]?y[e].p(i,n):(y[e]=C(i),y[e].c(),y[e].m(r,null))}for(;e<y.length;e+=1)y[e].d(1);y.length=z.length}},d(t){t&&a(n),t&&a(o),t&&a(r),v(y,t),t&&a(s),t&&a(l),t&&a(m),g=!1,x(q)}}}function C(t){let n,e,o,r,s,l,m,g,v,q=t[19][0]+"";function _(){return t[13](t[19])}return{c(){n=c("div"),e=c("input"),r=p(),s=c("button"),l=u(q),m=p(),d(e,"type","radio"),d(e,"id","option"+t[21]),d(e,"name","options"),e.__value=o=t[19][1],e.value=e.__value,t[12][0].push(e),d(s,"class","input-label"),d(s,"for","option"+t[21]),d(n,"class","radio-container")},m(o,a){i(o,n,a),h(n,e),e.checked=e.__value===t[1][t[0]],h(n,r),h(n,s),h(s,l),h(n,m),g||(v=[b(e,"change",t[11]),b(s,"click",_)],g=!0)},p(n,i){t=n,33&i&&o!==(o=t[19][1])&&(e.__value=o,e.value=e.__value),3&i&&(e.checked=e.__value===t[1][t[0]]),33&i&&q!==(q=t[19][0]+"")&&f(l,q)},d(i){i&&a(n),t[12][0].splice(t[12][0].indexOf(e),1),g=!1,x(v)}}}function S(t){let n;function e(t,n){return t[0]!=t[5].qs.length?j:k}let o=e(t),s=o(t);return{c(){s.c(),n=r()},m(t,e){s.m(t,e),i(t,n,e)},p(t,i){o===(o=e(t))&&s?s.p(t,i):(s.d(1),s=o(t),s&&(s.c(),s.m(n.parentNode,n)))},d(t){s.d(t),t&&a(n)}}}function B(t){let n,e=2==t[6]&&y(t);return{c(){e&&e.c(),n=r()},m(t,o){e&&e.m(t,o),i(t,n,o)},p(t,i){2==t[6]?e?e.p(t,i):(e=y(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&a(n)}}}function M(t){let n,e=t[6],l=B(t);return{c(){l.c(),n=r(),this.c=s},m(t,e){l.m(t,e),i(t,n,e)},p(t,[i]){64&i&&o(e,e=t[6])?(l.d(1),l=B(t),l.c(),l.m(n.parentNode,n)):l.p(t,i)},i:s,o:s,d(t){t&&a(n),l.d(t)}}}function N(t,n,e){let i,o,r=q(0);l(t,r,(t=>e(6,o=t)));let s=q({});l(t,s,(t=>e(5,i=t))),_(s,"countries",r),_(s,"compass-component",r,(function(t){for(let n of t.qs)z(n.as)}));let a=0,c=[],u="",p="",d="";function g(t){null!=c[t]&&a<i.qs.length&&(a==i.qs.length-1&&(e(2,u=Math.round(100*c.map((t=>t.includes("C"))).filter(Boolean).length/c.length).toString()),e(3,p=Math.round(100*c.map((t=>t.includes("V"))).filter(Boolean).length/c.length).toString()),e(4,d=Math.round(100*c.map((t=>t.includes("LS"))).filter(Boolean).length/c.length).toString())),e(0,a+=1))}function h(t){0!=a&&e(0,a-=1)}m((()=>{}));return[a,c,u,p,d,i,o,r,s,g,h,function(){c[a]=this.__value,e(1,c)},[[]],t=>e(1,c[a]=t[1],c),()=>h(),()=>g(a),()=>h()]}class T extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';.results-list{margin-left:2rem;margin-bottom:2rem}.results-list li{margin-bottom:0.5rem}.radio-container{display:grid;grid-template-columns:min-content auto;margin-bottom:1rem}.quiz-inputs{position:relative;margin-bottom:2rem}.quiz-inputs input{position:relative;top:-0.1rem;height:1.2rem;width:1.2rem;margin:auto;accent-color:#DD1C1A;cursor:pointer}.quiz-inputs button{font-family:var(--serif,serif);font-size:1.15rem;margin-left:1rem;position:relative;top:-0.2rem;text-align:left}.quiz-buttons:nth-of-type(1){margin-right:2rem}.quiz-buttons{font-size:1.3rem;color:white;padding:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem;background-color:#5B6970;border-radius:1rem}#compass-img{position:absolute;width:9rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}#map{--height:30rem;--width:100%;--margin-bottom:3rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container>div>p{margin-bottom:1rem}#container p{text-align:justify}</style>",n(this,{target:this.shadowRoot,props:e(this.attributes),customElement:!0},N,M,o,{},null),t&&t.target&&i(t.target,this,t.anchor)}}customElements.define("compass-component",T);export{T as default};
