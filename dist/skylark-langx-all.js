/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(factory,globals){var define=globals.define,require=globals.require,isAmd="function"==typeof define&&define.amd,isCmd=!isAmd&&"undefined"!=typeof exports;if(!isAmd&&!define){var map={};define=globals.define=function(t,e,r){"function"==typeof r?(map[t]={factory:r,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var r=e.split("/"),n=t.split("/");r.pop();for(var i=0;i<n.length;i++)"."!=n[i]&&(".."==n[i]?r.pop():r.push(n[i]));return r.join("/")}(e,t)}),exports:null},require(t)):map[t]=r},require=globals.require=function(t){if(!map.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var e=map[t];if(!e.exports){var r=[];e.deps.forEach(function(t){r.push(require(t))}),e.exports=e.factory.apply(globals,r)}return e.exports}}if(!define)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(define,require){define("skylark-langx/skylark",[],function(){return{}}),define("skylark-langx/types",[],function(){var t,e=(t={},"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e){t["[object "+e+"]"]=e.toLowerCase()}),function(e){return null==e?String(e):t[toString.call(e)]||"object"});function r(t){return"function"==e(t)}function n(t){return t&&t instanceof Node}function i(t){return"object"==e(t)}function o(t){return"string"==typeof t}function s(t){return t&&t==t.window}return{isArray:function(t){return t&&t.constructor===Array},isArrayLike:function(t){return!o(t)&&!n(t)&&"number"==typeof t.length&&!r(t)},isBoolean:function(t){return"boolean"==typeof t},isDefined:function(t){return void 0!==t},isDocument:function(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE},isEmptyObject:function(t){var e;for(e in t)if(null!==t[e])return!1;return!0},isFunction:r,isHtmlNode:n,isNumber:function(t){return"number"==typeof t},isObject:i,isPlainObject:function(t){return i(t)&&!s(t)&&Object.getPrototypeOf(t)==Object.prototype},isString:o,isSameOrigin:function(t){if(t){var e=location.protocol+"//"+location.hostname;return location.port&&(e+=":"+location.port),t.startsWith(e)}},isWindow:s,type:e}}),define("skylark-langx/objects",["./types"],function(t){var e,r,n=Object.prototype.hasOwnProperty,i=Array.prototype.slice,o=t.isBoolean,s=t.isFunction,a=t.isObject,u=t.isPlainObject,c=t.isArray;var l,f,p="undefined"!=typeof Symbol?Symbol.prototype:null;function h(t){if(!a(t))return[];var e=[];for(var r in t)e.push(r);return e}function d(t,e){if(!c(e))return null!=t&&n.call(t,e);for(var r=e.length,i=0;i<r;i++){var o=e[i];if(null==t||!n.call(t,o))return!1;t=t[o]}return!!r}function v(t,e,r,n){for(var i in e)n&&void 0!==t[i]||(r&&(u(e[i])||c(e[i]))?(u(e[i])&&!u(t[i])&&(t[i]={}),c(e[i])&&!c(t[i])&&(t[i]=[]),v(t[i],e[i],r,n)):void 0!==e[i]&&(t[i]=e[i]));return t}function y(t){var e=i.call(arguments,0),r=e.shift(),n=!1;return o(e[e.length-1])&&(n=e.pop()),{target:r,sources:e,deep:n}}function g(){var t=y.apply(this,arguments);return t.sources.forEach(function(e){v(t.target,e,t.deep,!1)}),t.target}return e=function(t,e,n,i){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return!1;if(t!=t)return e!=e;var o=typeof t;return("function"===o||"object"===o||"object"==typeof e)&&r(t,e,n,i)},r=function(t,r,n,i){var o=toString.call(t);if(o!==toString.call(r))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+t==""+r;case"[object Number]":return+t!=+t?+r!=+r:0==+t?1/+t==1/r:+t==+r;case"[object Date]":case"[object Boolean]":return+t==+r;case"[object Symbol]":return p.valueOf.call(t)===p.valueOf.call(r)}var a="[object Array]"===o;if(!a){if("object"!=typeof t||"object"!=typeof r)return!1;var u=t.constructor,c=r.constructor;if(u!==c&&!(s(u)&&u instanceof u&&s(c)&&c instanceof c)&&"constructor"in t&&"constructor"in r)return!1}n=n||[],i=i||[];for(var l=n.length;l--;)if(n[l]===t)return i[l]===r;if(n.push(t),i.push(r),a){if((l=t.length)!==r.length)return!1;for(;l--;)if(!e(t[l],r[l],n,i))return!1}else{var f,h=Object.keys(t);if(l=h.length,Object.keys(r).length!==l)return!1;for(;l--;)if(f=h[l],void 0===r[f]||!e(t[f],r[f],n,i))return!1}return n.pop(),i.pop(),!0},{allKeys:h,clone:function t(e,r){var n;if(void 0===e||null===e)n=e;else if(r&&e.clone)n=e.clone();else if(c(e)){n=[];for(var i=0;i<e.length;i++)n.push(t(e[i]))}else if(u(e))for(var o in n={},e)n[o]=t(e[o]);else n=e;return n},defaults:(l=h,f=!0,function(t){var e=arguments.length;if(f&&(t=Object(t)),e<2||null==t)return t;for(var r=1;r<e;r++)for(var n=arguments[r],i=l(n),o=i.length,s=0;s<o;s++){var a=i[s];f&&void 0!==t[a]||(t[a]=n[a])}return t}),each:function(t,e){var r,n,i,o;if(t)if(void 0===(r=t.length)){for(n in t)if(t.hasOwnProperty(n)&&(o=t[n],!1===e.call(o,n,o)))break}else for(i=0;i<r&&(o=t[i],!1!==e.call(o,i,o));i++);return this},extend:function(t){var e,r=i.call(arguments,1);"boolean"==typeof t&&(e=t,t=r.shift());0==r.length&&(r=[t],t=this);return r.forEach(function(r){g(t,r,e)}),t},has:d,isEqual:function(t,r){return e(t,r)},isMatch:function(t,e){var r=r(e),n=r.length;if(null==t)return!n;for(var i=Object(t),o=0;o<n;o++){var s=r[o];if(e[s]!==i[s]||!(s in i))return!1}return!0},keys:function(t){if(a(t))return[];var e=[];for(var r in t)d(t,r)&&e.push(r);return e},mixin:g,removeItem:function(t,e){if(c(t)){var r=t.indexOf(e);-1!=r&&t.splice(r,1)}else if(u(t))for(var n in t)if(t[n]==e){delete t[n];break}return this},result:function(t,e,r){c(e)||(e=[e]);var n=e.length;if(!n)return s(r)?r.call(t):r;for(var i=0;i<n;i++){var o=null==t?void 0:t[e[i]];void 0===o&&(o=r,i=n),t=s(o)?o.call(t):o}return t},safeMixin:function(){var t=y.apply(this,arguments);return t.sources.forEach(function(e){v(t.target,e,t.deep,!0)}),t.target},values:function(t){for(var e=_.keys(t),r=e.length,n=Array(r),i=0;i<r;i++)n[i]=t[e[i]];return n}}}),define("skylark-langx/arrays",["./types","./objects"],function(t,e){var r=Array.prototype.filter,n=t.isArrayLike;function i(t){if(n(t)){for(var e=[],r=0;r<t.length;r++){var i=t[r];if(n(i))for(var o=0;o<i.length;o++)e.push(i[o]);else e.push(i)}return e}return t}return{compact:function(t){return r.call(t,function(t){return null!=t})},first:function(t,e){return e?t.slice(0,e):t[0]},each:e.each,flatten:i,inArray:function(t,e){if(!e)return-1;var r;if(e.indexOf)return e.indexOf(t);r=e.length;for(;r--;)if(e[r]===t)return r;return-1},makeArray:function(t,e,r){if(n(t))return(r||[]).concat(Array.prototype.slice.call(t,e||0));return[t]},map:function(t,e){var r,o,s,a=[];if(n(t))for(o=0;o<t.length;o++)null!=(r=e.call(t[o],t[o],o))&&a.push(r);else for(s in t)null!=(r=e.call(t[s],t[s],s))&&a.push(r);return i(a)},uniq:function(t){return r.call(t,function(e,r){return t.indexOf(e)==r})}}}),define("skylark-langx/klass",["./arrays","./objects","./types"],function(t,e,r){var n=t.uniq,i=e.has,o=e.mixin,s=r.isArray,a=r.isDefined;var u=function(){function t(){return this._construct?this._construct.apply(this,arguments):this.init?this.init.apply(this,arguments):void 0}return function e(r,u,c,l){s(u)&&(l=c,c=u,u=null),u=u||Object,a(c)&&!s(c)&&(l=c,c=!1);var f=u;c&&(c=function(t,e){var r=[];return e.forEach(function(t){if(i(t,"__mixins__"))throw new Error("nested mixins");for(var e=[];t;)e.unshift(t),t=t.superclass;r=r.concat(e)}),(r=(r=n(r)).filter(function(e){for(var r=t;r;){if(e===r)return!1;if(i(r,"__mixins__"))for(var n=r.__mixins__,o=0;o<n.length;o++)if(n[o]===e)return!1;r=r.superclass}return!0})).length>0&&r}(f,c)),c&&(f=function(t,e){for(var r=t,n=0;n<e.length;n++){var i=new Function;i.prototype=Object.create(r.prototype),i.__proto__=r,i.superclass=null,o(i.prototype,e[n].prototype),i.prototype.__mixin__=e[n],r=i}return r}(f,c));var p=r.klassName||"",h=new Function("return function "+p+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}return ctor._constructor.apply(inst, arguments) || inst;}")();return h.prototype=Object.create(f.prototype),h.prototype.constructor=h,h.superclass=u,h.__proto__=f,h._constructor||(h._constructor=t),c&&(h.__mixins__=c),h.partial||(h.partial=function(t,e){return function(t,e,r){var n=t.prototype,i=t.superclass.prototype,o=r&&r.noOverrided;r.overrides;for(var s in e)if("constructor"!==s){var a=e[s];"function"==typeof e[s]?n[s]=a._constructor||o||"function"!=typeof i[s]?a:function(t,e,r){return function(){var t=this.overrided;this.overrided=r;var n=e.apply(this,arguments);return this.overrided=t,n}}(0,a,i[s]):"object"==typeof a&&null!==a&&a.get?Object.defineProperty(n,s,a):n[s]=a}return t}(this,t,e)}),h.inherit||(h.inherit=function(t,r,n){return e(t,this,r,n)}),h.partial(r,l),h}}();return u}),define("skylark-langx/ArrayStore",["./klass"],function(t){var e=function(t){if(!t)return t;var r=!!t.then;function n(n){t[n]=function(){var i=arguments,o=Deferred.when(t,function(t){return e(Array.prototype[n].apply(t,i))});if("forEach"!==n||r)return o}}return r&&(t=Object.delegate(t)),n("forEach"),n("filter"),n("map"),null==t.total&&(t.total=Deferred.when(t,function(t){return t.length})),t},r=t({klassName:"ArrayStore",queryEngine:function(t,e){switch(typeof t){default:throw new Error("Can not query with a "+typeof t);case"object":case"undefined":var r=t;t=function(t){for(var e in r){var n=r[e];if(n&&n.test){if(!n.test(t[e],t))return!1}else if(n!=t[e])return!1}return!0};break;case"string":if(!this[t])throw new Error("No filter function "+t+" was found in store");t=this[t];case"function":}function n(r){var n=function(t,e,r){var n,i=0,o=t&&t.length||0,s=[];o&&"string"==typeof t&&(t=t.split(""));"string"==typeof e&&(e=cache[e]||buildFn(e));if(r)for(;i<o;++i)n=t[i],e.call(r,n,i,t)&&s.push(n);else for(;i<o;++i)n=t[i],e(n,i,t)&&s.push(n);return s}(r,t),i=e&&e.sort;if(i&&n.sort("function"==typeof i?i:function(t,e){for(var r,n=0;r=i[n];n++){var o=t[r.attribute],s=e[r.attribute];if(o=null!=o?o.valueOf():o,s=null!=s?s.valueOf():s,o!=s)return!!r.descending==(null==o||o>s)?-1:1}return 0}),e&&(e.start||e.count)){var o=n.length;(n=n.slice(e.start||0,(e.start||0)+(e.count||1/0))).total=o}return n}return n.matches=t,n},idProperty:"id",get:function(t){return this.data[this.index[t]]},getIdentity:function(t){return t[this.idProperty]},put:function(t,e){var r=this.data,n=this.index,i=this.idProperty,o=t[i]=e&&"id"in e?e.id:i in t?t[i]:Math.random();if(o in n){if(e&&!1===e.overwrite)throw new Error("Object already exists");r[n[o]]=t}else n[o]=r.push(t)-1;return o},add:function(t,e){return(e=e||{}).overwrite=!1,this.put(t,e)},remove:function(t){var e=this.index,r=this.data;if(t in e)return r.splice(e[t],1),this.setData(r),!0},query:function(t,r){return e(this.queryEngine(t,r)(this.data))},setData:function(t){t.items?(this.idProperty=t.identifier||this.idProperty,t=this.data=t.items):this.data=t,this.index={};for(var e=0,r=t.length;e<r;e++)this.index[t[e][this.idProperty]]=e},init:function(t){for(var e in t)this[e]=t[e];this.setData(this.data||[])}});return r}),define("skylark-langx/aspect",[],function(){var t,e=0;function r(r){return function(n,i,o,s){var a,u=n[i];u&&u.target==n||(n[i]=a=function(){for(var r=e,n=arguments,i=a.before;i;)n=i.advice.apply(this,n)||n,i=i.next;if(a.around)var o=a.around.advice(this,n);for(var s=a.after;s&&s.id<r;){if(s.receiveArguments){var u=s.advice.apply(this,n);o=u===t?o:u}else o=s.advice.call(this,o,n);s=s.next}return o},u&&(a.around={advice:function(t,e){return u.apply(t,e)}}),a.target=n);var c=function(t,r,n,i){var o,s=t[r],a="around"==r;if(a){var u=n(function(){return s.advice(this,arguments)});o={remove:function(){u&&(u=t=n=null)},advice:function(t,e){return u?u.apply(t,e):s.advice(t,e)}}}else o={remove:function(){if(o.advice){var e=o.previous,i=o.next;i||e?(e?e.next=i:t[r]=i,i&&(i.previous=e)):delete t[r],t=n=o.advice=null}},id:e++,advice:n,receiveArguments:i};if(s&&!a)if("after"==r){for(;s.next&&(s=s.next););s.next=o,o.previous=s}else"before"==r&&(t[r]=o,o.next=s,s.previous=o);else t[r]=o;return o}(a||u,r,o,s);return o=null,c}}return{after:r("after"),around:r("around"),before:r("before")}}),define("skylark-langx/funcs",["./objects","./types"],function(t,e){var r=t.mixin,n=Array.prototype.slice,i=e.isFunction,o=e.isString;var s=function(){function t(){}return function(e,n){t.prototype=e;var i=new t;return t.prototype=null,n&&r(i,n),i}}();return{debounce:function(t,e){var r;return function(){var n=this,i=arguments;r&&clearTimeout(r),r=setTimeout(function(){r=null,t.apply(n,i)},e)}},delegate:s,defer:function(t){requestAnimationFrame?requestAnimationFrame(t):setTimeoutout(t);return this},noop:function(){},proxy:function t(e,r){var s=2 in arguments&&n.call(arguments,2);if(i(e)){return function(){return e.apply(r,s?s.concat(n.call(arguments)):arguments)}}if(o(r))return s?(s.unshift(e[r],e),t.apply(null,s)):t(e[r],e);throw new TypeError("expected function")},returnTrue:function(){return!0},returnFalse:function(){return!1}}}),define("skylark-langx/Deferred",["./arrays","./funcs","./objects"],function(t,e,r){"use strict";var n=Symbol?Symbol():"__pglisteners",i=Array.prototype.slice,o=e.proxy,s=t.makeArray,a=r.result,u=r.mixin;u(Promise.prototype,{always:function(t){return this.then(t,t),this},done:function(t){return this.then(t),this},fail:function(t){return this.catch(t),this}});var c=function(){var t=this,e=this.promise=new Promise(function(e,r){t._resolve=e,t._reject=r});l(e,t),this[n]=[]};function l(t,e){var r={state:function(){return e.isResolved()?"resolved":e.isRejected()?"rejected":"pending"},then:function(t,e,n){return n&&this.progress(n),u(Promise.prototype.then.call(this,t&&function(e){return e&&void 0!==e.__ctx__?t.apply(e.__ctx__,e):t(e)},e&&function(t){return t&&void 0!==t.__ctx__?e.apply(t.__ctx__,t):e(t)}),r)},progress:function(t){return e[n].push(t),this}};return r.pipe=r.then,u(t,r)}return c.prototype.resolve=function(t){var e=i.call(arguments);return this.resolveWith(null,e)},c.prototype.resolveWith=function(t,e){return(e=e?s(e):[]).__ctx__=t,this._resolve(e),this._resolved=!0,this},c.prototype.progress=function(t){try{return this[n].forEach(function(e){return e(t)})}catch(t){this.reject(t)}return this},c.prototype.reject=function(t){var e=i.call(arguments);return this.rejectWith(null,e)},c.prototype.rejectWith=function(t,e){return(e=e?s(e):[]).__ctx__=t,this._reject(e),this._rejected=!0,this},c.prototype.isResolved=function(){return!!this._resolved},c.prototype.isRejected=function(){return!!this._rejected},c.prototype.then=function(t,e,r){var n=a(this,"promise");return n.then(t,e,r)},c.prototype.done=c.prototype.then,c.all=function(t){return l(Promise.all(t))},c.first=function(t){return l(Promise.race(t))},c.when=function(t,e,r,n){var i=t&&"function"==typeof t.then,s=i&&t instanceof Promise;if(!i)return arguments.length>1?e?e(t):t:(new c).resolve(t);if(!s){var a=new c(t.cancel);t.then(o(a.resolve,a),o(a.reject,a),a.progress),t=a.promise}return e||r||n?t.then(e,r,n):t},c.reject=function(t){var e=new c;return e.reject(t),e.promise},c.immediate=c.resolve=function(t){var e=new c;return e.resolve.apply(e,arguments),e.promise},c}),define("skylark-langx/async",["./Deferred","./arrays"],function(t,e){var r=e.each,n={parallel:function(e,n,i){var o=[];return i=i||null,n=n||[],r(e,function(t,e){o.push(e.apply(i,n))}),t.all(o)},series:function(e,n,i){var o=[],s=new t,a=s.promise;return i=i||null,n=n||[],s.resolve(),r(e,function(t,e){a=a.then(function(){return e.apply(i,n)}),o.push(a)}),t.all(o)},waterful:function(e,n,i){var o=new t,s=o.promise;return i=i||null,n=n||[],o.resolveWith(i,n),r(e,function(t,e){s=s.then(e)}),s}};return n}),define("skylark-langx/datetimes",[],function(){return{parseMilliSeconds:function(t){var e=t.split(" "),r=parseInt(e[0]);if(isNaN(r))return 0;switch(e[1].trim().replace(/\./g,"")){case"minutes":case"minute":case"min":case"mm":case"m":return 6e4*r;case"hours":case"hour":case"HH":case"hh":case"h":case"H":return 36e5*r;case"seconds":case"second":case"sec":case"ss":case"s":return 1e3*r;case"days":case"day":case"DD":case"dd":case"d":return 864e5*r;case"months":case"month":case"MM":case"M":return 24192e5*r;case"weeks":case"week":case"W":case"w":return 6048e5*r;case"years":case"year":case"yyyy":case"yy":case"y":return 31536e6*r;default:return 0}}}}),define("skylark-langx/Evented",["./klass","./objects","./types"],function(t,e,r){var n=Array.prototype.slice,i=r.isDefined,o=r.isPlainObject,s=r.isFunction,a=r.isString,u=r.isEmptyObject,c=e.mixin,l=t({on:function(t,e,r,n,i,u){var c=this,l=this._hub||(this._hub={});return o(t)?(i=n,each(t,function(t,n){c.on(t,e,r,n,i,u)}),this):(a(e)||s(n)||(i=n,n=r,r=e,e=void 0),s(r)&&(i=n,n=r,r=null),a(t)&&(t=t.split(/\s/)),t.forEach(function(t){(l[t]||(l[t]=[])).push({fn:n,selector:e,data:r,ctx:i,one:u})}),this)},one:function(t,e,r,n,i){return this.on(t,e,r,n,i,1)},trigger:function(t){if(!this._hub)return this;var e=this;a(t)&&(t=new CustomEvent(t)),Object.defineProperty(t,"target",{value:this});var r=n.call(arguments,1);return r=i(r)?[t].concat(r):[t],[t.type||t.name,"all"].forEach(function(n){var i=e._hub[n];if(i){for(var o=i.length,s=!1,a=0;a<o;a++){var u=i[a];t.data?u.data&&(t.data=c({},u.data,t.data)):t.data=u.data||null,u.fn.apply(u.ctx,r),u.one&&(i[a]=null,s=!0)}s&&(e._hub[n]=compact(i))}}),this},listened:function(t){var e=(this._hub||(this._events={}))[t]||[];return e.length>0},listenTo:function(t,e,r,n){if(!t)return this;a(r)&&(r=this[r]),n?t.one(e,r,this):t.on(e,r,this);for(var i,o=this._listeningTo||(this._listeningTo=[]),s=0;s<o.length;s++)if(o[s].obj==t){i=o[s];break}i||o.push(i={obj:t,events:{}});var u=i.events,c=u[e]=u[e]||[];return-1==c.indexOf(r)&&c.push(r),this},listenToOnce:function(t,e,r){return this.listenTo(t,e,r,1)},off:function(t,e){var r=this._hub||(this._hub={});return a(t)&&(t=t.split(/\s/)),t.forEach(function(t){var n=r[t],i=[];if(n&&e)for(var o=0,s=n.length;o<s;o++)n[o].fn!==e&&n[o].fn._!==e&&i.push(n[o]);i.length?r[t]=i:delete r[t]}),this},unlistenTo:function(t,e,r){var n=this._listeningTo;if(!n)return this;for(var i=0;i<n.length;i++){var o=n[i];if(!t||t==o.obj){var s=o.events;for(var a in s)if(!e||e==a){for(var c=s[a],l=0;l<c.length;l++)r&&r!=c[i]||(o.obj.off(a,c[i],this),c[i]=null);c=s[a]=compact(c),u(c)&&(s[a]=null)}u(s)&&(n[i]=null)}}return n=this._listeningTo=compact(n),u(n)&&(this._listeningTo=null),this}});return l}),define("skylark-langx/strings",[],function(){return{camelCase:function(t){return t.replace(/-([\da-z])/g,function(t){return t.toUpperCase().replace("-","")})},dasherize:function(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},deserializeValue:function(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?JSON.parse(t):t):t}catch(e){return t}},lowerFirst:function(t){return t.charAt(0).toLowerCase()+t.slice(1)},serializeValue:function(t){return JSON.stringify(t)},substitute:function(t,e,r,n){function i(t,e){if(t.match(/\./)){var r,n=function(t,e){var i=t.pop();return i?e[i]?n(t,r=e[i]):null:r};return n(t.split(".").reverse(),e)}return e[t]}return n=n||window,r=r?proxy(n,r):function(t){return t},t.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(t,o,s){var a=i(o,e);return s&&(a=i(s,n).call(n,a,o)),r(a,o).toString()})},trim:function(t){return null==t?"":String.prototype.trim.call(t)},upperFirst:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}}),define("skylark-langx/Xhr",["./arrays","./Deferred","./Evented","./objects","./funcs","./types"],function(arrays,Deferred,Evented,objects,funcs,types){var each=arrays.each,mixin=objects.mixin,noop=funcs.noop,isArray=types.isArray,isFunction=types.isFunction,isPlainObject=types.isPlainObject,type=types.type,getAbsoluteUrl=function(t){return a||(a=document.createElement("a")),a.href=t,a.href},a,Xhr=function(){var jsonpID=0,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/,XhrDefaultOptions={async:!0,type:"GET",beforeSend:noop,success:noop,error:noop,complete:noop,context:null,global:!0,accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,xhrFields:{withCredentials:!0}};function mimeToDataType(t){if(t&&(t=t.split(";",2)[0]),t){if(t==htmlType)return"html";if(t==jsonType)return"json";if(scriptTypeRE.test(t))return"script";if(xmlTypeRE.test(t))return"xml"}return"text"}function appendQuery(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function serializeData(t){t.data=t.data||t.query,t.processData&&t.data&&"string"!=type(t.data)&&(t.data=param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()||(t.url=appendQuery(t.url,t.data),t.data=void 0)}function serialize(t,e,r,n){var i,o=isArray(e),s=isPlainObject(e);each(e,function(e,a){i=type(a),n&&(e=r?n:n+"["+(s||"object"==i||"array"==i?e:"")+"]"),!n&&o?t.add(a.name,a.value):"array"==i||!r&&"object"==i?serialize(t,a,r,e):t.add(e,a)})}var param=function(t,e){var r=[];return r.add=function(t,e){isFunction(e)&&(e=e()),null==e&&(e=""),this.push(escape(t)+"="+escape(e))},serialize(r,t,e),r.join("&").replace(/%20/g,"+")},Xhr=Evented.inherit({klassName:"Xhr",_request:function(args){var _=this._,self=this,options=mixin({},XhrDefaultOptions,_.options,args),xhr=_.xhr=new XMLHttpRequest;serializeData(options);var dataType=options.dataType||options.handleAs,mime=options.mimeType||options.accepts[dataType],headers=options.headers,xhrFields=options.xhrFields,isFormData=options.data&&options.data instanceof FormData,basicAuthorizationToken=options.basicAuthorizationToken,type=options.type,url=options.url,async=options.async,user=options.user,password=options.password,deferred=new Deferred,contentType=!isFormData&&"application/x-www-form-urlencoded";if(xhrFields)for(name in xhrFields)xhr[name]=xhrFields[name];mime&&mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),mime&&xhr.overrideMimeType&&xhr.overrideMimeType(mime);var finish=function(){xhr.onloadend=noop,xhr.onabort=noop,xhr.onprogress=noop,xhr.ontimeout=noop,xhr=null},onloadend=function(){var result,error=!1;if(xhr.status>=200&&xhr.status<300||304==xhr.status||0==xhr.status&&getAbsoluteUrl(url).startsWith("file:")){dataType=dataType||mimeToDataType(options.mimeType||xhr.getResponseHeader("content-type")),result=xhr.responseText;try{"script"==dataType?eval(result):"xml"==dataType?result=xhr.responseXML:"json"==dataType?result=blankRE.test(result)?null:JSON.parse(result):"blob"==dataType?result=Blob([xhrObj.response]):"arraybuffer"==dataType&&(result=xhr.reponse)}catch(t){error=t}error?deferred.reject(error,xhr.status,xhr):deferred.resolve(result,xhr.status,xhr)}else deferred.reject(new Error(xhr.statusText),xhr.status,xhr);finish()},onabort=function(){deferred&&deferred.reject(new Error("abort"),xhr.status,xhr),finish()},ontimeout=function(){deferred&&deferred.reject(new Error("timeout"),xhr.status,xhr),finish()},onprogress=function(t){deferred&&deferred.progress(t,xhr.status,xhr)};if(xhr.onloadend=onloadend,xhr.onabort=onabort,xhr.ontimeout=ontimeout,xhr.onprogress=onprogress,xhr.open(type,url,async,user,password),headers)for(var key in headers){var value=headers[key];"content-type"===key.toLowerCase()?contentType=headers[hdr]:xhr.setRequestHeader(key,value)}return contentType&&!1!==contentType&&xhr.setRequestHeader("Content-Type",contentType),headers&&"X-Requested-With"in headers||xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),basicAuthorizationToken&&xhr.setRequestHeader("Authorization",basicAuthorizationToken),xhr.send(options.data?options.data:null),deferred.promise},abort:function(){var t=this._,e=t.xhr;e&&e.abort()},request:function(t){return this._request(t)},get:function(t){return(t=t||{}).type="GET",this._request(t)},post:function(t){return(t=t||{}).type="POST",this._request(t)},patch:function(t){return(t=t||{}).type="PATCH",this._request(t)},put:function(t){return(t=t||{}).type="PUT",this._request(t)},del:function(t){return(t=t||{}).type="DELETE",this._request(t)},init:function(t){this._={options:t||{}}}});return["request","get","post","put","del","patch"].forEach(function(t){Xhr[t]=function(e,r){var n=new Xhr({url:e});return n[t](r)}}),Xhr.defaultOptions=XhrDefaultOptions,Xhr.param=param,Xhr}();return Xhr}),define("skylark-langx/Restful",["./Evented","./objects","./strings","./Xhr"],function(t,e,r,n){var i=e.mixin,o=r.substitute,s=t.inherit({klassName:"Restful",idAttribute:"id",getBaseUrl:function(t){var e=o(this.baseEndpoint,t),r=this.server+this.basePath+e;return void 0!==t[this.idAttribute]&&(r=r+"/"+t[this.idAttribute]),r},_head:function(t){},_get:function(t){return n.get(this.getBaseUrl(t),t)},_post:function(t,e){var r=this.getBaseUrl(t);return e&&(r=r+"/"+e),n.post(r,t)},_put:function(t,e){var r=this.getBaseUrl(t);return e&&(r=r+"/"+e),n.put(r,t)},_delete:function(t){var e=this.getBaseUrl(t);return n.del(e)},_patch:function(t){var e=this.getBaseUrl(t);return n.patch(e,t)},query:function(t){return this._post(t)},retrieve:function(t){return this._get(t)},create:function(t){return this._post(t)},update:function(t){return this._put(t)},delete:function(t){return this._delete(t)},patch:function(t){return this._patch(t)},init:function(t){i(this,t)}});return s}),define("skylark-langx/Stateful",["./Evented"],function(t){var e=t.inherit({_constructor:function(t,e){var r=t||{};e||(e={}),this.cid=uniqueId(this.cidPrefix),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(r=this.parse(r,e)||{});var n=result(this,"defaults");r=mixin({},n,r),this.set(r,e),this.changed={}},changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",toJSON:function(t){return clone(this.attributes)},get:function(t){return this.attributes[t]},has:function(t){return null!=this.get(t)},set:function(t,e,r){if(null==t)return this;var n;if("object"==typeof t?(n=t,r=e):(n={})[t]=e,r||(r={}),!this._validate(n,r))return!1;var i=r.unset,o=r.silent,s=[],a=this._changing;this._changing=!0,a||(this._previousAttributes=clone(this.attributes),this.changed={});var u=this.attributes,c=this.changed,l=this._previousAttributes;for(var f in n)e=n[f],isEqual(u[f],e)||s.push(f),isEqual(l[f],e)?delete c[f]:c[f]=e,i?delete u[f]:u[f]=e;if(this.idAttribute in n&&(this.id=this.get(this.idAttribute)),!o){s.length&&(this._pending=r);for(var p=0;p<s.length;p++)this.trigger("change:"+s[p],this,u[s[p]],r)}if(a)return this;if(!o)for(;this._pending;)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,mixin({},e,{unset:!0}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,mixin({},t,{unset:!0}))},hasChanged:function(t){return null==t?!isEmptyObject(this.changed):void 0!==this.changed[t]},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&clone(this.changed);var e=this._changing?this._previousAttributes:this.attributes,r={};for(var n in t){var i=t[n];isEqual(e[n],i)||(r[n]=i)}return!isEmptyObject(r)&&r},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return clone(this._previousAttributes)},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},mixin({},t,{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=mixin({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;return!r||(this.trigger("invalid",this,r,mixin(e,{validationError:r})),!1)}});return e}),define("skylark-langx/langx",["./skylark","./arrays","./ArrayStore","./aspect","./async","./datetimes","./Deferred","./Evented","./funcs","./klass","./objects","./Restful","./Stateful","./strings","./types","./Xhr"],function(t,e,r,n,i,o,s,a,u,c,l,f,p,h,d,v){"use strict";Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice,Array.prototype.filter;var y=l.mixin,g=l.safeMixin,m=d.isFunction;var x=1;var b=0;function _(){return _}return y(_,{createEvent:function(t,e){var r=new CustomEvent(t,e);return g(r,e)},funcArg:function(t,e,r,n){return m(e)?e.call(t,r,n):e},getQueryParams:function(t){var e=(t=t||window.location.href).split("?"),r={};e.length>1&&e[1].split("&").forEach(function(t){var e=t.split("=");r[e[0]]=e[1]});return r},toPixel:function(t){return parseFloat(t)||0},uid:function(t){return t._uid||(t._uid=x++)},uniqueId:function(t){var e=++b+"";return t?t+e:e},URL:"undefined"!=typeof window?window.URL||window.webkitURL:null}),y(_,e,n,o,u,l,h,d,{ArrayStore:r,async:i,Deferred:s,Evented:a,klass:c,Restful:f,Stateful:p,Xhr:v}),t.langx=_}),define("skylark-langx/main",["./skylark","./langx"],function(t){return t}),define("skylark-langx",["skylark-langx/main"],function(t){return t})}(define,require),!isAmd){var skylarkjs=require("skylark-langx/skylark");isCmd?module.exports=skylarkjs:globals.skylarkjs=skylarkjs}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-all.js.map