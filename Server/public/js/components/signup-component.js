import{S as t,i as e,a as n,b as s,k as i,s as r,e as a,c as o,n as l,d as u,f as p,l as d,g as c,r as m,m as f,o as h,p as g,j as b}from"./index-6e99513e.js";import*as w from"../../../../../../../../../js/libraries/authTools.js";function x(t){let e,n,i,r,f,h,b,x,v,y,k,E,I,C,P,L,j,$,T,S,z,H,M,B,R,N,A,G,U,V,W,X,_,q,D,F,J,K,O,Q,Y,Z;return{c(){e=a("div"),n=a("h2"),n.textContent="SIGN UP",i=o(),r=a("label"),r.textContent="Email ",f=a("span"),h=o(),b=a("input"),x=o(),v=a("div"),y=a("label"),y.textContent="Password ",k=a("span"),E=o(),I=a("input"),C=o(),P=a("button"),P.innerHTML='<object type="image/svg+xml" data="/img/auth/eye_icon.svg" title="eye-icon"></object>',L=o(),j=a("div"),$=a("input"),T=a("label"),T.textContent="remember me",S=o(),z=a("button"),z.textContent="Sign up",H=o(),M=a("p"),B=o(),R=a("div"),N=a("button"),A=o(),G=a("div"),U=a("h2"),U.textContent="Registration is closed",V=o(),W=a("p"),W.textContent="We are still in the process of opening.",X=o(),_=a("p"),_.textContent="Sign up for updates to know when it becomes available:",q=o(),D=a("div"),F=a("input"),J=o(),K=a("button"),K.textContent="sign up",O=o(),Q=a("button"),Q.textContent="No thanks",this.c=l,u(n,"class","auth-title"),u(r,"class","auth-label"),u(r,"for","emailInput"),u(f,"id","email-msg"),u(b,"id","emailInput"),u(b,"class","authEmailInput"),u(b,"type","email"),u(y,"class","auth-label"),u(y,"for","emailInput"),u(k,"id","password-msg"),u(I,"id","passwordInput"),u(I,"class","authPasswordInput"),u(I,"type","password"),u(P,"class","eye-icon"),u(v,"class","password-field"),u($,"type","checkbox"),u($,"id","remember-me-checkbox"),u(T,"id","remember-me-label"),u(T,"for","passwordInput"),u(j,"id","remember-me"),u(z,"class","auth-button"),u(M,"id","forgot-password"),u(e,"id","signup-group"),u(e,"class","pane auth-pane"),u(N,"id","shadow"),u(F,"id","newsletterEmailInput"),u(F,"type","text"),u(K,"id","newsletterEmailButton"),u(D,"id","newsletter-container"),u(Q,"id","no-button"),u(G,"id","wrapper"),u(G,"class","pane"),u(R,"id","dialog")},m(a,o){s(a,e,o),p(e,n),p(e,i),p(e,r),p(e,f),t[16](f),p(e,h),p(e,b),t[18](b),p(e,x),p(e,v),p(v,y),p(v,k),t[19](k),p(v,E),p(v,I),t[20](I),p(v,C),p(v,P),t[22](P),p(e,L),p(e,j),p(j,$),t[24]($),p(j,T),p(e,S),p(e,z),p(e,H),p(e,M),t[25](e),s(a,B,o),s(a,R,o),p(R,N),p(R,A),p(R,G),p(G,U),p(G,V),p(G,W),p(G,X),p(G,_),p(G,q),p(G,D),p(D,F),t[26](F),p(D,J),p(D,K),t[27](K),p(G,O),p(G,Q),t[28](R),Y||(Z=[d(f,"change",t[17]),d(I,"change",t[21]),d(P,"click",t[23]),d(z,"click",(function(){g(w.signup(t[7],t[4],w.toLandingPage))&&w.signup(t[7],t[4],w.toLandingPage).apply(this,arguments)})),d(N,"click",t[12]),d(F,"click",t[14]),d(K,"click",t[13]),d(Q,"click",t[12])],Y=!0)},p(e,n){t=e},i:l,o:l,d(n){n&&c(e),t[16](null),t[18](null),t[19](null),t[20](null),t[22](null),t[24](null),t[25](null),n&&c(B),n&&c(R),t[26](null),t[27](null),t[28](null),Y=!1,m(Z)}}}function v(t){""!=t.innerHTML&&(t.innerHTML="")}function y(t,e,n){let s,i,r,a,o,l,u,p,d,c,m,g,{focused:x=!1}=e;f("auth"),h((()=>{n(8,d.checked=!0,d),n(4,o={email:i,password:r}),n(7,p={email:l,password:u}),document.addEventListener("keypress",(function(t){"Enter"==t.code&&x&&w.signup(p,o,toLandingPage)}))}));return t.$$set=t=>{"focused"in t&&n(15,x=t.focused)},[s,i,r,a,o,l,u,p,d,c,m,g,function(){null!=c&&n(9,c.style.display="none",c)},function(){let t=g.value;t.includes("@")?(sendText("/get-email",t),n(11,g.value="",g),n(11,g.placeholder="Subscribed!",g),g.style.setProperty("--c","hsl(147, 33%, 60%)")):(n(11,g.value="",g),n(11,g.placeholder="must contain '@'",g),g.style.setProperty("--c","hsl(0, 100%, 60%)"))},function(){n(11,g.placeholder="",g)},x,function(t){b[t?"unshift":"push"]((()=>{l=t,n(5,l)}))},()=>v(l),function(t){b[t?"unshift":"push"]((()=>{i=t,n(1,i)}))},function(t){b[t?"unshift":"push"]((()=>{u=t,n(6,u)}))},function(t){b[t?"unshift":"push"]((()=>{r=t,n(2,r)}))},()=>v(u),function(t){b[t?"unshift":"push"]((()=>{a=t,n(3,a)}))},()=>w.changePasswordVisibility(a),function(t){b[t?"unshift":"push"]((()=>{d=t,n(8,d)}))},function(t){b[t?"unshift":"push"]((()=>{s=t,n(0,s)}))},function(t){b[t?"unshift":"push"]((()=>{g=t,n(11,g)}))},function(t){b[t?"unshift":"push"]((()=>{m=t,n(10,m)}))},function(t){b[t?"unshift":"push"]((()=>{c=t,n(9,c)}))}]}class k extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';@import '/css/auth.css';#dialog{display:none}#wrapper p{text-align:justify}#wrapper h2{text-align:center;margin-bottom:1rem}#shadow{position:fixed;cursor:default;top:50%;right:50%;transform:translate(50%,-50%);width:100vw;height:100vh;background:rgb(0, 0, 0, 0.2);z-index:999999}#newsletter-container{position:relative;height:3rem;width:100%;margin-top:1rem;display:flex;flex-direction:row}#newsletterEmailInput{height:2.5rem;border-radius:0.2rem 0 0 0.2rem;filter:drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4));flex-grow:1}#newsletterEmailInput::placeholder{color:var(--c,gray);opacity:1}#newsletterEmailButton{width:6.8rem;height:2.5rem;background:var(--pink);color:#ffffff;font-family:var(--sans-serif,sans-serif);font-size:1.4rem;border-radius:0 0.2rem 0.2rem 0;filter:drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4))}#newsletterEmailButton:active{background:var(--darker-pink)}#wrapper{top:50%;right:50%;transform:translate(50%,-50%);position:fixed;max-width:36rem;width:90vw;padding:2rem 4rem;z-index:1999999}#wrapper *{font-family:var(--sans-serif)}#no-button{position:relative;left:50%;transform:translateX(-50%);width:13rem;height:3rem;margin-top:2rem;margin-bottom:0.5rem;background:#ffffff;border:0.2rem solid var(--pink);font-family:var(--sans-serif,sans-serif);font-size:1.4rem;border-radius:0.5rem;filter:drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4))}#no-button:active{background:hsl(343, 23%, 82%)}</style>",e(this,{target:this.shadowRoot,props:n(this.attributes),customElement:!0},y,x,r,{focused:15},null,[-1,-1]),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),i()))}static get observedAttributes(){return["focused"]}get focused(){return this.$$.ctx[15]}set focused(t){this.$$set({focused:t}),i()}}customElements.define("signup-component",k);export{k as default};
