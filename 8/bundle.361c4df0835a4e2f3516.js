(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);i&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",$={};$[_]=m;var g=function(t){return t instanceof C},b=function t(e,n,i){var s;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,s=a}return!i&&s&&(_=s),s||!i&&_},w=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new C(n)},M=y;M.l=b,M.i=g,M.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var C=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return w(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<w(t)},v.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!M.u(e)||e,p=M.p(t),h=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},f=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(p){case u:return c?h(1,0):h(31,11);case l:return c?h(1,v):h(0,v+1);case a:var $=this.$locale().weekStart||0,g=(m<$?m+7:m)-$;return h(c?y-g:y+(6-g),v);case o:case d:return f(_+"Hours",0);case r:return f(_+"Minutes",1);case s:return f(_+"Seconds",2);case i:return f(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=M.p(t),p="set"+(this.$u?"UTC":""),h=(a={},a[o]=p+"Date",a[d]=p+"Date",a[l]=p+"Month",a[u]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[c],f=c===o?this.$D+(e-this.$W):e;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[h](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[M.p(t)]()},v.add=function(n,c){var d,p=this;n=Number(n);var h=M.p(c),f=function(t){var e=w(p);return M.w(e.date(e.date()+Math.round(t*n)),p)};if(h===l)return this.set(l,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===o)return f(1);if(h===a)return f(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[h]||1,v=this.$d.getTime()+n*m;return M.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,u=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return M.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:u(n.monthsShort,a,c,3),MMMM:u(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,p){var h,f=M.p(d),m=w(n),v=(m.utcOffset()-this.utcOffset())*t,y=this-m,_=M.m(this,m);return _=(h={},h[u]=_/12,h[l]=_,h[c]=_/3,h[a]=(y-v)/6048e5,h[o]=(y-v)/864e5,h[r]=y/e,h[s]=y/t,h[i]=y/1e3,h)[f]||y,p?_:M.a(_)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),k=C.prototype;return w.prototype=k,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",u],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,C,w),t.$i=!0),w},w.locale=b,w.isDayjs=g,w.unix=function(t){return w(1e3*t)},w.en=$[_],w.Ls=$,w.p={},w}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof _},p=function(t,e,n){return new _(t,n,e.$l)},h=function(t){return e.p(t)+"s"},f=function(t){return t<0},m=function(t){return f(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},y=function(t,e){return t?f(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},_=function(){function f(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return p(t*u[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(c);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=y(this.$d.years,"Y"),e=y(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=y(n,"D"),s=y(this.$d.hours,"H"),r=y(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=y(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,c=s.format||r.format||a.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+i.format+c+s.format+r.format+a.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/u[h(t)]},v.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/u[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*u[h(e)]:d(t)?t.$ms:p(t,this).$ms,p(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return p(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return p(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=s(h,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),c=n(216),u=n.n(c),d=n(589),p=n.n(d),h=n(10),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=u(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m="shake";class v{#t=null;constructor(){if(new.target===v)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),t?.()}),600)}}function y(t,e,n="beforeend"){if(!(t instanceof v))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function _(t,e){if(!(t instanceof v&&e instanceof v))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function $(t){if(null!==t){if(!(t instanceof v))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}const g="everything",b="future",w="present",M="past",C="time",k="price",S=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];var D=n(484),T=n.n(D);const F=(t,e)=>T()(t.dateFrom)-T()(e.dateFrom),A=(t,e)=>e.basePrice-t.basePrice,H=(t,e)=>T()(e.dateTo)-T()(e.dateFrom)-(T()(t.dateTo)-T()(t.dateFrom)),E={[g]:t=>t,[b]:t=>t.filter((t=>{return e=t.dateFrom,T()().isBefore(T()(e));var e})),[w]:t=>t.filter((t=>{return e=t.dateFrom,n=t.dateTo,T()().isAfter(T()(e))&&T()().isBefore(T()(n));var e,n})),[M]:t=>t.filter((t=>{return e=t.dateTo,T()().isAfter(T()(e));var e}))},P=(t,e)=>{const n=Math.ceil(Math.min(Math.abs(t),Math.abs(e))),i=Math.floor(Math.max(Math.abs(t),Math.abs(e)));return Math.floor(Math.random()*(i-n+1)+n)},x=()=>{let t=0;return()=>(t++,t)},Y=t=>t[P(0,t.length-1)],O=[{id:"1",description:"Yokohama is Japan’s second largest city with a population of over three million.",name:"Yokohama",pictures:[{src:"https://www.japan-guide.com/g20/740/3209_01.jpg",description:"Zoorasia is one of Japan’s newest, largest and best kept zoos."}]},{id:"2",description:"Osaka is Japan’s second largest metropolitan area after Tokyo.",name:"Osaka",pictures:[{src:"https://www.japan-guide.com/g18/740/4021_top.jpg",description:"Universal Studios Japan (USJ) was the first theme park under the Universal Studios brand to be built in Asia."}]},{id:"3",description:"With over two million inhabitants, Nagoya is Japan’s fourth most populated city after Tokyo, Yokohama and Osaka.",name:"Nagoya",pictures:[{src:"https://www.japan-guide.com/g21/740/3314_01.jpg",description:"The SCMAGLEV and Railway Park is the railway museum of Central Japan Railways (JR Central)."}]},{id:"4",description:"Sapporo is the capital of Hokkaido and Japan’s fifth largest city.",name:"Sapporo",pictures:[]},{id:"5",description:"Fukuoka is Kyushu’s largest and one of Japan’s ten most populated cities. Because of its closeness to the Asian mainland (closer to Seoul than to Tokyo), Fukuoka has been an important harbor city for many centuries and was chosen by the Mongol invasion forces as their landing point in the 13th century.",name:"Fukuoka",pictures:[{src:"https://www.japan-guide.com/g21/740/4808_01b.jpg",description:"he Hakata Gion Yamakasa is one of the most interesting festivals in Japan."},{src:"https://www.japan-guide.com/g21/740/4803_01.jpg",description:"Fukuoka’s open air food stands are possibly the city’s best known symbol."},{src:"https://www.japan-guide.com/g21/740/4810_01b.jpg",description:"Uminonakamichi Seaside Park, is a sprawling, family-oriented park located on a narrow peninsula across the bay from central Fukuoka."}]},{id:"6",description:"Sandwiched between Tokyo and Yokohama, Kawasaki is a large coastal city in Kanagawa Prefecture that stretches along the Tamagawa River.",name:"Kawasaki",pictures:[{src:"https://www.japan-guide.com/g20/740/3252_11.jpg",description:"The Fujiko F. Fujio Museum, also informally known as the Doraemon Museum, is a fanciful art museum found in the suburbs of Kawasaki."}]},{id:"7",description:"Tokyo is Japan’s capital and the world’s most populous metropolis.",name:"Tokyo",pictures:[{src:"https://www.japan-guide.com/g18/740/3017_01.jpg",description:"The current Imperial Palace is located on the former site of Edo Castle, a large park area surrounded by moats and massive stone walls in the center of Tokyo, a short walk from Tokyo Station. It is the residence of Japan’s Imperial Family."}]},{id:"8",description:"Kyoto served as Japan’s capital and the emperor’s residence from 794 until 1868. It is one of the country’s ten largest cities with 1.5 million inhabitants and a modern face.",name:"Kyoto",pictures:[]}],j=["Add luggage","Switch to comfort class","Add meal","Choose seats","Travel by train","With pets","With children","For newlyweds"],L=x(),I=x(),R=(()=>{let t=Number(`17${P(1e10,99999999999)}`);return()=>(t+=P(1e4,1e8),new Date(t).toISOString())})(),B=()=>({id:String(L()),title:Y(j),price:P(5,5e3)}),U=(()=>{const t=[];return S.forEach((e=>{t.push({type:e,offers:Array.from({length:P(0,8)},B)})})),t})(),J=()=>{const t=Y(S),e=U.find((e=>e.type===t)).offers,n=P(0,e.length),i=[];for(let t=0;t<n;t++)i.push(e[t].id);return{id:String(I()),basePrice:P(10,1700),dateFrom:R(),dateTo:R(),destination:Y(O).id,isFavorite:Boolean(P(0,1)),offers:i,type:t}};class N extends v{#e=null;constructor({onSortTypeChange:t}){super(),this.#e=t,this.element.addEventListener("change",this.#n)}get template(){return`\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type="day" checked>\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${C}">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type="${k}">\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>\n  `}#n=t=>{t.target.classList.contains("trip-sort__input")&&(t.preventDefault(),this.#e(t.target.dataset.sortType))}}class W extends v{get template(){return'<p class="trip-events__msg">Click New Event to create your first point</p>'}}class q extends v{get template(){return'<ul class="trip-events__list"></ul>'}}class K extends v{#i=null;#s=null;#r=null;constructor({route:t,dates:e,sum:n}){super(),this.#i=t,this.#s=e,this.#r=n}get template(){return t=this.#i,e=this.#s,n=this.#r,`\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">${t}</h1>\n        <p class="trip-info__dates">${function([t,e]){const n=T()(t),i=T()(e);return`${n.format("D")}${n.format("M")!==i.format("M")?` ${n.format("MMM")}`:""} — ${i.format("D MMM")}`}(e)}</p>\n      </div>\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">${n}</span>\n      </p>\n    </section>\n  `;var t,e,n}}class Z{#o=[];#a=[];#l=[];#c=null;#u=null;constructor({pointsModel:t,container:e}){this.#o=[...t.destinations],this.#a=[...t.offers],this.#u=e}init(t){this.#l=t;const e=(t=>this.#l.map((t=>t.destination)).filter(((t,e,n)=>0===e||t!==n[e-1])).map((e=>t.find((t=>t.id===e)).name)).join(" — "))(this.#o),n=[this.#l[0].dateFrom,this.#l[this.#l.length-1].dateTo],i=((t,e)=>e.map((e=>((t,{type:e,offers:n})=>{const i=t.find((t=>t.type===e)).offers;return n.map((t=>i.find((e=>t===e.id)).price))})(t,e))).flat().concat((t=>t.map((t=>t.basePrice)))(e)).reduce(((t,e)=>t+Number(e)),0))(this.#a,this.#l),s=this.#c;this.#c=new K({route:e,dates:n,sum:i}),null===s?y(this.#c,this.#u,"afterbegin"):_(this.#c,s),$(s)}}var z=n(646),V=n.n(z);T().extend(V());class X extends v{#d=null;#a=null;#p=null;#h=null;#f=null;constructor({destination:t,offers:e,point:n,onRollupClick:i,onFavoriteClick:s}){super(),this.#d=t,this.#a=e,this.#p=n,this.#h=i,this.#f=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#m),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#v)}get template(){return function({name:t},e,{basePrice:n,dateFrom:i,dateTo:s,type:r,isFavorite:o}){const a=T()(i),l=T()(s);return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${a.format("YYYY-MM-DD")}">${a.format("MMM D")}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${r.toLowerCase()}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${r} ${t}</h3>\n        <div class="event__schedule">\n          ${function(t,e){const n=T().duration(e-t).$d;return`\n    <p class="event__time">\n      <time class="event__start-time" datetime="${t.format("YYYY-MM-DD[T]HH:mm")}">${t.format("HH:mm")}</time>\n      &mdash;\n      <time class="event__end-time" datetime="${e.format("YYYY-MM-DD[T]HH:mm")}">${e.format("HH:mm")}</time>\n    </p>\n    <p class="event__duration">\n      ${e.diff(t,"days")?`${`${e.diff(t,"days")}`.padStart(2,"0")}D `:""}\n      ${e.diff(t,"days")||n.hours?`${`${n.hours}`.padStart(2,"0")}H `:""}\n      ${`${n.minutes}`.padStart(2,"0")}M\n    </p>\n  `}(a,l)}\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${n}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${e.map((t=>`\n            <li class="event__offer">\n              <span class="event__offer-title">${t.title}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${t.price}</span>\n            </li>\n          `)).join("")}\n        </ul>\n        <button class="event__favorite-btn${o?"  event__favorite-btn--active":""}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  `}(this.#d,this.#a,this.#p)}#m=t=>{t.preventDefault(),this.#h()};#v=t=>{t.preventDefault(),this.#f()}}const G={id:0,basePrice:"",dateFrom:(new Date).toISOString(),dateTo:(new Date).toISOString(),destination:"",isFavorite:0,offers:[],type:Y(S)};class Q extends v{#o=null;#y=null;#p=null;#_=null;#$=null;constructor({destinations:t,offersList:e,point:n=G,onFormSubmit:i,onFormRollupClick:s}){super(),this.#o=t,this.#y=e,this.#p=n,this.#_=i,this.#$=s,this.element.querySelector("form").addEventListener("submit",this.#g),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#m)}get template(){return function(t,e,n){const{id:i,basePrice:s,dateFrom:r,dateTo:o,destination:a,offers:l,type:c}=n,u=T()(r),d=T()(o),p=""===a,h=t.find((t=>a===t.id)),f=S.map((t=>function(t,e,n){return`\n    <div class="event__type-item">\n      <input id="event-type-${t}-${n}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}" ${e?"checked":""} />\n      <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-${n}">${t[0].toUpperCase()}${t.slice(1)}</label>\n    </div>\n  `}(t,t===c,i))).join(""),m=t.map((t=>function({name:t}){return`<option value="${t}"></option>`}(t))).join(""),v=e.map((t=>function({id:t,title:e,price:n},i,s){return`\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t}-${i}" type="checkbox" name="event-offer-${t}" ${s.includes(t)?"checked":""}>\n      <label class="event__offer-label" for="event-offer-${t}-${i}">\n        <span class="event__offer-title">${e}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${n}</span>\n      </label>\n    </div>\n  `}(t,i,l))).join(""),y=h?function({description:t,pictures:e}){return`\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${t}</p>\n      ${e.length?`\n        <div class="event__photos-container">\n          <div class="event__photos-tape">\n            ${e.map((({description:t,src:e})=>`<img class="event__photo" src="${e}" alt="${t}">`)).join("")}\n          </div>\n        </div>\n      `:""}\n    </section>\n  `}(h):null;return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-${i}">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${c}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${i}" type="checkbox">\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${f}\n              </fieldset>\n            </div>\n          </div>\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-${i}">\n              ${c}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-${i}" type="text" name="event-destination" value="${h?h.name:""}" list="destination-list-${i}">\n            <datalist id="destination-list-${i}">\n              ${m}\n            </datalist>\n          </div>\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-${i}">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-${i}" type="text" name="event-start-time" value="${u.format("DD/MM/YY HH:mm")}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-${i}">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-${i}" type="text" name="event-end-time" value="${d.format("DD/MM/YY HH:mm")}">\n          </div>\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-${i}">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-${i}" type="text" name="event-price" value="${s}">\n          </div>\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">${p?"Cancel":"Delete"}</button>\n          ${p?"":'\n            <button class="event__rollup-btn" type="button">\n              <span class="visually-hidden">Open event</span>\n            </button>\n          '}\n        </header>\n        ${v||y?`\n          <section class="event__details">\n            ${v?`\n              <section class="event__section  event__section--offers">\n                <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n                <div class="event__available-offers">\n                  ${v}\n                </div>\n              </section>\n            `:""}\n            ${y??""}\n          </section>\n          `:""}\n      </form>\n    </li>\n  `}(this.#o,this.#y,this.#p)}#g=t=>{t.preventDefault(),this.#_(this.#p)};#m=t=>{t.preventDefault(),this.#$()}}const tt="default",et="form";class nt{#o=[];#a=[];#p=null;#b=tt;#w=null;#M=null;#C=null;#k=null;#S=null;constructor({pointsModel:t,pointsContainer:e,onDataUpdate:n,onModeChange:i}){this.#o=[...t.destinations],this.#a=[...t.offers],this.#C=e,this.#k=n,this.#S=i}init(t){this.#p=t;const e=this.#o.find((t=>t.id===this.#p.destination)),n=this.#a.find((t=>t.type===this.#p.type)).offers,i=n.filter((t=>this.#p.offers.includes(t.id))),s=this.#w,r=this.#M;this.#w=new X({destination:e,offers:i,point:this.#p,onRollupClick:this.#h,onFavoriteClick:this.#f}),this.#M=new Q({destinations:this.#o,offersList:n,point:this.#p,onFormSubmit:this.#_,onFormRollupClick:this.#$}),null!==s&&null!==r?(this.#b===tt&&_(this.#w,s),this.#b===et&&_(this.#M,r),$(s),$(r)):y(this.#w,this.#C)}destroy(){$(this.#w),$(this.#M)}resetView(){this.#b!==tt&&this.#D()}#T(){_(this.#M,this.#w),document.addEventListener("keydown",this.#F),this.#S(),this.#b=et}#D(){_(this.#w,this.#M),document.removeEventListener("keydown",this.#F),this.#b=tt}#F=t=>{"Escape"===t.key&&(t.preventDefault(),this.#D())};#f=()=>{this.#k({...this.#p,isFavorite:!this.#p.isFavorite})};#h=()=>{this.#T()};#_=t=>{this.#k(t),this.#D()};#$=()=>{this.#D()}}const it=document.querySelector(".trip-main"),st=it.querySelector(".trip-controls__filters"),rt=document.querySelector(".trip-events"),ot=new class{#o=O;#a=U;#l=Array.from({length:4},J);get destinations(){return this.#o}get offers(){return this.#a}get points(){return this.#l}},at=new class{#A=null;#l=[];#H=new Map;#E=null;#P="day";#x=new W;#Y=null;#O=new q;#j=null;#L=null;constructor({header:t,main:e,pointsModel:n}){this.#j=t,this.#L=e,this.#A=n}init(){this.#l=[...this.#A.points],this.#I()}#R=(t,e=!1)=>{var n,i;this.#l=(n=this.#l,i=t,n.map((t=>t.id===i.id?i:t))),this.#H.get(t.id).init(t),e&&this.#E.init(this.#l)};#S=()=>{this.#H.forEach((t=>{t.resetView()}))};#e=t=>{this.#P!==t&&(this.#B(t),this.#U(),this.#J())};#B(t){switch(t){case C:this.#l.sort(H);break;case k:this.#l.sort(A);break;default:this.#l.sort(F)}this.#P=t}#I(){this.#l.length?(this.#N(),this.#W(),this.#J()):this.#q()}#q(){y(this.#x,this.#L)}#N(){this.#E=new Z({pointsModel:this.#A,container:this.#j}),this.#E.init(this.#l)}#W(){this.#Y=new N({onSortTypeChange:this.#e}),y(this.#Y,this.#L)}#J(){y(this.#O,this.#L);for(let t=0;t<this.#l.length;t++)this.#K(this.#l[t])}#K(t){const e=new nt({pointsModel:this.#A,pointsContainer:this.#O.element,onDataUpdate:this.#R,onModeChange:this.#S});e.init(t),this.#H.set(t.id,e)}#U(){this.#H.forEach((t=>{t.destroy()})),this.#H.clear()}}({header:it,main:rt,pointsModel:ot}),lt=(ct=ot.points,Object.entries(E).map((([t,e])=>({type:t,enabled:Boolean(e(ct).length)}))));var ct;y(new class extends v{#Z=null;constructor({filters:t}){super(),this.#Z=t}get template(){return function(t){return`\n    <form class="trip-filters" action="#" method="get">\n      ${t.map(((t,e)=>function({type:t,enabled:e},n){return`<div class="trip-filters__filter">\n    <input id="filter-${t}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${t}" ${0===n?"checked":""}${e?"":" disabled"}>\n    <label class="trip-filters__filter-label" for="filter-${t}">${t}</label>\n  </div>`}(t,e))).join("")}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  `}(this.#Z)}}({filters:lt}),st),y(new class extends v{get template(){return'<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>'}},it),at.init()})()})();
//# sourceMappingURL=bundle.361c4df0835a4e2f3516.js.map