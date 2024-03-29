(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const q={},Se=[],_t=()=>{},ps=()=>!1,Yn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qr=t=>t.startsWith("onUpdate:"),st=Object.assign,ta=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vs=Object.prototype.hasOwnProperty,U=(t,e)=>vs.call(t,e),R=Array.isArray,Oe=t=>Wn(t)==="[object Map]",Ui=t=>Wn(t)==="[object Set]",F=t=>typeof t=="function",nt=t=>typeof t=="string",Me=t=>typeof t=="symbol",X=t=>t!==null&&typeof t=="object",Hi=t=>(X(t)||F(t))&&F(t.then)&&F(t.catch),Bi=Object.prototype.toString,Wn=t=>Bi.call(t),gs=t=>Wn(t).slice(8,-1),Yi=t=>Wn(t)==="[object Object]",ea=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cn=Zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bs=/-(\w)/g,Ft=Kn(t=>t.replace(bs,(e,n)=>n?n.toUpperCase():"")),ys=/\B([A-Z])/g,Re=Kn(t=>t.replace(ys,"-$1").toLowerCase()),Vn=Kn(t=>t.charAt(0).toUpperCase()+t.slice(1)),cr=Kn(t=>t?`on${Vn(t)}`:""),Qt=(t,e)=>!Object.is(t,e),ur=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Rn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fa;const Wi=()=>Fa||(Fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function na(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=nt(r)?As(r):na(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(nt(t)||X(t))return t}const ws=/;(?![^(]*\))/g,_s=/:([^]+)/,ks=/\/\*[^]*?\*\//g;function As(t){const e={};return t.replace(ks,"").split(ws).forEach(n=>{if(n){const r=n.split(_s);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ct(t){let e="";if(nt(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=Ct(t[n]);r&&(e+=r+" ")}else if(X(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ss="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Os=Zr(Ss);function Ki(t){return!!t||t===""}const Ue=t=>nt(t)?t:t==null?"":R(t)||X(t)&&(t.toString===Bi||!F(t.toString))?JSON.stringify(t,Vi,2):String(t),Vi=(t,e)=>e&&e.__v_isRef?Vi(t,e.value):Oe(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a],i)=>(n[dr(r,i)+" =>"]=a,n),{})}:Ui(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>dr(n))}:Me(e)?dr(e):X(e)&&!R(e)&&!Yi(e)?String(e):e,dr=(t,e="")=>{var n;return Me(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class Es{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Cs(t,e=At){e&&e.active&&e.effects.push(t)}function Ps(){return At}let de;class ra{constructor(e,n,r,a){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Cs(this,a)}get dirty(){if(this._dirtyLevel===1){ge();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Ts(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),be()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Jt,n=de;try{return Jt=!0,de=this,this._runnings++,ja(this),this.fn()}finally{$a(this),this._runnings--,de=n,Jt=e}}stop(){var e;this.active&&(ja(this),$a(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Ts(t){return t.value}function ja(t){t._trackId++,t._depsLength=0}function $a(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Gi(t.deps[e],t);t.deps.length=t._depsLength}}function Gi(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Jt=!0,Or=0;const qi=[];function ge(){qi.push(Jt),Jt=!1}function be(){const t=qi.pop();Jt=t===void 0?!0:t}function aa(){Or++}function ia(){for(Or--;!Or&&Er.length;)Er.shift()()}function Xi(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Gi(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Er=[];function Ji(t,e,n){aa();for(const r of t.keys())if(t.get(r)===r._trackId){if(r._dirtyLevel<e){const a=r._dirtyLevel;r._dirtyLevel=e,a===0&&(r._shouldSchedule=!0,r.trigger())}r.scheduler&&r._shouldSchedule&&(!r._runnings||r.allowRecurse)&&(r._shouldSchedule=!1,Er.push(r.scheduler))}ia()}const Zi=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Cr=new WeakMap,me=Symbol(""),Pr=Symbol("");function bt(t,e,n){if(Jt&&de){let r=Cr.get(t);r||Cr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Zi(()=>r.delete(n))),Xi(de,a)}}function zt(t,e,n,r,a,i){const o=Cr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&R(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Me(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":R(t)?ea(n)&&s.push(o.get("length")):(s.push(o.get(me)),Oe(t)&&s.push(o.get(Pr)));break;case"delete":R(t)||(s.push(o.get(me)),Oe(t)&&s.push(o.get(Pr)));break;case"set":Oe(t)&&s.push(o.get(me));break}aa();for(const l of s)l&&Ji(l,2);ia()}const Is=Zr("__proto__,__v_isRef,__isVue"),Qi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Me)),Da=Ns();function Ns(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)bt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ge(),aa();const r=B(this)[e].apply(this,n);return ia(),be(),r}}),t}function Ms(t){const e=B(this);return bt(e,"has",t),e.hasOwnProperty(t)}class to{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Ks:ao:i?ro:no).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=R(e);if(!a){if(o&&U(Da,n))return Reflect.get(Da,n,r);if(n==="hasOwnProperty")return Ms}const s=Reflect.get(e,n,r);return(Me(n)?Qi.has(n):Is(n))||(a||bt(e,"get",n),i)?s:mt(s)?o&&ea(n)?s:s.value:X(s)?a?io(s):la(s):s}}class eo extends to{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(!this._shallow){const l=Te(i);if(!Ln(r)&&!Te(r)&&(i=B(i),r=B(r)),!R(e)&&mt(i)&&!mt(r))return l?!1:(i.value=r,!0)}const o=R(e)&&ea(n)?Number(n)<e.length:U(e,n),s=Reflect.set(e,n,r,a);return e===B(a)&&(o?Qt(r,i)&&zt(e,"set",n,r):zt(e,"add",n,r)),s}deleteProperty(e,n){const r=U(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&zt(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!Me(n)||!Qi.has(n))&&bt(e,"has",n),r}ownKeys(e){return bt(e,"iterate",R(e)?"length":me),Reflect.ownKeys(e)}}class Rs extends to{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ls=new eo,Fs=new Rs,js=new eo(!0),oa=t=>t,Gn=t=>Reflect.getPrototypeOf(t);function dn(t,e,n=!1,r=!1){t=t.__v_raw;const a=B(t),i=B(e);n||(Qt(e,i)&&bt(a,"get",e),bt(a,"get",i));const{has:o}=Gn(a),s=r?oa:n?ca:Ve;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function mn(t,e=!1){const n=this.__v_raw,r=B(n),a=B(t);return e||(Qt(t,a)&&bt(r,"has",t),bt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function hn(t,e=!1){return t=t.__v_raw,!e&&bt(B(t),"iterate",me),Reflect.get(t,"size",t)}function za(t){t=B(t);const e=B(this);return Gn(e).has.call(e,t)||(e.add(t),zt(e,"add",t,t)),this}function Ua(t,e){e=B(e);const n=B(this),{has:r,get:a}=Gn(n);let i=r.call(n,t);i||(t=B(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Qt(e,o)&&zt(n,"set",t,e):zt(n,"add",t,e),this}function Ha(t){const e=B(this),{has:n,get:r}=Gn(e);let a=n.call(e,t);a||(t=B(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&zt(e,"delete",t,void 0),i}function Ba(){const t=B(this),e=t.size!==0,n=t.clear();return e&&zt(t,"clear",void 0,void 0),n}function pn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=e?oa:t?ca:Ve;return!t&&bt(s,"iterate",me),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function vn(t,e,n){return function(...r){const a=this.__v_raw,i=B(a),o=Oe(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),u=n?oa:e?ca:Ve;return!e&&bt(i,"iterate",l?Pr:me),{next(){const{value:m,done:g}=c.next();return g?{value:m,done:g}:{value:s?[u(m[0]),u(m[1])]:u(m),done:g}},[Symbol.iterator](){return this}}}}function Kt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $s(){const t={get(i){return dn(this,i)},get size(){return hn(this)},has:mn,add:za,set:Ua,delete:Ha,clear:Ba,forEach:pn(!1,!1)},e={get(i){return dn(this,i,!1,!0)},get size(){return hn(this)},has:mn,add:za,set:Ua,delete:Ha,clear:Ba,forEach:pn(!1,!0)},n={get(i){return dn(this,i,!0)},get size(){return hn(this,!0)},has(i){return mn.call(this,i,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:pn(!0,!1)},r={get(i){return dn(this,i,!0,!0)},get size(){return hn(this,!0)},has(i){return mn.call(this,i,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=vn(i,!1,!1),n[i]=vn(i,!0,!1),e[i]=vn(i,!1,!0),r[i]=vn(i,!0,!0)}),[t,n,e,r]}const[Ds,zs,Us,Hs]=$s();function sa(t,e){const n=e?t?Hs:Us:t?zs:Ds;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Bs={get:sa(!1,!1)},Ys={get:sa(!1,!0)},Ws={get:sa(!0,!1)},no=new WeakMap,ro=new WeakMap,ao=new WeakMap,Ks=new WeakMap;function Vs(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gs(t){return t.__v_skip||!Object.isExtensible(t)?0:Vs(gs(t))}function la(t){return Te(t)?t:fa(t,!1,Ls,Bs,no)}function qs(t){return fa(t,!1,js,Ys,ro)}function io(t){return fa(t,!0,Fs,Ws,ao)}function fa(t,e,n,r,a){if(!X(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Gs(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function Ee(t){return Te(t)?Ee(t.__v_raw):!!(t&&t.__v_isReactive)}function Te(t){return!!(t&&t.__v_isReadonly)}function Ln(t){return!!(t&&t.__v_isShallow)}function oo(t){return Ee(t)||Te(t)}function B(t){const e=t&&t.__v_raw;return e?B(e):t}function so(t){return Rn(t,"__v_skip",!0),t}const Ve=t=>X(t)?la(t):t,ca=t=>X(t)?io(t):t;class lo{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ra(()=>e(this._value),()=>Tr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=B(this);return(!e._cacheable||e.effect.dirty)&&Qt(e._value,e._value=e.effect.run())&&Tr(e,2),fo(e),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Xs(t,e,n=!1){let r,a;const i=F(t);return i?(r=t,a=_t):(r=t.get,a=t.set),new lo(r,a,i||!a,n)}function fo(t){Jt&&de&&(t=B(t),Xi(de,t.dep||(t.dep=Zi(()=>t.dep=void 0,t instanceof lo?t:void 0))))}function Tr(t,e=2,n){t=B(t);const r=t.dep;r&&Ji(r,e)}function mt(t){return!!(t&&t.__v_isRef===!0)}function fe(t){return Js(t,!1)}function Js(t,e){return mt(t)?t:new Zs(t,e)}class Zs{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:B(e),this._value=n?e:Ve(e)}get value(){return fo(this),this._value}set value(e){const n=this.__v_isShallow||Ln(e)||Te(e);e=n?e:B(e),Qt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ve(e),Tr(this,2))}}function ot(t){return mt(t)?t.value:t}const Qs={get:(t,e,n)=>ot(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return mt(a)&&!mt(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function co(t){return Ee(t)?t:new Proxy(t,Qs)}/**
* @vue/runtime-core v3.4.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){qn(i,e,n)}return a}function Pt(t,e,n,r){if(F(t)){const i=Zt(t,e,n,r);return i&&Hi(i)&&i.catch(o=>{qn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Pt(t[i],e,n,r));return a}function qn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Zt(l,null,10,[t,o,s]);return}}tl(t,n,a,r)}function tl(t,e,n,r=!0){console.error(t)}let Ge=!1,Ir=!1;const ft=[];let Rt=0;const Ce=[];let Gt=null,le=0;const uo=Promise.resolve();let ua=null;function el(t){const e=ua||uo;return t?e.then(this?t.bind(this):t):e}function nl(t){let e=Rt+1,n=ft.length;for(;e<n;){const r=e+n>>>1,a=ft[r],i=qe(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function da(t){(!ft.length||!ft.includes(t,Ge&&t.allowRecurse?Rt+1:Rt))&&(t.id==null?ft.push(t):ft.splice(nl(t.id),0,t),mo())}function mo(){!Ge&&!Ir&&(Ir=!0,ua=uo.then(po))}function rl(t){const e=ft.indexOf(t);e>Rt&&ft.splice(e,1)}function al(t){R(t)?Ce.push(...t):(!Gt||!Gt.includes(t,t.allowRecurse?le+1:le))&&Ce.push(t),mo()}function Ya(t,e,n=Ge?Rt+1:0){for(;n<ft.length;n++){const r=ft[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ft.splice(n,1),n--,r()}}}function ho(t){if(Ce.length){const e=[...new Set(Ce)].sort((n,r)=>qe(n)-qe(r));if(Ce.length=0,Gt){Gt.push(...e);return}for(Gt=e,le=0;le<Gt.length;le++)Gt[le]();Gt=null,le=0}}const qe=t=>t.id==null?1/0:t.id,il=(t,e)=>{const n=qe(t)-qe(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function po(t){Ir=!1,Ge=!0,ft.sort(il);try{for(Rt=0;Rt<ft.length;Rt++){const e=ft[Rt];e&&e.active!==!1&&Zt(e,null,14)}}finally{Rt=0,ft.length=0,ho(),Ge=!1,ua=null,(ft.length||Ce.length)&&po()}}function ol(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||q;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:g}=r[u]||q;g&&(a=n.map(k=>nt(k)?k.trim():k)),m&&(a=n.map(xs))}let s,l=r[s=cr(e)]||r[s=cr(Ft(e))];!l&&i&&(l=r[s=cr(Re(e))]),l&&Pt(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Pt(c,t,6,a)}}function vo(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!F(t)){const l=c=>{const u=vo(c,e,!0);u&&(s=!0,st(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(X(t)&&r.set(t,null),null):(R(i)?i.forEach(l=>o[l]=null):st(o,i),X(t)&&r.set(t,o),o)}function Xn(t,e){return!t||!Yn(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Re(e))||U(t,e))}let St=null,Jn=null;function Fn(t){const e=St;return St=t,Jn=t&&t.type.__scopeId||null,e}function sl(t){Jn=t}function ll(){Jn=null}function fl(t,e=St,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&ei(-1);const i=Fn(e);let o;try{o=t(...a)}finally{Fn(i),r._d&&ei(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mr(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:g,setupState:k,ctx:j,inheritAttrs:N}=t;let z,_;const E=Fn(t);try{if(n.shapeFlag&4){const $=a||r,H=$;z=Mt(u.call(H,$,m,i,k,g,j)),_=l}else{const $=e;z=Mt($.length>1?$(i,{attrs:l,slots:s,emit:c}):$(i,null)),_=e.props?l:cl(l)}}catch($){Ye.length=0,qn($,t,1),z=it(he)}let P=z;if(_&&N!==!1){const $=Object.keys(_),{shapeFlag:H}=P;$.length&&H&7&&(o&&$.some(Qr)&&(_=ul(_,o)),P=Ie(P,_))}return n.dirs&&(P=Ie(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),z=P,Fn(E),z}const cl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yn(n))&&((e||(e={}))[n]=t[n]);return e},ul=(t,e)=>{const n={};for(const r in t)(!Qr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dl(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Wa(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const g=u[m];if(o[g]!==r[g]&&!Xn(c,g))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Wa(r,o,c):!0:!!o;return!1}function Wa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Xn(n,i))return!0}return!1}function ml({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const go="components";function hl(t,e){return vl(go,t,!0,e)||t}const pl=Symbol.for("v-ndc");function vl(t,e,n=!0,r=!1){const a=St||ct;if(a){const i=a.type;if(t===go){const s=mf(i,!1);if(s&&(s===e||s===Ft(e)||s===Vn(Ft(e))))return i}const o=Ka(a[t]||i[t],e)||Ka(a.appContext[t],e);return!o&&r?i:o}}function Ka(t,e){return t&&(t[e]||t[Ft(e)]||t[Vn(Ft(e))])}const gl=t=>t.__isSuspense;function bl(t,e){e&&e.pendingBranch?R(t)?e.effects.push(...t):e.effects.push(t):al(t)}const yl=Symbol.for("v-scx"),xl=()=>Tn(yl),gn={};function He(t,e,n){return bo(t,e,n)}function bo(t,e,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=q){if(e&&i){const L=e;e=(...Q)=>{L(...Q),H()}}const l=ct,c=L=>r===!0?L:we(L,r===!1?1:void 0);let u,m=!1,g=!1;if(mt(t)?(u=()=>t.value,m=Ln(t)):Ee(t)?(u=()=>c(t),m=!0):R(t)?(g=!0,m=t.some(L=>Ee(L)||Ln(L)),u=()=>t.map(L=>{if(mt(L))return L.value;if(Ee(L))return c(L);if(F(L))return Zt(L,l,2)})):F(t)?e?u=()=>Zt(t,l,2):u=()=>(k&&k(),Pt(t,l,3,[j])):u=_t,e&&r){const L=u;u=()=>we(L())}let k,j=L=>{k=P.onStop=()=>{Zt(L,l,4),k=P.onStop=void 0}},N;if(er)if(j=_t,e?n&&Pt(e,l,3,[u(),g?[]:void 0,j]):u(),a==="sync"){const L=xl();N=L.__watcherHandles||(L.__watcherHandles=[])}else return _t;let z=g?new Array(t.length).fill(gn):gn;const _=()=>{if(!(!P.active||!P.dirty))if(e){const L=P.run();(r||m||(g?L.some((Q,ht)=>Qt(Q,z[ht])):Qt(L,z)))&&(k&&k(),Pt(e,l,3,[L,z===gn?void 0:g&&z[0]===gn?[]:z,j]),z=L)}else P.run()};_.allowRecurse=!!e;let E;a==="sync"?E=_:a==="post"?E=()=>vt(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),E=()=>da(_));const P=new ra(u,_t,E),$=Ps(),H=()=>{P.stop(),$&&ta($.effects,P)};return e?n?_():z=P.run():a==="post"?vt(P.run.bind(P),l&&l.suspense):P.run(),N&&N.push(H),H}function wl(t,e,n){const r=this.proxy,a=nt(t)?t.includes(".")?yo(r,t):()=>r[t]:t.bind(r,r);let i;F(e)?i=e:(i=e.handler,n=e);const o=nn(this),s=bo(a,i.bind(r),n);return o(),s}function yo(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function we(t,e,n=0,r){if(!X(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),mt(t))we(t.value,e,n,r);else if(R(t))for(let a=0;a<t.length;a++)we(t[a],e,n,r);else if(Ui(t)||Oe(t))t.forEach(a=>{we(a,e,n,r)});else if(Yi(t))for(const a in t)we(t[a],e,n,r);return t}function ie(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(ge(),Pt(l,n,8,[t.el,s,t,e]),be())}}/*! #__NO_SIDE_EFFECTS__ */function _l(t,e){return F(t)?st({name:t.name},e,{setup:t}):t}const Pn=t=>!!t.type.__asyncLoader,xo=t=>t.type.__isKeepAlive;function kl(t,e){wo(t,"a",e)}function Al(t,e){wo(t,"da",e)}function wo(t,e,n=ct){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Zn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)xo(a.parent.vnode)&&Sl(r,e,n,a),a=a.parent}}function Sl(t,e,n,r){const a=Zn(e,t,r,!0);_o(()=>{ta(r[e],a)},n)}function Zn(t,e,n=ct,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ge();const s=nn(n),l=Pt(e,n,t,o);return s(),be(),l});return r?a.unshift(i):a.push(i),i}}const Yt=t=>(e,n=ct)=>(!er||t==="sp")&&Zn(t,(...r)=>e(...r),n),Ol=Yt("bm"),El=Yt("m"),Cl=Yt("bu"),Pl=Yt("u"),Tl=Yt("bum"),_o=Yt("um"),Il=Yt("sp"),Nl=Yt("rtg"),Ml=Yt("rtc");function Rl(t,e=ct){Zn("ec",t,e)}function hr(t,e,n,r){let a;const i=n&&n[r];if(R(t)||nt(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(X(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Nr=t=>t?Ro(t)?va(t)||t.proxy:Nr(t.parent):null,Be=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nr(t.parent),$root:t=>Nr(t.root),$emit:t=>t.emit,$options:t=>ma(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,da(t.update)}),$nextTick:t=>t.n||(t.n=el.bind(t.proxy)),$watch:t=>wl.bind(t)}),pr=(t,e)=>t!==q&&!t.__isScriptSetup&&U(t,e),Ll={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const k=o[e];if(k!==void 0)switch(k){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(pr(r,e))return o[e]=1,r[e];if(a!==q&&U(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,i[e];if(n!==q&&U(n,e))return o[e]=4,n[e];Mr&&(o[e]=0)}}const u=Be[e];let m,g;if(u)return e==="$attrs"&&bt(t,"get",e),u(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==q&&U(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,U(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return pr(a,e)?(a[e]=n,!0):r!==q&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==q&&U(t,o)||pr(e,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Be,o)||U(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Va(t){return R(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Mr=!0;function Fl(t){const e=ma(t),n=t.proxy,r=t.ctx;Mr=!1,e.beforeCreate&&Ga(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:g,beforeUpdate:k,updated:j,activated:N,deactivated:z,beforeDestroy:_,beforeUnmount:E,destroyed:P,unmounted:$,render:H,renderTracked:L,renderTriggered:Q,errorCaptured:ht,serverPrefetch:wt,expose:jt,inheritAttrs:Fe,components:ln,directives:fn,filters:or}=e;if(c&&jl(c,r,null),o)for(const J in o){const W=o[J];F(W)&&(r[J]=W.bind(n))}if(a){const J=a.call(n,n);X(J)&&(t.data=la(J))}if(Mr=!0,i)for(const J in i){const W=i[J],re=F(W)?W.bind(n,n):F(W.get)?W.get.bind(n,n):_t,cn=!F(W)&&F(W.set)?W.set.bind(n):_t,ae=se({get:re,set:cn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>ae.value,set:Tt=>ae.value=Tt})}if(s)for(const J in s)ko(s[J],r,n,J);if(l){const J=F(l)?l.call(n):l;Reflect.ownKeys(J).forEach(W=>{Bl(W,J[W])})}u&&Ga(u,t,"c");function ut(J,W){R(W)?W.forEach(re=>J(re.bind(n))):W&&J(W.bind(n))}if(ut(Ol,m),ut(El,g),ut(Cl,k),ut(Pl,j),ut(kl,N),ut(Al,z),ut(Rl,ht),ut(Ml,L),ut(Nl,Q),ut(Tl,E),ut(_o,$),ut(Il,wt),R(jt))if(jt.length){const J=t.exposed||(t.exposed={});jt.forEach(W=>{Object.defineProperty(J,W,{get:()=>n[W],set:re=>n[W]=re})})}else t.exposed||(t.exposed={});H&&t.render===_t&&(t.render=H),Fe!=null&&(t.inheritAttrs=Fe),ln&&(t.components=ln),fn&&(t.directives=fn)}function jl(t,e,n=_t){R(t)&&(t=Rr(t));for(const r in t){const a=t[r];let i;X(a)?"default"in a?i=Tn(a.from||r,a.default,!0):i=Tn(a.from||r):i=Tn(a),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ga(t,e,n){Pt(R(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ko(t,e,n,r){const a=r.includes(".")?yo(n,r):()=>n[r];if(nt(t)){const i=e[t];F(i)&&He(a,i)}else if(F(t))He(a,t.bind(n));else if(X(t))if(R(t))t.forEach(i=>ko(i,e,n,r));else{const i=F(t.handler)?t.handler.bind(n):e[t.handler];F(i)&&He(a,i,t)}}function ma(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>jn(l,c,o,!0)),jn(l,e,o)),X(e)&&i.set(e,l),l}function jn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&jn(t,i,n,!0),a&&a.forEach(o=>jn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=$l[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const $l={data:qa,props:Xa,emits:Xa,methods:De,computed:De,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:De,directives:De,watch:zl,provide:qa,inject:Dl};function qa(t,e){return e?t?function(){return st(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Dl(t,e){return De(Rr(t),Rr(e))}function Rr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function De(t,e){return t?st(Object.create(null),t,e):e}function Xa(t,e){return t?R(t)&&R(e)?[...new Set([...t,...e])]:st(Object.create(null),Va(t),Va(e??{})):e}function zl(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function Ao(){return{app:null,config:{isNativeTag:ps,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ul=0;function Hl(t,e){return function(r,a=null){F(r)||(r=st({},r)),a!=null&&!X(a)&&(a=null);const i=Ao(),o=new WeakSet;let s=!1;const l=i.app={_uid:Ul++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:vf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&F(c.install)?(o.add(c),c.install(l,...u)):F(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const g=it(r,a);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),u&&e?e(g,c):t(g,c,m),s=!0,l._container=c,c.__vue_app__=l,va(g.component)||g.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){$n=l;try{return c()}finally{$n=null}}};return l}}let $n=null;function Bl(t,e){if(ct){let n=ct.provides;const r=ct.parent&&ct.parent.provides;r===n&&(n=ct.provides=Object.create(r)),n[t]=e}}function Tn(t,e,n=!1){const r=ct||St;if(r||$n){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:$n._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&F(e)?e.call(r&&r.proxy):e}}function Yl(t,e,n,r=!1){const a={},i={};Rn(i,tr,1),t.propsDefaults=Object.create(null),So(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:qs(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Wl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=B(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let m=0;m<u.length;m++){let g=u[m];if(Xn(t.emitsOptions,g))continue;const k=e[g];if(l)if(U(i,g))k!==i[g]&&(i[g]=k,c=!0);else{const j=Ft(g);a[j]=Lr(l,s,j,k,t,!1)}else k!==i[g]&&(i[g]=k,c=!0)}}}else{So(t,e,a,i)&&(c=!0);let u;for(const m in s)(!e||!U(e,m)&&((u=Re(m))===m||!U(e,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Lr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!U(e,m))&&(delete i[m],c=!0)}c&&zt(t,"set","$attrs")}function So(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(Cn(l))continue;const c=e[l];let u;a&&U(a,u=Ft(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:Xn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||q;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Lr(a,l,m,c[m],t,!U(c,m))}}return o}function Lr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&F(l)){const{propsDefaults:c}=a;if(n in c)r=c[n];else{const u=nn(a);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Re(n))&&(r=!0))}return r}function Oo(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!F(t)){const u=m=>{l=!0;const[g,k]=Oo(m,e,!0);st(o,g),k&&s.push(...k)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return X(t)&&r.set(t,Se),Se;if(R(i))for(let u=0;u<i.length;u++){const m=Ft(i[u]);Ja(m)&&(o[m]=q)}else if(i)for(const u in i){const m=Ft(u);if(Ja(m)){const g=i[u],k=o[m]=R(g)||F(g)?{type:g}:st({},g);if(k){const j=ti(Boolean,k.type),N=ti(String,k.type);k[0]=j>-1,k[1]=N<0||j<N,(j>-1||U(k,"default"))&&s.push(m)}}}const c=[o,s];return X(t)&&r.set(t,c),c}function Ja(t){return t[0]!=="$"}function Za(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Qa(t,e){return Za(t)===Za(e)}function ti(t,e){return R(e)?e.findIndex(n=>Qa(n,t)):F(e)&&Qa(e,t)?0:-1}const Eo=t=>t[0]==="_"||t==="$stable",ha=t=>R(t)?t.map(Mt):[Mt(t)],Kl=(t,e,n)=>{if(e._n)return e;const r=fl((...a)=>ha(e(...a)),n);return r._c=!1,r},Co=(t,e,n)=>{const r=t._ctx;for(const a in t){if(Eo(a))continue;const i=t[a];if(F(i))e[a]=Kl(a,i,r);else if(i!=null){const o=ha(i);e[a]=()=>o}}},Po=(t,e)=>{const n=ha(e);t.slots.default=()=>n},Vl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=B(e),Rn(e,"_",n)):Co(e,t.slots={})}else t.slots={},e&&Po(t,e);Rn(t.slots,tr,1)},Gl=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=q;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(st(a,e),!n&&s===1&&delete a._):(i=!e.$stable,Co(e,a)),o=e}else e&&(Po(t,e),o={default:1});if(i)for(const s in a)!Eo(s)&&o[s]==null&&delete a[s]};function Fr(t,e,n,r,a=!1){if(R(t)){t.forEach((g,k)=>Fr(g,e&&(R(e)?e[k]:e),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?va(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,u=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(nt(c)?(u[c]=null,U(m,c)&&(m[c]=null)):mt(c)&&(c.value=null)),F(l))Zt(l,s,12,[o,u]);else{const g=nt(l),k=mt(l);if(g||k){const j=()=>{if(t.f){const N=g?U(m,l)?m[l]:u[l]:l.value;a?R(N)&&ta(N,i):R(N)?N.includes(i)||N.push(i):g?(u[l]=[i],U(m,l)&&(m[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,U(m,l)&&(m[l]=o)):k&&(l.value=o,t.k&&(u[t.k]=o))};o?(j.id=-1,vt(j,n)):j()}}}const vt=bl;function ql(t){return Xl(t)}function Xl(t,e){const n=Wi();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:g,setScopeId:k=_t,insertStaticContent:j}=t,N=(f,d,h,p=null,v=null,x=null,A=void 0,y=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!$e(f,d)&&(p=un(f),Tt(f,v,x,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:O,shapeFlag:I}=d;switch(b){case Qn:z(f,d,h,p);break;case he:_(f,d,h,p);break;case gr:f==null&&E(d,h,p,A);break;case lt:ln(f,d,h,p,v,x,A,y,w);break;default:I&1?H(f,d,h,p,v,x,A,y,w):I&6?fn(f,d,h,p,v,x,A,y,w):(I&64||I&128)&&b.process(f,d,h,p,v,x,A,y,w,ye)}O!=null&&v&&Fr(O,f&&f.ref,x,d||f,!d)},z=(f,d,h,p)=>{if(f==null)r(d.el=s(d.children),h,p);else{const v=d.el=f.el;d.children!==f.children&&c(v,d.children)}},_=(f,d,h,p)=>{f==null?r(d.el=l(d.children||""),h,p):d.el=f.el},E=(f,d,h,p)=>{[f.el,f.anchor]=j(f.children,d,h,p,f.el,f.anchor)},P=({el:f,anchor:d},h,p)=>{let v;for(;f&&f!==d;)v=g(f),r(f,h,p),f=v;r(d,h,p)},$=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=g(f),a(f),f=h;a(d)},H=(f,d,h,p,v,x,A,y,w)=>{d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),f==null?L(d,h,p,v,x,A,y,w):wt(f,d,v,x,A,y,w)},L=(f,d,h,p,v,x,A,y)=>{let w,b;const{props:O,shapeFlag:I,transition:T,dirs:M}=f;if(w=f.el=o(f.type,x,O&&O.is,O),I&8?u(w,f.children):I&16&&ht(f.children,w,null,p,v,vr(f,x),A,y),M&&ie(f,null,p,"created"),Q(w,f,f.scopeId,A,p),O){for(const Y in O)Y!=="value"&&!Cn(Y)&&i(w,Y,null,O[Y],x,f.children,p,v,$t);"value"in O&&i(w,"value",null,O.value,x),(b=O.onVnodeBeforeMount)&&Nt(b,p,f)}M&&ie(f,null,p,"beforeMount");const D=Jl(v,T);D&&T.beforeEnter(w),r(w,d,h),((b=O&&O.onVnodeMounted)||D||M)&&vt(()=>{b&&Nt(b,p,f),D&&T.enter(w),M&&ie(f,null,p,"mounted")},v)},Q=(f,d,h,p,v)=>{if(h&&k(f,h),p)for(let x=0;x<p.length;x++)k(f,p[x]);if(v){let x=v.subTree;if(d===x){const A=v.vnode;Q(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},ht=(f,d,h,p,v,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const O=f[b]=y?qt(f[b]):Mt(f[b]);N(null,O,d,h,p,v,x,A,y)}},wt=(f,d,h,p,v,x,A)=>{const y=d.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:O}=d;w|=f.patchFlag&16;const I=f.props||q,T=d.props||q;let M;if(h&&oe(h,!1),(M=T.onVnodeBeforeUpdate)&&Nt(M,h,d,f),O&&ie(d,f,h,"beforeUpdate"),h&&oe(h,!0),b?jt(f.dynamicChildren,b,y,h,p,vr(d,v),x):A||W(f,d,y,null,h,p,vr(d,v),x,!1),w>0){if(w&16)Fe(y,d,I,T,h,p,v);else if(w&2&&I.class!==T.class&&i(y,"class",null,T.class,v),w&4&&i(y,"style",I.style,T.style,v),w&8){const D=d.dynamicProps;for(let Y=0;Y<D.length;Y++){const G=D[Y],at=I[G],kt=T[G];(kt!==at||G==="value")&&i(y,G,at,kt,v,f.children,h,p,$t)}}w&1&&f.children!==d.children&&u(y,d.children)}else!A&&b==null&&Fe(y,d,I,T,h,p,v);((M=T.onVnodeUpdated)||O)&&vt(()=>{M&&Nt(M,h,d,f),O&&ie(d,f,h,"updated")},p)},jt=(f,d,h,p,v,x,A)=>{for(let y=0;y<d.length;y++){const w=f[y],b=d[y],O=w.el&&(w.type===lt||!$e(w,b)||w.shapeFlag&70)?m(w.el):h;N(w,b,O,null,p,v,x,A,!0)}},Fe=(f,d,h,p,v,x,A)=>{if(h!==p){if(h!==q)for(const y in h)!Cn(y)&&!(y in p)&&i(f,y,h[y],null,A,d.children,v,x,$t);for(const y in p){if(Cn(y))continue;const w=p[y],b=h[y];w!==b&&y!=="value"&&i(f,y,b,w,A,d.children,v,x,$t)}"value"in p&&i(f,"value",h.value,p.value,A)}},ln=(f,d,h,p,v,x,A,y,w)=>{const b=d.el=f?f.el:s(""),O=d.anchor=f?f.anchor:s("");let{patchFlag:I,dynamicChildren:T,slotScopeIds:M}=d;M&&(y=y?y.concat(M):M),f==null?(r(b,h,p),r(O,h,p),ht(d.children||[],h,O,v,x,A,y,w)):I>0&&I&64&&T&&f.dynamicChildren?(jt(f.dynamicChildren,T,h,v,x,A,y),(d.key!=null||v&&d===v.subTree)&&To(f,d,!0)):W(f,d,h,O,v,x,A,y,w)},fn=(f,d,h,p,v,x,A,y,w)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?v.ctx.activate(d,h,p,A,w):or(d,h,p,v,x,A,w):Ta(f,d,w)},or=(f,d,h,p,v,x,A)=>{const y=f.component=lf(f,p,v);if(xo(f)&&(y.ctx.renderer=ye),ff(y),y.asyncDep){if(v&&v.registerDep(y,ut),!f.el){const w=y.subTree=it(he);_(null,w,d,h)}}else ut(y,f,d,h,v,x,A)},Ta=(f,d,h)=>{const p=d.component=f.component;if(dl(f,d,h))if(p.asyncDep&&!p.asyncResolved){J(p,d,h);return}else p.next=d,rl(p.update),p.effect.dirty=!0,p.update();else d.el=f.el,p.vnode=d},ut=(f,d,h,p,v,x,A)=>{const y=()=>{if(f.isMounted){let{next:O,bu:I,u:T,parent:M,vnode:D}=f;{const xe=Io(f);if(xe){O&&(O.el=D.el,J(f,O,A)),xe.asyncDep.then(()=>{f.isUnmounted||y()});return}}let Y=O,G;oe(f,!1),O?(O.el=D.el,J(f,O,A)):O=D,I&&ur(I),(G=O.props&&O.props.onVnodeBeforeUpdate)&&Nt(G,M,O,D),oe(f,!0);const at=mr(f),kt=f.subTree;f.subTree=at,N(kt,at,m(kt.el),un(kt),f,v,x),O.el=at.el,Y===null&&ml(f,at.el),T&&vt(T,v),(G=O.props&&O.props.onVnodeUpdated)&&vt(()=>Nt(G,M,O,D),v)}else{let O;const{el:I,props:T}=d,{bm:M,m:D,parent:Y}=f,G=Pn(d);if(oe(f,!1),M&&ur(M),!G&&(O=T&&T.onVnodeBeforeMount)&&Nt(O,Y,d),oe(f,!0),I&&fr){const at=()=>{f.subTree=mr(f),fr(I,f.subTree,f,v,null)};G?d.type.__asyncLoader().then(()=>!f.isUnmounted&&at()):at()}else{const at=f.subTree=mr(f);N(null,at,h,p,f,v,x),d.el=at.el}if(D&&vt(D,v),!G&&(O=T&&T.onVnodeMounted)){const at=d;vt(()=>Nt(O,Y,at),v)}(d.shapeFlag&256||Y&&Pn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&vt(f.a,v),f.isMounted=!0,d=h=p=null}},w=f.effect=new ra(y,_t,()=>da(b),f.scope),b=f.update=()=>{w.dirty&&w.run()};b.id=f.uid,oe(f,!0),b()},J=(f,d,h)=>{d.component=f;const p=f.vnode.props;f.vnode=d,f.next=null,Wl(f,d.props,p,h),Gl(f,d.children,h),ge(),Ya(f),be()},W=(f,d,h,p,v,x,A,y,w=!1)=>{const b=f&&f.children,O=f?f.shapeFlag:0,I=d.children,{patchFlag:T,shapeFlag:M}=d;if(T>0){if(T&128){cn(b,I,h,p,v,x,A,y,w);return}else if(T&256){re(b,I,h,p,v,x,A,y,w);return}}M&8?(O&16&&$t(b,v,x),I!==b&&u(h,I)):O&16?M&16?cn(b,I,h,p,v,x,A,y,w):$t(b,v,x,!0):(O&8&&u(h,""),M&16&&ht(I,h,p,v,x,A,y,w))},re=(f,d,h,p,v,x,A,y,w)=>{f=f||Se,d=d||Se;const b=f.length,O=d.length,I=Math.min(b,O);let T;for(T=0;T<I;T++){const M=d[T]=w?qt(d[T]):Mt(d[T]);N(f[T],M,h,null,v,x,A,y,w)}b>O?$t(f,v,x,!0,!1,I):ht(d,h,p,v,x,A,y,w,I)},cn=(f,d,h,p,v,x,A,y,w)=>{let b=0;const O=d.length;let I=f.length-1,T=O-1;for(;b<=I&&b<=T;){const M=f[b],D=d[b]=w?qt(d[b]):Mt(d[b]);if($e(M,D))N(M,D,h,null,v,x,A,y,w);else break;b++}for(;b<=I&&b<=T;){const M=f[I],D=d[T]=w?qt(d[T]):Mt(d[T]);if($e(M,D))N(M,D,h,null,v,x,A,y,w);else break;I--,T--}if(b>I){if(b<=T){const M=T+1,D=M<O?d[M].el:p;for(;b<=T;)N(null,d[b]=w?qt(d[b]):Mt(d[b]),h,D,v,x,A,y,w),b++}}else if(b>T)for(;b<=I;)Tt(f[b],v,x,!0),b++;else{const M=b,D=b,Y=new Map;for(b=D;b<=T;b++){const yt=d[b]=w?qt(d[b]):Mt(d[b]);yt.key!=null&&Y.set(yt.key,b)}let G,at=0;const kt=T-D+1;let xe=!1,Ma=0;const je=new Array(kt);for(b=0;b<kt;b++)je[b]=0;for(b=M;b<=I;b++){const yt=f[b];if(at>=kt){Tt(yt,v,x,!0);continue}let It;if(yt.key!=null)It=Y.get(yt.key);else for(G=D;G<=T;G++)if(je[G-D]===0&&$e(yt,d[G])){It=G;break}It===void 0?Tt(yt,v,x,!0):(je[It-D]=b+1,It>=Ma?Ma=It:xe=!0,N(yt,d[It],h,null,v,x,A,y,w),at++)}const Ra=xe?Zl(je):Se;for(G=Ra.length-1,b=kt-1;b>=0;b--){const yt=D+b,It=d[yt],La=yt+1<O?d[yt+1].el:p;je[b]===0?N(null,It,h,La,v,x,A,y,w):xe&&(G<0||b!==Ra[G]?ae(It,h,La,2):G--)}}},ae=(f,d,h,p,v=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){ae(f.component.subTree,d,h,p);return}if(b&128){f.suspense.move(d,h,p);return}if(b&64){A.move(f,d,h,ye);return}if(A===lt){r(x,d,h);for(let I=0;I<w.length;I++)ae(w[I],d,h,p);r(f.anchor,d,h);return}if(A===gr){P(f,d,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(x),r(x,d,h),vt(()=>y.enter(x),v);else{const{leave:I,delayLeave:T,afterLeave:M}=y,D=()=>r(x,d,h),Y=()=>{I(x,()=>{D(),M&&M()})};T?T(x,D,Y):Y()}else r(x,d,h)},Tt=(f,d,h,p=!1,v=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:O,patchFlag:I,dirs:T}=f;if(y!=null&&Fr(y,null,h,f,!0),O&256){d.ctx.deactivate(f);return}const M=O&1&&T,D=!Pn(f);let Y;if(D&&(Y=A&&A.onVnodeBeforeUnmount)&&Nt(Y,d,f),O&6)hs(f.component,h,p);else{if(O&128){f.suspense.unmount(h,p);return}M&&ie(f,null,d,"beforeUnmount"),O&64?f.type.remove(f,d,h,v,ye,p):b&&(x!==lt||I>0&&I&64)?$t(b,d,h,!1,!0):(x===lt&&I&384||!v&&O&16)&&$t(w,d,h),p&&Ia(f)}(D&&(Y=A&&A.onVnodeUnmounted)||M)&&vt(()=>{Y&&Nt(Y,d,f),M&&ie(f,null,d,"unmounted")},h)},Ia=f=>{const{type:d,el:h,anchor:p,transition:v}=f;if(d===lt){ms(h,p);return}if(d===gr){$(f);return}const x=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:y}=v,w=()=>A(h,x);y?y(f.el,x,w):w()}else x()},ms=(f,d)=>{let h;for(;f!==d;)h=g(f),a(f),f=h;a(d)},hs=(f,d,h)=>{const{bum:p,scope:v,update:x,subTree:A,um:y}=f;p&&ur(p),v.stop(),x&&(x.active=!1,Tt(A,f,d,h)),y&&vt(y,d),vt(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},$t=(f,d,h,p=!1,v=!1,x=0)=>{for(let A=x;A<f.length;A++)Tt(f[A],d,h,p,v)},un=f=>f.shapeFlag&6?un(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el);let sr=!1;const Na=(f,d,h)=>{f==null?d._vnode&&Tt(d._vnode,null,null,!0):N(d._vnode||null,f,d,null,null,null,h),sr||(sr=!0,Ya(),ho(),sr=!1),d._vnode=f},ye={p:N,um:Tt,m:ae,r:Ia,mt:or,mc:ht,pc:W,pbc:jt,n:un,o:t};let lr,fr;return e&&([lr,fr]=e(ye)),{render:Na,hydrate:lr,createApp:Hl(Na,lr)}}function vr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function oe({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Jl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function To(t,e,n=!1){const r=t.children,a=e.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qt(a[i]),s.el=o.el),n||To(o,s)),s.type===Qn&&(s.el=o.el)}}function Zl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Io(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Io(e)}const Ql=t=>t.__isTeleport,lt=Symbol.for("v-fgt"),Qn=Symbol.for("v-txt"),he=Symbol.for("v-cmt"),gr=Symbol.for("v-stc"),Ye=[];let Ot=null;function tt(t=!1){Ye.push(Ot=t?null:[])}function tf(){Ye.pop(),Ot=Ye[Ye.length-1]||null}let Xe=1;function ei(t){Xe+=t}function No(t){return t.dynamicChildren=Xe>0?Ot||Se:null,tf(),Xe>0&&Ot&&Ot.push(t),t}function gt(t,e,n,r,a,i){return No(et(t,e,n,r,a,i,!0))}function _e(t,e,n,r,a){return No(it(t,e,n,r,a,!0))}function jr(t){return t?t.__v_isVNode===!0:!1}function $e(t,e){return t.type===e.type&&t.key===e.key}const tr="__vInternal",Mo=({key:t})=>t??null,In=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||mt(t)||F(t)?{i:St,r:t,k:e,f:!!n}:t:null);function et(t,e=null,n=null,r=0,a=null,i=t===lt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mo(e),ref:e&&In(e),scopeId:Jn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:St};return s?(pa(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Xe>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const it=ef;function ef(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===pl)&&(t=he),jr(t)){const s=Ie(t,e,!0);return n&&pa(s,n),Xe>0&&!i&&Ot&&(s.shapeFlag&6?Ot[Ot.indexOf(t)]=s:Ot.push(s)),s.patchFlag|=-2,s}if(hf(t)&&(t=t.__vccOpts),e){e=nf(e);let{class:s,style:l}=e;s&&!nt(s)&&(e.class=Ct(s)),X(l)&&(oo(l)&&!R(l)&&(l=st({},l)),e.style=na(l))}const o=nt(t)?1:gl(t)?128:Ql(t)?64:X(t)?4:F(t)?2:0;return et(t,e,n,r,a,o,i,!0)}function nf(t){return t?oo(t)||tr in t?st({},t):t:null}function Ie(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?af(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Mo(s),ref:e&&e.ref?n&&a?R(a)?a.concat(In(e)):[a,In(e)]:In(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ie(t.ssContent),ssFallback:t.ssFallback&&Ie(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function rf(t=" ",e=0){return it(Qn,null,t,e)}function bn(t="",e=!1){return e?(tt(),_e(he,null,t)):it(he,null,t)}function Mt(t){return t==null||typeof t=="boolean"?it(he):R(t)?it(lt,null,t.slice()):typeof t=="object"?qt(t):it(Qn,null,String(t))}function qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ie(t)}function pa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(R(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),pa(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(tr in e)?e._ctx=St:a===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:St},n=32):(e=String(e),r&64?(n=16,e=[rf(e)]):n=8);t.children=e,t.shapeFlag|=n}function af(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=Ct([e.class,r.class]));else if(a==="style")e.style=na([e.style,r.style]);else if(Yn(a)){const i=e[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function Nt(t,e,n,r=null){Pt(t,e,7,[n,r])}const of=Ao();let sf=0;function lf(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||of,i={uid:sf++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Es(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oo(r,a),emitsOptions:vo(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ol.bind(null,i),t.ce&&t.ce(i),i}let ct=null,Dn,$r;{const t=Wi(),e=(n,r)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};Dn=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),$r=e("__VUE_SSR_SETTERS__",n=>er=n)}const nn=t=>{const e=ct;return Dn(t),t.scope.on(),()=>{t.scope.off(),Dn(e)}},ni=()=>{ct&&ct.scope.off(),Dn(null)};function Ro(t){return t.vnode.shapeFlag&4}let er=!1;function ff(t,e=!1){e&&$r(e);const{props:n,children:r}=t.vnode,a=Ro(t);Yl(t,n,a,e),Vl(t,r);const i=a?cf(t,e):void 0;return e&&$r(!1),i}function cf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=so(new Proxy(t.ctx,Ll));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?df(t):null,i=nn(t);ge();const o=Zt(r,t,0,[t.props,a]);if(be(),i(),Hi(o)){if(o.then(ni,ni),e)return o.then(s=>{ri(t,s,e)}).catch(s=>{qn(s,t,0)});t.asyncDep=o}else ri(t,o,e)}else Lo(t,e)}function ri(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:X(e)&&(t.setupState=co(e)),Lo(t,n)}let ai;function Lo(t,e,n){const r=t.type;if(!t.render){if(!e&&ai&&!r.render){const a=r.template||ma(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=st(st({isCustomElement:i,delimiters:s},o),l);r.render=ai(a,c)}}t.render=r.render||_t}{const a=nn(t);ge();try{Fl(t)}finally{be(),a()}}}function uf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return bt(t,"get","$attrs"),e[n]}}))}function df(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return uf(t)},slots:t.slots,emit:t.emit,expose:e}}function va(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(co(so(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Be)return Be[n](t)},has(e,n){return n in e||n in Be}}))}function mf(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function hf(t){return F(t)&&"__vccOpts"in t}const se=(t,e)=>Xs(t,e,er);function pf(t,e,n){const r=arguments.length;return r===2?X(e)&&!R(e)?jr(e)?it(t,null,[e]):it(t,e):it(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jr(n)&&(n=[n]),it(t,e,n))}const vf="3.4.13";/**
* @vue/runtime-dom v3.4.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const gf="http://www.w3.org/2000/svg",bf="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,ii=Xt&&Xt.createElement("template"),yf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e==="svg"?Xt.createElementNS(gf,t):e==="mathml"?Xt.createElementNS(bf,t):Xt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ii.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=ii.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xf=Symbol("_vtc");function wf(t,e,n){const r=t[xf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _f=Symbol("_vod"),kf=Symbol("");function Af(t,e,n){const r=t.style,a=r.display,i=nt(n);if(n&&!i){if(e&&!nt(e))for(const o in e)n[o]==null&&Dr(r,o,"");for(const o in n)Dr(r,o,n[o])}else if(i){if(e!==n){const o=r[kf];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");_f in t&&(r.display=a)}const oi=/\s*!important$/;function Dr(t,e,n){if(R(n))n.forEach(r=>Dr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Sf(t,e);oi.test(n)?t.setProperty(Re(r),n.replace(oi,""),"important"):t[r]=n}}const si=["Webkit","Moz","ms"],br={};function Sf(t,e){const n=br[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return br[e]=r;r=Vn(r);for(let a=0;a<si.length;a++){const i=si[a]+r;if(i in t)return br[e]=i}return e}const li="http://www.w3.org/1999/xlink";function Of(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(li,e.slice(6,e.length)):t.setAttributeNS(li,e,n);else{const i=Os(e);n==null||i&&!Ki(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ef(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ki(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Cf(t,e,n,r){t.addEventListener(e,n,r)}function Pf(t,e,n,r){t.removeEventListener(e,n,r)}const fi=Symbol("_vei");function Tf(t,e,n,r,a=null){const i=t[fi]||(t[fi]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=If(e);if(r){const c=i[e]=Rf(r,a);Cf(t,s,c,l)}else o&&(Pf(t,s,o,l),i[e]=void 0)}}const ci=/(?:Once|Passive|Capture)$/;function If(t){let e;if(ci.test(t)){e={};let r;for(;r=t.match(ci);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Re(t.slice(2)),e]}let yr=0;const Nf=Promise.resolve(),Mf=()=>yr||(Nf.then(()=>yr=0),yr=Date.now());function Rf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pt(Lf(r,n.value),e,5,[r])};return n.value=t,n.attached=Mf(),n}function Lf(t,e){if(R(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const ui=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ff=(t,e,n,r,a,i,o,s,l)=>{const c=a==="svg";e==="class"?wf(t,r,c):e==="style"?Af(t,n,r):Yn(e)?Qr(e)||Tf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jf(t,e,r,c))?Ef(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Of(t,e,r,c))};function jf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ui(e)&&F(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return ui(e)&&nt(n)?!1:e in t}const $f=["ctrl","shift","alt","meta"],Df={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$f.some(n=>t[`${n}Key`]&&!e.includes(n))},zf=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(a,...i)=>{for(let o=0;o<e.length;o++){const s=Df[e[o]];if(s&&s(a,e))return}return t(a,...i)})},Uf=st({patchProp:Ff},yf);let di;function Hf(){return di||(di=ql(Uf))}const Bf=(...t)=>{const e=Hf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=Wf(r);if(!a)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,Yf(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function Yf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Wf(t){return nt(t)?document.querySelector(t):t}const rn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},Kf={class:"taskCard"},Vf={class:"controls"},Gf={__name:"TaskCard",props:{title:String,desc:String,date:String,completed:Boolean,onCheck:Function,onDelete:Function},setup(t){const e=t,n=new Date,r=new Date(e.date),a=new Date(e.date);a.setDate(a.getDate()-1);const i=fe(e.completed);return(o,s)=>{const l=hl("font-awesome-icon");return tt(),gt("div",Kf,[et("div",Vf,[et("button",{class:Ct(["checkmark",{checked:i.value,unchecked:!i.value}]),onClick:s[0]||(s[0]=()=>{i.value=!i.value,t.onCheck(i.value)})},[it(l,{icon:"fa-solid fa-check"})],2),et("button",{type:"button",onClick:s[1]||(s[1]=(...c)=>t.onDelete&&t.onDelete(...c))},[it(l,{icon:"fa-solid fa-trash-can"})])]),et("div",{class:Ct({ruled:i.value})},[et("h2",null,Ue(t.title),1),et("p",null,Ue(t.desc),1),et("p",{class:Ct({safe:ot(n)<ot(a),warn:ot(n)<=ot(r)&&ot(n)>ot(a),danger:ot(n)>ot(r)})},Ue(t.date),3)],2)])}}},xr=rn(Gf,[["__scopeId","data-v-bbd3b066"]]),qf={class:"box"},Xf=["for"],Jf=["id","required"],Zf={__name:"DateInput",props:{name:String,update:Function,label:String,variant:String,required:Boolean},setup(t){return(e,n)=>(tt(),gt("div",qf,[et("label",{for:t.name},Ue(t.label||""),9,Xf),et("input",{onInput:n[0]||(n[0]=(...r)=>t.update&&t.update(...r)),class:Ct(t.variant),type:"date",id:t.name,required:t.required},null,42,Jf)]))}},Qf=rn(Zf,[["__scopeId","data-v-82441b96"]]),tc={class:"box"},ec=["for"],nc=["placeholder","id","required"],rc={__name:"TextInput",props:{name:String,update:Function,label:String,placeholder:String,variant:String,required:Boolean},setup(t){return(e,n)=>(tt(),gt("div",tc,[et("label",{for:t.name},Ue(t.label||""),9,ec),et("input",{onInput:n[0]||(n[0]=(...r)=>t.update&&t.update(...r)),class:Ct(t.variant),type:"text",placeholder:t.placeholder,id:t.name,required:t.required||!1},null,42,nc)]))}},mi=rn(rc,[["__scopeId","data-v-e85b3555"]]),ac=t=>(sl("data-v-858a4617"),t=t(),ll(),t),ic={class:"controls"},oc=ac(()=>et("button",{type:"submit"},"Add task",-1)),sc={__name:"AddTask",props:{addTask:Function},setup(t){const e=fe(null);let n={title:"",desc:"",date:"",completed:!1,stamp:""};return(r,a)=>(tt(),gt("form",{ref:e.value,class:"addTask",onSubmit:a[0]||(a[0]=zf(i=>{ot(n).stamp=new Date().valueOf(),t.addTask(ot(n)),mt(n)?n.value={title:"",desc:"",date:"",completed:!1,stamp:""}:n={title:"",desc:"",date:"",completed:!1,stamp:""},i.target.reset()},["prevent"]))},[it(mi,{val:ot(n).title,update:i=>ot(n).title=i.target.value,label:"",placeholder:"Title",name:"title",variant:"center",required:""},null,8,["val","update"]),it(mi,{val:ot(n).desc,update:i=>ot(n).desc=i.target.value,label:"",placeholder:"Description",name:"desc",variant:"center"},null,8,["val","update"]),et("div",ic,[it(Qf,{val:ot(n).date,update:i=>ot(n).date=i.target.value,label:"Due date",variant:"center",name:"dueDate"},null,8,["val","update"]),oc])],544))}},lc=rn(sc,[["__scopeId","data-v-858a4617"]]),fc={class:"todo"},cc={class:"tabs"},uc={key:1,class:"info"},dc={key:1,class:"info"},mc={__name:"ToDo",props:{tasks:Array,deleteTask:Function,addTask:Function,onCheck:Function},setup(t){const e=t,n=fe("todo"),r=fe(!0),a=fe(0),i=fe(0);return He(r,()=>{let o=0,s=0;for(let l=0;l<e.tasks.length;l++)e.tasks[l].completed&&o++;s=e.tasks.length-o,a.value=o,i.value=s}),r.value=!r.value,(o,s)=>(tt(),gt("div",fc,[et("div",cc,[et("button",{type:"button",class:Ct({active:n.value==="todo"}),onClick:s[0]||(s[0]=()=>n.value="todo")}," To-Do ",2),et("button",{type:"button",class:Ct({active:n.value==="completed"}),onClick:s[1]||(s[1]=()=>n.value="completed")}," Completed ",2),et("button",{type:"button",class:Ct({active:n.value==="incomplete"}),onClick:s[2]||(s[2]=()=>n.value="incomplete")}," Incomplete ",2)]),n.value==="todo"?(tt(),_e(lc,{key:0,addTask:l=>{t.addTask(l),r.value=!r.value}},null,8,["addTask"])):bn("",!0),n.value==="todo"?(tt(!0),gt(lt,{key:1},hr(e.tasks,l=>(tt(),_e(xr,{key:l.id,title:l.title,desc:l.desc,date:l.date,completed:l.completed,"on-check":c=>{t.onCheck(l,c),r.value=!r.value},"on-delete":()=>{t.deleteTask(l),r.value=!r.value}},null,8,["title","desc","date","completed","on-check","on-delete"]))),128)):n.value==="completed"?(tt(),gt(lt,{key:2},[a.value>0?(tt(!0),gt(lt,{key:0},hr(e.tasks,l=>(tt(),gt(lt,{key:l.id},[l.completed?(tt(),_e(xr,{key:0,title:l.title,desc:l.desc,date:l.date,completed:l.completed,"on-check":c=>{t.onCheck(l,c),r.value=!r.value},"on-delete":()=>{t.deleteTask(l),r.value=!r.value}},null,8,["title","desc","date","completed","on-check","on-delete"])):bn("",!0)],64))),128)):(tt(),gt("h3",uc,"No completed tasks"))],64)):n.value==="incomplete"?(tt(),gt(lt,{key:3},[i.value>0?(tt(!0),gt(lt,{key:0},hr(e.tasks,l=>(tt(),gt(lt,{key:l.id},[l.completed?bn("",!0):(tt(),_e(xr,{key:0,title:l.title,desc:l.desc,date:l.date,completed:l.completed,"on-check":c=>{t.onCheck(l,c),r.value=!r.value},"on-delete":()=>{t.deleteTask(l),r.value=!r.value}},null,8,["title","desc","date","completed","on-check","on-delete"]))],64))),128)):(tt(),gt("h3",dc,"No incomplete tasks"))],64)):bn("",!0)]))}},hc=rn(mc,[["__scopeId","data-v-7f5aee32"]]),pc={__name:"App",setup(t){const e=localStorage.getItem("tasks"),n=JSON.parse(e),r=fe(n||[]);function a(s){r.value=r.value.filter(l=>l!==s),localStorage.setItem("tasks",JSON.stringify(r.value))}function i(s){r.value.push(s),localStorage.setItem("tasks",JSON.stringify(r.value))}function o(s,l){const c=r.value.findIndex(u=>u===s);r.value[c].completed=l,localStorage.setItem("tasks",JSON.stringify(r.value))}return(s,l)=>(tt(),_e(hc,{tasks:r.value,"delete-task":a,"add-task":i,"on-check":o},null,8,["tasks"]))}};function hi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?hi(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):hi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zn(t){"@babel/helpers - typeof";return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zn(t)}function vc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function gc(t,e,n){return e&&pi(t.prototype,e),n&&pi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ga(t,e){return yc(t)||wc(t,e)||Fo(t,e)||kc()}function an(t){return bc(t)||xc(t)||Fo(t)||_c()}function bc(t){if(Array.isArray(t))return zr(t)}function yc(t){if(Array.isArray(t))return t}function xc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Fo(t,e){if(t){if(typeof t=="string")return zr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zr(t,e)}}function zr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vi=function(){},ba={},jo={},$o=null,Do={mark:vi,measure:vi};try{typeof window<"u"&&(ba=window),typeof document<"u"&&(jo=document),typeof MutationObserver<"u"&&($o=MutationObserver),typeof performance<"u"&&(Do=performance)}catch{}var Ac=ba.navigator||{},gi=Ac.userAgent,bi=gi===void 0?"":gi,te=ba,V=jo,yi=$o,yn=Do;te.document;var Wt=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",zo=~bi.indexOf("MSIE")||~bi.indexOf("Trident/"),xn,wn,_n,kn,An,Ut="___FONT_AWESOME___",Ur=16,Uo="fa",Ho="svg-inline--fa",pe="data-fa-i2svg",Hr="data-fa-pseudo-element",Sc="data-fa-pseudo-element-pending",ya="data-prefix",xa="data-icon",xi="fontawesome-i2svg",Oc="async",Ec=["HTML","HEAD","STYLE","SCRIPT"],Bo=function(){try{return!0}catch{return!1}}(),K="classic",Z="sharp",wa=[K,Z];function on(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[K]}})}var Je=on((xn={},rt(xn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(xn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),xn)),Ze=on((wn={},rt(wn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(wn,Z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),wn)),Qe=on((_n={},rt(_n,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(_n,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_n)),Cc=on((kn={},rt(kn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(kn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),kn)),Pc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Yo="fa-layers-text",Tc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ic=on((An={},rt(An,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(An,Z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),An)),Wo=[1,2,3,4,5,6,7,8,9,10],Nc=Wo.concat([11,12,13,14,15,16,17,18,19,20]),Mc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ce={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tn=new Set;Object.keys(Ze[K]).map(tn.add.bind(tn));Object.keys(Ze[Z]).map(tn.add.bind(tn));var Rc=[].concat(wa,an(tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ce.GROUP,ce.SWAP_OPACITY,ce.PRIMARY,ce.SECONDARY]).concat(Wo.map(function(t){return"".concat(t,"x")})).concat(Nc.map(function(t){return"w-".concat(t)})),We=te.FontAwesomeConfig||{};function Lc(t){var e=V.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Fc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(V&&typeof V.querySelector=="function"){var jc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jc.forEach(function(t){var e=ga(t,2),n=e[0],r=e[1],a=Fc(Lc(n));a!=null&&(We[r]=a)})}var Ko={styleDefault:"solid",familyDefault:"classic",cssPrefix:Uo,replacementClass:Ho,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};We.familyPrefix&&(We.cssPrefix=We.familyPrefix);var Ne=S(S({},Ko),We);Ne.autoReplaceSvg||(Ne.observeMutations=!1);var C={};Object.keys(Ko).forEach(function(t){Object.defineProperty(C,t,{enumerable:!0,set:function(n){Ne[t]=n,Ke.forEach(function(r){return r(C)})},get:function(){return Ne[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(e){Ne.cssPrefix=e,Ke.forEach(function(n){return n(C)})},get:function(){return Ne.cssPrefix}});te.FontAwesomeConfig=C;var Ke=[];function $c(t){return Ke.push(t),function(){Ke.splice(Ke.indexOf(t),1)}}var Vt=Ur,Lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dc(t){if(!(!t||!Wt)){var e=V.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(e,r),t}}var zc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function en(){for(var t=12,e="";t-- >0;)e+=zc[Math.random()*62|0];return e}function Le(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _a(t){return t.classList?Le(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Vo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Uc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Vo(t[n]),'" ')},"").trim()}function nr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ka(t){return t.size!==Lt.size||t.x!==Lt.x||t.y!==Lt.y||t.rotate!==Lt.rotate||t.flipX||t.flipY}function Hc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Bc(t){var e=t.transform,n=t.width,r=n===void 0?Ur:n,a=t.height,i=a===void 0?Ur:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&zo?l+="translate(".concat(e.x/Vt-r/2,"em, ").concat(e.y/Vt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Vt,"em), calc(-50% + ").concat(e.y/Vt,"em)) "):l+="translate(".concat(e.x/Vt,"em, ").concat(e.y/Vt,"em) "),l+="scale(".concat(e.size/Vt*(e.flipX?-1:1),", ").concat(e.size/Vt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Yc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Go(){var t=Uo,e=Ho,n=C.cssPrefix,r=C.replacementClass,a=Yc;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var wi=!1;function wr(){C.autoAddCss&&!wi&&(Dc(Go()),wi=!0)}var Wc={mixout:function(){return{dom:{css:Go,insertCss:wr}}},hooks:function(){return{beforeDOMElementCreation:function(){wr()},beforeI2svg:function(){wr()}}}},Ht=te||{};Ht[Ut]||(Ht[Ut]={});Ht[Ut].styles||(Ht[Ut].styles={});Ht[Ut].hooks||(Ht[Ut].hooks={});Ht[Ut].shims||(Ht[Ut].shims=[]);var Et=Ht[Ut],qo=[],Kc=function t(){V.removeEventListener("DOMContentLoaded",t),Un=1,qo.map(function(e){return e()})},Un=!1;Wt&&(Un=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),Un||V.addEventListener("DOMContentLoaded",Kc));function Vc(t){Wt&&(Un?setTimeout(t,0):qo.push(t))}function sn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Vo(t):"<".concat(e," ").concat(Uc(r),">").concat(i.map(sn).join(""),"</").concat(e,">")}function _i(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Gc=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},_r=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?Gc(n,a):n,l,c,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,e[c],c,e);return u};function qc(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Br(t){var e=qc(t);return e.length===1?e[0].toString(16):null}function Xc(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ki(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Yr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ki(e);typeof Et.hooks.addPack=="function"&&!a?Et.hooks.addPack(t,ki(e)):Et.styles[t]=S(S({},Et.styles[t]||{}),i),t==="fas"&&Yr("fa",e)}var Sn,On,En,ke=Et.styles,Jc=Et.shims,Zc=(Sn={},rt(Sn,K,Object.values(Qe[K])),rt(Sn,Z,Object.values(Qe[Z])),Sn),Aa=null,Xo={},Jo={},Zo={},Qo={},ts={},Qc=(On={},rt(On,K,Object.keys(Je[K])),rt(On,Z,Object.keys(Je[Z])),On);function tu(t){return~Rc.indexOf(t)}function eu(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!tu(a)?a:null}var es=function(){var e=function(i){return _r(ke,function(o,s,l){return o[l]=_r(s,i,{}),o},{})};Xo=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Jo=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ts=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ke||C.autoFetchSvg,r=_r(Jc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Zo=r.names,Qo=r.unicodes,Aa=rr(C.styleDefault,{family:C.familyDefault})};$c(function(t){Aa=rr(t.styleDefault,{family:C.familyDefault})});es();function Sa(t,e){return(Xo[t]||{})[e]}function nu(t,e){return(Jo[t]||{})[e]}function ue(t,e){return(ts[t]||{})[e]}function ns(t){return Zo[t]||{prefix:null,iconName:null}}function ru(t){var e=Qo[t],n=Sa("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ee(){return Aa}var Oa=function(){return{prefix:null,iconName:null,rest:[]}};function rr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?K:n,a=Je[r][t],i=Ze[r][t]||Ze[r][a],o=t in Et.styles?t:null;return i||o||null}var Ai=(En={},rt(En,K,Object.keys(Qe[K])),rt(En,Z,Object.keys(Qe[Z])),En);function ar(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},rt(e,K,"".concat(C.cssPrefix,"-").concat(K)),rt(e,Z,"".concat(C.cssPrefix,"-").concat(Z)),e),o=null,s=K;(t.includes(i[K])||t.some(function(c){return Ai[K].includes(c)}))&&(s=K),(t.includes(i[Z])||t.some(function(c){return Ai[Z].includes(c)}))&&(s=Z);var l=t.reduce(function(c,u){var m=eu(C.cssPrefix,u);if(ke[u]?(u=Zc[s].includes(u)?Cc[s][u]:u,o=u,c.prefix=u):Qc[s].indexOf(u)>-1?(o=u,c.prefix=rr(u,{family:s})):m?c.iconName=m:u!==C.replacementClass&&u!==i[K]&&u!==i[Z]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var g=o==="fa"?ns(c.iconName):{},k=ue(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||k||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!ke.far&&ke.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},Oa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(ke.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ue(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ee()||"fas"),l}var au=function(){function t(){vc(this,t),this.definitions={}}return gc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=S(S({},n.definitions[s]||{}),o[s]),Yr(s,o[s]);var l=Qe[K][s];l&&Yr(l,o[s]),es()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),Si=[],Ae={},Pe={},iu=Object.keys(Pe);function ou(t,e){var n=e.mixoutsTo;return Si=t,Ae={},Object.keys(Pe).forEach(function(r){iu.indexOf(r)===-1&&delete Pe[r]}),Si.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ae[o]||(Ae[o]=[]),Ae[o].push(i[o])})}r.provides&&r.provides(Pe)}),n}function Wr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ae[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ve(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=Ae[t]||[];a.forEach(function(i){i.apply(null,n)})}function Bt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Pe[t]?Pe[t].apply(null,e):void 0}function Kr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ee();if(e)return e=ue(n,e)||e,_i(rs.definitions,n,e)||_i(Et.styles,n,e)}var rs=new au,su=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,ve("noAuto")},lu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wt?(ve("beforeI2svg",e),Bt("pseudoElements2svg",e),Bt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Vc(function(){cu({autoReplaceSvgRoot:n}),ve("watch",e)})}},fu={icon:function(e){if(e===null)return null;if(zn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ue(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=rr(e[0]);return{prefix:r,iconName:ue(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(C.cssPrefix,"-"))>-1||e.match(Pc))){var a=ar(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||ee(),iconName:ue(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=ee();return{prefix:i,iconName:ue(i,e)||e}}}},xt={noAuto:su,config:C,dom:lu,parse:fu,library:rs,findIconDefinition:Kr,toHtml:sn},cu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(Et.styles).length>0||C.autoFetchSvg)&&Wt&&C.autoReplaceSvg&&xt.dom.i2svg({node:r})};function ir(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return sn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Wt){var r=V.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function uu(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(ka(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=nr(S(S({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function du(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},a),{},{id:o}),children:r}]}]}function Ea(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,m=t.extra,g=t.watchable,k=g===void 0?!1:g,j=r.found?r:n,N=j.width,z=j.height,_=a==="fak",E=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(wt){return m.classes.indexOf(wt)===-1}).filter(function(wt){return wt!==""||!!wt}).concat(m.classes).join(" "),P={children:[],attributes:S(S({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(z)})},$=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/z*16*.0625,"em")}:{};k&&(P.attributes[pe]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||en())},children:[l]}),delete P.attributes.title);var H=S(S({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:S(S({},$),m.styles)}),L=r.found&&n.found?Bt("generateAbstractMask",H)||{children:[],attributes:{}}:Bt("generateAbstractIcon",H)||{children:[],attributes:{}},Q=L.children,ht=L.attributes;return H.children=Q,H.attributes=ht,s?du(H):uu(H)}function Oi(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=S(S(S({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[pe]="");var u=S({},o.styles);ka(a)&&(u.transform=Bc({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=nr(u);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function mu(t){var e=t.content,n=t.title,r=t.extra,a=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=nr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kr=Et.styles;function Vr(t){var e=t[0],n=t[1],r=t.slice(4),a=ga(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(ce.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ce.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ce.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var hu={found:!1,width:512,height:512};function pu(t,e){!Bo&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gr(t,e){var n=e;return e==="fa"&&C.styleDefault!==null&&(e=ee()),new Promise(function(r,a){if(Bt("missingIconAbstract"),n==="fa"){var i=ns(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&kr[e]&&kr[e][t]){var o=kr[e][t];return r(Vr(o))}pu(t,e),r(S(S({},hu),{},{icon:C.showMissingIcons&&t?Bt("missingIconAbstract")||{}:{}}))})}var Ei=function(){},qr=C.measurePerformance&&yn&&yn.mark&&yn.measure?yn:{mark:Ei,measure:Ei},ze='FA "6.5.1"',vu=function(e){return qr.mark("".concat(ze," ").concat(e," begins")),function(){return as(e)}},as=function(e){qr.mark("".concat(ze," ").concat(e," ends")),qr.measure("".concat(ze," ").concat(e),"".concat(ze," ").concat(e," begins"),"".concat(ze," ").concat(e," ends"))},Ca={begin:vu,end:as},Nn=function(){};function Ci(t){var e=t.getAttribute?t.getAttribute(pe):null;return typeof e=="string"}function gu(t){var e=t.getAttribute?t.getAttribute(ya):null,n=t.getAttribute?t.getAttribute(xa):null;return e&&n}function bu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function yu(){if(C.autoReplaceSvg===!0)return Mn.replace;var t=Mn[C.autoReplaceSvg];return t||Mn.replace}function xu(t){return V.createElementNS("http://www.w3.org/2000/svg",t)}function wu(t){return V.createElement(t)}function is(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?xu:wu:n;if(typeof t=="string")return V.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(is(o,{ceFn:r}))}),a}function _u(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Mn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(is(a),n)}),n.getAttribute(pe)===null&&C.keepOriginalSource){var r=V.createComment(_u(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~_a(n).indexOf(C.replacementClass))return Mn.replace(e);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return sn(s)}).join(`
`);n.setAttribute(pe,""),n.innerHTML=o}};function Pi(t){t()}function os(t,e){var n=typeof e=="function"?e:Nn;if(t.length===0)n();else{var r=Pi;C.mutateApproach===Oc&&(r=te.requestAnimationFrame||Pi),r(function(){var a=yu(),i=Ca.begin("mutate");t.map(a),i(),n()})}}var Pa=!1;function ss(){Pa=!0}function Xr(){Pa=!1}var Hn=null;function Ti(t){if(yi&&C.observeMutations){var e=t.treeCallback,n=e===void 0?Nn:e,r=t.nodeCallback,a=r===void 0?Nn:r,i=t.pseudoElementsCallback,o=i===void 0?Nn:i,s=t.observeMutationsRoot,l=s===void 0?V:s;Hn=new yi(function(c){if(!Pa){var u=ee();Le(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ci(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ci(m.target)&&~Mc.indexOf(m.attributeName))if(m.attributeName==="class"&&gu(m.target)){var g=ar(_a(m.target)),k=g.prefix,j=g.iconName;m.target.setAttribute(ya,k||u),j&&m.target.setAttribute(xa,j)}else bu(m.target)&&a(m.target)})}}),Wt&&Hn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ku(){Hn&&Hn.disconnect()}function Au(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Su(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=ar(_a(t));return a.prefix||(a.prefix=ee()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=nu(a.prefix,t.innerText)||Sa(a.prefix,Br(t.innerText))),!a.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Ou(t){var e=Le(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return C.autoA11y&&(n?e["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||en()):(e["aria-hidden"]="true",e.focusable="false")),e}function Eu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ii(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Su(t),r=n.iconName,a=n.prefix,i=n.rest,o=Ou(t),s=Wr("parseNodeAttributes",{},t),l=e.styleParser?Au(t):[];return S({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Cu=Et.styles;function ls(t){var e=C.autoReplaceSvg==="nest"?Ii(t,{styleParser:!1}):Ii(t);return~e.extra.classes.indexOf(Yo)?Bt("generateLayersText",t,e):Bt("generateSvgReplacementMutation",t,e)}var ne=new Set;wa.map(function(t){ne.add("fa-".concat(t))});Object.keys(Je[K]).map(ne.add.bind(ne));Object.keys(Je[Z]).map(ne.add.bind(ne));ne=an(ne);function Ni(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wt)return Promise.resolve();var n=V.documentElement.classList,r=function(m){return n.add("".concat(xi,"-").concat(m))},a=function(m){return n.remove("".concat(xi,"-").concat(m))},i=C.autoFetchSvg?ne:wa.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Cu));i.includes("fa")||i.push("fa");var o=[".".concat(Yo,":not([").concat(pe,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(pe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Le(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ca.begin("onTree"),c=s.reduce(function(u,m){try{var g=ls(m);g&&u.push(g)}catch(k){Bo||k.name==="MissingIcon"&&console.error(k)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(g){os(g,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(g){l(),m(g)})})}function Pu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ls(t).then(function(n){n&&os([n],e)})}function Tu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Kr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Kr(a||{})),t(r,S(S({},n),{},{mask:a}))}}var Iu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Lt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,g=m===void 0?null:m,k=n.titleId,j=k===void 0?null:k,N=n.classes,z=N===void 0?[]:N,_=n.attributes,E=_===void 0?{}:_,P=n.styles,$=P===void 0?{}:P;if(e){var H=e.prefix,L=e.iconName,Q=e.icon;return ir(S({type:"icon"},e),function(){return ve("beforeDOMElementCreation",{iconDefinition:e,params:n}),C.autoA11y&&(g?E["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||en()):(E["aria-hidden"]="true",E.focusable="false")),Ea({icons:{main:Vr(Q),mask:l?Vr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:L,transform:S(S({},Lt),a),symbol:o,title:g,maskId:u,titleId:j,extra:{attributes:E,styles:$,classes:z}})})}},Nu={mixout:function(){return{icon:Tu(Iu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ni,n.nodeCallback=Pu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return Ni(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,g=r.extra;return new Promise(function(k,j){Promise.all([Gr(a,s),u.iconName?Gr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var z=ga(N,2),_=z[0],E=z[1];k([n,Ea({icons:{main:_,mask:E},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch(j)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=nr(s);l.length>0&&(a.style=l);var c;return ka(o)&&(c=Bt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Mu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ir({type:"layer"},function(){ve("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(an(i)).join(" ")},children:o}]})}}}},Ru={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return ir({type:"counter",content:n},function(){return ve("beforeDOMElementCreation",{content:n,params:r}),mu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(an(s))}})})}}}},Lu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Lt:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,g=r.styles,k=g===void 0?{}:g;return ir({type:"text",content:n},function(){return ve("beforeDOMElementCreation",{content:n,params:r}),Oi({content:n,transform:S(S({},Lt),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(C.cssPrefix,"-layers-text")].concat(an(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(zo){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Oi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Fu=new RegExp('"',"ug"),Mi=[1105920,1112319];function ju(t){var e=t.replace(Fu,""),n=Xc(e,0),r=n>=Mi[0]&&n<=Mi[1],a=e.length===2?e[0]===e[1]:!1;return{value:Br(a?e[0]:e),isSecondary:r||a}}function Ri(t,e){var n="".concat(Sc).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Le(t.children),o=i.filter(function(Q){return Q.getAttribute(Hr)===e})[0],s=te.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Tc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?Z:K,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ze[g][l[2].toLowerCase()]:Ic[g][c],j=ju(m),N=j.value,z=j.isSecondary,_=l[0].startsWith("FontAwesome"),E=Sa(k,N),P=E;if(_){var $=ru(N);$.iconName&&$.prefix&&(E=$.iconName,k=$.prefix)}if(E&&!z&&(!o||o.getAttribute(ya)!==k||o.getAttribute(xa)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);var H=Eu(),L=H.extra;L.attributes[Hr]=e,Gr(E,k).then(function(Q){var ht=Ea(S(S({},H),{},{icons:{main:Q,mask:Oa()},prefix:k,iconName:P,extra:L,watchable:!0})),wt=V.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(wt,t.firstChild):t.appendChild(wt),wt.outerHTML=ht.map(function(jt){return sn(jt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function $u(t){return Promise.all([Ri(t,"::before"),Ri(t,"::after")])}function Du(t){return t.parentNode!==document.head&&!~Ec.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Hr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Li(t){if(Wt)return new Promise(function(e,n){var r=Le(t.querySelectorAll("*")).filter(Du).map($u),a=Ca.begin("searchPseudoElements");ss(),Promise.all(r).then(function(){a(),Xr(),e()}).catch(function(){a(),Xr(),n()})})}var zu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Li,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;C.searchPseudoElements&&Li(a)}}},Fi=!1,Uu={mixout:function(){return{dom:{unwatch:function(){ss(),Fi=!0}}}},hooks:function(){return{bootstrap:function(){Ti(Wr("mutationObserverCallbacks",{}))},noAuto:function(){ku()},watch:function(n){var r=n.observeMutationsRoot;Fi?Xr():Ti(Wr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ji=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Hu={mixout:function(){return{parse:{transform:function(n){return ji(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ji(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},g={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:g};return{tag:"g",attributes:S({},k.outer),children:[{tag:"g",attributes:S({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),k.path)}]}]}}}},Ar={x:0,y:0,width:"100%",height:"100%"};function $i(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Bu(t){return t.tag==="g"?t.children:[t]}var Yu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ar(a.split(" ").map(function(o){return o.trim()})):Oa();return i.prefix||(i.prefix=ee()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,g=o.icon,k=Hc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:S(S({},Ar),{},{fill:"white"})},N=u.children?{children:u.children.map($i)}:{},z={tag:"g",attributes:S({},k.inner),children:[$i(S({tag:u.tag,attributes:S(S({},u.attributes),k.path)},N))]},_={tag:"g",attributes:S({},k.outer),children:[z]},E="mask-".concat(s||en()),P="clip-".concat(s||en()),$={tag:"mask",attributes:S(S({},Ar),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,_]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Bu(g)},$]};return r.push(H,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(E,")")},Ar)}),{children:r,attributes:a}}}},Wu={provides:function(e){var n=!1;te.matchMedia&&(n=te.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=S(S({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:S(S({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:S(S({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ku={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Vu=[Wc,Nu,Mu,Ru,Lu,zu,Uu,Hu,Yu,Wu,Ku];ou(Vu,{mixoutsTo:xt});xt.noAuto;xt.config;var Gu=xt.library;xt.dom;var Jr=xt.parse;xt.findIconDefinition;xt.toHtml;var qu=xt.icon;xt.layer;xt.text;xt.counter;function Di(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Dt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Di(Object(n),!0).forEach(function(r){pt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Di(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bn(t){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bn(t)}function pt(t,e,n){return e=Qu(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xu(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Ju(t,e){if(t==null)return{};var n=Xu(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Zu(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Qu(t){var e=Zu(t,"string");return typeof e=="symbol"?e:String(e)}var td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fs={exports:{}};(function(t){(function(e){var n=function(_,E,P){if(!c(E)||m(E)||g(E)||k(E)||l(E))return E;var $,H=0,L=0;if(u(E))for($=[],L=E.length;H<L;H++)$.push(n(_,E[H],P));else{$={};for(var Q in E)Object.prototype.hasOwnProperty.call(E,Q)&&($[_(Q,P)]=n(_,E[Q],P))}return $},r=function(_,E){E=E||{};var P=E.separator||"_",$=E.split||/(?=[A-Z])/;return _.split($).join(P)},a=function(_){return j(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(E,P){return P?P.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var E=a(_);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(_,E){return r(_,E).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},g=function(_){return s.call(_)=="[object RegExp]"},k=function(_){return s.call(_)=="[object Boolean]"},j=function(_){return _=_-0,_===_},N=function(_,E){var P=E&&"process"in E?E.process:E;return typeof P!="function"?_:function($,H){return P($,_,H)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,E){return n(N(a,E),_)},decamelizeKeys:function(_,E){return n(N(o,E),_,E)},pascalizeKeys:function(_,E){return n(N(i,E),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=z:e.humps=z})(td)})(fs);var ed=fs.exports,nd=["class","style"];function rd(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=ed.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function ad(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function cs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return cs(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=ad(u);break;case"style":l.style=rd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ju(n,nd);return pf(t.tag,Dt(Dt(Dt({},e),{},{class:a.class,style:Dt(Dt({},a.style),o)},a.attrs),s),r)}var us=!1;try{us=!0}catch{}function id(){if(!us&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Sr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?pt({},t,e):{}}function od(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},pt(e,"fa-".concat(t.size),t.size!==null),pt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),pt(e,"fa-pull-".concat(t.pull),t.pull!==null),pt(e,"fa-swap-opacity",t.swapOpacity),pt(e,"fa-bounce",t.bounce),pt(e,"fa-shake",t.shake),pt(e,"fa-beat",t.beat),pt(e,"fa-fade",t.fade),pt(e,"fa-beat-fade",t.beatFade),pt(e,"fa-flash",t.flash),pt(e,"fa-spin-pulse",t.spinPulse),pt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function zi(t){if(t&&Bn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Jr.icon)return Jr.icon(t);if(t===null)return null;if(Bn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var sd=_l({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=se(function(){return zi(e.icon)}),i=se(function(){return Sr("classes",od(e))}),o=se(function(){return Sr("transform",typeof e.transform=="string"?Jr.transform(e.transform):e.transform)}),s=se(function(){return Sr("mask",zi(e.mask))}),l=se(function(){return qu(a.value,Dt(Dt(Dt(Dt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});He(l,function(u){if(!u)return id("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=se(function(){return l.value?cs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),ld={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},fd={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};Gu.add(fd,ld);const ds=Bf(pc);ds.component("font-awesome-icon",sd);ds.mount("#app");
