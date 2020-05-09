/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,r){var n=r.define,require=r.require,e="function"==typeof n&&n.amd,i=!e&&"undefined"!=typeof exports;if(!e&&!n){var a={};n=r.define=function(t,r,n){"function"==typeof n?(a[t]={factory:n,deps:r.map(function(r){return function(t,r){if("."!==t[0])return t;var n=r.split("/"),e=t.split("/");n.pop();for(var i=0;i<e.length;i++)"."!=e[i]&&(".."==e[i]?n.pop():n.push(e[i]));return n.join("/")}(r,t)}),resolved:!1,exports:null},require(t)):a[t]={factory:null,resolved:!0,exports:n}},require=r.require=function(t){if(!a.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=a[t];if(!module.resolved){var n=[];module.deps.forEach(function(t){n.push(require(t))}),module.exports=module.factory.apply(r,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-langx-ns/_attach",[],function(){return function(t,r,n){"string"==typeof r&&(r=r.split("."));for(var e=r.length,i=t,a=0,s=r[a++];a<e;)i=i[s]=i[s]||{},s=r[a++];return i[s]=n}}),t("skylark-langx-ns/ns",["./_attach"],function(t){var r={attach:function(n,e){return t(r,n,e)}};return r}),t("skylark-langx-ns/main",["./ns"],function(t){return t}),t("skylark-langx-ns",["skylark-langx-ns/main"],function(t){return t}),t("skylark-langx/skylark",["skylark-langx-ns"],function(t){return t}),t("skylark-langx-types/types",["skylark-langx-ns"],function(t){var r,n=Array.isArray,e={}.toString,i=(r={},"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(t){r["[object "+t+"]"]=t.toLowerCase()}),function(t){return null==t?String(t):r[e.call(t)]||"object"}),a=n||function(t){return object&&object.constructor===Array};function s(t){var r;for(r in t)if(null!==t[r])return!1;return!0}function o(t){return"function"==i(t)}function u(t){return t&&t.nodeType}function l(t){return"number"==typeof t}function c(t){var r=typeof t;return"function"===r||"object"===r&&!!t}function f(t){return"string"==typeof t}function h(t){return t&&t==t.window}return t.attach("langx.types",{isArray:a,isArrayLike:function(t){return!f(t)&&!u(t)&&"number"==typeof t.length&&!o(t)},isBoolean:function(t){return!0===t||!1===t||"[object Boolean]"===e.call(t)},isDefined:function(t){return void 0!==t},isDocument:function(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE},isElement:function(t){return!(!t||1!==t.nodeType)},isEmpty:s,isEmptyObject:s,isFunction:o,isHtmlNode:u,isNaN:function(t){return isNaN(t)},isNull:function(t){return null===t},isNumber:l,isNumeric:l,isObject:c,isPlainObject:function(t){return c(t)&&!h(t)&&Object.getPrototypeOf(t)==Object.prototype},isString:f,isSameOrigin:function(t){if(t){var r=location.protocol+"//"+location.hostname;return location.port&&(r+=":"+location.port),t.startsWith(r)}},isSymbol:function(t){return"symbol"==typeof t||isObjectLike(t)&&objectToString.call(t)==symbolTag},isUndefined:function(t){return void 0===t},isWindow:h,type:i})}),t("skylark-langx-types/main",["./types"],function(t){return t}),t("skylark-langx-types",["skylark-langx-types/main"],function(t){return t}),t("skylark-langx-numbers/numbers",["skylark-langx-ns","skylark-langx-types"],function(t,r){var n=r.isObject,e=r.isSymbol,i=1/0,a=1.7976931348623157e308,s=NaN,o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;function h(t){if(!t)return 0===t?t:0;if((t=p(t))===i||t===-i){var r=t<0?-1:1;return r*a}return t==t?t:0}function p(t){if("number"==typeof t)return t;if(e(t))return s;if(n(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=n(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=l.test(t);return i||c.test(t)?f(t.slice(2),i?2:8):u.test(t)?s:+t}return t.attach("langx.numbers",{toFinite:h,toNumber:p,toInteger:function(t){var r=h(t),n=r%1;return r==r?n?r-n:r:0}})}),t("skylark-langx-numbers/main",["./numbers"],function(t){return t}),t("skylark-langx-numbers",["skylark-langx-numbers/main"],function(t){return t}),t("skylark-langx-objects/objects",["skylark-langx-ns/ns","skylark-langx-ns/_attach","skylark-langx-types","skylark-langx-numbers"],function(t,r,n,e){var i,a,s=Object.prototype.hasOwnProperty,o=Array.prototype.slice,u=n.isBoolean,l=n.isFunction,c=n.isObject,f=n.isPlainObject,h=n.isArray,p=n.isArrayLike,y=n.isString,g=e.toInteger;var v,d,k="undefined"!=typeof Symbol?Symbol.prototype:null;function x(t){if(!c(t))return[];var r=[];for(var n in t)r.push(n);return r}function m(t,r){if(!h(r))return null!=t&&s.call(t,r);for(var n=r.length,e=0;e<n;e++){var i=r[e];if(null==t||!s.call(t,i))return!1;t=t[i]}return!!n}function b(t,r,n,e){for(var i in r)e&&void 0!==t[i]||(n&&(f(r[i])||h(r[i]))?(f(r[i])&&!f(t[i])&&(t[i]={}),h(r[i])&&!h(t[i])&&(t[i]=[]),b(t[i],r[i],n,e)):void 0!==r[i]&&(t[i]=r[i]));return t}function _(t){var r=o.call(arguments,0),n=r.shift(),e=!1;return u(r[r.length-1])&&(e=r.pop()),{target:n,sources:r,deep:e}}function w(){var t=_.apply(this,arguments);return t.sources.forEach(function(r){b(t.target,r,t.deep,!1)}),t.target}function j(t){for(var r=x(t),n=r.length,e=Array(n),i=0;i<n;i++)e[i]=t[r[i]];return e}return i=function(t,r,n,e){if(t===r)return 0!==t||1/t==1/r;if(null==t||null==r)return!1;if(t!=t)return r!=r;var i=typeof t;return("function"===i||"object"===i||"object"==typeof r)&&a(t,r,n,e)},a=function(t,r,n,e){var a=toString.call(t);if(a!==toString.call(r))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+t==""+r;case"[object Number]":return+t!=+t?+r!=+r:0==+t?1/+t==1/r:+t==+r;case"[object Date]":case"[object Boolean]":return+t==+r;case"[object Symbol]":return k.valueOf.call(t)===k.valueOf.call(r)}var s="[object Array]"===a;if(!s){if("object"!=typeof t||"object"!=typeof r)return!1;var o=t.constructor,u=r.constructor;if(o!==u&&!(l(o)&&o instanceof o&&l(u)&&u instanceof u)&&"constructor"in t&&"constructor"in r)return!1}n=n||[],e=e||[];for(var c=n.length;c--;)if(n[c]===t)return e[c]===r;if(n.push(t),e.push(r),s){if((c=t.length)!==r.length)return!1;for(;c--;)if(!i(t[c],r[c],n,e))return!1}else{var f,h=Object.keys(t);if(c=h.length,Object.keys(r).length!==c)return!1;for(;c--;)if(f=h[c],void 0===r[f]||!i(t[f],r[f],n,e))return!1}return n.pop(),e.pop(),!0},t.attach("langx.objects",{allKeys:x,attach:r,clone:function t(r,n){var e;if(void 0===r||null===r)e=r;else if(n&&r.clone)e=r.clone();else if(h(r)){e=[];for(var i=0;i<r.length;i++)e.push(t(r[i]))}else if(f(r))for(var a in e={},r)e[a]=t(r[a]);else e=r;return e},defaults:(v=x,d=!0,function(t){var r=arguments.length;if(d&&(t=Object(t)),r<2||null==t)return t;for(var n=1;n<r;n++)for(var e=arguments[n],i=v(e),a=i.length,s=0;s<a;s++){var o=i[s];d&&void 0!==t[o]||(t[o]=e[o])}return t}),each:function(t,r){var n,e,i,a;if(t)if(void 0===(n=t.length)){for(e in t)if(t.hasOwnProperty(e)&&(a=t[e],!1===r.call(a,e,a)))break}else for(i=0;i<n&&(a=t[i],!1!==r.call(a,i,a));i++);return this},extend:function(t){var r,n=o.call(arguments,1);"boolean"==typeof t&&(r=t,t=n.shift());0==n.length&&(n=[t],t=this);return n.forEach(function(n){w(t,n,r)}),t},has:m,isEqual:function(t,r){return i(t,r)},includes:function(t,r,n,e){t=p(t)?t:j(t),n=n&&!e?g(n):0;var i=t.length;n<0&&(n=nativeMax(i+n,0));return y(t)?n<=i&&t.indexOf(r,n)>-1:!!i&&baseIndexOf(t,r,n)>-1},isMatch:function(t,r){var n=n(r),e=n.length;if(null==t)return!e;for(var i=Object(t),a=0;a<e;a++){var s=n[a];if(r[s]!==i[s]||!(s in i))return!1}return!0},keys:function(t){if(c(t))return[];var r=[];for(var n in t)m(t,n)&&r.push(n);return r},mixin:w,omit:function(t,r,n){if(!t)return null;for(var e=w({},t),i=1;i<arguments.length;i++){var a=arguments[i];a in t&&delete e[a]}return e},pick:function(t,r,n){if(!t)return null;for(var e={},i=1;i<arguments.length;i++){var a=arguments[i];a in t&&(e[a]=t[a])}return e},removeItem:function(t,r){if(h(t)){var n=t.indexOf(r);-1!=n&&t.splice(n,1)}else if(f(t))for(var e in t)if(t[e]==r){delete t[e];break}return this},result:function(t,r,n){h(r)||(r=r.split("."));var e=r.length;if(!e)return l(n)?n.call(t):n;for(var i=0;i<e;i++){var a=null==t?void 0:t[r[i]];void 0===a&&(a=n,i=e),t=l(a)?a.call(t):a}return t},safeMixin:function(){var t=_.apply(this,arguments);return t.sources.forEach(function(r){b(t.target,r,t.deep,!0)}),t.target},values:j})}),t("skylark-langx-objects/main",["./objects"],function(t){return t}),t("skylark-langx-objects",["skylark-langx-objects/main"],function(t){return t}),t("skylark-langx-arrays/arrays",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects"],function(t,r,n){var e=Array.prototype.filter,i=Array.prototype.find,a=r.isArrayLike;function s(t,r,n,e){for(var i=t.length,a=n+(e?1:-1);e?a--:++a<i;)if(r(t[a],a,t))return a;return-1}function o(t){return t!=t}function u(t){if(a(t)){for(var r=[],n=0;n<t.length;n++){var e=t[n];if(a(e))for(var i=0;i<e.length;i++)r.push(e[i]);else r.push(e)}return r}return t}return t.attach("langx.arrays",{baseFindIndex:s,baseIndexOf:function(t,r,n){if(r!=r)return s(t,o,n);var e=n-1,i=t.length;for(;++e<i;)if(t[e]===r)return e;return-1},compact:function(t){return e.call(t,function(t){return null!=t})},first:function(t,r){return r?t.slice(0,r):t[0]},filter:function(t,r){return e.call(t,r)},find:function(t,r){return i.call(t,r)},flatten:u,grep:function(t,r){var e=[];return n.each(t,function(t,n){r(n,t)&&e.push(n)}),e},inArray:function(t,r){if(!r)return-1;var n;if(r.indexOf)return r.indexOf(t);n=r.length;for(;n--;)if(r[n]===t)return n;return-1},makeArray:function(t,r,n){if(a(t))return(n||[]).concat(Array.prototype.slice.call(t,r||0));return[t]},merge:function(t,r){var n=r.length,e=t.length,i=0;if("number"==typeof n)for(;i<n;i++)t[e++]=r[i];else for(;void 0!==r[i];)t[e++]=r[i++];return t.length=e,t},forEach:function(t,r){if(t.forEach)return t.forEach(r);for(var n=0;n<t.length;n++)r(t[n],n)},map:function(t,r){var n,e,i,s=[];if(a(t))for(e=0;e<t.length;e++)null!=(n=r.call(t[e],t[e],e))&&s.push(n);else for(i in t)null!=(n=r.call(t[i],t[i],i))&&s.push(n);return u(s)},reduce:function(t,r,n){return Array.prototype.reduce.call(t,r,n)},uniq:function(t){return e.call(t,function(r,n){return t.indexOf(r)==n})}})}),t("skylark-langx-arrays/main",["./arrays"],function(t){return t}),t("skylark-langx-arrays",["skylark-langx-arrays/main"],function(t){return t}),t("skylark-langx/arrays",["skylark-langx-arrays"],function(t){return t}),t("skylark-langx-klass/klass",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects","skylark-langx-arrays"],function(t,r,n,e){var i=e.uniq,a=n.has,s=n.mixin,o=r.isArray,u=r.isDefined;var l=function(){function t(){return this._construct?this._construct.apply(this,arguments):this.init?this.init.apply(this,arguments):void 0}return function n(e,l,c,f){o(l)&&(f=c,c=l,l=null),l=l||Object,u(c)&&!o(c)&&(f=c,c=!1);var h=l;c&&(c=function(t,r){var n=[];return r.forEach(function(t){if(a(t,"__mixins__"))throw new Error("nested mixins");for(var r=[];t;)r.unshift(t),t=t.superclass;n=n.concat(r)}),(n=(n=i(n)).filter(function(r){for(var n=t;n;){if(r===n)return!1;if(a(n,"__mixins__"))for(var e=n.__mixins__,i=0;i<e.length;i++)if(e[i]===r)return!1;n=n.superclass}return!0})).length>0&&n}(h,c)),c&&(h=function(t,r){for(var n=t,e=0;e<r.length;e++){var i=new Function;i.prototype=Object.create(n.prototype),i.__proto__=n,i.superclass=null,s(i.prototype,r[e].prototype),i.prototype.__mixin__=r[e],n=i}return n}(h,c));var p=e.klassName||"",y=new Function("return function "+p+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}return ctor._constructor.apply(inst, arguments) || inst;}")();return y.prototype=Object.create(h.prototype),y.prototype.constructor=y,y.superclass=l,y.__proto__=h,y._constructor||(y._constructor=t),c&&(y.__mixins__=c),y.partial||(y.partial=function(t,n){return function(t,n,e){var i=t.prototype,a=t.superclass.prototype,s=e&&e.noOverrided;e&&e.overrides;for(var o in n)if("constructor"!==o){var u=n[o];"function"==typeof n[o]?i[o]=u._constructor||s||"function"!=typeof a[o]?u:function(t,r,n){return function(){var t=this.overrided;this.overrided=n;var e=r.apply(this,arguments);return this.overrided=t,e}}(0,u,a[o]):r.isPlainObject(u)&&null!==u&&u.get?Object.defineProperty(i,o,u):i[o]=u}return t}(this,t,n)}),y.inherit||(y.inherit=function(t,r,e){return n(t,this,r,e)}),y.partial(e,f),y}}();return t.attach("langx.klass",l)}),t("skylark-langx-klass/main",["./klass"],function(t){return t}),t("skylark-langx-klass",["skylark-langx-klass/main"],function(t){return t}),t("skylark-langx/klass",["skylark-langx-klass"],function(t){return t}),t("skylark-langx/ArrayStore",["./klass"],function(t){var r=function(t){if(!t)return t;var n=!!t.then;function e(e){t[e]=function(){var i=arguments,a=Deferred.when(t,function(t){return r(Array.prototype[e].apply(t,i))});if("forEach"!==e||n)return a}}return n&&(t=Object.delegate(t)),e("forEach"),e("filter"),e("map"),null==t.total&&(t.total=Deferred.when(t,function(t){return t.length})),t},n=t({klassName:"ArrayStore",queryEngine:function(t,r){switch(typeof t){default:throw new Error("Can not query with a "+typeof t);case"object":case"undefined":var n=t;t=function(t){for(var r in n){var e=n[r];if(e&&e.test){if(!e.test(t[r],t))return!1}else if(e!=t[r])return!1}return!0};break;case"string":if(!this[t])throw new Error("No filter function "+t+" was found in store");t=this[t];case"function":}function e(n){var e=function(t,r,n){var e,i=0,a=t&&t.length||0,s=[];a&&"string"==typeof t&&(t=t.split(""));"string"==typeof r&&(r=cache[r]||buildFn(r));if(n)for(;i<a;++i)e=t[i],r.call(n,e,i,t)&&s.push(e);else for(;i<a;++i)e=t[i],r(e,i,t)&&s.push(e);return s}(n,t),i=r&&r.sort;if(i&&e.sort("function"==typeof i?i:function(t,r){for(var n,e=0;n=i[e];e++){var a=t[n.attribute],s=r[n.attribute];if(a=null!=a?a.valueOf():a,s=null!=s?s.valueOf():s,a!=s)return!!n.descending==(null==a||a>s)?-1:1}return 0}),r&&(r.start||r.count)){var a=e.length;(e=e.slice(r.start||0,(r.start||0)+(r.count||1/0))).total=a}return e}return e.matches=t,e},idProperty:"id",get:function(t){return this.data[this.index[t]]},getIdentity:function(t){return t[this.idProperty]},put:function(t,r){var n=this.data,e=this.index,i=this.idProperty,a=t[i]=r&&"id"in r?r.id:i in t?t[i]:Math.random();if(a in e){if(r&&!1===r.overwrite)throw new Error("Object already exists");n[e[a]]=t}else e[a]=n.push(t)-1;return a},add:function(t,r){return(r=r||{}).overwrite=!1,this.put(t,r)},remove:function(t){var r=this.index,n=this.data;if(t in r)return n.splice(r[t],1),this.setData(n),!0},query:function(t,n){return r(this.queryEngine(t,n)(this.data))},setData:function(t){t.items?(this.idProperty=t.identifier||this.idProperty,t=this.data=t.items):this.data=t,this.index={};for(var r=0,n=t.length;r<n;r++)this.index[t[r][this.idProperty]]=r},init:function(t){for(var r in t)this[r]=t[r];this.setData(this.data||[])}});return n}),t("skylark-langx-aspect/aspect",["skylark-langx-ns"],function(t){var r,n=0;function e(t){return function(e,i,a,s){var o,u=e[i];u&&u.target==e||(e[i]=o=function(){for(var t=n,e=arguments,i=o.before;i;)e=i.advice.apply(this,e)||e,i=i.next;if(o.around)var a=o.around.advice(this,e);for(var s=o.after;s&&s.id<t;){if(s.receiveArguments){var u=s.advice.apply(this,e);a=u===r?a:u}else a=s.advice.call(this,a,e);s=s.next}return a},u&&(o.around={advice:function(t,r){return u.apply(t,r)}}),o.target=e);var l=function(t,r,e,i){var a,s=t[r],o="around"==r;if(o){var u=e(function(){return s.advice(this,arguments)});a={remove:function(){u&&(u=t=e=null)},advice:function(t,r){return u?u.apply(t,r):s.advice(t,r)}}}else a={remove:function(){if(a.advice){var n=a.previous,i=a.next;i||n?(n?n.next=i:t[r]=i,i&&(i.previous=n)):delete t[r],t=e=a.advice=null}},id:n++,advice:e,receiveArguments:i};if(s&&!o)if("after"==r){for(;s.next&&(s=s.next););s.next=a,a.previous=s}else"before"==r&&(t[r]=a,a.next=s,s.previous=a);else t[r]=a;return a}(o||u,t,a,s);return a=null,l}}return t.attach("langx.aspect",{after:e("after"),around:e("around"),before:e("before")})}),t("skylark-langx-aspect/main",["./aspect"],function(t){return t}),t("skylark-langx-aspect",["skylark-langx-aspect/main"],function(t){return t}),t("skylark-langx/aspect",["skylark-langx-aspect"],function(t){return t}),t("skylark-langx-funcs/funcs",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects"],function(t,r,n){var e=n.mixin,i=Array.prototype.slice,a=r.isFunction,s=r.isString;function o(t,r){var n=2 in arguments&&i.call(arguments,2);if(a(t)){return function(){return t.apply(r,n?n.concat(i.call(arguments)):arguments)}}if(s(r))return n?(n.unshift(t[r],t),o.apply(null,n)):o(t[r],t);throw new TypeError("expected function")}var u=function(){function t(){}return function(r,n){t.prototype=r;var i=new t;return t.prototype=null,n&&e(i,n),i}}(),l={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},c=/(.)^/,f={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},h=/\\|'|\r|\n|\t|\u2028|\u2029/g;return t.attach("langx.funcs",{bind:o,debounce:function(t,r){var n;return function(){var e=this,i=arguments;n&&clearTimeout(n),n=setTimeout(function(){n=null,t.apply(e,i)},r)}},delegate:u,defer:function(t){requestAnimationFrame?requestAnimationFrame(t):setTimeoutout(t);return this},negate:function(t){if("function"!=typeof t)throw new TypeError("Expected a function");return function(...r){return!t.apply(this,r)}},noop:function(){},proxy:o,returnTrue:function(){return!0},returnFalse:function(){return!1},templateSettings:l,template:function(t,r,e){var i;e=n.defaults({},e,l);var a=RegExp([(e.escape||c).source,(e.interpolate||c).source,(e.evaluate||c).source].join("|")+"|$","g"),s=0,u="__p+='";t.replace(a,function(r,n,e,i,a){return u+=t.slice(s,a).replace(h,function(t){return"\\"+f[t]}),n&&(u+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),e&&(u+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),i&&(u+="';\n"+i+"\n__p+='"),s=a+r.length,r}),u+="';\n",e.variable||(u="with(obj||{}){\n"+u+"}\n");u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{i=new Function(e.variable||"obj","_",u)}catch(t){throw t.source=u,t}if(r)return i(r,this);var p=o(function(t){return i.call(this,t,this)},this),y=e.variable||"obj";return p.source="function("+y+"){\n"+u+"}",p}})}),t("skylark-langx-funcs/main",["./funcs"],function(t){return t}),t("skylark-langx-funcs",["skylark-langx-funcs/main"],function(t){return t}),t("skylark-langx-async/Deferred",["skylark-langx-arrays","skylark-langx-funcs","skylark-langx-objects"],function(t,r,n){"use strict";var e=Array.prototype.slice,i=r.proxy,a=t.makeArray,s=n.result,o=n.mixin;o(Promise.prototype,{always:function(t){return this.then(t,t),this},done:function(){for(var t=0;t<arguments.length;t++)this.then(arguments[t]);return this},fail:function(t){return this.catch(t),this}});var u=function(){var t=this;this.promise=l(new Promise(function(r,n){t._resolve=r,t._reject=n}))};function l(t){if(t.isResolved)return t;var r=!0,n=!1,e=!1,i=t.then(function(t){return e=!0,r=!1,t},function(t){throw n=!0,r=!1,t});i.isResolved=function(){return e},i.isPending=function(){return r},i.isRejected=function(){return n},i.state=function(){return e?"resolved":n?"rejected":"pending"};var a=[],s=[];return i.then=function(t,r,n){return n&&this.progress(n),l(Promise.prototype.then.call(this,t&&function(r){return r&&void 0!==r.__ctx__?t.apply(r.__ctx__,r):t(r)},r&&function(t){return t&&void 0!==t.__ctx__?r.apply(t.__ctx__,t):r(t)}))},i.progress=function(t){return a.forEach(function(r){t(r)}),s.push(t),this},i.pipe=i.then,i.notify=function(t){try{return a.push(t),s.forEach(function(r){return r(t)})}catch(t){this.reject(t)}return this},i}return u.prototype.resolve=function(t){var r=e.call(arguments);return this.resolveWith(null,r)},u.prototype.resolveWith=function(t,r){return(r=r?a(r):[]).__ctx__=t,this._resolve(r),this._resolved=!0,this},u.prototype.notify=function(t){var r=s(this,"promise");return r.notify(t),this},u.prototype.reject=function(t){var r=e.call(arguments);return this.rejectWith(null,r)},u.prototype.rejectWith=function(t,r){return(r=r?a(r):[]).__ctx__=t,this._reject(r),this._rejected=!0,this},u.prototype.isResolved=function(){var t=s(this,"promise");return t.isResolved()},u.prototype.isRejected=function(){var t=s(this,"promise");return t.isRejected()},u.prototype.state=function(){var t=s(this,"promise");return t.state()},u.prototype.then=function(t,r,n){var e=s(this,"promise");return e.then(t,r,n)},u.prototype.progress=function(t){var r=s(this,"promise");return r.progress(t)},u.prototype.catch=function(t){var r=s(this,"promise");return r.catch(t)},u.prototype.always=function(){var t=s(this,"promise");return t.always.apply(t,arguments),this},u.prototype.done=function(){var t=s(this,"promise");return t.done.apply(t,arguments),this},u.prototype.fail=function(t){var r=s(this,"promise");return r.fail(t),this},u.all=function(t){var r=new u;return Promise.all(t).then(r.resolve.bind(r),r.reject.bind(r)),s(r,"promise")},u.first=function(t){return l(Promise.race(t))},u.when=function(t,r,n,e){var a=t&&"function"==typeof t.then,s=a&&t instanceof Promise;if(!a)return arguments.length>1?r?r(t):t:(new u).resolve(t);if(!s){var o=new u(t.cancel);t.then(i(o.resolve,o),i(o.reject,o),o.notify),t=o.promise}return r||n||e?t.then(r,n,e):t},u.reject=function(t){var r=new u;return r.reject(t),r.promise},u.immediate=u.resolve=function(t){var r=new u;return r.resolve.apply(r,arguments),r.promise},u.promise=function(t){var r=new u;return t(r.resolve.bind(r),r.reject.bind(r),r.progress.bind(r)),r.promise},u}),t("skylark-langx-async/async",["skylark-langx-ns","skylark-langx-objects","./Deferred"],function(t,r,n){var e=r.each,i={Deferred:n,parallel:function(t,r,i){var a=[];return i=i||null,r=r||[],e(t,function(t,n){a.push(n.apply(i,r))}),n.all(a)},series:function(t,r,i){var a=[],s=new n,o=s.promise;return i=i||null,r=r||[],s.resolve(),e(t,function(t,n){o=o.then(function(){return n.apply(i,r)}),a.push(o)}),n.all(a)},waterful:function(t,r,i){var a=new n,s=a.promise;return i=i||null,r=r||[],a.resolveWith(i,r),e(t,function(t,r){s=s.then(r)}),s}};return t.attach("langx.async",i)}),t("skylark-langx-async/main",["./async"],function(t){return t}),t("skylark-langx-async",["skylark-langx-async/main"],function(t){return t}),t("skylark-langx/async",["skylark-langx-async"],function(t){return t}),t("skylark-langx-datetimes/datetimes",["skylark-langx-ns"],function(t){return t.attach("langx.datetimes",{parseMilliSeconds:function(t){var r=t.split(" "),n=parseInt(r[0]);if(isNaN(n))return 0;switch(r[1].trim().replace(/\./g,"")){case"minutes":case"minute":case"min":case"mm":case"m":return 6e4*n;case"hours":case"hour":case"HH":case"hh":case"h":case"H":return 36e5*n;case"seconds":case"second":case"sec":case"ss":case"s":return 1e3*n;case"days":case"day":case"DD":case"dd":case"d":return 864e5*n;case"months":case"month":case"MM":case"M":return 24192e5*n;case"weeks":case"week":case"W":case"w":return 6048e5*n;case"years":case"year":case"yyyy":case"yy":case"y":return 31536e6*n;default:return 0}}})}),t("skylark-langx-datetimes/main",["./datetimes"],function(t){return t}),t("skylark-langx-datetimes",["skylark-langx-datetimes/main"],function(t){return t}),t("skylark-langx/datetimes",["skylark-langx-datetimes"],function(t){return t}),t("skylark-langx/Deferred",["skylark-langx-async/Deferred"],function(t){return t}),t("skylark-langx-emitter/Emitter",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects","skylark-langx-arrays","skylark-langx-klass"],function(t,r,n,e,i){var a=Array.prototype.slice,s=e.compact,o=r.isDefined,u=r.isPlainObject,l=r.isFunction,c=r.isString,f=r.isEmptyObject,h=n.mixin,p=n.safeMixin;function y(t){var r=(""+t).split(".");return{name:r[0],ns:r.slice(1).join(" ")}}var g=i({on:function(t,r,n,e,i,a){var s=this,o=this._hub||(this._hub={});return u(t)?(i=e,each(t,function(t,e){s.on(t,r,n,e,i,a)}),this):(c(r)||l(e)||(i=e,e=n,n=r,r=void 0),l(n)&&(i=e,e=n,n=null),c(t)&&(t=t.split(/\s/)),t.forEach(function(t){var s=y(t),u=s.name,l=s.ns;(o[u]||(o[u]=[])).push({fn:e,selector:r,data:n,ctx:i,ns:l,one:a})}),this)},one:function(t,r,n,e,i){return this.on(t,r,n,e,i,1)},emit:function(t){if(!this._hub)return this;var r=this;c(t)&&(t=new CustomEvent(t)),Object.defineProperty(t,"target",{value:this});var n=a.call(arguments,1);return n=o(n)?[t].concat(n):[t],[t.type||t.name,"all"].forEach(function(e){var i=y(e),a=i.name,o=i.ns,u=r._hub[a];if(u){for(var l=u.length,c=!1,f=0;f<l;f++){var p=u[f];(!o||p.ns&&p.ns.startsWith(o))&&(t.data?p.data&&(t.data=h({},p.data,t.data)):t.data=p.data||null,p.fn.apply(p.ctx,n),p.one&&(u[f]=null,c=!0))}c&&(r._hub[e]=s(u))}}),this},listened:function(t){var r=(this._hub||(this._events={}))[t]||[];return r.length>0},listenTo:function(t,r,n,e){if(!t)return this;c(n)&&(n=this[n]),e?t.one(r,n,this):t.on(r,n,this);for(var i,a=this._listeningTo||(this._listeningTo=[]),s=0;s<a.length;s++)if(a[s].obj==t){i=a[s];break}i||a.push(i={obj:t,events:{}});var o=i.events,u=o[r]=o[r]||[];return-1==u.indexOf(n)&&u.push(n),this},listenToOnce:function(t,r,n){return this.listenTo(t,r,n,1)},off:function(t,r){var n=this._hub||(this._hub={});return c(t)&&(t=t.split(/\s/)),t.forEach(function(t){var e=y(t),i=e.name,a=e.ns,s=n[i];if(s){var o=[];if(r||a)for(var u=0,l=s.length;u<l;u++)r&&s[u].fn!==r&&s[u].fn._!==r?o.push(s[u]):!a||s[u].ns&&0==s[u].ns.indexOf(a)||o.push(s[u]);o.length?n[i]=o:delete n[i]}}),this},unlistenTo:function(t,r,n){var e=this._listeningTo;if(!e)return this;for(var i=0;i<e.length;i++){var a=e[i];if(!t||t==a.obj){var o=a.events;for(var u in o)if(!r||r==u){for(var l=o[u],c=0;c<l.length;c++)n&&n!=l[i]||(a.obj.off(u,l[i],this),l[i]=null);l=o[u]=s(l),f(l)&&(o[u]=null)}f(o)&&(e[i]=null)}}return e=this._listeningTo=s(e),f(e)&&(this._listeningTo=null),this},trigger:function(){return this.emit.apply(this,arguments)}});return g.createEvent=function(t,r){var n=new CustomEvent(t,r);return p(n,r)},t.attach("langx.Emitter",g)}),t("skylark-langx-emitter/Evented",["skylark-langx-ns/ns","./Emitter"],function(t,r){return t.attach("langx.Evented",r)}),t("skylark-langx-emitter/main",["./Emitter","./Evented"],function(t){return t}),t("skylark-langx-emitter",["skylark-langx-emitter/main"],function(t){return t}),t("skylark-langx/Emitter",["skylark-langx-emitter"],function(t){return t}),t("skylark-langx/Evented",["skylark-langx-emitter"],function(t){return t}),t("skylark-langx/funcs",["skylark-langx-funcs"],function(t){return t}),t("skylark-langx-hoster/hoster",["skylark-langx-ns"],function(t){var r={isBrowser:!0,isNode:null,global:this,browser:null,node:null};"object"==typeof process&&process.versions&&process.versions.node&&process.versions.v8&&(r.isNode=!0,r.isBrowser=!1),r.global=function(){return"undefined"!=typeof global&&"function"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this}();var n=null;if(Object.defineProperty(r,"document",function(){if(!n){var t="undefined"==typeof window?require("html-element"):window;n=t.document}return n}),r.isBrowser){var e=function(t){t=t.toLowerCase();var r=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:r[1]||"",version:r[2]||"0"}}(navigator.userAgent),i=r.browser={};e.browser&&(i[e.browser]=!0,i.version=e.version),i.chrome?i.webkit=!0:i.webkit&&(i.safari=!0)}return t.attach("langx.hoster",r)}),t("skylark-langx-hoster/main",["./hoster"],function(t){return t}),t("skylark-langx-hoster",["skylark-langx-hoster/main"],function(t){return t}),t("skylark-langx/hoster",["skylark-langx-hoster"],function(t){return t}),t("skylark-langx/numbers",["skylark-langx-numbers"],function(t){return t}),t("skylark-langx/objects",["skylark-langx-objects"],function(t){return t}),t("skylark-langx-strings/strings",["skylark-langx-ns"],function(t){var r=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"});function n(t){return r[t]}var e=/[&<>"'`=]/g;var i=0;function a(t,r){var n,e,i,a,s,o,u,l=arguments.callee;return l.cache[t]||(l.cache[t]=(n=t,e=/^[\w\-]+$/.test(t)?l.get(t):(n="template(string)",t),i=1,a=("try { "+(l.variable?"var "+l.variable+" = this.stash;":"with (this.stash) { ")+"this.ret += '"+e.replace(/<%/g,"").replace(/%>/g,"").replace(/'(?![^\x11\x13]+?\x13)/g,"\\x27").replace(/^\s*|\s*$/g,"").replace(/\n|\r\n/g,function(){return"';\nthis.line = "+ ++i+"; this.ret += '\\n"}).replace(/\x11=raw(.+?)\x13/g,"' + ($1) + '").replace(/\x11=(.+?)\x13/g,"' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g,"'; $1; this.ret += '")+"'; "+(l.variable?"":"}")+"return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on "+n+"' + ' line ' + this.line + ')'; } //@ sourceURL="+n+"\n").replace(/this\.ret \+= '';/g,""),s=new Function(a),o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#x22;","'":"&#x27;"},u=function(t){return(""+t).replace(/[&<>\'\"]/g,function(t){return o[t]})},function(t){return s.call(l.context={escapeHTML:u,line:1,ret:"",stash:t})})),r?l.cache[t](r):l.cache[t]}return a.cache={},a.get=function(t){return document.getElementById(t).innerHTML},t.attach("langx.strings",{camelCase:function(t){return t.replace(/-([\da-z])/g,function(t){return t.toUpperCase().replace("-","")})},dasherize:function(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},deserializeValue:function(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?JSON.parse(t):t):t}catch(r){return t}},escapeHTML:function(t){if(null==t)return"";if(!t)return String(t);return t.toString().replace(e,n)},generateUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=16*Math.random()|0,n="x"===t?r:3&r|8;return n.toString(16)})},lowerFirst:function(t){return t.charAt(0).toLowerCase()+t.slice(1)},rtrim:function(t){return t.replace(/\s+$/g,"")},serializeValue:function(t){return JSON.stringify(t)},substitute:function(t,r,n,e){function i(t,r){if(t.match(/\./)){var n,e=function(t,r){var i=t.pop();return i?r[i]?e(t,n=r[i]):null:n};return e(t.split(".").reverse(),r)}return r[t]}return e=e||window,n=n?proxy(e,n):function(t){return t},t.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(t,a,s){var o=i(a,r);return s&&(o=i(s,e).call(e,o,a)),n(o,a).toString()})},slugify:function(t){t=(t=t.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var r="ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;",n=0,e=r.length;n<e;n++)t=t.replace(new RegExp(r.charAt(n),"g"),"AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------".charAt(n));return t=t.replace(/\s+/g,"-").replace(/-+/g,"-")},trim:function(t){return null==t?"":String.prototype.trim.call(t)},uniqueId:function(t){var r=++i+"";return t?t+r:r},upperFirst:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}})}),t("skylark-langx-strings/base64",["./strings"],function(t){return t.base64={decode:function(t,r){r=null!=r&&r;var n,e,i,a,s,o,u,l="",c=0;t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(;c<t.length;)a=this._keyStr.indexOf(t.charAt(c++)),s=this._keyStr.indexOf(t.charAt(c++)),o=this._keyStr.indexOf(t.charAt(c++)),u=this._keyStr.indexOf(t.charAt(c++)),n=a<<2|s>>4,e=(15&s)<<4|o>>2,i=(3&o)<<6|u,l+=String.fromCharCode(n),64!=o&&(l+=String.fromCharCode(e)),64!=u&&(l+=String.fromCharCode(i));r||(l=function(t){var r="",n=0,e=c1=c2=0;for(;n<t.length;)(e=t.charCodeAt(n))<128?(r+=String.fromCharCode(e),n++):e>191&&e<224?(c2=t.charCodeAt(n+1),r+=String.fromCharCode((31&e)<<6|63&c2),n+=2):(c2=t.charCodeAt(n+1),c3=t.charCodeAt(n+2),r+=String.fromCharCode((15&e)<<12|(63&c2)<<6|63&c3),n+=3);return r}(l));return l},encode:function(t,r){var n,e,i,a,s,o,u,l="",c=0;(r=null!=r&&r)||(t=function(t){t=t.replace(/\r\n/g,"\n");for(var r="",n=0;n<t.length;n++){var e=t.charCodeAt(n);e<128?r+=String.fromCharCode(e):e>127&&e<2048?(r+=String.fromCharCode(e>>6|192),r+=String.fromCharCode(63&e|128)):(r+=String.fromCharCode(e>>12|224),r+=String.fromCharCode(e>>6&63|128),r+=String.fromCharCode(63&e|128))}return r}(t));for(;c<t.length;)n=t.charCodeAt(c++),e=t.charCodeAt(c++),i=t.charCodeAt(c++),a=n>>2,s=(3&n)<<4|e>>4,o=(15&e)<<2|i>>6,u=63&i,isNaN(e)?o=u=64:isNaN(i)&&(u=64),l=l+this._keyStr.charAt(a)+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u);return l}}}),t("skylark-langx-strings/main",["./strings","./base64"],function(t){return t}),t("skylark-langx-strings",["skylark-langx-strings/main"],function(t){return t}),t("skylark-langx/strings",["skylark-langx-strings"],function(t){return t}),t("skylark-langx/Stateful",["./Evented","./strings","./objects"],function(t,r,n){var e=n.isEqual,i=n.mixin,a=n.result,s=n.isEmptyObject,o=n.clone,u=r.uniqueId,l=t.inherit({_construct:function(t,r){var n=t||{};r||(r={}),this.cid=u(this.cidPrefix),this.attributes={},r.collection&&(this.collection=r.collection),r.parse&&(n=this.parse(n,r)||{});var e=a(this,"defaults");n=i({},e,n),this.set(n,r),this.changed={}},changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",toJSON:function(t){return o(this.attributes)},get:function(t){return this.attributes[t]},has:function(t){return null!=this.get(t)},set:function(t,r,n){if(null==t)return this;var i;if("object"==typeof t?(i=t,n=r):(i={})[t]=r,n||(n={}),!this._validate(i,n))return!1;var a=n.unset,s=n.silent,u=[],l=this._changing;this._changing=!0,l||(this._previousAttributes=o(this.attributes),this.changed={});var c=this.attributes,f=this.changed,h=this._previousAttributes;for(var p in i)r=i[p],e(c[p],r)||u.push(p),e(h[p],r)?delete f[p]:f[p]=r,a?delete c[p]:c[p]=r;if(this.idAttribute in i&&(this.id=this.get(this.idAttribute)),!s){u.length&&(this._pending=n);for(var y=0;y<u.length;y++)this.trigger("change:"+u[y],this,c[u[y]],n)}if(l)return this;if(!s)for(;this._pending;)n=this._pending,this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(t,r){return this.set(t,void 0,i({},r,{unset:!0}))},clear:function(t){var r={};for(var n in this.attributes)r[n]=void 0;return this.set(r,i({},t,{unset:!0}))},hasChanged:function(t){return null==t?!s(this.changed):void 0!==this.changed[t]},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&o(this.changed);var r=this._changing?this._previousAttributes:this.attributes,n={};for(var i in t){var a=t[i];e(r[i],a)||(n[i]=a)}return!s(n)&&n},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return o(this._previousAttributes)},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i({},t,{validate:!0}))},_validate:function(t,r){if(!r.validate||!this.validate)return!0;t=i({},this.attributes,t);var n=this.validationError=this.validate(t,r)||null;return!n||(this.trigger("invalid",this,n,i(r,{validationError:n})),!1)}});return l}),t("skylark-langx-topic/topic",["skylark-langx-ns","skylark-langx-emitter/Evented"],function(t,r){var n=new r;return t.attach("langx.topic",{publish:function(t,r,e){var i=[].slice.call(arguments,1);return n.trigger({type:t,data:i})},subscribe:function(t,r,e){var i=function(t){r.apply(e,t.data)};return n.on(t,i),{remove:function(){n.off(t,i)}}}})}),t("skylark-langx-topic/main",["./topic"],function(t){return t}),t("skylark-langx-topic",["skylark-langx-topic/main"],function(t){return t}),t("skylark-langx/topic",["skylark-langx-topic"],function(t){return t}),t("skylark-langx/types",["skylark-langx-types"],function(t){return t}),t("skylark-langx/langx",["./skylark","./arrays","./ArrayStore","./aspect","./async","./datetimes","./Deferred","./Emitter","./Evented","./funcs","./hoster","./klass","./numbers","./objects","./Stateful","./strings","./topic","./types"],function(t,r,n,e,i,a,s,o,u,l,c,f,h,p,y,g,v,d){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var k=p.mixin,x=(p.safeMixin,d.isFunction);var m=1;function b(){return b}return k(b,{createEvent:o.createEvent,funcArg:function(t,r,n,e){return x(r)?r.call(t,n,e):r},getQueryParams:function(t){var r=(t=t||window.location.href).split("?"),n={};r.length>1&&r[1].split("&").forEach(function(t){var r=t.split("=");n[r[0]]=r[1]});return n},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=m++)},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),k(b,r,e,a,l,h,p,g,d,{ArrayStore:n,async:i,Deferred:s,Emitter:o,Evented:u,hoster:c,klass:f,Stateful:y,topic:v}),t.langx=b}),t("skylark-langx/main",["./skylark","./langx"],function(t){return t}),t("skylark-langx",["skylark-langx/main"],function(t){return t})}(n,require),!e){var s=require("skylark-langx-ns");i?module.exports=s:r.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-all.js.map
