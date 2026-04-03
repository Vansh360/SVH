(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))s(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function d(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(m){if(m.ep)return;m.ep=!0;const p=d(m);fetch(m.href,p)}})();function sm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Tr={exports:{}},Dn={};var Kd;function eg(){if(Kd)return Dn;Kd=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(s,m,p){var g=null;if(p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),"key"in m){p={};for(var M in m)M!=="key"&&(p[M]=m[M])}else p=m;return m=p.ref,{$$typeof:r,type:s,key:g,ref:m!==void 0?m:null,props:p}}return Dn.Fragment=f,Dn.jsx=d,Dn.jsxs=d,Dn}var Jd;function tg(){return Jd||(Jd=1,Tr.exports=eg()),Tr.exports}var c=tg(),Ar={exports:{}},ee={};var $d;function ag(){if($d)return ee;$d=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),L=Symbol.iterator;function Y(b){return b===null||typeof b!="object"?null:(b=L&&b[L]||b["@@iterator"],typeof b=="function"?b:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,H={};function Q(b,S,U){this.props=b,this.context=S,this.refs=H,this.updater=U||q}Q.prototype.isReactComponent={},Q.prototype.setState=function(b,S){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,S,"setState")},Q.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function k(){}k.prototype=Q.prototype;function K(b,S,U){this.props=b,this.context=S,this.refs=H,this.updater=U||q}var se=K.prototype=new k;se.constructor=K,B(se,Q.prototype),se.isPureReactComponent=!0;var ye=Array.isArray;function Te(){}var P={H:null,A:null,T:null,S:null},Ee=Object.prototype.hasOwnProperty;function De(b,S,U){var X=U.ref;return{$$typeof:r,type:b,key:S,ref:X!==void 0?X:null,props:U}}function We(b,S){return De(b.type,S,b.props)}function it(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function Xe(b){var S={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(U){return S[U]})}var Lt=/\/+/g;function Mt(b,S){return typeof b=="object"&&b!==null&&b.key!=null?Xe(""+b.key):S.toString(36)}function ut(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Te,Te):(b.status="pending",b.then(function(S){b.status==="pending"&&(b.status="fulfilled",b.value=S)},function(S){b.status==="pending"&&(b.status="rejected",b.reason=S)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function w(b,S,U,X,$){var I=typeof b;(I==="undefined"||I==="boolean")&&(b=null);var le=!1;if(b===null)le=!0;else switch(I){case"bigint":case"string":case"number":le=!0;break;case"object":switch(b.$$typeof){case r:case f:le=!0;break;case R:return le=b._init,w(le(b._payload),S,U,X,$)}}if(le)return $=$(b),le=X===""?"."+Mt(b,0):X,ye($)?(U="",le!=null&&(U=le.replace(Lt,"$&/")+"/"),w($,S,U,"",function(Bl){return Bl})):$!=null&&(it($)&&($=We($,U+($.key==null||b&&b.key===$.key?"":(""+$.key).replace(Lt,"$&/")+"/")+le)),S.push($)),1;le=0;var Qe=X===""?".":X+":";if(ye(b))for(var we=0;we<b.length;we++)X=b[we],I=Qe+Mt(X,we),le+=w(X,S,U,I,$);else if(we=Y(b),typeof we=="function")for(b=we.call(b),we=0;!(X=b.next()).done;)X=X.value,I=Qe+Mt(X,we++),le+=w(X,S,U,I,$);else if(I==="object"){if(typeof b.then=="function")return w(ut(b),S,U,X,$);throw S=String(b),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return le}function G(b,S,U){if(b==null)return b;var X=[],$=0;return w(b,X,"","",function(I){return S.call(U,I,$++)}),X}function F(b){if(b._status===-1){var S=b._result;S=S(),S.then(function(U){(b._status===0||b._status===-1)&&(b._status=1,b._result=U)},function(U){(b._status===0||b._status===-1)&&(b._status=2,b._result=U)}),b._status===-1&&(b._status=0,b._result=S)}if(b._status===1)return b._result.default;throw b._result}var he=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},de={map:G,forEach:function(b,S,U){G(b,function(){S.apply(this,arguments)},U)},count:function(b){var S=0;return G(b,function(){S++}),S},toArray:function(b){return G(b,function(S){return S})||[]},only:function(b){if(!it(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ee.Activity=A,ee.Children=de,ee.Component=Q,ee.Fragment=d,ee.Profiler=m,ee.PureComponent=K,ee.StrictMode=s,ee.Suspense=j,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ee.__COMPILER_RUNTIME={__proto__:null,c:function(b){return P.H.useMemoCache(b)}},ee.cache=function(b){return function(){return b.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(b,S,U){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var X=B({},b.props),$=b.key;if(S!=null)for(I in S.key!==void 0&&($=""+S.key),S)!Ee.call(S,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&S.ref===void 0||(X[I]=S[I]);var I=arguments.length-2;if(I===1)X.children=U;else if(1<I){for(var le=Array(I),Qe=0;Qe<I;Qe++)le[Qe]=arguments[Qe+2];X.children=le}return De(b.type,$,X)},ee.createContext=function(b){return b={$$typeof:g,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:p,_context:b},b},ee.createElement=function(b,S,U){var X,$={},I=null;if(S!=null)for(X in S.key!==void 0&&(I=""+S.key),S)Ee.call(S,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&($[X]=S[X]);var le=arguments.length-2;if(le===1)$.children=U;else if(1<le){for(var Qe=Array(le),we=0;we<le;we++)Qe[we]=arguments[we+2];$.children=Qe}if(b&&b.defaultProps)for(X in le=b.defaultProps,le)$[X]===void 0&&($[X]=le[X]);return De(b,I,$)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(b){return{$$typeof:M,render:b}},ee.isValidElement=it,ee.lazy=function(b){return{$$typeof:R,_payload:{_status:-1,_result:b},_init:F}},ee.memo=function(b,S){return{$$typeof:y,type:b,compare:S===void 0?null:S}},ee.startTransition=function(b){var S=P.T,U={};P.T=U;try{var X=b(),$=P.S;$!==null&&$(U,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Te,he)}catch(I){he(I)}finally{S!==null&&U.types!==null&&(S.types=U.types),P.T=S}},ee.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ee.use=function(b){return P.H.use(b)},ee.useActionState=function(b,S,U){return P.H.useActionState(b,S,U)},ee.useCallback=function(b,S){return P.H.useCallback(b,S)},ee.useContext=function(b){return P.H.useContext(b)},ee.useDebugValue=function(){},ee.useDeferredValue=function(b,S){return P.H.useDeferredValue(b,S)},ee.useEffect=function(b,S){return P.H.useEffect(b,S)},ee.useEffectEvent=function(b){return P.H.useEffectEvent(b)},ee.useId=function(){return P.H.useId()},ee.useImperativeHandle=function(b,S,U){return P.H.useImperativeHandle(b,S,U)},ee.useInsertionEffect=function(b,S){return P.H.useInsertionEffect(b,S)},ee.useLayoutEffect=function(b,S){return P.H.useLayoutEffect(b,S)},ee.useMemo=function(b,S){return P.H.useMemo(b,S)},ee.useOptimistic=function(b,S){return P.H.useOptimistic(b,S)},ee.useReducer=function(b,S,U){return P.H.useReducer(b,S,U)},ee.useRef=function(b){return P.H.useRef(b)},ee.useState=function(b){return P.H.useState(b)},ee.useSyncExternalStore=function(b,S,U){return P.H.useSyncExternalStore(b,S,U)},ee.useTransition=function(){return P.H.useTransition()},ee.version="19.2.3",ee}var Wd;function Br(){return Wd||(Wd=1,Ar.exports=ag()),Ar.exports}var z=Br();const om=sm(z);var Or={exports:{}},wn={},Mr={exports:{}},Rr={};var Fd;function lg(){return Fd||(Fd=1,(function(r){function f(w,G){var F=w.length;w.push(G);e:for(;0<F;){var he=F-1>>>1,de=w[he];if(0<m(de,G))w[he]=G,w[F]=de,F=he;else break e}}function d(w){return w.length===0?null:w[0]}function s(w){if(w.length===0)return null;var G=w[0],F=w.pop();if(F!==G){w[0]=F;e:for(var he=0,de=w.length,b=de>>>1;he<b;){var S=2*(he+1)-1,U=w[S],X=S+1,$=w[X];if(0>m(U,F))X<de&&0>m($,U)?(w[he]=$,w[X]=F,he=X):(w[he]=U,w[S]=F,he=S);else if(X<de&&0>m($,F))w[he]=$,w[X]=F,he=X;else break e}}return G}function m(w,G){var F=w.sortIndex-G.sortIndex;return F!==0?F:w.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var g=Date,M=g.now();r.unstable_now=function(){return g.now()-M}}var j=[],y=[],R=1,A=null,L=3,Y=!1,q=!1,B=!1,H=!1,Q=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function se(w){for(var G=d(y);G!==null;){if(G.callback===null)s(y);else if(G.startTime<=w)s(y),G.sortIndex=G.expirationTime,f(j,G);else break;G=d(y)}}function ye(w){if(B=!1,se(w),!q)if(d(j)!==null)q=!0,Te||(Te=!0,Xe());else{var G=d(y);G!==null&&ut(ye,G.startTime-w)}}var Te=!1,P=-1,Ee=5,De=-1;function We(){return H?!0:!(r.unstable_now()-De<Ee)}function it(){if(H=!1,Te){var w=r.unstable_now();De=w;var G=!0;try{e:{q=!1,B&&(B=!1,k(P),P=-1),Y=!0;var F=L;try{t:{for(se(w),A=d(j);A!==null&&!(A.expirationTime>w&&We());){var he=A.callback;if(typeof he=="function"){A.callback=null,L=A.priorityLevel;var de=he(A.expirationTime<=w);if(w=r.unstable_now(),typeof de=="function"){A.callback=de,se(w),G=!0;break t}A===d(j)&&s(j),se(w)}else s(j);A=d(j)}if(A!==null)G=!0;else{var b=d(y);b!==null&&ut(ye,b.startTime-w),G=!1}}break e}finally{A=null,L=F,Y=!1}G=void 0}}finally{G?Xe():Te=!1}}}var Xe;if(typeof K=="function")Xe=function(){K(it)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Mt=Lt.port2;Lt.port1.onmessage=it,Xe=function(){Mt.postMessage(null)}}else Xe=function(){Q(it,0)};function ut(w,G){P=Q(function(){w(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(w){w.callback=null},r.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<w?Math.floor(1e3/w):5},r.unstable_getCurrentPriorityLevel=function(){return L},r.unstable_next=function(w){switch(L){case 1:case 2:case 3:var G=3;break;default:G=L}var F=L;L=G;try{return w()}finally{L=F}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(w,G){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var F=L;L=w;try{return G()}finally{L=F}},r.unstable_scheduleCallback=function(w,G,F){var he=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?he+F:he):F=he,w){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=F+de,w={id:R++,callback:G,priorityLevel:w,startTime:F,expirationTime:de,sortIndex:-1},F>he?(w.sortIndex=F,f(y,w),d(j)===null&&w===d(y)&&(B?(k(P),P=-1):B=!0,ut(ye,F-he))):(w.sortIndex=de,f(j,w),q||Y||(q=!0,Te||(Te=!0,Xe()))),w},r.unstable_shouldYield=We,r.unstable_wrapCallback=function(w){var G=L;return function(){var F=L;L=G;try{return w.apply(this,arguments)}finally{L=F}}}})(Rr)),Rr}var Id;function ng(){return Id||(Id=1,Mr.exports=lg()),Mr.exports}var Dr={exports:{}},$e={};var Pd;function ig(){if(Pd)return $e;Pd=1;var r=Br();function f(j){var y="https://react.dev/errors/"+j;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)y+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+j+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var s={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(j,y,R){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:A==null?null:""+A,children:j,containerInfo:y,implementation:R}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(j,y){if(j==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$e.createPortal=function(j,y){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(f(299));return p(j,y,null,R)},$e.flushSync=function(j){var y=g.T,R=s.p;try{if(g.T=null,s.p=2,j)return j()}finally{g.T=y,s.p=R,s.d.f()}},$e.preconnect=function(j,y){typeof j=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(j,y))},$e.prefetchDNS=function(j){typeof j=="string"&&s.d.D(j)},$e.preinit=function(j,y){if(typeof j=="string"&&y&&typeof y.as=="string"){var R=y.as,A=M(R,y.crossOrigin),L=typeof y.integrity=="string"?y.integrity:void 0,Y=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;R==="style"?s.d.S(j,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:A,integrity:L,fetchPriority:Y}):R==="script"&&s.d.X(j,{crossOrigin:A,integrity:L,fetchPriority:Y,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},$e.preinitModule=function(j,y){if(typeof j=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var R=M(y.as,y.crossOrigin);s.d.M(j,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(j)},$e.preload=function(j,y){if(typeof j=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var R=y.as,A=M(R,y.crossOrigin);s.d.L(j,R,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},$e.preloadModule=function(j,y){if(typeof j=="string")if(y){var R=M(y.as,y.crossOrigin);s.d.m(j,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(j)},$e.requestFormReset=function(j){s.d.r(j)},$e.unstable_batchedUpdates=function(j,y){return j(y)},$e.useFormState=function(j,y,R){return g.H.useFormState(j,y,R)},$e.useFormStatus=function(){return g.H.useHostTransitionStatus()},$e.version="19.2.3",$e}var em;function ug(){if(em)return Dr.exports;em=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Dr.exports=ig(),Dr.exports}var tm;function cg(){if(tm)return wn;tm=1;var r=ng(),f=Br(),d=ug();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(p(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return j(n),e;if(i===l)return j(n),t;i=i.sibling}throw Error(s(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,o=n.child;o;){if(o===a){u=!0,a=n,l=i;break}if(o===l){u=!0,l=n,a=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===a){u=!0,a=i,l=n;break}if(o===l){u=!0,l=i,a=n;break}o=o.sibling}if(!u)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,L=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),K=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),De=Symbol.for("react.activity"),We=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=it&&e[it]||e["@@iterator"],typeof e=="function"?e:null)}var Lt=Symbol.for("react.client.reference");function Mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case Q:return"Profiler";case H:return"StrictMode";case ye:return"Suspense";case Te:return"SuspenseList";case De:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case K:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:Mt(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return Mt(e(t))}catch{}}return null}var ut=Array.isArray,w=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},he=[],de=-1;function b(e){return{current:e}}function S(e){0>de||(e.current=he[de],he[de]=null,de--)}function U(e,t){de++,he[de]=e.current,e.current=t}var X=b(null),$=b(null),I=b(null),le=b(null);function Qe(e,t){switch(U(I,t),U($,e),U(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gd(t),e=vd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(X),U(X,e)}function we(){S(X),S($),S(I)}function Bl(e){e.memoizedState!==null&&U(le,e);var t=X.current,a=vd(t,e.type);t!==a&&(U($,e),U(X,a))}function Ln(e){$.current===e&&(S(X),S($)),le.current===e&&(S(le),An._currentValue=F)}var ru,kr;function wa(e){if(ru===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ru=t&&t[1]||"",kr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ru+e+kr}var su=!1;function ou(e,t){if(!e||su)return"";su=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(O){var T=O}Reflect.construct(e,[],C)}else{try{C.call()}catch(O){T=O}e.call(C.prototype)}}else{try{throw Error()}catch(O){T=O}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(O){if(O&&T&&typeof O.stack=="string")return[O.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var h=u.split(`
`),N=o.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===N.length)for(l=h.length-1,n=N.length-1;1<=l&&0<=n&&h[l]!==N[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==N[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==N[n]){var D=`
`+h[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=n);break}}}finally{su=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wa(a):""}function Dm(e,t){switch(e.tag){case 26:case 27:case 5:return wa(e.type);case 16:return wa("Lazy");case 13:return e.child!==t&&t!==null?wa("Suspense Fallback"):wa("Suspense");case 19:return wa("SuspenseList");case 0:case 15:return ou(e.type,!1);case 11:return ou(e.type.render,!1);case 1:return ou(e.type,!0);case 31:return wa("Activity");default:return""}}function Vr(e){try{var t="",a=null;do t+=Dm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fu=Object.prototype.hasOwnProperty,du=r.unstable_scheduleCallback,mu=r.unstable_cancelCallback,wm=r.unstable_shouldYield,_m=r.unstable_requestPaint,ct=r.unstable_now,Cm=r.unstable_getCurrentPriorityLevel,Zr=r.unstable_ImmediatePriority,Kr=r.unstable_UserBlockingPriority,qn=r.unstable_NormalPriority,Um=r.unstable_LowPriority,Jr=r.unstable_IdlePriority,Hm=r.log,Bm=r.unstable_setDisableYieldValue,Ll=null,rt=null;function ua(e){if(typeof Hm=="function"&&Bm(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(Ll,e)}catch{}}var st=Math.clz32?Math.clz32:Ym,Lm=Math.log,qm=Math.LN2;function Ym(e){return e>>>=0,e===0?32:31-(Lm(e)/qm|0)|0}var Yn=256,Gn=262144,Xn=4194304;function _a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=_a(l):(u&=o,u!==0?n=_a(u):a||(a=o&~e,a!==0&&(n=_a(a))))):(o=l&~i,o!==0?n=_a(o):u!==0?n=_a(u):a||(a=l&~e,a!==0&&(n=_a(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $r(){var e=Xn;return Xn<<=1,(Xn&62914560)===0&&(Xn=4194304),e}function hu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xm(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,h=e.expirationTimes,N=e.hiddenUpdates;for(a=u&~a;0<a;){var D=31-st(a),C=1<<D;o[D]=0,h[D]=-1;var T=N[D];if(T!==null)for(N[D]=null,D=0;D<T.length;D++){var O=T[D];O!==null&&(O.lane&=-536870913)}a&=~C}l!==0&&Wr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Wr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-st(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Fr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-st(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Ir(e,t){var a=t&-t;return a=(a&42)!==0?1:pu(a),(a&(e.suspendedLanes|t))!==0?0:a}function pu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Yd(e.type))}function es(e,t){var a=G.p;try{return G.p=e,t()}finally{G.p=a}}var ca=Math.random().toString(36).slice(2),ke="__reactFiber$"+ca,Ie="__reactProps$"+ca,Ia="__reactContainer$"+ca,vu="__reactEvents$"+ca,Qm="__reactListeners$"+ca,km="__reactHandles$"+ca,ts="__reactResources$"+ca,Gl="__reactMarker$"+ca;function yu(e){delete e[ke],delete e[Ie],delete e[vu],delete e[Qm],delete e[km]}function Pa(e){var t=e[ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ia]||a[ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Nd(e);e!==null;){if(a=e[ke])return a;e=Nd(e)}return t}e=a,a=e.parentNode}return null}function el(e){if(e=e[ke]||e[Ia]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function tl(e){var t=e[ts];return t||(t=e[ts]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Gl]=!0}var as=new Set,ls={};function Ca(e,t){al(e,t),al(e+"Capture",t)}function al(e,t){for(ls[e]=t,e=0;e<t.length;e++)as.add(t[e])}var Vm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ns={},is={};function Zm(e){return fu.call(is,e)?!0:fu.call(ns,e)?!1:Vm.test(e)?is[e]=!0:(ns[e]=!0,!1)}function kn(e,t,a){if(Zm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Vn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function qt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function us(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Km(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bu(e){if(!e._valueTracker){var t=us(e)?"checked":"value";e._valueTracker=Km(e,t,""+e[t])}}function cs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=us(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jm=/[\n"\\]/g;function yt(e){return e.replace(Jm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function xu(e,t,a,l,n,i,u,o){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Su(e,u,vt(t)):a!=null?Su(e,u,vt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+vt(o):e.removeAttribute("name")}function rs(e,t,a,l,n,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){bu(e);return}a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),bu(e)}function Su(e,t,a){t==="number"&&Zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ll(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function ss(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function os(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(ut(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),bu(e)}function nl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var $m=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fs(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||$m.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ds(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&fs(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&fs(e,i,t[i])}function ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return Fm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yt(){}var Eu=null;function Nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,ul=null;function ms(e){var t=el(e);if(t&&(e=t.stateNode)){var a=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(xu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ie]||null;if(!n)throw Error(s(90));xu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&cs(l)}break e;case"textarea":ss(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ll(e,!!a.multiple,t,!1)}}}var zu=!1;function hs(e,t,a){if(zu)return e(t,a);zu=!0;try{var l=e(t);return l}finally{if(zu=!1,(il!==null||ul!==null)&&(Ci(),il&&(t=il,e=ul,ul=il=null,ms(t),e)))for(t=0;t<e.length;t++)ms(e[t])}}function Ql(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ie]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(Gt)try{var kl={};Object.defineProperty(kl,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",kl,kl),window.removeEventListener("test",kl,kl)}catch{Tu=!1}var ra=null,Au=null,Jn=null;function ps(){if(Jn)return Jn;var e,t=Au,a=t.length,l,n="value"in ra?ra.value:ra.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Jn=n.slice(e,1<l?1-l:void 0)}function $n(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function gs(){return!1}function Pe(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wn:gs,this.isPropagationStopped=gs,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fn=Pe(Ua),Vl=A({},Ua,{view:0,detail:0}),Im=Pe(Vl),Ou,Mu,Zl,In=A({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zl&&(Zl&&e.type==="mousemove"?(Ou=e.screenX-Zl.screenX,Mu=e.screenY-Zl.screenY):Mu=Ou=0,Zl=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),vs=Pe(In),Pm=A({},In,{dataTransfer:0}),eh=Pe(Pm),th=A({},Vl,{relatedTarget:0}),Ru=Pe(th),ah=A({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=Pe(ah),nh=A({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ih=Pe(nh),uh=A({},Ua,{data:0}),ys=Pe(uh),ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sh[e])?!!t[e]:!1}function Du(){return oh}var fh=A({},Vl,{key:function(e){if(e.key){var t=ch[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?$n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dh=Pe(fh),mh=A({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bs=Pe(mh),hh=A({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),ph=Pe(hh),gh=A({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),vh=Pe(gh),yh=A({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bh=Pe(yh),xh=A({},Ua,{newState:0,oldState:0}),Sh=Pe(xh),jh=[9,13,27,32],wu=Gt&&"CompositionEvent"in window,Kl=null;Gt&&"documentMode"in document&&(Kl=document.documentMode);var Eh=Gt&&"TextEvent"in window&&!Kl,xs=Gt&&(!wu||Kl&&8<Kl&&11>=Kl),Ss=" ",js=!1;function Es(e,t){switch(e){case"keyup":return jh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ns(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cl=!1;function Nh(e,t){switch(e){case"compositionend":return Ns(t);case"keypress":return t.which!==32?null:(js=!0,Ss);case"textInput":return e=t.data,e===Ss&&js?null:e;default:return null}}function zh(e,t){if(cl)return e==="compositionend"||!wu&&Es(e,t)?(e=ps(),Jn=Au=ra=null,cl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xs&&t.locale!=="ko"?null:t.data;default:return null}}var Th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Th[e.type]:t==="textarea"}function Ts(e,t,a,l){il?ul?ul.push(l):ul=[l]:il=l,t=Gi(t,"onChange"),0<t.length&&(a=new Fn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Jl=null,$l=null;function Ah(e){od(e,0)}function Pn(e){var t=Xl(e);if(cs(t))return e}function As(e,t){if(e==="change")return t}var Os=!1;if(Gt){var _u;if(Gt){var Cu="oninput"in document;if(!Cu){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Cu=typeof Ms.oninput=="function"}_u=Cu}else _u=!1;Os=_u&&(!document.documentMode||9<document.documentMode)}function Rs(){Jl&&(Jl.detachEvent("onpropertychange",Ds),$l=Jl=null)}function Ds(e){if(e.propertyName==="value"&&Pn($l)){var t=[];Ts(t,$l,e,Nu(e)),hs(Ah,t)}}function Oh(e,t,a){e==="focusin"?(Rs(),Jl=t,$l=a,Jl.attachEvent("onpropertychange",Ds)):e==="focusout"&&Rs()}function Mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn($l)}function Rh(e,t){if(e==="click")return Pn(t)}function Dh(e,t){if(e==="input"||e==="change")return Pn(t)}function wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:wh;function Wl(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!fu.call(t,n)||!ot(e[n],t[n]))return!1}return!0}function ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,t){var a=ws(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ws(a)}}function Cs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Us(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zn(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _h=Gt&&"documentMode"in document&&11>=document.documentMode,rl=null,Hu=null,Fl=null,Bu=!1;function Hs(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bu||rl==null||rl!==Zn(l)||(l=rl,"selectionStart"in l&&Uu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Fl&&Wl(Fl,l)||(Fl=l,l=Gi(Hu,"onSelect"),0<l.length&&(t=new Fn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=rl)))}function Ha(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var sl={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},Lu={},Bs={};Gt&&(Bs=document.createElement("div").style,"AnimationEvent"in window||(delete sl.animationend.animation,delete sl.animationiteration.animation,delete sl.animationstart.animation),"TransitionEvent"in window||delete sl.transitionend.transition);function Ba(e){if(Lu[e])return Lu[e];if(!sl[e])return e;var t=sl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Bs)return Lu[e]=t[a];return e}var Ls=Ba("animationend"),qs=Ba("animationiteration"),Ys=Ba("animationstart"),Ch=Ba("transitionrun"),Uh=Ba("transitionstart"),Hh=Ba("transitioncancel"),Gs=Ba("transitionend"),Xs=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function Rt(e,t){Xs.set(e,t),Ca(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],ol=0,Yu=0;function ti(){for(var e=ol,t=Yu=ol=0;t<e;){var a=bt[t];bt[t++]=null;var l=bt[t];bt[t++]=null;var n=bt[t];bt[t++]=null;var i=bt[t];if(bt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Qs(a,n,i)}}function ai(e,t,a,l){bt[ol++]=e,bt[ol++]=t,bt[ol++]=a,bt[ol++]=l,Yu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Gu(e,t,a,l){return ai(e,t,a,l),li(e)}function La(e,t){return ai(e,null,null,t),li(e)}function Qs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-st(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function li(e){if(50<xn)throw xn=0,Wc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fl={};function Bh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,a,l){return new Bh(e,t,a,l)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xt(e,t){var a=e.alternate;return a===null?(a=ft(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ks(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Xu(e)&&(u=1);else if(typeof e=="string")u=Xp(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case De:return e=ft(31,a,t,n),e.elementType=De,e.lanes=i,e;case B:return qa(a.children,n,i,t);case H:u=8,n|=24;break;case Q:return e=ft(12,a,t,n|2),e.elementType=Q,e.lanes=i,e;case ye:return e=ft(13,a,t,n),e.elementType=ye,e.lanes=i,e;case Te:return e=ft(19,a,t,n),e.elementType=Te,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:u=10;break e;case k:u=9;break e;case se:u=11;break e;case P:u=14;break e;case Ee:u=16,l=null;break e}u=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=ft(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function qa(e,t,a,l){return e=ft(7,e,l,t),e.lanes=a,e}function Qu(e,t,a){return e=ft(6,e,null,t),e.lanes=a,e}function Vs(e){var t=ft(18,null,null,0);return t.stateNode=e,t}function ku(e,t,a){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zs=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var a=Zs.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Vr(t)},Zs.set(e,t),t)}return{value:e,source:t,stack:Vr(t)}}var dl=[],ml=0,ii=null,Il=0,St=[],jt=0,sa=null,Ct=1,Ut="";function Qt(e,t){dl[ml++]=Il,dl[ml++]=ii,ii=e,Il=t}function Ks(e,t,a){St[jt++]=Ct,St[jt++]=Ut,St[jt++]=sa,sa=e;var l=Ct;e=Ut;var n=32-st(l)-1;l&=~(1<<n),a+=1;var i=32-st(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Ct=1<<32-st(t)+n|a<<n|l,Ut=i+e}else Ct=1<<i|a<<n|l,Ut=e}function Vu(e){e.return!==null&&(Qt(e,1),Ks(e,1,0))}function Zu(e){for(;e===ii;)ii=dl[--ml],dl[ml]=null,Il=dl[--ml],dl[ml]=null;for(;e===sa;)sa=St[--jt],St[jt]=null,Ut=St[--jt],St[jt]=null,Ct=St[--jt],St[jt]=null}function Js(e,t){St[jt++]=Ct,St[jt++]=Ut,St[jt++]=sa,Ct=t.id,Ut=t.overflow,sa=e}var Ve=null,Ne=null,re=!1,oa=null,Et=!1,Ku=Error(s(519));function fa(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(xt(t,e)),Ku}function $s(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[ke]=e,t[Ie]=l,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<jn.length;a++)ie(jn[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),rs(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),os(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||hd(t.textContent,a)?(l.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),l.onScroll!=null&&ie("scroll",t),l.onScrollEnd!=null&&ie("scrollend",t),l.onClick!=null&&(t.onclick=Yt),t=!0):t=!1,t||fa(e,!0)}function Ws(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ve=Ve.return}}function hl(e){if(e!==Ve)return!1;if(!re)return Ws(e),re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fr(e.type,e.memoizedProps)),a=!a),a&&Ne&&fa(e),Ws(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ne=Ed(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ne=Ed(e)}else t===27?(t=Ne,za(e.type)?(e=gr,gr=null,Ne=e):Ne=t):Ne=Ve?zt(e.stateNode.nextSibling):null;return!0}function Ya(){Ne=Ve=null,re=!1}function Ju(){var e=oa;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),oa=null),e}function Pl(e){oa===null?oa=[e]:oa.push(e)}var $u=b(null),Ga=null,kt=null;function da(e,t,a){U($u,t._currentValue),t._currentValue=a}function Vt(e){e._currentValue=$u.current,S($u)}function Wu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Fu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var h=0;h<t.length;h++)if(o.context===t[h]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),Wu(i.return,a,e),l||(u=null);break e}i=o.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(s(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Wu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function pl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var o=n.type;ot(n.pendingProps.value,u.value)||(e!==null?e.push(o):e=[o])}}else if(n===le.current){if(u=n.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(An):e=[An])}n=n.return}e!==null&&Fu(t,e,a,l),t.flags|=262144}function ui(e){for(e=e.firstContext;e!==null;){if(!ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){Ga=e,kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Fs(Ga,e)}function ci(e,t){return Ga===null&&Xa(e),Fs(e,t)}function Fs(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},kt===null){if(e===null)throw Error(s(308));kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kt=kt.next=t;return a}var Lh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},qh=r.unstable_scheduleCallback,Yh=r.unstable_NormalPriority,Ue={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new Lh,data:new Map,refCount:0}}function en(e){e.refCount--,e.refCount===0&&qh(Yh,function(){e.controller.abort()})}var tn=null,Pu=0,gl=0,vl=null;function Gh(e,t){if(tn===null){var a=tn=[];Pu=0,gl=ar(),vl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Pu++,t.then(Is,Is),t}function Is(){if(--Pu===0&&tn!==null){vl!==null&&(vl.status="fulfilled");var e=tn;tn=null,gl=0,vl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ps=w.S;w.S=function(e,t){Lf=ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gh(e,t),Ps!==null&&Ps(e,t)};var Qa=b(null);function ec(){var e=Qa.current;return e!==null?e:je.pooledCache}function ri(e,t){t===null?U(Qa,Qa.current):U(Qa,t.pool)}function eo(){var e=ec();return e===null?null:{parent:Ue._currentValue,pool:e}}var yl=Error(s(460)),tc=Error(s(474)),si=Error(s(542)),oi={then:function(){}};function to(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ao(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Yt,Yt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,no(e),e;default:if(typeof t.status=="string")t.then(Yt,Yt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,no(e),e}throw Va=t,yl}}function ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Va=a,yl):a}}var Va=null;function lo(){if(Va===null)throw Error(s(459));var e=Va;return Va=null,e}function no(e){if(e===yl||e===si)throw Error(s(483))}var bl=null,an=0;function fi(e){var t=an;return an+=1,bl===null&&(bl=[]),ao(bl,e,t)}function ln(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function di(e,t){throw t.$$typeof===L?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function io(e){function t(x,v){if(e){var E=x.deletions;E===null?(x.deletions=[v],x.flags|=16):E.push(v)}}function a(x,v){if(!e)return null;for(;v!==null;)t(x,v),v=v.sibling;return null}function l(x){for(var v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function n(x,v){return x=Xt(x,v),x.index=0,x.sibling=null,x}function i(x,v,E){return x.index=E,e?(E=x.alternate,E!==null?(E=E.index,E<v?(x.flags|=67108866,v):E):(x.flags|=67108866,v)):(x.flags|=1048576,v)}function u(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function o(x,v,E,_){return v===null||v.tag!==6?(v=Qu(E,x.mode,_),v.return=x,v):(v=n(v,E),v.return=x,v)}function h(x,v,E,_){var J=E.type;return J===B?D(x,v,E.props.children,_,E.key):v!==null&&(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ee&&ka(J)===v.type)?(v=n(v,E.props),ln(v,E),v.return=x,v):(v=ni(E.type,E.key,E.props,null,x.mode,_),ln(v,E),v.return=x,v)}function N(x,v,E,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=ku(E,x.mode,_),v.return=x,v):(v=n(v,E.children||[]),v.return=x,v)}function D(x,v,E,_,J){return v===null||v.tag!==7?(v=qa(E,x.mode,_,J),v.return=x,v):(v=n(v,E),v.return=x,v)}function C(x,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Qu(""+v,x.mode,E),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Y:return E=ni(v.type,v.key,v.props,null,x.mode,E),ln(E,v),E.return=x,E;case q:return v=ku(v,x.mode,E),v.return=x,v;case Ee:return v=ka(v),C(x,v,E)}if(ut(v)||Xe(v))return v=qa(v,x.mode,E,null),v.return=x,v;if(typeof v.then=="function")return C(x,fi(v),E);if(v.$$typeof===K)return C(x,ci(x,v),E);di(x,v)}return null}function T(x,v,E,_){var J=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return J!==null?null:o(x,v,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Y:return E.key===J?h(x,v,E,_):null;case q:return E.key===J?N(x,v,E,_):null;case Ee:return E=ka(E),T(x,v,E,_)}if(ut(E)||Xe(E))return J!==null?null:D(x,v,E,_,null);if(typeof E.then=="function")return T(x,v,fi(E),_);if(E.$$typeof===K)return T(x,v,ci(x,E),_);di(x,E)}return null}function O(x,v,E,_,J){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return x=x.get(E)||null,o(v,x,""+_,J);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Y:return x=x.get(_.key===null?E:_.key)||null,h(v,x,_,J);case q:return x=x.get(_.key===null?E:_.key)||null,N(v,x,_,J);case Ee:return _=ka(_),O(x,v,E,_,J)}if(ut(_)||Xe(_))return x=x.get(E)||null,D(v,x,_,J,null);if(typeof _.then=="function")return O(x,v,E,fi(_),J);if(_.$$typeof===K)return O(x,v,E,ci(v,_),J);di(v,_)}return null}function V(x,v,E,_){for(var J=null,oe=null,Z=v,ae=v=0,ce=null;Z!==null&&ae<E.length;ae++){Z.index>ae?(ce=Z,Z=null):ce=Z.sibling;var fe=T(x,Z,E[ae],_);if(fe===null){Z===null&&(Z=ce);break}e&&Z&&fe.alternate===null&&t(x,Z),v=i(fe,v,ae),oe===null?J=fe:oe.sibling=fe,oe=fe,Z=ce}if(ae===E.length)return a(x,Z),re&&Qt(x,ae),J;if(Z===null){for(;ae<E.length;ae++)Z=C(x,E[ae],_),Z!==null&&(v=i(Z,v,ae),oe===null?J=Z:oe.sibling=Z,oe=Z);return re&&Qt(x,ae),J}for(Z=l(Z);ae<E.length;ae++)ce=O(Z,x,ae,E[ae],_),ce!==null&&(e&&ce.alternate!==null&&Z.delete(ce.key===null?ae:ce.key),v=i(ce,v,ae),oe===null?J=ce:oe.sibling=ce,oe=ce);return e&&Z.forEach(function(Ra){return t(x,Ra)}),re&&Qt(x,ae),J}function W(x,v,E,_){if(E==null)throw Error(s(151));for(var J=null,oe=null,Z=v,ae=v=0,ce=null,fe=E.next();Z!==null&&!fe.done;ae++,fe=E.next()){Z.index>ae?(ce=Z,Z=null):ce=Z.sibling;var Ra=T(x,Z,fe.value,_);if(Ra===null){Z===null&&(Z=ce);break}e&&Z&&Ra.alternate===null&&t(x,Z),v=i(Ra,v,ae),oe===null?J=Ra:oe.sibling=Ra,oe=Ra,Z=ce}if(fe.done)return a(x,Z),re&&Qt(x,ae),J;if(Z===null){for(;!fe.done;ae++,fe=E.next())fe=C(x,fe.value,_),fe!==null&&(v=i(fe,v,ae),oe===null?J=fe:oe.sibling=fe,oe=fe);return re&&Qt(x,ae),J}for(Z=l(Z);!fe.done;ae++,fe=E.next())fe=O(Z,x,ae,fe.value,_),fe!==null&&(e&&fe.alternate!==null&&Z.delete(fe.key===null?ae:fe.key),v=i(fe,v,ae),oe===null?J=fe:oe.sibling=fe,oe=fe);return e&&Z.forEach(function(Pp){return t(x,Pp)}),re&&Qt(x,ae),J}function Se(x,v,E,_){if(typeof E=="object"&&E!==null&&E.type===B&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Y:e:{for(var J=E.key;v!==null;){if(v.key===J){if(J=E.type,J===B){if(v.tag===7){a(x,v.sibling),_=n(v,E.props.children),_.return=x,x=_;break e}}else if(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ee&&ka(J)===v.type){a(x,v.sibling),_=n(v,E.props),ln(_,E),_.return=x,x=_;break e}a(x,v);break}else t(x,v);v=v.sibling}E.type===B?(_=qa(E.props.children,x.mode,_,E.key),_.return=x,x=_):(_=ni(E.type,E.key,E.props,null,x.mode,_),ln(_,E),_.return=x,x=_)}return u(x);case q:e:{for(J=E.key;v!==null;){if(v.key===J)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){a(x,v.sibling),_=n(v,E.children||[]),_.return=x,x=_;break e}else{a(x,v);break}else t(x,v);v=v.sibling}_=ku(E,x.mode,_),_.return=x,x=_}return u(x);case Ee:return E=ka(E),Se(x,v,E,_)}if(ut(E))return V(x,v,E,_);if(Xe(E)){if(J=Xe(E),typeof J!="function")throw Error(s(150));return E=J.call(E),W(x,v,E,_)}if(typeof E.then=="function")return Se(x,v,fi(E),_);if(E.$$typeof===K)return Se(x,v,ci(x,E),_);di(x,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,v!==null&&v.tag===6?(a(x,v.sibling),_=n(v,E),_.return=x,x=_):(a(x,v),_=Qu(E,x.mode,_),_.return=x,x=_),u(x)):a(x,v)}return function(x,v,E,_){try{an=0;var J=Se(x,v,E,_);return bl=null,J}catch(Z){if(Z===yl||Z===si)throw Z;var oe=ft(29,Z,null,x.mode);return oe.lanes=_,oe.return=x,oe}}}var Za=io(!0),uo=io(!1),ma=!1;function ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(me&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=li(e),Qs(e,null,a),t}return ai(e,l,t,a),li(e)}function nn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Fr(e,a)}}function nc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ic=!1;function un(){if(ic){var e=vl;if(e!==null)throw e}}function cn(e,t,a,l){ic=!1;var n=e.updateQueue;ma=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var h=o,N=h.next;h.next=null,u===null?i=N:u.next=N,u=h;var D=e.alternate;D!==null&&(D=D.updateQueue,o=D.lastBaseUpdate,o!==u&&(o===null?D.firstBaseUpdate=N:o.next=N,D.lastBaseUpdate=h))}if(i!==null){var C=n.baseState;u=0,D=N=h=null,o=i;do{var T=o.lane&-536870913,O=T!==o.lane;if(O?(ue&T)===T:(l&T)===T){T!==0&&T===gl&&(ic=!0),D!==null&&(D=D.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var V=e,W=o;T=t;var Se=a;switch(W.tag){case 1:if(V=W.payload,typeof V=="function"){C=V.call(Se,C,T);break e}C=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=W.payload,T=typeof V=="function"?V.call(Se,C,T):V,T==null)break e;C=A({},C,T);break e;case 2:ma=!0}}T=o.callback,T!==null&&(e.flags|=64,O&&(e.flags|=8192),O=n.callbacks,O===null?n.callbacks=[T]:O.push(T))}else O={lane:T,tag:o.tag,payload:o.payload,callback:o.callback,next:null},D===null?(N=D=O,h=C):D=D.next=O,u|=T;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;O=o,o=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);D===null&&(h=C),n.baseState=h,n.firstBaseUpdate=N,n.lastBaseUpdate=D,i===null&&(n.shared.lanes=0),xa|=u,e.lanes=u,e.memoizedState=C}}function co(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function ro(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)co(a[e],t)}var xl=b(null),mi=b(0);function so(e,t){e=ea,U(mi,e),U(xl,t),ea=e|t.baseLanes}function uc(){U(mi,ea),U(xl,xl.current)}function cc(){ea=mi.current,S(xl),S(mi)}var dt=b(null),Nt=null;function ga(e){var t=e.alternate;U(_e,_e.current&1),U(dt,e),Nt===null&&(t===null||xl.current!==null||t.memoizedState!==null)&&(Nt=e)}function rc(e){U(_e,_e.current),U(dt,e),Nt===null&&(Nt=e)}function oo(e){e.tag===22?(U(_e,_e.current),U(dt,e),Nt===null&&(Nt=e)):va()}function va(){U(_e,_e.current),U(dt,dt.current)}function mt(e){S(dt),Nt===e&&(Nt=null),S(_e)}var _e=b(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hr(a)||pr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zt=0,te=null,be=null,He=null,pi=!1,Sl=!1,Ka=!1,gi=0,rn=0,jl=null,Qh=0;function Me(){throw Error(s(321))}function sc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ot(e[a],t[a]))return!1;return!0}function oc(e,t,a,l,n,i){return Zt=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Jo:zc,Ka=!1,i=a(l,n),Ka=!1,Sl&&(i=mo(t,a,l,n)),fo(e),i}function fo(e){w.H=fn;var t=be!==null&&be.next!==null;if(Zt=0,He=be=te=null,pi=!1,rn=0,jl=null,t)throw Error(s(300));e===null||Be||(e=e.dependencies,e!==null&&ui(e)&&(Be=!0))}function mo(e,t,a,l){te=e;var n=0;do{if(Sl&&(jl=null),rn=0,Sl=!1,25<=n)throw Error(s(301));if(n+=1,He=be=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=$o,i=t(a,l)}while(Sl);return i}function kh(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?sn(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(te.flags|=1024),t}function fc(){var e=gi!==0;return gi=0,e}function dc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function mc(e){if(pi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}pi=!1}Zt=0,He=be=te=null,Sl=!1,rn=gi=0,jl=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?te.memoizedState=He=e:He=He.next=e,He}function Ce(){if(be===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=He===null?te.memoizedState:He.next;if(t!==null)He=t,be=e;else{if(e===null)throw te.alternate===null?Error(s(467)):Error(s(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},He===null?te.memoizedState=He=e:He=He.next=e}return He}function vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sn(e){var t=rn;return rn+=1,jl===null&&(jl=[]),e=ao(jl,e,t),t=te,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Jo:zc),e}function yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sn(e);if(e.$$typeof===K)return Ze(e)}throw Error(s(438,String(e)))}function hc(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=vi(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=We;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function bi(e){var t=Ce();return pc(t,be,e)}function pc(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=u=null,h=null,N=t,D=!1;do{var C=N.lane&-536870913;if(C!==N.lane?(ue&C)===C:(Zt&C)===C){var T=N.revertLane;if(T===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),C===gl&&(D=!0);else if((Zt&T)===T){N=N.next,T===gl&&(D=!0);continue}else C={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},h===null?(o=h=C,u=i):h=h.next=C,te.lanes|=T,xa|=T;C=N.action,Ka&&a(i,C),i=N.hasEagerState?N.eagerState:a(i,C)}else T={lane:C,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},h===null?(o=h=T,u=i):h=h.next=T,te.lanes|=C,xa|=C;N=N.next}while(N!==null&&N!==t);if(h===null?u=i:h.next=o,!ot(i,e.memoizedState)&&(Be=!0,D&&(a=vl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function gc(e){var t=Ce(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);ot(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function ho(e,t,a){var l=te,n=Ce(),i=re;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=t();var u=!ot((be||n).memoizedState,a);if(u&&(n.memoizedState=a,Be=!0),n=n.queue,bc(vo.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||He!==null&&He.memoizedState.tag&1){if(l.flags|=2048,El(9,{destroy:void 0},go.bind(null,l,n,a,t),null),je===null)throw Error(s(349));i||(Zt&127)!==0||po(l,t,a)}return a}function po(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=vi(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function go(e,t,a,l){t.value=a,t.getSnapshot=l,yo(t)&&bo(e)}function vo(e,t,a){return a(function(){yo(t)&&bo(e)})}function yo(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ot(e,a)}catch{return!0}}function bo(e){var t=La(e,2);t!==null&&nt(t,e,2)}function vc(e){var t=Fe();if(typeof e=="function"){var a=e;if(e=a(),Ka){ua(!0);try{a()}finally{ua(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function xo(e,t,a,l){return e.baseState=a,pc(e,be,typeof l=="function"?l:Kt)}function Vh(e,t,a,l,n){if(ji(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};w.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,So(t,i)):(i.next=a.next,t.pending=a.next=i)}}function So(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=w.T,u={};w.T=u;try{var o=a(n,l),h=w.S;h!==null&&h(u,o),jo(e,t,o)}catch(N){yc(e,t,N)}finally{i!==null&&u.types!==null&&(i.types=u.types),w.T=i}}else try{i=a(n,l),jo(e,t,i)}catch(N){yc(e,t,N)}}function jo(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Eo(e,t,l)},function(l){return yc(e,t,l)}):Eo(e,t,a)}function Eo(e,t,a){t.status="fulfilled",t.value=a,No(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,So(e,a)))}function yc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,No(t),t=t.next;while(t!==l)}e.action=null}function No(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zo(e,t){return t}function To(e,t){if(re){var a=je.formState;if(a!==null){e:{var l=te;if(re){if(Ne){t:{for(var n=Ne,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ne=zt(n.nextSibling),l=n.data==="F!";break e}}fa(l)}l=!1}l&&(t=a[0])}}return a=Fe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},a.queue=l,a=Vo.bind(null,te,l),l.dispatch=a,l=vc(!1),i=Nc.bind(null,te,!1,l.queue),l=Fe(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Vh.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Ao(e){var t=Ce();return Oo(t,be,e)}function Oo(e,t,a){if(t=pc(e,t,zo)[0],e=bi(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=sn(t)}catch(u){throw u===yl?si:u}else l=t;t=Ce();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,El(9,{destroy:void 0},Zh.bind(null,n,a),null)),[l,i,e]}function Zh(e,t){e.action=t}function Mo(e){var t=Ce(),a=be;if(a!==null)return Oo(t,a,e);Ce(),t=t.memoizedState,a=Ce();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function El(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=vi(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ro(){return Ce().memoizedState}function xi(e,t,a,l){var n=Fe();te.flags|=e,n.memoizedState=El(1|t,{destroy:void 0},a,l===void 0?null:l)}function Si(e,t,a,l){var n=Ce();l=l===void 0?null:l;var i=n.memoizedState.inst;be!==null&&l!==null&&sc(l,be.memoizedState.deps)?n.memoizedState=El(t,i,a,l):(te.flags|=e,n.memoizedState=El(1|t,i,a,l))}function Do(e,t){xi(8390656,8,e,t)}function bc(e,t){Si(2048,8,e,t)}function Kh(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=vi(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function wo(e){var t=Ce().memoizedState;return Kh({ref:t,nextImpl:e}),function(){if((me&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function _o(e,t){return Si(4,2,e,t)}function Co(e,t){return Si(4,4,e,t)}function Uo(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ho(e,t,a){a=a!=null?a.concat([e]):null,Si(4,4,Uo.bind(null,t,e),a)}function xc(){}function Bo(e,t){var a=Ce();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&sc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Lo(e,t){var a=Ce();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&sc(t,l[1]))return l[0];if(l=e(),Ka){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[l,t],l}function Sc(e,t,a){return a===void 0||(Zt&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Yf(),te.lanes|=e,xa|=e,a)}function qo(e,t,a,l){return ot(a,t)?a:xl.current!==null?(e=Sc(e,a,l),ot(e,t)||(Be=!0),e):(Zt&42)===0||(Zt&1073741824)!==0&&(ue&261930)===0?(Be=!0,e.memoizedState=a):(e=Yf(),te.lanes|=e,xa|=e,t)}function Yo(e,t,a,l,n){var i=G.p;G.p=i!==0&&8>i?i:8;var u=w.T,o={};w.T=o,Nc(e,!1,t,a);try{var h=n(),N=w.S;if(N!==null&&N(o,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var D=Xh(h,l);on(e,t,D,gt(e))}else on(e,t,l,gt(e))}catch(C){on(e,t,{then:function(){},status:"rejected",reason:C},gt())}finally{G.p=i,u!==null&&o.types!==null&&(u.types=o.types),w.T=u}}function Jh(){}function jc(e,t,a,l){if(e.tag!==5)throw Error(s(476));var n=Go(e).queue;Yo(e,n,t,F,a===null?Jh:function(){return Xo(e),a(l)})}function Go(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xo(e){var t=Go(e);t.next===null&&(t=e.alternate.memoizedState),on(e,t.next.queue,{},gt())}function Ec(){return Ze(An)}function Qo(){return Ce().memoizedState}function ko(){return Ce().memoizedState}function $h(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();e=ha(a);var l=pa(t,e,a);l!==null&&(nt(l,t,a),nn(l,t,a)),t={cache:Iu()},e.payload=t;return}t=t.return}}function Wh(e,t,a){var l=gt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ji(e)?Zo(t,a):(a=Gu(e,t,a,l),a!==null&&(nt(a,e,l),Ko(a,t,l)))}function Vo(e,t,a){var l=gt();on(e,t,a,l)}function on(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ji(e))Zo(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,o=i(u,a);if(n.hasEagerState=!0,n.eagerState=o,ot(o,u))return ai(e,t,n,0),je===null&&ti(),!1}catch{}if(a=Gu(e,t,n,l),a!==null)return nt(a,e,l),Ko(a,t,l),!0}return!1}function Nc(e,t,a,l){if(l={lane:2,revertLane:ar(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ji(e)){if(t)throw Error(s(479))}else t=Gu(e,a,l,2),t!==null&&nt(t,e,2)}function ji(e){var t=e.alternate;return e===te||t!==null&&t===te}function Zo(e,t){Sl=pi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ko(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Fr(e,a)}}var fn={readContext:Ze,use:yi,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};fn.useEffectEvent=Me;var Jo={readContext:Ze,use:yi,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Do,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,xi(4194308,4,Uo.bind(null,t,e),a)},useLayoutEffect:function(e,t){return xi(4194308,4,e,t)},useInsertionEffect:function(e,t){xi(4,2,e,t)},useMemo:function(e,t){var a=Fe();t=t===void 0?null:t;var l=e();if(Ka){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Fe();if(a!==void 0){var n=a(t);if(Ka){ua(!0);try{a(t)}finally{ua(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Wh.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=vc(e);var t=e.queue,a=Vo.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:xc,useDeferredValue:function(e,t){var a=Fe();return Sc(a,e,t)},useTransition:function(){var e=vc(!1);return e=Yo.bind(null,te,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=Fe();if(re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),je===null)throw Error(s(349));(ue&127)!==0||po(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Do(vo.bind(null,l,i,e),[e]),l.flags|=2048,El(9,{destroy:void 0},go.bind(null,l,i,a,t),null),a},useId:function(){var e=Fe(),t=je.identifierPrefix;if(re){var a=Ut,l=Ct;a=(l&~(1<<32-st(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=gi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Qh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ec,useFormState:To,useActionState:To,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Nc.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:hc,useCacheRefresh:function(){return Fe().memoizedState=$h.bind(null,te)},useEffectEvent:function(e){var t=Fe(),a={impl:e};return t.memoizedState=a,function(){if((me&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},zc={readContext:Ze,use:yi,useCallback:Bo,useContext:Ze,useEffect:bc,useImperativeHandle:Ho,useInsertionEffect:_o,useLayoutEffect:Co,useMemo:Lo,useReducer:bi,useRef:Ro,useState:function(){return bi(Kt)},useDebugValue:xc,useDeferredValue:function(e,t){var a=Ce();return qo(a,be.memoizedState,e,t)},useTransition:function(){var e=bi(Kt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:sn(e),t]},useSyncExternalStore:ho,useId:Qo,useHostTransitionStatus:Ec,useFormState:Ao,useActionState:Ao,useOptimistic:function(e,t){var a=Ce();return xo(a,be,e,t)},useMemoCache:hc,useCacheRefresh:ko};zc.useEffectEvent=wo;var $o={readContext:Ze,use:yi,useCallback:Bo,useContext:Ze,useEffect:bc,useImperativeHandle:Ho,useInsertionEffect:_o,useLayoutEffect:Co,useMemo:Lo,useReducer:gc,useRef:Ro,useState:function(){return gc(Kt)},useDebugValue:xc,useDeferredValue:function(e,t){var a=Ce();return be===null?Sc(a,e,t):qo(a,be.memoizedState,e,t)},useTransition:function(){var e=gc(Kt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:sn(e),t]},useSyncExternalStore:ho,useId:Qo,useHostTransitionStatus:Ec,useFormState:Mo,useActionState:Mo,useOptimistic:function(e,t){var a=Ce();return be!==null?xo(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hc,useCacheRefresh:ko};$o.useEffectEvent=wo;function Tc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:A({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ac={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=gt(),n=ha(l);n.payload=t,a!=null&&(n.callback=a),t=pa(e,n,l),t!==null&&(nt(t,e,l),nn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=gt(),n=ha(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=pa(e,n,l),t!==null&&(nt(t,e,l),nn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=gt(),l=ha(a);l.tag=2,t!=null&&(l.callback=t),t=pa(e,l,a),t!==null&&(nt(t,e,a),nn(t,e,a))}};function Wo(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Wl(a,l)||!Wl(n,i):!0}function Fo(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ac.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=A({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Io(e){ei(e)}function Po(e){console.error(e)}function ef(e){ei(e)}function Ei(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function tf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Oc(e,t,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Ei(e,t)},a}function af(e){return e=ha(e),e.tag=3,e}function lf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){tf(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){tf(t,a,l),typeof n!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Fh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&pl(t,a,n,!0),a=dt.current,a!==null){switch(a.tag){case 31:case 13:return Nt===null?Ui():a.alternate===null&&Re===0&&(Re=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===oi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Pc(e,l,n)),!1;case 22:return a.flags|=65536,l===oi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Pc(e,l,n)),!1}throw Error(s(435,a.tag))}return Pc(e,l,n),Ui(),!1}if(re)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ku&&(e=Error(s(422),{cause:l}),Pl(xt(e,a)))):(l!==Ku&&(t=Error(s(423),{cause:l}),Pl(xt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=xt(l,a),n=Oc(e.stateNode,l,n),nc(e,n),Re!==4&&(Re=2)),!1;var i=Error(s(520),{cause:l});if(i=xt(i,a),bn===null?bn=[i]:bn.push(i),Re!==4&&(Re=2),t===null)return!0;l=xt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Oc(a.stateNode,l,e),nc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Sa===null||!Sa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=af(n),lf(n,e,a,l),nc(a,n),!1}a=a.return}while(a!==null);return!1}var Mc=Error(s(461)),Be=!1;function Ke(e,t,a,l){t.child=e===null?uo(t,null,a,l):Za(t,e.child,a,l)}function nf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var o in l)o!=="ref"&&(u[o]=l[o])}else u=l;return Xa(t),l=oc(e,t,a,u,i,n),o=fc(),e!==null&&!Be?(dc(e,t,n),Jt(e,t,n)):(re&&o&&Vu(t),t.flags|=1,Ke(e,t,l,n),t.child)}function uf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Xu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,cf(e,t,i,l,n)):(e=ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Bc(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Wl,a(u,l)&&e.ref===t.ref)return Jt(e,t,n)}return t.flags|=1,e=Xt(i,l),e.ref=t.ref,e.return=t,t.child=e}function cf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Wl(i,l)&&e.ref===t.ref)if(Be=!1,t.pendingProps=l=i,Bc(e,n))(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,Jt(e,t,n)}return Rc(e,t,a,l,n)}function rf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return sf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ri(t,i!==null?i.cachePool:null),i!==null?so(t,i):uc(),oo(t);else return l=t.lanes=536870912,sf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ri(t,i.cachePool),so(t,i),va(),t.memoizedState=null):(e!==null&&ri(t,null),uc(),va());return Ke(e,t,n,a),t.child}function dn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sf(e,t,a,l,n){var i=ec();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ri(t,null),uc(),oo(t),e!==null&&pl(e,t,l,!0),t.childLanes=n,null}function Ni(e,t){return t=Ti({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function of(e,t,a){return Za(t,e.child,null,a),e=Ni(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function Ih(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(l.mode==="hidden")return e=Ni(t,l),t.lanes=536870912,dn(null,e);if(rc(t),(e=Ne)?(e=jd(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:Ct,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=Vs(e),a.return=t,t.child=a,Ve=t,Ne=null)):e=null,e===null)throw fa(t);return t.lanes=536870912,null}return Ni(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(rc(t),n)if(t.flags&256)t.flags&=-257,t=of(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Be||pl(e,t,a,!1),n=(a&e.childLanes)!==0,Be||n){if(l=je,l!==null&&(u=Ir(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,La(e,u),nt(l,e,u),Mc;Ui(),t=of(e,t,a)}else e=i.treeContext,Ne=zt(u.nextSibling),Ve=t,re=!0,oa=null,Et=!1,e!==null&&Js(t,e),t=Ni(t,l),t.flags|=4096;return t}return e=Xt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Rc(e,t,a,l,n){return Xa(t),a=oc(e,t,a,l,void 0,n),l=fc(),e!==null&&!Be?(dc(e,t,n),Jt(e,t,n)):(re&&l&&Vu(t),t.flags|=1,Ke(e,t,a,n),t.child)}function ff(e,t,a,l,n,i){return Xa(t),t.updateQueue=null,a=mo(t,l,a,n),fo(e),l=fc(),e!==null&&!Be?(dc(e,t,i),Jt(e,t,i)):(re&&l&&Vu(t),t.flags|=1,Ke(e,t,a,i),t.child)}function df(e,t,a,l,n){if(Xa(t),t.stateNode===null){var i=fl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ze(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ac,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ac(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ze(u):fl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Tc(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Ac.enqueueReplaceState(i,i.state,null),cn(t,l,i,n),un(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,h=Ja(a,o);i.props=h;var N=i.context,D=a.contextType;u=fl,typeof D=="object"&&D!==null&&(u=Ze(D));var C=a.getDerivedStateFromProps;D=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||N!==u)&&Fo(t,i,l,u),ma=!1;var T=t.memoizedState;i.state=T,cn(t,l,i,n),un(),N=t.memoizedState,o||T!==N||ma?(typeof C=="function"&&(Tc(t,a,C,l),N=t.memoizedState),(h=ma||Wo(t,a,h,l,T,N,u))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=N),i.props=l,i.state=N,i.context=u,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,lc(e,t),u=t.memoizedProps,D=Ja(a,u),i.props=D,C=t.pendingProps,T=i.context,N=a.contextType,h=fl,typeof N=="object"&&N!==null&&(h=Ze(N)),o=a.getDerivedStateFromProps,(N=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==C||T!==h)&&Fo(t,i,l,h),ma=!1,T=t.memoizedState,i.state=T,cn(t,l,i,n),un();var O=t.memoizedState;u!==C||T!==O||ma||e!==null&&e.dependencies!==null&&ui(e.dependencies)?(typeof o=="function"&&(Tc(t,a,o,l),O=t.memoizedState),(D=ma||Wo(t,a,D,l,T,O,h)||e!==null&&e.dependencies!==null&&ui(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,O,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,O,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),i.props=l,i.state=O,i.context=h,l=D):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,zi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Za(t,e.child,null,n),t.child=Za(t,null,a,n)):Ke(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Jt(e,t,n),e}function mf(e,t,a,l){return Ya(),t.flags|=256,Ke(e,t,a,l),t.child}var Dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:eo()}}function _c(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=pt),e}function hf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?ga(t):va(),(e=Ne)?(e=jd(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:Ct,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=Vs(e),a.return=t,t.child=a,Ve=t,Ne=null)):e=null,e===null)throw fa(t);return pr(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(va(),n=t.mode,o=Ti({mode:"hidden",children:o},n),l=qa(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=wc(a),l.childLanes=_c(e,u,a),t.memoizedState=Dc,dn(null,l)):(ga(t),Cc(t,o))}var h=e.memoizedState;if(h!==null&&(o=h.dehydrated,o!==null)){if(i)t.flags&256?(ga(t),t.flags&=-257,t=Uc(e,t,a)):t.memoizedState!==null?(va(),t.child=e.child,t.flags|=128,t=null):(va(),o=l.fallback,n=t.mode,l=Ti({mode:"visible",children:l.children},n),o=qa(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,Za(t,e.child,null,a),l=t.child,l.memoizedState=wc(a),l.childLanes=_c(e,u,a),t.memoizedState=Dc,t=dn(null,l));else if(ga(t),pr(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var N=u.dgst;u=N,l=Error(s(419)),l.stack="",l.digest=u,Pl({value:l,source:null,stack:null}),t=Uc(e,t,a)}else if(Be||pl(e,t,a,!1),u=(a&e.childLanes)!==0,Be||u){if(u=je,u!==null&&(l=Ir(u,a),l!==0&&l!==h.retryLane))throw h.retryLane=l,La(e,l),nt(u,e,l),Mc;hr(o)||Ui(),t=Uc(e,t,a)}else hr(o)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ne=zt(o.nextSibling),Ve=t,re=!0,oa=null,Et=!1,e!==null&&Js(t,e),t=Cc(t,l.children),t.flags|=4096);return t}return n?(va(),o=l.fallback,n=t.mode,h=e.child,N=h.sibling,l=Xt(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,N!==null?o=Xt(N,o):(o=qa(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,dn(null,l),l=t.child,o=e.child.memoizedState,o===null?o=wc(a):(n=o.cachePool,n!==null?(h=Ue._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=eo(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=_c(e,u,a),t.memoizedState=Dc,dn(e.child,l)):(ga(t),a=e.child,e=a.sibling,a=Xt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Cc(e,t){return t=Ti({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ti(e,t){return e=ft(22,e,null,t),e.lanes=0,e}function Uc(e,t,a){return Za(t,e.child,null,a),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Wu(e.return,t,a)}function Hc(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function gf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=_e.current,o=(u&2)!==0;if(o?(u=u&1|2,t.flags|=128):u&=1,U(_e,u),Ke(e,t,l,a),l=re?Il:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pf(e,a,t);else if(e.tag===19)pf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&hi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Hc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&hi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Hc(t,!0,a,null,i,l);break;case"together":Hc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),xa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Xt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Xt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Bc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ui(e)))}function Ph(e,t,a){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),da(t,Ue,e.memoizedState.cache),Ya();break;case 27:case 5:Bl(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:da(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,rc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ga(t),t.flags|=128,null):(a&t.child.childLanes)!==0?hf(e,t,a):(ga(t),e=Jt(e,t,a),e!==null?e.sibling:null);ga(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(pl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return gf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(_e,_e.current),l)break;return null;case 22:return t.lanes=0,rf(e,t,a,t.pendingProps);case 24:da(t,Ue,e.memoizedState.cache)}return Jt(e,t,a)}function vf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Be=!0;else{if(!Bc(e,a)&&(t.flags&128)===0)return Be=!1,Ph(e,t,a);Be=(e.flags&131072)!==0}else Be=!1,re&&(t.flags&1048576)!==0&&Ks(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e=="function")Xu(e)?(l=Ja(e,l),t.tag=1,t=df(null,t,e,l,a)):(t.tag=0,t=Rc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===se){t.tag=11,t=nf(null,t,e,l,a);break e}else if(n===P){t.tag=14,t=uf(null,t,e,l,a);break e}}throw t=Mt(e)||e,Error(s(306,t,""))}}return t;case 0:return Rc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ja(l,t.pendingProps),df(e,t,l,n,a);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,lc(e,t),cn(t,l,null,a);var u=t.memoizedState;if(l=u.cache,da(t,Ue,l),l!==i.cache&&Fu(t,[Ue],a,!0),un(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=mf(e,t,l,a);break e}else if(l!==n){n=xt(Error(s(424)),t),Pl(n),t=mf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ne=zt(e.firstChild),Ve=t,re=!0,oa=null,Et=!0,a=uo(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ya(),l===n){t=Jt(e,t,a);break e}Ke(e,t,l,a)}t=t.child}return t;case 26:return zi(e,t),e===null?(a=Od(t.type,null,t.pendingProps,null))?t.memoizedState=a:re||(a=t.type,e=t.pendingProps,l=Xi(I.current).createElement(a),l[ke]=t,l[Ie]=e,Je(l,a,e),Ye(l),t.stateNode=l):t.memoizedState=Od(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bl(t),e===null&&re&&(l=t.stateNode=zd(t.type,t.pendingProps,I.current),Ve=t,Et=!0,n=Ne,za(t.type)?(gr=n,Ne=zt(l.firstChild)):Ne=n),Ke(e,t,t.pendingProps.children,a),zi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=l=Ne)&&(l=Mp(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Ve=t,Ne=zt(l.firstChild),Et=!1,n=!0):n=!1),n||fa(t)),Bl(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,fr(n,i)?l=null:u!==null&&fr(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=oc(e,t,kh,null,null,a),An._currentValue=n),zi(e,t),Ke(e,t,l,a),t.child;case 6:return e===null&&re&&((e=a=Ne)&&(a=Rp(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Ve=t,Ne=null,e=!0):e=!1),e||fa(t)),null;case 13:return hf(e,t,a);case 4:return Qe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Za(t,null,l,a):Ke(e,t,l,a),t.child;case 11:return nf(e,t,t.type,t.pendingProps,a);case 7:return Ke(e,t,t.pendingProps,a),t.child;case 8:return Ke(e,t,t.pendingProps.children,a),t.child;case 12:return Ke(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,da(t,t.type,l.value),Ke(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Xa(t),n=Ze(n),l=l(n),t.flags|=1,Ke(e,t,l,a),t.child;case 14:return uf(e,t,t.type,t.pendingProps,a);case 15:return cf(e,t,t.type,t.pendingProps,a);case 19:return gf(e,t,a);case 31:return Ih(e,t,a);case 22:return rf(e,t,a,t.pendingProps);case 24:return Xa(t),l=Ze(Ue),e===null?(n=ec(),n===null&&(n=je,i=Iu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ac(t),da(t,Ue,n)):((e.lanes&a)!==0&&(lc(e,t),cn(t,null,null,a),un()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),da(t,Ue,l)):(l=i.cache,da(t,Ue,l),l!==n.cache&&Fu(t,[Ue],a,!0))),Ke(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function $t(e){e.flags|=4}function Lc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(kf())e.flags|=8192;else throw Va=oi,tc}else e.flags&=-16777217}function yf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_d(t))if(kf())e.flags|=8192;else throw Va=oi,tc}function Ai(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$r():536870912,e.lanes|=t,Al|=t)}function mn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function ep(e,t,a){var l=t.pendingProps;switch(Zu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Vt(Ue),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(hl(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ju())),ze(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?($t(t),i!==null?(ze(t),yf(t,i)):(ze(t),Lc(t,n,null,l,a))):i?i!==e.memoizedState?($t(t),ze(t),yf(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&$t(t),ze(t),Lc(t,n,e,l,a)),null;case 27:if(Ln(t),a=I.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return ze(t),null}e=X.current,hl(t)?$s(t):(e=zd(n,l,a),t.stateNode=e,$t(t))}return ze(t),null;case 5:if(Ln(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return ze(t),null}if(i=X.current,hl(t))$s(t);else{var u=Xi(I.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[ke]=t,i[Ie]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Je(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&$t(t)}}return ze(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=I.current,hl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ve,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[ke]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||hd(e.nodeValue,a)),e||fa(t,!0)}else e=Xi(e).createTextNode(l),e[ke]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=hl(t),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ke]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return ze(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=hl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[ke]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ai(t,t.updateQueue),ze(t),null);case 4:return we(),e===null&&ur(t.stateNode.containerInfo),ze(t),null;case 10:return Vt(t.type),ze(t),null;case 19:if(S(_e),l=t.memoizedState,l===null)return ze(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)mn(l,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=hi(e),i!==null){for(t.flags|=128,mn(l,!1),e=i.updateQueue,t.updateQueue=e,Ai(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ks(a,e),a=a.sibling;return U(_e,_e.current&1|2),re&&Qt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ct()>wi&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304)}else{if(!n)if(e=hi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ai(t,e),mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!re)return ze(t),null}else 2*ct()-l.renderingStartTime>wi&&a!==536870912&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ct(),e.sibling=null,a=_e.current,U(_e,n?a&1|2:a&1),re&&Qt(t,l.treeForkCount),e):(ze(t),null);case 22:case 23:return mt(t),cc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Ai(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&S(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Vt(Ue),ze(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function tp(e,t){switch(Zu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vt(Ue),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ln(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(s(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(_e),null;case 4:return we(),null;case 10:return Vt(t.type),null;case 22:case 23:return mt(t),cc(),e!==null&&S(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vt(Ue),null;case 25:return null;default:return null}}function bf(e,t){switch(Zu(t),t.tag){case 3:Vt(Ue),we();break;case 26:case 27:case 5:Ln(t);break;case 4:we();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:S(_e);break;case 10:Vt(t.type);break;case 22:case 23:mt(t),cc(),e!==null&&S(Qa);break;case 24:Vt(Ue)}}function hn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(o){ge(t,t.return,o)}}function ya(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,n=t;var h=a,N=o;try{N()}catch(D){ge(n,h,D)}}}l=l.next}while(l!==i)}}catch(D){ge(t,t.return,D)}}function xf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ro(t,a)}catch(l){ge(e,e.return,l)}}}function Sf(e,t,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ge(e,t,l)}}function pn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ge(e,t,n)}}function Ht(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ge(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ge(e,t,n)}else a.current=null}function jf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ge(e,e.return,n)}}function qc(e,t,a){try{var l=e.stateNode;Ep(l,e.type,a,t),l[Ie]=t}catch(n){ge(e,e.return,n)}}function Ef(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Yt));else if(l!==4&&(l===27&&za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Gc(e,t,a),e=e.sibling;e!==null;)Gc(e,t,a),e=e.sibling}function Oi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Oi(e,t,a),e=e.sibling;e!==null;)Oi(e,t,a),e=e.sibling}function Nf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Je(t,l,a),t[ke]=e,t[Ie]=a}catch(i){ge(e,e.return,i)}}var Wt=!1,Le=!1,Xc=!1,zf=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function ap(e,t){if(e=e.containerInfo,sr=$i,e=Us(e),Uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,o=-1,h=-1,N=0,D=0,C=e,T=null;t:for(;;){for(var O;C!==a||n!==0&&C.nodeType!==3||(o=u+n),C!==i||l!==0&&C.nodeType!==3||(h=u+l),C.nodeType===3&&(u+=C.nodeValue.length),(O=C.firstChild)!==null;)T=C,C=O;for(;;){if(C===e)break t;if(T===a&&++N===n&&(o=u),T===i&&++D===l&&(h=u),(O=C.nextSibling)!==null)break;C=T,T=C.parentNode}C=O}a=o===-1||h===-1?null:{start:o,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(or={focusedElem:e,selectionRange:a},$i=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var V=Ja(a.type,n);e=l.getSnapshotBeforeUpdate(V,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){ge(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)mr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Tf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:It(e,a),l&4&&hn(5,a);break;case 1:if(It(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ge(a,a.return,u)}else{var n=Ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ge(a,a.return,u)}}l&64&&xf(a),l&512&&pn(a,a.return);break;case 3:if(It(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ro(e,t)}catch(u){ge(a,a.return,u)}}break;case 27:t===null&&l&4&&Nf(a);case 26:case 5:It(e,a),t===null&&l&4&&jf(a),l&512&&pn(a,a.return);break;case 12:It(e,a);break;case 31:It(e,a),l&4&&Mf(e,a);break;case 13:It(e,a),l&4&&Rf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fp.bind(null,a),Dp(e,a))));break;case 22:if(l=a.memoizedState!==null||Wt,!l){t=t!==null&&t.memoizedState!==null||Le,n=Wt;var i=Le;Wt=l,(Le=t)&&!i?Pt(e,a,(a.subtreeFlags&8772)!==0):It(e,a),Wt=n,Le=i}break;case 30:break;default:It(e,a)}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,et=!1;function Ft(e,t,a){for(a=a.child;a!==null;)Of(e,t,a),a=a.sibling}function Of(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Ll,a)}catch{}switch(a.tag){case 26:Le||Ht(a,t),Ft(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||Ht(a,t);var l=Ae,n=et;za(a.type)&&(Ae=a.stateNode,et=!1),Ft(e,t,a),Nn(a.stateNode),Ae=l,et=n;break;case 5:Le||Ht(a,t);case 6:if(l=Ae,n=et,Ae=null,Ft(e,t,a),Ae=l,et=n,Ae!==null)if(et)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{Ae.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:Ae!==null&&(et?(e=Ae,xd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ul(e)):xd(Ae,a.stateNode));break;case 4:l=Ae,n=et,Ae=a.stateNode.containerInfo,et=!0,Ft(e,t,a),Ae=l,et=n;break;case 0:case 11:case 14:case 15:ya(2,a,t),Le||ya(4,a,t),Ft(e,t,a);break;case 1:Le||(Ht(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Sf(a,t,l)),Ft(e,t,a);break;case 21:Ft(e,t,a);break;case 22:Le=(l=Le)||a.memoizedState!==null,Ft(e,t,a),Le=l;break;default:Ft(e,t,a)}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ul(e)}catch(a){ge(t,t.return,a)}}}function Rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ul(e)}catch(a){ge(t,t.return,a)}}function lp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zf),t;default:throw Error(s(435,e.tag))}}function Mi(e,t){var a=lp(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=dp.bind(null,e,l);l.then(n,n)}})}function tt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,o=u;e:for(;o!==null;){switch(o.tag){case 27:if(za(o.type)){Ae=o.stateNode,et=!1;break e}break;case 5:Ae=o.stateNode,et=!1;break e;case 3:case 4:Ae=o.stateNode.containerInfo,et=!0;break e}o=o.return}if(Ae===null)throw Error(s(160));Of(i,u,n),Ae=null,et=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Df(t,e),t=t.sibling}var Dt=null;function Df(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),at(e),l&4&&(ya(3,e,e.return),hn(3,e),ya(5,e,e.return));break;case 1:tt(t,e),at(e),l&512&&(Le||a===null||Ht(a,a.return)),l&64&&Wt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Dt;if(tt(t,e),at(e),l&512&&(Le||a===null||Ht(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Gl]||i[ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Je(i,l,a),i[ke]=e,Ye(i),l=i;break e;case"link":var u=Dd("link","href",n).get(l+(a.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(o,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Dd("meta","content",n).get(l+(a.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(o,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;default:throw Error(s(468,l))}i[ke]=e,Ye(i),l=i}e.stateNode=l}else wd(n,e.type,e.stateNode);else e.stateNode=Rd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?wd(n,e.type,e.stateNode):Rd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&qc(e,e.memoizedProps,a.memoizedProps)}break;case 27:tt(t,e),at(e),l&512&&(Le||a===null||Ht(a,a.return)),a!==null&&l&4&&qc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(tt(t,e),at(e),l&512&&(Le||a===null||Ht(a,a.return)),e.flags&32){n=e.stateNode;try{nl(n,"")}catch(V){ge(e,e.return,V)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,qc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Xc=!0);break;case 6:if(tt(t,e),at(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(V){ge(e,e.return,V)}}break;case 3:if(Vi=null,n=Dt,Dt=Qi(t.containerInfo),tt(t,e),Dt=n,at(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ul(t.containerInfo)}catch(V){ge(e,e.return,V)}Xc&&(Xc=!1,wf(e));break;case 4:l=Dt,Dt=Qi(e.stateNode.containerInfo),tt(t,e),at(e),Dt=l;break;case 12:tt(t,e),at(e);break;case 31:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mi(e,l)));break;case 13:tt(t,e),at(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Di=ct()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mi(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,N=Wt,D=Le;if(Wt=N||n,Le=D||h,tt(t,e),Le=D,Wt=N,at(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||Wt||Le||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=h.stateNode;var C=h.memoizedProps.style,T=C!=null&&C.hasOwnProperty("display")?C.display:null;o.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(V){ge(h,h.return,V)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(V){ge(h,h.return,V)}}}else if(t.tag===18){if(a===null){h=t;try{var O=h.stateNode;n?Sd(O,!0):Sd(h.stateNode,!1)}catch(V){ge(h,h.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Mi(e,a))));break;case 19:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mi(e,l)));break;case 30:break;case 21:break;default:tt(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ef(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var n=a.stateNode,i=Yc(e);Oi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(nl(u,""),a.flags&=-33);var o=Yc(e);Oi(e,o,u);break;case 3:case 4:var h=a.stateNode.containerInfo,N=Yc(e);Gc(e,N,h);break;default:throw Error(s(161))}}catch(D){ge(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Tf(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ya(4,t,t.return),$a(t);break;case 1:Ht(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Sf(t,t.return,a),$a(t);break;case 27:Nn(t.stateNode);case 26:case 5:Ht(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function Pt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Pt(n,i,a),hn(4,i);break;case 1:if(Pt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(N){ge(l,l.return,N)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)co(h[n],o)}catch(N){ge(l,l.return,N)}}a&&u&64&&xf(i),pn(i,i.return);break;case 27:Nf(i);case 26:case 5:Pt(n,i,a),a&&l===null&&u&4&&jf(i),pn(i,i.return);break;case 12:Pt(n,i,a);break;case 31:Pt(n,i,a),a&&u&4&&Mf(n,i);break;case 13:Pt(n,i,a),a&&u&4&&Rf(n,i);break;case 22:i.memoizedState===null&&Pt(n,i,a),pn(i,i.return);break;case 30:break;default:Pt(n,i,a)}t=t.sibling}}function Qc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&en(a))}function kc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e))}function wt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_f(e,t,a,l),t=t.sibling}function _f(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:wt(e,t,a,l),n&2048&&hn(9,t);break;case 1:wt(e,t,a,l);break;case 3:wt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e)));break;case 12:if(n&2048){wt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else wt(e,t,a,l);break;case 31:wt(e,t,a,l);break;case 13:wt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?wt(e,t,a,l):gn(e,t):i._visibility&2?wt(e,t,a,l):(i._visibility|=2,Nl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Qc(u,t);break;case 24:wt(e,t,a,l),n&2048&&kc(t.alternate,t);break;default:wt(e,t,a,l)}}function Nl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,o=a,h=l,N=u.flags;switch(u.tag){case 0:case 11:case 15:Nl(i,u,o,h,n),hn(8,u);break;case 23:break;case 22:var D=u.stateNode;u.memoizedState!==null?D._visibility&2?Nl(i,u,o,h,n):gn(i,u):(D._visibility|=2,Nl(i,u,o,h,n)),n&&N&2048&&Qc(u.alternate,u);break;case 24:Nl(i,u,o,h,n),n&&N&2048&&kc(u.alternate,u);break;default:Nl(i,u,o,h,n)}t=t.sibling}}function gn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:gn(a,l),n&2048&&Qc(l.alternate,l);break;case 24:gn(a,l),n&2048&&kc(l.alternate,l);break;default:gn(a,l)}t=t.sibling}}var vn=8192;function zl(e,t,a){if(e.subtreeFlags&vn)for(e=e.child;e!==null;)Cf(e,t,a),e=e.sibling}function Cf(e,t,a){switch(e.tag){case 26:zl(e,t,a),e.flags&vn&&e.memoizedState!==null&&Qp(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:zl(e,t,a);break;case 3:case 4:var l=Dt;Dt=Qi(e.stateNode.containerInfo),zl(e,t,a),Dt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=vn,vn=16777216,zl(e,t,a),vn=l):zl(e,t,a));break;default:zl(e,t,a)}}function Uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Bf(l,e)}Uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hf(e),e=e.sibling}function Hf(e){switch(e.tag){case 0:case 11:case 15:yn(e),e.flags&2048&&ya(9,e,e.return);break;case 3:yn(e);break;case 12:yn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ri(e)):yn(e);break;default:yn(e)}}function Ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Bf(l,e)}Uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ya(8,t,t.return),Ri(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ri(t));break;default:Ri(t)}e=e.sibling}}function Bf(e,t){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:ya(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:en(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ge=l;else e:for(a=e;Ge!==null;){l=Ge;var n=l.sibling,i=l.return;if(Af(l),l===a){Ge=null;break e}if(n!==null){n.return=i,Ge=n;break e}Ge=i}}}var np={getCacheForType:function(e){var t=Ze(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ze(Ue).controller.signal}},ip=typeof WeakMap=="function"?WeakMap:Map,me=0,je=null,ne=null,ue=0,pe=0,ht=null,ba=!1,Tl=!1,Vc=!1,ea=0,Re=0,xa=0,Wa=0,Zc=0,pt=0,Al=0,bn=null,lt=null,Kc=!1,Di=0,Lf=0,wi=1/0,_i=null,Sa=null,qe=0,ja=null,Ol=null,ta=0,Jc=0,$c=null,qf=null,xn=0,Wc=null;function gt(){return(me&2)!==0&&ue!==0?ue&-ue:w.T!==null?ar():Pr()}function Yf(){if(pt===0)if((ue&536870912)===0||re){var e=Gn;Gn<<=1,(Gn&3932160)===0&&(Gn=262144),pt=e}else pt=536870912;return e=dt.current,e!==null&&(e.flags|=32),pt}function nt(e,t,a){(e===je&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Ml(e,0),Ea(e,ue,pt,!1)),Yl(e,a),((me&2)===0||e!==je)&&(e===je&&((me&2)===0&&(Wa|=a),Re===4&&Ea(e,ue,pt,!1)),Bt(e))}function Gf(e,t,a){if((me&6)!==0)throw Error(s(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ql(e,t),n=l?rp(e,t):Ic(e,t,!0),i=l;do{if(n===0){Tl&&!l&&Ea(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!up(a)){n=Ic(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var o=e;n=bn;var h=o.current.memoizedState.isDehydrated;if(h&&(Ml(o,u).flags|=256),u=Ic(o,u,!1),u!==2){if(Vc&&!h){o.errorRecoveryDisabledLanes|=i,Wa|=i,n=4;break e}i=lt,lt=n,i!==null&&(lt===null?lt=i:lt.push.apply(lt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ml(e,0),Ea(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Ea(l,t,pt,!ba);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=Di+300-ct(),10<n)){if(Ea(l,t,pt,!ba),Qn(l,0,!0)!==0)break e;ta=t,l.timeoutHandle=yd(Xf.bind(null,l,a,lt,_i,Kc,t,pt,Wa,Al,ba,i,"Throttled",-0,0),n);break e}Xf(l,a,lt,_i,Kc,t,pt,Wa,Al,ba,i,null,-0,0)}}break}while(!0);Bt(e)}function Xf(e,t,a,l,n,i,u,o,h,N,D,C,T,O){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},Cf(t,i,C);var V=(i&62914560)===i?Di-ct():(i&4194048)===i?Lf-ct():0;if(V=kp(C,V),V!==null){ta=i,e.cancelPendingCommit=V(Wf.bind(null,e,t,i,a,l,n,u,o,h,D,C,null,T,O)),Ea(e,i,u,!N);return}}Wf(e,t,i,a,l,n,u,o,h)}function up(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ot(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,a,l){t&=~Zc,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-st(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Wr(e,a,t)}function Ci(){return(me&6)===0?(Sn(0),!1):!0}function Fc(){if(ne!==null){if(pe===0)var e=ne.return;else e=ne,kt=Ga=null,mc(e),bl=null,an=0,e=ne;for(;e!==null;)bf(e.alternate,e),e=e.return;ne=null}}function Ml(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Tp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Fc(),je=e,ne=a=Xt(e.current,null),ue=t,pe=0,ht=null,ba=!1,Tl=ql(e,t),Vc=!1,Al=pt=Zc=Wa=xa=Re=0,lt=bn=null,Kc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-st(l),i=1<<n;t|=e[n],l&=~i}return ea=t,ti(),a}function Qf(e,t){te=null,w.H=fn,t===yl||t===si?(t=lo(),pe=3):t===tc?(t=lo(),pe=4):pe=t===Mc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,ne===null&&(Re=1,Ei(e,xt(t,e.current)))}function kf(){var e=dt.current;return e===null?!0:(ue&4194048)===ue?Nt===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Nt:!1}function Vf(){var e=w.H;return w.H=fn,e===null?fn:e}function Zf(){var e=w.A;return w.A=np,e}function Ui(){Re=4,ba||(ue&4194048)!==ue&&dt.current!==null||(Tl=!0),(xa&134217727)===0&&(Wa&134217727)===0||je===null||Ea(je,ue,pt,!1)}function Ic(e,t,a){var l=me;me|=2;var n=Vf(),i=Zf();(je!==e||ue!==t)&&(_i=null,Ml(e,t)),t=!1;var u=Re;e:do try{if(pe!==0&&ne!==null){var o=ne,h=ht;switch(pe){case 8:Fc(),u=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var N=pe;if(pe=0,ht=null,Rl(e,o,h,N),a&&Tl){u=0;break e}break;default:N=pe,pe=0,ht=null,Rl(e,o,h,N)}}cp(),u=Re;break}catch(D){Qf(e,D)}while(!0);return t&&e.shellSuspendCounter++,kt=Ga=null,me=l,w.H=n,w.A=i,ne===null&&(je=null,ue=0,ti()),u}function cp(){for(;ne!==null;)Kf(ne)}function rp(e,t){var a=me;me|=2;var l=Vf(),n=Zf();je!==e||ue!==t?(_i=null,wi=ct()+500,Ml(e,t)):Tl=ql(e,t);e:do try{if(pe!==0&&ne!==null){t=ne;var i=ht;t:switch(pe){case 1:pe=0,ht=null,Rl(e,t,i,1);break;case 2:case 9:if(to(i)){pe=0,ht=null,Jf(t);break}t=function(){pe!==2&&pe!==9||je!==e||(pe=7),Bt(e)},i.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:to(i)?(pe=0,ht=null,Jf(t)):(pe=0,ht=null,Rl(e,t,i,7));break;case 5:var u=null;switch(ne.tag){case 26:u=ne.memoizedState;case 5:case 27:var o=ne;if(u?_d(u):o.stateNode.complete){pe=0,ht=null;var h=o.sibling;if(h!==null)ne=h;else{var N=o.return;N!==null?(ne=N,Hi(N)):ne=null}break t}}pe=0,ht=null,Rl(e,t,i,5);break;case 6:pe=0,ht=null,Rl(e,t,i,6);break;case 8:Fc(),Re=6;break e;default:throw Error(s(462))}}sp();break}catch(D){Qf(e,D)}while(!0);return kt=Ga=null,w.H=l,w.A=n,me=a,ne!==null?0:(je=null,ue=0,ti(),Re)}function sp(){for(;ne!==null&&!wm();)Kf(ne)}function Kf(e){var t=vf(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?Hi(e):ne=t}function Jf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ff(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=ff(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:mc(t);default:bf(a,t),t=ne=ks(t,ea),t=vf(a,t,ea)}e.memoizedProps=e.pendingProps,t===null?Hi(e):ne=t}function Rl(e,t,a,l){kt=Ga=null,mc(t),bl=null,an=0;var n=t.return;try{if(Fh(e,n,t,a,ue)){Re=1,Ei(e,xt(a,e.current)),ne=null;return}}catch(i){if(n!==null)throw ne=n,i;Re=1,Ei(e,xt(a,e.current)),ne=null;return}t.flags&32768?(re||l===1?e=!0:Tl||(ue&536870912)!==0?e=!1:(ba=e=!0,(l===2||l===9||l===3||l===6)&&(l=dt.current,l!==null&&l.tag===13&&(l.flags|=16384))),$f(t,e)):Hi(t)}function Hi(e){var t=e;do{if((t.flags&32768)!==0){$f(t,ba);return}e=t.return;var a=ep(t.alternate,t,ea);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Re===0&&(Re=5)}function $f(e,t){do{var a=tp(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Re=6,ne=null}function Wf(e,t,a,l,n,i,u,o,h){e.cancelPendingCommit=null;do Bi();while(qe!==0);if((me&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Yu,Xm(e,a,i,u,o,h),e===je&&(ne=je=null,ue=0),Ol=t,ja=e,ta=a,Jc=i,$c=n,qf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mp(qn,function(){return td(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=w.T,w.T=null,n=G.p,G.p=2,u=me,me|=4;try{ap(e,t,a)}finally{me=u,G.p=n,w.T=l}}qe=1,Ff(),If(),Pf()}}function Ff(){if(qe===1){qe=0;var e=ja,t=Ol,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var l=G.p;G.p=2;var n=me;me|=4;try{Df(t,e);var i=or,u=Us(e.containerInfo),o=i.focusedElem,h=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&Cs(o.ownerDocument.documentElement,o)){if(h!==null&&Uu(o)){var N=h.start,D=h.end;if(D===void 0&&(D=N),"selectionStart"in o)o.selectionStart=N,o.selectionEnd=Math.min(D,o.value.length);else{var C=o.ownerDocument||document,T=C&&C.defaultView||window;if(T.getSelection){var O=T.getSelection(),V=o.textContent.length,W=Math.min(h.start,V),Se=h.end===void 0?W:Math.min(h.end,V);!O.extend&&W>Se&&(u=Se,Se=W,W=u);var x=_s(o,W),v=_s(o,Se);if(x&&v&&(O.rangeCount!==1||O.anchorNode!==x.node||O.anchorOffset!==x.offset||O.focusNode!==v.node||O.focusOffset!==v.offset)){var E=C.createRange();E.setStart(x.node,x.offset),O.removeAllRanges(),W>Se?(O.addRange(E),O.extend(v.node,v.offset)):(E.setEnd(v.node,v.offset),O.addRange(E))}}}}for(C=[],O=o;O=O.parentNode;)O.nodeType===1&&C.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<C.length;o++){var _=C[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}$i=!!sr,or=sr=null}finally{me=n,G.p=l,w.T=a}}e.current=t,qe=2}}function If(){if(qe===2){qe=0;var e=ja,t=Ol,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var l=G.p;G.p=2;var n=me;me|=4;try{Tf(e,t.alternate,t)}finally{me=n,G.p=l,w.T=a}}qe=3}}function Pf(){if(qe===4||qe===3){qe=0,_m();var e=ja,t=Ol,a=ta,l=qf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,Ol=ja=null,ed(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Sa=null),gu(a),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=w.T,n=G.p,G.p=2,w.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var o=l[u];i(o.value,{componentStack:o.stack})}}finally{w.T=t,G.p=n}}(ta&3)!==0&&Bi(),Bt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Wc?xn++:(xn=0,Wc=e):xn=0,Sn(0)}}function ed(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,en(t)))}function Bi(){return Ff(),If(),Pf(),td()}function td(){if(qe!==5)return!1;var e=ja,t=Jc;Jc=0;var a=gu(ta),l=w.T,n=G.p;try{G.p=32>a?32:a,w.T=null,a=$c,$c=null;var i=ja,u=ta;if(qe=0,Ol=ja=null,ta=0,(me&6)!==0)throw Error(s(331));var o=me;if(me|=4,Hf(i.current),_f(i,i.current,u,a),me=o,Sn(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Ll,i)}catch{}return!0}finally{G.p=n,w.T=l,ed(e,t)}}function ad(e,t,a){t=xt(a,t),t=Oc(e.stateNode,t,2),e=pa(e,t,2),e!==null&&(Yl(e,2),Bt(e))}function ge(e,t,a){if(e.tag===3)ad(e,e,a);else for(;t!==null;){if(t.tag===3){ad(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sa===null||!Sa.has(l))){e=xt(a,e),a=af(2),l=pa(t,a,2),l!==null&&(lf(a,l,t,e),Yl(l,2),Bt(l));break}}t=t.return}}function Pc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ip;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Vc=!0,n.add(a),e=op.bind(null,e,t,a),t.then(e,e))}function op(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(ue&a)===a&&(Re===4||Re===3&&(ue&62914560)===ue&&300>ct()-Di?(me&2)===0&&Ml(e,0):Zc|=a,Al===ue&&(Al=0)),Bt(e)}function ld(e,t){t===0&&(t=$r()),e=La(e,t),e!==null&&(Yl(e,t),Bt(e))}function fp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ld(e,a)}function dp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),ld(e,a)}function mp(e,t){return du(e,t)}var Li=null,Dl=null,er=!1,qi=!1,tr=!1,Na=0;function Bt(e){e!==Dl&&e.next===null&&(Dl===null?Li=Dl=e:Dl=Dl.next=e),qi=!0,er||(er=!0,pp())}function Sn(e,t){if(!tr&&qi){tr=!0;do for(var a=!1,l=Li;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-st(42|e)+1)-1,i&=n&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,cd(l,i))}else i=ue,i=Qn(l,l===je?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||ql(l,i)||(a=!0,cd(l,i));l=l.next}while(a);tr=!1}}function hp(){nd()}function nd(){qi=er=!1;var e=0;Na!==0&&zp()&&(e=Na);for(var t=ct(),a=null,l=Li;l!==null;){var n=l.next,i=id(l,t);i===0?(l.next=null,a===null?Li=n:a.next=n,n===null&&(Dl=a)):(a=l,(e!==0||(i&3)!==0)&&(qi=!0)),l=n}qe!==0&&qe!==5||Sn(e),Na!==0&&(Na=0)}function id(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-st(i),o=1<<u,h=n[u];h===-1?((o&a)===0||(o&l)!==0)&&(n[u]=Gm(o,t)):h<=t&&(e.expiredLanes|=o),i&=~o}if(t=je,a=ue,a=Qn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&mu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ql(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&mu(l),gu(a)){case 2:case 8:a=Kr;break;case 32:a=qn;break;case 268435456:a=Jr;break;default:a=qn}return l=ud.bind(null,e),a=du(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&mu(l),e.callbackPriority=2,e.callbackNode=null,2}function ud(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bi()&&e.callbackNode!==a)return null;var l=ue;return l=Qn(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Gf(e,l,t),id(e,ct()),e.callbackNode!=null&&e.callbackNode===a?ud.bind(null,e):null)}function cd(e,t){if(Bi())return null;Gf(e,t,!0)}function pp(){Ap(function(){(me&6)!==0?du(Zr,hp):nd()})}function ar(){if(Na===0){var e=gl;e===0&&(e=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),Na=e}return Na}function rd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function sd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function gp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=rd((n[Ie]||null).action),u=l.submitter;u&&(t=(t=u[Ie]||null)?rd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var o=new Fn("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Na!==0){var h=u?sd(n,u):new FormData(n);jc(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(o.preventDefault(),h=u?sd(n,u):new FormData(n),jc(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var lr=0;lr<qu.length;lr++){var nr=qu[lr],vp=nr.toLowerCase(),yp=nr[0].toUpperCase()+nr.slice(1);Rt(vp,"on"+yp)}Rt(Ls,"onAnimationEnd"),Rt(qs,"onAnimationIteration"),Rt(Ys,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Ch,"onTransitionRun"),Rt(Uh,"onTransitionStart"),Rt(Hh,"onTransitionCancel"),Rt(Gs,"onTransitionEnd"),al("onMouseEnter",["mouseout","mouseover"]),al("onMouseLeave",["mouseout","mouseover"]),al("onPointerEnter",["pointerout","pointerover"]),al("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jn));function od(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var o=l[u],h=o.instance,N=o.currentTarget;if(o=o.listener,h!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=N;try{i(n)}catch(D){ei(D)}n.currentTarget=null,i=h}else for(u=0;u<l.length;u++){if(o=l[u],h=o.instance,N=o.currentTarget,o=o.listener,h!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=N;try{i(n)}catch(D){ei(D)}n.currentTarget=null,i=h}}}}function ie(e,t){var a=t[vu];a===void 0&&(a=t[vu]=new Set);var l=e+"__bubble";a.has(l)||(fd(t,e,2,!1),a.add(l))}function ir(e,t,a){var l=0;t&&(l|=4),fd(a,e,l,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Yi]){e[Yi]=!0,as.forEach(function(a){a!=="selectionchange"&&(bp.has(a)||ir(a,!1,e),ir(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,ir("selectionchange",!1,t))}}function fd(e,t,a,l){switch(Yd(t)){case 2:var n=Kp;break;case 8:n=Jp;break;default:n=Sr}a=n.bind(null,t,a,e),n=void 0,!Tu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function cr(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var o=l.stateNode.containerInfo;if(o===n)break;if(u===4)for(u=l.return;u!==null;){var h=u.tag;if((h===3||h===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;o!==null;){if(u=Pa(o),u===null)return;if(h=u.tag,h===5||h===6||h===26||h===27){l=i=u;continue e}o=o.parentNode}}l=l.return}hs(function(){var N=i,D=Nu(a),C=[];e:{var T=Xs.get(e);if(T!==void 0){var O=Fn,V=e;switch(e){case"keypress":if($n(a)===0)break e;case"keydown":case"keyup":O=dh;break;case"focusin":V="focus",O=Ru;break;case"focusout":V="blur",O=Ru;break;case"beforeblur":case"afterblur":O=Ru;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=ph;break;case Ls:case qs:case Ys:O=lh;break;case Gs:O=vh;break;case"scroll":case"scrollend":O=Im;break;case"wheel":O=bh;break;case"copy":case"cut":case"paste":O=ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=bs;break;case"toggle":case"beforetoggle":O=Sh}var W=(t&4)!==0,Se=!W&&(e==="scroll"||e==="scrollend"),x=W?T!==null?T+"Capture":null:T;W=[];for(var v=N,E;v!==null;){var _=v;if(E=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||E===null||x===null||(_=Ql(v,x),_!=null&&W.push(En(v,_,E))),Se)break;v=v.return}0<W.length&&(T=new O(T,V,null,a,D),C.push({event:T,listeners:W}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",T&&a!==Eu&&(V=a.relatedTarget||a.fromElement)&&(Pa(V)||V[Ia]))break e;if((O||T)&&(T=D.window===D?D:(T=D.ownerDocument)?T.defaultView||T.parentWindow:window,O?(V=a.relatedTarget||a.toElement,O=N,V=V?Pa(V):null,V!==null&&(Se=p(V),W=V.tag,V!==Se||W!==5&&W!==27&&W!==6)&&(V=null)):(O=null,V=N),O!==V)){if(W=vs,_="onMouseLeave",x="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(W=bs,_="onPointerLeave",x="onPointerEnter",v="pointer"),Se=O==null?T:Xl(O),E=V==null?T:Xl(V),T=new W(_,v+"leave",O,a,D),T.target=Se,T.relatedTarget=E,_=null,Pa(D)===N&&(W=new W(x,v+"enter",V,a,D),W.target=E,W.relatedTarget=Se,_=W),Se=_,O&&V)t:{for(W=xp,x=O,v=V,E=0,_=x;_;_=W(_))E++;_=0;for(var J=v;J;J=W(J))_++;for(;0<E-_;)x=W(x),E--;for(;0<_-E;)v=W(v),_--;for(;E--;){if(x===v||v!==null&&x===v.alternate){W=x;break t}x=W(x),v=W(v)}W=null}else W=null;O!==null&&dd(C,T,O,W,!1),V!==null&&Se!==null&&dd(C,Se,V,W,!0)}}e:{if(T=N?Xl(N):window,O=T.nodeName&&T.nodeName.toLowerCase(),O==="select"||O==="input"&&T.type==="file")var oe=As;else if(zs(T))if(Os)oe=Dh;else{oe=Mh;var Z=Oh}else O=T.nodeName,!O||O.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?N&&ju(N.elementType)&&(oe=As):oe=Rh;if(oe&&(oe=oe(e,N))){Ts(C,oe,a,D);break e}Z&&Z(e,T,N),e==="focusout"&&N&&T.type==="number"&&N.memoizedProps.value!=null&&Su(T,"number",T.value)}switch(Z=N?Xl(N):window,e){case"focusin":(zs(Z)||Z.contentEditable==="true")&&(rl=Z,Hu=N,Fl=null);break;case"focusout":Fl=Hu=rl=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Hs(C,a,D);break;case"selectionchange":if(_h)break;case"keydown":case"keyup":Hs(C,a,D)}var ae;if(wu)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else cl?Es(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(xs&&a.locale!=="ko"&&(cl||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&cl&&(ae=ps()):(ra=D,Au="value"in ra?ra.value:ra.textContent,cl=!0)),Z=Gi(N,ce),0<Z.length&&(ce=new ys(ce,e,null,a,D),C.push({event:ce,listeners:Z}),ae?ce.data=ae:(ae=Ns(a),ae!==null&&(ce.data=ae)))),(ae=Eh?Nh(e,a):zh(e,a))&&(ce=Gi(N,"onBeforeInput"),0<ce.length&&(Z=new ys("onBeforeInput","beforeinput",null,a,D),C.push({event:Z,listeners:ce}),Z.data=ae)),gp(C,e,N,a,D)}od(C,t)})}function En(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Gi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ql(e,a),n!=null&&l.unshift(En(e,n,i)),n=Ql(e,t),n!=null&&l.push(En(e,n,i))),e.tag===3)return l;e=e.return}return[]}function xp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dd(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var o=a,h=o.alternate,N=o.stateNode;if(o=o.tag,h!==null&&h===l)break;o!==5&&o!==26&&o!==27||N===null||(h=N,n?(N=Ql(a,i),N!=null&&u.unshift(En(a,N,h))):n||(N=Ql(a,i),N!=null&&u.push(En(a,N,h)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Sp=/\r\n?/g,jp=/\u0000|\uFFFD/g;function md(e){return(typeof e=="string"?e:""+e).replace(Sp,`
`).replace(jp,"")}function hd(e,t){return t=md(t),md(e)===t}function xe(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||nl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&nl(e,""+l);break;case"className":Vn(e,"class",l);break;case"tabIndex":Vn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Vn(e,a,l);break;case"style":ds(e,l,i);break;case"data":if(t!=="object"){Vn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",n.name,n,null),xe(e,t,"formEncType",n.formEncType,n,null),xe(e,t,"formMethod",n.formMethod,n,null),xe(e,t,"formTarget",n.formTarget,n,null)):(xe(e,t,"encType",n.encType,n,null),xe(e,t,"method",n.method,n,null),xe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),kn(e,"popover",l);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":kn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wm.get(a)||a,kn(e,a,l))}}function rr(e,t,a,l,n,i){switch(a){case"style":ds(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?nl(e,l):(typeof l=="number"||typeof l=="bigint")&&nl(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ls.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ie]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):kn(e,a,l)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:xe(e,t,i,u,a,null)}}n&&xe(e,t,"srcSet",a.srcSet,a,null),l&&xe(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var o=i=u=n=null,h=null,N=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":n=D;break;case"type":u=D;break;case"checked":h=D;break;case"defaultChecked":N=D;break;case"value":i=D;break;case"defaultValue":o=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,t));break;default:xe(e,t,l,D,a,null)}}rs(e,i,o,h,N,u,n,!1);return;case"select":ie("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":l=o;default:xe(e,t,n,o,a,null)}t=i,a=u,e.multiple=!!l,t!=null?ll(e,!!l,t,!1):a!=null&&ll(e,!!l,a,!0);return;case"textarea":ie("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:xe(e,t,u,o,a,null)}os(e,l,n,i);return;case"option":for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null)&&(h==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":xe(e,t,h,l,a,null));return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<jn.length;l++)ie(jn[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(l=a[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:xe(e,t,N,l,a,null)}return;default:if(ju(t)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&rr(e,t,D,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&xe(e,t,o,l,a,null))}function Ep(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,o=null,h=null,N=null,D=null;for(O in a){var C=a[O];if(a.hasOwnProperty(O)&&C!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":h=C;default:l.hasOwnProperty(O)||xe(e,t,O,null,l,C)}}for(var T in l){var O=l[T];if(C=a[T],l.hasOwnProperty(T)&&(O!=null||C!=null))switch(T){case"type":i=O;break;case"name":n=O;break;case"checked":N=O;break;case"defaultChecked":D=O;break;case"value":u=O;break;case"defaultValue":o=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:O!==C&&xe(e,t,T,O,l,C)}}xu(e,u,o,h,N,D,i,n);return;case"select":O=u=o=T=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":O=h;default:l.hasOwnProperty(i)||xe(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":T=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==h&&xe(e,t,n,i,l,h)}t=o,a=u,l=O,T!=null?ll(e,!!a,T,!1):!!l!=!!a&&(t!=null?ll(e,!!a,t,!0):ll(e,!!a,a?[]:"",!1));return;case"textarea":O=T=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:xe(e,t,o,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":T=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&xe(e,t,u,n,l,i)}ss(e,T,O);return;case"option":for(var V in a)T=a[V],a.hasOwnProperty(V)&&T!=null&&!l.hasOwnProperty(V)&&(V==="selected"?e.selected=!1:xe(e,t,V,null,l,T));for(h in l)T=l[h],O=a[h],l.hasOwnProperty(h)&&T!==O&&(T!=null||O!=null)&&(h==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":xe(e,t,h,T,l,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)T=a[W],a.hasOwnProperty(W)&&T!=null&&!l.hasOwnProperty(W)&&xe(e,t,W,null,l,T);for(N in l)if(T=l[N],O=a[N],l.hasOwnProperty(N)&&T!==O&&(T!=null||O!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,t));break;default:xe(e,t,N,T,l,O)}return;default:if(ju(t)){for(var Se in a)T=a[Se],a.hasOwnProperty(Se)&&T!==void 0&&!l.hasOwnProperty(Se)&&rr(e,t,Se,void 0,l,T);for(D in l)T=l[D],O=a[D],!l.hasOwnProperty(D)||T===O||T===void 0&&O===void 0||rr(e,t,D,T,l,O);return}}for(var x in a)T=a[x],a.hasOwnProperty(x)&&T!=null&&!l.hasOwnProperty(x)&&xe(e,t,x,null,l,T);for(C in l)T=l[C],O=a[C],!l.hasOwnProperty(C)||T===O||T==null&&O==null||xe(e,t,C,T,l,O)}function pd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Np(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,o=n.duration;if(i&&o&&pd(u)){for(u=0,o=n.responseEnd,l+=1;l<a.length;l++){var h=a[l],N=h.startTime;if(N>o)break;var D=h.transferSize,C=h.initiatorType;D&&pd(C)&&(h=h.responseEnd,u+=D*(h<o?1:(o-N)/(h-N)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sr=null,or=null;function Xi(e){return e.nodeType===9?e:e.ownerDocument}function gd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dr=null;function zp(){var e=window.event;return e&&e.type==="popstate"?e===dr?!1:(dr=e,!0):(dr=null,!1)}var yd=typeof setTimeout=="function"?setTimeout:void 0,Tp=typeof clearTimeout=="function"?clearTimeout:void 0,bd=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof bd<"u"?function(e){return bd.resolve(null).then(e).catch(Op)}:yd;function Op(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function xd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ul(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Nn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Nn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,o=i.nodeName;i[Gl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&Nn(e.ownerDocument.body);a=n}while(a);Ul(t)}function Sd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function mr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mr(a),yu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Mp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function Rp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function jd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function hr(e){return e.data==="$?"||e.data==="$~"}function pr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Dp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var gr=null;function Ed(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function zd(e,t,a){switch(t=Xi(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Nn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yu(e)}var Tt=new Map,Td=new Set;function Qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=G.d;G.d={f:wp,r:_p,D:Cp,C:Up,L:Hp,m:Bp,X:qp,S:Lp,M:Yp};function wp(){var e=aa.f(),t=Ci();return e||t}function _p(e){var t=el(e);t!==null&&t.tag===5&&t.type==="form"?Xo(t):aa.r(e)}var wl=typeof document>"u"?null:document;function Ad(e,t,a){var l=wl;if(l&&typeof t=="string"&&t){var n=yt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Td.has(n)||(Td.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Je(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Cp(e){aa.D(e),Ad("dns-prefetch",e,null)}function Up(e,t){aa.C(e,t),Ad("preconnect",e,t)}function Hp(e,t,a){aa.L(e,t,a);var l=wl;if(l&&e&&t){var n='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+yt(a.imageSizes)+'"]')):n+='[href="'+yt(e)+'"]';var i=n;switch(t){case"style":i=_l(e);break;case"script":i=Cl(e)}Tt.has(i)||(e=A({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(zn(i))||t==="script"&&l.querySelector(Tn(i))||(t=l.createElement("link"),Je(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Bp(e,t){aa.m(e,t);var a=wl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Cl(e)}if(!Tt.has(i)&&(e=A({rel:"modulepreload",href:e},t),Tt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tn(i)))return}l=a.createElement("link"),Je(l,"link",e),Ye(l),a.head.appendChild(l)}}}function Lp(e,t,a){aa.S(e,t,a);var l=wl;if(l&&e){var n=tl(l).hoistableStyles,i=_l(e);t=t||"default";var u=n.get(i);if(!u){var o={loading:0,preload:null};if(u=l.querySelector(zn(i)))o.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(i))&&vr(e,a);var h=u=l.createElement("link");Ye(h),Je(h,"link",e),h._p=new Promise(function(N,D){h.onload=N,h.onerror=D}),h.addEventListener("load",function(){o.loading|=1}),h.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ki(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:o},n.set(i,u)}}}function qp(e,t){aa.X(e,t);var a=wl;if(a&&e){var l=tl(a).hoistableScripts,n=Cl(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=A({src:e,async:!0},t),(t=Tt.get(n))&&yr(e,t),i=a.createElement("script"),Ye(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Yp(e,t){aa.M(e,t);var a=wl;if(a&&e){var l=tl(a).hoistableScripts,n=Cl(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=A({src:e,async:!0,type:"module"},t),(t=Tt.get(n))&&yr(e,t),i=a.createElement("script"),Ye(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Od(e,t,a,l){var n=(n=I.current)?Qi(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=_l(a.href),a=tl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_l(a.href);var i=tl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(zn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),i||Gp(n,e,a,u.state))),t&&l===null)throw Error(s(528,""));return u}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Cl(a),a=tl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function _l(e){return'href="'+yt(e)+'"'}function zn(e){return'link[rel="stylesheet"]['+e+"]"}function Md(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function Gp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Je(t,"link",a),Ye(t),e.head.appendChild(t))}function Cl(e){return'[src="'+yt(e)+'"]'}function Tn(e){return"script[async]"+e}function Rd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+yt(a.href)+'"]');if(l)return t.instance=l,Ye(l),l;var n=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ye(l),Je(l,"style",n),ki(l,a.precedence,e),t.instance=l;case"stylesheet":n=_l(a.href);var i=e.querySelector(zn(n));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;l=Md(a),(n=Tt.get(n))&&vr(l,n),i=(e.ownerDocument||e).createElement("link"),Ye(i);var u=i;return u._p=new Promise(function(o,h){u.onload=o,u.onerror=h}),Je(i,"link",l),t.state.loading|=4,ki(i,a.precedence,e),t.instance=i;case"script":return i=Cl(a.src),(n=e.querySelector(Tn(i)))?(t.instance=n,Ye(n),n):(l=a,(n=Tt.get(i))&&(l=A({},a),yr(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ye(n),Je(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ki(l,a.precedence,e));return t.instance}function ki(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var o=l[u];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function vr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function yr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vi=null;function Dd(e,t,a){if(Vi===null){var l=new Map,n=Vi=new Map;n.set(a,l)}else n=Vi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Gl]||i[ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var o=l.get(u);o?o.push(i):l.set(u,[i])}}return l}function wd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Xp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _d(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=_l(l.href),i=t.querySelector(zn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ye(i);return}i=t.ownerDocument||t,l=Md(l),(n=Tt.get(n))&&vr(l,n),i=i.createElement("link"),Ye(i);var u=i;u._p=new Promise(function(o,h){u.onload=o,u.onerror=h}),Je(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var br=0;function kp(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&br===0&&(br=62500*Np());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>br?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Zi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(Vp,e),Ki=null,Zi.call(e))}function Vp(e,t){if(!(t.state.loading&4)){var a=Ki.get(e);if(a)var l=a.get(null);else{a=new Map,Ki.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Zi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var An={$$typeof:K,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Zp(e,t,a,l,n,i,u,o,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.hiddenUpdates=hu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Cd(e,t,a,l,n,i,u,o,h,N,D,C){return e=new Zp(e,t,a,u,h,N,D,C,o),t=1,i===!0&&(t|=24),i=ft(3,null,null,t),e.current=i,i.stateNode=e,t=Iu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ac(i),e}function Ud(e){return e?(e=fl,e):fl}function Hd(e,t,a,l,n,i){n=Ud(n),l.context===null?l.context=n:l.pendingContext=n,l=ha(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=pa(e,l,t),a!==null&&(nt(a,e,t),nn(a,e,t))}function Bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function xr(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function Ld(e){if(e.tag===13||e.tag===31){var t=La(e,67108864);t!==null&&nt(t,e,67108864),xr(e,67108864)}}function qd(e){if(e.tag===13||e.tag===31){var t=gt();t=pu(t);var a=La(e,t);a!==null&&nt(a,e,t),xr(e,t)}}var $i=!0;function Kp(e,t,a,l){var n=w.T;w.T=null;var i=G.p;try{G.p=2,Sr(e,t,a,l)}finally{G.p=i,w.T=n}}function Jp(e,t,a,l){var n=w.T;w.T=null;var i=G.p;try{G.p=8,Sr(e,t,a,l)}finally{G.p=i,w.T=n}}function Sr(e,t,a,l){if($i){var n=jr(l);if(n===null)cr(e,t,l,Wi,a),Gd(e,l);else if(Wp(n,e,t,a,l))l.stopPropagation();else if(Gd(e,l),t&4&&-1<$p.indexOf(e)){for(;n!==null;){var i=el(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=_a(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var h=1<<31-st(u);o.entanglements[1]|=h,u&=~h}Bt(i),(me&6)===0&&(wi=ct()+500,Sn(0))}}break;case 31:case 13:o=La(i,2),o!==null&&nt(o,i,2),Ci(),xr(i,2)}if(i=jr(l),i===null&&cr(e,t,l,Wi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else cr(e,t,l,null,a)}}function jr(e){return e=Nu(e),Er(e)}var Wi=null;function Er(e){if(Wi=null,e=Pa(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=M(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wi=e,null}function Yd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cm()){case Zr:return 2;case Kr:return 8;case qn:case Um:return 32;case Jr:return 268435456;default:return 32}default:return 32}}var Nr=!1,Ta=null,Aa=null,Oa=null,On=new Map,Mn=new Map,Ma=[],$p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function Rn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=el(t),t!==null&&Ld(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Wp(e,t,a,l,n){switch(t){case"focusin":return Ta=Rn(Ta,e,t,a,l,n),!0;case"dragenter":return Aa=Rn(Aa,e,t,a,l,n),!0;case"mouseover":return Oa=Rn(Oa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return On.set(i,Rn(On.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Mn.set(i,Rn(Mn.get(i)||null,e,t,a,l,n)),!0}return!1}function Xd(e){var t=Pa(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,es(e.priority,function(){qd(a)});return}}else if(t===31){if(t=M(a),t!==null){e.blockedOn=t,es(e.priority,function(){qd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=jr(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Eu=l,a.target.dispatchEvent(l),Eu=null}else return t=el(a),t!==null&&Ld(t),e.blockedOn=a,!1;t.shift()}return!0}function Qd(e,t,a){Fi(e)&&a.delete(t)}function Fp(){Nr=!1,Ta!==null&&Fi(Ta)&&(Ta=null),Aa!==null&&Fi(Aa)&&(Aa=null),Oa!==null&&Fi(Oa)&&(Oa=null),On.forEach(Qd),Mn.forEach(Qd)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Nr||(Nr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Fp)))}var Pi=null;function kd(e){Pi!==e&&(Pi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Er(l||a)===null)continue;break}var i=el(a);i!==null&&(e.splice(t,3),t-=3,jc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ul(e){function t(h){return Ii(h,e)}Ta!==null&&Ii(Ta,e),Aa!==null&&Ii(Aa,e),Oa!==null&&Ii(Oa,e),On.forEach(t),Mn.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)Xd(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Ie]||null;if(typeof i=="function")u||kd(a);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Ie]||null)o=u.formAction;else if(Er(n)!==null)continue}else o=u.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),kd(a)}}}function Vd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function zr(e){this._internalRoot=e}eu.prototype.render=zr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=gt();Hd(a,l,e,t,null,null)},eu.prototype.unmount=zr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hd(e.current,2,null,e,null,null),Ci(),t[Ia]=null}};function eu(e){this._internalRoot=e}eu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&Xd(e)}};var Zd=f.version;if(Zd!=="19.2.3")throw Error(s(527,Zd,"19.2.3"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var Ip={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Ll=tu.inject(Ip),rt=tu}catch{}}return wn.createRoot=function(e,t){if(!m(e))throw Error(s(299));var a=!1,l="",n=Io,i=Po,u=ef;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Cd(e,1,!1,null,null,a,l,null,n,i,u,Vd),e[Ia]=t.current,ur(e),new zr(t)},wn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(s(299));var l=!1,n="",i=Io,u=Po,o=ef,h=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(h=a.formState)),t=Cd(e,1,!0,t,a??null,l,n,h,i,u,o,Vd),t.context=Ud(null),a=t.current,l=gt(),l=pu(l),n=ha(l),n.callback=null,pa(a,n,l),a=l,t.current.lanes=a,Yl(t,a),Bt(t),e[Ia]=t.current,ur(e),new eu(t)},wn.version="19.2.3",wn}var am;function rg(){if(am)return Or.exports;am=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Or.exports=cg(),Or.exports}var sg=rg();const og=sm(sg);var lm="popstate";function fg(r={}){function f(m,p){let{pathname:g="/",search:M="",hash:j=""}=Fa(m.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Ur("",{pathname:g,search:M,hash:j},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(m,p){let g=m.document.querySelector("base"),M="";if(g&&g.getAttribute("href")){let j=m.location.href,y=j.indexOf("#");M=y===-1?j:j.slice(0,y)}return M+"#"+(typeof p=="string"?p:Cn(p))}function s(m,p){At(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return mg(f,d,s,r)}function Oe(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function At(r,f){if(!r){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function dg(){return Math.random().toString(36).substring(2,10)}function nm(r,f){return{usr:r.state,key:r.key,idx:f}}function Ur(r,f,d=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof f=="string"?Fa(f):f,state:d,key:f&&f.key||s||dg()}}function Cn({pathname:r="/",search:f="",hash:d=""}){return f&&f!=="?"&&(r+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Fa(r){let f={};if(r){let d=r.indexOf("#");d>=0&&(f.hash=r.substring(d),r=r.substring(0,d));let s=r.indexOf("?");s>=0&&(f.search=r.substring(s),r=r.substring(0,s)),r&&(f.pathname=r)}return f}function mg(r,f,d,s={}){let{window:m=document.defaultView,v5Compat:p=!1}=s,g=m.history,M="POP",j=null,y=R();y==null&&(y=0,g.replaceState({...g.state,idx:y},""));function R(){return(g.state||{idx:null}).idx}function A(){M="POP";let H=R(),Q=H==null?null:H-y;y=H,j&&j({action:M,location:B.location,delta:Q})}function L(H,Q){M="PUSH";let k=Ur(B.location,H,Q);d&&d(k,H),y=R()+1;let K=nm(k,y),se=B.createHref(k);try{g.pushState(K,"",se)}catch(ye){if(ye instanceof DOMException&&ye.name==="DataCloneError")throw ye;m.location.assign(se)}p&&j&&j({action:M,location:B.location,delta:1})}function Y(H,Q){M="REPLACE";let k=Ur(B.location,H,Q);d&&d(k,H),y=R();let K=nm(k,y),se=B.createHref(k);g.replaceState(K,"",se),p&&j&&j({action:M,location:B.location,delta:0})}function q(H){return hg(H)}let B={get action(){return M},get location(){return r(m,g)},listen(H){if(j)throw new Error("A history only accepts one active listener");return m.addEventListener(lm,A),j=H,()=>{m.removeEventListener(lm,A),j=null}},createHref(H){return f(m,H)},createURL:q,encodeLocation(H){let Q=q(H);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:L,replace:Y,go(H){return g.go(H)}};return B}function hg(r,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(d,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Cn(r);return s=s.replace(/ $/,"%20"),!f&&s.startsWith("//")&&(s=d+s),new URL(s,d)}function fm(r,f,d="/"){return pg(r,f,d,!1)}function pg(r,f,d,s){let m=typeof f=="string"?Fa(f):f,p=na(m.pathname||"/",d);if(p==null)return null;let g=dm(r);gg(g);let M=null;for(let j=0;M==null&&j<g.length;++j){let y=Ag(p);M=zg(g[j],y,s)}return M}function dm(r,f=[],d=[],s="",m=!1){let p=(g,M,j=m,y)=>{let R={relativePath:y===void 0?g.path||"":y,caseSensitive:g.caseSensitive===!0,childrenIndex:M,route:g};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(s)&&j)return;Oe(R.relativePath.startsWith(s),`Absolute route path "${R.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(s.length)}let A=la([s,R.relativePath]),L=d.concat(R);g.children&&g.children.length>0&&(Oe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),dm(g.children,f,L,A,j)),!(g.path==null&&!g.index)&&f.push({path:A,score:Eg(A,g.index),routesMeta:L})};return r.forEach((g,M)=>{if(g.path===""||!g.path?.includes("?"))p(g,M);else for(let j of mm(g.path))p(g,M,!0,j)}),f}function mm(r){let f=r.split("/");if(f.length===0)return[];let[d,...s]=f,m=d.endsWith("?"),p=d.replace(/\?$/,"");if(s.length===0)return m?[p,""]:[p];let g=mm(s.join("/")),M=[];return M.push(...g.map(j=>j===""?p:[p,j].join("/"))),m&&M.push(...g),M.map(j=>r.startsWith("/")&&j===""?"/":j)}function gg(r){r.sort((f,d)=>f.score!==d.score?d.score-f.score:Ng(f.routesMeta.map(s=>s.childrenIndex),d.routesMeta.map(s=>s.childrenIndex)))}var vg=/^:[\w-]+$/,yg=3,bg=2,xg=1,Sg=10,jg=-2,im=r=>r==="*";function Eg(r,f){let d=r.split("/"),s=d.length;return d.some(im)&&(s+=jg),f&&(s+=bg),d.filter(m=>!im(m)).reduce((m,p)=>m+(vg.test(p)?yg:p===""?xg:Sg),s)}function Ng(r,f){return r.length===f.length&&r.slice(0,-1).every((s,m)=>s===f[m])?r[r.length-1]-f[f.length-1]:0}function zg(r,f,d=!1){let{routesMeta:s}=r,m={},p="/",g=[];for(let M=0;M<s.length;++M){let j=s[M],y=M===s.length-1,R=p==="/"?f:f.slice(p.length)||"/",A=iu({path:j.relativePath,caseSensitive:j.caseSensitive,end:y},R),L=j.route;if(!A&&y&&d&&!s[s.length-1].route.index&&(A=iu({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},R)),!A)return null;Object.assign(m,A.params),g.push({params:m,pathname:la([p,A.pathname]),pathnameBase:Dg(la([p,A.pathnameBase])),route:L}),A.pathnameBase!=="/"&&(p=la([p,A.pathnameBase]))}return g}function iu(r,f){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,s]=Tg(r.path,r.caseSensitive,r.end),m=f.match(d);if(!m)return null;let p=m[0],g=p.replace(/(.)\/+$/,"$1"),M=m.slice(1);return{params:s.reduce((y,{paramName:R,isOptional:A},L)=>{if(R==="*"){let q=M[L]||"";g=p.slice(0,p.length-q.length).replace(/(.)\/+$/,"$1")}const Y=M[L];return A&&!Y?y[R]=void 0:y[R]=(Y||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:g,pattern:r}}function Tg(r,f=!1,d=!0){At(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,M,j)=>(s.push({paramName:M,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),s]}function Ag(r){try{return r.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return At(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),r}}function na(r,f){if(f==="/")return r;if(!r.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,s=r.charAt(d);return s&&s!=="/"?null:r.slice(d)||"/"}var hm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Og=r=>hm.test(r);function Mg(r,f="/"){let{pathname:d,search:s="",hash:m=""}=typeof r=="string"?Fa(r):r,p;if(d)if(Og(d))p=d;else{if(d.includes("//")){let g=d;d=d.replace(/\/\/+/g,"/"),At(!1,`Pathnames cannot have embedded double slashes - normalizing ${g} -> ${d}`)}d.startsWith("/")?p=um(d.substring(1),"/"):p=um(d,f)}else p=f;return{pathname:p,search:wg(s),hash:_g(m)}}function um(r,f){let d=f.replace(/\/+$/,"").split("/");return r.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function wr(r,f,d,s){return`Cannot include a '${r}' character in a manually specified \`to.${f}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Rg(r){return r.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function pm(r){let f=Rg(r);return f.map((d,s)=>s===f.length-1?d.pathname:d.pathnameBase)}function gm(r,f,d,s=!1){let m;typeof r=="string"?m=Fa(r):(m={...r},Oe(!m.pathname||!m.pathname.includes("?"),wr("?","pathname","search",m)),Oe(!m.pathname||!m.pathname.includes("#"),wr("#","pathname","hash",m)),Oe(!m.search||!m.search.includes("#"),wr("#","search","hash",m)));let p=r===""||m.pathname==="",g=p?"/":m.pathname,M;if(g==null)M=d;else{let A=f.length-1;if(!s&&g.startsWith("..")){let L=g.split("/");for(;L[0]==="..";)L.shift(),A-=1;m.pathname=L.join("/")}M=A>=0?f[A]:"/"}let j=Mg(m,M),y=g&&g!=="/"&&g.endsWith("/"),R=(p||g===".")&&d.endsWith("/");return!j.pathname.endsWith("/")&&(y||R)&&(j.pathname+="/"),j}var la=r=>r.join("/").replace(/\/\/+/g,"/"),Dg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),wg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,_g=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Cg=class{constructor(r,f,d,s=!1){this.status=r,this.statusText=f||"",this.internal=s,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function Ug(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Hg(r){return r.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ym(r,f){let d=r;if(typeof d!="string"||!hm.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let s=d,m=!1;if(vm)try{let p=new URL(window.location.href),g=d.startsWith("//")?new URL(p.protocol+d):new URL(d),M=na(g.pathname,f);g.origin===p.origin&&M!=null?d=M+g.search+g.hash:m=!0}catch{At(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:m,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var bm=["POST","PUT","PATCH","DELETE"];new Set(bm);var Bg=["GET",...bm];new Set(Bg);var Hl=z.createContext(null);Hl.displayName="DataRouter";var uu=z.createContext(null);uu.displayName="DataRouterState";var Lg=z.createContext(!1),xm=z.createContext({isTransitioning:!1});xm.displayName="ViewTransition";var qg=z.createContext(new Map);qg.displayName="Fetchers";var Yg=z.createContext(null);Yg.displayName="Await";var Ot=z.createContext(null);Ot.displayName="Navigation";var Un=z.createContext(null);Un.displayName="Location";var ia=z.createContext({outlet:null,matches:[],isDataRoute:!1});ia.displayName="Route";var Lr=z.createContext(null);Lr.displayName="RouteError";var Sm="REACT_ROUTER_ERROR",Gg="REDIRECT",Xg="ROUTE_ERROR_RESPONSE";function Qg(r){if(r.startsWith(`${Sm}:${Gg}:{`))try{let f=JSON.parse(r.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function kg(r){if(r.startsWith(`${Sm}:${Xg}:{`))try{let f=JSON.parse(r.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new Cg(f.status,f.statusText,f.data)}catch{}}function Vg(r,{relative:f}={}){Oe(Hn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:s}=z.useContext(Ot),{hash:m,pathname:p,search:g}=Bn(r,{relative:f}),M=p;return d!=="/"&&(M=p==="/"?d:la([d,p])),s.createHref({pathname:M,search:g,hash:m})}function Hn(){return z.useContext(Un)!=null}function Da(){return Oe(Hn(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Un).location}var jm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Em(r){z.useContext(Ot).static||z.useLayoutEffect(r)}function qr(){let{isDataRoute:r}=z.useContext(ia);return r?n0():Zg()}function Zg(){Oe(Hn(),"useNavigate() may be used only in the context of a <Router> component.");let r=z.useContext(Hl),{basename:f,navigator:d}=z.useContext(Ot),{matches:s}=z.useContext(ia),{pathname:m}=Da(),p=JSON.stringify(pm(s)),g=z.useRef(!1);return Em(()=>{g.current=!0}),z.useCallback((j,y={})=>{if(At(g.current,jm),!g.current)return;if(typeof j=="number"){d.go(j);return}let R=gm(j,JSON.parse(p),m,y.relative==="path");r==null&&f!=="/"&&(R.pathname=R.pathname==="/"?f:la([f,R.pathname])),(y.replace?d.replace:d.push)(R,y.state,y)},[f,d,p,m,r])}z.createContext(null);function Bn(r,{relative:f}={}){let{matches:d}=z.useContext(ia),{pathname:s}=Da(),m=JSON.stringify(pm(d));return z.useMemo(()=>gm(r,JSON.parse(m),s,f==="path"),[r,m,s,f])}function Kg(r,f){return Nm(r,f)}function Nm(r,f,d,s,m){Oe(Hn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=z.useContext(Ot),{matches:g}=z.useContext(ia),M=g[g.length-1],j=M?M.params:{},y=M?M.pathname:"/",R=M?M.pathnameBase:"/",A=M&&M.route;{let k=A&&A.path||"";Tm(y,!A||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let L=Da(),Y;if(f){let k=typeof f=="string"?Fa(f):f;Oe(R==="/"||k.pathname?.startsWith(R),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${k.pathname}" was given in the \`location\` prop.`),Y=k}else Y=L;let q=Y.pathname||"/",B=q;if(R!=="/"){let k=R.replace(/^\//,"").split("/");B="/"+q.replace(/^\//,"").split("/").slice(k.length).join("/")}let H=fm(r,{pathname:B});At(A||H!=null,`No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `),At(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=Ig(H&&H.map(k=>Object.assign({},k,{params:Object.assign({},j,k.params),pathname:la([R,p.encodeLocation?p.encodeLocation(k.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?R:la([R,p.encodeLocation?p.encodeLocation(k.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathnameBase])})),g,d,s,m);return f&&Q?z.createElement(Un.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Y},navigationType:"POP"}},Q):Q}function Jg(){let r=l0(),f=Ug(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:s},p={padding:"2px 4px",backgroundColor:s},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:p},"ErrorBoundary")," or"," ",z.createElement("code",{style:p},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},f),d?z.createElement("pre",{style:m},d):null,g)}var $g=z.createElement(Jg,null),zm=class extends z.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,f){return f.location!==r.location||f.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:f.error,location:f.location,revalidation:r.revalidation||f.revalidation}}componentDidCatch(r,f){this.props.onError?this.props.onError(r,f):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const d=kg(r.digest);d&&(r=d)}let f=r!==void 0?z.createElement(ia.Provider,{value:this.props.routeContext},z.createElement(Lr.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?z.createElement(Wg,{error:r},f):f}};zm.contextType=Lg;var _r=new WeakMap;function Wg({children:r,error:f}){let{basename:d}=z.useContext(Ot);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let s=Qg(f.digest);if(s){let m=_r.get(f);if(m)throw m;let p=ym(s.location,d);if(vm&&!_r.get(f))if(p.isExternal||s.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:s.replace}));throw _r.set(f,g),g}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return r}function Fg({routeContext:r,match:f,children:d}){let s=z.useContext(Hl);return s&&s.static&&s.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=f.route.id),z.createElement(ia.Provider,{value:r},d)}function Ig(r,f=[],d=null,s=null,m=null){if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let p=r,g=d?.errors;if(g!=null){let R=p.findIndex(A=>A.route.id&&g?.[A.route.id]!==void 0);Oe(R>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),p=p.slice(0,Math.min(p.length,R+1))}let M=!1,j=-1;if(d)for(let R=0;R<p.length;R++){let A=p[R];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(j=R),A.route.id){let{loaderData:L,errors:Y}=d,q=A.route.loader&&!L.hasOwnProperty(A.route.id)&&(!Y||Y[A.route.id]===void 0);if(A.route.lazy||q){M=!0,j>=0?p=p.slice(0,j+1):p=[p[0]];break}}}let y=d&&s?(R,A)=>{s(R,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:Hg(d.matches),errorInfo:A})}:void 0;return p.reduceRight((R,A,L)=>{let Y,q=!1,B=null,H=null;d&&(Y=g&&A.route.id?g[A.route.id]:void 0,B=A.route.errorElement||$g,M&&(j<0&&L===0?(Tm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,H=null):j===L&&(q=!0,H=A.route.hydrateFallbackElement||null)));let Q=f.concat(p.slice(0,L+1)),k=()=>{let K;return Y?K=B:q?K=H:A.route.Component?K=z.createElement(A.route.Component,null):A.route.element?K=A.route.element:K=R,z.createElement(Fg,{match:A,routeContext:{outlet:R,matches:Q,isDataRoute:d!=null},children:K})};return d&&(A.route.ErrorBoundary||A.route.errorElement||L===0)?z.createElement(zm,{location:d.location,revalidation:d.revalidation,component:B,error:Y,children:k(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},onError:y}):k()},null)}function Yr(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pg(r){let f=z.useContext(Hl);return Oe(f,Yr(r)),f}function e0(r){let f=z.useContext(uu);return Oe(f,Yr(r)),f}function t0(r){let f=z.useContext(ia);return Oe(f,Yr(r)),f}function Gr(r){let f=t0(r),d=f.matches[f.matches.length-1];return Oe(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function a0(){return Gr("useRouteId")}function l0(){let r=z.useContext(Lr),f=e0("useRouteError"),d=Gr("useRouteError");return r!==void 0?r:f.errors?.[d]}function n0(){let{router:r}=Pg("useNavigate"),f=Gr("useNavigate"),d=z.useRef(!1);return Em(()=>{d.current=!0}),z.useCallback(async(m,p={})=>{At(d.current,jm),d.current&&(typeof m=="number"?await r.navigate(m):await r.navigate(m,{fromRouteId:f,...p}))},[r,f])}var cm={};function Tm(r,f,d){!f&&!cm[r]&&(cm[r]=!0,At(!1,d))}z.memo(i0);function i0({routes:r,future:f,state:d,onError:s}){return Nm(r,void 0,d,s,f)}function _t(r){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function u0({basename:r="/",children:f=null,location:d,navigationType:s="POP",navigator:m,static:p=!1,unstable_useTransitions:g}){Oe(!Hn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let M=r.replace(/^\/*/,"/"),j=z.useMemo(()=>({basename:M,navigator:m,static:p,unstable_useTransitions:g,future:{}}),[M,m,p,g]);typeof d=="string"&&(d=Fa(d));let{pathname:y="/",search:R="",hash:A="",state:L=null,key:Y="default"}=d,q=z.useMemo(()=>{let B=na(y,M);return B==null?null:{location:{pathname:B,search:R,hash:A,state:L,key:Y},navigationType:s}},[M,y,R,A,L,Y,s]);return At(q!=null,`<Router basename="${M}"> is not able to match the URL "${y}${R}${A}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:z.createElement(Ot.Provider,{value:j},z.createElement(Un.Provider,{children:f,value:q}))}function c0({children:r,location:f}){return Kg(Hr(r),f)}function Hr(r,f=[]){let d=[];return z.Children.forEach(r,(s,m)=>{if(!z.isValidElement(s))return;let p=[...f,m];if(s.type===z.Fragment){d.push.apply(d,Hr(s.props.children,p));return}Oe(s.type===_t,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let g={id:s.props.id||p.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(g.children=Hr(s.props.children,p)),d.push(g)}),d}var lu="get",nu="application/x-www-form-urlencoded";function cu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function r0(r){return cu(r)&&r.tagName.toLowerCase()==="button"}function s0(r){return cu(r)&&r.tagName.toLowerCase()==="form"}function o0(r){return cu(r)&&r.tagName.toLowerCase()==="input"}function f0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function d0(r,f){return r.button===0&&(!f||f==="_self")&&!f0(r)}var au=null;function m0(){if(au===null)try{new FormData(document.createElement("form"),0),au=!1}catch{au=!0}return au}var h0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cr(r){return r!=null&&!h0.has(r)?(At(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nu}"`),null):r}function p0(r,f){let d,s,m,p,g;if(s0(r)){let M=r.getAttribute("action");s=M?na(M,f):null,d=r.getAttribute("method")||lu,m=Cr(r.getAttribute("enctype"))||nu,p=new FormData(r)}else if(r0(r)||o0(r)&&(r.type==="submit"||r.type==="image")){let M=r.form;if(M==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=r.getAttribute("formaction")||M.getAttribute("action");if(s=j?na(j,f):null,d=r.getAttribute("formmethod")||M.getAttribute("method")||lu,m=Cr(r.getAttribute("formenctype"))||Cr(M.getAttribute("enctype"))||nu,p=new FormData(M,r),!m0()){let{name:y,type:R,value:A}=r;if(R==="image"){let L=y?`${y}.`:"";p.append(`${L}x`,"0"),p.append(`${L}y`,"0")}else y&&p.append(y,A)}}else{if(cu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=lu,s=null,m=nu,g=r}return p&&m==="text/plain"&&(g=p,p=void 0),{action:s,method:d.toLowerCase(),encType:m,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xr(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function g0(r,f,d,s){let m=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${s}`:m.pathname=`${m.pathname}.${s}`:m.pathname==="/"?m.pathname=`_root.${s}`:f&&na(m.pathname,f)==="/"?m.pathname=`${f.replace(/\/$/,"")}/_root.${s}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${s}`,m}async function v0(r,f){if(r.id in f)return f[r.id];try{let d=await import(r.module);return f[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function y0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function b0(r,f,d){let s=await Promise.all(r.map(async m=>{let p=f.routes[m.route.id];if(p){let g=await v0(p,d);return g.links?g.links():[]}return[]}));return E0(s.flat(1).filter(y0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function rm(r,f,d,s,m,p){let g=(j,y)=>d[y]?j.route.id!==d[y].route.id:!0,M=(j,y)=>d[y].pathname!==j.pathname||d[y].route.path?.endsWith("*")&&d[y].params["*"]!==j.params["*"];return p==="assets"?f.filter((j,y)=>g(j,y)||M(j,y)):p==="data"?f.filter((j,y)=>{let R=s.routes[j.route.id];if(!R||!R.hasLoader)return!1;if(g(j,y)||M(j,y))return!0;if(j.route.shouldRevalidate){let A=j.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function x0(r,f,{includeHydrateFallback:d}={}){return S0(r.map(s=>{let m=f.routes[s.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function S0(r){return[...new Set(r)]}function j0(r){let f={},d=Object.keys(r).sort();for(let s of d)f[s]=r[s];return f}function E0(r,f){let d=new Set;return new Set(f),r.reduce((s,m)=>{let p=JSON.stringify(j0(m));return d.has(p)||(d.add(p),s.push({key:p,link:m})),s},[])}function Am(){let r=z.useContext(Hl);return Xr(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function N0(){let r=z.useContext(uu);return Xr(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Qr=z.createContext(void 0);Qr.displayName="FrameworkContext";function Om(){let r=z.useContext(Qr);return Xr(r,"You must render this element inside a <HydratedRouter> element"),r}function z0(r,f){let d=z.useContext(Qr),[s,m]=z.useState(!1),[p,g]=z.useState(!1),{onFocus:M,onBlur:j,onMouseEnter:y,onMouseLeave:R,onTouchStart:A}=f,L=z.useRef(null);z.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let B=Q=>{Q.forEach(k=>{g(k.isIntersecting)})},H=new IntersectionObserver(B,{threshold:.5});return L.current&&H.observe(L.current),()=>{H.disconnect()}}},[r]),z.useEffect(()=>{if(s){let B=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(B)}}},[s]);let Y=()=>{m(!0)},q=()=>{m(!1),g(!1)};return d?r!=="intent"?[p,L,{}]:[p,L,{onFocus:_n(M,Y),onBlur:_n(j,q),onMouseEnter:_n(y,Y),onMouseLeave:_n(R,q),onTouchStart:_n(A,Y)}]:[!1,L,{}]}function _n(r,f){return d=>{r&&r(d),d.defaultPrevented||f(d)}}function T0({page:r,...f}){let{router:d}=Am(),s=z.useMemo(()=>fm(d.routes,r,d.basename),[d.routes,r,d.basename]);return s?z.createElement(O0,{page:r,matches:s,...f}):null}function A0(r){let{manifest:f,routeModules:d}=Om(),[s,m]=z.useState([]);return z.useEffect(()=>{let p=!1;return b0(r,f,d).then(g=>{p||m(g)}),()=>{p=!0}},[r,f,d]),s}function O0({page:r,matches:f,...d}){let s=Da(),{future:m,manifest:p,routeModules:g}=Om(),{basename:M}=Am(),{loaderData:j,matches:y}=N0(),R=z.useMemo(()=>rm(r,f,y,p,s,"data"),[r,f,y,p,s]),A=z.useMemo(()=>rm(r,f,y,p,s,"assets"),[r,f,y,p,s]),L=z.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let B=new Set,H=!1;if(f.forEach(k=>{let K=p.routes[k.route.id];!K||!K.hasLoader||(!R.some(se=>se.route.id===k.route.id)&&k.route.id in j&&g[k.route.id]?.shouldRevalidate||K.hasClientLoader?H=!0:B.add(k.route.id))}),B.size===0)return[];let Q=g0(r,M,m.unstable_trailingSlashAwareDataRequests,"data");return H&&B.size>0&&Q.searchParams.set("_routes",f.filter(k=>B.has(k.route.id)).map(k=>k.route.id).join(",")),[Q.pathname+Q.search]},[M,m.unstable_trailingSlashAwareDataRequests,j,s,p,R,f,r,g]),Y=z.useMemo(()=>x0(A,p),[A,p]),q=A0(A);return z.createElement(z.Fragment,null,L.map(B=>z.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...d})),Y.map(B=>z.createElement("link",{key:B,rel:"modulepreload",href:B,...d})),q.map(({key:B,link:H})=>z.createElement("link",{key:B,nonce:d.nonce,...H})))}function M0(...r){return f=>{r.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var R0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R0&&(window.__reactRouterVersion="7.12.0")}catch{}function D0({basename:r,children:f,unstable_useTransitions:d,window:s}){let m=z.useRef();m.current==null&&(m.current=fg({window:s,v5Compat:!0}));let p=m.current,[g,M]=z.useState({action:p.action,location:p.location}),j=z.useCallback(y=>{d===!1?M(y):z.startTransition(()=>M(y))},[d]);return z.useLayoutEffect(()=>p.listen(j),[p,j]),z.createElement(u0,{basename:r,children:f,location:g.location,navigationType:g.action,navigator:p,unstable_useTransitions:d})}var Mm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ve=z.forwardRef(function({onClick:f,discover:d="render",prefetch:s="none",relative:m,reloadDocument:p,replace:g,state:M,target:j,to:y,preventScrollReset:R,viewTransition:A,unstable_defaultShouldRevalidate:L,...Y},q){let{basename:B,unstable_useTransitions:H}=z.useContext(Ot),Q=typeof y=="string"&&Mm.test(y),k=ym(y,B);y=k.to;let K=Vg(y,{relative:m}),[se,ye,Te]=z0(s,Y),P=U0(y,{replace:g,state:M,target:j,preventScrollReset:R,relative:m,viewTransition:A,unstable_defaultShouldRevalidate:L,unstable_useTransitions:H});function Ee(We){f&&f(We),We.defaultPrevented||P(We)}let De=z.createElement("a",{...Y,...Te,href:k.absoluteURL||K,onClick:k.isExternal||p?f:Ee,ref:M0(q,ye),target:j,"data-discover":!Q&&d==="render"?"true":void 0});return se&&!Q?z.createElement(z.Fragment,null,De,z.createElement(T0,{page:K})):De});ve.displayName="Link";var w0=z.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:s="",end:m=!1,style:p,to:g,viewTransition:M,children:j,...y},R){let A=Bn(g,{relative:y.relative}),L=Da(),Y=z.useContext(uu),{navigator:q,basename:B}=z.useContext(Ot),H=Y!=null&&Y0(A)&&M===!0,Q=q.encodeLocation?q.encodeLocation(A).pathname:A.pathname,k=L.pathname,K=Y&&Y.navigation&&Y.navigation.location?Y.navigation.location.pathname:null;d||(k=k.toLowerCase(),K=K?K.toLowerCase():null,Q=Q.toLowerCase()),K&&B&&(K=na(K,B)||K);const se=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let ye=k===Q||!m&&k.startsWith(Q)&&k.charAt(se)==="/",Te=K!=null&&(K===Q||!m&&K.startsWith(Q)&&K.charAt(Q.length)==="/"),P={isActive:ye,isPending:Te,isTransitioning:H},Ee=ye?f:void 0,De;typeof s=="function"?De=s(P):De=[s,ye?"active":null,Te?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let We=typeof p=="function"?p(P):p;return z.createElement(ve,{...y,"aria-current":Ee,className:De,ref:R,style:We,to:g,viewTransition:M},typeof j=="function"?j(P):j)});w0.displayName="NavLink";var _0=z.forwardRef(({discover:r="render",fetcherKey:f,navigate:d,reloadDocument:s,replace:m,state:p,method:g=lu,action:M,onSubmit:j,relative:y,preventScrollReset:R,viewTransition:A,unstable_defaultShouldRevalidate:L,...Y},q)=>{let{unstable_useTransitions:B}=z.useContext(Ot),H=L0(),Q=q0(M,{relative:y}),k=g.toLowerCase()==="get"?"get":"post",K=typeof M=="string"&&Mm.test(M),se=ye=>{if(j&&j(ye),ye.defaultPrevented)return;ye.preventDefault();let Te=ye.nativeEvent.submitter,P=Te?.getAttribute("formmethod")||g,Ee=()=>H(Te||ye.currentTarget,{fetcherKey:f,method:P,navigate:d,replace:m,state:p,relative:y,preventScrollReset:R,viewTransition:A,unstable_defaultShouldRevalidate:L});B&&d!==!1?z.startTransition(()=>Ee()):Ee()};return z.createElement("form",{ref:q,method:k,action:Q,onSubmit:s?j:se,...Y,"data-discover":!K&&r==="render"?"true":void 0})});_0.displayName="Form";function C0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rm(r){let f=z.useContext(Hl);return Oe(f,C0(r)),f}function U0(r,{target:f,replace:d,state:s,preventScrollReset:m,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:M,unstable_useTransitions:j}={}){let y=qr(),R=Da(),A=Bn(r,{relative:p});return z.useCallback(L=>{if(d0(L,f)){L.preventDefault();let Y=d!==void 0?d:Cn(R)===Cn(A),q=()=>y(r,{replace:Y,state:s,preventScrollReset:m,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:M});j?z.startTransition(()=>q()):q()}},[R,y,A,d,s,f,r,m,p,g,M,j])}var H0=0,B0=()=>`__${String(++H0)}__`;function L0(){let{router:r}=Rm("useSubmit"),{basename:f}=z.useContext(Ot),d=a0(),s=r.fetch,m=r.navigate;return z.useCallback(async(p,g={})=>{let{action:M,method:j,encType:y,formData:R,body:A}=p0(p,f);if(g.navigate===!1){let L=g.fetcherKey||B0();await s(L,d,g.action||M,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:R,body:A,formMethod:g.method||j,formEncType:g.encType||y,flushSync:g.flushSync})}else await m(g.action||M,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:R,body:A,formMethod:g.method||j,formEncType:g.encType||y,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[s,m,f,d])}function q0(r,{relative:f}={}){let{basename:d}=z.useContext(Ot),s=z.useContext(ia);Oe(s,"useFormAction must be used inside a RouteContext");let[m]=s.matches.slice(-1),p={...Bn(r||".",{relative:f})},g=Da();if(r==null){p.search=g.search;let M=new URLSearchParams(p.search),j=M.getAll("index");if(j.some(R=>R==="")){M.delete("index"),j.filter(A=>A).forEach(A=>M.append("index",A));let R=M.toString();p.search=R?`?${R}`:""}}return(!r||r===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:la([d,p.pathname])),Cn(p)}function Y0(r,{relative:f}={}){let d=z.useContext(xm);Oe(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Rm("useViewTransitionState"),m=Bn(r,{relative:f});if(!d.isTransitioning)return!1;let p=na(d.currentLocation.pathname,s)||d.currentLocation.pathname,g=na(d.nextLocation.pathname,s)||d.nextLocation.pathname;return iu(m.pathname,g)!=null||iu(m.pathname,p)!=null}function G0(){const[r,f]=z.useState(!1),[d,s]=z.useState(!1),[m,p]=z.useState(!1),[g,M]=z.useState(!1),[j,y]=z.useState(!1),R=Da(),A=z.useRef(0);z.useEffect(()=>{f(!1),y(!1)},[R.pathname]),z.useEffect(()=>{localStorage.getItem("mode")==="dark"&&(s(!0),document.body.classList.add("dark"))},[]),z.useEffect(()=>{const H=()=>{const Q=window.scrollY;p(Q>10),M(Q>60&&Q>A.current),A.current=Q};return window.addEventListener("scroll",H,{passive:!0}),()=>window.removeEventListener("scroll",H)},[]);function L(){const H=!d;s(H),H?(document.body.classList.add("dark"),localStorage.setItem("mode","dark")):(document.body.classList.remove("dark"),localStorage.setItem("mode","light"))}const Y=H=>R.pathname===H,q=H=>R.pathname.startsWith(H),B=[{label:"Science Stream",path:"/academics/science"},{label:"Commerce Stream",path:"/academics/commerce"},{label:"Examination",path:"/academics/examination"},{label:"Timetable",path:"/academics/timetable"},{label:"Results",path:"/academics/results"}];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
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

        /* ══════════════════════════════
           NOTICE BAR
        ══════════════════════════════ */
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

        /* ══════════════════════════════
           HEADER / NAV SHELL
        ══════════════════════════════ */
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

        /* ══════════════════════════════
           LOGO
        ══════════════════════════════ */
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

        /* ══════════════════════════════
           NAV LINKS — DESKTOP
        ══════════════════════════════ */
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

        /* ── ACADEMICS DROPDOWN (desktop) ── */
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

        /* ══════════════════════════════
           RIGHT CONTROLS
        ══════════════════════════════ */
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

        /* Hamburger */
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

        /* ══════════════════════════════
           TOP BAR (Brochure + Buttons)
        ══════════════════════════════ */
        .top-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .top-bar span {
          font-size: 0.78rem;
          color: var(--muted);
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .top-bar span:hover { color: var(--gold-light); }

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

        /* ══════════════════════════════
           MOBILE MENU
        ══════════════════════════════ */
        .mobile-panel {
          background: var(--navy-mid);
          border-top: 1px solid var(--border-dim);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.42s cubic-bezier(0.4,0,0.2,1);
        }
        .mobile-panel.active { max-height: 800px; }

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

        .mob-cta-wrap { padding: 14px 6vw 20px; }
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

        /* ══════════════════════════════
           DARK MODE OVERRIDES
        ══════════════════════════════ */
        body.dark .nav          { background: #050d1a; }
        body.dark .nav.scrolled { background: rgba(5,13,26,0.97); }
        body.dark .notice-bar   { background: linear-gradient(90deg, #a07018, #7a5210, #a07018); }
        body.dark .mobile-panel { background: #0b1a30; }

        /* ══════════════════════════════
           RESPONSIVE
        ══════════════════════════════ */
        @media (max-width: 1180px) {
          .top-bar span { display: none; }
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
      `}),c.jsxs("header",{className:"header",children:[c.jsx("div",{className:`notice-bar ${g?"hidden":""}`,children:"📢 Admissions Open! Apply Now  |  New Session 2026–27"}),c.jsxs("nav",{className:`nav ${m?"scrolled":""}`,children:[c.jsx("div",{className:"logo",children:c.jsxs(ve,{to:"/",style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[c.jsx(X0,{}),c.jsxs("div",{children:[c.jsx("h3",{children:"SVV School"}),c.jsx("p",{children:"Nagpur, Maharashtra"})]})]})}),c.jsxs("ul",{className:"nav-links",style:{display:"flex"},children:[c.jsx("li",{children:c.jsx(ve,{className:Y("/")?"activeLink":"",to:"/",children:"Home"})}),c.jsx("li",{children:c.jsx(ve,{className:Y("/about")?"activeLink":"",to:"/about",children:"About"})}),c.jsxs("li",{className:"dropdown",children:[c.jsxs(ve,{to:"/academics",className:`dropdown-title ${q("/academics")?"activeLink":""}`,children:["Academics ",c.jsx("span",{className:"dropdown-chevron",children:"▼"})]}),c.jsx("ul",{className:"dropdown-menu",children:B.map((H,Q)=>c.jsxs(om.Fragment,{children:[Q===2&&c.jsx("li",{children:c.jsx("div",{className:"dd-sep"})}),c.jsx("li",{children:c.jsx(ve,{to:H.path,className:R.pathname===H.path?"activeLink":"",children:H.label})})]},H.path))})]}),c.jsx("li",{children:c.jsx(ve,{className:Y("/teachers")?"activeLink":"",to:"/teachers",children:"Teachers"})}),c.jsx("li",{children:c.jsx(ve,{className:Y("/management")?"activeLink":"",to:"/management",children:"Management"})}),c.jsx("li",{children:c.jsx(ve,{className:Y("/gallery")?"activeLink":"",to:"/gallery",children:"Gallery"})}),c.jsx("li",{children:c.jsx(ve,{className:Y("/success")?"activeLink":"",to:"/success",children:"Success"})}),c.jsx("li",{children:c.jsx(ve,{className:Y("/contact")?"activeLink":"",to:"/contact",children:"Contact"})})]}),c.jsxs("div",{className:"right-controls",children:[c.jsx("button",{className:"darkBtn",onClick:L,children:d?"☀️ Light":"🌙 Dark"}),c.jsx("button",{className:"menu-btn",onClick:()=>f(!r),children:r?"✕":"☰"})]}),c.jsxs("div",{className:"top-bar",children:[c.jsx("span",{children:"📥 Download Brochure"}),c.jsxs("div",{className:"top-buttons",children:[c.jsx(ve,{to:"/contact#admission",children:c.jsx("button",{className:"enquire-btn",children:"Enquire Now"})}),c.jsx(ve,{to:"/disclosure",children:c.jsx("button",{className:"disclosure-btn",children:"Public Disclosure"})})]})]})]}),c.jsxs("div",{className:`mobile-panel ${r?"active":""}`,children:[c.jsx(ve,{to:"/",className:`mob-link ${Y("/")?"activeLink":""}`,children:"Home"}),c.jsx(ve,{to:"/about",className:`mob-link ${Y("/about")?"activeLink":""}`,children:"About"}),c.jsxs("div",{className:`mob-link mob-link-split ${q("/academics")?"activeLink":""}`,children:[c.jsx(ve,{to:"/academics",style:{flex:1,color:"inherit",textDecoration:"none"},children:"Academics"}),c.jsx("span",{className:`mob-chevron ${j?"open":""}`,onClick:H=>{H.stopPropagation(),y(Q=>!Q)},style:{padding:"4px 8px",cursor:"pointer"},children:"▼"})]}),c.jsx("div",{className:`mob-sub ${j?"open":""}`,children:B.map(H=>c.jsx(ve,{to:H.path,className:`mob-sub-link ${R.pathname===H.path?"activeLink":""}`,children:H.label},H.path))}),c.jsx(ve,{to:"/teachers",className:`mob-link ${Y("/teachers")?"activeLink":""}`,children:"Teachers"}),c.jsx(ve,{to:"/management",className:`mob-link ${Y("/management")?"activeLink":""}`,children:"Management"}),c.jsx(ve,{to:"/gallery",className:`mob-link ${Y("/gallery")?"activeLink":""}`,children:"Gallery"}),c.jsx(ve,{to:"/success",className:`mob-link ${Y("/success")?"activeLink":""}`,children:"Success"}),c.jsx(ve,{to:"/contact",className:`mob-link ${Y("/contact")?"activeLink":""}`,children:"Contact"}),c.jsx("div",{className:"mob-cta-wrap",children:c.jsx(ve,{to:"/contact#admission",className:"mob-cta",children:"📋 Apply for Admission"})})]})]})]})}function X0(){const[r,f]=z.useState(!1);return c.jsx("div",{className:"logo-img-box",children:r?c.jsx("div",{className:"logo-initials",children:"SVK"}):c.jsx("img",{src:"/logo.png",alt:"School Logo",onError:()=>f(!0)})})}function Q0(){return c.jsx("footer",{className:"footer",children:c.jsx("p",{children:"© 2026 Sarvodaya Vidyalaya Junior Science College Hingna | Internship Project"})})}function k0(){const[r,f]=z.useState(!1);z.useEffect(()=>{function s(){f(document.documentElement.scrollTop>350)}return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);function d(){window.scrollTo({top:0,behavior:"smooth"})}return r?c.jsx("button",{className:"topBtn",onClick:d,children:"↑"}):null}const V0=`
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
`;function Z0(){const r=JSON.parse(localStorage.getItem("notices"))||[],f=JSON.parse(localStorage.getItem("events"))||[],d=[{title:c.jsxs(c.Fragment,{children:["Welcome to ",c.jsx("span",{children:"Sarvodaya Vidyalaya"})," Junior Science College"]}),desc:"Quality education with modern classrooms, experienced teachers, and a nurturing environment for every student to thrive.",btnText:"Admissions Open",link:"/contact#admission",img:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80"},{title:c.jsxs(c.Fragment,{children:["Smart Learning, ",c.jsx("span",{children:"Bright Future"})," Ahead"]}),desc:"Interactive teaching methods, smart classrooms, and skill-based learning designed for the leaders of tomorrow.",btnText:"Explore Academics",link:"/academics",img:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"},{title:c.jsxs(c.Fragment,{children:["Sports, Arts & ",c.jsx("span",{children:"Overall Development"})]}),desc:"We nurture physical fitness, creativity, and strong character through diverse co-curricular activities.",btnText:"View Gallery",link:"/gallery",img:"https://images.unsplash.com/photo-1519452635266-abab4954c08b?auto=format&fit=crop&w=1600&q=80"}],[s,m]=z.useState(0),p=z.useRef(null),g=()=>{clearInterval(p.current),p.current=setInterval(()=>{m(q=>(q+1)%d.length)},5e3)};z.useEffect(()=>(g(),()=>clearInterval(p.current)),[]);const M=q=>{m(q),g()},j=()=>{m(q=>(q-1+d.length)%d.length),g()},y=()=>{m(q=>(q+1)%d.length),g()},R={students:1200,teachers:80,awards:25,classrooms:50},[A,L]=z.useState({students:0,teachers:0,awards:0,classrooms:0});z.useEffect(()=>{let q;const B=performance.now(),H=2e3,Q=k=>{const K=Math.min((k-B)/H,1),se=1-Math.pow(1-K,3);L({students:Math.floor(se*R.students),teachers:Math.floor(se*R.teachers),awards:Math.floor(se*R.awards),classrooms:Math.floor(se*R.classrooms)}),K<1&&(q=requestAnimationFrame(Q))};return q=requestAnimationFrame(Q),()=>cancelAnimationFrame(q)},[]);const Y=[{name:"Rahul Sharma",role:"Parent",msg:"The teachers are genuinely supportive and the education quality is outstanding. My child has grown so much here."},{name:"Ananya Desai",role:"Student",msg:"I love the interactive smart classes and all the activities. Coming to school every day feels exciting."},{name:"Neha Verma",role:"Parent",msg:"A very disciplined school with great focus on academics, sports, and overall personality development."}];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:V0}),c.jsxs("div",{className:"hero-wrap",children:[d.map((q,B)=>c.jsx("div",{className:`hero-slide ${B===s?"active":""}`,style:{backgroundImage:`url(${q.img})`}},B)),c.jsxs("div",{className:"hero-content",children:[c.jsxs("div",{className:"hero-badge",children:[c.jsx("span",{children:"✦"})," Est. Since Hingna · Session 2026–27"]}),c.jsx("h1",{className:"hero-title",children:d[s].title}),c.jsx("p",{className:"hero-desc",children:d[s].desc}),c.jsxs("div",{className:"hero-actions",children:[c.jsx(ve,{to:d[s].link,children:c.jsx("button",{className:"btn-primary",children:d[s].btnText})}),c.jsx(ve,{to:"/about",children:c.jsx("button",{className:"btn-outline",children:"Learn More"})})]})]}),c.jsx("div",{className:"slide-nav",children:d.map((q,B)=>c.jsx("button",{className:`slide-dot ${B===s?"active":""}`,onClick:()=>M(B)},B))}),c.jsxs("div",{className:"slide-arrows",children:[c.jsx("button",{className:"arrow-btn",onClick:j,children:"◀"}),c.jsx("button",{className:"arrow-btn",onClick:y,children:"▶"})]})]}),c.jsx("div",{className:"info-bar",children:c.jsxs("div",{className:"info-grid",children:[c.jsxs("div",{className:"info-item",children:[c.jsx("div",{className:"info-icon",children:"📌"}),c.jsx("div",{className:"info-label",children:"Admissions"}),c.jsx("div",{className:"info-sub",children:"Session 2026–27 now open for enrollment"}),c.jsx(ve,{to:"/contact#admission",className:"info-link",children:"Apply Now →"})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("div",{className:"info-icon",children:"⏰"}),c.jsx("div",{className:"info-label",children:"School Timings"}),c.jsx("div",{className:"info-sub",children:"Mon – Sat: 8:00 AM to 2:30 PM"}),c.jsx("span",{className:"info-link",style:{color:"var(--text-muted)",cursor:"default"},children:"Sunday Holiday"})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("div",{className:"info-icon",children:"📞"}),c.jsx("div",{className:"info-label",children:"Contact Us"}),c.jsx("div",{className:"info-sub",children:"We're here for admissions & support"}),c.jsx("span",{className:"info-link",children:"+91 98765 43210"})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("div",{className:"info-icon",children:"🏫"}),c.jsx("div",{className:"info-label",children:"Facilities"}),c.jsx("div",{className:"info-sub",children:"Labs · Library · Smart Classes · Sports"}),c.jsx(ve,{to:"/about",className:"info-link",children:"View More →"})]})]})}),c.jsxs("section",{className:"section section-alt",children:[c.jsx("div",{className:"section-label",children:"Stay Updated"}),c.jsx("div",{className:"section-title",children:"Notice Board & Events"}),c.jsx("div",{className:"section-sub",children:"Stay informed about school announcements, important dates, and upcoming events."}),c.jsxs("div",{className:"two-col",children:[c.jsxs("div",{className:"board-card",children:[c.jsxs("div",{className:"board-header",children:[c.jsx("span",{children:"📢"}),c.jsx("h3",{children:"Notice Board"})]}),c.jsx("ul",{className:"notice-list",children:r.length===0?c.jsxs("li",{className:"notice-item",children:[c.jsx("div",{className:"notice-dot"}),"No notices at this time."]}):r.map((q,B)=>c.jsxs("li",{className:"notice-item",children:[c.jsx("div",{className:"notice-dot"}),q]},B))})]}),c.jsxs("div",{className:"board-card",children:[c.jsxs("div",{className:"board-header",children:[c.jsx("span",{children:"📅"}),c.jsx("h3",{children:"Upcoming Events"})]}),c.jsx("div",{className:"event-list",children:f.length===0?c.jsx("div",{className:"event-empty",children:"No upcoming events scheduled."}):f.map((q,B)=>c.jsxs("div",{className:"event-item",children:[c.jsx("div",{className:"event-icon",children:"📅"}),c.jsx("div",{className:"event-text",children:q})]},B))})]})]})]}),c.jsx("div",{className:"stats-section",children:c.jsxs("div",{style:{position:"relative",zIndex:1},children:[c.jsx("div",{className:"section-label",style:{color:"var(--gold)"},children:"By the Numbers"}),c.jsx("div",{className:"section-title",style:{color:"var(--white)"},children:"Our Achievements"}),c.jsx("div",{className:"section-sub",style:{color:"rgba(255,255,255,0.55)"},children:"We are proud of the community we have built over the years."}),c.jsx("div",{className:"stats-grid",children:[{num:A.students,label:"Students Enrolled",suffix:"+"},{num:A.teachers,label:"Expert Teachers",suffix:"+"},{num:A.awards,label:"Awards Won",suffix:"+"},{num:A.classrooms,label:"Classrooms",suffix:"+"}].map((q,B)=>c.jsxs("div",{className:"stat-card",children:[c.jsxs("span",{className:"stat-num",children:[q.num,q.suffix]}),c.jsx("div",{className:"stat-label",children:q.label})]},B))})]})}),c.jsxs("section",{className:"section section-alt",children:[c.jsx("div",{className:"section-label",children:"Voices of Trust"}),c.jsx("div",{className:"section-title",children:"What Our Community Says"}),c.jsx("div",{className:"section-sub",children:"Hear from the parents and students who are part of the Sarvodaya family."}),c.jsx("div",{className:"testimonials-grid",children:Y.map((q,B)=>c.jsxs("div",{className:"testi-card",children:[c.jsx("div",{className:"testi-quote",children:'"'}),c.jsx("div",{className:"testi-avatar",children:q.name[0]}),c.jsx("p",{className:"testi-text",children:q.msg}),c.jsx("div",{className:"testi-name",children:q.name}),c.jsx("div",{className:"testi-role",children:q.role})]},B))})]})]})}function K0(){const r=[{title:"Discipline",desc:"We believe discipline builds character and improves learning habits.",icon:"✅"},{title:"Excellence",desc:"We encourage students to aim high and achieve their best performance.",icon:"🏆"},{title:"Innovation",desc:"We promote smart learning, technology and creative thinking.",icon:"💡"},{title:"Respect",desc:"We teach students to respect teachers, parents and society.",icon:"🤝"}],f=[{name:"Smart Classrooms",icon:"🖥️"},{name:"Science Laboratory",icon:"🔬"},{name:"Computer Lab",icon:"💻"},{name:"Library",icon:"📚"},{name:"Sports Ground",icon:"⚽"},{name:"CCTV Security",icon:"📷"},{name:"Transportation",icon:"🚌"},{name:"Activity Rooms",icon:"🎭"}],d=[{year:"2000",text:"School foundation laid with quality education vision."},{year:"2010",text:"New campus expansion and modern learning facilities."},{year:"2018",text:"Smart classrooms and digital learning introduced."},{year:"2024",text:"Improved sports infrastructure and co-curricular programs."}];return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"page-hero",children:c.jsxs("div",{className:"page-hero-content",children:[c.jsx("h1",{children:"About Sarvodaya Vidyalaya Junior Science College Hingna"}),c.jsx("p",{children:"Sarvodaya Vidyalaya Junior Science College is committed to delivering quality education, skill development and overall growth for every student."})]})}),c.jsxs("section",{children:[c.jsxs("div",{className:"title",children:[c.jsx("h2",{children:"Who We Are"}),c.jsx("p",{children:"Building bright futures with knowledge and values"})]}),c.jsxs("div",{className:"card-container",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Our Mission"}),c.jsx("p",{children:"To provide quality education and develop confident, disciplined and responsible students with strong moral values."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Our Vision"}),c.jsx("p",{children:"To be a leading educational institution recognized for excellence in academics, discipline, sports and creativity."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Our Objective"}),c.jsx("p",{children:"To focus on academics along with personality development through events, competitions, and activities."})]})]})]}),c.jsxs("section",{children:[c.jsxs("div",{className:"title",children:[c.jsx("h2",{children:"Principal’s Message"}),c.jsx("p",{children:"Guidance, Discipline and Growth"})]}),c.jsxs("div",{className:"principal-box",children:[c.jsxs("div",{className:"principal-left",children:[c.jsx("div",{className:"principal-photo",children:"👩‍🏫"}),c.jsx("h3",{children:"Principal"}),c.jsx("p",{className:"principal-name",children:"Mrs. A. Sharma"})]}),c.jsxs("div",{className:"principal-right",children:[c.jsx("p",{children:"“Our goal is to provide the best learning environment where each student can explore their strengths. We focus on academic excellence, strong discipline and co-curricular development. Together, we shape responsible citizens for tomorrow.”"}),c.jsx("p",{className:"principal-sign",children:"— Principal"})]})]})]}),c.jsxs("section",{children:[c.jsxs("div",{className:"title",children:[c.jsx("h2",{children:"Our Core Values"}),c.jsx("p",{children:"Values that shape every student’s journey"})]}),c.jsx("div",{className:"values-grid",children:r.map((s,m)=>c.jsxs("div",{className:"value-card",children:[c.jsx("div",{className:"value-icon",children:s.icon}),c.jsx("h3",{children:s.title}),c.jsx("p",{children:s.desc})]},m))})]}),c.jsxs("section",{children:[c.jsxs("div",{className:"title",children:[c.jsx("h2",{children:"Facilities"}),c.jsx("p",{children:"Modern infrastructure for better learning"})]}),c.jsx("div",{className:"facility-grid",children:f.map((s,m)=>c.jsxs("div",{className:"facility-card",children:[c.jsx("span",{className:"facility-icon",children:s.icon}),c.jsx("p",{children:s.name})]},m))})]}),c.jsxs("section",{children:[c.jsxs("div",{className:"title",children:[c.jsx("h2",{children:"Our Journey"}),c.jsx("p",{children:"Milestones in our growth"})]}),c.jsx("div",{className:"timeline",children:d.map((s,m)=>c.jsxs("div",{className:"timeline-item",children:[c.jsx("div",{className:"timeline-year",children:s.year}),c.jsx("div",{className:"timeline-text",children:s.text})]},m))})]}),c.jsx("section",{children:c.jsxs("div",{className:"cta-box",children:[c.jsx("h2",{children:"Ready to JoinSarvodaya Vidyalaya Junior Science College Hingna"}),c.jsx("p",{children:"Apply today and start your bright future with us."}),c.jsx(ve,{to:"/contact#admission",children:c.jsx("button",{className:"cta-btn",children:"Apply for Admission"})})]})})]})}function J0(){const[r,f]=z.useState([]);return z.useEffect(()=>{f(JSON.parse(localStorage.getItem("academics"))||[])},[]),c.jsxs("section",{children:[c.jsxs("div",{className:"title",children:[c.jsx("h2",{children:"Academics"}),c.jsx("p",{children:"Quality education from primary to higher secondary"})]}),c.jsxs("div",{className:"card-container",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Primary Section (1st - 5th)"}),c.jsx("p",{children:"Focus on building strong basics in reading, writing, and mathematics through interactive learning, storytelling, and fun activities."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Middle School (6th - 8th)"}),c.jsx("p",{children:"Concept-based learning with emphasis on science, mathematics, languages, and social studies along with regular tests and projects."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Secondary School (9th - 10th)"}),c.jsx("p",{children:"Intensive preparation for board examinations with experienced teachers, doubt-solving sessions, and revision classes."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Higher Secondary (11th - 12th)"}),c.jsx("p",{children:"Science and Commerce streams with career guidance, practical learning, and mentorship programs."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Subjects Offered"}),c.jsx("p",{children:"English, Mathematics, Science, Social Studies, Computer Science, Hindi, Physical Education, and Environmental Studies."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Teaching Methodology"}),c.jsx("p",{children:"Smart classrooms, project-based learning, group discussions, digital presentations, and practical demonstrations."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Examination System"}),c.jsx("p",{children:"Regular class tests, unit tests, mid-term examinations, and annual examinations to monitor student progress."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Academic Support"}),c.jsx("p",{children:"Extra doubt-solving classes, remedial sessions, and personalized mentoring for students needing additional guidance."})]})]}),c.jsxs("div",{className:"title",children:[c.jsx("h2",{children:"Academics"}),c.jsx("p",{children:"Our courses and curriculum"})]}),c.jsx("div",{className:"card-container",children:r.length===0?c.jsx("p",{children:"No academic information added yet."}):r.map((d,s)=>c.jsx("div",{className:"card",children:c.jsx("p",{children:d})},s))})]})}function $0(){const[r,f]=z.useState([]),[d,s]=z.useState({open:!1,src:""});z.useEffect(()=>{f(JSON.parse(localStorage.getItem("gallery"))||[])},[]);function m(g){s({open:!0,src:g})}function p(){s({open:!1,src:""})}return c.jsxs("section",{children:[c.jsxs("div",{className:"title",children:[c.jsx("h2",{children:"School Gallery"}),c.jsx("p",{children:"Campus, classrooms & student activities"})]}),c.jsx("div",{className:"gallery",children:r.map((g,M)=>c.jsx("img",{src:g,alt:"gallery-"+M,onClick:()=>m(g)},M))}),d.open&&c.jsxs("div",{className:"lightbox",onClick:p,children:[c.jsx("span",{className:"close-lightbox",onClick:p,children:"×"}),c.jsx("img",{src:d.src,alt:"Full View",onClick:g=>g.stopPropagation()})]})]})}const W0=`
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

  /* ── PAGE WRAPPER ── */
  .contact-page {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    min-height: 100vh;
  }

  /* ── HERO BANNER ── */
  .contact-hero {
    background: var(--navy);
    padding: 64px 6vw 56px;
    position: relative;
    overflow: hidden;
  }
  .contact-hero::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 320px; height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201,146,42,0.14) 0%, transparent 70%);
    pointer-events: none;
  }
  .contact-hero::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    opacity: 0.4;
  }
  .hero-label {
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 10px;
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    color: var(--white);
    line-height: 1.15;
    margin-bottom: 14px;
  }
  .hero-title span { color: var(--gold-light); }
  .hero-sub {
    font-size: 1rem;
    color: rgba(255,255,255,0.55);
    font-weight: 300;
    max-width: 480px;
    line-height: 1.7;
  }

  /* ── MAIN CONTENT GRID ── */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 32px;
    padding: 52px 6vw;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* ── LEFT COLUMN ── */
  .left-col { display: flex; flex-direction: column; gap: 24px; }

  /* info cards */
  .info-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px 26px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
    transition: box-shadow 0.25s, transform 0.25s;
  }
  .info-card:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.09);
    transform: translateY(-3px);
  }
  .info-card-head {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
  }
  .info-icon {
    width: 44px; height: 44px;
    border-radius: 12px;
    background: var(--gold-dim);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  .info-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--navy);
  }
  .info-card-body {
    font-size: 0.875rem;
    color: var(--muted);
    line-height: 1.7;
  }
  .info-card-body strong { color: var(--navy); font-weight: 500; }

  /* social connect card */
  .social-card {
    background: var(--navy);
    border-radius: 16px;
    padding: 26px;
    box-shadow: 0 4px 24px rgba(10,22,40,0.18);
  }
  .social-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 16px;
  }
  .social-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .social-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 16px;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.22s;
    border: 1px solid transparent;
  }
  .social-btn .s-icon {
    width: 28px; height: 28px;
    border-radius: 7px;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.85rem;
    flex-shrink: 0;
  }
  .social-btn.facebook { background: rgba(24,119,242,0.12); color: #4a9ff5; border-color: rgba(24,119,242,0.2); }
  .social-btn.facebook .s-icon { background: rgba(24,119,242,0.18); }
  .social-btn.facebook:hover { background: rgba(24,119,242,0.22); border-color: rgba(24,119,242,0.4); }

  .social-btn.twitter { background: rgba(29,161,242,0.1); color: #5bb8f5; border-color: rgba(29,161,242,0.2); }
  .social-btn.twitter .s-icon { background: rgba(29,161,242,0.15); }
  .social-btn.twitter:hover { background: rgba(29,161,242,0.2); border-color: rgba(29,161,242,0.4); }

  .social-btn.instagram { background: rgba(225,48,108,0.1); color: #f06292; border-color: rgba(225,48,108,0.2); }
  .social-btn.instagram .s-icon { background: rgba(225,48,108,0.15); }
  .social-btn.instagram:hover { background: rgba(225,48,108,0.2); border-color: rgba(225,48,108,0.4); }

  .whatsapp-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    border-radius: 10px;
    background: rgba(37,211,102,0.12);
    border: 1px solid rgba(37,211,102,0.25);
    color: #4ddb7c;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 12px;
    transition: all 0.22s;
  }
  .whatsapp-btn:hover { background: rgba(37,211,102,0.2); border-color: rgba(37,211,102,0.4); }

  /* map */
  .map-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .map-header {
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .map-header h3 {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--navy);
  }
  .map-card iframe {
    display: block;
    width: 100%;
    height: 200px;
    border: none;
  }

  /* ── RIGHT COLUMN — FORM ── */
  .form-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 40px 38px;
    box-shadow: 0 4px 32px rgba(0,0,0,0.06);
    height: fit-content;
  }
  .form-header { margin-bottom: 32px; }
  .form-label-tag {
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 8px;
  }
  .form-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--navy);
    line-height: 1.25;
    margin-bottom: 8px;
  }
  .form-desc {
    font-size: 0.875rem;
    color: var(--muted);
    line-height: 1.6;
  }

  /* form fields */
  .field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }
  .field-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
  .field-group label {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--navy);
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .field-input {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    color: var(--navy);
    background: #fafbfc;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  }
  .field-input::placeholder { color: #b0bac8; }
  .field-input:focus {
    border-color: var(--gold);
    background: var(--white);
    box-shadow: 0 0 0 3px rgba(201,146,42,0.1);
  }

  textarea.field-input {
    resize: vertical;
    min-height: 110px;
    line-height: 1.6;
  }

  /* stream selector */
  .stream-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 16px;
  }
  .stream-option { position: relative; }
  .stream-option input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0; height: 0;
  }
  .stream-label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 14px;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--muted);
    background: #fafbfc;
    transition: all 0.2s;
  }
  .stream-label .stream-dot {
    width: 14px; height: 14px;
    border-radius: 50%;
    border: 2px solid #cbd5e0;
    flex-shrink: 0;
    transition: all 0.2s;
  }
  .stream-option input:checked + .stream-label {
    border-color: var(--gold);
    background: var(--gold-dim);
    color: var(--navy);
  }
  .stream-option input:checked + .stream-label .stream-dot {
    background: var(--gold);
    border-color: var(--gold);
  }

  /* submit button */
  .submit-btn {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 10px;
    background: var(--navy);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 8px;
    position: relative;
    overflow: hidden;
    transition: background 0.25s, transform 0.2s, box-shadow 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .submit-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--gold) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .submit-btn:hover {
    background: var(--navy-mid);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(10,22,40,0.25);
  }
  .submit-btn:hover::before { opacity: 0.15; }
  .submit-btn:active { transform: translateY(0); }
  .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  /* success / error messages */
  .form-msg {
    padding: 12px 16px;
    border-radius: 10px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .form-msg.success { background: #edf7ee; color: #2e7d32; border: 1px solid #c8e6c9; }
  .form-msg.error   { background: #fdecea; color: #c62828; border: 1px solid #ffcdd2; }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .contact-grid { grid-template-columns: 1fr; padding: 36px 5vw; }
    .field-row { grid-template-columns: 1fr; }
    .form-card { padding: 28px 22px; }
  }
  @media (max-width: 500px) {
    .stream-row { grid-template-columns: 1fr; }
    .contact-hero { padding: 44px 5vw 40px; }
  }
`;function F0(){const[r,f]=z.useState({name:"",email:"",phone:"",stream:"",message:""}),[d,s]=z.useState(null),m=g=>{f({...r,[g.target.name]:g.target.value})},p=async g=>{g.preventDefault(),s("loading");try{(await fetch("https://svv-school-backend.onrender.com/api/admission",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(s("success"),f({name:"",email:"",phone:"",stream:"",message:""})):s("error")}catch(M){console.error(M),s("error")}};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:W0}),c.jsxs("div",{className:"contact-page",children:[c.jsxs("div",{className:"contact-hero",children:[c.jsx("div",{className:"hero-label",children:"Get in Touch"}),c.jsxs("h1",{className:"hero-title",children:["Contact & ",c.jsx("span",{children:"Admissions"})]}),c.jsx("p",{className:"hero-sub",children:"Reach out to us for admissions, queries, or general information. We're happy to help."})]}),c.jsxs("div",{className:"contact-grid",children:[c.jsxs("div",{className:"left-col",children:[c.jsxs("div",{className:"info-card",children:[c.jsxs("div",{className:"info-card-head",children:[c.jsx("div",{className:"info-icon",children:"📞"}),c.jsx("div",{className:"info-card-title",children:"Phone & Email"})]}),c.jsxs("div",{className:"info-card-body",children:[c.jsx("strong",{children:"+91 98765 43210"}),c.jsx("br",{}),"info@sarvodayavk.edu.in",c.jsx("br",{}),c.jsx("br",{}),c.jsx("strong",{children:"Office Hours:"})," Mon – Sat, 8:00 AM – 2:30 PM"]})]}),c.jsxs("div",{className:"info-card",children:[c.jsxs("div",{className:"info-card-head",children:[c.jsx("div",{className:"info-icon",children:"📍"}),c.jsx("div",{className:"info-card-title",children:"Our Address"})]}),c.jsxs("div",{className:"info-card-body",children:["Sarvodaya Vidyalaya Junior Science College",c.jsx("br",{}),c.jsx("strong",{children:"Hingna, Nagpur, Maharashtra – 441110"}),c.jsx("br",{}),"Near Main Bus Stop, Hingna Road"]})]}),c.jsxs("div",{className:"social-card",children:[c.jsx("div",{className:"social-card-title",children:"🌐 Connect With Us"}),c.jsxs("div",{className:"social-buttons",children:[c.jsxs("a",{href:"https://www.facebook.com/YOUR_ID",target:"_blank",rel:"noopener noreferrer",className:"social-btn facebook",children:[c.jsx("span",{className:"s-icon",children:"f"})," Facebook"]}),c.jsxs("a",{href:"https://twitter.com/YOUR_ID",target:"_blank",rel:"noopener noreferrer",className:"social-btn twitter",children:[c.jsx("span",{className:"s-icon",children:"𝕏"})," Twitter / X"]}),c.jsxs("a",{href:"https://www.instagram.com/YOUR_ID",target:"_blank",rel:"noopener noreferrer",className:"social-btn instagram",children:[c.jsx("span",{className:"s-icon",children:"◎"})," Instagram"]})]}),c.jsx("a",{href:"https://wa.me/91XXXXXXXXXX",target:"_blank",rel:"noopener noreferrer",className:"whatsapp-btn",children:"💬 Chat on WhatsApp"})]}),c.jsxs("div",{className:"map-card",children:[c.jsxs("div",{className:"map-header",children:[c.jsx("span",{children:"📍"}),c.jsx("h3",{children:"Our Location"})]}),c.jsx("iframe",{src:"https://www.google.com/maps?q=Hingna,Nagpur,Maharashtra&output=embed",width:"100%",height:"200",style:{border:0},allowFullScreen:"",loading:"lazy",title:"School Location Map"})]})]}),c.jsxs("div",{className:"form-card",id:"admission",children:[c.jsxs("div",{className:"form-header",children:[c.jsx("div",{className:"form-label-tag",children:"Admissions 2026–27"}),c.jsx("div",{className:"form-title",children:"Apply for Admission"}),c.jsx("p",{className:"form-desc",children:"Fill in the details below and our team will get back to you within 24 hours."})]}),d==="success"&&c.jsx("div",{className:"form-msg success",children:"✅ Admission form submitted successfully! We'll contact you soon."}),d==="error"&&c.jsx("div",{className:"form-msg error",children:"❌ Something went wrong. Please try again or call us directly."}),c.jsxs("form",{onSubmit:p,children:[c.jsxs("div",{className:"field-row",children:[c.jsxs("div",{className:"field-group",style:{marginBottom:0},children:[c.jsx("label",{children:"Student Name"}),c.jsx("input",{className:"field-input",type:"text",name:"name",placeholder:"Full name",value:r.name,onChange:m,required:!0})]}),c.jsxs("div",{className:"field-group",style:{marginBottom:0},children:[c.jsx("label",{children:"Phone Number"}),c.jsx("input",{className:"field-input",type:"text",name:"phone",placeholder:"+91 XXXXX XXXXX",value:r.phone,onChange:m,required:!0})]})]}),c.jsxs("div",{className:"field-group",children:[c.jsx("label",{children:"Email Address"}),c.jsx("input",{className:"field-input",type:"email",name:"email",placeholder:"your@email.com",value:r.email,onChange:m,required:!0})]}),c.jsxs("div",{className:"field-group",children:[c.jsx("label",{children:"Select Stream"}),c.jsx("div",{className:"stream-row",children:["Science","Commerce","Arts","Not decided"].map(g=>c.jsxs("div",{className:"stream-option",children:[c.jsx("input",{type:"radio",id:`stream-${g}`,name:"stream",value:g,checked:r.stream===g,onChange:m}),c.jsxs("label",{className:"stream-label",htmlFor:`stream-${g}`,children:[c.jsx("span",{className:"stream-dot"}),g]})]},g))})]}),c.jsxs("div",{className:"field-group",children:[c.jsx("label",{children:"Message / Query"}),c.jsx("textarea",{className:"field-input",name:"message",placeholder:"Any questions or additional information...",value:r.message,onChange:m})]}),c.jsx("button",{type:"submit",className:"submit-btn",disabled:d==="loading",children:d==="loading"?c.jsx(c.Fragment,{children:"⏳ Submitting..."}):c.jsx(c.Fragment,{children:"📋 Submit Admission Form"})})]})]})]})]})]})}const I0=[{name:"Mr. Rajesh Sharma",subject:"Mathematics",experience:"10+ Years",img:"https://randomuser.me/api/portraits/men/32.jpg"},{name:"Ms. Sneha Patil",subject:"Physics",experience:"8 Years",img:"https://randomuser.me/api/portraits/women/44.jpg"},{name:"Mr. Imran Khan",subject:"Chemistry",experience:"12 Years",img:"https://randomuser.me/api/portraits/men/55.jpg"},{name:"Mrs. Anjali Deshmukh",subject:"Biology",experience:"9 Years",img:"https://randomuser.me/api/portraits/women/68.jpg"}];function P0(){return c.jsx("div",{className:"page",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"page-title",children:"Our Teachers"}),c.jsx("div",{className:"card-container",children:I0.map((r,f)=>c.jsxs("div",{className:"card teacher-card",children:[c.jsx("img",{src:r.img,alt:r.name}),c.jsx("h3",{children:r.name}),c.jsx("p",{children:c.jsx("strong",{children:r.subject})}),c.jsxs("p",{children:[r.experience," Experience"]})]},f))})]})})}const ev=[{name:"Dr. A. Deshmukh",role:"Principal",message:"Our vision is to provide quality education that nurtures creativity, discipline, and leadership among students.",img:"https://randomuser.me/api/portraits/men/11.jpg"},{name:"Mrs. S. Kulkarni",role:"Vice Principal",message:"We focus on academic excellence along with co-curricular activities for holistic development.",img:"https://randomuser.me/api/portraits/women/21.jpg"},{name:"Mr. R. Patil",role:"Director",message:"Our institution aims to build future-ready students with strong values and modern skills.",img:"https://randomuser.me/api/portraits/men/31.jpg"}];function tv(){return c.jsx("div",{className:"page",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"page-title",children:"Management Team"}),c.jsx("p",{className:"page-subtitle",children:"Meet the leaders guiding our institution towards excellence."}),c.jsx("div",{className:"card-container",children:ev.map((r,f)=>c.jsxs("div",{className:"card management-card",children:[c.jsx("img",{src:r.img,alt:r.name}),c.jsx("h3",{children:r.name}),c.jsx("p",{className:"role",children:r.role}),c.jsxs("p",{className:"message",children:["“",r.message,"”"]})]},f))})]})})}const av=[{name:"Rahul Verma",achievement:"Selected in IIT Bombay",year:"2025",img:"https://randomuser.me/api/portraits/men/12.jpg"},{name:"Sneha Kulkarni",achievement:"MHT-CET Topper (99%)",year:"2024",img:"https://randomuser.me/api/portraits/women/22.jpg"},{name:"Amit Patil",achievement:"Placed at Google",year:"2023",img:"https://randomuser.me/api/portraits/men/45.jpg"},{name:"Priya Sharma",achievement:"NEET Rank under 500",year:"2025",img:"https://randomuser.me/api/portraits/women/30.jpg"}];function lv(){return c.jsx("div",{className:"page",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"page-title",children:"Success Stories"}),c.jsx("div",{className:"card-container",children:av.map((r,f)=>c.jsxs("div",{className:"card success-card",children:[c.jsx("img",{src:r.img,alt:r.name}),c.jsx("h3",{children:r.name}),c.jsx("p",{children:r.achievement}),c.jsx("span",{className:"year",children:r.year})]},f))})]})})}function nv(){const[r,f]=z.useState(""),[d,s]=z.useState(""),m=qr(),p=g=>{g.preventDefault(),r==="admin@dps.com"&&d==="admin123"?(localStorage.setItem("adminAuth","true"),m("/admin-dashboard")):alert("Invalid Login!")};return c.jsxs("section",{children:[c.jsxs("div",{className:"title",children:[c.jsx("h2",{children:"Admin Login"}),c.jsx("p",{children:"Only for Authorized Users"})]}),c.jsxs("form",{className:"admin-form",onSubmit:p,children:[c.jsx("input",{type:"email",placeholder:"Admin Email",required:!0,value:r,onChange:g=>f(g.target.value)}),c.jsx("input",{type:"password",placeholder:"Password",required:!0,value:d,onChange:g=>s(g.target.value)}),c.jsx("button",{type:"submit",children:"Login"})]})]})}const iv=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy:        #0a1628;
    --navy-mid:    #142240;
    --navy-light:  #1e3060;
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

  /* ── BASE ── */
  .adm-wrap {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    min-height: 100vh;
  }

  /* ── TOP BAR ── */
  .adm-topbar {
    background: var(--navy);
    padding: 0 5vw;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(90deg, transparent, var(--gold), transparent) 1;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3);
  }
  .adm-topbar-left {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .adm-logo-box {
    width: 38px; height: 38px;
    border-radius: 9px;
    background: linear-gradient(135deg, var(--gold), #7a4e10);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 0.9rem;
    font-weight: 900;
    color: var(--white);
    box-shadow: 0 2px 10px rgba(201,146,42,0.3);
  }
  .adm-topbar-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--white);
  }
  .adm-topbar-sub {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.05em;
  }
  .adm-topbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .adm-time {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.4);
    font-weight: 400;
  }
  .adm-logout-btn {
    display: flex;
    align-items: center;
    gap: 7px;
    background: rgba(229,62,62,0.12);
    border: 1px solid rgba(229,62,62,0.25);
    color: #fc8181;
    padding: 8px 16px;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  .adm-logout-btn:hover {
    background: rgba(229,62,62,0.22);
    border-color: rgba(229,62,62,0.45);
    color: #feb2b2;
  }

  /* ── BODY ── */
  .adm-body {
    padding: 36px 5vw;
    max-width: 1280px;
    margin: 0 auto;
  }

  /* ── PAGE HEADING ── */
  .adm-page-heading {
    margin-bottom: 32px;
  }
  .adm-page-label {
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 6px;
  }
  .adm-page-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--navy);
  }

  /* ── STAT CARDS ── */
  .adm-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 32px;
  }
  .adm-stat {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 20px 22px;
    display: flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .adm-stat:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
  .adm-stat-icon {
    width: 46px; height: 46px;
    border-radius: 12px;
    background: var(--gold-dim);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  .adm-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.7rem;
    font-weight: 900;
    color: var(--navy);
    line-height: 1;
  }
  .adm-stat-label {
    font-size: 0.75rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 3px;
  }

  /* ── SECTION GRID ── */
  .adm-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 20px;
  }
  .adm-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }

  /* ── PANEL CARD ── */
  .adm-panel {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .adm-panel-head {
    background: var(--navy);
    padding: 16px 22px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .adm-panel-head h3 {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--white);
    flex: 1;
  }
  .adm-panel-badge {
    background: var(--gold-dim);
    border: 1px solid rgba(201,146,42,0.3);
    color: var(--gold-light);
    font-size: 0.72rem;
    font-weight: 600;
    padding: 2px 10px;
    border-radius: 20px;
  }
  .adm-panel-body { padding: 20px 22px; }

  /* ── INPUT ROW ── */
  .adm-input-row {
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
  }
  .adm-input {
    flex: 1;
    padding: 10px 14px;
    border: 1.5px solid #e2e8f0;
    border-radius: 9px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    color: var(--navy);
    background: #fafbfc;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .adm-input::placeholder { color: #b0bac8; }
  .adm-input:focus {
    border-color: var(--gold);
    background: var(--white);
    box-shadow: 0 0 0 3px rgba(201,146,42,0.1);
  }

  /* ── BUTTONS ── */
  .adm-btn-add {
    background: var(--navy);
    color: var(--white);
    border: none;
    padding: 10px 18px;
    border-radius: 9px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s, transform 0.15s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .adm-btn-add:hover { background: var(--navy-mid); transform: translateY(-1px); }

  .adm-btn-gold {
    background: var(--gold);
    color: var(--white);
    border: none;
    padding: 10px 18px;
    border-radius: 9px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s, transform 0.15s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .adm-btn-gold:hover { background: var(--gold-light); transform: translateY(-1px); }

  .adm-btn-del {
    background: var(--danger-dim);
    border: 1px solid rgba(229,62,62,0.18);
    color: var(--danger);
    padding: 5px 11px;
    border-radius: 7px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;
    white-space: nowrap;
  }
  .adm-btn-del:hover { background: rgba(229,62,62,0.16); border-color: rgba(229,62,62,0.4); }

  /* ── ITEM LIST ── */
  .adm-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
  .adm-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 14px;
    background: #f8fafc;
    border: 1px solid #edf2f7;
    border-radius: 9px;
    font-size: 0.85rem;
    color: var(--navy);
    transition: background 0.15s;
  }
  .adm-list-item:hover { background: #f0f4f8; }
  .adm-list-item span { flex: 1; line-height: 1.4; }
  .adm-list-empty {
    text-align: center;
    padding: 20px;
    font-size: 0.83rem;
    color: var(--muted);
  }

  /* ── GALLERY GRID ── */
  .adm-gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 14px;
  }
  .adm-gallery-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--border);
    aspect-ratio: 1;
    background: #f0f4f8;
  }
  .adm-gallery-item img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }
  .adm-gallery-del {
    position: absolute;
    top: 6px; right: 6px;
    background: rgba(229,62,62,0.85);
    color: white;
    border: none;
    width: 26px; height: 26px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.18s;
  }
  .adm-gallery-del:hover { background: var(--danger); }

  /* file upload zone */
  .adm-file-zone {
    border: 2px dashed #cbd5e0;
    border-radius: 10px;
    padding: 18px 14px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    background: #fafbfc;
    margin-bottom: 10px;
  }
  .adm-file-zone:hover { border-color: var(--gold); background: var(--gold-dim); }
  .adm-file-zone input { display: none; }
  .adm-file-zone-label {
    font-size: 0.82rem;
    color: var(--muted);
    cursor: pointer;
    display: block;
  }
  .adm-file-zone-label strong { color: var(--gold); }
  .adm-file-selected {
    font-size: 0.78rem;
    color: var(--success);
    margin-top: 4px;
    font-weight: 500;
  }

  /* ── ADMISSIONS TABLE ── */
  .adm-table-wrap {
    overflow-x: auto;
    margin-top: 16px;
    border-radius: 12px;
    border: 1px solid var(--border);
  }
  .adm-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.84rem;
  }
  .adm-table thead tr {
    background: var(--navy);
  }
  .adm-table thead th {
    padding: 13px 16px;
    text-align: left;
    font-size: 0.72rem;
    font-weight: 600;
    color: rgba(255,255,255,0.55);
    text-transform: uppercase;
    letter-spacing: 0.07em;
    white-space: nowrap;
  }
  .adm-table tbody tr {
    border-bottom: 1px solid #f0f4f8;
    transition: background 0.15s;
  }
  .adm-table tbody tr:hover { background: #f8fafc; }
  .adm-table tbody tr:last-child { border-bottom: none; }
  .adm-table td {
    padding: 12px 16px;
    color: var(--navy);
    vertical-align: top;
    line-height: 1.5;
  }
  .adm-table td.muted { color: var(--muted); font-size: 0.82rem; }

  .adm-search-row {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 0;
  }
  .adm-search-row .adm-input { margin: 0; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .adm-stats { grid-template-columns: repeat(2, 1fr); }
    .adm-grid-3 { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 700px) {
    .adm-stats { grid-template-columns: repeat(2, 1fr); }
    .adm-grid-3, .adm-grid-2 { grid-template-columns: 1fr; }
    .adm-body { padding: 24px 4vw; }
    .adm-gallery-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;function uv(){const r=qr(),[f,d]=z.useState(""),[s,m]=z.useState(""),[p,g]=z.useState(""),[M,j]=z.useState([]),[y,R]=z.useState([]),[A,L]=z.useState([]),[Y,q]=z.useState([]),[B,H]=z.useState([]),[Q,k]=z.useState(null),[K,se]=z.useState(""),[ye,Te]=z.useState(""),P=window.location.hostname==="localhost"?"http://localhost:5000":"https://svv-school-backend.onrender.com";z.useEffect(()=>{const S=()=>{Te(new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}))};S();const U=setInterval(S,1e3);return()=>clearInterval(U)},[]),z.useEffect(()=>{localStorage.getItem("adminAuth")||r("/admin"),j(JSON.parse(localStorage.getItem("notices"))||[]),R(JSON.parse(localStorage.getItem("events"))||[]),L(JSON.parse(localStorage.getItem("academics"))||[]),H(JSON.parse(localStorage.getItem("gallery"))||[])},[r]),z.useEffect(()=>{fetch(`${P}/api/admissions`).then(S=>S.json()).then(S=>q(S)).catch(S=>console.log(S))},[]);const Ee=(S,U,X,$,I)=>{if(!S.trim())return;const le=[...U,S.trim()];X(le),localStorage.setItem($,JSON.stringify(le)),I("")},De=(S,U,X,$)=>{const I=U.filter((le,Qe)=>Qe!==S);X(I),localStorage.setItem($,JSON.stringify(I))},We=()=>Ee(f,M,j,"notices",d),it=()=>Ee(s,y,R,"events",m),Xe=()=>Ee(p,A,L,"academics",g),Lt=S=>De(S,M,j,"notices"),Mt=S=>De(S,y,R,"events"),ut=S=>De(S,A,L,"academics"),w=()=>{if(!Q)return;const S=new FileReader;S.onloadend=()=>{const U=S.result,X=[...B,U];H(X),localStorage.setItem("gallery",JSON.stringify(X)),k(null)},S.readAsDataURL(Q)},G=S=>{const U=B.filter((X,$)=>$!==S);H(U),localStorage.setItem("gallery",JSON.stringify(U))},F=()=>{localStorage.removeItem("adminAuth"),r("/admin")},he=()=>{const U=`Name,Email,Phone,Message
`+Y.map(le=>`${le.name},${le.email},${le.phone},${le.message}`).join(`
`),X=new Blob([U],{type:"text/csv"}),$=window.URL.createObjectURL(X),I=document.createElement("a");I.href=$,I.download="admissions.csv",I.click()},de=Y.filter(S=>S.name.toLowerCase().includes(K.toLowerCase())),b=({icon:S,title:U,count:X,children:$})=>c.jsxs("div",{className:"adm-panel",children:[c.jsxs("div",{className:"adm-panel-head",children:[c.jsx("span",{children:S}),c.jsx("h3",{children:U}),c.jsx("span",{className:"adm-panel-badge",children:X})]}),c.jsx("div",{className:"adm-panel-body",children:$})]});return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:iv}),c.jsxs("div",{className:"adm-wrap",children:[c.jsxs("div",{className:"adm-topbar",children:[c.jsxs("div",{className:"adm-topbar-left",children:[c.jsx("div",{className:"adm-logo-box",children:"SVK"}),c.jsxs("div",{children:[c.jsx("div",{className:"adm-topbar-title",children:"Admin Dashboard"}),c.jsx("div",{className:"adm-topbar-sub",children:"Sarvodaya Vidyalaya"})]})]}),c.jsxs("div",{className:"adm-topbar-right",children:[c.jsxs("span",{className:"adm-time",children:["🕐 ",ye]}),c.jsx("button",{className:"adm-logout-btn",onClick:F,children:"⬠ Logout"})]})]}),c.jsxs("div",{className:"adm-body",children:[c.jsxs("div",{className:"adm-page-heading",children:[c.jsx("div",{className:"adm-page-label",children:"Control Panel"}),c.jsx("div",{className:"adm-page-title",children:"Manage School Content"})]}),c.jsx("div",{className:"adm-stats",children:[{icon:"📢",label:"Notices",num:M.length},{icon:"📅",label:"Events",num:y.length},{icon:"📚",label:"Academics",num:A.length},{icon:"🎓",label:"Admissions",num:Y.length}].map(S=>c.jsxs("div",{className:"adm-stat",children:[c.jsx("div",{className:"adm-stat-icon",children:S.icon}),c.jsxs("div",{children:[c.jsx("div",{className:"adm-stat-num",children:S.num}),c.jsx("div",{className:"adm-stat-label",children:S.label})]})]},S.label))}),c.jsxs("div",{className:"adm-grid-3",children:[c.jsxs(b,{icon:"📢",title:"Notices",count:M.length,children:[c.jsxs("div",{className:"adm-input-row",children:[c.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter notice...",value:f,onChange:S=>d(S.target.value),onKeyDown:S=>S.key==="Enter"&&We()}),c.jsx("button",{className:"adm-btn-add",onClick:We,children:"+ Add"})]}),c.jsxs("ul",{className:"adm-list",children:[M.length===0&&c.jsx("div",{className:"adm-list-empty",children:"No notices yet"}),M.map((S,U)=>c.jsxs("li",{className:"adm-list-item",children:[c.jsx("span",{children:S}),c.jsx("button",{className:"adm-btn-del",onClick:()=>Lt(U),children:"✕"})]},U))]})]}),c.jsxs(b,{icon:"📅",title:"Events",count:y.length,children:[c.jsxs("div",{className:"adm-input-row",children:[c.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter event...",value:s,onChange:S=>m(S.target.value),onKeyDown:S=>S.key==="Enter"&&it()}),c.jsx("button",{className:"adm-btn-add",onClick:it,children:"+ Add"})]}),c.jsxs("ul",{className:"adm-list",children:[y.length===0&&c.jsx("div",{className:"adm-list-empty",children:"No events yet"}),y.map((S,U)=>c.jsxs("li",{className:"adm-list-item",children:[c.jsx("span",{children:S}),c.jsx("button",{className:"adm-btn-del",onClick:()=>Mt(U),children:"✕"})]},U))]})]}),c.jsxs(b,{icon:"📚",title:"Academics",count:A.length,children:[c.jsxs("div",{className:"adm-input-row",children:[c.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter academic info...",value:p,onChange:S=>g(S.target.value),onKeyDown:S=>S.key==="Enter"&&Xe()}),c.jsx("button",{className:"adm-btn-add",onClick:Xe,children:"+ Add"})]}),c.jsxs("ul",{className:"adm-list",children:[A.length===0&&c.jsx("div",{className:"adm-list-empty",children:"No items yet"}),A.map((S,U)=>c.jsxs("li",{className:"adm-list-item",children:[c.jsx("span",{children:S}),c.jsx("button",{className:"adm-btn-del",onClick:()=>ut(U),children:"✕"})]},U))]})]})]}),c.jsx("div",{style:{marginBottom:"20px"},children:c.jsxs(b,{icon:"🖼️",title:"Gallery",count:B.length,children:[c.jsxs("label",{className:"adm-file-zone",children:[c.jsx("input",{type:"file",accept:"image/*",onChange:S=>k(S.target.files[0])}),c.jsx("span",{className:"adm-file-zone-label",children:Q?c.jsxs("span",{className:"adm-file-selected",children:["✅ ",Q.name]}):c.jsxs(c.Fragment,{children:["📁 ",c.jsx("strong",{children:"Click to choose"})," an image to upload"]})})]}),c.jsx("button",{className:"adm-btn-gold",onClick:w,disabled:!Q,style:{opacity:Q?1:.5,cursor:Q?"pointer":"not-allowed"},children:"⬆ Upload Image"}),c.jsxs("div",{className:"adm-gallery-grid",children:[B.length===0&&c.jsx("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:"20px",color:"var(--muted)",fontSize:"0.83rem"},children:"No images uploaded yet"}),B.map((S,U)=>c.jsxs("div",{className:"adm-gallery-item",children:[c.jsx("img",{src:S,alt:`gallery-${U}`}),c.jsx("button",{className:"adm-gallery-del",onClick:()=>G(U),children:"✕"})]},U))]})]})}),c.jsxs(b,{icon:"🎓",title:"Admission Requests",count:de.length,children:[c.jsxs("div",{className:"adm-search-row",children:[c.jsx("input",{className:"adm-input",type:"text",placeholder:"🔍  Search student by name...",value:K,onChange:S=>se(S.target.value)}),c.jsx("button",{className:"adm-btn-gold",onClick:he,children:"⬇ Export CSV"})]}),c.jsx("div",{className:"adm-table-wrap",children:c.jsxs("table",{className:"adm-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"#"}),c.jsx("th",{children:"Name"}),c.jsx("th",{children:"Email"}),c.jsx("th",{children:"Phone"}),c.jsx("th",{children:"Message"})]})}),c.jsx("tbody",{children:de.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"28px",color:"var(--muted)"},children:"No admission requests found"})}):de.map((S,U)=>c.jsxs("tr",{children:[c.jsx("td",{className:"muted",children:U+1}),c.jsx("td",{children:c.jsx("strong",{children:S.name})}),c.jsx("td",{className:"muted",children:S.email}),c.jsx("td",{className:"muted",children:S.phone}),c.jsx("td",{children:S.message||c.jsx("span",{style:{color:"var(--muted)"},children:"—"})})]},U))})]})})]})]})]})]})}function cv(){return c.jsxs(D0,{children:[c.jsx(G0,{}),c.jsxs(c0,{children:[c.jsx(_t,{path:"/",element:c.jsx(Z0,{})}),c.jsx(_t,{path:"/about",element:c.jsx(K0,{})}),c.jsx(_t,{path:"/academics",element:c.jsx(J0,{})}),c.jsx(_t,{path:"/gallery",element:c.jsx($0,{})}),c.jsx(_t,{path:"/contact",element:c.jsx(F0,{})}),c.jsx(_t,{path:"/teachers",element:c.jsx(P0,{})}),c.jsx(_t,{path:"/management",element:c.jsx(tv,{})}),c.jsx(_t,{path:"/success",element:c.jsx(lv,{})}),c.jsx(_t,{path:"/admin",element:c.jsx(nv,{})}),c.jsx(_t,{path:"/admin-dashboard",element:c.jsx(uv,{})})]}),c.jsx(k0,{}),c.jsx(Q0,{})]})}og.createRoot(document.getElementById("root")).render(c.jsx(om.StrictMode,{children:c.jsx(cv,{})}));
