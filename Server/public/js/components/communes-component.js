import{S as t,i as n,a as o,b as e,s as r,q as m,n as s,g as a,t as c,o as i,e as l,w as p,c as u,d,u as g,v as f,f as h,x as b,y as j}from"./index-6e99513e.js";import{w as x}from"./index-3db98739.js";import{loadLocaleContent as y,getData as v}from"../../../../../../../../../js/libraries/serverTools.js";import{addMarkersEntries as w,translate as k}from"../../../../../../../../../js/libraries/mapTools.js";import{addCommunePinContent as z}from"../../../../../../../../../js/mapFuncs.js";import"../../../../../../../../../js/components/map-component.js";function N(t,n,o){const e=t.slice();return e[12]=n[o][0],e[3]=n[o][1],e}function O(t,n,o){const e=t.slice();return e[15]=n[o],e}function T(t){let n,o,r,m,s,c,i,x,y,v,w,k,z,O,T,C,E,R,S,q,A=t[1].communes+"",F=t[1].p1+"",G=t[1].subheading1+"",H=t[1]["map-prompt"]+"",J=Object.entries(t[0]),K=[];for(let n=0;n<J.length;n+=1)K[n]=D(N(t,J,n));return{c(){n=l("div"),o=l("div"),r=l("h1"),m=p(A),s=u(),c=l("img"),x=u(),y=l("p"),v=p(F),w=u(),k=l("h3"),z=p(G),O=u(),T=l("map-component"),E=u(),R=l("p"),S=p(H),q=u();for(let t=0;t<K.length;t+=1)K[t].c();d(c,"id","communes-img"),g(c.src,i="/img/common/communes.svg")||d(c,"src","/img/common/communes.svg"),d(c,"alt","commune"),d(y,"class","description"),f(T,"id","map"),f(T,"callback",C=t[10]),d(R,"id","add-prompt"),d(o,"id","text-container"),d(n,"id","container")},m(t,a){e(t,n,a),h(n,o),h(o,r),h(r,m),h(o,s),h(o,c),h(o,x),h(o,y),h(y,v),h(o,w),h(o,k),h(k,z),h(o,O),h(o,T),h(o,E),h(o,R),h(R,S),h(o,q);for(let t=0;t<K.length;t+=1)K[t].m(o,null)},p(t,n){if(2&n&&A!==(A=t[1].communes+"")&&b(m,A),2&n&&F!==(F=t[1].p1+"")&&b(v,F),2&n&&G!==(G=t[1].subheading1+"")&&b(z,G),2&n&&C!==(C=t[10])&&f(T,"callback",C),2&n&&H!==(H=t[1]["map-prompt"]+"")&&b(S,H),771&n){let e;for(J=Object.entries(t[0]),e=0;e<J.length;e+=1){const r=N(t,J,e);K[e]?K[e].p(r,n):(K[e]=D(r),K[e].c(),K[e].m(o,null))}for(;e<K.length;e+=1)K[e].d(1);K.length=J.length}},d(t){t&&a(n),j(K,t)}}}function C(t){let n,o,r,m,s,c,i,g,f,j,x,y,v,w,k,z,N,O,T,C,D,E,R,S,q,A,F=t[1].location+"",G=t[9](t[15])+"",H=t[1].status+"",J=t[1][t[15].status]+"",K=t[1].members+"",L=t[15].members+"",M=t[1].contact+"",Q=t[15].contact+"";return{c(){n=l("div"),o=l("p"),r=l("b"),m=p(F),s=p(": "),c=p(G),i=u(),g=l("p"),f=l("b"),j=p(H),x=p(": "),y=p(J),v=u(),w=l("p"),k=l("b"),z=p(K),N=p(": "),O=p(L),T=u(),C=l("p"),D=l("b"),E=p(M),R=p(": "),S=l("a"),q=p(Q),d(S,"href",A=t[15].contact),d(S,"target",";_blank;"),d(S,"rel","noreferrer"),d(n,"class","location-info")},m(t,a){e(t,n,a),h(n,o),h(o,r),h(r,m),h(r,s),h(o,c),h(n,i),h(n,g),h(g,f),h(f,j),h(f,x),h(g,y),h(n,v),h(n,w),h(w,k),h(k,z),h(k,N),h(w,O),h(n,T),h(n,C),h(C,D),h(D,E),h(D,R),h(C,S),h(S,q)},p(t,n){2&n&&F!==(F=t[1].location+"")&&b(m,F),1&n&&G!==(G=t[9](t[15])+"")&&b(c,G),2&n&&H!==(H=t[1].status+"")&&b(j,H),3&n&&J!==(J=t[1][t[15].status]+"")&&b(y,J),2&n&&K!==(K=t[1].members+"")&&b(z,K),1&n&&L!==(L=t[15].members+"")&&b(O,L),2&n&&M!==(M=t[1].contact+"")&&b(E,M),1&n&&Q!==(Q=t[15].contact+"")&&b(q,Q),1&n&&A!==(A=t[15].contact)&&d(S,"href",A)},d(t){t&&a(n)}}}function D(t){let n,o,r,m,s,c=t[8](t[12])+"",i=t[3],g=[];for(let n=0;n<i.length;n+=1)g[n]=C(O(t,i,n));return{c(){n=l("h4"),o=p(c),r=u(),m=l("div");for(let t=0;t<g.length;t+=1)g[t].c();s=u(),d(n,"class","country-name"),d(m,"class","country-block")},m(t,a){e(t,n,a),h(n,o),e(t,r,a),e(t,m,a);for(let t=0;t<g.length;t+=1)g[t].m(m,null);h(m,s)},p(t,n){if(1&n&&c!==(c=t[8](t[12])+"")&&b(o,c),515&n){let o;for(i=t[3],o=0;o<i.length;o+=1){const e=O(t,i,o);g[o]?g[o].p(e,n):(g[o]=C(e),g[o].c(),g[o].m(m,s))}for(;o<g.length;o+=1)g[o].d(1);g.length=i.length}},d(t){t&&a(n),t&&a(r),t&&a(m),j(g,t)}}}function E(t){let n,o=3==t[2]&&T(t);return{c(){o&&o.c(),n=m()},m(t,r){o&&o.m(t,r),e(t,n,r)},p(t,e){3==t[2]?o?o.p(t,e):(o=T(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},d(t){o&&o.d(t),t&&a(n)}}}function R(t){let n,o=t[2],c=E(t);return{c(){c.c(),n=m(),this.c=s},m(t,o){c.m(t,o),e(t,n,o)},p(t,[e]){4&e&&r(o,o=t[2])?(c.d(1),c=E(t),c.c(),c.m(n.parentNode,n)):c.p(t,e)},i:s,o:s,d(t){t&&a(n),c.d(t)}}}function S(t,n,o){let e,r,m=x(0);c(t,m,(t=>o(2,r=t)));let s,a,l=x({});c(t,l,(t=>o(1,e=t)));let p=y(l,"communes-component",m);y(l,"countries",m);function u(t,n,o){let e=t([22,0],2);w(s,a,e,n,o,z,"red",{enableCountryGrouping:!0})}v("/assets/communes.json",(t=>{o(3,s=JSON.parse(t)),o(0,a={});for(let t of s){let n=t.country;null==t.contact&&(t.contact="https://discord.gg/Qk8KUk787z"),n in a?a[n].push(t):o(0,a[n]=[t],a)}m.update((t=>t+1))})),i((()=>{}));return[a,e,r,s,m,l,p,u,function(t){return"en"==p?t:k(e,t)},function(t){return[t.country,t.state,t.town].filter((t=>null!=t)).map((t=>"en"==p?t:k(e,t))).join(", ")},t=>u(t,e,p)]}class q extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';.description{margin-bottom:1rem}#add-prompt{margin-bottom:2rem}#communes-img{position:absolute;width:11.5rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}.country-name{margin-bottom:0.5rem}.country-block{margin-bottom:2rem}.location-info{position:relative;margin-bottom:2rem}.location-info p{margin-bottom:0}a{color:#DD1C1A}#map{--height:30rem;--width:100%;--margin-bottom:0,5rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}h3{margin-top:1rem;margin-bottom:1rem}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container p{text-align:justify}</style>",n(this,{target:this.shadowRoot,props:o(this.attributes),customElement:!0},S,R,r,{},null),t&&t.target&&e(t.target,this,t.anchor)}}customElements.define("communes-component",q);export{q as default};
