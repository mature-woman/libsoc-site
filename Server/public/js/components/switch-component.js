import{S as t,i as e,a as s,b as c,l as a,s as i,e as r,c as o,n as h,d as n,g as l,p as d,h as p,v as u,o as b}from"./index-95aedb1a.js";import"../../../../../../../../../js/libraries/miscTools.js";function k(t){let e,s,a,i,b,k;return{c(){e=r("label"),s=r("input"),a=o(),i=r("span"),this.c=h,n(s,"type","checkbox"),n(i,"class","switch-span"),n(e,"class","switch")},m(r,o){c(r,e,o),l(e,s),s.checked=t[0],l(e,a),l(e,i),b||(k=[d(s,"change",t[4]),d(s,"click",t[1])],b=!0)},p(t,[e]){1&e&&(s.checked=t[0])},i:h,o:h,d(t){t&&p(e),b=!1,u(k)}}}function g(t,e,s){let{callback:c=null}=e,{checked:a=!1}=e;const i=()=>{setTimeout((()=>{null!=c?(s(0,a=!a),c()):i()}),100)};return b((()=>{})),t.$$set=t=>{"callback"in t&&s(2,c=t.callback),"checked"in t&&s(0,a=t.checked)},[a,function(){null!=c&&(s(0,a=!a),c())},c,i,function(){a=this.checked,s(0,a)}]}class m extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';.switch span{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s;border-radius:calc(2* 1.2rem)}.switch span:before{position:absolute;content:\"\";height:calc(var(--height) - 0.5rem);width:calc(var(--height) - 0.5rem);left:calc(0.3rem);bottom:0.25rem;background-color:white;-webkit-transition:.4s;transition:.4s;border-radius:50%}.switch input:checked+.switch-span{background-color:var(--pink)}.switch input:hover+.switch-span{box-shadow:0 0 0 var(--pink)}.switch input:checked+.switch-span:before{-webkit-transform:translateX(calc(var(--width) - var(--height)/2 - 2*0.6rem));-ms-transform:translateX(calc(var(--width) - var(--height)/2 - 2*0.6rem));transform:translateX(calc(var(--width) - var(--height)/2 - 2*0.6rem))}.switch{position:relative;display:inline-block;width:var(--width);height:var(--height)}.switch input{position:absolute;width:var(--width);height:var(--height);opacity:0}</style>",e(this,{target:this.shadowRoot,props:s(this.attributes),customElement:!0},g,k,i,{callback:2,checked:0,toggle:3},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),a()))}static get observedAttributes(){return["callback","checked","toggle"]}get callback(){return this.$$.ctx[2]}set callback(t){this.$$set({callback:t}),a()}get checked(){return this.$$.ctx[0]}set checked(t){this.$$set({checked:t}),a()}get toggle(){return this.$$.ctx[3]}}customElements.define("switch-component",m);export{m as default};
