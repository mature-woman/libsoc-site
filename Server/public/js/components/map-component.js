import{S as t,i as e,a as o,b as s,u as a,s as r,f as l,n,h as i,d as c,o as m,w as h}from"./index-4348483d.js";function p(t){let e;return{c(){e=l("div"),this.c=n,i(e,"id","map")},m(o,a){s(o,e,a),t[3](e)},p:n,i:n,o:n,d(o){o&&c(e),t[3](null)}}}function u(t,e,o){let s,{callback:a=null}=e,{colors:r=null}=e;function l(t,e){let o=L.map(s,{center:t,zoom:e});return L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minNativeZoom:2,minZoom:2,maxNativeZoom:14,maxZoom:14}).addTo(o),o}return m((()=>{if(a(l),null!=r){let t=s.getElementsByClassName("leaflet-control-layers-overlays")[0].children;for(let e=0;e<t.length;e++)t[e].children[0].children[0].style.accentColor=r[e]}})),t.$$set=t=>{"callback"in t&&o(1,a=t.callback),"colors"in t&&o(2,r=t.colors)},[s,a,r,function(t){h[t?"unshift":"push"]((()=>{s=t,o(0,s)}))}]}class d extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';#map{height:var(--height);width:var(--width,100%);margin-top:var(--margin-top,0);margin-bottom:var(--margin-bottom,0)}</style>",e(this,{target:this.shadowRoot,props:o(this.attributes),customElement:!0},u,p,r,{callback:1,colors:2},null),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),a()))}static get observedAttributes(){return["callback","colors"]}get callback(){return this.$$.ctx[1]}set callback(t){this.$$set({callback:t}),a()}get colors(){return this.$$.ctx[2]}set colors(t){this.$$set({colors:t}),a()}}customElements.define("map-component",d);export{d as default};
