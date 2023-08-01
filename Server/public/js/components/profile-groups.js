import{S as t,i as e,a as n,b as i,s,q as o,n as l,g as r,t as a,m as c,o as u,j as p,A as d,e as m,c as f,w as h,d as g,z as v,f as b,B as y,l as x,p as w,x as k,r as j,y as C}from"./index-6e99513e.js";import{w as z}from"./index-3db98739.js";import{getData as q,sendData as E}from"../../../../../../../../../js/libraries/serverTools.js";import{validatePosNumber as L}from"../../../../../../../../../js/libraries/miscTools.js";import"../../../../../../../../../js/components/select-component.js";import"../../../../../../../../../js/components/switch-component.js";function T(t,e,n){const i=t.slice();return i[65]=e[n],i[67]=n,i}function G(t){let e,n,o,l,a,c,u,p,C,z,q,E,L,T,G,M,I,N,O,R,S,_,F,J,U,B,K,Q,D,P,V,W,X,Y,Z,$,tt,et,nt,it,st,ot,lt,rt,at,ct,ut,pt,dt,mt,ft,ht,gt=t[1],vt=A(t);return{c(){e=m("div"),n=m("h2"),n.textContent="Groups",o=f(),l=m("div"),a=m("h3"),a.textContent="My group",c=f(),u=m("span"),p=f(),C=m("section"),z=m("div"),q=m("div"),E=m("span"),E.textContent="Location:",L=f(),T=m("div"),G=m("button"),M=h(t[10]),I=f(),N=m("object"),O=f(),R=m("div"),S=m("div"),_=m("span"),_.textContent="Members:",F=f(),J=m("div"),U=m("div"),B=m("button"),B.textContent="save",K=f(),Q=m("input"),D=f(),P=m("button"),V=m("object"),W=f(),X=m("div"),Y=m("div"),Z=m("span"),Z.textContent="Contact:",$=f(),tt=m("div"),et=m("div"),nt=m("button"),nt.textContent="save",it=f(),st=m("input"),ot=f(),lt=m("button"),rt=m("object"),at=f(),ct=m("h3"),ct.textContent="Requests",ut=f(),pt=m("section"),vt.c(),dt=f(),mt=m("groups-add-component"),g(a,"class","group-heading"),g(u,"class","status"),g(N,"type","image/svg+xml"),g(N,"data","/img/profile/icons/pencil.svg"),g(N,"title","pencil-icon"),g(N,"class","pencil"),g(G,"class","change-field-button"),g(T,"class","change-field-div"),g(q,"class","change-field-line"),g(B,"class","save-button"),v(B,"display","none"),g(U,"class","save-button-wrapper"),g(Q,"id","membersInput"),g(Q,"class","text-input"),g(Q,"type","number"),g(V,"type","image/svg+xml"),g(V,"data","/img/profile/icons/pencil.svg"),g(V,"title","pencil-icon"),g(V,"class","pencil"),g(P,"class","text-input-pencil-button"),g(J,"class","change-field-div input-pencil"),g(S,"class","change-field-line"),g(nt,"class","save-button"),v(nt,"display","none"),g(et,"class","save-button-wrapper"),g(st,"id","contactInput"),g(st,"class","text-input"),g(st,"type","text"),g(rt,"type","image/svg+xml"),g(rt,"data","/img/profile/icons/pencil.svg"),g(rt,"title","pencil-icon"),g(rt,"class","pencil"),g(lt,"class","text-input-pencil-button"),g(tt,"class","change-field-div input-pencil"),g(Y,"class","change-field-line"),g(C,"class","entries-section"),g(pt,"class","entries-section"),v(mt,"display","none")},m(s,r){i(s,e,r),b(e,n),b(e,o),b(e,l),b(l,a),b(l,c),b(l,u),t[28](u),b(e,p),b(e,C),b(C,z),b(z,q),b(q,E),b(q,L),b(q,T),b(T,G),b(G,M),b(G,I),b(G,N),t[29](G),b(C,O),b(C,R),b(R,S),b(S,_),b(S,F),b(S,J),b(J,U),b(U,B),t[30](B),b(J,K),b(J,Q),t[31](Q),y(Q,t[12]),b(J,D),b(J,P),b(P,V),t[35](V),t[36](P),t[38](J),b(C,W),b(C,X),b(X,Y),b(Y,Z),b(Y,$),b(Y,tt),b(tt,et),b(et,nt),t[39](nt),b(tt,it),b(tt,st),t[40](st),y(st,t[11]),b(tt,ot),b(tt,lt),b(lt,rt),t[43](rt),t[44](lt),t[45](tt),t[46](C),b(e,at),b(e,ct),b(e,ut),b(e,pt),vt.m(pt,null),t[49](pt),t[50](e),i(s,dt,r),i(s,mt,r),t[51](mt),ft||(ht=[x(G,"click",t[27]),x(B,"click",t[23]),x(Q,"input",t[32]),x(Q,"click",t[33]),x(Q,"input",t[34]),x(P,"click",t[37]),x(nt,"click",t[24]),x(st,"input",t[41]),x(st,"click",t[42]),x(lt,"click",(function(){w(H(t[7]))&&H(t[7]).apply(this,arguments)}))],ft=!0)},p(e,n){t=e,1024&n[0]&&k(M,t[10]),4096&n[0]&&d(Q.value)!==t[12]&&y(Q,t[12]),2048&n[0]&&st.value!==t[11]&&y(st,t[11]),2&n[0]&&s(gt,gt=t[1])?(vt.d(1),vt=A(t),vt.c(),vt.m(pt,null)):vt.p(t,n)},d(n){n&&r(e),t[28](null),t[29](null),t[30](null),t[31](null),t[35](null),t[36](null),t[38](null),t[39](null),t[40](null),t[43](null),t[44](null),t[45](null),t[46](null),vt.d(n),t[49](null),t[50](null),n&&r(dt),n&&r(mt),t[51](null),ft=!1,j(ht)}}}function M(t){let e,n,s,o,l,a,c,u,p,d,y,w,k=t[65].email+"";function C(){return t[47](t[67],t[65])}function z(){return t[48](t[67],t[65])}return{c(){e=m("div"),n=m("div"),s=m("span"),o=h(k),l=f(),a=m("div"),c=m("button"),c.textContent="approve",u=f(),p=m("button"),p.textContent="reject",d=f(),g(c,"class","approve-button"),g(p,"class","approve-button"),v(p,"display","visible"),g(a,"class","request-button-wrapper"),g(n,"class","change-field-line")},m(t,r){i(t,e,r),b(e,n),b(n,s),b(s,o),b(n,l),b(n,a),b(a,c),b(a,u),b(a,p),b(e,d),y||(w=[x(c,"click",C),x(p,"click",z)],y=!0)},p(e,n){t=e},d(t){t&&r(e),y=!1,j(w)}}}function A(t){let e,n=t[20],s=[];for(let e=0;e<n.length;e+=1)s[e]=M(T(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=o()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);i(t,e,n)},p(t,i){if(101711872&i[0]){let o;for(n=t[20],o=0;o<n.length;o+=1){const l=T(t,n,o);s[o]?s[o].p(l,i):(s[o]=M(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){C(s,t),t&&r(e)}}}function I(t){let e,n=t[19]==O&&G(t);return{c(){n&&n.c(),e=o()},m(t,s){n&&n.m(t,s),i(t,e,s)},p(t,i){t[19]==O?n?n.p(t,i):(n=G(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&r(e)}}}function N(t){let e,n=t[19],a=I(t);return{c(){a.c(),e=o(),this.c=l},m(t,n){a.m(t,n),i(t,e,n)},p(t,i){524288&i[0]&&s(n,n=t[19])?(a.d(1),a=I(t),a.c(),a.m(e.parentNode,e)):a.p(t,i)},i:l,o:l,d(t){t&&r(e),a.d(t)}}}let O=2;function R(t,e){e.readOnly||(t.style.display="initial")}function H(t){t.focus(),t.click()}function S(t,e,n){let i,s,o=[],l=[],r=z({});a(t,r,(t=>n(55,t)));let m=z(0);a(t,m,(t=>n(19,i=t)));let f,h,g,v,b,y,x,w,k,j,C,T,G,M,A,I,N,S=0,_={contact:null,members:null},F=c("profile-component"),J=F.maps;function U(t){if(null!=t){return[t.country,t.state,t.town].filter((t=>null!=t)).map((t=>t)).join(", ")}return"Create or join group"}function B(){n(5,v.style.display="none",v),n(12,C=_.members)}function K(){n(8,x.style.display="none",x),n(11,j=_.contact)}function Q(t){null!=t&&n(17,I.innerHTML=U(t),I)}function D(){if(i==O&&[v,x,b,w].every((t=>null!=t&&null!=t)))if(document.addEventListener("click",(function(t){let e,n=this.activeElement.shadowRoot;null!=n&&(e=n.activeElement,n=e.shadowRoot,null!=n&&(e=n.activeElement)),e==g||e==v?K():e==y||e==x?B():(B(),K())})),F.updateUserGroup=Q,n(10,k=U(o[0])),0==o.length)n(11,j=""),n(12,C="");else{let e=o[0];n(11,(t=e.contact,j=null==t?"https://discord.gg/Qk8KUk787z":t)),_.contact=j,n(12,C=e.members),_.members=C;let i=e.status;null!=i&&(0==i?(n(18,N.innerHTML="(pending)",N),n(18,N.style.color="#FFC90E",N)):2==i&&(n(18,N.innerHTML="(rejected)",N),n(18,N.style.color="#c52a28",N)),n(13,T.style.display="none",T),n(14,G.style.display="none",G),n(16,A.style.cursor="default",A),n(15,M.style.cursor="default",M),n(4,g.readOnly=!0,g),n(7,y.readOnly=!0,y))}else{setTimeout((()=>D()),100)}var t}function P(t,e){E("/xx/group-approve-request",{user_id:e}),l.splice(t,1),n(1,S+=1)}function V(t,e){E("/xx/group-reject-request",{user_id:e}),l.splice(t,1),n(1,S+=1)}function W(){n(3,h.style.display="block",h),n(2,f.style.display="none",f),null!=J.groupsAdd&&J.groupsAdd.invalidateSize()}q("/xx/get-user-groups",(function(t){o=JSON.parse(t),F.userGroups=o,m.update((t=>t+1))})),q("/xx/get-group-requests",(function(t){let e=JSON.parse(t);l.push(...e),m.update((t=>t+1))})),F.onLoadedGroups=D,F.launchGroupsAdd=W,F.closeGroupsAdd=function(){n(3,h.style.display="none",h),n(2,f.style.display="block",f)},u((()=>{D()}));return[s,S,f,h,g,v,b,y,x,w,k,j,C,T,G,M,A,I,N,i,l,r,m,function(){let t=parseInt(g.value);E("/xx/group-change",{members:t}),_.members=t,n(5,v.style.display="none",v)},function(){let t=y.value;E("/xx/group-change",{contact:t}),_.contact=t,n(8,x.style.display="none",x)},P,V,W,function(t){p[t?"unshift":"push"]((()=>{N=t,n(18,N)}))},function(t){p[t?"unshift":"push"]((()=>{I=t,n(17,I)}))},function(t){p[t?"unshift":"push"]((()=>{v=t,n(5,v)}))},function(t){p[t?"unshift":"push"]((()=>{g=t,n(4,g)}))},function(){C=d(this.value),n(12,C)},()=>R(v,g),t=>L(t,g,1e4),function(t){p[t?"unshift":"push"]((()=>{T=t,n(13,T)}))},function(t){p[t?"unshift":"push"]((()=>{M=t,n(15,M)}))},()=>{H(g)},function(t){p[t?"unshift":"push"]((()=>{b=t,n(6,b)}))},function(t){p[t?"unshift":"push"]((()=>{x=t,n(8,x)}))},function(t){p[t?"unshift":"push"]((()=>{y=t,n(7,y)}))},function(){j=this.value,n(11,j)},()=>R(x,y),function(t){p[t?"unshift":"push"]((()=>{G=t,n(14,G)}))},function(t){p[t?"unshift":"push"]((()=>{A=t,n(16,A)}))},function(t){p[t?"unshift":"push"]((()=>{w=t,n(9,w)}))},function(t){p[t?"unshift":"push"]((()=>{s=t,n(0,s)}))},(t,e)=>P(t,e.user_id),(t,e)=>V(t,e.user_id),function(t){p[t?"unshift":"push"]((()=>{s=t,n(0,s)}))},function(t){p[t?"unshift":"push"]((()=>{f=t,n(2,f)}))},function(t){p[t?"unshift":"push"]((()=>{h=t,n(3,h)}))}]}class _ extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';.request-button-wrapper{display:flex;gap:1rem}.approve-button{height:2.7rem;padding:0rem 1rem;font-family:var(--sans-serif,sans-serif);font-size:1.15rem;color:white;background-color:var(--red);border-color:var(--red);border-radius:0.5rem;margin-top:-0.5rem}.group-heading{display:inline-block}.status{display:inline-block;font-size:1.15rem;font-family:var(--sans-serif,sans-serif);margin-left:0.5rem}input{font-family:var(--sans-serif,sans-serif)\n    }.text-input-pencil-button{display:inline-block;position:relative;height:2.7rem;width:2rem}.text-input-pencil-button object{top:0rem}.pencil{pointer-events:none;position:absolute;width:1.5rem;right:0.0rem}.change-field-div input.text-input{position:relative;width:20.475rem;direction:rtl;border:0;outline:none;height:2.7rem;font-style:var(--sans-serif,sans-serif);background:transparent;margin-top:-0.5rem}#membersInput{width:5rem}#contactInput{max-width:18rem}.save-button{position:absolute;right:0;top:-0.4rem;margin-right:0.6rem;height:2.7rem;width:5rem;font-family:var(--sans-serif,sans-serif);font-size:1.15rem;color:white;background-color:var(--red);border-color:var(--red);border-radius:0.5rem}.save-button-wrapper{display:inline-block;position:relative;height:2rem}h2{text-align:center;margin-bottom:0.5rem}.entries-section{margin-bottom:1rem}.entries-section>div{height:3.5rem;padding-bottom:0.75rem;padding-top:0.75rem;border-bottom:0.14rem solid;border-color:#cdcdcd}.entries-section>div:last-child{padding-bottom:0.75rem;padding-top:0.75rem;border-bottom:0}.change-field-line{display:flex;justify-content:space-between}.change-field-div{width:max-content;position:relative;display:flex}.change-field-button{position:relative;cursor:pointer;height:2.7rem;font-size:1.15rem;font-family:var(--sans-serif,sans-serif);font-weight:500;text-align:right;padding-right:1.9rem;margin-top:-0.55rem;background-color:transparent;width:100%}h3{margin-bottom:0.5rem}span{font-family:var(--sans-serif,sans-serif);font-size:1.15rem}</style>",e(this,{target:this.shadowRoot,props:n(this.attributes),customElement:!0},S,N,s,{},null,[-1,-1,-1]),t&&t.target&&i(t.target,this,t.anchor)}}customElements.define("profile-groups",_);export{_ as default};
