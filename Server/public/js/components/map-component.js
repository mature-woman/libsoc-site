import{S as t,i as a,a as e,b as s,l as r,s as o,e as n,n as i,d as c,j as l,o as p,r as h}from"./index-9e0a68c1.js";function u(t){let a;return{c(){a=n("div"),this.c=i,c(a,"id","map")},m(e,r){s(e,a,r),t[2](a)},p:i,i:i,o:i,d(e){e&&l(a),t[2](null)}}}function m(t,a,e){let s,{callback:r=null}=a;function o(t,a){let e=L.map(s,{center:t,zoom:a});return L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),e}return p((()=>{r(o)})),t.$$set=t=>{"callback"in t&&e(1,r=t.callback)},[s,r,function(t){h[t?"unshift":"push"]((()=>{s=t,e(0,s)}))}]}class b extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';#map{height:var(--height);width:var(--width,100%);margin-bottom:var(--margin-bottom,0)\n    }</style>",a(this,{target:this.shadowRoot,props:e(this.attributes),customElement:!0},m,u,o,{callback:1},null),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),r()))}static get observedAttributes(){return["callback"]}get callback(){return this.$$.ctx[1]}set callback(t){this.$$set({callback:t}),r()}}customElements.define("map-component",b);export{b as default};
