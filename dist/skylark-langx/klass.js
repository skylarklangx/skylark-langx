/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./arrays","./objects","./types"],function(t,r,n){var o=t.uniq,e=r.has,i=r.mixin,s=n.isArray,c=n.isDefined,u=function(){function t(t,r,n){var o=t.prototype,e=t.superclass.prototype,i=n&&n.noOverrided;for(var s in r)if("constructor"!==s){var c=r[s];"function"==typeof r[s]?o[s]=c._constructor||i||"function"!=typeof e[s]?c:function(t,r,n){return function(){var t=this.overrided;this.overrided=n;var o=r.apply(this,arguments);return this.overrided=t,o}}(s,c,e[s]):"object"==typeof c&&null!==c&&c.get?Object.defineProperty(o,s,c):o[s]=c}return t}function r(t,r){var n=[];return r.forEach(function(t){if(e(t,"__mixins__"))throw new Error("nested mixins");for(var r=[];t;)r.unshift(t),t=t.superclass;n=n.concat(r)}),n=o(n),n=n.filter(function(r){for(var n=t;n;){if(r===n)return!1;if(e(n,"__mixins__"))for(var o=n.__mixins__,i=0;i<o.length;i++)if(o[i]===r)return!1;n=n.superclass}return!0}),n.length>0&&n}function n(t,r){for(var n=t,o=0;o<r.length;o++){var e=new Function;e.prototype=Object.create(n.prototype),e.__proto__=n,e.superclass=null,i(e.prototype,r[o].prototype),e.prototype.__mixin__=r[o],n=e}return n}function u(){return this._construct?this._construct.apply(this,arguments):this.init?this.init.apply(this,arguments):void 0}return function a(o,e,i,p){s(e)&&(p=i,i=e,e=null),e=e||Object,c(i)&&!s(i)&&(p=i,i=!1);var f=e;i&&(i=r(f,i)),i&&(f=n(f,i));var _=o.klassName||"",l=new Function("return function "+_+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}return ctor._constructor.apply(inst, arguments) || inst;}")();return l.prototype=Object.create(f.prototype),l.prototype.constructor=l,l.superclass=e,l.__proto__=f,l._constructor||(l._constructor=u),i&&(l.__mixins__=i),l.partial||(l.partial=function(r,n){return t(this,r,n)}),l.inherit||(l.inherit=function(t,r,n){return a(t,this,r,n)}),l.partial(o,p),l}},a=u();return a});
//# sourceMappingURL=sourcemaps/klass.js.map
