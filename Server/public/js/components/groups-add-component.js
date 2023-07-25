import{S as t,i as n,a as e,b as o,s as i,e as r,n as a,d as s,c as l,o as m,w as c,f as p,g as u,h as d,j as g,k as h,l as f,q as b,r as w}from"./index-4348483d.js";import{w as y}from"./index-71440b21.js";import{addMarkersGroups as v}from"../../../../../../../../../js/groups.js";import{getData as x,loadLocaleContent as k,sendData as j}from"../../../../../../../../../js/libraries/serverTools.js";import"../../../../../../../../../js/components/map-component.js";function S(t){let n,e,i,r,a,l,m,c,y,v,x,k,j,L,S,z,C,T,N,O,H,M,A,$,q,E,J,U,D,I,R,G,K,P,Q;return{c(){n=p("div"),e=p("div"),i=p("h1"),i.textContent="Add a Group",r=u(),a=p("img"),m=u(),c=p("p"),c.textContent="If there are no groups in your town with whom you can organize then do the following:",y=u(),v=p("ol"),v.innerHTML="<li>Click on the map to show us where you are located;</li> \n                    <li>Add a way to contact you or leave blank for a pin to point to our discord;</li> \n                    <li>Press &quot;Submit&quot; to add yourself to our map;</li> \n                    <li>Verify yourself by having a chat with us at our Discord server to show on the map;</li>",x=u(),k=p("div"),j=p("label"),j.textContent="Location:",L=u(),S=p("div"),z=p("input"),C=u(),T=p("div"),N=u(),O=p("div"),H=p("label"),H.textContent="Contact:",M=u(),A=p("div"),$=p("input"),q=u(),E=p("div"),J=u(),U=p("button"),U.textContent="Submit",D=u(),I=p("p"),R=u(),G=p("map-component"),d(a,"id","groups-img"),g(a.src,l="/img/common/groups.svg")||d(a,"src","/img/common/groups.svg"),d(a,"alt","groups"),d(c,"class","description"),d(j,"for","address-input"),d(z,"id","address-input"),d(z,"type","text"),z.readOnly=!0,d(T,"class","ghost-input"),d(S,"class","input-wrapper"),d(k,"id","address-input-wrapper"),d(k,"class","input-label-wrapper"),d(H,"for","contact-input"),d($,"id","contact-input"),d($,"type","text"),d(E,"class","ghost-input"),d(A,"class","input-wrapper"),d(O,"class","input-label-wrapper"),d(U,"id","submit-button"),d(I,"id","confirmation-msg"),h(G,"id","map"),h(G,"callback",K=t[15]),d(e,"id","text-container"),d(n,"id","container")},m(s,l){o(s,n,l),f(n,e),f(e,i),f(e,r),f(e,a),f(e,m),f(e,c),f(e,y),f(e,v),f(e,x),f(e,k),f(k,j),f(k,L),f(k,S),f(S,z),t[10](z),f(S,C),f(S,T),f(e,N),f(e,O),f(O,H),f(O,M),f(O,A),f(A,$),t[12]($),f(A,q),f(A,E),f(e,J),f(e,U),f(e,D),f(e,I),t[14](I),f(e,R),f(e,G),P||(Q=[b(z,"input",t[11]),b($,"input",t[13]),b(U,"click",t[9])],P=!0)},p(t,n){16&n&&K!==(K=t[15])&&h(G,"callback",K)},d(e){e&&s(n),t[10](null),t[12](null),t[14](null),P=!1,w(Q)}}}function z(t){let n,e=3==t[3]&&S(t);return{c(){e&&e.c(),n=r()},m(t,i){e&&e.m(t,i),o(t,n,i)},p(t,o){3==t[3]?e?e.p(t,o):(e=S(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&s(n)}}}function C(t){let n,e=t[3],l=z(t);return{c(){l.c(),n=r(),this.c=a},m(t,e){l.m(t,e),o(t,n,e)},p(t,[o]){8&o&&i(e,e=t[3])?(l.d(1),l=z(t),l.c(),l.m(n.parentNode,n)):l.p(t,o)},i:a,o:a,d(t){t&&s(n),l.d(t)}}}function T(t){t.nextElementSibling.innerHTML=t.value}function N(t,n,e){let o,i,r=y(0);l(t,r,(t=>e(3,o=t)));let a,s,p=y({});l(t,p,(t=>e(4,i=t)));let u,d,g,h;x("/assets/groups.json",(t=>{a=JSON.parse(t),s={};for(let t of a){let n=t.country;null==t.contact&&(t.contact="https://discord.gg/Qk8KUk787z"),n in s?s[n].push(t):s[n]=[t]}r.update((t=>t+1))}));let f=0,b=0,w=function(t,n){let e=new L.Icon({iconUrl:"/img/common/markers/marker-black.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return L.marker([t,n],{icon:e})}(0,0);w.setOpacity(0);let S=k(p,"groups-component",r);function z(t,n,o){let i=t([22,0],2);v(a,s,i,n,o),w.addTo(i),i.on("click",(function(t){let n=t.latlng.lat,o=t.latlng.lng;f=n,b=o,function(t,n,e){let o=L.latLng(n,e);t.setLatLng(o)}(w,n,o),w.setOpacity(1),x(`https://nominatim.openstreetmap.org/reverse?lat=${n}&lon=${o}&format=jsonv2`,(t=>{let n=(t=JSON.parse(t)).address,o=n.city||n.town||n.village||n.hamlet,i=n.state,r=n.country;null!=i?r+=", "+i:i="",null!=o?r+=", "+o:o="",e(1,d.value=r,d),T(d)})),function(t,n){x(`https://nominatim.openstreetmap.org/reverse?lat=${t}&lon=${n}&format=jsonv2&accept-language=en`,(t=>{let n=(t=JSON.parse(t)).address,e=n.city||n.town||n.village||n.hamlet,o=n.state,i=n.country;null!=o||(o=""),null!=e||(e=""),h=[i,o,e]}))}(n,o)}))}function C(t){!1!==t?(e(0,u.innerHTML="You have been added to our database! Now go to our Discord to verify yourself.",u),e(0,u.style.color="green",u)):(e(0,u.innerHTML="Something went wrong.",u),e(0,u.style.color="red",u))}k(p,"countries",r),m((()=>{}));return[u,d,g,o,i,r,p,S,z,function(){if(null!=h){let t={country:h[0],state:h[1],town:h[2],latitude:f,longitude:b,contact:g.value};""==t.state&&(t.state=null),""==t.town&&(t.town=null),""==t.contact&&(t.contact=null),j("/"+S+"/groups-add-post/",t,C)}},function(t){c[t?"unshift":"push"]((()=>{d=t,e(1,d)}))},()=>T(d),function(t){c[t?"unshift":"push"]((()=>{g=t,e(2,g)}))},()=>T(g),function(t){c[t?"unshift":"push"]((()=>{u=t,e(0,u)}))},t=>z(t,i,S)]}class O extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#confirmation-msg{margin-top:0.5rem;margin-bottom:2rem}ol li{margin-left:3rem;margin-bottom:0.5rem}label{display:inline-block;font-family:var(--serif,serif);font-size:1.15rem;line-height:160%;color:#222222;width:5.5rem}input,.ghost-input{font-size:1.15rem;font-family:var(--serif,serif)}input{height:2.5rem;display:inline-block;position:relative}#address-input,#contact-input{width:100%}#address-input-wrapper{margin-top:2rem;margin-bottom:1rem}.ghost-input{display:block;visibility:hidden;height:0;padding-left:0.5rem;padding-right:0.5rem}.input-wrapper{display:inline-block;max-width:calc(100% - 5.5rem);min-width:min(20rem, calc(100% - 5.5rem));height:2.5rem}.input-label-wrapper{display:flex;justify-content:start}.input-label-wrapper label{position:relative;top:0.3rem}.description{margin-bottom:1rem}#submit-button{display:block;margin:auto;margin-top:2rem;padding:1rem 2rem;font-size:1.4rem;font-family:var(--sans-serif,sans-serif);border:0rem solid black;border-radius:0.5rem;background:#cb1816;color:white}#groups-img{position:absolute;width:14rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}#map{--height:30rem;--width:100%;--margin-top:2rem;--margin-bottom:0.5rem}#text-container{position:relative;max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container p{text-align:justify}</style>",n(this,{target:this.shadowRoot,props:e(this.attributes),customElement:!0},N,C,i,{},null),t&&t.target&&o(t.target,this,t.anchor)}}customElements.define("groups-add-component",O);export{O as default};
