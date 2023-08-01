import{S as e,i,a as t,b as n,s,e as o,c as a,t as r,n as l,d,z as c,f as p,l as u,g as m,r as h,m as f,o as g,p as v,j as w}from"./index-6a7bc1e2.js";import*as y from"../../../../../../../../../js/libraries/authTools.js";import"../../../../../../../../../js/components/select-component.js";import"../../../../../../../../../js/components/switch-component.js";function b(e){let i,t,s,f,g,w,y,b,x,j,k,T,I,L,H,M,C,D,E,z,P,R,S,U,V,W,G,O,_,q,A,B,F,J,K,N,Q,X,Y,Z,$,ee,ie=e[13].verified+"";return{c(){i=o("section"),t=o("h2"),t.textContent="General",s=a(),f=o("div"),g=o("div"),w=o("span"),w.textContent="Email:",y=a(),b=o("span"),x=a(),j=o("div"),k=o("button"),k.textContent="save",T=a(),I=o("div"),L=o("input"),H=a(),M=o("div"),C=a(),D=o("div"),E=o("div"),z=o("div"),P=o("span"),P.textContent="Password:",R=a(),S=o("span"),U=a(),V=o("div"),W=o("button"),W.innerHTML='change\n                    <object type="image/svg+xml" data="/img/profile/icons/pencil.svg" title="pencil-icon"></object>',G=a(),O=o("div"),_=o("button"),_.textContent="save",q=a(),A=o("input"),B=a(),F=o("button"),F.innerHTML='<object type="image/svg+xml" data="/img/auth/eye_icon.svg" title="eye icon"></object>',J=a(),K=o("div"),N=o("div"),Q=o("span"),Q.textContent="Verified:",X=a(),Y=o("span"),Z=r(ie),this.c=l,d(t,"class","title-highlight"),d(b,"id","signup-email-msg"),d(g,"class","title-msg"),d(k,"id","save-email"),d(k,"class","save-button"),d(L,"id","emailInput"),d(L,"class","text-input"),d(L,"type","text"),d(M,"class","ghost-input"),d(I,"class","input-wrapper"),d(j,"id","emailInputDiv"),d(S,"id","signup-password-msg"),d(z,"class","title-msg"),d(W,"id","change-password"),d(V,"id","change-password-div"),d(E,"id","change-password-line"),d(_,"id","save-password"),d(_,"class","save-button"),d(A,"id","passwordInput"),d(A,"class","text-input"),d(A,"type","password"),d(F,"class","eye-icon"),d(O,"id","change-password-input-div"),d(D,"id","change-password-line-wrapper"),c(Y,"color",e[13].verified?"green":"red"),d(N,"id","verifiedDiv"),d(i,"id","general-section")},m(o,a){n(o,i,a),p(i,t),p(i,s),p(i,f),p(f,g),p(g,w),p(g,y),p(g,b),e[18](b),p(f,x),p(f,j),p(j,k),e[19](k),p(j,T),p(j,I),p(I,L),e[20](L),p(I,H),p(I,M),e[23](j),e[24](f),p(i,C),p(i,D),p(D,E),p(E,z),p(z,P),p(z,R),p(z,S),e[25](S),p(E,U),p(E,V),p(V,W),e[26](V),p(D,G),p(D,O),p(O,_),e[27](_),p(O,q),p(O,A),e[28](A),p(O,B),p(O,F),e[29](F),e[31](O),e[32](D),p(i,J),p(i,K),p(K,N),p(N,Q),p(N,X),p(N,Y),p(Y,Z),e[33](i),$||(ee=[u(k,"click",e[15]),u(L,"click",e[21]),u(L,"input",e[22]),u(f,"mouseenter",(function(){v(e[11].focused=!0)&&(e[11].focused=!0).apply(this,arguments)})),u(f,"mouseleave",(function(){v(e[11].focused=!1)&&(e[11].focused=!1).apply(this,arguments)})),u(W,"click",e[16]),u(_,"click",e[17]),u(F,"click",e[30]),u(D,"mouseenter",(function(){v(e[10].focused=!0)&&(e[10].focused=!0).apply(this,arguments)})),u(D,"mouseleave",(function(){v(e[10].focused=!1)&&(e[10].focused=!1).apply(this,arguments)}))],$=!0)},p(i,t){e=i},i:l,o:l,d(t){t&&m(i),e[18](null),e[19](null),e[20](null),e[23](null),e[24](null),e[25](null),e[26](null),e[27](null),e[28](null),e[29](null),e[31](null),e[32](null),e[33](null),$=!1,h(ee)}}}function x(e,i,t){let n,s,o,a,r,l,d,c,p,u,m,h,v,b,x=f("profile-component").user;function j(e){b=n.value,e.style.display="initial",t(9,u.style.display="inline",u),window.innerWidth<1100&&(t(12,v.style.marginTop="1rem",v),t(11,h.style.flexDirection="column",h))}function k(){null!=b&&t(0,n.value=b,n),t(0,n.style.width="100%",n),t(9,u.style.display="none",u),t(11,h.style.flexDirection="row",h),t(12,v.style.marginTop="0rem",v),t(2,o.style.display="none",o),t(9,u.innerHTML="",u)}function T(){t(3,a.style.display="none",a),t(7,c.style.display="initial",c),t(4,r.innerHTML="",r)}function I(){null!=x&&0!=Object.keys(x).length&&null!=s?t(0,n.value=x.email,n):setTimeout(I,10)}g((()=>{I(),document.addEventListener("click",(function(e){m.focused?k():(h.focused||k(),T())}))}));return[n,s,o,a,r,l,d,c,p,u,m,h,v,x,j,function(){let e=n.value;y.checkEmail(e,u)&&(e!=x.email&&y.changeUser("email",e,x),k())},function(){let e=window.innerWidth;t(3,a.style.display=e<1100?"flex":"initial",a),t(7,c.style.display="none",c),d.focus()},function(){let e=d.value;y.checkPassword(e,r)&&(e!=x.password&&y.changeUser("password",e,x),t(4,r.innerHTML="",r),T())},function(e){w[e?"unshift":"push"]((()=>{u=e,t(9,u)}))},function(e){w[e?"unshift":"push"]((()=>{o=e,t(2,o)}))},function(e){w[e?"unshift":"push"]((()=>{n=e,t(0,n)}))},()=>j(o),()=>{var e;(e=n).nextElementSibling.innerHTML=e.value},function(e){w[e?"unshift":"push"]((()=>{v=e,t(12,v)}))},function(e){w[e?"unshift":"push"]((()=>{h=e,t(11,h)}))},function(e){w[e?"unshift":"push"]((()=>{r=e,t(4,r)}))},function(e){w[e?"unshift":"push"]((()=>{c=e,t(7,c)}))},function(e){w[e?"unshift":"push"]((()=>{l=e,t(5,l)}))},function(e){w[e?"unshift":"push"]((()=>{d=e,t(6,d)}))},function(e){w[e?"unshift":"push"]((()=>{p=e,t(8,p)}))},()=>y.changePasswordVisibility(p),function(e){w[e?"unshift":"push"]((()=>{a=e,t(3,a)}))},function(e){w[e?"unshift":"push"]((()=>{m=e,t(10,m)}))},function(e){w[e?"unshift":"push"]((()=>{s=e,t(1,s)}))}]}class j extends e{constructor(e){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#verifiedDiv{display:inline;display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:2rem;width:100%}.ghost-input{display:block;visibility:hidden;height:0;padding-left:0.5rem;padding-right:0.5rem}.input-wrapper{display:inline-block;max-width:calc(100% - 10rem);min-width:0rem;height:2.5rem;position:relative;right:0\n    }span{font-family:var(--sans-serif,sans-serif);font-size:1.15rem}#general-section{display:flex;flex-direction:column}#general-section h2{margin:auto;margin-top:0;margin-bottom:0}#general-section>div{height:3.5rem;padding-bottom:0.75rem;padding-top:0.75rem;border-bottom:0.14rem solid;border-color:#cdcdcd}#general-section>div>:first-child{font-family:var(--sans-serif,sans-serif)}#general-section>div:last-child{padding-bottom:0.75rem;padding-top:0.75rem;border-bottom:0}#general-section>div div,#general-section>div input,#general-section>div :not(:first-child) input{font-weight:500;font-size:1.15rem;font-family:var(--sans-serif,sans-serif);color:#292222;border:0}#general-section>div>:last-child{padding-right:1.35rem}.text-input{position:relative;width:20.475rem;direction:rtl;border:0;outline:none;bottom:0.341rem}#emailInput{position:relative;right:0;top:0.1rem;width:100%}#save-email{display:none;margin-top:0.5rem}#signup-email-msg,#signup-password-msg{position:relative;display:inline-block;color:red;font-weight:400;white-space:nowrap}#signup-email-msg{display:none}#general-section>div:nth-child(2){display:flex;flex-direction:row}#emailInputDiv{display:flex;flex-direction:row;justify-content:right;align-items:center;height:2rem;width:100%}.title-msg{display:flex;gap:0.5rem}.title-msg *{text-align:left}#change-password-line{display:flex;justify-content:space-between}#change-password-div{width:9.3rem;left:0}#change-password{position:absolute;cursor:pointer;width:8rem;height:2.73rem;font-size:1.15rem;font-family:var(--sans-serif,sans-serif);font-weight:500;text-align:right;padding-right:2rem;margin-top:-0.55rem;background-color:transparent}#change-password>object{pointer-events:none;position:absolute;width:1.5rem;right:0.0rem}#change-password-input-div{display:none;float:right;position:relative;margin-top:-1.7rem}#passwordInput{width:15rem;right:0.65rem;margin-left:1.5rem}.save-button{position:relative;bottom:0.34rem;margin-right:0.6rem;height:2.73rem;width:4.778rem;font-family:var(--sans-serif,sans-serif);font-size:1.15rem;color:white;background-color:var(--red);border-color:var(--red);border-radius:0.512rem}#save-password{bottom:0.6rem\n    }.eye-icon{display:inline-block;position:relative;cursor:pointer;opacity:0.25;height:2.2rem;width:1.7rem}.eye-icon *{pointer-events:none}@media only screen and (max-width: 1100px){#change-password-line-wrapper{display:flex;flex-direction:column;height:auto;min-height:4rem}#change-password-input-div{margin-top:1rem;justify-content:flex-end}#general-section>div:nth-child(2){height:auto;min-height:4rem;position:relative}#passwordInput{width:100%;bottom:0}#emailInput{width:100%}#save-password{bottom:0rem\n        }}</style>",i(this,{target:this.shadowRoot,props:t(this.attributes),customElement:!0},x,b,s,{},null,[-1,-1]),e&&e.target&&n(e.target,this,e.anchor)}}customElements.define("profile-general",j);export{j as default};
