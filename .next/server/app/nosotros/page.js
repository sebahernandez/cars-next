(()=>{var e={};e.id=555,e.ids=[555],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3750:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>x,tree:()=>c});var s=r(482),a=r(9108),n=r(2563),o=r.n(n),i=r(8300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["nosotros",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8740)),"/Users/sebacure/Proyect/cars-next/app/nosotros/page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2818)),"/Users/sebacure/Proyect/cars-next/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/sebacure/Proyect/cars-next/app/nosotros/page.jsx"],m="/nosotros/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/nosotros/page",pathname:"/nosotros",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2396:(e,t,r)=>{Promise.resolve().then(r.bind(r,7952)),Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.t.bind(r,1476,23))},7952:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(5344);r(3729);var a=r(7892),n=r(9410),o=r(1067),i=r(3583);function l(){return(0,s.jsxs)("div",{className:"container mx-auto mb-8 md:mb-28 md:py-10",children:[s.jsx("h1",{className:"text-center text-xl my-10 font-bold md:text-4xl",children:"Empresas Partner"}),s.jsx(o.tq,{modules:[i.pt],spaceBetween:50,slidesPerView:4,autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:4,spaceBetween:30}},children:[{name:"autofin",logoUrl:"/img/brands/auto-fin.webp"},{name:"falabella",logoUrl:"/img/brands/banco-falabella.webp"},{name:"bci",logoUrl:"/img/brands/bci-seguros.webp"},{name:"club-seguro",logoUrl:"/img/brands/club-seguro.webp"},{name:"compara",logoUrl:"/img/brands/compara.webp"},{name:"euro-capital",logoUrl:"/img/brands/euro-capital.webp"},{name:"nuevo-capital",logoUrl:"/img/brands/nuevo-capital.webp"},{name:"olx-autos",logoUrl:"/img/brands/olx-autos.webp"}].map(e=>{let t=(0,a.Z)();return s.jsx(o.o5,{children:s.jsx(n.default,{src:e.logoUrl,alt:e.name,width:210,height:80,className:"mx-auto"})},t)})})]})}r(3754),r(4776)},7892:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(6113),a=r.n(s);let n={randomUUID:a().randomUUID},o=new Uint8Array(256),i=o.length,l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));let c=function(e,t,r){if(n.randomUUID&&!t&&!e)return n.randomUUID();let s=(e=e||{}).random||(e.rng||function(){return i>o.length-16&&(a().randomFillSync(o),i=0),o.slice(i,i+=16)})();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=s[e];return t}return function(e,t=0){return l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]}(s)}},8740:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>l});var s=r(5036);r(2);var a=r(2813),n=r(8026),o=r.n(n),i=r(3189);let l={title:"Nuestro equipo",description:"Equipo de buycars en acci\xf3n"},c=()=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("section",{className:" container mx-auto relative bg-cover bg-top h-600 text-white flex flex-col justify-center items-center",style:{backgroundImage:"url('/img/team/team-buycars.webp')",height:"600px"},children:[s.jsx("div",{className:"absolute inset-0 bg-black opacity-80"}),(0,s.jsxs)("div",{className:"relative container mx-auto flex flex-col",children:[s.jsx("h1",{className:"text-xl md:text-4xl font-bold text-center pt-20",children:"Nuestro Equipo"}),s.jsx("p",{className:"text-center px-10 py-10 md:w-[800px] md:mx-auto",children:"En Buycars nos esmeramos siempre en ofrecer siempre el mejor servicio de forma personalizada. Con profesionales y m\xe1s de 10 a\xf1os de trayectoria de su equipo, generamos experiencias de compra y venta con altos niveles de satisfacci\xf3n."})]})]}),s.jsx("section",{className:"container mx-auto px-4 mt-[100px]",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center p-4",children:[s.jsx("div",{className:"relative h-32 w-32 rounded-full overflow-hidden",children:s.jsx(a.default,{src:"/img/team/victor-jaque.webp",alt:"Victor Jaque",width:500,height:500})}),s.jsx("h2",{className:"text-lg font-bold my-2",children:"Victor Jaque"})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center p-4",children:[s.jsx("div",{className:"relative h-32 w-32 rounded-full overflow-hidden",children:s.jsx(a.default,{src:"/img/team/pablo-gonzalez.webp",alt:"Pablo Gonzalez",width:500,height:500})}),s.jsx("h2",{className:"text-lg font-bold my-2",children:"Pablo Gonzalez"})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center  p-4",children:[s.jsx("div",{className:"relative h-32 w-32 rounded-full overflow-hidden  ",children:s.jsx(a.default,{src:"/img/team/roberto-aguilera.webp",alt:"Roberto Aguilera",width:500,height:500})}),s.jsx("h2",{className:"text-lg font-bold my-2",children:"Roberto Aguilera"})]})]})}),s.jsx("section",{className:"container mx-auto flex justify-center items-center mt-[100px] mb-[100px]",children:(0,s.jsxs)("div",{className:"border-8 border-cyan-400 w-[600px] h-[300px] flex flex-col items-center justify-center p-5 rounded",children:[s.jsx("h2",{className:"text-xl md:text-4xl text-center",children:"Ven a nuestro local y vive la mejor experiencia de venta automotriz en Chile"}),s.jsx(o(),{href:"/contacto",className:"text-black bg-cyan-300 rounded-full px-4 py-2 mt-4 font-bold",children:"Como llegar a nuestras oficinas"})]})}),s.jsx("section",{children:s.jsx(i.ZP,{})})]})},3189:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>o});let s=(0,r(6843).createProxy)(String.raw`/Users/sebacure/Proyect/cars-next/components/Brands.jsx`),{__esModule:a,$$typeof:n}=s,o=s.default},8026:(e,t,r)=>{"use strict";let{createProxy:s}=r(6843);e.exports=s("/Users/sebacure/Proyect/cars-next/node_modules/next/dist/client/link.js")},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},4776:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,914,337,764,441],()=>r(3750));module.exports=s})();