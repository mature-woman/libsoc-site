function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let i,c;function u(t,n){return i||(i=document.createElement("a")),i.href=n,t===i.href}function a(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function f(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function d(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function $(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function g(){return p("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t,n,e){n in t?t[n]="boolean"==typeof t[n]&&""===e||e:y(t,n,e)}function x(t){return""===t?null:+t}function v(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function E(t,n){t.value=null==n?"":n}function w(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}class k{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,e=null){var o;this.e||(this.is_svg?this.e=(o=n.nodeName,document.createElementNS("http://www.w3.org/2000/svg",o)):this.e=$(n.nodeName),this.t=n,this.c(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)l(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}function C(t){const n={};for(const e of t)n[e.name]=e.value;return n}function N(t){c=t}function A(){if(!c)throw new Error("Function called outside component initialization");return c}function L(t){A().$$.on_mount.push(t)}function S(t,n){return A().$$.context.set(t,n),n}function T(t){return A().$$.context.get(t)}const j=[],H=[],M=[],O=[],P=Promise.resolve();let q=!1;function z(t){M.push(t)}const B=new Set;let F=0;function D(){const t=c;do{for(;F<j.length;){const t=j[F];F++,N(t),G(t.$$)}for(N(null),j.length=0,F=0;H.length;)H.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];B.has(n)||(B.add(n),n())}M.length=0}while(j.length);for(;O.length;)O.pop()();q=!1,B.clear(),N(t)}function G(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}const I=new Set;function J(t,n){-1===t.$$.dirty[0]&&(j.push(t),q||(q=!0,P.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function K(r,i,u,a,f,l,d,$=[-1]){const p=c;N(r);const m=r.$$={fragment:null,ctx:[],props:l,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(p?p.$$.context:[])),callbacks:e(),dirty:$,skip_bound:!1,root:i.target||p.$$.root};d&&d(m.root);let g=!1;if(m.ctx=u?u(r,i.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&f(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),g&&J(r,t)),n})):[],m.update(),g=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);m.fragment&&m.fragment.l(t),t.forEach(h)}else m.fragment&&m.fragment.c();i.intro&&((b=r.$$.fragment)&&b.i&&(I.delete(b),b.i(y))),function(t,e,r,i){const{fragment:c,after_update:u}=t.$$;c&&c.m(e,r),i||z((()=>{const e=t.$$.on_mount.map(n).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(z)}(r,i.target,i.anchor,i.customElement),D()}var b,y;N(p)}let Q;"function"==typeof HTMLElement&&(Q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(n,e){if(!s(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});export{x as A,E as B,k as H,Q as S,C as a,l as b,m as c,y as d,$ as e,f,h as g,S as h,K as i,H as j,D as k,b as l,T as m,t as n,L as o,s as p,g as q,o as r,r as s,p as t,a as u,u as v,_ as w,v as x,d as y,w as z};
