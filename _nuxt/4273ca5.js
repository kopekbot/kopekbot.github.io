(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{231:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(248))&&n.__esModule?n:{default:n};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=d;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!d(e)||t.test(e)}))}},232:function(e,t,r){e.exports=r.p+"img/kopekbanner.7b36c1b.png"},236:function(e,t,r){var content=r(271);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("5132146e",content,!0,{sourceMap:!1})},237:function(e,t,r){var content=r(273);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("3b7b904e",content,!0,{sourceMap:!1})},238:function(e,t,r){"use strict";r.r(t);r(87);var n=r(61),o=r.n(n),l=r(246),d={name:"bugform",data:function(){return{isBug:"Bug",adim:1,uyari:0,user:"Lütfen Giriş Yapınız",baslikbug:"",gereken:"",olan:"",submitStatus:"",error:"",title:"Teşekkürler...",baslikoner:"",desc:""}},validations:{baslikbug:{required:l.required},gereken:{required:l.required},olan:{required:l.required},desc:{required:l.required},baslikoner:{required:l.required},bug:["baslikbug","gereken","olan"],oner:["baslikoner","desc"]},methods:{gizle:function(input){var element=document.getElementById(input);element.parentNode.removeChild(element)},sil:function(){this.adim>1?this.adim-=1:this.uyari=1},gonderbug:function(){var e=this;if(this.$v.$touch(),!this.$v.bug.$invalid){this.submitStatus="PENDING";for(var t=[],i=1;this.adim+1>i;i++)t[i]="\n"+i+". Adım : "+document.getElementById("adim"+i).value+"\n";o.a.post("https://canary.discordapp.com/api/webhooks/764553541213618210/zP6qMAp3yv7GP14z7-mZauePTVgjqSpkQq7VawB8D9eBmzxP53uQpD4uYJKak0xJSNbc",{embeds:[{title:"Yeni "+this.isBug,description:"**Başlık :** "+this.baslikbug+"\n\n**Yeniden Üretme Adımları:"+t.join("")+"**\n\n**Normalde olması gereken:** "+this.gereken+"\n\n**Şu anda olan:** "+this.olan,color:14421486,footer:{text:"Discord Username : "+this.user+"  ID : "+this.$auth.user.id}}]}).catch((function(t){throw e.title="🤔 Bir hata oluştu...",e.submitStatus="ERROR",new Error(e.error=t.message)})).then((function(){e.submitStatus="SUBMIT"}))}},gonderoner:function(){var e=this;if(this.$v.$touch(),!this.$v.oner.$invalid){this.submitStatus="PENDING";var t=document.getElementById("baslık").value,r=document.getElementById("desc").value;o.a.post("https://canary.discordapp.com/api/webhooks/764553541213618210/zP6qMAp3yv7GP14z7-mZauePTVgjqSpkQq7VawB8D9eBmzxP53uQpD4uYJKak0xJSNbc",{embeds:[{title:"Yeni "+this.isBug,description:"**Başlık :** "+t+"\n\n**Açıklama:** "+r,color:14421486,footer:{text:"Discord Username : "+this.user+"  ID : "+this.$auth.user.id}}]}).catch((function(t){throw e.title="🤔 Bir hata oluştu...",e.submitStatus="ERROR",new Error(e.error=t.message)})).then((function(){e.submitStatus="SUBMIT"}))}},uyarisil:function(){this.uyari>0&&(this.uyari-=1)}},mounted:function(){this.$auth.loggedIn?this.user=this.$auth.user.username+"#"+this.$auth.user.discriminator:this.$auth.loginWith("discord")}},c=(r(270),r(23)),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"container"},[e._l(e.uyari,(function(t){return r("div",{key:t,staticClass:"notification is-danger",attrs:{id:"uyari"}},[r("button",{staticClass:"delete",on:{click:function(t){return e.uyarisil()}}}),e._v(" "),e._m(0,!0)])})),e._v(" "),r("div",{staticClass:"modal",class:{"is-active":"SUBMIT"===this.submitStatus||"ERROR"===this.submitStatus}},[r("div",{staticClass:"modal-background"}),e._v(" "),r("div",{staticClass:"modal-card"},[r("header",{staticClass:"modal-card-head"},[r("p",{staticClass:"modal-card-title"},[e._v(e._s(e.title))]),e._v(" "),r("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(t){e.submitStatus=""}}})]),e._v(" "),r("section",{staticClass:"modal-card-body"},["SUBMIT"===e.submitStatus?r("div",[e._v("\n          Gönderiniz başarıyla gönderildi!\n        ")]):e._e(),e._v(" "),"ERROR"===e.submitStatus?r("div",[e._v("\n          Gönderiniz gönderilemedi lütfen daha sonra deneyin!\n          "),r("br"),e._v("\n          Hata Kodu: "+e._s(this.error)+"\n        ")]):e._e()]),e._v(" "),e._m(1)])]),e._v(" "),"Bug"===e.isBug?r("div",{attrs:{id:"mesajkutusu"}},[r("article",{staticClass:"message is-danger"},[r("div",{staticClass:"message-header"},[r("p",[e._v("Uyarı")]),e._v(" "),r("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(t){return e.gizle("mesajkutusu")}}})]),e._v(" "),e._m(2)]),e._v(" "),r("br")]):e._e(),e._v(" "),r("div",{attrs:{id:"form"}},[r("div",{staticClass:"username"},[r("label",{attrs:{for:"Discord"}},[e._v(" Discord Kullanıcı Adı: ")]),r("br"),r("input",{staticClass:"input",staticStyle:{width:"500px"},attrs:{type:"text",id:"Discord",name:"username-discord",disabled:""},domProps:{value:e.user}})]),e._v(" "),r("div",{staticClass:"control"},[r("label",{staticClass:"radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.isBug,expression:"isBug"}],attrs:{type:"radio",name:"answer",value:"Bug"},domProps:{checked:e._q(e.isBug,"Bug")},on:{change:function(t){e.isBug="Bug"}}}),e._v("Hata")]),e._v(" "),r("label",{staticClass:"radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.isBug,expression:"isBug"}],attrs:{type:"radio",name:"answer",value:"Oneri"},domProps:{checked:e._q(e.isBug,"Oneri")},on:{change:function(t){e.isBug="Oneri"}}}),e._v("Öneri")])]),e._v(" "),"Bug"===e.isBug?r("div",{staticClass:"container",attrs:{id:"bug"}},[r("label",{attrs:{for:"baslikbug"}},[e._v("Hata nın kısa açıklaması: ")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.baslikbug,expression:"baslikbug",modifiers:{trim:!0}}],staticClass:"input",staticStyle:{width:"500px"},attrs:{type:"text",placeholder:"Başlık",id:"baslikbug"},domProps:{value:e.baslikbug},on:{input:function(t){t.target.composing||(e.baslikbug=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("p",[e._v("Hata nın Adımları: "),r("button",{staticClass:"button is-success is-small",staticStyle:{"margin-right":"5px"},on:{click:function(t){e.adim+=1}}},[e._v("Ekle")]),r("button",{staticClass:"button is-danger is-small",on:{click:e.sil}},[e._v("Sil")])]),e._v(" "),e._l(e.adim,(function(e){return r("input",{key:e,staticClass:"input",staticStyle:{width:"500px"},attrs:{id:"adim"+e,type:"text",placeholder:e+". Adım",name:"1"}})})),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("label",{attrs:{for:"gereken"}},[e._v("Normalde olması gereken: ")]),r("br"),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.gereken,expression:"gereken",modifiers:{trim:!0}}],staticClass:"textarea",staticStyle:{width:"500px"},attrs:{type:"text",placeholder:"Normalde olması gereken",id:"gereken"},domProps:{value:e.gereken},on:{input:function(t){t.target.composing||(e.gereken=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("label",{attrs:{for:"olan"}},[e._v("Şu anda olan: ")]),r("br"),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.olan,expression:"olan",modifiers:{trim:!0}}],staticClass:"textarea",staticStyle:{width:"500px"},attrs:{type:"text",placeholder:"Şu anda olan",id:"olan"},domProps:{value:e.olan},on:{input:function(t){t.target.composing||(e.olan=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("br"),e._v(" "),r("p",{staticClass:"control"},[r("a",{staticClass:"button is-primary",class:{"is-danger":this.$v.bug.$invalid},attrs:{disabled:this.$v.bug.$invalid||"PENDING"===e.submitStatus||"ERROR"===e.submitStatus},on:{click:e.gonderbug}},[e._v("\n                        Gönder\n                    ")])]),e._v(" "),this.$v.bug.$invalid?r("div",{staticClass:"notification is-danger",staticStyle:{"margin-top":"20px"}},[e._v("Lütfen bütün bölümleri doldurun")]):e._e()],2):e._e(),e._v(" "),"Oneri"===e.isBug?r("div",{staticClass:"container",attrs:{id:"oneri"}},[r("label",{attrs:{for:"baslık"}},[e._v("Başlık: ")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.baslikoner,expression:"baslikoner",modifiers:{trim:!0}}],staticClass:"input",staticStyle:{width:"500px"},attrs:{type:"text",placeholder:"Başlık",id:"baslık"},domProps:{value:e.baslikoner},on:{input:function(t){t.target.composing||(e.baslikoner=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("br"),e._v(" "),r("label",{attrs:{for:"desc"}},[e._v("Açıklama: "),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.desc,expression:"desc",modifiers:{trim:!0}}],staticClass:"textarea",attrs:{placeholder:"Açıklama",id:"desc"},domProps:{value:e.desc},on:{input:function(t){t.target.composing||(e.desc=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),r("br"),e._v(" "),r("p",{staticClass:"control"},[r("a",{staticClass:"button is-primary",class:{"is-danger":this.$v.oner.$invalid},attrs:{disabled:this.$v.oner.$invalid||"PENDING"===e.submitStatus||"ERROR"===e.submitStatus},on:{click:e.gonderoner}},[e._v("\n                  Gönder\n                ")])]),e._v(" "),this.$v.oner.$invalid?r("div",{staticClass:"notification is-danger",staticStyle:{"margin-top":"20px"}},[e._v("Lütfen bütün bölümleri doldurun")]):e._e()]):e._e()])],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("En az "),t("strong",[this._v("bir")]),this._v(" tane adım olmalı.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("footer",{staticClass:"modal-card-foot"},[t("p",[this._v("\n          Designed by "),t("strong",[this._v("ShockTr")]),this._v(", created with "),t("strong",[t("a",{attrs:{href:"https://bulma.io/?utm_source=borakayik"}},[this._v("Bulma")])]),this._v(" and ❤️\n        ")]),this._v(" "),t("p",[this._v("\n          Discord Adresim: Shock#1000 (301374055867613184)\n        ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message-body"},[r("strong",[e._v("Hata göndermeden önce yapmanız gerekenler:")]),e._v(" "),r("p",[e._v("1- "),r("strong",[e._v("Hata")]),e._v("nızın daha önce raporlanmadığını "),r("a",{attrs:{href:"https://trello.com/b/BRibixHw/k%C3%B6pek-bot"}},[e._v("Trello")]),e._v(" adresimizden kontrol edin.")]),e._v(" "),r("p",[e._v("2- "),r("strong",[e._v("Hata")]),e._v("nızın fotoğraflarını alın.")]),e._v(" "),r("p",[e._v("3- "),r("strong",[e._v("Hata")]),e._v("nızın yeniden üretilebilir olduğundan emin olun.")]),e._v(" "),r("br"),e._v(" "),r("strong",[e._v("Bunları yaptıysanız "),r("strong",[e._v("hata")]),e._v("nızın raporlamaktan çekinmeyin.")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:r(110).default})},239:function(e,t,r){"use strict";r.r(t);r(25),r(40);var n=r(61),o=r.n(n),l={name:"botstatus",data:function(){return{durum:"Yükleniyor ...",color:"gray",statusPage:"https://kopekbot.statuspage.io/"}},created:function(){var e=this;o.a.get("https://q8wvhwj7prwf.statuspage.io/api/v2/status.json").then((function(t){switch(e.durum=t.data.status.description,t.data.status.indicator){case"none":e.durum="Her şey olması gerektiği gibi.",e.color="#43B581";break;case"minor":e.durum="Kısmen bozulmuş.",e.color="#F1C40F";break;case"major":e.durum="Kısmen çalışmıyor.",e.color="#E67E22";break;case"critcal":e.durum="Komple bozulmuş.",e.color="#E74C3C";break;case"maintenance":e.durum="Bakımda.",e.color="#3498DB"}}))},methods:{}},d=r(23),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"box",style:{backgroundColor:this.color}},[t("strong",{staticStyle:{color:"#ffffff"}},[this._v("Bot Durumu : "+this._s(this.durum))])])}),[],!1,null,null,null);t.default=component.exports},246:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return B.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return M.default}}),t.helpers=void 0;var o=E(r(247)),l=E(r(250)),d=E(r(251)),c=E(r(252)),f=E(r(253)),m=E(r(254)),v=E(r(255)),h=E(r(256)),y=E(r(257)),_=E(r(258)),k=E(r(259)),P=E(r(260)),w=E(r(261)),x=E(r(262)),j=E(r(263)),O=E(r(264)),S=E(r(265)),$=E(r(266)),B=E(r(267)),C=E(r(268)),M=E(r(269)),z=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=A();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var desc=o?Object.getOwnPropertyDescriptor(e,l):null;desc&&(desc.get||desc.set)?Object.defineProperty(r,l,desc):r[l]=e[l]}r.default=e,t&&t.set(e,r);return r}(r(231));function A(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return A=function(){return e},e}function E(e){return e&&e.__esModule?e:{default:e}}t.helpers=z},247:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(231).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},248:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(249).withParams:r(166).withParams;t.default=n}).call(this,r(115))},249:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(24))},250:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(231).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},251:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(231).regex)("numeric",/^[0-9]*$/);t.default=n},252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},253:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(231).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=n},254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},255:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},256:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},257:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},258:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},259:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},260:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},261:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},262:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(231).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},263:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},264:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},266:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(231);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},268:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(231).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},269:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(231).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},270:function(e,t,r){"use strict";var n=r(236);r.n(n).a},271:function(e,t,r){(t=r(65)(!1)).push([e.i,"#form{text-align:center;justify-items:center}.container{margin:0 auto;max-width:1280px;width:90%}.control{margin-top:10px}@media only screen and (min-width:601px){.container{width:85%}}@media only screen and (min-width:993px){.container{width:70%}}",""]),e.exports=t},272:function(e,t,r){"use strict";var n=r(237);r.n(n).a},273:function(e,t,r){(t=r(65)(!1)).push([e.i,".foto{display:block;margin-left:auto;margin-right:auto;width:25%}.container{margin:0 auto;max-width:1280px;width:90%}@media only screen and (min-width:601px){.container{width:85%}}@media only screen and (min-width:993px){.container{width:70%}}",""]),e.exports=t},277:function(e,t,r){"use strict";r.r(t);var n=r(238),o=r(239),l={name:"App",components:{bugform:n.default,botstatus:o.default},methods:{logout:function(){this.$auth.logout(),location.reload()}}},d=(r(272),r(23)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"relative","min-height":"100vh"},attrs:{id:"app"}},[n("div",{staticStyle:{"padding-bottom":"10rem"}},[n("button",{staticClass:"button is-primary",staticStyle:{margin:"10px"},on:{click:function(t){e.$auth.loggedIn?e.logout():e.$auth.loginWith("discord")}}},[n("i",{staticClass:"fab fa-discord",staticStyle:{"margin-right":"10px"}}),e._v(" "+e._s(e.$auth.loggedIn?"Çıkış Yap":"Giriş Yap"))]),e._v(" "),n("img",{staticClass:"foto",attrs:{src:r(232)}}),e._v(" "),n("hr"),e._v(" "),n("botstatus",{staticClass:"container"}),e._v(" "),n("bugform")],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Botstatus:r(239).default,Bugform:r(238).default})}}]);