/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){var e=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"});function r(r){return e[r]}var t=/[&<>"'`=]/g;var n=0;function a(e,r){var t,n,a,c,i,u,l,s=arguments.callee;return s.cache[e]||(s.cache[e]=(t=e,n=/^[\w\-]+$/.test(e)?s.get(e):(t="template(string)",e),a=1,c=("try { "+(s.variable?"var "+s.variable+" = this.stash;":"with (this.stash) { ")+"this.ret += '"+n.replace(/<%/g,"").replace(/%>/g,"").replace(/'(?![^\x11\x13]+?\x13)/g,"\\x27").replace(/^\s*|\s*$/g,"").replace(/\n|\r\n/g,function(){return"';\nthis.line = "+ ++a+"; this.ret += '\\n"}).replace(/\x11=raw(.+?)\x13/g,"' + ($1) + '").replace(/\x11=(.+?)\x13/g,"' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g,"'; $1; this.ret += '")+"'; "+(s.variable?"":"}")+"return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on "+t+"' + ' line ' + this.line + ')'; } //@ sourceURL="+t+"\n").replace(/this\.ret \+= '';/g,""),i=new Function(c),u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#x22;","'":"&#x27;"},l=function(e){return(""+e).replace(/[&<>\'\"]/g,function(e){return u[e]})},function(e){return i.call(s.context={escapeHTML:l,line:1,ret:"",stash:e})})),r?s.cache[e](r):s.cache[e]}return a.cache={},a.get=function(e){return document.getElementById(e).innerHTML},{camelCase:function(e){return e.replace(/-([\da-z])/g,function(e){return e.toUpperCase().replace("-","")})},dasherize:function(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},deserializeValue:function(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?JSON.parse(e):e):e}catch(r){return e}},escapeHTML:function(e){return null==e?"":e?e.toString().replace(t,r):String(e)},lowerFirst:function(e){return e.charAt(0).toLowerCase()+e.slice(1)},rtrim:function(e){return e.replace(/\s+$/g,"")},serializeValue:function(e){return JSON.stringify(e)},substitute:function(e,r,t,n){function a(e,r){if(e.match(/\./)){var t,n=function(e,r){var a=e.pop();return a?r[a]?n(e,t=r[a]):null:t};return n(e.split(".").reverse(),r)}return r[e]}return n=n||window,t=t?proxy(n,t):function(e){return e},e.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(e,c,i){var u=a(c,r);return i&&(u=a(i,n).call(n,u,c)),t(u,c).toString()})},template:a,trim:function(e){return null==e?"":String.prototype.trim.call(e)},uniqueId:function(e){var r=++n+"";return e?e+r:r},upperFirst:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}});
//# sourceMappingURL=sourcemaps/strings.js.map
