import{n,s as t}from"./index-5b685137.js";const e=[];function s(s,o=n){let i;const c=new Set;function f(n){if(t(s,n)&&(s=n,i)){const n=!e.length;for(const n of c)n[1](),e.push(n,s);if(n){for(let n=0;n<e.length;n+=2)e[n][0](e[n+1]);e.length=0}}}return{set:f,update:function(n){f(n(s))},subscribe:function(t,e=n){const r=[t,e];return c.add(r),1===c.size&&(i=o(f)||n),t(s),()=>{c.delete(r),0===c.size&&(i(),i=null)}}}}export{s as w};
