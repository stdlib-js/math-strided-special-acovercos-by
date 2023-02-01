// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,l){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(e,r)||a.call(e,r)?(f=e.__proto__,e.__proto__=t,delete e[r],e[r]=l.value,e.__proto__=f):e[r]=l.value),_="get"in l,p="set"in l,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,r,l.get),p&&i&&i.call(e,r,l.set),e};function f(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e,r,t,n,o,i,u,a){var l,f,c,_;if(e<=0)return n;for(l=t<0?(1-e)*t:0,f=o<0?(1-e)*o:0,_=0;_<e;_++)void 0!==(c=u.call(a,r[l],_,l,f,r,n))&&(n[f]=i(c)),l+=t,f+=o;return n}function _(e,r,t,n,o,i,u,a,l,f){var c,_,p,d;if(e<=0)return o;for(c=n,_=u,d=0;d<e;d++)void 0!==(p=l.call(f,r[c],d,c,_,r,o))&&(o[_]=a(p)),c+=t,_+=i;return o}f(c,"ndarray",_);var p=Math.sqrt,d=.7853981633974483;function s(e){return function(e){var r,t,n,o,i;if(function(e){return e!=e}(e))return NaN;if(e>0?n=e:(r=!0,n=-e),n>1)return NaN;if(n>.625)o=(t=1-n)*function(e){var r,t;return 0===e?.08333333333333809:((e<0?-e:e)<=1?(r=28.536655482610616+e*(e*(6.968710824104713+e*(.002967721961301243*e-.5634242780008963))-25.56901049652825),t=342.43986579130785+e*(e*(147.0656354026815+e*(1*e-21.947795316429207))-383.8770957603691)):(r=.002967721961301243+(e=1/e)*(e*(6.968710824104713+e*(28.536655482610616*e-25.56901049652825))-.5634242780008963),t=1+e*(e*(147.0656354026815+e*(342.43986579130785*e-383.8770957603691))-21.947795316429207)),r/t)}(t),t=p(t+t),i=d-t,i-=t=t*o-6123233995736766e-32,i+=d;else{if(n<1e-8)return e;i=(t=n*n)*function(e){var r,t;return 0===e?.16666666666666713:((e<0?-e:e)<=1?(r=e*(19.562619833175948+e*(e*(5.444622390564711+e*(.004253011369004428*e-.6019598008014124))-16.262479672107002))-8.198089802484825,t=e*(139.51056146574857+e*(e*(70.49610280856842+e*(1*e-14.740913729888538))-147.1791292232726))-49.18853881490881):(r=.004253011369004428+(e=1/e)*(e*(5.444622390564711+e*(e*(19.562619833175948+-8.198089802484825*e)-16.262479672107002))-.6019598008014124),t=1+e*(e*(70.49610280856842+e*(e*(139.51056146574857+-49.18853881490881*e)-147.1791292232726))-14.740913729888538)),r/t)}(t),i=n*i+n}return r?-i:i}(1+e)}function y(e,r,t,n,o,i,u){return c(e,r,t,n,o,s,i,u)}return f(y,"ndarray",(function(e,r,t,n,o,i,u,a,l){return _(e,r,t,n,o,i,u,s,a,l)})),y},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).acovercosBy=r();
//# sourceMappingURL=index.js.map
