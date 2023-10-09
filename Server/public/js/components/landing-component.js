import{S as t,i as e,a as o,b as i,s as n,e as r,n as s,d as a,c as m,o as c,f as p,h as d,j as g,t as l,k as u,w as h,z as f,x as v,l as x,y as w}from"./index-0d9f0c09.js";import{w as T}from"./index-1c123138.js";import{getData as b,loadLocaleContent as j}from"../../../../../../../../../js/libraries/serverTools.js";import{addMarkersEntries as U}from"../../../../../../../../../js/libraries/mapTools.js";import{addGroupPinContent as k,addPartyPinContent as y,addCoopPinContent as z,addCommunePinContent as C}from"../../../../../../../../../js/mapFuncs.js";import"../../../../../../../../../js/components/map-component.js";function N(t){let e,o,n,r,s,m,c,p,T,b,j,U,k,y,z,C,N,D,F,L,A,E,H,K,M,Q,R,S,W,B,G,J,O,_,q,I,P,V,X,Y,Z,$,tt,et,ot,it,nt,rt,st,at,mt,ct,pt,dt,gt,lt,ut,ht,ft,vt,xt,wt,Tt,bt,jt,Ut,kt,yt,zt,Ct,Nt,Dt,Ft,Lt,At,Et,Ht,Kt,Mt=t[3].top+"",Qt=t[3].groupsTitle+"",Rt=t[3].groupsText+"",St=t[3].partiesTitle+"",Wt=t[3].partiesText+"",Bt=t[3].tradeUnionsTitle+"",Gt=t[3].tradeUnionsText+"",Jt=t[3].cooperativesTitle+"",Ot=t[3].cooperativesText+"",_t=t[3].communesTitle+"",qt=t[3].communesText+"",It=t[3].findUs+"",Pt=t[3].whatNow+"",Vt=t[3].joinUs+"",Xt=t[3].talkWithUs+"";return{c(){e=d("div"),o=d("picture"),o.innerHTML='<source srcset="/img/crowd.webp"/> \n                <source srcset="/img/crowd.png"/> \n                <img id="crowd" alt="crowd"/>',n=g(),r=d("div"),s=d("p"),m=l(Mt),c=g(),p=d("div"),T=d("div"),b=d("a"),j=d("h2"),U=l(Qt),k=g(),y=d("img"),C=g(),N=d("p"),D=l(Rt),F=g(),L=d("div"),A=d("a"),E=d("h2"),H=l(St),K=g(),M=d("img"),R=g(),S=d("p"),W=l(Wt),B=g(),G=d("div"),J=d("a"),O=d("h2"),_=l(Bt),q=g(),I=d("img"),V=g(),X=d("p"),Y=l(Gt),Z=g(),$=d("div"),tt=d("a"),et=d("h2"),ot=l(Jt),it=g(),nt=d("img"),st=g(),at=d("p"),mt=l(Ot),ct=g(),pt=d("div"),dt=d("a"),gt=d("h2"),lt=l(_t),ut=g(),ht=d("img"),vt=g(),xt=d("p"),wt=l(qt),Tt=g(),bt=d("h1"),jt=l(It),Ut=g(),kt=d("map-component"),zt=g(),Ct=d("h1"),Nt=l(Pt),Dt=g(),Ft=d("div"),Lt=d("a"),At=l(Vt),Et=g(),Ht=d("a"),Kt=l(Xt),u(b,"href","/"+t[6]+"/groups"),u(y,"id","groups-img"),h(y.src,z="/img/common/groups.svg")||u(y,"src","/img/common/groups.svg"),u(y,"alt","groups"),u(A,"href","/"+t[6]+"/parties"),u(M,"id","parties-img"),h(M.src,Q="/img/common/parties.svg")||u(M,"src","/img/common/parties.svg"),u(M,"alt","coops"),u(J,"href","/"+t[6]+"/trade-unions"),u(I,"id","trade-unions-img"),h(I.src,P="/img/common/trade-unions.svg")||u(I,"src","/img/common/trade-unions.svg"),u(I,"alt","trade unions"),u(tt,"href","/"+t[6]+"/cooperatives"),u(nt,"id","coops-img"),h(nt.src,rt="/img/common/coops.svg")||u(nt,"src","/img/common/coops.svg"),u(nt,"alt","coops"),u(dt,"href","/"+t[6]+"/communes"),u(ht,"id","communes-img"),h(ht.src,ft="/img/common/communes.svg")||u(ht,"src","/img/common/communes.svg"),u(ht,"alt","communes"),u(p,"id","container-grid"),f(p,"--grid-width",t[1]),u(bt,"id","find-us"),v(kt,"id","map"),v(kt,"callback",yt=t[9]),v(kt,"colors",["#23AC20","#FFD326","#9D35CD","#217BC9","#CA2437"]),u(Lt,"class","link-button"),u(Lt,"href","/"+t[6]+"/join-us"),u(Ht,"class","link-button"),u(Ht,"href","https://discord.gg/Qk8KUk787z"),u(Ht,"target","_blank"),u(Ht,"rel","noreferrer"),u(Ft,"id","action-container"),u(r,"id","text-container"),u(e,"id","container")},m(a,d){i(a,e,d),x(e,o),x(e,n),x(e,r),x(r,s),x(s,m),x(r,c),x(r,p),x(p,T),x(T,b),x(b,j),x(j,U),x(T,k),x(T,y),x(T,C),x(T,N),x(N,D),x(p,F),x(p,L),x(L,A),x(A,E),x(E,H),x(L,K),x(L,M),x(L,R),x(L,S),x(S,W),x(p,B),x(p,G),x(G,J),x(J,O),x(O,_),x(G,q),x(G,I),x(G,V),x(G,X),x(X,Y),x(p,Z),x(p,$),x($,tt),x(tt,et),x(et,ot),x($,it),x($,nt),x($,st),x($,at),x(at,mt),x(p,ct),x(p,pt),x(pt,dt),x(dt,gt),x(gt,lt),x(pt,ut),x(pt,ht),x(pt,vt),x(pt,xt),x(xt,wt),t[8](p),x(r,Tt),x(r,bt),x(bt,jt),x(r,Ut),x(r,kt),x(r,zt),x(r,Ct),x(Ct,Nt),x(r,Dt),x(r,Ft),x(Ft,Lt),x(Lt,At),x(Ft,Et),x(Ft,Ht),x(Ht,Kt)},p(t,e){8&e&&Mt!==(Mt=t[3].top+"")&&w(m,Mt),8&e&&Qt!==(Qt=t[3].groupsTitle+"")&&w(U,Qt),8&e&&Rt!==(Rt=t[3].groupsText+"")&&w(D,Rt),8&e&&St!==(St=t[3].partiesTitle+"")&&w(H,St),8&e&&Wt!==(Wt=t[3].partiesText+"")&&w(W,Wt),8&e&&Bt!==(Bt=t[3].tradeUnionsTitle+"")&&w(_,Bt),8&e&&Gt!==(Gt=t[3].tradeUnionsText+"")&&w(Y,Gt),8&e&&Jt!==(Jt=t[3].cooperativesTitle+"")&&w(ot,Jt),8&e&&Ot!==(Ot=t[3].cooperativesText+"")&&w(mt,Ot),8&e&&_t!==(_t=t[3].communesTitle+"")&&w(lt,_t),8&e&&qt!==(qt=t[3].communesText+"")&&w(wt,qt),2&e&&f(p,"--grid-width",t[1]),8&e&&It!==(It=t[3].findUs+"")&&w(jt,It),8&e&&yt!==(yt=t[9])&&v(kt,"callback",yt),8&e&&Pt!==(Pt=t[3].whatNow+"")&&w(Nt,Pt),8&e&&Vt!==(Vt=t[3].joinUs+"")&&w(At,Vt),8&e&&Xt!==(Xt=t[3].talkWithUs+"")&&w(Kt,Xt)},d(o){o&&a(e),t[8](null)}}}function D(t){let e,o=12==t[2]&&N(t);return{c(){o&&o.c(),e=r()},m(t,n){o&&o.m(t,n),i(t,e,n)},p(t,i){12==t[2]?o?o.p(t,i):(o=N(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},d(t){o&&o.d(t),t&&a(e)}}}function F(t){let e,o=t[2],m=D(t);return{c(){m.c(),e=r(),this.c=s},m(t,o){m.m(t,o),i(t,e,o)},p(t,[i]){4&i&&n(o,o=t[2])?(m.d(1),m=D(t),m.c(),m.m(e.parentNode,e)):m.p(t,i)},i:s,o:s,d(t){t&&a(e),m.d(t)}}}function A(t,e,o){let i,n,r,s,a=T(0);m(t,a,(t=>o(2,i=t)));let d=T({});m(t,d,(t=>o(3,n=t)));let g={},l={};function u(t){o(1,s="1fr 1fr")}let h=(t,e)=>{g[e]=JSON.parse(t),l[e]={};for(let t of g[e]){let o=t.country;null==t.contact&&(t.contact="https://discord.gg/Qk8KUk787z"),o in l[e]?l[e][o].push(t):l[e][o]=[t]}a.update((t=>t+1))};b("/assets/groups.json",(t=>h(t,"groups"))),b("/assets/communes.json",(t=>h(t,"communes"))),b("/assets/cooperatives.json",(t=>h(t,"cooperatives"))),b("/assets/parties.json",(t=>h(t,"parties"))),b("/assets/trade-unions.json",(t=>h(t,"tradeUnions"))),j(d,"groups-component",a),j(d,"communes-component",a),j(d,"cooperatives-component",a),j(d,"parties-component",a),j(d,"trade-unions-component",a),j(d,"countries",a);let f=j(d,"landing-component",a,u);function v(t,e,o){let i=t([22,0],2),n={enableCountryGrouping:!0},r=U(g.groups,l.groups,i,e,o,k,"green",n),s=U(g.parties,l.parties,i,e,o,y,"gold",n),a=U(g.tradeUnions,l.tradeUnions,i,e,o,y,"violet",n),m=U(g.cooperatives,l.cooperatives,i,e,o,z,"blue",n),c=U(g.communes,l.communes,i,e,o,C,"red",n),p={};p[e.groups]=r,p[e.parties]=s,p[e.tradeUnions]=a,p[e.cooperatives]=m,p[e.communes]=c,L.control.layers(null,p).addTo(i)}u(),c((()=>{}));return[r,s,i,n,a,d,f,v,function(t){p[t?"unshift":"push"]((()=>{r=t,o(0,r)}))},t=>v(t,n,f)]}class E extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#action-container{display:flex;justify-content:space-between;margin:auto;margin-top:2rem;max-width:38rem}.link-button{display:inline-block;font-size:1.6rem;font-family:var(--sans-serif,sans-serif);width:17rem;line-height:4rem;background:var(--red);color:white;text-align:center}#map{--margin-top:1rem;--height:30rem;--width:100%;--margin-bottom:3rem}h1{font-size:2rem;text-align:center;margin-bottom:1rem}#container-grid>div>a>h2{text-align:center}#groups-img,#communes-img,#coops-img,#parties-img,#trade-unions-img{position:absolute;left:50%;transform:translate(-50%);z-index:0;opacity:0.2;height:8rem}#coops-img{margin-top:0.5rem;height:7.5rem}#trade-unions-img{margin-top:0.5rem;height:7.5rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}#crowd{width:100%;height:min(248.25px,calc(100vw / 3.2225));margin-bottom:2rem}#container{margin:auto;max-width:800px;margin-top:2rem;margin-bottom:5rem}#container>div>p{margin-bottom:1rem}#container p{text-align:justify}#container-grid{display:grid;grid-template-columns:var(--grid-width);grid-template-rows:auto auto;grid-gap:4rem;row-gap:2.5rem;margin-top:2rem;margin-bottom:1rem}#container-grid>:last-child{grid-column:1/span 2}#container-grid>div{position:relative}#container-grid>div>p{position:relative;margin-top:5rem;z-index:2}@media only screen and (max-width: 1060px){#container-grid{display:flex;flex-direction:column;gap:2rem}#action-container{flex-direction:column;align-items:center;gap:2.5rem}#container-grid>:nth-child(2){height:calc(100% - 2rem)}}</style>",e(this,{target:this.shadowRoot,props:o(this.attributes),customElement:!0},A,F,n,{},null),t&&t.target&&i(t.target,this,t.anchor)}}customElements.define("landing-component",E);export{E as default};
