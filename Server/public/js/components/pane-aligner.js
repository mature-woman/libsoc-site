import{S as i,i as e,a as t,b as a,s as n,e as r,c as d,n as s,d as o,f as l,g as m,m as p,o as h,j as g}from"./index-db20528a.js";import{debounce as f}from"../../../../../../../../../js/libraries/miscTools.js";function c(i){let e,t,n,p,h,g,f,c,u,b;return{c(){e=r("div"),t=r("div"),n=r("div"),p=r("div"),p.innerHTML='<slot name="sidebar-left"></slot>',h=d(),g=r("div"),g.innerHTML='<slot name="sidebar-left2"></slot>',f=d(),c=r("div"),c.innerHTML='<slot name="sidebar-right"></slot>',u=d(),b=r("div"),b.innerHTML='<slot name="main" id="main-slot"></slot>',this.c=s,o(p,"id","sidebar-left"),o(g,"id","sidebar-left2"),o(n,"id","sidebars-left"),o(n,"class","sidebar"),o(c,"id","sidebar-right"),o(c,"class","pane sidebar"),o(b,"id","main-pane"),o(t,"class","pane-container"),o(e,"id","root"),o(e,"class","pane-centering")},m(r,d){a(r,e,d),l(e,t),l(t,n),l(n,p),i[5](p),l(n,h),l(n,g),i[6](g),l(t,f),l(t,c),i[7](c),l(t,u),l(t,b),i[8](b),i[9](e)},p:s,i:s,o:s,d(t){t&&m(e),i[5](null),i[6](null),i[7](null),i[8](null),i[9](null)}}}function u(i,e,t){let a,n,r,d,s,o=null!=p("alignerParent")?p("alignerParent").switchView:void 0,l=!1,m=!1,c=!1;function u(){if(null!=a.parentNode){let i=a.parentNode.host.childNodes;if(0==i.length)setTimeout(u,50);else{let e=!1,n=a.parentNode.innerHTML;for(let t of i)"sidebar-left"!=t.slot||l?"sidebar-left2"!=t.slot||m?"sidebar-right"!=t.slot||c||(n=n.replace("#sidebar-right{display:none;","#sidebar-right{"),c=!0,e=!0):(n=n.replace("#sidebar-left2{display:none}",""),m=!0,e=!0):(n=n.replace("#sidebar-left{display:none}",""),l=!0,e=!0);null!=o&&(n=n.replace("1880px",o),e=!0),e&&t(0,a.parentNode.innerHTML=n,a)}}}return window.addEventListener("resize",f(u,100)),h((()=>{u()})),[a,n,r,d,s,function(i){g[i?"unshift":"push"]((()=>{r=i,t(2,r)}))},function(i){g[i?"unshift":"push"]((()=>{d=i,t(3,d)}))},function(i){g[i?"unshift":"push"]((()=>{s=i,t(4,s)}))},function(i){g[i?"unshift":"push"]((()=>{n=i,t(1,n)}))},function(i){g[i?"unshift":"push"]((()=>{a=i,t(0,a)}))}]}class b extends i{constructor(i){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';.pane-container{display:block;margin-left:var(--total-margin-left,0rem)}#root{position:relative;margin-top:auto;min-height:var(--min-height,auto);height:100%}#main-pane{position:relative;padding-left:var(--padding-left,0rem);padding-right:var(--padding-right,0rem);padding-top:var(--padding-top,0rem);padding-bottom:var(--padding-bottom,0rem);text-align:justify;margin:auto;height:100%;max-width:var(--width-main,66rem);width:var(--width-main,66rem);z-index:1;overflow-x:var(--overflow-x,hidden)}.sidebar{position:absolute}#sidebars-left{display:flex;flex-direction:column;gap:1rem;margin-left:calc(-1*var(--width-left,22.5rem) - 1rem - 4rem);width:max-content;max-width:30rem}#sidebar-left,#sidebar-left2{position:relative;background-color:white;padding:0rem 0rem}#sidebar-left{display:none}#sidebar-left2{display:none}#sidebar-right{display:none;margin-left:calc(var(--width-main,66rem) + 1rem);width:var(--width-right,auto);background-color:white;padding:2rem 2rem}@media only screen and (max-width: 1340px){#main-pane{max-width:initial;width:100%;max-width:var(--width-main,66rem);padding-left:var(--padding-left-mobile,0rem);padding-right:var(--padding-right-mobile,0rem);padding-top:var(--padding-top-mobile,0rem);padding-bottom:var(--padding-bottom-mobile,0rem)}#sidebars-left,#sidebar-right{position:relative;margin:auto;margin-top:1rem;margin-bottom:1rem;max-width:var(--width-main,66rem);width:100%}.pane-container{width:95%;justify-items:center;grid-auto-flow:row;margin-left:0}}</style>",e(this,{target:this.shadowRoot,props:t(this.attributes),customElement:!0},u,c,n,{},null),i&&i.target&&a(i.target,this,i.anchor)}}customElements.define("pane-aligner",b);export{b as default};
