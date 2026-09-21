import{$ as cn,Aa as x,Ab as mi,Ba as st,Ca as I,Ea as ge,Hb as be,Ia as Ve,Jc as Z,Mc as bn,Rb as R,Sb as pn,Tb as fn,Ub as at,Vb as hn,Wb as gn,Xb as mn,Yb as xt,Zb as kt,_ as Q,_b as bi,ab as K,ac as yi,ba as D,bb as fi,bc as J,bd as dt,ca as W,cc as P,cd as _i,d as ne,dc as Di,dd as yn,ea as O,ed as ye,fa as Se,fc as ue,ga as h,gb as ze,gc as we,ha as ci,hc as _e,ib as Pe,ic as vi,jb as v,jd as A,kc as lt,lb as We,lc as ut,ld as Dn,mb as hi,mc as Ci,oa as Rt,ob as gi,oc as Si,pd as jt,qa as rt,qb as ie,qc as Ei,qd as Ai,ra as G,rb as Y,rc as Bt,rd as vn,sb as F,sc as wi,tb as me,tc as ee,td as L,ua as Mt,ub as Ee,uc as $t,ud as Cn,va as pi,vb as $,vc as Ut,wb as Ue,ya as H}from"./chunk-BW2RHRGY.js";import{a as m,b as $e,d as di}from"./chunk-VB56BUGO.js";var Ti=null;function Ht(){return Ti}function Tr(t){Ti??=t}var Sn=class{},Ge=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:()=>h(Fi),providedIn:"platform"})}return t})(),Fr=new O(""),Fi=(()=>{class t extends Ge{_location;_history;_doc=h(G);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ht().getBaseHref(this._doc)}onPopState(e){let n=Ht().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Ht().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Vt(t,o){return t?o?t.endsWith("/")?o.startsWith("/")?t+o.slice(1):t+o:o.startsWith("/")?t+o:`${t}/${o}`:t:o}function Ii(t){let o=t.search(/#|\?|$/);return t[o-1]==="/"?t.slice(0,o-1)+t.slice(o):t}function de(t){return t&&t[0]!=="?"?`?${t}`:t}var Ke=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:()=>h(Oi),providedIn:"root"})}return t})(),zt=new O(""),Oi=(()=>{class t extends Ke{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(G).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Vt(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+de(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,r){let s=this.prepareExternalUrl(i+de(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,r){let s=this.prepareExternalUrl(i+de(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(Se(Ge),Se(zt,8))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Pi=(()=>{class t{_subject=new ne;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Or(Ii(Li(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+de(n))}normalize(e){return t.stripTrailingSlash(Lr(this._basePath,Li(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+de(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+de(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=de;static joinWithSlash=Vt;static stripTrailingSlash=Ii;static \u0275fac=function(n){return new(n||t)(Se(Ke))};static \u0275prov=D({token:t,factory:()=>Ir(),providedIn:"root"})}return t})();function Ir(){return new Pi(Se(Ke))}function Lr(t,o){if(!t||!o.startsWith(t))return o;let e=o.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:o}function Li(t){return t.replace(/\/index.html$/,"")}function Or(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Pr=(()=>{class t extends Ke{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Vt(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,i,r){let s=this.prepareExternalUrl(i+de(r))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,r){let s=this.prepareExternalUrl(i+de(r))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(Se(Ge),Se(zt,8))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),Ui={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KGS:[void 0,"\u20C0"],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XCG:["Cg."],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},gt=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(gt||{});var V=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(V||{}),C=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(C||{}),te=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(te||{}),N={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function ji(t){return J(t)[P.LocaleId]}function Hi(t,o,e){let n=J(t),i=[n[P.DayPeriodsFormat],n[P.DayPeriodsStandalone]],r=ae(i,o);return ae(r,e)}function Vi(t,o,e){let n=J(t),i=[n[P.DaysFormat],n[P.DaysStandalone]],r=ae(i,o);return ae(r,e)}function zi(t,o,e){let n=J(t),i=[n[P.MonthsFormat],n[P.MonthsStandalone]],r=ae(i,o);return ae(r,e)}function Wi(t,o){let n=J(t)[P.Eras];return ae(n,o)}function ct(t,o){let e=J(t);return ae(e[P.DateFormat],o)}function pt(t,o){let e=J(t);return ae(e[P.TimeFormat],o)}function ft(t,o){let n=J(t)[P.DateTimeFormat];return ae(n,o)}function oe(t,o){let e=J(t),n=e[P.NumberSymbols][o];if(typeof n>"u"){if(o===N.CurrencyDecimal)return e[P.NumberSymbols][N.Decimal];if(o===N.CurrencyGroup)return e[P.NumberSymbols][N.Group]}return n}function en(t,o){return J(t)[P.NumberFormats][o]}function Nr(t){return J(t)[P.Currencies]}function Gi(t){if(!t[P.ExtraData])throw new Q(2303,!1)}function Ki(t){let o=J(t);return Gi(o),(o[P.ExtraData][2]||[]).map(n=>typeof n=="string"?En(n):[En(n[0]),En(n[1])])}function Yi(t,o,e){let n=J(t);Gi(n);let i=[n[P.ExtraData][0],n[P.ExtraData][1]],r=ae(i,o)||[];return ae(r,e)||[]}function ae(t,o){for(let e=o;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new Q(2304,!1)}function En(t){let[o,e]=t.split(":");return{hours:+o,minutes:+e}}function Zi(t,o,e="en"){let n=Nr(e)[t]||Ui[t]||[],i=n[1];return o==="narrow"&&typeof i=="string"?i:n[0]||t}var Rr=2;function qi(t){let o,e=Ui[t];return e&&(o=e[2]),typeof o=="number"?o:Rr}var Mr=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Wt={},xr=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Xi(t,o,e,n){let i=Wr(t);o=Ae(e,o)||o;let s=[],a;for(;o;)if(a=xr.exec(o),a){s=s.concat(a.slice(1));let d=s.pop();if(!d)break;o=d}else{s.push(o);break}let l=i.getTimezoneOffset();n&&(l=Ji(n,l),i=zr(i,n));let u="";return s.forEach(d=>{let c=Hr(d);u+=c?c(i,e,l):d==="''"?"'":d.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function qt(t,o,e){let n=new Date(0);return n.setFullYear(t,o,e),n.setHours(0,0,0),n}function Ae(t,o){let e=ji(t);if(Wt[e]??={},Wt[e][o])return Wt[e][o];let n="";switch(o){case"shortDate":n=ct(t,te.Short);break;case"mediumDate":n=ct(t,te.Medium);break;case"longDate":n=ct(t,te.Long);break;case"fullDate":n=ct(t,te.Full);break;case"shortTime":n=pt(t,te.Short);break;case"mediumTime":n=pt(t,te.Medium);break;case"longTime":n=pt(t,te.Long);break;case"fullTime":n=pt(t,te.Full);break;case"short":let i=Ae(t,"shortTime"),r=Ae(t,"shortDate");n=Gt(ft(t,te.Short),[i,r]);break;case"medium":let s=Ae(t,"mediumTime"),a=Ae(t,"mediumDate");n=Gt(ft(t,te.Medium),[s,a]);break;case"long":let l=Ae(t,"longTime"),u=Ae(t,"longDate");n=Gt(ft(t,te.Long),[l,u]);break;case"full":let d=Ae(t,"fullTime"),c=Ae(t,"fullDate");n=Gt(ft(t,te.Full),[d,c]);break}return n&&(Wt[e][o]=n),n}function Gt(t,o){return o&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return o!=null&&n in o?o[n]:e})),t}function ce(t,o,e="-",n,i){let r="";(t<0||i&&t<=0)&&(i?t=-t+1:(t=-t,r=e));let s=String(t);for(;s.length<o;)s="0"+s;return n&&(s=s.slice(s.length-o)),r+s}function kr(t,o){return ce(t,3).substring(0,o)}function M(t,o,e=0,n=!1,i=!1){return function(r,s){let a=Br(t,r);if((e>0||a>-e)&&(a+=e),t===3)a===0&&e===-12&&(a=12);else if(t===6)return kr(a,o);let l=oe(s,N.MinusSign);return ce(a,o,l,n,i)}}function Br(t,o){switch(t){case 0:return o.getFullYear();case 1:return o.getMonth();case 2:return o.getDate();case 3:return o.getHours();case 4:return o.getMinutes();case 5:return o.getSeconds();case 6:return o.getMilliseconds();case 7:return o.getDay();default:throw new Q(2301,!1)}}function T(t,o,e=V.Format,n=!1){return function(i,r){return $r(i,r,t,o,e,n)}}function $r(t,o,e,n,i,r){switch(e){case 2:return zi(o,i,n)[t.getMonth()];case 1:return Vi(o,i,n)[t.getDay()];case 0:let s=t.getHours(),a=t.getMinutes();if(r){let u=Ki(o),d=Yi(o,i,n),c=u.findIndex(p=>{if(Array.isArray(p)){let[f,g]=p,b=s>=f.hours&&a>=f.minutes,y=s<g.hours||s===g.hours&&a<g.minutes;if(f.hours<g.hours){if(b&&y)return!0}else if(b||y)return!0}else if(p.hours===s&&p.minutes===a)return!0;return!1});if(c!==-1)return d[c]}return Hi(o,i,n)[s<12?0:1];case 3:return Wi(o,n)[t.getFullYear()<=0?0:1];default:let l=e;throw new Q(2302,!1)}}function Kt(t){return function(o,e,n){let i=-1*n,r=oe(e,N.MinusSign),s=i>0?Math.floor(i/60):Math.ceil(i/60);switch(t){case 0:return(i>=0?"+":"")+ce(s,2,r)+ce(Math.abs(i%60),2,r);case 1:return"GMT"+(i>=0?"+":"")+ce(s,1,r);case 2:return"GMT"+(i>=0?"+":"")+ce(s,2,r)+":"+ce(Math.abs(i%60),2,r);case 3:return n===0?"Z":(i>=0?"+":"")+ce(s,2,r)+":"+ce(Math.abs(i%60),2,r);default:throw new Q(2310,!1)}}}var Ur=0,Zt=4;function jr(t){let o=qt(t,Ur,1).getDay();return qt(t,0,1+(o<=Zt?Zt:Zt+7)-o)}function Qi(t){let o=t.getDay(),e=o===0?-3:Zt-o;return qt(t.getFullYear(),t.getMonth(),t.getDate()+e)}function wn(t,o=!1){return function(e,n){let i;if(o){let r=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();i=1+Math.floor((s+r)/7)}else{let r=Qi(e),s=jr(r.getFullYear()),a=r.getTime()-s.getTime();i=1+Math.round(a/6048e5)}return ce(i,t,oe(n,N.MinusSign))}}function Yt(t,o=!1){return function(e,n){let r=Qi(e).getFullYear();return ce(r,t,oe(n,N.MinusSign),o)}}var _n={};function Hr(t){if(_n[t])return _n[t];let o;switch(t){case"G":case"GG":case"GGG":o=T(3,C.Abbreviated);break;case"GGGG":o=T(3,C.Wide);break;case"GGGGG":o=T(3,C.Narrow);break;case"y":o=M(0,1,0,!1,!0);break;case"yy":o=M(0,2,0,!0,!0);break;case"yyy":o=M(0,3,0,!1,!0);break;case"yyyy":o=M(0,4,0,!1,!0);break;case"Y":o=Yt(1);break;case"YY":o=Yt(2,!0);break;case"YYY":o=Yt(3);break;case"YYYY":o=Yt(4);break;case"M":case"L":o=M(1,1,1);break;case"MM":case"LL":o=M(1,2,1);break;case"MMM":o=T(2,C.Abbreviated);break;case"MMMM":o=T(2,C.Wide);break;case"MMMMM":o=T(2,C.Narrow);break;case"LLL":o=T(2,C.Abbreviated,V.Standalone);break;case"LLLL":o=T(2,C.Wide,V.Standalone);break;case"LLLLL":o=T(2,C.Narrow,V.Standalone);break;case"w":o=wn(1);break;case"ww":o=wn(2);break;case"W":o=wn(1,!0);break;case"d":o=M(2,1);break;case"dd":o=M(2,2);break;case"c":case"cc":o=M(7,1);break;case"ccc":o=T(1,C.Abbreviated,V.Standalone);break;case"cccc":o=T(1,C.Wide,V.Standalone);break;case"ccccc":o=T(1,C.Narrow,V.Standalone);break;case"cccccc":o=T(1,C.Short,V.Standalone);break;case"E":case"EE":case"EEE":o=T(1,C.Abbreviated);break;case"EEEE":o=T(1,C.Wide);break;case"EEEEE":o=T(1,C.Narrow);break;case"EEEEEE":o=T(1,C.Short);break;case"a":case"aa":case"aaa":o=T(0,C.Abbreviated);break;case"aaaa":o=T(0,C.Wide);break;case"aaaaa":o=T(0,C.Narrow);break;case"b":case"bb":case"bbb":o=T(0,C.Abbreviated,V.Standalone,!0);break;case"bbbb":o=T(0,C.Wide,V.Standalone,!0);break;case"bbbbb":o=T(0,C.Narrow,V.Standalone,!0);break;case"B":case"BB":case"BBB":o=T(0,C.Abbreviated,V.Format,!0);break;case"BBBB":o=T(0,C.Wide,V.Format,!0);break;case"BBBBB":o=T(0,C.Narrow,V.Format,!0);break;case"h":o=M(3,1,-12);break;case"hh":o=M(3,2,-12);break;case"H":o=M(3,1);break;case"HH":o=M(3,2);break;case"m":o=M(4,1);break;case"mm":o=M(4,2);break;case"s":o=M(5,1);break;case"ss":o=M(5,2);break;case"S":o=M(6,1);break;case"SS":o=M(6,2);break;case"SSS":o=M(6,3);break;case"Z":case"ZZ":case"ZZZ":o=Kt(0);break;case"ZZZZZ":o=Kt(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":o=Kt(1);break;case"OOOO":case"ZZZZ":case"zzzz":o=Kt(2);break;default:return null}return _n[t]=o,o}function Ji(t,o){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?o:e}function Vr(t,o){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+o),t}function zr(t,o,e){let i=t.getTimezoneOffset(),r=Ji(o,i);return Vr(t,-1*(r-i))}function Wr(t){if(Ni(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[i,r=1,s=1]=t.split("-").map(a=>+a);return qt(i,r-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(Mr))return Gr(n)}let o=new Date(t);if(!Ni(o))throw new Q(2311,!1);return o}function Gr(t){let o=new Date(0),e=0,n=0,i=t[8]?o.setUTCFullYear:o.setFullYear,r=t[8]?o.setUTCHours:o.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),i.call(o,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,a=Number(t[5]||0)-n,l=Number(t[6]||0),u=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return r.call(o,s,a,l,u),o}function Ni(t){return t instanceof Date&&!isNaN(t.valueOf())}var Kr=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Ri=22,Xt=".",ht="0",Yr=";",Zr=",",An="#",Mi="\xA4",qr="%";function Ln(t,o,e,n,i,r,s=!1){let a="",l=!1;if(!isFinite(t))a=oe(e,N.Infinity);else{let u=Qr(t);s&&(u=Xr(u));let d=o.minInt,c=o.minFrac,p=o.maxFrac;if(r){let _=r.match(Kr);if(_===null)throw new Q(2306,!1);let j=_[1],Oe=_[3],Be=_[5];j!=null&&(d=Tn(j)),Oe!=null&&(c=Tn(Oe)),Be!=null?p=Tn(Be):Oe!=null&&c>p&&(p=c)}Jr(u,c,p);let f=u.digits,g=u.integerLen,b=u.exponent,y=[];for(l=f.every(_=>!_);g<d;g++)f.unshift(0);for(;g<0;g++)f.unshift(0);g>0?y=f.splice(g,f.length):(y=f,f=[0]);let E=[];for(f.length>=o.lgSize&&E.unshift(f.splice(-o.lgSize,f.length).join(""));f.length>o.gSize;)E.unshift(f.splice(-o.gSize,f.length).join(""));f.length&&E.unshift(f.join("")),a=E.join(oe(e,n)),y.length&&(a+=oe(e,i)+y.join("")),b&&(a+=oe(e,N.Exponential)+"+"+b)}return t<0&&!l?a=o.negPre+a+o.negSuf:a=o.posPre+a+o.posSuf,a}function eo(t,o,e,n,i){let r=en(o,gt.Currency),s=On(r,oe(o,N.MinusSign));return s.minFrac=qi(n),s.maxFrac=s.minFrac,Ln(t,s,o,N.CurrencyGroup,N.CurrencyDecimal,i).replace(Mi,e).replace(Mi,"").trim()}function to(t,o,e){let n=en(o,gt.Percent),i=On(n,oe(o,N.MinusSign));return Ln(t,i,o,N.Group,N.Decimal,e,!0).replace(new RegExp(qr,"g"),oe(o,N.PercentSign))}function no(t,o,e){let n=en(o,gt.Decimal),i=On(n,oe(o,N.MinusSign));return Ln(t,i,o,N.Group,N.Decimal,e)}function On(t,o="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(Yr),i=n[0],r=n[1],s=i.indexOf(Xt)!==-1?i.split(Xt):[i.substring(0,i.lastIndexOf(ht)+1),i.substring(i.lastIndexOf(ht)+1)],a=s[0],l=s[1]||"";e.posPre=a.substring(0,a.indexOf(An));for(let d=0;d<l.length;d++){let c=l.charAt(d);c===ht?e.minFrac=e.maxFrac=d+1:c===An?e.maxFrac=d+1:e.posSuf+=c}let u=a.split(Zr);if(e.gSize=u[1]?u[1].length:0,e.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,r){let d=i.length-e.posPre.length-e.posSuf.length,c=r.indexOf(An);e.negPre=r.substring(0,c).replace(/'/g,""),e.negSuf=r.slice(c+d).replace(/'/g,"")}else e.negPre=o+e.posPre,e.negSuf=e.posSuf;return e}function Xr(t){if(t.digits[0]===0)return t;let o=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(o===0?t.digits.push(0,0):o===1&&t.digits.push(0),t.integerLen+=2),t}function Qr(t){let o=Math.abs(t)+"",e=0,n,i,r,s,a;for((i=o.indexOf(Xt))>-1&&(o=o.replace(Xt,"")),(r=o.search(/e/i))>0?(i<0&&(i=r),i+=+o.slice(r+1),o=o.substring(0,r)):i<0&&(i=o.length),r=0;o.charAt(r)===ht;r++);if(r===(a=o.length))n=[0],i=1;else{for(a--;o.charAt(a)===ht;)a--;for(i-=r,n=[],s=0;r<=a;r++,s++)n[s]=Number(o.charAt(r))}return i>Ri&&(n=n.splice(0,Ri-1),e=i-1,i=1),{digits:n,exponent:e,integerLen:i}}function Jr(t,o,e){if(o>e)throw new Q(2307,!1);let n=t.digits,i=n.length-t.integerLen,r=Math.min(Math.max(o,i),e),s=r+t.integerLen,a=n[s];if(s>0){n.splice(Math.max(t.integerLen,s));for(let c=s;c<n.length;c++)n[c]=0}else{i=Math.max(0,i),t.integerLen=1,n.length=Math.max(1,s=r+1),n[0]=0;for(let c=1;c<s;c++)n[c]=0}if(a>=5)if(s-1<0){for(let c=0;c>s;c--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[s-1]++;for(;i<Math.max(0,r);i++)n.push(0);let l=r!==0,u=o+t.integerLen,d=n.reduceRight(function(c,p,f,g){return p=p+c,g[f]=p<10?p:p-10,l&&(g[f]===0&&f>=u?g.pop():l=!1),p>=10?1:0},0);d&&(n.unshift(d),t.integerLen++)}function Tn(t){let o=parseInt(t);if(isNaN(o))throw new Q(2305,!1);return o}var Fn=/\s+/,xi=[],es=(()=>{class t{_ngEl;_renderer;initialClasses=xi;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Fn):xi}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Fn):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],i=e[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Fn).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||t)(v(ge),v(Pe))};static \u0275dir=F({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})(),ts=(()=>{class t{_viewContainerRef;ngComponentOutlet=null;ngComponentOutletInputs;ngComponentOutletInjector;ngComponentOutletEnvironmentInjector;ngComponentOutletContent;ngComponentOutletNgModule;_componentRef;_moduleRef;_inputsUsed=new Map;get componentInstance(){return this._componentRef?.instance??null}constructor(e){this._viewContainerRef=e}_needToReCreateNgModuleInstance(e){return e.ngComponentOutletNgModule!==void 0}_needToReCreateComponentInstance(e){return e.ngComponentOutlet!==void 0||e.ngComponentOutletContent!==void 0||e.ngComponentOutletInjector!==void 0||e.ngComponentOutletEnvironmentInjector!==void 0||this._needToReCreateNgModuleInstance(e)}ngOnChanges(e){if(this._needToReCreateComponentInstance(e)&&(this._viewContainerRef.clear(),this._inputsUsed.clear(),this._componentRef=void 0,this.ngComponentOutlet)){let n=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;this._needToReCreateNgModuleInstance(e)&&(this._moduleRef?.destroy(),this.ngComponentOutletNgModule?this._moduleRef=gi(this.ngComponentOutletNgModule,ns(n)):this._moduleRef=void 0),this._componentRef=this._viewContainerRef.createComponent(this.ngComponentOutlet,{injector:n,ngModuleRef:this._moduleRef,projectableNodes:this.ngComponentOutletContent,environmentInjector:this.ngComponentOutletEnvironmentInjector})}}ngDoCheck(){if(this._componentRef){if(this.ngComponentOutletInputs)for(let e of Object.keys(this.ngComponentOutletInputs))this._inputsUsed.set(e,!0);this._applyInputStateDiff(this._componentRef)}}ngOnDestroy(){this._moduleRef?.destroy()}_applyInputStateDiff(e){for(let[n,i]of this._inputsUsed)i?(e.setInput(n,this.ngComponentOutletInputs[n]),this._inputsUsed.set(n,!1)):(e.setInput(n,void 0),this._inputsUsed.delete(n))}static \u0275fac=function(n){return new(n||t)(v(We))};static \u0275dir=F({type:t,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInputs:"ngComponentOutletInputs",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletEnvironmentInjector:"ngComponentOutletEnvironmentInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModule:"ngComponentOutletNgModule"},exportAs:["ngComponentOutlet"],features:[st]})}return t})();function ns(t){return t.get(hi).injector}var Qt=class{$implicit;ngForOf;index;count;constructor(o,e,n,i){this.$implicit=o,this.ngForOf=e,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},io=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,i){this._viewContainer=e,this._template=n,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((i,r,s)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new Qt(i.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),ki(a,i)}});for(let i=0,r=n.length;i<r;i++){let a=n.get(i).context;a.index=i,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let r=n.get(i.currentIndex);ki(r,i)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(v(We),v(ze),v(Ai))};static \u0275dir=F({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function ki(t,o){t.context.$implicit=o.item}var Pn=(()=>{class t{_viewContainer;_context=new Jt;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Bi(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Bi(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(v(We),v(ze))};static \u0275dir=F({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Jt=class{$implicit=null;ngIf=null};function Bi(t,o){if(t&&!t.createEmbeddedView)throw new Q(2020,!1)}var In=class{_viewContainerRef;_templateRef;_created=!1;constructor(o,e){this._viewContainerRef=o,this._templateRef=e}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(o){o&&!this._created?this.create():!o&&this._created&&this.destroy()}},oo=(()=>{class t{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(e){this._ngSwitch=e,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews.push(e)}_matchCase(e){let n=e===this._ngSwitch;return this._lastCasesMatched||=n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews.length>0&&e!==this._defaultUsed){this._defaultUsed=e;for(let n of this._defaultViews)n.enforceState(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return t})(),is=(()=>{class t{ngSwitch;_view;ngSwitchCase;constructor(e,n,i){this.ngSwitch=i,i._addCase(),this._view=new In(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(n){return new(n||t)(v(We),v(ze),v(oo,9))};static \u0275dir=F({type:t,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return t})();var Nn=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,i){this._ngEl=e,this._differs=n,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[i,r]=e.split("."),s=i.indexOf("-")===-1?void 0:fi.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(v(ge),v(vn),v(Pe))};static \u0275dir=F({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Rn=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=h(rt);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(v(We))};static \u0275dir=F({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[st]})}return t})();function Ye(t,o){return new Q(2100,!1)}var os=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g,rs=(()=>{class t{transform(e){return e==null?null:(ro(t,e),e.replace(os,n=>n[0].toUpperCase()+n.slice(1).toLowerCase()))}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=me({name:"titlecase",type:t,pure:!0})}return t})(),ss=(()=>{class t{transform(e){return e==null?null:(ro(t,e),e.toUpperCase())}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=me({name:"uppercase",type:t,pure:!0})}return t})();function ro(t,o){if(typeof o!="string")throw Ye(t,o)}var as="mediumDate",so=new O(""),ao=new O(""),ls=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,i){this.locale=e,this.defaultTimezone=n,this.defaultOptions=i}transform(e,n,i,r){if(e==null||e===""||e!==e)return null;try{let s=n??this.defaultOptions?.dateFormat??as,a=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Xi(e,s,r||this.locale,a)}catch(s){throw Ye(t,s.message)}}static \u0275fac=function(n){return new(n||t)(v(dt,16),v(so,24),v(ao,24))};static \u0275pipe=me({name:"date",type:t,pure:!0})}return t})();var us=(()=>{class t{transform(e){return JSON.stringify(e,null,2)}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=me({name:"json",type:t,pure:!1})}return t})();function ds(t,o){return{key:t,value:o}}var cs=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=$i;transform(e,n=$i){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let i=this.differ.diff(e),r=n!==this.compareFn;return i&&(this.keyValues=[],i.forEachItem(s=>{this.keyValues.push(ds(s.key,s.currentValue))})),(i||r)&&(n&&this.keyValues.sort(n),this.compareFn=n),this.keyValues}static \u0275fac=function(n){return new(n||t)(v(vn,16))};static \u0275pipe=me({name:"keyvalue",type:t,pure:!1})}return t})();function $i(t,o){let e=t.key,n=o.key;if(e===n)return 0;if(e==null)return 1;if(n==null)return-1;if(typeof e=="string"&&typeof n=="string")return e<n?-1:1;if(typeof e=="number"&&typeof n=="number")return e-n;if(typeof e=="boolean"&&typeof n=="boolean")return e<n?-1:1;let i=String(e),r=String(n);return i==r?0:i<r?-1:1}var ps=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,i){if(!Mn(e))return null;i||=this._locale;try{let r=xn(e);return no(r,i,n)}catch(r){throw Ye(t,r.message)}}static \u0275fac=function(n){return new(n||t)(v(dt,16))};static \u0275pipe=me({name:"number",type:t,pure:!0})}return t})(),fs=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,i){if(!Mn(e))return null;i||=this._locale;try{let r=xn(e);return to(r,i,n)}catch(r){throw Ye(t,r.message)}}static \u0275fac=function(n){return new(n||t)(v(dt,16))};static \u0275pipe=me({name:"percent",type:t,pure:!0})}return t})(),hs=(()=>{class t{_locale;_defaultCurrencyCode;constructor(e,n="USD"){this._locale=e,this._defaultCurrencyCode=n}transform(e,n=this._defaultCurrencyCode,i="symbol",r,s){if(!Mn(e))return null;s||=this._locale,typeof i=="boolean"&&(i=i?"symbol":"code");let a=n||this._defaultCurrencyCode;i!=="code"&&(i==="symbol"||i==="symbol-narrow"?a=Zi(a,i==="symbol"?"wide":"narrow",s):a=i);try{let l=xn(e);return eo(l,s,a,n,r)}catch(l){throw Ye(t,l.message)}}static \u0275fac=function(n){return new(n||t)(v(dt,16),v(_i,16))};static \u0275pipe=me({name:"currency",type:t,pure:!0})}return t})();function Mn(t){return!(t==null||t===""||t!==t)}function xn(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new Q(2309,!1);return t}var gs=(()=>{class t{transform(e,n,i){if(e==null)return null;if(!(typeof e=="string"||Array.isArray(e)))throw Ye(t,e);return e.slice(n,i)}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=me({name:"slice",type:t,pure:!1})}return t})();var De=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Y({type:t});static \u0275inj=W({})}return t})();function ms(t,o){o=encodeURIComponent(o);for(let e of t.split(";")){let n=e.indexOf("="),[i,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===o)return decodeURIComponent(r)}return null}var kn=class{};var ys="browser",Ds="server";function Ze(t){return t===ys}function $n(t){return t===Ds}var Bl=(()=>{class t{static \u0275prov=D({token:t,providedIn:"root",factory:()=>new Bn(h(G),window)})}return t})(),Bn=class{document;window;offset=()=>[0,0];constructor(o,e){this.document=o,this.window=e}setOffset(o){Array.isArray(o)?this.offset=()=>o:this.offset=o}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(o,e){this.window.scrollTo($e(m({},e),{left:o[0],top:o[1]}))}scrollToAnchor(o,e){let n=vs(this.document,o);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(o){try{this.window.history.scrollRestoration=o}catch{console.warn(cn(2400,!1))}}scrollToElement(o,e){let n=o.getBoundingClientRect(),i=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo($e(m({},e),{left:i-s[0],top:r-s[1]}))}};function vs(t,o){let e=t.getElementById(o)||t.getElementsByName(o)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let r=i.shadowRoot;if(r){let s=r.getElementById(o)||r.querySelector(`[name="${o}"]`);if(s)return s}i=n.nextNode()}}return null}function Ne(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[Ne(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function uo(t,o){return t?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}function je(t,o){if(t&&o){let e=n=>{uo(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Ss(){return window.innerWidth-document.documentElement.offsetWidth}function co(t){typeof t=="string"?je(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,Ss()+"px"),je(document.body,t?.className||"p-overflow-hidden"))}function Re(t,o){if(t&&o){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function po(t){typeof t=="string"?Re(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),Re(document.body,t?.className||"p-overflow-hidden"))}function mt(t){for(let o of document?.styleSheets)try{for(let e of o?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function fo(t){let o={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display],i=t.getBoundingClientRect();t.style.visibility="hidden",t.style.display="block",o.width=i.width||t.offsetWidth,o.height=i.height||t.offsetHeight,t.style.display=n,t.style.visibility=e}return o}function Vn(){let t=window,o=document,e=o.documentElement,n=o.getElementsByTagName("body")[0],i=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:i,height:r}}function Hn(t){return t?Math.abs(t.scrollLeft):0}function Es(){let t=document.documentElement;return(window.pageXOffset||Hn(t))-(t.clientLeft||0)}function ws(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function _s(t){return t?getComputedStyle(t).direction==="rtl":!1}function Gl(t,o,e=!0){var n,i,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:fo(t),l=a.height,u=a.width,d=o.offsetHeight,c=o.offsetWidth,p=o.getBoundingClientRect(),f=ws(),g=Es(),b=Vn(),y,E,_="top";p.top+d+l>b.height?(y=p.top+f-l,_="bottom",y<0&&(y=f)):y=d+p.top+f,p.left+u>b.width?E=Math.max(0,p.left+g+c-u):E=p.left+g,_s(t)?t.style.insetInlineEnd=E+"px":t.style.insetInlineStart=E+"px",t.style.top=y+"px",t.style.transformOrigin=_,e&&(t.style.marginTop=_==="bottom"?`calc(${(i=(n=mt(/-anchor-gutter$/))==null?void 0:n.value)!=null?i:"2px"} * -1)`:(s=(r=mt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function ho(t,o){t&&(typeof o=="string"?t.style.cssText=o:Object.entries(o||{}).forEach(([e,n])=>t.style[e]=n))}function zn(t,o){if(t instanceof HTMLElement){let e=t.offsetWidth;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Kl(t,o,e=!0,n=void 0){var i;if(t){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:fo(t),s=o.offsetHeight,a=o.getBoundingClientRect(),l=Vn(),u,d,c=n??"top";if(!n&&a.top+s+r.height>l.height?(u=-1*r.height,c="bottom",a.top+u<0&&(u=-1*a.top)):u=s,r.width>l.width?d=a.left*-1:a.left+r.width>l.width?d=(a.left+r.width-l.width)*-1:d=0,t.style.top=u+"px",t.style.insetInlineStart=d+"px",t.style.transformOrigin=c,e){let p=(i=mt(/-anchor-gutter$/))==null?void 0:i.value;t.style.marginTop=c==="bottom"?`calc(${p??"2px"} * -1)`:p??""}}}function go(t){if(t){let o=t.parentNode;return o&&o instanceof ShadowRoot&&o.host&&(o=o.host),o}return null}function As(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&go(t))}function qe(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function mo(t){let o=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?o=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?o=t.el.nativeElement:o=t.el)),qe(o)?o:void 0}function Ts(t,o){var e,n,i;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@first":return o?.firstElementChild;case"@last":return o?.lastElementChild;case"@child":return(e=o?.children)==null?void 0:e[0];case"@parent":return o?.parentElement;case"@grandparent":return(n=o?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((i=o?.children)==null?void 0:i[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=mo(r);return As(s)?s:r?.nodeType===9?r:void 0}}}function Yl(t,o){let e=Ts(t,o);if(e)e.appendChild(o);else throw new Error("Cannot append "+o+" to "+t)}var Un;function Zl(t){if(t){let o=getComputedStyle(t);return t.offsetHeight-t.clientHeight-parseFloat(o.borderTopWidth)-parseFloat(o.borderBottomWidth)}else{if(Un!=null)return Un;let o=document.createElement("div");ho(o,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(o);let e=o.offsetHeight-o.clientHeight;return document.body.removeChild(o),Un=e,e}}var jn;function lo(t){if(t){let o=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.borderRightWidth)}else{if(jn!=null)return jn;let o=document.createElement("div");ho(o,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(o);let e=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),jn=e,e}}function ql(){if(window.getSelection){let t=window.getSelection()||{};t.empty?t.empty():t.removeAllRanges&&t.rangeCount>0&&t.getRangeAt(0).getClientRects().length>0&&t.removeAllRanges()}}function tn(t,o={}){if(qe(t)){let e=(n,i)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[i].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?e(n,u):Object.entries(u).map(([p,f])=>n==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);l=c.length?l.concat(c.filter(p=>!!p)):l}}return l},a)};Object.entries(o).forEach(([n,i])=>{if(i!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),i):n==="p-bind"||n==="pBind"?tn(t,i):(i=n==="class"?[...new Set(e("class",i))].join(" ").trim():n==="style"?e("style",i).join(";").trim():i,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=i),t.setAttribute(n,i))}})}}function nn(t,o={},...e){if(t){let n=document.createElement(t);return tn(n,o),n.append(...e),n}}function Xl(t,o){if(t){t.style.opacity="0";let e=+new Date,n="0",i=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/o}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(i):setTimeout(i,16))};i()}}function Fs(t,o){return qe(t)?Array.from(t.querySelectorAll(o)):[]}function Xe(t,o){return qe(t)?t.matches(o)?t:t.querySelector(o):null}function Ql(t,o){t&&document.activeElement!==t&&t.focus(o)}function Jl(t,o){if(qe(t)){let e=t.getAttribute(o);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Is(){let t=navigator.userAgent.toLowerCase(),o=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:o[1]||"",version:o[2]||"0"}}var Te=null;function eu(){if(!Te){Te={};let t=Is();t.browser&&(Te[t.browser]=!0,Te.version=t.version),Te.chrome?Te.webkit=!0:Te.webkit&&(Te.safari=!0)}return Te}function bo(t,o=""){let e=Fs(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${o},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`),n=[];for(let i of e)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&n.push(i);return n}function tu(t,o){let e=bo(t,o);return e.length>0?e[0]:null}function Wn(t){if(t){let o=t.offsetHeight,e=getComputedStyle(t);return o-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),o}return 0}function Ls(t){if(t){let[o,e]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display=e,t.style.visibility=o,n}return 0}function Os(t){if(t){let[o,e]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display=e,t.style.visibility=o,n}return 0}function nu(t){var o;if(t){let e=(o=go(t))==null?void 0:o.childNodes,n=0;if(e)for(let i=0;i<e.length;i++){if(e[i]===t)return n;e[i].nodeType===1&&n++}}return-1}function iu(t,o){let e=bo(t,o);return e.length>0?e[e.length-1]:null}function Gn(t){if(t){let o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||Hn(document.documentElement)||Hn(document.body)||0)}}return{top:"auto",left:"auto"}}function on(t,o){if(t){let e=t.offsetHeight;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function ou(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function ru(){return navigator.userAgent}function Kn(t){if(t){let o=t.offsetWidth,e=getComputedStyle(t);return o-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),o}return 0}function su(){return/(android)/i.test(navigator.userAgent)}function au(t){if(t){let o=t.nodeName,e=t.parentElement&&t.parentElement.nodeName;return o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||o==="A"||e==="INPUT"||e==="TEXTAREA"||e==="BUTTON"||e==="A"||!!t.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1}function lu(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function uu(t){return!!(t&&t.offsetParent!=null)}function du(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window)}function cu(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function pu(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function fu(t,o){var e,n;if(t){let i=t.parentElement,r=Gn(i),s=Vn(),a=t.offsetParent?t.offsetWidth:Os(t),l=t.offsetParent?t.offsetHeight:Ls(t),u=zn((e=i?.children)==null?void 0:e[0]),d=on((n=i?.children)==null?void 0:n[0]),c="",p="";r.left+u+a>s.width-lo()?r.left<a?o%2===1?c=r.left?"-"+r.left+"px":"100%":o%2===0&&(c=s.width-a-lo()+"px"):c="-100%":c="100%",t.getBoundingClientRect().top+d+l>s.height?p=`-${l-d}px`:p="0px",t.style.top=p,t.style.insetInlineStart=c}}function hu(){return new Promise(t=>{requestAnimationFrame(()=>{requestAnimationFrame(t)})})}function yo(t){var o;t&&("remove"in Element.prototype?t.remove():(o=t.parentNode)==null||o.removeChild(t))}function gu(t,o){let e=mo(t);if(e)e.removeChild(o);else throw new Error("Cannot remove "+o+" from "+t)}function mu(t,o){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,i=getComputedStyle(t).getPropertyValue("paddingTop"),r=i?parseFloat(i):0,s=t.getBoundingClientRect(),a=o.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=t.scrollTop,u=t.clientHeight,d=on(o);a<0?t.scrollTop=l+a:a+d>u&&(t.scrollTop=l+a-u+d)}function Do(t,o="",e){qe(t)&&e!==null&&e!==void 0&&t.setAttribute(o,e)}function bu(t,o,e=null,n){var i;o&&((i=t?.style)==null||i.setProperty(o,e,n))}function vo(){let t=new Map;return{on(o,e){let n=t.get(o);return n?n.push(e):n=[e],t.set(o,n),this},off(o,e){let n=t.get(o);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(o,e){let n=t.get(o);n&&n.forEach(i=>{i(e)})},clear(){t.clear()}}}var Ps=Object.defineProperty,Co=Object.getOwnPropertySymbols,Ns=Object.prototype.hasOwnProperty,Rs=Object.prototype.propertyIsEnumerable,So=(t,o,e)=>o in t?Ps(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,Eo=(t,o)=>{for(var e in o||(o={}))Ns.call(o,e)&&So(t,e,o[e]);if(Co)for(var e of Co(o))Rs.call(o,e)&&So(t,e,o[e]);return t};function wo(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[wo(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function Ms(t){return typeof t=="function"&&"call"in t&&"apply"in t}function xs({skipUndefined:t=!1},...o){return o?.reduce((e,n={})=>{for(let i in n){let r=n[i];if(!(t&&r===void 0))if(i==="style")e.style=Eo(Eo({},e.style),n.style);else if(i==="class"||i==="className")e[i]=wo(e[i],n[i]);else if(Ms(r)){let s=e[i];e[i]=s?(...a)=>{s(...a),r(...a)}:r}else e[i]=r}return e},{})}function Yn(...t){return xs({skipUndefined:!1},...t)}function ve(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Zn(t,o,e=new WeakSet){if(t===o)return!0;if(!t||!o||typeof t!="object"||typeof o!="object"||e.has(t)||e.has(o))return!1;e.add(t).add(o);let n=Array.isArray(t),i=Array.isArray(o),r,s,a;if(n&&i){if(s=t.length,s!=o.length)return!1;for(r=s;r--!==0;)if(!Zn(t[r],o[r],e))return!1;return!0}if(n!=i)return!1;let l=t instanceof Date,u=o instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==o.getTime();let d=t instanceof RegExp,c=o instanceof RegExp;if(d!=c)return!1;if(d&&c)return t.toString()==o.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(o).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(o,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!Zn(t[a],o[a],e))return!1;return!0}function ks(t,o){return Zn(t,o)}function sn(t){return typeof t=="function"&&"call"in t&&"apply"in t}function S(t){return!ve(t)}function rn(t,o){if(!t||!o)return null;try{let e=t[o];if(S(e))return e}catch{}if(Object.keys(t).length){if(sn(o))return o(t);if(o.indexOf(".")===-1)return t[o];{let e=o.split("."),n=t;for(let i=0,r=e.length;i<r;++i){if(n==null)return null;n=n[e[i]]}return n}}return null}function bt(t,o,e){return e?rn(t,e)===rn(o,e):ks(t,o)}function Cu(t,o){if(t!=null&&o&&o.length){for(let e of o)if(bt(t,e))return!0}return!1}function Fe(t,o=!0){return t instanceof Object&&t.constructor===Object&&(o||Object.keys(t).length!==0)}function Su(t,o){let e=-1;if(o){for(let n=0;n<o.length;n++)if(o[n]===t){e=n;break}}return e}function Eu(t,o){let e=-1;if(S(t))try{e=t.findLastIndex(o)}catch{e=t.lastIndexOf([...t].reverse().find(o))}return e}function B(t,...o){return sn(t)?t(...o):t}function le(t,o=!0){return typeof t=="string"&&(o||t!=="")}function Me(t){return le(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function an(t,o="",e={}){let n=Me(o).split("."),i=n.shift();if(i){if(Fe(t)){let r=Object.keys(t).find(s=>Me(s)===i)||"";return an(B(t[r],e),n.join("."),e)}return}return B(t,e)}function qn(t,o=!0){return Array.isArray(t)&&(o||t.length!==0)}function wu(t){return t instanceof Date}function _o(t){return S(t)&&!isNaN(t)}function _u(t=""){return S(t)&&t.length===1&&!!t.match(/\S| /)}function pe(t,o){if(o){let e=o.test(t);return o.lastIndex=0,e}return!1}function He(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function re(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let o={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in o)t=t.replace(o[e],e)}return t}function Au(t,o,e){t&&o!==e&&(e>=t.length&&(e%=t.length,o%=t.length),t.splice(e,0,t.splice(o,1)[0]))}function ln(t){return le(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function Tu(t){return t==="auto"?0:typeof t=="number"?t:Number(t.replace(/[^\d.]/g,"").replace(",","."))*1e3}var un={};function yt(t="pui_id_"){return Object.hasOwn(un,t)||(un[t]=0),un[t]++,`${t}${un[t]}`}var Ao=["*"],Bs=(function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t})(Bs||{}),Nu=(()=>{class t{requireConfirmationSource=new ne;acceptConfirmationSource=new ne;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var U=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),Ru=(()=>{class t{static AND="and";static OR="or"}return t})(),Mu=(()=>{class t{filter(e,n,i,r,s){let a=[];if(e)for(let l of e)for(let u of n){let d=rn(l,u);if(this.filters[r](d,i,s)){a.push(l);break}}return a}filters={startsWith:(e,n,i)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=re(n.toString()).toLocaleLowerCase(i);return re(e.toString()).toLocaleLowerCase(i).slice(0,r.length)===r},contains:(e,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=re(n.toString()).toLocaleLowerCase(i);return re(e.toString()).toLocaleLowerCase(i).indexOf(r)!==-1},notContains:(e,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=re(n.toString()).toLocaleLowerCase(i);return re(e.toString()).toLocaleLowerCase(i).indexOf(r)===-1},endsWith:(e,n,i)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=re(n.toString()).toLocaleLowerCase(i),s=re(e.toString()).toLocaleLowerCase(i);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:re(e.toString()).toLocaleLowerCase(i)==re(n.toString()).toLocaleLowerCase(i),notEquals:(e,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:re(e.toString()).toLocaleLowerCase(i)!=re(n.toString()).toLocaleLowerCase(i),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let i=0;i<n.length;i++)if(bt(e,n[i]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,i)=>this.filters.equals(e,n,i),isNot:(e,n,i)=>this.filters.notEquals(e,n,i),before:(e,n,i)=>this.filters.lt(e,n,i),after:(e,n,i)=>this.filters.gt(e,n,i),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xu=(()=>{class t{messageSource=new ne;clearSource=new ne;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),ku=(()=>{class t{clickSource=new ne;parentDragSource=new ne;clickObservable=this.clickSource.asObservable();parentDragObservable=this.parentDragSource.asObservable();add(e){e&&this.clickSource.next(e)}emitParentDrag(e){this.parentDragSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=ie({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Ao,decls:1,vars:0,template:function(n,i){n&1&&(we(),_e(0))},encapsulation:2})}return t})(),$u=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=ie({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Ao,decls:1,vars:0,template:function(n,i){n&1&&(we(),_e(0))},encapsulation:2})}return t})(),To=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(v(ze))};static \u0275dir=F({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),xe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Y({type:t});static \u0275inj=W({imports:[De]})}return t})(),Uu=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})(),ju=(()=>{class t{dragStartSource=new ne;dragStopSource=new ne;dragStart$=this.dragStartSource.asObservable();dragStop$=this.dragStopSource.asObservable();startDrag(e){this.dragStartSource.next(e)}stopDrag(e){this.dragStopSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var $s=Object.defineProperty,Us=Object.defineProperties,js=Object.getOwnPropertyDescriptors,dn=Object.getOwnPropertySymbols,Lo=Object.prototype.hasOwnProperty,Oo=Object.prototype.propertyIsEnumerable,Fo=(t,o,e)=>o in t?$s(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,he=(t,o)=>{for(var e in o||(o={}))Lo.call(o,e)&&Fo(t,e,o[e]);if(dn)for(var e of dn(o))Oo.call(o,e)&&Fo(t,e,o[e]);return t},Xn=(t,o)=>Us(t,js(o)),Ie=(t,o)=>{var e={};for(var n in t)Lo.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&dn)for(var n of dn(t))o.indexOf(n)<0&&Oo.call(t,n)&&(e[n]=t[n]);return e};var Hs=vo(),se=Hs,Dt=/{([^}]*)}/g,Po=/(\d+\s+[\+\-\*\/]\s+\d+)/g,No=/var\([^)]+\)/g;function Io(t){return le(t)?t.replace(/[A-Z]/g,(o,e)=>e===0?o:"."+o.toLowerCase()).toLowerCase():t}function Vs(t){return Fe(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function zs(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Qn(t="",o=""){return zs(`${le(t,!1)&&le(o,!1)?`${t}-`:t}${o}`)}function Ro(t="",o=""){return`--${Qn(t,o)}`}function Ws(t=""){let o=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(o+e)%2!==0}function Mo(t,o="",e="",n=[],i){if(le(t)){let r=t.trim();if(Ws(r))return;if(pe(r,Dt)){let s=r.replaceAll(Dt,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(d=>pe(u,d)));return`var(${Ro(e,ln(l.join("-")))}${S(i)?`, ${i}`:""})`});return pe(s.replace(No,"0"),Po)?`calc(${s})`:s}return r}else if(_o(t))return t}function Gs(t,o,e){le(o,!1)&&t.push(`${o}:${e};`)}function Qe(t,o){return t?`${t}{${o}}`:""}function xo(t,o){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,d="",c=null,p=0;for(;u<=s.length;){let f=s[u];if((f==='"'||f==="'"||f==="`")&&s[u-1]!=="\\"&&(c=c===f?null:f),!c&&(f==="("&&p++,f===")"&&p--,(f===","||u===s.length)&&p===0)){let g=d.trim();g.startsWith("dt(")?l.push(xo(g,a)):l.push(n(g)),d="",u++;continue}f!==void 0&&(d+=f),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let i=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&i.push([a,s])}if(!i.length)return t;for(let s=i.length-1;s>=0;s--){let[a,l]=i[s],u=t.slice(a+3,l),d=e(u,o),c=o(...d);t=t.slice(0,a)+c+t.slice(l+1)}return t}var ei=t=>{var o;let e=w.getTheme(),n=Jn(e,t,void 0,"variable"),i=(o=n?.match(/--[\w-]+/g))==null?void 0:o[0],r=Jn(e,t,void 0,"value");return{name:i,variable:n,value:r}},Le=(...t)=>Jn(w.getTheme(),...t),Jn=(t={},o,e,n)=>{if(o){let{variable:i,options:r}=w.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=pe(o,Dt)?o:`{${o}}`;return n==="value"||ve(n)&&a==="strict"?w.getTokenValue(o):Mo(l,void 0,s,[i.excludedKeyRegex],e)}return""};function Je(t,...o){if(t instanceof Array){let e=t.reduce((n,i,r)=>{var s;return n+i+((s=B(o[r],{dt:Le}))!=null?s:"")},"");return xo(e,Le)}return B(t,{dt:Le})}function Ks(t,o={}){let e=w.defaults.variable,{prefix:n=e.prefix,selector:i=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=o,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:d,path:c}=l.pop();for(let p in d){let f=d[p],g=Vs(f),b=pe(p,r)?Qn(c):Qn(c,ln(p));if(Fe(g))l.push({node:g,path:b});else{let y=Ro(b),E=Mo(g,b,n,[r]);Gs(a,y,E);let _=b;n&&_.startsWith(n+"-")&&(_=_.slice(n.length+1)),s.push(_.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Qe(i,u)}}var fe={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let o=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=o.map(i=>i.resolve(e)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,o){return Ks(t,{prefix:o?.prefix})},getCommon({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s,a,l,u,d,c;let{preset:p,options:f}=o,g,b,y,E,_,j,Oe;if(S(p)&&f.transform!=="strict"){let{primitive:Be,semantic:vt,extend:Ct}=p,nt=vt||{},{colorScheme:St}=nt,Et=Ie(nt,["colorScheme"]),wt=Ct||{},{colorScheme:_t}=wt,it=Ie(wt,["colorScheme"]),ot=St||{},{dark:At}=ot,Tt=Ie(ot,["dark"]),Ft=_t||{},{dark:It}=Ft,Lt=Ie(Ft,["dark"]),Ot=S(Be)?this._toVariables({primitive:Be},f):{},Pt=S(Et)?this._toVariables({semantic:Et},f):{},Nt=S(Tt)?this._toVariables({light:Tt},f):{},si=S(At)?this._toVariables({dark:At},f):{},ai=S(it)?this._toVariables({semantic:it},f):{},li=S(Lt)?this._toVariables({light:Lt},f):{},ui=S(It)?this._toVariables({dark:It},f):{},[ur,dr]=[(r=Ot.declarations)!=null?r:"",Ot.tokens],[cr,pr]=[(s=Pt.declarations)!=null?s:"",Pt.tokens||[]],[fr,hr]=[(a=Nt.declarations)!=null?a:"",Nt.tokens||[]],[gr,mr]=[(l=si.declarations)!=null?l:"",si.tokens||[]],[br,yr]=[(u=ai.declarations)!=null?u:"",ai.tokens||[]],[Dr,vr]=[(d=li.declarations)!=null?d:"",li.tokens||[]],[Cr,Sr]=[(c=ui.declarations)!=null?c:"",ui.tokens||[]];g=this.transformCSS(t,ur,"light","variable",f,n,i),b=dr;let Er=this.transformCSS(t,`${cr}${fr}`,"light","variable",f,n,i),wr=this.transformCSS(t,`${gr}`,"dark","variable",f,n,i);y=`${Er}${wr}`,E=[...new Set([...pr,...hr,...mr])];let _r=this.transformCSS(t,`${br}${Dr}color-scheme:light`,"light","variable",f,n,i),Ar=this.transformCSS(t,`${Cr}color-scheme:dark`,"dark","variable",f,n,i);_=`${_r}${Ar}`,j=[...new Set([...yr,...vr,...Sr])],Oe=B(p.css,{dt:Le})}return{primitive:{css:g,tokens:b},semantic:{css:y,tokens:E},global:{css:_,tokens:j},style:Oe}},getPreset({name:t="",preset:o={},options:e,params:n,set:i,defaults:r,selector:s}){var a,l,u;let d,c,p;if(S(o)&&e.transform!=="strict"){let f=t.replace("-directive",""),g=o,{colorScheme:b,extend:y,css:E}=g,_=Ie(g,["colorScheme","extend","css"]),j=y||{},{colorScheme:Oe}=j,Be=Ie(j,["colorScheme"]),vt=b||{},{dark:Ct}=vt,nt=Ie(vt,["dark"]),St=Oe||{},{dark:Et}=St,wt=Ie(St,["dark"]),_t=S(_)?this._toVariables({[f]:he(he({},_),Be)},e):{},it=S(nt)?this._toVariables({[f]:he(he({},nt),wt)},e):{},ot=S(Ct)?this._toVariables({[f]:he(he({},Ct),Et)},e):{},[At,Tt]=[(a=_t.declarations)!=null?a:"",_t.tokens||[]],[Ft,It]=[(l=it.declarations)!=null?l:"",it.tokens||[]],[Lt,Ot]=[(u=ot.declarations)!=null?u:"",ot.tokens||[]],Pt=this.transformCSS(f,`${At}${Ft}`,"light","variable",e,i,r,s),Nt=this.transformCSS(f,Lt,"dark","variable",e,i,r,s);d=`${Pt}${Nt}`,c=[...new Set([...Tt,...It,...Ot])],p=B(E,{dt:Le})}return{css:d,tokens:c,style:p}},getPresetC({name:t="",theme:o={},params:e,set:n,defaults:i}){var r;let{preset:s,options:a}=o,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:i})},getPresetD({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s;let a=t.replace("-directive",""),{preset:l,options:u}=o,d=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:d,options:u,params:e,set:n,defaults:i})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,o){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?o.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:o.options.darkModeSelector):[]},getLayerOrder(t,o={},e,n){let{cssLayer:i}=o;return i?`@layer ${B(i.order||i.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){let s=this.getCommon({name:t,theme:o,params:e,set:i,defaults:r}),a=Object.entries(n).reduce((l,[u,d])=>l.push(`${u}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,d])=>{if(Fe(d)&&Object.hasOwn(d,"css")){let c=He(d.css),p=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${c}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){var s;let a={name:t,theme:o,params:e,set:i,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((d,[c,p])=>d.push(`${c}="${p}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${He(l)}</style>`:""},createTokens(t={},o,e="",n="",i={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let d=this.value;if(typeof this.value=="string"&&Dt.test(this.value)){let c=this.value.trim().replace(Dt,p=>{var f;let g=p.slice(1,-1),b=this.tokens[g];if(!b)return console.warn(`Token not found for path: ${g}`),"__UNRESOLVED__";let y=b.computed(a,l,u);return Array.isArray(y)&&y.length===2?`light-dark(${y[0].value},${y[1].value})`:(f=y?.value)!=null?f:"__UNRESOLVED__"});d=Po.test(c.replace(No,"0"))?`calc(${c})`:c}return ve(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:d.includes("__UNRESOLVED__")?void 0:d}},s=(a,l,u)=>{Object.entries(a).forEach(([d,c])=>{let p=pe(d,o.variable.excludedKeyRegex)?l:l?`${l}.${Io(d)}`:Io(d),f=u?`${u}.${d}`:d;Fe(c)?s(c,p,f):(i[p]||(i[p]={paths:[],computed:(g,b={},y=[])=>{if(i[p].paths.length===1)return i[p].paths[0].computed(i[p].paths[0].scheme,b.binding,y);if(g&&g!=="none")for(let E=0;E<i[p].paths.length;E++){let _=i[p].paths[E];if(_.scheme===g)return _.computed(g,b.binding,y)}return i[p].paths.map(E=>E.computed(E.scheme,b[E.scheme],y))}}),i[p].paths.push({path:f,value:c,scheme:f.includes("colorScheme.light")?"light":f.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:i}))})};return s(t,e,n),i},getTokenValue(t,o,e){var n;let i=(a=>a.split(".").filter(l=>!pe(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(o),r=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[i])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:d}=u,c=Ie(u,["colorScheme"]);return a[d]=c,a},void 0)},getSelectorRule(t,o,e,n){return e==="class"||e==="attr"?Qe(S(o)?`${t}${o},${t} ${o}`:t,n):Qe(t,Qe(o??":root,:host",n))},transformCSS(t,o,e,n,i={},r,s,a){if(S(o)){let{cssLayer:l}=i;if(n!=="style"){let u=this.getColorSchemeOption(i,s);o=e==="dark"?u.reduce((d,{type:c,selector:p})=>(S(p)&&(d+=p.includes("[CSS]")?p.replace("[CSS]",o):this.getSelectorRule(p,a,c,o)),d),""):Qe(a??":root,:host",o)}if(l){let u={name:"primeui",order:"primeui"};Fe(l)&&(u.name=B(l.name,{name:t,type:n})),S(u.name)&&(o=Qe(`@layer ${u.name}`,o),r?.layerNames(u.name))}return o}return""}},w={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:o}=t;o&&(this._theme=Xn(he({},o),{options:he(he({},this.defaults.options),o.options)}),this._tokens=fe.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),se.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Xn(he({},this.theme),{preset:t}),this._tokens=fe.createTokens(t,this.defaults),this.clearLoadedStyleNames(),se.emit("preset:change",t),se.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Xn(he({},this.theme),{options:t}),this.clearLoadedStyleNames(),se.emit("options:change",t),se.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return fe.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",o){return fe.getCommon({name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return fe.getPresetC(e)},getDirective(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return fe.getPresetD(e)},getCustomPreset(t="",o,e,n){let i={name:t,preset:o,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return fe.getPreset(i)},getLayerOrderCSS(t=""){return fe.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",o,e="style",n){return fe.transformCSS(t,o,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",o,e={}){return fe.getCommonStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,o,e={}){return fe.getStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),se.emit(`theme:${o}:load`,t),!this._loadingStyles.size&&se.emit("theme:load"))}};var ko=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var Ys=0,Bo=(()=>{class t{document=h(G);use(e,n={}){let i=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++Ys}`,id:d=void 0,media:c=void 0,nonce:p=void 0,first:f=!1,props:g={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),s){if(!s.isConnected){r=e;let b=this.document.head;Do(s,"nonce",p),f&&b.firstChild?b.insertBefore(s,b.firstChild):b.appendChild(s),tn(s,{type:"text/css",media:c,nonce:p,"data-primeng-style-id":u})}s.textContent!==r&&(s.textContent=r)}return{id:d,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var et={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Zs=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,z=(()=>{class t{name="base";useStyle=h(Bo);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},i=r=>r)=>{let r=i(Je`${B(e,{dt:Le})}`);return r?this.useStyle.use(He(r),m({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(i="")=>w.transformCSS(e.name||this.name,`${i}${Je`${n}`}`));loadBaseCSS=(e={})=>this.load(Zs,e);loadBaseStyle=(e={},n="")=>this.load(ko,e,(i="")=>w.transformCSS(e.name||this.name,`${i}${Je`${n}`}`));getCommonTheme=e=>w.getCommon(this.name,e);getComponentTheme=e=>w.getComponent(this.name,e);getPresetTheme=(e,n,i)=>w.getCustomPreset(this.name,e,n,i);getLayerOrderThemeCSS=()=>w.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let i=B(this.css,{dt:Le}),r=He(Je`${i}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>w.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let i=[w.getStyleSheet(this.name,e,n)];if(this.style){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Je`${B(this.style,{dt:Le})}`,a=He(w.transformCSS(r,s)),l=Object.entries(n).reduce((u,[d,c])=>u.push(`${d}="${c}"`)&&u,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qs=(()=>{class t{theme=H(void 0);csp=H({nonce:void 0});isThemeChanged=!1;document=h(G);baseStyle=h(z);constructor(){x(()=>{se.on("theme:change",e=>{yn(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),x(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){w.clearLoadedStyleNames(),se.clear()}onThemeChange(e){w.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!w.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,m({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,m({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(m({name:"global-style"},s),r),w.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:i}=e||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ti=(()=>{class t extends qs{ripple=H(!1);platformId=h(Ve);inputStyle=H(null);inputVariant=H(null);overlayAppendTo=H("self");overlayOptions={};csp=H({nonce:void 0});unstyled=H(void 0);pt=H(void 0);ptOptions=H(void 0);filterMatchModeOptions={text:[U.STARTS_WITH,U.CONTAINS,U.NOT_CONTAINS,U.ENDS_WITH,U.EQUALS,U.NOT_EQUALS],numeric:[U.EQUALS,U.NOT_EQUALS,U.LESS_THAN,U.LESS_THAN_OR_EQUAL_TO,U.GREATER_THAN,U.GREATER_THAN_OR_EQUAL_TO],date:[U.DATE_IS,U.DATE_IS_NOT,U.DATE_BEFORE,U.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ne;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=m(m({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:i,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:d,overlayAppendTo:c,zIndex:p,ptOptions:f,pt:g,unstyled:b}=e||{};n&&this.csp.set(n),c&&this.overlayAppendTo.set(c),i&&this.ripple.set(i),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),d&&(this.filterMatchModeOptions=d),p&&(this.zIndex=p),g&&this.pt.set(g),f&&this.ptOptions.set(f),b&&this.unstyled.set(b),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Xs=new O("PRIME_NG_CONFIG");function bd(...t){let o=t?.map(n=>({provide:Xs,useValue:n,multi:!1})),e=mi(()=>{let n=h(ti);t?.forEach(i=>n.setConfig(i))});return ci([...o,e])}var $o=(()=>{class t extends z{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ce=new O("PARENT_INSTANCE"),X=(()=>{class t{document=h(G);platformId=h(Ve);el=h(ge);injector=h(rt);cd=h(jt);renderer=h(Pe);config=h(ti);$parentInstance=h(Ce,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=h($o);baseStyle=h(z);scopedStyleEl;parent=this.$params.parent;cn=Ne;_themeScopedListener;themeChangeListenerMap=new Map;dt=A();unstyled=A();pt=A();ptOptions=A();$attrSelector=yt("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=H(void 0);directiveUnstyled=H(void 0);$unstyled=ye(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=ye(()=>B(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>B(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||B(e,this.$params))}get $style(){return m(m({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){x(e=>{this.document&&!$n(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),x(e=>{this.document&&!$n(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return sn(e)?e(...n):Yn(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",i={}){return an(e,n,i)}_hook(e,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);i?.(...n),r?.(...n)}}_load(){et.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),et.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);S(e)&&this.baseStyle.load(e,m({name:"global"},this.$styleOptions))}_loadCoreStyles(){!et.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),et.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!w.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,m({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,m({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(m({name:"global-style"},this.$styleOptions),r),w.setLoadedStyleName("common")}if(!w.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,m({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(m({name:`${this.$style?.name}-style`},this.$styleOptions),n),w.setLoadedStyleName(this.$style?.name)}if(!w.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,m({name:"layer-order",first:!0},this.$styleOptions)),w.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,m({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),et.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(e,i),se.on("theme:change",i)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(se.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",i={},r=!0){let s=/./g.test(n)&&!!i[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=r?s?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,d=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,$e(m({},i),{global:u||{}})),c=this._getPTDatasets(n);return a||!a&&d?l?this._mergeProps(l,u,d,c):m(m(m({},u),d),c):m(m({},d),c)}_getPTDatasets(e=""){let n="data-pc-",i=e==="root"&&S(this.$pt()?.["data-pc-section"]);return e!=="transition"&&$e(m({},e==="root"&&$e(m({[`${n}name`]:Me(i?this.$pt()?.["data-pc-section"]:this.$name)},i&&{[`${n}extend`]:Me(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:Me(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,i){let r=this._getOptionValue(e,n,i);return le(r)||qn(r)?{class:r}:r}_getPT(e,n="",i){let r=(s,a=!1)=>{let l=i?i(s):s,u=Me(n),d=Me(this.$hostName||this.$name);return(a?u!==d?l?.[u]:void 0:l?.[u])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,n,i,r){let s=a=>n?.call(this,a,i,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),d=s(e.value);return u===void 0&&d===void 0?void 0:le(d)?d:le(u)?u:a||!a&&d?l?this._mergeProps(l,u,d):m(m({},u),d):d}return s(e)}_useGlobalPT(e,n,i){return this._usePT(this.$globalPT,e,n,i)}_useDefaultPT(e,n,i){return this._usePT(this.$defaultPT,e,n,i)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,m(m({},this.$params),n))}ptms(e,n={}){return e.reduce((i,r)=>(i=Yn(i,this.ptm(r,n))||{},i),{})}ptmo(e={},n="",i={}){return this._getPTValue(e,n,m({instance:this},i),!1)}cx(e,n={}){return this.$unstyled()?void 0:Ne(this._getOptionValue(this.$style.classes,e,m(m({},this.$params),n)))}sx(e="",n=!0,i={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,e,m(m({},this.$params),i)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,m(m({},this.$params),i));return m(m({},s),r)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[Z([$o,z]),st]})}return t})();var ni=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=j=>{if(j)return getComputedStyle(j).getPropertyValue("position")==="relative"?j:r(j.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),c=this.getViewport(),f=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*d},g,b,y="top";l.top+a+s.height>c.height?(g=l.top-f.top-s.height,y="bottom",l.top+g<0&&(g=-1*l.top)):(g=a+l.top-f.top,y="top");let E=l.left+s.width-c.width,_=l.left-f.left;if(s.width>c.width?b=(l.left-f.left)*-1:E>0?b=_-E:b=l.left-f.left,e.style.top=g+"px",e.style.left=b+"px",e.style.transformOrigin=y,i){let j=mt(/-anchor-gutter$/)?.value;e.style.marginTop=y==="bottom"?`calc(${j??"2px"} * -1)`:j??""}}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,d=n.getBoundingClientRect(),c=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),f=this.getViewport(),g,b;d.top+l+s>f.height?(g=d.top+c-s,e.style.transformOrigin="bottom",g<0&&(g=c)):(g=l+d.top+c,e.style.transformOrigin="top"),d.left+a>f.width?b=Math.max(0,d.left+p+u-a):b=d.left+p,e.style.top=g+"px",e.style.left=b+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let d of u){let c=this.findSingle(a,d);c&&s(c)&&n.push(c)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),d=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,c=e.scrollTop,p=e.clientHeight,f=this.getOuterHeight(n);d<0?e.scrollTop=c+d:d+f>p&&(e.scrollTop=c+d-p+f)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,a=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?i(r,u):Object.entries(u).map(([p,f])=>r==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);l=c.length?l.concat(c.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Nd(){co({variableName:ei("scrollbar.width").name})}function Rd(){po({variableName:ei("scrollbar.width").name})}var Uo=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=ni.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var jo=(()=>{class t extends X{autofocus=!1;focused=!1;platformId=h(Ve);document=h(G);host=h(ge);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Ze(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=ni.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275dir=F({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[$]})}return t})(),Vd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Y({type:t});static \u0275inj=W({})}return t})();var k=(()=>{class t{el;renderer;pBind=A(void 0);_attrs=H(void 0);attrs=ye(()=>this._attrs()||this.pBind());styles=ye(()=>this.attrs()?.style);classes=ye(()=>Ne(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,x(()=>{let a=this.attrs()||{},{style:i,class:r}=a,s=di(a,["style","class"]);for(let[l,u]of Object.entries(s))if(l.startsWith("on")&&typeof u=="function"){let d=l.slice(2).toLowerCase();if(!this.listeners.some(c=>c.eventName===d)){let c=this.renderer.listen(this.el.nativeElement,d,u);this.listeners.push({eventName:d,unlisten:c})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,u.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){bt(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(v(ge),v(Pe))};static \u0275dir=F({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,i){n&2&&(wi(i.styles()),ee(i.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),Ho=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Y({type:t});static \u0275inj=W({})}return t})();var Vo=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Qs=`
    ${Vo}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Js={root:({instance:t})=>{let o=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,i=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":S(o)&&String(o).length===1,"p-badge-dot":ve(o),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},zo=(()=>{class t extends z{name="badge";style=Qs;classes=Js;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var Wo=new O("BADGE_INSTANCE");var oi=(()=>{class t extends X{componentName="Badge";$pcBadge=h(Wo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(k,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=A();badgeSize=A();size=A();severity=A();value=A();badgeDisabled=A(!1,{transform:L});_componentStyle=h(zo);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=ie({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,i){n&2&&(be("data-p",i.dataP),ee(i.cn(i.cx("root"),i.styleClass())),Ei("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[Z([zo,{provide:Wo,useExisting:t},{provide:Ce,useExisting:t}]),Ee([k]),$],decls:1,vars:1,template:function(n,i){n&1&&$t(0),n&2&&Ut(i.value())},dependencies:[De,xe,Ho],encapsulation:2,changeDetection:0})}return t})(),Go=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Y({type:t});static \u0275inj=W({imports:[oi,xe,xe]})}return t})();var ta=["*"],na={root:"p-fluid"},Ko=(()=>{class t extends z{name="fluid";classes=na;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var Yo=new O("FLUID_INSTANCE"),ri=(()=>{class t extends X{componentName="Fluid";$pcFluid=h(Yo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(k,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=h(Ko);static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=ie({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&ee(i.cx("root"))},features:[Z([Ko,{provide:Yo,useExisting:t},{provide:Ce,useExisting:t}]),Ee([k]),$],ngContentSelectors:ta,decls:1,vars:0,template:function(n,i){n&1&&(we(),_e(0))},dependencies:[De],encapsulation:2,changeDetection:0})}return t})();var ia=["*"],oa=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Zo=(()=>{class t extends z{name="baseicon";css=oa;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qo=(()=>{class t extends X{spin=!1;_componentStyle=h(Zo);getClassNames(){return Ne("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=ie({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&ee(i.getClassNames())},inputs:{spin:[2,"spin","spin",L]},features:[Z([Zo]),$],ngContentSelectors:ia,decls:1,vars:0,template:function(n,i){n&1&&(we(),_e(0))},encapsulation:2,changeDetection:0})}return t})();var ra=["data-p-icon","spinner"],Xo=(()=>{class t extends qo{pathId;onInit(){this.pathId="url(#"+yt()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=ie({type:t,selectors:[["","data-p-icon","spinner"]],features:[$],attrs:ra,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(Rt(),hn(0,"g"),mn(1,"path",0),gn(),hn(2,"defs")(3,"clipPath",1),mn(4,"rect",2),gn()()),n&2&&(be("clip-path",i.pathId),K(3),yi("id",i.pathId))},encapsulation:2})}return t})();var Qo=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var sa=`
    ${Qo}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,aa={root:"p-ink"},Jo=(()=>{class t extends z{name="ripple";style=sa;classes=aa;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var er=(()=>{class t extends X{componentName="Ripple";zone=h(pi);_componentStyle=h(Jo);animationListener;mouseDownListener;timeout;constructor(){super(),x(()=>{Ze(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&Re(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!Wn(n)&&!Kn(n)){let a=Math.max(zn(this.el.nativeElement),on(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=Gn(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-Kn(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-Wn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),!this.$unstyled()&&je(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&Re(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&Re(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&Re(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,yo(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[Z([Jo]),$]})}return t})(),Kc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Y({type:t});static \u0275inj=W({})}return t})();var tr=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var la=["content"],ua=["loadingicon"],da=["icon"],ca=["*"],lr=(t,o)=>({class:t,pt:o});function pa(t,o){t&1&&bi(0)}function fa(t,o){if(t&1&&at(0,"span",7),t&2){let e=ue(3);ee(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),R("pBind",e.ptm("loadingIcon")),be("aria-hidden",!0)}}function ha(t,o){if(t&1&&(Rt(),at(0,"svg",8)),t&2){let e=ue(3);ee(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),R("pBind",e.ptm("loadingIcon"))("spin",!0),be("aria-hidden",!0)}}function ga(t,o){if(t&1&&(xt(0),Ue(1,fa,1,4,"span",3)(2,ha,1,5,"svg",6),kt()),t&2){let e=ue(2);K(),R("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),K(),R("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function ma(t,o){}function ba(t,o){if(t&1&&Ue(0,ma,0,0,"ng-template",9),t&2){let e=ue(2);R("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function ya(t,o){if(t&1&&(xt(0),Ue(1,ga,3,2,"ng-container",2)(2,ba,1,1,null,5),kt()),t&2){let e=ue();K(),R("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),K(),R("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",bn(3,lr,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function Da(t,o){if(t&1&&at(0,"span",7),t&2){let e=ue(2);ee(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),R("pBind",e.ptm("icon")),be("data-p",e.dataIconP)}}function va(t,o){}function Ca(t,o){if(t&1&&Ue(0,va,0,0,"ng-template",9),t&2){let e=ue(2);R("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Sa(t,o){if(t&1&&(xt(0),Ue(1,Da,1,4,"span",3)(2,Ca,1,1,null,5),kt()),t&2){let e=ue();K(),R("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),K(),R("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",bn(3,lr,e.cx("icon"),e.ptm("icon")))}}function Ea(t,o){if(t&1&&(pn(0,"span",7),$t(1),fn()),t&2){let e=ue();ee(e.cx("label")),R("pBind",e.ptm("label")),be("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),K(),Ut(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function wa(t,o){if(t&1&&at(0,"p-badge",10),t&2){let e=ue();R("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var _a={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},tt=(()=>{class t extends z{name="button";style=tr;classes=_a;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var nr=new O("BUTTON_INSTANCE"),ir=new O("BUTTON_DIRECTIVE_INSTANCE"),or=new O("BUTTON_LABEL_INSTANCE"),rr=new O("BUTTON_ICON_INSTANCE"),ke={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},sr=(()=>{class t extends X{componentName="ButtonLabel";ptButtonLabel=A();pButtonLabelPT=A();pButtonLabelUnstyled=A();$pcButtonLabel=h(or,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(k,{self:!0});constructor(){super(),x(()=>{let e=this.ptButtonLabel()||this.pButtonLabelPT();e&&this.directivePT.set(e)}),x(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&Bt("p-button-label",!i.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"],pButtonLabelPT:[1,"pButtonLabelPT"],pButtonLabelUnstyled:[1,"pButtonLabelUnstyled"]},features:[Z([tt,{provide:or,useExisting:t},{provide:Ce,useExisting:t}]),Ee([k]),$]})}return t})(),ar=(()=>{class t extends X{componentName="ButtonIcon";ptButtonIcon=A();pButtonIconPT=A();pButtonUnstyled=A();$pcButtonIcon=h(rr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(k,{self:!0});constructor(){super(),x(()=>{let e=this.ptButtonIcon()||this.pButtonIconPT();e&&this.directivePT.set(e)}),x(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&Bt("p-button-icon",!i.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"],pButtonIconPT:[1,"pButtonIconPT"],pButtonUnstyled:[1,"pButtonUnstyled"]},features:[Z([tt,{provide:rr,useExisting:t},{provide:Ce,useExisting:t}]),Ee([k]),$]})}return t})(),Dp=(()=>{class t extends X{componentName="Button";$pcButtonDirective=h(ir,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(k,{self:!0});_componentStyle=h(tt);ptButtonDirective=A();pButtonPT=A();pButtonUnstyled=A();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),x(()=>{let e=this.ptButtonDirective()||this.pButtonPT();e&&this.directivePT.set(e)}),x(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),x(()=>{let e=this.$unstyled();this.initialized&&e&&this.setStyleClass()})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=A(void 0,{transform:L});iconSignal=Dn(ar);labelSignal=Dn(sr);isIconOnly=ye(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(ke);pcFluid=h(ri,{optional:!0,host:!0,skipSelf:!0});isTextButton=ye(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){!this.$unstyled()&&je(this.htmlElement,this.getStyleClass().join(" ")),Ze(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let e=[ke.button,ke.component];return this.icon&&!this.label&&ve(this.htmlElement.textContent)&&e.push(ke.iconOnly),this.loading&&(e.push(ke.disabled,ke.loading),!this.icon&&this.label&&e.push(ke.labelOnly),this.icon&&!this.label&&!ve(this.htmlElement.textContent)&&e.push(ke.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),this.$unstyled()?[]:e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(i=>e.some(r=>i===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Xe(this.htmlElement,'[data-pc-section="buttonlabel"]')&&this.label){let n=nn("span",{class:this.cx("label"),"p-bind":this.ptm("buttonlabel"),"aria-hidden":this.icon&&!this.label?"true":null});n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Xe(this.htmlElement,'[data-pc-section="buttonicon"]')&&(this.icon||this.loading)){let n=this.label&&!this.$unstyled()?"p-button-icon-"+this.iconPos:null,i=!this.$unstyled()&&this.getIconClass(),r=nn("span",{class:this.cn(this.cx("icon"),n,i),"aria-hidden":"true","p-bind":this.ptm("buttonicon")});!this.loadingIcon&&this.loading&&(r.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(r,this.htmlElement.firstChild)}}updateLabel(){let e=Xe(this.htmlElement,'[data-pc-section="buttonlabel"]');if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Xe(this.htmlElement,'[data-pc-section="buttonicon"]'),n=Xe(this.htmlElement,'[data-pc-section="buttonlabel"]');this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e&&!this.$unstyled()?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,selectors:[["","pButton",""]],contentQueries:function(n,i,r){n&1&&Ci(r,i.iconSignal,ar,5)(r,i.labelSignal,sr,5),n&2&&Si(2)},hostVars:4,hostBindings:function(n,i){n&2&&Bt("p-button-icon-only",!i.$unstyled()&&i.isIconOnly())("p-button-text",!i.$unstyled()&&i.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],pButtonPT:[1,"pButtonPT"],pButtonUnstyled:[1,"pButtonUnstyled"],hostName:"hostName",text:[2,"text","text",L],plain:[2,"plain","plain",L],raised:[2,"raised","raised",L],size:"size",outlined:[2,"outlined","outlined",L],rounded:[2,"rounded","rounded",L],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[Z([tt,{provide:ir,useExisting:t},{provide:Ce,useExisting:t}]),Ee([k]),$]})}return t})(),Aa=(()=>{class t extends X{componentName="Button";hostName="";$pcButton=h(nr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(k,{self:!0});_componentStyle=h(tt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=A(void 0,{transform:L});onClick=new Mt;onFocus=new Mt;onBlur=new Mt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=h(ri,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=ie({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&vi(r,la,5)(r,ua,5)(r,da,5)(r,To,4),n&2){let s;lt(s=ut())&&(i.contentTemplate=s.first),lt(s=ut())&&(i.loadingIconTemplate=s.first),lt(s=ut())&&(i.iconTemplate=s.first),lt(s=ut())&&(i.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",L],raised:[2,"raised","raised",L],rounded:[2,"rounded","rounded",L],text:[2,"text","text",L],plain:[2,"plain","plain",L],outlined:[2,"outlined","outlined",L],link:[2,"link","link",L],tabindex:[2,"tabindex","tabindex",Cn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",L],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",L],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Z([tt,{provide:nr,useExisting:t},{provide:Ce,useExisting:t}]),Ee([k]),$],ngContentSelectors:ca,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,i){n&1&&(we(),pn(0,"button",0),Di("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),_e(1),Ue(2,pa,1,0,"ng-container",1)(3,ya,3,6,"ng-container",2)(4,Sa,3,6,"ng-container",2)(5,Ea,2,6,"span",3)(6,wa,1,4,"p-badge",4),fn()),n&2&&(ee(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),R("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),be("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),K(2),R("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),K(),R("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),K(),R("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),K(),R("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),K(),R("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[De,Pn,Rn,Nn,er,jo,Xo,Go,oi,xe,k],encapsulation:2,changeDetection:0})}return t})(),vp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Y({type:t});static \u0275inj=W({imports:[De,Aa,xe,xe]})}return t})();export{Ht as a,Tr as b,Sn as c,Ge as d,Fr as e,Ke as f,Oi as g,Pi as h,Pr as i,eo as j,es as k,ts as l,io as m,Pn as n,oo as o,is as p,Nn as q,Rn as r,rs as s,ss as t,ls as u,us as v,cs as w,ps as x,fs as y,hs as z,gs as A,De as B,ms as C,kn as D,ys as E,Ze as F,$n as G,Bl as H,uo as I,je as J,Re as K,fo as L,Vn as M,Es as N,ws as O,_s as P,Gl as Q,ho as R,zn as S,Kl as T,Ts as U,Yl as V,Zl as W,lo as X,ql as Y,nn as Z,Xl as _,Fs as $,Xe as aa,Ql as ba,Jl as ca,eu as da,bo as ea,tu as fa,Wn as ga,Ls as ha,Os as ia,nu as ja,iu as ka,Gn as la,on as ma,ou as na,ru as oa,Kn as pa,su as qa,au as ra,lu as sa,uu as ta,du as ua,cu as va,pu as wa,fu as xa,hu as ya,gu as za,mu as Aa,Do as Ba,bu as Ca,ve as Da,ks as Ea,sn as Fa,S as Ga,rn as Ha,bt as Ia,Cu as Ja,Su as Ka,Eu as La,B as Ma,qn as Na,wu as Oa,_u as Pa,re as Qa,Au as Ra,Tu as Sa,yt as Ta,Bs as Ua,Nu as Va,U as Wa,Ru as Xa,Mu as Ya,xu as Za,ku as _a,Bu as $a,$u as ab,To as bb,xe as cb,Uu as db,ju as eb,ei as fb,z as gb,bd as hb,Ce as ib,X as jb,k as kb,Ho as lb,ni as mb,Nd as nb,Rd as ob,Uo as pb,jo as qb,Vd as rb,oi as sb,Go as tb,ri as ub,qo as vb,Xo as wb,er as xb,Kc as yb,Dp as zb,Aa as Ab,vp as Bb};
