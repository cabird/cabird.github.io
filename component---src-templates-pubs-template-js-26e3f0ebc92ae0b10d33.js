(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+6XX":function(t,e,n){var r=n("y1pI");t.exports=function(t){return r(this.__data__,t)>-1}},"+c4W":function(t,e,n){var r=n("711d"),o=n("4/ic"),a=n("9ggG"),i=n("9Nap");t.exports=function(t){return a(t)?r(i(t)):o(t)}},"/9aa":function(t,e,n){var r=n("NykK"),o=n("ExA7");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},"/d1K":function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("iSRb"),c=n.n(i),u=function(t){var e=t.author,n=t.isIndex;return o.a.createElement("div",{className:c.a.author},o.a.createElement(a.Link,{to:"/"},o.a.createElement("img",{src:Object(a.withPrefix)(e.photo),className:c.a.author__photo,width:"100",height:"100",alt:e.name})),!0===n?o.a.createElement("h1",{className:c.a.author__title},o.a.createElement(a.Link,{className:c.a["author__title-link"],to:"/"},e.name)):o.a.createElement("h2",{className:c.a.author__title},o.a.createElement(a.Link,{className:c.a["author__title-link"],to:"/"},e.name)),o.a.createElement("p",{className:c.a.author__subtitle},e.bio))},s=n("7Qib"),f=n("euHg"),l=n.n(f),p=function(t){var e=t.name,n=t.icon;return o.a.createElement("svg",{className:l.a.icon,viewBox:n.viewBox},o.a.createElement("title",null,e),o.a.createElement("path",{d:n.path}))},v=n("aU/I"),h=n.n(v),y=function(t){var e=t.contacts;return o.a.createElement("div",{className:h.a.contacts},o.a.createElement("ul",{className:h.a.contacts__list},Object.keys(e).map((function(t){return e[t]?o.a.createElement("li",{className:h.a["contacts__list-item"],key:t},o.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(s.a)(t,e[t]),rel:"noopener noreferrer",target:"_blank"},o.a.createElement(p,{name:t,icon:Object(s.b)(t)}))):null}))))},_=n("Nrk+"),m=n.n(_),b=function(t){var e=t.copyright;return o.a.createElement("div",{className:m.a.copyright},e)},d=n("je8k"),x=n.n(d),g=function(t){var e=t.menu;return o.a.createElement("nav",{className:x.a.menu},o.a.createElement("ul",{className:x.a.menu__list},e.map((function(t){return o.a.createElement("li",{className:x.a["menu__list-item"],key:t.path},o.a.createElement(a.Link,{to:t.path,className:x.a["menu__list-item-link"],activeClassName:x.a["menu__list-item-link--active"]},t.label))}))))},j=n("SySy"),w=n.n(j),E=n("gGy4"),O=function(t){var e=t.isIndex,n=Object(E.b)(),r=n.author,a=n.copyright,i=n.menu;return o.a.createElement("div",{className:w.a.sidebar},o.a.createElement("div",{className:w.a.sidebar__inner},o.a.createElement(u,{author:r,isIndex:e}),o.a.createElement(g,{menu:i}),o.a.createElement(y,{contacts:r.contacts}),o.a.createElement(b,{copyright:a})))}},"03A+":function(t,e,n){var r=n("JTzB"),o=n("ExA7"),a=Object.prototype,i=a.hasOwnProperty,c=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&i.call(t,"callee")&&!c.call(t,"callee")};t.exports=u},"0Cz8":function(t,e,n){var r=n("Xi7e"),o=n("ebwN"),a=n("e4Nc");t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var i=n.__data__;if(!o||i.length<199)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(i)}return n.set(t,e),this.size=n.size,this}},"0ycA":function(t,e){t.exports=function(){return[]}},"1hJj":function(t,e,n){var r=n("e4Nc"),o=n("ftKO"),a=n("3A9y");function i(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},"2gN3":function(t,e,n){var r=n("Kz5y")["__core-js_shared__"];t.exports=r},"3A9y":function(t,e){t.exports=function(t){return this.__data__.has(t)}},"3Fdi":function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},"4/ic":function(t,e,n){var r=n("ZWtO");t.exports=function(t){return function(e){return r(e,t)}}},"44Ds":function(t,e,n){var r=n("e4Nc");function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},"4kuk":function(t,e,n){var r=n("SfRM"),o=n("Hvzi"),a=n("u8Dt"),i=n("ekgI"),c=n("JSQU");function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},"4sDh":function(t,e,n){var r=n("4uTw"),o=n("03A+"),a=n("Z0cm"),i=n("wJg7"),c=n("shjB"),u=n("9Nap");t.exports=function(t,e,n){for(var s=-1,f=(e=r(e,t)).length,l=!1;++s<f;){var p=u(e[s]);if(!(l=null!=t&&n(t,p)))break;t=t[p]}return l||++s!=f?l:!!(f=null==t?0:t.length)&&c(f)&&i(p,f)&&(a(t)||o(t))}},"4uTw":function(t,e,n){var r=n("Z0cm"),o=n("9ggG"),a=n("GNiM"),i=n("dt0z");t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:a(i(t))}},"6sVZ":function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},"711d":function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},"77Zs":function(t,e,n){var r=n("Xi7e");t.exports=function(){this.__data__=new r,this.size=0}},"7GkX":function(t,e,n){var r=n("b80T"),o=n("A90E"),a=n("MMmD");t.exports=function(t){return a(t)?r(t):o(t)}},"7fqy":function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}},"98A0":function(t,e,n){"use strict";n.r(e);var r=n("bt/X"),o=n.n(r),a=n("q1tI"),i=n.n(a),c=(n("Wbzz"),n("Zttt")),u=n("/d1K"),s=n("RXmK"),f=function(t){var e=Object(a.useState)(!1),n=e[0],r=e[1];return i.a.createElement("span",null,i.a.createElement("span",null,t.authors.join(", "),". "),i.a.createElement("span",{style:{fontWeight:"bold"}}," ",t.title,". "),"In ",i.a.createElement("span",{style:{fontStyle:"italic"}},t.booktitle||t.journal||"UNKNOWN",","),i.a.createElement("span",null," ",t.year,". "),t.hasPdf?i.a.createElement("span",null," [",i.a.createElement("a",{href:t.pdf},"pdf"),"] "):i.a.createElement("span",null),"[",i.a.createElement("a",{onClick:function(){return r(!n)},style:{cursor:"pointer"}},"BibTex"),"]",n?i.a.createElement("div",null," ",i.a.createElement("pre",null,t.raw)," "):null)},l=n("gGy4");function p(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.default=function(t){for(var e,n=t.data,r=Object(l.b)(),a=(r.title,r.subtitle,[]),v=p(n.allFile.edges);!(e=v()).done;){var h=e.value;a[h.node.name]=h.node}var y=n.allReference.edges.map((function(t){return t.node})),_=o()(y,(function(t){return t.year}));return i.a.createElement(c.a,null,i.a.createElement(u.a,null),i.a.createElement(s.a,{title:"Publications"},Object.keys(_).reverse().map((function(t){return i.a.createElement("div",null,i.a.createElement("h2",null,t),i.a.createElement("ul",null,_[t].map((function(t){return i.a.createElement("li",{key:t.key},i.a.createElement(f,Object.assign({},t,{hasPdf:t.key in a,pdf:t.key in a?a[t.key].publicURL:"none"})))}))))}))))}},"9Nap":function(t,e,n){var r=n("/9aa");t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},"9ggG":function(t,e,n){var r=n("Z0cm"),o=n("/9aa"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(i.test(t)||!a.test(t)||null!=e&&t in Object(e))}},A90E:function(t,e,n){var r=n("6sVZ"),o=n("V6Ve"),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n);return e}},AP2z:function(t,e,n){var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(u){}var o=i.call(t);return r&&(e?t[c]=n:delete t[c]),o}},B8du:function(t,e){t.exports=function(){return!1}},CH3K:function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},CMye:function(t,e,n){var r=n("GoyQ");t.exports=function(t){return t==t&&!r(t)}},Cwc5:function(t,e,n){var r=n("NKxu"),o=n("Npjl");t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},DSRE:function(t,e,n){(function(t){var r=n("Kz5y"),o=n("B8du"),a=e&&!e.nodeType&&e,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,c=i&&i.exports===a?r.Buffer:void 0,u=(c?c.isBuffer:void 0)||o;t.exports=u}).call(this,n("YuTi")(t))},E2jh:function(t,e,n){var r,o=n("2gN3"),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},EpBk:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GDhZ:function(t,e,n){var r=n("wF/u"),o=n("mwIZ"),a=n("hgQt"),i=n("9ggG"),c=n("CMye"),u=n("IOzZ"),s=n("9Nap");t.exports=function(t,e){return i(t)&&c(e)?u(s(t),e):function(n){var i=o(n,t);return void 0===i&&i===e?a(n,t):r(e,i,3)}}},GNiM:function(t,e,n){var r=n("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)})),e}));t.exports=i},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},H8j4:function(t,e,n){var r=n("QkVE");t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},HDyB:function(t,e,n){var r=n("nmnc"),o=n("JHRd"),a=n("ljhN"),i=n("or5M"),c=n("7fqy"),u=n("rEGp"),s=r?r.prototype:void 0,f=s?s.valueOf:void 0;t.exports=function(t,e,n,r,s,l,p){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!l(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var v=c;case"[object Set]":var h=1&r;if(v||(v=u),t.size!=e.size&&!h)return!1;var y=p.get(t);if(y)return y==e;r|=2,p.set(t,e);var _=i(v(t),v(e),r,s,l,p);return p.delete(t),_;case"[object Symbol]":if(f)return f.call(t)==f.call(e)}return!1}},HOxn:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Promise");t.exports=r},Hvzi:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},I01J:function(t,e,n){var r=n("44Ds");t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},IOzZ:function(t,e){t.exports=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}},JC6p:function(t,e,n){var r=n("cq/+"),o=n("7GkX");t.exports=function(t,e){return t&&r(t,e,o)}},JD84:function(t,e,n){var r=n("SKAX");t.exports=function(t,e,n,o){return r(t,(function(t,r,a){e(o,t,n(t),a)})),o}},JHRd:function(t,e,n){var r=n("Kz5y").Uint8Array;t.exports=r},JHgL:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).get(t)}},JSQU:function(t,e,n){var r=n("YESw");t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},JTzB:function(t,e,n){var r=n("NykK"),o=n("ExA7");t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},Juji:function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},KMkd:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},L8xA:function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},LXxW:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a}},MMmD:function(t,e,n){var r=n("lSCD"),o=n("shjB");t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},MvSz:function(t,e,n){var r=n("LXxW"),o=n("0ycA"),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,c=i?function(t){return null==t?[]:(t=Object(t),r(i(t),(function(e){return a.call(t,e)})))}:o;t.exports=c},NKxu:function(t,e,n){var r=n("lSCD"),o=n("E2jh"),a=n("GoyQ"),i=n("3Fdi"),c=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,f=u.toString,l=s.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?p:c).test(i(t))}},Npjl:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},"Nrk+":function(t,e,n){t.exports={copyright:"Copyright-module--copyright--1ariN"}},NykK:function(t,e,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},O0oS:function(t,e,n){var r=n("Cwc5"),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=o},O7RO:function(t,e,n){var r=n("CMye"),o=n("7GkX");t.exports=function(t){for(var e=o(t),n=e.length;n--;){var a=e[n],i=t[a];e[n]=[a,i,r(i)]}return e}},"Of+w":function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"WeakMap");t.exports=r},QkVE:function(t,e,n){var r=n("EpBk");t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},QoRX:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},QqLw:function(t,e,n){var r=n("tadb"),o=n("ebwN"),a=n("HOxn"),i=n("yGk4"),c=n("Of+w"),u=n("NykK"),s=n("3Fdi"),f=s(r),l=s(o),p=s(a),v=s(i),h=s(c),y=u;(r&&"[object DataView]"!=y(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=y(new o)||a&&"[object Promise]"!=y(a.resolve())||i&&"[object Set]"!=y(new i)||c&&"[object WeakMap]"!=y(new c))&&(y=function(t){var e=u(t),n="[object Object]"==e?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case f:return"[object DataView]";case l:return"[object Map]";case p:return"[object Promise]";case v:return"[object Set]";case h:return"[object WeakMap]"}return e}),t.exports=y},RBgx:function(t,e,n){t.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=n("RBgx"),i=n.n(a),c=function(t){var e=t.title,n=t.children,a=Object(r.useRef)();return Object(r.useEffect)((function(){a.current.scrollIntoView()})),o.a.createElement("div",{ref:a,className:i.a.page},o.a.createElement("div",{className:i.a.page__inner},e&&o.a.createElement("h1",{className:i.a.page__title},e),o.a.createElement("div",{className:i.a.page__body},n)))}},SKAX:function(t,e,n){var r=n("JC6p"),o=n("lQqw")(r);t.exports=o},SfRM:function(t,e,n){var r=n("YESw");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},SySy:function(t,e,n){t.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},UMY1:function(t,e,n){var r=n("oMRN"),o=n("JD84"),a=n("ut/Y"),i=n("Z0cm");t.exports=function(t,e){return function(n,c){var u=i(n)?r:o,s=e?e():{};return u(n,t,a(c,2),s)}}},"UNi/":function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},V6Ve:function(t,e,n){var r=n("kekF")(Object.keys,Object);t.exports=r},VaNO:function(t,e){t.exports=function(t){return this.__data__.has(t)}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Xi7e:function(t,e,n){var r=n("KMkd"),o=n("adU4"),a=n("tMB7"),i=n("+6XX"),c=n("Z8oC");function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},YESw:function(t,e,n){var r=n("Cwc5")(Object,"create");t.exports=r},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},Z0cm:function(t,e){var n=Array.isArray;t.exports=n},Z8oC:function(t,e,n){var r=n("y1pI");t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},ZCpW:function(t,e,n){var r=n("lm/5"),o=n("O7RO"),a=n("IOzZ");t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e)}}},ZWtO:function(t,e,n){var r=n("4uTw"),o=n("9Nap");t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[o(e[n++])];return n&&n==a?t:void 0}},"aU/I":function(t,e,n){t.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},adU4:function(t,e,n){var r=n("y1pI"),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},b80T:function(t,e,n){var r=n("UNi/"),o=n("03A+"),a=n("Z0cm"),i=n("DSRE"),c=n("wJg7"),u=n("c6wG"),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=a(t),f=!n&&o(t),l=!n&&!f&&i(t),p=!n&&!f&&!l&&u(t),v=n||f||l||p,h=v?r(t.length,String):[],y=h.length;for(var _ in t)!e&&!s.call(t,_)||v&&("length"==_||l&&("offset"==_||"parent"==_)||p&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||c(_,y))||h.push(_);return h}},"bt/X":function(t,e,n){var r=n("hypo"),o=n("UMY1"),a=Object.prototype.hasOwnProperty,i=o((function(t,e,n){a.call(t,n)?t[n].push(e):r(t,n,[e])}));t.exports=i},c6wG:function(t,e,n){var r=n("dD9F"),o=n("sEf8"),a=n("mdPL"),i=a&&a.isTypedArray,c=i?o(i):r;t.exports=c},"cq/+":function(t,e,n){var r=n("mc0g")();t.exports=r},dD9F:function(t,e,n){var r=n("NykK"),o=n("shjB"),a=n("ExA7"),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[r(t)]}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},e4Nc:function(t,e,n){var r=n("fGT3"),o=n("k+1r"),a=n("JHgL"),i=n("pSRY"),c=n("H8j4");function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},e5cp:function(t,e,n){var r=n("fmRc"),o=n("or5M"),a=n("HDyB"),i=n("seXi"),c=n("QqLw"),u=n("Z0cm"),s=n("DSRE"),f=n("c6wG"),l="[object Object]",p=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,v,h,y){var _=u(t),m=u(e),b=_?"[object Array]":c(t),d=m?"[object Array]":c(e),x=(b="[object Arguments]"==b?l:b)==l,g=(d="[object Arguments]"==d?l:d)==l,j=b==d;if(j&&s(t)){if(!s(e))return!1;_=!0,x=!1}if(j&&!x)return y||(y=new r),_||f(t)?o(t,e,n,v,h,y):a(t,e,b,n,v,h,y);if(!(1&n)){var w=x&&p.call(t,"__wrapped__"),E=g&&p.call(e,"__wrapped__");if(w||E){var O=w?t.value():t,k=E?e.value():e;return y||(y=new r),h(O,k,n,v,y)}}return!!j&&(y||(y=new r),i(t,e,n,v,h,y))}},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},ebwN:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Map");t.exports=r},ekgI:function(t,e,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},euHg:function(t,e,n){t.exports={icon:"Icon-module--icon--Gpyvw"}},fGT3:function(t,e,n){var r=n("4kuk"),o=n("Xi7e"),a=n("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},"fR/l":function(t,e,n){var r=n("CH3K"),o=n("Z0cm");t.exports=function(t,e,n){var a=e(t);return o(t)?a:r(a,n(t))}},fmRc:function(t,e,n){var r=n("Xi7e"),o=n("77Zs"),a=n("L8xA"),i=n("gCq4"),c=n("VaNO"),u=n("0Cz8");function s(t){var e=this.__data__=new r(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=a,s.prototype.get=i,s.prototype.has=c,s.prototype.set=u,t.exports=s},ftKO:function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},gCq4:function(t,e){t.exports=function(t){return this.__data__.get(t)}},hgQt:function(t,e,n){var r=n("Juji"),o=n("4sDh");t.exports=function(t,e){return null!=t&&o(t,e,r)}},hypo:function(t,e,n){var r=n("O0oS");t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},iSRb:function(t,e,n){t.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(t,e,n){t.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},"k+1r":function(t,e,n){var r=n("QkVE");t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},kekF:function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},lQqw:function(t,e,n){var r=n("MMmD");t.exports=function(t,e){return function(n,o){if(null==n)return n;if(!r(n))return t(n,o);for(var a=n.length,i=e?a:-1,c=Object(n);(e?i--:++i<a)&&!1!==o(c[i],i,c););return n}}},lSCD:function(t,e,n){var r=n("NykK"),o=n("GoyQ");t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},ljhN:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},"lm/5":function(t,e,n){var r=n("fmRc"),o=n("wF/u");t.exports=function(t,e,n,a){var i=n.length,c=i,u=!a;if(null==t)return!c;for(t=Object(t);i--;){var s=n[i];if(u&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<c;){var f=(s=n[i])[0],l=t[f],p=s[1];if(u&&s[2]){if(void 0===l&&!(f in t))return!1}else{var v=new r;if(a)var h=a(l,p,f,t,e,v);if(!(void 0===h?o(p,l,3,a,v):h))return!1}}return!0}},mc0g:function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),c=i.length;c--;){var u=i[t?c:++o];if(!1===n(a[u],u,a))break}return e}}},mdPL:function(t,e,n){(function(t){var r=n("WFqU"),o=e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o&&r.process,c=function(){try{var t=a&&a.require&&a.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(e){}}();t.exports=c}).call(this,n("YuTi")(t))},mwIZ:function(t,e,n){var r=n("ZWtO");t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},oMRN:function(t,e){t.exports=function(t,e,n,r){for(var o=-1,a=null==t?0:t.length;++o<a;){var i=t[o];e(r,i,n(i),t)}return r}},or5M:function(t,e,n){var r=n("1hJj"),o=n("QoRX"),a=n("xYSL");t.exports=function(t,e,n,i,c,u){var s=1&n,f=t.length,l=e.length;if(f!=l&&!(s&&l>f))return!1;var p=u.get(t),v=u.get(e);if(p&&v)return p==e&&v==t;var h=-1,y=!0,_=2&n?new r:void 0;for(u.set(t,e),u.set(e,t);++h<f;){var m=t[h],b=e[h];if(i)var d=s?i(b,m,h,e,t,u):i(m,b,h,t,e,u);if(void 0!==d){if(d)continue;y=!1;break}if(_){if(!o(e,(function(t,e){if(!a(_,e)&&(m===t||c(m,t,n,i,u)))return _.push(e)}))){y=!1;break}}else if(m!==b&&!c(m,b,n,i,u)){y=!1;break}}return u.delete(t),u.delete(e),y}},pSRY:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).has(t)}},qZTm:function(t,e,n){var r=n("fR/l"),o=n("MvSz"),a=n("7GkX");t.exports=function(t){return r(t,a,o)}},rEGp:function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}},sEf8:function(t,e){t.exports=function(t){return function(e){return t(e)}}},seXi:function(t,e,n){var r=n("qZTm"),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,a,i,c){var u=1&n,s=r(t),f=s.length;if(f!=r(e).length&&!u)return!1;for(var l=f;l--;){var p=s[l];if(!(u?p in e:o.call(e,p)))return!1}var v=c.get(t),h=c.get(e);if(v&&h)return v==e&&h==t;var y=!0;c.set(t,e),c.set(e,t);for(var _=u;++l<f;){var m=t[p=s[l]],b=e[p];if(a)var d=u?a(b,m,p,e,t,c):a(m,b,p,t,e,c);if(!(void 0===d?m===b||i(m,b,n,a,c):d)){y=!1;break}_||(_="constructor"==p)}if(y&&!_){var x=t.constructor,g=e.constructor;x==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof x&&x instanceof x&&"function"==typeof g&&g instanceof g||(y=!1)}return c.delete(t),c.delete(e),y}},shjB:function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},tMB7:function(t,e,n){var r=n("y1pI");t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},tadb:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"DataView");t.exports=r},u8Dt:function(t,e,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},"ut/Y":function(t,e,n){var r=n("ZCpW"),o=n("GDhZ"),a=n("zZ0H"),i=n("Z0cm"),c=n("+c4W");t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?i(t)?o(t[0],t[1]):r(t):c(t)}},"wF/u":function(t,e,n){var r=n("e5cp"),o=n("ExA7");t.exports=function t(e,n,a,i,c){return e===n||(null==e||null==n||!o(e)&&!o(n)?e!=e&&n!=n:r(e,n,a,i,t,c))}},wJg7:function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},xYSL:function(t,e){t.exports=function(t,e){return t.has(e)}},y1pI:function(t,e,n){var r=n("ljhN");t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},yGk4:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Set");t.exports=r},zZ0H:function(t,e){t.exports=function(t){return t}},zoYe:function(t,e,n){var r=n("nmnc"),o=n("eUgh"),a=n("Z0cm"),i=n("/9aa"),c=r?r.prototype:void 0,u=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return u?u.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-pubs-template-js-26e3f0ebc92ae0b10d33.js.map