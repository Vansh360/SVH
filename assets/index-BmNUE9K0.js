(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function d(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(m){if(m.ep)return;m.ep=!0;const h=d(m);fetch(m.href,h)}})();function zm(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Kc={exports:{}},ai={};var rm;function ng(){if(rm)return ai;rm=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(u,m,h){var v=null;if(h!==void 0&&(v=""+h),m.key!==void 0&&(v=""+m.key),"key"in m){h={};for(var A in m)A!=="key"&&(h[A]=m[A])}else h=m;return m=h.ref,{$$typeof:c,type:u,key:v,ref:m!==void 0?m:null,props:h}}return ai.Fragment=f,ai.jsx=d,ai.jsxs=d,ai}var cm;function ig(){return cm||(cm=1,Kc.exports=ng()),Kc.exports}var i=ig(),$c={exports:{}},ae={};var um;function sg(){if(um)return ae;um=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),v=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),H=Symbol.iterator;function Q(y){return y===null||typeof y!="object"?null:(y=H&&y[H]||y["@@iterator"],typeof y=="function"?y:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,k={};function V(y,U,G){this.props=y,this.context=U,this.refs=k,this.updater=G||Y}V.prototype.isReactComponent={},V.prototype.setState=function(y,U){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,U,"setState")},V.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function X(){}X.prototype=V.prototype;function B(y,U,G){this.props=y,this.context=U,this.refs=k,this.updater=G||Y}var le=B.prototype=new X;le.constructor=B,L(le,V.prototype),le.isPureReactComponent=!0;var xe=Array.isArray;function De(){}var ee={H:null,A:null,T:null,S:null},Re=Object.prototype.hasOwnProperty;function ze(y,U,G){var Z=G.ref;return{$$typeof:c,type:y,key:U,ref:Z!==void 0?Z:null,props:G}}function ca(y,U){return ze(y.type,U,y.props)}function Ze(y){return typeof y=="object"&&y!==null&&y.$$typeof===c}function We(y){var U={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(G){return U[G]})}var Fe=/\/+/g;function Sa(y,U){return typeof y=="object"&&y!==null&&y.key!=null?We(""+y.key):U.toString(36)}function ja(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(De,De):(y.status="pending",y.then(function(U){y.status==="pending"&&(y.status="fulfilled",y.value=U)},function(U){y.status==="pending"&&(y.status="rejected",y.reason=U)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function O(y,U,G,Z,F){var te=typeof y;(te==="undefined"||te==="boolean")&&(y=null);var he=!1;if(y===null)he=!0;else switch(te){case"bigint":case"string":case"number":he=!0;break;case"object":switch(y.$$typeof){case c:case f:he=!0;break;case M:return he=y._init,O(he(y._payload),U,G,Z,F)}}if(he)return F=F(y),he=Z===""?"."+Sa(y,0):Z,xe(F)?(G="",he!=null&&(G=he.replace(Fe,"$&/")+"/"),O(F,U,G,"",function(Pa){return Pa})):F!=null&&(Ze(F)&&(F=ca(F,G+(F.key==null||y&&y.key===F.key?"":(""+F.key).replace(Fe,"$&/")+"/")+he)),U.push(F)),1;he=0;var Je=Z===""?".":Z+":";if(xe(y))for(var ye=0;ye<y.length;ye++)Z=y[ye],te=Je+Sa(Z,ye),he+=O(Z,U,G,te,F);else if(ye=Q(y),typeof ye=="function")for(y=ye.call(y),ye=0;!(Z=y.next()).done;)Z=Z.value,te=Je+Sa(Z,ye++),he+=O(Z,U,G,te,F);else if(te==="object"){if(typeof y.then=="function")return O(ja(y),U,G,Z,F);throw U=String(y),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return he}function q(y,U,G){if(y==null)return y;var Z=[],F=0;return O(y,Z,"","",function(te){return U.call(G,te,F++)}),Z}function I(y){if(y._status===-1){var U=y._result;U=U(),U.then(function(G){(y._status===0||y._status===-1)&&(y._status=1,y._result=G)},function(G){(y._status===0||y._status===-1)&&(y._status=2,y._result=G)}),y._status===-1&&(y._status=0,y._result=U)}if(y._status===1)return y._result.default;throw y._result}var se=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},me={map:q,forEach:function(y,U,G){q(y,function(){U.apply(this,arguments)},G)},count:function(y){var U=0;return q(y,function(){U++}),U},toArray:function(y){return q(y,function(U){return U})||[]},only:function(y){if(!Ze(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return ae.Activity=z,ae.Children=me,ae.Component=V,ae.Fragment=d,ae.Profiler=m,ae.PureComponent=B,ae.StrictMode=u,ae.Suspense=S,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ae.__COMPILER_RUNTIME={__proto__:null,c:function(y){return ee.H.useMemoCache(y)}},ae.cache=function(y){return function(){return y.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(y,U,G){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Z=L({},y.props),F=y.key;if(U!=null)for(te in U.key!==void 0&&(F=""+U.key),U)!Re.call(U,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&U.ref===void 0||(Z[te]=U[te]);var te=arguments.length-2;if(te===1)Z.children=G;else if(1<te){for(var he=Array(te),Je=0;Je<te;Je++)he[Je]=arguments[Je+2];Z.children=he}return ze(y.type,F,Z)},ae.createContext=function(y){return y={$$typeof:v,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},ae.createElement=function(y,U,G){var Z,F={},te=null;if(U!=null)for(Z in U.key!==void 0&&(te=""+U.key),U)Re.call(U,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(F[Z]=U[Z]);var he=arguments.length-2;if(he===1)F.children=G;else if(1<he){for(var Je=Array(he),ye=0;ye<he;ye++)Je[ye]=arguments[ye+2];F.children=Je}if(y&&y.defaultProps)for(Z in he=y.defaultProps,he)F[Z]===void 0&&(F[Z]=he[Z]);return ze(y,te,F)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(y){return{$$typeof:A,render:y}},ae.isValidElement=Ze,ae.lazy=function(y){return{$$typeof:M,_payload:{_status:-1,_result:y},_init:I}},ae.memo=function(y,U){return{$$typeof:g,type:y,compare:U===void 0?null:U}},ae.startTransition=function(y){var U=ee.T,G={};ee.T=G;try{var Z=y(),F=ee.S;F!==null&&F(G,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(De,se)}catch(te){se(te)}finally{U!==null&&G.types!==null&&(U.types=G.types),ee.T=U}},ae.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ae.use=function(y){return ee.H.use(y)},ae.useActionState=function(y,U,G){return ee.H.useActionState(y,U,G)},ae.useCallback=function(y,U){return ee.H.useCallback(y,U)},ae.useContext=function(y){return ee.H.useContext(y)},ae.useDebugValue=function(){},ae.useDeferredValue=function(y,U){return ee.H.useDeferredValue(y,U)},ae.useEffect=function(y,U){return ee.H.useEffect(y,U)},ae.useEffectEvent=function(y){return ee.H.useEffectEvent(y)},ae.useId=function(){return ee.H.useId()},ae.useImperativeHandle=function(y,U,G){return ee.H.useImperativeHandle(y,U,G)},ae.useInsertionEffect=function(y,U){return ee.H.useInsertionEffect(y,U)},ae.useLayoutEffect=function(y,U){return ee.H.useLayoutEffect(y,U)},ae.useMemo=function(y,U){return ee.H.useMemo(y,U)},ae.useOptimistic=function(y,U){return ee.H.useOptimistic(y,U)},ae.useReducer=function(y,U,G){return ee.H.useReducer(y,U,G)},ae.useRef=function(y){return ee.H.useRef(y)},ae.useState=function(y){return ee.H.useState(y)},ae.useSyncExternalStore=function(y,U,G){return ee.H.useSyncExternalStore(y,U,G)},ae.useTransition=function(){return ee.H.useTransition()},ae.version="19.2.3",ae}var om;function iu(){return om||(om=1,$c.exports=sg()),$c.exports}var j=iu();const su=zm(j);var Wc={exports:{}},ti={},Fc={exports:{}},Ic={};var dm;function rg(){return dm||(dm=1,(function(c){function f(O,q){var I=O.length;O.push(q);e:for(;0<I;){var se=I-1>>>1,me=O[se];if(0<m(me,q))O[se]=q,O[I]=me,I=se;else break e}}function d(O){return O.length===0?null:O[0]}function u(O){if(O.length===0)return null;var q=O[0],I=O.pop();if(I!==q){O[0]=I;e:for(var se=0,me=O.length,y=me>>>1;se<y;){var U=2*(se+1)-1,G=O[U],Z=U+1,F=O[Z];if(0>m(G,I))Z<me&&0>m(F,G)?(O[se]=F,O[Z]=I,se=Z):(O[se]=G,O[U]=I,se=U);else if(Z<me&&0>m(F,I))O[se]=F,O[Z]=I,se=Z;else break e}}return q}function m(O,q){var I=O.sortIndex-q.sortIndex;return I!==0?I:O.id-q.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;c.unstable_now=function(){return h.now()}}else{var v=Date,A=v.now();c.unstable_now=function(){return v.now()-A}}var S=[],g=[],M=1,z=null,H=3,Q=!1,Y=!1,L=!1,k=!1,V=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function le(O){for(var q=d(g);q!==null;){if(q.callback===null)u(g);else if(q.startTime<=O)u(g),q.sortIndex=q.expirationTime,f(S,q);else break;q=d(g)}}function xe(O){if(L=!1,le(O),!Y)if(d(S)!==null)Y=!0,De||(De=!0,We());else{var q=d(g);q!==null&&ja(xe,q.startTime-O)}}var De=!1,ee=-1,Re=5,ze=-1;function ca(){return k?!0:!(c.unstable_now()-ze<Re)}function Ze(){if(k=!1,De){var O=c.unstable_now();ze=O;var q=!0;try{e:{Y=!1,L&&(L=!1,X(ee),ee=-1),Q=!0;var I=H;try{a:{for(le(O),z=d(S);z!==null&&!(z.expirationTime>O&&ca());){var se=z.callback;if(typeof se=="function"){z.callback=null,H=z.priorityLevel;var me=se(z.expirationTime<=O);if(O=c.unstable_now(),typeof me=="function"){z.callback=me,le(O),q=!0;break a}z===d(S)&&u(S),le(O)}else u(S);z=d(S)}if(z!==null)q=!0;else{var y=d(g);y!==null&&ja(xe,y.startTime-O),q=!1}}break e}finally{z=null,H=I,Q=!1}q=void 0}}finally{q?We():De=!1}}}var We;if(typeof B=="function")We=function(){B(Ze)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,Sa=Fe.port2;Fe.port1.onmessage=Ze,We=function(){Sa.postMessage(null)}}else We=function(){V(Ze,0)};function ja(O,q){ee=V(function(){O(c.unstable_now())},q)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(O){O.callback=null},c.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<O?Math.floor(1e3/O):5},c.unstable_getCurrentPriorityLevel=function(){return H},c.unstable_next=function(O){switch(H){case 1:case 2:case 3:var q=3;break;default:q=H}var I=H;H=q;try{return O()}finally{H=I}},c.unstable_requestPaint=function(){k=!0},c.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var I=H;H=O;try{return q()}finally{H=I}},c.unstable_scheduleCallback=function(O,q,I){var se=c.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,O){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=I+me,O={id:M++,callback:q,priorityLevel:O,startTime:I,expirationTime:me,sortIndex:-1},I>se?(O.sortIndex=I,f(g,O),d(S)===null&&O===d(g)&&(L?(X(ee),ee=-1):L=!0,ja(xe,I-se))):(O.sortIndex=me,f(S,O),Y||Q||(Y=!0,De||(De=!0,We()))),O},c.unstable_shouldYield=ca,c.unstable_wrapCallback=function(O){var q=H;return function(){var I=H;H=q;try{return O.apply(this,arguments)}finally{H=I}}}})(Ic)),Ic}var fm;function cg(){return fm||(fm=1,Fc.exports=rg()),Fc.exports}var Pc={exports:{}},ra={};var mm;function ug(){if(mm)return ra;mm=1;var c=iu();function f(S){var g="https://react.dev/errors/"+S;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)g+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+S+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(S,g,M){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:z==null?null:""+z,children:S,containerInfo:g,implementation:M}}var v=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(S,g){if(S==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ra.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ra.createPortal=function(S,g){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(f(299));return h(S,g,null,M)},ra.flushSync=function(S){var g=v.T,M=u.p;try{if(v.T=null,u.p=2,S)return S()}finally{v.T=g,u.p=M,u.d.f()}},ra.preconnect=function(S,g){typeof S=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(S,g))},ra.prefetchDNS=function(S){typeof S=="string"&&u.d.D(S)},ra.preinit=function(S,g){if(typeof S=="string"&&g&&typeof g.as=="string"){var M=g.as,z=A(M,g.crossOrigin),H=typeof g.integrity=="string"?g.integrity:void 0,Q=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;M==="style"?u.d.S(S,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:z,integrity:H,fetchPriority:Q}):M==="script"&&u.d.X(S,{crossOrigin:z,integrity:H,fetchPriority:Q,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ra.preinitModule=function(S,g){if(typeof S=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var M=A(g.as,g.crossOrigin);u.d.M(S,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(S)},ra.preload=function(S,g){if(typeof S=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var M=g.as,z=A(M,g.crossOrigin);u.d.L(S,M,{crossOrigin:z,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ra.preloadModule=function(S,g){if(typeof S=="string")if(g){var M=A(g.as,g.crossOrigin);u.d.m(S,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(S)},ra.requestFormReset=function(S){u.d.r(S)},ra.unstable_batchedUpdates=function(S,g){return S(g)},ra.useFormState=function(S,g,M){return v.H.useFormState(S,g,M)},ra.useFormStatus=function(){return v.H.useHostTransitionStatus()},ra.version="19.2.3",ra}var hm;function og(){if(hm)return Pc.exports;hm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),Pc.exports=ug(),Pc.exports}var pm;function dg(){if(pm)return ti;pm=1;var c=cg(),f=iu(),d=og();function u(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function v(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function A(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function S(e){if(h(e)!==e)throw Error(u(188))}function g(e){var a=e.alternate;if(!a){if(a=h(e),a===null)throw Error(u(188));return a!==e?null:e}for(var t=e,l=a;;){var n=t.return;if(n===null)break;var s=n.alternate;if(s===null){if(l=n.return,l!==null){t=l;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===t)return S(n),e;if(s===l)return S(n),a;s=s.sibling}throw Error(u(188))}if(t.return!==l.return)t=n,l=s;else{for(var r=!1,o=n.child;o;){if(o===t){r=!0,t=n,l=s;break}if(o===l){r=!0,l=n,t=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===t){r=!0,t=s,l=n;break}if(o===l){r=!0,l=s,t=n;break}o=o.sibling}if(!r)throw Error(u(189))}}if(t.alternate!==l)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:a}function M(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=M(e),a!==null)return a;e=e.sibling}return null}var z=Object.assign,H=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),B=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),ze=Symbol.for("react.activity"),ca=Symbol.for("react.memo_cache_sentinel"),Ze=Symbol.iterator;function We(e){return e===null||typeof e!="object"?null:(e=Ze&&e[Ze]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Symbol.for("react.client.reference");function Sa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case V:return"Profiler";case k:return"StrictMode";case xe:return"Suspense";case De:return"SuspenseList";case ze:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case B:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case le:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return a=e.displayName||null,a!==null?a:Sa(e.type)||"Memo";case Re:a=e._payload,e=e._init;try{return Sa(e(a))}catch{}}return null}var ja=Array.isArray,O=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},se=[],me=-1;function y(e){return{current:e}}function U(e){0>me||(e.current=se[me],se[me]=null,me--)}function G(e,a){me++,se[me]=e.current,e.current=a}var Z=y(null),F=y(null),te=y(null),he=y(null);function Je(e,a){switch(G(te,a),G(F,e),G(Z,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Mf(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Mf(a),e=Df(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(Z),G(Z,e)}function ye(){U(Z),U(F),U(te)}function Pa(e){e.memoizedState!==null&&G(he,e);var a=Z.current,t=Df(a,e.type);a!==t&&(G(F,e),G(Z,t))}function na(e){F.current===e&&(U(Z),U(F)),he.current===e&&(U(he),Fn._currentValue=I)}var et,ci;function Ja(e){if(et===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);et=a&&a[1]||"",ci=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+e+ci}var re=!1;function Be(e,a){if(!e||re)return"";re=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(C){var T=C}Reflect.construct(e,[],_)}else{try{_.call()}catch(C){T=C}e.call(_.prototype)}}else{try{throw Error()}catch(C){T=C}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(C){if(C&&T&&typeof C.stack=="string")return[C.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var p=r.split(`
`),w=o.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===w.length)for(l=p.length-1,n=w.length-1;1<=l&&0<=n&&p[l]!==w[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==w[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==w[n]){var D=`
`+p[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=n);break}}}finally{re=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Ja(t):""}function Ds(e,a){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return e.child!==a&&a!==null?Ja("Suspense Fallback"):Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return Be(e.type,!1);case 11:return Be(e.type.render,!1);case 1:return Be(e.type,!0);case 31:return Ja("Activity");default:return""}}function rn(e){try{var a="",t=null;do a+=Ds(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ae=Object.prototype.hasOwnProperty,ua=c.unstable_scheduleCallback,cn=c.unstable_cancelCallback,ui=c.unstable_shouldYield,Os=c.unstable_requestPaint,ia=c.unstable_now,Rs=c.unstable_getCurrentPriorityLevel,un=c.unstable_ImmediatePriority,on=c.unstable_UserBlockingPriority,$t=c.unstable_NormalPriority,oi=c.unstable_LowPriority,di=c.unstable_IdlePriority,_s=c.log,fi=c.unstable_setDisableYieldValue,Wt=null,oa=null;function Ka(e){if(typeof _s=="function"&&fi(e),oa&&typeof oa.setStrictMode=="function")try{oa.setStrictMode(Wt,e)}catch{}}var da=Math.clz32?Math.clz32:Bs,Us=Math.log,Hs=Math.LN2;function Bs(e){return e>>>=0,e===0?32:31-(Us(e)/Hs|0)|0}var gl=256,vl=262144,bl=4194304;function at(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xl(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var n=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~s,l!==0?n=at(l):(r&=o,r!==0?n=at(r):t||(t=o&~e,t!==0&&(n=at(t))))):(o=l&~s,o!==0?n=at(o):r!==0?n=at(r):t||(t=l&~e,t!==0&&(n=at(t)))),n===0?0:a!==0&&a!==n&&(a&s)===0&&(s=n&-n,t=a&-a,s>=t||s===32&&(t&4194048)!==0)?a:n}function Ft(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Ls(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yl(){var e=bl;return bl<<=1,(bl&62914560)===0&&(bl=4194304),e}function dn(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function b(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $(e,a,t,l,n,s){var r=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var o=e.entanglements,p=e.expirationTimes,w=e.hiddenUpdates;for(t=r&~t;0<t;){var D=31-da(t),_=1<<D;o[D]=0,p[D]=-1;var T=w[D];if(T!==null)for(w[D]=null,D=0;D<T.length;D++){var C=T[D];C!==null&&(C.lane&=-536870913)}t&=~_}l!==0&&Ie(e,l,0),s!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~a))}function Ie(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-da(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Le(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-da(t),n=1<<l;n&a|e[l]&a&&(e[l]|=a),t&=~n}}function ma(e,a){var t=a&-a;return t=(t&42)!==0?1:sa(t),(t&(e.suspendedLanes|a))!==0?0:t}function sa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function mu(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:em(e.type))}function hu(e,a){var t=q.p;try{return q.p=e,a()}finally{q.p=t}}var Et=Math.random().toString(36).slice(2),Pe="__reactFiber$"+Et,ha="__reactProps$"+Et,Sl="__reactContainer$"+Et,ks="__reactEvents$"+Et,Jm="__reactListeners$"+Et,Km="__reactHandles$"+Et,pu="__reactResources$"+Et,fn="__reactMarker$"+Et;function qs(e){delete e[Pe],delete e[ha],delete e[ks],delete e[Jm],delete e[Km]}function jl(e){var a=e[Pe];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Sl]||t[Pe]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Lf(e);e!==null;){if(t=e[Pe])return t;e=Lf(e)}return a}e=t,t=e.parentNode}return null}function Nl(e){if(e=e[Pe]||e[Sl]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function mn(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(u(33))}function El(e){var a=e[pu];return a||(a=e[pu]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ke(e){e[fn]=!0}var gu=new Set,vu={};function It(e,a){wl(e,a),wl(e+"Capture",a)}function wl(e,a){for(vu[e]=a,e=0;e<a.length;e++)gu.add(a[e])}var $m=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bu={},xu={};function Wm(e){return Ae.call(xu,e)?!0:Ae.call(bu,e)?!1:$m.test(e)?xu[e]=!0:(bu[e]=!0,!1)}function mi(e,a,t){if(Wm(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function hi(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function lt(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function Da(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yu(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Fm(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,s=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(r){t=""+r,s.call(this,r)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ys(e){if(!e._valueTracker){var a=yu(e)?"checked":"value";e._valueTracker=Fm(e,a,""+e[a])}}function Su(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=yu(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Im=/[\n"\\]/g;function Oa(e){return e.replace(Im,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Gs(e,a,t,l,n,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),a!=null?r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Da(a)):e.value!==""+Da(a)&&(e.value=""+Da(a)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),a!=null?Xs(e,r,Da(a)):t!=null?Xs(e,r,Da(t)):l!=null&&e.removeAttribute("value"),n==null&&s!=null&&(e.defaultChecked=!!s),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Da(o):e.removeAttribute("name")}function ju(e,a,t,l,n,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),a!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||a!=null)){Ys(e);return}t=t!=null?""+Da(t):"",a=a!=null?""+Da(a):t,o||a===e.value||(e.value=a),e.defaultValue=a}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Ys(e)}function Xs(e,a,t){a==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function zl(e,a,t,l){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Da(t),a=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function Nu(e,a,t){if(a!=null&&(a=""+Da(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Da(t):""}function Eu(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(u(92));if(ja(l)){if(1<l.length)throw Error(u(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=Da(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),Ys(e)}function Tl(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Pm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wu(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||Pm.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function zu(e,a,t){if(a!=null&&typeof a!="object")throw Error(u(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in a)l=a[n],a.hasOwnProperty(n)&&t[n]!==l&&wu(e,n,l)}else for(var s in a)a.hasOwnProperty(s)&&wu(e,s,a[s])}function Qs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ah=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(e){return ah.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nt(){}var Vs=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,Cl=null;function Tu(e){var a=Nl(e);if(a&&(e=a.stateNode)){var t=e[ha]||null;e:switch(e=a.stateNode,a.type){case"input":if(Gs(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Oa(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var n=l[ha]||null;if(!n)throw Error(u(90));Gs(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&Su(l)}break e;case"textarea":Nu(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&zl(e,!!t.multiple,a,!1)}}}var Js=!1;function Au(e,a,t){if(Js)return e(a,t);Js=!0;try{var l=e(a);return l}finally{if(Js=!1,(Al!==null||Cl!==null)&&(ls(),Al&&(a=Al,e=Cl,Cl=Al=null,Tu(a),e)))for(a=0;a<e.length;a++)Tu(e[a])}}function hn(e,a){var t=e.stateNode;if(t===null)return null;var l=t[ha]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,a,typeof t));return t}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ks=!1;if(it)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{Ks=!1}var wt=null,$s=null,vi=null;function Cu(){if(vi)return vi;var e,a=$s,t=a.length,l,n="value"in wt?wt.value:wt.textContent,s=n.length;for(e=0;e<t&&a[e]===n[e];e++);var r=t-e;for(l=1;l<=r&&a[t-l]===n[s-l];l++);return vi=n.slice(e,1<l?1-l:void 0)}function bi(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function Mu(){return!1}function pa(e){function a(t,l,n,s,r){this._reactName=t,this._targetInst=n,this.type=l,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xi:Mu,this.isPropagationStopped=Mu,this}return z(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),a}var Pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yi=pa(Pt),gn=z({},Pt,{view:0,detail:0}),th=pa(gn),Ws,Fs,vn,Si=z({},gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Ws=e.screenX-vn.screenX,Fs=e.screenY-vn.screenY):Fs=Ws=0,vn=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:Fs}}),Du=pa(Si),lh=z({},Si,{dataTransfer:0}),nh=pa(lh),ih=z({},gn,{relatedTarget:0}),Is=pa(ih),sh=z({},Pt,{animationName:0,elapsedTime:0,pseudoElement:0}),rh=pa(sh),ch=z({},Pt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uh=pa(ch),oh=z({},Pt,{data:0}),Ou=pa(oh),dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hh(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=mh[e])?!!a[e]:!1}function Ps(){return hh}var ph=z({},gn,{key:function(e){if(e.key){var a=dh[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gh=pa(ph),vh=z({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ru=pa(vh),bh=z({},gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),xh=pa(bh),yh=z({},Pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sh=pa(yh),jh=z({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nh=pa(jh),Eh=z({},Pt,{newState:0,oldState:0}),wh=pa(Eh),zh=[9,13,27,32],er=it&&"CompositionEvent"in window,bn=null;it&&"documentMode"in document&&(bn=document.documentMode);var Th=it&&"TextEvent"in window&&!bn,_u=it&&(!er||bn&&8<bn&&11>=bn),Uu=" ",Hu=!1;function Bu(e,a){switch(e){case"keyup":return zh.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ml=!1;function Ah(e,a){switch(e){case"compositionend":return Lu(a);case"keypress":return a.which!==32?null:(Hu=!0,Uu);case"textInput":return e=a.data,e===Uu&&Hu?null:e;default:return null}}function Ch(e,a){if(Ml)return e==="compositionend"||!er&&Bu(e,a)?(e=Cu(),vi=$s=wt=null,Ml=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return _u&&a.locale!=="ko"?null:a.data;default:return null}}var Mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Mh[e.type]:a==="textarea"}function qu(e,a,t,l){Al?Cl?Cl.push(l):Cl=[l]:Al=l,a=os(a,"onChange"),0<a.length&&(t=new yi("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var xn=null,yn=null;function Dh(e){Ef(e,0)}function ji(e){var a=mn(e);if(Su(a))return e}function Yu(e,a){if(e==="change")return a}var Gu=!1;if(it){var ar;if(it){var tr="oninput"in document;if(!tr){var Xu=document.createElement("div");Xu.setAttribute("oninput","return;"),tr=typeof Xu.oninput=="function"}ar=tr}else ar=!1;Gu=ar&&(!document.documentMode||9<document.documentMode)}function Qu(){xn&&(xn.detachEvent("onpropertychange",Vu),yn=xn=null)}function Vu(e){if(e.propertyName==="value"&&ji(yn)){var a=[];qu(a,yn,e,Zs(e)),Au(Dh,a)}}function Oh(e,a,t){e==="focusin"?(Qu(),xn=a,yn=t,xn.attachEvent("onpropertychange",Vu)):e==="focusout"&&Qu()}function Rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(yn)}function _h(e,a){if(e==="click")return ji(a)}function Uh(e,a){if(e==="input"||e==="change")return ji(a)}function Hh(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Na=typeof Object.is=="function"?Object.is:Hh;function Sn(e,a){if(Na(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var n=t[l];if(!Ae.call(a,n)||!Na(e[n],a[n]))return!1}return!0}function Zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ju(e,a){var t=Zu(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Zu(t)}}function Ku(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Ku(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function $u(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=pi(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=pi(e.document)}return a}function lr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Bh=it&&"documentMode"in document&&11>=document.documentMode,Dl=null,nr=null,jn=null,ir=!1;function Wu(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ir||Dl==null||Dl!==pi(l)||(l=Dl,"selectionStart"in l&&lr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jn&&Sn(jn,l)||(jn=l,l=os(nr,"onSelect"),0<l.length&&(a=new yi("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=Dl)))}function el(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var Ol={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionrun:el("Transition","TransitionRun"),transitionstart:el("Transition","TransitionStart"),transitioncancel:el("Transition","TransitionCancel"),transitionend:el("Transition","TransitionEnd")},sr={},Fu={};it&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete Ol.animationend.animation,delete Ol.animationiteration.animation,delete Ol.animationstart.animation),"TransitionEvent"in window||delete Ol.transitionend.transition);function al(e){if(sr[e])return sr[e];if(!Ol[e])return e;var a=Ol[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in Fu)return sr[e]=a[t];return e}var Iu=al("animationend"),Pu=al("animationiteration"),eo=al("animationstart"),Lh=al("transitionrun"),kh=al("transitionstart"),qh=al("transitioncancel"),ao=al("transitionend"),to=new Map,rr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rr.push("scrollEnd");function Qa(e,a){to.set(e,a),It(a,[e])}var Ni=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ra=[],Rl=0,cr=0;function Ei(){for(var e=Rl,a=cr=Rl=0;a<e;){var t=Ra[a];Ra[a++]=null;var l=Ra[a];Ra[a++]=null;var n=Ra[a];Ra[a++]=null;var s=Ra[a];if(Ra[a++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}s!==0&&lo(t,n,s)}}function wi(e,a,t,l){Ra[Rl++]=e,Ra[Rl++]=a,Ra[Rl++]=t,Ra[Rl++]=l,cr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ur(e,a,t,l){return wi(e,a,t,l),zi(e)}function tl(e,a){return wi(e,null,null,a),zi(e)}function lo(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var n=!1,s=e.return;s!==null;)s.childLanes|=t,l=s.alternate,l!==null&&(l.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(n=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,n&&a!==null&&(n=31-da(t),e=s.hiddenUpdates,l=e[n],l===null?e[n]=[a]:l.push(a),a.lane=t|536870912),s):null}function zi(e){if(50<Qn)throw Qn=0,bc=null,Error(u(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var _l={};function Yh(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ea(e,a,t,l){return new Yh(e,a,t,l)}function or(e){return e=e.prototype,!(!e||!e.isReactComponent)}function st(e,a){var t=e.alternate;return t===null?(t=Ea(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function no(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Ti(e,a,t,l,n,s){var r=0;if(l=e,typeof e=="function")or(e)&&(r=1);else if(typeof e=="string")r=Zp(e,t,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ze:return e=Ea(31,t,a,n),e.elementType=ze,e.lanes=s,e;case L:return ll(t.children,n,s,a);case k:r=8,n|=24;break;case V:return e=Ea(12,t,a,n|2),e.elementType=V,e.lanes=s,e;case xe:return e=Ea(13,t,a,n),e.elementType=xe,e.lanes=s,e;case De:return e=Ea(19,t,a,n),e.elementType=De,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:r=10;break e;case X:r=9;break e;case le:r=11;break e;case ee:r=14;break e;case Re:r=16,l=null;break e}r=29,t=Error(u(130,e===null?"null":typeof e,"")),l=null}return a=Ea(r,t,a,n),a.elementType=e,a.type=l,a.lanes=s,a}function ll(e,a,t,l){return e=Ea(7,e,l,a),e.lanes=t,e}function dr(e,a,t){return e=Ea(6,e,null,a),e.lanes=t,e}function io(e){var a=Ea(18,null,null,0);return a.stateNode=e,a}function fr(e,a,t){return a=Ea(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var so=new WeakMap;function _a(e,a){if(typeof e=="object"&&e!==null){var t=so.get(e);return t!==void 0?t:(a={value:e,source:a,stack:rn(a)},so.set(e,a),a)}return{value:e,source:a,stack:rn(a)}}var Ul=[],Hl=0,Ai=null,Nn=0,Ua=[],Ha=0,zt=null,$a=1,Wa="";function rt(e,a){Ul[Hl++]=Nn,Ul[Hl++]=Ai,Ai=e,Nn=a}function ro(e,a,t){Ua[Ha++]=$a,Ua[Ha++]=Wa,Ua[Ha++]=zt,zt=e;var l=$a;e=Wa;var n=32-da(l)-1;l&=~(1<<n),t+=1;var s=32-da(a)+n;if(30<s){var r=n-n%5;s=(l&(1<<r)-1).toString(32),l>>=r,n-=r,$a=1<<32-da(a)+n|t<<n|l,Wa=s+e}else $a=1<<s|t<<n|l,Wa=e}function mr(e){e.return!==null&&(rt(e,1),ro(e,1,0))}function hr(e){for(;e===Ai;)Ai=Ul[--Hl],Ul[Hl]=null,Nn=Ul[--Hl],Ul[Hl]=null;for(;e===zt;)zt=Ua[--Ha],Ua[Ha]=null,Wa=Ua[--Ha],Ua[Ha]=null,$a=Ua[--Ha],Ua[Ha]=null}function co(e,a){Ua[Ha++]=$a,Ua[Ha++]=Wa,Ua[Ha++]=zt,$a=a.id,Wa=a.overflow,zt=e}var ea=null,Ce=null,fe=!1,Tt=null,Ba=!1,pr=Error(u(519));function At(e){var a=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw En(_a(a,e)),pr}function uo(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[Pe]=e,a[ha]=l,t){case"dialog":ue("cancel",a),ue("close",a);break;case"iframe":case"object":case"embed":ue("load",a);break;case"video":case"audio":for(t=0;t<Zn.length;t++)ue(Zn[t],a);break;case"source":ue("error",a);break;case"img":case"image":case"link":ue("error",a),ue("load",a);break;case"details":ue("toggle",a);break;case"input":ue("invalid",a),ju(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ue("invalid",a);break;case"textarea":ue("invalid",a),Eu(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||Af(a.textContent,t)?(l.popover!=null&&(ue("beforetoggle",a),ue("toggle",a)),l.onScroll!=null&&ue("scroll",a),l.onScrollEnd!=null&&ue("scrollend",a),l.onClick!=null&&(a.onclick=nt),a=!0):a=!1,a||At(e,!0)}function oo(e){for(ea=e.return;ea;)switch(ea.tag){case 5:case 31:case 13:Ba=!1;return;case 27:case 3:Ba=!0;return;default:ea=ea.return}}function Bl(e){if(e!==ea)return!1;if(!fe)return oo(e),fe=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Rc(e.type,e.memoizedProps)),t=!t),t&&Ce&&At(e),oo(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ce=Bf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ce=Bf(e)}else a===27?(a=Ce,Gt(e.type)?(e=Lc,Lc=null,Ce=e):Ce=a):Ce=ea?ka(e.stateNode.nextSibling):null;return!0}function nl(){Ce=ea=null,fe=!1}function gr(){var e=Tt;return e!==null&&(xa===null?xa=e:xa.push.apply(xa,e),Tt=null),e}function En(e){Tt===null?Tt=[e]:Tt.push(e)}var vr=y(null),il=null,ct=null;function Ct(e,a,t){G(vr,a._currentValue),a._currentValue=t}function ut(e){e._currentValue=vr.current,U(vr)}function br(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function xr(e,a,t,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var s=n.dependencies;if(s!==null){var r=n.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=n;for(var p=0;p<a.length;p++)if(o.context===a[p]){s.lanes|=t,o=s.alternate,o!==null&&(o.lanes|=t),br(s.return,t,e),l||(r=null);break e}s=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(u(341));r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),br(r,t,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Ll(e,a,t,l){e=null;for(var n=a,s=!1;n!==null;){if(!s){if((n.flags&524288)!==0)s=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var o=n.type;Na(n.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(n===he.current){if(r=n.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Fn):e=[Fn])}n=n.return}e!==null&&xr(a,e,t,l),a.flags|=262144}function Ci(e){for(e=e.firstContext;e!==null;){if(!Na(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sl(e){il=e,ct=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return fo(il,e)}function Mi(e,a){return il===null&&sl(e),fo(e,a)}function fo(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},ct===null){if(e===null)throw Error(u(308));ct=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ct=ct.next=a;return t}var Gh=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Xh=c.unstable_scheduleCallback,Qh=c.unstable_NormalPriority,Ye={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yr(){return{controller:new Gh,data:new Map,refCount:0}}function wn(e){e.refCount--,e.refCount===0&&Xh(Qh,function(){e.controller.abort()})}var zn=null,Sr=0,kl=0,ql=null;function Vh(e,a){if(zn===null){var t=zn=[];Sr=0,kl=Ec(),ql={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Sr++,a.then(mo,mo),a}function mo(){if(--Sr===0&&zn!==null){ql!==null&&(ql.status="fulfilled");var e=zn;zn=null,kl=0,ql=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Zh(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(l.status="rejected",l.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),l}var ho=O.S;O.S=function(e,a){Fd=ia(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Vh(e,a),ho!==null&&ho(e,a)};var rl=y(null);function jr(){var e=rl.current;return e!==null?e:Te.pooledCache}function Di(e,a){a===null?G(rl,rl.current):G(rl,a.pool)}function po(){var e=jr();return e===null?null:{parent:Ye._currentValue,pool:e}}var Yl=Error(u(460)),Nr=Error(u(474)),Oi=Error(u(542)),Ri={then:function(){}};function go(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vo(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(nt,nt),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,xo(e),e;default:if(typeof a.status=="string")a.then(nt,nt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=l}},function(l){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,xo(e),e}throw ul=a,Yl}}function cl(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ul=t,Yl):t}}var ul=null;function bo(){if(ul===null)throw Error(u(459));var e=ul;return ul=null,e}function xo(e){if(e===Yl||e===Oi)throw Error(u(483))}var Gl=null,Tn=0;function _i(e){var a=Tn;return Tn+=1,Gl===null&&(Gl=[]),vo(Gl,e,a)}function An(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ui(e,a){throw a.$$typeof===H?Error(u(525)):(e=Object.prototype.toString.call(a),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function yo(e){function a(N,x){if(e){var E=N.deletions;E===null?(N.deletions=[x],N.flags|=16):E.push(x)}}function t(N,x){if(!e)return null;for(;x!==null;)a(N,x),x=x.sibling;return null}function l(N){for(var x=new Map;N!==null;)N.key!==null?x.set(N.key,N):x.set(N.index,N),N=N.sibling;return x}function n(N,x){return N=st(N,x),N.index=0,N.sibling=null,N}function s(N,x,E){return N.index=E,e?(E=N.alternate,E!==null?(E=E.index,E<x?(N.flags|=67108866,x):E):(N.flags|=67108866,x)):(N.flags|=1048576,x)}function r(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function o(N,x,E,R){return x===null||x.tag!==6?(x=dr(E,N.mode,R),x.return=N,x):(x=n(x,E),x.return=N,x)}function p(N,x,E,R){var W=E.type;return W===L?D(N,x,E.props.children,R,E.key):x!==null&&(x.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Re&&cl(W)===x.type)?(x=n(x,E.props),An(x,E),x.return=N,x):(x=Ti(E.type,E.key,E.props,null,N.mode,R),An(x,E),x.return=N,x)}function w(N,x,E,R){return x===null||x.tag!==4||x.stateNode.containerInfo!==E.containerInfo||x.stateNode.implementation!==E.implementation?(x=fr(E,N.mode,R),x.return=N,x):(x=n(x,E.children||[]),x.return=N,x)}function D(N,x,E,R,W){return x===null||x.tag!==7?(x=ll(E,N.mode,R,W),x.return=N,x):(x=n(x,E),x.return=N,x)}function _(N,x,E){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=dr(""+x,N.mode,E),x.return=N,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Q:return E=Ti(x.type,x.key,x.props,null,N.mode,E),An(E,x),E.return=N,E;case Y:return x=fr(x,N.mode,E),x.return=N,x;case Re:return x=cl(x),_(N,x,E)}if(ja(x)||We(x))return x=ll(x,N.mode,E,null),x.return=N,x;if(typeof x.then=="function")return _(N,_i(x),E);if(x.$$typeof===B)return _(N,Mi(N,x),E);Ui(N,x)}return null}function T(N,x,E,R){var W=x!==null?x.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return W!==null?null:o(N,x,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Q:return E.key===W?p(N,x,E,R):null;case Y:return E.key===W?w(N,x,E,R):null;case Re:return E=cl(E),T(N,x,E,R)}if(ja(E)||We(E))return W!==null?null:D(N,x,E,R,null);if(typeof E.then=="function")return T(N,x,_i(E),R);if(E.$$typeof===B)return T(N,x,Mi(N,E),R);Ui(N,E)}return null}function C(N,x,E,R,W){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return N=N.get(E)||null,o(x,N,""+R,W);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Q:return N=N.get(R.key===null?E:R.key)||null,p(x,N,R,W);case Y:return N=N.get(R.key===null?E:R.key)||null,w(x,N,R,W);case Re:return R=cl(R),C(N,x,E,R,W)}if(ja(R)||We(R))return N=N.get(E)||null,D(x,N,R,W,null);if(typeof R.then=="function")return C(N,x,E,_i(R),W);if(R.$$typeof===B)return C(N,x,E,Mi(x,R),W);Ui(x,R)}return null}function J(N,x,E,R){for(var W=null,pe=null,K=x,ie=x=0,de=null;K!==null&&ie<E.length;ie++){K.index>ie?(de=K,K=null):de=K.sibling;var ge=T(N,K,E[ie],R);if(ge===null){K===null&&(K=de);break}e&&K&&ge.alternate===null&&a(N,K),x=s(ge,x,ie),pe===null?W=ge:pe.sibling=ge,pe=ge,K=de}if(ie===E.length)return t(N,K),fe&&rt(N,ie),W;if(K===null){for(;ie<E.length;ie++)K=_(N,E[ie],R),K!==null&&(x=s(K,x,ie),pe===null?W=K:pe.sibling=K,pe=K);return fe&&rt(N,ie),W}for(K=l(K);ie<E.length;ie++)de=C(K,N,ie,E[ie],R),de!==null&&(e&&de.alternate!==null&&K.delete(de.key===null?ie:de.key),x=s(de,x,ie),pe===null?W=de:pe.sibling=de,pe=de);return e&&K.forEach(function(Jt){return a(N,Jt)}),fe&&rt(N,ie),W}function P(N,x,E,R){if(E==null)throw Error(u(151));for(var W=null,pe=null,K=x,ie=x=0,de=null,ge=E.next();K!==null&&!ge.done;ie++,ge=E.next()){K.index>ie?(de=K,K=null):de=K.sibling;var Jt=T(N,K,ge.value,R);if(Jt===null){K===null&&(K=de);break}e&&K&&Jt.alternate===null&&a(N,K),x=s(Jt,x,ie),pe===null?W=Jt:pe.sibling=Jt,pe=Jt,K=de}if(ge.done)return t(N,K),fe&&rt(N,ie),W;if(K===null){for(;!ge.done;ie++,ge=E.next())ge=_(N,ge.value,R),ge!==null&&(x=s(ge,x,ie),pe===null?W=ge:pe.sibling=ge,pe=ge);return fe&&rt(N,ie),W}for(K=l(K);!ge.done;ie++,ge=E.next())ge=C(K,N,ie,ge.value,R),ge!==null&&(e&&ge.alternate!==null&&K.delete(ge.key===null?ie:ge.key),x=s(ge,x,ie),pe===null?W=ge:pe.sibling=ge,pe=ge);return e&&K.forEach(function(lg){return a(N,lg)}),fe&&rt(N,ie),W}function we(N,x,E,R){if(typeof E=="object"&&E!==null&&E.type===L&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Q:e:{for(var W=E.key;x!==null;){if(x.key===W){if(W=E.type,W===L){if(x.tag===7){t(N,x.sibling),R=n(x,E.props.children),R.return=N,N=R;break e}}else if(x.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Re&&cl(W)===x.type){t(N,x.sibling),R=n(x,E.props),An(R,E),R.return=N,N=R;break e}t(N,x);break}else a(N,x);x=x.sibling}E.type===L?(R=ll(E.props.children,N.mode,R,E.key),R.return=N,N=R):(R=Ti(E.type,E.key,E.props,null,N.mode,R),An(R,E),R.return=N,N=R)}return r(N);case Y:e:{for(W=E.key;x!==null;){if(x.key===W)if(x.tag===4&&x.stateNode.containerInfo===E.containerInfo&&x.stateNode.implementation===E.implementation){t(N,x.sibling),R=n(x,E.children||[]),R.return=N,N=R;break e}else{t(N,x);break}else a(N,x);x=x.sibling}R=fr(E,N.mode,R),R.return=N,N=R}return r(N);case Re:return E=cl(E),we(N,x,E,R)}if(ja(E))return J(N,x,E,R);if(We(E)){if(W=We(E),typeof W!="function")throw Error(u(150));return E=W.call(E),P(N,x,E,R)}if(typeof E.then=="function")return we(N,x,_i(E),R);if(E.$$typeof===B)return we(N,x,Mi(N,E),R);Ui(N,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,x!==null&&x.tag===6?(t(N,x.sibling),R=n(x,E),R.return=N,N=R):(t(N,x),R=dr(E,N.mode,R),R.return=N,N=R),r(N)):t(N,x)}return function(N,x,E,R){try{Tn=0;var W=we(N,x,E,R);return Gl=null,W}catch(K){if(K===Yl||K===Oi)throw K;var pe=Ea(29,K,null,N.mode);return pe.lanes=R,pe.return=N,pe}}}var ol=yo(!0),So=yo(!1),Mt=!1;function Er(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ot(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ve&2)!==0){var n=l.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=zi(e),lo(e,null,t),a}return wi(e,l,a,t),zi(e)}function Cn(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Le(e,t)}}function zr(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var n=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?n=s=r:s=s.next=r,t=t.next}while(t!==null);s===null?n=s=a:s=s.next=a}else n=s=a;t={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Tr=!1;function Mn(){if(Tr){var e=ql;if(e!==null)throw e}}function Dn(e,a,t,l){Tr=!1;var n=e.updateQueue;Mt=!1;var s=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var p=o,w=p.next;p.next=null,r===null?s=w:r.next=w,r=p;var D=e.alternate;D!==null&&(D=D.updateQueue,o=D.lastBaseUpdate,o!==r&&(o===null?D.firstBaseUpdate=w:o.next=w,D.lastBaseUpdate=p))}if(s!==null){var _=n.baseState;r=0,D=w=p=null,o=s;do{var T=o.lane&-536870913,C=T!==o.lane;if(C?(oe&T)===T:(l&T)===T){T!==0&&T===kl&&(Tr=!0),D!==null&&(D=D.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var J=e,P=o;T=a;var we=t;switch(P.tag){case 1:if(J=P.payload,typeof J=="function"){_=J.call(we,_,T);break e}_=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=P.payload,T=typeof J=="function"?J.call(we,_,T):J,T==null)break e;_=z({},_,T);break e;case 2:Mt=!0}}T=o.callback,T!==null&&(e.flags|=64,C&&(e.flags|=8192),C=n.callbacks,C===null?n.callbacks=[T]:C.push(T))}else C={lane:T,tag:o.tag,payload:o.payload,callback:o.callback,next:null},D===null?(w=D=C,p=_):D=D.next=C,r|=T;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;C=o,o=C.next,C.next=null,n.lastBaseUpdate=C,n.shared.pending=null}}while(!0);D===null&&(p=_),n.baseState=p,n.firstBaseUpdate=w,n.lastBaseUpdate=D,s===null&&(n.shared.lanes=0),Bt|=r,e.lanes=r,e.memoizedState=_}}function jo(e,a){if(typeof e!="function")throw Error(u(191,e));e.call(a)}function No(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)jo(t[e],a)}var Xl=y(null),Hi=y(0);function Eo(e,a){e=bt,G(Hi,e),G(Xl,a),bt=e|a.baseLanes}function Ar(){G(Hi,bt),G(Xl,Xl.current)}function Cr(){bt=Hi.current,U(Xl),U(Hi)}var wa=y(null),La=null;function Rt(e){var a=e.alternate;G(ke,ke.current&1),G(wa,e),La===null&&(a===null||Xl.current!==null||a.memoizedState!==null)&&(La=e)}function Mr(e){G(ke,ke.current),G(wa,e),La===null&&(La=e)}function wo(e){e.tag===22?(G(ke,ke.current),G(wa,e),La===null&&(La=e)):_t()}function _t(){G(ke,ke.current),G(wa,wa.current)}function za(e){U(wa),La===e&&(La=null),U(ke)}var ke=y(0);function Bi(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Hc(t)||Bc(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ot=0,ne=null,Ne=null,Ge=null,Li=!1,Ql=!1,dl=!1,ki=0,On=0,Vl=null,Jh=0;function Ue(){throw Error(u(321))}function Dr(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!Na(e[t],a[t]))return!1;return!0}function Or(e,a,t,l,n,s){return ot=s,ne=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,O.H=e===null||e.memoizedState===null?cd:Jr,dl=!1,s=t(l,n),dl=!1,Ql&&(s=To(a,t,l,n)),zo(e),s}function zo(e){O.H=Un;var a=Ne!==null&&Ne.next!==null;if(ot=0,Ge=Ne=ne=null,Li=!1,On=0,Vl=null,a)throw Error(u(300));e===null||Xe||(e=e.dependencies,e!==null&&Ci(e)&&(Xe=!0))}function To(e,a,t,l){ne=e;var n=0;do{if(Ql&&(Vl=null),On=0,Ql=!1,25<=n)throw Error(u(301));if(n+=1,Ge=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}O.H=ud,s=a(t,l)}while(Ql);return s}function Kh(){var e=O.H,a=e.useState()[0];return a=typeof a.then=="function"?Rn(a):a,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ne.flags|=1024),a}function Rr(){var e=ki!==0;return ki=0,e}function _r(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Ur(e){if(Li){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Li=!1}ot=0,Ge=Ne=ne=null,Ql=!1,On=ki=0,Vl=null}function fa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?ne.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function qe(){if(Ne===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var a=Ge===null?ne.memoizedState:Ge.next;if(a!==null)Ge=a,Ne=e;else{if(e===null)throw ne.alternate===null?Error(u(467)):Error(u(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ge===null?ne.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function qi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rn(e){var a=On;return On+=1,Vl===null&&(Vl=[]),e=vo(Vl,e,a),a=ne,(Ge===null?a.memoizedState:Ge.next)===null&&(a=a.alternate,O.H=a===null||a.memoizedState===null?cd:Jr),e}function Yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Rn(e);if(e.$$typeof===B)return aa(e)}throw Error(u(438,String(e)))}function Hr(e){var a=null,t=ne.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=qi(),ne.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=ca;return a.index++,t}function dt(e,a){return typeof a=="function"?a(e):a}function Gi(e){var a=qe();return Br(a,Ne,e)}function Br(e,a,t){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=t;var n=e.baseQueue,s=l.pending;if(s!==null){if(n!==null){var r=n.next;n.next=s.next,s.next=r}a.baseQueue=n=s,l.pending=null}if(s=e.baseState,n===null)e.memoizedState=s;else{a=n.next;var o=r=null,p=null,w=a,D=!1;do{var _=w.lane&-536870913;if(_!==w.lane?(oe&_)===_:(ot&_)===_){var T=w.revertLane;if(T===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),_===kl&&(D=!0);else if((ot&T)===T){w=w.next,T===kl&&(D=!0);continue}else _={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(o=p=_,r=s):p=p.next=_,ne.lanes|=T,Bt|=T;_=w.action,dl&&t(s,_),s=w.hasEagerState?w.eagerState:t(s,_)}else T={lane:_,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(o=p=T,r=s):p=p.next=T,ne.lanes|=_,Bt|=_;w=w.next}while(w!==null&&w!==a);if(p===null?r=s:p.next=o,!Na(s,e.memoizedState)&&(Xe=!0,D&&(t=ql,t!==null)))throw t;e.memoizedState=s,e.baseState=r,e.baseQueue=p,l.lastRenderedState=s}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Lr(e){var a=qe(),t=a.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var l=t.dispatch,n=t.pending,s=a.memoizedState;if(n!==null){t.pending=null;var r=n=n.next;do s=e(s,r.action),r=r.next;while(r!==n);Na(s,a.memoizedState)||(Xe=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),t.lastRenderedState=s}return[s,l]}function Ao(e,a,t){var l=ne,n=qe(),s=fe;if(s){if(t===void 0)throw Error(u(407));t=t()}else t=a();var r=!Na((Ne||n).memoizedState,t);if(r&&(n.memoizedState=t,Xe=!0),n=n.queue,Yr(Do.bind(null,l,n,e),[e]),n.getSnapshot!==a||r||Ge!==null&&Ge.memoizedState.tag&1){if(l.flags|=2048,Zl(9,{destroy:void 0},Mo.bind(null,l,n,t,a),null),Te===null)throw Error(u(349));s||(ot&127)!==0||Co(l,a,t)}return t}function Co(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=ne.updateQueue,a===null?(a=qi(),ne.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Mo(e,a,t,l){a.value=t,a.getSnapshot=l,Oo(a)&&Ro(e)}function Do(e,a,t){return t(function(){Oo(a)&&Ro(e)})}function Oo(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!Na(e,t)}catch{return!0}}function Ro(e){var a=tl(e,2);a!==null&&ya(a,e,2)}function kr(e){var a=fa();if(typeof e=="function"){var t=e;if(e=t(),dl){Ka(!0);try{t()}finally{Ka(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dt,lastRenderedState:e},a}function _o(e,a,t,l){return e.baseState=t,Br(e,Ne,typeof l=="function"?l:dt)}function $h(e,a,t,l,n){if(Vi(e))throw Error(u(485));if(e=a.action,e!==null){var s={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};O.T!==null?t(!0):s.isTransition=!1,l(s),t=a.pending,t===null?(s.next=a.pending=s,Uo(a,s)):(s.next=t.next,a.pending=t.next=s)}}function Uo(e,a){var t=a.action,l=a.payload,n=e.state;if(a.isTransition){var s=O.T,r={};O.T=r;try{var o=t(n,l),p=O.S;p!==null&&p(r,o),Ho(e,a,o)}catch(w){qr(e,a,w)}finally{s!==null&&r.types!==null&&(s.types=r.types),O.T=s}}else try{s=t(n,l),Ho(e,a,s)}catch(w){qr(e,a,w)}}function Ho(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Bo(e,a,l)},function(l){return qr(e,a,l)}):Bo(e,a,t)}function Bo(e,a,t){a.status="fulfilled",a.value=t,Lo(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Uo(e,t)))}function qr(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,Lo(a),a=a.next;while(a!==l)}e.action=null}function Lo(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function ko(e,a){return a}function qo(e,a){if(fe){var t=Te.formState;if(t!==null){e:{var l=ne;if(fe){if(Ce){a:{for(var n=Ce,s=Ba;n.nodeType!==8;){if(!s){n=null;break a}if(n=ka(n.nextSibling),n===null){n=null;break a}}s=n.data,n=s==="F!"||s==="F"?n:null}if(n){Ce=ka(n.nextSibling),l=n.data==="F!";break e}}At(l)}l=!1}l&&(a=t[0])}}return t=fa(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:a},t.queue=l,t=id.bind(null,ne,l),l.dispatch=t,l=kr(!1),s=Zr.bind(null,ne,!1,l.queue),l=fa(),n={state:a,dispatch:null,action:e,pending:null},l.queue=n,t=$h.bind(null,ne,n,s,t),n.dispatch=t,l.memoizedState=e,[a,t,!1]}function Yo(e){var a=qe();return Go(a,Ne,e)}function Go(e,a,t){if(a=Br(e,a,ko)[0],e=Gi(dt)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Rn(a)}catch(r){throw r===Yl?Oi:r}else l=a;a=qe();var n=a.queue,s=n.dispatch;return t!==a.memoizedState&&(ne.flags|=2048,Zl(9,{destroy:void 0},Wh.bind(null,n,t),null)),[l,s,e]}function Wh(e,a){e.action=a}function Xo(e){var a=qe(),t=Ne;if(t!==null)return Go(a,t,e);qe(),a=a.memoizedState,t=qe();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function Zl(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=ne.updateQueue,a===null&&(a=qi(),ne.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function Qo(){return qe().memoizedState}function Xi(e,a,t,l){var n=fa();ne.flags|=e,n.memoizedState=Zl(1|a,{destroy:void 0},t,l===void 0?null:l)}function Qi(e,a,t,l){var n=qe();l=l===void 0?null:l;var s=n.memoizedState.inst;Ne!==null&&l!==null&&Dr(l,Ne.memoizedState.deps)?n.memoizedState=Zl(a,s,t,l):(ne.flags|=e,n.memoizedState=Zl(1|a,s,t,l))}function Vo(e,a){Xi(8390656,8,e,a)}function Yr(e,a){Qi(2048,8,e,a)}function Fh(e){ne.flags|=4;var a=ne.updateQueue;if(a===null)a=qi(),ne.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Zo(e){var a=qe().memoizedState;return Fh({ref:a,nextImpl:e}),function(){if((ve&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}function Jo(e,a){return Qi(4,2,e,a)}function Ko(e,a){return Qi(4,4,e,a)}function $o(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Wo(e,a,t){t=t!=null?t.concat([e]):null,Qi(4,4,$o.bind(null,a,e),t)}function Gr(){}function Fo(e,a){var t=qe();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&Dr(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function Io(e,a){var t=qe();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&Dr(a,l[1]))return l[0];if(l=e(),dl){Ka(!0);try{e()}finally{Ka(!1)}}return t.memoizedState=[l,a],l}function Xr(e,a,t){return t===void 0||(ot&1073741824)!==0&&(oe&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=Pd(),ne.lanes|=e,Bt|=e,t)}function Po(e,a,t,l){return Na(t,a)?t:Xl.current!==null?(e=Xr(e,t,l),Na(e,a)||(Xe=!0),e):(ot&42)===0||(ot&1073741824)!==0&&(oe&261930)===0?(Xe=!0,e.memoizedState=t):(e=Pd(),ne.lanes|=e,Bt|=e,a)}function ed(e,a,t,l,n){var s=q.p;q.p=s!==0&&8>s?s:8;var r=O.T,o={};O.T=o,Zr(e,!1,a,t);try{var p=n(),w=O.S;if(w!==null&&w(o,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var D=Zh(p,l);_n(e,a,D,Ca(e))}else _n(e,a,l,Ca(e))}catch(_){_n(e,a,{then:function(){},status:"rejected",reason:_},Ca())}finally{q.p=s,r!==null&&o.types!==null&&(r.types=o.types),O.T=r}}function Ih(){}function Qr(e,a,t,l){if(e.tag!==5)throw Error(u(476));var n=ad(e).queue;ed(e,n,a,I,t===null?Ih:function(){return td(e),t(l)})}function ad(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dt,lastRenderedState:I},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dt,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function td(e){var a=ad(e);a.next===null&&(a=e.alternate.memoizedState),_n(e,a.next.queue,{},Ca())}function Vr(){return aa(Fn)}function ld(){return qe().memoizedState}function nd(){return qe().memoizedState}function Ph(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Ca();e=Dt(t);var l=Ot(a,e,t);l!==null&&(ya(l,a,t),Cn(l,a,t)),a={cache:yr()},e.payload=a;return}a=a.return}}function ep(e,a,t){var l=Ca();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Vi(e)?sd(a,t):(t=ur(e,a,t,l),t!==null&&(ya(t,e,l),rd(t,a,l)))}function id(e,a,t){var l=Ca();_n(e,a,t,l)}function _n(e,a,t,l){var n={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Vi(e))sd(a,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var r=a.lastRenderedState,o=s(r,t);if(n.hasEagerState=!0,n.eagerState=o,Na(o,r))return wi(e,a,n,0),Te===null&&Ei(),!1}catch{}if(t=ur(e,a,n,l),t!==null)return ya(t,e,l),rd(t,a,l),!0}return!1}function Zr(e,a,t,l){if(l={lane:2,revertLane:Ec(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Vi(e)){if(a)throw Error(u(479))}else a=ur(e,t,l,2),a!==null&&ya(a,e,2)}function Vi(e){var a=e.alternate;return e===ne||a!==null&&a===ne}function sd(e,a){Ql=Li=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function rd(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Le(e,t)}}var Un={readContext:aa,use:Yi,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};Un.useEffectEvent=Ue;var cd={readContext:aa,use:Yi,useCallback:function(e,a){return fa().memoizedState=[e,a===void 0?null:a],e},useContext:aa,useEffect:Vo,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Xi(4194308,4,$o.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Xi(4194308,4,e,a)},useInsertionEffect:function(e,a){Xi(4,2,e,a)},useMemo:function(e,a){var t=fa();a=a===void 0?null:a;var l=e();if(dl){Ka(!0);try{e()}finally{Ka(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=fa();if(t!==void 0){var n=t(a);if(dl){Ka(!0);try{t(a)}finally{Ka(!1)}}}else n=a;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=ep.bind(null,ne,e),[l.memoizedState,e]},useRef:function(e){var a=fa();return e={current:e},a.memoizedState=e},useState:function(e){e=kr(e);var a=e.queue,t=id.bind(null,ne,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Gr,useDeferredValue:function(e,a){var t=fa();return Xr(t,e,a)},useTransition:function(){var e=kr(!1);return e=ed.bind(null,ne,e.queue,!0,!1),fa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=ne,n=fa();if(fe){if(t===void 0)throw Error(u(407));t=t()}else{if(t=a(),Te===null)throw Error(u(349));(oe&127)!==0||Co(l,a,t)}n.memoizedState=t;var s={value:t,getSnapshot:a};return n.queue=s,Vo(Do.bind(null,l,s,e),[e]),l.flags|=2048,Zl(9,{destroy:void 0},Mo.bind(null,l,s,t,a),null),t},useId:function(){var e=fa(),a=Te.identifierPrefix;if(fe){var t=Wa,l=$a;t=(l&~(1<<32-da(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=ki++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Jh++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Vr,useFormState:qo,useActionState:qo,useOptimistic:function(e){var a=fa();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Zr.bind(null,ne,!0,t),t.dispatch=a,[e,a]},useMemoCache:Hr,useCacheRefresh:function(){return fa().memoizedState=Ph.bind(null,ne)},useEffectEvent:function(e){var a=fa(),t={impl:e};return a.memoizedState=t,function(){if((ve&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},Jr={readContext:aa,use:Yi,useCallback:Fo,useContext:aa,useEffect:Yr,useImperativeHandle:Wo,useInsertionEffect:Jo,useLayoutEffect:Ko,useMemo:Io,useReducer:Gi,useRef:Qo,useState:function(){return Gi(dt)},useDebugValue:Gr,useDeferredValue:function(e,a){var t=qe();return Po(t,Ne.memoizedState,e,a)},useTransition:function(){var e=Gi(dt)[0],a=qe().memoizedState;return[typeof e=="boolean"?e:Rn(e),a]},useSyncExternalStore:Ao,useId:ld,useHostTransitionStatus:Vr,useFormState:Yo,useActionState:Yo,useOptimistic:function(e,a){var t=qe();return _o(t,Ne,e,a)},useMemoCache:Hr,useCacheRefresh:nd};Jr.useEffectEvent=Zo;var ud={readContext:aa,use:Yi,useCallback:Fo,useContext:aa,useEffect:Yr,useImperativeHandle:Wo,useInsertionEffect:Jo,useLayoutEffect:Ko,useMemo:Io,useReducer:Lr,useRef:Qo,useState:function(){return Lr(dt)},useDebugValue:Gr,useDeferredValue:function(e,a){var t=qe();return Ne===null?Xr(t,e,a):Po(t,Ne.memoizedState,e,a)},useTransition:function(){var e=Lr(dt)[0],a=qe().memoizedState;return[typeof e=="boolean"?e:Rn(e),a]},useSyncExternalStore:Ao,useId:ld,useHostTransitionStatus:Vr,useFormState:Xo,useActionState:Xo,useOptimistic:function(e,a){var t=qe();return Ne!==null?_o(t,Ne,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Hr,useCacheRefresh:nd};ud.useEffectEvent=Zo;function Kr(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:z({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var $r={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=Ca(),n=Dt(l);n.payload=a,t!=null&&(n.callback=t),a=Ot(e,n,l),a!==null&&(ya(a,e,l),Cn(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=Ca(),n=Dt(l);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=Ot(e,n,l),a!==null&&(ya(a,e,l),Cn(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Ca(),l=Dt(t);l.tag=2,a!=null&&(l.callback=a),a=Ot(e,l,t),a!==null&&(ya(a,e,t),Cn(a,e,t))}};function od(e,a,t,l,n,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,r):a.prototype&&a.prototype.isPureReactComponent?!Sn(t,l)||!Sn(n,s):!0}function dd(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&$r.enqueueReplaceState(a,a.state,null)}function fl(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=z({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}function fd(e){Ni(e)}function md(e){console.error(e)}function hd(e){Ni(e)}function Zi(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function pd(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Wr(e,a,t){return t=Dt(t),t.tag=3,t.payload={element:null},t.callback=function(){Zi(e,a)},t}function gd(e){return e=Dt(e),e.tag=3,e}function vd(e,a,t,l){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var s=l.value;e.payload=function(){return n(s)},e.callback=function(){pd(a,t,l)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){pd(a,t,l),typeof n!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function ap(e,a,t,l,n){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&Ll(a,t,n,!0),t=wa.current,t!==null){switch(t.tag){case 31:case 13:return La===null?ns():t.alternate===null&&He===0&&(He=3),t.flags&=-257,t.flags|=65536,t.lanes=n,l===Ri?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),Sc(e,l,n)),!1;case 22:return t.flags|=65536,l===Ri?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),Sc(e,l,n)),!1}throw Error(u(435,t.tag))}return Sc(e,l,n),ns(),!1}if(fe)return a=wa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==pr&&(e=Error(u(422),{cause:l}),En(_a(e,t)))):(l!==pr&&(a=Error(u(423),{cause:l}),En(_a(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=_a(l,t),n=Wr(e.stateNode,l,n),zr(e,n),He!==4&&(He=2)),!1;var s=Error(u(520),{cause:l});if(s=_a(s,t),Xn===null?Xn=[s]:Xn.push(s),He!==4&&(He=2),a===null)return!0;l=_a(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=Wr(t.stateNode,l,e),zr(t,e),!1;case 1:if(a=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Lt===null||!Lt.has(s))))return t.flags|=65536,n&=-n,t.lanes|=n,n=gd(n),vd(n,e,t,l),zr(t,n),!1}t=t.return}while(t!==null);return!1}var Fr=Error(u(461)),Xe=!1;function ta(e,a,t,l){a.child=e===null?So(a,null,t,l):ol(a,e.child,t,l)}function bd(e,a,t,l,n){t=t.render;var s=a.ref;if("ref"in l){var r={};for(var o in l)o!=="ref"&&(r[o]=l[o])}else r=l;return sl(a),l=Or(e,a,t,r,s,n),o=Rr(),e!==null&&!Xe?(_r(e,a,n),ft(e,a,n)):(fe&&o&&mr(a),a.flags|=1,ta(e,a,l,n),a.child)}function xd(e,a,t,l,n){if(e===null){var s=t.type;return typeof s=="function"&&!or(s)&&s.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=s,yd(e,a,s,l,n)):(e=Ti(t.type,null,l,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,!ic(e,n)){var r=s.memoizedProps;if(t=t.compare,t=t!==null?t:Sn,t(r,l)&&e.ref===a.ref)return ft(e,a,n)}return a.flags|=1,e=st(s,l),e.ref=a.ref,e.return=a,a.child=e}function yd(e,a,t,l,n){if(e!==null){var s=e.memoizedProps;if(Sn(s,l)&&e.ref===a.ref)if(Xe=!1,a.pendingProps=l=s,ic(e,n))(e.flags&131072)!==0&&(Xe=!0);else return a.lanes=e.lanes,ft(e,a,n)}return Ir(e,a,t,l,n)}function Sd(e,a,t,l){var n=l.children,s=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(l=a.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~s}else l=0,a.child=null;return jd(e,a,s,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(a,s!==null?s.cachePool:null),s!==null?Eo(a,s):Ar(),wo(a);else return l=a.lanes=536870912,jd(e,a,s!==null?s.baseLanes|t:t,t,l)}else s!==null?(Di(a,s.cachePool),Eo(a,s),_t(),a.memoizedState=null):(e!==null&&Di(a,null),Ar(),_t());return ta(e,a,n,t),a.child}function Hn(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function jd(e,a,t,l,n){var s=jr();return s=s===null?null:{parent:Ye._currentValue,pool:s},a.memoizedState={baseLanes:t,cachePool:s},e!==null&&Di(a,null),Ar(),wo(a),e!==null&&Ll(e,a,l,!0),a.childLanes=n,null}function Ji(e,a){return a=$i({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Nd(e,a,t){return ol(a,e.child,null,t),e=Ji(a,a.pendingProps),e.flags|=2,za(a),a.memoizedState=null,e}function tp(e,a,t){var l=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(fe){if(l.mode==="hidden")return e=Ji(a,l),a.lanes=536870912,Hn(null,e);if(Mr(a),(e=Ce)?(e=Hf(e,Ba),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:zt!==null?{id:$a,overflow:Wa}:null,retryLane:536870912,hydrationErrors:null},t=io(e),t.return=a,a.child=t,ea=a,Ce=null)):e=null,e===null)throw At(a);return a.lanes=536870912,null}return Ji(a,l)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Mr(a),n)if(a.flags&256)a.flags&=-257,a=Nd(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(u(558));else if(Xe||Ll(e,a,t,!1),n=(t&e.childLanes)!==0,Xe||n){if(l=Te,l!==null&&(r=ma(l,t),r!==0&&r!==s.retryLane))throw s.retryLane=r,tl(e,r),ya(l,e,r),Fr;ns(),a=Nd(e,a,t)}else e=s.treeContext,Ce=ka(r.nextSibling),ea=a,fe=!0,Tt=null,Ba=!1,e!==null&&co(a,e),a=Ji(a,l),a.flags|=4096;return a}return e=st(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Ki(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Ir(e,a,t,l,n){return sl(a),t=Or(e,a,t,l,void 0,n),l=Rr(),e!==null&&!Xe?(_r(e,a,n),ft(e,a,n)):(fe&&l&&mr(a),a.flags|=1,ta(e,a,t,n),a.child)}function Ed(e,a,t,l,n,s){return sl(a),a.updateQueue=null,t=To(a,l,t,n),zo(e),l=Rr(),e!==null&&!Xe?(_r(e,a,s),ft(e,a,s)):(fe&&l&&mr(a),a.flags|=1,ta(e,a,t,s),a.child)}function wd(e,a,t,l,n){if(sl(a),a.stateNode===null){var s=_l,r=t.contextType;typeof r=="object"&&r!==null&&(s=aa(r)),s=new t(l,s),a.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=$r,a.stateNode=s,s._reactInternals=a,s=a.stateNode,s.props=l,s.state=a.memoizedState,s.refs={},Er(a),r=t.contextType,s.context=typeof r=="object"&&r!==null?aa(r):_l,s.state=a.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Kr(a,t,r,l),s.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&$r.enqueueReplaceState(s,s.state,null),Dn(a,l,s,n),Mn(),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){s=a.stateNode;var o=a.memoizedProps,p=fl(t,o);s.props=p;var w=s.context,D=t.contextType;r=_l,typeof D=="object"&&D!==null&&(r=aa(D));var _=t.getDerivedStateFromProps;D=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,D||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||w!==r)&&dd(a,s,l,r),Mt=!1;var T=a.memoizedState;s.state=T,Dn(a,l,s,n),Mn(),w=a.memoizedState,o||T!==w||Mt?(typeof _=="function"&&(Kr(a,t,_,l),w=a.memoizedState),(p=Mt||od(a,t,p,l,T,w,r))?(D||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(a.flags|=4194308)):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=w),s.props=l,s.state=w,s.context=r,l=p):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{s=a.stateNode,wr(e,a),r=a.memoizedProps,D=fl(t,r),s.props=D,_=a.pendingProps,T=s.context,w=t.contextType,p=_l,typeof w=="object"&&w!==null&&(p=aa(w)),o=t.getDerivedStateFromProps,(w=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==_||T!==p)&&dd(a,s,l,p),Mt=!1,T=a.memoizedState,s.state=T,Dn(a,l,s,n),Mn();var C=a.memoizedState;r!==_||T!==C||Mt||e!==null&&e.dependencies!==null&&Ci(e.dependencies)?(typeof o=="function"&&(Kr(a,t,o,l),C=a.memoizedState),(D=Mt||od(a,t,D,l,T,C,p)||e!==null&&e.dependencies!==null&&Ci(e.dependencies))?(w||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,C,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,C,p)),typeof s.componentDidUpdate=="function"&&(a.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=C),s.props=l,s.state=C,s.context=p,l=D):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(a.flags|=1024),l=!1)}return s=l,Ki(e,a),l=(a.flags&128)!==0,s||l?(s=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:s.render(),a.flags|=1,e!==null&&l?(a.child=ol(a,e.child,null,n),a.child=ol(a,null,t,n)):ta(e,a,t,n),a.memoizedState=s.state,e=a.child):e=ft(e,a,n),e}function zd(e,a,t,l){return nl(),a.flags|=256,ta(e,a,t,l),a.child}var Pr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ec(e){return{baseLanes:e,cachePool:po()}}function ac(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Aa),e}function Td(e,a,t){var l=a.pendingProps,n=!1,s=(a.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),r&&(n=!0,a.flags&=-129),r=(a.flags&32)!==0,a.flags&=-33,e===null){if(fe){if(n?Rt(a):_t(),(e=Ce)?(e=Hf(e,Ba),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:zt!==null?{id:$a,overflow:Wa}:null,retryLane:536870912,hydrationErrors:null},t=io(e),t.return=a,a.child=t,ea=a,Ce=null)):e=null,e===null)throw At(a);return Bc(e)?a.lanes=32:a.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(_t(),n=a.mode,o=$i({mode:"hidden",children:o},n),l=ll(l,n,t,null),o.return=a,l.return=a,o.sibling=l,a.child=o,l=a.child,l.memoizedState=ec(t),l.childLanes=ac(e,r,t),a.memoizedState=Pr,Hn(null,l)):(Rt(a),tc(a,o))}var p=e.memoizedState;if(p!==null&&(o=p.dehydrated,o!==null)){if(s)a.flags&256?(Rt(a),a.flags&=-257,a=lc(e,a,t)):a.memoizedState!==null?(_t(),a.child=e.child,a.flags|=128,a=null):(_t(),o=l.fallback,n=a.mode,l=$i({mode:"visible",children:l.children},n),o=ll(o,n,t,null),o.flags|=2,l.return=a,o.return=a,l.sibling=o,a.child=l,ol(a,e.child,null,t),l=a.child,l.memoizedState=ec(t),l.childLanes=ac(e,r,t),a.memoizedState=Pr,a=Hn(null,l));else if(Rt(a),Bc(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var w=r.dgst;r=w,l=Error(u(419)),l.stack="",l.digest=r,En({value:l,source:null,stack:null}),a=lc(e,a,t)}else if(Xe||Ll(e,a,t,!1),r=(t&e.childLanes)!==0,Xe||r){if(r=Te,r!==null&&(l=ma(r,t),l!==0&&l!==p.retryLane))throw p.retryLane=l,tl(e,l),ya(r,e,l),Fr;Hc(o)||ns(),a=lc(e,a,t)}else Hc(o)?(a.flags|=192,a.child=e.child,a=null):(e=p.treeContext,Ce=ka(o.nextSibling),ea=a,fe=!0,Tt=null,Ba=!1,e!==null&&co(a,e),a=tc(a,l.children),a.flags|=4096);return a}return n?(_t(),o=l.fallback,n=a.mode,p=e.child,w=p.sibling,l=st(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,w!==null?o=st(w,o):(o=ll(o,n,t,null),o.flags|=2),o.return=a,l.return=a,l.sibling=o,a.child=l,Hn(null,l),l=a.child,o=e.child.memoizedState,o===null?o=ec(t):(n=o.cachePool,n!==null?(p=Ye._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=po(),o={baseLanes:o.baseLanes|t,cachePool:n}),l.memoizedState=o,l.childLanes=ac(e,r,t),a.memoizedState=Pr,Hn(e.child,l)):(Rt(a),t=e.child,e=t.sibling,t=st(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(r=a.deletions,r===null?(a.deletions=[e],a.flags|=16):r.push(e)),a.child=t,a.memoizedState=null,t)}function tc(e,a){return a=$i({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function $i(e,a){return e=Ea(22,e,null,a),e.lanes=0,e}function lc(e,a,t){return ol(a,e.child,null,t),e=tc(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Ad(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),br(e.return,a,t)}function nc(e,a,t,l,n,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:n,treeForkCount:s}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=t,r.tailMode=n,r.treeForkCount=s)}function Cd(e,a,t){var l=a.pendingProps,n=l.revealOrder,s=l.tail;l=l.children;var r=ke.current,o=(r&2)!==0;if(o?(r=r&1|2,a.flags|=128):r&=1,G(ke,r),ta(e,a,l,t),l=fe?Nn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ad(e,t,a);else if(e.tag===19)Ad(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(t=a.child,n=null;t!==null;)e=t.alternate,e!==null&&Bi(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),nc(a,!1,n,t,s,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&Bi(e)===null){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}nc(a,!0,t,null,s,l);break;case"together":nc(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function ft(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),Bt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(Ll(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(u(153));if(a.child!==null){for(e=a.child,t=st(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=st(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function ic(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Ci(e)))}function lp(e,a,t){switch(a.tag){case 3:Je(a,a.stateNode.containerInfo),Ct(a,Ye,e.memoizedState.cache),nl();break;case 27:case 5:Pa(a);break;case 4:Je(a,a.stateNode.containerInfo);break;case 10:Ct(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Mr(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Rt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Td(e,a,t):(Rt(a),e=ft(e,a,t),e!==null?e.sibling:null);Rt(a);break;case 19:var n=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(Ll(e,a,t,!1),l=(t&a.childLanes)!==0),n){if(l)return Cd(e,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),G(ke,ke.current),l)break;return null;case 22:return a.lanes=0,Sd(e,a,t,a.pendingProps);case 24:Ct(a,Ye,e.memoizedState.cache)}return ft(e,a,t)}function Md(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Xe=!0;else{if(!ic(e,t)&&(a.flags&128)===0)return Xe=!1,lp(e,a,t);Xe=(e.flags&131072)!==0}else Xe=!1,fe&&(a.flags&1048576)!==0&&ro(a,Nn,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=cl(a.elementType),a.type=e,typeof e=="function")or(e)?(l=fl(e,l),a.tag=1,a=wd(null,a,e,l,t)):(a.tag=0,a=Ir(null,a,e,l,t));else{if(e!=null){var n=e.$$typeof;if(n===le){a.tag=11,a=bd(null,a,e,l,t);break e}else if(n===ee){a.tag=14,a=xd(null,a,e,l,t);break e}}throw a=Sa(e)||e,Error(u(306,a,""))}}return a;case 0:return Ir(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,n=fl(l,a.pendingProps),wd(e,a,l,n,t);case 3:e:{if(Je(a,a.stateNode.containerInfo),e===null)throw Error(u(387));l=a.pendingProps;var s=a.memoizedState;n=s.element,wr(e,a),Dn(a,l,null,t);var r=a.memoizedState;if(l=r.cache,Ct(a,Ye,l),l!==s.cache&&xr(a,[Ye],t,!0),Mn(),l=r.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:r.cache},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){a=zd(e,a,l,t);break e}else if(l!==n){n=_a(Error(u(424)),a),En(n),a=zd(e,a,l,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=ka(e.firstChild),ea=a,fe=!0,Tt=null,Ba=!0,t=So(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nl(),l===n){a=ft(e,a,t);break e}ta(e,a,l,t)}a=a.child}return a;case 26:return Ki(e,a),e===null?(t=Gf(a.type,null,a.pendingProps,null))?a.memoizedState=t:fe||(t=a.type,e=a.pendingProps,l=ds(te.current).createElement(t),l[Pe]=a,l[ha]=e,la(l,t,e),Ke(l),a.stateNode=l):a.memoizedState=Gf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Pa(a),e===null&&fe&&(l=a.stateNode=kf(a.type,a.pendingProps,te.current),ea=a,Ba=!0,n=Ce,Gt(a.type)?(Lc=n,Ce=ka(l.firstChild)):Ce=n),ta(e,a,a.pendingProps.children,t),Ki(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&fe&&((n=l=Ce)&&(l=Rp(l,a.type,a.pendingProps,Ba),l!==null?(a.stateNode=l,ea=a,Ce=ka(l.firstChild),Ba=!1,n=!0):n=!1),n||At(a)),Pa(a),n=a.type,s=a.pendingProps,r=e!==null?e.memoizedProps:null,l=s.children,Rc(n,s)?l=null:r!==null&&Rc(n,r)&&(a.flags|=32),a.memoizedState!==null&&(n=Or(e,a,Kh,null,null,t),Fn._currentValue=n),Ki(e,a),ta(e,a,l,t),a.child;case 6:return e===null&&fe&&((e=t=Ce)&&(t=_p(t,a.pendingProps,Ba),t!==null?(a.stateNode=t,ea=a,Ce=null,e=!0):e=!1),e||At(a)),null;case 13:return Td(e,a,t);case 4:return Je(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=ol(a,null,l,t):ta(e,a,l,t),a.child;case 11:return bd(e,a,a.type,a.pendingProps,t);case 7:return ta(e,a,a.pendingProps,t),a.child;case 8:return ta(e,a,a.pendingProps.children,t),a.child;case 12:return ta(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,Ct(a,a.type,l.value),ta(e,a,l.children,t),a.child;case 9:return n=a.type._context,l=a.pendingProps.children,sl(a),n=aa(n),l=l(n),a.flags|=1,ta(e,a,l,t),a.child;case 14:return xd(e,a,a.type,a.pendingProps,t);case 15:return yd(e,a,a.type,a.pendingProps,t);case 19:return Cd(e,a,t);case 31:return tp(e,a,t);case 22:return Sd(e,a,t,a.pendingProps);case 24:return sl(a),l=aa(Ye),e===null?(n=jr(),n===null&&(n=Te,s=yr(),n.pooledCache=s,s.refCount++,s!==null&&(n.pooledCacheLanes|=t),n=s),a.memoizedState={parent:l,cache:n},Er(a),Ct(a,Ye,n)):((e.lanes&t)!==0&&(wr(e,a),Dn(a,null,null,t),Mn()),n=e.memoizedState,s=a.memoizedState,n.parent!==l?(n={parent:l,cache:l},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),Ct(a,Ye,l)):(l=s.cache,Ct(a,Ye,l),l!==n.cache&&xr(a,[Ye],t,!0))),ta(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(u(156,a.tag))}function mt(e){e.flags|=4}function sc(e,a,t,l,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(lf())e.flags|=8192;else throw ul=Ri,Nr}else e.flags&=-16777217}function Dd(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jf(a))if(lf())e.flags|=8192;else throw ul=Ri,Nr}function Wi(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?yl():536870912,e.lanes|=a,Wl|=a)}function Bn(e,a){if(!fe)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Me(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function np(e,a,t){var l=a.pendingProps;switch(hr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(a),null;case 1:return Me(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ut(Ye),ye(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Bl(a)?mt(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,gr())),Me(a),null;case 26:var n=a.type,s=a.memoizedState;return e===null?(mt(a),s!==null?(Me(a),Dd(a,s)):(Me(a),sc(a,n,null,l,t))):s?s!==e.memoizedState?(mt(a),Me(a),Dd(a,s)):(Me(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&mt(a),Me(a),sc(a,n,e,l,t)),null;case 27:if(na(a),t=te.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&mt(a);else{if(!l){if(a.stateNode===null)throw Error(u(166));return Me(a),null}e=Z.current,Bl(a)?uo(a):(e=kf(n,l,t),a.stateNode=e,mt(a))}return Me(a),null;case 5:if(na(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&mt(a);else{if(!l){if(a.stateNode===null)throw Error(u(166));return Me(a),null}if(s=Z.current,Bl(a))uo(a);else{var r=ds(te.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?r.createElement(n,{is:l.is}):r.createElement(n)}}s[Pe]=a,s[ha]=l;e:for(r=a.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}a.stateNode=s;e:switch(la(s,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&mt(a)}}return Me(a),sc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&mt(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(u(166));if(e=te.current,Bl(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,n=ea,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Pe]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Af(e.nodeValue,t)),e||At(a,!0)}else e=ds(e).createTextNode(l),e[Pe]=a,a.stateNode=e}return Me(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=Bl(a),t!==null){if(e===null){if(!l)throw Error(u(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Pe]=a}else nl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Me(a),e=!1}else t=gr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(za(a),a):(za(a),null);if((a.flags&128)!==0)throw Error(u(558))}return Me(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Bl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[Pe]=a}else nl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Me(a),n=!1}else n=gr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(za(a),a):(za(a),null)}return za(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==n&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Wi(a,a.updateQueue),Me(a),null);case 4:return ye(),e===null&&Ac(a.stateNode.containerInfo),Me(a),null;case 10:return ut(a.type),Me(a),null;case 19:if(U(ke),l=a.memoizedState,l===null)return Me(a),null;if(n=(a.flags&128)!==0,s=l.rendering,s===null)if(n)Bn(l,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(s=Bi(e),s!==null){for(a.flags|=128,Bn(l,!1),e=s.updateQueue,a.updateQueue=e,Wi(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)no(t,e),t=t.sibling;return G(ke,ke.current&1|2),fe&&rt(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&ia()>as&&(a.flags|=128,n=!0,Bn(l,!1),a.lanes=4194304)}else{if(!n)if(e=Bi(s),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,Wi(a,e),Bn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!fe)return Me(a),null}else 2*ia()-l.renderingStartTime>as&&t!==536870912&&(a.flags|=128,n=!0,Bn(l,!1),a.lanes=4194304);l.isBackwards?(s.sibling=a.child,a.child=s):(e=l.last,e!==null?e.sibling=s:a.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ia(),e.sibling=null,t=ke.current,G(ke,n?t&1|2:t&1),fe&&rt(a,l.treeForkCount),e):(Me(a),null);case 22:case 23:return za(a),Cr(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(Me(a),a.subtreeFlags&6&&(a.flags|=8192)):Me(a),t=a.updateQueue,t!==null&&Wi(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&U(rl),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),ut(Ye),Me(a),null;case 25:return null;case 30:return null}throw Error(u(156,a.tag))}function ip(e,a){switch(hr(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return ut(Ye),ye(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return na(a),null;case 31:if(a.memoizedState!==null){if(za(a),a.alternate===null)throw Error(u(340));nl()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(za(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(u(340));nl()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return U(ke),null;case 4:return ye(),null;case 10:return ut(a.type),null;case 22:case 23:return za(a),Cr(),e!==null&&U(rl),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return ut(Ye),null;case 25:return null;default:return null}}function Od(e,a){switch(hr(a),a.tag){case 3:ut(Ye),ye();break;case 26:case 27:case 5:na(a);break;case 4:ye();break;case 31:a.memoizedState!==null&&za(a);break;case 13:za(a);break;case 19:U(ke);break;case 10:ut(a.type);break;case 22:case 23:za(a),Cr(),e!==null&&U(rl);break;case 24:ut(Ye)}}function Ln(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var n=l.next;t=n;do{if((t.tag&e)===e){l=void 0;var s=t.create,r=t.inst;l=s(),r.destroy=l}t=t.next}while(t!==n)}}catch(o){je(a,a.return,o)}}function Ut(e,a,t){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var s=n.next;l=s;do{if((l.tag&e)===e){var r=l.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=a;var p=t,w=o;try{w()}catch(D){je(n,p,D)}}}l=l.next}while(l!==s)}}catch(D){je(a,a.return,D)}}function Rd(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{No(a,t)}catch(l){je(e,e.return,l)}}}function _d(e,a,t){t.props=fl(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){je(e,a,l)}}function kn(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(n){je(e,a,n)}}function Fa(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(n){je(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){je(e,a,n)}else t.current=null}function Ud(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(n){je(e,e.return,n)}}function rc(e,a,t){try{var l=e.stateNode;Tp(l,e.type,t,a),l[ha]=a}catch(n){je(e,e.return,n)}}function Hd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gt(e.type)||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uc(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=nt));else if(l!==4&&(l===27&&Gt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(uc(e,a,t),e=e.sibling;e!==null;)uc(e,a,t),e=e.sibling}function Fi(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&Gt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Fi(e,a,t),e=e.sibling;e!==null;)Fi(e,a,t),e=e.sibling}function Bd(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);la(a,l,t),a[Pe]=e,a[ha]=t}catch(s){je(e,e.return,s)}}var ht=!1,Qe=!1,oc=!1,Ld=typeof WeakSet=="function"?WeakSet:Set,$e=null;function sp(e,a){if(e=e.containerInfo,Dc=bs,e=$u(e),lr(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var n=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var r=0,o=-1,p=-1,w=0,D=0,_=e,T=null;a:for(;;){for(var C;_!==t||n!==0&&_.nodeType!==3||(o=r+n),_!==s||l!==0&&_.nodeType!==3||(p=r+l),_.nodeType===3&&(r+=_.nodeValue.length),(C=_.firstChild)!==null;)T=_,_=C;for(;;){if(_===e)break a;if(T===t&&++w===n&&(o=r),T===s&&++D===l&&(p=r),(C=_.nextSibling)!==null)break;_=T,T=_.parentNode}_=C}t=o===-1||p===-1?null:{start:o,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(Oc={focusedElem:e,selectionRange:t},bs=!1,$e=a;$e!==null;)if(a=$e,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,$e=e;else for(;$e!==null;){switch(a=$e,s=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)n=e[t],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=a,n=s.memoizedProps,s=s.memoizedState,l=t.stateNode;try{var J=fl(t.type,n);e=l.getSnapshotBeforeUpdate(J,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(P){je(t,t.return,P)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)Uc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=a.sibling,e!==null){e.return=a.return,$e=e;break}$e=a.return}}function kd(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:gt(e,t),l&4&&Ln(5,t);break;case 1:if(gt(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(r){je(t,t.return,r)}else{var n=fl(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(r){je(t,t.return,r)}}l&64&&Rd(t),l&512&&kn(t,t.return);break;case 3:if(gt(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{No(e,a)}catch(r){je(t,t.return,r)}}break;case 27:a===null&&l&4&&Bd(t);case 26:case 5:gt(e,t),a===null&&l&4&&Ud(t),l&512&&kn(t,t.return);break;case 12:gt(e,t);break;case 31:gt(e,t),l&4&&Gd(e,t);break;case 13:gt(e,t),l&4&&Xd(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=pp.bind(null,t),Up(e,t))));break;case 22:if(l=t.memoizedState!==null||ht,!l){a=a!==null&&a.memoizedState!==null||Qe,n=ht;var s=Qe;ht=l,(Qe=a)&&!s?vt(e,t,(t.subtreeFlags&8772)!==0):gt(e,t),ht=n,Qe=s}break;case 30:break;default:gt(e,t)}}function qd(e){var a=e.alternate;a!==null&&(e.alternate=null,qd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&qs(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,ga=!1;function pt(e,a,t){for(t=t.child;t!==null;)Yd(e,a,t),t=t.sibling}function Yd(e,a,t){if(oa&&typeof oa.onCommitFiberUnmount=="function")try{oa.onCommitFiberUnmount(Wt,t)}catch{}switch(t.tag){case 26:Qe||Fa(t,a),pt(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Qe||Fa(t,a);var l=Oe,n=ga;Gt(t.type)&&(Oe=t.stateNode,ga=!1),pt(e,a,t),Kn(t.stateNode),Oe=l,ga=n;break;case 5:Qe||Fa(t,a);case 6:if(l=Oe,n=ga,Oe=null,pt(e,a,t),Oe=l,ga=n,Oe!==null)if(ga)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(t.stateNode)}catch(s){je(t,a,s)}else try{Oe.removeChild(t.stateNode)}catch(s){je(t,a,s)}break;case 18:Oe!==null&&(ga?(e=Oe,_f(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),nn(e)):_f(Oe,t.stateNode));break;case 4:l=Oe,n=ga,Oe=t.stateNode.containerInfo,ga=!0,pt(e,a,t),Oe=l,ga=n;break;case 0:case 11:case 14:case 15:Ut(2,t,a),Qe||Ut(4,t,a),pt(e,a,t);break;case 1:Qe||(Fa(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&_d(t,a,l)),pt(e,a,t);break;case 21:pt(e,a,t);break;case 22:Qe=(l=Qe)||t.memoizedState!==null,pt(e,a,t),Qe=l;break;default:pt(e,a,t)}}function Gd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{nn(e)}catch(t){je(a,a.return,t)}}}function Xd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{nn(e)}catch(t){je(a,a.return,t)}}function rp(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Ld),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Ld),a;default:throw Error(u(435,e.tag))}}function Ii(e,a){var t=rp(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var n=gp.bind(null,e,l);l.then(n,n)}})}function va(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var n=t[l],s=e,r=a,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(Gt(o.type)){Oe=o.stateNode,ga=!1;break e}break;case 5:Oe=o.stateNode,ga=!1;break e;case 3:case 4:Oe=o.stateNode.containerInfo,ga=!0;break e}o=o.return}if(Oe===null)throw Error(u(160));Yd(s,r,n),Oe=null,ga=!1,s=n.alternate,s!==null&&(s.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Qd(a,e),a=a.sibling}var Va=null;function Qd(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:va(a,e),ba(e),l&4&&(Ut(3,e,e.return),Ln(3,e),Ut(5,e,e.return));break;case 1:va(a,e),ba(e),l&512&&(Qe||t===null||Fa(t,t.return)),l&64&&ht&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var n=Va;if(va(a,e),ba(e),l&512&&(Qe||t===null||Fa(t,t.return)),l&4){var s=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(l){case"title":s=n.getElementsByTagName("title")[0],(!s||s[fn]||s[Pe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=n.createElement(l),n.head.insertBefore(s,n.querySelector("head > title"))),la(s,l,t),s[Pe]=e,Ke(s),l=s;break e;case"link":var r=Vf("link","href",n).get(l+(t.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){r.splice(o,1);break a}}s=n.createElement(l),la(s,l,t),n.head.appendChild(s);break;case"meta":if(r=Vf("meta","content",n).get(l+(t.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){r.splice(o,1);break a}}s=n.createElement(l),la(s,l,t),n.head.appendChild(s);break;default:throw Error(u(468,l))}s[Pe]=e,Ke(s),l=s}e.stateNode=l}else Zf(n,e.type,e.stateNode);else e.stateNode=Qf(n,l,e.memoizedProps);else s!==l?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,l===null?Zf(n,e.type,e.stateNode):Qf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&rc(e,e.memoizedProps,t.memoizedProps)}break;case 27:va(a,e),ba(e),l&512&&(Qe||t===null||Fa(t,t.return)),t!==null&&l&4&&rc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(va(a,e),ba(e),l&512&&(Qe||t===null||Fa(t,t.return)),e.flags&32){n=e.stateNode;try{Tl(n,"")}catch(J){je(e,e.return,J)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,rc(e,n,t!==null?t.memoizedProps:n)),l&1024&&(oc=!0);break;case 6:if(va(a,e),ba(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(J){je(e,e.return,J)}}break;case 3:if(hs=null,n=Va,Va=fs(a.containerInfo),va(a,e),Va=n,ba(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{nn(a.containerInfo)}catch(J){je(e,e.return,J)}oc&&(oc=!1,Vd(e));break;case 4:l=Va,Va=fs(e.stateNode.containerInfo),va(a,e),ba(e),Va=l;break;case 12:va(a,e),ba(e);break;case 31:va(a,e),ba(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ii(e,l)));break;case 13:va(a,e),ba(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(es=ia()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ii(e,l)));break;case 22:n=e.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,w=ht,D=Qe;if(ht=w||n,Qe=D||p,va(a,e),Qe=D,ht=w,ba(e),l&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||p||ht||Qe||ml(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){p=t=a;try{if(s=p.stateNode,n)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=p.stateNode;var _=p.memoizedProps.style,T=_!=null&&_.hasOwnProperty("display")?_.display:null;o.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(J){je(p,p.return,J)}}}else if(a.tag===6){if(t===null){p=a;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(J){je(p,p.return,J)}}}else if(a.tag===18){if(t===null){p=a;try{var C=p.stateNode;n?Uf(C,!0):Uf(p.stateNode,!1)}catch(J){je(p,p.return,J)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Ii(e,t))));break;case 19:va(a,e),ba(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ii(e,l)));break;case 30:break;case 21:break;default:va(a,e),ba(e)}}function ba(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(Hd(l)){t=l;break}l=l.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var n=t.stateNode,s=cc(e);Fi(e,s,n);break;case 5:var r=t.stateNode;t.flags&32&&(Tl(r,""),t.flags&=-33);var o=cc(e);Fi(e,o,r);break;case 3:case 4:var p=t.stateNode.containerInfo,w=cc(e);uc(e,w,p);break;default:throw Error(u(161))}}catch(D){je(e,e.return,D)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Vd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Vd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function gt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)kd(e,a.alternate,a),a=a.sibling}function ml(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Ut(4,a,a.return),ml(a);break;case 1:Fa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&_d(a,a.return,t),ml(a);break;case 27:Kn(a.stateNode);case 26:case 5:Fa(a,a.return),ml(a);break;case 22:a.memoizedState===null&&ml(a);break;case 30:ml(a);break;default:ml(a)}e=e.sibling}}function vt(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,n=e,s=a,r=s.flags;switch(s.tag){case 0:case 11:case 15:vt(n,s,t),Ln(4,s);break;case 1:if(vt(n,s,t),l=s,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){je(l,l.return,w)}if(l=s,n=l.updateQueue,n!==null){var o=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)jo(p[n],o)}catch(w){je(l,l.return,w)}}t&&r&64&&Rd(s),kn(s,s.return);break;case 27:Bd(s);case 26:case 5:vt(n,s,t),t&&l===null&&r&4&&Ud(s),kn(s,s.return);break;case 12:vt(n,s,t);break;case 31:vt(n,s,t),t&&r&4&&Gd(n,s);break;case 13:vt(n,s,t),t&&r&4&&Xd(n,s);break;case 22:s.memoizedState===null&&vt(n,s,t),kn(s,s.return);break;case 30:break;default:vt(n,s,t)}a=a.sibling}}function dc(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&wn(t))}function fc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&wn(e))}function Za(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Zd(e,a,t,l),a=a.sibling}function Zd(e,a,t,l){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Za(e,a,t,l),n&2048&&Ln(9,a);break;case 1:Za(e,a,t,l);break;case 3:Za(e,a,t,l),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&wn(e)));break;case 12:if(n&2048){Za(e,a,t,l),e=a.stateNode;try{var s=a.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){je(a,a.return,p)}}else Za(e,a,t,l);break;case 31:Za(e,a,t,l);break;case 13:Za(e,a,t,l);break;case 23:break;case 22:s=a.stateNode,r=a.alternate,a.memoizedState!==null?s._visibility&2?Za(e,a,t,l):qn(e,a):s._visibility&2?Za(e,a,t,l):(s._visibility|=2,Jl(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),n&2048&&dc(r,a);break;case 24:Za(e,a,t,l),n&2048&&fc(a.alternate,a);break;default:Za(e,a,t,l)}}function Jl(e,a,t,l,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var s=e,r=a,o=t,p=l,w=r.flags;switch(r.tag){case 0:case 11:case 15:Jl(s,r,o,p,n),Ln(8,r);break;case 23:break;case 22:var D=r.stateNode;r.memoizedState!==null?D._visibility&2?Jl(s,r,o,p,n):qn(s,r):(D._visibility|=2,Jl(s,r,o,p,n)),n&&w&2048&&dc(r.alternate,r);break;case 24:Jl(s,r,o,p,n),n&&w&2048&&fc(r.alternate,r);break;default:Jl(s,r,o,p,n)}a=a.sibling}}function qn(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,n=l.flags;switch(l.tag){case 22:qn(t,l),n&2048&&dc(l.alternate,l);break;case 24:qn(t,l),n&2048&&fc(l.alternate,l);break;default:qn(t,l)}a=a.sibling}}var Yn=8192;function Kl(e,a,t){if(e.subtreeFlags&Yn)for(e=e.child;e!==null;)Jd(e,a,t),e=e.sibling}function Jd(e,a,t){switch(e.tag){case 26:Kl(e,a,t),e.flags&Yn&&e.memoizedState!==null&&Jp(t,Va,e.memoizedState,e.memoizedProps);break;case 5:Kl(e,a,t);break;case 3:case 4:var l=Va;Va=fs(e.stateNode.containerInfo),Kl(e,a,t),Va=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Yn,Yn=16777216,Kl(e,a,t),Yn=l):Kl(e,a,t));break;default:Kl(e,a,t)}}function Kd(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Gn(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];$e=l,Wd(l,e)}Kd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$d(e),e=e.sibling}function $d(e){switch(e.tag){case 0:case 11:case 15:Gn(e),e.flags&2048&&Ut(9,e,e.return);break;case 3:Gn(e);break;case 12:Gn(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Pi(e)):Gn(e);break;default:Gn(e)}}function Pi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];$e=l,Wd(l,e)}Kd(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Ut(8,a,a.return),Pi(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Pi(a));break;default:Pi(a)}e=e.sibling}}function Wd(e,a){for(;$e!==null;){var t=$e;switch(t.tag){case 0:case 11:case 15:Ut(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:wn(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,$e=l;else e:for(t=e;$e!==null;){l=$e;var n=l.sibling,s=l.return;if(qd(l),l===t){$e=null;break e}if(n!==null){n.return=s,$e=n;break e}$e=s}}}var cp={getCacheForType:function(e){var a=aa(Ye),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return aa(Ye).controller.signal}},up=typeof WeakMap=="function"?WeakMap:Map,ve=0,Te=null,ce=null,oe=0,Se=0,Ta=null,Ht=!1,$l=!1,mc=!1,bt=0,He=0,Bt=0,hl=0,hc=0,Aa=0,Wl=0,Xn=null,xa=null,pc=!1,es=0,Fd=0,as=1/0,ts=null,Lt=null,Ve=0,kt=null,Fl=null,xt=0,gc=0,vc=null,Id=null,Qn=0,bc=null;function Ca(){return(ve&2)!==0&&oe!==0?oe&-oe:O.T!==null?Ec():mu()}function Pd(){if(Aa===0)if((oe&536870912)===0||fe){var e=vl;vl<<=1,(vl&3932160)===0&&(vl=262144),Aa=e}else Aa=536870912;return e=wa.current,e!==null&&(e.flags|=32),Aa}function ya(e,a,t){(e===Te&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Il(e,0),qt(e,oe,Aa,!1)),b(e,t),((ve&2)===0||e!==Te)&&(e===Te&&((ve&2)===0&&(hl|=t),He===4&&qt(e,oe,Aa,!1)),Ia(e))}function ef(e,a,t){if((ve&6)!==0)throw Error(u(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Ft(e,a),n=l?fp(e,a):yc(e,a,!0),s=l;do{if(n===0){$l&&!l&&qt(e,a,0,!1);break}else{if(t=e.current.alternate,s&&!op(t)){n=yc(e,a,!1),s=!1;continue}if(n===2){if(s=a,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){a=r;e:{var o=e;n=Xn;var p=o.current.memoizedState.isDehydrated;if(p&&(Il(o,r).flags|=256),r=yc(o,r,!1),r!==2){if(mc&&!p){o.errorRecoveryDisabledLanes|=s,hl|=s,n=4;break e}s=xa,xa=n,s!==null&&(xa===null?xa=s:xa.push.apply(xa,s))}n=r}if(s=!1,n!==2)continue}}if(n===1){Il(e,0),qt(e,a,0,!0);break}e:{switch(l=e,s=n,s){case 0:case 1:throw Error(u(345));case 4:if((a&4194048)!==a)break;case 6:qt(l,a,Aa,!Ht);break e;case 2:xa=null;break;case 3:case 5:break;default:throw Error(u(329))}if((a&62914560)===a&&(n=es+300-ia(),10<n)){if(qt(l,a,Aa,!Ht),xl(l,0,!0)!==0)break e;xt=a,l.timeoutHandle=Of(af.bind(null,l,t,xa,ts,pc,a,Aa,hl,Wl,Ht,s,"Throttled",-0,0),n);break e}af(l,t,xa,ts,pc,a,Aa,hl,Wl,Ht,s,null,-0,0)}}break}while(!0);Ia(e)}function af(e,a,t,l,n,s,r,o,p,w,D,_,T,C){if(e.timeoutHandle=-1,_=a.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nt},Jd(a,s,_);var J=(s&62914560)===s?es-ia():(s&4194048)===s?Fd-ia():0;if(J=Kp(_,J),J!==null){xt=s,e.cancelPendingCommit=J(of.bind(null,e,a,s,t,l,n,r,o,p,D,_,null,T,C)),qt(e,s,r,!w);return}}of(e,a,s,t,l,n,r,o,p)}function op(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var n=t[l],s=n.getSnapshot;n=n.value;try{if(!Na(s(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function qt(e,a,t,l){a&=~hc,a&=~hl,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var n=a;0<n;){var s=31-da(n),r=1<<s;l[s]=-1,n&=~r}t!==0&&Ie(e,t,a)}function ls(){return(ve&6)===0?(Vn(0),!1):!0}function xc(){if(ce!==null){if(Se===0)var e=ce.return;else e=ce,ct=il=null,Ur(e),Gl=null,Tn=0,e=ce;for(;e!==null;)Od(e.alternate,e),e=e.return;ce=null}}function Il(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Mp(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),xt=0,xc(),Te=e,ce=t=st(e.current,null),oe=a,Se=0,Ta=null,Ht=!1,$l=Ft(e,a),mc=!1,Wl=Aa=hc=hl=Bt=He=0,xa=Xn=null,pc=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var n=31-da(l),s=1<<n;a|=e[n],l&=~s}return bt=a,Ei(),t}function tf(e,a){ne=null,O.H=Un,a===Yl||a===Oi?(a=bo(),Se=3):a===Nr?(a=bo(),Se=4):Se=a===Fr?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ta=a,ce===null&&(He=1,Zi(e,_a(a,e.current)))}function lf(){var e=wa.current;return e===null?!0:(oe&4194048)===oe?La===null:(oe&62914560)===oe||(oe&536870912)!==0?e===La:!1}function nf(){var e=O.H;return O.H=Un,e===null?Un:e}function sf(){var e=O.A;return O.A=cp,e}function ns(){He=4,Ht||(oe&4194048)!==oe&&wa.current!==null||($l=!0),(Bt&134217727)===0&&(hl&134217727)===0||Te===null||qt(Te,oe,Aa,!1)}function yc(e,a,t){var l=ve;ve|=2;var n=nf(),s=sf();(Te!==e||oe!==a)&&(ts=null,Il(e,a)),a=!1;var r=He;e:do try{if(Se!==0&&ce!==null){var o=ce,p=Ta;switch(Se){case 8:xc(),r=6;break e;case 3:case 2:case 9:case 6:wa.current===null&&(a=!0);var w=Se;if(Se=0,Ta=null,Pl(e,o,p,w),t&&$l){r=0;break e}break;default:w=Se,Se=0,Ta=null,Pl(e,o,p,w)}}dp(),r=He;break}catch(D){tf(e,D)}while(!0);return a&&e.shellSuspendCounter++,ct=il=null,ve=l,O.H=n,O.A=s,ce===null&&(Te=null,oe=0,Ei()),r}function dp(){for(;ce!==null;)rf(ce)}function fp(e,a){var t=ve;ve|=2;var l=nf(),n=sf();Te!==e||oe!==a?(ts=null,as=ia()+500,Il(e,a)):$l=Ft(e,a);e:do try{if(Se!==0&&ce!==null){a=ce;var s=Ta;a:switch(Se){case 1:Se=0,Ta=null,Pl(e,a,s,1);break;case 2:case 9:if(go(s)){Se=0,Ta=null,cf(a);break}a=function(){Se!==2&&Se!==9||Te!==e||(Se=7),Ia(e)},s.then(a,a);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:go(s)?(Se=0,Ta=null,cf(a)):(Se=0,Ta=null,Pl(e,a,s,7));break;case 5:var r=null;switch(ce.tag){case 26:r=ce.memoizedState;case 5:case 27:var o=ce;if(r?Jf(r):o.stateNode.complete){Se=0,Ta=null;var p=o.sibling;if(p!==null)ce=p;else{var w=o.return;w!==null?(ce=w,is(w)):ce=null}break a}}Se=0,Ta=null,Pl(e,a,s,5);break;case 6:Se=0,Ta=null,Pl(e,a,s,6);break;case 8:xc(),He=6;break e;default:throw Error(u(462))}}mp();break}catch(D){tf(e,D)}while(!0);return ct=il=null,O.H=l,O.A=n,ve=t,ce!==null?0:(Te=null,oe=0,Ei(),He)}function mp(){for(;ce!==null&&!ui();)rf(ce)}function rf(e){var a=Md(e.alternate,e,bt);e.memoizedProps=e.pendingProps,a===null?is(e):ce=a}function cf(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Ed(t,a,a.pendingProps,a.type,void 0,oe);break;case 11:a=Ed(t,a,a.pendingProps,a.type.render,a.ref,oe);break;case 5:Ur(a);default:Od(t,a),a=ce=no(a,bt),a=Md(t,a,bt)}e.memoizedProps=e.pendingProps,a===null?is(e):ce=a}function Pl(e,a,t,l){ct=il=null,Ur(a),Gl=null,Tn=0;var n=a.return;try{if(ap(e,n,a,t,oe)){He=1,Zi(e,_a(t,e.current)),ce=null;return}}catch(s){if(n!==null)throw ce=n,s;He=1,Zi(e,_a(t,e.current)),ce=null;return}a.flags&32768?(fe||l===1?e=!0:$l||(oe&536870912)!==0?e=!1:(Ht=e=!0,(l===2||l===9||l===3||l===6)&&(l=wa.current,l!==null&&l.tag===13&&(l.flags|=16384))),uf(a,e)):is(a)}function is(e){var a=e;do{if((a.flags&32768)!==0){uf(a,Ht);return}e=a.return;var t=np(a.alternate,a,bt);if(t!==null){ce=t;return}if(a=a.sibling,a!==null){ce=a;return}ce=a=e}while(a!==null);He===0&&(He=5)}function uf(e,a){do{var t=ip(e.alternate,e);if(t!==null){t.flags&=32767,ce=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ce=e;return}ce=e=t}while(e!==null);He=6,ce=null}function of(e,a,t,l,n,s,r,o,p){e.cancelPendingCommit=null;do ss();while(Ve!==0);if((ve&6)!==0)throw Error(u(327));if(a!==null){if(a===e.current)throw Error(u(177));if(s=a.lanes|a.childLanes,s|=cr,$(e,t,s,r,o,p),e===Te&&(ce=Te=null,oe=0),Fl=a,kt=e,xt=t,gc=s,vc=n,Id=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vp($t,function(){return pf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,n=q.p,q.p=2,r=ve,ve|=4;try{sp(e,a,t)}finally{ve=r,q.p=n,O.T=l}}Ve=1,df(),ff(),mf()}}function df(){if(Ve===1){Ve=0;var e=kt,a=Fl,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=O.T,O.T=null;var l=q.p;q.p=2;var n=ve;ve|=4;try{Qd(a,e);var s=Oc,r=$u(e.containerInfo),o=s.focusedElem,p=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Ku(o.ownerDocument.documentElement,o)){if(p!==null&&lr(o)){var w=p.start,D=p.end;if(D===void 0&&(D=w),"selectionStart"in o)o.selectionStart=w,o.selectionEnd=Math.min(D,o.value.length);else{var _=o.ownerDocument||document,T=_&&_.defaultView||window;if(T.getSelection){var C=T.getSelection(),J=o.textContent.length,P=Math.min(p.start,J),we=p.end===void 0?P:Math.min(p.end,J);!C.extend&&P>we&&(r=we,we=P,P=r);var N=Ju(o,P),x=Ju(o,we);if(N&&x&&(C.rangeCount!==1||C.anchorNode!==N.node||C.anchorOffset!==N.offset||C.focusNode!==x.node||C.focusOffset!==x.offset)){var E=_.createRange();E.setStart(N.node,N.offset),C.removeAllRanges(),P>we?(C.addRange(E),C.extend(x.node,x.offset)):(E.setEnd(x.node,x.offset),C.addRange(E))}}}}for(_=[],C=o;C=C.parentNode;)C.nodeType===1&&_.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<_.length;o++){var R=_[o];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}bs=!!Dc,Oc=Dc=null}finally{ve=n,q.p=l,O.T=t}}e.current=a,Ve=2}}function ff(){if(Ve===2){Ve=0;var e=kt,a=Fl,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=O.T,O.T=null;var l=q.p;q.p=2;var n=ve;ve|=4;try{kd(e,a.alternate,a)}finally{ve=n,q.p=l,O.T=t}}Ve=3}}function mf(){if(Ve===4||Ve===3){Ve=0,Os();var e=kt,a=Fl,t=xt,l=Id;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ve=5:(Ve=0,Fl=kt=null,hf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Lt=null),tt(t),a=a.stateNode,oa&&typeof oa.onCommitFiberRoot=="function")try{oa.onCommitFiberRoot(Wt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=O.T,n=q.p,q.p=2,O.T=null;try{for(var s=e.onRecoverableError,r=0;r<l.length;r++){var o=l[r];s(o.value,{componentStack:o.stack})}}finally{O.T=a,q.p=n}}(xt&3)!==0&&ss(),Ia(e),n=e.pendingLanes,(t&261930)!==0&&(n&42)!==0?e===bc?Qn++:(Qn=0,bc=e):Qn=0,Vn(0)}}function hf(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,wn(a)))}function ss(){return df(),ff(),mf(),pf()}function pf(){if(Ve!==5)return!1;var e=kt,a=gc;gc=0;var t=tt(xt),l=O.T,n=q.p;try{q.p=32>t?32:t,O.T=null,t=vc,vc=null;var s=kt,r=xt;if(Ve=0,Fl=kt=null,xt=0,(ve&6)!==0)throw Error(u(331));var o=ve;if(ve|=4,$d(s.current),Zd(s,s.current,r,t),ve=o,Vn(0,!1),oa&&typeof oa.onPostCommitFiberRoot=="function")try{oa.onPostCommitFiberRoot(Wt,s)}catch{}return!0}finally{q.p=n,O.T=l,hf(e,a)}}function gf(e,a,t){a=_a(t,a),a=Wr(e.stateNode,a,2),e=Ot(e,a,2),e!==null&&(b(e,2),Ia(e))}function je(e,a,t){if(e.tag===3)gf(e,e,t);else for(;a!==null;){if(a.tag===3){gf(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Lt===null||!Lt.has(l))){e=_a(t,e),t=gd(2),l=Ot(a,t,2),l!==null&&(vd(t,l,a,e),b(l,2),Ia(l));break}}a=a.return}}function Sc(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new up;var n=new Set;l.set(a,n)}else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));n.has(t)||(mc=!0,n.add(t),e=hp.bind(null,e,a,t),a.then(e,e))}function hp(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Te===e&&(oe&t)===t&&(He===4||He===3&&(oe&62914560)===oe&&300>ia()-es?(ve&2)===0&&Il(e,0):hc|=t,Wl===oe&&(Wl=0)),Ia(e)}function vf(e,a){a===0&&(a=yl()),e=tl(e,a),e!==null&&(b(e,a),Ia(e))}function pp(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),vf(e,t)}function gp(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(a),vf(e,t)}function vp(e,a){return ua(e,a)}var rs=null,en=null,jc=!1,cs=!1,Nc=!1,Yt=0;function Ia(e){e!==en&&e.next===null&&(en===null?rs=en=e:en=en.next=e),cs=!0,jc||(jc=!0,xp())}function Vn(e,a){if(!Nc&&cs){Nc=!0;do for(var t=!1,l=rs;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var s=0;else{var r=l.suspendedLanes,o=l.pingedLanes;s=(1<<31-da(42|e)+1)-1,s&=n&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,Sf(l,s))}else s=oe,s=xl(l,l===Te?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||Ft(l,s)||(t=!0,Sf(l,s));l=l.next}while(t);Nc=!1}}function bp(){bf()}function bf(){cs=jc=!1;var e=0;Yt!==0&&Cp()&&(e=Yt);for(var a=ia(),t=null,l=rs;l!==null;){var n=l.next,s=xf(l,a);s===0?(l.next=null,t===null?rs=n:t.next=n,n===null&&(en=t)):(t=l,(e!==0||(s&3)!==0)&&(cs=!0)),l=n}Ve!==0&&Ve!==5||Vn(e),Yt!==0&&(Yt=0)}function xf(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-da(s),o=1<<r,p=n[r];p===-1?((o&t)===0||(o&l)!==0)&&(n[r]=Ls(o,a)):p<=a&&(e.expiredLanes|=o),s&=~o}if(a=Te,t=oe,t=xl(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&cn(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ft(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&cn(l),tt(t)){case 2:case 8:t=on;break;case 32:t=$t;break;case 268435456:t=di;break;default:t=$t}return l=yf.bind(null,e),t=ua(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&cn(l),e.callbackPriority=2,e.callbackNode=null,2}function yf(e,a){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(ss()&&e.callbackNode!==t)return null;var l=oe;return l=xl(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ef(e,l,a),xf(e,ia()),e.callbackNode!=null&&e.callbackNode===t?yf.bind(null,e):null)}function Sf(e,a){if(ss())return null;ef(e,a,!0)}function xp(){Dp(function(){(ve&6)!==0?ua(un,bp):bf()})}function Ec(){if(Yt===0){var e=kl;e===0&&(e=gl,gl<<=1,(gl&261888)===0&&(gl=256)),Yt=e}return Yt}function jf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gi(""+e)}function Nf(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function yp(e,a,t,l,n){if(a==="submit"&&t&&t.stateNode===n){var s=jf((n[ha]||null).action),r=l.submitter;r&&(a=(a=r[ha]||null)?jf(a.formAction):r.getAttribute("formAction"),a!==null&&(s=a,r=null));var o=new yi("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Yt!==0){var p=r?Nf(n,r):new FormData(n);Qr(t,{pending:!0,data:p,method:n.method,action:s},null,p)}}else typeof s=="function"&&(o.preventDefault(),p=r?Nf(n,r):new FormData(n),Qr(t,{pending:!0,data:p,method:n.method,action:s},s,p))},currentTarget:n}]})}}for(var wc=0;wc<rr.length;wc++){var zc=rr[wc],Sp=zc.toLowerCase(),jp=zc[0].toUpperCase()+zc.slice(1);Qa(Sp,"on"+jp)}Qa(Iu,"onAnimationEnd"),Qa(Pu,"onAnimationIteration"),Qa(eo,"onAnimationStart"),Qa("dblclick","onDoubleClick"),Qa("focusin","onFocus"),Qa("focusout","onBlur"),Qa(Lh,"onTransitionRun"),Qa(kh,"onTransitionStart"),Qa(qh,"onTransitionCancel"),Qa(ao,"onTransitionEnd"),wl("onMouseEnter",["mouseout","mouseover"]),wl("onMouseLeave",["mouseout","mouseover"]),wl("onPointerEnter",["pointerout","pointerover"]),wl("onPointerLeave",["pointerout","pointerover"]),It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),It("onBeforeInput",["compositionend","keypress","textInput","paste"]),It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Np=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zn));function Ef(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],n=l.event;l=l.listeners;e:{var s=void 0;if(a)for(var r=l.length-1;0<=r;r--){var o=l[r],p=o.instance,w=o.currentTarget;if(o=o.listener,p!==s&&n.isPropagationStopped())break e;s=o,n.currentTarget=w;try{s(n)}catch(D){Ni(D)}n.currentTarget=null,s=p}else for(r=0;r<l.length;r++){if(o=l[r],p=o.instance,w=o.currentTarget,o=o.listener,p!==s&&n.isPropagationStopped())break e;s=o,n.currentTarget=w;try{s(n)}catch(D){Ni(D)}n.currentTarget=null,s=p}}}}function ue(e,a){var t=a[ks];t===void 0&&(t=a[ks]=new Set);var l=e+"__bubble";t.has(l)||(wf(a,e,2,!1),t.add(l))}function Tc(e,a,t){var l=0;a&&(l|=4),wf(t,e,l,a)}var us="_reactListening"+Math.random().toString(36).slice(2);function Ac(e){if(!e[us]){e[us]=!0,gu.forEach(function(t){t!=="selectionchange"&&(Np.has(t)||Tc(t,!1,e),Tc(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[us]||(a[us]=!0,Tc("selectionchange",!1,a))}}function wf(e,a,t,l){switch(em(a)){case 2:var n=Fp;break;case 8:n=Ip;break;default:n=Xc}t=n.bind(null,a,t,e),n=void 0,!Ks||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function Cc(e,a,t,l,n){var s=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var o=l.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=l.return;r!==null;){var p=r.tag;if((p===3||p===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=jl(o),r===null)return;if(p=r.tag,p===5||p===6||p===26||p===27){l=s=r;continue e}o=o.parentNode}}l=l.return}Au(function(){var w=s,D=Zs(t),_=[];e:{var T=to.get(e);if(T!==void 0){var C=yi,J=e;switch(e){case"keypress":if(bi(t)===0)break e;case"keydown":case"keyup":C=gh;break;case"focusin":J="focus",C=Is;break;case"focusout":J="blur",C=Is;break;case"beforeblur":case"afterblur":C=Is;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=xh;break;case Iu:case Pu:case eo:C=rh;break;case ao:C=Sh;break;case"scroll":case"scrollend":C=th;break;case"wheel":C=Nh;break;case"copy":case"cut":case"paste":C=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ru;break;case"toggle":case"beforetoggle":C=wh}var P=(a&4)!==0,we=!P&&(e==="scroll"||e==="scrollend"),N=P?T!==null?T+"Capture":null:T;P=[];for(var x=w,E;x!==null;){var R=x;if(E=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||E===null||N===null||(R=hn(x,N),R!=null&&P.push(Jn(x,R,E))),we)break;x=x.return}0<P.length&&(T=new C(T,J,null,t,D),_.push({event:T,listeners:P}))}}if((a&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",T&&t!==Vs&&(J=t.relatedTarget||t.fromElement)&&(jl(J)||J[Sl]))break e;if((C||T)&&(T=D.window===D?D:(T=D.ownerDocument)?T.defaultView||T.parentWindow:window,C?(J=t.relatedTarget||t.toElement,C=w,J=J?jl(J):null,J!==null&&(we=h(J),P=J.tag,J!==we||P!==5&&P!==27&&P!==6)&&(J=null)):(C=null,J=w),C!==J)){if(P=Du,R="onMouseLeave",N="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(P=Ru,R="onPointerLeave",N="onPointerEnter",x="pointer"),we=C==null?T:mn(C),E=J==null?T:mn(J),T=new P(R,x+"leave",C,t,D),T.target=we,T.relatedTarget=E,R=null,jl(D)===w&&(P=new P(N,x+"enter",J,t,D),P.target=E,P.relatedTarget=we,R=P),we=R,C&&J)a:{for(P=Ep,N=C,x=J,E=0,R=N;R;R=P(R))E++;R=0;for(var W=x;W;W=P(W))R++;for(;0<E-R;)N=P(N),E--;for(;0<R-E;)x=P(x),R--;for(;E--;){if(N===x||x!==null&&N===x.alternate){P=N;break a}N=P(N),x=P(x)}P=null}else P=null;C!==null&&zf(_,T,C,P,!1),J!==null&&we!==null&&zf(_,we,J,P,!0)}}e:{if(T=w?mn(w):window,C=T.nodeName&&T.nodeName.toLowerCase(),C==="select"||C==="input"&&T.type==="file")var pe=Yu;else if(ku(T))if(Gu)pe=Uh;else{pe=Rh;var K=Oh}else C=T.nodeName,!C||C.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?w&&Qs(w.elementType)&&(pe=Yu):pe=_h;if(pe&&(pe=pe(e,w))){qu(_,pe,t,D);break e}K&&K(e,T,w),e==="focusout"&&w&&T.type==="number"&&w.memoizedProps.value!=null&&Xs(T,"number",T.value)}switch(K=w?mn(w):window,e){case"focusin":(ku(K)||K.contentEditable==="true")&&(Dl=K,nr=w,jn=null);break;case"focusout":jn=nr=Dl=null;break;case"mousedown":ir=!0;break;case"contextmenu":case"mouseup":case"dragend":ir=!1,Wu(_,t,D);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":Wu(_,t,D)}var ie;if(er)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Ml?Bu(e,t)&&(de="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(de="onCompositionStart");de&&(_u&&t.locale!=="ko"&&(Ml||de!=="onCompositionStart"?de==="onCompositionEnd"&&Ml&&(ie=Cu()):(wt=D,$s="value"in wt?wt.value:wt.textContent,Ml=!0)),K=os(w,de),0<K.length&&(de=new Ou(de,e,null,t,D),_.push({event:de,listeners:K}),ie?de.data=ie:(ie=Lu(t),ie!==null&&(de.data=ie)))),(ie=Th?Ah(e,t):Ch(e,t))&&(de=os(w,"onBeforeInput"),0<de.length&&(K=new Ou("onBeforeInput","beforeinput",null,t,D),_.push({event:K,listeners:de}),K.data=ie)),yp(_,e,w,t,D)}Ef(_,a)})}function Jn(e,a,t){return{instance:e,listener:a,currentTarget:t}}function os(e,a){for(var t=a+"Capture",l=[];e!==null;){var n=e,s=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||s===null||(n=hn(e,t),n!=null&&l.unshift(Jn(e,n,s)),n=hn(e,a),n!=null&&l.push(Jn(e,n,s))),e.tag===3)return l;e=e.return}return[]}function Ep(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zf(e,a,t,l,n){for(var s=a._reactName,r=[];t!==null&&t!==l;){var o=t,p=o.alternate,w=o.stateNode;if(o=o.tag,p!==null&&p===l)break;o!==5&&o!==26&&o!==27||w===null||(p=w,n?(w=hn(t,s),w!=null&&r.unshift(Jn(t,w,p))):n||(w=hn(t,s),w!=null&&r.push(Jn(t,w,p)))),t=t.return}r.length!==0&&e.push({event:a,listeners:r})}var wp=/\r\n?/g,zp=/\u0000|\uFFFD/g;function Tf(e){return(typeof e=="string"?e:""+e).replace(wp,`
`).replace(zp,"")}function Af(e,a){return a=Tf(a),Tf(e)===a}function Ee(e,a,t,l,n,s){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Tl(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Tl(e,""+l);break;case"className":hi(e,"class",l);break;case"tabIndex":hi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":hi(e,t,l);break;case"style":zu(e,l,s);break;case"data":if(a!=="object"){hi(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=gi(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(a!=="input"&&Ee(e,a,"name",n.name,n,null),Ee(e,a,"formEncType",n.formEncType,n,null),Ee(e,a,"formMethod",n.formMethod,n,null),Ee(e,a,"formTarget",n.formTarget,n,null)):(Ee(e,a,"encType",n.encType,n,null),Ee(e,a,"method",n.method,n,null),Ee(e,a,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=gi(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=nt);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=gi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":ue("beforetoggle",e),ue("toggle",e),mi(e,"popover",l);break;case"xlinkActuate":lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":lt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":lt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":lt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":lt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=eh.get(t)||t,mi(e,t,l))}}function Mc(e,a,t,l,n,s){switch(t){case"style":zu(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof l=="string"?Tl(e,l):(typeof l=="number"||typeof l=="bigint")&&Tl(e,""+l);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"onClick":l!=null&&(e.onclick=nt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vu.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),s=e[ha]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(a,s,n),typeof l=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,n);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):mi(e,t,l)}}}function la(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var l=!1,n=!1,s;for(s in t)if(t.hasOwnProperty(s)){var r=t[s];if(r!=null)switch(s){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Ee(e,a,s,r,t,null)}}n&&Ee(e,a,"srcSet",t.srcSet,t,null),l&&Ee(e,a,"src",t.src,t,null);return;case"input":ue("invalid",e);var o=s=r=n=null,p=null,w=null;for(l in t)if(t.hasOwnProperty(l)){var D=t[l];if(D!=null)switch(l){case"name":n=D;break;case"type":r=D;break;case"checked":p=D;break;case"defaultChecked":w=D;break;case"value":s=D;break;case"defaultValue":o=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,a));break;default:Ee(e,a,l,D,t,null)}}ju(e,s,o,p,w,r,n,!1);return;case"select":ue("invalid",e),l=r=s=null;for(n in t)if(t.hasOwnProperty(n)&&(o=t[n],o!=null))switch(n){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":l=o;default:Ee(e,a,n,o,t,null)}a=s,t=r,e.multiple=!!l,a!=null?zl(e,!!l,a,!1):t!=null&&zl(e,!!l,t,!0);return;case"textarea":ue("invalid",e),s=n=l=null;for(r in t)if(t.hasOwnProperty(r)&&(o=t[r],o!=null))switch(r){case"value":l=o;break;case"defaultValue":n=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:Ee(e,a,r,o,t,null)}Eu(e,l,n,s);return;case"option":for(p in t)t.hasOwnProperty(p)&&(l=t[p],l!=null)&&(p==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ee(e,a,p,l,t,null));return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(l=0;l<Zn.length;l++)ue(Zn[l],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in t)if(t.hasOwnProperty(w)&&(l=t[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Ee(e,a,w,l,t,null)}return;default:if(Qs(a)){for(D in t)t.hasOwnProperty(D)&&(l=t[D],l!==void 0&&Mc(e,a,D,l,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(l=t[o],l!=null&&Ee(e,a,o,l,t,null))}function Tp(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,s=null,r=null,o=null,p=null,w=null,D=null;for(C in t){var _=t[C];if(t.hasOwnProperty(C)&&_!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":p=_;default:l.hasOwnProperty(C)||Ee(e,a,C,null,l,_)}}for(var T in l){var C=l[T];if(_=t[T],l.hasOwnProperty(T)&&(C!=null||_!=null))switch(T){case"type":s=C;break;case"name":n=C;break;case"checked":w=C;break;case"defaultChecked":D=C;break;case"value":r=C;break;case"defaultValue":o=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,a));break;default:C!==_&&Ee(e,a,T,C,l,_)}}Gs(e,r,o,p,w,D,s,n);return;case"select":C=r=o=T=null;for(s in t)if(p=t[s],t.hasOwnProperty(s)&&p!=null)switch(s){case"value":break;case"multiple":C=p;default:l.hasOwnProperty(s)||Ee(e,a,s,null,l,p)}for(n in l)if(s=l[n],p=t[n],l.hasOwnProperty(n)&&(s!=null||p!=null))switch(n){case"value":T=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==p&&Ee(e,a,n,s,l,p)}a=o,t=r,l=C,T!=null?zl(e,!!t,T,!1):!!l!=!!t&&(a!=null?zl(e,!!t,a,!0):zl(e,!!t,t?[]:"",!1));return;case"textarea":C=T=null;for(o in t)if(n=t[o],t.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ee(e,a,o,null,l,n)}for(r in l)if(n=l[r],s=t[r],l.hasOwnProperty(r)&&(n!=null||s!=null))switch(r){case"value":T=n;break;case"defaultValue":C=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==s&&Ee(e,a,r,n,l,s)}Nu(e,T,C);return;case"option":for(var J in t)T=t[J],t.hasOwnProperty(J)&&T!=null&&!l.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Ee(e,a,J,null,l,T));for(p in l)T=l[p],C=t[p],l.hasOwnProperty(p)&&T!==C&&(T!=null||C!=null)&&(p==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":Ee(e,a,p,T,l,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in t)T=t[P],t.hasOwnProperty(P)&&T!=null&&!l.hasOwnProperty(P)&&Ee(e,a,P,null,l,T);for(w in l)if(T=l[w],C=t[w],l.hasOwnProperty(w)&&T!==C&&(T!=null||C!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,a));break;default:Ee(e,a,w,T,l,C)}return;default:if(Qs(a)){for(var we in t)T=t[we],t.hasOwnProperty(we)&&T!==void 0&&!l.hasOwnProperty(we)&&Mc(e,a,we,void 0,l,T);for(D in l)T=l[D],C=t[D],!l.hasOwnProperty(D)||T===C||T===void 0&&C===void 0||Mc(e,a,D,T,l,C);return}}for(var N in t)T=t[N],t.hasOwnProperty(N)&&T!=null&&!l.hasOwnProperty(N)&&Ee(e,a,N,null,l,T);for(_ in l)T=l[_],C=t[_],!l.hasOwnProperty(_)||T===C||T==null&&C==null||Ee(e,a,_,T,l,C)}function Cf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ap(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var n=t[l],s=n.transferSize,r=n.initiatorType,o=n.duration;if(s&&o&&Cf(r)){for(r=0,o=n.responseEnd,l+=1;l<t.length;l++){var p=t[l],w=p.startTime;if(w>o)break;var D=p.transferSize,_=p.initiatorType;D&&Cf(_)&&(p=p.responseEnd,r+=D*(p<o?1:(o-w)/(p-w)))}if(--l,a+=8*(s+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Dc=null,Oc=null;function ds(e){return e.nodeType===9?e:e.ownerDocument}function Mf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Df(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Rc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var _c=null;function Cp(){var e=window.event;return e&&e.type==="popstate"?e===_c?!1:(_c=e,!0):(_c=null,!1)}var Of=typeof setTimeout=="function"?setTimeout:void 0,Mp=typeof clearTimeout=="function"?clearTimeout:void 0,Rf=typeof Promise=="function"?Promise:void 0,Dp=typeof queueMicrotask=="function"?queueMicrotask:typeof Rf<"u"?function(e){return Rf.resolve(null).then(e).catch(Op)}:Of;function Op(e){setTimeout(function(){throw e})}function Gt(e){return e==="head"}function _f(e,a){var t=a,l=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(n),nn(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Kn(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Kn(t);for(var s=t.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[fn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=r}}else t==="body"&&Kn(e.ownerDocument.body);t=n}while(t);nn(a)}function Uf(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function Uc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Uc(t),qs(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Rp(e,a,t,l){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[fn])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var s=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ka(e.nextSibling),e===null)break}return null}function _p(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ka(e.nextSibling),e===null))return null;return e}function Hf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ka(e.nextSibling),e===null))return null;return e}function Hc(e){return e.data==="$?"||e.data==="$~"}function Bc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Up(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ka(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Lc=null;function Bf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return ka(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Lf(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function kf(e,a,t){switch(a=ds(t),e){case"html":if(e=a.documentElement,!e)throw Error(u(452));return e;case"head":if(e=a.head,!e)throw Error(u(453));return e;case"body":if(e=a.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Kn(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);qs(e)}var qa=new Map,qf=new Set;function fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var yt=q.d;q.d={f:Hp,r:Bp,D:Lp,C:kp,L:qp,m:Yp,X:Xp,S:Gp,M:Qp};function Hp(){var e=yt.f(),a=ls();return e||a}function Bp(e){var a=Nl(e);a!==null&&a.tag===5&&a.type==="form"?td(a):yt.r(e)}var an=typeof document>"u"?null:document;function Yf(e,a,t){var l=an;if(l&&typeof a=="string"&&a){var n=Oa(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),qf.has(n)||(qf.add(n),e={rel:e,crossOrigin:t,href:a},l.querySelector(n)===null&&(a=l.createElement("link"),la(a,"link",e),Ke(a),l.head.appendChild(a)))}}function Lp(e){yt.D(e),Yf("dns-prefetch",e,null)}function kp(e,a){yt.C(e,a),Yf("preconnect",e,a)}function qp(e,a,t){yt.L(e,a,t);var l=an;if(l&&e&&a){var n='link[rel="preload"][as="'+Oa(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+Oa(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+Oa(t.imageSizes)+'"]')):n+='[href="'+Oa(e)+'"]';var s=n;switch(a){case"style":s=tn(e);break;case"script":s=ln(e)}qa.has(s)||(e=z({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),qa.set(s,e),l.querySelector(n)!==null||a==="style"&&l.querySelector($n(s))||a==="script"&&l.querySelector(Wn(s))||(a=l.createElement("link"),la(a,"link",e),Ke(a),l.head.appendChild(a)))}}function Yp(e,a){yt.m(e,a);var t=an;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+Oa(l)+'"][href="'+Oa(e)+'"]',s=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ln(e)}if(!qa.has(s)&&(e=z({rel:"modulepreload",href:e},a),qa.set(s,e),t.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Wn(s)))return}l=t.createElement("link"),la(l,"link",e),Ke(l),t.head.appendChild(l)}}}function Gp(e,a,t){yt.S(e,a,t);var l=an;if(l&&e){var n=El(l).hoistableStyles,s=tn(e);a=a||"default";var r=n.get(s);if(!r){var o={loading:0,preload:null};if(r=l.querySelector($n(s)))o.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":a},t),(t=qa.get(s))&&kc(e,t);var p=r=l.createElement("link");Ke(p),la(p,"link",e),p._p=new Promise(function(w,D){p.onload=w,p.onerror=D}),p.addEventListener("load",function(){o.loading|=1}),p.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ms(r,a,l)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(s,r)}}}function Xp(e,a){yt.X(e,a);var t=an;if(t&&e){var l=El(t).hoistableScripts,n=ln(e),s=l.get(n);s||(s=t.querySelector(Wn(n)),s||(e=z({src:e,async:!0},a),(a=qa.get(n))&&qc(e,a),s=t.createElement("script"),Ke(s),la(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function Qp(e,a){yt.M(e,a);var t=an;if(t&&e){var l=El(t).hoistableScripts,n=ln(e),s=l.get(n);s||(s=t.querySelector(Wn(n)),s||(e=z({src:e,async:!0,type:"module"},a),(a=qa.get(n))&&qc(e,a),s=t.createElement("script"),Ke(s),la(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function Gf(e,a,t,l){var n=(n=te.current)?fs(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=tn(t.href),t=El(n).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=tn(t.href);var s=El(n).hoistableStyles,r=s.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=n.querySelector($n(e)))&&!s._p&&(r.instance=s,r.state.loading=5),qa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},qa.set(e,t),s||Vp(n,e,t,r.state))),a&&l===null)throw Error(u(528,""));return r}if(a&&l!==null)throw Error(u(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ln(t),t=El(n).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function tn(e){return'href="'+Oa(e)+'"'}function $n(e){return'link[rel="stylesheet"]['+e+"]"}function Xf(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function Vp(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),la(a,"link",t),Ke(a),e.head.appendChild(a))}function ln(e){return'[src="'+Oa(e)+'"]'}function Wn(e){return"script[async]"+e}function Qf(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+Oa(t.href)+'"]');if(l)return a.instance=l,Ke(l),l;var n=z({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ke(l),la(l,"style",n),ms(l,t.precedence,e),a.instance=l;case"stylesheet":n=tn(t.href);var s=e.querySelector($n(n));if(s)return a.state.loading|=4,a.instance=s,Ke(s),s;l=Xf(t),(n=qa.get(n))&&kc(l,n),s=(e.ownerDocument||e).createElement("link"),Ke(s);var r=s;return r._p=new Promise(function(o,p){r.onload=o,r.onerror=p}),la(s,"link",l),a.state.loading|=4,ms(s,t.precedence,e),a.instance=s;case"script":return s=ln(t.src),(n=e.querySelector(Wn(s)))?(a.instance=n,Ke(n),n):(l=t,(n=qa.get(s))&&(l=z({},t),qc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ke(n),la(n,"link",l),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(u(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,ms(l,t.precedence,e));return a.instance}function ms(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,s=n,r=0;r<l.length;r++){var o=l[r];if(o.dataset.precedence===a)s=o;else if(s!==n)break}s?s.parentNode.insertBefore(e,s.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function kc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function qc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var hs=null;function Vf(e,a,t){if(hs===null){var l=new Map,n=hs=new Map;n.set(t,l)}else n=hs,l=n.get(t),l||(l=new Map,n.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var s=t[n];if(!(s[fn]||s[Pe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(a)||"";r=e+r;var o=l.get(r);o?o.push(s):l.set(r,[s])}}return l}function Zf(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Zp(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Jf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Jp(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=tn(l.href),s=a.querySelector($n(n));if(s){a=s._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=ps.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=s,Ke(s);return}s=a.ownerDocument||a,l=Xf(l),(n=qa.get(n))&&kc(l,n),s=s.createElement("link"),Ke(s);var r=s;r._p=new Promise(function(o,p){r.onload=o,r.onerror=p}),la(s,"link",l),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ps.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Yc=0;function Kp(e,a){return e.stylesheets&&e.count===0&&vs(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&vs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+a);0<e.imgBytes&&Yc===0&&(Yc=62500*Ap());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Yc?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function ps(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gs=null;function vs(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gs=new Map,a.forEach($p,e),gs=null,ps.call(e))}function $p(e,a){if(!(a.state.loading&4)){var t=gs.get(e);if(t)var l=t.get(null);else{t=new Map,gs.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<n.length;s++){var r=n[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),l=r)}l&&t.set(null,l)}n=a.instance,r=n.getAttribute("data-precedence"),s=t.get(r)||l,s===l&&t.set(null,n),t.set(r,n),this.count++,l=ps.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),s?s.parentNode.insertBefore(n,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var Fn={$$typeof:B,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Wp(e,a,t,l,n,s,r,o,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.hiddenUpdates=dn(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Kf(e,a,t,l,n,s,r,o,p,w,D,_){return e=new Wp(e,a,t,r,p,w,D,_,o),a=1,s===!0&&(a|=24),s=Ea(3,null,null,a),e.current=s,s.stateNode=e,a=yr(),a.refCount++,e.pooledCache=a,a.refCount++,s.memoizedState={element:l,isDehydrated:t,cache:a},Er(s),e}function $f(e){return e?(e=_l,e):_l}function Wf(e,a,t,l,n,s){n=$f(n),l.context===null?l.context=n:l.pendingContext=n,l=Dt(a),l.payload={element:t},s=s===void 0?null:s,s!==null&&(l.callback=s),t=Ot(e,l,a),t!==null&&(ya(t,e,a),Cn(t,e,a))}function Ff(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Gc(e,a){Ff(e,a),(e=e.alternate)&&Ff(e,a)}function If(e){if(e.tag===13||e.tag===31){var a=tl(e,67108864);a!==null&&ya(a,e,67108864),Gc(e,67108864)}}function Pf(e){if(e.tag===13||e.tag===31){var a=Ca();a=sa(a);var t=tl(e,a);t!==null&&ya(t,e,a),Gc(e,a)}}var bs=!0;function Fp(e,a,t,l){var n=O.T;O.T=null;var s=q.p;try{q.p=2,Xc(e,a,t,l)}finally{q.p=s,O.T=n}}function Ip(e,a,t,l){var n=O.T;O.T=null;var s=q.p;try{q.p=8,Xc(e,a,t,l)}finally{q.p=s,O.T=n}}function Xc(e,a,t,l){if(bs){var n=Qc(l);if(n===null)Cc(e,a,l,xs,t),am(e,l);else if(eg(n,e,a,t,l))l.stopPropagation();else if(am(e,l),a&4&&-1<Pp.indexOf(e)){for(;n!==null;){var s=Nl(n);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=at(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var p=1<<31-da(r);o.entanglements[1]|=p,r&=~p}Ia(s),(ve&6)===0&&(as=ia()+500,Vn(0))}}break;case 31:case 13:o=tl(s,2),o!==null&&ya(o,s,2),ls(),Gc(s,2)}if(s=Qc(l),s===null&&Cc(e,a,l,xs,t),s===n)break;n=s}n!==null&&l.stopPropagation()}else Cc(e,a,l,null,t)}}function Qc(e){return e=Zs(e),Vc(e)}var xs=null;function Vc(e){if(xs=null,e=jl(e),e!==null){var a=h(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=v(a),e!==null)return e;e=null}else if(t===31){if(e=A(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return xs=e,null}function em(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rs()){case un:return 2;case on:return 8;case $t:case oi:return 32;case di:return 268435456;default:return 32}default:return 32}}var Zc=!1,Xt=null,Qt=null,Vt=null,In=new Map,Pn=new Map,Zt=[],Pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function am(e,a){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":In.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pn.delete(a.pointerId)}}function ei(e,a,t,l,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:s,targetContainers:[n]},a!==null&&(a=Nl(a),a!==null&&If(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function eg(e,a,t,l,n){switch(a){case"focusin":return Xt=ei(Xt,e,a,t,l,n),!0;case"dragenter":return Qt=ei(Qt,e,a,t,l,n),!0;case"mouseover":return Vt=ei(Vt,e,a,t,l,n),!0;case"pointerover":var s=n.pointerId;return In.set(s,ei(In.get(s)||null,e,a,t,l,n)),!0;case"gotpointercapture":return s=n.pointerId,Pn.set(s,ei(Pn.get(s)||null,e,a,t,l,n)),!0}return!1}function tm(e){var a=jl(e.target);if(a!==null){var t=h(a);if(t!==null){if(a=t.tag,a===13){if(a=v(t),a!==null){e.blockedOn=a,hu(e.priority,function(){Pf(t)});return}}else if(a===31){if(a=A(t),a!==null){e.blockedOn=a,hu(e.priority,function(){Pf(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Qc(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Vs=l,t.target.dispatchEvent(l),Vs=null}else return a=Nl(t),a!==null&&If(a),e.blockedOn=t,!1;a.shift()}return!0}function lm(e,a,t){ys(e)&&t.delete(a)}function ag(){Zc=!1,Xt!==null&&ys(Xt)&&(Xt=null),Qt!==null&&ys(Qt)&&(Qt=null),Vt!==null&&ys(Vt)&&(Vt=null),In.forEach(lm),Pn.forEach(lm)}function Ss(e,a){e.blockedOn===a&&(e.blockedOn=null,Zc||(Zc=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,ag)))}var js=null;function nm(e){js!==e&&(js=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){js===e&&(js=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],n=e[a+2];if(typeof l!="function"){if(Vc(l||t)===null)continue;break}var s=Nl(t);s!==null&&(e.splice(a,3),a-=3,Qr(s,{pending:!0,data:n,method:t.method,action:l},l,n))}}))}function nn(e){function a(p){return Ss(p,e)}Xt!==null&&Ss(Xt,e),Qt!==null&&Ss(Qt,e),Vt!==null&&Ss(Vt,e),In.forEach(a),Pn.forEach(a);for(var t=0;t<Zt.length;t++){var l=Zt[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Zt.length&&(t=Zt[0],t.blockedOn===null);)tm(t),t.blockedOn===null&&Zt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var n=t[l],s=t[l+1],r=n[ha]||null;if(typeof s=="function")r||nm(t);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(n=s,r=s[ha]||null)o=r.formAction;else if(Vc(n)!==null)continue}else o=r.action;typeof o=="function"?t[l+1]=o:(t.splice(l,3),l-=3),nm(t)}}}function im(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function Jc(e){this._internalRoot=e}Ns.prototype.render=Jc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(u(409));var t=a.current,l=Ca();Wf(t,l,e,a,null,null)},Ns.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Wf(e.current,2,null,e,null,null),ls(),a[Sl]=null}};function Ns(e){this._internalRoot=e}Ns.prototype.unstable_scheduleHydration=function(e){if(e){var a=mu();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Zt.length&&a!==0&&a<Zt[t].priority;t++);Zt.splice(t,0,e),t===0&&tm(e)}};var sm=f.version;if(sm!=="19.2.3")throw Error(u(527,sm,"19.2.3"));q.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(a),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var tg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{Wt=Es.inject(tg),oa=Es}catch{}}return ti.createRoot=function(e,a){if(!m(e))throw Error(u(299));var t=!1,l="",n=fd,s=md,r=hd;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError)),a=Kf(e,1,!1,null,null,t,l,null,n,s,r,im),e[Sl]=a.current,Ac(e),new Jc(a)},ti.hydrateRoot=function(e,a,t){if(!m(e))throw Error(u(299));var l=!1,n="",s=fd,r=md,o=hd,p=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.formState!==void 0&&(p=t.formState)),a=Kf(e,1,!0,a,t??null,l,n,p,s,r,o,im),a.context=$f(null),t=a.current,l=Ca(),l=sa(l),n=Dt(l),n.callback=null,Ot(t,n,l),t=l,a.current.lanes=t,b(a,t),Ia(a),e[Sl]=a.current,Ac(e),new Ns(a)},ti.version="19.2.3",ti}var gm;function fg(){if(gm)return Wc.exports;gm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),Wc.exports=dg(),Wc.exports}var mg=fg();const hg=zm(mg);var vm="popstate";function pg(c={}){function f(m,h){let{pathname:v="/",search:A="",hash:S=""}=pl(m.location.hash.substring(1));return!v.startsWith("/")&&!v.startsWith(".")&&(v="/"+v),lu("",{pathname:v,search:A,hash:S},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function d(m,h){let v=m.document.querySelector("base"),A="";if(v&&v.getAttribute("href")){let S=m.location.href,g=S.indexOf("#");A=g===-1?S:S.slice(0,g)}return A+"#"+(typeof h=="string"?h:ni(h))}function u(m,h){Ga(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return vg(f,d,u,c)}function _e(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function Ga(c,f){if(!c){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function gg(){return Math.random().toString(36).substring(2,10)}function bm(c,f){return{usr:c.state,key:c.key,idx:f}}function lu(c,f,d=null,u){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof f=="string"?pl(f):f,state:d,key:f&&f.key||u||gg()}}function ni({pathname:c="/",search:f="",hash:d=""}){return f&&f!=="?"&&(c+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(c+=d.charAt(0)==="#"?d:"#"+d),c}function pl(c){let f={};if(c){let d=c.indexOf("#");d>=0&&(f.hash=c.substring(d),c=c.substring(0,d));let u=c.indexOf("?");u>=0&&(f.search=c.substring(u),c=c.substring(0,u)),c&&(f.pathname=c)}return f}function vg(c,f,d,u={}){let{window:m=document.defaultView,v5Compat:h=!1}=u,v=m.history,A="POP",S=null,g=M();g==null&&(g=0,v.replaceState({...v.state,idx:g},""));function M(){return(v.state||{idx:null}).idx}function z(){A="POP";let k=M(),V=k==null?null:k-g;g=k,S&&S({action:A,location:L.location,delta:V})}function H(k,V){A="PUSH";let X=lu(L.location,k,V);d&&d(X,k),g=M()+1;let B=bm(X,g),le=L.createHref(X);try{v.pushState(B,"",le)}catch(xe){if(xe instanceof DOMException&&xe.name==="DataCloneError")throw xe;m.location.assign(le)}h&&S&&S({action:A,location:L.location,delta:1})}function Q(k,V){A="REPLACE";let X=lu(L.location,k,V);d&&d(X,k),g=M();let B=bm(X,g),le=L.createHref(X);v.replaceState(B,"",le),h&&S&&S({action:A,location:L.location,delta:0})}function Y(k){return bg(k)}let L={get action(){return A},get location(){return c(m,v)},listen(k){if(S)throw new Error("A history only accepts one active listener");return m.addEventListener(vm,z),S=k,()=>{m.removeEventListener(vm,z),S=null}},createHref(k){return f(m,k)},createURL:Y,encodeLocation(k){let V=Y(k);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:H,replace:Q,go(k){return v.go(k)}};return L}function bg(c,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),_e(d,"No window.location.(origin|href) available to create URL");let u=typeof c=="string"?c:ni(c);return u=u.replace(/ $/,"%20"),!f&&u.startsWith("//")&&(u=d+u),new URL(u,d)}function Tm(c,f,d="/"){return xg(c,f,d,!1)}function xg(c,f,d,u){let m=typeof f=="string"?pl(f):f,h=jt(m.pathname||"/",d);if(h==null)return null;let v=Am(c);yg(v);let A=null;for(let S=0;A==null&&S<v.length;++S){let g=Dg(h);A=Cg(v[S],g,u)}return A}function Am(c,f=[],d=[],u="",m=!1){let h=(v,A,S=m,g)=>{let M={relativePath:g===void 0?v.path||"":g,caseSensitive:v.caseSensitive===!0,childrenIndex:A,route:v};if(M.relativePath.startsWith("/")){if(!M.relativePath.startsWith(u)&&S)return;_e(M.relativePath.startsWith(u),`Absolute route path "${M.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),M.relativePath=M.relativePath.slice(u.length)}let z=St([u,M.relativePath]),H=d.concat(M);v.children&&v.children.length>0&&(_e(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${z}".`),Am(v.children,f,H,z,S)),!(v.path==null&&!v.index)&&f.push({path:z,score:Tg(z,v.index),routesMeta:H})};return c.forEach((v,A)=>{if(v.path===""||!v.path?.includes("?"))h(v,A);else for(let S of Cm(v.path))h(v,A,!0,S)}),f}function Cm(c){let f=c.split("/");if(f.length===0)return[];let[d,...u]=f,m=d.endsWith("?"),h=d.replace(/\?$/,"");if(u.length===0)return m?[h,""]:[h];let v=Cm(u.join("/")),A=[];return A.push(...v.map(S=>S===""?h:[h,S].join("/"))),m&&A.push(...v),A.map(S=>c.startsWith("/")&&S===""?"/":S)}function yg(c){c.sort((f,d)=>f.score!==d.score?d.score-f.score:Ag(f.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var Sg=/^:[\w-]+$/,jg=3,Ng=2,Eg=1,wg=10,zg=-2,xm=c=>c==="*";function Tg(c,f){let d=c.split("/"),u=d.length;return d.some(xm)&&(u+=zg),f&&(u+=Ng),d.filter(m=>!xm(m)).reduce((m,h)=>m+(Sg.test(h)?jg:h===""?Eg:wg),u)}function Ag(c,f){return c.length===f.length&&c.slice(0,-1).every((u,m)=>u===f[m])?c[c.length-1]-f[f.length-1]:0}function Cg(c,f,d=!1){let{routesMeta:u}=c,m={},h="/",v=[];for(let A=0;A<u.length;++A){let S=u[A],g=A===u.length-1,M=h==="/"?f:f.slice(h.length)||"/",z=As({path:S.relativePath,caseSensitive:S.caseSensitive,end:g},M),H=S.route;if(!z&&g&&d&&!u[u.length-1].route.index&&(z=As({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},M)),!z)return null;Object.assign(m,z.params),v.push({params:m,pathname:St([h,z.pathname]),pathnameBase:Ug(St([h,z.pathnameBase])),route:H}),z.pathnameBase!=="/"&&(h=St([h,z.pathnameBase]))}return v}function As(c,f){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[d,u]=Mg(c.path,c.caseSensitive,c.end),m=f.match(d);if(!m)return null;let h=m[0],v=h.replace(/(.)\/+$/,"$1"),A=m.slice(1);return{params:u.reduce((g,{paramName:M,isOptional:z},H)=>{if(M==="*"){let Y=A[H]||"";v=h.slice(0,h.length-Y.length).replace(/(.)\/+$/,"$1")}const Q=A[H];return z&&!Q?g[M]=void 0:g[M]=(Q||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:v,pattern:c}}function Mg(c,f=!1,d=!0){Ga(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let u=[],m="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,A,S)=>(u.push({paramName:A,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return c.endsWith("*")?(u.push({paramName:"*"}),m+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":c!==""&&c!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),u]}function Dg(c){try{return c.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Ga(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),c}}function jt(c,f){if(f==="/")return c;if(!c.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,u=c.charAt(d);return u&&u!=="/"?null:c.slice(d)||"/"}var Mm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Og=c=>Mm.test(c);function Rg(c,f="/"){let{pathname:d,search:u="",hash:m=""}=typeof c=="string"?pl(c):c,h;if(d)if(Og(d))h=d;else{if(d.includes("//")){let v=d;d=d.replace(/\/\/+/g,"/"),Ga(!1,`Pathnames cannot have embedded double slashes - normalizing ${v} -> ${d}`)}d.startsWith("/")?h=ym(d.substring(1),"/"):h=ym(d,f)}else h=f;return{pathname:h,search:Hg(u),hash:Bg(m)}}function ym(c,f){let d=f.replace(/\/+$/,"").split("/");return c.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function eu(c,f,d,u){return`Cannot include a '${c}' character in a manually specified \`to.${f}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _g(c){return c.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function Dm(c){let f=_g(c);return f.map((d,u)=>u===f.length-1?d.pathname:d.pathnameBase)}function Om(c,f,d,u=!1){let m;typeof c=="string"?m=pl(c):(m={...c},_e(!m.pathname||!m.pathname.includes("?"),eu("?","pathname","search",m)),_e(!m.pathname||!m.pathname.includes("#"),eu("#","pathname","hash",m)),_e(!m.search||!m.search.includes("#"),eu("#","search","hash",m)));let h=c===""||m.pathname==="",v=h?"/":m.pathname,A;if(v==null)A=d;else{let z=f.length-1;if(!u&&v.startsWith("..")){let H=v.split("/");for(;H[0]==="..";)H.shift(),z-=1;m.pathname=H.join("/")}A=z>=0?f[z]:"/"}let S=Rg(m,A),g=v&&v!=="/"&&v.endsWith("/"),M=(h||v===".")&&d.endsWith("/");return!S.pathname.endsWith("/")&&(g||M)&&(S.pathname+="/"),S}var St=c=>c.join("/").replace(/\/\/+/g,"/"),Ug=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),Hg=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,Bg=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c,Lg=class{constructor(c,f,d,u=!1){this.status=c,this.statusText=f||"",this.internal=u,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function kg(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}function qg(c){return c.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Rm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _m(c,f){let d=c;if(typeof d!="string"||!Mm.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let u=d,m=!1;if(Rm)try{let h=new URL(window.location.href),v=d.startsWith("//")?new URL(h.protocol+d):new URL(d),A=jt(v.pathname,f);v.origin===h.origin&&A!=null?d=A+v.search+v.hash:m=!0}catch{Ga(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:m,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Um=["POST","PUT","PATCH","DELETE"];new Set(Um);var Yg=["GET",...Um];new Set(Yg);var sn=j.createContext(null);sn.displayName="DataRouter";var Cs=j.createContext(null);Cs.displayName="DataRouterState";var Gg=j.createContext(!1),Hm=j.createContext({isTransitioning:!1});Hm.displayName="ViewTransition";var Xg=j.createContext(new Map);Xg.displayName="Fetchers";var Qg=j.createContext(null);Qg.displayName="Await";var Xa=j.createContext(null);Xa.displayName="Navigation";var ii=j.createContext(null);ii.displayName="Location";var Nt=j.createContext({outlet:null,matches:[],isDataRoute:!1});Nt.displayName="Route";var ru=j.createContext(null);ru.displayName="RouteError";var Bm="REACT_ROUTER_ERROR",Vg="REDIRECT",Zg="ROUTE_ERROR_RESPONSE";function Jg(c){if(c.startsWith(`${Bm}:${Vg}:{`))try{let f=JSON.parse(c.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function Kg(c){if(c.startsWith(`${Bm}:${Zg}:{`))try{let f=JSON.parse(c.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new Lg(f.status,f.statusText,f.data)}catch{}}function $g(c,{relative:f}={}){_e(si(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=j.useContext(Xa),{hash:m,pathname:h,search:v}=ri(c,{relative:f}),A=h;return d!=="/"&&(A=h==="/"?d:St([d,h])),u.createHref({pathname:A,search:v,hash:m})}function si(){return j.useContext(ii)!=null}function Kt(){return _e(si(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(ii).location}var Lm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function km(c){j.useContext(Xa).static||j.useLayoutEffect(c)}function cu(){let{isDataRoute:c}=j.useContext(Nt);return c?c0():Wg()}function Wg(){_e(si(),"useNavigate() may be used only in the context of a <Router> component.");let c=j.useContext(sn),{basename:f,navigator:d}=j.useContext(Xa),{matches:u}=j.useContext(Nt),{pathname:m}=Kt(),h=JSON.stringify(Dm(u)),v=j.useRef(!1);return km(()=>{v.current=!0}),j.useCallback((S,g={})=>{if(Ga(v.current,Lm),!v.current)return;if(typeof S=="number"){d.go(S);return}let M=Om(S,JSON.parse(h),m,g.relative==="path");c==null&&f!=="/"&&(M.pathname=M.pathname==="/"?f:St([f,M.pathname])),(g.replace?d.replace:d.push)(M,g.state,g)},[f,d,h,m,c])}j.createContext(null);function ri(c,{relative:f}={}){let{matches:d}=j.useContext(Nt),{pathname:u}=Kt(),m=JSON.stringify(Dm(d));return j.useMemo(()=>Om(c,JSON.parse(m),u,f==="path"),[c,m,u,f])}function Fg(c,f){return qm(c,f)}function qm(c,f,d,u,m){_e(si(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=j.useContext(Xa),{matches:v}=j.useContext(Nt),A=v[v.length-1],S=A?A.params:{},g=A?A.pathname:"/",M=A?A.pathnameBase:"/",z=A&&A.route;{let X=z&&z.path||"";Gm(g,!z||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let H=Kt(),Q;if(f){let X=typeof f=="string"?pl(f):f;_e(M==="/"||X.pathname?.startsWith(M),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${M}" but pathname "${X.pathname}" was given in the \`location\` prop.`),Q=X}else Q=H;let Y=Q.pathname||"/",L=Y;if(M!=="/"){let X=M.replace(/^\//,"").split("/");L="/"+Y.replace(/^\//,"").split("/").slice(X.length).join("/")}let k=Tm(c,{pathname:L});Ga(z||k!=null,`No routes matched location "${Q.pathname}${Q.search}${Q.hash}" `),Ga(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${Q.pathname}${Q.search}${Q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=t0(k&&k.map(X=>Object.assign({},X,{params:Object.assign({},S,X.params),pathname:St([M,h.encodeLocation?h.encodeLocation(X.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?M:St([M,h.encodeLocation?h.encodeLocation(X.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathnameBase])})),v,d,u,m);return f&&V?j.createElement(ii.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Q},navigationType:"POP"}},V):V}function Ig(){let c=r0(),f=kg(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),d=c instanceof Error?c.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},v=null;return console.error("Error handled by React Router default ErrorBoundary:",c),v=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:h},"ErrorBoundary")," or"," ",j.createElement("code",{style:h},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},f),d?j.createElement("pre",{style:m},d):null,v)}var Pg=j.createElement(Ig,null),Ym=class extends j.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,f){return f.location!==c.location||f.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:f.error,location:f.location,revalidation:c.revalidation||f.revalidation}}componentDidCatch(c,f){this.props.onError?this.props.onError(c,f):console.error("React Router caught the following error during render",c)}render(){let c=this.state.error;if(this.context&&typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){const d=Kg(c.digest);d&&(c=d)}let f=c!==void 0?j.createElement(Nt.Provider,{value:this.props.routeContext},j.createElement(ru.Provider,{value:c,children:this.props.component})):this.props.children;return this.context?j.createElement(e0,{error:c},f):f}};Ym.contextType=Gg;var au=new WeakMap;function e0({children:c,error:f}){let{basename:d}=j.useContext(Xa);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let u=Jg(f.digest);if(u){let m=au.get(f);if(m)throw m;let h=_m(u.location,d);if(Rm&&!au.get(f))if(h.isExternal||u.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:u.replace}));throw au.set(f,v),v}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return c}function a0({routeContext:c,match:f,children:d}){let u=j.useContext(sn);return u&&u.static&&u.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=f.route.id),j.createElement(Nt.Provider,{value:c},d)}function t0(c,f=[],d=null,u=null,m=null){if(c==null){if(!d)return null;if(d.errors)c=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)c=d.matches;else return null}let h=c,v=d?.errors;if(v!=null){let M=h.findIndex(z=>z.route.id&&v?.[z.route.id]!==void 0);_e(M>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),h=h.slice(0,Math.min(h.length,M+1))}let A=!1,S=-1;if(d)for(let M=0;M<h.length;M++){let z=h[M];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(S=M),z.route.id){let{loaderData:H,errors:Q}=d,Y=z.route.loader&&!H.hasOwnProperty(z.route.id)&&(!Q||Q[z.route.id]===void 0);if(z.route.lazy||Y){A=!0,S>=0?h=h.slice(0,S+1):h=[h[0]];break}}}let g=d&&u?(M,z)=>{u(M,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:qg(d.matches),errorInfo:z})}:void 0;return h.reduceRight((M,z,H)=>{let Q,Y=!1,L=null,k=null;d&&(Q=v&&z.route.id?v[z.route.id]:void 0,L=z.route.errorElement||Pg,A&&(S<0&&H===0?(Gm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,k=null):S===H&&(Y=!0,k=z.route.hydrateFallbackElement||null)));let V=f.concat(h.slice(0,H+1)),X=()=>{let B;return Q?B=L:Y?B=k:z.route.Component?B=j.createElement(z.route.Component,null):z.route.element?B=z.route.element:B=M,j.createElement(a0,{match:z,routeContext:{outlet:M,matches:V,isDataRoute:d!=null},children:B})};return d&&(z.route.ErrorBoundary||z.route.errorElement||H===0)?j.createElement(Ym,{location:d.location,revalidation:d.revalidation,component:L,error:Q,children:X(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:g}):X()},null)}function uu(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l0(c){let f=j.useContext(sn);return _e(f,uu(c)),f}function n0(c){let f=j.useContext(Cs);return _e(f,uu(c)),f}function i0(c){let f=j.useContext(Nt);return _e(f,uu(c)),f}function ou(c){let f=i0(c),d=f.matches[f.matches.length-1];return _e(d.route.id,`${c} can only be used on routes that contain a unique "id"`),d.route.id}function s0(){return ou("useRouteId")}function r0(){let c=j.useContext(ru),f=n0("useRouteError"),d=ou("useRouteError");return c!==void 0?c:f.errors?.[d]}function c0(){let{router:c}=l0("useNavigate"),f=ou("useNavigate"),d=j.useRef(!1);return km(()=>{d.current=!0}),j.useCallback(async(m,h={})=>{Ga(d.current,Lm),d.current&&(typeof m=="number"?await c.navigate(m):await c.navigate(m,{fromRouteId:f,...h}))},[c,f])}var Sm={};function Gm(c,f,d){!f&&!Sm[c]&&(Sm[c]=!0,Ga(!1,d))}j.memo(u0);function u0({routes:c,future:f,state:d,onError:u}){return qm(c,void 0,d,u,f)}function Ya(c){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function o0({basename:c="/",children:f=null,location:d,navigationType:u="POP",navigator:m,static:h=!1,unstable_useTransitions:v}){_e(!si(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=c.replace(/^\/*/,"/"),S=j.useMemo(()=>({basename:A,navigator:m,static:h,unstable_useTransitions:v,future:{}}),[A,m,h,v]);typeof d=="string"&&(d=pl(d));let{pathname:g="/",search:M="",hash:z="",state:H=null,key:Q="default"}=d,Y=j.useMemo(()=>{let L=jt(g,A);return L==null?null:{location:{pathname:L,search:M,hash:z,state:H,key:Q},navigationType:u}},[A,g,M,z,H,Q,u]);return Ga(Y!=null,`<Router basename="${A}"> is not able to match the URL "${g}${M}${z}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:j.createElement(Xa.Provider,{value:S},j.createElement(ii.Provider,{children:f,value:Y}))}function d0({children:c,location:f}){return Fg(nu(c),f)}function nu(c,f=[]){let d=[];return j.Children.forEach(c,(u,m)=>{if(!j.isValidElement(u))return;let h=[...f,m];if(u.type===j.Fragment){d.push.apply(d,nu(u.props.children,h));return}_e(u.type===Ya,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!u.props.index||!u.props.children,"An index route cannot have child routes.");let v={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(v.children=nu(u.props.children,h)),d.push(v)}),d}var zs="get",Ts="application/x-www-form-urlencoded";function Ms(c){return typeof HTMLElement<"u"&&c instanceof HTMLElement}function f0(c){return Ms(c)&&c.tagName.toLowerCase()==="button"}function m0(c){return Ms(c)&&c.tagName.toLowerCase()==="form"}function h0(c){return Ms(c)&&c.tagName.toLowerCase()==="input"}function p0(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function g0(c,f){return c.button===0&&(!f||f==="_self")&&!p0(c)}var ws=null;function v0(){if(ws===null)try{new FormData(document.createElement("form"),0),ws=!1}catch{ws=!0}return ws}var b0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function tu(c){return c!=null&&!b0.has(c)?(Ga(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ts}"`),null):c}function x0(c,f){let d,u,m,h,v;if(m0(c)){let A=c.getAttribute("action");u=A?jt(A,f):null,d=c.getAttribute("method")||zs,m=tu(c.getAttribute("enctype"))||Ts,h=new FormData(c)}else if(f0(c)||h0(c)&&(c.type==="submit"||c.type==="image")){let A=c.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=c.getAttribute("formaction")||A.getAttribute("action");if(u=S?jt(S,f):null,d=c.getAttribute("formmethod")||A.getAttribute("method")||zs,m=tu(c.getAttribute("formenctype"))||tu(A.getAttribute("enctype"))||Ts,h=new FormData(A,c),!v0()){let{name:g,type:M,value:z}=c;if(M==="image"){let H=g?`${g}.`:"";h.append(`${H}x`,"0"),h.append(`${H}y`,"0")}else g&&h.append(g,z)}}else{if(Ms(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=zs,u=null,m=Ts,v=c}return h&&m==="text/plain"&&(v=h,h=void 0),{action:u,method:d.toLowerCase(),encType:m,formData:h,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function du(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function y0(c,f,d,u){let m=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return d?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${u}`:m.pathname=`${m.pathname}.${u}`:m.pathname==="/"?m.pathname=`_root.${u}`:f&&jt(m.pathname,f)==="/"?m.pathname=`${f.replace(/\/$/,"")}/_root.${u}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${u}`,m}async function S0(c,f){if(c.id in f)return f[c.id];try{let d=await import(c.module);return f[c.id]=d,d}catch(d){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function j0(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function N0(c,f,d){let u=await Promise.all(c.map(async m=>{let h=f.routes[m.route.id];if(h){let v=await S0(h,d);return v.links?v.links():[]}return[]}));return T0(u.flat(1).filter(j0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function jm(c,f,d,u,m,h){let v=(S,g)=>d[g]?S.route.id!==d[g].route.id:!0,A=(S,g)=>d[g].pathname!==S.pathname||d[g].route.path?.endsWith("*")&&d[g].params["*"]!==S.params["*"];return h==="assets"?f.filter((S,g)=>v(S,g)||A(S,g)):h==="data"?f.filter((S,g)=>{let M=u.routes[S.route.id];if(!M||!M.hasLoader)return!1;if(v(S,g)||A(S,g))return!0;if(S.route.shouldRevalidate){let z=S.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof z=="boolean")return z}return!0}):[]}function E0(c,f,{includeHydrateFallback:d}={}){return w0(c.map(u=>{let m=f.routes[u.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function w0(c){return[...new Set(c)]}function z0(c){let f={},d=Object.keys(c).sort();for(let u of d)f[u]=c[u];return f}function T0(c,f){let d=new Set;return new Set(f),c.reduce((u,m)=>{let h=JSON.stringify(z0(m));return d.has(h)||(d.add(h),u.push({key:h,link:m})),u},[])}function Xm(){let c=j.useContext(sn);return du(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function A0(){let c=j.useContext(Cs);return du(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var fu=j.createContext(void 0);fu.displayName="FrameworkContext";function Qm(){let c=j.useContext(fu);return du(c,"You must render this element inside a <HydratedRouter> element"),c}function C0(c,f){let d=j.useContext(fu),[u,m]=j.useState(!1),[h,v]=j.useState(!1),{onFocus:A,onBlur:S,onMouseEnter:g,onMouseLeave:M,onTouchStart:z}=f,H=j.useRef(null);j.useEffect(()=>{if(c==="render"&&v(!0),c==="viewport"){let L=V=>{V.forEach(X=>{v(X.isIntersecting)})},k=new IntersectionObserver(L,{threshold:.5});return H.current&&k.observe(H.current),()=>{k.disconnect()}}},[c]),j.useEffect(()=>{if(u){let L=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(L)}}},[u]);let Q=()=>{m(!0)},Y=()=>{m(!1),v(!1)};return d?c!=="intent"?[h,H,{}]:[h,H,{onFocus:li(A,Q),onBlur:li(S,Y),onMouseEnter:li(g,Q),onMouseLeave:li(M,Y),onTouchStart:li(z,Q)}]:[!1,H,{}]}function li(c,f){return d=>{c&&c(d),d.defaultPrevented||f(d)}}function M0({page:c,...f}){let{router:d}=Xm(),u=j.useMemo(()=>Tm(d.routes,c,d.basename),[d.routes,c,d.basename]);return u?j.createElement(O0,{page:c,matches:u,...f}):null}function D0(c){let{manifest:f,routeModules:d}=Qm(),[u,m]=j.useState([]);return j.useEffect(()=>{let h=!1;return N0(c,f,d).then(v=>{h||m(v)}),()=>{h=!0}},[c,f,d]),u}function O0({page:c,matches:f,...d}){let u=Kt(),{future:m,manifest:h,routeModules:v}=Qm(),{basename:A}=Xm(),{loaderData:S,matches:g}=A0(),M=j.useMemo(()=>jm(c,f,g,h,u,"data"),[c,f,g,h,u]),z=j.useMemo(()=>jm(c,f,g,h,u,"assets"),[c,f,g,h,u]),H=j.useMemo(()=>{if(c===u.pathname+u.search+u.hash)return[];let L=new Set,k=!1;if(f.forEach(X=>{let B=h.routes[X.route.id];!B||!B.hasLoader||(!M.some(le=>le.route.id===X.route.id)&&X.route.id in S&&v[X.route.id]?.shouldRevalidate||B.hasClientLoader?k=!0:L.add(X.route.id))}),L.size===0)return[];let V=y0(c,A,m.unstable_trailingSlashAwareDataRequests,"data");return k&&L.size>0&&V.searchParams.set("_routes",f.filter(X=>L.has(X.route.id)).map(X=>X.route.id).join(",")),[V.pathname+V.search]},[A,m.unstable_trailingSlashAwareDataRequests,S,u,h,M,f,c,v]),Q=j.useMemo(()=>E0(z,h),[z,h]),Y=D0(z);return j.createElement(j.Fragment,null,H.map(L=>j.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...d})),Q.map(L=>j.createElement("link",{key:L,rel:"modulepreload",href:L,...d})),Y.map(({key:L,link:k})=>j.createElement("link",{key:L,nonce:d.nonce,...k})))}function R0(...c){return f=>{c.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var _0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_0&&(window.__reactRouterVersion="7.12.0")}catch{}function U0({basename:c,children:f,unstable_useTransitions:d,window:u}){let m=j.useRef();m.current==null&&(m.current=pg({window:u,v5Compat:!0}));let h=m.current,[v,A]=j.useState({action:h.action,location:h.location}),S=j.useCallback(g=>{d===!1?A(g):j.startTransition(()=>A(g))},[d]);return j.useLayoutEffect(()=>h.listen(S),[h,S]),j.createElement(o0,{basename:c,children:f,location:v.location,navigationType:v.action,navigator:h,unstable_useTransitions:d})}var Vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,be=j.forwardRef(function({onClick:f,discover:d="render",prefetch:u="none",relative:m,reloadDocument:h,replace:v,state:A,target:S,to:g,preventScrollReset:M,viewTransition:z,unstable_defaultShouldRevalidate:H,...Q},Y){let{basename:L,unstable_useTransitions:k}=j.useContext(Xa),V=typeof g=="string"&&Vm.test(g),X=_m(g,L);g=X.to;let B=$g(g,{relative:m}),[le,xe,De]=C0(u,Q),ee=k0(g,{replace:v,state:A,target:S,preventScrollReset:M,relative:m,viewTransition:z,unstable_defaultShouldRevalidate:H,unstable_useTransitions:k});function Re(ca){f&&f(ca),ca.defaultPrevented||ee(ca)}let ze=j.createElement("a",{...Q,...De,href:X.absoluteURL||B,onClick:X.isExternal||h?f:Re,ref:R0(Y,xe),target:S,"data-discover":!V&&d==="render"?"true":void 0});return le&&!V?j.createElement(j.Fragment,null,ze,j.createElement(M0,{page:B})):ze});be.displayName="Link";var H0=j.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:u="",end:m=!1,style:h,to:v,viewTransition:A,children:S,...g},M){let z=ri(v,{relative:g.relative}),H=Kt(),Q=j.useContext(Cs),{navigator:Y,basename:L}=j.useContext(Xa),k=Q!=null&&Q0(z)&&A===!0,V=Y.encodeLocation?Y.encodeLocation(z).pathname:z.pathname,X=H.pathname,B=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;d||(X=X.toLowerCase(),B=B?B.toLowerCase():null,V=V.toLowerCase()),B&&L&&(B=jt(B,L)||B);const le=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let xe=X===V||!m&&X.startsWith(V)&&X.charAt(le)==="/",De=B!=null&&(B===V||!m&&B.startsWith(V)&&B.charAt(V.length)==="/"),ee={isActive:xe,isPending:De,isTransitioning:k},Re=xe?f:void 0,ze;typeof u=="function"?ze=u(ee):ze=[u,xe?"active":null,De?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let ca=typeof h=="function"?h(ee):h;return j.createElement(be,{...g,"aria-current":Re,className:ze,ref:M,style:ca,to:v,viewTransition:A},typeof S=="function"?S(ee):S)});H0.displayName="NavLink";var B0=j.forwardRef(({discover:c="render",fetcherKey:f,navigate:d,reloadDocument:u,replace:m,state:h,method:v=zs,action:A,onSubmit:S,relative:g,preventScrollReset:M,viewTransition:z,unstable_defaultShouldRevalidate:H,...Q},Y)=>{let{unstable_useTransitions:L}=j.useContext(Xa),k=G0(),V=X0(A,{relative:g}),X=v.toLowerCase()==="get"?"get":"post",B=typeof A=="string"&&Vm.test(A),le=xe=>{if(S&&S(xe),xe.defaultPrevented)return;xe.preventDefault();let De=xe.nativeEvent.submitter,ee=De?.getAttribute("formmethod")||v,Re=()=>k(De||xe.currentTarget,{fetcherKey:f,method:ee,navigate:d,replace:m,state:h,relative:g,preventScrollReset:M,viewTransition:z,unstable_defaultShouldRevalidate:H});L&&d!==!1?j.startTransition(()=>Re()):Re()};return j.createElement("form",{ref:Y,method:X,action:V,onSubmit:u?S:le,...Q,"data-discover":!B&&c==="render"?"true":void 0})});B0.displayName="Form";function L0(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zm(c){let f=j.useContext(sn);return _e(f,L0(c)),f}function k0(c,{target:f,replace:d,state:u,preventScrollReset:m,relative:h,viewTransition:v,unstable_defaultShouldRevalidate:A,unstable_useTransitions:S}={}){let g=cu(),M=Kt(),z=ri(c,{relative:h});return j.useCallback(H=>{if(g0(H,f)){H.preventDefault();let Q=d!==void 0?d:ni(M)===ni(z),Y=()=>g(c,{replace:Q,state:u,preventScrollReset:m,relative:h,viewTransition:v,unstable_defaultShouldRevalidate:A});S?j.startTransition(()=>Y()):Y()}},[M,g,z,d,u,f,c,m,h,v,A,S])}var q0=0,Y0=()=>`__${String(++q0)}__`;function G0(){let{router:c}=Zm("useSubmit"),{basename:f}=j.useContext(Xa),d=s0(),u=c.fetch,m=c.navigate;return j.useCallback(async(h,v={})=>{let{action:A,method:S,encType:g,formData:M,body:z}=x0(h,f);if(v.navigate===!1){let H=v.fetcherKey||Y0();await u(H,d,v.action||A,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:M,body:z,formMethod:v.method||S,formEncType:v.encType||g,flushSync:v.flushSync})}else await m(v.action||A,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:M,body:z,formMethod:v.method||S,formEncType:v.encType||g,replace:v.replace,state:v.state,fromRouteId:d,flushSync:v.flushSync,viewTransition:v.viewTransition})},[u,m,f,d])}function X0(c,{relative:f}={}){let{basename:d}=j.useContext(Xa),u=j.useContext(Nt);_e(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),h={...ri(c||".",{relative:f})},v=Kt();if(c==null){h.search=v.search;let A=new URLSearchParams(h.search),S=A.getAll("index");if(S.some(M=>M==="")){A.delete("index"),S.filter(z=>z).forEach(z=>A.append("index",z));let M=A.toString();h.search=M?`?${M}`:""}}return(!c||c===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(h.pathname=h.pathname==="/"?d:St([d,h.pathname])),ni(h)}function Q0(c,{relative:f}={}){let d=j.useContext(Hm);_e(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Zm("useViewTransitionState"),m=ri(c,{relative:f});if(!d.isTransitioning)return!1;let h=jt(d.currentLocation.pathname,u)||d.currentLocation.pathname,v=jt(d.nextLocation.pathname,u)||d.nextLocation.pathname;return As(m.pathname,v)!=null||As(m.pathname,h)!=null}function V0(){const[c,f]=j.useState(!1),[d,u]=j.useState(!1),[m,h]=j.useState(!1),[v,A]=j.useState(!1),[S,g]=j.useState(!1),[M,z]=j.useState(localStorage.getItem("brochureData")||""),H=Kt(),Q=j.useRef(0);j.useEffect(()=>{f(!1),g(!1)},[H.pathname]),j.useEffect(()=>{localStorage.getItem("mode")==="dark"&&(u(!0),document.body.classList.add("dark"))},[]),j.useEffect(()=>{const B=()=>{const le=window.scrollY;h(le>10),A(le>60&&le>Q.current),Q.current=le};return window.addEventListener("scroll",B,{passive:!0}),()=>window.removeEventListener("scroll",B)},[]),j.useEffect(()=>{const B=()=>{z(localStorage.getItem("brochureData")||"")};return window.addEventListener("brochureUpdated",B),()=>window.removeEventListener("brochureUpdated",B)},[]);function Y(){const B=!d;u(B),B?(document.body.classList.add("dark"),localStorage.setItem("mode","dark")):(document.body.classList.remove("dark"),localStorage.setItem("mode","light"))}const L=()=>{if(!M)return;const B=document.createElement("a");B.href=M,B.download=localStorage.getItem("brochureName")||"SVV-School-Brochure.pdf",document.body.appendChild(B),B.click(),document.body.removeChild(B)},k=B=>H.pathname===B,V=B=>H.pathname.startsWith(B),X=[{label:"Science Stream",path:"/academics/science"},{label:"Commerce Stream",path:"/academics/commerce"},{label:"Examination",path:"/academics/examination"},{label:"Timetable",path:"/academics/timetable"},{label:"Results",path:"/academics/results"}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
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
          position: sticky;
          top: 0;
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
      `}),i.jsxs("header",{className:"header",children:[i.jsx("div",{className:`notice-bar ${v?"hidden":""}`,children:"📢 Admissions Open! Apply Now  |  New Session 2026–27"}),i.jsxs("nav",{className:`nav ${m?"scrolled":""}`,children:[i.jsx("div",{className:"logo",children:i.jsxs(be,{to:"/",style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[i.jsx(Z0,{}),i.jsxs("div",{children:[i.jsx("h3",{children:"SVV School"}),i.jsx("p",{children:"Nagpur, Maharashtra"})]})]})}),i.jsxs("ul",{className:"nav-links",style:{display:"flex"},children:[i.jsx("li",{children:i.jsx(be,{className:k("/")?"activeLink":"",to:"/",children:"Home"})}),i.jsx("li",{children:i.jsx(be,{className:k("/about")?"activeLink":"",to:"/about",children:"About"})}),i.jsxs("li",{className:"dropdown",children:[i.jsxs(be,{to:"/academics",className:`dropdown-title ${V("/academics")?"activeLink":""}`,children:["Academics ",i.jsx("span",{className:"dropdown-chevron",children:"▼"})]}),i.jsx("ul",{className:"dropdown-menu",children:X.map((B,le)=>i.jsxs(su.Fragment,{children:[le===2&&i.jsx("li",{children:i.jsx("div",{className:"dd-sep"})}),i.jsx("li",{children:i.jsx(be,{to:B.path,className:H.pathname===B.path?"activeLink":"",children:B.label})})]},B.path))})]}),i.jsx("li",{children:i.jsx(be,{className:k("/teachers")?"activeLink":"",to:"/teachers",children:"Teachers"})}),i.jsx("li",{children:i.jsx(be,{className:k("/principal")?"activeLink":"",to:"/principal",children:"Principal"})}),i.jsx("li",{children:i.jsx(be,{className:k("/management")?"activeLink":"",to:"/management",children:"Management"})}),i.jsx("li",{children:i.jsx(be,{className:k("/gallery")?"activeLink":"",to:"/gallery",children:"Gallery"})}),i.jsx("li",{children:i.jsx(be,{className:k("/success")?"activeLink":"",to:"/success",children:"Success"})}),i.jsx("li",{children:i.jsx(be,{className:k("/contact")?"activeLink":"",to:"/contact",children:"Contact"})})]}),i.jsxs("div",{className:"right-controls",children:[i.jsx("button",{className:"darkBtn",onClick:Y,children:d?"☀️ Light":"🌙 Dark"}),i.jsx("button",{className:"menu-btn",onClick:()=>f(!c),children:c?"✕":"☰"})]}),i.jsxs("div",{className:"top-bar",children:[i.jsxs("button",{className:`brochure-btn ${M?"active":"inactive"}`,onClick:L,title:M?"Download School Brochure (PDF)":"No brochure uploaded yet",children:[M&&i.jsx("span",{className:"brochure-pulse"}),"📥",i.jsx("span",{className:"label",children:"Download Brochure"})]}),i.jsxs("div",{className:"top-buttons",children:[i.jsx(be,{to:"/contact#admission",children:i.jsx("button",{className:"enquire-btn",children:"Enquire Now"})}),i.jsx(be,{to:"/disclosure",children:i.jsx("button",{className:"disclosure-btn",children:"Public Disclosure"})})]})]})]}),i.jsxs("div",{className:`mobile-panel ${c?"active":""}`,children:[i.jsx(be,{to:"/",className:`mob-link ${k("/")?"activeLink":""}`,children:"Home"}),i.jsx(be,{to:"/about",className:`mob-link ${k("/about")?"activeLink":""}`,children:"About"}),i.jsxs("div",{className:`mob-link mob-link-split ${V("/academics")?"activeLink":""}`,children:[i.jsx(be,{to:"/academics",style:{flex:1,color:"inherit",textDecoration:"none"},children:"Academics"}),i.jsx("span",{className:`mob-chevron ${S?"open":""}`,onClick:B=>{B.stopPropagation(),g(le=>!le)},style:{padding:"4px 8px",cursor:"pointer"},children:"▼"})]}),i.jsx("div",{className:`mob-sub ${S?"open":""}`,children:X.map(B=>i.jsx(be,{to:B.path,className:`mob-sub-link ${H.pathname===B.path?"activeLink":""}`,children:B.label},B.path))}),i.jsx(be,{to:"/teachers",className:`mob-link ${k("/teachers")?"activeLink":""}`,children:"Teachers"}),i.jsx(be,{to:"/principal",className:`mob-link ${k("/principal")?"activeLink":""}`,children:"Principal"}),i.jsx(be,{to:"/management",className:`mob-link ${k("/management")?"activeLink":""}`,children:"Management"}),i.jsx(be,{to:"/gallery",className:`mob-link ${k("/gallery")?"activeLink":""}`,children:"Gallery"}),i.jsx(be,{to:"/success",className:`mob-link ${k("/success")?"activeLink":""}`,children:"Success"}),i.jsx(be,{to:"/contact",className:`mob-link ${k("/contact")?"activeLink":""}`,children:"Contact"}),i.jsxs("div",{className:"mob-cta-wrap",children:[i.jsxs("button",{className:`mob-brochure-btn ${M?"active":"inactive"}`,onClick:L,disabled:!M,title:M?"Download School Brochure":"No brochure uploaded yet",children:["📥 ",M?"Download Brochure":"Brochure Not Available"]}),i.jsx(be,{to:"/contact#admission",className:"mob-cta",children:"📋 Apply for Admission"})]})]})]})]})}function Z0(){const[c,f]=j.useState(!1);return i.jsx("div",{className:"logo-img-box",children:c?i.jsx("div",{className:"logo-initials",children:"SVK"}):i.jsx("img",{src:"/logo.png",alt:"School Logo",onError:()=>f(!0)})})}function J0(){return i.jsx("footer",{className:"footer",children:i.jsx("p",{children:"© 2026 Sarvodaya Vidyalaya Junior Science College Hingna | Internship Project"})})}function K0(){const[c,f]=j.useState(!1);j.useEffect(()=>{function u(){f(document.documentElement.scrollTop>350)}return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);function d(){window.scrollTo({top:0,behavior:"smooth"})}return c?i.jsx("button",{className:"topBtn",onClick:d,children:"↑"}):null}const $0=["📢 Admissions open for Session 2026–27 — Apply before 30th April","🏆 Congratulations to our students for 100% result in HSC Board Exams 2025","📅 Annual Sports Day scheduled on 15th May 2026 — All students must participate","📚 New Science Lab inaugurated — state-of-the-art equipment for practical learning","🎉 Sarvodaya Vidyalaya ranked Top 10 schools in Nagpur District","📝 Unit Test schedule for June 2026 is now available on the Notice Board"];function Nm(){const c=JSON.parse(localStorage.getItem("notices")||"[]");return c.length>0?c:$0}function W0(){const[c,f]=j.useState(!1),[d,u]=j.useState(localStorage.getItem("newsAlertEnabled")!=="false"),[m,h]=j.useState(Nm);if(j.useEffect(()=>{const S=()=>{u(localStorage.getItem("newsAlertEnabled")!=="false")},g=()=>{h(Nm())};return window.addEventListener("newsAlertToggled",S),window.addEventListener("noticesUpdated",g),()=>{window.removeEventListener("newsAlertToggled",S),window.removeEventListener("noticesUpdated",g)}},[]),!d)return null;const v=[...m,...m],A=Math.max(20,m.length*7);return i.jsxs("div",{className:"news-ticker-wrap",children:[i.jsxs("div",{className:"ticker-label",children:[i.jsx("span",{children:"🔴"})," Latest News"]}),i.jsx("div",{className:"ticker-track-wrap",children:i.jsx("div",{className:"ticker-track",style:{"--ticker-duration":`${A}s`,animationPlayState:c?"paused":"running"},children:v.map((S,g)=>i.jsxs(su.Fragment,{children:[i.jsxs("span",{className:"ticker-item",children:[i.jsx("span",{className:"ticker-dot"}),S]}),i.jsx("span",{className:"ticker-sep",children:"|"})]},g))})}),i.jsx("button",{className:"ticker-pause-btn",onClick:()=>f(S=>!S),title:c?"Play":"Pause",children:c?"▶":"⏸"})]})}const F0=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy: #0a1628;
    --navy-mid: #142240;
    --gold: #c9922a;
    --gold-light: #e8b84b;
    --cream: #faf7f2;
    --white: #ffffff;
    --text-muted: #6b7a99;
    --border: rgba(201,146,42,0.2);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--navy);
  }

  /* ── HERO ── */
  .hero-wrap {
    position: relative;
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
    background: var(--navy);
  }

  .hero-slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 1s ease;
    background-size: cover;
    background-position: center;
  }
  .hero-slide.active { opacity: 1; }
  .hero-slide::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(10,22,40,0.88) 0%,
      rgba(10,22,40,0.55) 60%,
      rgba(10,22,40,0.3) 100%
    );
  }

  .hero-content {
    position: absolute;
    inset: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 8vw;
    max-width: 900px;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(201,146,42,0.15);
    border: 1px solid var(--gold);
    color: var(--gold-light);
    padding: 6px 16px;
    border-radius: 40px;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 24px;
    width: fit-content;
    animation: fadeUp 0.8s ease both;
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 5vw, 4rem);
    font-weight: 900;
    color: var(--white);
    line-height: 1.15;
    margin-bottom: 20px;
    animation: fadeUp 0.9s 0.1s ease both;
  }

  .hero-title span { color: var(--gold-light); }

  .hero-desc {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: rgba(255,255,255,0.75);
    max-width: 560px;
    line-height: 1.75;
    margin-bottom: 36px;
    font-weight: 300;
    animation: fadeUp 1s 0.2s ease both;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    animation: fadeUp 1s 0.3s ease both;
  }

  .btn-primary {
    background: var(--gold);
    color: var(--white);
    padding: 14px 32px;
    border-radius: 6px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }

  .btn-outline {
    background: transparent;
    color: var(--white);
    padding: 14px 32px;
    border-radius: 6px;
    border: 1.5px solid rgba(255,255,255,0.4);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-outline:hover { border-color: var(--gold); color: var(--gold-light); }

  /* Slider nav */
  .slide-nav {
    position: absolute;
    bottom: 40px;
    left: 8vw;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .slide-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
    cursor: pointer;
    transition: all 0.3s;
    border: none;
  }
  .slide-dot.active {
    background: var(--gold);
    width: 28px;
    border-radius: 4px;
  }

  .slide-arrows {
    position: absolute;
    right: 6vw;
    bottom: 32px;
    z-index: 20;
    display: flex;
    gap: 10px;
  }
  .arrow-btn {
    width: 44px; height: 44px;
    border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.08);
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    backdrop-filter: blur(4px);
  }
  .arrow-btn:hover { background: var(--gold); border-color: var(--gold); }

  /* ── QUICK INFO BAR ── */
  .info-bar {
    background: var(--navy);
    padding: 0 5vw;
  }
  .info-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .info-item {
    padding: 30px 24px;
    border-right: 1px solid rgba(255,255,255,0.06);
    transition: background 0.3s;
  }
  .info-item:last-child { border-right: none; }
  .info-item:hover { background: rgba(201,146,42,0.06); }
  .info-icon { font-size: 1.4rem; margin-bottom: 10px; }
  .info-label {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    color: var(--white);
    margin-bottom: 4px;
  }
  .info-sub {
    font-size: 0.82rem;
    color: var(--text-muted);
    line-height: 1.5;
  }
  .info-link {
    display: inline-block;
    margin-top: 8px;
    font-size: 0.8rem;
    color: var(--gold);
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.04em;
  }
  .info-link:hover { color: var(--gold-light); }

  /* ── SECTION WRAPPER ── */
  .section { padding: 90px 6vw; }
  .section-alt { background: var(--white); }

  .section-label {
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 10px;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 700;
    color: var(--navy);
    line-height: 1.2;
    margin-bottom: 14px;
  }
  .section-sub {
    font-size: 1rem;
    color: var(--text-muted);
    max-width: 520px;
    line-height: 1.7;
  }

  /* ── NOTICE + EVENTS ── */
  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-top: 50px;
  }

  .board-card {
    background: var(--white);
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,0.07);
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.05);
  }

  .board-header {
    background: var(--navy);
    padding: 20px 28px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .board-header h3 {
    font-family: 'Playfair Display', serif;
    color: var(--white);
    font-size: 1.1rem;
  }
  .board-header span { font-size: 1.2rem; }

  .notice-list {
    list-style: none;
    padding: 20px 28px;
    max-height: 280px;
    overflow-y: auto;
  }
  .notice-list::-webkit-scrollbar { width: 4px; }
  .notice-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

  .notice-item {
    padding: 12px 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    font-size: 0.88rem;
    color: #334;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    line-height: 1.6;
  }
  .notice-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--gold);
    flex-shrink: 0;
    margin-top: 7px;
  }

  .event-list { padding: 20px 28px; }
  .event-item {
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }
  .event-icon {
    width: 40px; height: 40px;
    border-radius: 10px;
    background: rgba(201,146,42,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  .event-text { font-size: 0.88rem; color: #334; line-height: 1.5; }
  .event-empty { color: var(--text-muted); font-size: 0.9rem; padding: 20px 0; }

  /* ── STATS ── */
  .stats-section {
    background: var(--navy);
    padding: 80px 6vw;
    position: relative;
    overflow: hidden;
  }
  .stats-section::before {
    content: '';
    position: absolute;
    top: -120px; right: -120px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201,146,42,0.12) 0%, transparent 70%);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    margin-top: 60px;
  }
  .stat-card {
    padding: 40px 30px;
    border: 1px solid rgba(255,255,255,0.06);
    text-align: center;
    transition: background 0.3s;
  }
  .stat-card:hover { background: rgba(201,146,42,0.07); }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 900;
    color: var(--gold-light);
    display: block;
    line-height: 1;
    margin-bottom: 10px;
  }
  .stat-label {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* ── TESTIMONIALS ── */
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-top: 50px;
  }
  .testi-card {
    background: var(--white);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 16px;
    padding: 36px 32px;
    position: relative;
    transition: box-shadow 0.3s, transform 0.3s;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .testi-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.1);
  }
  .testi-quote {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    color: var(--gold);
    line-height: 1;
    position: absolute;
    top: 20px; left: 28px;
    opacity: 0.25;
  }
  .testi-text {
    font-size: 0.95rem;
    color: #445;
    line-height: 1.8;
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
  }
  .testi-name {
    font-weight: 600;
    font-size: 0.88rem;
    color: var(--navy);
    letter-spacing: 0.02em;
  }
  .testi-role {
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-top: 2px;
  }
  .testi-avatar {
    width: 40px; height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--navy));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 12px;
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .info-grid { grid-template-columns: 1fr 1fr; }
    .info-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
    .two-col { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .testimonials-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 600px) {
    .info-grid { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .stat-num { font-size: 2.2rem; }
    .hero-title { font-size: 1.8rem; }
  }
`;function I0(){const c=JSON.parse(localStorage.getItem("notices"))||[],f=JSON.parse(localStorage.getItem("events"))||[],d=[{title:i.jsxs(i.Fragment,{children:["Welcome to ",i.jsx("span",{children:"Sarvodaya Vidyalaya"})," Junior Science College"]}),desc:"Quality education with modern classrooms, experienced teachers, and a nurturing environment for every student to thrive.",btnText:"Admissions Open",link:"/contact#admission",img:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80"},{title:i.jsxs(i.Fragment,{children:["Smart Learning, ",i.jsx("span",{children:"Bright Future"})," Ahead"]}),desc:"Interactive teaching methods, smart classrooms, and skill-based learning designed for the leaders of tomorrow.",btnText:"Explore Academics",link:"/academics",img:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"},{title:i.jsxs(i.Fragment,{children:["Sports, Arts & ",i.jsx("span",{children:"Overall Development"})]}),desc:"We nurture physical fitness, creativity, and strong character through diverse co-curricular activities.",btnText:"View Gallery",link:"/gallery",img:"https://images.unsplash.com/photo-1519452635266-abab4954c08b?auto=format&fit=crop&w=1600&q=80"}],[u,m]=j.useState(0),h=j.useRef(null),v=()=>{clearInterval(h.current),h.current=setInterval(()=>{m(Y=>(Y+1)%d.length)},5e3)};j.useEffect(()=>(v(),()=>clearInterval(h.current)),[]);const A=Y=>{m(Y),v()},S=()=>{m(Y=>(Y-1+d.length)%d.length),v()},g=()=>{m(Y=>(Y+1)%d.length),v()},M={students:1200,teachers:80,awards:25,classrooms:50},[z,H]=j.useState({students:0,teachers:0,awards:0,classrooms:0});j.useEffect(()=>{let Y;const L=performance.now(),k=2e3,V=X=>{const B=Math.min((X-L)/k,1),le=1-Math.pow(1-B,3);H({students:Math.floor(le*M.students),teachers:Math.floor(le*M.teachers),awards:Math.floor(le*M.awards),classrooms:Math.floor(le*M.classrooms)}),B<1&&(Y=requestAnimationFrame(V))};return Y=requestAnimationFrame(V),()=>cancelAnimationFrame(Y)},[]);const Q=[{name:"Rahul Sharma",role:"Parent",msg:"The teachers are genuinely supportive and the education quality is outstanding. My child has grown so much here."},{name:"Ananya Desai",role:"Student",msg:"I love the interactive smart classes and all the activities. Coming to school every day feels exciting."},{name:"Neha Verma",role:"Parent",msg:"A very disciplined school with great focus on academics, sports, and overall personality development."}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:F0}),i.jsxs("div",{className:"hero-wrap",children:[d.map((Y,L)=>i.jsx("div",{className:`hero-slide ${L===u?"active":""}`,style:{backgroundImage:`url(${Y.img})`}},L)),i.jsxs("div",{className:"hero-content",children:[i.jsxs("div",{className:"hero-badge",children:[i.jsx("span",{children:"✦"})," Est. Since Hingna · Session 2026–27"]}),i.jsx("h1",{className:"hero-title",children:d[u].title}),i.jsx("p",{className:"hero-desc",children:d[u].desc}),i.jsxs("div",{className:"hero-actions",children:[i.jsx(be,{to:d[u].link,children:i.jsx("button",{className:"btn-primary",children:d[u].btnText})}),i.jsx(be,{to:"/about",children:i.jsx("button",{className:"btn-outline",children:"Learn More"})})]})]}),i.jsx("div",{className:"slide-nav",children:d.map((Y,L)=>i.jsx("button",{className:`slide-dot ${L===u?"active":""}`,onClick:()=>A(L)},L))}),i.jsxs("div",{className:"slide-arrows",children:[i.jsx("button",{className:"arrow-btn",onClick:S,children:"◀"}),i.jsx("button",{className:"arrow-btn",onClick:g,children:"▶"})]})]}),i.jsx("div",{className:"info-bar",children:i.jsxs("div",{className:"info-grid",children:[i.jsxs("div",{className:"info-item",children:[i.jsx("div",{className:"info-icon",children:"📌"}),i.jsx("div",{className:"info-label",children:"Admissions"}),i.jsx("div",{className:"info-sub",children:"Session 2026–27 now open for enrollment"}),i.jsx(be,{to:"/contact#admission",className:"info-link",children:"Apply Now →"})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("div",{className:"info-icon",children:"⏰"}),i.jsx("div",{className:"info-label",children:"School Timings"}),i.jsx("div",{className:"info-sub",children:"Mon – Sat: 8:00 AM to 2:30 PM"}),i.jsx("span",{className:"info-link",style:{color:"var(--text-muted)",cursor:"default"},children:"Sunday Holiday"})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("div",{className:"info-icon",children:"📞"}),i.jsx("div",{className:"info-label",children:"Contact Us"}),i.jsx("div",{className:"info-sub",children:"We're here for admissions & support"}),i.jsx("span",{className:"info-link",children:"+91 98765 43210"})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("div",{className:"info-icon",children:"🏫"}),i.jsx("div",{className:"info-label",children:"Facilities"}),i.jsx("div",{className:"info-sub",children:"Labs · Library · Smart Classes · Sports"}),i.jsx(be,{to:"/about",className:"info-link",children:"View More →"})]})]})}),i.jsxs("section",{className:"section section-alt",children:[i.jsx("div",{className:"section-label",children:"Stay Updated"}),i.jsx("div",{className:"section-title",children:"Notice Board & Events"}),i.jsx("div",{className:"section-sub",children:"Stay informed about school announcements, important dates, and upcoming events."}),i.jsxs("div",{className:"two-col",children:[i.jsxs("div",{className:"board-card",children:[i.jsxs("div",{className:"board-header",children:[i.jsx("span",{children:"📢"}),i.jsx("h3",{children:"Notice Board"})]}),i.jsx("ul",{className:"notice-list",children:c.length===0?i.jsxs("li",{className:"notice-item",children:[i.jsx("div",{className:"notice-dot"}),"No notices at this time."]}):c.map((Y,L)=>i.jsxs("li",{className:"notice-item",children:[i.jsx("div",{className:"notice-dot"}),Y]},L))})]}),i.jsxs("div",{className:"board-card",children:[i.jsxs("div",{className:"board-header",children:[i.jsx("span",{children:"📅"}),i.jsx("h3",{children:"Upcoming Events"})]}),i.jsx("div",{className:"event-list",children:f.length===0?i.jsx("div",{className:"event-empty",children:"No upcoming events scheduled."}):f.map((Y,L)=>i.jsxs("div",{className:"event-item",children:[i.jsx("div",{className:"event-icon",children:"📅"}),i.jsx("div",{className:"event-text",children:Y})]},L))})]})]})]}),i.jsx("div",{className:"stats-section",children:i.jsxs("div",{style:{position:"relative",zIndex:1},children:[i.jsx("div",{className:"section-label",style:{color:"var(--gold)"},children:"By the Numbers"}),i.jsx("div",{className:"section-title",style:{color:"var(--white)"},children:"Our Achievements"}),i.jsx("div",{className:"section-sub",style:{color:"rgba(255,255,255,0.55)"},children:"We are proud of the community we have built over the years."}),i.jsx("div",{className:"stats-grid",children:[{num:z.students,label:"Students Enrolled",suffix:"+"},{num:z.teachers,label:"Expert Teachers",suffix:"+"},{num:z.awards,label:"Awards Won",suffix:"+"},{num:z.classrooms,label:"Classrooms",suffix:"+"}].map((Y,L)=>i.jsxs("div",{className:"stat-card",children:[i.jsxs("span",{className:"stat-num",children:[Y.num,Y.suffix]}),i.jsx("div",{className:"stat-label",children:Y.label})]},L))})]})}),i.jsxs("section",{className:"section section-alt",children:[i.jsx("div",{className:"section-label",children:"Voices of Trust"}),i.jsx("div",{className:"section-title",children:"What Our Community Says"}),i.jsx("div",{className:"section-sub",children:"Hear from the parents and students who are part of the Sarvodaya family."}),i.jsx("div",{className:"testimonials-grid",children:Q.map((Y,L)=>i.jsxs("div",{className:"testi-card",children:[i.jsx("div",{className:"testi-quote",children:'"'}),i.jsx("div",{className:"testi-avatar",children:Y.name[0]}),i.jsx("p",{className:"testi-text",children:Y.msg}),i.jsx("div",{className:"testi-name",children:Y.name}),i.jsx("div",{className:"testi-role",children:Y.role})]},L))})]})]})}function P0(){const c=[{title:"Discipline",desc:"We believe discipline builds character and improves learning habits.",icon:"✅"},{title:"Excellence",desc:"We encourage students to aim high and achieve their best performance.",icon:"🏆"},{title:"Innovation",desc:"We promote smart learning, technology and creative thinking.",icon:"💡"},{title:"Respect",desc:"We teach students to respect teachers, parents and society.",icon:"🤝"}],f=[{name:"Smart Classrooms",icon:"🖥️"},{name:"Science Laboratory",icon:"🔬"},{name:"Computer Lab",icon:"💻"},{name:"Library",icon:"📚"},{name:"Sports Ground",icon:"⚽"},{name:"CCTV Security",icon:"📷"},{name:"Transportation",icon:"🚌"},{name:"Activity Rooms",icon:"🎭"}],d=[{year:"2000",text:"School foundation laid with quality education vision."},{year:"2010",text:"New campus expansion and modern learning facilities."},{year:"2018",text:"Smart classrooms and digital learning introduced."},{year:"2024",text:"Improved sports infrastructure and co-curricular programs."}];return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"page-hero",children:i.jsxs("div",{className:"page-hero-content",children:[i.jsx("h1",{children:"About Sarvodaya Vidyalaya Junior Science College Hingna"}),i.jsx("p",{children:"Sarvodaya Vidyalaya Junior Science College is committed to delivering quality education, skill development and overall growth for every student."})]})}),i.jsxs("section",{children:[i.jsxs("div",{className:"title",children:[i.jsx("h2",{children:"Who We Are"}),i.jsx("p",{children:"Building bright futures with knowledge and values"})]}),i.jsxs("div",{className:"card-container",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Our Mission"}),i.jsx("p",{children:"To provide quality education and develop confident, disciplined and responsible students with strong moral values."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Our Vision"}),i.jsx("p",{children:"To be a leading educational institution recognized for excellence in academics, discipline, sports and creativity."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Our Objective"}),i.jsx("p",{children:"To focus on academics along with personality development through events, competitions, and activities."})]})]})]}),i.jsxs("section",{children:[i.jsxs("div",{className:"title",children:[i.jsx("h2",{children:"Principal’s Message"}),i.jsx("p",{children:"Guidance, Discipline and Growth"})]}),i.jsxs("div",{className:"principal-box",children:[i.jsxs("div",{className:"principal-left",children:[i.jsx("div",{className:"principal-photo",children:"👩‍🏫"}),i.jsx("h3",{children:"Principal"}),i.jsx("p",{className:"principal-name",children:"Mrs. A. Sharma"})]}),i.jsxs("div",{className:"principal-right",children:[i.jsx("p",{children:"“Our goal is to provide the best learning environment where each student can explore their strengths. We focus on academic excellence, strong discipline and co-curricular development. Together, we shape responsible citizens for tomorrow.”"}),i.jsx("p",{className:"principal-sign",children:"— Principal"})]})]})]}),i.jsxs("section",{children:[i.jsxs("div",{className:"title",children:[i.jsx("h2",{children:"Our Core Values"}),i.jsx("p",{children:"Values that shape every student’s journey"})]}),i.jsx("div",{className:"values-grid",children:c.map((u,m)=>i.jsxs("div",{className:"value-card",children:[i.jsx("div",{className:"value-icon",children:u.icon}),i.jsx("h3",{children:u.title}),i.jsx("p",{children:u.desc})]},m))})]}),i.jsxs("section",{children:[i.jsxs("div",{className:"title",children:[i.jsx("h2",{children:"Facilities"}),i.jsx("p",{children:"Modern infrastructure for better learning"})]}),i.jsx("div",{className:"facility-grid",children:f.map((u,m)=>i.jsxs("div",{className:"facility-card",children:[i.jsx("span",{className:"facility-icon",children:u.icon}),i.jsx("p",{children:u.name})]},m))})]}),i.jsxs("section",{children:[i.jsxs("div",{className:"title",children:[i.jsx("h2",{children:"Our Journey"}),i.jsx("p",{children:"Milestones in our growth"})]}),i.jsx("div",{className:"timeline",children:d.map((u,m)=>i.jsxs("div",{className:"timeline-item",children:[i.jsx("div",{className:"timeline-year",children:u.year}),i.jsx("div",{className:"timeline-text",children:u.text})]},m))})]}),i.jsx("section",{children:i.jsxs("div",{className:"cta-box",children:[i.jsx("h2",{children:"Ready to JoinSarvodaya Vidyalaya Junior Science College Hingna"}),i.jsx("p",{children:"Apply today and start your bright future with us."}),i.jsx(be,{to:"/contact#admission",children:i.jsx("button",{className:"cta-btn",children:"Apply for Admission"})})]})})]})}function ev(){const[c,f]=j.useState([]);return j.useEffect(()=>{f(JSON.parse(localStorage.getItem("academics"))||[])},[]),i.jsxs("section",{children:[i.jsxs("div",{className:"title",children:[i.jsx("h2",{children:"Academics"}),i.jsx("p",{children:"Quality education from primary to higher secondary"})]}),i.jsxs("div",{className:"card-container",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Primary Section (1st - 5th)"}),i.jsx("p",{children:"Focus on building strong basics in reading, writing, and mathematics through interactive learning, storytelling, and fun activities."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Middle School (6th - 8th)"}),i.jsx("p",{children:"Concept-based learning with emphasis on science, mathematics, languages, and social studies along with regular tests and projects."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Secondary School (9th - 10th)"}),i.jsx("p",{children:"Intensive preparation for board examinations with experienced teachers, doubt-solving sessions, and revision classes."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Higher Secondary (11th - 12th)"}),i.jsx("p",{children:"Science and Commerce streams with career guidance, practical learning, and mentorship programs."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Subjects Offered"}),i.jsx("p",{children:"English, Mathematics, Science, Social Studies, Computer Science, Hindi, Physical Education, and Environmental Studies."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Teaching Methodology"}),i.jsx("p",{children:"Smart classrooms, project-based learning, group discussions, digital presentations, and practical demonstrations."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Examination System"}),i.jsx("p",{children:"Regular class tests, unit tests, mid-term examinations, and annual examinations to monitor student progress."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Academic Support"}),i.jsx("p",{children:"Extra doubt-solving classes, remedial sessions, and personalized mentoring for students needing additional guidance."})]})]}),i.jsxs("div",{className:"title",children:[i.jsx("h2",{children:"Academics"}),i.jsx("p",{children:"Our courses and curriculum"})]}),i.jsx("div",{className:"card-container",children:c.length===0?i.jsx("p",{children:"No academic information added yet."}):c.map((d,u)=>i.jsx("div",{className:"card",children:i.jsx("p",{children:d})},u))})]})}function av(){const[c,f]=j.useState([]),[d,u]=j.useState({open:!1,src:""});j.useEffect(()=>{f(JSON.parse(localStorage.getItem("gallery"))||[])},[]);function m(v){u({open:!0,src:v})}function h(){u({open:!1,src:""})}return i.jsxs("section",{children:[i.jsxs("div",{className:"title",children:[i.jsx("h2",{children:"School Gallery"}),i.jsx("p",{children:"Campus, classrooms & student activities"})]}),i.jsx("div",{className:"gallery",children:c.map((v,A)=>i.jsx("img",{src:v,alt:"gallery-"+A,onClick:()=>m(v)},A))}),d.open&&i.jsxs("div",{className:"lightbox",onClick:h,children:[i.jsx("span",{className:"close-lightbox",onClick:h,children:"×"}),i.jsx("img",{src:d.src,alt:"Full View",onClick:v=>v.stopPropagation()})]})]})}const tv=`
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
`,Em={phone:"+91 98765 43210",email:"info@sarvodayavk.edu.in",address:"Near Main Bus Stop, Hingna Road",city:"Hingna, Nagpur, Maharashtra – 441110",officeHours:"Mon – Sat, 8:00 AM – 2:30 PM",facebookUrl:"https://www.facebook.com/YOUR_ID",twitterUrl:"https://twitter.com/YOUR_ID",instagramUrl:"https://www.instagram.com/YOUR_ID",whatsappNum:"91XXXXXXXXXX",mapSrc:"https://www.google.com/maps?q=Hingna,Nagpur,Maharashtra&output=embed"};function lv(){const[c,f]=j.useState({name:"",email:"",phone:"",stream:"",message:""}),[d,u]=j.useState(null),[m,h]=j.useState(Em);j.useEffect(()=>{const S=JSON.parse(localStorage.getItem("contactInfo")||"{}");Object.keys(S).length>0&&h({...Em,...S})},[]);const v=S=>f({...c,[S.target.name]:S.target.value}),A=async S=>{S.preventDefault(),u("loading");try{(await fetch("https://svv-school-backend.onrender.com/api/admission",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).ok?(u("success"),f({name:"",email:"",phone:"",stream:"",message:""})):u("error")}catch(g){console.error(g),u("error")}};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:tv}),i.jsxs("div",{className:"contact-page",children:[i.jsxs("div",{className:"contact-hero",children:[i.jsx("div",{className:"hero-label",children:"Get in Touch"}),i.jsxs("h1",{className:"hero-title",children:["Contact & ",i.jsx("span",{children:"Admissions"})]}),i.jsx("p",{className:"hero-sub",children:"Reach out to us for admissions, queries, or general information. We're happy to help."})]}),i.jsxs("div",{className:"contact-grid",children:[i.jsxs("div",{className:"left-col",children:[i.jsxs("div",{className:"info-card",children:[i.jsxs("div",{className:"info-card-head",children:[i.jsx("div",{className:"info-icon",children:"📞"}),i.jsx("div",{className:"info-card-title",children:"Phone & Email"})]}),i.jsxs("div",{className:"info-card-body",children:[i.jsx("strong",{children:m.phone}),i.jsx("br",{}),m.email,i.jsx("br",{}),i.jsx("br",{}),i.jsx("strong",{children:"Office Hours:"})," ",m.officeHours]})]}),i.jsxs("div",{className:"info-card",children:[i.jsxs("div",{className:"info-card-head",children:[i.jsx("div",{className:"info-icon",children:"📍"}),i.jsx("div",{className:"info-card-title",children:"Our Address"})]}),i.jsxs("div",{className:"info-card-body",children:["Sarvodaya Vidyalaya Junior Science College",i.jsx("br",{}),i.jsx("strong",{children:m.city}),i.jsx("br",{}),m.address]})]}),i.jsxs("div",{className:"social-card",children:[i.jsx("div",{className:"social-card-title",children:"🌐 Connect With Us"}),i.jsxs("div",{className:"social-buttons",children:[i.jsxs("a",{href:m.facebookUrl,target:"_blank",rel:"noopener noreferrer",className:"social-btn facebook",children:[i.jsx("span",{className:"s-icon",children:"f"})," Facebook"]}),i.jsxs("a",{href:m.twitterUrl,target:"_blank",rel:"noopener noreferrer",className:"social-btn twitter",children:[i.jsx("span",{className:"s-icon",children:"𝕏"})," Twitter / X"]}),i.jsxs("a",{href:m.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"social-btn instagram",children:[i.jsx("span",{className:"s-icon",children:"◎"})," Instagram"]})]}),i.jsx("a",{href:`https://wa.me/${m.whatsappNum}`,target:"_blank",rel:"noopener noreferrer",className:"whatsapp-btn",children:"💬 Chat on WhatsApp"})]}),i.jsxs("div",{className:"map-card",children:[i.jsxs("div",{className:"map-header",children:[i.jsx("span",{children:"📍"}),i.jsx("h3",{children:"Our Location"})]}),i.jsx("iframe",{src:m.mapSrc,width:"100%",height:"200",style:{border:0},allowFullScreen:"",loading:"lazy",title:"School Location Map"})]})]}),i.jsxs("div",{className:"form-card",id:"admission",children:[i.jsxs("div",{className:"form-header",children:[i.jsx("div",{className:"form-label-tag",children:"Admissions 2026–27"}),i.jsx("div",{className:"form-title",children:"Apply for Admission"}),i.jsx("p",{className:"form-desc",children:"Fill in the details below and our team will get back to you within 24 hours."})]}),d==="success"&&i.jsx("div",{className:"form-msg success",children:"✅ Admission form submitted successfully! We'll contact you soon."}),d==="error"&&i.jsx("div",{className:"form-msg error",children:"❌ Something went wrong. Please try again or call us directly."}),i.jsxs("form",{onSubmit:A,children:[i.jsxs("div",{className:"field-row",children:[i.jsxs("div",{className:"field-group",style:{marginBottom:0},children:[i.jsx("label",{children:"Student Name"}),i.jsx("input",{className:"field-input",type:"text",name:"name",placeholder:"Full name",value:c.name,onChange:v,required:!0})]}),i.jsxs("div",{className:"field-group",style:{marginBottom:0},children:[i.jsx("label",{children:"Phone Number"}),i.jsx("input",{className:"field-input",type:"text",name:"phone",placeholder:"+91 XXXXX XXXXX",value:c.phone,onChange:v,required:!0})]})]}),i.jsxs("div",{className:"field-group",children:[i.jsx("label",{children:"Email Address"}),i.jsx("input",{className:"field-input",type:"email",name:"email",placeholder:"your@email.com",value:c.email,onChange:v,required:!0})]}),i.jsxs("div",{className:"field-group",children:[i.jsx("label",{children:"Select Stream"}),i.jsx("div",{className:"stream-row",children:["Science","Commerce","Arts","Not decided"].map(S=>i.jsxs("div",{className:"stream-option",children:[i.jsx("input",{type:"radio",id:`stream-${S}`,name:"stream",value:S,checked:c.stream===S,onChange:v}),i.jsxs("label",{className:"stream-label",htmlFor:`stream-${S}`,children:[i.jsx("span",{className:"stream-dot"}),S]})]},S))})]}),i.jsxs("div",{className:"field-group",children:[i.jsx("label",{children:"Message / Query"}),i.jsx("textarea",{className:"field-input",name:"message",placeholder:"Any questions or additional information...",value:c.message,onChange:v})]}),i.jsx("button",{type:"submit",className:"submit-btn",disabled:d==="loading",children:d==="loading"?i.jsx(i.Fragment,{children:"⏳ Submitting..."}):i.jsx(i.Fragment,{children:"📋 Submit Admission Form"})})]})]})]})]})]})}const nv=[{name:"Mr. Rajesh Sharma",subject:"Mathematics",experience:"10+ Years",img:"https://randomuser.me/api/portraits/men/32.jpg"},{name:"Ms. Sneha Patil",subject:"Physics",experience:"8 Years",img:"https://randomuser.me/api/portraits/women/44.jpg"},{name:"Mr. Imran Khan",subject:"Chemistry",experience:"12 Years",img:"https://randomuser.me/api/portraits/men/55.jpg"},{name:"Mrs. Anjali Deshmukh",subject:"Biology",experience:"9 Years",img:"https://randomuser.me/api/portraits/women/68.jpg"}];function iv(){return i.jsx("div",{className:"page",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"page-title",children:"Our Teachers"}),i.jsx("div",{className:"card-container",children:nv.map((c,f)=>i.jsxs("div",{className:"card teacher-card",children:[i.jsx("img",{src:c.img,alt:c.name}),i.jsx("h3",{children:c.name}),i.jsx("p",{children:i.jsx("strong",{children:c.subject})}),i.jsxs("p",{children:[c.experience," Experience"]})]},f))})]})})}const sv=[{name:"Dr. A. Deshmukh",role:"Principal",message:"Our vision is to provide quality education that nurtures creativity, discipline, and leadership among students.",img:"https://randomuser.me/api/portraits/men/11.jpg"},{name:"Mrs. S. Kulkarni",role:"Vice Principal",message:"We focus on academic excellence along with co-curricular activities for holistic development.",img:"https://randomuser.me/api/portraits/women/21.jpg"},{name:"Mr. R. Patil",role:"Director",message:"Our institution aims to build future-ready students with strong values and modern skills.",img:"https://randomuser.me/api/portraits/men/31.jpg"}];function rv(){return i.jsx("div",{className:"page",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"page-title",children:"Management Team"}),i.jsx("p",{className:"page-subtitle",children:"Meet the leaders guiding our institution towards excellence."}),i.jsx("div",{className:"card-container",children:sv.map((c,f)=>i.jsxs("div",{className:"card management-card",children:[i.jsx("img",{src:c.img,alt:c.name}),i.jsx("h3",{children:c.name}),i.jsx("p",{className:"role",children:c.role}),i.jsxs("p",{className:"message",children:["“",c.message,"”"]})]},f))})]})})}const cv=[{name:"Rahul Verma",achievement:"Selected in IIT Bombay",year:"2025",img:"https://randomuser.me/api/portraits/men/12.jpg"},{name:"Sneha Kulkarni",achievement:"MHT-CET Topper (99%)",year:"2024",img:"https://randomuser.me/api/portraits/women/22.jpg"},{name:"Amit Patil",achievement:"Placed at Google",year:"2023",img:"https://randomuser.me/api/portraits/men/45.jpg"},{name:"Priya Sharma",achievement:"NEET Rank under 500",year:"2025",img:"https://randomuser.me/api/portraits/women/30.jpg"}];function uv(){return i.jsx("div",{className:"page",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"page-title",children:"Success Stories"}),i.jsx("div",{className:"card-container",children:cv.map((c,f)=>i.jsxs("div",{className:"card success-card",children:[i.jsx("img",{src:c.img,alt:c.name}),i.jsx("h3",{children:c.name}),i.jsx("p",{children:c.achievement}),i.jsx("span",{className:"year",children:c.year})]},f))})]})})}const wm={name:"Dr. Sunita Sharma",role:"Principal",photo:"/principal.jpg",qualification:"M.Sc., B.Ed., Ph.D.",experience:"25+ Years",joined:"Since 2010",school:"Sarvodaya Vidyalaya",message:`Welcome to Sarvodaya Vidyalaya Junior Science College, Hingna — a place where knowledge meets character, and education goes beyond textbooks. It gives me immense pride and joy to address you as the Principal of this esteemed institution.

Our school has been a beacon of learning for over two decades, nurturing thousands of students who have gone on to make their mark in every field — from science and medicine to arts and administration. We believe that every child is unique and carries within them an extraordinary potential waiting to be discovered.

At Sarvodaya Vidyalaya, we do not just teach subjects — we build values. Our dedicated faculty works tirelessly to create an environment where curiosity is encouraged, discipline is practiced, and creativity is celebrated. We combine modern teaching methods with time-tested values to prepare students not just for examinations, but for life.

To our students: Dream big, work hard, and never stop learning. Your success is our mission and your character is our pride. To our parents: Thank you for entrusting us with your most precious responsibility. Together, we will ensure your child blossoms into a confident and compassionate individual.`,quote:"Education is not the filling of a pail, but the lighting of a fire. Our goal is to ignite that fire in every student.",stat1num:"25+",stat1label:"Years Experience",stat2num:"5000+",stat2label:"Students Guided",stat3num:"100%",stat3label:"Board Results",stat4num:"30+",stat4label:"Awards Won"};function ov(){const[c,f]=j.useState(!1),[d,u]=j.useState(wm);j.useEffect(()=>{const v=JSON.parse(localStorage.getItem("principalInfo")||"{}");Object.keys(v).length>0&&u({...wm,...v})},[]);const m=(d.message||"").split(`
`).filter(v=>v.trim()!==""),h=[{num:d.stat1num,label:d.stat1label},{num:d.stat2num,label:d.stat2label},{num:d.stat3num,label:d.stat3label},{num:d.stat4num,label:d.stat4label}];return i.jsxs("div",{className:"principal-page",children:[i.jsxs("div",{className:"principal-hero",children:[i.jsx("div",{className:"hero-label",children:"Leadership"}),i.jsxs("h1",{className:"hero-title",children:["Principal's ",i.jsx("span",{children:"Message"})]}),i.jsx("p",{className:"hero-sub",children:"A word from the heart of our institution"})]}),i.jsxs("div",{className:"principal-main",children:[i.jsxs("div",{className:"principal-grid",children:[i.jsxs("div",{className:"principal-photo-card",children:[i.jsx("div",{className:"photo-frame",children:c?i.jsxs("div",{className:"photo-placeholder",children:[i.jsx("div",{className:"photo-avatar",children:"👩‍💼"}),i.jsx("div",{className:"photo-avatar-text",children:"Photo Coming Soon"})]}):i.jsx("img",{src:d.photo||"/principal.jpg",alt:d.name,onError:()=>f(!0)})}),i.jsx("div",{className:"photo-bar"}),i.jsxs("div",{className:"principal-info",children:[i.jsx("div",{className:"principal-name",children:d.name}),i.jsx("div",{className:"principal-role",children:d.role}),i.jsx("div",{className:"principal-divider"}),i.jsxs("div",{className:"principal-meta",children:[i.jsxs("div",{className:"meta-item",children:[i.jsx("div",{className:"meta-icon",children:"🎓"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Qualification"}),d.qualification]})]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("div",{className:"meta-icon",children:"📅"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Experience"}),d.experience]})]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("div",{className:"meta-icon",children:"🏫"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Joined"}),d.joined]})]})]})]})]}),i.jsxs("div",{className:"principal-message-card",children:[i.jsx("div",{className:"msg-label",children:"From the Desk of the Principal"}),i.jsx("div",{className:"msg-title",children:"Dear Students, Parents & Well-wishers,"}),i.jsx("span",{className:"msg-quote-mark",children:'"'}),i.jsxs("div",{className:"msg-body",children:[m.map((v,A)=>i.jsx("p",{children:v},A)),d.quote&&i.jsx("div",{className:"msg-highlight",children:d.quote}),i.jsxs("p",{children:["I invite you to walk through our corridors of learning with pride, purpose, and passion. Together, let us make ",d.school," a center of excellence that the entire community can be proud of."]})]}),i.jsxs("div",{className:"msg-signature",children:[i.jsx("div",{className:"sig-avatar",children:(d.name||"P").charAt(0)}),i.jsxs("div",{className:"sig-text",children:[i.jsx("div",{className:"sig-name",children:d.name}),i.jsxs("div",{className:"sig-role",children:[d.role," — ",d.school]})]})]})]})]}),i.jsx("div",{className:"principal-stats",children:h.map((v,A)=>i.jsxs("div",{className:"p-stat",children:[i.jsx("div",{className:"p-stat-num",children:v.num}),i.jsx("div",{className:"p-stat-label",children:v.label})]},A))})]})]})}const dv=`
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
`;function fv(){const[c,f]=j.useState(""),[d,u]=j.useState(""),[m,h]=j.useState(!1),[v,A]=j.useState(""),[S,g]=j.useState(!1),M=cu(),z=H=>{H.preventDefault(),A(""),g(!0),setTimeout(()=>{c==="admin@dps.com"&&d==="admin123"?(localStorage.setItem("adminAuth","true"),M("/admin-dashboard")):(A("Invalid email or password. Please try again."),g(!1))},800)};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:dv}),i.jsxs("div",{className:"al-root",children:[i.jsxs("div",{className:"al-bg",children:[i.jsx("div",{className:"al-bg-grad"}),i.jsx("div",{className:"al-grid"}),i.jsx("div",{className:"al-orb al-orb-1"}),i.jsx("div",{className:"al-orb al-orb-2"})]}),i.jsxs("div",{className:"al-left",children:[i.jsxs("div",{className:"al-brand",children:[i.jsx("div",{className:"al-brand-logo",children:"SVK"}),i.jsxs("div",{children:[i.jsx("div",{className:"al-brand-name",children:"SVV School"}),i.jsx("div",{className:"al-brand-sub",children:"Nagpur, Maharashtra"})]})]}),i.jsx("div",{className:"al-hero-label",children:"Administration Portal"}),i.jsxs("h1",{className:"al-hero-title",children:["Manage Your",i.jsx("br",{}),i.jsx("em",{children:"School Content"}),i.jsx("br",{}),"With Ease"]}),i.jsx("p",{className:"al-hero-desc",children:"Securely update notices, gallery, admissions, staff profiles, and more — all from one unified dashboard built for school administrators."}),i.jsxs("div",{className:"al-stats",children:[i.jsxs("div",{className:"al-stat-item",children:[i.jsx("div",{className:"al-stat-num",children:"8+"}),i.jsx("div",{className:"al-stat-label",children:"Sections"})]}),i.jsx("div",{className:"al-stat-divider"}),i.jsxs("div",{className:"al-stat-item",children:[i.jsx("div",{className:"al-stat-num",children:"100%"}),i.jsx("div",{className:"al-stat-label",children:"Secure"})]}),i.jsx("div",{className:"al-stat-divider"}),i.jsxs("div",{className:"al-stat-item",children:[i.jsx("div",{className:"al-stat-num",children:"Live"}),i.jsx("div",{className:"al-stat-label",children:"Updates"})]})]})]}),i.jsx("div",{className:"al-right",children:i.jsxs("div",{className:"al-card",children:[i.jsxs("div",{className:"al-card-header",children:[i.jsxs("div",{className:"al-card-eyebrow",children:[i.jsx("span",{className:"al-card-eyebrow-dot"}),"Secure Access"]}),i.jsx("div",{className:"al-card-title",children:"Admin Sign In"}),i.jsx("div",{className:"al-card-sub",children:"Enter your credentials to access the dashboard"})]}),v&&i.jsxs("div",{className:"al-error",children:["⚠ ",v]}),i.jsxs("form",{onSubmit:z,children:[i.jsxs("div",{className:"al-fields",children:[i.jsxs("div",{className:"al-field",children:[i.jsx("label",{className:"al-field-label",children:"Email Address"}),i.jsxs("div",{className:"al-field-wrap",children:[i.jsx("span",{className:"al-field-icon",children:"✉"}),i.jsx("input",{className:`al-input${v?" error":""}`,type:"email",placeholder:"admin@school.edu.in",required:!0,autoComplete:"email",value:c,onChange:H=>{f(H.target.value),A("")}})]})]}),i.jsxs("div",{className:"al-field",children:[i.jsx("label",{className:"al-field-label",children:"Password"}),i.jsxs("div",{className:"al-field-wrap",children:[i.jsx("span",{className:"al-field-icon",children:"🔒"}),i.jsx("input",{className:`al-input${v?" error":""}`,type:m?"text":"password",placeholder:"Enter your password",required:!0,autoComplete:"current-password",value:d,onChange:H=>{u(H.target.value),A("")}}),i.jsx("button",{type:"button",className:"al-toggle-pw",onClick:()=>h(H=>!H),title:m?"Hide password":"Show password",children:m?"🙈":"👁"})]})]})]}),i.jsx("button",{className:"al-submit",type:"submit",disabled:S,children:S?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"al-spinner"})," Signing in…"]}):i.jsx(i.Fragment,{children:"Sign In to Dashboard →"})})]}),i.jsxs("div",{className:"al-divider",children:[i.jsx("div",{className:"al-divider-line"}),i.jsx("span",{className:"al-divider-text",children:"RESTRICTED ACCESS"}),i.jsx("div",{className:"al-divider-line"})]}),i.jsxs("div",{className:"al-footer-note",children:[i.jsx("span",{children:"🔐"}),"This portal is for authorized administrators only. Unauthorized access is strictly prohibited."]})]})})]})]})}const mv=`
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
`;function Ma({icon:c,title:f,count:d,children:u}){return i.jsxs("div",{className:"adm-panel",children:[i.jsxs("div",{className:"adm-panel-head",children:[i.jsx("span",{children:c}),i.jsx("h3",{children:f}),d!==void 0&&i.jsx("span",{className:"adm-panel-badge",children:d})]}),i.jsx("div",{className:"adm-panel-body",children:u})]})}function hv(){const c=cu(),[f,d]=j.useState("overview"),[u,m]=j.useState(""),[h,v]=j.useState(""),[A,S]=j.useState(""),[g,M]=j.useState([]),[z,H]=j.useState([]),[Q,Y]=j.useState([]),[L,k]=j.useState([]),[V,X]=j.useState([]),[B,le]=j.useState(null),[xe,De]=j.useState(""),[ee,Re]=j.useState(""),[ze,ca]=j.useState(!0),[Ze,We]=j.useState(localStorage.getItem("brochureName")||""),[Fe,Sa]=j.useState(null),[ja,O]=j.useState(!1),[q,I]=j.useState([]),[se,me]=j.useState({name:"",role:"",message:"",img:""}),[y,U]=j.useState(!1),[G,Z]=j.useState([]),[F,te]=j.useState({name:"",subject:"",experience:"",img:""}),[he,Je]=j.useState(!1),[ye,Pa]=j.useState([]),[na,et]=j.useState({name:"",achievement:"",year:"",img:""}),[ci,Ja]=j.useState(!1),[re,Be]=j.useState({name:"",role:"Principal",photo:"/principal.jpg",qualification:"",experience:"",joined:"",school:"Sarvodaya Vidyalaya",message:"",quote:"",stat1num:"25+",stat1label:"Years Experience",stat2num:"5000+",stat2label:"Students Guided",stat3num:"100%",stat3label:"Board Results",stat4num:"30+",stat4label:"Awards Won"}),[Ds,rn]=j.useState(!1),[Ae,ua]=j.useState({phone:"",email:"",address:"",city:"",officeHours:"Mon – Sat, 8:00 AM – 2:30 PM",facebookUrl:"",twitterUrl:"",instagramUrl:"",whatsappNum:"",mapSrc:"https://www.google.com/maps?q=Hingna,Nagpur,Maharashtra&output=embed"}),[cn,ui]=j.useState(!1),Os=window.location.hostname==="localhost"?"http://localhost:5000":"https://svv-school-backend.onrender.com";j.useEffect(()=>{const b=()=>{Re(new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}))};b();const $=setInterval(b,1e3);return()=>clearInterval($)},[]),j.useEffect(()=>{localStorage.getItem("adminAuth")||c("/admin"),M(JSON.parse(localStorage.getItem("notices"))||[]),H(JSON.parse(localStorage.getItem("events"))||[]),Y(JSON.parse(localStorage.getItem("academics"))||[]),X(JSON.parse(localStorage.getItem("gallery"))||[]);const b=JSON.parse(localStorage.getItem("managementList")||"[]");b.length>0&&I(b);const $=JSON.parse(localStorage.getItem("teacherList")||"[]");$.length>0&&Z($);const Ie=JSON.parse(localStorage.getItem("successList")||"[]");Ie.length>0&&Pa(Ie);const Le=JSON.parse(localStorage.getItem("principalInfo")||"{}");Object.keys(Le).length>0&&Be(tt=>({...tt,...Le}));const ma=JSON.parse(localStorage.getItem("contactInfo")||"{}");Object.keys(ma).length>0&&ua(tt=>({...tt,...ma}));const sa=localStorage.getItem("newsAlertEnabled");sa!==null&&ca(sa==="true")},[c]),j.useEffect(()=>{fetch(`${Os}/api/admissions`).then(b=>b.json()).then(b=>k(b)).catch(b=>console.log(b))},[]);const ia=()=>{if(!u.trim())return;const b=[...g,u.trim()];M(b),localStorage.setItem("notices",JSON.stringify(b)),m(""),window.dispatchEvent(new Event("noticesUpdated"))},Rs=b=>{const $=g.filter((Ie,Le)=>Le!==b);M($),localStorage.setItem("notices",JSON.stringify($)),window.dispatchEvent(new Event("noticesUpdated"))},un=(b,$,Ie,Le,ma)=>{if(!b.trim())return;const sa=[...$,b.trim()];Ie(sa),localStorage.setItem(Le,JSON.stringify(sa)),ma("")},on=(b,$,Ie,Le)=>{const ma=$.filter((sa,tt)=>tt!==b);Ie(ma),localStorage.setItem(Le,JSON.stringify(ma))},$t=()=>un(h,z,H,"events",v),oi=()=>un(A,Q,Y,"academics",S),di=b=>on(b,z,H,"events"),_s=b=>on(b,Q,Y,"academics"),fi=()=>{const b=!ze;ca(b),localStorage.setItem("newsAlertEnabled",String(b)),window.dispatchEvent(new Event("newsAlertToggled"))},Wt=()=>{if(!B)return;const b=new FileReader;b.onloadend=()=>{const $=[...V,b.result];X($),localStorage.setItem("gallery",JSON.stringify($)),le(null)},b.readAsDataURL(B)},oa=b=>{const $=V.filter((Ie,Le)=>Le!==b);X($),localStorage.setItem("gallery",JSON.stringify($))},Ka=()=>{if(!Fe)return;const b=new FileReader;b.onloadend=()=>{localStorage.setItem("brochureData",b.result),localStorage.setItem("brochureName",Fe.name),We(Fe.name),Sa(null),O(!0),setTimeout(()=>O(!1),3e3),window.dispatchEvent(new Event("brochureUpdated"))},b.readAsDataURL(Fe)},da=()=>{localStorage.removeItem("brochureData"),localStorage.removeItem("brochureName"),We(""),Sa(null),window.dispatchEvent(new Event("brochureUpdated"))},Us=()=>{if(!se.name.trim()||!se.role.trim())return;const b=[...q,{...se}];I(b),localStorage.setItem("managementList",JSON.stringify(b)),me({name:"",role:"",message:"",img:""}),U(!0),setTimeout(()=>U(!1),3e3)},Hs=b=>{const $=q.filter((Ie,Le)=>Le!==b);I($),localStorage.setItem("managementList",JSON.stringify($))},Bs=()=>{if(!F.name.trim()||!F.subject.trim())return;const b=[...G,{...F}];Z(b),localStorage.setItem("teacherList",JSON.stringify(b)),te({name:"",subject:"",experience:"",img:""}),Je(!0),setTimeout(()=>Je(!1),3e3)},gl=b=>{const $=G.filter((Ie,Le)=>Le!==b);Z($),localStorage.setItem("teacherList",JSON.stringify($))},vl=()=>{if(!na.name.trim()||!na.achievement.trim())return;const b=[...ye,{...na}];Pa(b),localStorage.setItem("successList",JSON.stringify(b)),et({name:"",achievement:"",year:"",img:""}),Ja(!0),setTimeout(()=>Ja(!1),3e3)},bl=b=>{const $=ye.filter((Ie,Le)=>Le!==b);Pa($),localStorage.setItem("successList",JSON.stringify($))},at=()=>{localStorage.setItem("principalInfo",JSON.stringify(re)),rn(!0),setTimeout(()=>rn(!1),3e3)},xl=()=>{localStorage.setItem("contactInfo",JSON.stringify(Ae)),ui(!0),setTimeout(()=>ui(!1),3e3)},Ft=()=>{localStorage.removeItem("adminAuth"),c("/admin")},Ls=()=>{const $=`Name,Email,Phone,Stream,Message
`+L.map(sa=>`"${sa.name}","${sa.email}","${sa.phone}","${sa.stream||""}","${sa.message||""}"`).join(`
`),Ie=new Blob([$],{type:"text/csv"}),Le=window.URL.createObjectURL(Ie),ma=document.createElement("a");ma.href=Le,ma.download="admissions.csv",ma.click()},yl=L.filter(b=>b.name?.toLowerCase().includes(xe.toLowerCase())),dn=[{id:"overview",icon:"📊",label:"Overview"},{id:"news",icon:"📢",label:"News & Alerts",badge:g.length},{id:"events",icon:"📅",label:"Events",badge:z.length},{id:"academics",icon:"📚",label:"Academics",badge:Q.length},{id:"gallery",icon:"🖼️",label:"Gallery",badge:V.length},{id:"brochure",icon:"📄",label:"Brochure"},{id:"admissions",icon:"🎓",label:"Admissions",badge:L.length},{id:"principal",icon:"👩‍💼",label:"Principal"},{id:"contact",icon:"📍",label:"Contact"},{id:"management",icon:"👔",label:"Management",badge:q.length},{id:"teachers",icon:"🧑‍🏫",label:"Teachers",badge:G.length},{id:"success",icon:"🏆",label:"Success Stories",badge:ye.length}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:mv}),i.jsxs("div",{className:"adm-wrap",children:[i.jsxs("div",{className:"adm-topbar",children:[i.jsxs("div",{className:"adm-topbar-left",children:[i.jsx("div",{className:"adm-logo-box",children:"SVK"}),i.jsxs("div",{children:[i.jsx("div",{className:"adm-topbar-title",children:"Admin Dashboard"}),i.jsx("div",{className:"adm-topbar-sub",children:"Sarvodaya Vidyalaya"})]})]}),i.jsxs("div",{className:"adm-topbar-right",children:[i.jsxs("span",{className:"adm-time",children:["🕐 ",ee]}),i.jsx("button",{className:"adm-logout-btn",onClick:Ft,children:"⬠ Logout"})]})]}),i.jsxs("div",{className:"adm-layout",children:[i.jsxs("div",{className:"adm-sidebar",children:[i.jsx("div",{className:"adm-sidebar-section",children:"Navigation"}),dn.map(b=>i.jsxs("button",{className:`adm-tab-btn ${f===b.id?"active":""}`,onClick:()=>d(b.id),children:[i.jsx("span",{className:"adm-tab-icon",children:b.icon}),b.label,b.badge!==void 0&&b.badge>0&&i.jsx("span",{className:"adm-tab-badge",children:b.badge})]},b.id)),i.jsxs("div",{className:"adm-sidebar-stats",children:[i.jsxs("div",{className:"adm-sidebar-stat",children:[i.jsx("span",{children:"Total Items"}),i.jsx("strong",{children:g.length+z.length+Q.length+V.length})]}),i.jsxs("div",{className:"adm-sidebar-stat",children:[i.jsx("span",{children:"Admissions"}),i.jsx("strong",{children:L.length})]}),i.jsxs("div",{className:"adm-sidebar-stat",children:[i.jsx("span",{children:"News Ticker"}),i.jsx("strong",{style:{color:ze?"#68d391":"#fc8181"},children:ze?"ON":"OFF"})]})]})]}),i.jsxs("div",{className:"adm-content",children:[f==="overview"&&i.jsxs("div",{children:[i.jsx("div",{className:"adm-tab-header",children:i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Dashboard"}),i.jsx("div",{className:"adm-tab-title",children:"Overview"})]})}),i.jsx("div",{className:"adm-overview-grid",children:[{icon:"📢",label:"Notices",num:g.length,hint:"Click to manage",tab:"news"},{icon:"📅",label:"Events",num:z.length,hint:"Click to manage",tab:"events"},{icon:"📚",label:"Academics",num:Q.length,hint:"Click to manage",tab:"academics"},{icon:"🖼️",label:"Gallery",num:V.length,hint:"Click to manage",tab:"gallery"},{icon:"🎓",label:"Admissions",num:L.length,hint:"Click to view",tab:"admissions"},{icon:"👔",label:"Management",num:q.length,hint:"Click to manage",tab:"management"},{icon:"🧑‍🏫",label:"Teachers",num:G.length,hint:"Click to manage",tab:"teachers"},{icon:"🏆",label:"Success",num:ye.length,hint:"Click to manage",tab:"success"}].map(b=>i.jsxs("div",{className:"adm-ov-card",onClick:()=>d(b.tab),children:[i.jsx("div",{className:"adm-ov-icon",children:b.icon}),i.jsxs("div",{children:[i.jsx("div",{className:"adm-ov-num",children:b.num}),i.jsx("div",{className:"adm-ov-label",children:b.label}),i.jsxs("div",{className:"adm-ov-hint",children:[b.hint," →"]})]})]},b.label))}),i.jsxs("div",{className:"adm-grid-2",style:{marginTop:"8px"},children:[i.jsx(Ma,{icon:"🔔",title:"News Ticker Status",count:ze?"ON":"OFF",children:i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"14px"},children:[i.jsx("span",{style:{color:"var(--muted)",fontSize:"0.88rem"},children:ze?"Visitors currently see the scrolling news ticker.":"The news ticker is hidden from the website."}),i.jsx("button",{className:ze?"adm-btn-del":"adm-btn-gold",onClick:fi,style:{minWidth:"110px"},children:ze?"Turn Off":"Turn On"})]})}),i.jsxs(Ma,{icon:"📄",title:"Brochure Status",count:Ze?"Uploaded":"None",children:[i.jsx("div",{style:{fontSize:"0.88rem",color:"var(--muted)"},children:Ze?i.jsxs("span",{style:{color:"var(--success)",fontWeight:600},children:["📄 ",Ze," — Live on navbar"]}):"No brochure uploaded. Go to the Brochure tab to upload a PDF."}),i.jsx("button",{className:"adm-btn-gold",onClick:()=>d("brochure"),style:{marginTop:"12px",fontSize:"0.78rem",padding:"7px 14px"},children:"Manage Brochure →"})]})]})]}),f==="news"&&i.jsxs("div",{children:[i.jsxs("div",{className:"adm-tab-header",children:[i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Content"}),i.jsx("div",{className:"adm-tab-title",children:"News & Alerts"})]}),i.jsxs("button",{className:ze?"adm-btn-del":"adm-btn-gold",onClick:fi,style:{minWidth:"130px"},children:["Ticker: ",ze?"ON — Turn Off":"OFF — Turn On"]})]}),i.jsxs(Ma,{icon:"📢",title:"News Ticker Items",count:g.length,children:[i.jsxs("div",{className:"adm-input-row",children:[i.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter news item...",value:u,onChange:b=>m(b.target.value),onKeyDown:b=>b.key==="Enter"&&ia()}),i.jsx("button",{className:"adm-btn-add",onClick:ia,children:"+ Add"})]}),i.jsx("p",{style:{marginBottom:"12px",color:"var(--muted)",fontSize:"0.84rem"},children:"These messages appear in the scrolling ticker at the top of the public site."}),i.jsxs("ul",{className:"adm-list",children:[g.length===0&&i.jsx("div",{className:"adm-list-empty",children:"No news items yet"}),g.map((b,$)=>i.jsxs("li",{className:"adm-list-item",children:[i.jsx("span",{children:b}),i.jsx("button",{className:"adm-btn-del",onClick:()=>Rs($),children:"✕"})]},$))]})]})]}),f==="events"&&i.jsxs("div",{children:[i.jsx("div",{className:"adm-tab-header",children:i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Content"}),i.jsx("div",{className:"adm-tab-title",children:"Events"})]})}),i.jsxs(Ma,{icon:"📅",title:"Events",count:z.length,children:[i.jsxs("div",{className:"adm-input-row",children:[i.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter event...",value:h,onChange:b=>v(b.target.value),onKeyDown:b=>b.key==="Enter"&&$t()}),i.jsx("button",{className:"adm-btn-add",onClick:$t,children:"+ Add"})]}),i.jsxs("ul",{className:"adm-list",children:[z.length===0&&i.jsx("div",{className:"adm-list-empty",children:"No events yet"}),z.map((b,$)=>i.jsxs("li",{className:"adm-list-item",children:[i.jsx("span",{children:b}),i.jsx("button",{className:"adm-btn-del",onClick:()=>di($),children:"✕"})]},$))]})]})]}),f==="academics"&&i.jsxs("div",{children:[i.jsx("div",{className:"adm-tab-header",children:i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Content"}),i.jsx("div",{className:"adm-tab-title",children:"Academics"})]})}),i.jsxs(Ma,{icon:"📚",title:"Academics",count:Q.length,children:[i.jsxs("div",{className:"adm-input-row",children:[i.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter academic info...",value:A,onChange:b=>S(b.target.value),onKeyDown:b=>b.key==="Enter"&&oi()}),i.jsx("button",{className:"adm-btn-add",onClick:oi,children:"+ Add"})]}),i.jsxs("ul",{className:"adm-list",children:[Q.length===0&&i.jsx("div",{className:"adm-list-empty",children:"No items yet"}),Q.map((b,$)=>i.jsxs("li",{className:"adm-list-item",children:[i.jsx("span",{children:b}),i.jsx("button",{className:"adm-btn-del",onClick:()=>_s($),children:"✕"})]},$))]})]})]}),f==="gallery"&&i.jsxs("div",{children:[i.jsx("div",{className:"adm-tab-header",children:i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Media"}),i.jsx("div",{className:"adm-tab-title",children:"Gallery"})]})}),i.jsxs(Ma,{icon:"🖼️",title:"Gallery",count:V.length,children:[i.jsxs("label",{className:"adm-file-zone",children:[i.jsx("input",{type:"file",accept:"image/*",onChange:b=>le(b.target.files[0])}),i.jsx("span",{className:"adm-file-zone-label",children:B?i.jsxs("span",{className:"adm-file-selected",children:["✅ ",B.name]}):i.jsxs(i.Fragment,{children:[i.jsx("strong",{children:"Click to choose"})," an image to upload"]})})]}),i.jsx("button",{className:"adm-btn-gold",onClick:Wt,disabled:!B,style:{opacity:B?1:.5,cursor:B?"pointer":"not-allowed",marginBottom:"8px"},children:"⬆ Upload Image"}),i.jsxs("div",{className:"adm-gallery-grid",children:[V.length===0&&i.jsx("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:"30px",color:"var(--muted)",fontSize:"0.83rem"},children:"No images uploaded yet"}),V.map((b,$)=>i.jsxs("div",{className:"adm-gallery-item",children:[i.jsx("img",{src:b,alt:`gallery-${$}`}),i.jsx("button",{className:"adm-gallery-del",onClick:()=>oa($),children:"✕"})]},$))]})]})]}),f==="brochure"&&i.jsxs("div",{children:[i.jsx("div",{className:"adm-tab-header",children:i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Media"}),i.jsx("div",{className:"adm-tab-title",children:"School Brochure"})]})}),i.jsxs(Ma,{icon:"📄",title:"Download Brochure — activates the navbar button",count:Ze?"Uploaded":"None",children:[i.jsxs("p",{style:{color:"var(--muted)",fontSize:"0.85rem",marginBottom:"14px"},children:["Upload a PDF here. Once uploaded, the ",i.jsx("strong",{style:{color:"var(--navy)"},children:"Download Brochure"})," button in the navbar becomes active for visitors."]}),i.jsxs("label",{className:"adm-file-zone",children:[i.jsx("input",{type:"file",accept:"application/pdf",onChange:b=>Sa(b.target.files[0])}),i.jsx("span",{className:"adm-file-zone-label",children:Fe?i.jsxs("span",{className:"adm-file-selected",children:["✅ ",Fe.name]}):i.jsxs(i.Fragment,{children:[i.jsx("strong",{children:"Click to choose"})," a PDF brochure to upload"]})})]}),i.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[i.jsx("button",{className:"adm-btn-gold",onClick:Ka,disabled:!Fe,style:{opacity:Fe?1:.5,cursor:Fe?"pointer":"not-allowed"},children:"⬆ Upload Brochure"}),Ze&&i.jsx("button",{className:"adm-btn-del",onClick:da,children:"✕ Remove"}),ja&&i.jsx("span",{className:"adm-save-badge",children:"✅ Uploaded! Navbar button is now active."})]}),Ze?i.jsxs("div",{className:"adm-brochure-active",children:[i.jsx("div",{className:"adm-brochure-icon",children:"📄"}),i.jsxs("div",{className:"adm-brochure-info",children:[i.jsx("div",{className:"adm-brochure-name",children:Ze}),i.jsx("div",{className:"adm-brochure-hint",children:"✅ Live — visitors can download from the navbar"})]})]}):i.jsx("div",{className:"adm-brochure-none",children:"No brochure uploaded yet — navbar button will appear dimmed."})]})]}),f==="admissions"&&i.jsxs("div",{children:[i.jsxs("div",{className:"adm-tab-header",children:[i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Students"}),i.jsx("div",{className:"adm-tab-title",children:"Admission Requests"})]}),i.jsx("button",{className:"adm-btn-gold",onClick:Ls,children:"⬇ Export CSV"})]}),i.jsxs(Ma,{icon:"🎓",title:"Admission Requests",count:yl.length,children:[i.jsx("div",{className:"adm-search-row",children:i.jsx("input",{className:"adm-input",type:"text",placeholder:"🔍  Search student by name...",value:xe,onChange:b=>De(b.target.value)})}),i.jsx("div",{className:"adm-table-wrap",children:i.jsxs("table",{className:"adm-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"#"}),i.jsx("th",{children:"Name"}),i.jsx("th",{children:"Email"}),i.jsx("th",{children:"Phone"}),i.jsx("th",{children:"Stream"}),i.jsx("th",{children:"Message"})]})}),i.jsx("tbody",{children:yl.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"28px",color:"var(--muted)"},children:"No admission requests found"})}):yl.map((b,$)=>i.jsxs("tr",{children:[i.jsx("td",{className:"muted",children:$+1}),i.jsx("td",{children:i.jsx("strong",{children:b.name})}),i.jsx("td",{className:"muted",children:b.email}),i.jsx("td",{className:"muted",children:b.phone}),i.jsx("td",{children:b.stream?i.jsx("span",{className:"stream-badge",children:b.stream}):i.jsx("span",{style:{color:"var(--muted)"},children:"—"})}),i.jsx("td",{children:b.message||i.jsx("span",{style:{color:"var(--muted)"},children:"—"})})]},$))})]})})]})]}),f==="principal"&&i.jsxs("div",{children:[i.jsxs("div",{className:"adm-tab-header",children:[i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Staff"}),i.jsx("div",{className:"adm-tab-title",children:"Principal Info"})]}),i.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[Ds&&i.jsx("span",{className:"adm-save-badge",children:"✅ Saved!"}),i.jsx("button",{className:"adm-btn-gold",onClick:at,children:"💾 Save Changes"})]})]}),i.jsxs(Ma,{icon:"👩‍💼",title:"Principal Info — reflects on /principal page",children:[i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Full Name"}),i.jsx("input",{className:"adm-input",placeholder:"Dr. Sunita Sharma",value:re.name,onChange:b=>Be({...re,name:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Role / Title"}),i.jsx("input",{className:"adm-input",placeholder:"Principal",value:re.role,onChange:b=>Be({...re,role:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Qualification"}),i.jsx("input",{className:"adm-input",placeholder:"M.Sc., B.Ed., Ph.D.",value:re.qualification,onChange:b=>Be({...re,qualification:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Experience"}),i.jsx("input",{className:"adm-input",placeholder:"25+ Years",value:re.experience,onChange:b=>Be({...re,experience:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Joined Since"}),i.jsx("input",{className:"adm-input",placeholder:"Since 2010",value:re.joined,onChange:b=>Be({...re,joined:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Photo Path"}),i.jsx("input",{className:"adm-input",placeholder:"/principal.jpg",value:re.photo,onChange:b=>Be({...re,photo:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Message"}),i.jsx("textarea",{className:"adm-input",style:{minHeight:"120px"},placeholder:"Write the principal's message here...",value:re.message,onChange:b=>Be({...re,message:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Highlight Quote"}),i.jsx("input",{className:"adm-input",placeholder:"Education is not the filling of a pail...",value:re.quote,onChange:b=>Be({...re,quote:b.target.value})})]}),i.jsx("div",{className:"adm-field-label",style:{marginBottom:"10px"},children:"Achievement Stats"}),i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Stat 1 Number"}),i.jsx("input",{className:"adm-input",placeholder:"25+",value:re.stat1num,onChange:b=>Be({...re,stat1num:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Stat 1 Label"}),i.jsx("input",{className:"adm-input",placeholder:"Years Experience",value:re.stat1label,onChange:b=>Be({...re,stat1label:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Stat 2 Number"}),i.jsx("input",{className:"adm-input",placeholder:"5000+",value:re.stat2num,onChange:b=>Be({...re,stat2num:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Stat 2 Label"}),i.jsx("input",{className:"adm-input",placeholder:"Students Guided",value:re.stat2label,onChange:b=>Be({...re,stat2label:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Stat 3 Number"}),i.jsx("input",{className:"adm-input",placeholder:"100%",value:re.stat3num,onChange:b=>Be({...re,stat3num:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Stat 3 Label"}),i.jsx("input",{className:"adm-input",placeholder:"Board Results",value:re.stat3label,onChange:b=>Be({...re,stat3label:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Stat 4 Number"}),i.jsx("input",{className:"adm-input",placeholder:"30+",value:re.stat4num,onChange:b=>Be({...re,stat4num:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Stat 4 Label"}),i.jsx("input",{className:"adm-input",placeholder:"Awards Won",value:re.stat4label,onChange:b=>Be({...re,stat4label:b.target.value})})]})]})]})]}),f==="contact"&&i.jsxs("div",{children:[i.jsxs("div",{className:"adm-tab-header",children:[i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Settings"}),i.jsx("div",{className:"adm-tab-title",children:"Contact Info"})]}),i.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[cn&&i.jsx("span",{className:"adm-save-badge",children:"✅ Saved!"}),i.jsx("button",{className:"adm-btn-gold",onClick:xl,children:"💾 Save Changes"})]})]}),i.jsxs(Ma,{icon:"📍",title:"Contact Info — reflects on /contact page",children:[i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Phone Number"}),i.jsx("input",{className:"adm-input",placeholder:"+91 98765 43210",value:Ae.phone,onChange:b=>ua({...Ae,phone:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Email Address"}),i.jsx("input",{className:"adm-input",placeholder:"info@sarvodayavk.edu.in",value:Ae.email,onChange:b=>ua({...Ae,email:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Address"}),i.jsx("input",{className:"adm-input",placeholder:"Hingna Road, Near Main Bus Stop",value:Ae.address,onChange:b=>ua({...Ae,address:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"City / District"}),i.jsx("input",{className:"adm-input",placeholder:"Hingna, Nagpur – 441110",value:Ae.city,onChange:b=>ua({...Ae,city:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Office Hours"}),i.jsx("input",{className:"adm-input",placeholder:"Mon – Sat, 8:00 AM – 2:30 PM",value:Ae.officeHours,onChange:b=>ua({...Ae,officeHours:b.target.value})})]}),i.jsx("div",{className:"adm-field-label",style:{marginBottom:"10px"},children:"Social Media Links"}),i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Facebook URL"}),i.jsx("input",{className:"adm-input",placeholder:"https://facebook.com/yourpage",value:Ae.facebookUrl,onChange:b=>ua({...Ae,facebookUrl:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Twitter / X URL"}),i.jsx("input",{className:"adm-input",placeholder:"https://twitter.com/yourpage",value:Ae.twitterUrl,onChange:b=>ua({...Ae,twitterUrl:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Instagram URL"}),i.jsx("input",{className:"adm-input",placeholder:"https://instagram.com/yourpage",value:Ae.instagramUrl,onChange:b=>ua({...Ae,instagramUrl:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"WhatsApp Number"}),i.jsx("input",{className:"adm-input",placeholder:"919876543210",value:Ae.whatsappNum,onChange:b=>ua({...Ae,whatsappNum:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Google Maps Embed URL"}),i.jsx("input",{className:"adm-input",placeholder:"https://www.google.com/maps?q=...&output=embed",value:Ae.mapSrc,onChange:b=>ua({...Ae,mapSrc:b.target.value})})]})]})]}),f==="management"&&i.jsxs("div",{children:[i.jsx("div",{className:"adm-tab-header",children:i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Staff"}),i.jsx("div",{className:"adm-tab-title",children:"Management Team"})]})}),i.jsxs(Ma,{icon:"👔",title:"Management Team — reflects on /management page",count:q.length,children:[i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Full Name"}),i.jsx("input",{className:"adm-input",placeholder:"Dr. A. Deshmukh",value:se.name,onChange:b=>me({...se,name:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Role / Title"}),i.jsx("input",{className:"adm-input",placeholder:"Chairman",value:se.role,onChange:b=>me({...se,role:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Message / Quote"}),i.jsx("textarea",{className:"adm-input",placeholder:"Our vision is to provide quality education...",value:se.message,onChange:b=>me({...se,message:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Photo URL"}),i.jsx("input",{className:"adm-input",placeholder:"https://randomuser.me/api/portraits/men/11.jpg",value:se.img,onChange:b=>me({...se,img:b.target.value})})]}),i.jsxs("div",{className:"adm-save-row",children:[y&&i.jsx("span",{className:"adm-save-badge",children:"✅ Member added!"}),i.jsx("button",{className:"adm-btn-gold",onClick:Us,children:"+ Add Member"})]}),q.length>0?i.jsx("ul",{className:"adm-list",style:{marginTop:"16px"},children:q.map((b,$)=>i.jsxs("li",{className:"adm-list-item",children:[b.img&&i.jsx("img",{src:b.img,alt:b.name,style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",flexShrink:0}}),i.jsxs("span",{children:[i.jsx("strong",{children:b.name})," — ",b.role]}),i.jsx("button",{className:"adm-btn-del",onClick:()=>Hs($),children:"✕"})]},$))}):i.jsx("div",{className:"adm-list-empty",children:"No management members added yet"})]})]}),f==="teachers"&&i.jsxs("div",{children:[i.jsx("div",{className:"adm-tab-header",children:i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Staff"}),i.jsx("div",{className:"adm-tab-title",children:"Teachers"})]})}),i.jsxs(Ma,{icon:"🧑‍🏫",title:"Teachers — reflects on /teachers page",count:G.length,children:[i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Full Name"}),i.jsx("input",{className:"adm-input",placeholder:"Mr. Rajesh Sharma",value:F.name,onChange:b=>te({...F,name:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Subject"}),i.jsx("input",{className:"adm-input",placeholder:"Mathematics",value:F.subject,onChange:b=>te({...F,subject:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Experience"}),i.jsx("input",{className:"adm-input",placeholder:"10+ Years",value:F.experience,onChange:b=>te({...F,experience:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Photo URL"}),i.jsx("input",{className:"adm-input",placeholder:"https://randomuser.me/api/portraits/men/32.jpg",value:F.img,onChange:b=>te({...F,img:b.target.value})})]})]}),i.jsxs("div",{className:"adm-save-row",children:[he&&i.jsx("span",{className:"adm-save-badge",children:"✅ Teacher added!"}),i.jsx("button",{className:"adm-btn-gold",onClick:Bs,children:"+ Add Teacher"})]}),G.length>0?i.jsx("ul",{className:"adm-list",style:{marginTop:"16px"},children:G.map((b,$)=>i.jsxs("li",{className:"adm-list-item",children:[b.img&&i.jsx("img",{src:b.img,alt:b.name,style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",flexShrink:0}}),i.jsxs("span",{children:[i.jsx("strong",{children:b.name})," — ",b.subject," · ",b.experience]}),i.jsx("button",{className:"adm-btn-del",onClick:()=>gl($),children:"✕"})]},$))}):i.jsx("div",{className:"adm-list-empty",children:"No teachers added yet"})]})]}),f==="success"&&i.jsxs("div",{children:[i.jsx("div",{className:"adm-tab-header",children:i.jsxs("div",{className:"adm-tab-header-left",children:[i.jsx("div",{className:"adm-tab-label",children:"Content"}),i.jsx("div",{className:"adm-tab-title",children:"Success Stories"})]})}),i.jsxs(Ma,{icon:"🏆",title:"Success Stories — reflects on /success page",count:ye.length,children:[i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Student Name"}),i.jsx("input",{className:"adm-input",placeholder:"Rahul Verma",value:na.name,onChange:b=>et({...na,name:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Year"}),i.jsx("input",{className:"adm-input",placeholder:"2025",value:na.year,onChange:b=>et({...na,year:b.target.value})})]})]}),i.jsxs("div",{className:"adm-field-row-2",children:[i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Achievement"}),i.jsx("input",{className:"adm-input",placeholder:"Selected in IIT Bombay",value:na.achievement,onChange:b=>et({...na,achievement:b.target.value})})]}),i.jsxs("div",{className:"adm-field-group",children:[i.jsx("label",{className:"adm-field-label",children:"Photo URL"}),i.jsx("input",{className:"adm-input",placeholder:"https://randomuser.me/api/portraits/men/12.jpg",value:na.img,onChange:b=>et({...na,img:b.target.value})})]})]}),i.jsxs("div",{className:"adm-save-row",children:[ci&&i.jsx("span",{className:"adm-save-badge",children:"✅ Story added!"}),i.jsx("button",{className:"adm-btn-gold",onClick:vl,children:"+ Add Story"})]}),ye.length>0?i.jsx("ul",{className:"adm-list",style:{marginTop:"16px"},children:ye.map((b,$)=>i.jsxs("li",{className:"adm-list-item",children:[b.img&&i.jsx("img",{src:b.img,alt:b.name,style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",flexShrink:0}}),i.jsxs("span",{children:[i.jsx("strong",{children:b.name})," — ",b.achievement," ",i.jsxs("span",{style:{color:"var(--gold)",fontWeight:600},children:["(",b.year,")"]})]}),i.jsx("button",{className:"adm-btn-del",onClick:()=>bl($),children:"✕"})]},$))}):i.jsx("div",{className:"adm-list-empty",children:"No success stories added yet"})]})]})]})]})]})]})}function pv(){return i.jsxs(U0,{children:[i.jsx(V0,{}),i.jsx(W0,{}),i.jsxs(d0,{children:[i.jsx(Ya,{path:"/",element:i.jsx(I0,{})}),i.jsx(Ya,{path:"/about",element:i.jsx(P0,{})}),i.jsx(Ya,{path:"/academics",element:i.jsx(ev,{})}),i.jsx(Ya,{path:"/gallery",element:i.jsx(av,{})}),i.jsx(Ya,{path:"/contact",element:i.jsx(lv,{})}),i.jsx(Ya,{path:"/teachers",element:i.jsx(iv,{})}),i.jsx(Ya,{path:"/management",element:i.jsx(rv,{})}),i.jsx(Ya,{path:"/success",element:i.jsx(uv,{})}),i.jsx(Ya,{path:"/principal",element:i.jsx(ov,{})}),i.jsx(Ya,{path:"/admin",element:i.jsx(fv,{})}),i.jsx(Ya,{path:"/admin-dashboard",element:i.jsx(hv,{})})]}),i.jsx(K0,{}),i.jsx(J0,{})]})}hg.createRoot(document.getElementById("root")).render(i.jsx(su.StrictMode,{children:i.jsx(pv,{})}));
