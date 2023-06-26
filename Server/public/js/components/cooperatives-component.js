import{S as t,i as e,a as o,b as n,s as i,e as r,c as s,n as a,d as c,f as m,k as l,g as p,h as g,j as h,o as d,t as f}from"./index-95aedb1a.js";import{coops as u,addMarkersCoops as b}from"../../../../../../../../../js/coops.js";import"../../../../../../../../../js/components/map-component.js";function x(t,e,o){const n=t.slice();return n[1]=e[o],n}function w(t){let e,o,i,m,l,h,d,u,b,x,w,v,k,C,y,j,z,W,E,D,L,M,R,S,T,_,A,B,H,N,O,q,F,G,I,J,K,P,Q,U,V,X,Y,Z,$=t[1].name+"",tt=t[1].location[0]+"",et=t[1].market+"",ot=t[1].workers+"",nt=t[1].status+"",it=t[1].website+"",rt=t[1].contact[1]+"",st=t[1].description+"";return{c(){e=r("div"),o=r("div"),i=r("div"),m=r("p"),l=r("b"),l.textContent="Name: ",h=f($),d=s(),u=r("p"),b=r("b"),b.textContent="Location: ",x=f(tt),w=s(),v=r("p"),k=r("b"),k.textContent="Market: ",C=f(et),y=s(),j=r("p"),z=r("b"),z.textContent="Workers: ",W=f(ot),E=s(),D=r("p"),L=r("b"),L.textContent="Status: ",M=f(nt),R=s(),S=r("p"),T=r("b"),T.textContent="Website: ",_=r("a"),A=f(it),B=s(),H=r("p"),N=r("b"),N.textContent="Contact: ",O=r("a"),q=f(rt),F=s(),G=r("picture"),I=r("source"),J=s(),K=r("source"),P=s(),Q=r("img"),U=s(),V=r("p"),X=r("b"),X.textContent="Description: ",Y=f(st),Z=s(),c(_,"href","https://www."+t[1].website),c(_,"target","_blank"),c(_,"rel","noreferrer"),c(O,"href",t[1].contact[0]),c(O,"target",";_blank;"),c(O,"rel","noreferrer"),c(I,"srcset","/img/coops/"+t[1].logo+".webp"),c(K,"srcset","/img/coops/"+t[1].logo+".png"),c(Q,"class","coop-logo"),c(Q,"alt","logo"),c(e,"class","location-info")},m(t,r){n(t,e,r),p(e,o),p(o,i),p(i,m),p(m,l),p(m,h),p(i,d),p(i,u),p(u,b),p(u,x),p(i,w),p(i,v),p(v,k),p(v,C),p(i,y),p(i,j),p(j,z),p(j,W),p(i,E),p(i,D),p(D,L),p(D,M),p(i,R),p(i,S),p(S,T),p(S,_),p(_,A),p(i,B),p(i,H),p(H,N),p(H,O),p(O,q),p(o,F),p(o,G),p(G,I),p(G,J),p(G,K),p(G,P),p(G,Q),p(e,U),p(e,V),p(V,X),p(V,Y),p(e,Z)},p:a,d(t){t&&g(e)}}}function v(t){let e,o,i,d,f,b,v,k,C,y,j,z,W,E,D,L,M,R=u,S=[];for(let e=0;e<R.length;e+=1)S[e]=w(x(t,R,e));return{c(){e=r("div"),o=r("div"),i=r("h1"),i.textContent="Cooperatives",d=s(),f=r("img"),v=s(),k=r("p"),k.textContent="We establish worker cooperatives that embody a transformative business model where employees own and control the enterprise. Each worker has a voice in decision-making, and profits are distributed based on individual contributions. This participatory structure fosters ownership, motivation, and job satisfaction, creating a more fulfilling work experience as well as challenging the wealth concentration in traditional capitalist businesses.",C=s(),y=r("p"),y.textContent="By focusing on employees' needs, our cooperatives create supportive and sustainable work environments that foster social cohesion and job security. We also prioritize the interests of local communities, taking a long-term perspective. With workers making decisions, we avoid harmful short-term profit-driven strategies and instead reinvest our profits, contributing to community development and resilience.",j=s(),z=r("h3"),z.textContent="Our cooperatives",W=s(),E=r("map-component"),D=s(),L=r("h4"),L.textContent="Europe",M=s();for(let t=0;t<S.length;t+=1)S[t].c();this.c=a,c(f,"id","coops-img"),m(f.src,b="/img/common/coops.svg")||c(f,"src","/img/common/coops.svg"),c(f,"alt","coops"),l(E,"id","map"),l(E,"callback",t[0]),c(o,"id","text-container"),c(e,"id","container")},m(t,r){n(t,e,r),p(e,o),p(o,i),p(o,d),p(o,f),p(o,v),p(o,k),p(o,C),p(o,y),p(o,j),p(o,z),p(o,W),p(o,E),p(o,D),p(o,L),p(o,M);for(let t=0;t<S.length;t+=1)S[t].m(o,null)},p(t,[e]){if(0&e){let n;for(R=u,n=0;n<R.length;n+=1){const i=x(t,R,n);S[n]?S[n].p(i,e):(S[n]=w(i),S[n].c(),S[n].m(o,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=R.length}},i:a,o:a,d(t){t&&g(e),h(S,t)}}}function k(t){return d((()=>{})),[function(t){let e=t([51.505,-.09],3);b(e)}]}class C extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#coops-img{position:absolute;width:10.5rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}.location-info>:first-child{display:flex;align-content:center;width:100%;justify-content:space-between;gap:3rem;align-items:center}.location-info>:first-child>:first-child{flex:none}.coop-logo{position:relative;right:0;max-height:8rem;max-width:100%}h4{margin-bottom:2rem}.location-info{position:relative;margin-bottom:2rem}.location-info p{margin-bottom:0}a{font-size:1.15rem;color:#DD1C1A}#map{--height:30rem;--width:100%;--margin-bottom:3rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.5rem;text-align:center}h3{margin-bottom:1rem}#container{margin:auto;max-width:1200px;margin-top:1rem;margin-bottom:4rem}#container>div>p{margin-bottom:1rem}#container p{font-size:1.15rem;text-align:justify}</style>",e(this,{target:this.shadowRoot,props:o(this.attributes),customElement:!0},k,v,i,{},null),t&&t.target&&n(t.target,this,t.anchor)}}customElements.define("cooperatives-component",C);export{C as default};
