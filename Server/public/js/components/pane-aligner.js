import{S as i,i as e,a,b as t,s as n,f as r,g as s,n as d,h as o,l,d as m,x as p,o as h,w as g}from"./index-4348483d.js";import{debounce as c}from"../../../../../../../../../js/libraries/miscTools.js";function f(i){let e,a,n,p,h,g,c,f,u,b;return{c(){e=r("div"),a=r("div"),n=r("div"),p=r("div"),p.innerHTML='<slot name="sidebar-left"></slot>',h=s(),g=r("div"),g.innerHTML='<slot name="sidebar-left2"></slot>',c=s(),f=r("div"),f.innerHTML='<slot name="sidebar-right"></slot>',u=s(),b=r("div"),b.innerHTML='<slot name="main" id="main-slot"></slot>',this.c=d,o(p,"id","sidebar-left"),o(p,"class","pane"),o(g,"id","sidebar-left2"),o(g,"class","pane"),o(n,"id","sidebars-left"),o(n,"class","sidebar"),o(f,"id","sidebar-right"),o(f,"class","pane sidebar"),o(b,"id","main-pane"),o(b,"class","pane"),o(a,"class","pane-container"),o(e,"id","root"),o(e,"class","pane-centering")},m(r,s){t(r,e,s),l(e,a),l(a,n),l(n,p),i[5](p),l(n,h),l(n,g),i[6](g),l(a,c),l(a,f),i[7](f),l(a,u),l(a,b),i[8](b),i[9](e)},p:d,i:d,o:d,d(a){a&&m(e),i[5](null),i[6](null),i[7](null),i[8](null),i[9](null)}}}function u(i,e,a){let t,n,r,s,d,o=null!=p("alignerParent")?p("alignerParent").switchView:void 0,l=!1,m=!1,f=!1;function u(){if(null!=t.parentNode){let i=t.parentNode.host.childNodes;if(0==i.length)setTimeout(u,50);else{let e=!1,n=t.parentNode.innerHTML;for(let a of i)"sidebar-left"!=a.slot||l?"sidebar-left2"!=a.slot||m?"sidebar-right"!=a.slot||f||(n=n.replace("#sidebar-right{display:none;","#sidebar-right{"),f=!0,e=!0):(n=n.replace("#sidebar-left2{display:none}",""),m=!0,e=!0):(n=n.replace("#sidebar-left{display:none}",""),l=!0,e=!0);null!=o&&(n=n.replace("1880px",o),e=!0),e&&a(0,t.parentNode.innerHTML=n,t)}}}return window.addEventListener("resize",c(u,100)),h((()=>{u()})),[t,n,r,s,d,function(i){g[i?"unshift":"push"]((()=>{r=i,a(2,r)}))},function(i){g[i?"unshift":"push"]((()=>{s=i,a(3,s)}))},function(i){g[i?"unshift":"push"]((()=>{d=i,a(4,d)}))},function(i){g[i?"unshift":"push"]((()=>{n=i,a(1,n)}))},function(i){g[i?"unshift":"push"]((()=>{t=i,a(0,t)}))}]}class b extends i{constructor(i){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';.pane-container{display:block;margin-left:var(--total-margin-left,0rem)}#root{min-height:var(--min-height,auto)}#main-pane{position:relative;padding-left:var(--padding-left,0rem);padding-right:var(--padding-right,0rem);padding-top:var(--padding-top,0rem);padding-bottom:var(--padding-bottom,0rem);text-align:justify;background:var(--background,white);box-shadow:var(--box-shadow,0 0 0.314rem rgb(187, 187, 187));margin:auto;height:min-content;max-width:var(--width-main,66rem);width:var(--width-main,66rem);z-index:1;overflow-x:var(--overflow-x,hidden)}.sidebar{position:absolute}#sidebars-left{display:flex;flex-direction:column;gap:1rem;margin-left:calc(-1*var(--width-left,22.5rem) - 1rem - 4rem);width:calc(var(--width-left,22.5rem) + 4rem)}#sidebar-left,#sidebar-left2{position:relative;background-color:white;padding:2rem 2rem}#sidebar-left{display:none}#sidebar-left2{display:none}#sidebar-right{display:none;margin-left:calc(var(--width-main,66rem) + 1rem);width:var(--width-right,auto);background-color:white;padding:2rem 2rem}@media only screen and (max-width: 1880px){#main-pane{max-width:initial;width:100%;max-width:var(--width-main,66rem);padding-left:var(--padding-left-mobile,1.8rem);padding-right:var(--padding-right-mobile,1.8rem);padding-top:var(--padding-top-mobile,1.8rem);padding-bottom:var(--padding-bottom-mobile,1.8rem)}#sidebars-left,#sidebar-right{position:relative;margin:auto;margin-top:1rem;margin-bottom:1rem;max-width:var(--width-main,66rem);width:100%}.pane-container{width:95%;justify-items:center;grid-auto-flow:row;margin-left:0}}</style>",e(this,{target:this.shadowRoot,props:a(this.attributes),customElement:!0},u,f,n,{},null),i&&i.target&&t(i.target,this,i.anchor)}}customElements.define("pane-aligner",b);export{b as default};
