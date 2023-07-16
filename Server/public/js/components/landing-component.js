import{S as t,i,a as o,b as e,s as r,e as n,n as s,d as m,c as a,o as c,w as p,f as g,g as d,t as l,h as u,j as h,v as f,k as v,l as w,m as x}from"./index-4348483d.js";import{w as b}from"./index-71440b21.js";import{addMarkersGroups as j,groupsMarkersLayer as T}from"../../../../../../../../../js/groups.js";import{addMarkersCoops as k,coopsMarkersLayer as y}from"../../../../../../../../../js/coops.js";import{addMarkersCommunes as U,communesMarkersLayer as z}from"../../../../../../../../../js/communes.js";import{addMarkersParties as N,partiesMarkersLayer as C}from"../../../../../../../../../js/parties.js";import{loadLocaleContent as A}from"../../../../../../../../../js/libraries/serverTools.js";import"../../../../../../../../../js/components/map-component.js";function E(t){let i,o,r,n,s,a,c,p,b,j,T,k,y,U,z,N,C,L,A,E,F,H,M,R,W,B,D,K,Q,S,_,q,G,I,J,O,P,V,X,Y,Z,$,tt,it,ot,et,rt,nt,st,mt,at,ct,pt,gt,dt,lt,ut,ht,ft,vt,wt,xt,bt,jt,Tt,kt,yt,Ut=t[3].top+"",zt=t[3].groupsTitle+"",Nt=t[3].groupsText+"",Ct=t[3].communesTitle+"",Lt=t[3].communesText+"",At=t[3].cooperativesTitle+"",Et=t[3].cooperativesText+"",Ft=t[3].partiesTitle+"",Ht=t[3].partiesText+"",Mt=t[3].findUs+"",Rt=t[3].whatNow+"",Wt=t[3].joinUs+"",Bt=t[3].talkWithUs+"";return{c(){i=g("div"),o=g("picture"),o.innerHTML='<source srcset="/img/crowd.webp"/> \n                <source srcset="/img/crowd.png"/> \n                <img id="crowd" alt="crowd"/>',r=d(),n=g("div"),s=g("p"),a=l(Ut),c=d(),p=g("div"),b=g("div"),j=g("a"),T=g("h2"),k=l(zt),y=d(),U=g("img"),N=d(),C=g("p"),L=l(Nt),A=d(),E=g("div"),F=g("a"),H=g("h2"),M=l(Ct),R=d(),W=g("img"),D=d(),K=g("p"),Q=l(Lt),S=d(),_=g("div"),q=g("a"),G=g("h2"),I=l(At),J=d(),O=g("img"),V=d(),X=g("p"),Y=l(Et),Z=d(),$=g("div"),tt=g("a"),it=g("h2"),ot=l(Ft),et=d(),rt=g("img"),st=d(),mt=g("p"),at=l(Ht),ct=d(),pt=g("h1"),gt=l(Mt),dt=d(),lt=g("map-component"),ht=d(),ft=g("h1"),vt=l(Rt),wt=d(),xt=g("div"),bt=g("a"),jt=l(Wt),Tt=d(),kt=g("a"),yt=l(Bt),u(j,"href","/"+t[6]+"/groups"),u(U,"id","groups-img"),h(U.src,z="/img/common/groups.svg")||u(U,"src","/img/common/groups.svg"),u(U,"alt","groups"),u(F,"href","/"+t[6]+"/communes"),u(W,"id","communes-img"),h(W.src,B="/img/common/commune.svg")||u(W,"src","/img/common/commune.svg"),u(W,"alt","communes"),u(q,"href","/"+t[6]+"/coops"),u(O,"id","coops-img"),h(O.src,P="/img/common/coops.svg")||u(O,"src","/img/common/coops.svg"),u(O,"alt","coops"),u(tt,"href","/"+t[6]+"/parties"),u(rt,"id","parties-img"),h(rt.src,nt="/img/common/parties.svg")||u(rt,"src","/img/common/parties.svg"),u(rt,"alt","coops"),u(p,"id","container-grid"),f(p,"--grid-width",t[1]),u(pt,"id","find-us"),v(lt,"id","map"),v(lt,"callback",ut=t[9]),v(lt,"colors",["#23AC20","#CA2437","#217BC9","#FFD326"]),u(bt,"class","link-button"),u(bt,"href","/"+t[6]+"/join-us"),u(kt,"class","link-button"),u(kt,"href","https://discord.gg/Qk8KUk787z"),u(kt,"target","_blank"),u(kt,"rel","noreferrer"),u(xt,"id","action-container"),u(n,"id","text-container"),u(i,"id","container")},m(m,g){e(m,i,g),w(i,o),w(i,r),w(i,n),w(n,s),w(s,a),w(n,c),w(n,p),w(p,b),w(b,j),w(j,T),w(T,k),w(b,y),w(b,U),w(b,N),w(b,C),w(C,L),w(p,A),w(p,E),w(E,F),w(F,H),w(H,M),w(E,R),w(E,W),w(E,D),w(E,K),w(K,Q),w(p,S),w(p,_),w(_,q),w(q,G),w(G,I),w(_,J),w(_,O),w(_,V),w(_,X),w(X,Y),w(p,Z),w(p,$),w($,tt),w(tt,it),w(it,ot),w($,et),w($,rt),w($,st),w($,mt),w(mt,at),t[8](p),w(n,ct),w(n,pt),w(pt,gt),w(n,dt),w(n,lt),w(n,ht),w(n,ft),w(ft,vt),w(n,wt),w(n,xt),w(xt,bt),w(bt,jt),w(xt,Tt),w(xt,kt),w(kt,yt)},p(t,i){8&i&&Ut!==(Ut=t[3].top+"")&&x(a,Ut),8&i&&zt!==(zt=t[3].groupsTitle+"")&&x(k,zt),8&i&&Nt!==(Nt=t[3].groupsText+"")&&x(L,Nt),8&i&&Ct!==(Ct=t[3].communesTitle+"")&&x(M,Ct),8&i&&Lt!==(Lt=t[3].communesText+"")&&x(Q,Lt),8&i&&At!==(At=t[3].cooperativesTitle+"")&&x(I,At),8&i&&Et!==(Et=t[3].cooperativesText+"")&&x(Y,Et),8&i&&Ft!==(Ft=t[3].partiesTitle+"")&&x(ot,Ft),8&i&&Ht!==(Ht=t[3].partiesText+"")&&x(at,Ht),2&i&&f(p,"--grid-width",t[1]),8&i&&Mt!==(Mt=t[3].findUs+"")&&x(gt,Mt),8&i&&ut!==(ut=t[9])&&v(lt,"callback",ut),8&i&&Rt!==(Rt=t[3].whatNow+"")&&x(vt,Rt),8&i&&Wt!==(Wt=t[3].joinUs+"")&&x(jt,Wt),8&i&&Bt!==(Bt=t[3].talkWithUs+"")&&x(yt,Bt)},d(o){o&&m(i),t[8](null)}}}function F(t){let i,o=6==t[2]&&E(t);return{c(){o&&o.c(),i=n()},m(t,r){o&&o.m(t,r),e(t,i,r)},p(t,e){6==t[2]?o?o.p(t,e):(o=E(t),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},d(t){o&&o.d(t),t&&m(i)}}}function H(t){let i,o=t[2],a=F(t);return{c(){a.c(),i=n(),this.c=s},m(t,o){a.m(t,o),e(t,i,o)},p(t,[e]){4&e&&r(o,o=t[2])?(a.d(1),a=F(t),a.c(),a.m(i.parentNode,i)):a.p(t,e)},i:s,o:s,d(t){t&&m(i),a.d(t)}}}function M(t,i,o){let e,r,n,s,m=b(0);a(t,m,(t=>o(2,e=t)));let g=b({});function d(t){o(1,s="1fr 1fr")}a(t,g,(t=>o(3,r=t))),A(g,"groups-component",m),A(g,"communes-component",m),A(g,"cooperatives-component",m),A(g,"parties-component",m),A(g,"countries",m);let l=A(g,"landing-component",m,d);function u(t,i){let o=t([22,0],2);j(o,i),U(o,i),k(o,i),N(o,i);let e={};e[i.groups]=T,e[i.communes]=z,e[i.cooperatives]=y,e[i.parties]=C,L.control.layers(null,e).addTo(o)}d(),c((()=>{}));return[n,s,e,r,m,g,l,u,function(t){p[t?"unshift":"push"]((()=>{n=t,o(0,n)}))},t=>u(t,r)]}class R extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#action-container{display:flex;justify-content:space-between;margin:auto;margin-top:2rem;max-width:34rem}.link-button{display:inline-block;font-size:1.6rem;font-family:var(--sans-serif,sans-serif);width:14rem;line-height:4rem;background:#cb1816;color:white;text-align:center}#map{--margin-top:1rem;--height:30rem;--width:100%;--margin-bottom:3rem}h1{font-size:2rem;text-align:center;margin-bottom:1rem}#container-grid>div>a>h2{text-align:center}#groups-img,#communes-img,#coops-img,#parties-img{position:absolute;left:50%;transform:translate(-50%);z-index:0;opacity:0.2;height:8rem}#coops-img{margin-top:0.5rem;height:7.5rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}#crowd{width:100%;margin-bottom:2rem}#container{margin:auto;max-width:800px;margin-top:2rem;margin-bottom:5rem}#container>div>p{margin-bottom:1rem}#container p{text-align:justify}#container-grid{display:grid;grid-template-columns:var(--grid-width);grid-template-rows:var(--grid-width);grid-gap:4rem;row-gap:2.5rem;margin-top:2rem;margin-bottom:1rem}#container-grid>div{position:relative}#container-grid>div>p{position:relative;margin-top:5rem;z-index:2}@media only screen and (max-width: 1060px){#container-grid{display:flex;flex-direction:column;gap:2rem}#action-container{flex-direction:column;align-items:center;gap:2.5rem}#container-grid>:nth-child(2){height:calc(100% - 2rem)}}</style>",i(this,{target:this.shadowRoot,props:o(this.attributes),customElement:!0},M,H,r,{},null),t&&t.target&&e(t.target,this,t.anchor)}}customElements.define("landing-component",R);export{R as default};
