import{S as o,i as t,a as i,b as e,s as r,q as n,n as s,g as a,t as m,o as l,e as c,w as p,c as u,u as g,d,v as h,f,x as b}from"./index-6e99513e.js";import{w as v}from"./index-3db98739.js";import{loadLocaleContent as k,getData as j}from"../../../../../../../../../js/libraries/serverTools.js";import{addMarkersEntries as w}from"../../../../../../../../../js/libraries/mapTools.js";import{addGroupPinContent as y,addCommunePinContent as x,addCoopPinContent as P,addPartyPinContent as T}from"../../../../../../../../../js/mapFuncs.js";import"../../../../../../../../../js/components/map-component.js";function A(o){let t,i,r,n,s,m,l,v,k,j,w,y,x,P,T,A,N,S,z,C,D,O,U,H,L,F,G,K,M,B,E,J,Q,R,W,Y,_,q,I,V,X,Z,$,oo,to,io,eo,ro,no,so,ao,mo,lo,co,po,uo,go,ho,fo,bo,vo,ko,jo,wo,yo,xo,Po,To,Ao,No,So,zo,Co,Do,Oo,Uo,Ho,Lo,Fo,Go,Ko,Mo,Bo,Eo=o[1].heading+"",Jo=o[1].condition1+"",Qo=o[1].condition2+"",Ro=o[1].condition3+"",Wo=o[1].conditionsOutcome+"",Yo=o[1].subheading1+"",_o=o[1].valueProposition1+"",qo=o[1].valueProposition2+"",Io=o[1].valueProposition3+"",Vo=o[1].valueProposition4+"",Xo=o[1].valueProposition5+"",Zo=o[1].subheading2+"",$o=o[1].findOur+"",ot=o[1].group+"",tt=o[1].commune+"",it=o[1].cooperative+"",et=o[1].or+"",rt=o[1].party+"",nt=o[1].nearYou+"",st=o[1].noneNear+"",at=o[1].WhatsAppGroup+"",mt=o[1].or+"",lt=o[1].DiscordServer+"",ct=o[1].helpStart+"";return{c(){t=c("div"),i=c("div"),r=c("h1"),n=p(Eo),s=u(),m=c("img"),v=u(),k=c("ol"),j=c("li"),w=p(Jo),y=u(),x=c("li"),P=p(Qo),T=u(),A=c("li"),N=p(Ro),S=u(),z=c("p"),C=u(),D=c("h2"),O=p(Yo),U=u(),H=c("ol"),L=c("li"),F=p(_o),G=u(),K=c("li"),M=p(qo),B=u(),E=c("li"),J=p(Io),Q=u(),R=c("li"),W=p(Vo),Y=u(),_=c("p"),q=p(Xo),I=u(),V=c("h2"),X=p(Zo),Z=u(),$=c("div"),oo=c("p"),to=p($o),io=u(),eo=c("ol"),ro=c("li"),no=c("a"),so=p(ot),ao=p(","),mo=u(),lo=c("li"),co=c("a"),po=p(tt),uo=u(),go=c("li"),ho=c("a"),fo=p(it),bo=u(),vo=p(et),ko=u(),jo=c("li"),wo=c("a"),yo=p(rt),xo=u(),Po=c("p"),To=p(nt),Ao=u(),No=c("p"),So=p(st),zo=u(),Co=c("a"),Do=p(at),Oo=u(),Uo=p(mt),Ho=u(),Lo=c("a"),Fo=p(lt),Go=p(ct),Ko=u(),Mo=c("map-component"),g(m.src,l="/img/common/join-group.svg")||d(m,"src","/img/common/join-group.svg"),d(m,"id","join-group"),d(m,"alt","join group"),d(k,"id","condition-list"),d(H,"id","value-proposition-list"),d(no,"href","/"+o[4]+"/groups"),d(co,"href","/"+o[4]+"/communes"),d(ho,"href","/"+o[4]+"/cooperatives"),d(wo,"href","/"+o[4]+"/parties"),d(eo,"id","entities-list"),d($,"id","call-to-action-list"),d(Co,"href","https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh"),d(Co,"target","_blank"),d(Co,"rel","noreferrer"),d(Lo,"href","https://discord.gg/Qk8KUk787z"),d(Lo,"target","_blank"),d(Lo,"rel","noreferrer"),h(Mo,"id","map"),h(Mo,"callback",Bo=o[6]),h(Mo,"colors",["#23AC20","#CA2437","#217BC9","#FFD326"]),d(i,"id","text-container"),d(t,"id","container")},m(o,a){e(o,t,a),f(t,i),f(i,r),f(r,n),f(i,s),f(i,m),f(i,v),f(i,k),f(k,j),f(j,w),f(k,y),f(k,x),f(x,P),f(k,T),f(k,A),f(A,N),f(k,S),f(k,z),z.innerHTML=Wo,f(i,C),f(i,D),f(D,O),f(i,U),f(i,H),f(H,L),f(L,F),f(H,G),f(H,K),f(K,M),f(H,B),f(H,E),f(E,J),f(H,Q),f(H,R),f(R,W),f(H,Y),f(H,_),f(_,q),f(i,I),f(i,V),f(V,X),f(i,Z),f(i,$),f($,oo),f(oo,to),f($,io),f($,eo),f(eo,ro),f(ro,no),f(no,so),f(ro,ao),f(eo,mo),f(eo,lo),f(lo,co),f(co,po),f(eo,uo),f(eo,go),f(go,ho),f(ho,fo),f(go,bo),f(go,vo),f(eo,ko),f(eo,jo),f(jo,wo),f(wo,yo),f($,xo),f($,Po),f(Po,To),f(i,Ao),f(i,No),f(No,So),f(No,zo),f(No,Co),f(Co,Do),f(No,Oo),f(No,Uo),f(No,Ho),f(No,Lo),f(Lo,Fo),f(No,Go),f(i,Ko),f(i,Mo)},p(o,t){2&t&&Eo!==(Eo=o[1].heading+"")&&b(n,Eo),2&t&&Jo!==(Jo=o[1].condition1+"")&&b(w,Jo),2&t&&Qo!==(Qo=o[1].condition2+"")&&b(P,Qo),2&t&&Ro!==(Ro=o[1].condition3+"")&&b(N,Ro),2&t&&Wo!==(Wo=o[1].conditionsOutcome+"")&&(z.innerHTML=Wo),2&t&&Yo!==(Yo=o[1].subheading1+"")&&b(O,Yo),2&t&&_o!==(_o=o[1].valueProposition1+"")&&b(F,_o),2&t&&qo!==(qo=o[1].valueProposition2+"")&&b(M,qo),2&t&&Io!==(Io=o[1].valueProposition3+"")&&b(J,Io),2&t&&Vo!==(Vo=o[1].valueProposition4+"")&&b(W,Vo),2&t&&Xo!==(Xo=o[1].valueProposition5+"")&&b(q,Xo),2&t&&Zo!==(Zo=o[1].subheading2+"")&&b(X,Zo),2&t&&$o!==($o=o[1].findOur+"")&&b(to,$o),2&t&&ot!==(ot=o[1].group+"")&&b(so,ot),2&t&&tt!==(tt=o[1].commune+"")&&b(po,tt),2&t&&it!==(it=o[1].cooperative+"")&&b(fo,it),2&t&&et!==(et=o[1].or+"")&&b(vo,et),2&t&&rt!==(rt=o[1].party+"")&&b(yo,rt),2&t&&nt!==(nt=o[1].nearYou+"")&&b(To,nt),2&t&&st!==(st=o[1].noneNear+"")&&b(So,st),2&t&&at!==(at=o[1].WhatsAppGroup+"")&&b(Do,at),2&t&&mt!==(mt=o[1].or+"")&&b(Uo,mt),2&t&&lt!==(lt=o[1].DiscordServer+"")&&b(Fo,lt),2&t&&ct!==(ct=o[1].helpStart+"")&&b(Go,ct),2&t&&Bo!==(Bo=o[6])&&h(Mo,"callback",Bo)},d(o){o&&a(t)}}}function N(o){let t,i=10==o[0]&&A(o);return{c(){i&&i.c(),t=n()},m(o,r){i&&i.m(o,r),e(o,t,r)},p(o,e){10==o[0]?i?i.p(o,e):(i=A(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},d(o){i&&i.d(o),o&&a(t)}}}function S(o){let t,i=o[0],m=N(o);return{c(){m.c(),t=n(),this.c=s},m(o,i){m.m(o,i),e(o,t,i)},p(o,[e]){1&e&&r(i,i=o[0])?(m.d(1),m=N(o),m.c(),m.m(t.parentNode,t)):m.p(o,e)},i:s,o:s,d(o){o&&a(t),m.d(o)}}}function z(o,t,i){let e,r,n=v(0);m(o,n,(o=>i(0,e=o)));let s=v({});m(o,s,(o=>i(1,r=o)));let a={},c={};k(s,"groups-component",n),k(s,"communes-component",n),k(s,"cooperatives-component",n),k(s,"parties-component",n),k(s,"countries",n);let p=k(s,"join-us-component",n),u=(o,t)=>{a[t]=JSON.parse(o),c[t]={};for(let o of a[t]){let i=o.country;null==o.contact&&(o.contact="https://discord.gg/Qk8KUk787z"),i in c[t]?c[t][i].push(o):c[t][i]=[o]}n.update((o=>o+1))};function g(o,t,i){let e=o([22,0],2),r={enableCountryGrouping:!0},n=w(a.groups,c.groups,e,t,i,y,"green",r),s=w(a.communes,c.communes,e,t,i,x,"red",r),m=w(a.cooperatives,c.cooperatives,e,t,i,P,"blue",r),l=w(a.parties,c.parties,e,t,i,T,"gold",r),p={};p[t.groups]=n,p[t.communes]=s,p[t.cooperatives]=m,p[t.parties]=l,L.control.layers(null,p).addTo(e)}j("/assets/groups.json",(o=>u(o,"groups"))),j("/assets/communes.json",(o=>u(o,"communes"))),j("/assets/cooperatives.json",(o=>u(o,"cooperatives"))),j("/assets/parties.json",(o=>u(o,"parties"))),l((()=>{}));return[e,r,n,s,p,g,o=>g(o,r,p)]}class C extends o{constructor(o){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#entities-list li{list-style:none}#entities-list li:before{content:'';display:inline-block;height:1.1rem;width:1rem;background-size:contain;background-repeat:no-repeat;margin-left:-1.5rem;margin-right:0.5rem}#entities-list li:nth-of-type(1):before{background-image:url(https://www.libsoc.org/img/common/markers/marker-green.png)}#entities-list li:nth-of-type(2):before{background-image:url(https://www.libsoc.org/img/common/markers/marker-red.png)}#entities-list li:nth-of-type(3):before{background-image:url(https://www.libsoc.org/img/common/markers/marker-blue.png)}#entities-list li:nth-of-type(4):before{background-image:url(https://www.libsoc.org/img/common/markers/marker-gold.png)}#entities-list li::marker{display:inline-block;height:1rem}h2{margin-bottom:1rem}#value-proposition-list{margin-bottom:2rem}#value-proposition-list>li{margin-bottom:1rem}ol li{position:relative;font-family:var(--serif,serif);margin-left:1.5rem;list-style-position:outside}#join-group{position:absolute;width:10.5rem;height:auto;left:calc(50% + 1.2rem);transform:translate(-50%);z-index:0;opacity:0.2}#map{--height:30rem;--width:100%;--margin-bottom:3rem}#call-to-action-list>ol>li{position:relative;font-family:var(--serif,serif);margin-left:3rem}#condition-list{margin-bottom:2rem;margin-top:7rem}#condition-list>li{margin-bottom:1rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container>div>p{margin-bottom:1rem}#call-to-action-list>p{margin-bottom:1rem}#call-to-action-list>:nth-child(1){margin-bottom:0.5rem}#call-to-action-list>:nth-child(2){margin-bottom:0rem}#call-to-action-list>ol>li{margin-bottom:0.5rem}#text-container a{color:#DD1C1A\n    }#container p{text-align:justify}</style>",t(this,{target:this.shadowRoot,props:i(this.attributes),customElement:!0},z,S,r,{},null),o&&o.target&&e(o.target,this,o.anchor)}}customElements.define("join-us-component",C);export{C as default};
