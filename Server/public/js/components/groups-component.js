import{S as t,i as o,a as n,b as e,s as r,e as a,n as i,d as s,c as m,o as c,f as l,t as p,g,h,j as u,k as d,l as f,m as b,p as x}from"./index-4348483d.js";import{w as j}from"./index-71440b21.js";import{groups as v,addMarkersGroups as w}from"../../../../../../../../../js/groups.js";import{loadLocaleContent as k}from"../../../../../../../../../js/libraries/serverTools.js";import"../../../../../../../../../js/components/map-component.js";function y(t,o,n){const e=t.slice();return e[6]=o[n],e}function z(t){let o,n,r,a,i,m,c,j,w,k,z,E,O,R,T,A,C,H,L,M,N=t[0].heading+"",S=t[0].p1+"",_=t[0].p2+"",q=t[0].subheading1+"",B=v,F=[];for(let o=0;o<B.length;o+=1)F[o]=D(y(t,B,o));return{c(){o=l("div"),n=l("div"),r=l("h1"),a=p(N),i=g(),m=l("img"),j=g(),w=l("p"),k=p(S),z=g(),E=l("p"),O=p(_),R=g(),T=l("h3"),A=p(q),C=g(),H=l("map-component"),M=g();for(let t=0;t<F.length;t+=1)F[t].c();h(m,"id","groups-img"),u(m.src,c="/img/common/groups.svg")||h(m,"src","/img/common/groups.svg"),h(m,"alt","groups"),d(H,"id","map"),d(H,"callback",L=t[5]),h(n,"id","text-container"),h(o,"id","container")},m(t,s){e(t,o,s),f(o,n),f(n,r),f(r,a),f(n,i),f(n,m),f(n,j),f(n,w),f(w,k),f(n,z),f(n,E),f(E,O),f(n,R),f(n,T),f(T,A),f(n,C),f(n,H),f(n,M);for(let t=0;t<F.length;t+=1)F[t].m(n,null)},p(t,o){if(1&o&&N!==(N=t[0].heading+"")&&b(a,N),1&o&&S!==(S=t[0].p1+"")&&b(k,S),1&o&&_!==(_=t[0].p2+"")&&b(O,_),1&o&&q!==(q=t[0].subheading1+"")&&b(A,q),1&o&&L!==(L=t[5])&&d(H,"callback",L),1&o){let e;for(B=v,e=0;e<B.length;e+=1){const r=y(t,B,e);F[e]?F[e].p(r,o):(F[e]=D(r),F[e].c(),F[e].m(n,null))}for(;e<F.length;e+=1)F[e].d(1);F.length=B.length}},d(t){t&&s(o),x(F,t)}}}function D(t){let o,n,r,a,i,m,c,u,d,x,j,v,w,k,y,z,D,E,O,R,T=t[0].location+"",A=t[0][t[6].location[0]]+"",C=t[0].members+"",H=t[6].members+"",L=t[0].contact+"",M=t[0][t[6].contact[1]]+"";return{c(){o=l("div"),n=l("p"),r=l("b"),a=p(T),i=p(": "),m=p(A),c=g(),u=l("p"),d=l("b"),x=p(C),j=p(": "),v=p(H),w=g(),k=l("p"),y=l("b"),z=p(L),D=p(": "),E=l("a"),O=p(M),R=g(),h(E,"href",t[6].contact[0]),h(E,"target",";_blank;"),h(E,"rel","noreferrer"),h(o,"class","location-info")},m(t,s){e(t,o,s),f(o,n),f(n,r),f(r,a),f(r,i),f(n,m),f(o,c),f(o,u),f(u,d),f(d,x),f(d,j),f(u,v),f(o,w),f(o,k),f(k,y),f(y,z),f(y,D),f(k,E),f(E,O),f(o,R)},p(t,o){1&o&&T!==(T=t[0].location+"")&&b(a,T),1&o&&A!==(A=t[0][t[6].location[0]]+"")&&b(m,A),1&o&&C!==(C=t[0].members+"")&&b(x,C),1&o&&L!==(L=t[0].contact+"")&&b(z,L),1&o&&M!==(M=t[0][t[6].contact[1]]+"")&&b(O,M)},d(t){t&&s(o)}}}function E(t){let o,n=0!=Object.keys(t[0]).length,r=n&&z(t);return{c(){r&&r.c(),o=a(),this.c=i},m(t,n){r&&r.m(t,n),e(t,o,n)},p(t,[e]){1&e&&(n=0!=Object.keys(t[0]).length),n?r?r.p(t,e):(r=z(t),r.c(),r.m(o.parentNode,o)):r&&(r.d(1),r=null)},i:i,o:i,d(t){r&&r.d(t),t&&s(o)}}}function O(t,o,n){let e,r,a=j({});m(t,a,(t=>n(0,e=t)));let i=k(a,"groups-component",r);function s(t,o){let n=t([51.505,-.09],2);w(n,o)}c((()=>{}));return[e,r,a,i,s,t=>s(t,e)]}class R extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#groups-img{position:absolute;width:14rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}.location-info{margin-bottom:2rem}.location-info p{margin-bottom:0}a{color:#DD1C1A}#map{--height:30rem;--width:100%;--margin-bottom:3rem}#text-container{position:relative;max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}h3{margin-bottom:1rem}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container>div>p{margin-bottom:1rem}#container p{text-align:justify}</style>",o(this,{target:this.shadowRoot,props:n(this.attributes),customElement:!0},O,E,r,{},null),t&&t.target&&e(t.target,this,t.anchor)}}customElements.define("groups-component",R);export{R as default};
