import{S as e,i as o,a as t,b as n,s as i,e as a,n as r,d as s,c as l,o as c,f as d,g as m,t as h,h as p,j as g,l as u,u as f,m as b,p as v,x as k,v as w}from"./index-ce8c147b.js";import{w as y}from"./index-f2dbf8ff.js";import{loadLocaleContent as x,getLocale as j,locales as z}from"../../../../../../../../../js/libraries/serverTools.js";function O(e,o,t){const n=e.slice();return n[14]=o[t][0],n[15]=o[t][1],n}function T(e){let o,t,i,a,r,l,c,w,y,x,j,T,L,M,N,S,E,R,U,I,X,q,A,B,C,D,F,G,J,K,P,Q,V,W,Y,Z,$,_,ee,oe,te,ne,ie,ae,re=e[3].orgName+"",se=e[3].manifesto+"",le=e[3].joinUs+"",ce=e[3].groups+"",de=e[3].communities+"",me=e[3].cooperatives+"",he=e[3].partners+"",pe=Object.entries(z),ge=[];for(let o=0;o<pe.length;o+=1)ge[o]=H(O(e,pe,o));return{c(){o=d("header"),t=d("input"),i=m(),a=d("label"),a.innerHTML='<span id="hamb-line"></span>',r=m(),l=d("a"),c=d("img"),y=m(),x=d("span"),j=h(re),T=m(),L=d("nav"),M=d("ul"),N=d("li"),S=d("a"),E=h(se),R=m(),U=d("li"),I=d("a"),X=h(le),q=m(),A=d("li"),B=d("a"),C=h(ce),D=m(),F=d("li"),G=d("a"),J=h(de),K=m(),P=d("li"),Q=d("a"),V=h(me),W=m(),Y=d("li"),Z=d("a"),$=h(he),_=m(),ee=d("li"),oe=d("button"),oe.innerHTML='<picture><source srcset="/img/common/globe.webp"/> \n                                <source srcset="/img/common/globe.png"/> \n                                <img id="locales-img" alt="globe"/></picture>',te=m(),ne=d("div");for(let e=0;e<ge.length;e+=1)ge[e].c();p(t,"type","checkbox"),p(t,"id","side-menu"),p(a,"id","hamb"),p(a,"for","side-menu"),g(c.src,w="/img/common/flag.png")||p(c,"src","/img/common/flag.png"),p(c,"id","navbar-logo"),p(c,"alt","logo"),p(x,"id","navbar-logo-text"),p(l,"id","logo-container"),p(l,"href","/"+e[5][0]+"/"),p(S,"href","/"+e[5]+"/manifesto"),p(I,"href","/"+e[5]+"/join-us"),p(B,"href","/"+e[5]+"/groups"),p(G,"href","/"+e[5]+"/communities"),p(Q,"href","/"+e[5]+"/cooperatives"),p(Z,"href","/"+e[5]+"/partners"),p(ee,"id","locales"),p(ne,"id","locales-dropdown"),p(M,"id","menu"),p(L,"id","nav"),p(o,"id","navbar")},m(s,d){n(s,o,d),u(o,t),e[10](t),u(o,i),u(o,a),u(o,r),u(o,l),u(l,c),u(l,y),u(l,x),u(x,j),u(o,T),u(o,L),u(L,M),u(M,N),u(N,S),u(S,E),u(M,R),u(M,U),u(U,I),u(I,X),u(M,q),u(M,A),u(A,B),u(B,C),u(M,D),u(M,F),u(F,G),u(G,J),u(M,K),u(M,P),u(P,Q),u(Q,V),u(M,W),u(M,Y),u(Y,Z),u(Z,$),u(M,_),u(M,ee),u(ee,oe),u(M,te),u(M,ne);for(let e=0;e<ge.length;e+=1)ge[e].m(ne,null);e[12](ne),e[13](o),ie||(ae=[f(t,"click",e[7]),f(oe,"click",e[8])],ie=!0)},p(e,o){if(8&o&&re!==(re=e[3].orgName+"")&&b(j,re),8&o&&se!==(se=e[3].manifesto+"")&&b(E,se),8&o&&le!==(le=e[3].joinUs+"")&&b(X,le),8&o&&ce!==(ce=e[3].groups+"")&&b(C,ce),8&o&&de!==(de=e[3].communities+"")&&b(J,de),8&o&&me!==(me=e[3].cooperatives+"")&&b(V,me),8&o&&he!==(he=e[3].partners+"")&&b($,he),512&o){let t;for(pe=Object.entries(z),t=0;t<pe.length;t+=1){const n=O(e,pe,t);ge[t]?ge[t].p(n,o):(ge[t]=H(n),ge[t].c(),ge[t].m(ne,null))}for(;t<ge.length;t+=1)ge[t].d(1);ge.length=pe.length}},d(t){t&&s(o),e[10](null),v(ge,t),e[12](null),e[13](null),ie=!1,k(ae)}}}function H(e){let o,t,i,a,r=e[15]+"";function l(){return e[11](e[14])}return{c(){o=d("button"),t=h(r)},m(e,r){n(e,o,r),u(o,t),i||(a=f(o,"click",l),i=!0)},p(o,t){e=o},d(e){e&&s(o),i=!1,a()}}}function L(e){let o,t=0!=Object.keys(e[3]).length,i=t&&T(e);return{c(){i&&i.c(),o=a(),this.c=r},m(e,t){i&&i.m(e,t),n(e,o,t)},p(e,[n]){8&n&&(t=0!=Object.keys(e[3]).length),t?i?i.p(e,n):(i=T(e),i.c(),i.m(o.parentNode,o)):i&&(i.d(1),i=null)},i:r,o:r,d(e){i&&i.d(e),e&&s(o)}}}function M(e,o,t){let n,i,a,r,s,d=[],m=y({});function h(e){localStorage.setItem("locale",e);let o=location.href.split("/"),t=Object.keys(z);o=o.filter((e=>!t.includes(e)));let n=o.slice(0,o.length-1).join("/")+"/"+e+"/"+o[o.length-1];location.href=n}l(e,m,(e=>t(3,n=e))),x(m,"navbar-component",s,(e=>j(d,e))),c((()=>{}));return[i,a,r,n,s,d,m,function(){i.checked?t(1,a.style.background="white",a):setTimeout((()=>{t(1,a.style.position="relative",a),t(1,a.style.background="",a),t(1,a.style.boxShadow="",a)}),510)},function(){"block"==r.style.display?t(2,r.style.display="none",r):t(2,r.style.display="block",r)},h,function(e){w[e?"unshift":"push"]((()=>{i=e,t(0,i)}))},e=>h(e),function(e){w[e?"unshift":"push"]((()=>{r=e,t(2,r)}))},function(e){w[e?"unshift":"push"]((()=>{a=e,t(1,a)}))}]}class N extends e{constructor(e){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#navbar{position:relative;top:0;width:min(100%,116rem);z-index:1000000000;height:5.26rem}#navbar *{font-family:var(--sans-serif, sans-serif)}#logo-container{display:flex;position:absolute;margin-left:1rem;height:100%;max-height:5.26rem;color:black;z-index:1;flex-direction:row;flex-wrap:nowrap;align-items:center}#navbar-logo{height:3.5rem;width:3.5rem;object-fit:contain;border-radius:10rem}#navbar-logo-text{position:relative;width:auto;height:100%;line-height:400%;white-space:nowrap;text-align:center;font-size:1.4rem;color:#292222;font-family:var(--sans-serif, sans-serif);font-weight:400;padding-left:1.2rem}#nav{position:fixed;width:100%;height:100%;background-color:white;overflow:hidden;z-index:0}#menu a{display:block;padding:1.2rem;padding-top:1rem;padding-bottom:1rem;color:black;font-size:1.4rem}#menu a:hover{background-color:rgb(220, 220, 220)}#menu a:active{background-color:#f7aec0}#menu li{list-style-type:none}#nav{max-height:0}#hamb{position:absolute;cursor:pointer;right:0rem;padding:2.8rem 2rem;z-index:9999}#hamb-line{background:black;display:block;height:2px;position:relative;width:24px}#hamb-line::before,#hamb-line::after{background:black;content:'';display:block;height:100%;position:absolute;transition:all .2s ease-out;width:100%}#hamb-line::before{top:5px}#hamb-line::after{top:-5px}#side-menu{display:none}#side-menu:checked~nav{display:block;max-height:100%;padding-top:5.625rem}#side-menu:checked~#logo-container{position:fixed}#side-menu:checked~#hamb{position:fixed}#side-menu:checked~#logo-container{position:fixed}#side-menu:checked~#hamb #hamb-line{background:transparent}#side-menu:checked~#hamb #hamb-line::before{transform:rotate(-45deg);top:0}#side-menu:checked~#hamb #hamb-line::after{transform:rotate(45deg);top:0}#locales{position:relative}#locales button{width:100%;text-align:left;height:4rem}#locales button:hover{opacity:0.5}#locales-img{position:relative;top:0rem;height:2rem;margin-left:1.2rem}#locales-dropdown{position:absolute;display:none;top:5.6rem;right:1.8rem;border:#404040 solid 0.1rem;padding:1.4rem;background-color:white}#locales-dropdown button{display:block;font-family:var(--sans-serif,sans-serif);font-size:1.3rem;width:100%}#locales-dropdown button:hover{color:rgb(127, 127, 127)}#locales-dropdown>:first-child{padding-bottom:0.5rem}#locales-dropdown>:nth-child(2){padding-top:0.5rem}@media only screen and (min-width: 1500px){#navbar{position:relative;width:min(95%,116rem);left:50%;transform:translateX(-50%)}#nav{max-height:none;top:0;position:relative;float:right;width:fit-content;background-color:transparent;overflow:visible}#side-menu:checked~nav{padding-top:0}#menu li{float:left}#menu a:hover{background-color:transparent;color:rgb(127, 127, 127)}#menu a{padding:1.2rem;padding-top:1.9rem;padding-bottom:1.9rem}#hamb{display:none}#locales{position:relative;margin-right:1.8rem}#locales-img{top:0.9rem}#locales-dropdown{top:5,7rem}}</style>",o(this,{target:this.shadowRoot,props:t(this.attributes),customElement:!0},M,L,i,{},null),e&&e.target&&n(e.target,this,e.anchor)}}customElements.define("navbar-component",N);export{N as default};
