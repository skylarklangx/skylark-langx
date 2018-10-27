/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./arrays","./objects","./types"],function(t,r,n){var e=t.uniq,i=r.has,o=r.mixin,c=n.isArray,s=n.isDefined,u=function(){function t(t,r,n){var e=t.prototype,i=t.superclass.prototype,o=n&&n.noOverrided;for(var c in r)if("constructor"!==c){var s=r[c];"function"==typeof r[c]?e[c]=s._constructor||o||"function"!=typeof i[c]?s:function(t,r,n){return function(){var t=this.overrided;this.overrided=n;var e=r.apply(this,arguments);return this.overrided=t,e}}(c,s,i[c]):"object"==typeof s&&null!==s&&s.get?Object.defineProperty(e,c,s):e[c]=s}return t}function r(t,r){var n=[];return r.forEach(function(t){if(i(t,"__mixins__"))throw new Error("nested mixins");for(var r=[];t;)r.unshift(t),t=t.superclass;n=n.concat(r)}),n=e(n),n=n.filter(function(r){for(var n=t;n;){if(r===n)return!1;if(i(n,"__mixins__"))for(var e=n.__mixins__,o=0;o<e.length;o++)if(e[o]===r)return!1;n=n.superclass}return!0}),n.length>0&&n}function n(t,r){for(var n=t,e=0;e<r.length;e++){var i=new Function;i.prototype=Object.create(n.prototype),i.__proto__=n,i.superclass=null,o(i.prototype,r[e].prototype),i.prototype.__mixin__=r[e],n=i}return n}return function u(e,i,o,a){c(i)&&(a=o,o=i,i=null),i=i||Object,s(o)&&!c(o)&&(a=o,o=!1);var p=i;o&&(o=r(p,o)),o&&(p=n(p,o));var f=e._construct;f||(f=function(){if(this.init)return this.init.apply(this,arguments)});var _=e.klassName||"",l=new Function("return function "+_+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}return ctor._constructor.apply(inst, arguments) || inst;}")();return l._constructor=f,l.prototype=Object.create(p.prototype),l.prototype.constructor=l,l.superclass=i,l.__proto__=p,o&&(l.__mixins__=o),l.partial||(l.partial=function(r,n){return t(this,r,n)}),l.inherit||(l.inherit=function(t,r,n){return u(t,this,r,n)}),l.partial(e,a),l}},a=u();return a});
//# sourceMappingURL=sourcemaps/klass.js.map
