(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))s(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function f(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(m){if(m.ep)return;m.ep=!0;const p=f(m);fetch(m.href,p)}})();function fm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Tr={exports:{}},Rn={};var $d;function tg(){if($d)return Rn;$d=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(s,m,p){var g=null;if(p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),"key"in m){p={};for(var M in m)M!=="key"&&(p[M]=m[M])}else p=m;return m=p.ref,{$$typeof:r,type:s,key:g,ref:m!==void 0?m:null,props:p}}return Rn.Fragment=d,Rn.jsx=f,Rn.jsxs=f,Rn}var Wd;function ag(){return Wd||(Wd=1,Tr.exports=tg()),Tr.exports}var u=ag(),wr={exports:{}},ee={};var Fd;function lg(){if(Fd)return ee;Fd=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),q=Symbol.iterator;function L(b){return b===null||typeof b!="object"?null:(b=q&&b[q]||b["@@iterator"],typeof b=="function"?b:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,H={};function k(b,S,U){this.props=b,this.context=S,this.refs=H,this.updater=U||Y}k.prototype.isReactComponent={},k.prototype.setState=function(b,S){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,S,"setState")},k.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function Q(){}Q.prototype=k.prototype;function K(b,S,U){this.props=b,this.context=S,this.refs=H,this.updater=U||Y}var se=K.prototype=new Q;se.constructor=K,B(se,k.prototype),se.isPureReactComponent=!0;var ye=Array.isArray;function Ae(){}var P={H:null,A:null,T:null,S:null},Ne=Object.prototype.hasOwnProperty;function De(b,S,U){var X=U.ref;return{$$typeof:r,type:b,key:S,ref:X!==void 0?X:null,props:U}}function We(b,S){return De(b.type,S,b.props)}function it(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function Xe(b){var S={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(U){return S[U]})}var qt=/\/+/g;function Ot(b,S){return typeof b=="object"&&b!==null&&b.key!=null?Xe(""+b.key):S.toString(36)}function ut(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Ae,Ae):(b.status="pending",b.then(function(S){b.status==="pending"&&(b.status="fulfilled",b.value=S)},function(S){b.status==="pending"&&(b.status="rejected",b.reason=S)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function R(b,S,U,X,$){var I=typeof b;(I==="undefined"||I==="boolean")&&(b=null);var le=!1;if(b===null)le=!0;else switch(I){case"bigint":case"string":case"number":le=!0;break;case"object":switch(b.$$typeof){case r:case d:le=!0;break;case O:return le=b._init,R(le(b._payload),S,U,X,$)}}if(le)return $=$(b),le=X===""?"."+Ot(b,0):X,ye($)?(U="",le!=null&&(U=le.replace(qt,"$&/")+"/"),R($,S,U,"",function(Ll){return Ll})):$!=null&&(it($)&&($=We($,U+($.key==null||b&&b.key===$.key?"":(""+$.key).replace(qt,"$&/")+"/")+le)),S.push($)),1;le=0;var ke=X===""?".":X+":";if(ye(b))for(var Re=0;Re<b.length;Re++)X=b[Re],I=ke+Ot(X,Re),le+=R(X,S,U,I,$);else if(Re=L(b),typeof Re=="function")for(b=Re.call(b),Re=0;!(X=b.next()).done;)X=X.value,I=ke+Ot(X,Re++),le+=R(X,S,U,I,$);else if(I==="object"){if(typeof b.then=="function")return R(ut(b),S,U,X,$);throw S=String(b),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return le}function G(b,S,U){if(b==null)return b;var X=[],$=0;return R(b,X,"","",function(I){return S.call(U,I,$++)}),X}function F(b){if(b._status===-1){var S=b._result;S=S(),S.then(function(U){(b._status===0||b._status===-1)&&(b._status=1,b._result=U)},function(U){(b._status===0||b._status===-1)&&(b._status=2,b._result=U)}),b._status===-1&&(b._status=0,b._result=S)}if(b._status===1)return b._result.default;throw b._result}var pe=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},de={map:G,forEach:function(b,S,U){G(b,function(){S.apply(this,arguments)},U)},count:function(b){var S=0;return G(b,function(){S++}),S},toArray:function(b){return G(b,function(S){return S})||[]},only:function(b){if(!it(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ee.Activity=T,ee.Children=de,ee.Component=k,ee.Fragment=f,ee.Profiler=m,ee.PureComponent=K,ee.StrictMode=s,ee.Suspense=j,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ee.__COMPILER_RUNTIME={__proto__:null,c:function(b){return P.H.useMemoCache(b)}},ee.cache=function(b){return function(){return b.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(b,S,U){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var X=B({},b.props),$=b.key;if(S!=null)for(I in S.key!==void 0&&($=""+S.key),S)!Ne.call(S,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&S.ref===void 0||(X[I]=S[I]);var I=arguments.length-2;if(I===1)X.children=U;else if(1<I){for(var le=Array(I),ke=0;ke<I;ke++)le[ke]=arguments[ke+2];X.children=le}return De(b.type,$,X)},ee.createContext=function(b){return b={$$typeof:g,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:p,_context:b},b},ee.createElement=function(b,S,U){var X,$={},I=null;if(S!=null)for(X in S.key!==void 0&&(I=""+S.key),S)Ne.call(S,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&($[X]=S[X]);var le=arguments.length-2;if(le===1)$.children=U;else if(1<le){for(var ke=Array(le),Re=0;Re<le;Re++)ke[Re]=arguments[Re+2];$.children=ke}if(b&&b.defaultProps)for(X in le=b.defaultProps,le)$[X]===void 0&&($[X]=le[X]);return De(b,I,$)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(b){return{$$typeof:M,render:b}},ee.isValidElement=it,ee.lazy=function(b){return{$$typeof:O,_payload:{_status:-1,_result:b},_init:F}},ee.memo=function(b,S){return{$$typeof:y,type:b,compare:S===void 0?null:S}},ee.startTransition=function(b){var S=P.T,U={};P.T=U;try{var X=b(),$=P.S;$!==null&&$(U,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Ae,pe)}catch(I){pe(I)}finally{S!==null&&U.types!==null&&(S.types=U.types),P.T=S}},ee.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ee.use=function(b){return P.H.use(b)},ee.useActionState=function(b,S,U){return P.H.useActionState(b,S,U)},ee.useCallback=function(b,S){return P.H.useCallback(b,S)},ee.useContext=function(b){return P.H.useContext(b)},ee.useDebugValue=function(){},ee.useDeferredValue=function(b,S){return P.H.useDeferredValue(b,S)},ee.useEffect=function(b,S){return P.H.useEffect(b,S)},ee.useEffectEvent=function(b){return P.H.useEffectEvent(b)},ee.useId=function(){return P.H.useId()},ee.useImperativeHandle=function(b,S,U){return P.H.useImperativeHandle(b,S,U)},ee.useInsertionEffect=function(b,S){return P.H.useInsertionEffect(b,S)},ee.useLayoutEffect=function(b,S){return P.H.useLayoutEffect(b,S)},ee.useMemo=function(b,S){return P.H.useMemo(b,S)},ee.useOptimistic=function(b,S){return P.H.useOptimistic(b,S)},ee.useReducer=function(b,S,U){return P.H.useReducer(b,S,U)},ee.useRef=function(b){return P.H.useRef(b)},ee.useState=function(b){return P.H.useState(b)},ee.useSyncExternalStore=function(b,S,U){return P.H.useSyncExternalStore(b,S,U)},ee.useTransition=function(){return P.H.useTransition()},ee.version="19.2.3",ee}var Id;function Lr(){return Id||(Id=1,wr.exports=lg()),wr.exports}var z=Lr();const qr=fm(z);var Mr={exports:{}},_n={},Or={exports:{}},Dr={};var Pd;function ng(){return Pd||(Pd=1,(function(r){function d(R,G){var F=R.length;R.push(G);e:for(;0<F;){var pe=F-1>>>1,de=R[pe];if(0<m(de,G))R[pe]=G,R[F]=de,F=pe;else break e}}function f(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var G=R[0],F=R.pop();if(F!==G){R[0]=F;e:for(var pe=0,de=R.length,b=de>>>1;pe<b;){var S=2*(pe+1)-1,U=R[S],X=S+1,$=R[X];if(0>m(U,F))X<de&&0>m($,U)?(R[pe]=$,R[X]=F,pe=X):(R[pe]=U,R[S]=F,pe=S);else if(X<de&&0>m($,F))R[pe]=$,R[X]=F,pe=X;else break e}}return G}function m(R,G){var F=R.sortIndex-G.sortIndex;return F!==0?F:R.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var g=Date,M=g.now();r.unstable_now=function(){return g.now()-M}}var j=[],y=[],O=1,T=null,q=3,L=!1,Y=!1,B=!1,H=!1,k=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function se(R){for(var G=f(y);G!==null;){if(G.callback===null)s(y);else if(G.startTime<=R)s(y),G.sortIndex=G.expirationTime,d(j,G);else break;G=f(y)}}function ye(R){if(B=!1,se(R),!Y)if(f(j)!==null)Y=!0,Ae||(Ae=!0,Xe());else{var G=f(y);G!==null&&ut(ye,G.startTime-R)}}var Ae=!1,P=-1,Ne=5,De=-1;function We(){return H?!0:!(r.unstable_now()-De<Ne)}function it(){if(H=!1,Ae){var R=r.unstable_now();De=R;var G=!0;try{e:{Y=!1,B&&(B=!1,Q(P),P=-1),L=!0;var F=q;try{t:{for(se(R),T=f(j);T!==null&&!(T.expirationTime>R&&We());){var pe=T.callback;if(typeof pe=="function"){T.callback=null,q=T.priorityLevel;var de=pe(T.expirationTime<=R);if(R=r.unstable_now(),typeof de=="function"){T.callback=de,se(R),G=!0;break t}T===f(j)&&s(j),se(R)}else s(j);T=f(j)}if(T!==null)G=!0;else{var b=f(y);b!==null&&ut(ye,b.startTime-R),G=!1}}break e}finally{T=null,q=F,L=!1}G=void 0}}finally{G?Xe():Ae=!1}}}var Xe;if(typeof K=="function")Xe=function(){K(it)};else if(typeof MessageChannel<"u"){var qt=new MessageChannel,Ot=qt.port2;qt.port1.onmessage=it,Xe=function(){Ot.postMessage(null)}}else Xe=function(){k(it,0)};function ut(R,G){P=k(function(){R(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return q},r.unstable_next=function(R){switch(q){case 1:case 2:case 3:var G=3;break;default:G=q}var F=q;q=G;try{return R()}finally{q=F}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=q;q=R;try{return G()}finally{q=F}},r.unstable_scheduleCallback=function(R,G,F){var pe=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,R){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=F+de,R={id:O++,callback:G,priorityLevel:R,startTime:F,expirationTime:de,sortIndex:-1},F>pe?(R.sortIndex=F,d(y,R),f(j)===null&&R===f(y)&&(B?(Q(P),P=-1):B=!0,ut(ye,F-pe))):(R.sortIndex=de,d(j,R),Y||L||(Y=!0,Ae||(Ae=!0,Xe()))),R},r.unstable_shouldYield=We,r.unstable_wrapCallback=function(R){var G=q;return function(){var F=q;q=G;try{return R.apply(this,arguments)}finally{q=F}}}})(Dr)),Dr}var em;function ig(){return em||(em=1,Or.exports=ng()),Or.exports}var Rr={exports:{}},$e={};var tm;function ug(){if(tm)return $e;tm=1;var r=Lr();function d(j){var y="https://react.dev/errors/"+j;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)y+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+j+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(j,y,O){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:T==null?null:""+T,children:j,containerInfo:y,implementation:O}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(j,y){if(j==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$e.createPortal=function(j,y){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(d(299));return p(j,y,null,O)},$e.flushSync=function(j){var y=g.T,O=s.p;try{if(g.T=null,s.p=2,j)return j()}finally{g.T=y,s.p=O,s.d.f()}},$e.preconnect=function(j,y){typeof j=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(j,y))},$e.prefetchDNS=function(j){typeof j=="string"&&s.d.D(j)},$e.preinit=function(j,y){if(typeof j=="string"&&y&&typeof y.as=="string"){var O=y.as,T=M(O,y.crossOrigin),q=typeof y.integrity=="string"?y.integrity:void 0,L=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;O==="style"?s.d.S(j,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:T,integrity:q,fetchPriority:L}):O==="script"&&s.d.X(j,{crossOrigin:T,integrity:q,fetchPriority:L,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},$e.preinitModule=function(j,y){if(typeof j=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var O=M(y.as,y.crossOrigin);s.d.M(j,{crossOrigin:O,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(j)},$e.preload=function(j,y){if(typeof j=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var O=y.as,T=M(O,y.crossOrigin);s.d.L(j,O,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},$e.preloadModule=function(j,y){if(typeof j=="string")if(y){var O=M(y.as,y.crossOrigin);s.d.m(j,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:O,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(j)},$e.requestFormReset=function(j){s.d.r(j)},$e.unstable_batchedUpdates=function(j,y){return j(y)},$e.useFormState=function(j,y,O){return g.H.useFormState(j,y,O)},$e.useFormStatus=function(){return g.H.useHostTransitionStatus()},$e.version="19.2.3",$e}var am;function cg(){if(am)return Rr.exports;am=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),Rr.exports=ug(),Rr.exports}var lm;function rg(){if(lm)return _n;lm=1;var r=ig(),d=Lr(),f=cg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(p(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return j(n),e;if(i===l)return j(n),t;i=i.sibling}throw Error(s(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,o=n.child;o;){if(o===a){c=!0,a=n,l=i;break}if(o===l){c=!0,l=n,a=i;break}o=o.sibling}if(!c){for(o=i.child;o;){if(o===a){c=!0,a=i,l=n;break}if(o===l){c=!0,l=i,a=n;break}o=o.sibling}if(!c)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function O(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=O(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,q=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),K=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),De=Symbol.for("react.activity"),We=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=it&&e[it]||e["@@iterator"],typeof e=="function"?e:null)}var qt=Symbol.for("react.client.reference");function Ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case k:return"Profiler";case H:return"StrictMode";case ye:return"Suspense";case Ae:return"SuspenseList";case De:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case K:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:Ot(e.type)||"Memo";case Ne:t=e._payload,e=e._init;try{return Ot(e(t))}catch{}}return null}var ut=Array.isArray,R=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],de=-1;function b(e){return{current:e}}function S(e){0>de||(e.current=pe[de],pe[de]=null,de--)}function U(e,t){de++,pe[de]=e.current,e.current=t}var X=b(null),$=b(null),I=b(null),le=b(null);function ke(e,t){switch(U(I,t),U($,e),U(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yd(t),e=bd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(X),U(X,e)}function Re(){S(X),S($),S(I)}function Ll(e){e.memoizedState!==null&&U(le,e);var t=X.current,a=bd(t,e.type);t!==a&&(U($,e),U(X,a))}function qn(e){$.current===e&&(S(X),S($)),le.current===e&&(S(le),wn._currentValue=F)}var su,Zr;function _a(e){if(su===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);su=t&&t[1]||"",Zr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+su+e+Zr}var ou=!1;function fu(e,t){if(!e||ou)return"";ou=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(w){var A=w}Reflect.construct(e,[],C)}else{try{C.call()}catch(w){A=w}e.call(C.prototype)}}else{try{throw Error()}catch(w){A=w}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(w){if(w&&A&&typeof w.stack=="string")return[w.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],o=i[1];if(c&&o){var h=c.split(`
`),E=o.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<E.length&&!E[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===E.length)for(l=h.length-1,n=E.length-1;1<=l&&0<=n&&h[l]!==E[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==E[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==E[n]){var D=`
`+h[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=n);break}}}finally{ou=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_a(a):""}function Rm(e,t){switch(e.tag){case 26:case 27:case 5:return _a(e.type);case 16:return _a("Lazy");case 13:return e.child!==t&&t!==null?_a("Suspense Fallback"):_a("Suspense");case 19:return _a("SuspenseList");case 0:case 15:return fu(e.type,!1);case 11:return fu(e.type.render,!1);case 1:return fu(e.type,!0);case 31:return _a("Activity");default:return""}}function Kr(e){try{var t="",a=null;do t+=Rm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var du=Object.prototype.hasOwnProperty,mu=r.unstable_scheduleCallback,hu=r.unstable_cancelCallback,_m=r.unstable_shouldYield,Cm=r.unstable_requestPaint,ct=r.unstable_now,Um=r.unstable_getCurrentPriorityLevel,Jr=r.unstable_ImmediatePriority,$r=r.unstable_UserBlockingPriority,Yn=r.unstable_NormalPriority,Hm=r.unstable_LowPriority,Wr=r.unstable_IdlePriority,Bm=r.log,Lm=r.unstable_setDisableYieldValue,ql=null,rt=null;function ca(e){if(typeof Bm=="function"&&Lm(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(ql,e)}catch{}}var st=Math.clz32?Math.clz32:Gm,qm=Math.log,Ym=Math.LN2;function Gm(e){return e>>>=0,e===0?32:31-(qm(e)/Ym|0)|0}var Gn=256,Xn=262144,kn=4194304;function Ca(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=Ca(l):(c&=o,c!==0?n=Ca(c):a||(a=o&~e,a!==0&&(n=Ca(a))))):(o=l&~i,o!==0?n=Ca(o):c!==0?n=Ca(c):a||(a=l&~e,a!==0&&(n=Ca(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fr(){var e=kn;return kn<<=1,(kn&62914560)===0&&(kn=4194304),e}function pu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Gl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function km(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,h=e.expirationTimes,E=e.hiddenUpdates;for(a=c&~a;0<a;){var D=31-st(a),C=1<<D;o[D]=0,h[D]=-1;var A=E[D];if(A!==null)for(E[D]=null,D=0;D<A.length;D++){var w=A[D];w!==null&&(w.lane&=-536870913)}a&=~C}l!==0&&Ir(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Ir(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-st(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Pr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-st(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function es(e,t){var a=t&-t;return a=(a&42)!==0?1:gu(a),(a&(e.suspendedLanes|t))!==0?0:a}function gu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ts(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Xd(e.type))}function as(e,t){var a=G.p;try{return G.p=e,t()}finally{G.p=a}}var ra=Math.random().toString(36).slice(2),Qe="__reactFiber$"+ra,Ie="__reactProps$"+ra,Pa="__reactContainer$"+ra,yu="__reactEvents$"+ra,Qm="__reactListeners$"+ra,Vm="__reactHandles$"+ra,ls="__reactResources$"+ra,Xl="__reactMarker$"+ra;function bu(e){delete e[Qe],delete e[Ie],delete e[yu],delete e[Qm],delete e[Vm]}function el(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Pa]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ad(e);e!==null;){if(a=e[Qe])return a;e=Ad(e)}return t}e=a,a=e.parentNode}return null}function tl(e){if(e=e[Qe]||e[Pa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function kl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function al(e){var t=e[ls];return t||(t=e[ls]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Xl]=!0}var ns=new Set,is={};function Ua(e,t){ll(e,t),ll(e+"Capture",t)}function ll(e,t){for(is[e]=t,e=0;e<t.length;e++)ns.add(t[e])}var Zm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),us={},cs={};function Km(e){return du.call(cs,e)?!0:du.call(us,e)?!1:Zm.test(e)?cs[e]=!0:(us[e]=!0,!1)}function Vn(e,t,a){if(Km(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xu(e){if(!e._valueTracker){var t=rs(e)?"checked":"value";e._valueTracker=Jm(e,t,""+e[t])}}function ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=rs(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $m=/[\n"\\]/g;function yt(e){return e.replace($m,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Su(e,t,a,l,n,i,c,o){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?ju(e,c,vt(t)):a!=null?ju(e,c,vt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+vt(o):e.removeAttribute("name")}function os(e,t,a,l,n,i,c,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){xu(e);return}a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),xu(e)}function ju(e,t,a){t==="number"&&Kn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function nl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function fs(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function ds(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(ut(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),xu(e)}function il(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ms(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Wm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function hs(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&ms(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&ms(e,i,t[i])}function Nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jn(e){return Im.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Eu=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ul=null,cl=null;function ps(e){var t=tl(e);if(t&&(e=t.stateNode)){var a=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(Su(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ie]||null;if(!n)throw Error(s(90));Su(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&ss(l)}break e;case"textarea":fs(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&nl(e,!!a.multiple,t,!1)}}}var Au=!1;function gs(e,t,a){if(Au)return e(t,a);Au=!0;try{var l=e(t);return l}finally{if(Au=!1,(ul!==null||cl!==null)&&(Ui(),ul&&(t=ul,e=cl,cl=ul=null,ps(t),e)))for(t=0;t<e.length;t++)ps(e[t])}}function Ql(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ie]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(Xt)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{Tu=!1}var sa=null,wu=null,$n=null;function vs(){if($n)return $n;var e,t=wu,a=t.length,l,n="value"in sa?sa.value:sa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return $n=n.slice(e,1<l?1-l:void 0)}function Wn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fn(){return!0}function ys(){return!1}function Pe(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fn:ys,this.isPropagationStopped=ys,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fn)},persist:function(){},isPersistent:Fn}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},In=Pe(Ha),Zl=T({},Ha,{view:0,detail:0}),Pm=Pe(Zl),Mu,Ou,Kl,Pn=T({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kl&&(Kl&&e.type==="mousemove"?(Mu=e.screenX-Kl.screenX,Ou=e.screenY-Kl.screenY):Ou=Mu=0,Kl=e),Mu)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),bs=Pe(Pn),eh=T({},Pn,{dataTransfer:0}),th=Pe(eh),ah=T({},Zl,{relatedTarget:0}),Du=Pe(ah),lh=T({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=Pe(lh),ih=T({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uh=Pe(ih),ch=T({},Ha,{data:0}),xs=Pe(ch),rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oh[e])?!!t[e]:!1}function Ru(){return fh}var dh=T({},Zl,{key:function(e){if(e.key){var t=rh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mh=Pe(dh),hh=T({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ss=Pe(hh),ph=T({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),gh=Pe(ph),vh=T({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),yh=Pe(vh),bh=T({},Pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xh=Pe(bh),Sh=T({},Ha,{newState:0,oldState:0}),jh=Pe(Sh),Nh=[9,13,27,32],_u=Xt&&"CompositionEvent"in window,Jl=null;Xt&&"documentMode"in document&&(Jl=document.documentMode);var Eh=Xt&&"TextEvent"in window&&!Jl,js=Xt&&(!_u||Jl&&8<Jl&&11>=Jl),Ns=" ",Es=!1;function zs(e,t){switch(e){case"keyup":return Nh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function As(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rl=!1;function zh(e,t){switch(e){case"compositionend":return As(t);case"keypress":return t.which!==32?null:(Es=!0,Ns);case"textInput":return e=t.data,e===Ns&&Es?null:e;default:return null}}function Ah(e,t){if(rl)return e==="compositionend"||!_u&&zs(e,t)?(e=vs(),$n=wu=sa=null,rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return js&&t.locale!=="ko"?null:t.data;default:return null}}var Th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Th[e.type]:t==="textarea"}function ws(e,t,a,l){ul?cl?cl.push(l):cl=[l]:ul=l,t=Xi(t,"onChange"),0<t.length&&(a=new In("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var $l=null,Wl=null;function wh(e){dd(e,0)}function ei(e){var t=kl(e);if(ss(t))return e}function Ms(e,t){if(e==="change")return t}var Os=!1;if(Xt){var Cu;if(Xt){var Uu="oninput"in document;if(!Uu){var Ds=document.createElement("div");Ds.setAttribute("oninput","return;"),Uu=typeof Ds.oninput=="function"}Cu=Uu}else Cu=!1;Os=Cu&&(!document.documentMode||9<document.documentMode)}function Rs(){$l&&($l.detachEvent("onpropertychange",_s),Wl=$l=null)}function _s(e){if(e.propertyName==="value"&&ei(Wl)){var t=[];ws(t,Wl,e,zu(e)),gs(wh,t)}}function Mh(e,t,a){e==="focusin"?(Rs(),$l=t,Wl=a,$l.attachEvent("onpropertychange",_s)):e==="focusout"&&Rs()}function Oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ei(Wl)}function Dh(e,t){if(e==="click")return ei(t)}function Rh(e,t){if(e==="input"||e==="change")return ei(t)}function _h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:_h;function Fl(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!du.call(t,n)||!ot(e[n],t[n]))return!1}return!0}function Cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Us(e,t){var a=Cs(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cs(a)}}function Hs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Kn(e.document)}return t}function Hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ch=Xt&&"documentMode"in document&&11>=document.documentMode,sl=null,Bu=null,Il=null,Lu=!1;function Ls(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||sl==null||sl!==Kn(l)||(l=sl,"selectionStart"in l&&Hu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Il&&Fl(Il,l)||(Il=l,l=Xi(Bu,"onSelect"),0<l.length&&(t=new In("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=sl)))}function Ba(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ol={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},qu={},qs={};Xt&&(qs=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function La(e){if(qu[e])return qu[e];if(!ol[e])return e;var t=ol[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in qs)return qu[e]=t[a];return e}var Ys=La("animationend"),Gs=La("animationiteration"),Xs=La("animationstart"),Uh=La("transitionrun"),Hh=La("transitionstart"),Bh=La("transitioncancel"),ks=La("transitionend"),Qs=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function Dt(e,t){Qs.set(e,t),Ua(t,[e])}var ti=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],fl=0,Gu=0;function ai(){for(var e=fl,t=Gu=fl=0;t<e;){var a=bt[t];bt[t++]=null;var l=bt[t];bt[t++]=null;var n=bt[t];bt[t++]=null;var i=bt[t];if(bt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&Vs(a,n,i)}}function li(e,t,a,l){bt[fl++]=e,bt[fl++]=t,bt[fl++]=a,bt[fl++]=l,Gu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Xu(e,t,a,l){return li(e,t,a,l),ni(e)}function qa(e,t){return li(e,null,null,t),ni(e)}function Vs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-st(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ni(e){if(50<Sn)throw Sn=0,Fc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var dl={};function Lh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,a,l){return new Lh(e,t,a,l)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kt(e,t){var a=e.alternate;return a===null?(a=ft(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")ku(e)&&(c=1);else if(typeof e=="string")c=kp(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case De:return e=ft(31,a,t,n),e.elementType=De,e.lanes=i,e;case B:return Ya(a.children,n,i,t);case H:c=8,n|=24;break;case k:return e=ft(12,a,t,n|2),e.elementType=k,e.lanes=i,e;case ye:return e=ft(13,a,t,n),e.elementType=ye,e.lanes=i,e;case Ae:return e=ft(19,a,t,n),e.elementType=Ae,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:c=10;break e;case Q:c=9;break e;case se:c=11;break e;case P:c=14;break e;case Ne:c=16,l=null;break e}c=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=ft(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ya(e,t,a,l){return e=ft(7,e,l,t),e.lanes=a,e}function Qu(e,t,a){return e=ft(6,e,null,t),e.lanes=a,e}function Ks(e){var t=ft(18,null,null,0);return t.stateNode=e,t}function Vu(e,t,a){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Js=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var a=Js.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Kr(t)},Js.set(e,t),t)}return{value:e,source:t,stack:Kr(t)}}var ml=[],hl=0,ui=null,Pl=0,St=[],jt=0,oa=null,Ut=1,Ht="";function Qt(e,t){ml[hl++]=Pl,ml[hl++]=ui,ui=e,Pl=t}function $s(e,t,a){St[jt++]=Ut,St[jt++]=Ht,St[jt++]=oa,oa=e;var l=Ut;e=Ht;var n=32-st(l)-1;l&=~(1<<n),a+=1;var i=32-st(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Ut=1<<32-st(t)+n|a<<n|l,Ht=i+e}else Ut=1<<i|a<<n|l,Ht=e}function Zu(e){e.return!==null&&(Qt(e,1),$s(e,1,0))}function Ku(e){for(;e===ui;)ui=ml[--hl],ml[hl]=null,Pl=ml[--hl],ml[hl]=null;for(;e===oa;)oa=St[--jt],St[jt]=null,Ht=St[--jt],St[jt]=null,Ut=St[--jt],St[jt]=null}function Ws(e,t){St[jt++]=Ut,St[jt++]=Ht,St[jt++]=oa,Ut=t.id,Ht=t.overflow,oa=e}var Ve=null,Ee=null,re=!1,fa=null,Nt=!1,Ju=Error(s(519));function da(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw en(xt(t,e)),Ju}function Fs(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Qe]=e,t[Ie]=l,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<Nn.length;a++)ie(Nn[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),os(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),ds(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||gd(t.textContent,a)?(l.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),l.onScroll!=null&&ie("scroll",t),l.onScrollEnd!=null&&ie("scrollend",t),l.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||da(e,!0)}function Is(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:Ve=Ve.return}}function pl(e){if(e!==Ve)return!1;if(!re)return Is(e),re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||dr(e.type,e.memoizedProps)),a=!a),a&&Ee&&da(e),Is(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ee=zd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ee=zd(e)}else t===27?(t=Ee,Aa(e.type)?(e=vr,vr=null,Ee=e):Ee=t):Ee=Ve?zt(e.stateNode.nextSibling):null;return!0}function Ga(){Ee=Ve=null,re=!1}function $u(){var e=fa;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),fa=null),e}function en(e){fa===null?fa=[e]:fa.push(e)}var Wu=b(null),Xa=null,Vt=null;function ma(e,t,a){U(Wu,t._currentValue),t._currentValue=a}function Zt(e){e._currentValue=Wu.current,S(Wu)}function Fu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Iu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var h=0;h<t.length;h++)if(o.context===t[h]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),Fu(i.return,a,e),l||(c=null);break e}i=o.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(s(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),Fu(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function gl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var o=n.type;ot(n.pendingProps.value,c.value)||(e!==null?e.push(o):e=[o])}}else if(n===le.current){if(c=n.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(wn):e=[wn])}n=n.return}e!==null&&Iu(t,e,a,l),t.flags|=262144}function ci(e){for(e=e.firstContext;e!==null;){if(!ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ka(e){Xa=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Ps(Xa,e)}function ri(e,t){return Xa===null&&ka(e),Ps(e,t)}function Ps(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Vt===null){if(e===null)throw Error(s(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return a}var qh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Yh=r.unstable_scheduleCallback,Gh=r.unstable_NormalPriority,Ue={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new qh,data:new Map,refCount:0}}function tn(e){e.refCount--,e.refCount===0&&Yh(Gh,function(){e.controller.abort()})}var an=null,ec=0,vl=0,yl=null;function Xh(e,t){if(an===null){var a=an=[];ec=0,vl=lr(),yl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ec++,t.then(eo,eo),t}function eo(){if(--ec===0&&an!==null){yl!==null&&(yl.status="fulfilled");var e=an;an=null,vl=0,yl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var to=R.S;R.S=function(e,t){Yf=ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Xh(e,t),to!==null&&to(e,t)};var Qa=b(null);function tc(){var e=Qa.current;return e!==null?e:je.pooledCache}function si(e,t){t===null?U(Qa,Qa.current):U(Qa,t.pool)}function ao(){var e=tc();return e===null?null:{parent:Ue._currentValue,pool:e}}var bl=Error(s(460)),ac=Error(s(474)),oi=Error(s(542)),fi={then:function(){}};function lo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function no(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uo(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uo(e),e}throw Za=t,bl}}function Va(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Za=a,bl):a}}var Za=null;function io(){if(Za===null)throw Error(s(459));var e=Za;return Za=null,e}function uo(e){if(e===bl||e===oi)throw Error(s(483))}var xl=null,ln=0;function di(e){var t=ln;return ln+=1,xl===null&&(xl=[]),no(xl,e,t)}function nn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function mi(e,t){throw t.$$typeof===q?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function co(e){function t(x,v){if(e){var N=x.deletions;N===null?(x.deletions=[v],x.flags|=16):N.push(v)}}function a(x,v){if(!e)return null;for(;v!==null;)t(x,v),v=v.sibling;return null}function l(x){for(var v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function n(x,v){return x=kt(x,v),x.index=0,x.sibling=null,x}function i(x,v,N){return x.index=N,e?(N=x.alternate,N!==null?(N=N.index,N<v?(x.flags|=67108866,v):N):(x.flags|=67108866,v)):(x.flags|=1048576,v)}function c(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function o(x,v,N,_){return v===null||v.tag!==6?(v=Qu(N,x.mode,_),v.return=x,v):(v=n(v,N),v.return=x,v)}function h(x,v,N,_){var J=N.type;return J===B?D(x,v,N.props.children,_,N.key):v!==null&&(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ne&&Va(J)===v.type)?(v=n(v,N.props),nn(v,N),v.return=x,v):(v=ii(N.type,N.key,N.props,null,x.mode,_),nn(v,N),v.return=x,v)}function E(x,v,N,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==N.containerInfo||v.stateNode.implementation!==N.implementation?(v=Vu(N,x.mode,_),v.return=x,v):(v=n(v,N.children||[]),v.return=x,v)}function D(x,v,N,_,J){return v===null||v.tag!==7?(v=Ya(N,x.mode,_,J),v.return=x,v):(v=n(v,N),v.return=x,v)}function C(x,v,N){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Qu(""+v,x.mode,N),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case L:return N=ii(v.type,v.key,v.props,null,x.mode,N),nn(N,v),N.return=x,N;case Y:return v=Vu(v,x.mode,N),v.return=x,v;case Ne:return v=Va(v),C(x,v,N)}if(ut(v)||Xe(v))return v=Ya(v,x.mode,N,null),v.return=x,v;if(typeof v.then=="function")return C(x,di(v),N);if(v.$$typeof===K)return C(x,ri(x,v),N);mi(x,v)}return null}function A(x,v,N,_){var J=v!==null?v.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return J!==null?null:o(x,v,""+N,_);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case L:return N.key===J?h(x,v,N,_):null;case Y:return N.key===J?E(x,v,N,_):null;case Ne:return N=Va(N),A(x,v,N,_)}if(ut(N)||Xe(N))return J!==null?null:D(x,v,N,_,null);if(typeof N.then=="function")return A(x,v,di(N),_);if(N.$$typeof===K)return A(x,v,ri(x,N),_);mi(x,N)}return null}function w(x,v,N,_,J){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return x=x.get(N)||null,o(v,x,""+_,J);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case L:return x=x.get(_.key===null?N:_.key)||null,h(v,x,_,J);case Y:return x=x.get(_.key===null?N:_.key)||null,E(v,x,_,J);case Ne:return _=Va(_),w(x,v,N,_,J)}if(ut(_)||Xe(_))return x=x.get(N)||null,D(v,x,_,J,null);if(typeof _.then=="function")return w(x,v,N,di(_),J);if(_.$$typeof===K)return w(x,v,N,ri(v,_),J);mi(v,_)}return null}function V(x,v,N,_){for(var J=null,oe=null,Z=v,ae=v=0,ce=null;Z!==null&&ae<N.length;ae++){Z.index>ae?(ce=Z,Z=null):ce=Z.sibling;var fe=A(x,Z,N[ae],_);if(fe===null){Z===null&&(Z=ce);break}e&&Z&&fe.alternate===null&&t(x,Z),v=i(fe,v,ae),oe===null?J=fe:oe.sibling=fe,oe=fe,Z=ce}if(ae===N.length)return a(x,Z),re&&Qt(x,ae),J;if(Z===null){for(;ae<N.length;ae++)Z=C(x,N[ae],_),Z!==null&&(v=i(Z,v,ae),oe===null?J=Z:oe.sibling=Z,oe=Z);return re&&Qt(x,ae),J}for(Z=l(Z);ae<N.length;ae++)ce=w(Z,x,ae,N[ae],_),ce!==null&&(e&&ce.alternate!==null&&Z.delete(ce.key===null?ae:ce.key),v=i(ce,v,ae),oe===null?J=ce:oe.sibling=ce,oe=ce);return e&&Z.forEach(function(Da){return t(x,Da)}),re&&Qt(x,ae),J}function W(x,v,N,_){if(N==null)throw Error(s(151));for(var J=null,oe=null,Z=v,ae=v=0,ce=null,fe=N.next();Z!==null&&!fe.done;ae++,fe=N.next()){Z.index>ae?(ce=Z,Z=null):ce=Z.sibling;var Da=A(x,Z,fe.value,_);if(Da===null){Z===null&&(Z=ce);break}e&&Z&&Da.alternate===null&&t(x,Z),v=i(Da,v,ae),oe===null?J=Da:oe.sibling=Da,oe=Da,Z=ce}if(fe.done)return a(x,Z),re&&Qt(x,ae),J;if(Z===null){for(;!fe.done;ae++,fe=N.next())fe=C(x,fe.value,_),fe!==null&&(v=i(fe,v,ae),oe===null?J=fe:oe.sibling=fe,oe=fe);return re&&Qt(x,ae),J}for(Z=l(Z);!fe.done;ae++,fe=N.next())fe=w(Z,x,ae,fe.value,_),fe!==null&&(e&&fe.alternate!==null&&Z.delete(fe.key===null?ae:fe.key),v=i(fe,v,ae),oe===null?J=fe:oe.sibling=fe,oe=fe);return e&&Z.forEach(function(eg){return t(x,eg)}),re&&Qt(x,ae),J}function Se(x,v,N,_){if(typeof N=="object"&&N!==null&&N.type===B&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case L:e:{for(var J=N.key;v!==null;){if(v.key===J){if(J=N.type,J===B){if(v.tag===7){a(x,v.sibling),_=n(v,N.props.children),_.return=x,x=_;break e}}else if(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ne&&Va(J)===v.type){a(x,v.sibling),_=n(v,N.props),nn(_,N),_.return=x,x=_;break e}a(x,v);break}else t(x,v);v=v.sibling}N.type===B?(_=Ya(N.props.children,x.mode,_,N.key),_.return=x,x=_):(_=ii(N.type,N.key,N.props,null,x.mode,_),nn(_,N),_.return=x,x=_)}return c(x);case Y:e:{for(J=N.key;v!==null;){if(v.key===J)if(v.tag===4&&v.stateNode.containerInfo===N.containerInfo&&v.stateNode.implementation===N.implementation){a(x,v.sibling),_=n(v,N.children||[]),_.return=x,x=_;break e}else{a(x,v);break}else t(x,v);v=v.sibling}_=Vu(N,x.mode,_),_.return=x,x=_}return c(x);case Ne:return N=Va(N),Se(x,v,N,_)}if(ut(N))return V(x,v,N,_);if(Xe(N)){if(J=Xe(N),typeof J!="function")throw Error(s(150));return N=J.call(N),W(x,v,N,_)}if(typeof N.then=="function")return Se(x,v,di(N),_);if(N.$$typeof===K)return Se(x,v,ri(x,N),_);mi(x,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,v!==null&&v.tag===6?(a(x,v.sibling),_=n(v,N),_.return=x,x=_):(a(x,v),_=Qu(N,x.mode,_),_.return=x,x=_),c(x)):a(x,v)}return function(x,v,N,_){try{ln=0;var J=Se(x,v,N,_);return xl=null,J}catch(Z){if(Z===bl||Z===oi)throw Z;var oe=ft(29,Z,null,x.mode);return oe.lanes=_,oe.return=x,oe}}}var Ka=co(!0),ro=co(!1),ha=!1;function lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(me&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ni(e),Vs(e,null,a),t}return li(e,l,t,a),ni(e)}function un(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Pr(e,a)}}function ic(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var uc=!1;function cn(){if(uc){var e=yl;if(e!==null)throw e}}function rn(e,t,a,l){uc=!1;var n=e.updateQueue;ha=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var h=o,E=h.next;h.next=null,c===null?i=E:c.next=E,c=h;var D=e.alternate;D!==null&&(D=D.updateQueue,o=D.lastBaseUpdate,o!==c&&(o===null?D.firstBaseUpdate=E:o.next=E,D.lastBaseUpdate=h))}if(i!==null){var C=n.baseState;c=0,D=E=h=null,o=i;do{var A=o.lane&-536870913,w=A!==o.lane;if(w?(ue&A)===A:(l&A)===A){A!==0&&A===vl&&(uc=!0),D!==null&&(D=D.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var V=e,W=o;A=t;var Se=a;switch(W.tag){case 1:if(V=W.payload,typeof V=="function"){C=V.call(Se,C,A);break e}C=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=W.payload,A=typeof V=="function"?V.call(Se,C,A):V,A==null)break e;C=T({},C,A);break e;case 2:ha=!0}}A=o.callback,A!==null&&(e.flags|=64,w&&(e.flags|=8192),w=n.callbacks,w===null?n.callbacks=[A]:w.push(A))}else w={lane:A,tag:o.tag,payload:o.payload,callback:o.callback,next:null},D===null?(E=D=w,h=C):D=D.next=w,c|=A;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;w=o,o=w.next,w.next=null,n.lastBaseUpdate=w,n.shared.pending=null}}while(!0);D===null&&(h=C),n.baseState=h,n.firstBaseUpdate=E,n.lastBaseUpdate=D,i===null&&(n.shared.lanes=0),Sa|=c,e.lanes=c,e.memoizedState=C}}function so(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function oo(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)so(a[e],t)}var Sl=b(null),hi=b(0);function fo(e,t){e=ta,U(hi,e),U(Sl,t),ta=e|t.baseLanes}function cc(){U(hi,ta),U(Sl,Sl.current)}function rc(){ta=hi.current,S(Sl),S(hi)}var dt=b(null),Et=null;function va(e){var t=e.alternate;U(_e,_e.current&1),U(dt,e),Et===null&&(t===null||Sl.current!==null||t.memoizedState!==null)&&(Et=e)}function sc(e){U(_e,_e.current),U(dt,e),Et===null&&(Et=e)}function mo(e){e.tag===22?(U(_e,_e.current),U(dt,e),Et===null&&(Et=e)):ya()}function ya(){U(_e,_e.current),U(dt,dt.current)}function mt(e){S(dt),Et===e&&(Et=null),S(_e)}var _e=b(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pr(a)||gr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kt=0,te=null,be=null,He=null,gi=!1,jl=!1,Ja=!1,vi=0,sn=0,Nl=null,Qh=0;function Me(){throw Error(s(321))}function oc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ot(e[a],t[a]))return!1;return!0}function fc(e,t,a,l,n,i){return Kt=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Wo:Ac,Ja=!1,i=a(l,n),Ja=!1,jl&&(i=po(t,a,l,n)),ho(e),i}function ho(e){R.H=dn;var t=be!==null&&be.next!==null;if(Kt=0,He=be=te=null,gi=!1,sn=0,Nl=null,t)throw Error(s(300));e===null||Be||(e=e.dependencies,e!==null&&ci(e)&&(Be=!0))}function po(e,t,a,l){te=e;var n=0;do{if(jl&&(Nl=null),sn=0,jl=!1,25<=n)throw Error(s(301));if(n+=1,He=be=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=Fo,i=t(a,l)}while(jl);return i}function Vh(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?on(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(te.flags|=1024),t}function dc(){var e=vi!==0;return vi=0,e}function mc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function hc(e){if(gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gi=!1}Kt=0,He=be=te=null,jl=!1,sn=vi=0,Nl=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?te.memoizedState=He=e:He=He.next=e,He}function Ce(){if(be===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=He===null?te.memoizedState:He.next;if(t!==null)He=t,be=e;else{if(e===null)throw te.alternate===null?Error(s(467)):Error(s(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},He===null?te.memoizedState=He=e:He=He.next=e}return He}function yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function on(e){var t=sn;return sn+=1,Nl===null&&(Nl=[]),e=no(Nl,e,t),t=te,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Wo:Ac),e}function bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return on(e);if(e.$$typeof===K)return Ze(e)}throw Error(s(438,String(e)))}function pc(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=yi(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=We;return t.index++,a}function Jt(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=Ce();return gc(t,be,e)}function gc(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=c=null,h=null,E=t,D=!1;do{var C=E.lane&-536870913;if(C!==E.lane?(ue&C)===C:(Kt&C)===C){var A=E.revertLane;if(A===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),C===vl&&(D=!0);else if((Kt&A)===A){E=E.next,A===vl&&(D=!0);continue}else C={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(o=h=C,c=i):h=h.next=C,te.lanes|=A,Sa|=A;C=E.action,Ja&&a(i,C),i=E.hasEagerState?E.eagerState:a(i,C)}else A={lane:C,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(o=h=A,c=i):h=h.next=A,te.lanes|=C,Sa|=C;E=E.next}while(E!==null&&E!==t);if(h===null?c=i:h.next=o,!ot(i,e.memoizedState)&&(Be=!0,D&&(a=yl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function vc(e){var t=Ce(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ot(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function go(e,t,a){var l=te,n=Ce(),i=re;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=t();var c=!ot((be||n).memoizedState,a);if(c&&(n.memoizedState=a,Be=!0),n=n.queue,xc(bo.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||He!==null&&He.memoizedState.tag&1){if(l.flags|=2048,El(9,{destroy:void 0},yo.bind(null,l,n,a,t),null),je===null)throw Error(s(349));i||(Kt&127)!==0||vo(l,t,a)}return a}function vo(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=yi(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function yo(e,t,a,l){t.value=a,t.getSnapshot=l,xo(t)&&So(e)}function bo(e,t,a){return a(function(){xo(t)&&So(e)})}function xo(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ot(e,a)}catch{return!0}}function So(e){var t=qa(e,2);t!==null&&nt(t,e,2)}function yc(e){var t=Fe();if(typeof e=="function"){var a=e;if(e=a(),Ja){ca(!0);try{a()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},t}function jo(e,t,a,l){return e.baseState=a,gc(e,be,typeof l=="function"?l:Jt)}function Zh(e,t,a,l,n){if(Ni(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,No(t,i)):(i.next=a.next,t.pending=a.next=i)}}function No(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,c={};R.T=c;try{var o=a(n,l),h=R.S;h!==null&&h(c,o),Eo(e,t,o)}catch(E){bc(e,t,E)}finally{i!==null&&c.types!==null&&(i.types=c.types),R.T=i}}else try{i=a(n,l),Eo(e,t,i)}catch(E){bc(e,t,E)}}function Eo(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){zo(e,t,l)},function(l){return bc(e,t,l)}):zo(e,t,a)}function zo(e,t,a){t.status="fulfilled",t.value=a,Ao(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,No(e,a)))}function bc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ao(t),t=t.next;while(t!==l)}e.action=null}function Ao(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function To(e,t){return t}function wo(e,t){if(re){var a=je.formState;if(a!==null){e:{var l=te;if(re){if(Ee){t:{for(var n=Ee,i=Nt;n.nodeType!==8;){if(!i){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=zt(n.nextSibling),l=n.data==="F!";break e}}da(l)}l=!1}l&&(t=a[0])}}return a=Fe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},a.queue=l,a=Ko.bind(null,te,l),l.dispatch=a,l=yc(!1),i=zc.bind(null,te,!1,l.queue),l=Fe(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Zh.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Mo(e){var t=Ce();return Oo(t,be,e)}function Oo(e,t,a){if(t=gc(e,t,To)[0],e=xi(Jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=on(t)}catch(c){throw c===bl?oi:c}else l=t;t=Ce();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,El(9,{destroy:void 0},Kh.bind(null,n,a),null)),[l,i,e]}function Kh(e,t){e.action=t}function Do(e){var t=Ce(),a=be;if(a!==null)return Oo(t,a,e);Ce(),t=t.memoizedState,a=Ce();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function El(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=yi(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ro(){return Ce().memoizedState}function Si(e,t,a,l){var n=Fe();te.flags|=e,n.memoizedState=El(1|t,{destroy:void 0},a,l===void 0?null:l)}function ji(e,t,a,l){var n=Ce();l=l===void 0?null:l;var i=n.memoizedState.inst;be!==null&&l!==null&&oc(l,be.memoizedState.deps)?n.memoizedState=El(t,i,a,l):(te.flags|=e,n.memoizedState=El(1|t,i,a,l))}function _o(e,t){Si(8390656,8,e,t)}function xc(e,t){ji(2048,8,e,t)}function Jh(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=yi(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Co(e){var t=Ce().memoizedState;return Jh({ref:t,nextImpl:e}),function(){if((me&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Uo(e,t){return ji(4,2,e,t)}function Ho(e,t){return ji(4,4,e,t)}function Bo(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lo(e,t,a){a=a!=null?a.concat([e]):null,ji(4,4,Bo.bind(null,t,e),a)}function Sc(){}function qo(e,t){var a=Ce();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&oc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Yo(e,t){var a=Ce();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&oc(t,l[1]))return l[0];if(l=e(),Ja){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l}function jc(e,t,a){return a===void 0||(Kt&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Xf(),te.lanes|=e,Sa|=e,a)}function Go(e,t,a,l){return ot(a,t)?a:Sl.current!==null?(e=jc(e,a,l),ot(e,t)||(Be=!0),e):(Kt&42)===0||(Kt&1073741824)!==0&&(ue&261930)===0?(Be=!0,e.memoizedState=a):(e=Xf(),te.lanes|=e,Sa|=e,t)}function Xo(e,t,a,l,n){var i=G.p;G.p=i!==0&&8>i?i:8;var c=R.T,o={};R.T=o,zc(e,!1,t,a);try{var h=n(),E=R.S;if(E!==null&&E(o,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var D=kh(h,l);fn(e,t,D,gt(e))}else fn(e,t,l,gt(e))}catch(C){fn(e,t,{then:function(){},status:"rejected",reason:C},gt())}finally{G.p=i,c!==null&&o.types!==null&&(c.types=o.types),R.T=c}}function $h(){}function Nc(e,t,a,l){if(e.tag!==5)throw Error(s(476));var n=ko(e).queue;Xo(e,n,t,F,a===null?$h:function(){return Qo(e),a(l)})}function ko(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qo(e){var t=ko(e);t.next===null&&(t=e.alternate.memoizedState),fn(e,t.next.queue,{},gt())}function Ec(){return Ze(wn)}function Vo(){return Ce().memoizedState}function Zo(){return Ce().memoizedState}function Wh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();e=pa(a);var l=ga(t,e,a);l!==null&&(nt(l,t,a),un(l,t,a)),t={cache:Pu()},e.payload=t;return}t=t.return}}function Fh(e,t,a){var l=gt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ni(e)?Jo(t,a):(a=Xu(e,t,a,l),a!==null&&(nt(a,e,l),$o(a,t,l)))}function Ko(e,t,a){var l=gt();fn(e,t,a,l)}function fn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ni(e))Jo(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,o=i(c,a);if(n.hasEagerState=!0,n.eagerState=o,ot(o,c))return li(e,t,n,0),je===null&&ai(),!1}catch{}if(a=Xu(e,t,n,l),a!==null)return nt(a,e,l),$o(a,t,l),!0}return!1}function zc(e,t,a,l){if(l={lane:2,revertLane:lr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ni(e)){if(t)throw Error(s(479))}else t=Xu(e,a,l,2),t!==null&&nt(t,e,2)}function Ni(e){var t=e.alternate;return e===te||t!==null&&t===te}function Jo(e,t){jl=gi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function $o(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Pr(e,a)}}var dn={readContext:Ze,use:bi,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};dn.useEffectEvent=Me;var Wo={readContext:Ze,use:bi,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:_o,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Si(4194308,4,Bo.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){Si(4,2,e,t)},useMemo:function(e,t){var a=Fe();t=t===void 0?null:t;var l=e();if(Ja){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Fe();if(a!==void 0){var n=a(t);if(Ja){ca(!0);try{a(t)}finally{ca(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Fh.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=yc(e);var t=e.queue,a=Ko.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Sc,useDeferredValue:function(e,t){var a=Fe();return jc(a,e,t)},useTransition:function(){var e=yc(!1);return e=Xo.bind(null,te,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=Fe();if(re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),je===null)throw Error(s(349));(ue&127)!==0||vo(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,_o(bo.bind(null,l,i,e),[e]),l.flags|=2048,El(9,{destroy:void 0},yo.bind(null,l,i,a,t),null),a},useId:function(){var e=Fe(),t=je.identifierPrefix;if(re){var a=Ht,l=Ut;a=(l&~(1<<32-st(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=vi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Qh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ec,useFormState:wo,useActionState:wo,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=zc.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:pc,useCacheRefresh:function(){return Fe().memoizedState=Wh.bind(null,te)},useEffectEvent:function(e){var t=Fe(),a={impl:e};return t.memoizedState=a,function(){if((me&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ac={readContext:Ze,use:bi,useCallback:qo,useContext:Ze,useEffect:xc,useImperativeHandle:Lo,useInsertionEffect:Uo,useLayoutEffect:Ho,useMemo:Yo,useReducer:xi,useRef:Ro,useState:function(){return xi(Jt)},useDebugValue:Sc,useDeferredValue:function(e,t){var a=Ce();return Go(a,be.memoizedState,e,t)},useTransition:function(){var e=xi(Jt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:on(e),t]},useSyncExternalStore:go,useId:Vo,useHostTransitionStatus:Ec,useFormState:Mo,useActionState:Mo,useOptimistic:function(e,t){var a=Ce();return jo(a,be,e,t)},useMemoCache:pc,useCacheRefresh:Zo};Ac.useEffectEvent=Co;var Fo={readContext:Ze,use:bi,useCallback:qo,useContext:Ze,useEffect:xc,useImperativeHandle:Lo,useInsertionEffect:Uo,useLayoutEffect:Ho,useMemo:Yo,useReducer:vc,useRef:Ro,useState:function(){return vc(Jt)},useDebugValue:Sc,useDeferredValue:function(e,t){var a=Ce();return be===null?jc(a,e,t):Go(a,be.memoizedState,e,t)},useTransition:function(){var e=vc(Jt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:on(e),t]},useSyncExternalStore:go,useId:Vo,useHostTransitionStatus:Ec,useFormState:Do,useActionState:Do,useOptimistic:function(e,t){var a=Ce();return be!==null?jo(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:pc,useCacheRefresh:Zo};Fo.useEffectEvent=Co;function Tc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var wc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=gt(),n=pa(l);n.payload=t,a!=null&&(n.callback=a),t=ga(e,n,l),t!==null&&(nt(t,e,l),un(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=gt(),n=pa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ga(e,n,l),t!==null&&(nt(t,e,l),un(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=gt(),l=pa(a);l.tag=2,t!=null&&(l.callback=t),t=ga(e,l,a),t!==null&&(nt(t,e,a),un(t,e,a))}};function Io(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!Fl(a,l)||!Fl(n,i):!0}function Po(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&wc.enqueueReplaceState(t,t.state,null)}function $a(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ef(e){ti(e)}function tf(e){console.error(e)}function af(e){ti(e)}function Ei(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function lf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Mc(e,t,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ei(e,t)},a}function nf(e){return e=pa(e),e.tag=3,e}function uf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){lf(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){lf(t,a,l),typeof n!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Ih(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&gl(t,a,n,!0),a=dt.current,a!==null){switch(a.tag){case 31:case 13:return Et===null?Hi():a.alternate===null&&Oe===0&&(Oe=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===fi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),er(e,l,n)),!1;case 22:return a.flags|=65536,l===fi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),er(e,l,n)),!1}throw Error(s(435,a.tag))}return er(e,l,n),Hi(),!1}if(re)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ju&&(e=Error(s(422),{cause:l}),en(xt(e,a)))):(l!==Ju&&(t=Error(s(423),{cause:l}),en(xt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=xt(l,a),n=Mc(e.stateNode,l,n),ic(e,n),Oe!==4&&(Oe=2)),!1;var i=Error(s(520),{cause:l});if(i=xt(i,a),xn===null?xn=[i]:xn.push(i),Oe!==4&&(Oe=2),t===null)return!0;l=xt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Mc(a.stateNode,l,e),ic(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ja===null||!ja.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=nf(n),uf(n,e,a,l),ic(a,n),!1}a=a.return}while(a!==null);return!1}var Oc=Error(s(461)),Be=!1;function Ke(e,t,a,l){t.child=e===null?ro(t,null,a,l):Ka(t,e.child,a,l)}function cf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var o in l)o!=="ref"&&(c[o]=l[o])}else c=l;return ka(t),l=fc(e,t,a,c,i,n),o=dc(),e!==null&&!Be?(mc(e,t,n),$t(e,t,n)):(re&&o&&Zu(t),t.flags|=1,Ke(e,t,l,n),t.child)}function rf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!ku(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,sf(e,t,i,l,n)):(e=ii(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Lc(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:Fl,a(c,l)&&e.ref===t.ref)return $t(e,t,n)}return t.flags|=1,e=kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function sf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Fl(i,l)&&e.ref===t.ref)if(Be=!1,t.pendingProps=l=i,Lc(e,n))(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,$t(e,t,n)}return Dc(e,t,a,l,n)}function of(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return ff(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&si(t,i!==null?i.cachePool:null),i!==null?fo(t,i):cc(),mo(t);else return l=t.lanes=536870912,ff(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(si(t,i.cachePool),fo(t,i),ya(),t.memoizedState=null):(e!==null&&si(t,null),cc(),ya());return Ke(e,t,n,a),t.child}function mn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ff(e,t,a,l,n){var i=tc();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&si(t,null),cc(),mo(t),e!==null&&gl(e,t,l,!0),t.childLanes=n,null}function zi(e,t){return t=Ti({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function df(e,t,a){return Ka(t,e.child,null,a),e=zi(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function Ph(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(l.mode==="hidden")return e=zi(t,l),t.lanes=536870912,mn(null,e);if(sc(t),(e=Ee)?(e=Ed(e,Nt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Ut,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Ks(e),a.return=t,t.child=a,Ve=t,Ee=null)):e=null,e===null)throw da(t);return t.lanes=536870912,null}return zi(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(sc(t),n)if(t.flags&256)t.flags&=-257,t=df(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Be||gl(e,t,a,!1),n=(a&e.childLanes)!==0,Be||n){if(l=je,l!==null&&(c=es(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,qa(e,c),nt(l,e,c),Oc;Hi(),t=df(e,t,a)}else e=i.treeContext,Ee=zt(c.nextSibling),Ve=t,re=!0,fa=null,Nt=!1,e!==null&&Ws(t,e),t=zi(t,l),t.flags|=4096;return t}return e=kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ai(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Dc(e,t,a,l,n){return ka(t),a=fc(e,t,a,l,void 0,n),l=dc(),e!==null&&!Be?(mc(e,t,n),$t(e,t,n)):(re&&l&&Zu(t),t.flags|=1,Ke(e,t,a,n),t.child)}function mf(e,t,a,l,n,i){return ka(t),t.updateQueue=null,a=po(t,l,a,n),ho(e),l=dc(),e!==null&&!Be?(mc(e,t,i),$t(e,t,i)):(re&&l&&Zu(t),t.flags|=1,Ke(e,t,a,i),t.child)}function hf(e,t,a,l,n){if(ka(t),t.stateNode===null){var i=dl,c=a.contextType;typeof c=="object"&&c!==null&&(i=Ze(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},lc(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Ze(c):dl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Tc(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&wc.enqueueReplaceState(i,i.state,null),rn(t,l,i,n),cn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,h=$a(a,o);i.props=h;var E=i.context,D=a.contextType;c=dl,typeof D=="object"&&D!==null&&(c=Ze(D));var C=a.getDerivedStateFromProps;D=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||E!==c)&&Po(t,i,l,c),ha=!1;var A=t.memoizedState;i.state=A,rn(t,l,i,n),cn(),E=t.memoizedState,o||A!==E||ha?(typeof C=="function"&&(Tc(t,a,C,l),E=t.memoizedState),(h=ha||Io(t,a,h,l,A,E,c))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=c,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,nc(e,t),c=t.memoizedProps,D=$a(a,c),i.props=D,C=t.pendingProps,A=i.context,E=a.contextType,h=dl,typeof E=="object"&&E!==null&&(h=Ze(E)),o=a.getDerivedStateFromProps,(E=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==C||A!==h)&&Po(t,i,l,h),ha=!1,A=t.memoizedState,i.state=A,rn(t,l,i,n),cn();var w=t.memoizedState;c!==C||A!==w||ha||e!==null&&e.dependencies!==null&&ci(e.dependencies)?(typeof o=="function"&&(Tc(t,a,o,l),w=t.memoizedState),(D=ha||Io(t,a,D,l,A,w,h)||e!==null&&e.dependencies!==null&&ci(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,w,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,w,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=h,l=D):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ai(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ka(t,e.child,null,n),t.child=Ka(t,null,a,n)):Ke(e,t,a,n),t.memoizedState=i.state,e=t.child):e=$t(e,t,n),e}function pf(e,t,a,l){return Ga(),t.flags|=256,Ke(e,t,a,l),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(e){return{baseLanes:e,cachePool:ao()}}function Cc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=pt),e}function gf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?va(t):ya(),(e=Ee)?(e=Ed(e,Nt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Ut,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Ks(e),a.return=t,t.child=a,Ve=t,Ee=null)):e=null,e===null)throw da(t);return gr(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(ya(),n=t.mode,o=Ti({mode:"hidden",children:o},n),l=Ya(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=_c(a),l.childLanes=Cc(e,c,a),t.memoizedState=Rc,mn(null,l)):(va(t),Uc(t,o))}var h=e.memoizedState;if(h!==null&&(o=h.dehydrated,o!==null)){if(i)t.flags&256?(va(t),t.flags&=-257,t=Hc(e,t,a)):t.memoizedState!==null?(ya(),t.child=e.child,t.flags|=128,t=null):(ya(),o=l.fallback,n=t.mode,l=Ti({mode:"visible",children:l.children},n),o=Ya(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,Ka(t,e.child,null,a),l=t.child,l.memoizedState=_c(a),l.childLanes=Cc(e,c,a),t.memoizedState=Rc,t=mn(null,l));else if(va(t),gr(o)){if(c=o.nextSibling&&o.nextSibling.dataset,c)var E=c.dgst;c=E,l=Error(s(419)),l.stack="",l.digest=c,en({value:l,source:null,stack:null}),t=Hc(e,t,a)}else if(Be||gl(e,t,a,!1),c=(a&e.childLanes)!==0,Be||c){if(c=je,c!==null&&(l=es(c,a),l!==0&&l!==h.retryLane))throw h.retryLane=l,qa(e,l),nt(c,e,l),Oc;pr(o)||Hi(),t=Hc(e,t,a)}else pr(o)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ee=zt(o.nextSibling),Ve=t,re=!0,fa=null,Nt=!1,e!==null&&Ws(t,e),t=Uc(t,l.children),t.flags|=4096);return t}return n?(ya(),o=l.fallback,n=t.mode,h=e.child,E=h.sibling,l=kt(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,E!==null?o=kt(E,o):(o=Ya(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,mn(null,l),l=t.child,o=e.child.memoizedState,o===null?o=_c(a):(n=o.cachePool,n!==null?(h=Ue._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=ao(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=Cc(e,c,a),t.memoizedState=Rc,mn(e.child,l)):(va(t),a=e.child,e=a.sibling,a=kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Uc(e,t){return t=Ti({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ti(e,t){return e=ft(22,e,null,t),e.lanes=0,e}function Hc(e,t,a){return Ka(t,e.child,null,a),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Fu(e.return,t,a)}function Bc(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function yf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=_e.current,o=(c&2)!==0;if(o?(c=c&1|2,t.flags|=128):c&=1,U(_e,c),Ke(e,t,l,a),l=re?Pl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vf(e,a,t);else if(e.tag===19)vf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&pi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Bc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&pi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Bc(t,!0,a,null,i,l);break;case"together":Bc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function $t(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(gl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Lc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ci(e)))}function ep(e,t,a){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),ma(t,Ue,e.memoizedState.cache),Ga();break;case 27:case 5:Ll(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,sc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(va(t),t.flags|=128,null):(a&t.child.childLanes)!==0?gf(e,t,a):(va(t),e=$t(e,t,a),e!==null?e.sibling:null);va(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(gl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return yf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(_e,_e.current),l)break;return null;case 22:return t.lanes=0,of(e,t,a,t.pendingProps);case 24:ma(t,Ue,e.memoizedState.cache)}return $t(e,t,a)}function bf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Be=!0;else{if(!Lc(e,a)&&(t.flags&128)===0)return Be=!1,ep(e,t,a);Be=(e.flags&131072)!==0}else Be=!1,re&&(t.flags&1048576)!==0&&$s(t,Pl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e=="function")ku(e)?(l=$a(e,l),t.tag=1,t=hf(null,t,e,l,a)):(t.tag=0,t=Dc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===se){t.tag=11,t=cf(null,t,e,l,a);break e}else if(n===P){t.tag=14,t=rf(null,t,e,l,a);break e}}throw t=Ot(e)||e,Error(s(306,t,""))}}return t;case 0:return Dc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=$a(l,t.pendingProps),hf(e,t,l,n,a);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,nc(e,t),rn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ma(t,Ue,l),l!==i.cache&&Iu(t,[Ue],a,!0),cn(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=pf(e,t,l,a);break e}else if(l!==n){n=xt(Error(s(424)),t),en(n),t=pf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ee=zt(e.firstChild),Ve=t,re=!0,fa=null,Nt=!0,a=ro(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ga(),l===n){t=$t(e,t,a);break e}Ke(e,t,l,a)}t=t.child}return t;case 26:return Ai(e,t),e===null?(a=Od(t.type,null,t.pendingProps,null))?t.memoizedState=a:re||(a=t.type,e=t.pendingProps,l=ki(I.current).createElement(a),l[Qe]=t,l[Ie]=e,Je(l,a,e),Ye(l),t.stateNode=l):t.memoizedState=Od(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ll(t),e===null&&re&&(l=t.stateNode=Td(t.type,t.pendingProps,I.current),Ve=t,Nt=!0,n=Ee,Aa(t.type)?(vr=n,Ee=zt(l.firstChild)):Ee=n),Ke(e,t,t.pendingProps.children,a),Ai(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=l=Ee)&&(l=Op(l,t.type,t.pendingProps,Nt),l!==null?(t.stateNode=l,Ve=t,Ee=zt(l.firstChild),Nt=!1,n=!0):n=!1),n||da(t)),Ll(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,dr(n,i)?l=null:c!==null&&dr(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=fc(e,t,Vh,null,null,a),wn._currentValue=n),Ai(e,t),Ke(e,t,l,a),t.child;case 6:return e===null&&re&&((e=a=Ee)&&(a=Dp(a,t.pendingProps,Nt),a!==null?(t.stateNode=a,Ve=t,Ee=null,e=!0):e=!1),e||da(t)),null;case 13:return gf(e,t,a);case 4:return ke(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ka(t,null,l,a):Ke(e,t,l,a),t.child;case 11:return cf(e,t,t.type,t.pendingProps,a);case 7:return Ke(e,t,t.pendingProps,a),t.child;case 8:return Ke(e,t,t.pendingProps.children,a),t.child;case 12:return Ke(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ma(t,t.type,l.value),Ke(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,ka(t),n=Ze(n),l=l(n),t.flags|=1,Ke(e,t,l,a),t.child;case 14:return rf(e,t,t.type,t.pendingProps,a);case 15:return sf(e,t,t.type,t.pendingProps,a);case 19:return yf(e,t,a);case 31:return Ph(e,t,a);case 22:return of(e,t,a,t.pendingProps);case 24:return ka(t),l=Ze(Ue),e===null?(n=tc(),n===null&&(n=je,i=Pu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},lc(t),ma(t,Ue,n)):((e.lanes&a)!==0&&(nc(e,t),rn(t,null,null,a),cn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ma(t,Ue,l)):(l=i.cache,ma(t,Ue,l),l!==n.cache&&Iu(t,[Ue],a,!0))),Ke(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Wt(e){e.flags|=4}function qc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Zf())e.flags|=8192;else throw Za=fi,ac}else e.flags&=-16777217}function xf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ud(t))if(Zf())e.flags|=8192;else throw Za=fi,ac}function wi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fr():536870912,e.lanes|=t,wl|=t)}function hn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function tp(e,t,a){var l=t.pendingProps;switch(Ku(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(Ue),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(pl(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$u())),ze(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Wt(t),i!==null?(ze(t),xf(t,i)):(ze(t),qc(t,n,null,l,a))):i?i!==e.memoizedState?(Wt(t),ze(t),xf(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Wt(t),ze(t),qc(t,n,e,l,a)),null;case 27:if(qn(t),a=I.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return ze(t),null}e=X.current,pl(t)?Fs(t):(e=Td(n,l,a),t.stateNode=e,Wt(t))}return ze(t),null;case 5:if(qn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return ze(t),null}if(i=X.current,pl(t))Fs(t);else{var c=ki(I.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Qe]=t,i[Ie]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Je(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Wt(t)}}return ze(t),qc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=I.current,pl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ve,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||gd(e.nodeValue,a)),e||da(t,!0)}else e=ki(e).createTextNode(l),e[Qe]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=pl(t),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Qe]=t}else Ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return ze(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=pl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Qe]=t}else Ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),wi(t,t.updateQueue),ze(t),null);case 4:return Re(),e===null&&cr(t.stateNode.containerInfo),ze(t),null;case 10:return Zt(t.type),ze(t),null;case 19:if(S(_e),l=t.memoizedState,l===null)return ze(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)hn(l,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=pi(e),i!==null){for(t.flags|=128,hn(l,!1),e=i.updateQueue,t.updateQueue=e,wi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Zs(a,e),a=a.sibling;return U(_e,_e.current&1|2),re&&Qt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ct()>_i&&(t.flags|=128,n=!0,hn(l,!1),t.lanes=4194304)}else{if(!n)if(e=pi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,wi(t,e),hn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!re)return ze(t),null}else 2*ct()-l.renderingStartTime>_i&&a!==536870912&&(t.flags|=128,n=!0,hn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ct(),e.sibling=null,a=_e.current,U(_e,n?a&1|2:a&1),re&&Qt(t,l.treeForkCount),e):(ze(t),null);case 22:case 23:return mt(t),rc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&wi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&S(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(Ue),ze(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function ap(e,t){switch(Ku(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(Ue),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qn(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(s(340));Ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(_e),null;case 4:return Re(),null;case 10:return Zt(t.type),null;case 22:case 23:return mt(t),rc(),e!==null&&S(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(Ue),null;case 25:return null;default:return null}}function Sf(e,t){switch(Ku(t),t.tag){case 3:Zt(Ue),Re();break;case 26:case 27:case 5:qn(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:S(_e);break;case 10:Zt(t.type);break;case 22:case 23:mt(t),rc(),e!==null&&S(Qa);break;case 24:Zt(Ue)}}function pn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(o){ve(t,t.return,o)}}function ba(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,o=c.destroy;if(o!==void 0){c.destroy=void 0,n=t;var h=a,E=o;try{E()}catch(D){ve(n,h,D)}}}l=l.next}while(l!==i)}}catch(D){ve(t,t.return,D)}}function jf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{oo(t,a)}catch(l){ve(e,e.return,l)}}}function Nf(e,t,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ve(e,t,l)}}function gn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ve(e,t,n)}}function Bt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ve(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ve(e,t,n)}else a.current=null}function Ef(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ve(e,e.return,n)}}function Yc(e,t,a){try{var l=e.stateNode;Ep(l,e.type,a,t),l[Ie]=t}catch(n){ve(e,e.return,n)}}function zf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,a),e=e.sibling;e!==null;)Xc(e,t,a),e=e.sibling}function Mi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Mi(e,t,a),e=e.sibling;e!==null;)Mi(e,t,a),e=e.sibling}function Af(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Je(t,l,a),t[Qe]=e,t[Ie]=a}catch(i){ve(e,e.return,i)}}var Ft=!1,Le=!1,kc=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function lp(e,t){if(e=e.containerInfo,or=Wi,e=Bs(e),Hu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,o=-1,h=-1,E=0,D=0,C=e,A=null;t:for(;;){for(var w;C!==a||n!==0&&C.nodeType!==3||(o=c+n),C!==i||l!==0&&C.nodeType!==3||(h=c+l),C.nodeType===3&&(c+=C.nodeValue.length),(w=C.firstChild)!==null;)A=C,C=w;for(;;){if(C===e)break t;if(A===a&&++E===n&&(o=c),A===i&&++D===l&&(h=c),(w=C.nextSibling)!==null)break;C=A,A=C.parentNode}C=w}a=o===-1||h===-1?null:{start:o,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(fr={focusedElem:e,selectionRange:a},Wi=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var V=$a(a.type,n);e=l.getSnapshotBeforeUpdate(V,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){ve(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)hr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function wf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Pt(e,a),l&4&&pn(5,a);break;case 1:if(Pt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ve(a,a.return,c)}else{var n=$a(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ve(a,a.return,c)}}l&64&&jf(a),l&512&&gn(a,a.return);break;case 3:if(Pt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{oo(e,t)}catch(c){ve(a,a.return,c)}}break;case 27:t===null&&l&4&&Af(a);case 26:case 5:Pt(e,a),t===null&&l&4&&Ef(a),l&512&&gn(a,a.return);break;case 12:Pt(e,a);break;case 31:Pt(e,a),l&4&&Df(e,a);break;case 13:Pt(e,a),l&4&&Rf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=dp.bind(null,a),Rp(e,a))));break;case 22:if(l=a.memoizedState!==null||Ft,!l){t=t!==null&&t.memoizedState!==null||Le,n=Ft;var i=Le;Ft=l,(Le=t)&&!i?ea(e,a,(a.subtreeFlags&8772)!==0):Pt(e,a),Ft=n,Le=i}break;case 30:break;default:Pt(e,a)}}function Mf(e){var t=e.alternate;t!==null&&(e.alternate=null,Mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,et=!1;function It(e,t,a){for(a=a.child;a!==null;)Of(e,t,a),a=a.sibling}function Of(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(ql,a)}catch{}switch(a.tag){case 26:Le||Bt(a,t),It(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||Bt(a,t);var l=Te,n=et;Aa(a.type)&&(Te=a.stateNode,et=!1),It(e,t,a),zn(a.stateNode),Te=l,et=n;break;case 5:Le||Bt(a,t);case 6:if(l=Te,n=et,Te=null,It(e,t,a),Te=l,et=n,Te!==null)if(et)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(a.stateNode)}catch(i){ve(a,t,i)}else try{Te.removeChild(a.stateNode)}catch(i){ve(a,t,i)}break;case 18:Te!==null&&(et?(e=Te,jd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hl(e)):jd(Te,a.stateNode));break;case 4:l=Te,n=et,Te=a.stateNode.containerInfo,et=!0,It(e,t,a),Te=l,et=n;break;case 0:case 11:case 14:case 15:ba(2,a,t),Le||ba(4,a,t),It(e,t,a);break;case 1:Le||(Bt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Nf(a,t,l)),It(e,t,a);break;case 21:It(e,t,a);break;case 22:Le=(l=Le)||a.memoizedState!==null,It(e,t,a),Le=l;break;default:It(e,t,a)}}function Df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hl(e)}catch(a){ve(t,t.return,a)}}}function Rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hl(e)}catch(a){ve(t,t.return,a)}}function np(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tf),t;default:throw Error(s(435,e.tag))}}function Oi(e,t){var a=np(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=mp.bind(null,e,l);l.then(n,n)}})}function tt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,o=c;e:for(;o!==null;){switch(o.tag){case 27:if(Aa(o.type)){Te=o.stateNode,et=!1;break e}break;case 5:Te=o.stateNode,et=!1;break e;case 3:case 4:Te=o.stateNode.containerInfo,et=!0;break e}o=o.return}if(Te===null)throw Error(s(160));Of(i,c,n),Te=null,et=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}var Rt=null;function _f(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),at(e),l&4&&(ba(3,e,e.return),pn(3,e),ba(5,e,e.return));break;case 1:tt(t,e),at(e),l&512&&(Le||a===null||Bt(a,a.return)),l&64&&Ft&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Rt;if(tt(t,e),at(e),l&512&&(Le||a===null||Bt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Xl]||i[Qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Je(i,l,a),i[Qe]=e,Ye(i),l=i;break e;case"link":var c=_d("link","href",n).get(l+(a.href||""));if(c){for(var o=0;o<c.length;o++)if(i=c[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(o,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;case"meta":if(c=_d("meta","content",n).get(l+(a.content||""))){for(o=0;o<c.length;o++)if(i=c[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(o,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;default:throw Error(s(468,l))}i[Qe]=e,Ye(i),l=i}e.stateNode=l}else Cd(n,e.type,e.stateNode);else e.stateNode=Rd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Cd(n,e.type,e.stateNode):Rd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,a.memoizedProps)}break;case 27:tt(t,e),at(e),l&512&&(Le||a===null||Bt(a,a.return)),a!==null&&l&4&&Yc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(tt(t,e),at(e),l&512&&(Le||a===null||Bt(a,a.return)),e.flags&32){n=e.stateNode;try{il(n,"")}catch(V){ve(e,e.return,V)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Yc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(kc=!0);break;case 6:if(tt(t,e),at(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(V){ve(e,e.return,V)}}break;case 3:if(Zi=null,n=Rt,Rt=Qi(t.containerInfo),tt(t,e),Rt=n,at(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Hl(t.containerInfo)}catch(V){ve(e,e.return,V)}kc&&(kc=!1,Cf(e));break;case 4:l=Rt,Rt=Qi(e.stateNode.containerInfo),tt(t,e),at(e),Rt=l;break;case 12:tt(t,e),at(e);break;case 31:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 13:tt(t,e),at(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ri=ct()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,E=Ft,D=Le;if(Ft=E||n,Le=D||h,tt(t,e),Le=D,Ft=E,at(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||Ft||Le||Wa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{o=h.stateNode;var C=h.memoizedProps.style,A=C!=null&&C.hasOwnProperty("display")?C.display:null;o.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(V){ve(h,h.return,V)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(V){ve(h,h.return,V)}}}else if(t.tag===18){if(a===null){h=t;try{var w=h.stateNode;n?Nd(w,!0):Nd(h.stateNode,!1)}catch(V){ve(h,h.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Oi(e,a))));break;case 19:tt(t,e),at(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 30:break;case 21:break;default:tt(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(zf(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var n=a.stateNode,i=Gc(e);Mi(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(il(c,""),a.flags&=-33);var o=Gc(e);Mi(e,o,c);break;case 3:case 4:var h=a.stateNode.containerInfo,E=Gc(e);Xc(e,E,h);break;default:throw Error(s(161))}}catch(D){ve(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wf(e,t.alternate,t),t=t.sibling}function Wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ba(4,t,t.return),Wa(t);break;case 1:Bt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Nf(t,t.return,a),Wa(t);break;case 27:zn(t.stateNode);case 26:case 5:Bt(t,t.return),Wa(t);break;case 22:t.memoizedState===null&&Wa(t);break;case 30:Wa(t);break;default:Wa(t)}e=e.sibling}}function ea(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:ea(n,i,a),pn(4,i);break;case 1:if(ea(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(E){ve(l,l.return,E)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)so(h[n],o)}catch(E){ve(l,l.return,E)}}a&&c&64&&jf(i),gn(i,i.return);break;case 27:Af(i);case 26:case 5:ea(n,i,a),a&&l===null&&c&4&&Ef(i),gn(i,i.return);break;case 12:ea(n,i,a);break;case 31:ea(n,i,a),a&&c&4&&Df(n,i);break;case 13:ea(n,i,a),a&&c&4&&Rf(n,i);break;case 22:i.memoizedState===null&&ea(n,i,a),gn(i,i.return);break;case 30:break;default:ea(n,i,a)}t=t.sibling}}function Qc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&tn(a))}function Vc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tn(e))}function _t(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uf(e,t,a,l),t=t.sibling}function Uf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t,a,l),n&2048&&pn(9,t);break;case 1:_t(e,t,a,l);break;case 3:_t(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tn(e)));break;case 12:if(n&2048){_t(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,o=i.onPostCommit;typeof o=="function"&&o(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ve(t,t.return,h)}}else _t(e,t,a,l);break;case 31:_t(e,t,a,l);break;case 13:_t(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?_t(e,t,a,l):vn(e,t):i._visibility&2?_t(e,t,a,l):(i._visibility|=2,zl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Qc(c,t);break;case 24:_t(e,t,a,l),n&2048&&Vc(t.alternate,t);break;default:_t(e,t,a,l)}}function zl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,o=a,h=l,E=c.flags;switch(c.tag){case 0:case 11:case 15:zl(i,c,o,h,n),pn(8,c);break;case 23:break;case 22:var D=c.stateNode;c.memoizedState!==null?D._visibility&2?zl(i,c,o,h,n):vn(i,c):(D._visibility|=2,zl(i,c,o,h,n)),n&&E&2048&&Qc(c.alternate,c);break;case 24:zl(i,c,o,h,n),n&&E&2048&&Vc(c.alternate,c);break;default:zl(i,c,o,h,n)}t=t.sibling}}function vn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:vn(a,l),n&2048&&Qc(l.alternate,l);break;case 24:vn(a,l),n&2048&&Vc(l.alternate,l);break;default:vn(a,l)}t=t.sibling}}var yn=8192;function Al(e,t,a){if(e.subtreeFlags&yn)for(e=e.child;e!==null;)Hf(e,t,a),e=e.sibling}function Hf(e,t,a){switch(e.tag){case 26:Al(e,t,a),e.flags&yn&&e.memoizedState!==null&&Qp(a,Rt,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,a);break;case 3:case 4:var l=Rt;Rt=Qi(e.stateNode.containerInfo),Al(e,t,a),Rt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yn,yn=16777216,Al(e,t,a),yn=l):Al(e,t,a));break;default:Al(e,t,a)}}function Bf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function bn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,qf(l,e)}Bf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lf(e),e=e.sibling}function Lf(e){switch(e.tag){case 0:case 11:case 15:bn(e),e.flags&2048&&ba(9,e,e.return);break;case 3:bn(e);break;case 12:bn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Di(e)):bn(e);break;default:bn(e)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,qf(l,e)}Bf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ba(8,t,t.return),Di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Di(t));break;default:Di(t)}e=e.sibling}}function qf(e,t){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ge=l;else e:for(a=e;Ge!==null;){l=Ge;var n=l.sibling,i=l.return;if(Mf(l),l===a){Ge=null;break e}if(n!==null){n.return=i,Ge=n;break e}Ge=i}}}var ip={getCacheForType:function(e){var t=Ze(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ze(Ue).controller.signal}},up=typeof WeakMap=="function"?WeakMap:Map,me=0,je=null,ne=null,ue=0,ge=0,ht=null,xa=!1,Tl=!1,Zc=!1,ta=0,Oe=0,Sa=0,Fa=0,Kc=0,pt=0,wl=0,xn=null,lt=null,Jc=!1,Ri=0,Yf=0,_i=1/0,Ci=null,ja=null,qe=0,Na=null,Ml=null,aa=0,$c=0,Wc=null,Gf=null,Sn=0,Fc=null;function gt(){return(me&2)!==0&&ue!==0?ue&-ue:R.T!==null?lr():ts()}function Xf(){if(pt===0)if((ue&536870912)===0||re){var e=Xn;Xn<<=1,(Xn&3932160)===0&&(Xn=262144),pt=e}else pt=536870912;return e=dt.current,e!==null&&(e.flags|=32),pt}function nt(e,t,a){(e===je&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Ol(e,0),Ea(e,ue,pt,!1)),Gl(e,a),((me&2)===0||e!==je)&&(e===je&&((me&2)===0&&(Fa|=a),Oe===4&&Ea(e,ue,pt,!1)),Lt(e))}function kf(e,t,a){if((me&6)!==0)throw Error(s(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Yl(e,t),n=l?sp(e,t):Pc(e,t,!0),i=l;do{if(n===0){Tl&&!l&&Ea(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!cp(a)){n=Pc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var o=e;n=xn;var h=o.current.memoizedState.isDehydrated;if(h&&(Ol(o,c).flags|=256),c=Pc(o,c,!1),c!==2){if(Zc&&!h){o.errorRecoveryDisabledLanes|=i,Fa|=i,n=4;break e}i=lt,lt=n,i!==null&&(lt===null?lt=i:lt.push.apply(lt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Ol(e,0),Ea(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Ea(l,t,pt,!xa);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=Ri+300-ct(),10<n)){if(Ea(l,t,pt,!xa),Qn(l,0,!0)!==0)break e;aa=t,l.timeoutHandle=xd(Qf.bind(null,l,a,lt,Ci,Jc,t,pt,Fa,wl,xa,i,"Throttled",-0,0),n);break e}Qf(l,a,lt,Ci,Jc,t,pt,Fa,wl,xa,i,null,-0,0)}}break}while(!0);Lt(e)}function Qf(e,t,a,l,n,i,c,o,h,E,D,C,A,w){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Hf(t,i,C);var V=(i&62914560)===i?Ri-ct():(i&4194048)===i?Yf-ct():0;if(V=Vp(C,V),V!==null){aa=i,e.cancelPendingCommit=V(If.bind(null,e,t,i,a,l,n,c,o,h,D,C,null,A,w)),Ea(e,i,c,!E);return}}If(e,t,i,a,l,n,c,o,h)}function cp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ot(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,a,l){t&=~Kc,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-st(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&Ir(e,a,t)}function Ui(){return(me&6)===0?(jn(0),!1):!0}function Ic(){if(ne!==null){if(ge===0)var e=ne.return;else e=ne,Vt=Xa=null,hc(e),xl=null,ln=0,e=ne;for(;e!==null;)Sf(e.alternate,e),e=e.return;ne=null}}function Ol(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Tp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,Ic(),je=e,ne=a=kt(e.current,null),ue=t,ge=0,ht=null,xa=!1,Tl=Yl(e,t),Zc=!1,wl=pt=Kc=Fa=Sa=Oe=0,lt=xn=null,Jc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-st(l),i=1<<n;t|=e[n],l&=~i}return ta=t,ai(),a}function Vf(e,t){te=null,R.H=dn,t===bl||t===oi?(t=io(),ge=3):t===ac?(t=io(),ge=4):ge=t===Oc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,ne===null&&(Oe=1,Ei(e,xt(t,e.current)))}function Zf(){var e=dt.current;return e===null?!0:(ue&4194048)===ue?Et===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Et:!1}function Kf(){var e=R.H;return R.H=dn,e===null?dn:e}function Jf(){var e=R.A;return R.A=ip,e}function Hi(){Oe=4,xa||(ue&4194048)!==ue&&dt.current!==null||(Tl=!0),(Sa&134217727)===0&&(Fa&134217727)===0||je===null||Ea(je,ue,pt,!1)}function Pc(e,t,a){var l=me;me|=2;var n=Kf(),i=Jf();(je!==e||ue!==t)&&(Ci=null,Ol(e,t)),t=!1;var c=Oe;e:do try{if(ge!==0&&ne!==null){var o=ne,h=ht;switch(ge){case 8:Ic(),c=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var E=ge;if(ge=0,ht=null,Dl(e,o,h,E),a&&Tl){c=0;break e}break;default:E=ge,ge=0,ht=null,Dl(e,o,h,E)}}rp(),c=Oe;break}catch(D){Vf(e,D)}while(!0);return t&&e.shellSuspendCounter++,Vt=Xa=null,me=l,R.H=n,R.A=i,ne===null&&(je=null,ue=0,ai()),c}function rp(){for(;ne!==null;)$f(ne)}function sp(e,t){var a=me;me|=2;var l=Kf(),n=Jf();je!==e||ue!==t?(Ci=null,_i=ct()+500,Ol(e,t)):Tl=Yl(e,t);e:do try{if(ge!==0&&ne!==null){t=ne;var i=ht;t:switch(ge){case 1:ge=0,ht=null,Dl(e,t,i,1);break;case 2:case 9:if(lo(i)){ge=0,ht=null,Wf(t);break}t=function(){ge!==2&&ge!==9||je!==e||(ge=7),Lt(e)},i.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:lo(i)?(ge=0,ht=null,Wf(t)):(ge=0,ht=null,Dl(e,t,i,7));break;case 5:var c=null;switch(ne.tag){case 26:c=ne.memoizedState;case 5:case 27:var o=ne;if(c?Ud(c):o.stateNode.complete){ge=0,ht=null;var h=o.sibling;if(h!==null)ne=h;else{var E=o.return;E!==null?(ne=E,Bi(E)):ne=null}break t}}ge=0,ht=null,Dl(e,t,i,5);break;case 6:ge=0,ht=null,Dl(e,t,i,6);break;case 8:Ic(),Oe=6;break e;default:throw Error(s(462))}}op();break}catch(D){Vf(e,D)}while(!0);return Vt=Xa=null,R.H=l,R.A=n,me=a,ne!==null?0:(je=null,ue=0,ai(),Oe)}function op(){for(;ne!==null&&!_m();)$f(ne)}function $f(e){var t=bf(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?Bi(e):ne=t}function Wf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=mf(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=mf(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:hc(t);default:Sf(a,t),t=ne=Zs(t,ta),t=bf(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?Bi(e):ne=t}function Dl(e,t,a,l){Vt=Xa=null,hc(t),xl=null,ln=0;var n=t.return;try{if(Ih(e,n,t,a,ue)){Oe=1,Ei(e,xt(a,e.current)),ne=null;return}}catch(i){if(n!==null)throw ne=n,i;Oe=1,Ei(e,xt(a,e.current)),ne=null;return}t.flags&32768?(re||l===1?e=!0:Tl||(ue&536870912)!==0?e=!1:(xa=e=!0,(l===2||l===9||l===3||l===6)&&(l=dt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ff(t,e)):Bi(t)}function Bi(e){var t=e;do{if((t.flags&32768)!==0){Ff(t,xa);return}e=t.return;var a=tp(t.alternate,t,ta);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Oe===0&&(Oe=5)}function Ff(e,t){do{var a=ap(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Oe=6,ne=null}function If(e,t,a,l,n,i,c,o,h){e.cancelPendingCommit=null;do Li();while(qe!==0);if((me&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Gu,km(e,a,i,c,o,h),e===je&&(ne=je=null,ue=0),Ml=t,Na=e,aa=a,$c=i,Wc=n,Gf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hp(Yn,function(){return ld(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=G.p,G.p=2,c=me,me|=4;try{lp(e,t,a)}finally{me=c,G.p=n,R.T=l}}qe=1,Pf(),ed(),td()}}function Pf(){if(qe===1){qe=0;var e=Na,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=G.p;G.p=2;var n=me;me|=4;try{_f(t,e);var i=fr,c=Bs(e.containerInfo),o=i.focusedElem,h=i.selectionRange;if(c!==o&&o&&o.ownerDocument&&Hs(o.ownerDocument.documentElement,o)){if(h!==null&&Hu(o)){var E=h.start,D=h.end;if(D===void 0&&(D=E),"selectionStart"in o)o.selectionStart=E,o.selectionEnd=Math.min(D,o.value.length);else{var C=o.ownerDocument||document,A=C&&C.defaultView||window;if(A.getSelection){var w=A.getSelection(),V=o.textContent.length,W=Math.min(h.start,V),Se=h.end===void 0?W:Math.min(h.end,V);!w.extend&&W>Se&&(c=Se,Se=W,W=c);var x=Us(o,W),v=Us(o,Se);if(x&&v&&(w.rangeCount!==1||w.anchorNode!==x.node||w.anchorOffset!==x.offset||w.focusNode!==v.node||w.focusOffset!==v.offset)){var N=C.createRange();N.setStart(x.node,x.offset),w.removeAllRanges(),W>Se?(w.addRange(N),w.extend(v.node,v.offset)):(N.setEnd(v.node,v.offset),w.addRange(N))}}}}for(C=[],w=o;w=w.parentNode;)w.nodeType===1&&C.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<C.length;o++){var _=C[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Wi=!!or,fr=or=null}finally{me=n,G.p=l,R.T=a}}e.current=t,qe=2}}function ed(){if(qe===2){qe=0;var e=Na,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=G.p;G.p=2;var n=me;me|=4;try{wf(e,t.alternate,t)}finally{me=n,G.p=l,R.T=a}}qe=3}}function td(){if(qe===4||qe===3){qe=0,Cm();var e=Na,t=Ml,a=aa,l=Gf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,Ml=Na=null,ad(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ja=null),vu(a),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=G.p,G.p=2,R.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var o=l[c];i(o.value,{componentStack:o.stack})}}finally{R.T=t,G.p=n}}(aa&3)!==0&&Li(),Lt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Fc?Sn++:(Sn=0,Fc=e):Sn=0,jn(0)}}function ad(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,tn(t)))}function Li(){return Pf(),ed(),td(),ld()}function ld(){if(qe!==5)return!1;var e=Na,t=$c;$c=0;var a=vu(aa),l=R.T,n=G.p;try{G.p=32>a?32:a,R.T=null,a=Wc,Wc=null;var i=Na,c=aa;if(qe=0,Ml=Na=null,aa=0,(me&6)!==0)throw Error(s(331));var o=me;if(me|=4,Lf(i.current),Uf(i,i.current,c,a),me=o,jn(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(ql,i)}catch{}return!0}finally{G.p=n,R.T=l,ad(e,t)}}function nd(e,t,a){t=xt(a,t),t=Mc(e.stateNode,t,2),e=ga(e,t,2),e!==null&&(Gl(e,2),Lt(e))}function ve(e,t,a){if(e.tag===3)nd(e,e,a);else for(;t!==null;){if(t.tag===3){nd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ja===null||!ja.has(l))){e=xt(a,e),a=nf(2),l=ga(t,a,2),l!==null&&(uf(a,l,t,e),Gl(l,2),Lt(l));break}}t=t.return}}function er(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new up;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Zc=!0,n.add(a),e=fp.bind(null,e,t,a),t.then(e,e))}function fp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(ue&a)===a&&(Oe===4||Oe===3&&(ue&62914560)===ue&&300>ct()-Ri?(me&2)===0&&Ol(e,0):Kc|=a,wl===ue&&(wl=0)),Lt(e)}function id(e,t){t===0&&(t=Fr()),e=qa(e,t),e!==null&&(Gl(e,t),Lt(e))}function dp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),id(e,a)}function mp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),id(e,a)}function hp(e,t){return mu(e,t)}var qi=null,Rl=null,tr=!1,Yi=!1,ar=!1,za=0;function Lt(e){e!==Rl&&e.next===null&&(Rl===null?qi=Rl=e:Rl=Rl.next=e),Yi=!0,tr||(tr=!0,gp())}function jn(e,t){if(!ar&&Yi){ar=!0;do for(var a=!1,l=qi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-st(42|e)+1)-1,i&=n&~(c&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,sd(l,i))}else i=ue,i=Qn(l,l===je?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Yl(l,i)||(a=!0,sd(l,i));l=l.next}while(a);ar=!1}}function pp(){ud()}function ud(){Yi=tr=!1;var e=0;za!==0&&Ap()&&(e=za);for(var t=ct(),a=null,l=qi;l!==null;){var n=l.next,i=cd(l,t);i===0?(l.next=null,a===null?qi=n:a.next=n,n===null&&(Rl=a)):(a=l,(e!==0||(i&3)!==0)&&(Yi=!0)),l=n}qe!==0&&qe!==5||jn(e),za!==0&&(za=0)}function cd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-st(i),o=1<<c,h=n[c];h===-1?((o&a)===0||(o&l)!==0)&&(n[c]=Xm(o,t)):h<=t&&(e.expiredLanes|=o),i&=~o}if(t=je,a=ue,a=Qn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&hu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&hu(l),vu(a)){case 2:case 8:a=$r;break;case 32:a=Yn;break;case 268435456:a=Wr;break;default:a=Yn}return l=rd.bind(null,e),a=mu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&hu(l),e.callbackPriority=2,e.callbackNode=null,2}function rd(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Li()&&e.callbackNode!==a)return null;var l=ue;return l=Qn(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(kf(e,l,t),cd(e,ct()),e.callbackNode!=null&&e.callbackNode===a?rd.bind(null,e):null)}function sd(e,t){if(Li())return null;kf(e,t,!0)}function gp(){wp(function(){(me&6)!==0?mu(Jr,pp):ud()})}function lr(){if(za===0){var e=vl;e===0&&(e=Gn,Gn<<=1,(Gn&261888)===0&&(Gn=256)),za=e}return za}function od(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jn(""+e)}function fd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function vp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=od((n[Ie]||null).action),c=l.submitter;c&&(t=(t=c[Ie]||null)?od(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var o=new In("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(za!==0){var h=c?fd(n,c):new FormData(n);Nc(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(o.preventDefault(),h=c?fd(n,c):new FormData(n),Nc(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var nr=0;nr<Yu.length;nr++){var ir=Yu[nr],yp=ir.toLowerCase(),bp=ir[0].toUpperCase()+ir.slice(1);Dt(yp,"on"+bp)}Dt(Ys,"onAnimationEnd"),Dt(Gs,"onAnimationIteration"),Dt(Xs,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Uh,"onTransitionRun"),Dt(Hh,"onTransitionStart"),Dt(Bh,"onTransitionCancel"),Dt(ks,"onTransitionEnd"),ll("onMouseEnter",["mouseout","mouseover"]),ll("onMouseLeave",["mouseout","mouseover"]),ll("onPointerEnter",["pointerout","pointerover"]),ll("onPointerLeave",["pointerout","pointerover"]),Ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nn));function dd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var o=l[c],h=o.instance,E=o.currentTarget;if(o=o.listener,h!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=E;try{i(n)}catch(D){ti(D)}n.currentTarget=null,i=h}else for(c=0;c<l.length;c++){if(o=l[c],h=o.instance,E=o.currentTarget,o=o.listener,h!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=E;try{i(n)}catch(D){ti(D)}n.currentTarget=null,i=h}}}}function ie(e,t){var a=t[yu];a===void 0&&(a=t[yu]=new Set);var l=e+"__bubble";a.has(l)||(md(t,e,2,!1),a.add(l))}function ur(e,t,a){var l=0;t&&(l|=4),md(a,e,l,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[Gi]){e[Gi]=!0,ns.forEach(function(a){a!=="selectionchange"&&(xp.has(a)||ur(a,!1,e),ur(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,ur("selectionchange",!1,t))}}function md(e,t,a,l){switch(Xd(t)){case 2:var n=Jp;break;case 8:n=$p;break;default:n=jr}a=n.bind(null,t,a,e),n=void 0,!Tu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function rr(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var o=l.stateNode.containerInfo;if(o===n)break;if(c===4)for(c=l.return;c!==null;){var h=c.tag;if((h===3||h===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;o!==null;){if(c=el(o),c===null)return;if(h=c.tag,h===5||h===6||h===26||h===27){l=i=c;continue e}o=o.parentNode}}l=l.return}gs(function(){var E=i,D=zu(a),C=[];e:{var A=Qs.get(e);if(A!==void 0){var w=In,V=e;switch(e){case"keypress":if(Wn(a)===0)break e;case"keydown":case"keyup":w=mh;break;case"focusin":V="focus",w=Du;break;case"focusout":V="blur",w=Du;break;case"beforeblur":case"afterblur":w=Du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=gh;break;case Ys:case Gs:case Xs:w=nh;break;case ks:w=yh;break;case"scroll":case"scrollend":w=Pm;break;case"wheel":w=xh;break;case"copy":case"cut":case"paste":w=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ss;break;case"toggle":case"beforetoggle":w=jh}var W=(t&4)!==0,Se=!W&&(e==="scroll"||e==="scrollend"),x=W?A!==null?A+"Capture":null:A;W=[];for(var v=E,N;v!==null;){var _=v;if(N=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||N===null||x===null||(_=Ql(v,x),_!=null&&W.push(En(v,_,N))),Se)break;v=v.return}0<W.length&&(A=new w(A,V,null,a,D),C.push({event:A,listeners:W}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",A&&a!==Eu&&(V=a.relatedTarget||a.fromElement)&&(el(V)||V[Pa]))break e;if((w||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,w?(V=a.relatedTarget||a.toElement,w=E,V=V?el(V):null,V!==null&&(Se=p(V),W=V.tag,V!==Se||W!==5&&W!==27&&W!==6)&&(V=null)):(w=null,V=E),w!==V)){if(W=bs,_="onMouseLeave",x="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(W=Ss,_="onPointerLeave",x="onPointerEnter",v="pointer"),Se=w==null?A:kl(w),N=V==null?A:kl(V),A=new W(_,v+"leave",w,a,D),A.target=Se,A.relatedTarget=N,_=null,el(D)===E&&(W=new W(x,v+"enter",V,a,D),W.target=N,W.relatedTarget=Se,_=W),Se=_,w&&V)t:{for(W=Sp,x=w,v=V,N=0,_=x;_;_=W(_))N++;_=0;for(var J=v;J;J=W(J))_++;for(;0<N-_;)x=W(x),N--;for(;0<_-N;)v=W(v),_--;for(;N--;){if(x===v||v!==null&&x===v.alternate){W=x;break t}x=W(x),v=W(v)}W=null}else W=null;w!==null&&hd(C,A,w,W,!1),V!==null&&Se!==null&&hd(C,Se,V,W,!0)}}e:{if(A=E?kl(E):window,w=A.nodeName&&A.nodeName.toLowerCase(),w==="select"||w==="input"&&A.type==="file")var oe=Ms;else if(Ts(A))if(Os)oe=Rh;else{oe=Oh;var Z=Mh}else w=A.nodeName,!w||w.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?E&&Nu(E.elementType)&&(oe=Ms):oe=Dh;if(oe&&(oe=oe(e,E))){ws(C,oe,a,D);break e}Z&&Z(e,A,E),e==="focusout"&&E&&A.type==="number"&&E.memoizedProps.value!=null&&ju(A,"number",A.value)}switch(Z=E?kl(E):window,e){case"focusin":(Ts(Z)||Z.contentEditable==="true")&&(sl=Z,Bu=E,Il=null);break;case"focusout":Il=Bu=sl=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Ls(C,a,D);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":Ls(C,a,D)}var ae;if(_u)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else rl?zs(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(js&&a.locale!=="ko"&&(rl||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&rl&&(ae=vs()):(sa=D,wu="value"in sa?sa.value:sa.textContent,rl=!0)),Z=Xi(E,ce),0<Z.length&&(ce=new xs(ce,e,null,a,D),C.push({event:ce,listeners:Z}),ae?ce.data=ae:(ae=As(a),ae!==null&&(ce.data=ae)))),(ae=Eh?zh(e,a):Ah(e,a))&&(ce=Xi(E,"onBeforeInput"),0<ce.length&&(Z=new xs("onBeforeInput","beforeinput",null,a,D),C.push({event:Z,listeners:ce}),Z.data=ae)),vp(C,e,E,a,D)}dd(C,t)})}function En(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Xi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ql(e,a),n!=null&&l.unshift(En(e,n,i)),n=Ql(e,t),n!=null&&l.push(En(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Sp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hd(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var o=a,h=o.alternate,E=o.stateNode;if(o=o.tag,h!==null&&h===l)break;o!==5&&o!==26&&o!==27||E===null||(h=E,n?(E=Ql(a,i),E!=null&&c.unshift(En(a,E,h))):n||(E=Ql(a,i),E!=null&&c.push(En(a,E,h)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var jp=/\r\n?/g,Np=/\u0000|\uFFFD/g;function pd(e){return(typeof e=="string"?e:""+e).replace(jp,`
`).replace(Np,"")}function gd(e,t){return t=pd(t),pd(e)===t}function xe(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||il(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&il(e,""+l);break;case"className":Zn(e,"class",l);break;case"tabIndex":Zn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,a,l);break;case"style":hs(e,l,i);break;case"data":if(t!=="object"){Zn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Jn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",n.name,n,null),xe(e,t,"formEncType",n.formEncType,n,null),xe(e,t,"formMethod",n.formMethod,n,null),xe(e,t,"formTarget",n.formTarget,n,null)):(xe(e,t,"encType",n.encType,n,null),xe(e,t,"method",n.method,n,null),xe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Jn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Jn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Vn(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Vn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fm.get(a)||a,Vn(e,a,l))}}function sr(e,t,a,l,n,i){switch(a){case"style":hs(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?il(e,l):(typeof l=="number"||typeof l=="bigint")&&il(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!is.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ie]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Vn(e,a,l)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:xe(e,t,i,c,a,null)}}n&&xe(e,t,"srcSet",a.srcSet,a,null),l&&xe(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var o=i=c=n=null,h=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":n=D;break;case"type":c=D;break;case"checked":h=D;break;case"defaultChecked":E=D;break;case"value":i=D;break;case"defaultValue":o=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,t));break;default:xe(e,t,l,D,a,null)}}os(e,i,o,h,E,c,n,!1);return;case"select":ie("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":c=o;break;case"multiple":l=o;default:xe(e,t,n,o,a,null)}t=i,a=c,e.multiple=!!l,t!=null?nl(e,!!l,t,!1):a!=null&&nl(e,!!l,a,!0);return;case"textarea":ie("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:xe(e,t,c,o,a,null)}ds(e,l,n,i);return;case"option":for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null)&&(h==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":xe(e,t,h,l,a,null));return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<Nn.length;l++)ie(Nn[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:xe(e,t,E,l,a,null)}return;default:if(Nu(t)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&sr(e,t,D,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&xe(e,t,o,l,a,null))}function Ep(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,o=null,h=null,E=null,D=null;for(w in a){var C=a[w];if(a.hasOwnProperty(w)&&C!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":h=C;default:l.hasOwnProperty(w)||xe(e,t,w,null,l,C)}}for(var A in l){var w=l[A];if(C=a[A],l.hasOwnProperty(A)&&(w!=null||C!=null))switch(A){case"type":i=w;break;case"name":n=w;break;case"checked":E=w;break;case"defaultChecked":D=w;break;case"value":c=w;break;case"defaultValue":o=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,t));break;default:w!==C&&xe(e,t,A,w,l,C)}}Su(e,c,o,h,E,D,i,n);return;case"select":w=c=o=A=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":w=h;default:l.hasOwnProperty(i)||xe(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":A=i;break;case"defaultValue":o=i;break;case"multiple":c=i;default:i!==h&&xe(e,t,n,i,l,h)}t=o,a=c,l=w,A!=null?nl(e,!!a,A,!1):!!l!=!!a&&(t!=null?nl(e,!!a,t,!0):nl(e,!!a,a?[]:"",!1));return;case"textarea":w=A=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:xe(e,t,o,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":A=n;break;case"defaultValue":w=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&xe(e,t,c,n,l,i)}fs(e,A,w);return;case"option":for(var V in a)A=a[V],a.hasOwnProperty(V)&&A!=null&&!l.hasOwnProperty(V)&&(V==="selected"?e.selected=!1:xe(e,t,V,null,l,A));for(h in l)A=l[h],w=a[h],l.hasOwnProperty(h)&&A!==w&&(A!=null||w!=null)&&(h==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":xe(e,t,h,A,l,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)A=a[W],a.hasOwnProperty(W)&&A!=null&&!l.hasOwnProperty(W)&&xe(e,t,W,null,l,A);for(E in l)if(A=l[E],w=a[E],l.hasOwnProperty(E)&&A!==w&&(A!=null||w!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:xe(e,t,E,A,l,w)}return;default:if(Nu(t)){for(var Se in a)A=a[Se],a.hasOwnProperty(Se)&&A!==void 0&&!l.hasOwnProperty(Se)&&sr(e,t,Se,void 0,l,A);for(D in l)A=l[D],w=a[D],!l.hasOwnProperty(D)||A===w||A===void 0&&w===void 0||sr(e,t,D,A,l,w);return}}for(var x in a)A=a[x],a.hasOwnProperty(x)&&A!=null&&!l.hasOwnProperty(x)&&xe(e,t,x,null,l,A);for(C in l)A=l[C],w=a[C],!l.hasOwnProperty(C)||A===w||A==null&&w==null||xe(e,t,C,A,l,w)}function vd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,o=n.duration;if(i&&o&&vd(c)){for(c=0,o=n.responseEnd,l+=1;l<a.length;l++){var h=a[l],E=h.startTime;if(E>o)break;var D=h.transferSize,C=h.initiatorType;D&&vd(C)&&(h=h.responseEnd,c+=D*(h<o?1:(o-E)/(h-E)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var or=null,fr=null;function ki(e){return e.nodeType===9?e:e.ownerDocument}function yd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function dr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mr=null;function Ap(){var e=window.event;return e&&e.type==="popstate"?e===mr?!1:(mr=e,!0):(mr=null,!1)}var xd=typeof setTimeout=="function"?setTimeout:void 0,Tp=typeof clearTimeout=="function"?clearTimeout:void 0,Sd=typeof Promise=="function"?Promise:void 0,wp=typeof queueMicrotask=="function"?queueMicrotask:typeof Sd<"u"?function(e){return Sd.resolve(null).then(e).catch(Mp)}:xd;function Mp(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function jd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Hl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")zn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,o=i.nodeName;i[Xl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&zn(e.ownerDocument.body);a=n}while(a);Hl(t)}function Nd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function hr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hr(a),bu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Op(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Xl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function Dp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function Ed(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function pr(e){return e.data==="$?"||e.data==="$~"}function gr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vr=null;function zd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Td(e,t,a){switch(t=ki(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bu(e)}var At=new Map,wd=new Set;function Qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=G.d;G.d={f:_p,r:Cp,D:Up,C:Hp,L:Bp,m:Lp,X:Yp,S:qp,M:Gp};function _p(){var e=la.f(),t=Ui();return e||t}function Cp(e){var t=tl(e);t!==null&&t.tag===5&&t.type==="form"?Qo(t):la.r(e)}var _l=typeof document>"u"?null:document;function Md(e,t,a){var l=_l;if(l&&typeof t=="string"&&t){var n=yt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),wd.has(n)||(wd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Je(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Up(e){la.D(e),Md("dns-prefetch",e,null)}function Hp(e,t){la.C(e,t),Md("preconnect",e,t)}function Bp(e,t,a){la.L(e,t,a);var l=_l;if(l&&e&&t){var n='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+yt(a.imageSizes)+'"]')):n+='[href="'+yt(e)+'"]';var i=n;switch(t){case"style":i=Cl(e);break;case"script":i=Ul(e)}At.has(i)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),At.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(An(i))||t==="script"&&l.querySelector(Tn(i))||(t=l.createElement("link"),Je(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Lp(e,t){la.m(e,t);var a=_l;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ul(e)}if(!At.has(i)&&(e=T({rel:"modulepreload",href:e},t),At.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tn(i)))return}l=a.createElement("link"),Je(l,"link",e),Ye(l),a.head.appendChild(l)}}}function qp(e,t,a){la.S(e,t,a);var l=_l;if(l&&e){var n=al(l).hoistableStyles,i=Cl(e);t=t||"default";var c=n.get(i);if(!c){var o={loading:0,preload:null};if(c=l.querySelector(An(i)))o.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=At.get(i))&&yr(e,a);var h=c=l.createElement("link");Ye(h),Je(h,"link",e),h._p=new Promise(function(E,D){h.onload=E,h.onerror=D}),h.addEventListener("load",function(){o.loading|=1}),h.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Vi(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:o},n.set(i,c)}}}function Yp(e,t){la.X(e,t);var a=_l;if(a&&e){var l=al(a).hoistableScripts,n=Ul(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=T({src:e,async:!0},t),(t=At.get(n))&&br(e,t),i=a.createElement("script"),Ye(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Gp(e,t){la.M(e,t);var a=_l;if(a&&e){var l=al(a).hoistableScripts,n=Ul(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=T({src:e,async:!0,type:"module"},t),(t=At.get(n))&&br(e,t),i=a.createElement("script"),Ye(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Od(e,t,a,l){var n=(n=I.current)?Qi(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Cl(a.href),a=al(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Cl(a.href);var i=al(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(An(e)))&&!i._p&&(c.instance=i,c.state.loading=5),At.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},At.set(e,a),i||Xp(n,e,a,c.state))),t&&l===null)throw Error(s(528,""));return c}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ul(a),a=al(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Cl(e){return'href="'+yt(e)+'"'}function An(e){return'link[rel="stylesheet"]['+e+"]"}function Dd(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Xp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Je(t,"link",a),Ye(t),e.head.appendChild(t))}function Ul(e){return'[src="'+yt(e)+'"]'}function Tn(e){return"script[async]"+e}function Rd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+yt(a.href)+'"]');if(l)return t.instance=l,Ye(l),l;var n=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ye(l),Je(l,"style",n),Vi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Cl(a.href);var i=e.querySelector(An(n));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;l=Dd(a),(n=At.get(n))&&yr(l,n),i=(e.ownerDocument||e).createElement("link"),Ye(i);var c=i;return c._p=new Promise(function(o,h){c.onload=o,c.onerror=h}),Je(i,"link",l),t.state.loading|=4,Vi(i,a.precedence,e),t.instance=i;case"script":return i=Ul(a.src),(n=e.querySelector(Tn(i)))?(t.instance=n,Ye(n),n):(l=a,(n=At.get(i))&&(l=T({},a),br(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ye(n),Je(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Vi(l,a.precedence,e));return t.instance}function Vi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var o=l[c];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function yr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function br(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zi=null;function _d(e,t,a){if(Zi===null){var l=new Map,n=Zi=new Map;n.set(a,l)}else n=Zi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Xl]||i[Qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var o=l.get(c);o?o.push(i):l.set(c,[i])}}return l}function Cd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function kp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ud(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Cl(l.href),i=t.querySelector(An(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ki.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ye(i);return}i=t.ownerDocument||t,l=Dd(l),(n=At.get(n))&&yr(l,n),i=i.createElement("link"),Ye(i);var c=i;c._p=new Promise(function(o,h){c.onload=o,c.onerror=h}),Je(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ki.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var xr=0;function Vp(e,t){return e.stylesheets&&e.count===0&&$i(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&$i(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&xr===0&&(xr=62500*zp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$i(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>xr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$i(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ji=null;function $i(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ji=new Map,t.forEach(Zp,e),Ji=null,Ki.call(e))}function Zp(e,t){if(!(t.state.loading&4)){var a=Ji.get(e);if(a)var l=a.get(null);else{a=new Map,Ji.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Ki.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var wn={$$typeof:K,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Kp(e,t,a,l,n,i,c,o,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.hiddenUpdates=pu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Hd(e,t,a,l,n,i,c,o,h,E,D,C){return e=new Kp(e,t,a,c,h,E,D,C,o),t=1,i===!0&&(t|=24),i=ft(3,null,null,t),e.current=i,i.stateNode=e,t=Pu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},lc(i),e}function Bd(e){return e?(e=dl,e):dl}function Ld(e,t,a,l,n,i){n=Bd(n),l.context===null?l.context=n:l.pendingContext=n,l=pa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ga(e,l,t),a!==null&&(nt(a,e,t),un(a,e,t))}function qd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Sr(e,t){qd(e,t),(e=e.alternate)&&qd(e,t)}function Yd(e){if(e.tag===13||e.tag===31){var t=qa(e,67108864);t!==null&&nt(t,e,67108864),Sr(e,67108864)}}function Gd(e){if(e.tag===13||e.tag===31){var t=gt();t=gu(t);var a=qa(e,t);a!==null&&nt(a,e,t),Sr(e,t)}}var Wi=!0;function Jp(e,t,a,l){var n=R.T;R.T=null;var i=G.p;try{G.p=2,jr(e,t,a,l)}finally{G.p=i,R.T=n}}function $p(e,t,a,l){var n=R.T;R.T=null;var i=G.p;try{G.p=8,jr(e,t,a,l)}finally{G.p=i,R.T=n}}function jr(e,t,a,l){if(Wi){var n=Nr(l);if(n===null)rr(e,t,l,Fi,a),kd(e,l);else if(Fp(n,e,t,a,l))l.stopPropagation();else if(kd(e,l),t&4&&-1<Wp.indexOf(e)){for(;n!==null;){var i=tl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ca(i.pendingLanes);if(c!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;c;){var h=1<<31-st(c);o.entanglements[1]|=h,c&=~h}Lt(i),(me&6)===0&&(_i=ct()+500,jn(0))}}break;case 31:case 13:o=qa(i,2),o!==null&&nt(o,i,2),Ui(),Sr(i,2)}if(i=Nr(l),i===null&&rr(e,t,l,Fi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else rr(e,t,l,null,a)}}function Nr(e){return e=zu(e),Er(e)}var Fi=null;function Er(e){if(Fi=null,e=el(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=M(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fi=e,null}function Xd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Um()){case Jr:return 2;case $r:return 8;case Yn:case Hm:return 32;case Wr:return 268435456;default:return 32}default:return 32}}var zr=!1,Ta=null,wa=null,Ma=null,Mn=new Map,On=new Map,Oa=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kd(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function Dn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=tl(t),t!==null&&Yd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Fp(e,t,a,l,n){switch(t){case"focusin":return Ta=Dn(Ta,e,t,a,l,n),!0;case"dragenter":return wa=Dn(wa,e,t,a,l,n),!0;case"mouseover":return Ma=Dn(Ma,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Mn.set(i,Dn(Mn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,On.set(i,Dn(On.get(i)||null,e,t,a,l,n)),!0}return!1}function Qd(e){var t=el(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,as(e.priority,function(){Gd(a)});return}}else if(t===31){if(t=M(a),t!==null){e.blockedOn=t,as(e.priority,function(){Gd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Nr(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Eu=l,a.target.dispatchEvent(l),Eu=null}else return t=tl(a),t!==null&&Yd(t),e.blockedOn=a,!1;t.shift()}return!0}function Vd(e,t,a){Ii(e)&&a.delete(t)}function Ip(){zr=!1,Ta!==null&&Ii(Ta)&&(Ta=null),wa!==null&&Ii(wa)&&(wa=null),Ma!==null&&Ii(Ma)&&(Ma=null),Mn.forEach(Vd),On.forEach(Vd)}function Pi(e,t){e.blockedOn===t&&(e.blockedOn=null,zr||(zr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ip)))}var eu=null;function Zd(e){eu!==e&&(eu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){eu===e&&(eu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Er(l||a)===null)continue;break}var i=tl(a);i!==null&&(e.splice(t,3),t-=3,Nc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Hl(e){function t(h){return Pi(h,e)}Ta!==null&&Pi(Ta,e),wa!==null&&Pi(wa,e),Ma!==null&&Pi(Ma,e),Mn.forEach(t),On.forEach(t);for(var a=0;a<Oa.length;a++){var l=Oa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)Qd(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[Ie]||null;if(typeof i=="function")c||Zd(a);else if(c){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Ie]||null)o=c.formAction;else if(Er(n)!==null)continue}else o=c.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),Zd(a)}}}function Kd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ar(e){this._internalRoot=e}tu.prototype.render=Ar.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=gt();Ld(a,l,e,t,null,null)},tu.prototype.unmount=Ar.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ld(e.current,2,null,e,null,null),Ui(),t[Pa]=null}};function tu(e){this._internalRoot=e}tu.prototype.unstable_scheduleHydration=function(e){if(e){var t=ts();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Oa.length&&t!==0&&t<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&Qd(e)}};var Jd=d.version;if(Jd!=="19.2.3")throw Error(s(527,Jd,"19.2.3"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?O(e):null,e=e===null?null:e.stateNode,e};var Pp={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{ql=au.inject(Pp),rt=au}catch{}}return _n.createRoot=function(e,t){if(!m(e))throw Error(s(299));var a=!1,l="",n=ef,i=tf,c=af;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Hd(e,1,!1,null,null,a,l,null,n,i,c,Kd),e[Pa]=t.current,cr(e),new Ar(t)},_n.hydrateRoot=function(e,t,a){if(!m(e))throw Error(s(299));var l=!1,n="",i=ef,c=tf,o=af,h=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(h=a.formState)),t=Hd(e,1,!0,t,a??null,l,n,h,i,c,o,Kd),t.context=Bd(null),a=t.current,l=gt(),l=gu(l),n=pa(l),n.callback=null,ga(a,n,l),a=l,t.current.lanes=a,Gl(t,a),Lt(t),e[Pa]=t.current,cr(e),new tu(t)},_n.version="19.2.3",_n}var nm;function sg(){if(nm)return Mr.exports;nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),Mr.exports=rg(),Mr.exports}var og=sg();const fg=fm(og);var im="popstate";function dg(r={}){function d(m,p){let{pathname:g="/",search:M="",hash:j=""}=Ia(m.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Hr("",{pathname:g,search:M,hash:j},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function f(m,p){let g=m.document.querySelector("base"),M="";if(g&&g.getAttribute("href")){let j=m.location.href,y=j.indexOf("#");M=y===-1?j:j.slice(0,y)}return M+"#"+(typeof p=="string"?p:Un(p))}function s(m,p){wt(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return hg(d,f,s,r)}function we(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function wt(r,d){if(!r){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function mg(){return Math.random().toString(36).substring(2,10)}function um(r,d){return{usr:r.state,key:r.key,idx:d}}function Hr(r,d,f=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof d=="string"?Ia(d):d,state:f,key:d&&d.key||s||mg()}}function Un({pathname:r="/",search:d="",hash:f=""}){return d&&d!=="?"&&(r+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(r+=f.charAt(0)==="#"?f:"#"+f),r}function Ia(r){let d={};if(r){let f=r.indexOf("#");f>=0&&(d.hash=r.substring(f),r=r.substring(0,f));let s=r.indexOf("?");s>=0&&(d.search=r.substring(s),r=r.substring(0,s)),r&&(d.pathname=r)}return d}function hg(r,d,f,s={}){let{window:m=document.defaultView,v5Compat:p=!1}=s,g=m.history,M="POP",j=null,y=O();y==null&&(y=0,g.replaceState({...g.state,idx:y},""));function O(){return(g.state||{idx:null}).idx}function T(){M="POP";let H=O(),k=H==null?null:H-y;y=H,j&&j({action:M,location:B.location,delta:k})}function q(H,k){M="PUSH";let Q=Hr(B.location,H,k);f&&f(Q,H),y=O()+1;let K=um(Q,y),se=B.createHref(Q);try{g.pushState(K,"",se)}catch(ye){if(ye instanceof DOMException&&ye.name==="DataCloneError")throw ye;m.location.assign(se)}p&&j&&j({action:M,location:B.location,delta:1})}function L(H,k){M="REPLACE";let Q=Hr(B.location,H,k);f&&f(Q,H),y=O();let K=um(Q,y),se=B.createHref(Q);g.replaceState(K,"",se),p&&j&&j({action:M,location:B.location,delta:0})}function Y(H){return pg(H)}let B={get action(){return M},get location(){return r(m,g)},listen(H){if(j)throw new Error("A history only accepts one active listener");return m.addEventListener(im,T),j=H,()=>{m.removeEventListener(im,T),j=null}},createHref(H){return d(m,H)},createURL:Y,encodeLocation(H){let k=Y(H);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:q,replace:L,go(H){return g.go(H)}};return B}function pg(r,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),we(f,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Un(r);return s=s.replace(/ $/,"%20"),!d&&s.startsWith("//")&&(s=f+s),new URL(s,f)}function dm(r,d,f="/"){return gg(r,d,f,!1)}function gg(r,d,f,s){let m=typeof d=="string"?Ia(d):d,p=ia(m.pathname||"/",f);if(p==null)return null;let g=mm(r);vg(g);let M=null;for(let j=0;M==null&&j<g.length;++j){let y=wg(p);M=Ag(g[j],y,s)}return M}function mm(r,d=[],f=[],s="",m=!1){let p=(g,M,j=m,y)=>{let O={relativePath:y===void 0?g.path||"":y,caseSensitive:g.caseSensitive===!0,childrenIndex:M,route:g};if(O.relativePath.startsWith("/")){if(!O.relativePath.startsWith(s)&&j)return;we(O.relativePath.startsWith(s),`Absolute route path "${O.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),O.relativePath=O.relativePath.slice(s.length)}let T=na([s,O.relativePath]),q=f.concat(O);g.children&&g.children.length>0&&(we(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),mm(g.children,d,q,T,j)),!(g.path==null&&!g.index)&&d.push({path:T,score:Eg(T,g.index),routesMeta:q})};return r.forEach((g,M)=>{if(g.path===""||!g.path?.includes("?"))p(g,M);else for(let j of hm(g.path))p(g,M,!0,j)}),d}function hm(r){let d=r.split("/");if(d.length===0)return[];let[f,...s]=d,m=f.endsWith("?"),p=f.replace(/\?$/,"");if(s.length===0)return m?[p,""]:[p];let g=hm(s.join("/")),M=[];return M.push(...g.map(j=>j===""?p:[p,j].join("/"))),m&&M.push(...g),M.map(j=>r.startsWith("/")&&j===""?"/":j)}function vg(r){r.sort((d,f)=>d.score!==f.score?f.score-d.score:zg(d.routesMeta.map(s=>s.childrenIndex),f.routesMeta.map(s=>s.childrenIndex)))}var yg=/^:[\w-]+$/,bg=3,xg=2,Sg=1,jg=10,Ng=-2,cm=r=>r==="*";function Eg(r,d){let f=r.split("/"),s=f.length;return f.some(cm)&&(s+=Ng),d&&(s+=xg),f.filter(m=>!cm(m)).reduce((m,p)=>m+(yg.test(p)?bg:p===""?Sg:jg),s)}function zg(r,d){return r.length===d.length&&r.slice(0,-1).every((s,m)=>s===d[m])?r[r.length-1]-d[d.length-1]:0}function Ag(r,d,f=!1){let{routesMeta:s}=r,m={},p="/",g=[];for(let M=0;M<s.length;++M){let j=s[M],y=M===s.length-1,O=p==="/"?d:d.slice(p.length)||"/",T=uu({path:j.relativePath,caseSensitive:j.caseSensitive,end:y},O),q=j.route;if(!T&&y&&f&&!s[s.length-1].route.index&&(T=uu({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},O)),!T)return null;Object.assign(m,T.params),g.push({params:m,pathname:na([p,T.pathname]),pathnameBase:Rg(na([p,T.pathnameBase])),route:q}),T.pathnameBase!=="/"&&(p=na([p,T.pathnameBase]))}return g}function uu(r,d){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[f,s]=Tg(r.path,r.caseSensitive,r.end),m=d.match(f);if(!m)return null;let p=m[0],g=p.replace(/(.)\/+$/,"$1"),M=m.slice(1);return{params:s.reduce((y,{paramName:O,isOptional:T},q)=>{if(O==="*"){let Y=M[q]||"";g=p.slice(0,p.length-Y.length).replace(/(.)\/+$/,"$1")}const L=M[q];return T&&!L?y[O]=void 0:y[O]=(L||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:g,pattern:r}}function Tg(r,d=!1,f=!0){wt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,M,j)=>(s.push({paramName:M,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),s]}function wg(r){try{return r.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return wt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),r}}function ia(r,d){if(d==="/")return r;if(!r.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,s=r.charAt(f);return s&&s!=="/"?null:r.slice(f)||"/"}var pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mg=r=>pm.test(r);function Og(r,d="/"){let{pathname:f,search:s="",hash:m=""}=typeof r=="string"?Ia(r):r,p;if(f)if(Mg(f))p=f;else{if(f.includes("//")){let g=f;f=f.replace(/\/\/+/g,"/"),wt(!1,`Pathnames cannot have embedded double slashes - normalizing ${g} -> ${f}`)}f.startsWith("/")?p=rm(f.substring(1),"/"):p=rm(f,d)}else p=d;return{pathname:p,search:_g(s),hash:Cg(m)}}function rm(r,d){let f=d.replace(/\/+$/,"").split("/");return r.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function _r(r,d,f,s){return`Cannot include a '${r}' character in a manually specified \`to.${d}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Dg(r){return r.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function gm(r){let d=Dg(r);return d.map((f,s)=>s===d.length-1?f.pathname:f.pathnameBase)}function vm(r,d,f,s=!1){let m;typeof r=="string"?m=Ia(r):(m={...r},we(!m.pathname||!m.pathname.includes("?"),_r("?","pathname","search",m)),we(!m.pathname||!m.pathname.includes("#"),_r("#","pathname","hash",m)),we(!m.search||!m.search.includes("#"),_r("#","search","hash",m)));let p=r===""||m.pathname==="",g=p?"/":m.pathname,M;if(g==null)M=f;else{let T=d.length-1;if(!s&&g.startsWith("..")){let q=g.split("/");for(;q[0]==="..";)q.shift(),T-=1;m.pathname=q.join("/")}M=T>=0?d[T]:"/"}let j=Og(m,M),y=g&&g!=="/"&&g.endsWith("/"),O=(p||g===".")&&f.endsWith("/");return!j.pathname.endsWith("/")&&(y||O)&&(j.pathname+="/"),j}var na=r=>r.join("/").replace(/\/\/+/g,"/"),Rg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),_g=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Cg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Ug=class{constructor(r,d,f,s=!1){this.status=r,this.statusText=d||"",this.internal=s,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Hg(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Bg(r){return r.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bm(r,d){let f=r;if(typeof f!="string"||!pm.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let s=f,m=!1;if(ym)try{let p=new URL(window.location.href),g=f.startsWith("//")?new URL(p.protocol+f):new URL(f),M=ia(g.pathname,d);g.origin===p.origin&&M!=null?f=M+g.search+g.hash:m=!0}catch{wt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var xm=["POST","PUT","PATCH","DELETE"];new Set(xm);var Lg=["GET",...xm];new Set(Lg);var Bl=z.createContext(null);Bl.displayName="DataRouter";var cu=z.createContext(null);cu.displayName="DataRouterState";var qg=z.createContext(!1),Sm=z.createContext({isTransitioning:!1});Sm.displayName="ViewTransition";var Yg=z.createContext(new Map);Yg.displayName="Fetchers";var Gg=z.createContext(null);Gg.displayName="Await";var Mt=z.createContext(null);Mt.displayName="Navigation";var Hn=z.createContext(null);Hn.displayName="Location";var ua=z.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var Yr=z.createContext(null);Yr.displayName="RouteError";var jm="REACT_ROUTER_ERROR",Xg="REDIRECT",kg="ROUTE_ERROR_RESPONSE";function Qg(r){if(r.startsWith(`${jm}:${Xg}:{`))try{let d=JSON.parse(r.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function Vg(r){if(r.startsWith(`${jm}:${kg}:{`))try{let d=JSON.parse(r.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new Ug(d.status,d.statusText,d.data)}catch{}}function Zg(r,{relative:d}={}){we(Bn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:s}=z.useContext(Mt),{hash:m,pathname:p,search:g}=Ln(r,{relative:d}),M=p;return f!=="/"&&(M=p==="/"?f:na([f,p])),s.createHref({pathname:M,search:g,hash:m})}function Bn(){return z.useContext(Hn)!=null}function Ra(){return we(Bn(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Hn).location}var Nm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Em(r){z.useContext(Mt).static||z.useLayoutEffect(r)}function Gr(){let{isDataRoute:r}=z.useContext(ua);return r?i0():Kg()}function Kg(){we(Bn(),"useNavigate() may be used only in the context of a <Router> component.");let r=z.useContext(Bl),{basename:d,navigator:f}=z.useContext(Mt),{matches:s}=z.useContext(ua),{pathname:m}=Ra(),p=JSON.stringify(gm(s)),g=z.useRef(!1);return Em(()=>{g.current=!0}),z.useCallback((j,y={})=>{if(wt(g.current,Nm),!g.current)return;if(typeof j=="number"){f.go(j);return}let O=vm(j,JSON.parse(p),m,y.relative==="path");r==null&&d!=="/"&&(O.pathname=O.pathname==="/"?d:na([d,O.pathname])),(y.replace?f.replace:f.push)(O,y.state,y)},[d,f,p,m,r])}z.createContext(null);function Ln(r,{relative:d}={}){let{matches:f}=z.useContext(ua),{pathname:s}=Ra(),m=JSON.stringify(gm(f));return z.useMemo(()=>vm(r,JSON.parse(m),s,d==="path"),[r,m,s,d])}function Jg(r,d){return zm(r,d)}function zm(r,d,f,s,m){we(Bn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=z.useContext(Mt),{matches:g}=z.useContext(ua),M=g[g.length-1],j=M?M.params:{},y=M?M.pathname:"/",O=M?M.pathnameBase:"/",T=M&&M.route;{let Q=T&&T.path||"";Tm(y,!T||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let q=Ra(),L;if(d){let Q=typeof d=="string"?Ia(d):d;we(O==="/"||Q.pathname?.startsWith(O),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${O}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),L=Q}else L=q;let Y=L.pathname||"/",B=Y;if(O!=="/"){let Q=O.replace(/^\//,"").split("/");B="/"+Y.replace(/^\//,"").split("/").slice(Q.length).join("/")}let H=dm(r,{pathname:B});wt(T||H!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),wt(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=Pg(H&&H.map(Q=>Object.assign({},Q,{params:Object.assign({},j,Q.params),pathname:na([O,p.encodeLocation?p.encodeLocation(Q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?O:na([O,p.encodeLocation?p.encodeLocation(Q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathnameBase])})),g,f,s,m);return d&&k?z.createElement(Hn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},k):k}function $g(){let r=n0(),d=Hg(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),f=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:s},p={padding:"2px 4px",backgroundColor:s},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:p},"ErrorBoundary")," or"," ",z.createElement("code",{style:p},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},d),f?z.createElement("pre",{style:m},f):null,g)}var Wg=z.createElement($g,null),Am=class extends z.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,d){return d.location!==r.location||d.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:d.error,location:d.location,revalidation:r.revalidation||d.revalidation}}componentDidCatch(r,d){this.props.onError?this.props.onError(r,d):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const f=Vg(r.digest);f&&(r=f)}let d=r!==void 0?z.createElement(ua.Provider,{value:this.props.routeContext},z.createElement(Yr.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?z.createElement(Fg,{error:r},d):d}};Am.contextType=qg;var Cr=new WeakMap;function Fg({children:r,error:d}){let{basename:f}=z.useContext(Mt);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let s=Qg(d.digest);if(s){let m=Cr.get(d);if(m)throw m;let p=bm(s.location,f);if(ym&&!Cr.get(d))if(p.isExternal||s.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:s.replace}));throw Cr.set(d,g),g}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return r}function Ig({routeContext:r,match:d,children:f}){let s=z.useContext(Bl);return s&&s.static&&s.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=d.route.id),z.createElement(ua.Provider,{value:r},f)}function Pg(r,d=[],f=null,s=null,m=null){if(r==null){if(!f)return null;if(f.errors)r=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)r=f.matches;else return null}let p=r,g=f?.errors;if(g!=null){let O=p.findIndex(T=>T.route.id&&g?.[T.route.id]!==void 0);we(O>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),p=p.slice(0,Math.min(p.length,O+1))}let M=!1,j=-1;if(f)for(let O=0;O<p.length;O++){let T=p[O];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(j=O),T.route.id){let{loaderData:q,errors:L}=f,Y=T.route.loader&&!q.hasOwnProperty(T.route.id)&&(!L||L[T.route.id]===void 0);if(T.route.lazy||Y){M=!0,j>=0?p=p.slice(0,j+1):p=[p[0]];break}}}let y=f&&s?(O,T)=>{s(O,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:Bg(f.matches),errorInfo:T})}:void 0;return p.reduceRight((O,T,q)=>{let L,Y=!1,B=null,H=null;f&&(L=g&&T.route.id?g[T.route.id]:void 0,B=T.route.errorElement||Wg,M&&(j<0&&q===0?(Tm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,H=null):j===q&&(Y=!0,H=T.route.hydrateFallbackElement||null)));let k=d.concat(p.slice(0,q+1)),Q=()=>{let K;return L?K=B:Y?K=H:T.route.Component?K=z.createElement(T.route.Component,null):T.route.element?K=T.route.element:K=O,z.createElement(Ig,{match:T,routeContext:{outlet:O,matches:k,isDataRoute:f!=null},children:K})};return f&&(T.route.ErrorBoundary||T.route.errorElement||q===0)?z.createElement(Am,{location:f.location,revalidation:f.revalidation,component:B,error:L,children:Q(),routeContext:{outlet:null,matches:k,isDataRoute:!0},onError:y}):Q()},null)}function Xr(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e0(r){let d=z.useContext(Bl);return we(d,Xr(r)),d}function t0(r){let d=z.useContext(cu);return we(d,Xr(r)),d}function a0(r){let d=z.useContext(ua);return we(d,Xr(r)),d}function kr(r){let d=a0(r),f=d.matches[d.matches.length-1];return we(f.route.id,`${r} can only be used on routes that contain a unique "id"`),f.route.id}function l0(){return kr("useRouteId")}function n0(){let r=z.useContext(Yr),d=t0("useRouteError"),f=kr("useRouteError");return r!==void 0?r:d.errors?.[f]}function i0(){let{router:r}=e0("useNavigate"),d=kr("useNavigate"),f=z.useRef(!1);return Em(()=>{f.current=!0}),z.useCallback(async(m,p={})=>{wt(f.current,Nm),f.current&&(typeof m=="number"?await r.navigate(m):await r.navigate(m,{fromRouteId:d,...p}))},[r,d])}var sm={};function Tm(r,d,f){!d&&!sm[r]&&(sm[r]=!0,wt(!1,f))}z.memo(u0);function u0({routes:r,future:d,state:f,onError:s}){return zm(r,void 0,f,s,d)}function Tt(r){we(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function c0({basename:r="/",children:d=null,location:f,navigationType:s="POP",navigator:m,static:p=!1,unstable_useTransitions:g}){we(!Bn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let M=r.replace(/^\/*/,"/"),j=z.useMemo(()=>({basename:M,navigator:m,static:p,unstable_useTransitions:g,future:{}}),[M,m,p,g]);typeof f=="string"&&(f=Ia(f));let{pathname:y="/",search:O="",hash:T="",state:q=null,key:L="default"}=f,Y=z.useMemo(()=>{let B=ia(y,M);return B==null?null:{location:{pathname:B,search:O,hash:T,state:q,key:L},navigationType:s}},[M,y,O,T,q,L,s]);return wt(Y!=null,`<Router basename="${M}"> is not able to match the URL "${y}${O}${T}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:z.createElement(Mt.Provider,{value:j},z.createElement(Hn.Provider,{children:d,value:Y}))}function r0({children:r,location:d}){return Jg(Br(r),d)}function Br(r,d=[]){let f=[];return z.Children.forEach(r,(s,m)=>{if(!z.isValidElement(s))return;let p=[...d,m];if(s.type===z.Fragment){f.push.apply(f,Br(s.props.children,p));return}we(s.type===Tt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),we(!s.props.index||!s.props.children,"An index route cannot have child routes.");let g={id:s.props.id||p.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(g.children=Br(s.props.children,p)),f.push(g)}),f}var nu="get",iu="application/x-www-form-urlencoded";function ru(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function s0(r){return ru(r)&&r.tagName.toLowerCase()==="button"}function o0(r){return ru(r)&&r.tagName.toLowerCase()==="form"}function f0(r){return ru(r)&&r.tagName.toLowerCase()==="input"}function d0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function m0(r,d){return r.button===0&&(!d||d==="_self")&&!d0(r)}var lu=null;function h0(){if(lu===null)try{new FormData(document.createElement("form"),0),lu=!1}catch{lu=!0}return lu}var p0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ur(r){return r!=null&&!p0.has(r)?(wt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`),null):r}function g0(r,d){let f,s,m,p,g;if(o0(r)){let M=r.getAttribute("action");s=M?ia(M,d):null,f=r.getAttribute("method")||nu,m=Ur(r.getAttribute("enctype"))||iu,p=new FormData(r)}else if(s0(r)||f0(r)&&(r.type==="submit"||r.type==="image")){let M=r.form;if(M==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=r.getAttribute("formaction")||M.getAttribute("action");if(s=j?ia(j,d):null,f=r.getAttribute("formmethod")||M.getAttribute("method")||nu,m=Ur(r.getAttribute("formenctype"))||Ur(M.getAttribute("enctype"))||iu,p=new FormData(M,r),!h0()){let{name:y,type:O,value:T}=r;if(O==="image"){let q=y?`${y}.`:"";p.append(`${q}x`,"0"),p.append(`${q}y`,"0")}else y&&p.append(y,T)}}else{if(ru(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=nu,s=null,m=iu,g=r}return p&&m==="text/plain"&&(g=p,p=void 0),{action:s,method:f.toLowerCase(),encType:m,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qr(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function v0(r,d,f,s){let m=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${s}`:m.pathname=`${m.pathname}.${s}`:m.pathname==="/"?m.pathname=`_root.${s}`:d&&ia(m.pathname,d)==="/"?m.pathname=`${d.replace(/\/$/,"")}/_root.${s}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${s}`,m}async function y0(r,d){if(r.id in d)return d[r.id];try{let f=await import(r.module);return d[r.id]=f,f}catch(f){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function b0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function x0(r,d,f){let s=await Promise.all(r.map(async m=>{let p=d.routes[m.route.id];if(p){let g=await y0(p,f);return g.links?g.links():[]}return[]}));return E0(s.flat(1).filter(b0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function om(r,d,f,s,m,p){let g=(j,y)=>f[y]?j.route.id!==f[y].route.id:!0,M=(j,y)=>f[y].pathname!==j.pathname||f[y].route.path?.endsWith("*")&&f[y].params["*"]!==j.params["*"];return p==="assets"?d.filter((j,y)=>g(j,y)||M(j,y)):p==="data"?d.filter((j,y)=>{let O=s.routes[j.route.id];if(!O||!O.hasLoader)return!1;if(g(j,y)||M(j,y))return!0;if(j.route.shouldRevalidate){let T=j.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function S0(r,d,{includeHydrateFallback:f}={}){return j0(r.map(s=>{let m=d.routes[s.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function j0(r){return[...new Set(r)]}function N0(r){let d={},f=Object.keys(r).sort();for(let s of f)d[s]=r[s];return d}function E0(r,d){let f=new Set;return new Set(d),r.reduce((s,m)=>{let p=JSON.stringify(N0(m));return f.has(p)||(f.add(p),s.push({key:p,link:m})),s},[])}function wm(){let r=z.useContext(Bl);return Qr(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function z0(){let r=z.useContext(cu);return Qr(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Vr=z.createContext(void 0);Vr.displayName="FrameworkContext";function Mm(){let r=z.useContext(Vr);return Qr(r,"You must render this element inside a <HydratedRouter> element"),r}function A0(r,d){let f=z.useContext(Vr),[s,m]=z.useState(!1),[p,g]=z.useState(!1),{onFocus:M,onBlur:j,onMouseEnter:y,onMouseLeave:O,onTouchStart:T}=d,q=z.useRef(null);z.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let B=k=>{k.forEach(Q=>{g(Q.isIntersecting)})},H=new IntersectionObserver(B,{threshold:.5});return q.current&&H.observe(q.current),()=>{H.disconnect()}}},[r]),z.useEffect(()=>{if(s){let B=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(B)}}},[s]);let L=()=>{m(!0)},Y=()=>{m(!1),g(!1)};return f?r!=="intent"?[p,q,{}]:[p,q,{onFocus:Cn(M,L),onBlur:Cn(j,Y),onMouseEnter:Cn(y,L),onMouseLeave:Cn(O,Y),onTouchStart:Cn(T,L)}]:[!1,q,{}]}function Cn(r,d){return f=>{r&&r(f),f.defaultPrevented||d(f)}}function T0({page:r,...d}){let{router:f}=wm(),s=z.useMemo(()=>dm(f.routes,r,f.basename),[f.routes,r,f.basename]);return s?z.createElement(M0,{page:r,matches:s,...d}):null}function w0(r){let{manifest:d,routeModules:f}=Mm(),[s,m]=z.useState([]);return z.useEffect(()=>{let p=!1;return x0(r,d,f).then(g=>{p||m(g)}),()=>{p=!0}},[r,d,f]),s}function M0({page:r,matches:d,...f}){let s=Ra(),{future:m,manifest:p,routeModules:g}=Mm(),{basename:M}=wm(),{loaderData:j,matches:y}=z0(),O=z.useMemo(()=>om(r,d,y,p,s,"data"),[r,d,y,p,s]),T=z.useMemo(()=>om(r,d,y,p,s,"assets"),[r,d,y,p,s]),q=z.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let B=new Set,H=!1;if(d.forEach(Q=>{let K=p.routes[Q.route.id];!K||!K.hasLoader||(!O.some(se=>se.route.id===Q.route.id)&&Q.route.id in j&&g[Q.route.id]?.shouldRevalidate||K.hasClientLoader?H=!0:B.add(Q.route.id))}),B.size===0)return[];let k=v0(r,M,m.unstable_trailingSlashAwareDataRequests,"data");return H&&B.size>0&&k.searchParams.set("_routes",d.filter(Q=>B.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[k.pathname+k.search]},[M,m.unstable_trailingSlashAwareDataRequests,j,s,p,O,d,r,g]),L=z.useMemo(()=>S0(T,p),[T,p]),Y=w0(T);return z.createElement(z.Fragment,null,q.map(B=>z.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...f})),L.map(B=>z.createElement("link",{key:B,rel:"modulepreload",href:B,...f})),Y.map(({key:B,link:H})=>z.createElement("link",{key:B,nonce:f.nonce,...H})))}function O0(...r){return d=>{r.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var D0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{D0&&(window.__reactRouterVersion="7.12.0")}catch{}function R0({basename:r,children:d,unstable_useTransitions:f,window:s}){let m=z.useRef();m.current==null&&(m.current=dg({window:s,v5Compat:!0}));let p=m.current,[g,M]=z.useState({action:p.action,location:p.location}),j=z.useCallback(y=>{f===!1?M(y):z.startTransition(()=>M(y))},[f]);return z.useLayoutEffect(()=>p.listen(j),[p,j]),z.createElement(c0,{basename:r,children:d,location:g.location,navigationType:g.action,navigator:p,unstable_useTransitions:f})}var Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,he=z.forwardRef(function({onClick:d,discover:f="render",prefetch:s="none",relative:m,reloadDocument:p,replace:g,state:M,target:j,to:y,preventScrollReset:O,viewTransition:T,unstable_defaultShouldRevalidate:q,...L},Y){let{basename:B,unstable_useTransitions:H}=z.useContext(Mt),k=typeof y=="string"&&Om.test(y),Q=bm(y,B);y=Q.to;let K=Zg(y,{relative:m}),[se,ye,Ae]=A0(s,L),P=H0(y,{replace:g,state:M,target:j,preventScrollReset:O,relative:m,viewTransition:T,unstable_defaultShouldRevalidate:q,unstable_useTransitions:H});function Ne(We){d&&d(We),We.defaultPrevented||P(We)}let De=z.createElement("a",{...L,...Ae,href:Q.absoluteURL||K,onClick:Q.isExternal||p?d:Ne,ref:O0(Y,ye),target:j,"data-discover":!k&&f==="render"?"true":void 0});return se&&!k?z.createElement(z.Fragment,null,De,z.createElement(T0,{page:K})):De});he.displayName="Link";var _0=z.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:s="",end:m=!1,style:p,to:g,viewTransition:M,children:j,...y},O){let T=Ln(g,{relative:y.relative}),q=Ra(),L=z.useContext(cu),{navigator:Y,basename:B}=z.useContext(Mt),H=L!=null&&G0(T)&&M===!0,k=Y.encodeLocation?Y.encodeLocation(T).pathname:T.pathname,Q=q.pathname,K=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;f||(Q=Q.toLowerCase(),K=K?K.toLowerCase():null,k=k.toLowerCase()),K&&B&&(K=ia(K,B)||K);const se=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let ye=Q===k||!m&&Q.startsWith(k)&&Q.charAt(se)==="/",Ae=K!=null&&(K===k||!m&&K.startsWith(k)&&K.charAt(k.length)==="/"),P={isActive:ye,isPending:Ae,isTransitioning:H},Ne=ye?d:void 0,De;typeof s=="function"?De=s(P):De=[s,ye?"active":null,Ae?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let We=typeof p=="function"?p(P):p;return z.createElement(he,{...y,"aria-current":Ne,className:De,ref:O,style:We,to:g,viewTransition:M},typeof j=="function"?j(P):j)});_0.displayName="NavLink";var C0=z.forwardRef(({discover:r="render",fetcherKey:d,navigate:f,reloadDocument:s,replace:m,state:p,method:g=nu,action:M,onSubmit:j,relative:y,preventScrollReset:O,viewTransition:T,unstable_defaultShouldRevalidate:q,...L},Y)=>{let{unstable_useTransitions:B}=z.useContext(Mt),H=q0(),k=Y0(M,{relative:y}),Q=g.toLowerCase()==="get"?"get":"post",K=typeof M=="string"&&Om.test(M),se=ye=>{if(j&&j(ye),ye.defaultPrevented)return;ye.preventDefault();let Ae=ye.nativeEvent.submitter,P=Ae?.getAttribute("formmethod")||g,Ne=()=>H(Ae||ye.currentTarget,{fetcherKey:d,method:P,navigate:f,replace:m,state:p,relative:y,preventScrollReset:O,viewTransition:T,unstable_defaultShouldRevalidate:q});B&&f!==!1?z.startTransition(()=>Ne()):Ne()};return z.createElement("form",{ref:Y,method:Q,action:k,onSubmit:s?j:se,...L,"data-discover":!K&&r==="render"?"true":void 0})});C0.displayName="Form";function U0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dm(r){let d=z.useContext(Bl);return we(d,U0(r)),d}function H0(r,{target:d,replace:f,state:s,preventScrollReset:m,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:M,unstable_useTransitions:j}={}){let y=Gr(),O=Ra(),T=Ln(r,{relative:p});return z.useCallback(q=>{if(m0(q,d)){q.preventDefault();let L=f!==void 0?f:Un(O)===Un(T),Y=()=>y(r,{replace:L,state:s,preventScrollReset:m,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:M});j?z.startTransition(()=>Y()):Y()}},[O,y,T,f,s,d,r,m,p,g,M,j])}var B0=0,L0=()=>`__${String(++B0)}__`;function q0(){let{router:r}=Dm("useSubmit"),{basename:d}=z.useContext(Mt),f=l0(),s=r.fetch,m=r.navigate;return z.useCallback(async(p,g={})=>{let{action:M,method:j,encType:y,formData:O,body:T}=g0(p,d);if(g.navigate===!1){let q=g.fetcherKey||L0();await s(q,f,g.action||M,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:O,body:T,formMethod:g.method||j,formEncType:g.encType||y,flushSync:g.flushSync})}else await m(g.action||M,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:O,body:T,formMethod:g.method||j,formEncType:g.encType||y,replace:g.replace,state:g.state,fromRouteId:f,flushSync:g.flushSync,viewTransition:g.viewTransition})},[s,m,d,f])}function Y0(r,{relative:d}={}){let{basename:f}=z.useContext(Mt),s=z.useContext(ua);we(s,"useFormAction must be used inside a RouteContext");let[m]=s.matches.slice(-1),p={...Ln(r||".",{relative:d})},g=Ra();if(r==null){p.search=g.search;let M=new URLSearchParams(p.search),j=M.getAll("index");if(j.some(O=>O==="")){M.delete("index"),j.filter(T=>T).forEach(T=>M.append("index",T));let O=M.toString();p.search=O?`?${O}`:""}}return(!r||r===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:na([f,p.pathname])),Un(p)}function G0(r,{relative:d}={}){let f=z.useContext(Sm);we(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Dm("useViewTransitionState"),m=Ln(r,{relative:d});if(!f.isTransitioning)return!1;let p=ia(f.currentLocation.pathname,s)||f.currentLocation.pathname,g=ia(f.nextLocation.pathname,s)||f.nextLocation.pathname;return uu(m.pathname,g)!=null||uu(m.pathname,p)!=null}function X0(){const[r,d]=z.useState(!1),[f,s]=z.useState(!1),[m,p]=z.useState(!1),[g,M]=z.useState(!1),[j,y]=z.useState(!1),O=Ra(),T=z.useRef(0);z.useEffect(()=>{d(!1),y(!1)},[O.pathname]),z.useEffect(()=>{localStorage.getItem("mode")==="dark"&&(s(!0),document.body.classList.add("dark"))},[]),z.useEffect(()=>{const H=()=>{const k=window.scrollY;p(k>10),M(k>60&&k>T.current),T.current=k};return window.addEventListener("scroll",H,{passive:!0}),()=>window.removeEventListener("scroll",H)},[]);function q(){const H=!f;s(H),H?(document.body.classList.add("dark"),localStorage.setItem("mode","dark")):(document.body.classList.remove("dark"),localStorage.setItem("mode","light"))}const L=H=>O.pathname===H,Y=H=>O.pathname.startsWith(H),B=[{label:"Science Stream",path:"/academics/science"},{label:"Commerce Stream",path:"/academics/commerce"},{label:"Examination",path:"/academics/examination"},{label:"Timetable",path:"/academics/timetable"},{label:"Results",path:"/academics/results"}];return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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

        body.dark .nav          { background: #050d1a; }
        body.dark .nav.scrolled { background: rgba(5,13,26,0.97); }
        body.dark .notice-bar   { background: linear-gradient(90deg, #a07018, #7a5210, #a07018); }
        body.dark .mobile-panel { background: #0b1a30; }

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
      `}),u.jsxs("header",{className:"header",children:[u.jsx("div",{className:`notice-bar ${g?"hidden":""}`,children:"📢 Admissions Open! Apply Now  |  New Session 2026–27"}),u.jsxs("nav",{className:`nav ${m?"scrolled":""}`,children:[u.jsx("div",{className:"logo",children:u.jsxs(he,{to:"/",style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[u.jsx(k0,{}),u.jsxs("div",{children:[u.jsx("h3",{children:"SVV School"}),u.jsx("p",{children:"Nagpur, Maharashtra"})]})]})}),u.jsxs("ul",{className:"nav-links",style:{display:"flex"},children:[u.jsx("li",{children:u.jsx(he,{className:L("/")?"activeLink":"",to:"/",children:"Home"})}),u.jsx("li",{children:u.jsx(he,{className:L("/about")?"activeLink":"",to:"/about",children:"About"})}),u.jsxs("li",{className:"dropdown",children:[u.jsxs(he,{to:"/academics",className:`dropdown-title ${Y("/academics")?"activeLink":""}`,children:["Academics ",u.jsx("span",{className:"dropdown-chevron",children:"▼"})]}),u.jsx("ul",{className:"dropdown-menu",children:B.map((H,k)=>u.jsxs(qr.Fragment,{children:[k===2&&u.jsx("li",{children:u.jsx("div",{className:"dd-sep"})}),u.jsx("li",{children:u.jsx(he,{to:H.path,className:O.pathname===H.path?"activeLink":"",children:H.label})})]},H.path))})]}),u.jsx("li",{children:u.jsx(he,{className:L("/teachers")?"activeLink":"",to:"/teachers",children:"Teachers"})}),u.jsx("li",{children:u.jsx(he,{className:L("/principal")?"activeLink":"",to:"/principal",children:"Principal"})}),u.jsx("li",{children:u.jsx(he,{className:L("/management")?"activeLink":"",to:"/management",children:"Management"})}),u.jsx("li",{children:u.jsx(he,{className:L("/gallery")?"activeLink":"",to:"/gallery",children:"Gallery"})}),u.jsx("li",{children:u.jsx(he,{className:L("/success")?"activeLink":"",to:"/success",children:"Success"})}),u.jsx("li",{children:u.jsx(he,{className:L("/contact")?"activeLink":"",to:"/contact",children:"Contact"})})]}),u.jsxs("div",{className:"right-controls",children:[u.jsx("button",{className:"darkBtn",onClick:q,children:f?"☀️ Light":"🌙 Dark"}),u.jsx("button",{className:"menu-btn",onClick:()=>d(!r),children:r?"✕":"☰"})]}),u.jsxs("div",{className:"top-bar",children:[u.jsx("span",{children:"📥 Download Brochure"}),u.jsxs("div",{className:"top-buttons",children:[u.jsx(he,{to:"/contact#admission",children:u.jsx("button",{className:"enquire-btn",children:"Enquire Now"})}),u.jsx(he,{to:"/disclosure",children:u.jsx("button",{className:"disclosure-btn",children:"Public Disclosure"})})]})]})]}),u.jsxs("div",{className:`mobile-panel ${r?"active":""}`,children:[u.jsx(he,{to:"/",className:`mob-link ${L("/")?"activeLink":""}`,children:"Home"}),u.jsx(he,{to:"/about",className:`mob-link ${L("/about")?"activeLink":""}`,children:"About"}),u.jsxs("div",{className:`mob-link mob-link-split ${Y("/academics")?"activeLink":""}`,children:[u.jsx(he,{to:"/academics",style:{flex:1,color:"inherit",textDecoration:"none"},children:"Academics"}),u.jsx("span",{className:`mob-chevron ${j?"open":""}`,onClick:H=>{H.stopPropagation(),y(k=>!k)},style:{padding:"4px 8px",cursor:"pointer"},children:"▼"})]}),u.jsx("div",{className:`mob-sub ${j?"open":""}`,children:B.map(H=>u.jsx(he,{to:H.path,className:`mob-sub-link ${O.pathname===H.path?"activeLink":""}`,children:H.label},H.path))}),u.jsx(he,{to:"/teachers",className:`mob-link ${L("/teachers")?"activeLink":""}`,children:"Teachers"}),u.jsx(he,{to:"/principal",className:`mob-link ${L("/principal")?"activeLink":""}`,children:"Principal"}),u.jsx(he,{to:"/management",className:`mob-link ${L("/management")?"activeLink":""}`,children:"Management"}),u.jsx(he,{to:"/gallery",className:`mob-link ${L("/gallery")?"activeLink":""}`,children:"Gallery"}),u.jsx(he,{to:"/success",className:`mob-link ${L("/success")?"activeLink":""}`,children:"Success"}),u.jsx(he,{to:"/contact",className:`mob-link ${L("/contact")?"activeLink":""}`,children:"Contact"}),u.jsx("div",{className:"mob-cta-wrap",children:u.jsx(he,{to:"/contact#admission",className:"mob-cta",children:"📋 Apply for Admission"})})]})]})]})}function k0(){const[r,d]=z.useState(!1);return u.jsx("div",{className:"logo-img-box",children:r?u.jsx("div",{className:"logo-initials",children:"SVK"}):u.jsx("img",{src:"/logo.png",alt:"School Logo",onError:()=>d(!0)})})}function Q0(){return u.jsx("footer",{className:"footer",children:u.jsx("p",{children:"© 2026 Sarvodaya Vidyalaya Junior Science College Hingna | Internship Project"})})}function V0(){const[r,d]=z.useState(!1);z.useEffect(()=>{function s(){d(document.documentElement.scrollTop>350)}return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);function f(){window.scrollTo({top:0,behavior:"smooth"})}return r?u.jsx("button",{className:"topBtn",onClick:f,children:"↑"}):null}const Z0=["📢 Admissions open for Session 2026–27 — Apply before 30th April","🏆 Congratulations to our students for 100% result in HSC Board Exams 2025","📅 Annual Sports Day scheduled on 15th May 2026 — All students must participate","📚 New Science Lab inaugurated — state-of-the-art equipment for practical learning","🎉 Sarvodaya Vidyalaya ranked Top 10 schools in Nagpur District","📝 Unit Test schedule for June 2026 is now available on the Notice Board"];function K0(){const[r,d]=z.useState(!1),f=JSON.parse(localStorage.getItem("notices")||"[]"),s=f.length>0?f:Z0,m=[...s,...s],p=Math.max(20,s.length*7);return u.jsxs("div",{className:"news-ticker-wrap",children:[u.jsxs("div",{className:"ticker-label",children:[u.jsx("span",{children:"🔴"})," Latest News"]}),u.jsx("div",{className:"ticker-track-wrap",children:u.jsx("div",{className:"ticker-track",style:{"--ticker-duration":`${p}s`,animationPlayState:r?"paused":"running"},children:m.map((g,M)=>u.jsxs(qr.Fragment,{children:[u.jsxs("span",{className:"ticker-item",children:[u.jsx("span",{className:"ticker-dot"}),g]}),u.jsx("span",{className:"ticker-sep",children:"|"})]},M))})}),u.jsx("button",{className:"ticker-pause-btn",onClick:()=>d(g=>!g),title:r?"Play":"Pause",children:r?"▶":"⏸"})]})}const J0=`
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
`;function $0(){const r=JSON.parse(localStorage.getItem("notices"))||[],d=JSON.parse(localStorage.getItem("events"))||[],f=[{title:u.jsxs(u.Fragment,{children:["Welcome to ",u.jsx("span",{children:"Sarvodaya Vidyalaya"})," Junior Science College"]}),desc:"Quality education with modern classrooms, experienced teachers, and a nurturing environment for every student to thrive.",btnText:"Admissions Open",link:"/contact#admission",img:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80"},{title:u.jsxs(u.Fragment,{children:["Smart Learning, ",u.jsx("span",{children:"Bright Future"})," Ahead"]}),desc:"Interactive teaching methods, smart classrooms, and skill-based learning designed for the leaders of tomorrow.",btnText:"Explore Academics",link:"/academics",img:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"},{title:u.jsxs(u.Fragment,{children:["Sports, Arts & ",u.jsx("span",{children:"Overall Development"})]}),desc:"We nurture physical fitness, creativity, and strong character through diverse co-curricular activities.",btnText:"View Gallery",link:"/gallery",img:"https://images.unsplash.com/photo-1519452635266-abab4954c08b?auto=format&fit=crop&w=1600&q=80"}],[s,m]=z.useState(0),p=z.useRef(null),g=()=>{clearInterval(p.current),p.current=setInterval(()=>{m(Y=>(Y+1)%f.length)},5e3)};z.useEffect(()=>(g(),()=>clearInterval(p.current)),[]);const M=Y=>{m(Y),g()},j=()=>{m(Y=>(Y-1+f.length)%f.length),g()},y=()=>{m(Y=>(Y+1)%f.length),g()},O={students:1200,teachers:80,awards:25,classrooms:50},[T,q]=z.useState({students:0,teachers:0,awards:0,classrooms:0});z.useEffect(()=>{let Y;const B=performance.now(),H=2e3,k=Q=>{const K=Math.min((Q-B)/H,1),se=1-Math.pow(1-K,3);q({students:Math.floor(se*O.students),teachers:Math.floor(se*O.teachers),awards:Math.floor(se*O.awards),classrooms:Math.floor(se*O.classrooms)}),K<1&&(Y=requestAnimationFrame(k))};return Y=requestAnimationFrame(k),()=>cancelAnimationFrame(Y)},[]);const L=[{name:"Rahul Sharma",role:"Parent",msg:"The teachers are genuinely supportive and the education quality is outstanding. My child has grown so much here."},{name:"Ananya Desai",role:"Student",msg:"I love the interactive smart classes and all the activities. Coming to school every day feels exciting."},{name:"Neha Verma",role:"Parent",msg:"A very disciplined school with great focus on academics, sports, and overall personality development."}];return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:J0}),u.jsxs("div",{className:"hero-wrap",children:[f.map((Y,B)=>u.jsx("div",{className:`hero-slide ${B===s?"active":""}`,style:{backgroundImage:`url(${Y.img})`}},B)),u.jsxs("div",{className:"hero-content",children:[u.jsxs("div",{className:"hero-badge",children:[u.jsx("span",{children:"✦"})," Est. Since Hingna · Session 2026–27"]}),u.jsx("h1",{className:"hero-title",children:f[s].title}),u.jsx("p",{className:"hero-desc",children:f[s].desc}),u.jsxs("div",{className:"hero-actions",children:[u.jsx(he,{to:f[s].link,children:u.jsx("button",{className:"btn-primary",children:f[s].btnText})}),u.jsx(he,{to:"/about",children:u.jsx("button",{className:"btn-outline",children:"Learn More"})})]})]}),u.jsx("div",{className:"slide-nav",children:f.map((Y,B)=>u.jsx("button",{className:`slide-dot ${B===s?"active":""}`,onClick:()=>M(B)},B))}),u.jsxs("div",{className:"slide-arrows",children:[u.jsx("button",{className:"arrow-btn",onClick:j,children:"◀"}),u.jsx("button",{className:"arrow-btn",onClick:y,children:"▶"})]})]}),u.jsx("div",{className:"info-bar",children:u.jsxs("div",{className:"info-grid",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("div",{className:"info-icon",children:"📌"}),u.jsx("div",{className:"info-label",children:"Admissions"}),u.jsx("div",{className:"info-sub",children:"Session 2026–27 now open for enrollment"}),u.jsx(he,{to:"/contact#admission",className:"info-link",children:"Apply Now →"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("div",{className:"info-icon",children:"⏰"}),u.jsx("div",{className:"info-label",children:"School Timings"}),u.jsx("div",{className:"info-sub",children:"Mon – Sat: 8:00 AM to 2:30 PM"}),u.jsx("span",{className:"info-link",style:{color:"var(--text-muted)",cursor:"default"},children:"Sunday Holiday"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("div",{className:"info-icon",children:"📞"}),u.jsx("div",{className:"info-label",children:"Contact Us"}),u.jsx("div",{className:"info-sub",children:"We're here for admissions & support"}),u.jsx("span",{className:"info-link",children:"+91 98765 43210"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("div",{className:"info-icon",children:"🏫"}),u.jsx("div",{className:"info-label",children:"Facilities"}),u.jsx("div",{className:"info-sub",children:"Labs · Library · Smart Classes · Sports"}),u.jsx(he,{to:"/about",className:"info-link",children:"View More →"})]})]})}),u.jsxs("section",{className:"section section-alt",children:[u.jsx("div",{className:"section-label",children:"Stay Updated"}),u.jsx("div",{className:"section-title",children:"Notice Board & Events"}),u.jsx("div",{className:"section-sub",children:"Stay informed about school announcements, important dates, and upcoming events."}),u.jsxs("div",{className:"two-col",children:[u.jsxs("div",{className:"board-card",children:[u.jsxs("div",{className:"board-header",children:[u.jsx("span",{children:"📢"}),u.jsx("h3",{children:"Notice Board"})]}),u.jsx("ul",{className:"notice-list",children:r.length===0?u.jsxs("li",{className:"notice-item",children:[u.jsx("div",{className:"notice-dot"}),"No notices at this time."]}):r.map((Y,B)=>u.jsxs("li",{className:"notice-item",children:[u.jsx("div",{className:"notice-dot"}),Y]},B))})]}),u.jsxs("div",{className:"board-card",children:[u.jsxs("div",{className:"board-header",children:[u.jsx("span",{children:"📅"}),u.jsx("h3",{children:"Upcoming Events"})]}),u.jsx("div",{className:"event-list",children:d.length===0?u.jsx("div",{className:"event-empty",children:"No upcoming events scheduled."}):d.map((Y,B)=>u.jsxs("div",{className:"event-item",children:[u.jsx("div",{className:"event-icon",children:"📅"}),u.jsx("div",{className:"event-text",children:Y})]},B))})]})]})]}),u.jsx("div",{className:"stats-section",children:u.jsxs("div",{style:{position:"relative",zIndex:1},children:[u.jsx("div",{className:"section-label",style:{color:"var(--gold)"},children:"By the Numbers"}),u.jsx("div",{className:"section-title",style:{color:"var(--white)"},children:"Our Achievements"}),u.jsx("div",{className:"section-sub",style:{color:"rgba(255,255,255,0.55)"},children:"We are proud of the community we have built over the years."}),u.jsx("div",{className:"stats-grid",children:[{num:T.students,label:"Students Enrolled",suffix:"+"},{num:T.teachers,label:"Expert Teachers",suffix:"+"},{num:T.awards,label:"Awards Won",suffix:"+"},{num:T.classrooms,label:"Classrooms",suffix:"+"}].map((Y,B)=>u.jsxs("div",{className:"stat-card",children:[u.jsxs("span",{className:"stat-num",children:[Y.num,Y.suffix]}),u.jsx("div",{className:"stat-label",children:Y.label})]},B))})]})}),u.jsxs("section",{className:"section section-alt",children:[u.jsx("div",{className:"section-label",children:"Voices of Trust"}),u.jsx("div",{className:"section-title",children:"What Our Community Says"}),u.jsx("div",{className:"section-sub",children:"Hear from the parents and students who are part of the Sarvodaya family."}),u.jsx("div",{className:"testimonials-grid",children:L.map((Y,B)=>u.jsxs("div",{className:"testi-card",children:[u.jsx("div",{className:"testi-quote",children:'"'}),u.jsx("div",{className:"testi-avatar",children:Y.name[0]}),u.jsx("p",{className:"testi-text",children:Y.msg}),u.jsx("div",{className:"testi-name",children:Y.name}),u.jsx("div",{className:"testi-role",children:Y.role})]},B))})]})]})}function W0(){const r=[{title:"Discipline",desc:"We believe discipline builds character and improves learning habits.",icon:"✅"},{title:"Excellence",desc:"We encourage students to aim high and achieve their best performance.",icon:"🏆"},{title:"Innovation",desc:"We promote smart learning, technology and creative thinking.",icon:"💡"},{title:"Respect",desc:"We teach students to respect teachers, parents and society.",icon:"🤝"}],d=[{name:"Smart Classrooms",icon:"🖥️"},{name:"Science Laboratory",icon:"🔬"},{name:"Computer Lab",icon:"💻"},{name:"Library",icon:"📚"},{name:"Sports Ground",icon:"⚽"},{name:"CCTV Security",icon:"📷"},{name:"Transportation",icon:"🚌"},{name:"Activity Rooms",icon:"🎭"}],f=[{year:"2000",text:"School foundation laid with quality education vision."},{year:"2010",text:"New campus expansion and modern learning facilities."},{year:"2018",text:"Smart classrooms and digital learning introduced."},{year:"2024",text:"Improved sports infrastructure and co-curricular programs."}];return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"page-hero",children:u.jsxs("div",{className:"page-hero-content",children:[u.jsx("h1",{children:"About Sarvodaya Vidyalaya Junior Science College Hingna"}),u.jsx("p",{children:"Sarvodaya Vidyalaya Junior Science College is committed to delivering quality education, skill development and overall growth for every student."})]})}),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Who We Are"}),u.jsx("p",{children:"Building bright futures with knowledge and values"})]}),u.jsxs("div",{className:"card-container",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Our Mission"}),u.jsx("p",{children:"To provide quality education and develop confident, disciplined and responsible students with strong moral values."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Our Vision"}),u.jsx("p",{children:"To be a leading educational institution recognized for excellence in academics, discipline, sports and creativity."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Our Objective"}),u.jsx("p",{children:"To focus on academics along with personality development through events, competitions, and activities."})]})]})]}),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Principal’s Message"}),u.jsx("p",{children:"Guidance, Discipline and Growth"})]}),u.jsxs("div",{className:"principal-box",children:[u.jsxs("div",{className:"principal-left",children:[u.jsx("div",{className:"principal-photo",children:"👩‍🏫"}),u.jsx("h3",{children:"Principal"}),u.jsx("p",{className:"principal-name",children:"Mrs. A. Sharma"})]}),u.jsxs("div",{className:"principal-right",children:[u.jsx("p",{children:"“Our goal is to provide the best learning environment where each student can explore their strengths. We focus on academic excellence, strong discipline and co-curricular development. Together, we shape responsible citizens for tomorrow.”"}),u.jsx("p",{className:"principal-sign",children:"— Principal"})]})]})]}),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Our Core Values"}),u.jsx("p",{children:"Values that shape every student’s journey"})]}),u.jsx("div",{className:"values-grid",children:r.map((s,m)=>u.jsxs("div",{className:"value-card",children:[u.jsx("div",{className:"value-icon",children:s.icon}),u.jsx("h3",{children:s.title}),u.jsx("p",{children:s.desc})]},m))})]}),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Facilities"}),u.jsx("p",{children:"Modern infrastructure for better learning"})]}),u.jsx("div",{className:"facility-grid",children:d.map((s,m)=>u.jsxs("div",{className:"facility-card",children:[u.jsx("span",{className:"facility-icon",children:s.icon}),u.jsx("p",{children:s.name})]},m))})]}),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Our Journey"}),u.jsx("p",{children:"Milestones in our growth"})]}),u.jsx("div",{className:"timeline",children:f.map((s,m)=>u.jsxs("div",{className:"timeline-item",children:[u.jsx("div",{className:"timeline-year",children:s.year}),u.jsx("div",{className:"timeline-text",children:s.text})]},m))})]}),u.jsx("section",{children:u.jsxs("div",{className:"cta-box",children:[u.jsx("h2",{children:"Ready to JoinSarvodaya Vidyalaya Junior Science College Hingna"}),u.jsx("p",{children:"Apply today and start your bright future with us."}),u.jsx(he,{to:"/contact#admission",children:u.jsx("button",{className:"cta-btn",children:"Apply for Admission"})})]})})]})}function F0(){const[r,d]=z.useState([]);return z.useEffect(()=>{d(JSON.parse(localStorage.getItem("academics"))||[])},[]),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Academics"}),u.jsx("p",{children:"Quality education from primary to higher secondary"})]}),u.jsxs("div",{className:"card-container",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Primary Section (1st - 5th)"}),u.jsx("p",{children:"Focus on building strong basics in reading, writing, and mathematics through interactive learning, storytelling, and fun activities."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Middle School (6th - 8th)"}),u.jsx("p",{children:"Concept-based learning with emphasis on science, mathematics, languages, and social studies along with regular tests and projects."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Secondary School (9th - 10th)"}),u.jsx("p",{children:"Intensive preparation for board examinations with experienced teachers, doubt-solving sessions, and revision classes."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Higher Secondary (11th - 12th)"}),u.jsx("p",{children:"Science and Commerce streams with career guidance, practical learning, and mentorship programs."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Subjects Offered"}),u.jsx("p",{children:"English, Mathematics, Science, Social Studies, Computer Science, Hindi, Physical Education, and Environmental Studies."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Teaching Methodology"}),u.jsx("p",{children:"Smart classrooms, project-based learning, group discussions, digital presentations, and practical demonstrations."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Examination System"}),u.jsx("p",{children:"Regular class tests, unit tests, mid-term examinations, and annual examinations to monitor student progress."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Academic Support"}),u.jsx("p",{children:"Extra doubt-solving classes, remedial sessions, and personalized mentoring for students needing additional guidance."})]})]}),u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Academics"}),u.jsx("p",{children:"Our courses and curriculum"})]}),u.jsx("div",{className:"card-container",children:r.length===0?u.jsx("p",{children:"No academic information added yet."}):r.map((f,s)=>u.jsx("div",{className:"card",children:u.jsx("p",{children:f})},s))})]})}function I0(){const[r,d]=z.useState([]),[f,s]=z.useState({open:!1,src:""});z.useEffect(()=>{d(JSON.parse(localStorage.getItem("gallery"))||[])},[]);function m(g){s({open:!0,src:g})}function p(){s({open:!1,src:""})}return u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"School Gallery"}),u.jsx("p",{children:"Campus, classrooms & student activities"})]}),u.jsx("div",{className:"gallery",children:r.map((g,M)=>u.jsx("img",{src:g,alt:"gallery-"+M,onClick:()=>m(g)},M))}),f.open&&u.jsxs("div",{className:"lightbox",onClick:p,children:[u.jsx("span",{className:"close-lightbox",onClick:p,children:"×"}),u.jsx("img",{src:f.src,alt:"Full View",onClick:g=>g.stopPropagation()})]})]})}const P0=`
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
`;function ev(){const[r,d]=z.useState({name:"",email:"",phone:"",stream:"",message:""}),[f,s]=z.useState(null),m=g=>{d({...r,[g.target.name]:g.target.value})},p=async g=>{g.preventDefault(),s("loading");try{(await fetch("https://svv-school-backend.onrender.com/api/admission",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(s("success"),d({name:"",email:"",phone:"",stream:"",message:""})):s("error")}catch(M){console.error(M),s("error")}};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:P0}),u.jsxs("div",{className:"contact-page",children:[u.jsxs("div",{className:"contact-hero",children:[u.jsx("div",{className:"hero-label",children:"Get in Touch"}),u.jsxs("h1",{className:"hero-title",children:["Contact & ",u.jsx("span",{children:"Admissions"})]}),u.jsx("p",{className:"hero-sub",children:"Reach out to us for admissions, queries, or general information. We're happy to help."})]}),u.jsxs("div",{className:"contact-grid",children:[u.jsxs("div",{className:"left-col",children:[u.jsxs("div",{className:"info-card",children:[u.jsxs("div",{className:"info-card-head",children:[u.jsx("div",{className:"info-icon",children:"📞"}),u.jsx("div",{className:"info-card-title",children:"Phone & Email"})]}),u.jsxs("div",{className:"info-card-body",children:[u.jsx("strong",{children:"+91 98765 43210"}),u.jsx("br",{}),"info@sarvodayavk.edu.in",u.jsx("br",{}),u.jsx("br",{}),u.jsx("strong",{children:"Office Hours:"})," Mon – Sat, 8:00 AM – 2:30 PM"]})]}),u.jsxs("div",{className:"info-card",children:[u.jsxs("div",{className:"info-card-head",children:[u.jsx("div",{className:"info-icon",children:"📍"}),u.jsx("div",{className:"info-card-title",children:"Our Address"})]}),u.jsxs("div",{className:"info-card-body",children:["Sarvodaya Vidyalaya Junior Science College",u.jsx("br",{}),u.jsx("strong",{children:"Hingna, Nagpur, Maharashtra – 441110"}),u.jsx("br",{}),"Near Main Bus Stop, Hingna Road"]})]}),u.jsxs("div",{className:"social-card",children:[u.jsx("div",{className:"social-card-title",children:"🌐 Connect With Us"}),u.jsxs("div",{className:"social-buttons",children:[u.jsxs("a",{href:"https://www.facebook.com/YOUR_ID",target:"_blank",rel:"noopener noreferrer",className:"social-btn facebook",children:[u.jsx("span",{className:"s-icon",children:"f"})," Facebook"]}),u.jsxs("a",{href:"https://twitter.com/YOUR_ID",target:"_blank",rel:"noopener noreferrer",className:"social-btn twitter",children:[u.jsx("span",{className:"s-icon",children:"𝕏"})," Twitter / X"]}),u.jsxs("a",{href:"https://www.instagram.com/YOUR_ID",target:"_blank",rel:"noopener noreferrer",className:"social-btn instagram",children:[u.jsx("span",{className:"s-icon",children:"◎"})," Instagram"]})]}),u.jsx("a",{href:"https://wa.me/91XXXXXXXXXX",target:"_blank",rel:"noopener noreferrer",className:"whatsapp-btn",children:"💬 Chat on WhatsApp"})]}),u.jsxs("div",{className:"map-card",children:[u.jsxs("div",{className:"map-header",children:[u.jsx("span",{children:"📍"}),u.jsx("h3",{children:"Our Location"})]}),u.jsx("iframe",{src:"https://www.google.com/maps?q=Hingna,Nagpur,Maharashtra&output=embed",width:"100%",height:"200",style:{border:0},allowFullScreen:"",loading:"lazy",title:"School Location Map"})]})]}),u.jsxs("div",{className:"form-card",id:"admission",children:[u.jsxs("div",{className:"form-header",children:[u.jsx("div",{className:"form-label-tag",children:"Admissions 2026–27"}),u.jsx("div",{className:"form-title",children:"Apply for Admission"}),u.jsx("p",{className:"form-desc",children:"Fill in the details below and our team will get back to you within 24 hours."})]}),f==="success"&&u.jsx("div",{className:"form-msg success",children:"✅ Admission form submitted successfully! We'll contact you soon."}),f==="error"&&u.jsx("div",{className:"form-msg error",children:"❌ Something went wrong. Please try again or call us directly."}),u.jsxs("form",{onSubmit:p,children:[u.jsxs("div",{className:"field-row",children:[u.jsxs("div",{className:"field-group",style:{marginBottom:0},children:[u.jsx("label",{children:"Student Name"}),u.jsx("input",{className:"field-input",type:"text",name:"name",placeholder:"Full name",value:r.name,onChange:m,required:!0})]}),u.jsxs("div",{className:"field-group",style:{marginBottom:0},children:[u.jsx("label",{children:"Phone Number"}),u.jsx("input",{className:"field-input",type:"text",name:"phone",placeholder:"+91 XXXXX XXXXX",value:r.phone,onChange:m,required:!0})]})]}),u.jsxs("div",{className:"field-group",children:[u.jsx("label",{children:"Email Address"}),u.jsx("input",{className:"field-input",type:"email",name:"email",placeholder:"your@email.com",value:r.email,onChange:m,required:!0})]}),u.jsxs("div",{className:"field-group",children:[u.jsx("label",{children:"Select Stream"}),u.jsx("div",{className:"stream-row",children:["Science","Commerce","Arts","Not decided"].map(g=>u.jsxs("div",{className:"stream-option",children:[u.jsx("input",{type:"radio",id:`stream-${g}`,name:"stream",value:g,checked:r.stream===g,onChange:m}),u.jsxs("label",{className:"stream-label",htmlFor:`stream-${g}`,children:[u.jsx("span",{className:"stream-dot"}),g]})]},g))})]}),u.jsxs("div",{className:"field-group",children:[u.jsx("label",{children:"Message / Query"}),u.jsx("textarea",{className:"field-input",name:"message",placeholder:"Any questions or additional information...",value:r.message,onChange:m})]}),u.jsx("button",{type:"submit",className:"submit-btn",disabled:f==="loading",children:f==="loading"?u.jsx(u.Fragment,{children:"⏳ Submitting..."}):u.jsx(u.Fragment,{children:"📋 Submit Admission Form"})})]})]})]})]})]})}const tv=[{name:"Mr. Rajesh Sharma",subject:"Mathematics",experience:"10+ Years",img:"https://randomuser.me/api/portraits/men/32.jpg"},{name:"Ms. Sneha Patil",subject:"Physics",experience:"8 Years",img:"https://randomuser.me/api/portraits/women/44.jpg"},{name:"Mr. Imran Khan",subject:"Chemistry",experience:"12 Years",img:"https://randomuser.me/api/portraits/men/55.jpg"},{name:"Mrs. Anjali Deshmukh",subject:"Biology",experience:"9 Years",img:"https://randomuser.me/api/portraits/women/68.jpg"}];function av(){return u.jsx("div",{className:"page",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"page-title",children:"Our Teachers"}),u.jsx("div",{className:"card-container",children:tv.map((r,d)=>u.jsxs("div",{className:"card teacher-card",children:[u.jsx("img",{src:r.img,alt:r.name}),u.jsx("h3",{children:r.name}),u.jsx("p",{children:u.jsx("strong",{children:r.subject})}),u.jsxs("p",{children:[r.experience," Experience"]})]},d))})]})})}const lv=[{name:"Dr. A. Deshmukh",role:"Principal",message:"Our vision is to provide quality education that nurtures creativity, discipline, and leadership among students.",img:"https://randomuser.me/api/portraits/men/11.jpg"},{name:"Mrs. S. Kulkarni",role:"Vice Principal",message:"We focus on academic excellence along with co-curricular activities for holistic development.",img:"https://randomuser.me/api/portraits/women/21.jpg"},{name:"Mr. R. Patil",role:"Director",message:"Our institution aims to build future-ready students with strong values and modern skills.",img:"https://randomuser.me/api/portraits/men/31.jpg"}];function nv(){return u.jsx("div",{className:"page",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"page-title",children:"Management Team"}),u.jsx("p",{className:"page-subtitle",children:"Meet the leaders guiding our institution towards excellence."}),u.jsx("div",{className:"card-container",children:lv.map((r,d)=>u.jsxs("div",{className:"card management-card",children:[u.jsx("img",{src:r.img,alt:r.name}),u.jsx("h3",{children:r.name}),u.jsx("p",{className:"role",children:r.role}),u.jsxs("p",{className:"message",children:["“",r.message,"”"]})]},d))})]})})}const iv=[{name:"Rahul Verma",achievement:"Selected in IIT Bombay",year:"2025",img:"https://randomuser.me/api/portraits/men/12.jpg"},{name:"Sneha Kulkarni",achievement:"MHT-CET Topper (99%)",year:"2024",img:"https://randomuser.me/api/portraits/women/22.jpg"},{name:"Amit Patil",achievement:"Placed at Google",year:"2023",img:"https://randomuser.me/api/portraits/men/45.jpg"},{name:"Priya Sharma",achievement:"NEET Rank under 500",year:"2025",img:"https://randomuser.me/api/portraits/women/30.jpg"}];function uv(){return u.jsx("div",{className:"page",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"page-title",children:"Success Stories"}),u.jsx("div",{className:"card-container",children:iv.map((r,d)=>u.jsxs("div",{className:"card success-card",children:[u.jsx("img",{src:r.img,alt:r.name}),u.jsx("h3",{children:r.name}),u.jsx("p",{children:r.achievement}),u.jsx("span",{className:"year",children:r.year})]},d))})]})})}const Ct={name:"Dr. Sunita Sharma",role:"Principal",photo:"/principal.jpg",qualification:"M.Sc., B.Ed., Ph.D.",experience:"25+ Years",school:"Sarvodaya Vidyalaya",joined:"Since 2010"},cv=["Welcome to Sarvodaya Vidyalaya Junior Science College, Hingna — a place where knowledge meets character, and education goes beyond textbooks. It gives me immense pride and joy to address you as the Principal of this esteemed institution.","Our school has been a beacon of learning for over two decades, nurturing thousands of students who have gone on to make their mark in every field — from science and medicine to arts and administration. We believe that every child is unique and carries within them an extraordinary potential waiting to be discovered.","At Sarvodaya Vidyalaya, we do not just teach subjects — we build values. Our dedicated faculty works tirelessly to create an environment where curiosity is encouraged, discipline is practiced, and creativity is celebrated. We combine modern teaching methods with time-tested values to prepare students not just for examinations, but for life.","To our students: Dream big, work hard, and never stop learning. Your success is our mission and your character is our pride. To our parents: Thank you for entrusting us with your most precious responsibility. Together, we will ensure your child blossoms into a confident and compassionate individual."],rv="Education is not the filling of a pail, but the lighting of a fire. Our goal is to ignite that fire in every student.",sv=[{num:"25+",label:"Years Experience"},{num:"5000+",label:"Students Guided"},{num:"100%",label:"Board Results"},{num:"30+",label:"Awards Won"}];function ov(){const[r,d]=z.useState(!1);return u.jsxs("div",{className:"principal-page",children:[u.jsxs("div",{className:"principal-hero",children:[u.jsx("div",{className:"hero-label",children:"Leadership"}),u.jsxs("h1",{className:"hero-title",children:["Principal's ",u.jsx("span",{children:"Message"})]}),u.jsx("p",{className:"hero-sub",children:"A word from the heart of our institution"})]}),u.jsxs("div",{className:"principal-main",children:[u.jsxs("div",{className:"principal-grid",children:[u.jsxs("div",{className:"principal-photo-card",children:[u.jsx("div",{className:"photo-frame",children:r?u.jsxs("div",{className:"photo-placeholder",children:[u.jsx("div",{className:"photo-avatar",children:"👩‍💼"}),u.jsx("div",{className:"photo-avatar-text",children:"Photo Coming Soon"})]}):u.jsx("img",{src:Ct.photo,alt:Ct.name,onError:()=>d(!0)})}),u.jsx("div",{className:"photo-bar"}),u.jsxs("div",{className:"principal-info",children:[u.jsx("div",{className:"principal-name",children:Ct.name}),u.jsx("div",{className:"principal-role",children:Ct.role}),u.jsx("div",{className:"principal-divider"}),u.jsxs("div",{className:"principal-meta",children:[u.jsxs("div",{className:"meta-item",children:[u.jsx("div",{className:"meta-icon",children:"🎓"}),u.jsxs("div",{children:[u.jsx("strong",{children:"Qualification"}),Ct.qualification]})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("div",{className:"meta-icon",children:"📅"}),u.jsxs("div",{children:[u.jsx("strong",{children:"Experience"}),Ct.experience]})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("div",{className:"meta-icon",children:"🏫"}),u.jsxs("div",{children:[u.jsx("strong",{children:"Joined"}),Ct.joined]})]})]})]})]}),u.jsxs("div",{className:"principal-message-card",children:[u.jsx("div",{className:"msg-label",children:"From the Desk of the Principal"}),u.jsx("div",{className:"msg-title",children:"Dear Students, Parents & Well-wishers,"}),u.jsx("span",{className:"msg-quote-mark",children:'"'}),u.jsxs("div",{className:"msg-body",children:[cv.map((f,s)=>u.jsx("p",{children:f},s)),u.jsx("div",{className:"msg-highlight",children:rv}),u.jsx("p",{children:"I invite you to walk through our corridors of learning with pride, purpose, and passion. Together, let us make Sarvodaya Vidyalaya a center of excellence that the entire community can be proud of."})]}),u.jsxs("div",{className:"msg-signature",children:[u.jsx("div",{className:"sig-avatar",children:Ct.name.charAt(0)}),u.jsxs("div",{className:"sig-text",children:[u.jsx("div",{className:"sig-name",children:Ct.name}),u.jsxs("div",{className:"sig-role",children:[Ct.role," — ",Ct.school]})]})]})]})]}),u.jsx("div",{className:"principal-stats",children:sv.map((f,s)=>u.jsxs("div",{className:"p-stat",children:[u.jsx("div",{className:"p-stat-num",children:f.num}),u.jsx("div",{className:"p-stat-label",children:f.label})]},s))})]})]})}function fv(){const[r,d]=z.useState(""),[f,s]=z.useState(""),m=Gr(),p=g=>{g.preventDefault(),r==="admin@dps.com"&&f==="admin123"?(localStorage.setItem("adminAuth","true"),m("/admin-dashboard")):alert("Invalid Login!")};return u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Admin Login"}),u.jsx("p",{children:"Only for Authorized Users"})]}),u.jsxs("form",{className:"admin-form",onSubmit:p,children:[u.jsx("input",{type:"email",placeholder:"Admin Email",required:!0,value:r,onChange:g=>d(g.target.value)}),u.jsx("input",{type:"password",placeholder:"Password",required:!0,value:f,onChange:g=>s(g.target.value)}),u.jsx("button",{type:"submit",children:"Login"})]})]})}const dv=`
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
`;function mv(){const r=Gr(),[d,f]=z.useState(""),[s,m]=z.useState(""),[p,g]=z.useState(""),[M,j]=z.useState([]),[y,O]=z.useState([]),[T,q]=z.useState([]),[L,Y]=z.useState([]),[B,H]=z.useState([]),[k,Q]=z.useState(null),[K,se]=z.useState(""),[ye,Ae]=z.useState(""),P=window.location.hostname==="localhost"?"http://localhost:5000":"https://svv-school-backend.onrender.com";z.useEffect(()=>{const S=()=>{Ae(new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}))};S();const U=setInterval(S,1e3);return()=>clearInterval(U)},[]),z.useEffect(()=>{localStorage.getItem("adminAuth")||r("/admin"),j(JSON.parse(localStorage.getItem("notices"))||[]),O(JSON.parse(localStorage.getItem("events"))||[]),q(JSON.parse(localStorage.getItem("academics"))||[]),H(JSON.parse(localStorage.getItem("gallery"))||[])},[r]),z.useEffect(()=>{fetch(`${P}/api/admissions`).then(S=>S.json()).then(S=>Y(S)).catch(S=>console.log(S))},[]);const Ne=(S,U,X,$,I)=>{if(!S.trim())return;const le=[...U,S.trim()];X(le),localStorage.setItem($,JSON.stringify(le)),I("")},De=(S,U,X,$)=>{const I=U.filter((le,ke)=>ke!==S);X(I),localStorage.setItem($,JSON.stringify(I))},We=()=>Ne(d,M,j,"notices",f),it=()=>Ne(s,y,O,"events",m),Xe=()=>Ne(p,T,q,"academics",g),qt=S=>De(S,M,j,"notices"),Ot=S=>De(S,y,O,"events"),ut=S=>De(S,T,q,"academics"),R=()=>{if(!k)return;const S=new FileReader;S.onloadend=()=>{const U=S.result,X=[...B,U];H(X),localStorage.setItem("gallery",JSON.stringify(X)),Q(null)},S.readAsDataURL(k)},G=S=>{const U=B.filter((X,$)=>$!==S);H(U),localStorage.setItem("gallery",JSON.stringify(U))},F=()=>{localStorage.removeItem("adminAuth"),r("/admin")},pe=()=>{const U=`Name,Email,Phone,Message
`+L.map(le=>`${le.name},${le.email},${le.phone},${le.message}`).join(`
`),X=new Blob([U],{type:"text/csv"}),$=window.URL.createObjectURL(X),I=document.createElement("a");I.href=$,I.download="admissions.csv",I.click()},de=L.filter(S=>S.name.toLowerCase().includes(K.toLowerCase())),b=({icon:S,title:U,count:X,children:$})=>u.jsxs("div",{className:"adm-panel",children:[u.jsxs("div",{className:"adm-panel-head",children:[u.jsx("span",{children:S}),u.jsx("h3",{children:U}),u.jsx("span",{className:"adm-panel-badge",children:X})]}),u.jsx("div",{className:"adm-panel-body",children:$})]});return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:dv}),u.jsxs("div",{className:"adm-wrap",children:[u.jsxs("div",{className:"adm-topbar",children:[u.jsxs("div",{className:"adm-topbar-left",children:[u.jsx("div",{className:"adm-logo-box",children:"SVK"}),u.jsxs("div",{children:[u.jsx("div",{className:"adm-topbar-title",children:"Admin Dashboard"}),u.jsx("div",{className:"adm-topbar-sub",children:"Sarvodaya Vidyalaya"})]})]}),u.jsxs("div",{className:"adm-topbar-right",children:[u.jsxs("span",{className:"adm-time",children:["🕐 ",ye]}),u.jsx("button",{className:"adm-logout-btn",onClick:F,children:"⬠ Logout"})]})]}),u.jsxs("div",{className:"adm-body",children:[u.jsxs("div",{className:"adm-page-heading",children:[u.jsx("div",{className:"adm-page-label",children:"Control Panel"}),u.jsx("div",{className:"adm-page-title",children:"Manage School Content"})]}),u.jsx("div",{className:"adm-stats",children:[{icon:"📢",label:"Notices",num:M.length},{icon:"📅",label:"Events",num:y.length},{icon:"📚",label:"Academics",num:T.length},{icon:"🎓",label:"Admissions",num:L.length}].map(S=>u.jsxs("div",{className:"adm-stat",children:[u.jsx("div",{className:"adm-stat-icon",children:S.icon}),u.jsxs("div",{children:[u.jsx("div",{className:"adm-stat-num",children:S.num}),u.jsx("div",{className:"adm-stat-label",children:S.label})]})]},S.label))}),u.jsxs("div",{className:"adm-grid-3",children:[u.jsxs(b,{icon:"📢",title:"Notices",count:M.length,children:[u.jsxs("div",{className:"adm-input-row",children:[u.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter notice...",value:d,onChange:S=>f(S.target.value),onKeyDown:S=>S.key==="Enter"&&We()}),u.jsx("button",{className:"adm-btn-add",onClick:We,children:"+ Add"})]}),u.jsxs("ul",{className:"adm-list",children:[M.length===0&&u.jsx("div",{className:"adm-list-empty",children:"No notices yet"}),M.map((S,U)=>u.jsxs("li",{className:"adm-list-item",children:[u.jsx("span",{children:S}),u.jsx("button",{className:"adm-btn-del",onClick:()=>qt(U),children:"✕"})]},U))]})]}),u.jsxs(b,{icon:"📅",title:"Events",count:y.length,children:[u.jsxs("div",{className:"adm-input-row",children:[u.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter event...",value:s,onChange:S=>m(S.target.value),onKeyDown:S=>S.key==="Enter"&&it()}),u.jsx("button",{className:"adm-btn-add",onClick:it,children:"+ Add"})]}),u.jsxs("ul",{className:"adm-list",children:[y.length===0&&u.jsx("div",{className:"adm-list-empty",children:"No events yet"}),y.map((S,U)=>u.jsxs("li",{className:"adm-list-item",children:[u.jsx("span",{children:S}),u.jsx("button",{className:"adm-btn-del",onClick:()=>Ot(U),children:"✕"})]},U))]})]}),u.jsxs(b,{icon:"📚",title:"Academics",count:T.length,children:[u.jsxs("div",{className:"adm-input-row",children:[u.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter academic info...",value:p,onChange:S=>g(S.target.value),onKeyDown:S=>S.key==="Enter"&&Xe()}),u.jsx("button",{className:"adm-btn-add",onClick:Xe,children:"+ Add"})]}),u.jsxs("ul",{className:"adm-list",children:[T.length===0&&u.jsx("div",{className:"adm-list-empty",children:"No items yet"}),T.map((S,U)=>u.jsxs("li",{className:"adm-list-item",children:[u.jsx("span",{children:S}),u.jsx("button",{className:"adm-btn-del",onClick:()=>ut(U),children:"✕"})]},U))]})]})]}),u.jsx("div",{style:{marginBottom:"20px"},children:u.jsxs(b,{icon:"🖼️",title:"Gallery",count:B.length,children:[u.jsxs("label",{className:"adm-file-zone",children:[u.jsx("input",{type:"file",accept:"image/*",onChange:S=>Q(S.target.files[0])}),u.jsx("span",{className:"adm-file-zone-label",children:k?u.jsxs("span",{className:"adm-file-selected",children:["✅ ",k.name]}):u.jsxs(u.Fragment,{children:["📁 ",u.jsx("strong",{children:"Click to choose"})," an image to upload"]})})]}),u.jsx("button",{className:"adm-btn-gold",onClick:R,disabled:!k,style:{opacity:k?1:.5,cursor:k?"pointer":"not-allowed"},children:"⬆ Upload Image"}),u.jsxs("div",{className:"adm-gallery-grid",children:[B.length===0&&u.jsx("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:"20px",color:"var(--muted)",fontSize:"0.83rem"},children:"No images uploaded yet"}),B.map((S,U)=>u.jsxs("div",{className:"adm-gallery-item",children:[u.jsx("img",{src:S,alt:`gallery-${U}`}),u.jsx("button",{className:"adm-gallery-del",onClick:()=>G(U),children:"✕"})]},U))]})]})}),u.jsxs(b,{icon:"🎓",title:"Admission Requests",count:de.length,children:[u.jsxs("div",{className:"adm-search-row",children:[u.jsx("input",{className:"adm-input",type:"text",placeholder:"🔍  Search student by name...",value:K,onChange:S=>se(S.target.value)}),u.jsx("button",{className:"adm-btn-gold",onClick:pe,children:"⬇ Export CSV"})]}),u.jsx("div",{className:"adm-table-wrap",children:u.jsxs("table",{className:"adm-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"#"}),u.jsx("th",{children:"Name"}),u.jsx("th",{children:"Email"}),u.jsx("th",{children:"Phone"}),u.jsx("th",{children:"Message"})]})}),u.jsx("tbody",{children:de.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"28px",color:"var(--muted)"},children:"No admission requests found"})}):de.map((S,U)=>u.jsxs("tr",{children:[u.jsx("td",{className:"muted",children:U+1}),u.jsx("td",{children:u.jsx("strong",{children:S.name})}),u.jsx("td",{className:"muted",children:S.email}),u.jsx("td",{className:"muted",children:S.phone}),u.jsx("td",{children:S.message||u.jsx("span",{style:{color:"var(--muted)"},children:"—"})})]},U))})]})})]})]})]})]})}function hv(){return u.jsxs(R0,{children:[u.jsx(X0,{}),u.jsx(K0,{}),u.jsxs(r0,{children:[u.jsx(Tt,{path:"/",element:u.jsx($0,{})}),u.jsx(Tt,{path:"/about",element:u.jsx(W0,{})}),u.jsx(Tt,{path:"/academics",element:u.jsx(F0,{})}),u.jsx(Tt,{path:"/gallery",element:u.jsx(I0,{})}),u.jsx(Tt,{path:"/contact",element:u.jsx(ev,{})}),u.jsx(Tt,{path:"/teachers",element:u.jsx(av,{})}),u.jsx(Tt,{path:"/management",element:u.jsx(nv,{})}),u.jsx(Tt,{path:"/success",element:u.jsx(uv,{})}),u.jsx(Tt,{path:"/principal",element:u.jsx(ov,{})}),u.jsx(Tt,{path:"/admin",element:u.jsx(fv,{})}),u.jsx(Tt,{path:"/admin-dashboard",element:u.jsx(mv,{})})]}),u.jsx(V0,{}),u.jsx(Q0,{})]})}fg.createRoot(document.getElementById("root")).render(u.jsx(qr.StrictMode,{children:u.jsx(hv,{})}));
