import{S as t,i as e,a as s,b as c,k as i,s as a,e as r,c as o,n as h,d as n,f as l,l as d,g as p,r as u,o as b}from"./index-5b685137.js";import"../../../../../../../../../js/libraries/miscTools.js";function k(t){let e,s,i,a,b,k;return{c(){e=r("label"),s=r("input"),i=o(),a=r("span"),this.c=h,n(s,"type","checkbox"),n(a,"class","switch-span"),n(e,"class","switch")},m(r,o){c(r,e,o),l(e,s),s.checked=t[0],l(e,i),l(e,a),b||(k=[d(s,"change",t[4]),d(s,"click",t[1])],b=!0)},p(t,[e]){1&e&&(s.checked=t[0])},i:h,o:h,d(t){t&&p(e),b=!1,u(k)}}}function g(t,e,s){let{callback:c=null}=e,{checked:i=!1}=e;const a=()=>{setTimeout((()=>{null!=c?(s(0,i=!i),c()):a()}),100)};return b((()=>{})),t.$$set=t=>{"callback"in t&&s(2,c=t.callback),"checked"in t&&s(0,i=t.checked)},[i,function(){null!=c&&(s(0,i=!i),c())},c,a,function(){i=this.checked,s(0,i)}]}class m extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';.switch span{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s;border-radius:calc(2* 1.2rem)}.switch span:before{position:absolute;content:\"\";height:calc(var(--height) - 0.5rem);width:calc(var(--height) - 0.5rem);left:calc(0.3rem);bottom:0.25rem;background-color:white;-webkit-transition:.4s;transition:.4s;border-radius:50%}.switch input:checked+.switch-span{background-color:var(--pink)}.switch input:hover+.switch-span{box-shadow:0 0 0 var(--pink)}.switch input:checked+.switch-span:before{-webkit-transform:translateX(calc(var(--width) - var(--height)/2 - 2*0.6rem));-ms-transform:translateX(calc(var(--width) - var(--height)/2 - 2*0.6rem));transform:translateX(calc(var(--width) - var(--height)/2 - 2*0.6rem))}.switch{position:relative;display:inline-block;width:var(--width);height:var(--height)}.switch input{position:absolute;width:var(--width);height:var(--height);opacity:0}</style>",e(this,{target:this.shadowRoot,props:s(this.attributes),customElement:!0},g,k,a,{callback:2,checked:0,toggle:3},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),i()))}static get observedAttributes(){return["callback","checked","toggle"]}get callback(){return this.$$.ctx[2]}set callback(t){this.$$set({callback:t}),i()}get checked(){return this.$$.ctx[0]}set checked(t){this.$$set({checked:t}),i()}get toggle(){return this.$$.ctx[3]}}customElements.define("switch-component",m);export{m as default};
