(function(A){function t(t){for(var a,o,s=t[0],c=t[1],i=t[2],u=0,l=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&l.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(A[a]=c[a]);g&&g(t);while(l.length)l.shift()();return r.push.apply(r,i||[]),e()}function e(){for(var A,t=0;t<r.length;t++){for(var e=r[t],a=!0,o=1;o<e.length;o++){var s=e[o];0!==n[s]&&(a=!1)}a&&(r.splice(t--,1),A=c(c.s=e[0]))}return A}var a={},o={app:0},n={app:0},r=[];function s(A){return c.p+"js/"+({about:"about"}[A]||A)+"."+{about:"f4d18c25"}[A]+".js"}function c(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(A){var t=[],e={about:1};o[A]?t.push(o[A]):0!==o[A]&&e[A]&&t.push(o[A]=new Promise((function(t,e){for(var a="css/"+({about:"about"}[A]||A)+"."+{about:"39313de4"}[A]+".css",n=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===a||u===n))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],u=i.getAttribute("data-href");if(u===a||u===n)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var a=t&&t.target&&t.target.src||n,r=new Error("Loading CSS chunk "+A+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[A],g.parentNode.removeChild(g),e(r)},g.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(g)})).then((function(){o[A]=0})));var a=n[A];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,e){a=n[A]=[t,e]}));t.push(a[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(A);var l=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(g);var e=n[A];if(0!==e){if(e){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+A+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,e[1](l)}n[A]=void 0}};var g=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},c.m=A,c.c=a,c.d=function(A,t,e){c.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},c.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},c.t=function(A,t){if(1&t&&(A=c(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var a in A)c.d(e,a,function(t){return A[t]}.bind(null,a));return e},c.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return c.d(t,"a",t),t},c.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},c.p="/instagram-clone/",c.oe=function(A){throw console.error(A),A};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var g=u;r.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"01ac":function(A,t,e){A.exports=e.p+"img/instagram-name.dcc389e5.png"},"034f":function(A,t,e){"use strict";var a=e("85ec"),o=e.n(a);o.a},"34e3":function(A,t,e){A.exports=e.p+"img/google-stor.d9982832.png"},"56d7":function(A,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("ada9");var a=e("2b0e"),o=e("a6f4"),n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],s=(e("034f"),e("2877")),c={},i=Object(s["a"])(c,n,r,!1,null,null,null),u=i.exports,l=(e("d3b7"),e("8c4f")),g=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"home",attrs:{id:"home"}},[a("div",{staticClass:"row main"},[a("div",{staticClass:"col-sm-2"}),a("div",{staticClass:"col-sm-4 mobile"}),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"login"},[a("center",[a("img",{staticClass:"img-insta",attrs:{src:e("01ac")}})]),a("form",[a("input",{directives:[{name:"model",rawName:"v-model",value:A.moboremail,expression:"moboremail"}],staticClass:"box-in",attrs:{placeholder:"Mobile number or username or email"},domProps:{value:A.moboremail},on:{input:function(t){t.target.composing||(A.moboremail=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:A.pass,expression:"pass"}],staticClass:"box-in",attrs:{type:"password",placeholder:"password"},domProps:{value:A.pass},on:{input:function(t){t.target.composing||(A.pass=t.target.value)}}}),a("button",{staticClass:"login-btn",attrs:{type:"button"},on:{click:A.check}},[A._v("Log In")])]),A._m(0),a("div",{staticClass:"facebook"},[a("a",{attrs:{href:""}},[a("img",{attrs:{src:e("d0c5"),alt:""}}),A._v("Log in with Facebook")])]),A._m(1)],1),a("div",{staticClass:"login"},[a("p",{staticClass:"signup"},[A._v("Don't have an account? "),a("router-link",{attrs:{to:"/signup"}},[A._v("Sign Up")])],1)]),a("p",{staticClass:"get-app"},[A._v("Get the app")]),a("div",{staticClass:"row app-getting"},[a("div",{staticClass:"col-sm-1"}),a("div",{staticClass:"col-sm-4"},[a("img",{staticClass:"Rt8TI ",attrs:{src:e("f9c7"),alt:""}})]),a("div",{staticClass:"col-sm-4"},[a("img",{staticClass:"Rt8TI ",attrs:{src:e("34e3"),alt:""}})]),a("div",{staticClass:"col-sm-2"})])]),a("div",{staticClass:"col-sm-2"})]),A._m(2)])},m=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"row K-1uj Z7p_S"},[e("div",{staticClass:"col-sm-1"}),e("div",{staticClass:"col-sm-4 s311c"}),e("div",{staticClass:"col-sm-1 _0tv-g"},[A._v("OR")]),e("div",{staticClass:"col-sm-4 s311c"}),e("div",{staticClass:"col-sm-1"})])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"for-pass"},[e("a",{attrs:{href:""}},[A._v("Forget Password?")])])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"footer"},[e("p",[e("a",{attrs:{href:""}},[A._v("ABOUT")]),e("a",{attrs:{href:""}},[A._v("HELP")]),e("a",{attrs:{href:""}},[A._v("PRESS")]),e("a",{attrs:{href:""}},[A._v("API")]),e("a",{attrs:{href:""}},[A._v("JOBS")]),e("a",{attrs:{href:""}},[A._v("PRIVACY")]),e("a",{attrs:{href:""}},[A._v("TERMS")]),e("a",{attrs:{href:""}},[A._v("LOCATIONS")]),e("a",{attrs:{href:""}},[A._v("HASHTAGS")]),e("a",{attrs:{href:""}},[A._v("TOP ACCOUNTS")]),e("a",{attrs:{href:""}},[A._v("LANGUAGE")]),e("a",{staticClass:"disabled",attrs:{href:""}},[A._v("©2020 INSTAGRAM FROM FACEBOOK")])])])}],d=(e("4160"),e("159b"),{name:"Home",props:{msg:String},data:function(){return{moboremail:null,pass:null}},methods:{check:function(){var A=this;if(console.log("1st"),this.moboremail){console.log("2st");var t=JSON.parse(localStorage.getItem("instausers"));console.log(t);var e=!1;t.forEach((function(t){console.log(t.moboremail),console.log(t.pass),t.moboremail!=A.moboremail&&t.uname!=A.moboremail&&t.email!=A.moboremail||t.pass!=A.pass||(console.log("hello"),e=!0)})),e?(this.$router.push({path:"/upload"}),sessionStorage.setItem("email",this.moboremail)):(alert("Invalid"),console.log("4st"))}}}}),f=d,p=(e("b78b"),Object(s["a"])(f,g,m,!1,null,"69efd174",null)),C=p.exports;a["default"].use(l["a"]);var v=[{path:"/",name:"Home",component:C},{path:"/movieapp",name:"movieapp",component:function(){return e.e("about").then(e.bind(null,"d1b3"))}},{path:"/signup",name:"signup",component:function(){return e.e("about").then(e.bind(null,"6cd2"))}},{path:"/home",name:"home",component:C},{path:"/upload",name:"upload",component:function(){return e.e("about").then(e.bind(null,"9dac"))}},{path:"/profile",name:"profile",component:function(){return e.e("about").then(e.bind(null,"09ee"))}},{path:"/edit",name:"edit",component:function(){return e.e("about").then(e.bind(null,"bf45"))}},{path:"/change_poto",name:"change_poto",component:function(){return e.e("about").then(e.bind(null,"e3c3"))}},{path:"/edit-post",name:"edit-post",component:function(){return e.e("about").then(e.bind(null,"81f7"))}}],h=new l["a"]({routes:v}),b=h,Q=e("ea07"),E=e.n(Q),B=e("0a63"),I=e.n(B);a["default"].use(E.a),a["default"].use(I.a),a["default"].config.productionTip=!1,a["default"].use(o["b"]),new a["default"]({router:b,render:function(A){return A(u)}}).$mount("#app")},"85ec":function(A,t,e){},a5b7:function(A,t,e){},b78b:function(A,t,e){"use strict";var a=e("a5b7"),o=e.n(a);o.a},d0c5:function(A,t){A.exports="data:image/png;base64,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"},f9c7:function(A,t,e){A.exports=e.p+"img/app-store.5a105248.png"}});
//# sourceMappingURL=app.10175986.js.map