import{S as e,i,a,b as t,s as n,e as r,c as s,n as d,d as o,g as l,h as m,u as p,o as h,r as g}from"./index-95aedb1a.js";import{debounce as c}from"../../../../../../../../../js/libraries/miscTools.js";function f(e){let i,a,n,p,h,g,c,f,u,b;return{c(){i=r("div"),a=r("div"),n=r("div"),p=r("div"),p.innerHTML='<slot name="sidebar-left"></slot>',h=s(),g=r("div"),g.innerHTML='<slot name="sidebar-left2"></slot>',c=s(),f=r("div"),f.innerHTML='<slot name="sidebar-right"></slot>',u=s(),b=r("div"),b.innerHTML='<slot name="main" id="main-slot"></slot>',this.c=d,o(p,"id","sidebar-left"),o(p,"class","pane"),o(g,"id","sidebar-left2"),o(g,"class","pane"),o(n,"id","sidebars-left"),o(n,"class","sidebar"),o(f,"id","sidebar-right"),o(f,"class","pane sidebar"),o(b,"id","main-pane"),o(b,"class","pane"),o(a,"class","pane-container"),o(i,"id","root"),o(i,"class","pane-centering")},m(r,s){t(r,i,s),l(i,a),l(a,n),l(n,p),e[5](p),l(n,h),l(n,g),e[6](g),l(a,c),l(a,f),e[7](f),l(a,u),l(a,b),e[8](b),e[9](i)},p:d,i:d,o:d,d(a){a&&m(i),e[5](null),e[6](null),e[7](null),e[8](null),e[9](null)}}}function u(e,i,a){let t,n,r,s,d,o=null!=p("alignerParent")?p("alignerParent").switchView:void 0,l=!1,m=!1,f=!1;function u(){if(null!=t.parentNode){let e=t.parentNode.host.childNodes;if(0==e.length)setTimeout(u,50);else{let i=!1,n=t.parentNode.innerHTML;for(let a of e)"sidebar-left"!=a.slot||l?"sidebar-left2"!=a.slot||m?"sidebar-right"!=a.slot||f||(n=n.replace("#sidebar-right{display:none;","#sidebar-right{"),f=!0,i=!0):(n=n.replace("#sidebar-left2{display:none}",""),m=!0,i=!0):(n=n.replace("#sidebar-left{display:none}",""),l=!0,i=!0);null!=o&&(n=n.replace("1880px",o),i=!0),i&&a(0,t.parentNode.innerHTML=n,t)}}}return window.addEventListener("resize",c(u,100)),h((()=>{u()})),[t,n,r,s,d,function(e){g[e?"unshift":"push"]((()=>{r=e,a(2,r)}))},function(e){g[e?"unshift":"push"]((()=>{s=e,a(3,s)}))},function(e){g[e?"unshift":"push"]((()=>{d=e,a(4,d)}))},function(e){g[e?"unshift":"push"]((()=>{n=e,a(1,n)}))},function(e){g[e?"unshift":"push"]((()=>{t=e,a(0,t)}))}]}class b extends e{constructor(e){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';.pane-container{display:block;margin-left:var(--total-margin-left,0rem)}#root{min-height:var(--min-height,auto)}#main-pane{position:relative;padding-left:var(--padding-left,0rem);padding-right:var(--padding-right,0rem);padding-top:var(--padding-top,0rem);padding-bottom:var(--padding-bottom,0rem);text-align:justify;background:var(--background,white);box-shadow:var(--box-shadow,0 0 0.314rem rgb(187, 187, 187));margin:auto;height:min-content;max-width:var(--width-main,66rem);width:var(--width-main,66rem);z-index:1;overflow-x:var(--overflow-x,hidden)}.sidebar{position:absolute}#sidebars-left{display:flex;flex-direction:column;gap:1rem;margin-left:calc(-1*var(--width-left,22.5rem) - 1rem - 4rem);width:calc(var(--width-left,22.5rem) + 4rem)}#sidebar-left,#sidebar-left2{position:relative;background-color:white;padding:2rem 2rem}#sidebar-left{display:none}#sidebar-left2{display:none}#sidebar-right{display:none;margin-left:calc(var(--width-main,66rem) + 1rem);width:var(--width-right,auto);background-color:white;padding:2rem 2rem}@media only screen and (max-width: 1880px){#main-pane{max-width:initial;width:100%;max-width:var(--width-main,66rem);padding-left:var(--padding-left-mobile,1.8rem);padding-right:var(--padding-right-mobile,1.8rem);padding-top:var(--padding-top-mobile,1.8rem);padding-bottom:var(--padding-bottom-mobile,1.8rem)}#sidebars-left,#sidebar-right{position:relative;margin:auto;margin-top:1rem;margin-bottom:1rem;max-width:var(--width-main,66rem);width:100%}.pane-container{width:95%;justify-items:center;grid-auto-flow:row;margin-left:0}}</style>",i(this,{target:this.shadowRoot,props:a(this.attributes),customElement:!0},u,f,n,{},null),e&&e.target&&t(e.target,this,e.anchor)}}customElements.define("pane-aligner",b);export{b as default};
