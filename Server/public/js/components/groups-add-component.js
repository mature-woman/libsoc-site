import{S as t,i as n,a as e,b as i,s as o,e as r,n as a,d as s,c as l,o as m,w as p,f as c,g as u,h as d,j as g,k as h,l as f,q as b,r as w}from"./index-4348483d.js";import{w as y}from"./index-71440b21.js";import{addMarkersGroups as v}from"../../../../../../../../../js/groups.js";import{loadLocaleContent as x,getData as k,sendText as j}from"../../../../../../../../../js/libraries/serverTools.js";import"../../../../../../../../../js/components/map-component.js";function S(t){let n,e,o,r,a,l,m,p,y,v,x,k,j,L,S,z,C,T,H,M,N,O,A,q,E,D,I,J,R,U,$,G,P,V,Y;return{c(){n=c("div"),e=c("div"),o=c("h1"),o.textContent="Add a Group",r=u(),a=c("img"),m=u(),p=c("p"),p.textContent="If there are no groups in your town with whom you can organize then do the following:",y=u(),v=c("ol"),v.innerHTML="<li>Click on the map to show us where you are located;</li> \n                    <li>Add a way to contact you or leave blank for a pin to point to our discord;</li> \n                    <li>Press &quot;Submit&quot; to add yourself to our map;</li> \n                    <li>Verify yourself by having a chat with us at our Discord server to show on the map;</li>",x=u(),k=c("div"),j=c("label"),j.textContent="Location:",L=u(),S=c("div"),z=c("input"),C=u(),T=c("div"),H=u(),M=c("div"),N=c("label"),N.textContent="Contact:",O=u(),A=c("div"),q=c("input"),E=u(),D=c("div"),I=u(),J=c("button"),J.textContent="Submit",R=u(),U=c("p"),$=u(),G=c("map-component"),d(a,"id","groups-img"),g(a.src,l="/img/common/groups.svg")||d(a,"src","/img/common/groups.svg"),d(a,"alt","groups"),d(p,"class","description"),d(j,"for","address-input"),d(z,"id","address-input"),d(z,"type","text"),z.readOnly=!0,d(T,"class","ghost-input"),d(S,"class","input-wrapper"),d(k,"id","address-input-wrapper"),d(k,"class","input-label-wrapper"),d(N,"for","contact-input"),d(q,"id","contact-input"),d(q,"type","text"),d(D,"class","ghost-input"),d(A,"class","input-wrapper"),d(M,"class","input-label-wrapper"),d(J,"id","submit-button"),d(U,"id","confirmation-msg"),h(G,"id","map"),h(G,"callback",P=t[15]),d(e,"id","text-container"),d(n,"id","container")},m(s,l){i(s,n,l),f(n,e),f(e,o),f(e,r),f(e,a),f(e,m),f(e,p),f(e,y),f(e,v),f(e,x),f(e,k),f(k,j),f(k,L),f(k,S),f(S,z),t[10](z),f(S,C),f(S,T),f(e,H),f(e,M),f(M,N),f(M,O),f(M,A),f(A,q),t[12](q),f(A,E),f(A,D),f(e,I),f(e,J),f(e,R),f(e,U),t[14](U),f(e,$),f(e,G),V||(Y=[b(z,"input",t[11]),b(q,"input",t[13]),b(J,"click",t[9])],V=!0)},p(t,n){16&n&&P!==(P=t[15])&&h(G,"callback",P)},d(e){e&&s(n),t[10](null),t[12](null),t[14](null),V=!1,w(Y)}}}function z(t){let n,e=2==t[3]&&S(t);return{c(){e&&e.c(),n=r()},m(t,o){e&&e.m(t,o),i(t,n,o)},p(t,i){2==t[3]?e?e.p(t,i):(e=S(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&s(n)}}}function C(t){let n,e=t[3],l=z(t);return{c(){l.c(),n=r(),this.c=a},m(t,e){l.m(t,e),i(t,n,e)},p(t,[i]){8&i&&o(e,e=t[3])?(l.d(1),l=z(t),l.c(),l.m(n.parentNode,n)):l.p(t,i)},i:a,o:a,d(t){t&&s(n),l.d(t)}}}function T(t){t.nextElementSibling.innerHTML=t.value}function H(t,n,e){let i,o,r=y(0);l(t,r,(t=>e(3,i=t)));let a,s,c,u,d=y({});l(t,d,(t=>e(4,o=t)));let g=0,h=0,f=function(t,n){let e=new L.Icon({iconUrl:"/img/common/markers/marker-black.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return L.marker([t,n],{icon:e})}(0,0);f.setOpacity(0);let b=x(d,"groups-component",r);function w(t,n,i){let o=t([22,0],2);v(o,n,i),f.addTo(o),o.on("click",(function(t){let n=t.latlng.lat,i=t.latlng.lng;g=n,h=i,function(t,n,e){let i=L.latLng(n,e);t.setLatLng(i)}(f,n,i),f.setOpacity(1),k(`https://nominatim.openstreetmap.org/reverse?lat=${n}&lon=${i}&format=jsonv2`,(t=>{let n=(t=JSON.parse(t)).address,i=n.city||n.town||n.village||n.hamlet,o=n.state,r=n.country,a=r;null!=o?a+=", "+o:o="",null!=i?a+=", "+i:i="",e(1,s.value=a,s),T(s),u=[r,o,i]}))}))}function S(t){!1!==t?(e(0,a.innerHTML="You have been added to our database! Now go to our Discord to verify yourself.",a),e(0,a.style.color="green",a)):(e(0,a.innerHTML="Something went wrong.",a),e(0,a.style.color="red",a))}x(d,"countries",r),m((()=>{}));return[a,s,c,i,o,r,d,b,w,function(){if(null!=u){let t=[...u,g,h,c.value];j("/"+b+"/groups-add-post/",JSON.stringify(t),S)}},function(t){p[t?"unshift":"push"]((()=>{s=t,e(1,s)}))},()=>T(s),function(t){p[t?"unshift":"push"]((()=>{c=t,e(2,c)}))},()=>T(c),function(t){p[t?"unshift":"push"]((()=>{a=t,e(0,a)}))},t=>w(t,o,b)]}class M extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#confirmation-msg{margin-top:0.5rem;margin-bottom:2rem}ol li{margin-left:3rem;margin-bottom:0.5rem}label{display:inline-block;font-family:var(--serif,serif);font-size:1.15rem;line-height:160%;color:#222222;width:5.5rem}input,.ghost-input{font-size:1.15rem;font-family:var(--serif,serif)}input{height:2.5rem;display:inline-block;position:relative}#address-input,#contact-input{width:100%}#address-input-wrapper{margin-top:2rem;margin-bottom:1rem}.ghost-input{display:block;visibility:hidden;height:0;padding-left:0.5rem;padding-right:0.5rem}.input-wrapper{display:inline-block;max-width:calc(100% - 5.5rem);min-width:min(20rem, calc(100% - 5.5rem));height:2.5rem}.input-label-wrapper{display:flex;justify-content:start}.input-label-wrapper label{position:relative;top:0.3rem}.description{margin-bottom:1rem}#submit-button{display:block;margin:auto;margin-top:2rem;padding:1rem 2rem;font-size:1.4rem;font-family:var(--sans-serif,sans-serif);border:0rem solid black;border-radius:0.5rem;background:#cb1816;color:white}#groups-img{position:absolute;width:14rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}#map{--height:30rem;--width:100%;--margin-top:2rem;--margin-bottom:0.5rem}#text-container{position:relative;max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container p{text-align:justify}</style>",n(this,{target:this.shadowRoot,props:e(this.attributes),customElement:!0},H,C,o,{},null),t&&t.target&&i(t.target,this,t.anchor)}}customElements.define("groups-add-component",M);export{M as default};
