(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function d(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(m){if(m.ep)return;m.ep=!0;const h=d(m);fetch(m.href,h)}})();function Am(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var $c={exports:{}},ti={};var cm;function ig(){if(cm)return ti;cm=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(o,m,h){var v=null;if(h!==void 0&&(v=""+h),m.key!==void 0&&(v=""+m.key),"key"in m){h={};for(var T in m)T!=="key"&&(h[T]=m[T])}else h=m;return m=h.ref,{$$typeof:c,type:o,key:v,ref:m!==void 0?m:null,props:h}}return ti.Fragment=f,ti.jsx=d,ti.jsxs=d,ti}var om;function sg(){return om||(om=1,$c.exports=ig()),$c.exports}var n=sg(),Wc={exports:{}},ae={};var um;function rg(){if(um)return ae;um=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),v=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),B=Symbol.iterator;function X(y){return y===null||typeof y!="object"?null:(y=B&&y[B]||y["@@iterator"],typeof y=="function"?y:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,q={};function R(y,k,G){this.props=y,this.context=k,this.refs=q,this.updater=G||K}R.prototype.isReactComponent={},R.prototype.setState=function(y,k){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,k,"setState")},R.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function H(){}H.prototype=R.prototype;function L(y,k,G){this.props=y,this.context=k,this.refs=q,this.updater=G||K}var ie=L.prototype=new H;ie.constructor=L,V(ie,R.prototype),ie.isPureReactComponent=!0;var be=Array.isArray;function ze(){}var ee={H:null,A:null,T:null,S:null},Re=Object.prototype.hasOwnProperty;function Ae(y,k,G){var Q=G.ref;return{$$typeof:c,type:y,key:k,ref:Q!==void 0?Q:null,props:G}}function ca(y,k){return Ae(y.type,k,y.props)}function Ze(y){return typeof y=="object"&&y!==null&&y.$$typeof===c}function We(y){var k={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(G){return k[G]})}var Fe=/\/+/g;function ja(y,k){return typeof y=="object"&&y!==null&&y.key!=null?We(""+y.key):k.toString(36)}function Sa(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(ze,ze):(y.status="pending",y.then(function(k){y.status==="pending"&&(y.status="fulfilled",y.value=k)},function(k){y.status==="pending"&&(y.status="rejected",y.reason=k)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function D(y,k,G,Q,F){var te=typeof y;(te==="undefined"||te==="boolean")&&(y=null);var pe=!1;if(y===null)pe=!0;else switch(te){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(y.$$typeof){case c:case f:pe=!0;break;case M:return pe=y._init,D(pe(y._payload),k,G,Q,F)}}if(pe)return F=F(y),pe=Q===""?"."+ja(y,0):Q,be(F)?(G="",pe!=null&&(G=pe.replace(Fe,"$&/")+"/"),D(F,k,G,"",function(et){return et})):F!=null&&(Ze(F)&&(F=ca(F,G+(F.key==null||y&&y.key===F.key?"":(""+F.key).replace(Fe,"$&/")+"/")+pe)),k.push(F)),1;pe=0;var Je=Q===""?".":Q+":";if(be(y))for(var ye=0;ye<y.length;ye++)Q=y[ye],te=Je+ja(Q,ye),pe+=D(Q,k,G,te,F);else if(ye=X(y),typeof ye=="function")for(y=ye.call(y),ye=0;!(Q=y.next()).done;)Q=Q.value,te=Je+ja(Q,ye++),pe+=D(Q,k,G,te,F);else if(te==="object"){if(typeof y.then=="function")return D(Sa(y),k,G,Q,F);throw k=String(y),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return pe}function Y(y,k,G){if(y==null)return y;var Q=[],F=0;return D(y,Q,"","",function(te){return k.call(G,te,F++)}),Q}function I(y){if(y._status===-1){var k=y._result;k=k(),k.then(function(G){(y._status===0||y._status===-1)&&(y._status=1,y._result=G)},function(G){(y._status===0||y._status===-1)&&(y._status=2,y._result=G)}),y._status===-1&&(y._status=0,y._result=k)}if(y._status===1)return y._result.default;throw y._result}var se=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},he={map:Y,forEach:function(y,k,G){Y(y,function(){k.apply(this,arguments)},G)},count:function(y){var k=0;return Y(y,function(){k++}),k},toArray:function(y){return Y(y,function(k){return k})||[]},only:function(y){if(!Ze(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return ae.Activity=A,ae.Children=he,ae.Component=R,ae.Fragment=d,ae.Profiler=m,ae.PureComponent=L,ae.StrictMode=o,ae.Suspense=j,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ae.__COMPILER_RUNTIME={__proto__:null,c:function(y){return ee.H.useMemoCache(y)}},ae.cache=function(y){return function(){return y.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(y,k,G){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Q=V({},y.props),F=y.key;if(k!=null)for(te in k.key!==void 0&&(F=""+k.key),k)!Re.call(k,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&k.ref===void 0||(Q[te]=k[te]);var te=arguments.length-2;if(te===1)Q.children=G;else if(1<te){for(var pe=Array(te),Je=0;Je<te;Je++)pe[Je]=arguments[Je+2];Q.children=pe}return Ae(y.type,F,Q)},ae.createContext=function(y){return y={$$typeof:v,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},ae.createElement=function(y,k,G){var Q,F={},te=null;if(k!=null)for(Q in k.key!==void 0&&(te=""+k.key),k)Re.call(k,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(F[Q]=k[Q]);var pe=arguments.length-2;if(pe===1)F.children=G;else if(1<pe){for(var Je=Array(pe),ye=0;ye<pe;ye++)Je[ye]=arguments[ye+2];F.children=Je}if(y&&y.defaultProps)for(Q in pe=y.defaultProps,pe)F[Q]===void 0&&(F[Q]=pe[Q]);return Ae(y,te,F)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(y){return{$$typeof:T,render:y}},ae.isValidElement=Ze,ae.lazy=function(y){return{$$typeof:M,_payload:{_status:-1,_result:y},_init:I}},ae.memo=function(y,k){return{$$typeof:g,type:y,compare:k===void 0?null:k}},ae.startTransition=function(y){var k=ee.T,G={};ee.T=G;try{var Q=y(),F=ee.S;F!==null&&F(G,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ze,se)}catch(te){se(te)}finally{k!==null&&G.types!==null&&(k.types=G.types),ee.T=k}},ae.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ae.use=function(y){return ee.H.use(y)},ae.useActionState=function(y,k,G){return ee.H.useActionState(y,k,G)},ae.useCallback=function(y,k){return ee.H.useCallback(y,k)},ae.useContext=function(y){return ee.H.useContext(y)},ae.useDebugValue=function(){},ae.useDeferredValue=function(y,k){return ee.H.useDeferredValue(y,k)},ae.useEffect=function(y,k){return ee.H.useEffect(y,k)},ae.useEffectEvent=function(y){return ee.H.useEffectEvent(y)},ae.useId=function(){return ee.H.useId()},ae.useImperativeHandle=function(y,k,G){return ee.H.useImperativeHandle(y,k,G)},ae.useInsertionEffect=function(y,k){return ee.H.useInsertionEffect(y,k)},ae.useLayoutEffect=function(y,k){return ee.H.useLayoutEffect(y,k)},ae.useMemo=function(y,k){return ee.H.useMemo(y,k)},ae.useOptimistic=function(y,k){return ee.H.useOptimistic(y,k)},ae.useReducer=function(y,k,G){return ee.H.useReducer(y,k,G)},ae.useRef=function(y){return ee.H.useRef(y)},ae.useState=function(y){return ee.H.useState(y)},ae.useSyncExternalStore=function(y,k,G){return ee.H.useSyncExternalStore(y,k,G)},ae.useTransition=function(){return ee.H.useTransition()},ae.version="19.2.3",ae}var dm;function so(){return dm||(dm=1,Wc.exports=rg()),Wc.exports}var S=so();const ro=Am(S);var Fc={exports:{}},li={},Ic={exports:{}},Pc={};var fm;function cg(){return fm||(fm=1,(function(c){function f(D,Y){var I=D.length;D.push(Y);e:for(;0<I;){var se=I-1>>>1,he=D[se];if(0<m(he,Y))D[se]=Y,D[I]=he,I=se;else break e}}function d(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var Y=D[0],I=D.pop();if(I!==Y){D[0]=I;e:for(var se=0,he=D.length,y=he>>>1;se<y;){var k=2*(se+1)-1,G=D[k],Q=k+1,F=D[Q];if(0>m(G,I))Q<he&&0>m(F,G)?(D[se]=F,D[Q]=I,se=Q):(D[se]=G,D[k]=I,se=k);else if(Q<he&&0>m(F,I))D[se]=F,D[Q]=I,se=Q;else break e}}return Y}function m(D,Y){var I=D.sortIndex-Y.sortIndex;return I!==0?I:D.id-Y.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;c.unstable_now=function(){return h.now()}}else{var v=Date,T=v.now();c.unstable_now=function(){return v.now()-T}}var j=[],g=[],M=1,A=null,B=3,X=!1,K=!1,V=!1,q=!1,R=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function ie(D){for(var Y=d(g);Y!==null;){if(Y.callback===null)o(g);else if(Y.startTime<=D)o(g),Y.sortIndex=Y.expirationTime,f(j,Y);else break;Y=d(g)}}function be(D){if(V=!1,ie(D),!K)if(d(j)!==null)K=!0,ze||(ze=!0,We());else{var Y=d(g);Y!==null&&Sa(be,Y.startTime-D)}}var ze=!1,ee=-1,Re=5,Ae=-1;function ca(){return q?!0:!(c.unstable_now()-Ae<Re)}function Ze(){if(q=!1,ze){var D=c.unstable_now();Ae=D;var Y=!0;try{e:{K=!1,V&&(V=!1,H(ee),ee=-1),X=!0;var I=B;try{a:{for(ie(D),A=d(j);A!==null&&!(A.expirationTime>D&&ca());){var se=A.callback;if(typeof se=="function"){A.callback=null,B=A.priorityLevel;var he=se(A.expirationTime<=D);if(D=c.unstable_now(),typeof he=="function"){A.callback=he,ie(D),Y=!0;break a}A===d(j)&&o(j),ie(D)}else o(j);A=d(j)}if(A!==null)Y=!0;else{var y=d(g);y!==null&&Sa(be,y.startTime-D),Y=!1}}break e}finally{A=null,B=I,X=!1}Y=void 0}}finally{Y?We():ze=!1}}}var We;if(typeof L=="function")We=function(){L(Ze)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,ja=Fe.port2;Fe.port1.onmessage=Ze,We=function(){ja.postMessage(null)}}else We=function(){R(Ze,0)};function Sa(D,Y){ee=R(function(){D(c.unstable_now())},Y)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(D){D.callback=null},c.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<D?Math.floor(1e3/D):5},c.unstable_getCurrentPriorityLevel=function(){return B},c.unstable_next=function(D){switch(B){case 1:case 2:case 3:var Y=3;break;default:Y=B}var I=B;B=Y;try{return D()}finally{B=I}},c.unstable_requestPaint=function(){q=!0},c.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=B;B=D;try{return Y()}finally{B=I}},c.unstable_scheduleCallback=function(D,Y,I){var se=c.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,D){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=I+he,D={id:M++,callback:Y,priorityLevel:D,startTime:I,expirationTime:he,sortIndex:-1},I>se?(D.sortIndex=I,f(g,D),d(j)===null&&D===d(g)&&(V?(H(ee),ee=-1):V=!0,Sa(be,I-se))):(D.sortIndex=he,f(j,D),K||X||(K=!0,ze||(ze=!0,We()))),D},c.unstable_shouldYield=ca,c.unstable_wrapCallback=function(D){var Y=B;return function(){var I=B;B=Y;try{return D.apply(this,arguments)}finally{B=I}}}})(Pc)),Pc}var mm;function og(){return mm||(mm=1,Ic.exports=cg()),Ic.exports}var eo={exports:{}},ra={};var hm;function ug(){if(hm)return ra;hm=1;var c=so();function f(j){var g="https://react.dev/errors/"+j;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)g+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+j+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(j,g,M){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:A==null?null:""+A,children:j,containerInfo:g,implementation:M}}var v=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(j,g){if(j==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ra.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ra.createPortal=function(j,g){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(f(299));return h(j,g,null,M)},ra.flushSync=function(j){var g=v.T,M=o.p;try{if(v.T=null,o.p=2,j)return j()}finally{v.T=g,o.p=M,o.d.f()}},ra.preconnect=function(j,g){typeof j=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(j,g))},ra.prefetchDNS=function(j){typeof j=="string"&&o.d.D(j)},ra.preinit=function(j,g){if(typeof j=="string"&&g&&typeof g.as=="string"){var M=g.as,A=T(M,g.crossOrigin),B=typeof g.integrity=="string"?g.integrity:void 0,X=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;M==="style"?o.d.S(j,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:A,integrity:B,fetchPriority:X}):M==="script"&&o.d.X(j,{crossOrigin:A,integrity:B,fetchPriority:X,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ra.preinitModule=function(j,g){if(typeof j=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var M=T(g.as,g.crossOrigin);o.d.M(j,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(j)},ra.preload=function(j,g){if(typeof j=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var M=g.as,A=T(M,g.crossOrigin);o.d.L(j,M,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ra.preloadModule=function(j,g){if(typeof j=="string")if(g){var M=T(g.as,g.crossOrigin);o.d.m(j,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(j)},ra.requestFormReset=function(j){o.d.r(j)},ra.unstable_batchedUpdates=function(j,g){return j(g)},ra.useFormState=function(j,g,M){return v.H.useFormState(j,g,M)},ra.useFormStatus=function(){return v.H.useHostTransitionStatus()},ra.version="19.2.3",ra}var pm;function dg(){if(pm)return eo.exports;pm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),eo.exports=ug(),eo.exports}var gm;function fg(){if(gm)return li;gm=1;var c=og(),f=so(),d=dg();function o(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function v(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function T(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function j(e){if(h(e)!==e)throw Error(o(188))}function g(e){var a=e.alternate;if(!a){if(a=h(e),a===null)throw Error(o(188));return a!==e?null:e}for(var t=e,l=a;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(l=i.return,l!==null){t=l;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return j(i),e;if(s===l)return j(i),a;s=s.sibling}throw Error(o(188))}if(t.return!==l.return)t=i,l=s;else{for(var r=!1,u=i.child;u;){if(u===t){r=!0,t=i,l=s;break}if(u===l){r=!0,l=i,t=s;break}u=u.sibling}if(!r){for(u=s.child;u;){if(u===t){r=!0,t=s,l=i;break}if(u===l){r=!0,l=s,t=i;break}u=u.sibling}if(!r)throw Error(o(189))}}if(t.alternate!==l)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?e:a}function M(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=M(e),a!==null)return a;e=e.sibling}return null}var A=Object.assign,B=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),L=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Ae=Symbol.for("react.activity"),ca=Symbol.for("react.memo_cache_sentinel"),Ze=Symbol.iterator;function We(e){return e===null||typeof e!="object"?null:(e=Ze&&e[Ze]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Symbol.for("react.client.reference");function ja(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case R:return"Profiler";case q:return"StrictMode";case be:return"Suspense";case ze:return"SuspenseList";case Ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case K:return"Portal";case L:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case ie:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return a=e.displayName||null,a!==null?a:ja(e.type)||"Memo";case Re:a=e._payload,e=e._init;try{return ja(e(a))}catch{}}return null}var Sa=Array.isArray,D=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},se=[],he=-1;function y(e){return{current:e}}function k(e){0>he||(e.current=se[he],se[he]=null,he--)}function G(e,a){he++,se[he]=e.current,e.current=a}var Q=y(null),F=y(null),te=y(null),pe=y(null);function Je(e,a){switch(G(te,a),G(F,e),G(Q,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Of(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Of(a),e=Df(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(Q),G(Q,e)}function ye(){k(Q),k(F),k(te)}function et(e){e.memoizedState!==null&&G(pe,e);var a=Q.current,t=Df(a,e.type);a!==t&&(G(F,e),G(Q,t))}function na(e){F.current===e&&(k(Q),k(F)),pe.current===e&&(k(pe),In._currentValue=I)}var at,oi;function Ja(e){if(at===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);at=a&&a[1]||"",oi=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+at+e+oi}var ce=!1;function He(e,a){if(!e||ce)return"";ce=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(C){var z=C}Reflect.construct(e,[],U)}else{try{U.call()}catch(C){z=C}e.call(U.prototype)}}else{try{throw Error()}catch(C){z=C}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(C){if(C&&z&&typeof C.stack=="string")return[C.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),r=s[0],u=s[1];if(r&&u){var p=r.split(`
`),E=u.split(`
`);for(i=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;if(l===p.length||i===E.length)for(l=p.length-1,i=E.length-1;1<=l&&0<=i&&p[l]!==E[i];)i--;for(;1<=l&&0<=i;l--,i--)if(p[l]!==E[i]){if(l!==1||i!==1)do if(l--,i--,0>i||p[l]!==E[i]){var O=`
`+p[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=i);break}}}finally{ce=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Ja(t):""}function Ds(e,a){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return e.child!==a&&a!==null?Ja("Suspense Fallback"):Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return He(e.type,!1);case 11:return He(e.type.render,!1);case 1:return He(e.type,!0);case 31:return Ja("Activity");default:return""}}function cn(e){try{var a="",t=null;do a+=Ds(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ce=Object.prototype.hasOwnProperty,oa=c.unstable_scheduleCallback,on=c.unstable_cancelCallback,ui=c.unstable_shouldYield,Rs=c.unstable_requestPaint,ia=c.unstable_now,_s=c.unstable_getCurrentPriorityLevel,un=c.unstable_ImmediatePriority,dn=c.unstable_UserBlockingPriority,Wt=c.unstable_NormalPriority,di=c.unstable_LowPriority,fi=c.unstable_IdlePriority,Us=c.log,mi=c.unstable_setDisableYieldValue,Ft=null,ua=null;function Ka(e){if(typeof Us=="function"&&mi(e),ua&&typeof ua.setStrictMode=="function")try{ua.setStrictMode(Ft,e)}catch{}}var da=Math.clz32?Math.clz32:Ls,ks=Math.log,Hs=Math.LN2;function Ls(e){return e>>>=0,e===0?32:31-(ks(e)/Hs|0)|0}var vl=256,bl=262144,xl=4194304;function tt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yl(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var i=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~s,l!==0?i=tt(l):(r&=u,r!==0?i=tt(r):t||(t=u&~e,t!==0&&(i=tt(t))))):(u=l&~s,u!==0?i=tt(u):r!==0?i=tt(r):t||(t=l&~e,t!==0&&(i=tt(t)))),i===0?0:a!==0&&a!==i&&(a&s)===0&&(s=i&-i,t=a&-a,s>=t||s===32&&(t&4194048)!==0)?a:i}function It(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Bs(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jl(){var e=xl;return xl<<=1,(xl&62914560)===0&&(xl=4194304),e}function fn(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function b(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $(e,a,t,l,i,s){var r=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var u=e.entanglements,p=e.expirationTimes,E=e.hiddenUpdates;for(t=r&~t;0<t;){var O=31-da(t),U=1<<O;u[O]=0,p[O]=-1;var z=E[O];if(z!==null)for(E[O]=null,O=0;O<z.length;O++){var C=z[O];C!==null&&(C.lane&=-536870913)}t&=~U}l!==0&&Ie(e,l,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~a))}function Ie(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-da(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Le(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-da(t),i=1<<l;i&a|e[l]&a&&(e[l]|=a),t&=~i}}function ma(e,a){var t=a&-a;return t=(t&42)!==0?1:sa(t),(t&(e.suspendedLanes|a))!==0?0:t}function sa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function po(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:am(e.type))}function go(e,a){var t=Y.p;try{return Y.p=e,a()}finally{Y.p=t}}var Et=Math.random().toString(36).slice(2),Pe="__reactFiber$"+Et,ha="__reactProps$"+Et,Sl="__reactContainer$"+Et,qs="__reactEvents$"+Et,Km="__reactListeners$"+Et,$m="__reactHandles$"+Et,vo="__reactResources$"+Et,mn="__reactMarker$"+Et;function Ys(e){delete e[Pe],delete e[ha],delete e[qs],delete e[Km],delete e[$m]}function Nl(e){var a=e[Pe];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Sl]||t[Pe]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Bf(e);e!==null;){if(t=e[Pe])return t;e=Bf(e)}return a}e=t,t=e.parentNode}return null}function wl(e){if(e=e[Pe]||e[Sl]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function hn(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(o(33))}function El(e){var a=e[vo];return a||(a=e[vo]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ke(e){e[mn]=!0}var bo=new Set,xo={};function Pt(e,a){zl(e,a),zl(e+"Capture",a)}function zl(e,a){for(xo[e]=a,e=0;e<a.length;e++)bo.add(a[e])}var Wm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yo={},jo={};function Fm(e){return Ce.call(jo,e)?!0:Ce.call(yo,e)?!1:Wm.test(e)?jo[e]=!0:(yo[e]=!0,!1)}function hi(e,a,t){if(Fm(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function pi(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function nt(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function Oa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function So(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Im(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,s=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return i.call(this)},set:function(r){t=""+r,s.call(this,r)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Gs(e){if(!e._valueTracker){var a=So(e)?"checked":"value";e._valueTracker=Im(e,a,""+e[a])}}function No(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=So(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pm=/[\n"\\]/g;function Da(e){return e.replace(Pm,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Xs(e,a,t,l,i,s,r,u){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),a!=null?r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Oa(a)):e.value!==""+Oa(a)&&(e.value=""+Oa(a)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),a!=null?Vs(e,r,Oa(a)):t!=null?Vs(e,r,Oa(t)):l!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Oa(u):e.removeAttribute("name")}function wo(e,a,t,l,i,s,r,u){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),a!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||a!=null)){Gs(e);return}t=t!=null?""+Oa(t):"",a=a!=null?""+Oa(a):t,u||a===e.value||(e.value=a),e.defaultValue=a}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Gs(e)}function Vs(e,a,t){a==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Al(e,a,t,l){if(e=e.options,a){a={};for(var i=0;i<t.length;i++)a["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=a.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Oa(t),a=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}a!==null||e[i].disabled||(a=e[i])}a!==null&&(a.selected=!0)}}function Eo(e,a,t){if(a!=null&&(a=""+Oa(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Oa(t):""}function zo(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(o(92));if(Sa(l)){if(1<l.length)throw Error(o(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=Oa(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),Gs(e)}function Tl(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var eh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ao(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||eh.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function To(e,a,t){if(a!=null&&typeof a!="object")throw Error(o(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in a)l=a[i],a.hasOwnProperty(i)&&t[i]!==l&&Ao(e,i,l)}else for(var s in a)a.hasOwnProperty(s)&&Ao(e,s,a[s])}function Qs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ah=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),th=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vi(e){return th.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function it(){}var Zs=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,Ml=null;function Co(e){var a=wl(e);if(a&&(e=a.stateNode)){var t=e[ha]||null;e:switch(e=a.stateNode,a.type){case"input":if(Xs(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Da(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var i=l[ha]||null;if(!i)throw Error(o(90));Xs(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&No(l)}break e;case"textarea":Eo(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&Al(e,!!t.multiple,a,!1)}}}var Ks=!1;function Mo(e,a,t){if(Ks)return e(a,t);Ks=!0;try{var l=e(a);return l}finally{if(Ks=!1,(Cl!==null||Ml!==null)&&(ns(),Cl&&(a=Cl,e=Ml,Ml=Cl=null,Co(a),e)))for(a=0;a<e.length;a++)Co(e[a])}}function pn(e,a){var t=e.stateNode;if(t===null)return null;var l=t[ha]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(o(231,a,typeof t));return t}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$s=!1;if(st)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){$s=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{$s=!1}var zt=null,Ws=null,bi=null;function Oo(){if(bi)return bi;var e,a=Ws,t=a.length,l,i="value"in zt?zt.value:zt.textContent,s=i.length;for(e=0;e<t&&a[e]===i[e];e++);var r=t-e;for(l=1;l<=r&&a[t-l]===i[s-l];l++);return bi=i.slice(e,1<l?1-l:void 0)}function xi(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function Do(){return!1}function pa(e){function a(t,l,i,s,r){this._reactName=t,this._targetInst=i,this.type=l,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yi:Do,this.isPropagationStopped=Do,this}return A(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),a}var el={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=pa(el),vn=A({},el,{view:0,detail:0}),lh=pa(vn),Fs,Is,bn,Si=A({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(Fs=e.screenX-bn.screenX,Is=e.screenY-bn.screenY):Is=Fs=0,bn=e),Fs)},movementY:function(e){return"movementY"in e?e.movementY:Is}}),Ro=pa(Si),nh=A({},Si,{dataTransfer:0}),ih=pa(nh),sh=A({},vn,{relatedTarget:0}),Ps=pa(sh),rh=A({},el,{animationName:0,elapsedTime:0,pseudoElement:0}),ch=pa(rh),oh=A({},el,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uh=pa(oh),dh=A({},el,{data:0}),_o=pa(dh),fh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ph(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=hh[e])?!!a[e]:!1}function er(){return ph}var gh=A({},vn,{key:function(e){if(e.key){var a=fh[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vh=pa(gh),bh=A({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uo=pa(bh),xh=A({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),yh=pa(xh),jh=A({},el,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sh=pa(jh),Nh=A({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wh=pa(Nh),Eh=A({},el,{newState:0,oldState:0}),zh=pa(Eh),Ah=[9,13,27,32],ar=st&&"CompositionEvent"in window,xn=null;st&&"documentMode"in document&&(xn=document.documentMode);var Th=st&&"TextEvent"in window&&!xn,ko=st&&(!ar||xn&&8<xn&&11>=xn),Ho=" ",Lo=!1;function Bo(e,a){switch(e){case"keyup":return Ah.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ol=!1;function Ch(e,a){switch(e){case"compositionend":return qo(a);case"keypress":return a.which!==32?null:(Lo=!0,Ho);case"textInput":return e=a.data,e===Ho&&Lo?null:e;default:return null}}function Mh(e,a){if(Ol)return e==="compositionend"||!ar&&Bo(e,a)?(e=Oo(),bi=Ws=zt=null,Ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ko&&a.locale!=="ko"?null:a.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yo(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Oh[e.type]:a==="textarea"}function Go(e,a,t,l){Cl?Ml?Ml.push(l):Ml=[l]:Cl=l,a=ds(a,"onChange"),0<a.length&&(t=new ji("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var yn=null,jn=null;function Dh(e){Ef(e,0)}function Ni(e){var a=hn(e);if(No(a))return e}function Xo(e,a){if(e==="change")return a}var Vo=!1;if(st){var tr;if(st){var lr="oninput"in document;if(!lr){var Qo=document.createElement("div");Qo.setAttribute("oninput","return;"),lr=typeof Qo.oninput=="function"}tr=lr}else tr=!1;Vo=tr&&(!document.documentMode||9<document.documentMode)}function Zo(){yn&&(yn.detachEvent("onpropertychange",Jo),jn=yn=null)}function Jo(e){if(e.propertyName==="value"&&Ni(jn)){var a=[];Go(a,jn,e,Js(e)),Mo(Dh,a)}}function Rh(e,a,t){e==="focusin"?(Zo(),yn=a,jn=t,yn.attachEvent("onpropertychange",Jo)):e==="focusout"&&Zo()}function _h(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(jn)}function Uh(e,a){if(e==="click")return Ni(a)}function kh(e,a){if(e==="input"||e==="change")return Ni(a)}function Hh(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Na=typeof Object.is=="function"?Object.is:Hh;function Sn(e,a){if(Na(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var i=t[l];if(!Ce.call(a,i)||!Na(e[i],a[i]))return!1}return!0}function Ko(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $o(e,a){var t=Ko(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ko(t)}}function Wo(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Wo(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Fo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=gi(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=gi(e.document)}return a}function nr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Lh=st&&"documentMode"in document&&11>=document.documentMode,Dl=null,ir=null,Nn=null,sr=!1;function Io(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;sr||Dl==null||Dl!==gi(l)||(l=Dl,"selectionStart"in l&&nr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Nn&&Sn(Nn,l)||(Nn=l,l=ds(ir,"onSelect"),0<l.length&&(a=new ji("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=Dl)))}function al(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var Rl={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionrun:al("Transition","TransitionRun"),transitionstart:al("Transition","TransitionStart"),transitioncancel:al("Transition","TransitionCancel"),transitionend:al("Transition","TransitionEnd")},rr={},Po={};st&&(Po=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function tl(e){if(rr[e])return rr[e];if(!Rl[e])return e;var a=Rl[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in Po)return rr[e]=a[t];return e}var eu=tl("animationend"),au=tl("animationiteration"),tu=tl("animationstart"),Bh=tl("transitionrun"),qh=tl("transitionstart"),Yh=tl("transitioncancel"),lu=tl("transitionend"),nu=new Map,cr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cr.push("scrollEnd");function Va(e,a){nu.set(e,a),Pt(a,[e])}var wi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ra=[],_l=0,or=0;function Ei(){for(var e=_l,a=or=_l=0;a<e;){var t=Ra[a];Ra[a++]=null;var l=Ra[a];Ra[a++]=null;var i=Ra[a];Ra[a++]=null;var s=Ra[a];if(Ra[a++]=null,l!==null&&i!==null){var r=l.pending;r===null?i.next=i:(i.next=r.next,r.next=i),l.pending=i}s!==0&&iu(t,i,s)}}function zi(e,a,t,l){Ra[_l++]=e,Ra[_l++]=a,Ra[_l++]=t,Ra[_l++]=l,or|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ur(e,a,t,l){return zi(e,a,t,l),Ai(e)}function ll(e,a){return zi(e,null,null,a),Ai(e)}function iu(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var i=!1,s=e.return;s!==null;)s.childLanes|=t,l=s.alternate,l!==null&&(l.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&a!==null&&(i=31-da(t),e=s.hiddenUpdates,l=e[i],l===null?e[i]=[a]:l.push(a),a.lane=t|536870912),s):null}function Ai(e){if(50<Qn)throw Qn=0,xc=null,Error(o(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Ul={};function Gh(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wa(e,a,t,l){return new Gh(e,a,t,l)}function dr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rt(e,a){var t=e.alternate;return t===null?(t=wa(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function su(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Ti(e,a,t,l,i,s){var r=0;if(l=e,typeof e=="function")dr(e)&&(r=1);else if(typeof e=="string")r=Jp(e,t,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ae:return e=wa(31,t,a,i),e.elementType=Ae,e.lanes=s,e;case V:return nl(t.children,i,s,a);case q:r=8,i|=24;break;case R:return e=wa(12,t,a,i|2),e.elementType=R,e.lanes=s,e;case be:return e=wa(13,t,a,i),e.elementType=be,e.lanes=s,e;case ze:return e=wa(19,t,a,i),e.elementType=ze,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:r=10;break e;case H:r=9;break e;case ie:r=11;break e;case ee:r=14;break e;case Re:r=16,l=null;break e}r=29,t=Error(o(130,e===null?"null":typeof e,"")),l=null}return a=wa(r,t,a,i),a.elementType=e,a.type=l,a.lanes=s,a}function nl(e,a,t,l){return e=wa(7,e,l,a),e.lanes=t,e}function fr(e,a,t){return e=wa(6,e,null,a),e.lanes=t,e}function ru(e){var a=wa(18,null,null,0);return a.stateNode=e,a}function mr(e,a,t){return a=wa(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var cu=new WeakMap;function _a(e,a){if(typeof e=="object"&&e!==null){var t=cu.get(e);return t!==void 0?t:(a={value:e,source:a,stack:cn(a)},cu.set(e,a),a)}return{value:e,source:a,stack:cn(a)}}var kl=[],Hl=0,Ci=null,wn=0,Ua=[],ka=0,At=null,$a=1,Wa="";function ct(e,a){kl[Hl++]=wn,kl[Hl++]=Ci,Ci=e,wn=a}function ou(e,a,t){Ua[ka++]=$a,Ua[ka++]=Wa,Ua[ka++]=At,At=e;var l=$a;e=Wa;var i=32-da(l)-1;l&=~(1<<i),t+=1;var s=32-da(a)+i;if(30<s){var r=i-i%5;s=(l&(1<<r)-1).toString(32),l>>=r,i-=r,$a=1<<32-da(a)+i|t<<i|l,Wa=s+e}else $a=1<<s|t<<i|l,Wa=e}function hr(e){e.return!==null&&(ct(e,1),ou(e,1,0))}function pr(e){for(;e===Ci;)Ci=kl[--Hl],kl[Hl]=null,wn=kl[--Hl],kl[Hl]=null;for(;e===At;)At=Ua[--ka],Ua[ka]=null,Wa=Ua[--ka],Ua[ka]=null,$a=Ua[--ka],Ua[ka]=null}function uu(e,a){Ua[ka++]=$a,Ua[ka++]=Wa,Ua[ka++]=At,$a=a.id,Wa=a.overflow,At=e}var ea=null,Me=null,me=!1,Tt=null,Ha=!1,gr=Error(o(519));function Ct(e){var a=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw En(_a(a,e)),gr}function du(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[Pe]=e,a[ha]=l,t){case"dialog":ue("cancel",a),ue("close",a);break;case"iframe":case"object":case"embed":ue("load",a);break;case"video":case"audio":for(t=0;t<Jn.length;t++)ue(Jn[t],a);break;case"source":ue("error",a);break;case"img":case"image":case"link":ue("error",a),ue("load",a);break;case"details":ue("toggle",a);break;case"input":ue("invalid",a),wo(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ue("invalid",a);break;case"textarea":ue("invalid",a),zo(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||Cf(a.textContent,t)?(l.popover!=null&&(ue("beforetoggle",a),ue("toggle",a)),l.onScroll!=null&&ue("scroll",a),l.onScrollEnd!=null&&ue("scrollend",a),l.onClick!=null&&(a.onclick=it),a=!0):a=!1,a||Ct(e,!0)}function fu(e){for(ea=e.return;ea;)switch(ea.tag){case 5:case 31:case 13:Ha=!1;return;case 27:case 3:Ha=!0;return;default:ea=ea.return}}function Ll(e){if(e!==ea)return!1;if(!me)return fu(e),me=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||_c(e.type,e.memoizedProps)),t=!t),t&&Me&&Ct(e),fu(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Me=Lf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Me=Lf(e)}else a===27?(a=Me,Xt(e.type)?(e=Bc,Bc=null,Me=e):Me=a):Me=ea?Ba(e.stateNode.nextSibling):null;return!0}function il(){Me=ea=null,me=!1}function vr(){var e=Tt;return e!==null&&(xa===null?xa=e:xa.push.apply(xa,e),Tt=null),e}function En(e){Tt===null?Tt=[e]:Tt.push(e)}var br=y(null),sl=null,ot=null;function Mt(e,a,t){G(br,a._currentValue),a._currentValue=t}function ut(e){e._currentValue=br.current,k(br)}function xr(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function yr(e,a,t,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;e:for(;s!==null;){var u=s;s=i;for(var p=0;p<a.length;p++)if(u.context===a[p]){s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),xr(s.return,t,e),l||(r=null);break e}s=u.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(o(341));r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),xr(r,t,e),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===e){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function Bl(e,a,t,l){e=null;for(var i=a,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var u=i.type;Na(i.pendingProps.value,r.value)||(e!==null?e.push(u):e=[u])}}else if(i===pe.current){if(r=i.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(In):e=[In])}i=i.return}e!==null&&yr(a,e,t,l),a.flags|=262144}function Mi(e){for(e=e.firstContext;e!==null;){if(!Na(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rl(e){sl=e,ot=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return mu(sl,e)}function Oi(e,a){return sl===null&&rl(e),mu(e,a)}function mu(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},ot===null){if(e===null)throw Error(o(308));ot=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ot=ot.next=a;return t}var Xh=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Vh=c.unstable_scheduleCallback,Qh=c.unstable_NormalPriority,Ye={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jr(){return{controller:new Xh,data:new Map,refCount:0}}function zn(e){e.refCount--,e.refCount===0&&Vh(Qh,function(){e.controller.abort()})}var An=null,Sr=0,ql=0,Yl=null;function Zh(e,a){if(An===null){var t=An=[];Sr=0,ql=Ec(),Yl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Sr++,a.then(hu,hu),a}function hu(){if(--Sr===0&&An!==null){Yl!==null&&(Yl.status="fulfilled");var e=An;An=null,ql=0,Yl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Jh(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var i=0;i<t.length;i++)(0,t[i])(a)},function(i){for(l.status="rejected",l.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),l}var pu=D.S;D.S=function(e,a){Id=ia(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Zh(e,a),pu!==null&&pu(e,a)};var cl=y(null);function Nr(){var e=cl.current;return e!==null?e:Te.pooledCache}function Di(e,a){a===null?G(cl,cl.current):G(cl,a.pool)}function gu(){var e=Nr();return e===null?null:{parent:Ye._currentValue,pool:e}}var Gl=Error(o(460)),wr=Error(o(474)),Ri=Error(o(542)),_i={then:function(){}};function vu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bu(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(it,it),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,yu(e),e;default:if(typeof a.status=="string")a.then(it,it);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=l}},function(l){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,yu(e),e}throw ul=a,Gl}}function ol(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ul=t,Gl):t}}var ul=null;function xu(){if(ul===null)throw Error(o(459));var e=ul;return ul=null,e}function yu(e){if(e===Gl||e===Ri)throw Error(o(483))}var Xl=null,Tn=0;function Ui(e){var a=Tn;return Tn+=1,Xl===null&&(Xl=[]),bu(Xl,e,a)}function Cn(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function ki(e,a){throw a.$$typeof===B?Error(o(525)):(e=Object.prototype.toString.call(a),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function ju(e){function a(N,x){if(e){var w=N.deletions;w===null?(N.deletions=[x],N.flags|=16):w.push(x)}}function t(N,x){if(!e)return null;for(;x!==null;)a(N,x),x=x.sibling;return null}function l(N){for(var x=new Map;N!==null;)N.key!==null?x.set(N.key,N):x.set(N.index,N),N=N.sibling;return x}function i(N,x){return N=rt(N,x),N.index=0,N.sibling=null,N}function s(N,x,w){return N.index=w,e?(w=N.alternate,w!==null?(w=w.index,w<x?(N.flags|=67108866,x):w):(N.flags|=67108866,x)):(N.flags|=1048576,x)}function r(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function u(N,x,w,_){return x===null||x.tag!==6?(x=fr(w,N.mode,_),x.return=N,x):(x=i(x,w),x.return=N,x)}function p(N,x,w,_){var W=w.type;return W===V?O(N,x,w.props.children,_,w.key):x!==null&&(x.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Re&&ol(W)===x.type)?(x=i(x,w.props),Cn(x,w),x.return=N,x):(x=Ti(w.type,w.key,w.props,null,N.mode,_),Cn(x,w),x.return=N,x)}function E(N,x,w,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=mr(w,N.mode,_),x.return=N,x):(x=i(x,w.children||[]),x.return=N,x)}function O(N,x,w,_,W){return x===null||x.tag!==7?(x=nl(w,N.mode,_,W),x.return=N,x):(x=i(x,w),x.return=N,x)}function U(N,x,w){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=fr(""+x,N.mode,w),x.return=N,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case X:return w=Ti(x.type,x.key,x.props,null,N.mode,w),Cn(w,x),w.return=N,w;case K:return x=mr(x,N.mode,w),x.return=N,x;case Re:return x=ol(x),U(N,x,w)}if(Sa(x)||We(x))return x=nl(x,N.mode,w,null),x.return=N,x;if(typeof x.then=="function")return U(N,Ui(x),w);if(x.$$typeof===L)return U(N,Oi(N,x),w);ki(N,x)}return null}function z(N,x,w,_){var W=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return W!==null?null:u(N,x,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case X:return w.key===W?p(N,x,w,_):null;case K:return w.key===W?E(N,x,w,_):null;case Re:return w=ol(w),z(N,x,w,_)}if(Sa(w)||We(w))return W!==null?null:O(N,x,w,_,null);if(typeof w.then=="function")return z(N,x,Ui(w),_);if(w.$$typeof===L)return z(N,x,Oi(N,w),_);ki(N,w)}return null}function C(N,x,w,_,W){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return N=N.get(w)||null,u(x,N,""+_,W);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case X:return N=N.get(_.key===null?w:_.key)||null,p(x,N,_,W);case K:return N=N.get(_.key===null?w:_.key)||null,E(x,N,_,W);case Re:return _=ol(_),C(N,x,w,_,W)}if(Sa(_)||We(_))return N=N.get(w)||null,O(x,N,_,W,null);if(typeof _.then=="function")return C(N,x,w,Ui(_),W);if(_.$$typeof===L)return C(N,x,w,Oi(x,_),W);ki(x,_)}return null}function Z(N,x,w,_){for(var W=null,ge=null,J=x,ne=x=0,fe=null;J!==null&&ne<w.length;ne++){J.index>ne?(fe=J,J=null):fe=J.sibling;var ve=z(N,J,w[ne],_);if(ve===null){J===null&&(J=fe);break}e&&J&&ve.alternate===null&&a(N,J),x=s(ve,x,ne),ge===null?W=ve:ge.sibling=ve,ge=ve,J=fe}if(ne===w.length)return t(N,J),me&&ct(N,ne),W;if(J===null){for(;ne<w.length;ne++)J=U(N,w[ne],_),J!==null&&(x=s(J,x,ne),ge===null?W=J:ge.sibling=J,ge=J);return me&&ct(N,ne),W}for(J=l(J);ne<w.length;ne++)fe=C(J,N,ne,w[ne],_),fe!==null&&(e&&fe.alternate!==null&&J.delete(fe.key===null?ne:fe.key),x=s(fe,x,ne),ge===null?W=fe:ge.sibling=fe,ge=fe);return e&&J.forEach(function(Kt){return a(N,Kt)}),me&&ct(N,ne),W}function P(N,x,w,_){if(w==null)throw Error(o(151));for(var W=null,ge=null,J=x,ne=x=0,fe=null,ve=w.next();J!==null&&!ve.done;ne++,ve=w.next()){J.index>ne?(fe=J,J=null):fe=J.sibling;var Kt=z(N,J,ve.value,_);if(Kt===null){J===null&&(J=fe);break}e&&J&&Kt.alternate===null&&a(N,J),x=s(Kt,x,ne),ge===null?W=Kt:ge.sibling=Kt,ge=Kt,J=fe}if(ve.done)return t(N,J),me&&ct(N,ne),W;if(J===null){for(;!ve.done;ne++,ve=w.next())ve=U(N,ve.value,_),ve!==null&&(x=s(ve,x,ne),ge===null?W=ve:ge.sibling=ve,ge=ve);return me&&ct(N,ne),W}for(J=l(J);!ve.done;ne++,ve=w.next())ve=C(J,N,ne,ve.value,_),ve!==null&&(e&&ve.alternate!==null&&J.delete(ve.key===null?ne:ve.key),x=s(ve,x,ne),ge===null?W=ve:ge.sibling=ve,ge=ve);return e&&J.forEach(function(ng){return a(N,ng)}),me&&ct(N,ne),W}function Ee(N,x,w,_){if(typeof w=="object"&&w!==null&&w.type===V&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case X:e:{for(var W=w.key;x!==null;){if(x.key===W){if(W=w.type,W===V){if(x.tag===7){t(N,x.sibling),_=i(x,w.props.children),_.return=N,N=_;break e}}else if(x.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Re&&ol(W)===x.type){t(N,x.sibling),_=i(x,w.props),Cn(_,w),_.return=N,N=_;break e}t(N,x);break}else a(N,x);x=x.sibling}w.type===V?(_=nl(w.props.children,N.mode,_,w.key),_.return=N,N=_):(_=Ti(w.type,w.key,w.props,null,N.mode,_),Cn(_,w),_.return=N,N=_)}return r(N);case K:e:{for(W=w.key;x!==null;){if(x.key===W)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){t(N,x.sibling),_=i(x,w.children||[]),_.return=N,N=_;break e}else{t(N,x);break}else a(N,x);x=x.sibling}_=mr(w,N.mode,_),_.return=N,N=_}return r(N);case Re:return w=ol(w),Ee(N,x,w,_)}if(Sa(w))return Z(N,x,w,_);if(We(w)){if(W=We(w),typeof W!="function")throw Error(o(150));return w=W.call(w),P(N,x,w,_)}if(typeof w.then=="function")return Ee(N,x,Ui(w),_);if(w.$$typeof===L)return Ee(N,x,Oi(N,w),_);ki(N,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,x!==null&&x.tag===6?(t(N,x.sibling),_=i(x,w),_.return=N,N=_):(t(N,x),_=fr(w,N.mode,_),_.return=N,N=_),r(N)):t(N,x)}return function(N,x,w,_){try{Tn=0;var W=Ee(N,x,w,_);return Xl=null,W}catch(J){if(J===Gl||J===Ri)throw J;var ge=wa(29,J,null,N.mode);return ge.lanes=_,ge.return=N,ge}}}var dl=ju(!0),Su=ju(!1),Ot=!1;function Er(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rt(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(xe&2)!==0){var i=l.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a,a=Ai(e),iu(e,null,t),a}return zi(e,l,a,t),Ai(e)}function Mn(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Le(e,t)}}function Ar(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,t=t.next}while(t!==null);s===null?i=s=a:s=s.next=a}else i=s=a;t={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Tr=!1;function On(){if(Tr){var e=Yl;if(e!==null)throw e}}function Dn(e,a,t,l){Tr=!1;var i=e.updateQueue;Ot=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var p=u,E=p.next;p.next=null,r===null?s=E:r.next=E,r=p;var O=e.alternate;O!==null&&(O=O.updateQueue,u=O.lastBaseUpdate,u!==r&&(u===null?O.firstBaseUpdate=E:u.next=E,O.lastBaseUpdate=p))}if(s!==null){var U=i.baseState;r=0,O=E=p=null,u=s;do{var z=u.lane&-536870913,C=z!==u.lane;if(C?(de&z)===z:(l&z)===z){z!==0&&z===ql&&(Tr=!0),O!==null&&(O=O.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var Z=e,P=u;z=a;var Ee=t;switch(P.tag){case 1:if(Z=P.payload,typeof Z=="function"){U=Z.call(Ee,U,z);break e}U=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=P.payload,z=typeof Z=="function"?Z.call(Ee,U,z):Z,z==null)break e;U=A({},U,z);break e;case 2:Ot=!0}}z=u.callback,z!==null&&(e.flags|=64,C&&(e.flags|=8192),C=i.callbacks,C===null?i.callbacks=[z]:C.push(z))}else C={lane:z,tag:u.tag,payload:u.payload,callback:u.callback,next:null},O===null?(E=O=C,p=U):O=O.next=C,r|=z;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;C=u,u=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);O===null&&(p=U),i.baseState=p,i.firstBaseUpdate=E,i.lastBaseUpdate=O,s===null&&(i.shared.lanes=0),Lt|=r,e.lanes=r,e.memoizedState=U}}function Nu(e,a){if(typeof e!="function")throw Error(o(191,e));e.call(a)}function wu(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Nu(t[e],a)}var Vl=y(null),Hi=y(0);function Eu(e,a){e=xt,G(Hi,e),G(Vl,a),xt=e|a.baseLanes}function Cr(){G(Hi,xt),G(Vl,Vl.current)}function Mr(){xt=Hi.current,k(Vl),k(Hi)}var Ea=y(null),La=null;function _t(e){var a=e.alternate;G(Be,Be.current&1),G(Ea,e),La===null&&(a===null||Vl.current!==null||a.memoizedState!==null)&&(La=e)}function Or(e){G(Be,Be.current),G(Ea,e),La===null&&(La=e)}function zu(e){e.tag===22?(G(Be,Be.current),G(Ea,e),La===null&&(La=e)):Ut()}function Ut(){G(Be,Be.current),G(Ea,Ea.current)}function za(e){k(Ea),La===e&&(La=null),k(Be)}var Be=y(0);function Li(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Hc(t)||Lc(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var dt=0,le=null,Ne=null,Ge=null,Bi=!1,Ql=!1,fl=!1,qi=0,Rn=0,Zl=null,Kh=0;function Ue(){throw Error(o(321))}function Dr(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!Na(e[t],a[t]))return!1;return!0}function Rr(e,a,t,l,i,s){return dt=s,le=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,D.H=e===null||e.memoizedState===null?od:Kr,fl=!1,s=t(l,i),fl=!1,Ql&&(s=Tu(a,t,l,i)),Au(e),s}function Au(e){D.H=kn;var a=Ne!==null&&Ne.next!==null;if(dt=0,Ge=Ne=le=null,Bi=!1,Rn=0,Zl=null,a)throw Error(o(300));e===null||Xe||(e=e.dependencies,e!==null&&Mi(e)&&(Xe=!0))}function Tu(e,a,t,l){le=e;var i=0;do{if(Ql&&(Zl=null),Rn=0,Ql=!1,25<=i)throw Error(o(301));if(i+=1,Ge=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=ud,s=a(t,l)}while(Ql);return s}function $h(){var e=D.H,a=e.useState()[0];return a=typeof a.then=="function"?_n(a):a,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(le.flags|=1024),a}function _r(){var e=qi!==0;return qi=0,e}function Ur(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function kr(e){if(Bi){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Bi=!1}dt=0,Ge=Ne=le=null,Ql=!1,Rn=qi=0,Zl=null}function fa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?le.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function qe(){if(Ne===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var a=Ge===null?le.memoizedState:Ge.next;if(a!==null)Ge=a,Ne=e;else{if(e===null)throw le.alternate===null?Error(o(467)):Error(o(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ge===null?le.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _n(e){var a=Rn;return Rn+=1,Zl===null&&(Zl=[]),e=bu(Zl,e,a),a=le,(Ge===null?a.memoizedState:Ge.next)===null&&(a=a.alternate,D.H=a===null||a.memoizedState===null?od:Kr),e}function Gi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _n(e);if(e.$$typeof===L)return aa(e)}throw Error(o(438,String(e)))}function Hr(e){var a=null,t=le.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Yi(),le.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=ca;return a.index++,t}function ft(e,a){return typeof a=="function"?a(e):a}function Xi(e){var a=qe();return Lr(a,Ne,e)}function Lr(e,a,t){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=t;var i=e.baseQueue,s=l.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}a.baseQueue=i=s,l.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{a=i.next;var u=r=null,p=null,E=a,O=!1;do{var U=E.lane&-536870913;if(U!==E.lane?(de&U)===U:(dt&U)===U){var z=E.revertLane;if(z===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),U===ql&&(O=!0);else if((dt&z)===z){E=E.next,z===ql&&(O=!0);continue}else U={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(u=p=U,r=s):p=p.next=U,le.lanes|=z,Lt|=z;U=E.action,fl&&t(s,U),s=E.hasEagerState?E.eagerState:t(s,U)}else z={lane:U,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(u=p=z,r=s):p=p.next=z,le.lanes|=U,Lt|=U;E=E.next}while(E!==null&&E!==a);if(p===null?r=s:p.next=u,!Na(s,e.memoizedState)&&(Xe=!0,O&&(t=Yl,t!==null)))throw t;e.memoizedState=s,e.baseState=r,e.baseQueue=p,l.lastRenderedState=s}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Br(e){var a=qe(),t=a.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var l=t.dispatch,i=t.pending,s=a.memoizedState;if(i!==null){t.pending=null;var r=i=i.next;do s=e(s,r.action),r=r.next;while(r!==i);Na(s,a.memoizedState)||(Xe=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),t.lastRenderedState=s}return[s,l]}function Cu(e,a,t){var l=le,i=qe(),s=me;if(s){if(t===void 0)throw Error(o(407));t=t()}else t=a();var r=!Na((Ne||i).memoizedState,t);if(r&&(i.memoizedState=t,Xe=!0),i=i.queue,Gr(Du.bind(null,l,i,e),[e]),i.getSnapshot!==a||r||Ge!==null&&Ge.memoizedState.tag&1){if(l.flags|=2048,Jl(9,{destroy:void 0},Ou.bind(null,l,i,t,a),null),Te===null)throw Error(o(349));s||(dt&127)!==0||Mu(l,a,t)}return t}function Mu(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=le.updateQueue,a===null?(a=Yi(),le.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Ou(e,a,t,l){a.value=t,a.getSnapshot=l,Ru(a)&&_u(e)}function Du(e,a,t){return t(function(){Ru(a)&&_u(e)})}function Ru(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!Na(e,t)}catch{return!0}}function _u(e){var a=ll(e,2);a!==null&&ya(a,e,2)}function qr(e){var a=fa();if(typeof e=="function"){var t=e;if(e=t(),fl){Ka(!0);try{t()}finally{Ka(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ft,lastRenderedState:e},a}function Uu(e,a,t,l){return e.baseState=t,Lr(e,Ne,typeof l=="function"?l:ft)}function Wh(e,a,t,l,i){if(Zi(e))throw Error(o(485));if(e=a.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};D.T!==null?t(!0):s.isTransition=!1,l(s),t=a.pending,t===null?(s.next=a.pending=s,ku(a,s)):(s.next=t.next,a.pending=t.next=s)}}function ku(e,a){var t=a.action,l=a.payload,i=e.state;if(a.isTransition){var s=D.T,r={};D.T=r;try{var u=t(i,l),p=D.S;p!==null&&p(r,u),Hu(e,a,u)}catch(E){Yr(e,a,E)}finally{s!==null&&r.types!==null&&(s.types=r.types),D.T=s}}else try{s=t(i,l),Hu(e,a,s)}catch(E){Yr(e,a,E)}}function Hu(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Lu(e,a,l)},function(l){return Yr(e,a,l)}):Lu(e,a,t)}function Lu(e,a,t){a.status="fulfilled",a.value=t,Bu(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,ku(e,t)))}function Yr(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,Bu(a),a=a.next;while(a!==l)}e.action=null}function Bu(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function qu(e,a){return a}function Yu(e,a){if(me){var t=Te.formState;if(t!==null){e:{var l=le;if(me){if(Me){a:{for(var i=Me,s=Ha;i.nodeType!==8;){if(!s){i=null;break a}if(i=Ba(i.nextSibling),i===null){i=null;break a}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Me=Ba(i.nextSibling),l=i.data==="F!";break e}}Ct(l)}l=!1}l&&(a=t[0])}}return t=fa(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qu,lastRenderedState:a},t.queue=l,t=sd.bind(null,le,l),l.dispatch=t,l=qr(!1),s=Jr.bind(null,le,!1,l.queue),l=fa(),i={state:a,dispatch:null,action:e,pending:null},l.queue=i,t=Wh.bind(null,le,i,s,t),i.dispatch=t,l.memoizedState=e,[a,t,!1]}function Gu(e){var a=qe();return Xu(a,Ne,e)}function Xu(e,a,t){if(a=Lr(e,a,qu)[0],e=Xi(ft)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=_n(a)}catch(r){throw r===Gl?Ri:r}else l=a;a=qe();var i=a.queue,s=i.dispatch;return t!==a.memoizedState&&(le.flags|=2048,Jl(9,{destroy:void 0},Fh.bind(null,i,t),null)),[l,s,e]}function Fh(e,a){e.action=a}function Vu(e){var a=qe(),t=Ne;if(t!==null)return Xu(a,t,e);qe(),a=a.memoizedState,t=qe();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function Jl(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=le.updateQueue,a===null&&(a=Yi(),le.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function Qu(){return qe().memoizedState}function Vi(e,a,t,l){var i=fa();le.flags|=e,i.memoizedState=Jl(1|a,{destroy:void 0},t,l===void 0?null:l)}function Qi(e,a,t,l){var i=qe();l=l===void 0?null:l;var s=i.memoizedState.inst;Ne!==null&&l!==null&&Dr(l,Ne.memoizedState.deps)?i.memoizedState=Jl(a,s,t,l):(le.flags|=e,i.memoizedState=Jl(1|a,s,t,l))}function Zu(e,a){Vi(8390656,8,e,a)}function Gr(e,a){Qi(2048,8,e,a)}function Ih(e){le.flags|=4;var a=le.updateQueue;if(a===null)a=Yi(),le.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Ju(e){var a=qe().memoizedState;return Ih({ref:a,nextImpl:e}),function(){if((xe&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}function Ku(e,a){return Qi(4,2,e,a)}function $u(e,a){return Qi(4,4,e,a)}function Wu(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Fu(e,a,t){t=t!=null?t.concat([e]):null,Qi(4,4,Wu.bind(null,a,e),t)}function Xr(){}function Iu(e,a){var t=qe();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&Dr(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function Pu(e,a){var t=qe();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&Dr(a,l[1]))return l[0];if(l=e(),fl){Ka(!0);try{e()}finally{Ka(!1)}}return t.memoizedState=[l,a],l}function Vr(e,a,t){return t===void 0||(dt&1073741824)!==0&&(de&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=ef(),le.lanes|=e,Lt|=e,t)}function ed(e,a,t,l){return Na(t,a)?t:Vl.current!==null?(e=Vr(e,t,l),Na(e,a)||(Xe=!0),e):(dt&42)===0||(dt&1073741824)!==0&&(de&261930)===0?(Xe=!0,e.memoizedState=t):(e=ef(),le.lanes|=e,Lt|=e,a)}function ad(e,a,t,l,i){var s=Y.p;Y.p=s!==0&&8>s?s:8;var r=D.T,u={};D.T=u,Jr(e,!1,a,t);try{var p=i(),E=D.S;if(E!==null&&E(u,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var O=Jh(p,l);Un(e,a,O,Ca(e))}else Un(e,a,l,Ca(e))}catch(U){Un(e,a,{then:function(){},status:"rejected",reason:U},Ca())}finally{Y.p=s,r!==null&&u.types!==null&&(r.types=u.types),D.T=r}}function Ph(){}function Qr(e,a,t,l){if(e.tag!==5)throw Error(o(476));var i=td(e).queue;ad(e,i,a,I,t===null?Ph:function(){return ld(e),t(l)})}function td(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ft,lastRenderedState:I},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ft,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function ld(e){var a=td(e);a.next===null&&(a=e.alternate.memoizedState),Un(e,a.next.queue,{},Ca())}function Zr(){return aa(In)}function nd(){return qe().memoizedState}function id(){return qe().memoizedState}function ep(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Ca();e=Dt(t);var l=Rt(a,e,t);l!==null&&(ya(l,a,t),Mn(l,a,t)),a={cache:jr()},e.payload=a;return}a=a.return}}function ap(e,a,t){var l=Ca();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Zi(e)?rd(a,t):(t=ur(e,a,t,l),t!==null&&(ya(t,e,l),cd(t,a,l)))}function sd(e,a,t){var l=Ca();Un(e,a,t,l)}function Un(e,a,t,l){var i={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Zi(e))rd(a,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var r=a.lastRenderedState,u=s(r,t);if(i.hasEagerState=!0,i.eagerState=u,Na(u,r))return zi(e,a,i,0),Te===null&&Ei(),!1}catch{}if(t=ur(e,a,i,l),t!==null)return ya(t,e,l),cd(t,a,l),!0}return!1}function Jr(e,a,t,l){if(l={lane:2,revertLane:Ec(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Zi(e)){if(a)throw Error(o(479))}else a=ur(e,t,l,2),a!==null&&ya(a,e,2)}function Zi(e){var a=e.alternate;return e===le||a!==null&&a===le}function rd(e,a){Ql=Bi=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function cd(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Le(e,t)}}var kn={readContext:aa,use:Gi,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};kn.useEffectEvent=Ue;var od={readContext:aa,use:Gi,useCallback:function(e,a){return fa().memoizedState=[e,a===void 0?null:a],e},useContext:aa,useEffect:Zu,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Vi(4194308,4,Wu.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Vi(4194308,4,e,a)},useInsertionEffect:function(e,a){Vi(4,2,e,a)},useMemo:function(e,a){var t=fa();a=a===void 0?null:a;var l=e();if(fl){Ka(!0);try{e()}finally{Ka(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=fa();if(t!==void 0){var i=t(a);if(fl){Ka(!0);try{t(a)}finally{Ka(!1)}}}else i=a;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=ap.bind(null,le,e),[l.memoizedState,e]},useRef:function(e){var a=fa();return e={current:e},a.memoizedState=e},useState:function(e){e=qr(e);var a=e.queue,t=sd.bind(null,le,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Xr,useDeferredValue:function(e,a){var t=fa();return Vr(t,e,a)},useTransition:function(){var e=qr(!1);return e=ad.bind(null,le,e.queue,!0,!1),fa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=le,i=fa();if(me){if(t===void 0)throw Error(o(407));t=t()}else{if(t=a(),Te===null)throw Error(o(349));(de&127)!==0||Mu(l,a,t)}i.memoizedState=t;var s={value:t,getSnapshot:a};return i.queue=s,Zu(Du.bind(null,l,s,e),[e]),l.flags|=2048,Jl(9,{destroy:void 0},Ou.bind(null,l,s,t,a),null),t},useId:function(){var e=fa(),a=Te.identifierPrefix;if(me){var t=Wa,l=$a;t=(l&~(1<<32-da(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=qi++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Kh++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Zr,useFormState:Yu,useActionState:Yu,useOptimistic:function(e){var a=fa();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Jr.bind(null,le,!0,t),t.dispatch=a,[e,a]},useMemoCache:Hr,useCacheRefresh:function(){return fa().memoizedState=ep.bind(null,le)},useEffectEvent:function(e){var a=fa(),t={impl:e};return a.memoizedState=t,function(){if((xe&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}},Kr={readContext:aa,use:Gi,useCallback:Iu,useContext:aa,useEffect:Gr,useImperativeHandle:Fu,useInsertionEffect:Ku,useLayoutEffect:$u,useMemo:Pu,useReducer:Xi,useRef:Qu,useState:function(){return Xi(ft)},useDebugValue:Xr,useDeferredValue:function(e,a){var t=qe();return ed(t,Ne.memoizedState,e,a)},useTransition:function(){var e=Xi(ft)[0],a=qe().memoizedState;return[typeof e=="boolean"?e:_n(e),a]},useSyncExternalStore:Cu,useId:nd,useHostTransitionStatus:Zr,useFormState:Gu,useActionState:Gu,useOptimistic:function(e,a){var t=qe();return Uu(t,Ne,e,a)},useMemoCache:Hr,useCacheRefresh:id};Kr.useEffectEvent=Ju;var ud={readContext:aa,use:Gi,useCallback:Iu,useContext:aa,useEffect:Gr,useImperativeHandle:Fu,useInsertionEffect:Ku,useLayoutEffect:$u,useMemo:Pu,useReducer:Br,useRef:Qu,useState:function(){return Br(ft)},useDebugValue:Xr,useDeferredValue:function(e,a){var t=qe();return Ne===null?Vr(t,e,a):ed(t,Ne.memoizedState,e,a)},useTransition:function(){var e=Br(ft)[0],a=qe().memoizedState;return[typeof e=="boolean"?e:_n(e),a]},useSyncExternalStore:Cu,useId:nd,useHostTransitionStatus:Zr,useFormState:Vu,useActionState:Vu,useOptimistic:function(e,a){var t=qe();return Ne!==null?Uu(t,Ne,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Hr,useCacheRefresh:id};ud.useEffectEvent=Ju;function $r(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:A({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Wr={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=Ca(),i=Dt(l);i.payload=a,t!=null&&(i.callback=t),a=Rt(e,i,l),a!==null&&(ya(a,e,l),Mn(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=Ca(),i=Dt(l);i.tag=1,i.payload=a,t!=null&&(i.callback=t),a=Rt(e,i,l),a!==null&&(ya(a,e,l),Mn(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Ca(),l=Dt(t);l.tag=2,a!=null&&(l.callback=a),a=Rt(e,l,t),a!==null&&(ya(a,e,t),Mn(a,e,t))}};function dd(e,a,t,l,i,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,r):a.prototype&&a.prototype.isPureReactComponent?!Sn(t,l)||!Sn(i,s):!0}function fd(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&Wr.enqueueReplaceState(a,a.state,null)}function ml(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=A({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function md(e){wi(e)}function hd(e){console.error(e)}function pd(e){wi(e)}function Ji(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function gd(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Fr(e,a,t){return t=Dt(t),t.tag=3,t.payload={element:null},t.callback=function(){Ji(e,a)},t}function vd(e){return e=Dt(e),e.tag=3,e}function bd(e,a,t,l){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=l.value;e.payload=function(){return i(s)},e.callback=function(){gd(a,t,l)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){gd(a,t,l),typeof i!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function tp(e,a,t,l,i){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&Bl(a,t,i,!0),t=Ea.current,t!==null){switch(t.tag){case 31:case 13:return La===null?is():t.alternate===null&&ke===0&&(ke=3),t.flags&=-257,t.flags|=65536,t.lanes=i,l===_i?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),Sc(e,l,i)),!1;case 22:return t.flags|=65536,l===_i?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),Sc(e,l,i)),!1}throw Error(o(435,t.tag))}return Sc(e,l,i),is(),!1}if(me)return a=Ea.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,l!==gr&&(e=Error(o(422),{cause:l}),En(_a(e,t)))):(l!==gr&&(a=Error(o(423),{cause:l}),En(_a(a,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=_a(l,t),i=Fr(e.stateNode,l,i),Ar(e,i),ke!==4&&(ke=2)),!1;var s=Error(o(520),{cause:l});if(s=_a(s,t),Vn===null?Vn=[s]:Vn.push(s),ke!==4&&(ke=2),a===null)return!0;l=_a(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=Fr(t.stateNode,l,e),Ar(t,e),!1;case 1:if(a=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Bt===null||!Bt.has(s))))return t.flags|=65536,i&=-i,t.lanes|=i,i=vd(i),bd(i,e,t,l),Ar(t,i),!1}t=t.return}while(t!==null);return!1}var Ir=Error(o(461)),Xe=!1;function ta(e,a,t,l){a.child=e===null?Su(a,null,t,l):dl(a,e.child,t,l)}function xd(e,a,t,l,i){t=t.render;var s=a.ref;if("ref"in l){var r={};for(var u in l)u!=="ref"&&(r[u]=l[u])}else r=l;return rl(a),l=Rr(e,a,t,r,s,i),u=_r(),e!==null&&!Xe?(Ur(e,a,i),mt(e,a,i)):(me&&u&&hr(a),a.flags|=1,ta(e,a,l,i),a.child)}function yd(e,a,t,l,i){if(e===null){var s=t.type;return typeof s=="function"&&!dr(s)&&s.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=s,jd(e,a,s,l,i)):(e=Ti(t.type,null,l,a,a.mode,i),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,!sc(e,i)){var r=s.memoizedProps;if(t=t.compare,t=t!==null?t:Sn,t(r,l)&&e.ref===a.ref)return mt(e,a,i)}return a.flags|=1,e=rt(s,l),e.ref=a.ref,e.return=a,a.child=e}function jd(e,a,t,l,i){if(e!==null){var s=e.memoizedProps;if(Sn(s,l)&&e.ref===a.ref)if(Xe=!1,a.pendingProps=l=s,sc(e,i))(e.flags&131072)!==0&&(Xe=!0);else return a.lanes=e.lanes,mt(e,a,i)}return Pr(e,a,t,l,i)}function Sd(e,a,t,l){var i=l.children,s=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(l=a.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~s}else l=0,a.child=null;return Nd(e,a,s,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(a,s!==null?s.cachePool:null),s!==null?Eu(a,s):Cr(),zu(a);else return l=a.lanes=536870912,Nd(e,a,s!==null?s.baseLanes|t:t,t,l)}else s!==null?(Di(a,s.cachePool),Eu(a,s),Ut(),a.memoizedState=null):(e!==null&&Di(a,null),Cr(),Ut());return ta(e,a,i,t),a.child}function Hn(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Nd(e,a,t,l,i){var s=Nr();return s=s===null?null:{parent:Ye._currentValue,pool:s},a.memoizedState={baseLanes:t,cachePool:s},e!==null&&Di(a,null),Cr(),zu(a),e!==null&&Bl(e,a,l,!0),a.childLanes=i,null}function Ki(e,a){return a=Wi({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function wd(e,a,t){return dl(a,e.child,null,t),e=Ki(a,a.pendingProps),e.flags|=2,za(a),a.memoizedState=null,e}function lp(e,a,t){var l=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(me){if(l.mode==="hidden")return e=Ki(a,l),a.lanes=536870912,Hn(null,e);if(Or(a),(e=Me)?(e=Hf(e,Ha),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:At!==null?{id:$a,overflow:Wa}:null,retryLane:536870912,hydrationErrors:null},t=ru(e),t.return=a,a.child=t,ea=a,Me=null)):e=null,e===null)throw Ct(a);return a.lanes=536870912,null}return Ki(a,l)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Or(a),i)if(a.flags&256)a.flags&=-257,a=wd(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(o(558));else if(Xe||Bl(e,a,t,!1),i=(t&e.childLanes)!==0,Xe||i){if(l=Te,l!==null&&(r=ma(l,t),r!==0&&r!==s.retryLane))throw s.retryLane=r,ll(e,r),ya(l,e,r),Ir;is(),a=wd(e,a,t)}else e=s.treeContext,Me=Ba(r.nextSibling),ea=a,me=!0,Tt=null,Ha=!1,e!==null&&uu(a,e),a=Ki(a,l),a.flags|=4096;return a}return e=rt(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function $i(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Pr(e,a,t,l,i){return rl(a),t=Rr(e,a,t,l,void 0,i),l=_r(),e!==null&&!Xe?(Ur(e,a,i),mt(e,a,i)):(me&&l&&hr(a),a.flags|=1,ta(e,a,t,i),a.child)}function Ed(e,a,t,l,i,s){return rl(a),a.updateQueue=null,t=Tu(a,l,t,i),Au(e),l=_r(),e!==null&&!Xe?(Ur(e,a,s),mt(e,a,s)):(me&&l&&hr(a),a.flags|=1,ta(e,a,t,s),a.child)}function zd(e,a,t,l,i){if(rl(a),a.stateNode===null){var s=Ul,r=t.contextType;typeof r=="object"&&r!==null&&(s=aa(r)),s=new t(l,s),a.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Wr,a.stateNode=s,s._reactInternals=a,s=a.stateNode,s.props=l,s.state=a.memoizedState,s.refs={},Er(a),r=t.contextType,s.context=typeof r=="object"&&r!==null?aa(r):Ul,s.state=a.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&($r(a,t,r,l),s.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Wr.enqueueReplaceState(s,s.state,null),Dn(a,l,s,i),On(),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){s=a.stateNode;var u=a.memoizedProps,p=ml(t,u);s.props=p;var E=s.context,O=t.contextType;r=Ul,typeof O=="object"&&O!==null&&(r=aa(O));var U=t.getDerivedStateFromProps;O=typeof U=="function"||typeof s.getSnapshotBeforeUpdate=="function",u=a.pendingProps!==u,O||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u||E!==r)&&fd(a,s,l,r),Ot=!1;var z=a.memoizedState;s.state=z,Dn(a,l,s,i),On(),E=a.memoizedState,u||z!==E||Ot?(typeof U=="function"&&($r(a,t,U,l),E=a.memoizedState),(p=Ot||dd(a,t,p,l,z,E,r))?(O||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(a.flags|=4194308)):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=E),s.props=l,s.state=E,s.context=r,l=p):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{s=a.stateNode,zr(e,a),r=a.memoizedProps,O=ml(t,r),s.props=O,U=a.pendingProps,z=s.context,E=t.contextType,p=Ul,typeof E=="object"&&E!==null&&(p=aa(E)),u=t.getDerivedStateFromProps,(E=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==U||z!==p)&&fd(a,s,l,p),Ot=!1,z=a.memoizedState,s.state=z,Dn(a,l,s,i),On();var C=a.memoizedState;r!==U||z!==C||Ot||e!==null&&e.dependencies!==null&&Mi(e.dependencies)?(typeof u=="function"&&($r(a,t,u,l),C=a.memoizedState),(O=Ot||dd(a,t,O,l,z,C,p)||e!==null&&e.dependencies!==null&&Mi(e.dependencies))?(E||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,C,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,C,p)),typeof s.componentDidUpdate=="function"&&(a.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&z===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&z===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=C),s.props=l,s.state=C,s.context=p,l=O):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&z===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&z===e.memoizedState||(a.flags|=1024),l=!1)}return s=l,$i(e,a),l=(a.flags&128)!==0,s||l?(s=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:s.render(),a.flags|=1,e!==null&&l?(a.child=dl(a,e.child,null,i),a.child=dl(a,null,t,i)):ta(e,a,t,i),a.memoizedState=s.state,e=a.child):e=mt(e,a,i),e}function Ad(e,a,t,l){return il(),a.flags|=256,ta(e,a,t,l),a.child}var ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ac(e){return{baseLanes:e,cachePool:gu()}}function tc(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Ta),e}function Td(e,a,t){var l=a.pendingProps,i=!1,s=(a.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(i=!0,a.flags&=-129),r=(a.flags&32)!==0,a.flags&=-33,e===null){if(me){if(i?_t(a):Ut(),(e=Me)?(e=Hf(e,Ha),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:At!==null?{id:$a,overflow:Wa}:null,retryLane:536870912,hydrationErrors:null},t=ru(e),t.return=a,a.child=t,ea=a,Me=null)):e=null,e===null)throw Ct(a);return Lc(e)?a.lanes=32:a.lanes=536870912,null}var u=l.children;return l=l.fallback,i?(Ut(),i=a.mode,u=Wi({mode:"hidden",children:u},i),l=nl(l,i,t,null),u.return=a,l.return=a,u.sibling=l,a.child=u,l=a.child,l.memoizedState=ac(t),l.childLanes=tc(e,r,t),a.memoizedState=ec,Hn(null,l)):(_t(a),lc(a,u))}var p=e.memoizedState;if(p!==null&&(u=p.dehydrated,u!==null)){if(s)a.flags&256?(_t(a),a.flags&=-257,a=nc(e,a,t)):a.memoizedState!==null?(Ut(),a.child=e.child,a.flags|=128,a=null):(Ut(),u=l.fallback,i=a.mode,l=Wi({mode:"visible",children:l.children},i),u=nl(u,i,t,null),u.flags|=2,l.return=a,u.return=a,l.sibling=u,a.child=l,dl(a,e.child,null,t),l=a.child,l.memoizedState=ac(t),l.childLanes=tc(e,r,t),a.memoizedState=ec,a=Hn(null,l));else if(_t(a),Lc(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var E=r.dgst;r=E,l=Error(o(419)),l.stack="",l.digest=r,En({value:l,source:null,stack:null}),a=nc(e,a,t)}else if(Xe||Bl(e,a,t,!1),r=(t&e.childLanes)!==0,Xe||r){if(r=Te,r!==null&&(l=ma(r,t),l!==0&&l!==p.retryLane))throw p.retryLane=l,ll(e,l),ya(r,e,l),Ir;Hc(u)||is(),a=nc(e,a,t)}else Hc(u)?(a.flags|=192,a.child=e.child,a=null):(e=p.treeContext,Me=Ba(u.nextSibling),ea=a,me=!0,Tt=null,Ha=!1,e!==null&&uu(a,e),a=lc(a,l.children),a.flags|=4096);return a}return i?(Ut(),u=l.fallback,i=a.mode,p=e.child,E=p.sibling,l=rt(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,E!==null?u=rt(E,u):(u=nl(u,i,t,null),u.flags|=2),u.return=a,l.return=a,l.sibling=u,a.child=l,Hn(null,l),l=a.child,u=e.child.memoizedState,u===null?u=ac(t):(i=u.cachePool,i!==null?(p=Ye._currentValue,i=i.parent!==p?{parent:p,pool:p}:i):i=gu(),u={baseLanes:u.baseLanes|t,cachePool:i}),l.memoizedState=u,l.childLanes=tc(e,r,t),a.memoizedState=ec,Hn(e.child,l)):(_t(a),t=e.child,e=t.sibling,t=rt(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(r=a.deletions,r===null?(a.deletions=[e],a.flags|=16):r.push(e)),a.child=t,a.memoizedState=null,t)}function lc(e,a){return a=Wi({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Wi(e,a){return e=wa(22,e,null,a),e.lanes=0,e}function nc(e,a,t){return dl(a,e.child,null,t),e=lc(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Cd(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),xr(e.return,a,t)}function ic(e,a,t,l,i,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:i,treeForkCount:s}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=t,r.tailMode=i,r.treeForkCount=s)}function Md(e,a,t){var l=a.pendingProps,i=l.revealOrder,s=l.tail;l=l.children;var r=Be.current,u=(r&2)!==0;if(u?(r=r&1|2,a.flags|=128):r&=1,G(Be,r),ta(e,a,l,t),l=me?wn:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,t,a);else if(e.tag===19)Cd(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(t=a.child,i=null;t!==null;)e=t.alternate,e!==null&&Li(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=a.child,a.child=null):(i=t.sibling,t.sibling=null),ic(a,!1,i,t,s,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=a.child,a.child=null;i!==null;){if(e=i.alternate,e!==null&&Li(e)===null){a.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ic(a,!0,t,null,s,l);break;case"together":ic(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function mt(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),Lt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(Bl(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(o(153));if(a.child!==null){for(e=a.child,t=rt(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=rt(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function sc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Mi(e)))}function np(e,a,t){switch(a.tag){case 3:Je(a,a.stateNode.containerInfo),Mt(a,Ye,e.memoizedState.cache),il();break;case 27:case 5:et(a);break;case 4:Je(a,a.stateNode.containerInfo);break;case 10:Mt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Or(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(_t(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Td(e,a,t):(_t(a),e=mt(e,a,t),e!==null?e.sibling:null);_t(a);break;case 19:var i=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(Bl(e,a,t,!1),l=(t&a.childLanes)!==0),i){if(l)return Md(e,a,t);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Be,Be.current),l)break;return null;case 22:return a.lanes=0,Sd(e,a,t,a.pendingProps);case 24:Mt(a,Ye,e.memoizedState.cache)}return mt(e,a,t)}function Od(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Xe=!0;else{if(!sc(e,t)&&(a.flags&128)===0)return Xe=!1,np(e,a,t);Xe=(e.flags&131072)!==0}else Xe=!1,me&&(a.flags&1048576)!==0&&ou(a,wn,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=ol(a.elementType),a.type=e,typeof e=="function")dr(e)?(l=ml(e,l),a.tag=1,a=zd(null,a,e,l,t)):(a.tag=0,a=Pr(null,a,e,l,t));else{if(e!=null){var i=e.$$typeof;if(i===ie){a.tag=11,a=xd(null,a,e,l,t);break e}else if(i===ee){a.tag=14,a=yd(null,a,e,l,t);break e}}throw a=ja(e)||e,Error(o(306,a,""))}}return a;case 0:return Pr(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,i=ml(l,a.pendingProps),zd(e,a,l,i,t);case 3:e:{if(Je(a,a.stateNode.containerInfo),e===null)throw Error(o(387));l=a.pendingProps;var s=a.memoizedState;i=s.element,zr(e,a),Dn(a,l,null,t);var r=a.memoizedState;if(l=r.cache,Mt(a,Ye,l),l!==s.cache&&yr(a,[Ye],t,!0),On(),l=r.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:r.cache},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){a=Ad(e,a,l,t);break e}else if(l!==i){i=_a(Error(o(424)),a),En(i),a=Ad(e,a,l,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Me=Ba(e.firstChild),ea=a,me=!0,Tt=null,Ha=!0,t=Su(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(il(),l===i){a=mt(e,a,t);break e}ta(e,a,l,t)}a=a.child}return a;case 26:return $i(e,a),e===null?(t=Xf(a.type,null,a.pendingProps,null))?a.memoizedState=t:me||(t=a.type,e=a.pendingProps,l=fs(te.current).createElement(t),l[Pe]=a,l[ha]=e,la(l,t,e),Ke(l),a.stateNode=l):a.memoizedState=Xf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return et(a),e===null&&me&&(l=a.stateNode=qf(a.type,a.pendingProps,te.current),ea=a,Ha=!0,i=Me,Xt(a.type)?(Bc=i,Me=Ba(l.firstChild)):Me=i),ta(e,a,a.pendingProps.children,t),$i(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&me&&((i=l=Me)&&(l=_p(l,a.type,a.pendingProps,Ha),l!==null?(a.stateNode=l,ea=a,Me=Ba(l.firstChild),Ha=!1,i=!0):i=!1),i||Ct(a)),et(a),i=a.type,s=a.pendingProps,r=e!==null?e.memoizedProps:null,l=s.children,_c(i,s)?l=null:r!==null&&_c(i,r)&&(a.flags|=32),a.memoizedState!==null&&(i=Rr(e,a,$h,null,null,t),In._currentValue=i),$i(e,a),ta(e,a,l,t),a.child;case 6:return e===null&&me&&((e=t=Me)&&(t=Up(t,a.pendingProps,Ha),t!==null?(a.stateNode=t,ea=a,Me=null,e=!0):e=!1),e||Ct(a)),null;case 13:return Td(e,a,t);case 4:return Je(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=dl(a,null,l,t):ta(e,a,l,t),a.child;case 11:return xd(e,a,a.type,a.pendingProps,t);case 7:return ta(e,a,a.pendingProps,t),a.child;case 8:return ta(e,a,a.pendingProps.children,t),a.child;case 12:return ta(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,Mt(a,a.type,l.value),ta(e,a,l.children,t),a.child;case 9:return i=a.type._context,l=a.pendingProps.children,rl(a),i=aa(i),l=l(i),a.flags|=1,ta(e,a,l,t),a.child;case 14:return yd(e,a,a.type,a.pendingProps,t);case 15:return jd(e,a,a.type,a.pendingProps,t);case 19:return Md(e,a,t);case 31:return lp(e,a,t);case 22:return Sd(e,a,t,a.pendingProps);case 24:return rl(a),l=aa(Ye),e===null?(i=Nr(),i===null&&(i=Te,s=jr(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=t),i=s),a.memoizedState={parent:l,cache:i},Er(a),Mt(a,Ye,i)):((e.lanes&t)!==0&&(zr(e,a),Dn(a,null,null,t),On()),i=e.memoizedState,s=a.memoizedState,i.parent!==l?(i={parent:l,cache:l},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),Mt(a,Ye,l)):(l=s.cache,Mt(a,Ye,l),l!==i.cache&&yr(a,[Ye],t,!0))),ta(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(o(156,a.tag))}function ht(e){e.flags|=4}function rc(e,a,t,l,i){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(nf())e.flags|=8192;else throw ul=_i,wr}else e.flags&=-16777217}function Dd(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Kf(a))if(nf())e.flags|=8192;else throw ul=_i,wr}function Fi(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?jl():536870912,e.lanes|=a,Fl|=a)}function Ln(e,a){if(!me)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Oe(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function ip(e,a,t){var l=a.pendingProps;switch(pr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(a),null;case 1:return Oe(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ut(Ye),ye(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Ll(a)?ht(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,vr())),Oe(a),null;case 26:var i=a.type,s=a.memoizedState;return e===null?(ht(a),s!==null?(Oe(a),Dd(a,s)):(Oe(a),rc(a,i,null,l,t))):s?s!==e.memoizedState?(ht(a),Oe(a),Dd(a,s)):(Oe(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&ht(a),Oe(a),rc(a,i,e,l,t)),null;case 27:if(na(a),t=te.current,i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ht(a);else{if(!l){if(a.stateNode===null)throw Error(o(166));return Oe(a),null}e=Q.current,Ll(a)?du(a):(e=qf(i,l,t),a.stateNode=e,ht(a))}return Oe(a),null;case 5:if(na(a),i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ht(a);else{if(!l){if(a.stateNode===null)throw Error(o(166));return Oe(a),null}if(s=Q.current,Ll(a))du(a);else{var r=fs(te.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?r.createElement(i,{is:l.is}):r.createElement(i)}}s[Pe]=a,s[ha]=l;e:for(r=a.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}a.stateNode=s;e:switch(la(s,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ht(a)}}return Oe(a),rc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&ht(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(o(166));if(e=te.current,Ll(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,i=ea,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[Pe]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Cf(e.nodeValue,t)),e||Ct(a,!0)}else e=fs(e).createTextNode(l),e[Pe]=a,a.stateNode=e}return Oe(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=Ll(a),t!==null){if(e===null){if(!l)throw Error(o(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Pe]=a}else il(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Oe(a),e=!1}else t=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(za(a),a):(za(a),null);if((a.flags&128)!==0)throw Error(o(558))}return Oe(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ll(a),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Pe]=a}else il(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Oe(a),i=!1}else i=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(za(a),a):(za(a),null)}return za(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==i&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Fi(a,a.updateQueue),Oe(a),null);case 4:return ye(),e===null&&Cc(a.stateNode.containerInfo),Oe(a),null;case 10:return ut(a.type),Oe(a),null;case 19:if(k(Be),l=a.memoizedState,l===null)return Oe(a),null;if(i=(a.flags&128)!==0,s=l.rendering,s===null)if(i)Ln(l,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(s=Li(e),s!==null){for(a.flags|=128,Ln(l,!1),e=s.updateQueue,a.updateQueue=e,Fi(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)su(t,e),t=t.sibling;return G(Be,Be.current&1|2),me&&ct(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&ia()>ts&&(a.flags|=128,i=!0,Ln(l,!1),a.lanes=4194304)}else{if(!i)if(e=Li(s),e!==null){if(a.flags|=128,i=!0,e=e.updateQueue,a.updateQueue=e,Fi(a,e),Ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!me)return Oe(a),null}else 2*ia()-l.renderingStartTime>ts&&t!==536870912&&(a.flags|=128,i=!0,Ln(l,!1),a.lanes=4194304);l.isBackwards?(s.sibling=a.child,a.child=s):(e=l.last,e!==null?e.sibling=s:a.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ia(),e.sibling=null,t=Be.current,G(Be,i?t&1|2:t&1),me&&ct(a,l.treeForkCount),e):(Oe(a),null);case 22:case 23:return za(a),Mr(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(Oe(a),a.subtreeFlags&6&&(a.flags|=8192)):Oe(a),t=a.updateQueue,t!==null&&Fi(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&k(cl),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),ut(Ye),Oe(a),null;case 25:return null;case 30:return null}throw Error(o(156,a.tag))}function sp(e,a){switch(pr(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return ut(Ye),ye(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return na(a),null;case 31:if(a.memoizedState!==null){if(za(a),a.alternate===null)throw Error(o(340));il()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(za(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(o(340));il()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return k(Be),null;case 4:return ye(),null;case 10:return ut(a.type),null;case 22:case 23:return za(a),Mr(),e!==null&&k(cl),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return ut(Ye),null;case 25:return null;default:return null}}function Rd(e,a){switch(pr(a),a.tag){case 3:ut(Ye),ye();break;case 26:case 27:case 5:na(a);break;case 4:ye();break;case 31:a.memoizedState!==null&&za(a);break;case 13:za(a);break;case 19:k(Be);break;case 10:ut(a.type);break;case 22:case 23:za(a),Mr(),e!==null&&k(cl);break;case 24:ut(Ye)}}function Bn(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var i=l.next;t=i;do{if((t.tag&e)===e){l=void 0;var s=t.create,r=t.inst;l=s(),r.destroy=l}t=t.next}while(t!==i)}}catch(u){Se(a,a.return,u)}}function kt(e,a,t){try{var l=a.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var s=i.next;l=s;do{if((l.tag&e)===e){var r=l.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,i=a;var p=t,E=u;try{E()}catch(O){Se(i,p,O)}}}l=l.next}while(l!==s)}}catch(O){Se(a,a.return,O)}}function _d(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{wu(a,t)}catch(l){Se(e,e.return,l)}}}function Ud(e,a,t){t.props=ml(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){Se(e,a,l)}}function qn(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(i){Se(e,a,i)}}function Fa(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(i){Se(e,a,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Se(e,a,i)}else t.current=null}function kd(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(i){Se(e,e.return,i)}}function cc(e,a,t){try{var l=e.stateNode;Tp(l,e.type,t,a),l[ha]=a}catch(i){Se(e,e.return,i)}}function Hd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xt(e.type)||e.tag===4}function oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uc(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=it));else if(l!==4&&(l===27&&Xt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(uc(e,a,t),e=e.sibling;e!==null;)uc(e,a,t),e=e.sibling}function Ii(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&Xt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Ii(e,a,t),e=e.sibling;e!==null;)Ii(e,a,t),e=e.sibling}function Ld(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);la(a,l,t),a[Pe]=e,a[ha]=t}catch(s){Se(e,e.return,s)}}var pt=!1,Ve=!1,dc=!1,Bd=typeof WeakSet=="function"?WeakSet:Set,$e=null;function rp(e,a){if(e=e.containerInfo,Dc=xs,e=Fo(e),nr(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var i=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var r=0,u=-1,p=-1,E=0,O=0,U=e,z=null;a:for(;;){for(var C;U!==t||i!==0&&U.nodeType!==3||(u=r+i),U!==s||l!==0&&U.nodeType!==3||(p=r+l),U.nodeType===3&&(r+=U.nodeValue.length),(C=U.firstChild)!==null;)z=U,U=C;for(;;){if(U===e)break a;if(z===t&&++E===i&&(u=r),z===s&&++O===l&&(p=r),(C=U.nextSibling)!==null)break;U=z,z=U.parentNode}U=C}t=u===-1||p===-1?null:{start:u,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(Rc={focusedElem:e,selectionRange:t},xs=!1,$e=a;$e!==null;)if(a=$e,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,$e=e;else for(;$e!==null;){switch(a=$e,s=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)i=e[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=a,i=s.memoizedProps,s=s.memoizedState,l=t.stateNode;try{var Z=ml(t.type,i);e=l.getSnapshotBeforeUpdate(Z,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(P){Se(t,t.return,P)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)kc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=a.sibling,e!==null){e.return=a.return,$e=e;break}$e=a.return}}function qd(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:vt(e,t),l&4&&Bn(5,t);break;case 1:if(vt(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(r){Se(t,t.return,r)}else{var i=ml(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(i,a,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Se(t,t.return,r)}}l&64&&_d(t),l&512&&qn(t,t.return);break;case 3:if(vt(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{wu(e,a)}catch(r){Se(t,t.return,r)}}break;case 27:a===null&&l&4&&Ld(t);case 26:case 5:vt(e,t),a===null&&l&4&&kd(t),l&512&&qn(t,t.return);break;case 12:vt(e,t);break;case 31:vt(e,t),l&4&&Xd(e,t);break;case 13:vt(e,t),l&4&&Vd(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=gp.bind(null,t),kp(e,t))));break;case 22:if(l=t.memoizedState!==null||pt,!l){a=a!==null&&a.memoizedState!==null||Ve,i=pt;var s=Ve;pt=l,(Ve=a)&&!s?bt(e,t,(t.subtreeFlags&8772)!==0):vt(e,t),pt=i,Ve=s}break;case 30:break;default:vt(e,t)}}function Yd(e){var a=e.alternate;a!==null&&(e.alternate=null,Yd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Ys(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,ga=!1;function gt(e,a,t){for(t=t.child;t!==null;)Gd(e,a,t),t=t.sibling}function Gd(e,a,t){if(ua&&typeof ua.onCommitFiberUnmount=="function")try{ua.onCommitFiberUnmount(Ft,t)}catch{}switch(t.tag){case 26:Ve||Fa(t,a),gt(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ve||Fa(t,a);var l=De,i=ga;Xt(t.type)&&(De=t.stateNode,ga=!1),gt(e,a,t),$n(t.stateNode),De=l,ga=i;break;case 5:Ve||Fa(t,a);case 6:if(l=De,i=ga,De=null,gt(e,a,t),De=l,ga=i,De!==null)if(ga)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(t.stateNode)}catch(s){Se(t,a,s)}else try{De.removeChild(t.stateNode)}catch(s){Se(t,a,s)}break;case 18:De!==null&&(ga?(e=De,Uf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),sn(e)):Uf(De,t.stateNode));break;case 4:l=De,i=ga,De=t.stateNode.containerInfo,ga=!0,gt(e,a,t),De=l,ga=i;break;case 0:case 11:case 14:case 15:kt(2,t,a),Ve||kt(4,t,a),gt(e,a,t);break;case 1:Ve||(Fa(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Ud(t,a,l)),gt(e,a,t);break;case 21:gt(e,a,t);break;case 22:Ve=(l=Ve)||t.memoizedState!==null,gt(e,a,t),Ve=l;break;default:gt(e,a,t)}}function Xd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sn(e)}catch(t){Se(a,a.return,t)}}}function Vd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sn(e)}catch(t){Se(a,a.return,t)}}function cp(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Bd),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Bd),a;default:throw Error(o(435,e.tag))}}function Pi(e,a){var t=cp(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var i=vp.bind(null,e,l);l.then(i,i)}})}function va(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l],s=e,r=a,u=r;e:for(;u!==null;){switch(u.tag){case 27:if(Xt(u.type)){De=u.stateNode,ga=!1;break e}break;case 5:De=u.stateNode,ga=!1;break e;case 3:case 4:De=u.stateNode.containerInfo,ga=!0;break e}u=u.return}if(De===null)throw Error(o(160));Gd(s,r,i),De=null,ga=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Qd(a,e),a=a.sibling}var Qa=null;function Qd(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:va(a,e),ba(e),l&4&&(kt(3,e,e.return),Bn(3,e),kt(5,e,e.return));break;case 1:va(a,e),ba(e),l&512&&(Ve||t===null||Fa(t,t.return)),l&64&&pt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var i=Qa;if(va(a,e),ba(e),l&512&&(Ve||t===null||Fa(t,t.return)),l&4){var s=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,i=i.ownerDocument||i;a:switch(l){case"title":s=i.getElementsByTagName("title")[0],(!s||s[mn]||s[Pe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(l),i.head.insertBefore(s,i.querySelector("head > title"))),la(s,l,t),s[Pe]=e,Ke(s),l=s;break e;case"link":var r=Zf("link","href",i).get(l+(t.href||""));if(r){for(var u=0;u<r.length;u++)if(s=r[u],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){r.splice(u,1);break a}}s=i.createElement(l),la(s,l,t),i.head.appendChild(s);break;case"meta":if(r=Zf("meta","content",i).get(l+(t.content||""))){for(u=0;u<r.length;u++)if(s=r[u],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){r.splice(u,1);break a}}s=i.createElement(l),la(s,l,t),i.head.appendChild(s);break;default:throw Error(o(468,l))}s[Pe]=e,Ke(s),l=s}e.stateNode=l}else Jf(i,e.type,e.stateNode);else e.stateNode=Qf(i,l,e.memoizedProps);else s!==l?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,l===null?Jf(i,e.type,e.stateNode):Qf(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&cc(e,e.memoizedProps,t.memoizedProps)}break;case 27:va(a,e),ba(e),l&512&&(Ve||t===null||Fa(t,t.return)),t!==null&&l&4&&cc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(va(a,e),ba(e),l&512&&(Ve||t===null||Fa(t,t.return)),e.flags&32){i=e.stateNode;try{Tl(i,"")}catch(Z){Se(e,e.return,Z)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,cc(e,i,t!==null?t.memoizedProps:i)),l&1024&&(dc=!0);break;case 6:if(va(a,e),ba(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(Z){Se(e,e.return,Z)}}break;case 3:if(ps=null,i=Qa,Qa=ms(a.containerInfo),va(a,e),Qa=i,ba(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{sn(a.containerInfo)}catch(Z){Se(e,e.return,Z)}dc&&(dc=!1,Zd(e));break;case 4:l=Qa,Qa=ms(e.stateNode.containerInfo),va(a,e),ba(e),Qa=l;break;case 12:va(a,e),ba(e);break;case 31:va(a,e),ba(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pi(e,l)));break;case 13:va(a,e),ba(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(as=ia()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pi(e,l)));break;case 22:i=e.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,E=pt,O=Ve;if(pt=E||i,Ve=O||p,va(a,e),Ve=O,pt=E,ba(e),l&8192)e:for(a=e.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(t===null||p||pt||Ve||hl(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){p=t=a;try{if(s=p.stateNode,i)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{u=p.stateNode;var U=p.memoizedProps.style,z=U!=null&&U.hasOwnProperty("display")?U.display:null;u.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(Z){Se(p,p.return,Z)}}}else if(a.tag===6){if(t===null){p=a;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(Z){Se(p,p.return,Z)}}}else if(a.tag===18){if(t===null){p=a;try{var C=p.stateNode;i?kf(C,!0):kf(p.stateNode,!1)}catch(Z){Se(p,p.return,Z)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Pi(e,t))));break;case 19:va(a,e),ba(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pi(e,l)));break;case 30:break;case 21:break;default:va(a,e),ba(e)}}function ba(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(Hd(l)){t=l;break}l=l.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var i=t.stateNode,s=oc(e);Ii(e,s,i);break;case 5:var r=t.stateNode;t.flags&32&&(Tl(r,""),t.flags&=-33);var u=oc(e);Ii(e,u,r);break;case 3:case 4:var p=t.stateNode.containerInfo,E=oc(e);uc(e,E,p);break;default:throw Error(o(161))}}catch(O){Se(e,e.return,O)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Zd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Zd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function vt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)qd(e,a.alternate,a),a=a.sibling}function hl(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:kt(4,a,a.return),hl(a);break;case 1:Fa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Ud(a,a.return,t),hl(a);break;case 27:$n(a.stateNode);case 26:case 5:Fa(a,a.return),hl(a);break;case 22:a.memoizedState===null&&hl(a);break;case 30:hl(a);break;default:hl(a)}e=e.sibling}}function bt(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,i=e,s=a,r=s.flags;switch(s.tag){case 0:case 11:case 15:bt(i,s,t),Bn(4,s);break;case 1:if(bt(i,s,t),l=s,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(E){Se(l,l.return,E)}if(l=s,i=l.updateQueue,i!==null){var u=l.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)Nu(p[i],u)}catch(E){Se(l,l.return,E)}}t&&r&64&&_d(s),qn(s,s.return);break;case 27:Ld(s);case 26:case 5:bt(i,s,t),t&&l===null&&r&4&&kd(s),qn(s,s.return);break;case 12:bt(i,s,t);break;case 31:bt(i,s,t),t&&r&4&&Xd(i,s);break;case 13:bt(i,s,t),t&&r&4&&Vd(i,s);break;case 22:s.memoizedState===null&&bt(i,s,t),qn(s,s.return);break;case 30:break;default:bt(i,s,t)}a=a.sibling}}function fc(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&zn(t))}function mc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&zn(e))}function Za(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Jd(e,a,t,l),a=a.sibling}function Jd(e,a,t,l){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Za(e,a,t,l),i&2048&&Bn(9,a);break;case 1:Za(e,a,t,l);break;case 3:Za(e,a,t,l),i&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&zn(e)));break;case 12:if(i&2048){Za(e,a,t,l),e=a.stateNode;try{var s=a.memoizedProps,r=s.id,u=s.onPostCommit;typeof u=="function"&&u(r,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Se(a,a.return,p)}}else Za(e,a,t,l);break;case 31:Za(e,a,t,l);break;case 13:Za(e,a,t,l);break;case 23:break;case 22:s=a.stateNode,r=a.alternate,a.memoizedState!==null?s._visibility&2?Za(e,a,t,l):Yn(e,a):s._visibility&2?Za(e,a,t,l):(s._visibility|=2,Kl(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),i&2048&&fc(r,a);break;case 24:Za(e,a,t,l),i&2048&&mc(a.alternate,a);break;default:Za(e,a,t,l)}}function Kl(e,a,t,l,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var s=e,r=a,u=t,p=l,E=r.flags;switch(r.tag){case 0:case 11:case 15:Kl(s,r,u,p,i),Bn(8,r);break;case 23:break;case 22:var O=r.stateNode;r.memoizedState!==null?O._visibility&2?Kl(s,r,u,p,i):Yn(s,r):(O._visibility|=2,Kl(s,r,u,p,i)),i&&E&2048&&fc(r.alternate,r);break;case 24:Kl(s,r,u,p,i),i&&E&2048&&mc(r.alternate,r);break;default:Kl(s,r,u,p,i)}a=a.sibling}}function Yn(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,i=l.flags;switch(l.tag){case 22:Yn(t,l),i&2048&&fc(l.alternate,l);break;case 24:Yn(t,l),i&2048&&mc(l.alternate,l);break;default:Yn(t,l)}a=a.sibling}}var Gn=8192;function $l(e,a,t){if(e.subtreeFlags&Gn)for(e=e.child;e!==null;)Kd(e,a,t),e=e.sibling}function Kd(e,a,t){switch(e.tag){case 26:$l(e,a,t),e.flags&Gn&&e.memoizedState!==null&&Kp(t,Qa,e.memoizedState,e.memoizedProps);break;case 5:$l(e,a,t);break;case 3:case 4:var l=Qa;Qa=ms(e.stateNode.containerInfo),$l(e,a,t),Qa=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Gn,Gn=16777216,$l(e,a,t),Gn=l):$l(e,a,t));break;default:$l(e,a,t)}}function $d(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Xn(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];$e=l,Fd(l,e)}$d(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wd(e),e=e.sibling}function Wd(e){switch(e.tag){case 0:case 11:case 15:Xn(e),e.flags&2048&&kt(9,e,e.return);break;case 3:Xn(e);break;case 12:Xn(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,es(e)):Xn(e);break;default:Xn(e)}}function es(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];$e=l,Fd(l,e)}$d(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:kt(8,a,a.return),es(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,es(a));break;default:es(a)}e=e.sibling}}function Fd(e,a){for(;$e!==null;){var t=$e;switch(t.tag){case 0:case 11:case 15:kt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zn(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,$e=l;else e:for(t=e;$e!==null;){l=$e;var i=l.sibling,s=l.return;if(Yd(l),l===t){$e=null;break e}if(i!==null){i.return=s,$e=i;break e}$e=s}}}var op={getCacheForType:function(e){var a=aa(Ye),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return aa(Ye).controller.signal}},up=typeof WeakMap=="function"?WeakMap:Map,xe=0,Te=null,oe=null,de=0,je=0,Aa=null,Ht=!1,Wl=!1,hc=!1,xt=0,ke=0,Lt=0,pl=0,pc=0,Ta=0,Fl=0,Vn=null,xa=null,gc=!1,as=0,Id=0,ts=1/0,ls=null,Bt=null,Qe=0,qt=null,Il=null,yt=0,vc=0,bc=null,Pd=null,Qn=0,xc=null;function Ca(){return(xe&2)!==0&&de!==0?de&-de:D.T!==null?Ec():po()}function ef(){if(Ta===0)if((de&536870912)===0||me){var e=bl;bl<<=1,(bl&3932160)===0&&(bl=262144),Ta=e}else Ta=536870912;return e=Ea.current,e!==null&&(e.flags|=32),Ta}function ya(e,a,t){(e===Te&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(Pl(e,0),Yt(e,de,Ta,!1)),b(e,t),((xe&2)===0||e!==Te)&&(e===Te&&((xe&2)===0&&(pl|=t),ke===4&&Yt(e,de,Ta,!1)),Ia(e))}function af(e,a,t){if((xe&6)!==0)throw Error(o(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||It(e,a),i=l?mp(e,a):jc(e,a,!0),s=l;do{if(i===0){Wl&&!l&&Yt(e,a,0,!1);break}else{if(t=e.current.alternate,s&&!dp(t)){i=jc(e,a,!1),s=!1;continue}if(i===2){if(s=a,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){a=r;e:{var u=e;i=Vn;var p=u.current.memoizedState.isDehydrated;if(p&&(Pl(u,r).flags|=256),r=jc(u,r,!1),r!==2){if(hc&&!p){u.errorRecoveryDisabledLanes|=s,pl|=s,i=4;break e}s=xa,xa=i,s!==null&&(xa===null?xa=s:xa.push.apply(xa,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){Pl(e,0),Yt(e,a,0,!0);break}e:{switch(l=e,s=i,s){case 0:case 1:throw Error(o(345));case 4:if((a&4194048)!==a)break;case 6:Yt(l,a,Ta,!Ht);break e;case 2:xa=null;break;case 3:case 5:break;default:throw Error(o(329))}if((a&62914560)===a&&(i=as+300-ia(),10<i)){if(Yt(l,a,Ta,!Ht),yl(l,0,!0)!==0)break e;yt=a,l.timeoutHandle=Rf(tf.bind(null,l,t,xa,ls,gc,a,Ta,pl,Fl,Ht,s,"Throttled",-0,0),i);break e}tf(l,t,xa,ls,gc,a,Ta,pl,Fl,Ht,s,null,-0,0)}}break}while(!0);Ia(e)}function tf(e,a,t,l,i,s,r,u,p,E,O,U,z,C){if(e.timeoutHandle=-1,U=a.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:it},Kd(a,s,U);var Z=(s&62914560)===s?as-ia():(s&4194048)===s?Id-ia():0;if(Z=$p(U,Z),Z!==null){yt=s,e.cancelPendingCommit=Z(df.bind(null,e,a,s,t,l,i,r,u,p,O,U,null,z,C)),Yt(e,s,r,!E);return}}df(e,a,s,t,l,i,r,u,p)}function dp(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var i=t[l],s=i.getSnapshot;i=i.value;try{if(!Na(s(),i))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Yt(e,a,t,l){a&=~pc,a&=~pl,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var i=a;0<i;){var s=31-da(i),r=1<<s;l[s]=-1,i&=~r}t!==0&&Ie(e,t,a)}function ns(){return(xe&6)===0?(Zn(0),!1):!0}function yc(){if(oe!==null){if(je===0)var e=oe.return;else e=oe,ot=sl=null,kr(e),Xl=null,Tn=0,e=oe;for(;e!==null;)Rd(e.alternate,e),e=e.return;oe=null}}function Pl(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Op(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),yt=0,yc(),Te=e,oe=t=rt(e.current,null),de=a,je=0,Aa=null,Ht=!1,Wl=It(e,a),hc=!1,Fl=Ta=pc=pl=Lt=ke=0,xa=Vn=null,gc=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var i=31-da(l),s=1<<i;a|=e[i],l&=~s}return xt=a,Ei(),t}function lf(e,a){le=null,D.H=kn,a===Gl||a===Ri?(a=xu(),je=3):a===wr?(a=xu(),je=4):je=a===Ir?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Aa=a,oe===null&&(ke=1,Ji(e,_a(a,e.current)))}function nf(){var e=Ea.current;return e===null?!0:(de&4194048)===de?La===null:(de&62914560)===de||(de&536870912)!==0?e===La:!1}function sf(){var e=D.H;return D.H=kn,e===null?kn:e}function rf(){var e=D.A;return D.A=op,e}function is(){ke=4,Ht||(de&4194048)!==de&&Ea.current!==null||(Wl=!0),(Lt&134217727)===0&&(pl&134217727)===0||Te===null||Yt(Te,de,Ta,!1)}function jc(e,a,t){var l=xe;xe|=2;var i=sf(),s=rf();(Te!==e||de!==a)&&(ls=null,Pl(e,a)),a=!1;var r=ke;e:do try{if(je!==0&&oe!==null){var u=oe,p=Aa;switch(je){case 8:yc(),r=6;break e;case 3:case 2:case 9:case 6:Ea.current===null&&(a=!0);var E=je;if(je=0,Aa=null,en(e,u,p,E),t&&Wl){r=0;break e}break;default:E=je,je=0,Aa=null,en(e,u,p,E)}}fp(),r=ke;break}catch(O){lf(e,O)}while(!0);return a&&e.shellSuspendCounter++,ot=sl=null,xe=l,D.H=i,D.A=s,oe===null&&(Te=null,de=0,Ei()),r}function fp(){for(;oe!==null;)cf(oe)}function mp(e,a){var t=xe;xe|=2;var l=sf(),i=rf();Te!==e||de!==a?(ls=null,ts=ia()+500,Pl(e,a)):Wl=It(e,a);e:do try{if(je!==0&&oe!==null){a=oe;var s=Aa;a:switch(je){case 1:je=0,Aa=null,en(e,a,s,1);break;case 2:case 9:if(vu(s)){je=0,Aa=null,of(a);break}a=function(){je!==2&&je!==9||Te!==e||(je=7),Ia(e)},s.then(a,a);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:vu(s)?(je=0,Aa=null,of(a)):(je=0,Aa=null,en(e,a,s,7));break;case 5:var r=null;switch(oe.tag){case 26:r=oe.memoizedState;case 5:case 27:var u=oe;if(r?Kf(r):u.stateNode.complete){je=0,Aa=null;var p=u.sibling;if(p!==null)oe=p;else{var E=u.return;E!==null?(oe=E,ss(E)):oe=null}break a}}je=0,Aa=null,en(e,a,s,5);break;case 6:je=0,Aa=null,en(e,a,s,6);break;case 8:yc(),ke=6;break e;default:throw Error(o(462))}}hp();break}catch(O){lf(e,O)}while(!0);return ot=sl=null,D.H=l,D.A=i,xe=t,oe!==null?0:(Te=null,de=0,Ei(),ke)}function hp(){for(;oe!==null&&!ui();)cf(oe)}function cf(e){var a=Od(e.alternate,e,xt);e.memoizedProps=e.pendingProps,a===null?ss(e):oe=a}function of(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Ed(t,a,a.pendingProps,a.type,void 0,de);break;case 11:a=Ed(t,a,a.pendingProps,a.type.render,a.ref,de);break;case 5:kr(a);default:Rd(t,a),a=oe=su(a,xt),a=Od(t,a,xt)}e.memoizedProps=e.pendingProps,a===null?ss(e):oe=a}function en(e,a,t,l){ot=sl=null,kr(a),Xl=null,Tn=0;var i=a.return;try{if(tp(e,i,a,t,de)){ke=1,Ji(e,_a(t,e.current)),oe=null;return}}catch(s){if(i!==null)throw oe=i,s;ke=1,Ji(e,_a(t,e.current)),oe=null;return}a.flags&32768?(me||l===1?e=!0:Wl||(de&536870912)!==0?e=!1:(Ht=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ea.current,l!==null&&l.tag===13&&(l.flags|=16384))),uf(a,e)):ss(a)}function ss(e){var a=e;do{if((a.flags&32768)!==0){uf(a,Ht);return}e=a.return;var t=ip(a.alternate,a,xt);if(t!==null){oe=t;return}if(a=a.sibling,a!==null){oe=a;return}oe=a=e}while(a!==null);ke===0&&(ke=5)}function uf(e,a){do{var t=sp(e.alternate,e);if(t!==null){t.flags&=32767,oe=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){oe=e;return}oe=e=t}while(e!==null);ke=6,oe=null}function df(e,a,t,l,i,s,r,u,p){e.cancelPendingCommit=null;do rs();while(Qe!==0);if((xe&6)!==0)throw Error(o(327));if(a!==null){if(a===e.current)throw Error(o(177));if(s=a.lanes|a.childLanes,s|=or,$(e,t,s,r,u,p),e===Te&&(oe=Te=null,de=0),Il=a,qt=e,yt=t,vc=s,bc=i,Pd=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bp(Wt,function(){return gf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,i=Y.p,Y.p=2,r=xe,xe|=4;try{rp(e,a,t)}finally{xe=r,Y.p=i,D.T=l}}Qe=1,ff(),mf(),hf()}}function ff(){if(Qe===1){Qe=0;var e=qt,a=Il,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=D.T,D.T=null;var l=Y.p;Y.p=2;var i=xe;xe|=4;try{Qd(a,e);var s=Rc,r=Fo(e.containerInfo),u=s.focusedElem,p=s.selectionRange;if(r!==u&&u&&u.ownerDocument&&Wo(u.ownerDocument.documentElement,u)){if(p!==null&&nr(u)){var E=p.start,O=p.end;if(O===void 0&&(O=E),"selectionStart"in u)u.selectionStart=E,u.selectionEnd=Math.min(O,u.value.length);else{var U=u.ownerDocument||document,z=U&&U.defaultView||window;if(z.getSelection){var C=z.getSelection(),Z=u.textContent.length,P=Math.min(p.start,Z),Ee=p.end===void 0?P:Math.min(p.end,Z);!C.extend&&P>Ee&&(r=Ee,Ee=P,P=r);var N=$o(u,P),x=$o(u,Ee);if(N&&x&&(C.rangeCount!==1||C.anchorNode!==N.node||C.anchorOffset!==N.offset||C.focusNode!==x.node||C.focusOffset!==x.offset)){var w=U.createRange();w.setStart(N.node,N.offset),C.removeAllRanges(),P>Ee?(C.addRange(w),C.extend(x.node,x.offset)):(w.setEnd(x.node,x.offset),C.addRange(w))}}}}for(U=[],C=u;C=C.parentNode;)C.nodeType===1&&U.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<U.length;u++){var _=U[u];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}xs=!!Dc,Rc=Dc=null}finally{xe=i,Y.p=l,D.T=t}}e.current=a,Qe=2}}function mf(){if(Qe===2){Qe=0;var e=qt,a=Il,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=D.T,D.T=null;var l=Y.p;Y.p=2;var i=xe;xe|=4;try{qd(e,a.alternate,a)}finally{xe=i,Y.p=l,D.T=t}}Qe=3}}function hf(){if(Qe===4||Qe===3){Qe=0,Rs();var e=qt,a=Il,t=yt,l=Pd;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Qe=5:(Qe=0,Il=qt=null,pf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Bt=null),lt(t),a=a.stateNode,ua&&typeof ua.onCommitFiberRoot=="function")try{ua.onCommitFiberRoot(Ft,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=D.T,i=Y.p,Y.p=2,D.T=null;try{for(var s=e.onRecoverableError,r=0;r<l.length;r++){var u=l[r];s(u.value,{componentStack:u.stack})}}finally{D.T=a,Y.p=i}}(yt&3)!==0&&rs(),Ia(e),i=e.pendingLanes,(t&261930)!==0&&(i&42)!==0?e===xc?Qn++:(Qn=0,xc=e):Qn=0,Zn(0)}}function pf(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,zn(a)))}function rs(){return ff(),mf(),hf(),gf()}function gf(){if(Qe!==5)return!1;var e=qt,a=vc;vc=0;var t=lt(yt),l=D.T,i=Y.p;try{Y.p=32>t?32:t,D.T=null,t=bc,bc=null;var s=qt,r=yt;if(Qe=0,Il=qt=null,yt=0,(xe&6)!==0)throw Error(o(331));var u=xe;if(xe|=4,Wd(s.current),Jd(s,s.current,r,t),xe=u,Zn(0,!1),ua&&typeof ua.onPostCommitFiberRoot=="function")try{ua.onPostCommitFiberRoot(Ft,s)}catch{}return!0}finally{Y.p=i,D.T=l,pf(e,a)}}function vf(e,a,t){a=_a(t,a),a=Fr(e.stateNode,a,2),e=Rt(e,a,2),e!==null&&(b(e,2),Ia(e))}function Se(e,a,t){if(e.tag===3)vf(e,e,t);else for(;a!==null;){if(a.tag===3){vf(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Bt===null||!Bt.has(l))){e=_a(t,e),t=vd(2),l=Rt(a,t,2),l!==null&&(bd(t,l,a,e),b(l,2),Ia(l));break}}a=a.return}}function Sc(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new up;var i=new Set;l.set(a,i)}else i=l.get(a),i===void 0&&(i=new Set,l.set(a,i));i.has(t)||(hc=!0,i.add(t),e=pp.bind(null,e,a,t),a.then(e,e))}function pp(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Te===e&&(de&t)===t&&(ke===4||ke===3&&(de&62914560)===de&&300>ia()-as?(xe&2)===0&&Pl(e,0):pc|=t,Fl===de&&(Fl=0)),Ia(e)}function bf(e,a){a===0&&(a=jl()),e=ll(e,a),e!==null&&(b(e,a),Ia(e))}function gp(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),bf(e,t)}function vp(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(a),bf(e,t)}function bp(e,a){return oa(e,a)}var cs=null,an=null,Nc=!1,os=!1,wc=!1,Gt=0;function Ia(e){e!==an&&e.next===null&&(an===null?cs=an=e:an=an.next=e),os=!0,Nc||(Nc=!0,yp())}function Zn(e,a){if(!wc&&os){wc=!0;do for(var t=!1,l=cs;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var s=0;else{var r=l.suspendedLanes,u=l.pingedLanes;s=(1<<31-da(42|e)+1)-1,s&=i&~(r&~u),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,Sf(l,s))}else s=de,s=yl(l,l===Te?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||It(l,s)||(t=!0,Sf(l,s));l=l.next}while(t);wc=!1}}function xp(){xf()}function xf(){os=Nc=!1;var e=0;Gt!==0&&Mp()&&(e=Gt);for(var a=ia(),t=null,l=cs;l!==null;){var i=l.next,s=yf(l,a);s===0?(l.next=null,t===null?cs=i:t.next=i,i===null&&(an=t)):(t=l,(e!==0||(s&3)!==0)&&(os=!0)),l=i}Qe!==0&&Qe!==5||Zn(e),Gt!==0&&(Gt=0)}function yf(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-da(s),u=1<<r,p=i[r];p===-1?((u&t)===0||(u&l)!==0)&&(i[r]=Bs(u,a)):p<=a&&(e.expiredLanes|=u),s&=~u}if(a=Te,t=de,t=yl(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(je===2||je===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&on(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||It(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&on(l),lt(t)){case 2:case 8:t=dn;break;case 32:t=Wt;break;case 268435456:t=fi;break;default:t=Wt}return l=jf.bind(null,e),t=oa(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&on(l),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,a){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(rs()&&e.callbackNode!==t)return null;var l=de;return l=yl(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(af(e,l,a),yf(e,ia()),e.callbackNode!=null&&e.callbackNode===t?jf.bind(null,e):null)}function Sf(e,a){if(rs())return null;af(e,a,!0)}function yp(){Dp(function(){(xe&6)!==0?oa(un,xp):xf()})}function Ec(){if(Gt===0){var e=ql;e===0&&(e=vl,vl<<=1,(vl&261888)===0&&(vl=256)),Gt=e}return Gt}function Nf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vi(""+e)}function wf(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function jp(e,a,t,l,i){if(a==="submit"&&t&&t.stateNode===i){var s=Nf((i[ha]||null).action),r=l.submitter;r&&(a=(a=r[ha]||null)?Nf(a.formAction):r.getAttribute("formAction"),a!==null&&(s=a,r=null));var u=new ji("action","action",null,l,i);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Gt!==0){var p=r?wf(i,r):new FormData(i);Qr(t,{pending:!0,data:p,method:i.method,action:s},null,p)}}else typeof s=="function"&&(u.preventDefault(),p=r?wf(i,r):new FormData(i),Qr(t,{pending:!0,data:p,method:i.method,action:s},s,p))},currentTarget:i}]})}}for(var zc=0;zc<cr.length;zc++){var Ac=cr[zc],Sp=Ac.toLowerCase(),Np=Ac[0].toUpperCase()+Ac.slice(1);Va(Sp,"on"+Np)}Va(eu,"onAnimationEnd"),Va(au,"onAnimationIteration"),Va(tu,"onAnimationStart"),Va("dblclick","onDoubleClick"),Va("focusin","onFocus"),Va("focusout","onBlur"),Va(Bh,"onTransitionRun"),Va(qh,"onTransitionStart"),Va(Yh,"onTransitionCancel"),Va(lu,"onTransitionEnd"),zl("onMouseEnter",["mouseout","mouseover"]),zl("onMouseLeave",["mouseout","mouseover"]),zl("onPointerEnter",["pointerout","pointerover"]),zl("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jn));function Ef(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],i=l.event;l=l.listeners;e:{var s=void 0;if(a)for(var r=l.length-1;0<=r;r--){var u=l[r],p=u.instance,E=u.currentTarget;if(u=u.listener,p!==s&&i.isPropagationStopped())break e;s=u,i.currentTarget=E;try{s(i)}catch(O){wi(O)}i.currentTarget=null,s=p}else for(r=0;r<l.length;r++){if(u=l[r],p=u.instance,E=u.currentTarget,u=u.listener,p!==s&&i.isPropagationStopped())break e;s=u,i.currentTarget=E;try{s(i)}catch(O){wi(O)}i.currentTarget=null,s=p}}}}function ue(e,a){var t=a[qs];t===void 0&&(t=a[qs]=new Set);var l=e+"__bubble";t.has(l)||(zf(a,e,2,!1),t.add(l))}function Tc(e,a,t){var l=0;a&&(l|=4),zf(t,e,l,a)}var us="_reactListening"+Math.random().toString(36).slice(2);function Cc(e){if(!e[us]){e[us]=!0,bo.forEach(function(t){t!=="selectionchange"&&(wp.has(t)||Tc(t,!1,e),Tc(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[us]||(a[us]=!0,Tc("selectionchange",!1,a))}}function zf(e,a,t,l){switch(am(a)){case 2:var i=Ip;break;case 8:i=Pp;break;default:i=Vc}t=i.bind(null,a,t,e),i=void 0,!$s||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(a,t,{capture:!0,passive:i}):e.addEventListener(a,t,!0):i!==void 0?e.addEventListener(a,t,{passive:i}):e.addEventListener(a,t,!1)}function Mc(e,a,t,l,i){var s=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var u=l.stateNode.containerInfo;if(u===i)break;if(r===4)for(r=l.return;r!==null;){var p=r.tag;if((p===3||p===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;u!==null;){if(r=Nl(u),r===null)return;if(p=r.tag,p===5||p===6||p===26||p===27){l=s=r;continue e}u=u.parentNode}}l=l.return}Mo(function(){var E=s,O=Js(t),U=[];e:{var z=nu.get(e);if(z!==void 0){var C=ji,Z=e;switch(e){case"keypress":if(xi(t)===0)break e;case"keydown":case"keyup":C=vh;break;case"focusin":Z="focus",C=Ps;break;case"focusout":Z="blur",C=Ps;break;case"beforeblur":case"afterblur":C=Ps;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=yh;break;case eu:case au:case tu:C=ch;break;case lu:C=Sh;break;case"scroll":case"scrollend":C=lh;break;case"wheel":C=wh;break;case"copy":case"cut":case"paste":C=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Uo;break;case"toggle":case"beforetoggle":C=zh}var P=(a&4)!==0,Ee=!P&&(e==="scroll"||e==="scrollend"),N=P?z!==null?z+"Capture":null:z;P=[];for(var x=E,w;x!==null;){var _=x;if(w=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||w===null||N===null||(_=pn(x,N),_!=null&&P.push(Kn(x,_,w))),Ee)break;x=x.return}0<P.length&&(z=new C(z,Z,null,t,O),U.push({event:z,listeners:P}))}}if((a&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",z&&t!==Zs&&(Z=t.relatedTarget||t.fromElement)&&(Nl(Z)||Z[Sl]))break e;if((C||z)&&(z=O.window===O?O:(z=O.ownerDocument)?z.defaultView||z.parentWindow:window,C?(Z=t.relatedTarget||t.toElement,C=E,Z=Z?Nl(Z):null,Z!==null&&(Ee=h(Z),P=Z.tag,Z!==Ee||P!==5&&P!==27&&P!==6)&&(Z=null)):(C=null,Z=E),C!==Z)){if(P=Ro,_="onMouseLeave",N="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(P=Uo,_="onPointerLeave",N="onPointerEnter",x="pointer"),Ee=C==null?z:hn(C),w=Z==null?z:hn(Z),z=new P(_,x+"leave",C,t,O),z.target=Ee,z.relatedTarget=w,_=null,Nl(O)===E&&(P=new P(N,x+"enter",Z,t,O),P.target=w,P.relatedTarget=Ee,_=P),Ee=_,C&&Z)a:{for(P=Ep,N=C,x=Z,w=0,_=N;_;_=P(_))w++;_=0;for(var W=x;W;W=P(W))_++;for(;0<w-_;)N=P(N),w--;for(;0<_-w;)x=P(x),_--;for(;w--;){if(N===x||x!==null&&N===x.alternate){P=N;break a}N=P(N),x=P(x)}P=null}else P=null;C!==null&&Af(U,z,C,P,!1),Z!==null&&Ee!==null&&Af(U,Ee,Z,P,!0)}}e:{if(z=E?hn(E):window,C=z.nodeName&&z.nodeName.toLowerCase(),C==="select"||C==="input"&&z.type==="file")var ge=Xo;else if(Yo(z))if(Vo)ge=kh;else{ge=_h;var J=Rh}else C=z.nodeName,!C||C.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?E&&Qs(E.elementType)&&(ge=Xo):ge=Uh;if(ge&&(ge=ge(e,E))){Go(U,ge,t,O);break e}J&&J(e,z,E),e==="focusout"&&E&&z.type==="number"&&E.memoizedProps.value!=null&&Vs(z,"number",z.value)}switch(J=E?hn(E):window,e){case"focusin":(Yo(J)||J.contentEditable==="true")&&(Dl=J,ir=E,Nn=null);break;case"focusout":Nn=ir=Dl=null;break;case"mousedown":sr=!0;break;case"contextmenu":case"mouseup":case"dragend":sr=!1,Io(U,t,O);break;case"selectionchange":if(Lh)break;case"keydown":case"keyup":Io(U,t,O)}var ne;if(ar)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ol?Bo(e,t)&&(fe="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(fe="onCompositionStart");fe&&(ko&&t.locale!=="ko"&&(Ol||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ol&&(ne=Oo()):(zt=O,Ws="value"in zt?zt.value:zt.textContent,Ol=!0)),J=ds(E,fe),0<J.length&&(fe=new _o(fe,e,null,t,O),U.push({event:fe,listeners:J}),ne?fe.data=ne:(ne=qo(t),ne!==null&&(fe.data=ne)))),(ne=Th?Ch(e,t):Mh(e,t))&&(fe=ds(E,"onBeforeInput"),0<fe.length&&(J=new _o("onBeforeInput","beforeinput",null,t,O),U.push({event:J,listeners:fe}),J.data=ne)),jp(U,e,E,t,O)}Ef(U,a)})}function Kn(e,a,t){return{instance:e,listener:a,currentTarget:t}}function ds(e,a){for(var t=a+"Capture",l=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=pn(e,t),i!=null&&l.unshift(Kn(e,i,s)),i=pn(e,a),i!=null&&l.push(Kn(e,i,s))),e.tag===3)return l;e=e.return}return[]}function Ep(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Af(e,a,t,l,i){for(var s=a._reactName,r=[];t!==null&&t!==l;){var u=t,p=u.alternate,E=u.stateNode;if(u=u.tag,p!==null&&p===l)break;u!==5&&u!==26&&u!==27||E===null||(p=E,i?(E=pn(t,s),E!=null&&r.unshift(Kn(t,E,p))):i||(E=pn(t,s),E!=null&&r.push(Kn(t,E,p)))),t=t.return}r.length!==0&&e.push({event:a,listeners:r})}var zp=/\r\n?/g,Ap=/\u0000|\uFFFD/g;function Tf(e){return(typeof e=="string"?e:""+e).replace(zp,`
`).replace(Ap,"")}function Cf(e,a){return a=Tf(a),Tf(e)===a}function we(e,a,t,l,i,s){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Tl(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Tl(e,""+l);break;case"className":pi(e,"class",l);break;case"tabIndex":pi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(e,t,l);break;case"style":To(e,l,s);break;case"data":if(a!=="object"){pi(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=vi(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(a!=="input"&&we(e,a,"name",i.name,i,null),we(e,a,"formEncType",i.formEncType,i,null),we(e,a,"formMethod",i.formMethod,i,null),we(e,a,"formTarget",i.formTarget,i,null)):(we(e,a,"encType",i.encType,i,null),we(e,a,"method",i.method,i,null),we(e,a,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=vi(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=it);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=vi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":ue("beforetoggle",e),ue("toggle",e),hi(e,"popover",l);break;case"xlinkActuate":nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":nt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":nt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":nt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":nt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":hi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=ah.get(t)||t,hi(e,t,l))}}function Oc(e,a,t,l,i,s){switch(t){case"style":To(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"children":typeof l=="string"?Tl(e,l):(typeof l=="number"||typeof l=="bigint")&&Tl(e,""+l);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"onClick":l!=null&&(e.onclick=it);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xo.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),a=t.slice(2,i?t.length-7:void 0),s=e[ha]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(a,s,i),typeof l=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,i);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):hi(e,t,l)}}}function la(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var l=!1,i=!1,s;for(s in t)if(t.hasOwnProperty(s)){var r=t[s];if(r!=null)switch(s){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:we(e,a,s,r,t,null)}}i&&we(e,a,"srcSet",t.srcSet,t,null),l&&we(e,a,"src",t.src,t,null);return;case"input":ue("invalid",e);var u=s=r=i=null,p=null,E=null;for(l in t)if(t.hasOwnProperty(l)){var O=t[l];if(O!=null)switch(l){case"name":i=O;break;case"type":r=O;break;case"checked":p=O;break;case"defaultChecked":E=O;break;case"value":s=O;break;case"defaultValue":u=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,a));break;default:we(e,a,l,O,t,null)}}wo(e,s,u,p,E,r,i,!1);return;case"select":ue("invalid",e),l=r=s=null;for(i in t)if(t.hasOwnProperty(i)&&(u=t[i],u!=null))switch(i){case"value":s=u;break;case"defaultValue":r=u;break;case"multiple":l=u;default:we(e,a,i,u,t,null)}a=s,t=r,e.multiple=!!l,a!=null?Al(e,!!l,a,!1):t!=null&&Al(e,!!l,t,!0);return;case"textarea":ue("invalid",e),s=i=l=null;for(r in t)if(t.hasOwnProperty(r)&&(u=t[r],u!=null))switch(r){case"value":l=u;break;case"defaultValue":i=u;break;case"children":s=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:we(e,a,r,u,t,null)}zo(e,l,i,s);return;case"option":for(p in t)t.hasOwnProperty(p)&&(l=t[p],l!=null)&&(p==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":we(e,a,p,l,t,null));return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(l=0;l<Jn.length;l++)ue(Jn[l],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in t)if(t.hasOwnProperty(E)&&(l=t[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:we(e,a,E,l,t,null)}return;default:if(Qs(a)){for(O in t)t.hasOwnProperty(O)&&(l=t[O],l!==void 0&&Oc(e,a,O,l,t,void 0));return}}for(u in t)t.hasOwnProperty(u)&&(l=t[u],l!=null&&we(e,a,u,l,t,null))}function Tp(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,u=null,p=null,E=null,O=null;for(C in t){var U=t[C];if(t.hasOwnProperty(C)&&U!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":p=U;default:l.hasOwnProperty(C)||we(e,a,C,null,l,U)}}for(var z in l){var C=l[z];if(U=t[z],l.hasOwnProperty(z)&&(C!=null||U!=null))switch(z){case"type":s=C;break;case"name":i=C;break;case"checked":E=C;break;case"defaultChecked":O=C;break;case"value":r=C;break;case"defaultValue":u=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(137,a));break;default:C!==U&&we(e,a,z,C,l,U)}}Xs(e,r,u,p,E,O,s,i);return;case"select":C=r=u=z=null;for(s in t)if(p=t[s],t.hasOwnProperty(s)&&p!=null)switch(s){case"value":break;case"multiple":C=p;default:l.hasOwnProperty(s)||we(e,a,s,null,l,p)}for(i in l)if(s=l[i],p=t[i],l.hasOwnProperty(i)&&(s!=null||p!=null))switch(i){case"value":z=s;break;case"defaultValue":u=s;break;case"multiple":r=s;default:s!==p&&we(e,a,i,s,l,p)}a=u,t=r,l=C,z!=null?Al(e,!!t,z,!1):!!l!=!!t&&(a!=null?Al(e,!!t,a,!0):Al(e,!!t,t?[]:"",!1));return;case"textarea":C=z=null;for(u in t)if(i=t[u],t.hasOwnProperty(u)&&i!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:we(e,a,u,null,l,i)}for(r in l)if(i=l[r],s=t[r],l.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":z=i;break;case"defaultValue":C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==s&&we(e,a,r,i,l,s)}Eo(e,z,C);return;case"option":for(var Z in t)z=t[Z],t.hasOwnProperty(Z)&&z!=null&&!l.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:we(e,a,Z,null,l,z));for(p in l)z=l[p],C=t[p],l.hasOwnProperty(p)&&z!==C&&(z!=null||C!=null)&&(p==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":we(e,a,p,z,l,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in t)z=t[P],t.hasOwnProperty(P)&&z!=null&&!l.hasOwnProperty(P)&&we(e,a,P,null,l,z);for(E in l)if(z=l[E],C=t[E],l.hasOwnProperty(E)&&z!==C&&(z!=null||C!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,a));break;default:we(e,a,E,z,l,C)}return;default:if(Qs(a)){for(var Ee in t)z=t[Ee],t.hasOwnProperty(Ee)&&z!==void 0&&!l.hasOwnProperty(Ee)&&Oc(e,a,Ee,void 0,l,z);for(O in l)z=l[O],C=t[O],!l.hasOwnProperty(O)||z===C||z===void 0&&C===void 0||Oc(e,a,O,z,l,C);return}}for(var N in t)z=t[N],t.hasOwnProperty(N)&&z!=null&&!l.hasOwnProperty(N)&&we(e,a,N,null,l,z);for(U in l)z=l[U],C=t[U],!l.hasOwnProperty(U)||z===C||z==null&&C==null||we(e,a,U,z,l,C)}function Mf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var i=t[l],s=i.transferSize,r=i.initiatorType,u=i.duration;if(s&&u&&Mf(r)){for(r=0,u=i.responseEnd,l+=1;l<t.length;l++){var p=t[l],E=p.startTime;if(E>u)break;var O=p.transferSize,U=p.initiatorType;O&&Mf(U)&&(p=p.responseEnd,r+=O*(p<u?1:(u-E)/(p-E)))}if(--l,a+=8*(s+r)/(i.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Dc=null,Rc=null;function fs(e){return e.nodeType===9?e:e.ownerDocument}function Of(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Df(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function _c(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Uc=null;function Mp(){var e=window.event;return e&&e.type==="popstate"?e===Uc?!1:(Uc=e,!0):(Uc=null,!1)}var Rf=typeof setTimeout=="function"?setTimeout:void 0,Op=typeof clearTimeout=="function"?clearTimeout:void 0,_f=typeof Promise=="function"?Promise:void 0,Dp=typeof queueMicrotask=="function"?queueMicrotask:typeof _f<"u"?function(e){return _f.resolve(null).then(e).catch(Rp)}:Rf;function Rp(e){setTimeout(function(){throw e})}function Xt(e){return e==="head"}function Uf(e,a){var t=a,l=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(i),sn(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")$n(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,$n(t);for(var s=t.firstChild;s;){var r=s.nextSibling,u=s.nodeName;s[mn]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=r}}else t==="body"&&$n(e.ownerDocument.body);t=i}while(t);sn(a)}function kf(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function kc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":kc(t),Ys(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function _p(e,a,t,l){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[mn])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Ba(e.nextSibling),e===null)break}return null}function Up(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ba(e.nextSibling),e===null))return null;return e}function Hf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ba(e.nextSibling),e===null))return null;return e}function Hc(e){return e.data==="$?"||e.data==="$~"}function Lc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kp(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ba(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Bc=null;function Lf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Ba(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Bf(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function qf(e,a,t){switch(a=fs(t),e){case"html":if(e=a.documentElement,!e)throw Error(o(452));return e;case"head":if(e=a.head,!e)throw Error(o(453));return e;case"body":if(e=a.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function $n(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ys(e)}var qa=new Map,Yf=new Set;function ms(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var jt=Y.d;Y.d={f:Hp,r:Lp,D:Bp,C:qp,L:Yp,m:Gp,X:Vp,S:Xp,M:Qp};function Hp(){var e=jt.f(),a=ns();return e||a}function Lp(e){var a=wl(e);a!==null&&a.tag===5&&a.type==="form"?ld(a):jt.r(e)}var tn=typeof document>"u"?null:document;function Gf(e,a,t){var l=tn;if(l&&typeof a=="string"&&a){var i=Da(a);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Yf.has(i)||(Yf.add(i),e={rel:e,crossOrigin:t,href:a},l.querySelector(i)===null&&(a=l.createElement("link"),la(a,"link",e),Ke(a),l.head.appendChild(a)))}}function Bp(e){jt.D(e),Gf("dns-prefetch",e,null)}function qp(e,a){jt.C(e,a),Gf("preconnect",e,a)}function Yp(e,a,t){jt.L(e,a,t);var l=tn;if(l&&e&&a){var i='link[rel="preload"][as="'+Da(a)+'"]';a==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Da(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Da(t.imageSizes)+'"]')):i+='[href="'+Da(e)+'"]';var s=i;switch(a){case"style":s=ln(e);break;case"script":s=nn(e)}qa.has(s)||(e=A({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),qa.set(s,e),l.querySelector(i)!==null||a==="style"&&l.querySelector(Wn(s))||a==="script"&&l.querySelector(Fn(s))||(a=l.createElement("link"),la(a,"link",e),Ke(a),l.head.appendChild(a)))}}function Gp(e,a){jt.m(e,a);var t=tn;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+Da(l)+'"][href="'+Da(e)+'"]',s=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=nn(e)}if(!qa.has(s)&&(e=A({rel:"modulepreload",href:e},a),qa.set(s,e),t.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Fn(s)))return}l=t.createElement("link"),la(l,"link",e),Ke(l),t.head.appendChild(l)}}}function Xp(e,a,t){jt.S(e,a,t);var l=tn;if(l&&e){var i=El(l).hoistableStyles,s=ln(e);a=a||"default";var r=i.get(s);if(!r){var u={loading:0,preload:null};if(r=l.querySelector(Wn(s)))u.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":a},t),(t=qa.get(s))&&qc(e,t);var p=r=l.createElement("link");Ke(p),la(p,"link",e),p._p=new Promise(function(E,O){p.onload=E,p.onerror=O}),p.addEventListener("load",function(){u.loading|=1}),p.addEventListener("error",function(){u.loading|=2}),u.loading|=4,hs(r,a,l)}r={type:"stylesheet",instance:r,count:1,state:u},i.set(s,r)}}}function Vp(e,a){jt.X(e,a);var t=tn;if(t&&e){var l=El(t).hoistableScripts,i=nn(e),s=l.get(i);s||(s=t.querySelector(Fn(i)),s||(e=A({src:e,async:!0},a),(a=qa.get(i))&&Yc(e,a),s=t.createElement("script"),Ke(s),la(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(i,s))}}function Qp(e,a){jt.M(e,a);var t=tn;if(t&&e){var l=El(t).hoistableScripts,i=nn(e),s=l.get(i);s||(s=t.querySelector(Fn(i)),s||(e=A({src:e,async:!0,type:"module"},a),(a=qa.get(i))&&Yc(e,a),s=t.createElement("script"),Ke(s),la(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(i,s))}}function Xf(e,a,t,l){var i=(i=te.current)?ms(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=ln(t.href),t=El(i).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=ln(t.href);var s=El(i).hoistableStyles,r=s.get(e);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=i.querySelector(Wn(e)))&&!s._p&&(r.instance=s,r.state.loading=5),qa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},qa.set(e,t),s||Zp(i,e,t,r.state))),a&&l===null)throw Error(o(528,""));return r}if(a&&l!==null)throw Error(o(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=nn(t),t=El(i).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ln(e){return'href="'+Da(e)+'"'}function Wn(e){return'link[rel="stylesheet"]['+e+"]"}function Vf(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function Zp(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),la(a,"link",t),Ke(a),e.head.appendChild(a))}function nn(e){return'[src="'+Da(e)+'"]'}function Fn(e){return"script[async]"+e}function Qf(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+Da(t.href)+'"]');if(l)return a.instance=l,Ke(l),l;var i=A({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ke(l),la(l,"style",i),hs(l,t.precedence,e),a.instance=l;case"stylesheet":i=ln(t.href);var s=e.querySelector(Wn(i));if(s)return a.state.loading|=4,a.instance=s,Ke(s),s;l=Vf(t),(i=qa.get(i))&&qc(l,i),s=(e.ownerDocument||e).createElement("link"),Ke(s);var r=s;return r._p=new Promise(function(u,p){r.onload=u,r.onerror=p}),la(s,"link",l),a.state.loading|=4,hs(s,t.precedence,e),a.instance=s;case"script":return s=nn(t.src),(i=e.querySelector(Fn(s)))?(a.instance=i,Ke(i),i):(l=t,(i=qa.get(s))&&(l=A({},t),Yc(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ke(i),la(i,"link",l),e.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(o(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,hs(l,t.precedence,e));return a.instance}function hs(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,s=i,r=0;r<l.length;r++){var u=l[r];if(u.dataset.precedence===a)s=u;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function qc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Yc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var ps=null;function Zf(e,a,t){if(ps===null){var l=new Map,i=ps=new Map;i.set(t,l)}else i=ps,l=i.get(t),l||(l=new Map,i.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var s=t[i];if(!(s[mn]||s[Pe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(a)||"";r=e+r;var u=l.get(r);u?u.push(s):l.set(r,[s])}}return l}function Jf(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Jp(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Kf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kp(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=ln(l.href),s=a.querySelector(Wn(i));if(s){a=s._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=gs.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=s,Ke(s);return}s=a.ownerDocument||a,l=Vf(l),(i=qa.get(i))&&qc(l,i),s=s.createElement("link"),Ke(s);var r=s;r._p=new Promise(function(u,p){r.onload=u,r.onerror=p}),la(s,"link",l),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=gs.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Gc=0;function $p(e,a){return e.stylesheets&&e.count===0&&bs(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&bs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+a);0<e.imgBytes&&Gc===0&&(Gc=62500*Cp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Gc?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function gs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vs=null;function bs(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vs=new Map,a.forEach(Wp,e),vs=null,gs.call(e))}function Wp(e,a){if(!(a.state.loading&4)){var t=vs.get(e);if(t)var l=t.get(null);else{t=new Map,vs.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),l=r)}l&&t.set(null,l)}i=a.instance,r=i.getAttribute("data-precedence"),s=t.get(r)||l,s===l&&t.set(null,i),t.set(r,i),this.count++,l=gs.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),a.state.loading|=4}}var In={$$typeof:L,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Fp(e,a,t,l,i,s,r,u,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.hiddenUpdates=fn(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function $f(e,a,t,l,i,s,r,u,p,E,O,U){return e=new Fp(e,a,t,r,p,E,O,U,u),a=1,s===!0&&(a|=24),s=wa(3,null,null,a),e.current=s,s.stateNode=e,a=jr(),a.refCount++,e.pooledCache=a,a.refCount++,s.memoizedState={element:l,isDehydrated:t,cache:a},Er(s),e}function Wf(e){return e?(e=Ul,e):Ul}function Ff(e,a,t,l,i,s){i=Wf(i),l.context===null?l.context=i:l.pendingContext=i,l=Dt(a),l.payload={element:t},s=s===void 0?null:s,s!==null&&(l.callback=s),t=Rt(e,l,a),t!==null&&(ya(t,e,a),Mn(t,e,a))}function If(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Xc(e,a){If(e,a),(e=e.alternate)&&If(e,a)}function Pf(e){if(e.tag===13||e.tag===31){var a=ll(e,67108864);a!==null&&ya(a,e,67108864),Xc(e,67108864)}}function em(e){if(e.tag===13||e.tag===31){var a=Ca();a=sa(a);var t=ll(e,a);t!==null&&ya(t,e,a),Xc(e,a)}}var xs=!0;function Ip(e,a,t,l){var i=D.T;D.T=null;var s=Y.p;try{Y.p=2,Vc(e,a,t,l)}finally{Y.p=s,D.T=i}}function Pp(e,a,t,l){var i=D.T;D.T=null;var s=Y.p;try{Y.p=8,Vc(e,a,t,l)}finally{Y.p=s,D.T=i}}function Vc(e,a,t,l){if(xs){var i=Qc(l);if(i===null)Mc(e,a,l,ys,t),tm(e,l);else if(ag(i,e,a,t,l))l.stopPropagation();else if(tm(e,l),a&4&&-1<eg.indexOf(e)){for(;i!==null;){var s=wl(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=tt(s.pendingLanes);if(r!==0){var u=s;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var p=1<<31-da(r);u.entanglements[1]|=p,r&=~p}Ia(s),(xe&6)===0&&(ts=ia()+500,Zn(0))}}break;case 31:case 13:u=ll(s,2),u!==null&&ya(u,s,2),ns(),Xc(s,2)}if(s=Qc(l),s===null&&Mc(e,a,l,ys,t),s===i)break;i=s}i!==null&&l.stopPropagation()}else Mc(e,a,l,null,t)}}function Qc(e){return e=Js(e),Zc(e)}var ys=null;function Zc(e){if(ys=null,e=Nl(e),e!==null){var a=h(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=v(a),e!==null)return e;e=null}else if(t===31){if(e=T(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ys=e,null}function am(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_s()){case un:return 2;case dn:return 8;case Wt:case di:return 32;case fi:return 268435456;default:return 32}default:return 32}}var Jc=!1,Vt=null,Qt=null,Zt=null,Pn=new Map,ei=new Map,Jt=[],eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tm(e,a){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Pn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(a.pointerId)}}function ai(e,a,t,l,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:s,targetContainers:[i]},a!==null&&(a=wl(a),a!==null&&Pf(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),e)}function ag(e,a,t,l,i){switch(a){case"focusin":return Vt=ai(Vt,e,a,t,l,i),!0;case"dragenter":return Qt=ai(Qt,e,a,t,l,i),!0;case"mouseover":return Zt=ai(Zt,e,a,t,l,i),!0;case"pointerover":var s=i.pointerId;return Pn.set(s,ai(Pn.get(s)||null,e,a,t,l,i)),!0;case"gotpointercapture":return s=i.pointerId,ei.set(s,ai(ei.get(s)||null,e,a,t,l,i)),!0}return!1}function lm(e){var a=Nl(e.target);if(a!==null){var t=h(a);if(t!==null){if(a=t.tag,a===13){if(a=v(t),a!==null){e.blockedOn=a,go(e.priority,function(){em(t)});return}}else if(a===31){if(a=T(t),a!==null){e.blockedOn=a,go(e.priority,function(){em(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function js(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Qc(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Zs=l,t.target.dispatchEvent(l),Zs=null}else return a=wl(t),a!==null&&Pf(a),e.blockedOn=t,!1;a.shift()}return!0}function nm(e,a,t){js(e)&&t.delete(a)}function tg(){Jc=!1,Vt!==null&&js(Vt)&&(Vt=null),Qt!==null&&js(Qt)&&(Qt=null),Zt!==null&&js(Zt)&&(Zt=null),Pn.forEach(nm),ei.forEach(nm)}function Ss(e,a){e.blockedOn===a&&(e.blockedOn=null,Jc||(Jc=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tg)))}var Ns=null;function im(e){Ns!==e&&(Ns=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Ns===e&&(Ns=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],i=e[a+2];if(typeof l!="function"){if(Zc(l||t)===null)continue;break}var s=wl(t);s!==null&&(e.splice(a,3),a-=3,Qr(s,{pending:!0,data:i,method:t.method,action:l},l,i))}}))}function sn(e){function a(p){return Ss(p,e)}Vt!==null&&Ss(Vt,e),Qt!==null&&Ss(Qt,e),Zt!==null&&Ss(Zt,e),Pn.forEach(a),ei.forEach(a);for(var t=0;t<Jt.length;t++){var l=Jt[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Jt.length&&(t=Jt[0],t.blockedOn===null);)lm(t),t.blockedOn===null&&Jt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var i=t[l],s=t[l+1],r=i[ha]||null;if(typeof s=="function")r||im(t);else if(r){var u=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[ha]||null)u=r.formAction;else if(Zc(i)!==null)continue}else u=r.action;typeof u=="function"?t[l+1]=u:(t.splice(l,3),l-=3),im(t)}}}function sm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function Kc(e){this._internalRoot=e}ws.prototype.render=Kc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(o(409));var t=a.current,l=Ca();Ff(t,l,e,a,null,null)},ws.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Ff(e.current,2,null,e,null,null),ns(),a[Sl]=null}};function ws(e){this._internalRoot=e}ws.prototype.unstable_scheduleHydration=function(e){if(e){var a=po();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Jt.length&&a!==0&&a<Jt[t].priority;t++);Jt.splice(t,0,e),t===0&&lm(e)}};var rm=f.version;if(rm!=="19.2.3")throw Error(o(527,rm,"19.2.3"));Y.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(a),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var lg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{Ft=Es.inject(lg),ua=Es}catch{}}return li.createRoot=function(e,a){if(!m(e))throw Error(o(299));var t=!1,l="",i=md,s=hd,r=pd;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError)),a=$f(e,1,!1,null,null,t,l,null,i,s,r,sm),e[Sl]=a.current,Cc(e),new Kc(a)},li.hydrateRoot=function(e,a,t){if(!m(e))throw Error(o(299));var l=!1,i="",s=md,r=hd,u=pd,p=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.formState!==void 0&&(p=t.formState)),a=$f(e,1,!0,a,t??null,l,i,p,s,r,u,sm),a.context=Wf(null),t=a.current,l=Ca(),l=sa(l),i=Dt(l),i.callback=null,Rt(t,i,l),t=l,a.current.lanes=t,b(a,t),Ia(a),e[Sl]=a.current,Cc(e),new ws(a)},li.version="19.2.3",li}var vm;function mg(){if(vm)return Fc.exports;vm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),Fc.exports=fg(),Fc.exports}var hg=mg();const pg=Am(hg);var bm="popstate";function gg(c={}){function f(m,h){let{pathname:v="/",search:T="",hash:j=""}=gl(m.location.hash.substring(1));return!v.startsWith("/")&&!v.startsWith(".")&&(v="/"+v),no("",{pathname:v,search:T,hash:j},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function d(m,h){let v=m.document.querySelector("base"),T="";if(v&&v.getAttribute("href")){let j=m.location.href,g=j.indexOf("#");T=g===-1?j:j.slice(0,g)}return T+"#"+(typeof h=="string"?h:ii(h))}function o(m,h){Ga(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return bg(f,d,o,c)}function _e(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function Ga(c,f){if(!c){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function vg(){return Math.random().toString(36).substring(2,10)}function xm(c,f){return{usr:c.state,key:c.key,idx:f}}function no(c,f,d=null,o){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof f=="string"?gl(f):f,state:d,key:f&&f.key||o||vg()}}function ii({pathname:c="/",search:f="",hash:d=""}){return f&&f!=="?"&&(c+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(c+=d.charAt(0)==="#"?d:"#"+d),c}function gl(c){let f={};if(c){let d=c.indexOf("#");d>=0&&(f.hash=c.substring(d),c=c.substring(0,d));let o=c.indexOf("?");o>=0&&(f.search=c.substring(o),c=c.substring(0,o)),c&&(f.pathname=c)}return f}function bg(c,f,d,o={}){let{window:m=document.defaultView,v5Compat:h=!1}=o,v=m.history,T="POP",j=null,g=M();g==null&&(g=0,v.replaceState({...v.state,idx:g},""));function M(){return(v.state||{idx:null}).idx}function A(){T="POP";let q=M(),R=q==null?null:q-g;g=q,j&&j({action:T,location:V.location,delta:R})}function B(q,R){T="PUSH";let H=no(V.location,q,R);d&&d(H,q),g=M()+1;let L=xm(H,g),ie=V.createHref(H);try{v.pushState(L,"",ie)}catch(be){if(be instanceof DOMException&&be.name==="DataCloneError")throw be;m.location.assign(ie)}h&&j&&j({action:T,location:V.location,delta:1})}function X(q,R){T="REPLACE";let H=no(V.location,q,R);d&&d(H,q),g=M();let L=xm(H,g),ie=V.createHref(H);v.replaceState(L,"",ie),h&&j&&j({action:T,location:V.location,delta:0})}function K(q){return xg(q)}let V={get action(){return T},get location(){return c(m,v)},listen(q){if(j)throw new Error("A history only accepts one active listener");return m.addEventListener(bm,A),j=q,()=>{m.removeEventListener(bm,A),j=null}},createHref(q){return f(m,q)},createURL:K,encodeLocation(q){let R=K(q);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:B,replace:X,go(q){return v.go(q)}};return V}function xg(c,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),_e(d,"No window.location.(origin|href) available to create URL");let o=typeof c=="string"?c:ii(c);return o=o.replace(/ $/,"%20"),!f&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function Tm(c,f,d="/"){return yg(c,f,d,!1)}function yg(c,f,d,o){let m=typeof f=="string"?gl(f):f,h=Nt(m.pathname||"/",d);if(h==null)return null;let v=Cm(c);jg(v);let T=null;for(let j=0;T==null&&j<v.length;++j){let g=Dg(h);T=Mg(v[j],g,o)}return T}function Cm(c,f=[],d=[],o="",m=!1){let h=(v,T,j=m,g)=>{let M={relativePath:g===void 0?v.path||"":g,caseSensitive:v.caseSensitive===!0,childrenIndex:T,route:v};if(M.relativePath.startsWith("/")){if(!M.relativePath.startsWith(o)&&j)return;_e(M.relativePath.startsWith(o),`Absolute route path "${M.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),M.relativePath=M.relativePath.slice(o.length)}let A=St([o,M.relativePath]),B=d.concat(M);v.children&&v.children.length>0&&(_e(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),Cm(v.children,f,B,A,j)),!(v.path==null&&!v.index)&&f.push({path:A,score:Tg(A,v.index),routesMeta:B})};return c.forEach((v,T)=>{if(v.path===""||!v.path?.includes("?"))h(v,T);else for(let j of Mm(v.path))h(v,T,!0,j)}),f}function Mm(c){let f=c.split("/");if(f.length===0)return[];let[d,...o]=f,m=d.endsWith("?"),h=d.replace(/\?$/,"");if(o.length===0)return m?[h,""]:[h];let v=Mm(o.join("/")),T=[];return T.push(...v.map(j=>j===""?h:[h,j].join("/"))),m&&T.push(...v),T.map(j=>c.startsWith("/")&&j===""?"/":j)}function jg(c){c.sort((f,d)=>f.score!==d.score?d.score-f.score:Cg(f.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var Sg=/^:[\w-]+$/,Ng=3,wg=2,Eg=1,zg=10,Ag=-2,ym=c=>c==="*";function Tg(c,f){let d=c.split("/"),o=d.length;return d.some(ym)&&(o+=Ag),f&&(o+=wg),d.filter(m=>!ym(m)).reduce((m,h)=>m+(Sg.test(h)?Ng:h===""?Eg:zg),o)}function Cg(c,f){return c.length===f.length&&c.slice(0,-1).every((o,m)=>o===f[m])?c[c.length-1]-f[f.length-1]:0}function Mg(c,f,d=!1){let{routesMeta:o}=c,m={},h="/",v=[];for(let T=0;T<o.length;++T){let j=o[T],g=T===o.length-1,M=h==="/"?f:f.slice(h.length)||"/",A=Cs({path:j.relativePath,caseSensitive:j.caseSensitive,end:g},M),B=j.route;if(!A&&g&&d&&!o[o.length-1].route.index&&(A=Cs({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},M)),!A)return null;Object.assign(m,A.params),v.push({params:m,pathname:St([h,A.pathname]),pathnameBase:kg(St([h,A.pathnameBase])),route:B}),A.pathnameBase!=="/"&&(h=St([h,A.pathnameBase]))}return v}function Cs(c,f){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[d,o]=Og(c.path,c.caseSensitive,c.end),m=f.match(d);if(!m)return null;let h=m[0],v=h.replace(/(.)\/+$/,"$1"),T=m.slice(1);return{params:o.reduce((g,{paramName:M,isOptional:A},B)=>{if(M==="*"){let K=T[B]||"";v=h.slice(0,h.length-K.length).replace(/(.)\/+$/,"$1")}const X=T[B];return A&&!X?g[M]=void 0:g[M]=(X||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:v,pattern:c}}function Og(c,f=!1,d=!0){Ga(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let o=[],m="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,T,j)=>(o.push({paramName:T,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return c.endsWith("*")?(o.push({paramName:"*"}),m+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":c!==""&&c!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),o]}function Dg(c){try{return c.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Ga(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),c}}function Nt(c,f){if(f==="/")return c;if(!c.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,o=c.charAt(d);return o&&o!=="/"?null:c.slice(d)||"/"}var Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rg=c=>Om.test(c);function _g(c,f="/"){let{pathname:d,search:o="",hash:m=""}=typeof c=="string"?gl(c):c,h;if(d)if(Rg(d))h=d;else{if(d.includes("//")){let v=d;d=d.replace(/\/\/+/g,"/"),Ga(!1,`Pathnames cannot have embedded double slashes - normalizing ${v} -> ${d}`)}d.startsWith("/")?h=jm(d.substring(1),"/"):h=jm(d,f)}else h=f;return{pathname:h,search:Hg(o),hash:Lg(m)}}function jm(c,f){let d=f.replace(/\/+$/,"").split("/");return c.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function ao(c,f,d,o){return`Cannot include a '${c}' character in a manually specified \`to.${f}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ug(c){return c.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function Dm(c){let f=Ug(c);return f.map((d,o)=>o===f.length-1?d.pathname:d.pathnameBase)}function Rm(c,f,d,o=!1){let m;typeof c=="string"?m=gl(c):(m={...c},_e(!m.pathname||!m.pathname.includes("?"),ao("?","pathname","search",m)),_e(!m.pathname||!m.pathname.includes("#"),ao("#","pathname","hash",m)),_e(!m.search||!m.search.includes("#"),ao("#","search","hash",m)));let h=c===""||m.pathname==="",v=h?"/":m.pathname,T;if(v==null)T=d;else{let A=f.length-1;if(!o&&v.startsWith("..")){let B=v.split("/");for(;B[0]==="..";)B.shift(),A-=1;m.pathname=B.join("/")}T=A>=0?f[A]:"/"}let j=_g(m,T),g=v&&v!=="/"&&v.endsWith("/"),M=(h||v===".")&&d.endsWith("/");return!j.pathname.endsWith("/")&&(g||M)&&(j.pathname+="/"),j}var St=c=>c.join("/").replace(/\/\/+/g,"/"),kg=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),Hg=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,Lg=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c,Bg=class{constructor(c,f,d,o=!1){this.status=c,this.statusText=f||"",this.internal=o,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function qg(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}function Yg(c){return c.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var _m=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Um(c,f){let d=c;if(typeof d!="string"||!Om.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let o=d,m=!1;if(_m)try{let h=new URL(window.location.href),v=d.startsWith("//")?new URL(h.protocol+d):new URL(d),T=Nt(v.pathname,f);v.origin===h.origin&&T!=null?d=T+v.search+v.hash:m=!0}catch{Ga(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:m,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var km=["POST","PUT","PATCH","DELETE"];new Set(km);var Gg=["GET",...km];new Set(Gg);var rn=S.createContext(null);rn.displayName="DataRouter";var Ms=S.createContext(null);Ms.displayName="DataRouterState";var Xg=S.createContext(!1),Hm=S.createContext({isTransitioning:!1});Hm.displayName="ViewTransition";var Vg=S.createContext(new Map);Vg.displayName="Fetchers";var Qg=S.createContext(null);Qg.displayName="Await";var Xa=S.createContext(null);Xa.displayName="Navigation";var si=S.createContext(null);si.displayName="Location";var wt=S.createContext({outlet:null,matches:[],isDataRoute:!1});wt.displayName="Route";var co=S.createContext(null);co.displayName="RouteError";var Lm="REACT_ROUTER_ERROR",Zg="REDIRECT",Jg="ROUTE_ERROR_RESPONSE";function Kg(c){if(c.startsWith(`${Lm}:${Zg}:{`))try{let f=JSON.parse(c.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function $g(c){if(c.startsWith(`${Lm}:${Jg}:{`))try{let f=JSON.parse(c.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new Bg(f.status,f.statusText,f.data)}catch{}}function Wg(c,{relative:f}={}){_e(ri(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=S.useContext(Xa),{hash:m,pathname:h,search:v}=ci(c,{relative:f}),T=h;return d!=="/"&&(T=h==="/"?d:St([d,h])),o.createHref({pathname:T,search:v,hash:m})}function ri(){return S.useContext(si)!=null}function $t(){return _e(ri(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(si).location}var Bm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qm(c){S.useContext(Xa).static||S.useLayoutEffect(c)}function oo(){let{isDataRoute:c}=S.useContext(wt);return c?o0():Fg()}function Fg(){_e(ri(),"useNavigate() may be used only in the context of a <Router> component.");let c=S.useContext(rn),{basename:f,navigator:d}=S.useContext(Xa),{matches:o}=S.useContext(wt),{pathname:m}=$t(),h=JSON.stringify(Dm(o)),v=S.useRef(!1);return qm(()=>{v.current=!0}),S.useCallback((j,g={})=>{if(Ga(v.current,Bm),!v.current)return;if(typeof j=="number"){d.go(j);return}let M=Rm(j,JSON.parse(h),m,g.relative==="path");c==null&&f!=="/"&&(M.pathname=M.pathname==="/"?f:St([f,M.pathname])),(g.replace?d.replace:d.push)(M,g.state,g)},[f,d,h,m,c])}S.createContext(null);function ci(c,{relative:f}={}){let{matches:d}=S.useContext(wt),{pathname:o}=$t(),m=JSON.stringify(Dm(d));return S.useMemo(()=>Rm(c,JSON.parse(m),o,f==="path"),[c,m,o,f])}function Ig(c,f){return Ym(c,f)}function Ym(c,f,d,o,m){_e(ri(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=S.useContext(Xa),{matches:v}=S.useContext(wt),T=v[v.length-1],j=T?T.params:{},g=T?T.pathname:"/",M=T?T.pathnameBase:"/",A=T&&T.route;{let H=A&&A.path||"";Xm(g,!A||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let B=$t(),X;if(f){let H=typeof f=="string"?gl(f):f;_e(M==="/"||H.pathname?.startsWith(M),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${M}" but pathname "${H.pathname}" was given in the \`location\` prop.`),X=H}else X=B;let K=X.pathname||"/",V=K;if(M!=="/"){let H=M.replace(/^\//,"").split("/");V="/"+K.replace(/^\//,"").split("/").slice(H.length).join("/")}let q=Tm(c,{pathname:V});Ga(A||q!=null,`No routes matched location "${X.pathname}${X.search}${X.hash}" `),Ga(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${X.pathname}${X.search}${X.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=l0(q&&q.map(H=>Object.assign({},H,{params:Object.assign({},j,H.params),pathname:St([M,h.encodeLocation?h.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?M:St([M,h.encodeLocation?h.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),v,d,o,m);return f&&R?S.createElement(si.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...X},navigationType:"POP"}},R):R}function Pg(){let c=c0(),f=qg(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),d=c instanceof Error?c.stack:null,o="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:o},h={padding:"2px 4px",backgroundColor:o},v=null;return console.error("Error handled by React Router default ErrorBoundary:",c),v=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:h},"ErrorBoundary")," or"," ",S.createElement("code",{style:h},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},f),d?S.createElement("pre",{style:m},d):null,v)}var e0=S.createElement(Pg,null),Gm=class extends S.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,f){return f.location!==c.location||f.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:f.error,location:f.location,revalidation:c.revalidation||f.revalidation}}componentDidCatch(c,f){this.props.onError?this.props.onError(c,f):console.error("React Router caught the following error during render",c)}render(){let c=this.state.error;if(this.context&&typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){const d=$g(c.digest);d&&(c=d)}let f=c!==void 0?S.createElement(wt.Provider,{value:this.props.routeContext},S.createElement(co.Provider,{value:c,children:this.props.component})):this.props.children;return this.context?S.createElement(a0,{error:c},f):f}};Gm.contextType=Xg;var to=new WeakMap;function a0({children:c,error:f}){let{basename:d}=S.useContext(Xa);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let o=Kg(f.digest);if(o){let m=to.get(f);if(m)throw m;let h=Um(o.location,d);if(_m&&!to.get(f))if(h.isExternal||o.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:o.replace}));throw to.set(f,v),v}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return c}function t0({routeContext:c,match:f,children:d}){let o=S.useContext(rn);return o&&o.static&&o.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=f.route.id),S.createElement(wt.Provider,{value:c},d)}function l0(c,f=[],d=null,o=null,m=null){if(c==null){if(!d)return null;if(d.errors)c=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)c=d.matches;else return null}let h=c,v=d?.errors;if(v!=null){let M=h.findIndex(A=>A.route.id&&v?.[A.route.id]!==void 0);_e(M>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),h=h.slice(0,Math.min(h.length,M+1))}let T=!1,j=-1;if(d)for(let M=0;M<h.length;M++){let A=h[M];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(j=M),A.route.id){let{loaderData:B,errors:X}=d,K=A.route.loader&&!B.hasOwnProperty(A.route.id)&&(!X||X[A.route.id]===void 0);if(A.route.lazy||K){T=!0,j>=0?h=h.slice(0,j+1):h=[h[0]];break}}}let g=d&&o?(M,A)=>{o(M,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:Yg(d.matches),errorInfo:A})}:void 0;return h.reduceRight((M,A,B)=>{let X,K=!1,V=null,q=null;d&&(X=v&&A.route.id?v[A.route.id]:void 0,V=A.route.errorElement||e0,T&&(j<0&&B===0?(Xm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),K=!0,q=null):j===B&&(K=!0,q=A.route.hydrateFallbackElement||null)));let R=f.concat(h.slice(0,B+1)),H=()=>{let L;return X?L=V:K?L=q:A.route.Component?L=S.createElement(A.route.Component,null):A.route.element?L=A.route.element:L=M,S.createElement(t0,{match:A,routeContext:{outlet:M,matches:R,isDataRoute:d!=null},children:L})};return d&&(A.route.ErrorBoundary||A.route.errorElement||B===0)?S.createElement(Gm,{location:d.location,revalidation:d.revalidation,component:V,error:X,children:H(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:g}):H()},null)}function uo(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function n0(c){let f=S.useContext(rn);return _e(f,uo(c)),f}function i0(c){let f=S.useContext(Ms);return _e(f,uo(c)),f}function s0(c){let f=S.useContext(wt);return _e(f,uo(c)),f}function fo(c){let f=s0(c),d=f.matches[f.matches.length-1];return _e(d.route.id,`${c} can only be used on routes that contain a unique "id"`),d.route.id}function r0(){return fo("useRouteId")}function c0(){let c=S.useContext(co),f=i0("useRouteError"),d=fo("useRouteError");return c!==void 0?c:f.errors?.[d]}function o0(){let{router:c}=n0("useNavigate"),f=fo("useNavigate"),d=S.useRef(!1);return qm(()=>{d.current=!0}),S.useCallback(async(m,h={})=>{Ga(d.current,Bm),d.current&&(typeof m=="number"?await c.navigate(m):await c.navigate(m,{fromRouteId:f,...h}))},[c,f])}var Sm={};function Xm(c,f,d){!f&&!Sm[c]&&(Sm[c]=!0,Ga(!1,d))}S.memo(u0);function u0({routes:c,future:f,state:d,onError:o}){return Ym(c,void 0,d,o,f)}function Ya(c){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function d0({basename:c="/",children:f=null,location:d,navigationType:o="POP",navigator:m,static:h=!1,unstable_useTransitions:v}){_e(!ri(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=c.replace(/^\/*/,"/"),j=S.useMemo(()=>({basename:T,navigator:m,static:h,unstable_useTransitions:v,future:{}}),[T,m,h,v]);typeof d=="string"&&(d=gl(d));let{pathname:g="/",search:M="",hash:A="",state:B=null,key:X="default"}=d,K=S.useMemo(()=>{let V=Nt(g,T);return V==null?null:{location:{pathname:V,search:M,hash:A,state:B,key:X},navigationType:o}},[T,g,M,A,B,X,o]);return Ga(K!=null,`<Router basename="${T}"> is not able to match the URL "${g}${M}${A}" because it does not start with the basename, so the <Router> won't render anything.`),K==null?null:S.createElement(Xa.Provider,{value:j},S.createElement(si.Provider,{children:f,value:K}))}function f0({children:c,location:f}){return Ig(io(c),f)}function io(c,f=[]){let d=[];return S.Children.forEach(c,(o,m)=>{if(!S.isValidElement(o))return;let h=[...f,m];if(o.type===S.Fragment){d.push.apply(d,io(o.props.children,h));return}_e(o.type===Ya,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!o.props.index||!o.props.children,"An index route cannot have child routes.");let v={id:o.props.id||h.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(v.children=io(o.props.children,h)),d.push(v)}),d}var As="get",Ts="application/x-www-form-urlencoded";function Os(c){return typeof HTMLElement<"u"&&c instanceof HTMLElement}function m0(c){return Os(c)&&c.tagName.toLowerCase()==="button"}function h0(c){return Os(c)&&c.tagName.toLowerCase()==="form"}function p0(c){return Os(c)&&c.tagName.toLowerCase()==="input"}function g0(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function v0(c,f){return c.button===0&&(!f||f==="_self")&&!g0(c)}var zs=null;function b0(){if(zs===null)try{new FormData(document.createElement("form"),0),zs=!1}catch{zs=!0}return zs}var x0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lo(c){return c!=null&&!x0.has(c)?(Ga(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ts}"`),null):c}function y0(c,f){let d,o,m,h,v;if(h0(c)){let T=c.getAttribute("action");o=T?Nt(T,f):null,d=c.getAttribute("method")||As,m=lo(c.getAttribute("enctype"))||Ts,h=new FormData(c)}else if(m0(c)||p0(c)&&(c.type==="submit"||c.type==="image")){let T=c.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=c.getAttribute("formaction")||T.getAttribute("action");if(o=j?Nt(j,f):null,d=c.getAttribute("formmethod")||T.getAttribute("method")||As,m=lo(c.getAttribute("formenctype"))||lo(T.getAttribute("enctype"))||Ts,h=new FormData(T,c),!b0()){let{name:g,type:M,value:A}=c;if(M==="image"){let B=g?`${g}.`:"";h.append(`${B}x`,"0"),h.append(`${B}y`,"0")}else g&&h.append(g,A)}}else{if(Os(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=As,o=null,m=Ts,v=c}return h&&m==="text/plain"&&(v=h,h=void 0),{action:o,method:d.toLowerCase(),encType:m,formData:h,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mo(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function j0(c,f,d,o){let m=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return d?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${o}`:m.pathname=`${m.pathname}.${o}`:m.pathname==="/"?m.pathname=`_root.${o}`:f&&Nt(m.pathname,f)==="/"?m.pathname=`${f.replace(/\/$/,"")}/_root.${o}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${o}`,m}async function S0(c,f){if(c.id in f)return f[c.id];try{let d=await import(c.module);return f[c.id]=d,d}catch(d){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function N0(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function w0(c,f,d){let o=await Promise.all(c.map(async m=>{let h=f.routes[m.route.id];if(h){let v=await S0(h,d);return v.links?v.links():[]}return[]}));return T0(o.flat(1).filter(N0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Nm(c,f,d,o,m,h){let v=(j,g)=>d[g]?j.route.id!==d[g].route.id:!0,T=(j,g)=>d[g].pathname!==j.pathname||d[g].route.path?.endsWith("*")&&d[g].params["*"]!==j.params["*"];return h==="assets"?f.filter((j,g)=>v(j,g)||T(j,g)):h==="data"?f.filter((j,g)=>{let M=o.routes[j.route.id];if(!M||!M.hasLoader)return!1;if(v(j,g)||T(j,g))return!0;if(j.route.shouldRevalidate){let A=j.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function E0(c,f,{includeHydrateFallback:d}={}){return z0(c.map(o=>{let m=f.routes[o.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function z0(c){return[...new Set(c)]}function A0(c){let f={},d=Object.keys(c).sort();for(let o of d)f[o]=c[o];return f}function T0(c,f){let d=new Set;return new Set(f),c.reduce((o,m)=>{let h=JSON.stringify(A0(m));return d.has(h)||(d.add(h),o.push({key:h,link:m})),o},[])}function Vm(){let c=S.useContext(rn);return mo(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function C0(){let c=S.useContext(Ms);return mo(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var ho=S.createContext(void 0);ho.displayName="FrameworkContext";function Qm(){let c=S.useContext(ho);return mo(c,"You must render this element inside a <HydratedRouter> element"),c}function M0(c,f){let d=S.useContext(ho),[o,m]=S.useState(!1),[h,v]=S.useState(!1),{onFocus:T,onBlur:j,onMouseEnter:g,onMouseLeave:M,onTouchStart:A}=f,B=S.useRef(null);S.useEffect(()=>{if(c==="render"&&v(!0),c==="viewport"){let V=R=>{R.forEach(H=>{v(H.isIntersecting)})},q=new IntersectionObserver(V,{threshold:.5});return B.current&&q.observe(B.current),()=>{q.disconnect()}}},[c]),S.useEffect(()=>{if(o){let V=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(V)}}},[o]);let X=()=>{m(!0)},K=()=>{m(!1),v(!1)};return d?c!=="intent"?[h,B,{}]:[h,B,{onFocus:ni(T,X),onBlur:ni(j,K),onMouseEnter:ni(g,X),onMouseLeave:ni(M,K),onTouchStart:ni(A,X)}]:[!1,B,{}]}function ni(c,f){return d=>{c&&c(d),d.defaultPrevented||f(d)}}function O0({page:c,...f}){let{router:d}=Vm(),o=S.useMemo(()=>Tm(d.routes,c,d.basename),[d.routes,c,d.basename]);return o?S.createElement(R0,{page:c,matches:o,...f}):null}function D0(c){let{manifest:f,routeModules:d}=Qm(),[o,m]=S.useState([]);return S.useEffect(()=>{let h=!1;return w0(c,f,d).then(v=>{h||m(v)}),()=>{h=!0}},[c,f,d]),o}function R0({page:c,matches:f,...d}){let o=$t(),{future:m,manifest:h,routeModules:v}=Qm(),{basename:T}=Vm(),{loaderData:j,matches:g}=C0(),M=S.useMemo(()=>Nm(c,f,g,h,o,"data"),[c,f,g,h,o]),A=S.useMemo(()=>Nm(c,f,g,h,o,"assets"),[c,f,g,h,o]),B=S.useMemo(()=>{if(c===o.pathname+o.search+o.hash)return[];let V=new Set,q=!1;if(f.forEach(H=>{let L=h.routes[H.route.id];!L||!L.hasLoader||(!M.some(ie=>ie.route.id===H.route.id)&&H.route.id in j&&v[H.route.id]?.shouldRevalidate||L.hasClientLoader?q=!0:V.add(H.route.id))}),V.size===0)return[];let R=j0(c,T,m.unstable_trailingSlashAwareDataRequests,"data");return q&&V.size>0&&R.searchParams.set("_routes",f.filter(H=>V.has(H.route.id)).map(H=>H.route.id).join(",")),[R.pathname+R.search]},[T,m.unstable_trailingSlashAwareDataRequests,j,o,h,M,f,c,v]),X=S.useMemo(()=>E0(A,h),[A,h]),K=D0(A);return S.createElement(S.Fragment,null,B.map(V=>S.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...d})),X.map(V=>S.createElement("link",{key:V,rel:"modulepreload",href:V,...d})),K.map(({key:V,link:q})=>S.createElement("link",{key:V,nonce:d.nonce,...q})))}function _0(...c){return f=>{c.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var U0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{U0&&(window.__reactRouterVersion="7.12.0")}catch{}function k0({basename:c,children:f,unstable_useTransitions:d,window:o}){let m=S.useRef();m.current==null&&(m.current=gg({window:o,v5Compat:!0}));let h=m.current,[v,T]=S.useState({action:h.action,location:h.location}),j=S.useCallback(g=>{d===!1?T(g):S.startTransition(()=>T(g))},[d]);return S.useLayoutEffect(()=>h.listen(j),[h,j]),S.createElement(d0,{basename:c,children:f,location:v.location,navigationType:v.action,navigator:h,unstable_useTransitions:d})}var Zm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,re=S.forwardRef(function({onClick:f,discover:d="render",prefetch:o="none",relative:m,reloadDocument:h,replace:v,state:T,target:j,to:g,preventScrollReset:M,viewTransition:A,unstable_defaultShouldRevalidate:B,...X},K){let{basename:V,unstable_useTransitions:q}=S.useContext(Xa),R=typeof g=="string"&&Zm.test(g),H=Um(g,V);g=H.to;let L=Wg(g,{relative:m}),[ie,be,ze]=M0(o,X),ee=q0(g,{replace:v,state:T,target:j,preventScrollReset:M,relative:m,viewTransition:A,unstable_defaultShouldRevalidate:B,unstable_useTransitions:q});function Re(ca){f&&f(ca),ca.defaultPrevented||ee(ca)}let Ae=S.createElement("a",{...X,...ze,href:H.absoluteURL||L,onClick:H.isExternal||h?f:Re,ref:_0(K,be),target:j,"data-discover":!R&&d==="render"?"true":void 0});return ie&&!R?S.createElement(S.Fragment,null,Ae,S.createElement(O0,{page:L})):Ae});re.displayName="Link";var H0=S.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:o="",end:m=!1,style:h,to:v,viewTransition:T,children:j,...g},M){let A=ci(v,{relative:g.relative}),B=$t(),X=S.useContext(Ms),{navigator:K,basename:V}=S.useContext(Xa),q=X!=null&&Q0(A)&&T===!0,R=K.encodeLocation?K.encodeLocation(A).pathname:A.pathname,H=B.pathname,L=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;d||(H=H.toLowerCase(),L=L?L.toLowerCase():null,R=R.toLowerCase()),L&&V&&(L=Nt(L,V)||L);const ie=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let be=H===R||!m&&H.startsWith(R)&&H.charAt(ie)==="/",ze=L!=null&&(L===R||!m&&L.startsWith(R)&&L.charAt(R.length)==="/"),ee={isActive:be,isPending:ze,isTransitioning:q},Re=be?f:void 0,Ae;typeof o=="function"?Ae=o(ee):Ae=[o,be?"active":null,ze?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let ca=typeof h=="function"?h(ee):h;return S.createElement(re,{...g,"aria-current":Re,className:Ae,ref:M,style:ca,to:v,viewTransition:T},typeof j=="function"?j(ee):j)});H0.displayName="NavLink";var L0=S.forwardRef(({discover:c="render",fetcherKey:f,navigate:d,reloadDocument:o,replace:m,state:h,method:v=As,action:T,onSubmit:j,relative:g,preventScrollReset:M,viewTransition:A,unstable_defaultShouldRevalidate:B,...X},K)=>{let{unstable_useTransitions:V}=S.useContext(Xa),q=X0(),R=V0(T,{relative:g}),H=v.toLowerCase()==="get"?"get":"post",L=typeof T=="string"&&Zm.test(T),ie=be=>{if(j&&j(be),be.defaultPrevented)return;be.preventDefault();let ze=be.nativeEvent.submitter,ee=ze?.getAttribute("formmethod")||v,Re=()=>q(ze||be.currentTarget,{fetcherKey:f,method:ee,navigate:d,replace:m,state:h,relative:g,preventScrollReset:M,viewTransition:A,unstable_defaultShouldRevalidate:B});V&&d!==!1?S.startTransition(()=>Re()):Re()};return S.createElement("form",{ref:K,method:H,action:R,onSubmit:o?j:ie,...X,"data-discover":!L&&c==="render"?"true":void 0})});L0.displayName="Form";function B0(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jm(c){let f=S.useContext(rn);return _e(f,B0(c)),f}function q0(c,{target:f,replace:d,state:o,preventScrollReset:m,relative:h,viewTransition:v,unstable_defaultShouldRevalidate:T,unstable_useTransitions:j}={}){let g=oo(),M=$t(),A=ci(c,{relative:h});return S.useCallback(B=>{if(v0(B,f)){B.preventDefault();let X=d!==void 0?d:ii(M)===ii(A),K=()=>g(c,{replace:X,state:o,preventScrollReset:m,relative:h,viewTransition:v,unstable_defaultShouldRevalidate:T});j?S.startTransition(()=>K()):K()}},[M,g,A,d,o,f,c,m,h,v,T,j])}var Y0=0,G0=()=>`__${String(++Y0)}__`;function X0(){let{router:c}=Jm("useSubmit"),{basename:f}=S.useContext(Xa),d=r0(),o=c.fetch,m=c.navigate;return S.useCallback(async(h,v={})=>{let{action:T,method:j,encType:g,formData:M,body:A}=y0(h,f);if(v.navigate===!1){let B=v.fetcherKey||G0();await o(B,d,v.action||T,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:M,body:A,formMethod:v.method||j,formEncType:v.encType||g,flushSync:v.flushSync})}else await m(v.action||T,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:M,body:A,formMethod:v.method||j,formEncType:v.encType||g,replace:v.replace,state:v.state,fromRouteId:d,flushSync:v.flushSync,viewTransition:v.viewTransition})},[o,m,f,d])}function V0(c,{relative:f}={}){let{basename:d}=S.useContext(Xa),o=S.useContext(wt);_e(o,"useFormAction must be used inside a RouteContext");let[m]=o.matches.slice(-1),h={...ci(c||".",{relative:f})},v=$t();if(c==null){h.search=v.search;let T=new URLSearchParams(h.search),j=T.getAll("index");if(j.some(M=>M==="")){T.delete("index"),j.filter(A=>A).forEach(A=>T.append("index",A));let M=T.toString();h.search=M?`?${M}`:""}}return(!c||c===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(h.pathname=h.pathname==="/"?d:St([d,h.pathname])),ii(h)}function Q0(c,{relative:f}={}){let d=S.useContext(Hm);_e(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Jm("useViewTransitionState"),m=ci(c,{relative:f});if(!d.isTransitioning)return!1;let h=Nt(d.currentLocation.pathname,o)||d.currentLocation.pathname,v=Nt(d.nextLocation.pathname,o)||d.nextLocation.pathname;return Cs(m.pathname,v)!=null||Cs(m.pathname,h)!=null}function Z0(){const[c,f]=S.useState(!1),[d,o]=S.useState(!1),[m,h]=S.useState(!1),[v,T]=S.useState(!1),[j,g]=S.useState(!1),[M,A]=S.useState(localStorage.getItem("brochureData")||""),B=$t(),X=S.useRef(0);S.useEffect(()=>{f(!1),g(!1)},[B.pathname]),S.useEffect(()=>{localStorage.getItem("mode")==="dark"&&(o(!0),document.body.classList.add("dark"))},[]),S.useEffect(()=>{const L=()=>{const ie=window.scrollY;h(ie>10),T(ie>60&&ie>X.current),X.current=ie};return window.addEventListener("scroll",L,{passive:!0}),()=>window.removeEventListener("scroll",L)},[]),S.useEffect(()=>{const L=()=>{A(localStorage.getItem("brochureData")||"")};return window.addEventListener("brochureUpdated",L),()=>window.removeEventListener("brochureUpdated",L)},[]);function K(){const L=!d;o(L),L?(document.body.classList.add("dark"),localStorage.setItem("mode","dark")):(document.body.classList.remove("dark"),localStorage.setItem("mode","light"))}const V=()=>{if(!M)return;const L=document.createElement("a");L.href=M,L.download=localStorage.getItem("brochureName")||"SVV-School-Brochure.pdf",document.body.appendChild(L),L.click(),document.body.removeChild(L)},q=L=>B.pathname===L,R=L=>B.pathname.startsWith(L),H=[{label:"Science Stream",path:"/academics/science"},{label:"Commerce Stream",path:"/academics/commerce"},{label:"Examination",path:"/academics/examination"},{label:"Timetable",path:"/academics/timetable"},{label:"Results",path:"/academics/results"}];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --navy:       #0a1628;
          --navy-mid:   #142240;
          --navy-dark:  #070f1c;
          --gold:       #c9922a;
          --gold-light: #e8b84b;
          --gold-dim:   rgba(201,146,42,0.13);
          --white:      #ffffff;
          --muted:      rgba(255,255,255,0.45);
          --border-dim: rgba(255,255,255,0.07);
        }

        .notice-bar {
          background: linear-gradient(90deg, var(--gold) 0%, #a87520 50%, var(--gold) 100%);
          background-size: 200% 100%;
          animation: shimmer 4s linear infinite;
          color: var(--white);
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 8px 16px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          overflow: hidden;
          transition: height 0.35s ease, opacity 0.35s ease, padding 0.35s ease;
          will-change: height;
        }
        .notice-bar.hidden {
          height: 0;
          opacity: 0;
          padding: 0;
          pointer-events: none;
        }
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          font-family: 'DM Sans', sans-serif;
        }

        .nav {
          background: var(--navy);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4vw;
          height: 68px;
          gap: 10px;
          transition: background 0.3s, box-shadow 0.3s;
          border-bottom: 2px solid transparent;
          border-image: linear-gradient(90deg, transparent, var(--gold), transparent) 1;
        }
        .nav.scrolled {
          background: rgba(10,22,40,0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 4px 32px rgba(0,0,0,0.45);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo a {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-img-box {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--gold), #7a4e10);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 14px rgba(201,146,42,0.28);
          flex-shrink: 0;
        }
        .logo-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .logo-initials {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 900;
          color: var(--white);
        }
        .logo div h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1.25;
          white-space: nowrap;
          margin: 0;
        }
        .logo div p {
          font-size: 0.65rem;
          color: var(--muted);
          letter-spacing: 0.05em;
          margin: 2px 0 0 0;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 2px;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }
        .nav-links li { position: relative; }

        .nav-links li a,
        .nav-links li .dropdown-title {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 7px 10px;
          border-radius: 7px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--muted);
          text-decoration: none;
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: 0.01em;
          transition: color 0.2s, background 0.2s;
          position: relative;
        }
        .nav-links li a:hover,
        .nav-links li .dropdown-title:hover {
          color: var(--white);
          background: rgba(255,255,255,0.06);
        }
        .nav-links li a.activeLink {
          color: var(--gold-light);
          background: var(--gold-dim);
        }
        .nav-links li a.activeLink::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 10px; right: 10px;
          height: 1.5px;
          border-radius: 2px;
          background: var(--gold);
        }

        .dropdown { position: relative; }
        .dropdown-title {
          display: inline-flex !important;
          align-items: center;
          gap: 4px;
          padding: 7px 10px !important;
          border-radius: 7px !important;
          font-size: 0.82rem !important;
          font-weight: 500 !important;
          color: var(--muted) !important;
          text-decoration: none !important;
          background: none;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: 0.01em;
          transition: color 0.2s, background 0.2s;
          position: relative;
        }
        .dropdown-title:hover {
          color: var(--white) !important;
          background: rgba(255,255,255,0.06) !important;
        }
        .dropdown-title.activeLink {
          color: var(--gold-light) !important;
          background: var(--gold-dim) !important;
        }
        .dropdown-title.activeLink::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 10px; right: 10px;
          height: 1.5px;
          border-radius: 2px;
          background: var(--gold);
        }
        .dropdown-chevron {
          font-size: 0.48rem;
          opacity: 0.5;
          transition: transform 0.25s, opacity 0.2s;
        }
        .dropdown:hover .dropdown-chevron { transform: rotate(180deg); opacity: 1; }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          min-width: 200px;
          background: var(--navy-mid);
          border: 1px solid rgba(201,146,42,0.2);
          border-radius: 12px;
          padding: 8px;
          list-style: none;
          margin: 0;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 20px 50px rgba(0,0,0,0.55);
          z-index: 400;
        }
        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -6px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 10px; height: 10px;
          background: var(--navy-mid);
          border-left: 1px solid rgba(201,146,42,0.2);
          border-top: 1px solid rgba(201,146,42,0.2);
        }
        .dropdown:hover .dropdown-menu {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-menu li a {
          display: flex !important;
          align-items: center;
          gap: 10px;
          padding: 9px 13px !important;
          border-radius: 7px !important;
          font-size: 0.82rem !important;
          color: rgba(255,255,255,0.58) !important;
        }
        .dropdown-menu li a::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
          opacity: 0;
          transition: opacity 0.18s;
        }
        .dropdown-menu li a:hover::before,
        .dropdown-menu li a.activeLink::before { opacity: 1; }
        .dropdown-menu li a.activeLink {
          color: var(--gold-light) !important;
          background: var(--gold-dim) !important;
        }
        .dd-sep {
          height: 1px;
          background: var(--border-dim);
          margin: 5px 8px;
        }

        .right-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .darkBtn {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.7);
          padding: 7px 12px;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .darkBtn:hover {
          background: rgba(255,255,255,0.12);
          border-color: var(--gold);
          color: var(--white);
        }

        .menu-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px; height: 40px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          background: none;
          cursor: pointer;
          font-size: 1.2rem;
          color: var(--white);
          transition: border-color 0.2s, background 0.2s;
          padding: 0;
        }
        .menu-btn:hover { border-color: var(--gold); background: var(--gold-dim); }

        .top-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        /* ── Brochure button styles ── */
        .brochure-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          white-space: nowrap;
          border-radius: 8px;
          padding: 8px 14px;
          cursor: pointer;
          transition: all 0.22s;
          border: none;
          outline: none;
        }
        .brochure-btn.active {
          background: rgba(201,146,42,0.15);
          border: 1px solid rgba(201,146,42,0.45);
          color: var(--gold-light);
        }
        .brochure-btn.active:hover {
          background: rgba(201,146,42,0.28);
          border-color: var(--gold-light);
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(201,146,42,0.22);
        }
        .brochure-btn.inactive {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.28);
          cursor: not-allowed;
        }
        .brochure-pulse {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--gold);
          animation: pulse 1.8s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.7); }
        }

        .top-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .enquire-btn {
          background: var(--gold);
          color: var(--white);
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 2px 10px rgba(201,146,42,0.28);
          transition: background 0.25s, transform 0.2s;
        }
        .enquire-btn:hover { background: var(--gold-light); transform: translateY(-1px); }

        .disclosure-btn {
          background: transparent;
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 8px 14px;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .disclosure-btn:hover {
          border-color: var(--gold);
          color: var(--gold-light);
        }

        .mobile-panel {
          background: var(--navy-mid);
          border-top: 1px solid var(--border-dim);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.42s cubic-bezier(0.4,0,0.2,1);
        }
        .mobile-panel.active { max-height: 900px; }

        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 6vw;
          font-size: 0.9rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          color: rgba(255,255,255,0.68);
          text-decoration: none;
          border-bottom: 1px solid var(--border-dim);
          cursor: pointer;
          user-select: none;
          transition: color 0.2s, background 0.2s, padding-left 0.2s;
        }
        .mob-link:hover, .mob-link.activeLink {
          color: var(--gold-light);
          background: var(--gold-dim);
          padding-left: calc(6vw + 5px);
        }
        .mob-link-split { display: flex; align-items: center; padding-right: 4vw; }
        .mob-link-split a { flex: 1; }
        .mob-chevron { font-size: 0.48rem; opacity: 0.5; transition: transform 0.25s; }
        .mob-chevron.open { transform: rotate(180deg); opacity: 1; }

        .mob-sub {
          max-height: 0;
          overflow: hidden;
          background: rgba(0,0,0,0.2);
          transition: max-height 0.3s ease;
        }
        .mob-sub.open { max-height: 320px; }

        .mob-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 6vw 10px calc(6vw + 16px);
          font-size: 0.82rem;
          font-family: 'DM Sans', sans-serif;
          color: rgba(255,255,255,0.48);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          transition: color 0.2s, background 0.2s;
        }
        .mob-sub-link::before {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
          opacity: 0.4;
          transition: opacity 0.2s;
        }
        .mob-sub-link:hover, .mob-sub-link.activeLink {
          color: var(--gold-light);
          background: var(--gold-dim);
        }
        .mob-sub-link:hover::before,
        .mob-sub-link.activeLink::before { opacity: 1; }

        .mob-cta-wrap { padding: 14px 6vw 20px; display: flex; flex-direction: column; gap: 10px; }
        .mob-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--gold);
          color: var(--white);
          padding: 13px;
          border-radius: 9px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(201,146,42,0.25);
          transition: background 0.25s;
        }
        .mob-cta:hover { background: var(--gold-light); }

        /* Mobile brochure button */
        .mob-brochure-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px;
          border-radius: 9px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
          width: 100%;
        }
        .mob-brochure-btn.active {
          background: rgba(201,146,42,0.15);
          border: 1.5px solid rgba(201,146,42,0.5);
          color: var(--gold-light);
        }
        .mob-brochure-btn.active:hover {
          background: rgba(201,146,42,0.25);
          color: #fff;
        }
        .mob-brochure-btn.inactive {
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.3);
          cursor: not-allowed;
        }

        body.dark .nav          { background: #050d1a; }
        body.dark .nav.scrolled { background: rgba(5,13,26,0.97); }
        body.dark .notice-bar   { background: linear-gradient(90deg, #a07018, #7a5210, #a07018); }
        body.dark .mobile-panel { background: #0b1a30; }

        @media (max-width: 1180px) {
          .top-bar .brochure-btn span.label { display: none; }
        }
        @media (max-width: 1060px) {
          .top-bar { display: none; }
          .nav-links { display: none !important; }
          .menu-btn { display: flex; }
        }
        @media (max-width: 600px) {
          .notice-bar { font-size: 0.7rem; }
          .darkBtn span { display: none; }
          .logo div p { display: none; }
          .nav { height: 60px; padding: 0 4vw; }
        }
      `}),n.jsxs("header",{className:"header",children:[n.jsx("div",{className:`notice-bar ${v?"hidden":""}`,children:"📢 Admissions Open! Apply Now  |  New Session 2026–27"}),n.jsxs("nav",{className:`nav ${m?"scrolled":""}`,children:[n.jsx("div",{className:"logo",children:n.jsxs(re,{to:"/",style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[n.jsx(J0,{}),n.jsxs("div",{children:[n.jsx("h3",{children:"SVV School"}),n.jsx("p",{children:"Nagpur, Maharashtra"})]})]})}),n.jsxs("ul",{className:"nav-links",style:{display:"flex"},children:[n.jsx("li",{children:n.jsx(re,{className:q("/")?"activeLink":"",to:"/",children:"Home"})}),n.jsx("li",{children:n.jsx(re,{className:q("/about")?"activeLink":"",to:"/about",children:"About"})}),n.jsxs("li",{className:"dropdown",children:[n.jsxs(re,{to:"/academics",className:`dropdown-title ${R("/academics")?"activeLink":""}`,children:["Academics ",n.jsx("span",{className:"dropdown-chevron",children:"▼"})]}),n.jsx("ul",{className:"dropdown-menu",children:H.map((L,ie)=>n.jsxs(ro.Fragment,{children:[ie===2&&n.jsx("li",{children:n.jsx("div",{className:"dd-sep"})}),n.jsx("li",{children:n.jsx(re,{to:L.path,className:B.pathname===L.path?"activeLink":"",children:L.label})})]},L.path))})]}),n.jsx("li",{children:n.jsx(re,{className:q("/teachers")?"activeLink":"",to:"/teachers",children:"Teachers"})}),n.jsx("li",{children:n.jsx(re,{className:q("/principal")?"activeLink":"",to:"/principal",children:"Principal"})}),n.jsx("li",{children:n.jsx(re,{className:q("/management")?"activeLink":"",to:"/management",children:"Management"})}),n.jsx("li",{children:n.jsx(re,{className:q("/gallery")?"activeLink":"",to:"/gallery",children:"Gallery"})}),n.jsx("li",{children:n.jsx(re,{className:q("/success")?"activeLink":"",to:"/success",children:"Success"})}),n.jsx("li",{children:n.jsx(re,{className:q("/contact")?"activeLink":"",to:"/contact",children:"Contact"})})]}),n.jsxs("div",{className:"right-controls",children:[n.jsx("button",{className:"darkBtn",onClick:K,children:d?"☀️ Light":"🌙 Dark"}),n.jsx("button",{className:"menu-btn",onClick:()=>f(!c),children:c?"✕":"☰"})]}),n.jsxs("div",{className:"top-bar",children:[n.jsxs("button",{className:`brochure-btn ${M?"active":"inactive"}`,onClick:V,title:M?"Download School Brochure (PDF)":"No brochure uploaded yet",children:[M&&n.jsx("span",{className:"brochure-pulse"}),"📥",n.jsx("span",{className:"label",children:"Download Brochure"})]}),n.jsxs("div",{className:"top-buttons",children:[n.jsx(re,{to:"/contact#admission",children:n.jsx("button",{className:"enquire-btn",children:"Enquire Now"})}),n.jsx(re,{to:"/disclosure",children:n.jsx("button",{className:"disclosure-btn",children:"Public Disclosure"})})]})]})]}),n.jsxs("div",{className:`mobile-panel ${c?"active":""}`,children:[n.jsx(re,{to:"/",className:`mob-link ${q("/")?"activeLink":""}`,children:"Home"}),n.jsx(re,{to:"/about",className:`mob-link ${q("/about")?"activeLink":""}`,children:"About"}),n.jsxs("div",{className:`mob-link mob-link-split ${R("/academics")?"activeLink":""}`,children:[n.jsx(re,{to:"/academics",style:{flex:1,color:"inherit",textDecoration:"none"},children:"Academics"}),n.jsx("span",{className:`mob-chevron ${j?"open":""}`,onClick:L=>{L.stopPropagation(),g(ie=>!ie)},style:{padding:"4px 8px",cursor:"pointer"},children:"▼"})]}),n.jsx("div",{className:`mob-sub ${j?"open":""}`,children:H.map(L=>n.jsx(re,{to:L.path,className:`mob-sub-link ${B.pathname===L.path?"activeLink":""}`,children:L.label},L.path))}),n.jsx(re,{to:"/teachers",className:`mob-link ${q("/teachers")?"activeLink":""}`,children:"Teachers"}),n.jsx(re,{to:"/principal",className:`mob-link ${q("/principal")?"activeLink":""}`,children:"Principal"}),n.jsx(re,{to:"/management",className:`mob-link ${q("/management")?"activeLink":""}`,children:"Management"}),n.jsx(re,{to:"/gallery",className:`mob-link ${q("/gallery")?"activeLink":""}`,children:"Gallery"}),n.jsx(re,{to:"/success",className:`mob-link ${q("/success")?"activeLink":""}`,children:"Success"}),n.jsx(re,{to:"/contact",className:`mob-link ${q("/contact")?"activeLink":""}`,children:"Contact"}),n.jsxs("div",{className:"mob-cta-wrap",children:[n.jsxs("button",{className:`mob-brochure-btn ${M?"active":"inactive"}`,onClick:V,disabled:!M,title:M?"Download School Brochure":"No brochure uploaded yet",children:["📥 ",M?"Download Brochure":"Brochure Not Available"]}),n.jsx(re,{to:"/contact#admission",className:"mob-cta",children:"📋 Apply for Admission"})]})]})]})]})}function J0(){const[c,f]=S.useState(!1);return n.jsx("div",{className:"logo-img-box",children:c?n.jsx("div",{className:"logo-initials",children:"SVK"}):n.jsx("img",{src:"/logo.png",alt:"School Logo",onError:()=>f(!0)})})}function K0(){return n.jsx("footer",{className:"footer",children:n.jsx("p",{children:"© 2026 Sarvodaya Vidyalaya Junior Science College Hingna | Internship Project"})})}function $0(){const[c,f]=S.useState(!1);S.useEffect(()=>{function o(){f(document.documentElement.scrollTop>350)}return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);function d(){window.scrollTo({top:0,behavior:"smooth"})}return c?n.jsx("button",{className:"topBtn",onClick:d,children:"↑"}):null}const W0=["📢 Admissions open for Session 2026–27 — Apply before 30th April","🏆 Congratulations to our students for 100% result in HSC Board Exams 2025","📅 Annual Sports Day scheduled on 15th May 2026 — All students must participate","📚 New Science Lab inaugurated — state-of-the-art equipment for practical learning","🎉 Sarvodaya Vidyalaya ranked Top 10 schools in Nagpur District","📝 Unit Test schedule for June 2026 is now available on the Notice Board"];function wm(){const c=JSON.parse(localStorage.getItem("notices")||"[]");return c.length>0?c:W0}function F0(){const[c,f]=S.useState(!1),[d,o]=S.useState(localStorage.getItem("newsAlertEnabled")!=="false"),[m,h]=S.useState(wm);if(S.useEffect(()=>{const j=()=>{o(localStorage.getItem("newsAlertEnabled")!=="false")},g=()=>{h(wm())};return window.addEventListener("newsAlertToggled",j),window.addEventListener("noticesUpdated",g),()=>{window.removeEventListener("newsAlertToggled",j),window.removeEventListener("noticesUpdated",g)}},[]),!d)return null;const v=[...m,...m],T=Math.max(20,m.length*7);return n.jsxs("div",{className:"news-ticker-wrap",children:[n.jsxs("div",{className:"ticker-label",children:[n.jsx("span",{children:"🔴"})," Latest News"]}),n.jsx("div",{className:"ticker-track-wrap",children:n.jsx("div",{className:"ticker-track",style:{"--ticker-duration":`${T}s`,animationPlayState:c?"paused":"running"},children:v.map((j,g)=>n.jsxs(ro.Fragment,{children:[n.jsxs("span",{className:"ticker-item",children:[n.jsx("span",{className:"ticker-dot"}),j]}),n.jsx("span",{className:"ticker-sep",children:"|"})]},g))})}),n.jsx("button",{className:"ticker-pause-btn",onClick:()=>f(j=>!j),title:c?"Play":"Pause",children:c?"▶":"⏸"})]})}const I0=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy:       #0a1628;
    --navy-mid:   #142240;
    --gold:       #c9922a;
    --gold-light: #e8b84b;
    --gold-dim:   rgba(201,146,42,0.12);
    --cream:      #faf7f2;
    --white:      #ffffff;
    --muted:      #6b7a99;
    --border:     rgba(201,146,42,0.2);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--navy); }

  /* ════════════════════════════════
     HERO
  ════════════════════════════════ */
  .hero-wrap {
    position: relative;
    height: 100vh;
    min-height: 620px;
    overflow: hidden;
    background: var(--navy);
  }
  .hero-slide {
    position: absolute; inset: 0;
    opacity: 0; transition: opacity 1.2s ease;
    background-size: cover; background-position: center;
  }
  .hero-slide.active { opacity: 1; }
  .hero-slide::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.55) 60%, rgba(10,22,40,0.3) 100%);
  }
  .hero-content {
    position: absolute; inset: 0; z-index: 10;
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 8vw; max-width: 900px;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(201,146,42,0.15); border: 1px solid var(--gold);
    color: var(--gold-light); padding: 6px 16px; border-radius: 40px;
    font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase;
    font-weight: 500; margin-bottom: 24px; width: fit-content;
    animation: fadeUp 0.8s ease both;
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 900;
    color: var(--white); line-height: 1.15; margin-bottom: 20px;
    animation: fadeUp 0.9s 0.1s ease both;
  }
  .hero-title span { color: var(--gold-light); }
  .hero-desc {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: rgba(255,255,255,0.75); max-width: 560px;
    line-height: 1.75; margin-bottom: 36px; font-weight: 300;
    animation: fadeUp 1s 0.2s ease both;
  }
  .hero-actions {
    display: flex; gap: 16px; flex-wrap: wrap;
    animation: fadeUp 1s 0.3s ease both;
  }
  .btn-primary {
    background: var(--gold); color: var(--white); padding: 14px 32px;
    border-radius: 6px; border: none; font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem; font-weight: 600; cursor: pointer;
    transition: background 0.3s, transform 0.2s; text-decoration: none; display: inline-block;
  }
  .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }
  .btn-outline {
    background: transparent; color: var(--white); padding: 14px 32px;
    border-radius: 6px; border: 1.5px solid rgba(255,255,255,0.4);
    font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 500;
    cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block;
  }
  .btn-outline:hover { border-color: var(--gold); color: var(--gold-light); }

  .slide-nav {
    position: absolute; bottom: 40px; left: 8vw; z-index: 20;
    display: flex; align-items: center; gap: 12px;
  }
  .slide-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: rgba(255,255,255,0.35); cursor: pointer;
    transition: all 0.3s; border: none;
  }
  .slide-dot.active { background: var(--gold); width: 28px; border-radius: 4px; }
  .slide-arrows {
    position: absolute; right: 6vw; bottom: 32px; z-index: 20; display: flex; gap: 10px;
  }
  .arrow-btn {
    width: 44px; height: 44px; border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.08); color: white;
    font-size: 1rem; cursor: pointer; transition: all 0.3s; backdrop-filter: blur(4px);
  }
  .arrow-btn:hover { background: var(--gold); border-color: var(--gold); }

  /* ════════════════════════════════
     QUICK INFO BAR
  ════════════════════════════════ */
  .info-bar { background: var(--navy); padding: 0 5vw; }
  .info-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .info-item {
    padding: 28px 22px; border-right: 1px solid rgba(255,255,255,0.06);
    transition: background 0.3s;
  }
  .info-item:last-child { border-right: none; }
  .info-item:hover { background: rgba(201,146,42,0.06); }
  .info-icon { font-size: 1.4rem; margin-bottom: 10px; }
  .info-label { font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--white); margin-bottom: 4px; }
  .info-sub { font-size: 0.82rem; color: var(--muted); line-height: 1.5; }
  .info-link {
    display: inline-block; margin-top: 8px; font-size: 0.8rem;
    color: var(--gold); font-weight: 600; text-decoration: none; letter-spacing: 0.04em;
  }
  .info-link:hover { color: var(--gold-light); }

  /* ════════════════════════════════
     SECTION COMMONS
  ════════════════════════════════ */
  .section { padding: 90px 6vw; }
  .section-alt { background: var(--white); }
  .section-dark { background: var(--navy); }

  .section-label {
    font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold); font-weight: 600; margin-bottom: 10px;
    display: flex; align-items: center; gap: 10px;
  }
  .section-label::before {
    content: ''; display: block; width: 24px; height: 2px;
    background: var(--gold); border-radius: 2px;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 700;
    color: var(--navy); line-height: 1.2; margin-bottom: 12px;
  }
  .section-title-white { color: var(--white); }
  .section-sub { font-size: 1rem; color: var(--muted); max-width: 520px; line-height: 1.7; }
  .section-sub-white { color: rgba(255,255,255,0.55); }
  .section-head { margin-bottom: 48px; }
  .section-head-center { text-align: center; }
  .section-head-center .section-label { justify-content: center; }
  .section-head-center .section-label::before { display: none; }
  .section-head-center .section-sub { margin: 0 auto; }

  /* ════════════════════════════════
     NOTICE + EVENTS
  ════════════════════════════════ */
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
  .board-card {
    background: var(--white); border-radius: 16px;
    border: 1px solid rgba(0,0,0,0.07); overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.05);
  }
  .board-header {
    background: var(--navy); padding: 18px 26px;
    display: flex; align-items: center; gap: 12px;
  }
  .board-header h3 { font-family: 'Playfair Display', serif; color: var(--white); font-size: 1.05rem; }
  .board-header span { font-size: 1.2rem; }
  .notice-list {
    list-style: none; padding: 18px 26px;
    max-height: 270px; overflow-y: auto;
  }
  .notice-list::-webkit-scrollbar { width: 4px; }
  .notice-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
  .notice-item {
    padding: 11px 0; border-bottom: 1px solid rgba(0,0,0,0.05);
    font-size: 0.87rem; color: #334; display: flex;
    align-items: flex-start; gap: 10px; line-height: 1.6;
  }
  .notice-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold); flex-shrink: 0; margin-top: 7px;
  }
  .event-list { padding: 18px 26px; }
  .event-item {
    display: flex; gap: 16px; align-items: center;
    padding: 11px 0; border-bottom: 1px solid rgba(0,0,0,0.05);
  }
  .event-icon {
    width: 40px; height: 40px; border-radius: 10px;
    background: var(--gold-dim); display: flex; align-items: center;
    justify-content: center; font-size: 1.1rem; flex-shrink: 0;
  }
  .event-text { font-size: 0.87rem; color: #334; line-height: 1.5; }
  .event-empty { color: var(--muted); font-size: 0.88rem; padding: 18px 0; }

  /* ════════════════════════════════
     WHY CHOOSE US
  ════════════════════════════════ */
  .why-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }
  .why-card {
    background: var(--white); border: 1px solid rgba(0,0,0,0.07);
    border-radius: 18px; padding: 34px 28px;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 2px 14px rgba(0,0,0,0.04);
    position: relative; overflow: hidden;
  }
  .why-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.35s ease;
  }
  .why-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
  .why-card:hover::before { transform: scaleX(1); }
  .why-icon {
    width: 54px; height: 54px; border-radius: 14px;
    background: var(--gold-dim); display: flex; align-items: center;
    justify-content: center; font-size: 1.5rem; margin-bottom: 18px;
  }
  .why-title {
    font-family: 'Playfair Display', serif; font-size: 1.05rem;
    font-weight: 700; color: var(--navy); margin-bottom: 10px;
  }
  .why-desc { font-size: 0.86rem; color: var(--muted); line-height: 1.7; }

  /* ════════════════════════════════
     STATS
  ════════════════════════════════ */
  .stats-section {
    background: var(--navy); padding: 80px 6vw;
    position: relative; overflow: hidden;
  }
  .stats-section::before {
    content: ''; position: absolute; top: -120px; right: -120px;
    width: 400px; height: 400px; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,146,42,0.12) 0%, transparent 70%);
  }
  .stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 2px; margin-top: 50px;
  }
  .stat-card {
    padding: 40px 28px; border: 1px solid rgba(255,255,255,0.06);
    text-align: center; transition: background 0.3s;
  }
  .stat-card:hover { background: rgba(201,146,42,0.07); }
  .stat-num {
    font-family: 'Playfair Display', serif; font-size: 3rem;
    font-weight: 900; color: var(--gold-light); display: block;
    line-height: 1; margin-bottom: 10px;
  }
  .stat-label { font-size: 0.82rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.1em; }

  /* ════════════════════════════════
     ACADEMIC STREAMS
  ════════════════════════════════ */
  .streams-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  .stream-card {
    border-radius: 20px; overflow: hidden;
    box-shadow: 0 4px 28px rgba(0,0,0,0.08);
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative; min-height: 320px;
    display: flex; flex-direction: column; justify-content: flex-end;
  }
  .stream-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.15); }
  .stream-bg {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
  }
  .stream-bg::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(0deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.4) 60%, transparent 100%);
  }
  .stream-body { position: relative; z-index: 1; padding: 32px 30px; }
  .stream-badge {
    display: inline-block; background: var(--gold); color: white;
    font-size: 0.7rem; font-weight: 700; padding: 4px 12px;
    border-radius: 20px; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px;
  }
  .stream-title {
    font-family: 'Playfair Display', serif; font-size: 1.5rem;
    font-weight: 900; color: white; margin-bottom: 12px; line-height: 1.2;
  }
  .stream-subjects { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
  .stream-tag {
    background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.85); font-size: 0.75rem; padding: 4px 12px; border-radius: 20px;
  }
  .stream-link {
    display: inline-flex; align-items: center; gap: 6px;
    color: var(--gold-light); font-size: 0.84rem; font-weight: 600;
    text-decoration: none; transition: gap 0.2s;
  }
  .stream-link:hover { gap: 10px; color: var(--gold-light); }

  /* ════════════════════════════════
     PRINCIPAL MESSAGE
  ════════════════════════════════ */
  .principal-wrap {
    display: grid; grid-template-columns: 380px 1fr; gap: 60px; align-items: center;
  }
  .principal-img-wrap {
    position: relative;
  }
  .principal-img {
    width: 100%; aspect-ratio: 3/4; object-fit: cover;
    border-radius: 20px; display: block;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  }
  .principal-img-fallback {
    width: 100%; aspect-ratio: 3/4;
    background: linear-gradient(135deg, var(--navy), var(--navy-mid));
    border-radius: 20px; display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 12px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  }
  .principal-img-fallback span:first-child { font-size: 4rem; }
  .principal-img-fallback span:last-child { color: rgba(255,255,255,0.4); font-size: 0.85rem; }
  .principal-badge-wrap {
    position: absolute; bottom: -18px; right: -18px;
    background: var(--gold); border-radius: 14px; padding: 16px 20px;
    box-shadow: 0 8px 24px rgba(201,146,42,0.35); text-align: center;
  }
  .principal-badge-num {
    font-family: 'Playfair Display', serif; font-size: 1.6rem;
    font-weight: 900; color: white; line-height: 1;
  }
  .principal-badge-label { font-size: 0.7rem; color: rgba(255,255,255,0.8); margin-top: 2px; }
  .principal-quote {
    font-family: 'Playfair Display', serif; font-size: 1.15rem;
    font-style: italic; color: var(--navy); line-height: 1.7;
    border-left: 3px solid var(--gold); padding-left: 20px;
    margin: 24px 0; opacity: 0.85;
  }
  .principal-message {
    font-size: 0.92rem; color: var(--muted); line-height: 1.85; margin-bottom: 28px;
  }
  .principal-name {
    font-family: 'Playfair Display', serif; font-size: 1.2rem;
    font-weight: 700; color: var(--navy);
  }
  .principal-role { font-size: 0.82rem; color: var(--gold); font-weight: 600; margin-top: 2px; }

  /* ════════════════════════════════
     GALLERY PREVIEW
  ════════════════════════════════ */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 220px 220px;
    gap: 12px;
  }
  .gallery-item {
    border-radius: 14px; overflow: hidden; position: relative;
    background: #e0e8f0; cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .gallery-item:first-child {
    grid-column: span 2; grid-row: span 2;
  }
  .gallery-item:hover { transform: scale(1.02); box-shadow: 0 12px 36px rgba(0,0,0,0.18); }
  .gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .gallery-item-overlay {
    position: absolute; inset: 0;
    background: rgba(10,22,40,0.0); transition: background 0.3s;
    display: flex; align-items: center; justify-content: center;
  }
  .gallery-item:hover .gallery-item-overlay { background: rgba(10,22,40,0.35); }
  .gallery-overlay-icon { color: white; font-size: 1.6rem; opacity: 0; transition: opacity 0.3s; }
  .gallery-item:hover .gallery-overlay-icon { opacity: 1; }
  .gallery-empty-item {
    border-radius: 14px; background: #f0f4f8;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.82rem; color: var(--muted); border: 2px dashed #dde3ec;
  }
  .gallery-cta { text-align: center; margin-top: 36px; }

  /* ════════════════════════════════
     SUCCESS STORIES
  ════════════════════════════════ */
  .success-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .success-card {
    background: var(--white); border: 1px solid rgba(0,0,0,0.07);
    border-radius: 18px; padding: 28px; text-align: center;
    box-shadow: 0 2px 16px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .success-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
  .success-avatar {
    width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 14px;
    object-fit: cover; border: 3px solid var(--gold);
    display: block;
  }
  .success-avatar-fallback {
    width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 14px;
    background: linear-gradient(135deg, var(--gold), var(--navy));
    display: flex; align-items: center; justify-content: center;
    color: white; font-family: 'Playfair Display', serif;
    font-size: 1.4rem; font-weight: 700; border: 3px solid var(--gold);
  }
  .success-name { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
  .success-achievement { font-size: 0.84rem; color: var(--muted); line-height: 1.6; margin-bottom: 10px; }
  .success-year {
    display: inline-block; background: var(--gold-dim); color: var(--gold);
    font-size: 0.72rem; font-weight: 700; padding: 3px 12px;
    border-radius: 20px; border: 1px solid rgba(201,146,42,0.3);
  }
  .success-empty { text-align: center; padding: 50px; color: var(--muted); font-size: 0.9rem; }

  /* ════════════════════════════════
     TESTIMONIALS
  ════════════════════════════════ */
  .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .testi-card {
    background: var(--white); border: 1px solid rgba(0,0,0,0.07);
    border-radius: 16px; padding: 34px 30px; position: relative;
    transition: box-shadow 0.3s, transform 0.3s;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .testi-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
  .testi-quote {
    font-family: 'Playfair Display', serif; font-size: 4rem;
    color: var(--gold); line-height: 1; position: absolute;
    top: 18px; left: 26px; opacity: 0.2;
  }
  .testi-text { font-size: 0.92rem; color: #445; line-height: 1.8; margin-bottom: 22px; position: relative; z-index: 1; }
  .testi-name { font-weight: 600; font-size: 0.88rem; color: var(--navy); }
  .testi-role { font-size: 0.76rem; color: var(--muted); margin-top: 2px; }
  .testi-avatar {
    width: 40px; height: 40px; border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--navy));
    display: flex; align-items: center; justify-content: center;
    color: white; font-weight: 700; font-size: 0.9rem; margin-bottom: 12px;
  }

  /* ════════════════════════════════
     FACILITIES
  ════════════════════════════════ */
  .facilities-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .facility-card {
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px; padding: 28px 22px; text-align: center;
    transition: background 0.3s, transform 0.3s;
  }
  .facility-card:hover { background: rgba(201,146,42,0.08); transform: translateY(-4px); }
  .facility-icon { font-size: 2rem; margin-bottom: 14px; }
  .facility-name { font-family: 'Playfair Display', serif; font-size: 0.95rem; color: white; margin-bottom: 6px; }
  .facility-desc { font-size: 0.78rem; color: rgba(255,255,255,0.45); line-height: 1.6; }

  /* ════════════════════════════════
     CTA BANNER
  ════════════════════════════════ */
  .cta-banner {
    background: linear-gradient(135deg, var(--gold) 0%, #a87020 50%, var(--gold) 100%);
    background-size: 200% 100%; animation: shimmer 6s linear infinite;
    padding: 70px 6vw; text-align: center; position: relative; overflow: hidden;
  }
  .cta-banner::before {
    content: ''; position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  @keyframes shimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
  .cta-title {
    font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 900; color: white; margin-bottom: 14px; position: relative;
  }
  .cta-desc { font-size: 1rem; color: rgba(255,255,255,0.85); max-width: 540px; margin: 0 auto 32px; line-height: 1.7; position: relative; }
  .cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; position: relative; }
  .btn-white {
    background: white; color: var(--gold); padding: 14px 36px;
    border-radius: 6px; border: none; font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem; font-weight: 700; cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s; text-decoration: none; display: inline-block;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  }
  .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
  .btn-white-outline {
    background: transparent; color: white; padding: 14px 36px;
    border-radius: 6px; border: 2px solid rgba(255,255,255,0.6);
    font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 600;
    cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-block;
  }
  .btn-white-outline:hover { background: rgba(255,255,255,0.15); border-color: white; }

  /* ════════════════════════════════
     LOCATION
  ════════════════════════════════ */
  .location-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
  .map-wrap {
    border-radius: 20px; overflow: hidden;
    box-shadow: 0 12px 40px rgba(0,0,0,0.1); height: 380px;
  }
  .map-wrap iframe { width: 100%; height: 100%; border: none; display: block; }
  .location-info { }
  .contact-detail {
    display: flex; align-items: flex-start; gap: 14px;
    padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,0.06);
  }
  .contact-detail:last-child { border-bottom: none; }
  .contact-icon {
    width: 42px; height: 42px; border-radius: 10px; background: var(--gold-dim);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; flex-shrink: 0;
  }
  .contact-label { font-size: 0.72rem; color: var(--muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 3px; }
  .contact-value { font-size: 0.9rem; color: var(--navy); font-weight: 500; }
  .social-row { display: flex; gap: 12px; margin-top: 24px; }
  .social-btn {
    width: 42px; height: 42px; border-radius: 10px;
    background: var(--navy); color: white; border: none;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; cursor: pointer; text-decoration: none;
    transition: background 0.2s, transform 0.2s;
  }
  .social-btn:hover { background: var(--gold); transform: translateY(-2px); }

  /* ════════════════════════════════
     ANIMATIONS
  ════════════════════════════════ */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ════════════════════════════════
     RESPONSIVE
  ════════════════════════════════ */
  @media (max-width: 1100px) {
    .why-grid { grid-template-columns: 1fr 1fr; }
    .facilities-grid { grid-template-columns: repeat(2, 1fr); }
    .principal-wrap { grid-template-columns: 300px 1fr; gap: 40px; }
  }
  @media (max-width: 900px) {
    .info-grid { grid-template-columns: 1fr 1fr; }
    .info-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
    .two-col, .streams-grid, .principal-wrap, .location-wrap { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .testimonials-grid, .success-grid { grid-template-columns: 1fr; }
    .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; }
    .gallery-item:first-child { grid-column: span 2; grid-row: span 1; }
    .principal-img-wrap { max-width: 360px; margin: 0 auto; }
    .principal-badge-wrap { bottom: -14px; right: 20px; }
  }
  @media (max-width: 600px) {
    .section { padding: 60px 5vw; }
    .info-grid { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .why-grid, .facilities-grid { grid-template-columns: 1fr; }
    .gallery-grid { grid-template-columns: 1fr 1fr; }
    .gallery-item:first-child { grid-column: 1; }
    .hero-title { font-size: 1.9rem; }
    .success-grid { grid-template-columns: 1fr 1fr; }
  }
`,Pa=[{title:n.jsxs(n.Fragment,{children:["Welcome to ",n.jsx("span",{children:"Sarvodaya Vidyalaya"})," Junior Science College"]}),desc:"Quality education with modern classrooms, experienced teachers, and a nurturing environment for every student to thrive.",btnText:"Admissions Open",link:"/contact#admission",img:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80"},{title:n.jsxs(n.Fragment,{children:["Smart Learning, ",n.jsx("span",{children:"Bright Future"})," Ahead"]}),desc:"Interactive teaching methods, smart classrooms, and skill-based learning designed for the leaders of tomorrow.",btnText:"Explore Academics",link:"/academics",img:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"},{title:n.jsxs(n.Fragment,{children:["Sports, Arts & ",n.jsx("span",{children:"Overall Development"})]}),desc:"We nurture physical fitness, creativity, and strong character through diverse co-curricular activities.",btnText:"View Gallery",link:"/gallery",img:"https://images.unsplash.com/photo-1519452635266-abab4954c08b?auto=format&fit=crop&w=1600&q=80"}],P0=[{icon:"🏫",title:"Modern Infrastructure",desc:"State-of-the-art classrooms, science labs, computer labs, and a well-stocked library to support comprehensive learning."},{icon:"👨‍🏫",title:"Expert Faculty",desc:"Highly qualified and experienced teachers dedicated to bringing out the best in every student through personalized attention."},{icon:"🏆",title:"Proven Results",desc:"Consistent 100% board exam results and numerous district and state-level toppers over the past decade."},{icon:"⚽",title:"Sports & Activities",desc:"Comprehensive sports program including cricket, football, athletics, and indoor games with trained coaches."},{icon:"💻",title:"Smart Classrooms",desc:"Digital learning tools, projectors, and interactive boards make lessons engaging, visual, and effective."},{icon:"🎨",title:"Arts & Culture",desc:"Vibrant cultural programs, drawing, music, and drama help students discover their creative potential."}],ev=[{icon:"🔬",name:"Science Labs",desc:"Physics, Chemistry & Biology labs with modern equipment"},{icon:"💻",name:"Computer Lab",desc:"60+ systems with high-speed internet access"},{icon:"📚",name:"Library",desc:"5000+ books, journals & digital resources"},{icon:"⚽",name:"Sports Ground",desc:"Cricket, football, athletics & indoor courts"},{icon:"🎭",name:"Auditorium",desc:"500-seat auditorium for events & programs"},{icon:"🚌",name:"Transport",desc:"Safe school bus service across all routes"},{icon:"🍽️",name:"Canteen",desc:"Hygienic, nutritious meals for students"},{icon:"🏥",name:"Medical Room",desc:"First-aid & health checkup facility"}],av=[{name:"Rahul Sharma",role:"Parent",msg:"The teachers are genuinely supportive and the education quality is outstanding. My child has grown tremendously here."},{name:"Ananya Desai",role:"Student",msg:"I love the interactive smart classes and all the activities. Coming to school every day feels exciting and rewarding."},{name:"Neha Verma",role:"Parent",msg:"A very disciplined school with great focus on academics, sports, and overall personality development."}],tv=["https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80"];function lv(){const c=JSON.parse(localStorage.getItem("notices")||"[]"),f=JSON.parse(localStorage.getItem("events")||"[]"),d=JSON.parse(localStorage.getItem("successList")||"[]"),o=JSON.parse(localStorage.getItem("gallery")||"[]"),m=JSON.parse(localStorage.getItem("principalInfo")||"{}"),h=JSON.parse(localStorage.getItem("contactInfo")||"{}"),v=o.length>0?o.slice(0,5):tv,[T,j]=S.useState(0),g=S.useRef(null),M=()=>{clearInterval(g.current),g.current=setInterval(()=>j(R=>(R+1)%Pa.length),5e3)};S.useEffect(()=>(M(),()=>clearInterval(g.current)),[]);const A=R=>{j(R),M()},B=()=>{j(R=>(R-1+Pa.length)%Pa.length),M()},X=()=>{j(R=>(R+1)%Pa.length),M()},K={students:1200,teachers:80,awards:25,classrooms:50},[V,q]=S.useState({students:0,teachers:0,awards:0,classrooms:0});return S.useEffect(()=>{let R;const H=performance.now(),L=2200,ie=be=>{const ze=Math.min((be-H)/L,1),ee=1-Math.pow(1-ze,3);q({students:Math.floor(ee*K.students),teachers:Math.floor(ee*K.teachers),awards:Math.floor(ee*K.awards),classrooms:Math.floor(ee*K.classrooms)}),ze<1&&(R=requestAnimationFrame(ie))};return R=requestAnimationFrame(ie),()=>cancelAnimationFrame(R)},[]),n.jsxs(n.Fragment,{children:[n.jsx("style",{children:I0}),n.jsxs("div",{className:"hero-wrap",children:[Pa.map((R,H)=>n.jsx("div",{className:`hero-slide ${H===T?"active":""}`,style:{backgroundImage:`url(${R.img})`}},H)),n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"hero-badge",children:[n.jsx("span",{children:"✦"})," Est. Since Hingna · Session 2026–27"]}),n.jsx("h1",{className:"hero-title",children:Pa[T].title}),n.jsx("p",{className:"hero-desc",children:Pa[T].desc}),n.jsxs("div",{className:"hero-actions",children:[n.jsx(re,{to:Pa[T].link,children:n.jsx("button",{className:"btn-primary",children:Pa[T].btnText})}),n.jsx(re,{to:"/about",children:n.jsx("button",{className:"btn-outline",children:"Learn More"})})]})]}),n.jsx("div",{className:"slide-nav",children:Pa.map((R,H)=>n.jsx("button",{className:`slide-dot ${H===T?"active":""}`,onClick:()=>A(H)},H))}),n.jsxs("div",{className:"slide-arrows",children:[n.jsx("button",{className:"arrow-btn",onClick:B,children:"◀"}),n.jsx("button",{className:"arrow-btn",onClick:X,children:"▶"})]})]}),n.jsx("div",{className:"info-bar",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("div",{className:"info-icon",children:"📌"}),n.jsx("div",{className:"info-label",children:"Admissions"}),n.jsx("div",{className:"info-sub",children:"Session 2026–27 now open for enrollment"}),n.jsx(re,{to:"/contact#admission",className:"info-link",children:"Apply Now →"})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("div",{className:"info-icon",children:"⏰"}),n.jsx("div",{className:"info-label",children:"School Timings"}),n.jsx("div",{className:"info-sub",children:h.officeHours||"Mon – Sat: 8:00 AM to 2:30 PM"}),n.jsx("span",{className:"info-link",style:{color:"var(--muted)",cursor:"default"},children:"Sunday Holiday"})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("div",{className:"info-icon",children:"📞"}),n.jsx("div",{className:"info-label",children:"Contact Us"}),n.jsx("div",{className:"info-sub",children:"We're here for admissions & support"}),n.jsx("span",{className:"info-link",children:h.phone||"+91 98765 43210"})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("div",{className:"info-icon",children:"🏫"}),n.jsx("div",{className:"info-label",children:"Facilities"}),n.jsx("div",{className:"info-sub",children:"Labs · Library · Smart Classes · Sports"}),n.jsx(re,{to:"/about",className:"info-link",children:"View More →"})]})]})}),n.jsxs("section",{className:"section section-alt",children:[n.jsxs("div",{className:"section-head",children:[n.jsx("div",{className:"section-label",children:"Stay Updated"}),n.jsx("div",{className:"section-title",children:"Notice Board & Events"}),n.jsx("div",{className:"section-sub",children:"Stay informed about school announcements, important dates, and upcoming events."})]}),n.jsxs("div",{className:"two-col",children:[n.jsxs("div",{className:"board-card",children:[n.jsxs("div",{className:"board-header",children:[n.jsx("span",{children:"📢"}),n.jsx("h3",{children:"Notice Board"})]}),n.jsx("ul",{className:"notice-list",children:c.length===0?n.jsxs("li",{className:"notice-item",children:[n.jsx("div",{className:"notice-dot"}),"No notices at this time."]}):c.map((R,H)=>n.jsxs("li",{className:"notice-item",children:[n.jsx("div",{className:"notice-dot"}),R]},H))})]}),n.jsxs("div",{className:"board-card",children:[n.jsxs("div",{className:"board-header",children:[n.jsx("span",{children:"📅"}),n.jsx("h3",{children:"Upcoming Events"})]}),n.jsx("div",{className:"event-list",children:f.length===0?n.jsx("div",{className:"event-empty",children:"No upcoming events scheduled."}):f.map((R,H)=>n.jsxs("div",{className:"event-item",children:[n.jsx("div",{className:"event-icon",children:"📅"}),n.jsx("div",{className:"event-text",children:R})]},H))})]})]})]}),n.jsxs("section",{className:"section",children:[n.jsxs("div",{className:"section-head",children:[n.jsx("div",{className:"section-label",children:"Our Strengths"}),n.jsx("div",{className:"section-title",children:"Why Choose Sarvodaya Vidyalaya?"}),n.jsx("div",{className:"section-sub",children:"We go beyond textbooks — shaping confident, skilled, and well-rounded individuals."})]}),n.jsx("div",{className:"why-grid",children:P0.map((R,H)=>n.jsxs("div",{className:"why-card",children:[n.jsx("div",{className:"why-icon",children:R.icon}),n.jsx("div",{className:"why-title",children:R.title}),n.jsx("div",{className:"why-desc",children:R.desc})]},H))})]}),n.jsx("div",{className:"stats-section",children:n.jsxs("div",{style:{position:"relative",zIndex:1},children:[n.jsxs("div",{className:"section-head",children:[n.jsx("div",{className:"section-label",style:{color:"var(--gold)"},children:"By the Numbers"}),n.jsx("div",{className:"section-title section-title-white",children:"Our Achievements"}),n.jsx("div",{className:"section-sub section-sub-white",children:"We are proud of the community we have built over the years."})]}),n.jsx("div",{className:"stats-grid",children:[{num:V.students,label:"Students Enrolled",suffix:"+"},{num:V.teachers,label:"Expert Teachers",suffix:"+"},{num:V.awards,label:"Awards Won",suffix:"+"},{num:V.classrooms,label:"Classrooms",suffix:"+"}].map((R,H)=>n.jsxs("div",{className:"stat-card",children:[n.jsxs("span",{className:"stat-num",children:[R.num,R.suffix]}),n.jsx("div",{className:"stat-label",children:R.label})]},H))})]})}),n.jsxs("section",{className:"section section-alt",children:[n.jsxs("div",{className:"section-head",children:[n.jsx("div",{className:"section-label",children:"Academics"}),n.jsx("div",{className:"section-title",children:"Our Academic Streams"}),n.jsx("div",{className:"section-sub",children:"Choose the stream that best fits your passion and career goals."})]}),n.jsxs("div",{className:"streams-grid",children:[n.jsxs("div",{className:"stream-card",children:[n.jsx("div",{className:"stream-bg",style:{backgroundImage:"url(https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=800&q=80)"}}),n.jsxs("div",{className:"stream-body",children:[n.jsx("div",{className:"stream-badge",children:"11th & 12th"}),n.jsx("div",{className:"stream-title",children:"Science Stream"}),n.jsx("div",{className:"stream-subjects",children:["Physics","Chemistry","Biology","Mathematics","English"].map(R=>n.jsx("span",{className:"stream-tag",children:R},R))}),n.jsx(re,{to:"/academics/science",className:"stream-link",children:"Explore Science Stream →"})]})]}),n.jsxs("div",{className:"stream-card",children:[n.jsx("div",{className:"stream-bg",style:{backgroundImage:"url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80)"}}),n.jsxs("div",{className:"stream-body",children:[n.jsx("div",{className:"stream-badge",children:"11th & 12th"}),n.jsx("div",{className:"stream-title",children:"Commerce Stream"}),n.jsx("div",{className:"stream-subjects",children:["Accountancy","Economics","Business Studies","Mathematics","English"].map(R=>n.jsx("span",{className:"stream-tag",children:R},R))}),n.jsx(re,{to:"/academics/commerce",className:"stream-link",children:"Explore Commerce Stream →"})]})]})]})]}),n.jsx("section",{className:"section",children:n.jsxs("div",{className:"principal-wrap",children:[n.jsxs("div",{className:"principal-img-wrap",children:[m.photo&&m.photo!=="/principal.jpg"?n.jsx("img",{src:m.photo,alt:"Principal",className:"principal-img",onError:R=>{R.target.style.display="none",R.target.nextSibling.style.display="flex"}}):null,n.jsxs("div",{className:"principal-img-fallback",style:{display:m.photo&&m.photo!=="/principal.jpg"?"none":"flex"},children:[n.jsx("span",{children:"👩‍💼"}),n.jsx("span",{children:"Principal Photo"})]}),n.jsxs("div",{className:"principal-badge-wrap",children:[n.jsx("div",{className:"principal-badge-num",children:m.experience||"25+"}),n.jsx("div",{className:"principal-badge-label",children:"Years of Excellence"})]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"section-label",children:"From the Principal's Desk"}),n.jsx("div",{className:"section-title",children:m.name||"Our Principal"}),n.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--gold)",fontWeight:600,marginBottom:"16px"},children:[m.qualification||"M.Sc., B.Ed."," · ",m.role||"Principal"]}),m.quote&&n.jsxs("div",{className:"principal-quote",children:['"',m.quote,'"']}),n.jsx("div",{className:"principal-message",children:m.message?m.message.split(`
`).slice(0,3).map((R,H)=>n.jsx("p",{style:{marginBottom:"10px"},children:R},H)):n.jsx("p",{children:"At Sarvodaya Vidyalaya, we believe every child carries within them a unique spark. Our mission is to nurture that spark through quality education, discipline, and a love for learning. We are committed to creating an environment where students not only excel academically but also grow as responsible human beings."})}),n.jsx(re,{to:"/principal",children:n.jsx("button",{className:"btn-primary",children:"Read Full Message →"})})]})]})}),n.jsx("div",{className:"stats-section",style:{padding:"80px 6vw"},children:n.jsxs("div",{style:{position:"relative",zIndex:1},children:[n.jsxs("div",{className:"section-head",children:[n.jsx("div",{className:"section-label",style:{color:"var(--gold)"},children:"Infrastructure"}),n.jsx("div",{className:"section-title section-title-white",children:"World-Class Facilities"}),n.jsx("div",{className:"section-sub section-sub-white",children:"Everything students need to learn, grow, and thrive — all under one roof."})]}),n.jsx("div",{className:"facilities-grid",children:ev.map((R,H)=>n.jsxs("div",{className:"facility-card",children:[n.jsx("div",{className:"facility-icon",children:R.icon}),n.jsx("div",{className:"facility-name",children:R.name}),n.jsx("div",{className:"facility-desc",children:R.desc})]},H))})]})}),n.jsxs("section",{className:"section section-alt",children:[n.jsxs("div",{className:"section-head section-head-center",children:[n.jsx("div",{className:"section-label",children:"Our Campus Life"}),n.jsx("div",{className:"section-title",style:{textAlign:"center"},children:"A Glimpse of Our School"}),n.jsx("div",{className:"section-sub",style:{textAlign:"center"},children:"Moments that capture the spirit, energy, and joy of life at Sarvodaya Vidyalaya."})]}),n.jsxs("div",{className:"gallery-grid",children:[v.slice(0,5).map((R,H)=>n.jsxs("div",{className:"gallery-item",children:[n.jsx("img",{src:R,alt:`School ${H+1}`}),n.jsx("div",{className:"gallery-item-overlay",children:n.jsx("span",{className:"gallery-overlay-icon",children:"🔍"})})]},H)),v.length<5&&Array.from({length:5-v.length}).map((R,H)=>n.jsx("div",{className:"gallery-empty-item",children:"📷"},`empty-${H}`))]}),n.jsx("div",{className:"gallery-cta",children:n.jsx(re,{to:"/gallery",children:n.jsx("button",{className:"btn-primary",children:"View Full Gallery →"})})})]}),n.jsxs("section",{className:"section",children:[n.jsxs("div",{className:"section-head",children:[n.jsx("div",{className:"section-label",children:"Pride of Sarvodaya"}),n.jsx("div",{className:"section-title",children:"Student Success Stories"}),n.jsx("div",{className:"section-sub",children:"Our students go on to achieve great things. Here are some of their inspiring journeys."})]}),d.length===0?n.jsx("div",{className:"success-empty",children:"🏆 Success stories will appear here once added from the admin dashboard."}):n.jsx("div",{className:"success-grid",children:d.slice(0,6).map((R,H)=>n.jsxs("div",{className:"success-card",children:[R.img?n.jsx("img",{src:R.img,alt:R.name,className:"success-avatar",onError:L=>{L.target.style.display="none",L.target.nextSibling.style.display="flex"}}):null,n.jsx("div",{className:"success-avatar-fallback",style:{display:R.img?"none":"flex"},children:R.name?.[0]||"S"}),n.jsx("div",{className:"success-name",children:R.name}),n.jsx("div",{className:"success-achievement",children:R.achievement}),n.jsx("span",{className:"success-year",children:R.year})]},H))}),n.jsx("div",{style:{textAlign:"center",marginTop:"36px"},children:n.jsx(re,{to:"/success",children:n.jsx("button",{className:"btn-primary",children:"View All Stories →"})})})]}),n.jsxs("section",{className:"section section-alt",children:[n.jsxs("div",{className:"section-head section-head-center",children:[n.jsx("div",{className:"section-label",children:"Voices of Trust"}),n.jsx("div",{className:"section-title",style:{textAlign:"center"},children:"What Our Community Says"}),n.jsx("div",{className:"section-sub",style:{textAlign:"center"},children:"Hear from the parents and students who are part of the Sarvodaya family."})]}),n.jsx("div",{className:"testimonials-grid",children:av.map((R,H)=>n.jsxs("div",{className:"testi-card",children:[n.jsx("div",{className:"testi-quote",children:'"'}),n.jsx("div",{className:"testi-avatar",children:R.name[0]}),n.jsx("p",{className:"testi-text",children:R.msg}),n.jsx("div",{className:"testi-name",children:R.name}),n.jsx("div",{className:"testi-role",children:R.role})]},H))})]}),n.jsxs("section",{className:"section",children:[n.jsxs("div",{className:"section-head",children:[n.jsx("div",{className:"section-label",children:"Find Us"}),n.jsx("div",{className:"section-title",children:"Visit Our School"}),n.jsx("div",{className:"section-sub",children:"We'd love to welcome you. Come see our campus and meet our team."})]}),n.jsxs("div",{className:"location-wrap",children:[n.jsx("div",{className:"map-wrap",children:n.jsx("iframe",{src:h.mapSrc||"https://www.google.com/maps?q=Hingna,Nagpur,Maharashtra&output=embed",title:"School Location",allowFullScreen:"",loading:"lazy"})}),n.jsxs("div",{className:"location-info",children:[n.jsxs("div",{className:"contact-detail",children:[n.jsx("div",{className:"contact-icon",children:"📍"}),n.jsxs("div",{children:[n.jsx("div",{className:"contact-label",children:"Address"}),n.jsxs("div",{className:"contact-value",children:[h.address||"Hingna Road, Near Main Bus Stop",", ",h.city||"Hingna, Nagpur – 441110"]})]})]}),n.jsxs("div",{className:"contact-detail",children:[n.jsx("div",{className:"contact-icon",children:"📞"}),n.jsxs("div",{children:[n.jsx("div",{className:"contact-label",children:"Phone"}),n.jsx("div",{className:"contact-value",children:h.phone||"+91 98765 43210"})]})]}),n.jsxs("div",{className:"contact-detail",children:[n.jsx("div",{className:"contact-icon",children:"✉️"}),n.jsxs("div",{children:[n.jsx("div",{className:"contact-label",children:"Email"}),n.jsx("div",{className:"contact-value",children:h.email||"info@sarvodayavk.edu.in"})]})]}),n.jsxs("div",{className:"contact-detail",children:[n.jsx("div",{className:"contact-icon",children:"⏰"}),n.jsxs("div",{children:[n.jsx("div",{className:"contact-label",children:"Office Hours"}),n.jsx("div",{className:"contact-value",children:h.officeHours||"Mon – Sat, 8:00 AM – 2:30 PM"})]})]}),n.jsxs("div",{className:"social-row",children:[h.facebookUrl&&n.jsx("a",{href:h.facebookUrl,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"Facebook",children:"📘"}),h.instagramUrl&&n.jsx("a",{href:h.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"Instagram",children:"📸"}),h.twitterUrl&&n.jsx("a",{href:h.twitterUrl,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"Twitter",children:"🐦"}),h.whatsappNum&&n.jsx("a",{href:`https://wa.me/${h.whatsappNum}`,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"WhatsApp",children:"💬"}),!h.facebookUrl&&!h.instagramUrl&&!h.twitterUrl&&!h.whatsappNum&&n.jsxs(n.Fragment,{children:[n.jsx("a",{href:"#",className:"social-btn",title:"Facebook",children:"📘"}),n.jsx("a",{href:"#",className:"social-btn",title:"Instagram",children:"📸"}),n.jsx("a",{href:"#",className:"social-btn",title:"WhatsApp",children:"💬"})]})]}),n.jsx("div",{style:{marginTop:"24px"},children:n.jsx(re,{to:"/contact",children:n.jsx("button",{className:"btn-primary",children:"Contact Us →"})})})]})]})]}),n.jsxs("div",{className:"cta-banner",children:[n.jsx("div",{className:"cta-title",children:"Admissions Open for Session 2026–27"}),n.jsx("div",{className:"cta-desc",children:"Secure your child's future at Sarvodaya Vidyalaya. Limited seats available for Science and Commerce streams. Apply today before the deadline!"}),n.jsxs("div",{className:"cta-actions",children:[n.jsx(re,{to:"/contact#admission",children:n.jsx("button",{className:"btn-white",children:"Apply for Admission"})}),n.jsx(re,{to:"/contact",children:n.jsx("button",{className:"btn-white-outline",children:"Contact Admissions"})})]})]})]})}function nv(){const c=[{title:"Discipline",desc:"We believe discipline builds character and improves learning habits.",icon:"✅"},{title:"Excellence",desc:"We encourage students to aim high and achieve their best performance.",icon:"🏆"},{title:"Innovation",desc:"We promote smart learning, technology and creative thinking.",icon:"💡"},{title:"Respect",desc:"We teach students to respect teachers, parents and society.",icon:"🤝"}],f=[{name:"Smart Classrooms",icon:"🖥️"},{name:"Science Laboratory",icon:"🔬"},{name:"Computer Lab",icon:"💻"},{name:"Library",icon:"📚"},{name:"Sports Ground",icon:"⚽"},{name:"CCTV Security",icon:"📷"},{name:"Transportation",icon:"🚌"},{name:"Activity Rooms",icon:"🎭"}],d=[{year:"2000",text:"School foundation laid with quality education vision."},{year:"2010",text:"New campus expansion and modern learning facilities."},{year:"2018",text:"Smart classrooms and digital learning introduced."},{year:"2024",text:"Improved sports infrastructure and co-curricular programs."}];return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"page-hero",children:n.jsxs("div",{className:"page-hero-content",children:[n.jsx("h1",{children:"About Sarvodaya Vidyalaya Junior Science College Hingna"}),n.jsx("p",{children:"Sarvodaya Vidyalaya Junior Science College is committed to delivering quality education, skill development and overall growth for every student."})]})}),n.jsxs("section",{children:[n.jsxs("div",{className:"title",children:[n.jsx("h2",{children:"Who We Are"}),n.jsx("p",{children:"Building bright futures with knowledge and values"})]}),n.jsxs("div",{className:"card-container",children:[n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Our Mission"}),n.jsx("p",{children:"To provide quality education and develop confident, disciplined and responsible students with strong moral values."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Our Vision"}),n.jsx("p",{children:"To be a leading educational institution recognized for excellence in academics, discipline, sports and creativity."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Our Objective"}),n.jsx("p",{children:"To focus on academics along with personality development through events, competitions, and activities."})]})]})]}),n.jsxs("section",{children:[n.jsxs("div",{className:"title",children:[n.jsx("h2",{children:"Principal’s Message"}),n.jsx("p",{children:"Guidance, Discipline and Growth"})]}),n.jsxs("div",{className:"principal-box",children:[n.jsxs("div",{className:"principal-left",children:[n.jsx("div",{className:"principal-photo",children:"👩‍🏫"}),n.jsx("h3",{children:"Principal"}),n.jsx("p",{className:"principal-name",children:"Mrs. A. Sharma"})]}),n.jsxs("div",{className:"principal-right",children:[n.jsx("p",{children:"“Our goal is to provide the best learning environment where each student can explore their strengths. We focus on academic excellence, strong discipline and co-curricular development. Together, we shape responsible citizens for tomorrow.”"}),n.jsx("p",{className:"principal-sign",children:"— Principal"})]})]})]}),n.jsxs("section",{children:[n.jsxs("div",{className:"title",children:[n.jsx("h2",{children:"Our Core Values"}),n.jsx("p",{children:"Values that shape every student’s journey"})]}),n.jsx("div",{className:"values-grid",children:c.map((o,m)=>n.jsxs("div",{className:"value-card",children:[n.jsx("div",{className:"value-icon",children:o.icon}),n.jsx("h3",{children:o.title}),n.jsx("p",{children:o.desc})]},m))})]}),n.jsxs("section",{children:[n.jsxs("div",{className:"title",children:[n.jsx("h2",{children:"Facilities"}),n.jsx("p",{children:"Modern infrastructure for better learning"})]}),n.jsx("div",{className:"facility-grid",children:f.map((o,m)=>n.jsxs("div",{className:"facility-card",children:[n.jsx("span",{className:"facility-icon",children:o.icon}),n.jsx("p",{children:o.name})]},m))})]}),n.jsxs("section",{children:[n.jsxs("div",{className:"title",children:[n.jsx("h2",{children:"Our Journey"}),n.jsx("p",{children:"Milestones in our growth"})]}),n.jsx("div",{className:"timeline",children:d.map((o,m)=>n.jsxs("div",{className:"timeline-item",children:[n.jsx("div",{className:"timeline-year",children:o.year}),n.jsx("div",{className:"timeline-text",children:o.text})]},m))})]}),n.jsx("section",{children:n.jsxs("div",{className:"cta-box",children:[n.jsx("h2",{children:"Ready to JoinSarvodaya Vidyalaya Junior Science College Hingna"}),n.jsx("p",{children:"Apply today and start your bright future with us."}),n.jsx(re,{to:"/contact#admission",children:n.jsx("button",{className:"cta-btn",children:"Apply for Admission"})})]})})]})}function iv(){const[c,f]=S.useState([]);return S.useEffect(()=>{f(JSON.parse(localStorage.getItem("academics"))||[])},[]),n.jsxs("section",{children:[n.jsxs("div",{className:"title",children:[n.jsx("h2",{children:"Academics"}),n.jsx("p",{children:"Quality education from primary to higher secondary"})]}),n.jsxs("div",{className:"card-container",children:[n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Primary Section (1st - 5th)"}),n.jsx("p",{children:"Focus on building strong basics in reading, writing, and mathematics through interactive learning, storytelling, and fun activities."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Middle School (6th - 8th)"}),n.jsx("p",{children:"Concept-based learning with emphasis on science, mathematics, languages, and social studies along with regular tests and projects."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Secondary School (9th - 10th)"}),n.jsx("p",{children:"Intensive preparation for board examinations with experienced teachers, doubt-solving sessions, and revision classes."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Higher Secondary (11th - 12th)"}),n.jsx("p",{children:"Science and Commerce streams with career guidance, practical learning, and mentorship programs."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Subjects Offered"}),n.jsx("p",{children:"English, Mathematics, Science, Social Studies, Computer Science, Hindi, Physical Education, and Environmental Studies."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Teaching Methodology"}),n.jsx("p",{children:"Smart classrooms, project-based learning, group discussions, digital presentations, and practical demonstrations."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Examination System"}),n.jsx("p",{children:"Regular class tests, unit tests, mid-term examinations, and annual examinations to monitor student progress."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Academic Support"}),n.jsx("p",{children:"Extra doubt-solving classes, remedial sessions, and personalized mentoring for students needing additional guidance."})]})]}),n.jsxs("div",{className:"title",children:[n.jsx("h2",{children:"Academics"}),n.jsx("p",{children:"Our courses and curriculum"})]}),n.jsx("div",{className:"card-container",children:c.length===0?n.jsx("p",{children:"No academic information added yet."}):c.map((d,o)=>n.jsx("div",{className:"card",children:n.jsx("p",{children:d})},o))})]})}function sv(){const[c,f]=S.useState([]),[d,o]=S.useState({open:!1,src:""});S.useEffect(()=>{f(JSON.parse(localStorage.getItem("gallery"))||[])},[]);function m(v){o({open:!0,src:v})}function h(){o({open:!1,src:""})}return n.jsxs("section",{children:[n.jsxs("div",{className:"title",children:[n.jsx("h2",{children:"School Gallery"}),n.jsx("p",{children:"Campus, classrooms & student activities"})]}),n.jsx("div",{className:"gallery",children:c.map((v,T)=>n.jsx("img",{src:v,alt:"gallery-"+T,onClick:()=>m(v)},T))}),d.open&&n.jsxs("div",{className:"lightbox",onClick:h,children:[n.jsx("span",{className:"close-lightbox",onClick:h,children:"×"}),n.jsx("img",{src:d.src,alt:"Full View",onClick:v=>v.stopPropagation()})]})]})}const rv=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy:       #0a1628;
    --navy-mid:   #142240;
    --navy-light: #1e3060;
    --gold:       #c9922a;
    --gold-light: #e8b84b;
    --gold-dim:   rgba(201,146,42,0.12);
    --cream:      #faf7f2;
    --white:      #ffffff;
    --muted:      #6b7a99;
    --border:     rgba(0,0,0,0.07);
  }

  .contact-page { font-family: 'DM Sans', sans-serif; background: var(--cream); min-height: 100vh; }

  .contact-hero { background: var(--navy); padding: 64px 6vw 56px; position: relative; overflow: hidden; }
  .contact-hero::before { content: ''; position: absolute; top: -80px; right: -80px; width: 320px; height: 320px; border-radius: 50%; background: radial-gradient(circle, rgba(201,146,42,0.14) 0%, transparent 70%); pointer-events: none; }
  .contact-hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--gold), transparent); opacity: 0.4; }
  .hero-label { font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 10px; }
  .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; color: var(--white); line-height: 1.15; margin-bottom: 14px; }
  .hero-title span { color: var(--gold-light); }
  .hero-sub { font-size: 1rem; color: rgba(255,255,255,0.55); font-weight: 300; max-width: 480px; line-height: 1.7; }

  .contact-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 32px; padding: 52px 6vw; max-width: 1200px; margin: 0 auto; }

  .left-col { display: flex; flex-direction: column; gap: 24px; }

  .info-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 24px 26px; box-shadow: 0 2px 16px rgba(0,0,0,0.04); transition: box-shadow 0.25s, transform 0.25s; }
  .info-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.09); transform: translateY(-3px); }
  .info-card-head { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
  .info-icon { width: 44px; height: 44px; border-radius: 12px; background: var(--gold-dim); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
  .info-card-title { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: var(--navy); }
  .info-card-body { font-size: 0.875rem; color: var(--muted); line-height: 1.7; }
  .info-card-body strong { color: var(--navy); font-weight: 500; }

  .social-card { background: var(--navy); border-radius: 16px; padding: 26px; box-shadow: 0 4px 24px rgba(10,22,40,0.18); }
  .social-card-title { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: 16px; }
  .social-buttons { display: flex; flex-direction: column; gap: 10px; }
  .social-btn { display: flex; align-items: center; gap: 12px; padding: 11px 16px; border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 500; text-decoration: none; transition: all 0.22s; border: 1px solid transparent; }
  .social-btn .s-icon { width: 28px; height: 28px; border-radius: 7px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; flex-shrink: 0; }
  .social-btn.facebook { background: rgba(24,119,242,0.12); color: #4a9ff5; border-color: rgba(24,119,242,0.2); }
  .social-btn.facebook .s-icon { background: rgba(24,119,242,0.18); }
  .social-btn.facebook:hover { background: rgba(24,119,242,0.22); }
  .social-btn.twitter { background: rgba(29,161,242,0.1); color: #5bb8f5; border-color: rgba(29,161,242,0.2); }
  .social-btn.twitter .s-icon { background: rgba(29,161,242,0.15); }
  .social-btn.twitter:hover { background: rgba(29,161,242,0.2); }
  .social-btn.instagram { background: rgba(225,48,108,0.1); color: #f06292; border-color: rgba(225,48,108,0.2); }
  .social-btn.instagram .s-icon { background: rgba(225,48,108,0.15); }
  .social-btn.instagram:hover { background: rgba(225,48,108,0.2); }
  .whatsapp-btn { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 12px; border-radius: 10px; background: rgba(37,211,102,0.12); border: 1px solid rgba(37,211,102,0.25); color: #4ddb7c; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600; text-decoration: none; margin-top: 12px; transition: all 0.22s; }
  .whatsapp-btn:hover { background: rgba(37,211,102,0.2); }

  .map-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.04); }
  .map-header { padding: 16px 20px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 10px; }
  .map-header h3 { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 700; color: var(--navy); }
  .map-card iframe { display: block; width: 100%; height: 200px; border: none; }

  .form-card { background: var(--white); border: 1px solid var(--border); border-radius: 20px; padding: 40px 38px; box-shadow: 0 4px 32px rgba(0,0,0,0.06); height: fit-content; }
  .form-header { margin-bottom: 32px; }
  .form-label-tag { font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 8px; }
  .form-title { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700; color: var(--navy); line-height: 1.25; margin-bottom: 8px; }
  .form-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }

  .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
  .field-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
  .field-group label { font-size: 0.78rem; font-weight: 600; color: var(--navy); letter-spacing: 0.03em; text-transform: uppercase; }
  .field-input { width: 100%; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 0.88rem; color: var(--navy); background: #fafbfc; outline: none; transition: border-color 0.2s, box-shadow 0.2s, background 0.2s; }
  .field-input::placeholder { color: #b0bac8; }
  .field-input:focus { border-color: var(--gold); background: var(--white); box-shadow: 0 0 0 3px rgba(201,146,42,0.1); }
  textarea.field-input { resize: vertical; min-height: 110px; line-height: 1.6; }

  .stream-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px; }
  .stream-option { position: relative; }
  .stream-option input[type="radio"] { position: absolute; opacity: 0; width: 0; height: 0; }
  .stream-label { display: flex; align-items: center; gap: 10px; padding: 11px 14px; border: 1.5px solid #e2e8f0; border-radius: 10px; cursor: pointer; font-size: 0.85rem; font-weight: 500; color: var(--muted); background: #fafbfc; transition: all 0.2s; }
  .stream-label .stream-dot { width: 14px; height: 14px; border-radius: 50%; border: 2px solid #cbd5e0; flex-shrink: 0; transition: all 0.2s; }
  .stream-option input:checked + .stream-label { border-color: var(--gold); background: var(--gold-dim); color: var(--navy); }
  .stream-option input:checked + .stream-label .stream-dot { background: var(--gold); border-color: var(--gold); }

  .submit-btn { width: 100%; padding: 15px; border: none; border-radius: 10px; background: var(--navy); color: var(--white); font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 600; cursor: pointer; margin-top: 8px; position: relative; overflow: hidden; transition: background 0.25s, transform 0.2s, box-shadow 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; }
  .submit-btn:hover { background: var(--navy-mid); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(10,22,40,0.25); }
  .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  .form-msg { padding: 12px 16px; border-radius: 10px; font-size: 0.875rem; font-weight: 500; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
  .form-msg.success { background: #edf7ee; color: #2e7d32; border: 1px solid #c8e6c9; }
  .form-msg.error   { background: #fdecea; color: #c62828; border: 1px solid #ffcdd2; }

  @media (max-width: 900px) {
    .contact-grid { grid-template-columns: 1fr; padding: 36px 5vw; }
    .field-row { grid-template-columns: 1fr; }
    .form-card { padding: 28px 22px; }
  }
  @media (max-width: 500px) {
    .stream-row { grid-template-columns: 1fr; }
    .contact-hero { padding: 44px 5vw 40px; }
  }
`,Em={phone:"+91 98765 43210",email:"info@sarvodayavk.edu.in",address:"Near Main Bus Stop, Hingna Road",city:"Hingna, Nagpur, Maharashtra – 441110",officeHours:"Mon – Sat, 8:00 AM – 2:30 PM",facebookUrl:"https://www.facebook.com/YOUR_ID",twitterUrl:"https://twitter.com/YOUR_ID",instagramUrl:"https://www.instagram.com/YOUR_ID",whatsappNum:"91XXXXXXXXXX",mapSrc:"https://www.google.com/maps?q=Hingna,Nagpur,Maharashtra&output=embed"};function cv(){const[c,f]=S.useState({name:"",email:"",phone:"",stream:"",message:""}),[d,o]=S.useState(null),[m,h]=S.useState(Em);S.useEffect(()=>{const j=JSON.parse(localStorage.getItem("contactInfo")||"{}");Object.keys(j).length>0&&h({...Em,...j})},[]);const v=j=>f({...c,[j.target.name]:j.target.value}),T=async j=>{j.preventDefault(),o("loading");try{(await fetch("https://svv-school-backend.onrender.com/api/admission",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).ok?(o("success"),f({name:"",email:"",phone:"",stream:"",message:""})):o("error")}catch(g){console.error(g),o("error")}};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:rv}),n.jsxs("div",{className:"contact-page",children:[n.jsxs("div",{className:"contact-hero",children:[n.jsx("div",{className:"hero-label",children:"Get in Touch"}),n.jsxs("h1",{className:"hero-title",children:["Contact & ",n.jsx("span",{children:"Admissions"})]}),n.jsx("p",{className:"hero-sub",children:"Reach out to us for admissions, queries, or general information. We're happy to help."})]}),n.jsxs("div",{className:"contact-grid",children:[n.jsxs("div",{className:"left-col",children:[n.jsxs("div",{className:"info-card",children:[n.jsxs("div",{className:"info-card-head",children:[n.jsx("div",{className:"info-icon",children:"📞"}),n.jsx("div",{className:"info-card-title",children:"Phone & Email"})]}),n.jsxs("div",{className:"info-card-body",children:[n.jsx("strong",{children:m.phone}),n.jsx("br",{}),m.email,n.jsx("br",{}),n.jsx("br",{}),n.jsx("strong",{children:"Office Hours:"})," ",m.officeHours]})]}),n.jsxs("div",{className:"info-card",children:[n.jsxs("div",{className:"info-card-head",children:[n.jsx("div",{className:"info-icon",children:"📍"}),n.jsx("div",{className:"info-card-title",children:"Our Address"})]}),n.jsxs("div",{className:"info-card-body",children:["Sarvodaya Vidyalaya Junior Science College",n.jsx("br",{}),n.jsx("strong",{children:m.city}),n.jsx("br",{}),m.address]})]}),n.jsxs("div",{className:"social-card",children:[n.jsx("div",{className:"social-card-title",children:"🌐 Connect With Us"}),n.jsxs("div",{className:"social-buttons",children:[n.jsxs("a",{href:m.facebookUrl,target:"_blank",rel:"noopener noreferrer",className:"social-btn facebook",children:[n.jsx("span",{className:"s-icon",children:"f"})," Facebook"]}),n.jsxs("a",{href:m.twitterUrl,target:"_blank",rel:"noopener noreferrer",className:"social-btn twitter",children:[n.jsx("span",{className:"s-icon",children:"𝕏"})," Twitter / X"]}),n.jsxs("a",{href:m.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"social-btn instagram",children:[n.jsx("span",{className:"s-icon",children:"◎"})," Instagram"]})]}),n.jsx("a",{href:`https://wa.me/${m.whatsappNum}`,target:"_blank",rel:"noopener noreferrer",className:"whatsapp-btn",children:"💬 Chat on WhatsApp"})]}),n.jsxs("div",{className:"map-card",children:[n.jsxs("div",{className:"map-header",children:[n.jsx("span",{children:"📍"}),n.jsx("h3",{children:"Our Location"})]}),n.jsx("iframe",{src:m.mapSrc,width:"100%",height:"200",style:{border:0},allowFullScreen:"",loading:"lazy",title:"School Location Map"})]})]}),n.jsxs("div",{className:"form-card",id:"admission",children:[n.jsxs("div",{className:"form-header",children:[n.jsx("div",{className:"form-label-tag",children:"Admissions 2026–27"}),n.jsx("div",{className:"form-title",children:"Apply for Admission"}),n.jsx("p",{className:"form-desc",children:"Fill in the details below and our team will get back to you within 24 hours."})]}),d==="success"&&n.jsx("div",{className:"form-msg success",children:"✅ Admission form submitted successfully! We'll contact you soon."}),d==="error"&&n.jsx("div",{className:"form-msg error",children:"❌ Something went wrong. Please try again or call us directly."}),n.jsxs("form",{onSubmit:T,children:[n.jsxs("div",{className:"field-row",children:[n.jsxs("div",{className:"field-group",style:{marginBottom:0},children:[n.jsx("label",{children:"Student Name"}),n.jsx("input",{className:"field-input",type:"text",name:"name",placeholder:"Full name",value:c.name,onChange:v,required:!0})]}),n.jsxs("div",{className:"field-group",style:{marginBottom:0},children:[n.jsx("label",{children:"Phone Number"}),n.jsx("input",{className:"field-input",type:"text",name:"phone",placeholder:"+91 XXXXX XXXXX",value:c.phone,onChange:v,required:!0})]})]}),n.jsxs("div",{className:"field-group",children:[n.jsx("label",{children:"Email Address"}),n.jsx("input",{className:"field-input",type:"email",name:"email",placeholder:"your@email.com",value:c.email,onChange:v,required:!0})]}),n.jsxs("div",{className:"field-group",children:[n.jsx("label",{children:"Select Stream"}),n.jsx("div",{className:"stream-row",children:["Science","Commerce","Arts","Not decided"].map(j=>n.jsxs("div",{className:"stream-option",children:[n.jsx("input",{type:"radio",id:`stream-${j}`,name:"stream",value:j,checked:c.stream===j,onChange:v}),n.jsxs("label",{className:"stream-label",htmlFor:`stream-${j}`,children:[n.jsx("span",{className:"stream-dot"}),j]})]},j))})]}),n.jsxs("div",{className:"field-group",children:[n.jsx("label",{children:"Message / Query"}),n.jsx("textarea",{className:"field-input",name:"message",placeholder:"Any questions or additional information...",value:c.message,onChange:v})]}),n.jsx("button",{type:"submit",className:"submit-btn",disabled:d==="loading",children:d==="loading"?n.jsx(n.Fragment,{children:"⏳ Submitting..."}):n.jsx(n.Fragment,{children:"📋 Submit Admission Form"})})]})]})]})]})]})}const ov=[{name:"Mr. Rajesh Sharma",subject:"Mathematics",experience:"10+ Years",img:"https://randomuser.me/api/portraits/men/32.jpg"},{name:"Ms. Sneha Patil",subject:"Physics",experience:"8 Years",img:"https://randomuser.me/api/portraits/women/44.jpg"},{name:"Mr. Imran Khan",subject:"Chemistry",experience:"12 Years",img:"https://randomuser.me/api/portraits/men/55.jpg"},{name:"Mrs. Anjali Deshmukh",subject:"Biology",experience:"9 Years",img:"https://randomuser.me/api/portraits/women/68.jpg"}];function uv(){return n.jsx("div",{className:"page",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"page-title",children:"Our Teachers"}),n.jsx("div",{className:"card-container",children:ov.map((c,f)=>n.jsxs("div",{className:"card teacher-card",children:[n.jsx("img",{src:c.img,alt:c.name}),n.jsx("h3",{children:c.name}),n.jsx("p",{children:n.jsx("strong",{children:c.subject})}),n.jsxs("p",{children:[c.experience," Experience"]})]},f))})]})})}const dv=[{name:"Dr. A. Deshmukh",role:"Principal",message:"Our vision is to provide quality education that nurtures creativity, discipline, and leadership among students.",img:"https://randomuser.me/api/portraits/men/11.jpg"},{name:"Mrs. S. Kulkarni",role:"Vice Principal",message:"We focus on academic excellence along with co-curricular activities for holistic development.",img:"https://randomuser.me/api/portraits/women/21.jpg"},{name:"Mr. R. Patil",role:"Director",message:"Our institution aims to build future-ready students with strong values and modern skills.",img:"https://randomuser.me/api/portraits/men/31.jpg"}];function fv(){return n.jsx("div",{className:"page",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"page-title",children:"Management Team"}),n.jsx("p",{className:"page-subtitle",children:"Meet the leaders guiding our institution towards excellence."}),n.jsx("div",{className:"card-container",children:dv.map((c,f)=>n.jsxs("div",{className:"card management-card",children:[n.jsx("img",{src:c.img,alt:c.name}),n.jsx("h3",{children:c.name}),n.jsx("p",{className:"role",children:c.role}),n.jsxs("p",{className:"message",children:["“",c.message,"”"]})]},f))})]})})}const mv=[{name:"Rahul Verma",achievement:"Selected in IIT Bombay",year:"2025",img:"https://randomuser.me/api/portraits/men/12.jpg"},{name:"Sneha Kulkarni",achievement:"MHT-CET Topper (99%)",year:"2024",img:"https://randomuser.me/api/portraits/women/22.jpg"},{name:"Amit Patil",achievement:"Placed at Google",year:"2023",img:"https://randomuser.me/api/portraits/men/45.jpg"},{name:"Priya Sharma",achievement:"NEET Rank under 500",year:"2025",img:"https://randomuser.me/api/portraits/women/30.jpg"}];function hv(){return n.jsx("div",{className:"page",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"page-title",children:"Success Stories"}),n.jsx("div",{className:"card-container",children:mv.map((c,f)=>n.jsxs("div",{className:"card success-card",children:[n.jsx("img",{src:c.img,alt:c.name}),n.jsx("h3",{children:c.name}),n.jsx("p",{children:c.achievement}),n.jsx("span",{className:"year",children:c.year})]},f))})]})})}const zm={name:"Dr. Sunita Sharma",role:"Principal",photo:"/principal.jpg",qualification:"M.Sc., B.Ed., Ph.D.",experience:"25+ Years",joined:"Since 2010",school:"Sarvodaya Vidyalaya",message:`Welcome to Sarvodaya Vidyalaya Junior Science College, Hingna — a place where knowledge meets character, and education goes beyond textbooks. It gives me immense pride and joy to address you as the Principal of this esteemed institution.

Our school has been a beacon of learning for over two decades, nurturing thousands of students who have gone on to make their mark in every field — from science and medicine to arts and administration. We believe that every child is unique and carries within them an extraordinary potential waiting to be discovered.

At Sarvodaya Vidyalaya, we do not just teach subjects — we build values. Our dedicated faculty works tirelessly to create an environment where curiosity is encouraged, discipline is practiced, and creativity is celebrated. We combine modern teaching methods with time-tested values to prepare students not just for examinations, but for life.

To our students: Dream big, work hard, and never stop learning. Your success is our mission and your character is our pride. To our parents: Thank you for entrusting us with your most precious responsibility. Together, we will ensure your child blossoms into a confident and compassionate individual.`,quote:"Education is not the filling of a pail, but the lighting of a fire. Our goal is to ignite that fire in every student.",stat1num:"25+",stat1label:"Years Experience",stat2num:"5000+",stat2label:"Students Guided",stat3num:"100%",stat3label:"Board Results",stat4num:"30+",stat4label:"Awards Won"};function pv(){const[c,f]=S.useState(!1),[d,o]=S.useState(zm);S.useEffect(()=>{const v=JSON.parse(localStorage.getItem("principalInfo")||"{}");Object.keys(v).length>0&&o({...zm,...v})},[]);const m=(d.message||"").split(`
`).filter(v=>v.trim()!==""),h=[{num:d.stat1num,label:d.stat1label},{num:d.stat2num,label:d.stat2label},{num:d.stat3num,label:d.stat3label},{num:d.stat4num,label:d.stat4label}];return n.jsxs("div",{className:"principal-page",children:[n.jsxs("div",{className:"principal-hero",children:[n.jsx("div",{className:"hero-label",children:"Leadership"}),n.jsxs("h1",{className:"hero-title",children:["Principal's ",n.jsx("span",{children:"Message"})]}),n.jsx("p",{className:"hero-sub",children:"A word from the heart of our institution"})]}),n.jsxs("div",{className:"principal-main",children:[n.jsxs("div",{className:"principal-grid",children:[n.jsxs("div",{className:"principal-photo-card",children:[n.jsx("div",{className:"photo-frame",children:c?n.jsxs("div",{className:"photo-placeholder",children:[n.jsx("div",{className:"photo-avatar",children:"👩‍💼"}),n.jsx("div",{className:"photo-avatar-text",children:"Photo Coming Soon"})]}):n.jsx("img",{src:d.photo||"/principal.jpg",alt:d.name,onError:()=>f(!0)})}),n.jsx("div",{className:"photo-bar"}),n.jsxs("div",{className:"principal-info",children:[n.jsx("div",{className:"principal-name",children:d.name}),n.jsx("div",{className:"principal-role",children:d.role}),n.jsx("div",{className:"principal-divider"}),n.jsxs("div",{className:"principal-meta",children:[n.jsxs("div",{className:"meta-item",children:[n.jsx("div",{className:"meta-icon",children:"🎓"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Qualification"}),d.qualification]})]}),n.jsxs("div",{className:"meta-item",children:[n.jsx("div",{className:"meta-icon",children:"📅"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Experience"}),d.experience]})]}),n.jsxs("div",{className:"meta-item",children:[n.jsx("div",{className:"meta-icon",children:"🏫"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Joined"}),d.joined]})]})]})]})]}),n.jsxs("div",{className:"principal-message-card",children:[n.jsx("div",{className:"msg-label",children:"From the Desk of the Principal"}),n.jsx("div",{className:"msg-title",children:"Dear Students, Parents & Well-wishers,"}),n.jsx("span",{className:"msg-quote-mark",children:'"'}),n.jsxs("div",{className:"msg-body",children:[m.map((v,T)=>n.jsx("p",{children:v},T)),d.quote&&n.jsx("div",{className:"msg-highlight",children:d.quote}),n.jsxs("p",{children:["I invite you to walk through our corridors of learning with pride, purpose, and passion. Together, let us make ",d.school," a center of excellence that the entire community can be proud of."]})]}),n.jsxs("div",{className:"msg-signature",children:[n.jsx("div",{className:"sig-avatar",children:(d.name||"P").charAt(0)}),n.jsxs("div",{className:"sig-text",children:[n.jsx("div",{className:"sig-name",children:d.name}),n.jsxs("div",{className:"sig-role",children:[d.role," — ",d.school]})]})]})]})]}),n.jsx("div",{className:"principal-stats",children:h.map((v,T)=>n.jsxs("div",{className:"p-stat",children:[n.jsx("div",{className:"p-stat-num",children:v.num}),n.jsx("div",{className:"p-stat-label",children:v.label})]},T))})]})]})}const gv=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy:       #0a1628;
    --navy-mid:   #142240;
    --navy-deep:  #060e1a;
    --gold:       #c9922a;
    --gold-light: #e8b84b;
    --gold-dim:   rgba(201,146,42,0.15);
    --white:      #ffffff;
    --muted:      rgba(255,255,255,0.45);
    --danger:     #fc8181;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .al-root {
    min-height: 100vh;
    display: flex;
    font-family: 'DM Sans', sans-serif;
    background: var(--navy-deep);
    overflow: hidden;
    position: relative;
  }

  /* ── Animated background ── */
  .al-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }
  .al-bg-grad {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 20% 50%, rgba(201,146,42,0.08) 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 80% 20%, rgba(20,34,64,0.9) 0%, transparent 70%),
      linear-gradient(135deg, #060e1a 0%, #0a1628 50%, #0d1e38 100%);
  }
  .al-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(201,146,42,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,146,42,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  }
  .al-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    animation: orbFloat 8s ease-in-out infinite;
  }
  .al-orb-1 {
    width: 500px; height: 500px;
    top: -150px; left: -100px;
    background: radial-gradient(circle, rgba(201,146,42,0.12) 0%, transparent 70%);
    animation-delay: 0s;
  }
  .al-orb-2 {
    width: 400px; height: 400px;
    bottom: -100px; right: -80px;
    background: radial-gradient(circle, rgba(20,34,64,0.6) 0%, transparent 70%);
    animation-delay: -4s;
  }
  @keyframes orbFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33%       { transform: translate(30px, -20px) scale(1.05); }
    66%       { transform: translate(-20px, 15px) scale(0.97); }
  }

  /* ── Split layout ── */
  .al-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 60px 6vw;
    position: relative;
    z-index: 1;
  }
  .al-right {
    width: 480px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    position: relative;
    z-index: 1;
  }
  .al-right::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.025);
    border-left: 1px solid rgba(201,146,42,0.12);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  /* ── Left branding ── */
  .al-brand {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 64px;
    animation: fadeUp 0.6s ease both;
  }
  .al-brand-logo {
    width: 52px; height: 52px;
    border-radius: 13px;
    background: linear-gradient(135deg, var(--gold), #7a4e10);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem; font-weight: 900;
    color: var(--white);
    box-shadow: 0 4px 20px rgba(201,146,42,0.35), 0 0 0 1px rgba(201,146,42,0.2);
  }
  .al-brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem; font-weight: 700;
    color: var(--white);
    line-height: 1.25;
  }
  .al-brand-sub {
    font-size: 0.68rem;
    color: var(--muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 2px;
  }

  .al-hero-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 16px;
    display: flex; align-items: center; gap: 10px;
    animation: fadeUp 0.6s ease 0.1s both;
  }
  .al-hero-label::before {
    content: '';
    display: block;
    width: 28px; height: 1.5px;
    background: var(--gold);
    border-radius: 2px;
  }

  .al-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 4vw, 3.4rem);
    font-weight: 900;
    color: var(--white);
    line-height: 1.1;
    margin-bottom: 20px;
    animation: fadeUp 0.6s ease 0.2s both;
  }
  .al-hero-title em {
    font-style: italic;
    color: var(--gold-light);
  }

  .al-hero-desc {
    font-size: 0.92rem;
    color: var(--muted);
    line-height: 1.7;
    max-width: 400px;
    margin-bottom: 52px;
    animation: fadeUp 0.6s ease 0.3s both;
  }

  .al-stats {
    display: flex;
    gap: 36px;
    animation: fadeUp 0.6s ease 0.4s both;
  }
  .al-stat-item { }
  .al-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.7rem; font-weight: 900;
    color: var(--white); line-height: 1;
  }
  .al-stat-label {
    font-size: 0.7rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 4px;
  }
  .al-stat-divider {
    width: 1px;
    background: rgba(255,255,255,0.08);
    align-self: stretch;
  }

  /* ── Login card ── */
  .al-card {
    width: 100%;
    max-width: 390px;
    position: relative;
    z-index: 1;
    animation: fadeUp 0.7s ease 0.15s both;
  }

  .al-card-header {
    margin-bottom: 32px;
  }
  .al-card-eyebrow {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 10px;
    display: flex; align-items: center; gap: 8px;
  }
  .al-card-eyebrow-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--gold);
    animation: blink 2s ease-in-out infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }
  .al-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem; font-weight: 900;
    color: var(--white); line-height: 1.2;
    margin-bottom: 6px;
  }
  .al-card-sub {
    font-size: 0.82rem;
    color: var(--muted);
  }

  /* ── Fields ── */
  .al-fields { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }

  .al-field {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .al-field-label {
    font-size: 0.72rem;
    font-weight: 600;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }
  .al-field-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  .al-field-icon {
    position: absolute;
    left: 14px;
    font-size: 0.95rem;
    opacity: 0.45;
    pointer-events: none;
    transition: opacity 0.2s;
  }
  .al-field-wrap:focus-within .al-field-icon { opacity: 0.9; }
  .al-input {
    width: 100%;
    padding: 13px 14px 13px 42px;
    background: rgba(255,255,255,0.05);
    border: 1.5px solid rgba(255,255,255,0.1);
    border-radius: 11px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    color: var(--white);
    outline: none;
    transition: border-color 0.22s, background 0.22s, box-shadow 0.22s;
  }
  .al-input::placeholder { color: rgba(255,255,255,0.22); }
  .al-input:focus {
    border-color: var(--gold);
    background: rgba(201,146,42,0.06);
    box-shadow: 0 0 0 3px rgba(201,146,42,0.12);
  }
  .al-input.error {
    border-color: var(--danger);
    background: rgba(229,62,62,0.06);
    box-shadow: 0 0 0 3px rgba(229,62,62,0.1);
  }

  .al-toggle-pw {
    position: absolute;
    right: 13px;
    background: none;
    border: none;
    color: rgba(255,255,255,0.3);
    cursor: pointer;
    font-size: 0.9rem;
    padding: 4px;
    transition: color 0.2s;
    line-height: 1;
  }
  .al-toggle-pw:hover { color: rgba(255,255,255,0.7); }

  /* ── Error message ── */
  .al-error {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px 14px;
    background: rgba(229,62,62,0.1);
    border: 1px solid rgba(229,62,62,0.25);
    border-radius: 9px;
    color: var(--danger);
    font-size: 0.82rem;
    font-weight: 500;
    margin-bottom: 20px;
    animation: shake 0.4s ease;
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-6px); }
    40%       { transform: translateX(6px); }
    60%       { transform: translateX(-4px); }
    80%       { transform: translateX(4px); }
  }

  /* ── Submit button ── */
  .al-submit {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, var(--gold) 0%, #a87020 100%);
    border: none;
    border-radius: 11px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--white);
    cursor: pointer;
    letter-spacing: 0.03em;
    position: relative;
    overflow: hidden;
    transition: transform 0.18s, box-shadow 0.18s, opacity 0.18s;
    box-shadow: 0 4px 20px rgba(201,146,42,0.35);
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .al-submit::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .al-submit:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(201,146,42,0.45);
  }
  .al-submit:hover::before { opacity: 1; }
  .al-submit:active:not(:disabled) { transform: translateY(0); }
  .al-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

  .al-spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── Divider & footer ── */
  .al-divider {
    display: flex; align-items: center; gap: 12px;
    margin: 22px 0 18px;
  }
  .al-divider-line {
    flex: 1; height: 1px;
    background: rgba(255,255,255,0.07);
  }
  .al-divider-text {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.06em;
    white-space: nowrap;
  }

  .al-footer-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-size: 0.74rem;
    color: rgba(255,255,255,0.22);
    text-align: center;
    line-height: 1.5;
  }
  .al-footer-note span { color: rgba(255,255,255,0.14); font-size: 0.8rem; }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .al-left { display: none; }
    .al-right {
      width: 100%;
      border-left: none;
      padding: 32px 24px;
    }
    .al-right::before { border-left: none; }
  }
  @media (max-width: 480px) {
    .al-right { padding: 24px 18px; }
    .al-card-title { font-size: 1.5rem; }
  }
`;function vv(){const[c,f]=S.useState(""),[d,o]=S.useState(""),[m,h]=S.useState(!1),[v,T]=S.useState(""),[j,g]=S.useState(!1),M=oo(),A=B=>{B.preventDefault(),T(""),g(!0),setTimeout(()=>{c==="admin@dps.com"&&d==="admin123"?(localStorage.setItem("adminAuth","true"),M("/admin-dashboard")):(T("Invalid email or password. Please try again."),g(!1))},800)};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:gv}),n.jsxs("div",{className:"al-root",children:[n.jsxs("div",{className:"al-bg",children:[n.jsx("div",{className:"al-bg-grad"}),n.jsx("div",{className:"al-grid"}),n.jsx("div",{className:"al-orb al-orb-1"}),n.jsx("div",{className:"al-orb al-orb-2"})]}),n.jsxs("div",{className:"al-left",children:[n.jsxs("div",{className:"al-brand",children:[n.jsx("div",{className:"al-brand-logo",children:"SVK"}),n.jsxs("div",{children:[n.jsx("div",{className:"al-brand-name",children:"SVV School"}),n.jsx("div",{className:"al-brand-sub",children:"Nagpur, Maharashtra"})]})]}),n.jsx("div",{className:"al-hero-label",children:"Administration Portal"}),n.jsxs("h1",{className:"al-hero-title",children:["Manage Your",n.jsx("br",{}),n.jsx("em",{children:"School Content"}),n.jsx("br",{}),"With Ease"]}),n.jsx("p",{className:"al-hero-desc",children:"Securely update notices, gallery, admissions, staff profiles, and more — all from one unified dashboard built for school administrators."}),n.jsxs("div",{className:"al-stats",children:[n.jsxs("div",{className:"al-stat-item",children:[n.jsx("div",{className:"al-stat-num",children:"8+"}),n.jsx("div",{className:"al-stat-label",children:"Sections"})]}),n.jsx("div",{className:"al-stat-divider"}),n.jsxs("div",{className:"al-stat-item",children:[n.jsx("div",{className:"al-stat-num",children:"100%"}),n.jsx("div",{className:"al-stat-label",children:"Secure"})]}),n.jsx("div",{className:"al-stat-divider"}),n.jsxs("div",{className:"al-stat-item",children:[n.jsx("div",{className:"al-stat-num",children:"Live"}),n.jsx("div",{className:"al-stat-label",children:"Updates"})]})]})]}),n.jsx("div",{className:"al-right",children:n.jsxs("div",{className:"al-card",children:[n.jsxs("div",{className:"al-card-header",children:[n.jsxs("div",{className:"al-card-eyebrow",children:[n.jsx("span",{className:"al-card-eyebrow-dot"}),"Secure Access"]}),n.jsx("div",{className:"al-card-title",children:"Admin Sign In"}),n.jsx("div",{className:"al-card-sub",children:"Enter your credentials to access the dashboard"})]}),v&&n.jsxs("div",{className:"al-error",children:["⚠ ",v]}),n.jsxs("form",{onSubmit:A,children:[n.jsxs("div",{className:"al-fields",children:[n.jsxs("div",{className:"al-field",children:[n.jsx("label",{className:"al-field-label",children:"Email Address"}),n.jsxs("div",{className:"al-field-wrap",children:[n.jsx("span",{className:"al-field-icon",children:"✉"}),n.jsx("input",{className:`al-input${v?" error":""}`,type:"email",placeholder:"admin@school.edu.in",required:!0,autoComplete:"email",value:c,onChange:B=>{f(B.target.value),T("")}})]})]}),n.jsxs("div",{className:"al-field",children:[n.jsx("label",{className:"al-field-label",children:"Password"}),n.jsxs("div",{className:"al-field-wrap",children:[n.jsx("span",{className:"al-field-icon",children:"🔒"}),n.jsx("input",{className:`al-input${v?" error":""}`,type:m?"text":"password",placeholder:"Enter your password",required:!0,autoComplete:"current-password",value:d,onChange:B=>{o(B.target.value),T("")}}),n.jsx("button",{type:"button",className:"al-toggle-pw",onClick:()=>h(B=>!B),title:m?"Hide password":"Show password",children:m?"🙈":"👁"})]})]})]}),n.jsx("button",{className:"al-submit",type:"submit",disabled:j,children:j?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"al-spinner"})," Signing in…"]}):n.jsx(n.Fragment,{children:"Sign In to Dashboard →"})})]}),n.jsxs("div",{className:"al-divider",children:[n.jsx("div",{className:"al-divider-line"}),n.jsx("span",{className:"al-divider-text",children:"RESTRICTED ACCESS"}),n.jsx("div",{className:"al-divider-line"})]}),n.jsxs("div",{className:"al-footer-note",children:[n.jsx("span",{children:"🔐"}),"This portal is for authorized administrators only. Unauthorized access is strictly prohibited."]})]})})]})]})}const bv=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy:        #0a1628;
    --navy-mid:    #142240;
    --gold:        #c9922a;
    --gold-light:  #e8b84b;
    --gold-dim:    rgba(201,146,42,0.12);
    --cream:       #faf7f2;
    --white:       #ffffff;
    --muted:       #6b7a99;
    --border:      rgba(0,0,0,0.07);
    --danger:      #e53e3e;
    --danger-dim:  rgba(229,62,62,0.08);
    --success:     #38a169;
    --success-dim: rgba(56,161,105,0.1);
  }

  *, *::before, *::after { box-sizing: border-box; }

  .adm-wrap {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* ── TOP BAR ── */
  .adm-topbar {
    background: var(--navy); padding: 0 5vw; height: 64px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(90deg, transparent, var(--gold), transparent) 1;
    position: sticky; top: 0; z-index: 200;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3);
    flex-shrink: 0;
  }
  .adm-topbar-left { display: flex; align-items: center; gap: 14px; }
  .adm-logo-box {
    width: 38px; height: 38px; border-radius: 9px;
    background: linear-gradient(135deg, var(--gold), #7a4e10);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif; font-size: 0.9rem; font-weight: 900;
    color: var(--white); box-shadow: 0 2px 10px rgba(201,146,42,0.3);
    flex-shrink: 0;
  }
  .adm-topbar-title { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; color: var(--white); }
  .adm-topbar-sub { font-size: 0.7rem; color: rgba(255,255,255,0.4); letter-spacing: 0.05em; }
  .adm-topbar-right { display: flex; align-items: center; gap: 12px; }
  .adm-time { font-size: 0.75rem; color: rgba(255,255,255,0.4); }
  .adm-logout-btn {
    display: flex; align-items: center; gap: 7px;
    background: rgba(229,62,62,0.12); border: 1px solid rgba(229,62,62,0.25);
    color: #fc8181; padding: 8px 16px; border-radius: 8px;
    font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 600;
    cursor: pointer; transition: all 0.2s;
  }
  .adm-logout-btn:hover { background: rgba(229,62,62,0.22); color: #feb2b2; }

  /* ── LAYOUT: sidebar + content ── */
  .adm-layout {
    display: flex;
    flex: 1;
    overflow: hidden;
    height: calc(100vh - 64px);
  }

  /* ── SIDEBAR ── */
  .adm-sidebar {
    width: 220px;
    flex-shrink: 0;
    background: var(--navy);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    border-right: 1px solid rgba(255,255,255,0.06);
  }

  .adm-sidebar-section {
    padding: 18px 14px 6px;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
  }

  .adm-tab-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 11px 16px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.83rem;
    font-weight: 500;
    color: rgba(255,255,255,0.5);
    text-align: left;
    border-radius: 9px;
    margin: 1px 6px;
    width: calc(100% - 12px);
    transition: all 0.18s;
    position: relative;
  }
  .adm-tab-btn:hover {
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.85);
  }
  .adm-tab-btn.active {
    background: var(--gold-dim);
    color: var(--gold-light);
    font-weight: 600;
  }
  .adm-tab-btn.active::before {
    content: '';
    position: absolute;
    left: 0; top: 50%;
    transform: translateY(-50%);
    width: 3px; height: 60%;
    background: var(--gold);
    border-radius: 0 3px 3px 0;
  }
  .adm-tab-icon { font-size: 1rem; flex-shrink: 0; }
  .adm-tab-badge {
    margin-left: auto;
    background: rgba(201,146,42,0.2);
    color: var(--gold-light);
    font-size: 0.68rem;
    font-weight: 700;
    padding: 1px 7px;
    border-radius: 20px;
    flex-shrink: 0;
  }

  /* ── STATS BAR at bottom of sidebar ── */
  .adm-sidebar-stats {
    margin-top: auto;
    padding: 14px 12px;
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .adm-sidebar-stat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    color: rgba(255,255,255,0.35);
  }
  .adm-sidebar-stat strong {
    color: rgba(255,255,255,0.7);
    font-weight: 600;
  }

  /* ── MAIN CONTENT AREA ── */
  .adm-content {
    flex: 1;
    overflow-y: auto;
    padding: 28px 32px;
    background: var(--cream);
  }

  .adm-tab-header {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }
  .adm-tab-header-left {}
  .adm-tab-label {
    font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--gold); font-weight: 600; margin-bottom: 4px;
  }
  .adm-tab-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem; font-weight: 900; color: var(--navy);
  }

  /* GRIDS */
  .adm-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .adm-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

  /* PANEL */
  .adm-panel {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 18px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .adm-panel-head {
    background: var(--navy); padding: 14px 20px;
    display: flex; align-items: center; gap: 10px;
  }
  .adm-panel-head h3 {
    font-family: 'Playfair Display', serif; font-size: 0.92rem;
    font-weight: 700; color: var(--white); flex: 1;
  }
  .adm-panel-badge {
    background: var(--gold-dim); border: 1px solid rgba(201,146,42,0.3);
    color: var(--gold-light); font-size: 0.7rem; font-weight: 600;
    padding: 2px 10px; border-radius: 20px;
  }
  .adm-panel-body { padding: 18px 20px; }

  /* INPUTS */
  .adm-input-row { display: flex; gap: 10px; margin-bottom: 14px; }
  .adm-input {
    flex: 1; padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 9px;
    font-family: 'DM Sans', sans-serif; font-size: 0.85rem; color: var(--navy);
    background: #fafbfc; outline: none; transition: border-color 0.2s, box-shadow 0.2s;
    width: 100%;
  }
  .adm-input::placeholder { color: #b0bac8; }
  .adm-input:focus { border-color: var(--gold); background: var(--white); box-shadow: 0 0 0 3px rgba(201,146,42,0.1); }
  textarea.adm-input { resize: vertical; min-height: 90px; line-height: 1.6; }

  .adm-field-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
  .adm-field-label { font-size: 0.74rem; font-weight: 600; color: var(--navy); text-transform: uppercase; letter-spacing: 0.04em; }
  .adm-field-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }

  /* BUTTONS */
  .adm-btn-add {
    background: var(--navy); color: var(--white); border: none;
    padding: 10px 18px; border-radius: 9px;
    font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 600;
    cursor: pointer; white-space: nowrap; transition: background 0.2s, transform 0.15s;
    display: flex; align-items: center; gap: 6px;
  }
  .adm-btn-add:hover { background: var(--navy-mid); transform: translateY(-1px); }

  .adm-btn-gold {
    background: var(--gold); color: var(--white); border: none;
    padding: 10px 18px; border-radius: 9px;
    font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 600;
    cursor: pointer; white-space: nowrap; transition: background 0.2s, transform 0.15s;
    display: flex; align-items: center; gap: 6px;
  }
  .adm-btn-gold:hover { background: var(--gold-light); transform: translateY(-1px); }

  .adm-btn-del {
    background: var(--danger-dim); border: 1px solid rgba(229,62,62,0.18);
    color: var(--danger); padding: 5px 11px; border-radius: 7px;
    font-family: 'DM Sans', sans-serif; font-size: 0.75rem; font-weight: 600;
    cursor: pointer; transition: all 0.18s; white-space: nowrap;
  }
  .adm-btn-del:hover { background: rgba(229,62,62,0.16); border-color: rgba(229,62,62,0.4); }

  .adm-save-row { display: flex; justify-content: flex-end; align-items: center; gap: 10px; margin-top: 10px; }
  .adm-save-badge {
    font-size: 0.75rem; color: var(--success); font-weight: 600;
    background: var(--success-dim); border: 1px solid rgba(56,161,105,0.2);
    padding: 4px 12px; border-radius: 20px; display: flex; align-items: center; gap: 6px;
  }

  /* LIST */
  .adm-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
  .adm-list-item {
    display: flex; align-items: center; justify-content: space-between; gap: 12px;
    padding: 10px 14px; background: #f8fafc; border: 1px solid #edf2f7;
    border-radius: 9px; font-size: 0.85rem; color: var(--navy); transition: background 0.15s;
  }
  .adm-list-item:hover { background: #f0f4f8; }
  .adm-list-item span { flex: 1; line-height: 1.4; }
  .adm-list-empty { text-align: center; padding: 24px; font-size: 0.83rem; color: var(--muted); }

  /* GALLERY */
  .adm-gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 14px; }
  .adm-gallery-item { position: relative; border-radius: 10px; overflow: hidden; border: 1px solid var(--border); aspect-ratio: 1; background: #f0f4f8; }
  .adm-gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .adm-gallery-del {
    position: absolute; top: 6px; right: 6px;
    background: rgba(229,62,62,0.85); color: white; border: none;
    width: 26px; height: 26px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;
    cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.18s;
  }
  .adm-gallery-del:hover { background: var(--danger); }
  .adm-file-zone {
    border: 2px dashed #cbd5e0; border-radius: 10px; padding: 18px 14px;
    text-align: center; cursor: pointer; transition: border-color 0.2s, background 0.2s;
    background: #fafbfc; margin-bottom: 10px; display: block;
  }
  .adm-file-zone:hover { border-color: var(--gold); background: var(--gold-dim); }
  .adm-file-zone input { display: none; }
  .adm-file-zone-label { font-size: 0.82rem; color: var(--muted); cursor: pointer; display: block; }
  .adm-file-zone-label strong { color: var(--gold); }
  .adm-file-selected { font-size: 0.78rem; color: var(--success); margin-top: 4px; font-weight: 500; }

  /* BROCHURE STATUS */
  .adm-brochure-active {
    margin-top: 14px; padding: 14px 16px;
    background: rgba(56,161,105,0.07); border: 1px solid rgba(56,161,105,0.22);
    border-radius: 10px; display: flex; align-items: center; gap: 12px;
  }
  .adm-brochure-none {
    margin-top: 14px; padding: 14px 16px; background: #f8fafc;
    border: 1.5px dashed #cbd5e0; border-radius: 10px;
    text-align: center; font-size: 0.83rem; color: var(--muted);
  }
  .adm-brochure-icon {
    width: 40px; height: 40px; border-radius: 9px;
    background: rgba(56,161,105,0.12);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; flex-shrink: 0;
  }
  .adm-brochure-info { flex: 1; }
  .adm-brochure-name { font-size: 0.85rem; font-weight: 600; color: var(--navy); }
  .adm-brochure-hint { font-size: 0.75rem; color: var(--success); margin-top: 2px; }

  /* TABLE */
  .adm-table-wrap { overflow-x: auto; margin-top: 16px; border-radius: 12px; border: 1px solid var(--border); }
  .adm-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
  .adm-table thead tr { background: var(--navy); }
  .adm-table thead th { padding: 13px 16px; text-align: left; font-size: 0.72rem; font-weight: 600; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.07em; white-space: nowrap; }
  .adm-table tbody tr { border-bottom: 1px solid #f0f4f8; transition: background 0.15s; }
  .adm-table tbody tr:hover { background: #f8fafc; }
  .adm-table tbody tr:last-child { border-bottom: none; }
  .adm-table td { padding: 12px 16px; color: var(--navy); vertical-align: top; line-height: 1.5; }
  .adm-table td.muted { color: var(--muted); font-size: 0.82rem; }
  .stream-badge { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 0.72rem; font-weight: 600; background: var(--gold-dim); color: var(--gold); border: 1px solid rgba(201,146,42,0.2); white-space: nowrap; }
  .adm-search-row { display: flex; gap: 10px; align-items: center; margin-bottom: 4px; }

  /* OVERVIEW STAT CARDS */
  .adm-overview-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  .adm-ov-card {
    background: var(--white); border: 1px solid var(--border); border-radius: 16px;
    padding: 20px; display: flex; align-items: center; gap: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04); transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }
  .adm-ov-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
  .adm-ov-icon { width: 46px; height: 46px; border-radius: 12px; background: var(--gold-dim); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
  .adm-ov-num { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 900; color: var(--navy); line-height: 1; }
  .adm-ov-label { font-size: 0.71rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; margin-top: 3px; }
  .adm-ov-hint { font-size: 0.7rem; color: var(--gold); margin-top: 2px; font-weight: 500; }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .adm-layout { flex-direction: column; height: auto; overflow: visible; }
    .adm-sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; height: auto; overflow-x: auto; padding: 8px; gap: 4px; }
    .adm-sidebar-section { display: none; }
    .adm-tab-btn { width: auto; white-space: nowrap; margin: 0; padding: 8px 14px; }
    .adm-tab-btn.active::before { display: none; }
    .adm-sidebar-stats { display: none; }
    .adm-content { padding: 20px 16px; overflow-y: visible; }
    .adm-grid-3 { grid-template-columns: 1fr 1fr; }
    .adm-overview-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 600px) {
    .adm-grid-3, .adm-grid-2 { grid-template-columns: 1fr; }
    .adm-field-row-2 { grid-template-columns: 1fr; }
    .adm-gallery-grid { grid-template-columns: repeat(2, 1fr); }
    .adm-overview-grid { grid-template-columns: repeat(2, 1fr); }
    .adm-content { padding: 16px 12px; }
  }
`;function Ma({icon:c,title:f,count:d,children:o}){return n.jsxs("div",{className:"adm-panel",children:[n.jsxs("div",{className:"adm-panel-head",children:[n.jsx("span",{children:c}),n.jsx("h3",{children:f}),d!==void 0&&n.jsx("span",{className:"adm-panel-badge",children:d})]}),n.jsx("div",{className:"adm-panel-body",children:o})]})}function xv(){const c=oo(),[f,d]=S.useState("overview"),[o,m]=S.useState(""),[h,v]=S.useState(""),[T,j]=S.useState(""),[g,M]=S.useState([]),[A,B]=S.useState([]),[X,K]=S.useState([]),[V,q]=S.useState([]),[R,H]=S.useState([]),[L,ie]=S.useState(null),[be,ze]=S.useState(""),[ee,Re]=S.useState(""),[Ae,ca]=S.useState(!0),[Ze,We]=S.useState(localStorage.getItem("brochureName")||""),[Fe,ja]=S.useState(null),[Sa,D]=S.useState(!1),[Y,I]=S.useState([]),[se,he]=S.useState({name:"",role:"",message:"",img:""}),[y,k]=S.useState(!1),[G,Q]=S.useState([]),[F,te]=S.useState({name:"",subject:"",experience:"",img:""}),[pe,Je]=S.useState(!1),[ye,et]=S.useState([]),[na,at]=S.useState({name:"",achievement:"",year:"",img:""}),[oi,Ja]=S.useState(!1),[ce,He]=S.useState({name:"",role:"Principal",photo:"/principal.jpg",qualification:"",experience:"",joined:"",school:"Sarvodaya Vidyalaya",message:"",quote:"",stat1num:"25+",stat1label:"Years Experience",stat2num:"5000+",stat2label:"Students Guided",stat3num:"100%",stat3label:"Board Results",stat4num:"30+",stat4label:"Awards Won"}),[Ds,cn]=S.useState(!1),[Ce,oa]=S.useState({phone:"",email:"",address:"",city:"",officeHours:"Mon – Sat, 8:00 AM – 2:30 PM",facebookUrl:"",twitterUrl:"",instagramUrl:"",whatsappNum:"",mapSrc:"https://www.google.com/maps?q=Hingna,Nagpur,Maharashtra&output=embed"}),[on,ui]=S.useState(!1),Rs=window.location.hostname==="localhost"?"http://localhost:5000":"https://svv-school-backend.onrender.com";S.useEffect(()=>{const b=()=>{Re(new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}))};b();const $=setInterval(b,1e3);return()=>clearInterval($)},[]),S.useEffect(()=>{localStorage.getItem("adminAuth")||c("/admin"),M(JSON.parse(localStorage.getItem("notices"))||[]),B(JSON.parse(localStorage.getItem("events"))||[]),K(JSON.parse(localStorage.getItem("academics"))||[]),H(JSON.parse(localStorage.getItem("gallery"))||[]);const b=JSON.parse(localStorage.getItem("managementList")||"[]");b.length>0&&I(b);const $=JSON.parse(localStorage.getItem("teacherList")||"[]");$.length>0&&Q($);const Ie=JSON.parse(localStorage.getItem("successList")||"[]");Ie.length>0&&et(Ie);const Le=JSON.parse(localStorage.getItem("principalInfo")||"{}");Object.keys(Le).length>0&&He(lt=>({...lt,...Le}));const ma=JSON.parse(localStorage.getItem("contactInfo")||"{}");Object.keys(ma).length>0&&oa(lt=>({...lt,...ma}));const sa=localStorage.getItem("newsAlertEnabled");sa!==null&&ca(sa==="true")},[c]),S.useEffect(()=>{fetch(`${Rs}/api/admissions`).then(b=>b.json()).then(b=>q(b)).catch(b=>console.log(b))},[]);const ia=()=>{if(!o.trim())return;const b=[...g,o.trim()];M(b),localStorage.setItem("notices",JSON.stringify(b)),m(""),window.dispatchEvent(new Event("noticesUpdated"))},_s=b=>{const $=g.filter((Ie,Le)=>Le!==b);M($),localStorage.setItem("notices",JSON.stringify($)),window.dispatchEvent(new Event("noticesUpdated"))},un=(b,$,Ie,Le,ma)=>{if(!b.trim())return;const sa=[...$,b.trim()];Ie(sa),localStorage.setItem(Le,JSON.stringify(sa)),ma("")},dn=(b,$,Ie,Le)=>{const ma=$.filter((sa,lt)=>lt!==b);Ie(ma),localStorage.setItem(Le,JSON.stringify(ma))},Wt=()=>un(h,A,B,"events",v),di=()=>un(T,X,K,"academics",j),fi=b=>dn(b,A,B,"events"),Us=b=>dn(b,X,K,"academics"),mi=()=>{const b=!Ae;ca(b),localStorage.setItem("newsAlertEnabled",String(b)),window.dispatchEvent(new Event("newsAlertToggled"))},Ft=()=>{if(!L)return;const b=new FileReader;b.onloadend=()=>{const $=[...R,b.result];H($),localStorage.setItem("gallery",JSON.stringify($)),ie(null)},b.readAsDataURL(L)},ua=b=>{const $=R.filter((Ie,Le)=>Le!==b);H($),localStorage.setItem("gallery",JSON.stringify($))},Ka=()=>{if(!Fe)return;const b=new FileReader;b.onloadend=()=>{localStorage.setItem("brochureData",b.result),localStorage.setItem("brochureName",Fe.name),We(Fe.name),ja(null),D(!0),setTimeout(()=>D(!1),3e3),window.dispatchEvent(new Event("brochureUpdated"))},b.readAsDataURL(Fe)},da=()=>{localStorage.removeItem("brochureData"),localStorage.removeItem("brochureName"),We(""),ja(null),window.dispatchEvent(new Event("brochureUpdated"))},ks=()=>{if(!se.name.trim()||!se.role.trim())return;const b=[...Y,{...se}];I(b),localStorage.setItem("managementList",JSON.stringify(b)),he({name:"",role:"",message:"",img:""}),k(!0),setTimeout(()=>k(!1),3e3)},Hs=b=>{const $=Y.filter((Ie,Le)=>Le!==b);I($),localStorage.setItem("managementList",JSON.stringify($))},Ls=()=>{if(!F.name.trim()||!F.subject.trim())return;const b=[...G,{...F}];Q(b),localStorage.setItem("teacherList",JSON.stringify(b)),te({name:"",subject:"",experience:"",img:""}),Je(!0),setTimeout(()=>Je(!1),3e3)},vl=b=>{const $=G.filter((Ie,Le)=>Le!==b);Q($),localStorage.setItem("teacherList",JSON.stringify($))},bl=()=>{if(!na.name.trim()||!na.achievement.trim())return;const b=[...ye,{...na}];et(b),localStorage.setItem("successList",JSON.stringify(b)),at({name:"",achievement:"",year:"",img:""}),Ja(!0),setTimeout(()=>Ja(!1),3e3)},xl=b=>{const $=ye.filter((Ie,Le)=>Le!==b);et($),localStorage.setItem("successList",JSON.stringify($))},tt=()=>{localStorage.setItem("principalInfo",JSON.stringify(ce)),cn(!0),setTimeout(()=>cn(!1),3e3)},yl=()=>{localStorage.setItem("contactInfo",JSON.stringify(Ce)),ui(!0),setTimeout(()=>ui(!1),3e3)},It=()=>{localStorage.removeItem("adminAuth"),c("/admin")},Bs=()=>{const $=`Name,Email,Phone,Stream,Message
`+V.map(sa=>`"${sa.name}","${sa.email}","${sa.phone}","${sa.stream||""}","${sa.message||""}"`).join(`
`),Ie=new Blob([$],{type:"text/csv"}),Le=window.URL.createObjectURL(Ie),ma=document.createElement("a");ma.href=Le,ma.download="admissions.csv",ma.click()},jl=V.filter(b=>b.name?.toLowerCase().includes(be.toLowerCase())),fn=[{id:"overview",icon:"📊",label:"Overview"},{id:"news",icon:"📢",label:"News & Alerts",badge:g.length},{id:"events",icon:"📅",label:"Events",badge:A.length},{id:"academics",icon:"📚",label:"Academics",badge:X.length},{id:"gallery",icon:"🖼️",label:"Gallery",badge:R.length},{id:"brochure",icon:"📄",label:"Brochure"},{id:"admissions",icon:"🎓",label:"Admissions",badge:V.length},{id:"principal",icon:"👩‍💼",label:"Principal"},{id:"contact",icon:"📍",label:"Contact"},{id:"management",icon:"👔",label:"Management",badge:Y.length},{id:"teachers",icon:"🧑‍🏫",label:"Teachers",badge:G.length},{id:"success",icon:"🏆",label:"Success Stories",badge:ye.length}];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:bv}),n.jsxs("div",{className:"adm-wrap",children:[n.jsxs("div",{className:"adm-topbar",children:[n.jsxs("div",{className:"adm-topbar-left",children:[n.jsx("div",{className:"adm-logo-box",children:"SVK"}),n.jsxs("div",{children:[n.jsx("div",{className:"adm-topbar-title",children:"Admin Dashboard"}),n.jsx("div",{className:"adm-topbar-sub",children:"Sarvodaya Vidyalaya"})]})]}),n.jsxs("div",{className:"adm-topbar-right",children:[n.jsxs("span",{className:"adm-time",children:["🕐 ",ee]}),n.jsx("button",{className:"adm-logout-btn",onClick:It,children:"⬠ Logout"})]})]}),n.jsxs("div",{className:"adm-layout",children:[n.jsxs("div",{className:"adm-sidebar",children:[n.jsx("div",{className:"adm-sidebar-section",children:"Navigation"}),fn.map(b=>n.jsxs("button",{className:`adm-tab-btn ${f===b.id?"active":""}`,onClick:()=>d(b.id),children:[n.jsx("span",{className:"adm-tab-icon",children:b.icon}),b.label,b.badge!==void 0&&b.badge>0&&n.jsx("span",{className:"adm-tab-badge",children:b.badge})]},b.id)),n.jsxs("div",{className:"adm-sidebar-stats",children:[n.jsxs("div",{className:"adm-sidebar-stat",children:[n.jsx("span",{children:"Total Items"}),n.jsx("strong",{children:g.length+A.length+X.length+R.length})]}),n.jsxs("div",{className:"adm-sidebar-stat",children:[n.jsx("span",{children:"Admissions"}),n.jsx("strong",{children:V.length})]}),n.jsxs("div",{className:"adm-sidebar-stat",children:[n.jsx("span",{children:"News Ticker"}),n.jsx("strong",{style:{color:Ae?"#68d391":"#fc8181"},children:Ae?"ON":"OFF"})]})]})]}),n.jsxs("div",{className:"adm-content",children:[f==="overview"&&n.jsxs("div",{children:[n.jsx("div",{className:"adm-tab-header",children:n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Dashboard"}),n.jsx("div",{className:"adm-tab-title",children:"Overview"})]})}),n.jsx("div",{className:"adm-overview-grid",children:[{icon:"📢",label:"Notices",num:g.length,hint:"Click to manage",tab:"news"},{icon:"📅",label:"Events",num:A.length,hint:"Click to manage",tab:"events"},{icon:"📚",label:"Academics",num:X.length,hint:"Click to manage",tab:"academics"},{icon:"🖼️",label:"Gallery",num:R.length,hint:"Click to manage",tab:"gallery"},{icon:"🎓",label:"Admissions",num:V.length,hint:"Click to view",tab:"admissions"},{icon:"👔",label:"Management",num:Y.length,hint:"Click to manage",tab:"management"},{icon:"🧑‍🏫",label:"Teachers",num:G.length,hint:"Click to manage",tab:"teachers"},{icon:"🏆",label:"Success",num:ye.length,hint:"Click to manage",tab:"success"}].map(b=>n.jsxs("div",{className:"adm-ov-card",onClick:()=>d(b.tab),children:[n.jsx("div",{className:"adm-ov-icon",children:b.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"adm-ov-num",children:b.num}),n.jsx("div",{className:"adm-ov-label",children:b.label}),n.jsxs("div",{className:"adm-ov-hint",children:[b.hint," →"]})]})]},b.label))}),n.jsxs("div",{className:"adm-grid-2",style:{marginTop:"8px"},children:[n.jsx(Ma,{icon:"🔔",title:"News Ticker Status",count:Ae?"ON":"OFF",children:n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"14px"},children:[n.jsx("span",{style:{color:"var(--muted)",fontSize:"0.88rem"},children:Ae?"Visitors currently see the scrolling news ticker.":"The news ticker is hidden from the website."}),n.jsx("button",{className:Ae?"adm-btn-del":"adm-btn-gold",onClick:mi,style:{minWidth:"110px"},children:Ae?"Turn Off":"Turn On"})]})}),n.jsxs(Ma,{icon:"📄",title:"Brochure Status",count:Ze?"Uploaded":"None",children:[n.jsx("div",{style:{fontSize:"0.88rem",color:"var(--muted)"},children:Ze?n.jsxs("span",{style:{color:"var(--success)",fontWeight:600},children:["📄 ",Ze," — Live on navbar"]}):"No brochure uploaded. Go to the Brochure tab to upload a PDF."}),n.jsx("button",{className:"adm-btn-gold",onClick:()=>d("brochure"),style:{marginTop:"12px",fontSize:"0.78rem",padding:"7px 14px"},children:"Manage Brochure →"})]})]})]}),f==="news"&&n.jsxs("div",{children:[n.jsxs("div",{className:"adm-tab-header",children:[n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Content"}),n.jsx("div",{className:"adm-tab-title",children:"News & Alerts"})]}),n.jsxs("button",{className:Ae?"adm-btn-del":"adm-btn-gold",onClick:mi,style:{minWidth:"130px"},children:["Ticker: ",Ae?"ON — Turn Off":"OFF — Turn On"]})]}),n.jsxs(Ma,{icon:"📢",title:"News Ticker Items",count:g.length,children:[n.jsxs("div",{className:"adm-input-row",children:[n.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter news item...",value:o,onChange:b=>m(b.target.value),onKeyDown:b=>b.key==="Enter"&&ia()}),n.jsx("button",{className:"adm-btn-add",onClick:ia,children:"+ Add"})]}),n.jsx("p",{style:{marginBottom:"12px",color:"var(--muted)",fontSize:"0.84rem"},children:"These messages appear in the scrolling ticker at the top of the public site."}),n.jsxs("ul",{className:"adm-list",children:[g.length===0&&n.jsx("div",{className:"adm-list-empty",children:"No news items yet"}),g.map((b,$)=>n.jsxs("li",{className:"adm-list-item",children:[n.jsx("span",{children:b}),n.jsx("button",{className:"adm-btn-del",onClick:()=>_s($),children:"✕"})]},$))]})]})]}),f==="events"&&n.jsxs("div",{children:[n.jsx("div",{className:"adm-tab-header",children:n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Content"}),n.jsx("div",{className:"adm-tab-title",children:"Events"})]})}),n.jsxs(Ma,{icon:"📅",title:"Events",count:A.length,children:[n.jsxs("div",{className:"adm-input-row",children:[n.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter event...",value:h,onChange:b=>v(b.target.value),onKeyDown:b=>b.key==="Enter"&&Wt()}),n.jsx("button",{className:"adm-btn-add",onClick:Wt,children:"+ Add"})]}),n.jsxs("ul",{className:"adm-list",children:[A.length===0&&n.jsx("div",{className:"adm-list-empty",children:"No events yet"}),A.map((b,$)=>n.jsxs("li",{className:"adm-list-item",children:[n.jsx("span",{children:b}),n.jsx("button",{className:"adm-btn-del",onClick:()=>fi($),children:"✕"})]},$))]})]})]}),f==="academics"&&n.jsxs("div",{children:[n.jsx("div",{className:"adm-tab-header",children:n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Content"}),n.jsx("div",{className:"adm-tab-title",children:"Academics"})]})}),n.jsxs(Ma,{icon:"📚",title:"Academics",count:X.length,children:[n.jsxs("div",{className:"adm-input-row",children:[n.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter academic info...",value:T,onChange:b=>j(b.target.value),onKeyDown:b=>b.key==="Enter"&&di()}),n.jsx("button",{className:"adm-btn-add",onClick:di,children:"+ Add"})]}),n.jsxs("ul",{className:"adm-list",children:[X.length===0&&n.jsx("div",{className:"adm-list-empty",children:"No items yet"}),X.map((b,$)=>n.jsxs("li",{className:"adm-list-item",children:[n.jsx("span",{children:b}),n.jsx("button",{className:"adm-btn-del",onClick:()=>Us($),children:"✕"})]},$))]})]})]}),f==="gallery"&&n.jsxs("div",{children:[n.jsx("div",{className:"adm-tab-header",children:n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Media"}),n.jsx("div",{className:"adm-tab-title",children:"Gallery"})]})}),n.jsxs(Ma,{icon:"🖼️",title:"Gallery",count:R.length,children:[n.jsxs("label",{className:"adm-file-zone",children:[n.jsx("input",{type:"file",accept:"image/*",onChange:b=>ie(b.target.files[0])}),n.jsx("span",{className:"adm-file-zone-label",children:L?n.jsxs("span",{className:"adm-file-selected",children:["✅ ",L.name]}):n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"Click to choose"})," an image to upload"]})})]}),n.jsx("button",{className:"adm-btn-gold",onClick:Ft,disabled:!L,style:{opacity:L?1:.5,cursor:L?"pointer":"not-allowed",marginBottom:"8px"},children:"⬆ Upload Image"}),n.jsxs("div",{className:"adm-gallery-grid",children:[R.length===0&&n.jsx("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:"30px",color:"var(--muted)",fontSize:"0.83rem"},children:"No images uploaded yet"}),R.map((b,$)=>n.jsxs("div",{className:"adm-gallery-item",children:[n.jsx("img",{src:b,alt:`gallery-${$}`}),n.jsx("button",{className:"adm-gallery-del",onClick:()=>ua($),children:"✕"})]},$))]})]})]}),f==="brochure"&&n.jsxs("div",{children:[n.jsx("div",{className:"adm-tab-header",children:n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Media"}),n.jsx("div",{className:"adm-tab-title",children:"School Brochure"})]})}),n.jsxs(Ma,{icon:"📄",title:"Download Brochure — activates the navbar button",count:Ze?"Uploaded":"None",children:[n.jsxs("p",{style:{color:"var(--muted)",fontSize:"0.85rem",marginBottom:"14px"},children:["Upload a PDF here. Once uploaded, the ",n.jsx("strong",{style:{color:"var(--navy)"},children:"Download Brochure"})," button in the navbar becomes active for visitors."]}),n.jsxs("label",{className:"adm-file-zone",children:[n.jsx("input",{type:"file",accept:"application/pdf",onChange:b=>ja(b.target.files[0])}),n.jsx("span",{className:"adm-file-zone-label",children:Fe?n.jsxs("span",{className:"adm-file-selected",children:["✅ ",Fe.name]}):n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"Click to choose"})," a PDF brochure to upload"]})})]}),n.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[n.jsx("button",{className:"adm-btn-gold",onClick:Ka,disabled:!Fe,style:{opacity:Fe?1:.5,cursor:Fe?"pointer":"not-allowed"},children:"⬆ Upload Brochure"}),Ze&&n.jsx("button",{className:"adm-btn-del",onClick:da,children:"✕ Remove"}),Sa&&n.jsx("span",{className:"adm-save-badge",children:"✅ Uploaded! Navbar button is now active."})]}),Ze?n.jsxs("div",{className:"adm-brochure-active",children:[n.jsx("div",{className:"adm-brochure-icon",children:"📄"}),n.jsxs("div",{className:"adm-brochure-info",children:[n.jsx("div",{className:"adm-brochure-name",children:Ze}),n.jsx("div",{className:"adm-brochure-hint",children:"✅ Live — visitors can download from the navbar"})]})]}):n.jsx("div",{className:"adm-brochure-none",children:"No brochure uploaded yet — navbar button will appear dimmed."})]})]}),f==="admissions"&&n.jsxs("div",{children:[n.jsxs("div",{className:"adm-tab-header",children:[n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Students"}),n.jsx("div",{className:"adm-tab-title",children:"Admission Requests"})]}),n.jsx("button",{className:"adm-btn-gold",onClick:Bs,children:"⬇ Export CSV"})]}),n.jsxs(Ma,{icon:"🎓",title:"Admission Requests",count:jl.length,children:[n.jsx("div",{className:"adm-search-row",children:n.jsx("input",{className:"adm-input",type:"text",placeholder:"🔍  Search student by name...",value:be,onChange:b=>ze(b.target.value)})}),n.jsx("div",{className:"adm-table-wrap",children:n.jsxs("table",{className:"adm-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"#"}),n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Email"}),n.jsx("th",{children:"Phone"}),n.jsx("th",{children:"Stream"}),n.jsx("th",{children:"Message"})]})}),n.jsx("tbody",{children:jl.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"28px",color:"var(--muted)"},children:"No admission requests found"})}):jl.map((b,$)=>n.jsxs("tr",{children:[n.jsx("td",{className:"muted",children:$+1}),n.jsx("td",{children:n.jsx("strong",{children:b.name})}),n.jsx("td",{className:"muted",children:b.email}),n.jsx("td",{className:"muted",children:b.phone}),n.jsx("td",{children:b.stream?n.jsx("span",{className:"stream-badge",children:b.stream}):n.jsx("span",{style:{color:"var(--muted)"},children:"—"})}),n.jsx("td",{children:b.message||n.jsx("span",{style:{color:"var(--muted)"},children:"—"})})]},$))})]})})]})]}),f==="principal"&&n.jsxs("div",{children:[n.jsxs("div",{className:"adm-tab-header",children:[n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Staff"}),n.jsx("div",{className:"adm-tab-title",children:"Principal Info"})]}),n.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[Ds&&n.jsx("span",{className:"adm-save-badge",children:"✅ Saved!"}),n.jsx("button",{className:"adm-btn-gold",onClick:tt,children:"💾 Save Changes"})]})]}),n.jsxs(Ma,{icon:"👩‍💼",title:"Principal Info — reflects on /principal page",children:[n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Full Name"}),n.jsx("input",{className:"adm-input",placeholder:"Dr. Sunita Sharma",value:ce.name,onChange:b=>He({...ce,name:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Role / Title"}),n.jsx("input",{className:"adm-input",placeholder:"Principal",value:ce.role,onChange:b=>He({...ce,role:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Qualification"}),n.jsx("input",{className:"adm-input",placeholder:"M.Sc., B.Ed., Ph.D.",value:ce.qualification,onChange:b=>He({...ce,qualification:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Experience"}),n.jsx("input",{className:"adm-input",placeholder:"25+ Years",value:ce.experience,onChange:b=>He({...ce,experience:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Joined Since"}),n.jsx("input",{className:"adm-input",placeholder:"Since 2010",value:ce.joined,onChange:b=>He({...ce,joined:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Photo Path"}),n.jsx("input",{className:"adm-input",placeholder:"/principal.jpg",value:ce.photo,onChange:b=>He({...ce,photo:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Message"}),n.jsx("textarea",{className:"adm-input",style:{minHeight:"120px"},placeholder:"Write the principal's message here...",value:ce.message,onChange:b=>He({...ce,message:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Highlight Quote"}),n.jsx("input",{className:"adm-input",placeholder:"Education is not the filling of a pail...",value:ce.quote,onChange:b=>He({...ce,quote:b.target.value})})]}),n.jsx("div",{className:"adm-field-label",style:{marginBottom:"10px"},children:"Achievement Stats"}),n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Stat 1 Number"}),n.jsx("input",{className:"adm-input",placeholder:"25+",value:ce.stat1num,onChange:b=>He({...ce,stat1num:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Stat 1 Label"}),n.jsx("input",{className:"adm-input",placeholder:"Years Experience",value:ce.stat1label,onChange:b=>He({...ce,stat1label:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Stat 2 Number"}),n.jsx("input",{className:"adm-input",placeholder:"5000+",value:ce.stat2num,onChange:b=>He({...ce,stat2num:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Stat 2 Label"}),n.jsx("input",{className:"adm-input",placeholder:"Students Guided",value:ce.stat2label,onChange:b=>He({...ce,stat2label:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Stat 3 Number"}),n.jsx("input",{className:"adm-input",placeholder:"100%",value:ce.stat3num,onChange:b=>He({...ce,stat3num:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Stat 3 Label"}),n.jsx("input",{className:"adm-input",placeholder:"Board Results",value:ce.stat3label,onChange:b=>He({...ce,stat3label:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Stat 4 Number"}),n.jsx("input",{className:"adm-input",placeholder:"30+",value:ce.stat4num,onChange:b=>He({...ce,stat4num:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Stat 4 Label"}),n.jsx("input",{className:"adm-input",placeholder:"Awards Won",value:ce.stat4label,onChange:b=>He({...ce,stat4label:b.target.value})})]})]})]})]}),f==="contact"&&n.jsxs("div",{children:[n.jsxs("div",{className:"adm-tab-header",children:[n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Settings"}),n.jsx("div",{className:"adm-tab-title",children:"Contact Info"})]}),n.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[on&&n.jsx("span",{className:"adm-save-badge",children:"✅ Saved!"}),n.jsx("button",{className:"adm-btn-gold",onClick:yl,children:"💾 Save Changes"})]})]}),n.jsxs(Ma,{icon:"📍",title:"Contact Info — reflects on /contact page",children:[n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Phone Number"}),n.jsx("input",{className:"adm-input",placeholder:"+91 98765 43210",value:Ce.phone,onChange:b=>oa({...Ce,phone:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Email Address"}),n.jsx("input",{className:"adm-input",placeholder:"info@sarvodayavk.edu.in",value:Ce.email,onChange:b=>oa({...Ce,email:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Address"}),n.jsx("input",{className:"adm-input",placeholder:"Hingna Road, Near Main Bus Stop",value:Ce.address,onChange:b=>oa({...Ce,address:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"City / District"}),n.jsx("input",{className:"adm-input",placeholder:"Hingna, Nagpur – 441110",value:Ce.city,onChange:b=>oa({...Ce,city:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Office Hours"}),n.jsx("input",{className:"adm-input",placeholder:"Mon – Sat, 8:00 AM – 2:30 PM",value:Ce.officeHours,onChange:b=>oa({...Ce,officeHours:b.target.value})})]}),n.jsx("div",{className:"adm-field-label",style:{marginBottom:"10px"},children:"Social Media Links"}),n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Facebook URL"}),n.jsx("input",{className:"adm-input",placeholder:"https://facebook.com/yourpage",value:Ce.facebookUrl,onChange:b=>oa({...Ce,facebookUrl:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Twitter / X URL"}),n.jsx("input",{className:"adm-input",placeholder:"https://twitter.com/yourpage",value:Ce.twitterUrl,onChange:b=>oa({...Ce,twitterUrl:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Instagram URL"}),n.jsx("input",{className:"adm-input",placeholder:"https://instagram.com/yourpage",value:Ce.instagramUrl,onChange:b=>oa({...Ce,instagramUrl:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"WhatsApp Number"}),n.jsx("input",{className:"adm-input",placeholder:"919876543210",value:Ce.whatsappNum,onChange:b=>oa({...Ce,whatsappNum:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Google Maps Embed URL"}),n.jsx("input",{className:"adm-input",placeholder:"https://www.google.com/maps?q=...&output=embed",value:Ce.mapSrc,onChange:b=>oa({...Ce,mapSrc:b.target.value})})]})]})]}),f==="management"&&n.jsxs("div",{children:[n.jsx("div",{className:"adm-tab-header",children:n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Staff"}),n.jsx("div",{className:"adm-tab-title",children:"Management Team"})]})}),n.jsxs(Ma,{icon:"👔",title:"Management Team — reflects on /management page",count:Y.length,children:[n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Full Name"}),n.jsx("input",{className:"adm-input",placeholder:"Dr. A. Deshmukh",value:se.name,onChange:b=>he({...se,name:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Role / Title"}),n.jsx("input",{className:"adm-input",placeholder:"Chairman",value:se.role,onChange:b=>he({...se,role:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Message / Quote"}),n.jsx("textarea",{className:"adm-input",placeholder:"Our vision is to provide quality education...",value:se.message,onChange:b=>he({...se,message:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Photo URL"}),n.jsx("input",{className:"adm-input",placeholder:"https://randomuser.me/api/portraits/men/11.jpg",value:se.img,onChange:b=>he({...se,img:b.target.value})})]}),n.jsxs("div",{className:"adm-save-row",children:[y&&n.jsx("span",{className:"adm-save-badge",children:"✅ Member added!"}),n.jsx("button",{className:"adm-btn-gold",onClick:ks,children:"+ Add Member"})]}),Y.length>0?n.jsx("ul",{className:"adm-list",style:{marginTop:"16px"},children:Y.map((b,$)=>n.jsxs("li",{className:"adm-list-item",children:[b.img&&n.jsx("img",{src:b.img,alt:b.name,style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",flexShrink:0}}),n.jsxs("span",{children:[n.jsx("strong",{children:b.name})," — ",b.role]}),n.jsx("button",{className:"adm-btn-del",onClick:()=>Hs($),children:"✕"})]},$))}):n.jsx("div",{className:"adm-list-empty",children:"No management members added yet"})]})]}),f==="teachers"&&n.jsxs("div",{children:[n.jsx("div",{className:"adm-tab-header",children:n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Staff"}),n.jsx("div",{className:"adm-tab-title",children:"Teachers"})]})}),n.jsxs(Ma,{icon:"🧑‍🏫",title:"Teachers — reflects on /teachers page",count:G.length,children:[n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Full Name"}),n.jsx("input",{className:"adm-input",placeholder:"Mr. Rajesh Sharma",value:F.name,onChange:b=>te({...F,name:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Subject"}),n.jsx("input",{className:"adm-input",placeholder:"Mathematics",value:F.subject,onChange:b=>te({...F,subject:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Experience"}),n.jsx("input",{className:"adm-input",placeholder:"10+ Years",value:F.experience,onChange:b=>te({...F,experience:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Photo URL"}),n.jsx("input",{className:"adm-input",placeholder:"https://randomuser.me/api/portraits/men/32.jpg",value:F.img,onChange:b=>te({...F,img:b.target.value})})]})]}),n.jsxs("div",{className:"adm-save-row",children:[pe&&n.jsx("span",{className:"adm-save-badge",children:"✅ Teacher added!"}),n.jsx("button",{className:"adm-btn-gold",onClick:Ls,children:"+ Add Teacher"})]}),G.length>0?n.jsx("ul",{className:"adm-list",style:{marginTop:"16px"},children:G.map((b,$)=>n.jsxs("li",{className:"adm-list-item",children:[b.img&&n.jsx("img",{src:b.img,alt:b.name,style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",flexShrink:0}}),n.jsxs("span",{children:[n.jsx("strong",{children:b.name})," — ",b.subject," · ",b.experience]}),n.jsx("button",{className:"adm-btn-del",onClick:()=>vl($),children:"✕"})]},$))}):n.jsx("div",{className:"adm-list-empty",children:"No teachers added yet"})]})]}),f==="success"&&n.jsxs("div",{children:[n.jsx("div",{className:"adm-tab-header",children:n.jsxs("div",{className:"adm-tab-header-left",children:[n.jsx("div",{className:"adm-tab-label",children:"Content"}),n.jsx("div",{className:"adm-tab-title",children:"Success Stories"})]})}),n.jsxs(Ma,{icon:"🏆",title:"Success Stories — reflects on /success page",count:ye.length,children:[n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Student Name"}),n.jsx("input",{className:"adm-input",placeholder:"Rahul Verma",value:na.name,onChange:b=>at({...na,name:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Year"}),n.jsx("input",{className:"adm-input",placeholder:"2025",value:na.year,onChange:b=>at({...na,year:b.target.value})})]})]}),n.jsxs("div",{className:"adm-field-row-2",children:[n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Achievement"}),n.jsx("input",{className:"adm-input",placeholder:"Selected in IIT Bombay",value:na.achievement,onChange:b=>at({...na,achievement:b.target.value})})]}),n.jsxs("div",{className:"adm-field-group",children:[n.jsx("label",{className:"adm-field-label",children:"Photo URL"}),n.jsx("input",{className:"adm-input",placeholder:"https://randomuser.me/api/portraits/men/12.jpg",value:na.img,onChange:b=>at({...na,img:b.target.value})})]})]}),n.jsxs("div",{className:"adm-save-row",children:[oi&&n.jsx("span",{className:"adm-save-badge",children:"✅ Story added!"}),n.jsx("button",{className:"adm-btn-gold",onClick:bl,children:"+ Add Story"})]}),ye.length>0?n.jsx("ul",{className:"adm-list",style:{marginTop:"16px"},children:ye.map((b,$)=>n.jsxs("li",{className:"adm-list-item",children:[b.img&&n.jsx("img",{src:b.img,alt:b.name,style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",flexShrink:0}}),n.jsxs("span",{children:[n.jsx("strong",{children:b.name})," — ",b.achievement," ",n.jsxs("span",{style:{color:"var(--gold)",fontWeight:600},children:["(",b.year,")"]})]}),n.jsx("button",{className:"adm-btn-del",onClick:()=>xl($),children:"✕"})]},$))}):n.jsx("div",{className:"adm-list-empty",children:"No success stories added yet"})]})]})]})]})]})]})}function yv(){return n.jsxs(k0,{children:[n.jsx(Z0,{}),n.jsxs("div",{style:{paddingTop:"104px"},children:[n.jsx(F0,{}),n.jsxs(f0,{children:[n.jsx(Ya,{path:"/",element:n.jsx(lv,{})}),n.jsx(Ya,{path:"/about",element:n.jsx(nv,{})}),n.jsx(Ya,{path:"/academics",element:n.jsx(iv,{})}),n.jsx(Ya,{path:"/gallery",element:n.jsx(sv,{})}),n.jsx(Ya,{path:"/contact",element:n.jsx(cv,{})}),n.jsx(Ya,{path:"/teachers",element:n.jsx(uv,{})}),n.jsx(Ya,{path:"/management",element:n.jsx(fv,{})}),n.jsx(Ya,{path:"/success",element:n.jsx(hv,{})}),n.jsx(Ya,{path:"/principal",element:n.jsx(pv,{})}),n.jsx(Ya,{path:"/admin",element:n.jsx(vv,{})}),n.jsx(Ya,{path:"/admin-dashboard",element:n.jsx(xv,{})})]})]}),n.jsx($0,{}),n.jsx(K0,{})]})}pg.createRoot(document.getElementById("root")).render(n.jsx(ro.StrictMode,{children:n.jsx(yv,{})}));
