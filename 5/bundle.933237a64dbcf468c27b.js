(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var s=n(537),i=n.n(s),r=n(645),a=n.n(r)()(i());a.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",s=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),s&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),s&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,s,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(s)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);s&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",l="month",u="quarter",c="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(s,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,l),r=n-i<0,a=e.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:o,d:a,D:d,h:r,m:i,s,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=m;var g=function(t){return t instanceof k},b=function t(e,n,s){var i;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(i=r),n&&($[r]=n,i=r);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;$[o]=e,i=o}return!s&&i&&(y=i),i||!s&&y},w=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},M=_;M.l=b,M.i=g,M.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(f);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return w(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<w(t)},v.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,u=!!M.u(e)||e,p=M.p(t),f=function(t,e){var s=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?s:s.endOf(a)},h=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case c:return u?f(1,0):f(31,11);case l:return u?f(1,v):f(0,v+1);case o:var $=this.$locale().weekStart||0,g=(m<$?m+7:m)-$;return f(u?_-g:_+(6-g),v);case a:case d:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case s:return h(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,u=M.p(t),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[c]=p+"FullYear",o[r]=p+"Hours",o[i]=p+"Minutes",o[s]=p+"Seconds",o[n]=p+"Milliseconds",o)[u],h=u===a?this.$D+(e-this.$W):e;if(u===l||u===c){var m=this.clone().set(d,1);m.$d[f](h),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[M.p(t)]()},v.add=function(n,u){var d,p=this;n=Number(n);var f=M.p(u),h=function(t){var e=w(p);return M.w(e.date(e.date()+Math.round(t*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===c)return this.set(c,this.$y+n);if(f===a)return h(1);if(f===o)return h(7);var m=(d={},d[i]=t,d[r]=e,d[s]=1e3,d)[f]||1,v=this.$d.getTime()+n*m;return M.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].slice(0,r)},d=function(t){return M.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return s.replace(h,(function(t,e){return e||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,p){var f,h=M.p(d),m=w(n),v=(m.utcOffset()-this.utcOffset())*t,_=this-m,y=M.m(this,m);return y=(f={},f[c]=y/12,f[l]=y,f[u]=y/3,f[o]=(_-v)/6048e5,f[a]=(_-v)/864e5,f[r]=_/e,f[i]=_/t,f[s]=_/1e3,f)[h]||_,p?y:M.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=b(t,e,!0);return s&&(n.$L=s),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),S=k.prototype;return w.prototype=S,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",l],["$y",c],["$D",d]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,k,w),t.$i=!0),w},w.locale=b,w.isDayjs=g,w.unix=function(t){return w(1e3*t)},w.en=$[y],w.Ls=$,w.p={},w}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:o,months:l,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof y},p=function(t,e,n){return new y(t,n,e.$l)},f=function(t){return e.p(t)+"s"},h=function(t){return t<0},m=function(t){return h(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?h(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function h(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return p(t*c[f(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[f(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(u);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=h.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/o),t%=o,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/i),t%=i,this.$d.minutes=m(t/s),t%=s,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=_(n,"D"),i=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=_(a,"S"),l=t.negative||e.negative||s.negative||i.negative||r.negative||o.negative,u=i.format||r.format||o.format?"T":"",c=(l?"-":"")+"P"+t.format+e.format+s.format+u+i.format+r.format+o.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(t,e){return e||String(s[t])}))},v.as=function(t){return this.$ms/c[f(t)]},v.get=function(t){var e=this.$ms,n=f(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/c[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var s;return s=e?t*c[f(e)]:d(t)?t.$ms:p(t,this).$ms,p(this.$ms+s*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return p(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},h}();return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return p(t,{$l:n},e)},i.isDuration=d;var r=s.prototype.add,a=s.prototype.subtract;s.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,s=0;s<e.length;s++)if(e[s].identifier===t){n=s;break}return n}function s(t,s){for(var r={},a=[],o=0;o<t.length;o++){var l=t[o],u=s.base?l[0]+s.base:l[0],c=r[u]||0,d="".concat(u," ").concat(c);r[u]=c+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=i(f,s);s.byIndex=o,e.splice(o,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=s(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var o=n(r[a]);e[o].references--}for(var l=s(t,i),u=0;u<r.length;u++){var c=n(r[u]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var s=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={id:s,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),s=n(795),i=n.n(s),r=n(569),a=n.n(r),o=n(565),l=n.n(o),u=n(216),c=n.n(u),d=n(589),p=n.n(d),f=n(10),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=c(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m="shake";class v{#t=null;constructor(){if(new.target===v)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),t?.()}),600)}}function _(t,e,n="beforeend"){if(!(t instanceof v))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function y(t,e){if(!(t instanceof v&&e instanceof v))throw new Error("Can replace only components");const n=t.element,s=e.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}class $ extends v{get template(){return'<ul class="trip-events__list"></ul>'}}class g extends v{get template(){return'\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>\n  '}}class b extends v{get template(){return'\n    <form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  '}}class w extends v{get template(){return'\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>\n  '}}var M=n(484),k=n.n(M);const S=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],D=()=>(new Date).toISOString(),A=(t,e)=>{const n=Math.ceil(Math.min(Math.abs(t),Math.abs(e))),s=Math.floor(Math.max(Math.abs(t),Math.abs(e)));return Math.floor(Math.random()*(s-n+1)+n)},C=()=>{let t=0;return()=>(t++,t)},x=t=>t[A(0,t.length-1)],E={id:0,basePrice:"",dateFrom:D(),dateTo:D(),destination:"",isFavorite:0,offers:[],type:x(S)};class Y extends v{#e=null;#n=null;#s=null;#i=null;#r=null;constructor({destinations:t,offersList:e,point:n=E,onFormSubmit:s,onRollupClick:i}){super(),this.#e=t,this.#n=e,this.#s=n,this.#i=s,this.#r=i,this.element.querySelector("form").addEventListener("submit",this.#a),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#o)}get template(){return function(t,e,n){const{id:s,basePrice:i,dateFrom:r,dateTo:a,destination:o,offers:l,type:u}=n,c=k()(r),d=k()(a),p=""===o,f=t.find((t=>o===t.id)),h=S.map((t=>function(t,e,n){return`\n    <div class="event__type-item">\n      <input id="event-type-${t}-${n}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}" ${e?"checked":""} />\n      <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-${n}">${t[0].toUpperCase()}${t.slice(1)}</label>\n    </div>\n  `}(t,t===u,s))).join(""),m=t.map((t=>function({name:t}){return`<option value="${t}"></option>`}(t))).join(""),v=e.map((t=>function({id:t,title:e,price:n},s,i){return`\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t}-${s}" type="checkbox" name="event-offer-${t}" ${i.includes(t)?"checked":""}>\n      <label class="event__offer-label" for="event-offer-${t}-${s}">\n        <span class="event__offer-title">${e}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${n}</span>\n      </label>\n    </div>\n  `}(t,s,l))).join(""),_=f?function({description:t,pictures:e}){return`\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${t}</p>\n      ${e.length?`\n        <div class="event__photos-container">\n          <div class="event__photos-tape">\n            ${e.map((({description:t,src:e})=>`<img class="event__photo" src="${e}" alt="${t}">`)).join("")}\n          </div>\n        </div>\n      `:""}\n    </section>\n  `}(f):"";return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-${s}">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${u}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${s}" type="checkbox">\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${h}\n              </fieldset>\n            </div>\n          </div>\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-${s}">\n              ${u}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-${s}" type="text" name="event-destination" value="${f?f.name:""}" list="destination-list-${s}">\n            <datalist id="destination-list-${s}">\n              ${m}\n            </datalist>\n          </div>\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-${s}">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-${s}" type="text" name="event-start-time" value="${c.format("DD/MM/YY HH:mm")}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-${s}">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-${s}" type="text" name="event-end-time" value="${d.format("DD/MM/YY HH:mm")}">\n          </div>\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-${s}">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-${s}" type="text" name="event-price" value="${i}">\n          </div>\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">${p?"Cancel":"Delete"}</button>\n          ${p?"":'\n            <button class="event__rollup-btn" type="button">\n              <span class="visually-hidden">Open event</span>\n            </button>\n          '}\n        </header>\n        ${v||_?`\n          <section class="event__details">\n            ${v?`\n              <section class="event__section  event__section--offers">\n                <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n                <div class="event__available-offers">\n                  ${v}\n                </div>\n              </section>\n            `:""}\n            ${_?`\n              ${_}\n            `:""}\n          </section>\n          `:""}\n      </form>\n    </li>\n  `}(this.#e,this.#n,this.#s)}#a=t=>{t.preventDefault(),this.#i()};#o=t=>{t.preventDefault(),this.#r()}}var T=n(646),H=n.n(T);k().extend(H());class O extends v{#l=null;#u=null;#s=null;#r=null;constructor({destination:t,offers:e,point:n,onRollupClick:s}){super(),this.#l=t,this.#u=e,this.#s=n,this.#r=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#o)}get template(){return function({name:t},e,{basePrice:n,dateFrom:s,dateTo:i,type:r,isFavorite:a}){const o=k()(s),l=k()(i);return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${o.format("YYYY-MM-DD")}">${o.format("MMM D")}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${r.toLowerCase()}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${r} ${t}</h3>\n        <div class="event__schedule">\n          ${function(t,e){const n=k().duration(e-t).$d;return`\n    <p class="event__time">\n      <time class="event__start-time" datetime="${t.format("YYYY-MM-DD[T]HH:mm")}">${t.format("HH:mm")}</time>\n      &mdash;\n      <time class="event__end-time" datetime="${e.format("YYYY-MM-DD[T]HH:mm")}">${e.format("HH:mm")}</time>\n    </p>\n    <p class="event__duration">\n      ${e.diff(t,"days")?`${`${e.diff(t,"days")}`.padStart(2,"0")}D `:""}\n      ${e.diff(t,"days")||n.hours?`${`${n.hours}`.padStart(2,"0")}H `:""}\n      ${`${n.minutes}`.padStart(2,"0")}M\n    </p>\n  `}(o,l)}\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${n}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${e.map((t=>`\n            <li class="event__offer">\n              <span class="event__offer-title">${t.title}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${t.price}</span>\n            </li>\n          `)).join("")}\n        </ul>\n        <button class="event__favorite-btn${a?"  event__favorite-btn--active":""}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  `}(this.#l,this.#u,this.#s)}#o=t=>{t.preventDefault(),this.#r()}}const j=[{id:"1",description:"Yokohama is Japan’s second largest city with a population of over three million.",name:"Yokohama",pictures:[{src:"https://www.japan-guide.com/g20/740/3209_01.jpg",description:"Zoorasia is one of Japan’s newest, largest and best kept zoos."}]},{id:"2",description:"Osaka is Japan’s second largest metropolitan area after Tokyo.",name:"Osaka",pictures:[{src:"https://www.japan-guide.com/g18/740/4021_top.jpg",description:"Universal Studios Japan (USJ) was the first theme park under the Universal Studios brand to be built in Asia."}]},{id:"3",description:"With over two million inhabitants, Nagoya is Japan’s fourth most populated city after Tokyo, Yokohama and Osaka.",name:"Nagoya",pictures:[{src:"https://www.japan-guide.com/g21/740/3314_01.jpg",description:"The SCMAGLEV and Railway Park is the railway museum of Central Japan Railways (JR Central)."}]},{id:"4",description:"Sapporo is the capital of Hokkaido and Japan’s fifth largest city.",name:"Sapporo",pictures:[]},{id:"5",description:"Fukuoka is Kyushu’s largest and one of Japan’s ten most populated cities. Because of its closeness to the Asian mainland (closer to Seoul than to Tokyo), Fukuoka has been an important harbor city for many centuries and was chosen by the Mongol invasion forces as their landing point in the 13th century.",name:"Fukuoka",pictures:[{src:"https://www.japan-guide.com/g21/740/4808_01b.jpg",description:"he Hakata Gion Yamakasa is one of the most interesting festivals in Japan."},{src:"https://www.japan-guide.com/g21/740/4803_01.jpg",description:"Fukuoka’s open air food stands are possibly the city’s best known symbol."},{src:"https://www.japan-guide.com/g21/740/4810_01b.jpg",description:"Uminonakamichi Seaside Park, is a sprawling, family-oriented park located on a narrow peninsula across the bay from central Fukuoka."}]},{id:"6",description:"Sandwiched between Tokyo and Yokohama, Kawasaki is a large coastal city in Kanagawa Prefecture that stretches along the Tamagawa River.",name:"Kawasaki",pictures:[{src:"https://www.japan-guide.com/g20/740/3252_11.jpg",description:"The Fujiko F. Fujio Museum, also informally known as the Doraemon Museum, is a fanciful art museum found in the suburbs of Kawasaki."}]},{id:"7",description:"Tokyo is Japan’s capital and the world’s most populous metropolis.",name:"Tokyo",pictures:[{src:"https://www.japan-guide.com/g18/740/3017_01.jpg",description:"The current Imperial Palace is located on the former site of Edo Castle, a large park area surrounded by moats and massive stone walls in the center of Tokyo, a short walk from Tokyo Station. It is the residence of Japan’s Imperial Family."}]},{id:"8",description:"Kyoto served as Japan’s capital and the emperor’s residence from 794 until 1868. It is one of the country’s ten largest cities with 1.5 million inhabitants and a modern face.",name:"Kyoto",pictures:[]}],F=["Add luggage","Switch to comfort class","Add meal","Choose seats","Travel by train","With pets","With children","For newlyweds"],L=C(),P=C(),I=(()=>{let t=Number(`17${A(1e10,99999999999)}`);return()=>(t+=A(1e4,1e8),new Date(t).toISOString())})(),J=()=>({id:String(L()),title:x(F),price:A(5,5e3)}),B=(()=>{const t=[];return S.forEach((e=>{t.push({type:e,offers:Array.from({length:A(0,8)},J)})})),t})(),R=()=>{const t=x(S),e=B.find((e=>e.type===t)).offers,n=A(0,e.length),s=[];for(let t=0;t<n;t++)s.push(e[t].id);return{id:String(P()),basePrice:A(10,1700),dateFrom:I(),dateTo:I(),destination:x(j).id,isFavorite:Boolean(A(0,1)),offers:s,type:t}},N=document.querySelector(".trip-main"),W=document.querySelector(".trip-events"),U=new class{#e=j;#u=B;#c=Array.from({length:4},R);get destinations(){return this.#e}get offers(){return this.#u}get points(){return this.#c}},Z=new class{#d=null;#e=null;#u=null;#p=null;#f=null;#h=null;#m=new $;constructor({header:t,main:e,pointsModel:n}){this.#f=t,this.#h=e,this.#d=n}init(){this.#e=[...this.#d.destinations],this.#u=[...this.#d.offers],this.#p=[...this.#d.points],_(new g,this.#f,"afterbegin"),_(new b,this.#f.querySelector(".trip-controls__filters")),_(new w,this.#h),_(this.#m,this.#h);for(let t=0;t<this.#p.length;t++)this.#v(this.#p[t])}#v(t){const e=this.#e.find((e=>e.id===t.destination)),n=this.#u.find((e=>e.type===t.type)).offers,s=n.filter((e=>t.offers.includes(e.id))),i=t=>{"Escape"===t.key&&(t.preventDefault(),l(),document.removeEventListener("keydown",i))},r=()=>{l(),document.removeEventListener("keydown",i)},a=new O({destination:e,offers:s,point:t,onRollupClick:()=>{y(o,a),document.addEventListener("keydown",i)}}),o=new Y({destinations:this.#e,offersList:n,point:t,onFormSubmit:r,onRollupClick:r});function l(){y(a,o)}_(a,this.#m.element)}}({header:N,main:W,pointsModel:U});_(new class extends v{get template(){return'<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>'}},N),Z.init()})()})();
//# sourceMappingURL=bundle.933237a64dbcf468c27b.js.map