(this["webpackJsonphooks-app"]=this["webpackJsonphooks-app"]||[]).push([[0],{42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(16),s=c.n(r),a=c(7),i=c.n(a),l=c(17),o=c(5),d=c(18),j=c.n(d),h="https://www.breakingbadapi.com/api/",b=function(e){var t=Object(n.useState)({data:null,loading:!0,error:null}),c=Object(o.a)(t,2),r=c[0],s=c[1],a=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){a.current=!1}}),[]),Object(n.useEffect)((function(){var t=function(){var t=Object(l.a)(i.a.mark((function t(){var c,n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({data:null,loading:!0,error:null}),t.prev=1,c=j.a.create({baseURL:h}),t.next=5,c.get(e);case 5:n=t.sent,(r=n.data)&&(a.current?s({error:null,loading:!1,data:r}):console.log("Desmontado")),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log("Error"+t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),r},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(n.useState)(e),c=Object(o.a)(t,2),r=c[0],s=c[1],a=function(){s(r+1)},i=function(){s(r-1)},l=function(){s(e)};return{counter:r,increment:a,decrement:i,resetear:l}},u=(c(42),c(0)),x=function(){var e=g(1),t=e.counter,c=e.increment,n=e.decrement,r=b("characters/".concat(t)),s=r.loading,a=r.data,i=!!a&&a[0],l=i.name,o=i.nickname,d=i.status,j=i.img;return console.log(!a),Object(u.jsxs)("div",{className:"bg-clarito",children:[Object(u.jsx)("div",{children:s?Object(u.jsxs)("div",{className:"cargador-loading d-flex justify-content-center  align-items-center",children:[Object(u.jsx)("div",{className:"spinner-grow text-light m-2",role:"status"}),Object(u.jsx)("div",{className:"spinner-grow text-light m-2",role:"status"}),Object(u.jsx)("div",{className:"spinner-grow text-light m-2",role:"status"})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"center ",children:Object(u.jsx)("img",{src:"https://raw.githubusercontent.com/smilegupta/breaking-bad/master/src/img/logo.png",alt:""})}),Object(u.jsx)("div",{className:"contenedor",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:j,alt:"",className:"img__card"}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Nombre: "}),l]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Estado: "}),d]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Apodo: "}),o]})]})}),1===t?Object(u.jsx)("div",{onClick:c,className:"d-flex align-items-center align-self-center justify-content-center p-5 mr-5",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",className:"bi bi-arrow-right-circle-fill text-white",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"})})}):Object(u.jsxs)("div",{className:"d-flex lign-self-center justify-content-center p-5",children:[Object(u.jsx)("div",{onClick:n,className:"m-1",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",className:"bi bi-arrow-left-circle-fill text-white",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})})}),Object(u.jsx)("div",{onClick:c,className:"m-1",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",className:"bi bi-arrow-right-circle-fill text-white",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"})})})]})]})}),Object(u.jsx)("footer",{className:"bg-light text-center",children:Object(u.jsx)("div",{className:"text-center p-3 bg-dark",children:"\xa9 2021 Copyright | Andr\xe9s Felipe Mar\xedn Monsalve"})})]})};s.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4d6e028c.chunk.js.map