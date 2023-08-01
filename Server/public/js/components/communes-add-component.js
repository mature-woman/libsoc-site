import{S as t,i as n,a as e,b as o,s as i,p as a,n as r,g as s,q as l,o as m,j as c,e as u,c as p,d,t as f,u as g,f as h,l as b,r as w}from"./index-db20528a.js";import{w as y}from"./index-720c0a59.js";import{getData as v,loadLocaleContent as x,sendData as k}from"../../../../../../../../../js/libraries/serverTools.js";import{addMarkersEntries as j,translate as S}from"../../../../../../../../../js/libraries/mapTools.js";import"../../../../../../../../../js/components/map-component.js";import"../../../../../../../../../js/components/select-component.js";function z(t){let n,e,i,a,r,l,m,c,y,v,x,k,j,L,S,z,C,T,N,O,H,M,A,$,q,E,J,U,D,I,R,G,K,P,Q,V,Y,_,B,F,W,X,Z;return{c(){n=u("div"),e=u("div"),i=u("h1"),i.textContent="Add a Commune",a=p(),r=u("img"),m=p(),c=u("p"),c.textContent="If there are no communes near you who you can join and you want to start your own then do the following:",y=p(),v=u("ol"),v.innerHTML="<li>Click on the map to show us where you are located;</li> \n                    <li>Add a way to contact you or leave blank for a pin to point to our discord;</li> \n                    <li>Press &quot;Submit&quot; to add yourself to our map;</li> \n                    <li>Verify yourself by having a chat with us at our Discord server to show on the map;</li>",x=p(),k=u("div"),j=u("label"),j.textContent="Location:",L=p(),S=u("div"),z=u("input"),C=p(),T=u("div"),N=p(),O=u("div"),H=u("label"),H.textContent="Contact:",M=p(),A=u("div"),$=u("input"),q=p(),E=u("div"),J=p(),U=u("div"),D=u("label"),D.textContent="Status:",I=p(),R=u("div"),G=u("select-component"),K=p(),P=u("div"),Q=p(),V=u("button"),V.textContent="Submit",Y=p(),_=u("p"),B=p(),F=u("map-component"),d(r,"id","communes-img"),f(r.src,l="/img/common/communes.svg")||d(r,"src","/img/common/communes.svg"),d(r,"alt","communes"),d(c,"class","description"),d(j,"for","address-input"),d(z,"id","address-input"),d(z,"type","text"),z.readOnly=!0,d(T,"class","ghost-input"),d(S,"class","input-wrapper"),d(k,"id","address-input-wrapper"),d(k,"class","input-label-wrapper"),d(H,"for","contact-input"),d($,"id","contact-input"),d($,"type","text"),d(E,"class","ghost-input"),d(A,"class","input-wrapper"),d(O,"class","input-label-wrapper"),d(D,"for","contact-input"),g(G,"id","status-input"),g(G,"options",["forming","growing","not growing"]),d(P,"class","ghost-input"),d(R,"class","input-wrapper"),d(U,"id","status-input-wrapper"),d(U,"class","input-label-wrapper"),d(V,"id","submit-button"),d(_,"id","confirmation-msg"),g(F,"id","map"),g(F,"callback",W=t[17]),d(e,"id","text-container"),d(n,"id","container")},m(s,l){o(s,n,l),h(n,e),h(e,i),h(e,a),h(e,r),h(e,m),h(e,c),h(e,y),h(e,v),h(e,x),h(e,k),h(k,j),h(k,L),h(k,S),h(S,z),t[11](z),h(S,C),h(S,T),h(e,N),h(e,O),h(O,H),h(O,M),h(O,A),h(A,$),t[13]($),h(A,q),h(A,E),h(e,J),h(e,U),h(U,D),h(U,I),h(U,R),h(R,G),t[15](G),h(R,K),h(R,P),h(e,Q),h(e,V),h(e,Y),h(e,_),t[16](_),h(e,B),h(e,F),X||(Z=[b(z,"input",t[12]),b($,"input",t[14]),b(V,"click",t[10])],X=!0)},p(t,n){32&n&&W!==(W=t[17])&&g(F,"callback",W)},d(e){e&&s(n),t[11](null),t[13](null),t[15](null),t[16](null),X=!1,w(Z)}}}function C(t){let n,e=3==t[4]&&z(t);return{c(){e&&e.c(),n=a()},m(t,i){e&&e.m(t,i),o(t,n,i)},p(t,o){3==t[4]?e?e.p(t,o):(e=z(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&s(n)}}}function T(t){let n,e=t[4],l=C(t);return{c(){l.c(),n=a(),this.c=r},m(t,e){l.m(t,e),o(t,n,e)},p(t,[o]){16&o&&i(e,e=t[4])?(l.d(1),l=C(t),l.c(),l.m(n.parentNode,n)):l.p(t,o)},i:r,o:r,d(t){t&&s(n),l.d(t)}}}function N(t){t.nextElementSibling.innerHTML=t.value}function O(t,n,e){let o,i,a=y(0);l(t,a,(t=>e(4,o=t)));let r,s,u=y({});l(t,u,(t=>e(5,i=t)));let p,d,f,g,h;v("/assets/communes.json",(t=>{r=JSON.parse(t),s={};for(let t of r){let n=t.country;null==t.contact&&(t.contact="https://discord.gg/Qk8KUk787z"),n in s?s[n].push(t):s[n]=[t]}a.update((t=>t+1))}));let b=0,w=0,z=function(t,n){let e=new L.Icon({iconUrl:"/img/common/markers/marker-black.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return L.marker([t,n],{icon:e})}(0,0);z.setOpacity(0);let C=x(u,"communes-component",a);function T(t,n,e){let o,i="<b>"+n.Group+"</b><br>";for(let a of["location","members","contact"]){let r=n[a]+": ";if("contact"==a)i+=r+"<a href='"+t.contact+"' target='_blank' rel=noreferrer>"+t.contact+"</a>";else if("location"==a){let a,s=[t.country,t.state,t.town].filter((t=>null!=t&&null!=t));a="en"==e?s.map((t=>t)).join(", "):s.map((t=>S(n,t))).join(", "),i+=r+a+"<br>",o=[t.latitude,t.longitude]}else i+=r+t[a]+"<br>"}return{text:i,coordinates:o}}function O(t,n,o){let i=t([22,0],2);j(r,s,i,n,o,T,"green"),z.addTo(i),i.on("click",(function(t){let n=t.latlng.lat,o=t.latlng.lng;b=n,w=o,function(t,n,e){let o=L.latLng(n,e);t.setLatLng(o)}(z,n,o),z.setOpacity(1),v(`https://nominatim.openstreetmap.org/reverse?lat=${n}&lon=${o}&format=jsonv2`,(t=>{let n=(t=JSON.parse(t)).address,o=n.city||n.town||n.village||n.hamlet,i=n.state,a=n.country;null!=i?a+=", "+i:i="",null!=o?a+=", "+o:o="",e(1,d.value=a,d),N(d)})),function(t,n){v(`https://nominatim.openstreetmap.org/reverse?lat=${t}&lon=${n}&format=jsonv2&accept-language=en`,(t=>{let n=(t=JSON.parse(t)).address,e=n.city||n.town||n.village||n.hamlet,o=n.state,i=n.country;null!=o||(o=""),null!=e||(e=""),h=[i,o,e]}))}(n,o)}))}function H(t){!1!==t?(e(0,p.innerHTML="You have been added to our database! Now go to our Discord to verify yourself.",p),e(0,p.style.color="green",p)):(e(0,p.innerHTML="Something went wrong.",p),e(0,p.style.color="red",p))}x(u,"countries",a),m((()=>{}));return[p,d,f,g,o,i,a,u,C,O,function(){if(null!=h){let t={country:h[0],state:h[1],town:h[2],latitude:b,longitude:w,contact:f.value,status:g.value};""==t.state&&(t.state=null),""==t.town&&(t.town=null),""==t.contact&&(t.contact=null),k("/"+C+"/communes-add-post/",t,H)}},function(t){c[t?"unshift":"push"]((()=>{d=t,e(1,d)}))},()=>N(d),function(t){c[t?"unshift":"push"]((()=>{f=t,e(2,f)}))},()=>N(f),function(t){c[t?"unshift":"push"]((()=>{g=t,e(3,g)}))},function(t){c[t?"unshift":"push"]((()=>{p=t,e(0,p)}))},t=>O(t,i,C)]}class H extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#confirmation-msg{margin-top:0.5rem;margin-bottom:2rem}ol li{margin-left:3rem;margin-bottom:0.5rem}label{display:inline-block;font-family:var(--serif,serif);font-size:1.15rem;line-height:160%;color:#222222;width:5.5rem}input,.ghost-input{font-size:1.15rem;font-family:var(--serif,serif)}input{height:2.5rem;display:inline-block;position:relative}#address-input,#contact-input{width:100%}#address-input-wrapper{margin-top:2rem;margin-bottom:1rem}#status-input{--width:100%;--height:2.5rem;--display:inline-block;--position:relative;--background-color:white;--border-radius:0.4rem;--border:black solid 0.063rem;--padding-left:0.5rem;--font-size:1.15rem;--font-family:var(--serif, serif)}#status-input-wrapper{margin-top:1rem;margin-bottom:0rem}.ghost-input{display:block;visibility:hidden;height:0;padding-left:0.5rem;padding-right:0.5rem}.input-wrapper{display:inline-block;max-width:calc(100% - 5.5rem);min-width:min(20rem, calc(100% - 5.5rem));height:2.5rem}.input-label-wrapper{display:flex;justify-content:start}.input-label-wrapper label{position:relative;top:0.3rem}.description{margin-bottom:1rem}#submit-button{display:block;margin:auto;margin-top:2rem;padding:1rem 2rem;font-size:1.4rem;font-family:var(--sans-serif,sans-serif);border:0rem solid black;border-radius:0.5rem;background:#cb1816;color:white}#communes-img{position:absolute;width:11.5rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}#map{--height:30rem;--width:100%;--margin-top:2rem;--margin-bottom:0.5rem}#text-container{position:relative;max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container p{text-align:justify}</style>",n(this,{target:this.shadowRoot,props:e(this.attributes),customElement:!0},O,T,i,{},null),t&&t.target&&o(t.target,this,t.anchor)}}customElements.define("communes-add-component",H);export{H as default};
