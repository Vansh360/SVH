(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))r(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function f(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(m){if(m.ep)return;m.ep=!0;const p=f(m);fetch(m.href,p)}})();function dm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Os={exports:{}},Yn={};var Wd;function tg(){if(Wd)return Yn;Wd=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(r,m,p){var g=null;if(p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),"key"in m){p={};for(var w in m)w!=="key"&&(p[w]=m[w])}else p=m;return m=p.ref,{$$typeof:s,type:r,key:g,ref:m!==void 0?m:null,props:p}}return Yn.Fragment=d,Yn.jsx=f,Yn.jsxs=f,Yn}var Fd;function ag(){return Fd||(Fd=1,Os.exports=tg()),Os.exports}var u=ag(),Ds={exports:{}},ee={};var Id;function lg(){if(Id)return ee;Id=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),q=Symbol.iterator;function L(b){return b===null||typeof b!="object"?null:(b=q&&b[q]||b["@@iterator"],typeof b=="function"?b:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,U={};function Q(b,_,X){this.props=b,this.context=_,this.refs=U,this.updater=X||Y}Q.prototype.isReactComponent={},Q.prototype.setState=function(b,_){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,_,"setState")},Q.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function k(){}k.prototype=Q.prototype;function K(b,_,X){this.props=b,this.context=_,this.refs=U,this.updater=X||Y}var oe=K.prototype=new k;oe.constructor=K,B(oe,Q.prototype),oe.isPureReactComponent=!0;var ye=Array.isArray;function ze(){}var I={H:null,A:null,T:null,S:null},we=Object.prototype.hasOwnProperty;function Ye(b,_,X){var Z=X.ref;return{$$typeof:s,type:b,key:_,ref:Z!==void 0?Z:null,props:X}}function Pe(b,_){return Ye(b.type,_,b.props)}function Xe(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function Ve(b){var _={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(X){return _[X]})}var Yt=/\/+/g;function Ut(b,_){return typeof b=="object"&&b!==null&&b.key!=null?Ve(""+b.key):_.toString(36)}function rt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(ze,ze):(b.status="pending",b.then(function(_){b.status==="pending"&&(b.status="fulfilled",b.value=_)},function(_){b.status==="pending"&&(b.status="rejected",b.reason=_)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function D(b,_,X,Z,P){var le=typeof b;(le==="undefined"||le==="boolean")&&(b=null);var de=!1;if(b===null)de=!0;else switch(le){case"bigint":case"string":case"number":de=!0;break;case"object":switch(b.$$typeof){case s:case d:de=!0;break;case M:return de=b._init,D(de(b._payload),_,X,Z,P)}}if(de)return P=P(b),de=Z===""?"."+Ut(b,0):Z,ye(P)?(X="",de!=null&&(X=de.replace(Yt,"$&/")+"/"),D(P,_,X,"",function(Ga){return Ga})):P!=null&&(Xe(P)&&(P=Pe(P,X+(P.key==null||b&&b.key===P.key?"":(""+P.key).replace(Yt,"$&/")+"/")+de)),_.push(P)),1;de=0;var Ze=Z===""?".":Z+":";if(ye(b))for(var Oe=0;Oe<b.length;Oe++)Z=b[Oe],le=Ze+Ut(Z,Oe),de+=D(Z,_,X,le,P);else if(Oe=L(b),typeof Oe=="function")for(b=Oe.call(b),Oe=0;!(Z=b.next()).done;)Z=Z.value,le=Ze+Ut(Z,Oe++),de+=D(Z,_,X,le,P);else if(le==="object"){if(typeof b.then=="function")return D(rt(b),_,X,Z,P);throw _=String(b),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return de}function G(b,_,X){if(b==null)return b;var Z=[],P=0;return D(b,Z,"","",function(le){return _.call(X,le,P++)}),Z}function W(b){if(b._status===-1){var _=b._result;_=_(),_.then(function(X){(b._status===0||b._status===-1)&&(b._status=1,b._result=X)},function(X){(b._status===0||b._status===-1)&&(b._status=2,b._result=X)}),b._status===-1&&(b._status=0,b._result=_)}if(b._status===1)return b._result.default;throw b._result}var fe=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},ve={map:G,forEach:function(b,_,X){G(b,function(){_.apply(this,arguments)},X)},count:function(b){var _=0;return G(b,function(){_++}),_},toArray:function(b){return G(b,function(_){return _})||[]},only:function(b){if(!Xe(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ee.Activity=T,ee.Children=ve,ee.Component=Q,ee.Fragment=f,ee.Profiler=m,ee.PureComponent=K,ee.StrictMode=r,ee.Suspense=S,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ee.__COMPILER_RUNTIME={__proto__:null,c:function(b){return I.H.useMemoCache(b)}},ee.cache=function(b){return function(){return b.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(b,_,X){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Z=B({},b.props),P=b.key;if(_!=null)for(le in _.key!==void 0&&(P=""+_.key),_)!we.call(_,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&_.ref===void 0||(Z[le]=_[le]);var le=arguments.length-2;if(le===1)Z.children=X;else if(1<le){for(var de=Array(le),Ze=0;Ze<le;Ze++)de[Ze]=arguments[Ze+2];Z.children=de}return Ye(b.type,P,Z)},ee.createContext=function(b){return b={$$typeof:g,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:p,_context:b},b},ee.createElement=function(b,_,X){var Z,P={},le=null;if(_!=null)for(Z in _.key!==void 0&&(le=""+_.key),_)we.call(_,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(P[Z]=_[Z]);var de=arguments.length-2;if(de===1)P.children=X;else if(1<de){for(var Ze=Array(de),Oe=0;Oe<de;Oe++)Ze[Oe]=arguments[Oe+2];P.children=Ze}if(b&&b.defaultProps)for(Z in de=b.defaultProps,de)P[Z]===void 0&&(P[Z]=de[Z]);return Ye(b,le,P)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(b){return{$$typeof:w,render:b}},ee.isValidElement=Xe,ee.lazy=function(b){return{$$typeof:M,_payload:{_status:-1,_result:b},_init:W}},ee.memo=function(b,_){return{$$typeof:y,type:b,compare:_===void 0?null:_}},ee.startTransition=function(b){var _=I.T,X={};I.T=X;try{var Z=b(),P=I.S;P!==null&&P(X,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ze,fe)}catch(le){fe(le)}finally{_!==null&&X.types!==null&&(_.types=X.types),I.T=_}},ee.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ee.use=function(b){return I.H.use(b)},ee.useActionState=function(b,_,X){return I.H.useActionState(b,_,X)},ee.useCallback=function(b,_){return I.H.useCallback(b,_)},ee.useContext=function(b){return I.H.useContext(b)},ee.useDebugValue=function(){},ee.useDeferredValue=function(b,_){return I.H.useDeferredValue(b,_)},ee.useEffect=function(b,_){return I.H.useEffect(b,_)},ee.useEffectEvent=function(b){return I.H.useEffectEvent(b)},ee.useId=function(){return I.H.useId()},ee.useImperativeHandle=function(b,_,X){return I.H.useImperativeHandle(b,_,X)},ee.useInsertionEffect=function(b,_){return I.H.useInsertionEffect(b,_)},ee.useLayoutEffect=function(b,_){return I.H.useLayoutEffect(b,_)},ee.useMemo=function(b,_){return I.H.useMemo(b,_)},ee.useOptimistic=function(b,_){return I.H.useOptimistic(b,_)},ee.useReducer=function(b,_,X){return I.H.useReducer(b,_,X)},ee.useRef=function(b){return I.H.useRef(b)},ee.useState=function(b){return I.H.useState(b)},ee.useSyncExternalStore=function(b,_,X){return I.H.useSyncExternalStore(b,_,X)},ee.useTransition=function(){return I.H.useTransition()},ee.version="19.2.3",ee}var Pd;function Gs(){return Pd||(Pd=1,Ds.exports=lg()),Ds.exports}var j=Gs();const Xs=dm(j);var Rs={exports:{}},Gn={},Cs={exports:{}},_s={};var em;function ng(){return em||(em=1,(function(s){function d(D,G){var W=D.length;D.push(G);e:for(;0<W;){var fe=W-1>>>1,ve=D[fe];if(0<m(ve,G))D[fe]=G,D[W]=ve,W=fe;else break e}}function f(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var G=D[0],W=D.pop();if(W!==G){D[0]=W;e:for(var fe=0,ve=D.length,b=ve>>>1;fe<b;){var _=2*(fe+1)-1,X=D[_],Z=_+1,P=D[Z];if(0>m(X,W))Z<ve&&0>m(P,X)?(D[fe]=P,D[Z]=W,fe=Z):(D[fe]=X,D[_]=W,fe=_);else if(Z<ve&&0>m(P,W))D[fe]=P,D[Z]=W,fe=Z;else break e}}return G}function m(D,G){var W=D.sortIndex-G.sortIndex;return W!==0?W:D.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var g=Date,w=g.now();s.unstable_now=function(){return g.now()-w}}var S=[],y=[],M=1,T=null,q=3,L=!1,Y=!1,B=!1,U=!1,Q=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function oe(D){for(var G=f(y);G!==null;){if(G.callback===null)r(y);else if(G.startTime<=D)r(y),G.sortIndex=G.expirationTime,d(S,G);else break;G=f(y)}}function ye(D){if(B=!1,oe(D),!Y)if(f(S)!==null)Y=!0,ze||(ze=!0,Ve());else{var G=f(y);G!==null&&rt(ye,G.startTime-D)}}var ze=!1,I=-1,we=5,Ye=-1;function Pe(){return U?!0:!(s.unstable_now()-Ye<we)}function Xe(){if(U=!1,ze){var D=s.unstable_now();Ye=D;var G=!0;try{e:{Y=!1,B&&(B=!1,k(I),I=-1),L=!0;var W=q;try{t:{for(oe(D),T=f(S);T!==null&&!(T.expirationTime>D&&Pe());){var fe=T.callback;if(typeof fe=="function"){T.callback=null,q=T.priorityLevel;var ve=fe(T.expirationTime<=D);if(D=s.unstable_now(),typeof ve=="function"){T.callback=ve,oe(D),G=!0;break t}T===f(S)&&r(S),oe(D)}else r(S);T=f(S)}if(T!==null)G=!0;else{var b=f(y);b!==null&&rt(ye,b.startTime-D),G=!1}}break e}finally{T=null,q=W,L=!1}G=void 0}}finally{G?Ve():ze=!1}}}var Ve;if(typeof K=="function")Ve=function(){K(Xe)};else if(typeof MessageChannel<"u"){var Yt=new MessageChannel,Ut=Yt.port2;Yt.port1.onmessage=Xe,Ve=function(){Ut.postMessage(null)}}else Ve=function(){Q(Xe,0)};function rt(D,G){I=Q(function(){D(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return q},s.unstable_next=function(D){switch(q){case 1:case 2:case 3:var G=3;break;default:G=q}var W=q;q=G;try{return D()}finally{q=W}},s.unstable_requestPaint=function(){U=!0},s.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var W=q;q=D;try{return G()}finally{q=W}},s.unstable_scheduleCallback=function(D,G,W){var fe=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?fe+W:fe):W=fe,D){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=W+ve,D={id:M++,callback:G,priorityLevel:D,startTime:W,expirationTime:ve,sortIndex:-1},W>fe?(D.sortIndex=W,d(y,D),f(S)===null&&D===f(y)&&(B?(k(I),I=-1):B=!0,rt(ye,W-fe))):(D.sortIndex=ve,d(S,D),Y||L||(Y=!0,ze||(ze=!0,Ve()))),D},s.unstable_shouldYield=Pe,s.unstable_wrapCallback=function(D){var G=q;return function(){var W=q;q=G;try{return D.apply(this,arguments)}finally{q=W}}}})(_s)),_s}var tm;function ig(){return tm||(tm=1,Cs.exports=ng()),Cs.exports}var Us={exports:{}},Ie={};var am;function ug(){if(am)return Ie;am=1;var s=Gs();function d(S){var y="https://react.dev/errors/"+S;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)y+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+S+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var r={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(S,y,M){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:T==null?null:""+T,children:S,containerInfo:y,implementation:M}}var g=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(S,y){if(S==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ie.createPortal=function(S,y){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(d(299));return p(S,y,null,M)},Ie.flushSync=function(S){var y=g.T,M=r.p;try{if(g.T=null,r.p=2,S)return S()}finally{g.T=y,r.p=M,r.d.f()}},Ie.preconnect=function(S,y){typeof S=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,r.d.C(S,y))},Ie.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},Ie.preinit=function(S,y){if(typeof S=="string"&&y&&typeof y.as=="string"){var M=y.as,T=w(M,y.crossOrigin),q=typeof y.integrity=="string"?y.integrity:void 0,L=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;M==="style"?r.d.S(S,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:T,integrity:q,fetchPriority:L}):M==="script"&&r.d.X(S,{crossOrigin:T,integrity:q,fetchPriority:L,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ie.preinitModule=function(S,y){if(typeof S=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var M=w(y.as,y.crossOrigin);r.d.M(S,{crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&r.d.M(S)},Ie.preload=function(S,y){if(typeof S=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var M=y.as,T=w(M,y.crossOrigin);r.d.L(S,M,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ie.preloadModule=function(S,y){if(typeof S=="string")if(y){var M=w(y.as,y.crossOrigin);r.d.m(S,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else r.d.m(S)},Ie.requestFormReset=function(S){r.d.r(S)},Ie.unstable_batchedUpdates=function(S,y){return S(y)},Ie.useFormState=function(S,y,M){return g.H.useFormState(S,y,M)},Ie.useFormStatus=function(){return g.H.useHostTransitionStatus()},Ie.version="19.2.3",Ie}var lm;function cg(){if(lm)return Us.exports;lm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Us.exports=ug(),Us.exports}var nm;function sg(){if(nm)return Gn;nm=1;var s=ig(),d=Gs(),f=cg();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(p(e)!==e)throw Error(r(188))}function y(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return S(n),e;if(i===l)return S(n),t;i=i.sibling}throw Error(r(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,o=n.child;o;){if(o===a){c=!0,a=n,l=i;break}if(o===l){c=!0,l=n,a=i;break}o=o.sibling}if(!c){for(o=i.child;o;){if(o===a){c=!0,a=i,l=n;break}if(o===l){c=!0,l=i,a=n;break}o=o.sibling}if(!c)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function M(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=M(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,q=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),K=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Ye=Symbol.for("react.activity"),Pe=Symbol.for("react.memo_cache_sentinel"),Xe=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=Xe&&e[Xe]||e["@@iterator"],typeof e=="function"?e:null)}var Yt=Symbol.for("react.client.reference");function Ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Yt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case Q:return"Profiler";case U:return"StrictMode";case ye:return"Suspense";case ze:return"SuspenseList";case Ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case K:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:Ut(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return Ut(e(t))}catch{}}return null}var rt=Array.isArray,D=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},fe=[],ve=-1;function b(e){return{current:e}}function _(e){0>ve||(e.current=fe[ve],fe[ve]=null,ve--)}function X(e,t){ve++,fe[ve]=e.current,e.current=t}var Z=b(null),P=b(null),le=b(null),de=b(null);function Ze(e,t){switch(X(le,t),X(P,e),X(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bd(t),e=xd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(Z),X(Z,e)}function Oe(){_(Z),_(P),_(le)}function Ga(e){e.memoizedState!==null&&X(de,e);var t=Z.current,a=xd(t,e.type);t!==a&&(X(P,e),X(Z,a))}function ha(e){P.current===e&&(_(Z),_(P)),de.current===e&&(_(de),Hn._currentValue=W)}var Gt,H;function ne(e){if(Gt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Gt=t&&t[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gt+e+H}var tt=!1;function ot(e,t){if(!e||tt)return"";tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(A){var z=A}Reflect.construct(e,[],C)}else{try{C.call()}catch(A){z=A}e.call(C.prototype)}}else{try{throw Error()}catch(A){z=A}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(A){if(A&&z&&typeof A.stack=="string")return[A.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],o=i[1];if(c&&o){var h=c.split(`
`),E=o.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<E.length&&!E[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===E.length)for(l=h.length-1,n=E.length-1;1<=l&&0<=n&&h[l]!==E[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==E[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==E[n]){var O=`
`+h[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=n);break}}}finally{tt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ne(a):""}function Xt(e,t){switch(e.tag){case 26:case 27:case 5:return ne(e.type);case 16:return ne("Lazy");case 13:return e.child!==t&&t!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return ne("Activity");default:return""}}function St(e){try{var t="",a=null;do t+=Xt(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zl=Object.prototype.hasOwnProperty,gu=s.unstable_scheduleCallback,vu=s.unstable_cancelCallback,Cm=s.unstable_shouldYield,_m=s.unstable_requestPaint,ft=s.unstable_now,Um=s.unstable_getCurrentPriorityLevel,$s=s.unstable_ImmediatePriority,Ws=s.unstable_UserBlockingPriority,Jn=s.unstable_NormalPriority,Hm=s.unstable_LowPriority,Fs=s.unstable_IdlePriority,Bm=s.log,Lm=s.unstable_setDisableYieldValue,Jl=null,dt=null;function pa(e){if(typeof Bm=="function"&&Lm(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Jl,e)}catch{}}var mt=Math.clz32?Math.clz32:Gm,qm=Math.log,Ym=Math.LN2;function Gm(e){return e>>>=0,e===0?32:31-(qm(e)/Ym|0)|0}var Kn=256,$n=262144,Wn=4194304;function Xa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=Xa(l):(c&=o,c!==0?n=Xa(c):a||(a=o&~e,a!==0&&(n=Xa(a))))):(o=l&~i,o!==0?n=Xa(o):c!==0?n=Xa(c):a||(a=l&~e,a!==0&&(n=Xa(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Is(){var e=Wn;return Wn<<=1,(Wn&62914560)===0&&(Wn=4194304),e}function yu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function km(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,h=e.expirationTimes,E=e.hiddenUpdates;for(a=c&~a;0<a;){var O=31-mt(a),C=1<<O;o[O]=0,h[O]=-1;var z=E[O];if(z!==null)for(E[O]=null,O=0;O<z.length;O++){var A=z[O];A!==null&&(A.lane&=-536870913)}a&=~C}l!==0&&Ps(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Ps(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-mt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function er(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-mt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function tr(e,t){var a=t&-t;return a=(a&42)!==0?1:bu(a),(a&(e.suspendedLanes|t))!==0?0:a}function bu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ar(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:kd(e.type))}function lr(e,t){var a=G.p;try{return G.p=e,t()}finally{G.p=a}}var ga=Math.random().toString(36).slice(2),Je="__reactFiber$"+ga,at="__reactProps$"+ga,cl="__reactContainer$"+ga,Su="__reactEvents$"+ga,Qm="__reactListeners$"+ga,Vm="__reactHandles$"+ga,nr="__reactResources$"+ga,Wl="__reactMarker$"+ga;function ju(e){delete e[Je],delete e[at],delete e[Su],delete e[Qm],delete e[Vm]}function sl(e){var t=e[Je];if(t)return t;for(var a=e.parentNode;a;){if(t=a[cl]||a[Je]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ad(e);e!==null;){if(a=e[Je])return a;e=Ad(e)}return t}e=a,a=e.parentNode}return null}function rl(e){if(e=e[Je]||e[cl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function ol(e){var t=e[nr];return t||(t=e[nr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ke(e){e[Wl]=!0}var ir=new Set,ur={};function ka(e,t){fl(e,t),fl(e+"Capture",t)}function fl(e,t){for(ur[e]=t,e=0;e<t.length;e++)ir.add(t[e])}var Zm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cr={},sr={};function Jm(e){return Zl.call(sr,e)?!0:Zl.call(cr,e)?!1:Zm.test(e)?sr[e]=!0:(cr[e]=!0,!1)}function In(e,t,a){if(Jm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Pn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Jt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Km(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nu(e){if(!e._valueTracker){var t=rr(e)?"checked":"value";e._valueTracker=Km(e,t,""+e[t])}}function or(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=rr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $m=/[\n"\\]/g;function Nt(e){return e.replace($m,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Eu(e,t,a,l,n,i,c,o){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?zu(e,c,jt(t)):a!=null?zu(e,c,jt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+jt(o):e.removeAttribute("name")}function fr(e,t,a,l,n,i,c,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Nu(e);return}a=a!=null?""+jt(a):"",t=t!=null?""+jt(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Nu(e)}function zu(e,t,a){t==="number"&&ei(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function dl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function dr(e,t,a){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+jt(a):""}function mr(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(r(92));if(rt(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=jt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Nu(e)}function ml(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hr(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Wm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function pr(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&hr(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&hr(e,i,t[i])}function Tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(e){return Im.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Kt(){}var Au=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,pl=null;function gr(e){var t=rl(e);if(t&&(e=t.stateNode)){var a=e[at]||null;e:switch(e=t.stateNode,t.type){case"input":if(Eu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[at]||null;if(!n)throw Error(r(90));Eu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&or(l)}break e;case"textarea":dr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&dl(e,!!a.multiple,t,!1)}}}var Mu=!1;function vr(e,t,a){if(Mu)return e(t,a);Mu=!0;try{var l=e(t);return l}finally{if(Mu=!1,(hl!==null||pl!==null)&&(Xi(),hl&&(t=hl,e=pl,pl=hl=null,gr(t),e)))for(t=0;t<e.length;t++)gr(e[t])}}function Il(e,t){var a=e.stateNode;if(a===null)return null;var l=a[at]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if($t)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{Ou=!1}var va=null,Du=null,ai=null;function yr(){if(ai)return ai;var e,t=Du,a=t.length,l,n="value"in va?va.value:va.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return ai=n.slice(e,1<l?1-l:void 0)}function li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function br(){return!1}function lt(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ni:br,this.isPropagationStopped=br,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ii=lt(Qa),en=T({},Qa,{view:0,detail:0}),Pm=lt(en),Ru,Cu,tn,ui=T({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&e.type==="mousemove"?(Ru=e.screenX-tn.screenX,Cu=e.screenY-tn.screenY):Cu=Ru=0,tn=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:Cu}}),xr=lt(ui),eh=T({},ui,{dataTransfer:0}),th=lt(eh),ah=T({},en,{relatedTarget:0}),_u=lt(ah),lh=T({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=lt(lh),ih=T({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uh=lt(ih),ch=T({},Qa,{data:0}),Sr=lt(ch),sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oh[e])?!!t[e]:!1}function Uu(){return fh}var dh=T({},en,{key:function(e){if(e.key){var t=sh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mh=lt(dh),hh=T({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jr=lt(hh),ph=T({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),gh=lt(ph),vh=T({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),yh=lt(vh),bh=T({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xh=lt(bh),Sh=T({},Qa,{newState:0,oldState:0}),jh=lt(Sh),Nh=[9,13,27,32],Hu=$t&&"CompositionEvent"in window,an=null;$t&&"documentMode"in document&&(an=document.documentMode);var Eh=$t&&"TextEvent"in window&&!an,Nr=$t&&(!Hu||an&&8<an&&11>=an),Er=" ",zr=!1;function Tr(e,t){switch(e){case"keyup":return Nh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ar(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gl=!1;function zh(e,t){switch(e){case"compositionend":return Ar(t);case"keypress":return t.which!==32?null:(zr=!0,Er);case"textInput":return e=t.data,e===Er&&zr?null:e;default:return null}}function Th(e,t){if(gl)return e==="compositionend"||!Hu&&Tr(e,t)?(e=yr(),ai=Du=va=null,gl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nr&&t.locale!=="ko"?null:t.data;default:return null}}var Ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ah[e.type]:t==="textarea"}function Mr(e,t,a,l){hl?pl?pl.push(l):pl=[l]:hl=l,t=$i(t,"onChange"),0<t.length&&(a=new ii("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ln=null,nn=null;function wh(e){md(e,0)}function ci(e){var t=Fl(e);if(or(t))return e}function Or(e,t){if(e==="change")return t}var Dr=!1;if($t){var Bu;if($t){var Lu="oninput"in document;if(!Lu){var Rr=document.createElement("div");Rr.setAttribute("oninput","return;"),Lu=typeof Rr.oninput=="function"}Bu=Lu}else Bu=!1;Dr=Bu&&(!document.documentMode||9<document.documentMode)}function Cr(){ln&&(ln.detachEvent("onpropertychange",_r),nn=ln=null)}function _r(e){if(e.propertyName==="value"&&ci(nn)){var t=[];Mr(t,nn,e,wu(e)),vr(wh,t)}}function Mh(e,t,a){e==="focusin"?(Cr(),ln=t,nn=a,ln.attachEvent("onpropertychange",_r)):e==="focusout"&&Cr()}function Oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(nn)}function Dh(e,t){if(e==="click")return ci(t)}function Rh(e,t){if(e==="input"||e==="change")return ci(t)}function Ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Ch;function un(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Zl.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function Ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hr(e,t){var a=Ur(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ur(a)}}function Br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Br(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ei(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ei(e.document)}return t}function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _h=$t&&"documentMode"in document&&11>=document.documentMode,vl=null,Yu=null,cn=null,Gu=!1;function qr(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gu||vl==null||vl!==ei(l)||(l=vl,"selectionStart"in l&&qu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cn&&un(cn,l)||(cn=l,l=$i(Yu,"onSelect"),0<l.length&&(t=new ii("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=vl)))}function Va(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var yl={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},Xu={},Yr={};$t&&(Yr=document.createElement("div").style,"AnimationEvent"in window||(delete yl.animationend.animation,delete yl.animationiteration.animation,delete yl.animationstart.animation),"TransitionEvent"in window||delete yl.transitionend.transition);function Za(e){if(Xu[e])return Xu[e];if(!yl[e])return e;var t=yl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Yr)return Xu[e]=t[a];return e}var Gr=Za("animationend"),Xr=Za("animationiteration"),kr=Za("animationstart"),Uh=Za("transitionrun"),Hh=Za("transitionstart"),Bh=Za("transitioncancel"),Qr=Za("transitionend"),Vr=new Map,ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ku.push("scrollEnd");function Ht(e,t){Vr.set(e,t),ka(t,[e])}var si=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],bl=0,Qu=0;function ri(){for(var e=bl,t=Qu=bl=0;t<e;){var a=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var n=Et[t];Et[t++]=null;var i=Et[t];if(Et[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&Zr(a,n,i)}}function oi(e,t,a,l){Et[bl++]=e,Et[bl++]=t,Et[bl++]=a,Et[bl++]=l,Qu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Vu(e,t,a,l){return oi(e,t,a,l),fi(e)}function Ja(e,t){return oi(e,null,null,t),fi(e)}function Zr(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-mt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function fi(e){if(50<Mn)throw Mn=0,es=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xl={};function Lh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,a,l){return new Lh(e,t,a,l)}function Zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var a=e.alternate;return a===null?(a=pt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")Zu(e)&&(c=1);else if(typeof e=="string")c=kp(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ye:return e=pt(31,a,t,n),e.elementType=Ye,e.lanes=i,e;case B:return Ka(a.children,n,i,t);case U:c=8,n|=24;break;case Q:return e=pt(12,a,t,n|2),e.elementType=Q,e.lanes=i,e;case ye:return e=pt(13,a,t,n),e.elementType=ye,e.lanes=i,e;case ze:return e=pt(19,a,t,n),e.elementType=ze,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:c=10;break e;case k:c=9;break e;case oe:c=11;break e;case I:c=14;break e;case we:c=16,l=null;break e}c=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return t=pt(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ka(e,t,a,l){return e=pt(7,e,l,t),e.lanes=a,e}function Ju(e,t,a){return e=pt(6,e,null,t),e.lanes=a,e}function Kr(e){var t=pt(18,null,null,0);return t.stateNode=e,t}function Ku(e,t,a){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var $r=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var a=$r.get(e);return a!==void 0?a:(t={value:e,source:t,stack:St(t)},$r.set(e,t),t)}return{value:e,source:t,stack:St(t)}}var Sl=[],jl=0,mi=null,sn=0,Tt=[],At=0,ya=null,kt=1,Qt="";function Ft(e,t){Sl[jl++]=sn,Sl[jl++]=mi,mi=e,sn=t}function Wr(e,t,a){Tt[At++]=kt,Tt[At++]=Qt,Tt[At++]=ya,ya=e;var l=kt;e=Qt;var n=32-mt(l)-1;l&=~(1<<n),a+=1;var i=32-mt(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,kt=1<<32-mt(t)+n|a<<n|l,Qt=i+e}else kt=1<<i|a<<n|l,Qt=e}function $u(e){e.return!==null&&(Ft(e,1),Wr(e,1,0))}function Wu(e){for(;e===mi;)mi=Sl[--jl],Sl[jl]=null,sn=Sl[--jl],Sl[jl]=null;for(;e===ya;)ya=Tt[--At],Tt[At]=null,Qt=Tt[--At],Tt[At]=null,kt=Tt[--At],Tt[At]=null}function Fr(e,t){Tt[At++]=kt,Tt[At++]=Qt,Tt[At++]=ya,kt=t.id,Qt=t.overflow,ya=e}var Ke=null,Te=null,re=!1,ba=null,wt=!1,Fu=Error(r(519));function xa(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rn(zt(t,e)),Fu}function Ir(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Je]=e,t[at]=l,a){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(a=0;a<Dn.length;a++)ue(Dn[a],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),fr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),mr(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||vd(t.textContent,a)?(l.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),l.onScroll!=null&&ue("scroll",t),l.onScrollEnd!=null&&ue("scrollend",t),l.onClick!=null&&(t.onclick=Kt),t=!0):t=!1,t||xa(e,!0)}function Pr(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:Ke=Ke.return}}function Nl(e){if(e!==Ke)return!1;if(!re)return Pr(e),re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ps(e.type,e.memoizedProps)),a=!a),a&&Te&&xa(e),Pr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Te=Td(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Te=Td(e)}else t===27?(t=Te,_a(e.type)?(e=xs,xs=null,Te=e):Te=t):Te=Ke?Ot(e.stateNode.nextSibling):null;return!0}function $a(){Te=Ke=null,re=!1}function Iu(){var e=ba;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),ba=null),e}function rn(e){ba===null?ba=[e]:ba.push(e)}var Pu=b(null),Wa=null,It=null;function Sa(e,t,a){X(Pu,t._currentValue),t._currentValue=a}function Pt(e){e._currentValue=Pu.current,_(Pu)}function ec(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function tc(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var h=0;h<t.length;h++)if(o.context===t[h]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),ec(i.return,a,e),l||(c=null);break e}i=o.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(r(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),ec(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function El(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(r(387));if(c=c.memoizedProps,c!==null){var o=n.type;ht(n.pendingProps.value,c.value)||(e!==null?e.push(o):e=[o])}}else if(n===de.current){if(c=n.alternate,c===null)throw Error(r(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Hn):e=[Hn])}n=n.return}e!==null&&tc(t,e,a,l),t.flags|=262144}function hi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fa(e){Wa=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return eo(Wa,e)}function pi(e,t){return Wa===null&&Fa(e),eo(e,t)}function eo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},It===null){if(e===null)throw Error(r(308));It=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else It=It.next=t;return a}var qh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Yh=s.unstable_scheduleCallback,Gh=s.unstable_NormalPriority,He={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ac(){return{controller:new qh,data:new Map,refCount:0}}function on(e){e.refCount--,e.refCount===0&&Yh(Gh,function(){e.controller.abort()})}var fn=null,lc=0,zl=0,Tl=null;function Xh(e,t){if(fn===null){var a=fn=[];lc=0,zl=us(),Tl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return lc++,t.then(to,to),t}function to(){if(--lc===0&&fn!==null){Tl!==null&&(Tl.status="fulfilled");var e=fn;fn=null,zl=0,Tl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var ao=D.S;D.S=function(e,t){Gf=ft(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Xh(e,t),ao!==null&&ao(e,t)};var Ia=b(null);function nc(){var e=Ia.current;return e!==null?e:Ee.pooledCache}function gi(e,t){t===null?X(Ia,Ia.current):X(Ia,t.pool)}function lo(){var e=nc();return e===null?null:{parent:He._currentValue,pool:e}}var Al=Error(r(460)),ic=Error(r(474)),vi=Error(r(542)),yi={then:function(){}};function no(e){return e=e.status,e==="fulfilled"||e==="rejected"}function io(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Kt,Kt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,co(e),e;default:if(typeof t.status=="string")t.then(Kt,Kt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,co(e),e}throw el=t,Al}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(el=a,Al):a}}var el=null;function uo(){if(el===null)throw Error(r(459));var e=el;return el=null,e}function co(e){if(e===Al||e===vi)throw Error(r(483))}var wl=null,dn=0;function bi(e){var t=dn;return dn+=1,wl===null&&(wl=[]),io(wl,e,t)}function mn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xi(e,t){throw t.$$typeof===q?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function so(e){function t(x,v){if(e){var N=x.deletions;N===null?(x.deletions=[v],x.flags|=16):N.push(v)}}function a(x,v){if(!e)return null;for(;v!==null;)t(x,v),v=v.sibling;return null}function l(x){for(var v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function n(x,v){return x=Wt(x,v),x.index=0,x.sibling=null,x}function i(x,v,N){return x.index=N,e?(N=x.alternate,N!==null?(N=N.index,N<v?(x.flags|=67108866,v):N):(x.flags|=67108866,v)):(x.flags|=1048576,v)}function c(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function o(x,v,N,R){return v===null||v.tag!==6?(v=Ju(N,x.mode,R),v.return=x,v):(v=n(v,N),v.return=x,v)}function h(x,v,N,R){var $=N.type;return $===B?O(x,v,N.props.children,R,N.key):v!==null&&(v.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===we&&Pa($)===v.type)?(v=n(v,N.props),mn(v,N),v.return=x,v):(v=di(N.type,N.key,N.props,null,x.mode,R),mn(v,N),v.return=x,v)}function E(x,v,N,R){return v===null||v.tag!==4||v.stateNode.containerInfo!==N.containerInfo||v.stateNode.implementation!==N.implementation?(v=Ku(N,x.mode,R),v.return=x,v):(v=n(v,N.children||[]),v.return=x,v)}function O(x,v,N,R,$){return v===null||v.tag!==7?(v=Ka(N,x.mode,R,$),v.return=x,v):(v=n(v,N),v.return=x,v)}function C(x,v,N){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Ju(""+v,x.mode,N),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case L:return N=di(v.type,v.key,v.props,null,x.mode,N),mn(N,v),N.return=x,N;case Y:return v=Ku(v,x.mode,N),v.return=x,v;case we:return v=Pa(v),C(x,v,N)}if(rt(v)||Ve(v))return v=Ka(v,x.mode,N,null),v.return=x,v;if(typeof v.then=="function")return C(x,bi(v),N);if(v.$$typeof===K)return C(x,pi(x,v),N);xi(x,v)}return null}function z(x,v,N,R){var $=v!==null?v.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return $!==null?null:o(x,v,""+N,R);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case L:return N.key===$?h(x,v,N,R):null;case Y:return N.key===$?E(x,v,N,R):null;case we:return N=Pa(N),z(x,v,N,R)}if(rt(N)||Ve(N))return $!==null?null:O(x,v,N,R,null);if(typeof N.then=="function")return z(x,v,bi(N),R);if(N.$$typeof===K)return z(x,v,pi(x,N),R);xi(x,N)}return null}function A(x,v,N,R,$){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return x=x.get(N)||null,o(v,x,""+R,$);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case L:return x=x.get(R.key===null?N:R.key)||null,h(v,x,R,$);case Y:return x=x.get(R.key===null?N:R.key)||null,E(v,x,R,$);case we:return R=Pa(R),A(x,v,N,R,$)}if(rt(R)||Ve(R))return x=x.get(N)||null,O(v,x,R,$,null);if(typeof R.then=="function")return A(x,v,N,bi(R),$);if(R.$$typeof===K)return A(x,v,N,pi(v,R),$);xi(v,R)}return null}function V(x,v,N,R){for(var $=null,me=null,J=v,ae=v=0,se=null;J!==null&&ae<N.length;ae++){J.index>ae?(se=J,J=null):se=J.sibling;var he=z(x,J,N[ae],R);if(he===null){J===null&&(J=se);break}e&&J&&he.alternate===null&&t(x,J),v=i(he,v,ae),me===null?$=he:me.sibling=he,me=he,J=se}if(ae===N.length)return a(x,J),re&&Ft(x,ae),$;if(J===null){for(;ae<N.length;ae++)J=C(x,N[ae],R),J!==null&&(v=i(J,v,ae),me===null?$=J:me.sibling=J,me=J);return re&&Ft(x,ae),$}for(J=l(J);ae<N.length;ae++)se=A(J,x,ae,N[ae],R),se!==null&&(e&&se.alternate!==null&&J.delete(se.key===null?ae:se.key),v=i(se,v,ae),me===null?$=se:me.sibling=se,me=se);return e&&J.forEach(function(qa){return t(x,qa)}),re&&Ft(x,ae),$}function F(x,v,N,R){if(N==null)throw Error(r(151));for(var $=null,me=null,J=v,ae=v=0,se=null,he=N.next();J!==null&&!he.done;ae++,he=N.next()){J.index>ae?(se=J,J=null):se=J.sibling;var qa=z(x,J,he.value,R);if(qa===null){J===null&&(J=se);break}e&&J&&qa.alternate===null&&t(x,J),v=i(qa,v,ae),me===null?$=qa:me.sibling=qa,me=qa,J=se}if(he.done)return a(x,J),re&&Ft(x,ae),$;if(J===null){for(;!he.done;ae++,he=N.next())he=C(x,he.value,R),he!==null&&(v=i(he,v,ae),me===null?$=he:me.sibling=he,me=he);return re&&Ft(x,ae),$}for(J=l(J);!he.done;ae++,he=N.next())he=A(J,x,ae,he.value,R),he!==null&&(e&&he.alternate!==null&&J.delete(he.key===null?ae:he.key),v=i(he,v,ae),me===null?$=he:me.sibling=he,me=he);return e&&J.forEach(function(eg){return t(x,eg)}),re&&Ft(x,ae),$}function Ne(x,v,N,R){if(typeof N=="object"&&N!==null&&N.type===B&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case L:e:{for(var $=N.key;v!==null;){if(v.key===$){if($=N.type,$===B){if(v.tag===7){a(x,v.sibling),R=n(v,N.props.children),R.return=x,x=R;break e}}else if(v.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===we&&Pa($)===v.type){a(x,v.sibling),R=n(v,N.props),mn(R,N),R.return=x,x=R;break e}a(x,v);break}else t(x,v);v=v.sibling}N.type===B?(R=Ka(N.props.children,x.mode,R,N.key),R.return=x,x=R):(R=di(N.type,N.key,N.props,null,x.mode,R),mn(R,N),R.return=x,x=R)}return c(x);case Y:e:{for($=N.key;v!==null;){if(v.key===$)if(v.tag===4&&v.stateNode.containerInfo===N.containerInfo&&v.stateNode.implementation===N.implementation){a(x,v.sibling),R=n(v,N.children||[]),R.return=x,x=R;break e}else{a(x,v);break}else t(x,v);v=v.sibling}R=Ku(N,x.mode,R),R.return=x,x=R}return c(x);case we:return N=Pa(N),Ne(x,v,N,R)}if(rt(N))return V(x,v,N,R);if(Ve(N)){if($=Ve(N),typeof $!="function")throw Error(r(150));return N=$.call(N),F(x,v,N,R)}if(typeof N.then=="function")return Ne(x,v,bi(N),R);if(N.$$typeof===K)return Ne(x,v,pi(x,N),R);xi(x,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,v!==null&&v.tag===6?(a(x,v.sibling),R=n(v,N),R.return=x,x=R):(a(x,v),R=Ju(N,x.mode,R),R.return=x,x=R),c(x)):a(x,v)}return function(x,v,N,R){try{dn=0;var $=Ne(x,v,N,R);return wl=null,$}catch(J){if(J===Al||J===vi)throw J;var me=pt(29,J,null,x.mode);return me.lanes=R,me.return=x,me}}}var tl=so(!0),ro=so(!1),ja=!1;function uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(pe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=fi(e),Zr(e,null,a),t}return oi(e,l,t,a),fi(e)}function hn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,er(e,a)}}function sc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var rc=!1;function pn(){if(rc){var e=Tl;if(e!==null)throw e}}function gn(e,t,a,l){rc=!1;var n=e.updateQueue;ja=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var h=o,E=h.next;h.next=null,c===null?i=E:c.next=E,c=h;var O=e.alternate;O!==null&&(O=O.updateQueue,o=O.lastBaseUpdate,o!==c&&(o===null?O.firstBaseUpdate=E:o.next=E,O.lastBaseUpdate=h))}if(i!==null){var C=n.baseState;c=0,O=E=h=null,o=i;do{var z=o.lane&-536870913,A=z!==o.lane;if(A?(ce&z)===z:(l&z)===z){z!==0&&z===zl&&(rc=!0),O!==null&&(O=O.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var V=e,F=o;z=t;var Ne=a;switch(F.tag){case 1:if(V=F.payload,typeof V=="function"){C=V.call(Ne,C,z);break e}C=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=F.payload,z=typeof V=="function"?V.call(Ne,C,z):V,z==null)break e;C=T({},C,z);break e;case 2:ja=!0}}z=o.callback,z!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[z]:A.push(z))}else A={lane:z,tag:o.tag,payload:o.payload,callback:o.callback,next:null},O===null?(E=O=A,h=C):O=O.next=A,c|=z;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;A=o,o=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);O===null&&(h=C),n.baseState=h,n.firstBaseUpdate=E,n.lastBaseUpdate=O,i===null&&(n.shared.lanes=0),Ma|=c,e.lanes=c,e.memoizedState=C}}function oo(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function fo(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)oo(a[e],t)}var Ml=b(null),Si=b(0);function mo(e,t){e=sa,X(Si,e),X(Ml,t),sa=e|t.baseLanes}function oc(){X(Si,sa),X(Ml,Ml.current)}function fc(){sa=Si.current,_(Ml),_(Si)}var gt=b(null),Mt=null;function za(e){var t=e.alternate;X(_e,_e.current&1),X(gt,e),Mt===null&&(t===null||Ml.current!==null||t.memoizedState!==null)&&(Mt=e)}function dc(e){X(_e,_e.current),X(gt,e),Mt===null&&(Mt=e)}function ho(e){e.tag===22?(X(_e,_e.current),X(gt,e),Mt===null&&(Mt=e)):Ta()}function Ta(){X(_e,_e.current),X(gt,gt.current)}function vt(e){_(gt),Mt===e&&(Mt=null),_(_e)}var _e=b(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ys(a)||bs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=0,te=null,Se=null,Be=null,Ni=!1,Ol=!1,al=!1,Ei=0,vn=0,Dl=null,Qh=0;function Re(){throw Error(r(321))}function mc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function hc(e,t,a,l,n,i){return ea=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Fo:Mc,al=!1,i=a(l,n),al=!1,Ol&&(i=go(t,a,l,n)),po(e),i}function po(e){D.H=xn;var t=Se!==null&&Se.next!==null;if(ea=0,Be=Se=te=null,Ni=!1,vn=0,Dl=null,t)throw Error(r(300));e===null||Le||(e=e.dependencies,e!==null&&hi(e)&&(Le=!0))}function go(e,t,a,l){te=e;var n=0;do{if(Ol&&(Dl=null),vn=0,Ol=!1,25<=n)throw Error(r(301));if(n+=1,Be=Se=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=Io,i=t(a,l)}while(Ol);return i}function Vh(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?yn(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(te.flags|=1024),t}function pc(){var e=Ei!==0;return Ei=0,e}function gc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function vc(e){if(Ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ni=!1}ea=0,Be=Se=te=null,Ol=!1,vn=Ei=0,Dl=null}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?te.memoizedState=Be=e:Be=Be.next=e,Be}function Ue(){if(Se===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Be===null?te.memoizedState:Be.next;if(t!==null)Be=t,Se=e;else{if(e===null)throw te.alternate===null?Error(r(467)):Error(r(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Be===null?te.memoizedState=Be=e:Be=Be.next=e}return Be}function zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yn(e){var t=vn;return vn+=1,Dl===null&&(Dl=[]),e=io(Dl,e,t),t=te,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Fo:Mc),e}function Ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yn(e);if(e.$$typeof===K)return $e(e)}throw Error(r(438,String(e)))}function yc(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=zi(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Pe;return t.index++,a}function ta(e,t){return typeof t=="function"?t(e):t}function Ai(e){var t=Ue();return bc(t,Se,e)}function bc(e,t,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=c=null,h=null,E=t,O=!1;do{var C=E.lane&-536870913;if(C!==E.lane?(ce&C)===C:(ea&C)===C){var z=E.revertLane;if(z===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),C===zl&&(O=!0);else if((ea&z)===z){E=E.next,z===zl&&(O=!0);continue}else C={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(o=h=C,c=i):h=h.next=C,te.lanes|=z,Ma|=z;C=E.action,al&&a(i,C),i=E.hasEagerState?E.eagerState:a(i,C)}else z={lane:C,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(o=h=z,c=i):h=h.next=z,te.lanes|=C,Ma|=C;E=E.next}while(E!==null&&E!==t);if(h===null?c=i:h.next=o,!ht(i,e.memoizedState)&&(Le=!0,O&&(a=Tl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function xc(e){var t=Ue(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ht(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function vo(e,t,a){var l=te,n=Ue(),i=re;if(i){if(a===void 0)throw Error(r(407));a=a()}else a=t();var c=!ht((Se||n).memoizedState,a);if(c&&(n.memoizedState=a,Le=!0),n=n.queue,Nc(xo.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||Be!==null&&Be.memoizedState.tag&1){if(l.flags|=2048,Rl(9,{destroy:void 0},bo.bind(null,l,n,a,t),null),Ee===null)throw Error(r(349));i||(ea&127)!==0||yo(l,t,a)}return a}function yo(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=zi(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function bo(e,t,a,l){t.value=a,t.getSnapshot=l,So(t)&&jo(e)}function xo(e,t,a){return a(function(){So(t)&&jo(e)})}function So(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function jo(e){var t=Ja(e,2);t!==null&&st(t,e,2)}function Sc(e){var t=et();if(typeof e=="function"){var a=e;if(e=a(),al){pa(!0);try{a()}finally{pa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t}function No(e,t,a,l){return e.baseState=a,bc(e,Se,typeof l=="function"?l:ta)}function Zh(e,t,a,l,n){if(Oi(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};D.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Eo(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Eo(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=D.T,c={};D.T=c;try{var o=a(n,l),h=D.S;h!==null&&h(c,o),zo(e,t,o)}catch(E){jc(e,t,E)}finally{i!==null&&c.types!==null&&(i.types=c.types),D.T=i}}else try{i=a(n,l),zo(e,t,i)}catch(E){jc(e,t,E)}}function zo(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){To(e,t,l)},function(l){return jc(e,t,l)}):To(e,t,a)}function To(e,t,a){t.status="fulfilled",t.value=a,Ao(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Eo(e,a)))}function jc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ao(t),t=t.next;while(t!==l)}e.action=null}function Ao(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function wo(e,t){return t}function Mo(e,t){if(re){var a=Ee.formState;if(a!==null){e:{var l=te;if(re){if(Te){t:{for(var n=Te,i=wt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Ot(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Te=Ot(n.nextSibling),l=n.data==="F!";break e}}xa(l)}l=!1}l&&(t=a[0])}}return a=et(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},a.queue=l,a=Ko.bind(null,te,l),l.dispatch=a,l=Sc(!1),i=wc.bind(null,te,!1,l.queue),l=et(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Zh.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Oo(e){var t=Ue();return Do(t,Se,e)}function Do(e,t,a){if(t=bc(e,t,wo)[0],e=Ai(ta)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=yn(t)}catch(c){throw c===Al?vi:c}else l=t;t=Ue();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Rl(9,{destroy:void 0},Jh.bind(null,n,a),null)),[l,i,e]}function Jh(e,t){e.action=t}function Ro(e){var t=Ue(),a=Se;if(a!==null)return Do(t,a,e);Ue(),t=t.memoizedState,a=Ue();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Rl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=zi(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Co(){return Ue().memoizedState}function wi(e,t,a,l){var n=et();te.flags|=e,n.memoizedState=Rl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Mi(e,t,a,l){var n=Ue();l=l===void 0?null:l;var i=n.memoizedState.inst;Se!==null&&l!==null&&mc(l,Se.memoizedState.deps)?n.memoizedState=Rl(t,i,a,l):(te.flags|=e,n.memoizedState=Rl(1|t,i,a,l))}function _o(e,t){wi(8390656,8,e,t)}function Nc(e,t){Mi(2048,8,e,t)}function Kh(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=zi(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Uo(e){var t=Ue().memoizedState;return Kh({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Ho(e,t){return Mi(4,2,e,t)}function Bo(e,t){return Mi(4,4,e,t)}function Lo(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qo(e,t,a){a=a!=null?a.concat([e]):null,Mi(4,4,Lo.bind(null,t,e),a)}function Ec(){}function Yo(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&mc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Go(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&mc(t,l[1]))return l[0];if(l=e(),al){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[l,t],l}function zc(e,t,a){return a===void 0||(ea&1073741824)!==0&&(ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=kf(),te.lanes|=e,Ma|=e,a)}function Xo(e,t,a,l){return ht(a,t)?a:Ml.current!==null?(e=zc(e,a,l),ht(e,t)||(Le=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(ce&261930)===0?(Le=!0,e.memoizedState=a):(e=kf(),te.lanes|=e,Ma|=e,t)}function ko(e,t,a,l,n){var i=G.p;G.p=i!==0&&8>i?i:8;var c=D.T,o={};D.T=o,wc(e,!1,t,a);try{var h=n(),E=D.S;if(E!==null&&E(o,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var O=kh(h,l);bn(e,t,O,xt(e))}else bn(e,t,l,xt(e))}catch(C){bn(e,t,{then:function(){},status:"rejected",reason:C},xt())}finally{G.p=i,c!==null&&o.types!==null&&(c.types=o.types),D.T=c}}function $h(){}function Tc(e,t,a,l){if(e.tag!==5)throw Error(r(476));var n=Qo(e).queue;ko(e,n,t,W,a===null?$h:function(){return Vo(e),a(l)})}function Qo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vo(e){var t=Qo(e);t.next===null&&(t=e.alternate.memoizedState),bn(e,t.next.queue,{},xt())}function Ac(){return $e(Hn)}function Zo(){return Ue().memoizedState}function Jo(){return Ue().memoizedState}function Wh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=xt();e=Na(a);var l=Ea(t,e,a);l!==null&&(st(l,t,a),hn(l,t,a)),t={cache:ac()},e.payload=t;return}t=t.return}}function Fh(e,t,a){var l=xt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Oi(e)?$o(t,a):(a=Vu(e,t,a,l),a!==null&&(st(a,e,l),Wo(a,t,l)))}function Ko(e,t,a){var l=xt();bn(e,t,a,l)}function bn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Oi(e))$o(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,o=i(c,a);if(n.hasEagerState=!0,n.eagerState=o,ht(o,c))return oi(e,t,n,0),Ee===null&&ri(),!1}catch{}if(a=Vu(e,t,n,l),a!==null)return st(a,e,l),Wo(a,t,l),!0}return!1}function wc(e,t,a,l){if(l={lane:2,revertLane:us(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Oi(e)){if(t)throw Error(r(479))}else t=Vu(e,a,l,2),t!==null&&st(t,e,2)}function Oi(e){var t=e.alternate;return e===te||t!==null&&t===te}function $o(e,t){Ol=Ni=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Wo(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,er(e,a)}}var xn={readContext:$e,use:Ti,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};xn.useEffectEvent=Re;var Fo={readContext:$e,use:Ti,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:_o,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,wi(4194308,4,Lo.bind(null,t,e),a)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){wi(4,2,e,t)},useMemo:function(e,t){var a=et();t=t===void 0?null:t;var l=e();if(al){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=et();if(a!==void 0){var n=a(t);if(al){pa(!0);try{a(t)}finally{pa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Fh.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:function(e){e=Sc(e);var t=e.queue,a=Ko.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ec,useDeferredValue:function(e,t){var a=et();return zc(a,e,t)},useTransition:function(){var e=Sc(!1);return e=ko.bind(null,te,e.queue,!0,!1),et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=et();if(re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),Ee===null)throw Error(r(349));(ce&127)!==0||yo(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,_o(xo.bind(null,l,i,e),[e]),l.flags|=2048,Rl(9,{destroy:void 0},bo.bind(null,l,i,a,t),null),a},useId:function(){var e=et(),t=Ee.identifierPrefix;if(re){var a=Qt,l=kt;a=(l&~(1<<32-mt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ei++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Qh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ac,useFormState:Mo,useActionState:Mo,useOptimistic:function(e){var t=et();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=wc.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:yc,useCacheRefresh:function(){return et().memoizedState=Wh.bind(null,te)},useEffectEvent:function(e){var t=et(),a={impl:e};return t.memoizedState=a,function(){if((pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Mc={readContext:$e,use:Ti,useCallback:Yo,useContext:$e,useEffect:Nc,useImperativeHandle:qo,useInsertionEffect:Ho,useLayoutEffect:Bo,useMemo:Go,useReducer:Ai,useRef:Co,useState:function(){return Ai(ta)},useDebugValue:Ec,useDeferredValue:function(e,t){var a=Ue();return Xo(a,Se.memoizedState,e,t)},useTransition:function(){var e=Ai(ta)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:yn(e),t]},useSyncExternalStore:vo,useId:Zo,useHostTransitionStatus:Ac,useFormState:Oo,useActionState:Oo,useOptimistic:function(e,t){var a=Ue();return No(a,Se,e,t)},useMemoCache:yc,useCacheRefresh:Jo};Mc.useEffectEvent=Uo;var Io={readContext:$e,use:Ti,useCallback:Yo,useContext:$e,useEffect:Nc,useImperativeHandle:qo,useInsertionEffect:Ho,useLayoutEffect:Bo,useMemo:Go,useReducer:xc,useRef:Co,useState:function(){return xc(ta)},useDebugValue:Ec,useDeferredValue:function(e,t){var a=Ue();return Se===null?zc(a,e,t):Xo(a,Se.memoizedState,e,t)},useTransition:function(){var e=xc(ta)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:yn(e),t]},useSyncExternalStore:vo,useId:Zo,useHostTransitionStatus:Ac,useFormState:Ro,useActionState:Ro,useOptimistic:function(e,t){var a=Ue();return Se!==null?No(a,Se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:yc,useCacheRefresh:Jo};Io.useEffectEvent=Uo;function Oc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Dc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=xt(),n=Na(l);n.payload=t,a!=null&&(n.callback=a),t=Ea(e,n,l),t!==null&&(st(t,e,l),hn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=xt(),n=Na(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Ea(e,n,l),t!==null&&(st(t,e,l),hn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=xt(),l=Na(a);l.tag=2,t!=null&&(l.callback=t),t=Ea(e,l,a),t!==null&&(st(t,e,a),hn(t,e,a))}};function Po(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!un(a,l)||!un(n,i):!0}function ef(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Dc.enqueueReplaceState(t,t.state,null)}function ll(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function tf(e){si(e)}function af(e){console.error(e)}function lf(e){si(e)}function Di(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function nf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Rc(e,t,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Di(e,t)},a}function uf(e){return e=Na(e),e.tag=3,e}function cf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){nf(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){nf(t,a,l),typeof n!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Ih(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&El(t,a,n,!0),a=gt.current,a!==null){switch(a.tag){case 31:case 13:return Mt===null?ki():a.alternate===null&&Ce===0&&(Ce=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===yi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ls(e,l,n)),!1;case 22:return a.flags|=65536,l===yi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ls(e,l,n)),!1}throw Error(r(435,a.tag))}return ls(e,l,n),ki(),!1}if(re)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Fu&&(e=Error(r(422),{cause:l}),rn(zt(e,a)))):(l!==Fu&&(t=Error(r(423),{cause:l}),rn(zt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=zt(l,a),n=Rc(e.stateNode,l,n),sc(e,n),Ce!==4&&(Ce=2)),!1;var i=Error(r(520),{cause:l});if(i=zt(i,a),wn===null?wn=[i]:wn.push(i),Ce!==4&&(Ce=2),t===null)return!0;l=zt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Rc(a.stateNode,l,e),sc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Oa===null||!Oa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=uf(n),cf(n,e,a,l),sc(a,n),!1}a=a.return}while(a!==null);return!1}var Cc=Error(r(461)),Le=!1;function We(e,t,a,l){t.child=e===null?ro(t,null,a,l):tl(t,e.child,a,l)}function sf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var o in l)o!=="ref"&&(c[o]=l[o])}else c=l;return Fa(t),l=hc(e,t,a,c,i,n),o=pc(),e!==null&&!Le?(gc(e,t,n),aa(e,t,n)):(re&&o&&$u(t),t.flags|=1,We(e,t,l,n),t.child)}function rf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Zu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,of(e,t,i,l,n)):(e=di(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Gc(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:un,a(c,l)&&e.ref===t.ref)return aa(e,t,n)}return t.flags|=1,e=Wt(i,l),e.ref=t.ref,e.return=t,t.child=e}function of(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(un(i,l)&&e.ref===t.ref)if(Le=!1,t.pendingProps=l=i,Gc(e,n))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,aa(e,t,n)}return _c(e,t,a,l,n)}function ff(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return df(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&gi(t,i!==null?i.cachePool:null),i!==null?mo(t,i):oc(),ho(t);else return l=t.lanes=536870912,df(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(gi(t,i.cachePool),mo(t,i),Ta(),t.memoizedState=null):(e!==null&&gi(t,null),oc(),Ta());return We(e,t,n,a),t.child}function Sn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function df(e,t,a,l,n){var i=nc();return i=i===null?null:{parent:He._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&gi(t,null),oc(),ho(t),e!==null&&El(e,t,l,!0),t.childLanes=n,null}function Ri(e,t){return t=_i({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mf(e,t,a){return tl(t,e.child,null,a),e=Ri(t,t.pendingProps),e.flags|=2,vt(t),t.memoizedState=null,e}function Ph(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(l.mode==="hidden")return e=Ri(t,l),t.lanes=536870912,Sn(null,e);if(dc(t),(e=Te)?(e=zd(e,wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:kt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},a=Kr(e),a.return=t,t.child=a,Ke=t,Te=null)):e=null,e===null)throw xa(t);return t.lanes=536870912,null}return Ri(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(dc(t),n)if(t.flags&256)t.flags&=-257,t=mf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Le||El(e,t,a,!1),n=(a&e.childLanes)!==0,Le||n){if(l=Ee,l!==null&&(c=tr(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,Ja(e,c),st(l,e,c),Cc;ki(),t=mf(e,t,a)}else e=i.treeContext,Te=Ot(c.nextSibling),Ke=t,re=!0,ba=null,wt=!1,e!==null&&Fr(t,e),t=Ri(t,l),t.flags|=4096;return t}return e=Wt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ci(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function _c(e,t,a,l,n){return Fa(t),a=hc(e,t,a,l,void 0,n),l=pc(),e!==null&&!Le?(gc(e,t,n),aa(e,t,n)):(re&&l&&$u(t),t.flags|=1,We(e,t,a,n),t.child)}function hf(e,t,a,l,n,i){return Fa(t),t.updateQueue=null,a=go(t,l,a,n),po(e),l=pc(),e!==null&&!Le?(gc(e,t,i),aa(e,t,i)):(re&&l&&$u(t),t.flags|=1,We(e,t,a,i),t.child)}function pf(e,t,a,l,n){if(Fa(t),t.stateNode===null){var i=xl,c=a.contextType;typeof c=="object"&&c!==null&&(i=$e(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Dc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},uc(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?$e(c):xl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Oc(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Dc.enqueueReplaceState(i,i.state,null),gn(t,l,i,n),pn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,h=ll(a,o);i.props=h;var E=i.context,O=a.contextType;c=xl,typeof O=="object"&&O!==null&&(c=$e(O));var C=a.getDerivedStateFromProps;O=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||E!==c)&&ef(t,i,l,c),ja=!1;var z=t.memoizedState;i.state=z,gn(t,l,i,n),pn(),E=t.memoizedState,o||z!==E||ja?(typeof C=="function"&&(Oc(t,a,C,l),E=t.memoizedState),(h=ja||Po(t,a,h,l,z,E,c))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=c,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,cc(e,t),c=t.memoizedProps,O=ll(a,c),i.props=O,C=t.pendingProps,z=i.context,E=a.contextType,h=xl,typeof E=="object"&&E!==null&&(h=$e(E)),o=a.getDerivedStateFromProps,(E=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==C||z!==h)&&ef(t,i,l,h),ja=!1,z=t.memoizedState,i.state=z,gn(t,l,i,n),pn();var A=t.memoizedState;c!==C||z!==A||ja||e!==null&&e.dependencies!==null&&hi(e.dependencies)?(typeof o=="function"&&(Oc(t,a,o,l),A=t.memoizedState),(O=ja||Po(t,a,O,l,z,A,h)||e!==null&&e.dependencies!==null&&hi(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=h,l=O):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ci(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=tl(t,e.child,null,n),t.child=tl(t,null,a,n)):We(e,t,a,n),t.memoizedState=i.state,e=t.child):e=aa(e,t,n),e}function gf(e,t,a,l){return $a(),t.flags|=256,We(e,t,a,l),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:lo()}}function Bc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function vf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?za(t):Ta(),(e=Te)?(e=zd(e,wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:kt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},a=Kr(e),a.return=t,t.child=a,Ke=t,Te=null)):e=null,e===null)throw xa(t);return bs(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(Ta(),n=t.mode,o=_i({mode:"hidden",children:o},n),l=Ka(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=Hc(a),l.childLanes=Bc(e,c,a),t.memoizedState=Uc,Sn(null,l)):(za(t),Lc(t,o))}var h=e.memoizedState;if(h!==null&&(o=h.dehydrated,o!==null)){if(i)t.flags&256?(za(t),t.flags&=-257,t=qc(e,t,a)):t.memoizedState!==null?(Ta(),t.child=e.child,t.flags|=128,t=null):(Ta(),o=l.fallback,n=t.mode,l=_i({mode:"visible",children:l.children},n),o=Ka(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,tl(t,e.child,null,a),l=t.child,l.memoizedState=Hc(a),l.childLanes=Bc(e,c,a),t.memoizedState=Uc,t=Sn(null,l));else if(za(t),bs(o)){if(c=o.nextSibling&&o.nextSibling.dataset,c)var E=c.dgst;c=E,l=Error(r(419)),l.stack="",l.digest=c,rn({value:l,source:null,stack:null}),t=qc(e,t,a)}else if(Le||El(e,t,a,!1),c=(a&e.childLanes)!==0,Le||c){if(c=Ee,c!==null&&(l=tr(c,a),l!==0&&l!==h.retryLane))throw h.retryLane=l,Ja(e,l),st(c,e,l),Cc;ys(o)||ki(),t=qc(e,t,a)}else ys(o)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Te=Ot(o.nextSibling),Ke=t,re=!0,ba=null,wt=!1,e!==null&&Fr(t,e),t=Lc(t,l.children),t.flags|=4096);return t}return n?(Ta(),o=l.fallback,n=t.mode,h=e.child,E=h.sibling,l=Wt(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,E!==null?o=Wt(E,o):(o=Ka(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,Sn(null,l),l=t.child,o=e.child.memoizedState,o===null?o=Hc(a):(n=o.cachePool,n!==null?(h=He._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=lo(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=Bc(e,c,a),t.memoizedState=Uc,Sn(e.child,l)):(za(t),a=e.child,e=a.sibling,a=Wt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Lc(e,t){return t=_i({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function _i(e,t){return e=pt(22,e,null,t),e.lanes=0,e}function qc(e,t,a){return tl(t,e.child,null,a),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ec(e.return,t,a)}function Yc(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function bf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=_e.current,o=(c&2)!==0;if(o?(c=c&1|2,t.flags|=128):c&=1,X(_e,c),We(e,t,l,a),l=re?sn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yf(e,a,t);else if(e.tag===19)yf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ji(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Yc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ji(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Yc(t,!0,a,null,i,l);break;case"together":Yc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function aa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(El(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=Wt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Wt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hi(e)))}function ep(e,t,a){switch(t.tag){case 3:Ze(t,t.stateNode.containerInfo),Sa(t,He,e.memoizedState.cache),$a();break;case 27:case 5:Ga(t);break;case 4:Ze(t,t.stateNode.containerInfo);break;case 10:Sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,dc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(za(t),t.flags|=128,null):(a&t.child.childLanes)!==0?vf(e,t,a):(za(t),e=aa(e,t,a),e!==null?e.sibling:null);za(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(El(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return bf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),X(_e,_e.current),l)break;return null;case 22:return t.lanes=0,ff(e,t,a,t.pendingProps);case 24:Sa(t,He,e.memoizedState.cache)}return aa(e,t,a)}function xf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!Gc(e,a)&&(t.flags&128)===0)return Le=!1,ep(e,t,a);Le=(e.flags&131072)!==0}else Le=!1,re&&(t.flags&1048576)!==0&&Wr(t,sn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e=="function")Zu(e)?(l=ll(e,l),t.tag=1,t=pf(null,t,e,l,a)):(t.tag=0,t=_c(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===oe){t.tag=11,t=sf(null,t,e,l,a);break e}else if(n===I){t.tag=14,t=rf(null,t,e,l,a);break e}}throw t=Ut(e)||e,Error(r(306,t,""))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=ll(l,t.pendingProps),pf(e,t,l,n,a);case 3:e:{if(Ze(t,t.stateNode.containerInfo),e===null)throw Error(r(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,cc(e,t),gn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,Sa(t,He,l),l!==i.cache&&tc(t,[He],a,!0),pn(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=gf(e,t,l,a);break e}else if(l!==n){n=zt(Error(r(424)),t),rn(n),t=gf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Te=Ot(e.firstChild),Ke=t,re=!0,ba=null,wt=!0,a=ro(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($a(),l===n){t=aa(e,t,a);break e}We(e,t,l,a)}t=t.child}return t;case 26:return Ci(e,t),e===null?(a=Dd(t.type,null,t.pendingProps,null))?t.memoizedState=a:re||(a=t.type,e=t.pendingProps,l=Wi(le.current).createElement(a),l[Je]=t,l[at]=e,Fe(l,a,e),ke(l),t.stateNode=l):t.memoizedState=Dd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ga(t),e===null&&re&&(l=t.stateNode=wd(t.type,t.pendingProps,le.current),Ke=t,wt=!0,n=Te,_a(t.type)?(xs=n,Te=Ot(l.firstChild)):Te=n),We(e,t,t.pendingProps.children,a),Ci(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=l=Te)&&(l=Op(l,t.type,t.pendingProps,wt),l!==null?(t.stateNode=l,Ke=t,Te=Ot(l.firstChild),wt=!1,n=!0):n=!1),n||xa(t)),Ga(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,ps(n,i)?l=null:c!==null&&ps(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=hc(e,t,Vh,null,null,a),Hn._currentValue=n),Ci(e,t),We(e,t,l,a),t.child;case 6:return e===null&&re&&((e=a=Te)&&(a=Dp(a,t.pendingProps,wt),a!==null?(t.stateNode=a,Ke=t,Te=null,e=!0):e=!1),e||xa(t)),null;case 13:return vf(e,t,a);case 4:return Ze(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=tl(t,null,l,a):We(e,t,l,a),t.child;case 11:return sf(e,t,t.type,t.pendingProps,a);case 7:return We(e,t,t.pendingProps,a),t.child;case 8:return We(e,t,t.pendingProps.children,a),t.child;case 12:return We(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Sa(t,t.type,l.value),We(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Fa(t),n=$e(n),l=l(n),t.flags|=1,We(e,t,l,a),t.child;case 14:return rf(e,t,t.type,t.pendingProps,a);case 15:return of(e,t,t.type,t.pendingProps,a);case 19:return bf(e,t,a);case 31:return Ph(e,t,a);case 22:return ff(e,t,a,t.pendingProps);case 24:return Fa(t),l=$e(He),e===null?(n=nc(),n===null&&(n=Ee,i=ac(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},uc(t),Sa(t,He,n)):((e.lanes&a)!==0&&(cc(e,t),gn(t,null,null,a),pn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Sa(t,He,l)):(l=i.cache,Sa(t,He,l),l!==n.cache&&tc(t,[He],a,!0))),We(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function la(e){e.flags|=4}function Xc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Jf())e.flags|=8192;else throw el=yi,ic}else e.flags&=-16777217}function Sf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hd(t))if(Jf())e.flags|=8192;else throw el=yi,ic}function Ui(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Is():536870912,e.lanes|=t,Hl|=t)}function jn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function tp(e,t,a){var l=t.pendingProps;switch(Wu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Pt(He),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Nl(t)?la(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Iu())),Ae(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(la(t),i!==null?(Ae(t),Sf(t,i)):(Ae(t),Xc(t,n,null,l,a))):i?i!==e.memoizedState?(la(t),Ae(t),Sf(t,i)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&la(t),Ae(t),Xc(t,n,e,l,a)),null;case 27:if(ha(t),a=le.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&la(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return Ae(t),null}e=Z.current,Nl(t)?Ir(t):(e=wd(n,l,a),t.stateNode=e,la(t))}return Ae(t),null;case 5:if(ha(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&la(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return Ae(t),null}if(i=Z.current,Nl(t))Ir(t);else{var c=Wi(le.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Je]=t,i[at]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Fe(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&la(t)}}return Ae(t),Xc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&la(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(e=le.current,Nl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Je]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||vd(e.nodeValue,a)),e||xa(t,!0)}else e=Wi(e).createTextNode(l),e[Je]=t,t.stateNode=e}return Ae(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Nl(t),a!==null){if(e===null){if(!l)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Je]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else a=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(vt(t),t):(vt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Ae(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Nl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Je]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),n=!1}else n=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(vt(t),t):(vt(t),null)}return vt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ui(t,t.updateQueue),Ae(t),null);case 4:return Oe(),e===null&&os(t.stateNode.containerInfo),Ae(t),null;case 10:return Pt(t.type),Ae(t),null;case 19:if(_(_e),l=t.memoizedState,l===null)return Ae(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)jn(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ji(e),i!==null){for(t.flags|=128,jn(l,!1),e=i.updateQueue,t.updateQueue=e,Ui(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Jr(a,e),a=a.sibling;return X(_e,_e.current&1|2),re&&Ft(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ft()>Yi&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304)}else{if(!n)if(e=ji(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ui(t,e),jn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!re)return Ae(t),null}else 2*ft()-l.renderingStartTime>Yi&&a!==536870912&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ft(),e.sibling=null,a=_e.current,X(_e,n?a&1|2:a&1),re&&Ft(t,l.treeForkCount),e):(Ae(t),null);case 22:case 23:return vt(t),fc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),a=t.updateQueue,a!==null&&Ui(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&_(Ia),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Pt(He),Ae(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function ap(e,t){switch(Wu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pt(He),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ha(t),null;case 31:if(t.memoizedState!==null){if(vt(t),t.alternate===null)throw Error(r(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(_e),null;case 4:return Oe(),null;case 10:return Pt(t.type),null;case 22:case 23:return vt(t),fc(),e!==null&&_(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pt(He),null;case 25:return null;default:return null}}function jf(e,t){switch(Wu(t),t.tag){case 3:Pt(He),Oe();break;case 26:case 27:case 5:ha(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&vt(t);break;case 13:vt(t);break;case 19:_(_e);break;case 10:Pt(t.type);break;case 22:case 23:vt(t),fc(),e!==null&&_(Ia);break;case 24:Pt(He)}}function Nn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(o){xe(t,t.return,o)}}function Aa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,o=c.destroy;if(o!==void 0){c.destroy=void 0,n=t;var h=a,E=o;try{E()}catch(O){xe(n,h,O)}}}l=l.next}while(l!==i)}}catch(O){xe(t,t.return,O)}}function Nf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{fo(t,a)}catch(l){xe(e,e.return,l)}}}function Ef(e,t,a){a.props=ll(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){xe(e,t,l)}}function En(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){xe(e,t,n)}}function Vt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){xe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){xe(e,t,n)}else a.current=null}function zf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){xe(e,e.return,n)}}function kc(e,t,a){try{var l=e.stateNode;Ep(l,e.type,a,t),l[at]=t}catch(n){xe(e,e.return,n)}}function Tf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_a(e.type)||e.tag===4}function Qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_a(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Kt));else if(l!==4&&(l===27&&_a(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Vc(e,t,a),e=e.sibling;e!==null;)Vc(e,t,a),e=e.sibling}function Hi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&_a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hi(e,t,a),e=e.sibling;e!==null;)Hi(e,t,a),e=e.sibling}function Af(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Fe(t,l,a),t[Je]=e,t[at]=a}catch(i){xe(e,e.return,i)}}var na=!1,qe=!1,Zc=!1,wf=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function lp(e,t){if(e=e.containerInfo,ms=lu,e=Lr(e),qu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,o=-1,h=-1,E=0,O=0,C=e,z=null;t:for(;;){for(var A;C!==a||n!==0&&C.nodeType!==3||(o=c+n),C!==i||l!==0&&C.nodeType!==3||(h=c+l),C.nodeType===3&&(c+=C.nodeValue.length),(A=C.firstChild)!==null;)z=C,C=A;for(;;){if(C===e)break t;if(z===a&&++E===n&&(o=c),z===i&&++O===l&&(h=c),(A=C.nextSibling)!==null)break;C=z,z=C.parentNode}C=A}a=o===-1||h===-1?null:{start:o,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(hs={focusedElem:e,selectionRange:a},lu=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var V=ll(a.type,n);e=l.getSnapshotBeforeUpdate(V,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(F){xe(a,a.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)vs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function Mf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),l&4&&Nn(5,a);break;case 1:if(ua(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){xe(a,a.return,c)}else{var n=ll(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){xe(a,a.return,c)}}l&64&&Nf(a),l&512&&En(a,a.return);break;case 3:if(ua(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{fo(e,t)}catch(c){xe(a,a.return,c)}}break;case 27:t===null&&l&4&&Af(a);case 26:case 5:ua(e,a),t===null&&l&4&&zf(a),l&512&&En(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),l&4&&Rf(e,a);break;case 13:ua(e,a),l&4&&Cf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=dp.bind(null,a),Rp(e,a))));break;case 22:if(l=a.memoizedState!==null||na,!l){t=t!==null&&t.memoizedState!==null||qe,n=na;var i=qe;na=l,(qe=t)&&!i?ca(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),na=n,qe=i}break;case 30:break;default:ua(e,a)}}function Of(e){var t=e.alternate;t!==null&&(e.alternate=null,Of(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ju(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,nt=!1;function ia(e,t,a){for(a=a.child;a!==null;)Df(e,t,a),a=a.sibling}function Df(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Jl,a)}catch{}switch(a.tag){case 26:qe||Vt(a,t),ia(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Vt(a,t);var l=Me,n=nt;_a(a.type)&&(Me=a.stateNode,nt=!1),ia(e,t,a),Cn(a.stateNode),Me=l,nt=n;break;case 5:qe||Vt(a,t);case 6:if(l=Me,n=nt,Me=null,ia(e,t,a),Me=l,nt=n,Me!==null)if(nt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(a.stateNode)}catch(i){xe(a,t,i)}else try{Me.removeChild(a.stateNode)}catch(i){xe(a,t,i)}break;case 18:Me!==null&&(nt?(e=Me,Nd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ql(e)):Nd(Me,a.stateNode));break;case 4:l=Me,n=nt,Me=a.stateNode.containerInfo,nt=!0,ia(e,t,a),Me=l,nt=n;break;case 0:case 11:case 14:case 15:Aa(2,a,t),qe||Aa(4,a,t),ia(e,t,a);break;case 1:qe||(Vt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ef(a,t,l)),ia(e,t,a);break;case 21:ia(e,t,a);break;case 22:qe=(l=qe)||a.memoizedState!==null,ia(e,t,a),qe=l;break;default:ia(e,t,a)}}function Rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ql(e)}catch(a){xe(t,t.return,a)}}}function Cf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ql(e)}catch(a){xe(t,t.return,a)}}function np(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new wf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new wf),t;default:throw Error(r(435,e.tag))}}function Bi(e,t){var a=np(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=mp.bind(null,e,l);l.then(n,n)}})}function it(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,o=c;e:for(;o!==null;){switch(o.tag){case 27:if(_a(o.type)){Me=o.stateNode,nt=!1;break e}break;case 5:Me=o.stateNode,nt=!1;break e;case 3:case 4:Me=o.stateNode.containerInfo,nt=!0;break e}o=o.return}if(Me===null)throw Error(r(160));Df(i,c,n),Me=null,nt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}var Bt=null;function _f(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:it(t,e),ut(e),l&4&&(Aa(3,e,e.return),Nn(3,e),Aa(5,e,e.return));break;case 1:it(t,e),ut(e),l&512&&(qe||a===null||Vt(a,a.return)),l&64&&na&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Bt;if(it(t,e),ut(e),l&512&&(qe||a===null||Vt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Wl]||i[Je]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Fe(i,l,a),i[Je]=e,ke(i),l=i;break e;case"link":var c=_d("link","href",n).get(l+(a.href||""));if(c){for(var o=0;o<c.length;o++)if(i=c[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(o,1);break t}}i=n.createElement(l),Fe(i,l,a),n.head.appendChild(i);break;case"meta":if(c=_d("meta","content",n).get(l+(a.content||""))){for(o=0;o<c.length;o++)if(i=c[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(o,1);break t}}i=n.createElement(l),Fe(i,l,a),n.head.appendChild(i);break;default:throw Error(r(468,l))}i[Je]=e,ke(i),l=i}e.stateNode=l}else Ud(n,e.type,e.stateNode);else e.stateNode=Cd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Ud(n,e.type,e.stateNode):Cd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&kc(e,e.memoizedProps,a.memoizedProps)}break;case 27:it(t,e),ut(e),l&512&&(qe||a===null||Vt(a,a.return)),a!==null&&l&4&&kc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(it(t,e),ut(e),l&512&&(qe||a===null||Vt(a,a.return)),e.flags&32){n=e.stateNode;try{ml(n,"")}catch(V){xe(e,e.return,V)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,kc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Zc=!0);break;case 6:if(it(t,e),ut(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(V){xe(e,e.return,V)}}break;case 3:if(Pi=null,n=Bt,Bt=Fi(t.containerInfo),it(t,e),Bt=n,ut(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ql(t.containerInfo)}catch(V){xe(e,e.return,V)}Zc&&(Zc=!1,Uf(e));break;case 4:l=Bt,Bt=Fi(e.stateNode.containerInfo),it(t,e),ut(e),Bt=l;break;case 12:it(t,e),ut(e);break;case 31:it(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 13:it(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qi=ft()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,E=na,O=qe;if(na=E||n,qe=O||h,it(t,e),qe=O,na=E,ut(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||na||qe||nl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{o=h.stateNode;var C=h.memoizedProps.style,z=C!=null&&C.hasOwnProperty("display")?C.display:null;o.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(V){xe(h,h.return,V)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(V){xe(h,h.return,V)}}}else if(t.tag===18){if(a===null){h=t;try{var A=h.stateNode;n?Ed(A,!0):Ed(h.stateNode,!1)}catch(V){xe(h,h.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Bi(e,a))));break;case 19:it(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 30:break;case 21:break;default:it(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Tf(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var n=a.stateNode,i=Qc(e);Hi(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(ml(c,""),a.flags&=-33);var o=Qc(e);Hi(e,o,c);break;case 3:case 4:var h=a.stateNode.containerInfo,E=Qc(e);Vc(e,E,h);break;default:throw Error(r(161))}}catch(O){xe(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Uf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Mf(e,t.alternate,t),t=t.sibling}function nl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Aa(4,t,t.return),nl(t);break;case 1:Vt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ef(t,t.return,a),nl(t);break;case 27:Cn(t.stateNode);case 26:case 5:Vt(t,t.return),nl(t);break;case 22:t.memoizedState===null&&nl(t);break;case 30:nl(t);break;default:nl(t)}e=e.sibling}}function ca(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:ca(n,i,a),Nn(4,i);break;case 1:if(ca(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(E){xe(l,l.return,E)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)oo(h[n],o)}catch(E){xe(l,l.return,E)}}a&&c&64&&Nf(i),En(i,i.return);break;case 27:Af(i);case 26:case 5:ca(n,i,a),a&&l===null&&c&4&&zf(i),En(i,i.return);break;case 12:ca(n,i,a);break;case 31:ca(n,i,a),a&&c&4&&Rf(n,i);break;case 13:ca(n,i,a),a&&c&4&&Cf(n,i);break;case 22:i.memoizedState===null&&ca(n,i,a),En(i,i.return);break;case 30:break;default:ca(n,i,a)}t=t.sibling}}function Jc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&on(a))}function Kc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&on(e))}function Lt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hf(e,t,a,l),t=t.sibling}function Hf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,a,l),n&2048&&Nn(9,t);break;case 1:Lt(e,t,a,l);break;case 3:Lt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&on(e)));break;case 12:if(n&2048){Lt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,o=i.onPostCommit;typeof o=="function"&&o(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){xe(t,t.return,h)}}else Lt(e,t,a,l);break;case 31:Lt(e,t,a,l);break;case 13:Lt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Lt(e,t,a,l):zn(e,t):i._visibility&2?Lt(e,t,a,l):(i._visibility|=2,Cl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Jc(c,t);break;case 24:Lt(e,t,a,l),n&2048&&Kc(t.alternate,t);break;default:Lt(e,t,a,l)}}function Cl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,o=a,h=l,E=c.flags;switch(c.tag){case 0:case 11:case 15:Cl(i,c,o,h,n),Nn(8,c);break;case 23:break;case 22:var O=c.stateNode;c.memoizedState!==null?O._visibility&2?Cl(i,c,o,h,n):zn(i,c):(O._visibility|=2,Cl(i,c,o,h,n)),n&&E&2048&&Jc(c.alternate,c);break;case 24:Cl(i,c,o,h,n),n&&E&2048&&Kc(c.alternate,c);break;default:Cl(i,c,o,h,n)}t=t.sibling}}function zn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:zn(a,l),n&2048&&Jc(l.alternate,l);break;case 24:zn(a,l),n&2048&&Kc(l.alternate,l);break;default:zn(a,l)}t=t.sibling}}var Tn=8192;function _l(e,t,a){if(e.subtreeFlags&Tn)for(e=e.child;e!==null;)Bf(e,t,a),e=e.sibling}function Bf(e,t,a){switch(e.tag){case 26:_l(e,t,a),e.flags&Tn&&e.memoizedState!==null&&Qp(a,Bt,e.memoizedState,e.memoizedProps);break;case 5:_l(e,t,a);break;case 3:case 4:var l=Bt;Bt=Fi(e.stateNode.containerInfo),_l(e,t,a),Bt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Tn,Tn=16777216,_l(e,t,a),Tn=l):_l(e,t,a));break;default:_l(e,t,a)}}function Lf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function An(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Yf(l,e)}Lf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qf(e),e=e.sibling}function qf(e){switch(e.tag){case 0:case 11:case 15:An(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:An(e);break;case 12:An(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Li(e)):An(e);break;default:An(e)}}function Li(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Yf(l,e)}Lf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Aa(8,t,t.return),Li(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Li(t));break;default:Li(t)}e=e.sibling}}function Yf(e,t){for(;Qe!==null;){var a=Qe;switch(a.tag){case 0:case 11:case 15:Aa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:on(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qe=l;else e:for(a=e;Qe!==null;){l=Qe;var n=l.sibling,i=l.return;if(Of(l),l===a){Qe=null;break e}if(n!==null){n.return=i,Qe=n;break e}Qe=i}}}var ip={getCacheForType:function(e){var t=$e(He),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return $e(He).controller.signal}},up=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ee=null,ie=null,ce=0,be=0,yt=null,wa=!1,Ul=!1,$c=!1,sa=0,Ce=0,Ma=0,il=0,Wc=0,bt=0,Hl=0,wn=null,ct=null,Fc=!1,qi=0,Gf=0,Yi=1/0,Gi=null,Oa=null,Ge=0,Da=null,Bl=null,ra=0,Ic=0,Pc=null,Xf=null,Mn=0,es=null;function xt(){return(pe&2)!==0&&ce!==0?ce&-ce:D.T!==null?us():ar()}function kf(){if(bt===0)if((ce&536870912)===0||re){var e=$n;$n<<=1,($n&3932160)===0&&($n=262144),bt=e}else bt=536870912;return e=gt.current,e!==null&&(e.flags|=32),bt}function st(e,t,a){(e===Ee&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(Ll(e,0),Ra(e,ce,bt,!1)),$l(e,a),((pe&2)===0||e!==Ee)&&(e===Ee&&((pe&2)===0&&(il|=a),Ce===4&&Ra(e,ce,bt,!1)),Zt(e))}function Qf(e,t,a){if((pe&6)!==0)throw Error(r(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Kl(e,t),n=l?rp(e,t):as(e,t,!0),i=l;do{if(n===0){Ul&&!l&&Ra(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!cp(a)){n=as(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var o=e;n=wn;var h=o.current.memoizedState.isDehydrated;if(h&&(Ll(o,c).flags|=256),c=as(o,c,!1),c!==2){if($c&&!h){o.errorRecoveryDisabledLanes|=i,il|=i,n=4;break e}i=ct,ct=n,i!==null&&(ct===null?ct=i:ct.push.apply(ct,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Ll(e,0),Ra(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Ra(l,t,bt,!wa);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=qi+300-ft(),10<n)){if(Ra(l,t,bt,!wa),Fn(l,0,!0)!==0)break e;ra=t,l.timeoutHandle=Sd(Vf.bind(null,l,a,ct,Gi,Fc,t,bt,il,Hl,wa,i,"Throttled",-0,0),n);break e}Vf(l,a,ct,Gi,Fc,t,bt,il,Hl,wa,i,null,-0,0)}}break}while(!0);Zt(e)}function Vf(e,t,a,l,n,i,c,o,h,E,O,C,z,A){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kt},Bf(t,i,C);var V=(i&62914560)===i?qi-ft():(i&4194048)===i?Gf-ft():0;if(V=Vp(C,V),V!==null){ra=i,e.cancelPendingCommit=V(Pf.bind(null,e,t,i,a,l,n,c,o,h,O,C,null,z,A)),Ra(e,i,c,!E);return}}Pf(e,t,i,a,l,n,c,o,h)}function cp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ra(e,t,a,l){t&=~Wc,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-mt(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&Ps(e,a,t)}function Xi(){return(pe&6)===0?(On(0),!1):!0}function ts(){if(ie!==null){if(be===0)var e=ie.return;else e=ie,It=Wa=null,vc(e),wl=null,dn=0,e=ie;for(;e!==null;)jf(e.alternate,e),e=e.return;ie=null}}function Ll(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ap(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,ts(),Ee=e,ie=a=Wt(e.current,null),ce=t,be=0,yt=null,wa=!1,Ul=Kl(e,t),$c=!1,Hl=bt=Wc=il=Ma=Ce=0,ct=wn=null,Fc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-mt(l),i=1<<n;t|=e[n],l&=~i}return sa=t,ri(),a}function Zf(e,t){te=null,D.H=xn,t===Al||t===vi?(t=uo(),be=3):t===ic?(t=uo(),be=4):be=t===Cc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ie===null&&(Ce=1,Di(e,zt(t,e.current)))}function Jf(){var e=gt.current;return e===null?!0:(ce&4194048)===ce?Mt===null:(ce&62914560)===ce||(ce&536870912)!==0?e===Mt:!1}function Kf(){var e=D.H;return D.H=xn,e===null?xn:e}function $f(){var e=D.A;return D.A=ip,e}function ki(){Ce=4,wa||(ce&4194048)!==ce&&gt.current!==null||(Ul=!0),(Ma&134217727)===0&&(il&134217727)===0||Ee===null||Ra(Ee,ce,bt,!1)}function as(e,t,a){var l=pe;pe|=2;var n=Kf(),i=$f();(Ee!==e||ce!==t)&&(Gi=null,Ll(e,t)),t=!1;var c=Ce;e:do try{if(be!==0&&ie!==null){var o=ie,h=yt;switch(be){case 8:ts(),c=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var E=be;if(be=0,yt=null,ql(e,o,h,E),a&&Ul){c=0;break e}break;default:E=be,be=0,yt=null,ql(e,o,h,E)}}sp(),c=Ce;break}catch(O){Zf(e,O)}while(!0);return t&&e.shellSuspendCounter++,It=Wa=null,pe=l,D.H=n,D.A=i,ie===null&&(Ee=null,ce=0,ri()),c}function sp(){for(;ie!==null;)Wf(ie)}function rp(e,t){var a=pe;pe|=2;var l=Kf(),n=$f();Ee!==e||ce!==t?(Gi=null,Yi=ft()+500,Ll(e,t)):Ul=Kl(e,t);e:do try{if(be!==0&&ie!==null){t=ie;var i=yt;t:switch(be){case 1:be=0,yt=null,ql(e,t,i,1);break;case 2:case 9:if(no(i)){be=0,yt=null,Ff(t);break}t=function(){be!==2&&be!==9||Ee!==e||(be=7),Zt(e)},i.then(t,t);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:no(i)?(be=0,yt=null,Ff(t)):(be=0,yt=null,ql(e,t,i,7));break;case 5:var c=null;switch(ie.tag){case 26:c=ie.memoizedState;case 5:case 27:var o=ie;if(c?Hd(c):o.stateNode.complete){be=0,yt=null;var h=o.sibling;if(h!==null)ie=h;else{var E=o.return;E!==null?(ie=E,Qi(E)):ie=null}break t}}be=0,yt=null,ql(e,t,i,5);break;case 6:be=0,yt=null,ql(e,t,i,6);break;case 8:ts(),Ce=6;break e;default:throw Error(r(462))}}op();break}catch(O){Zf(e,O)}while(!0);return It=Wa=null,D.H=l,D.A=n,pe=a,ie!==null?0:(Ee=null,ce=0,ri(),Ce)}function op(){for(;ie!==null&&!Cm();)Wf(ie)}function Wf(e){var t=xf(e.alternate,e,sa);e.memoizedProps=e.pendingProps,t===null?Qi(e):ie=t}function Ff(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=hf(a,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=hf(a,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:vc(t);default:jf(a,t),t=ie=Jr(t,sa),t=xf(a,t,sa)}e.memoizedProps=e.pendingProps,t===null?Qi(e):ie=t}function ql(e,t,a,l){It=Wa=null,vc(t),wl=null,dn=0;var n=t.return;try{if(Ih(e,n,t,a,ce)){Ce=1,Di(e,zt(a,e.current)),ie=null;return}}catch(i){if(n!==null)throw ie=n,i;Ce=1,Di(e,zt(a,e.current)),ie=null;return}t.flags&32768?(re||l===1?e=!0:Ul||(ce&536870912)!==0?e=!1:(wa=e=!0,(l===2||l===9||l===3||l===6)&&(l=gt.current,l!==null&&l.tag===13&&(l.flags|=16384))),If(t,e)):Qi(t)}function Qi(e){var t=e;do{if((t.flags&32768)!==0){If(t,wa);return}e=t.return;var a=tp(t.alternate,t,sa);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Ce===0&&(Ce=5)}function If(e,t){do{var a=ap(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);Ce=6,ie=null}function Pf(e,t,a,l,n,i,c,o,h){e.cancelPendingCommit=null;do Vi();while(Ge!==0);if((pe&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=Qu,km(e,a,i,c,o,h),e===Ee&&(ie=Ee=null,ce=0),Bl=t,Da=e,ra=a,Ic=i,Pc=n,Xf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hp(Jn,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,n=G.p,G.p=2,c=pe,pe|=4;try{lp(e,t,a)}finally{pe=c,G.p=n,D.T=l}}Ge=1,ed(),td(),ad()}}function ed(){if(Ge===1){Ge=0;var e=Da,t=Bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=G.p;G.p=2;var n=pe;pe|=4;try{_f(t,e);var i=hs,c=Lr(e.containerInfo),o=i.focusedElem,h=i.selectionRange;if(c!==o&&o&&o.ownerDocument&&Br(o.ownerDocument.documentElement,o)){if(h!==null&&qu(o)){var E=h.start,O=h.end;if(O===void 0&&(O=E),"selectionStart"in o)o.selectionStart=E,o.selectionEnd=Math.min(O,o.value.length);else{var C=o.ownerDocument||document,z=C&&C.defaultView||window;if(z.getSelection){var A=z.getSelection(),V=o.textContent.length,F=Math.min(h.start,V),Ne=h.end===void 0?F:Math.min(h.end,V);!A.extend&&F>Ne&&(c=Ne,Ne=F,F=c);var x=Hr(o,F),v=Hr(o,Ne);if(x&&v&&(A.rangeCount!==1||A.anchorNode!==x.node||A.anchorOffset!==x.offset||A.focusNode!==v.node||A.focusOffset!==v.offset)){var N=C.createRange();N.setStart(x.node,x.offset),A.removeAllRanges(),F>Ne?(A.addRange(N),A.extend(v.node,v.offset)):(N.setEnd(v.node,v.offset),A.addRange(N))}}}}for(C=[],A=o;A=A.parentNode;)A.nodeType===1&&C.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<C.length;o++){var R=C[o];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}lu=!!ms,hs=ms=null}finally{pe=n,G.p=l,D.T=a}}e.current=t,Ge=2}}function td(){if(Ge===2){Ge=0;var e=Da,t=Bl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=G.p;G.p=2;var n=pe;pe|=4;try{Mf(e,t.alternate,t)}finally{pe=n,G.p=l,D.T=a}}Ge=3}}function ad(){if(Ge===4||Ge===3){Ge=0,_m();var e=Da,t=Bl,a=ra,l=Xf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,Bl=Da=null,ld(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Oa=null),xu(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,n=G.p,G.p=2,D.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var o=l[c];i(o.value,{componentStack:o.stack})}}finally{D.T=t,G.p=n}}(ra&3)!==0&&Vi(),Zt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===es?Mn++:(Mn=0,es=e):Mn=0,On(0)}}function ld(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,on(t)))}function Vi(){return ed(),td(),ad(),nd()}function nd(){if(Ge!==5)return!1;var e=Da,t=Ic;Ic=0;var a=xu(ra),l=D.T,n=G.p;try{G.p=32>a?32:a,D.T=null,a=Pc,Pc=null;var i=Da,c=ra;if(Ge=0,Bl=Da=null,ra=0,(pe&6)!==0)throw Error(r(331));var o=pe;if(pe|=4,qf(i.current),Hf(i,i.current,c,a),pe=o,On(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Jl,i)}catch{}return!0}finally{G.p=n,D.T=l,ld(e,t)}}function id(e,t,a){t=zt(a,t),t=Rc(e.stateNode,t,2),e=Ea(e,t,2),e!==null&&($l(e,2),Zt(e))}function xe(e,t,a){if(e.tag===3)id(e,e,a);else for(;t!==null;){if(t.tag===3){id(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Oa===null||!Oa.has(l))){e=zt(a,e),a=uf(2),l=Ea(t,a,2),l!==null&&(cf(a,l,t,e),$l(l,2),Zt(l));break}}t=t.return}}function ls(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new up;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||($c=!0,n.add(a),e=fp.bind(null,e,t,a),t.then(e,e))}function fp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(ce&a)===a&&(Ce===4||Ce===3&&(ce&62914560)===ce&&300>ft()-qi?(pe&2)===0&&Ll(e,0):Wc|=a,Hl===ce&&(Hl=0)),Zt(e)}function ud(e,t){t===0&&(t=Is()),e=Ja(e,t),e!==null&&($l(e,t),Zt(e))}function dp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ud(e,a)}function mp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(t),ud(e,a)}function hp(e,t){return gu(e,t)}var Zi=null,Yl=null,ns=!1,Ji=!1,is=!1,Ca=0;function Zt(e){e!==Yl&&e.next===null&&(Yl===null?Zi=Yl=e:Yl=Yl.next=e),Ji=!0,ns||(ns=!0,gp())}function On(e,t){if(!is&&Ji){is=!0;do for(var a=!1,l=Zi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-mt(42|e)+1)-1,i&=n&~(c&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,od(l,i))}else i=ce,i=Fn(l,l===Ee?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Kl(l,i)||(a=!0,od(l,i));l=l.next}while(a);is=!1}}function pp(){cd()}function cd(){Ji=ns=!1;var e=0;Ca!==0&&Tp()&&(e=Ca);for(var t=ft(),a=null,l=Zi;l!==null;){var n=l.next,i=sd(l,t);i===0?(l.next=null,a===null?Zi=n:a.next=n,n===null&&(Yl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ji=!0)),l=n}Ge!==0&&Ge!==5||On(e),Ca!==0&&(Ca=0)}function sd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-mt(i),o=1<<c,h=n[c];h===-1?((o&a)===0||(o&l)!==0)&&(n[c]=Xm(o,t)):h<=t&&(e.expiredLanes|=o),i&=~o}if(t=Ee,a=ce,a=Fn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(be===2||be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&vu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&vu(l),xu(a)){case 2:case 8:a=Ws;break;case 32:a=Jn;break;case 268435456:a=Fs;break;default:a=Jn}return l=rd.bind(null,e),a=gu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&vu(l),e.callbackPriority=2,e.callbackNode=null,2}function rd(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vi()&&e.callbackNode!==a)return null;var l=ce;return l=Fn(e,e===Ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Qf(e,l,t),sd(e,ft()),e.callbackNode!=null&&e.callbackNode===a?rd.bind(null,e):null)}function od(e,t){if(Vi())return null;Qf(e,t,!0)}function gp(){wp(function(){(pe&6)!==0?gu($s,pp):cd()})}function us(){if(Ca===0){var e=zl;e===0&&(e=Kn,Kn<<=1,(Kn&261888)===0&&(Kn=256)),Ca=e}return Ca}function fd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ti(""+e)}function dd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function vp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=fd((n[at]||null).action),c=l.submitter;c&&(t=(t=c[at]||null)?fd(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var o=new ii("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var h=c?dd(n,c):new FormData(n);Tc(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(o.preventDefault(),h=c?dd(n,c):new FormData(n),Tc(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var cs=0;cs<ku.length;cs++){var ss=ku[cs],yp=ss.toLowerCase(),bp=ss[0].toUpperCase()+ss.slice(1);Ht(yp,"on"+bp)}Ht(Gr,"onAnimationEnd"),Ht(Xr,"onAnimationIteration"),Ht(kr,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(Uh,"onTransitionRun"),Ht(Hh,"onTransitionStart"),Ht(Bh,"onTransitionCancel"),Ht(Qr,"onTransitionEnd"),fl("onMouseEnter",["mouseout","mouseover"]),fl("onMouseLeave",["mouseout","mouseover"]),fl("onPointerEnter",["pointerout","pointerover"]),fl("onPointerLeave",["pointerout","pointerover"]),ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dn));function md(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var o=l[c],h=o.instance,E=o.currentTarget;if(o=o.listener,h!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=E;try{i(n)}catch(O){si(O)}n.currentTarget=null,i=h}else for(c=0;c<l.length;c++){if(o=l[c],h=o.instance,E=o.currentTarget,o=o.listener,h!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=E;try{i(n)}catch(O){si(O)}n.currentTarget=null,i=h}}}}function ue(e,t){var a=t[Su];a===void 0&&(a=t[Su]=new Set);var l=e+"__bubble";a.has(l)||(hd(t,e,2,!1),a.add(l))}function rs(e,t,a){var l=0;t&&(l|=4),hd(a,e,l,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function os(e){if(!e[Ki]){e[Ki]=!0,ir.forEach(function(a){a!=="selectionchange"&&(xp.has(a)||rs(a,!1,e),rs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,rs("selectionchange",!1,t))}}function hd(e,t,a,l){switch(kd(t)){case 2:var n=Kp;break;case 8:n=$p;break;default:n=zs}a=n.bind(null,t,a,e),n=void 0,!Ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function fs(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var o=l.stateNode.containerInfo;if(o===n)break;if(c===4)for(c=l.return;c!==null;){var h=c.tag;if((h===3||h===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;o!==null;){if(c=sl(o),c===null)return;if(h=c.tag,h===5||h===6||h===26||h===27){l=i=c;continue e}o=o.parentNode}}l=l.return}vr(function(){var E=i,O=wu(a),C=[];e:{var z=Vr.get(e);if(z!==void 0){var A=ii,V=e;switch(e){case"keypress":if(li(a)===0)break e;case"keydown":case"keyup":A=mh;break;case"focusin":V="focus",A=_u;break;case"focusout":V="blur",A=_u;break;case"beforeblur":case"afterblur":A=_u;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=xr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=gh;break;case Gr:case Xr:case kr:A=nh;break;case Qr:A=yh;break;case"scroll":case"scrollend":A=Pm;break;case"wheel":A=xh;break;case"copy":case"cut":case"paste":A=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=jr;break;case"toggle":case"beforetoggle":A=jh}var F=(t&4)!==0,Ne=!F&&(e==="scroll"||e==="scrollend"),x=F?z!==null?z+"Capture":null:z;F=[];for(var v=E,N;v!==null;){var R=v;if(N=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||N===null||x===null||(R=Il(v,x),R!=null&&F.push(Rn(v,R,N))),Ne)break;v=v.return}0<F.length&&(z=new A(z,V,null,a,O),C.push({event:z,listeners:F}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",z&&a!==Au&&(V=a.relatedTarget||a.fromElement)&&(sl(V)||V[cl]))break e;if((A||z)&&(z=O.window===O?O:(z=O.ownerDocument)?z.defaultView||z.parentWindow:window,A?(V=a.relatedTarget||a.toElement,A=E,V=V?sl(V):null,V!==null&&(Ne=p(V),F=V.tag,V!==Ne||F!==5&&F!==27&&F!==6)&&(V=null)):(A=null,V=E),A!==V)){if(F=xr,R="onMouseLeave",x="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(F=jr,R="onPointerLeave",x="onPointerEnter",v="pointer"),Ne=A==null?z:Fl(A),N=V==null?z:Fl(V),z=new F(R,v+"leave",A,a,O),z.target=Ne,z.relatedTarget=N,R=null,sl(O)===E&&(F=new F(x,v+"enter",V,a,O),F.target=N,F.relatedTarget=Ne,R=F),Ne=R,A&&V)t:{for(F=Sp,x=A,v=V,N=0,R=x;R;R=F(R))N++;R=0;for(var $=v;$;$=F($))R++;for(;0<N-R;)x=F(x),N--;for(;0<R-N;)v=F(v),R--;for(;N--;){if(x===v||v!==null&&x===v.alternate){F=x;break t}x=F(x),v=F(v)}F=null}else F=null;A!==null&&pd(C,z,A,F,!1),V!==null&&Ne!==null&&pd(C,Ne,V,F,!0)}}e:{if(z=E?Fl(E):window,A=z.nodeName&&z.nodeName.toLowerCase(),A==="select"||A==="input"&&z.type==="file")var me=Or;else if(wr(z))if(Dr)me=Rh;else{me=Oh;var J=Mh}else A=z.nodeName,!A||A.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?E&&Tu(E.elementType)&&(me=Or):me=Dh;if(me&&(me=me(e,E))){Mr(C,me,a,O);break e}J&&J(e,z,E),e==="focusout"&&E&&z.type==="number"&&E.memoizedProps.value!=null&&zu(z,"number",z.value)}switch(J=E?Fl(E):window,e){case"focusin":(wr(J)||J.contentEditable==="true")&&(vl=J,Yu=E,cn=null);break;case"focusout":cn=Yu=vl=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,qr(C,a,O);break;case"selectionchange":if(_h)break;case"keydown":case"keyup":qr(C,a,O)}var ae;if(Hu)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else gl?Tr(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(Nr&&a.locale!=="ko"&&(gl||se!=="onCompositionStart"?se==="onCompositionEnd"&&gl&&(ae=yr()):(va=O,Du="value"in va?va.value:va.textContent,gl=!0)),J=$i(E,se),0<J.length&&(se=new Sr(se,e,null,a,O),C.push({event:se,listeners:J}),ae?se.data=ae:(ae=Ar(a),ae!==null&&(se.data=ae)))),(ae=Eh?zh(e,a):Th(e,a))&&(se=$i(E,"onBeforeInput"),0<se.length&&(J=new Sr("onBeforeInput","beforeinput",null,a,O),C.push({event:J,listeners:se}),J.data=ae)),vp(C,e,E,a,O)}md(C,t)})}function Rn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function $i(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Il(e,a),n!=null&&l.unshift(Rn(e,n,i)),n=Il(e,t),n!=null&&l.push(Rn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Sp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pd(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var o=a,h=o.alternate,E=o.stateNode;if(o=o.tag,h!==null&&h===l)break;o!==5&&o!==26&&o!==27||E===null||(h=E,n?(E=Il(a,i),E!=null&&c.unshift(Rn(a,E,h))):n||(E=Il(a,i),E!=null&&c.push(Rn(a,E,h)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var jp=/\r\n?/g,Np=/\u0000|\uFFFD/g;function gd(e){return(typeof e=="string"?e:""+e).replace(jp,`
`).replace(Np,"")}function vd(e,t){return t=gd(t),gd(e)===t}function je(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ml(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ml(e,""+l);break;case"className":Pn(e,"class",l);break;case"tabIndex":Pn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pn(e,a,l);break;case"style":pr(e,l,i);break;case"data":if(t!=="object"){Pn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ti(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&je(e,t,"name",n.name,n,null),je(e,t,"formEncType",n.formEncType,n,null),je(e,t,"formMethod",n.formMethod,n,null),je(e,t,"formTarget",n.formTarget,n,null)):(je(e,t,"encType",n.encType,n,null),je(e,t,"method",n.method,n,null),je(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ti(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Kt);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ti(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ue("beforetoggle",e),ue("toggle",e),In(e,"popover",l);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":In(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fm.get(a)||a,In(e,a,l))}}function ds(e,t,a,l,n,i){switch(a){case"style":pr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ml(e,l):(typeof l=="number"||typeof l=="bigint")&&ml(e,""+l);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ur.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[at]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):In(e,a,l)}}}function Fe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:je(e,t,i,c,a,null)}}n&&je(e,t,"srcSet",a.srcSet,a,null),l&&je(e,t,"src",a.src,a,null);return;case"input":ue("invalid",e);var o=i=c=n=null,h=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var O=a[l];if(O!=null)switch(l){case"name":n=O;break;case"type":c=O;break;case"checked":h=O;break;case"defaultChecked":E=O;break;case"value":i=O;break;case"defaultValue":o=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:je(e,t,l,O,a,null)}}fr(e,i,o,h,E,c,n,!1);return;case"select":ue("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":c=o;break;case"multiple":l=o;default:je(e,t,n,o,a,null)}t=i,a=c,e.multiple=!!l,t!=null?dl(e,!!l,t,!1):a!=null&&dl(e,!!l,a,!0);return;case"textarea":ue("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:je(e,t,c,o,a,null)}mr(e,l,n,i);return;case"option":for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null)&&(h==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":je(e,t,h,l,a,null));return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(l=0;l<Dn.length;l++)ue(Dn[l],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:je(e,t,E,l,a,null)}return;default:if(Tu(t)){for(O in a)a.hasOwnProperty(O)&&(l=a[O],l!==void 0&&ds(e,t,O,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&je(e,t,o,l,a,null))}function Ep(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,o=null,h=null,E=null,O=null;for(A in a){var C=a[A];if(a.hasOwnProperty(A)&&C!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":h=C;default:l.hasOwnProperty(A)||je(e,t,A,null,l,C)}}for(var z in l){var A=l[z];if(C=a[z],l.hasOwnProperty(z)&&(A!=null||C!=null))switch(z){case"type":i=A;break;case"name":n=A;break;case"checked":E=A;break;case"defaultChecked":O=A;break;case"value":c=A;break;case"defaultValue":o=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,t));break;default:A!==C&&je(e,t,z,A,l,C)}}Eu(e,c,o,h,E,O,i,n);return;case"select":A=c=o=z=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":A=h;default:l.hasOwnProperty(i)||je(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":z=i;break;case"defaultValue":o=i;break;case"multiple":c=i;default:i!==h&&je(e,t,n,i,l,h)}t=o,a=c,l=A,z!=null?dl(e,!!a,z,!1):!!l!=!!a&&(t!=null?dl(e,!!a,t,!0):dl(e,!!a,a?[]:"",!1));return;case"textarea":A=z=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:je(e,t,o,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":z=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&je(e,t,c,n,l,i)}dr(e,z,A);return;case"option":for(var V in a)z=a[V],a.hasOwnProperty(V)&&z!=null&&!l.hasOwnProperty(V)&&(V==="selected"?e.selected=!1:je(e,t,V,null,l,z));for(h in l)z=l[h],A=a[h],l.hasOwnProperty(h)&&z!==A&&(z!=null||A!=null)&&(h==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":je(e,t,h,z,l,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)z=a[F],a.hasOwnProperty(F)&&z!=null&&!l.hasOwnProperty(F)&&je(e,t,F,null,l,z);for(E in l)if(z=l[E],A=a[E],l.hasOwnProperty(E)&&z!==A&&(z!=null||A!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,t));break;default:je(e,t,E,z,l,A)}return;default:if(Tu(t)){for(var Ne in a)z=a[Ne],a.hasOwnProperty(Ne)&&z!==void 0&&!l.hasOwnProperty(Ne)&&ds(e,t,Ne,void 0,l,z);for(O in l)z=l[O],A=a[O],!l.hasOwnProperty(O)||z===A||z===void 0&&A===void 0||ds(e,t,O,z,l,A);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!l.hasOwnProperty(x)&&je(e,t,x,null,l,z);for(C in l)z=l[C],A=a[C],!l.hasOwnProperty(C)||z===A||z==null&&A==null||je(e,t,C,z,l,A)}function yd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,o=n.duration;if(i&&o&&yd(c)){for(c=0,o=n.responseEnd,l+=1;l<a.length;l++){var h=a[l],E=h.startTime;if(E>o)break;var O=h.transferSize,C=h.initiatorType;O&&yd(C)&&(h=h.responseEnd,c+=O*(h<o?1:(o-E)/(h-E)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ms=null,hs=null;function Wi(e){return e.nodeType===9?e:e.ownerDocument}function bd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gs=null;function Tp(){var e=window.event;return e&&e.type==="popstate"?e===gs?!1:(gs=e,!0):(gs=null,!1)}var Sd=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,wp=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(e){return jd.resolve(null).then(e).catch(Mp)}:Sd;function Mp(e){setTimeout(function(){throw e})}function _a(e){return e==="head"}function Nd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ql(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Cn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Cn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,o=i.nodeName;i[Wl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&Cn(e.ownerDocument.body);a=n}while(a);Ql(t)}function Ed(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function vs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vs(a),ju(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Op(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function Dp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ot(e.nextSibling),e===null))return null;return e}function zd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ot(e.nextSibling),e===null))return null;return e}function ys(e){return e.data==="$?"||e.data==="$~"}function bs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xs=null;function Td(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ot(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function wd(e,t,a){switch(t=Wi(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Cn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ju(e)}var Dt=new Map,Md=new Set;function Fi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=G.d;G.d={f:Cp,r:_p,D:Up,C:Hp,L:Bp,m:Lp,X:Yp,S:qp,M:Gp};function Cp(){var e=oa.f(),t=Xi();return e||t}function _p(e){var t=rl(e);t!==null&&t.tag===5&&t.type==="form"?Vo(t):oa.r(e)}var Gl=typeof document>"u"?null:document;function Od(e,t,a){var l=Gl;if(l&&typeof t=="string"&&t){var n=Nt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Md.has(n)||(Md.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Fe(t,"link",e),ke(t),l.head.appendChild(t)))}}function Up(e){oa.D(e),Od("dns-prefetch",e,null)}function Hp(e,t){oa.C(e,t),Od("preconnect",e,t)}function Bp(e,t,a){oa.L(e,t,a);var l=Gl;if(l&&e&&t){var n='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Nt(a.imageSizes)+'"]')):n+='[href="'+Nt(e)+'"]';var i=n;switch(t){case"style":i=Xl(e);break;case"script":i=kl(e)}Dt.has(i)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Dt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(_n(i))||t==="script"&&l.querySelector(Un(i))||(t=l.createElement("link"),Fe(t,"link",e),ke(t),l.head.appendChild(t)))}}function Lp(e,t){oa.m(e,t);var a=Gl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Nt(l)+'"][href="'+Nt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=kl(e)}if(!Dt.has(i)&&(e=T({rel:"modulepreload",href:e},t),Dt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Un(i)))return}l=a.createElement("link"),Fe(l,"link",e),ke(l),a.head.appendChild(l)}}}function qp(e,t,a){oa.S(e,t,a);var l=Gl;if(l&&e){var n=ol(l).hoistableStyles,i=Xl(e);t=t||"default";var c=n.get(i);if(!c){var o={loading:0,preload:null};if(c=l.querySelector(_n(i)))o.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Dt.get(i))&&Ss(e,a);var h=c=l.createElement("link");ke(h),Fe(h,"link",e),h._p=new Promise(function(E,O){h.onload=E,h.onerror=O}),h.addEventListener("load",function(){o.loading|=1}),h.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ii(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:o},n.set(i,c)}}}function Yp(e,t){oa.X(e,t);var a=Gl;if(a&&e){var l=ol(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=T({src:e,async:!0},t),(t=Dt.get(n))&&js(e,t),i=a.createElement("script"),ke(i),Fe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Gp(e,t){oa.M(e,t);var a=Gl;if(a&&e){var l=ol(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=T({src:e,async:!0,type:"module"},t),(t=Dt.get(n))&&js(e,t),i=a.createElement("script"),ke(i),Fe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Dd(e,t,a,l){var n=(n=le.current)?Fi(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Xl(a.href),a=ol(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Xl(a.href);var i=ol(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(_n(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Dt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Dt.set(e,a),i||Xp(n,e,a,c.state))),t&&l===null)throw Error(r(528,""));return c}if(t&&l!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=kl(a),a=ol(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Xl(e){return'href="'+Nt(e)+'"'}function _n(e){return'link[rel="stylesheet"]['+e+"]"}function Rd(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Xp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Fe(t,"link",a),ke(t),e.head.appendChild(t))}function kl(e){return'[src="'+Nt(e)+'"]'}function Un(e){return"script[async]"+e}function Cd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(l)return t.instance=l,ke(l),l;var n=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ke(l),Fe(l,"style",n),Ii(l,a.precedence,e),t.instance=l;case"stylesheet":n=Xl(a.href);var i=e.querySelector(_n(n));if(i)return t.state.loading|=4,t.instance=i,ke(i),i;l=Rd(a),(n=Dt.get(n))&&Ss(l,n),i=(e.ownerDocument||e).createElement("link"),ke(i);var c=i;return c._p=new Promise(function(o,h){c.onload=o,c.onerror=h}),Fe(i,"link",l),t.state.loading|=4,Ii(i,a.precedence,e),t.instance=i;case"script":return i=kl(a.src),(n=e.querySelector(Un(i)))?(t.instance=n,ke(n),n):(l=a,(n=Dt.get(i))&&(l=T({},a),js(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),ke(n),Fe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ii(l,a.precedence,e));return t.instance}function Ii(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var o=l[c];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ss(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function js(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Pi=null;function _d(e,t,a){if(Pi===null){var l=new Map,n=Pi=new Map;n.set(a,l)}else n=Pi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Wl]||i[Je]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var o=l.get(c);o?o.push(i):l.set(c,[i])}}return l}function Ud(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function kp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Xl(l.href),i=t.querySelector(_n(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=eu.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,ke(i);return}i=t.ownerDocument||t,l=Rd(l),(n=Dt.get(n))&&Ss(l,n),i=i.createElement("link"),ke(i);var c=i;c._p=new Promise(function(o,h){c.onload=o,c.onerror=h}),Fe(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=eu.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ns=0;function Vp(e,t){return e.stylesheets&&e.count===0&&au(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&au(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ns===0&&(Ns=62500*zp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&au(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ns?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function eu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tu=null;function au(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tu=new Map,t.forEach(Zp,e),tu=null,eu.call(e))}function Zp(e,t){if(!(t.state.loading&4)){var a=tu.get(e);if(a)var l=a.get(null);else{a=new Map,tu.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=eu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Hn={$$typeof:K,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Jp(e,t,a,l,n,i,c,o,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.hiddenUpdates=yu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Bd(e,t,a,l,n,i,c,o,h,E,O,C){return e=new Jp(e,t,a,c,h,E,O,C,o),t=1,i===!0&&(t|=24),i=pt(3,null,null,t),e.current=i,i.stateNode=e,t=ac(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},uc(i),e}function Ld(e){return e?(e=xl,e):xl}function qd(e,t,a,l,n,i){n=Ld(n),l.context===null?l.context=n:l.pendingContext=n,l=Na(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Ea(e,l,t),a!==null&&(st(a,e,t),hn(a,e,t))}function Yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Es(e,t){Yd(e,t),(e=e.alternate)&&Yd(e,t)}function Gd(e){if(e.tag===13||e.tag===31){var t=Ja(e,67108864);t!==null&&st(t,e,67108864),Es(e,67108864)}}function Xd(e){if(e.tag===13||e.tag===31){var t=xt();t=bu(t);var a=Ja(e,t);a!==null&&st(a,e,t),Es(e,t)}}var lu=!0;function Kp(e,t,a,l){var n=D.T;D.T=null;var i=G.p;try{G.p=2,zs(e,t,a,l)}finally{G.p=i,D.T=n}}function $p(e,t,a,l){var n=D.T;D.T=null;var i=G.p;try{G.p=8,zs(e,t,a,l)}finally{G.p=i,D.T=n}}function zs(e,t,a,l){if(lu){var n=Ts(l);if(n===null)fs(e,t,l,nu,a),Qd(e,l);else if(Fp(n,e,t,a,l))l.stopPropagation();else if(Qd(e,l),t&4&&-1<Wp.indexOf(e)){for(;n!==null;){var i=rl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Xa(i.pendingLanes);if(c!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;c;){var h=1<<31-mt(c);o.entanglements[1]|=h,c&=~h}Zt(i),(pe&6)===0&&(Yi=ft()+500,On(0))}}break;case 31:case 13:o=Ja(i,2),o!==null&&st(o,i,2),Xi(),Es(i,2)}if(i=Ts(l),i===null&&fs(e,t,l,nu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else fs(e,t,l,null,a)}}function Ts(e){return e=wu(e),As(e)}var nu=null;function As(e){if(nu=null,e=sl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nu=e,null}function kd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Um()){case $s:return 2;case Ws:return 8;case Jn:case Hm:return 32;case Fs:return 268435456;default:return 32}default:return 32}}var ws=!1,Ua=null,Ha=null,Ba=null,Bn=new Map,Ln=new Map,La=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qd(e,t){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ln.delete(t.pointerId)}}function qn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=rl(t),t!==null&&Gd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Fp(e,t,a,l,n){switch(t){case"focusin":return Ua=qn(Ua,e,t,a,l,n),!0;case"dragenter":return Ha=qn(Ha,e,t,a,l,n),!0;case"mouseover":return Ba=qn(Ba,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Bn.set(i,qn(Bn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Ln.set(i,qn(Ln.get(i)||null,e,t,a,l,n)),!0}return!1}function Vd(e){var t=sl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,lr(e.priority,function(){Xd(a)});return}}else if(t===31){if(t=w(a),t!==null){e.blockedOn=t,lr(e.priority,function(){Xd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ts(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Au=l,a.target.dispatchEvent(l),Au=null}else return t=rl(a),t!==null&&Gd(t),e.blockedOn=a,!1;t.shift()}return!0}function Zd(e,t,a){iu(e)&&a.delete(t)}function Ip(){ws=!1,Ua!==null&&iu(Ua)&&(Ua=null),Ha!==null&&iu(Ha)&&(Ha=null),Ba!==null&&iu(Ba)&&(Ba=null),Bn.forEach(Zd),Ln.forEach(Zd)}function uu(e,t){e.blockedOn===t&&(e.blockedOn=null,ws||(ws=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ip)))}var cu=null;function Jd(e){cu!==e&&(cu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cu===e&&(cu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(As(l||a)===null)continue;break}var i=rl(a);i!==null&&(e.splice(t,3),t-=3,Tc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ql(e){function t(h){return uu(h,e)}Ua!==null&&uu(Ua,e),Ha!==null&&uu(Ha,e),Ba!==null&&uu(Ba,e),Bn.forEach(t),Ln.forEach(t);for(var a=0;a<La.length;a++){var l=La[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)Vd(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[at]||null;if(typeof i=="function")c||Jd(a);else if(c){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[at]||null)o=c.formAction;else if(As(n)!==null)continue}else o=c.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),Jd(a)}}}function Kd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ms(e){this._internalRoot=e}su.prototype.render=Ms.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,l=xt();qd(a,l,e,t,null,null)},su.prototype.unmount=Ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qd(e.current,2,null,e,null,null),Xi(),t[cl]=null}};function su(e){this._internalRoot=e}su.prototype.unstable_scheduleHydration=function(e){if(e){var t=ar();e={blockedOn:null,target:e,priority:t};for(var a=0;a<La.length&&t!==0&&t<La[a].priority;a++);La.splice(a,0,e),a===0&&Vd(e)}};var $d=d.version;if($d!=="19.2.3")throw Error(r(527,$d,"19.2.3"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=y(t),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var Pp={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{Jl=ru.inject(Pp),dt=ru}catch{}}return Gn.createRoot=function(e,t){if(!m(e))throw Error(r(299));var a=!1,l="",n=tf,i=af,c=lf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Bd(e,1,!1,null,null,a,l,null,n,i,c,Kd),e[cl]=t.current,os(e),new Ms(t)},Gn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(r(299));var l=!1,n="",i=tf,c=af,o=lf,h=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(h=a.formState)),t=Bd(e,1,!0,t,a??null,l,n,h,i,c,o,Kd),t.context=Ld(null),a=t.current,l=xt(),l=bu(l),n=Na(l),n.callback=null,Ea(a,n,l),a=l,t.current.lanes=a,$l(t,a),Zt(t),e[cl]=t.current,os(e),new su(t)},Gn.version="19.2.3",Gn}var im;function rg(){if(im)return Rs.exports;im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Rs.exports=sg(),Rs.exports}var og=rg();const fg=dm(og);var um="popstate";function dg(s={}){function d(m,p){let{pathname:g="/",search:w="",hash:S=""}=ul(m.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),qs("",{pathname:g,search:w,hash:S},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function f(m,p){let g=m.document.querySelector("base"),w="";if(g&&g.getAttribute("href")){let S=m.location.href,y=S.indexOf("#");w=y===-1?S:S.slice(0,y)}return w+"#"+(typeof p=="string"?p:kn(p))}function r(m,p){Ct(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return hg(d,f,r,s)}function De(s,d){if(s===!1||s===null||typeof s>"u")throw new Error(d)}function Ct(s,d){if(!s){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function mg(){return Math.random().toString(36).substring(2,10)}function cm(s,d){return{usr:s.state,key:s.key,idx:d}}function qs(s,d,f=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof d=="string"?ul(d):d,state:f,key:d&&d.key||r||mg()}}function kn({pathname:s="/",search:d="",hash:f=""}){return d&&d!=="?"&&(s+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(s+=f.charAt(0)==="#"?f:"#"+f),s}function ul(s){let d={};if(s){let f=s.indexOf("#");f>=0&&(d.hash=s.substring(f),s=s.substring(0,f));let r=s.indexOf("?");r>=0&&(d.search=s.substring(r),s=s.substring(0,r)),s&&(d.pathname=s)}return d}function hg(s,d,f,r={}){let{window:m=document.defaultView,v5Compat:p=!1}=r,g=m.history,w="POP",S=null,y=M();y==null&&(y=0,g.replaceState({...g.state,idx:y},""));function M(){return(g.state||{idx:null}).idx}function T(){w="POP";let U=M(),Q=U==null?null:U-y;y=U,S&&S({action:w,location:B.location,delta:Q})}function q(U,Q){w="PUSH";let k=qs(B.location,U,Q);f&&f(k,U),y=M()+1;let K=cm(k,y),oe=B.createHref(k);try{g.pushState(K,"",oe)}catch(ye){if(ye instanceof DOMException&&ye.name==="DataCloneError")throw ye;m.location.assign(oe)}p&&S&&S({action:w,location:B.location,delta:1})}function L(U,Q){w="REPLACE";let k=qs(B.location,U,Q);f&&f(k,U),y=M();let K=cm(k,y),oe=B.createHref(k);g.replaceState(K,"",oe),p&&S&&S({action:w,location:B.location,delta:0})}function Y(U){return pg(U)}let B={get action(){return w},get location(){return s(m,g)},listen(U){if(S)throw new Error("A history only accepts one active listener");return m.addEventListener(um,T),S=U,()=>{m.removeEventListener(um,T),S=null}},createHref(U){return d(m,U)},createURL:Y,encodeLocation(U){let Q=Y(U);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:q,replace:L,go(U){return g.go(U)}};return B}function pg(s,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),De(f,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:kn(s);return r=r.replace(/ $/,"%20"),!d&&r.startsWith("//")&&(r=f+r),new URL(r,f)}function mm(s,d,f="/"){return gg(s,d,f,!1)}function gg(s,d,f,r){let m=typeof d=="string"?ul(d):d,p=da(m.pathname||"/",f);if(p==null)return null;let g=hm(s);vg(g);let w=null;for(let S=0;w==null&&S<g.length;++S){let y=wg(p);w=Tg(g[S],y,r)}return w}function hm(s,d=[],f=[],r="",m=!1){let p=(g,w,S=m,y)=>{let M={relativePath:y===void 0?g.path||"":y,caseSensitive:g.caseSensitive===!0,childrenIndex:w,route:g};if(M.relativePath.startsWith("/")){if(!M.relativePath.startsWith(r)&&S)return;De(M.relativePath.startsWith(r),`Absolute route path "${M.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),M.relativePath=M.relativePath.slice(r.length)}let T=fa([r,M.relativePath]),q=f.concat(M);g.children&&g.children.length>0&&(De(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),hm(g.children,d,q,T,S)),!(g.path==null&&!g.index)&&d.push({path:T,score:Eg(T,g.index),routesMeta:q})};return s.forEach((g,w)=>{if(g.path===""||!g.path?.includes("?"))p(g,w);else for(let S of pm(g.path))p(g,w,!0,S)}),d}function pm(s){let d=s.split("/");if(d.length===0)return[];let[f,...r]=d,m=f.endsWith("?"),p=f.replace(/\?$/,"");if(r.length===0)return m?[p,""]:[p];let g=pm(r.join("/")),w=[];return w.push(...g.map(S=>S===""?p:[p,S].join("/"))),m&&w.push(...g),w.map(S=>s.startsWith("/")&&S===""?"/":S)}function vg(s){s.sort((d,f)=>d.score!==f.score?f.score-d.score:zg(d.routesMeta.map(r=>r.childrenIndex),f.routesMeta.map(r=>r.childrenIndex)))}var yg=/^:[\w-]+$/,bg=3,xg=2,Sg=1,jg=10,Ng=-2,sm=s=>s==="*";function Eg(s,d){let f=s.split("/"),r=f.length;return f.some(sm)&&(r+=Ng),d&&(r+=xg),f.filter(m=>!sm(m)).reduce((m,p)=>m+(yg.test(p)?bg:p===""?Sg:jg),r)}function zg(s,d){return s.length===d.length&&s.slice(0,-1).every((r,m)=>r===d[m])?s[s.length-1]-d[d.length-1]:0}function Tg(s,d,f=!1){let{routesMeta:r}=s,m={},p="/",g=[];for(let w=0;w<r.length;++w){let S=r[w],y=w===r.length-1,M=p==="/"?d:d.slice(p.length)||"/",T=mu({path:S.relativePath,caseSensitive:S.caseSensitive,end:y},M),q=S.route;if(!T&&y&&f&&!r[r.length-1].route.index&&(T=mu({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},M)),!T)return null;Object.assign(m,T.params),g.push({params:m,pathname:fa([p,T.pathname]),pathnameBase:Rg(fa([p,T.pathnameBase])),route:q}),T.pathnameBase!=="/"&&(p=fa([p,T.pathnameBase]))}return g}function mu(s,d){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[f,r]=Ag(s.path,s.caseSensitive,s.end),m=d.match(f);if(!m)return null;let p=m[0],g=p.replace(/(.)\/+$/,"$1"),w=m.slice(1);return{params:r.reduce((y,{paramName:M,isOptional:T},q)=>{if(M==="*"){let Y=w[q]||"";g=p.slice(0,p.length-Y.length).replace(/(.)\/+$/,"$1")}const L=w[q];return T&&!L?y[M]=void 0:y[M]=(L||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:g,pattern:s}}function Ag(s,d=!1,f=!0){Ct(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,w,S)=>(r.push({paramName:w,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),r]}function wg(s){try{return s.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Ct(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),s}}function da(s,d){if(d==="/")return s;if(!s.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,r=s.charAt(f);return r&&r!=="/"?null:s.slice(f)||"/"}var gm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mg=s=>gm.test(s);function Og(s,d="/"){let{pathname:f,search:r="",hash:m=""}=typeof s=="string"?ul(s):s,p;if(f)if(Mg(f))p=f;else{if(f.includes("//")){let g=f;f=f.replace(/\/\/+/g,"/"),Ct(!1,`Pathnames cannot have embedded double slashes - normalizing ${g} -> ${f}`)}f.startsWith("/")?p=rm(f.substring(1),"/"):p=rm(f,d)}else p=d;return{pathname:p,search:Cg(r),hash:_g(m)}}function rm(s,d){let f=d.replace(/\/+$/,"").split("/");return s.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Hs(s,d,f,r){return`Cannot include a '${s}' character in a manually specified \`to.${d}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Dg(s){return s.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function vm(s){let d=Dg(s);return d.map((f,r)=>r===d.length-1?f.pathname:f.pathnameBase)}function ym(s,d,f,r=!1){let m;typeof s=="string"?m=ul(s):(m={...s},De(!m.pathname||!m.pathname.includes("?"),Hs("?","pathname","search",m)),De(!m.pathname||!m.pathname.includes("#"),Hs("#","pathname","hash",m)),De(!m.search||!m.search.includes("#"),Hs("#","search","hash",m)));let p=s===""||m.pathname==="",g=p?"/":m.pathname,w;if(g==null)w=f;else{let T=d.length-1;if(!r&&g.startsWith("..")){let q=g.split("/");for(;q[0]==="..";)q.shift(),T-=1;m.pathname=q.join("/")}w=T>=0?d[T]:"/"}let S=Og(m,w),y=g&&g!=="/"&&g.endsWith("/"),M=(p||g===".")&&f.endsWith("/");return!S.pathname.endsWith("/")&&(y||M)&&(S.pathname+="/"),S}var fa=s=>s.join("/").replace(/\/\/+/g,"/"),Rg=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Cg=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,_g=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Ug=class{constructor(s,d,f,r=!1){this.status=s,this.statusText=d||"",this.internal=r,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Hg(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Bg(s){return s.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var bm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xm(s,d){let f=s;if(typeof f!="string"||!gm.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let r=f,m=!1;if(bm)try{let p=new URL(window.location.href),g=f.startsWith("//")?new URL(p.protocol+f):new URL(f),w=da(g.pathname,d);g.origin===p.origin&&w!=null?f=w+g.search+g.hash:m=!0}catch{Ct(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sm=["POST","PUT","PATCH","DELETE"];new Set(Sm);var Lg=["GET",...Sm];new Set(Lg);var Vl=j.createContext(null);Vl.displayName="DataRouter";var hu=j.createContext(null);hu.displayName="DataRouterState";var qg=j.createContext(!1),jm=j.createContext({isTransitioning:!1});jm.displayName="ViewTransition";var Yg=j.createContext(new Map);Yg.displayName="Fetchers";var Gg=j.createContext(null);Gg.displayName="Await";var _t=j.createContext(null);_t.displayName="Navigation";var Qn=j.createContext(null);Qn.displayName="Location";var ma=j.createContext({outlet:null,matches:[],isDataRoute:!1});ma.displayName="Route";var ks=j.createContext(null);ks.displayName="RouteError";var Nm="REACT_ROUTER_ERROR",Xg="REDIRECT",kg="ROUTE_ERROR_RESPONSE";function Qg(s){if(s.startsWith(`${Nm}:${Xg}:{`))try{let d=JSON.parse(s.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function Vg(s){if(s.startsWith(`${Nm}:${kg}:{`))try{let d=JSON.parse(s.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new Ug(d.status,d.statusText,d.data)}catch{}}function Zg(s,{relative:d}={}){De(Vn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:r}=j.useContext(_t),{hash:m,pathname:p,search:g}=Zn(s,{relative:d}),w=p;return f!=="/"&&(w=p==="/"?f:fa([f,p])),r.createHref({pathname:w,search:g,hash:m})}function Vn(){return j.useContext(Qn)!=null}function Ya(){return De(Vn(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Qn).location}var Em="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zm(s){j.useContext(_t).static||j.useLayoutEffect(s)}function Qs(){let{isDataRoute:s}=j.useContext(ma);return s?i0():Jg()}function Jg(){De(Vn(),"useNavigate() may be used only in the context of a <Router> component.");let s=j.useContext(Vl),{basename:d,navigator:f}=j.useContext(_t),{matches:r}=j.useContext(ma),{pathname:m}=Ya(),p=JSON.stringify(vm(r)),g=j.useRef(!1);return zm(()=>{g.current=!0}),j.useCallback((S,y={})=>{if(Ct(g.current,Em),!g.current)return;if(typeof S=="number"){f.go(S);return}let M=ym(S,JSON.parse(p),m,y.relative==="path");s==null&&d!=="/"&&(M.pathname=M.pathname==="/"?d:fa([d,M.pathname])),(y.replace?f.replace:f.push)(M,y.state,y)},[d,f,p,m,s])}j.createContext(null);function Zn(s,{relative:d}={}){let{matches:f}=j.useContext(ma),{pathname:r}=Ya(),m=JSON.stringify(vm(f));return j.useMemo(()=>ym(s,JSON.parse(m),r,d==="path"),[s,m,r,d])}function Kg(s,d){return Tm(s,d)}function Tm(s,d,f,r,m){De(Vn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=j.useContext(_t),{matches:g}=j.useContext(ma),w=g[g.length-1],S=w?w.params:{},y=w?w.pathname:"/",M=w?w.pathnameBase:"/",T=w&&w.route;{let k=T&&T.path||"";wm(y,!T||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let q=Ya(),L;if(d){let k=typeof d=="string"?ul(d):d;De(M==="/"||k.pathname?.startsWith(M),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${M}" but pathname "${k.pathname}" was given in the \`location\` prop.`),L=k}else L=q;let Y=L.pathname||"/",B=Y;if(M!=="/"){let k=M.replace(/^\//,"").split("/");B="/"+Y.replace(/^\//,"").split("/").slice(k.length).join("/")}let U=mm(s,{pathname:B});Ct(T||U!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),Ct(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=Pg(U&&U.map(k=>Object.assign({},k,{params:Object.assign({},S,k.params),pathname:fa([M,p.encodeLocation?p.encodeLocation(k.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?M:fa([M,p.encodeLocation?p.encodeLocation(k.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathnameBase])})),g,f,r,m);return d&&Q?j.createElement(Qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},Q):Q}function $g(){let s=n0(),d=Hg(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),f=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:r},p={padding:"2px 4px",backgroundColor:r},g=null;return console.error("Error handled by React Router default ErrorBoundary:",s),g=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:p},"ErrorBoundary")," or"," ",j.createElement("code",{style:p},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},d),f?j.createElement("pre",{style:m},f):null,g)}var Wg=j.createElement($g,null),Am=class extends j.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,d){return d.location!==s.location||d.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:d.error,location:d.location,revalidation:s.revalidation||d.revalidation}}componentDidCatch(s,d){this.props.onError?this.props.onError(s,d):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const f=Vg(s.digest);f&&(s=f)}let d=s!==void 0?j.createElement(ma.Provider,{value:this.props.routeContext},j.createElement(ks.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?j.createElement(Fg,{error:s},d):d}};Am.contextType=qg;var Bs=new WeakMap;function Fg({children:s,error:d}){let{basename:f}=j.useContext(_t);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let r=Qg(d.digest);if(r){let m=Bs.get(d);if(m)throw m;let p=xm(r.location,f);if(bm&&!Bs.get(d))if(p.isExternal||r.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:r.replace}));throw Bs.set(d,g),g}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return s}function Ig({routeContext:s,match:d,children:f}){let r=j.useContext(Vl);return r&&r.static&&r.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=d.route.id),j.createElement(ma.Provider,{value:s},f)}function Pg(s,d=[],f=null,r=null,m=null){if(s==null){if(!f)return null;if(f.errors)s=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)s=f.matches;else return null}let p=s,g=f?.errors;if(g!=null){let M=p.findIndex(T=>T.route.id&&g?.[T.route.id]!==void 0);De(M>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),p=p.slice(0,Math.min(p.length,M+1))}let w=!1,S=-1;if(f)for(let M=0;M<p.length;M++){let T=p[M];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(S=M),T.route.id){let{loaderData:q,errors:L}=f,Y=T.route.loader&&!q.hasOwnProperty(T.route.id)&&(!L||L[T.route.id]===void 0);if(T.route.lazy||Y){w=!0,S>=0?p=p.slice(0,S+1):p=[p[0]];break}}}let y=f&&r?(M,T)=>{r(M,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:Bg(f.matches),errorInfo:T})}:void 0;return p.reduceRight((M,T,q)=>{let L,Y=!1,B=null,U=null;f&&(L=g&&T.route.id?g[T.route.id]:void 0,B=T.route.errorElement||Wg,w&&(S<0&&q===0?(wm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,U=null):S===q&&(Y=!0,U=T.route.hydrateFallbackElement||null)));let Q=d.concat(p.slice(0,q+1)),k=()=>{let K;return L?K=B:Y?K=U:T.route.Component?K=j.createElement(T.route.Component,null):T.route.element?K=T.route.element:K=M,j.createElement(Ig,{match:T,routeContext:{outlet:M,matches:Q,isDataRoute:f!=null},children:K})};return f&&(T.route.ErrorBoundary||T.route.errorElement||q===0)?j.createElement(Am,{location:f.location,revalidation:f.revalidation,component:B,error:L,children:k(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},onError:y}):k()},null)}function Vs(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e0(s){let d=j.useContext(Vl);return De(d,Vs(s)),d}function t0(s){let d=j.useContext(hu);return De(d,Vs(s)),d}function a0(s){let d=j.useContext(ma);return De(d,Vs(s)),d}function Zs(s){let d=a0(s),f=d.matches[d.matches.length-1];return De(f.route.id,`${s} can only be used on routes that contain a unique "id"`),f.route.id}function l0(){return Zs("useRouteId")}function n0(){let s=j.useContext(ks),d=t0("useRouteError"),f=Zs("useRouteError");return s!==void 0?s:d.errors?.[f]}function i0(){let{router:s}=e0("useNavigate"),d=Zs("useNavigate"),f=j.useRef(!1);return zm(()=>{f.current=!0}),j.useCallback(async(m,p={})=>{Ct(f.current,Em),f.current&&(typeof m=="number"?await s.navigate(m):await s.navigate(m,{fromRouteId:d,...p}))},[s,d])}var om={};function wm(s,d,f){!d&&!om[s]&&(om[s]=!0,Ct(!1,f))}j.memo(u0);function u0({routes:s,future:d,state:f,onError:r}){return Tm(s,void 0,f,r,d)}function Rt(s){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function c0({basename:s="/",children:d=null,location:f,navigationType:r="POP",navigator:m,static:p=!1,unstable_useTransitions:g}){De(!Vn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let w=s.replace(/^\/*/,"/"),S=j.useMemo(()=>({basename:w,navigator:m,static:p,unstable_useTransitions:g,future:{}}),[w,m,p,g]);typeof f=="string"&&(f=ul(f));let{pathname:y="/",search:M="",hash:T="",state:q=null,key:L="default"}=f,Y=j.useMemo(()=>{let B=da(y,w);return B==null?null:{location:{pathname:B,search:M,hash:T,state:q,key:L},navigationType:r}},[w,y,M,T,q,L,r]);return Ct(Y!=null,`<Router basename="${w}"> is not able to match the URL "${y}${M}${T}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:j.createElement(_t.Provider,{value:S},j.createElement(Qn.Provider,{children:d,value:Y}))}function s0({children:s,location:d}){return Kg(Ys(s),d)}function Ys(s,d=[]){let f=[];return j.Children.forEach(s,(r,m)=>{if(!j.isValidElement(r))return;let p=[...d,m];if(r.type===j.Fragment){f.push.apply(f,Ys(r.props.children,p));return}De(r.type===Rt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!r.props.index||!r.props.children,"An index route cannot have child routes.");let g={id:r.props.id||p.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(g.children=Ys(r.props.children,p)),f.push(g)}),f}var fu="get",du="application/x-www-form-urlencoded";function pu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function r0(s){return pu(s)&&s.tagName.toLowerCase()==="button"}function o0(s){return pu(s)&&s.tagName.toLowerCase()==="form"}function f0(s){return pu(s)&&s.tagName.toLowerCase()==="input"}function d0(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function m0(s,d){return s.button===0&&(!d||d==="_self")&&!d0(s)}var ou=null;function h0(){if(ou===null)try{new FormData(document.createElement("form"),0),ou=!1}catch{ou=!0}return ou}var p0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ls(s){return s!=null&&!p0.has(s)?(Ct(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${du}"`),null):s}function g0(s,d){let f,r,m,p,g;if(o0(s)){let w=s.getAttribute("action");r=w?da(w,d):null,f=s.getAttribute("method")||fu,m=Ls(s.getAttribute("enctype"))||du,p=new FormData(s)}else if(r0(s)||f0(s)&&(s.type==="submit"||s.type==="image")){let w=s.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=s.getAttribute("formaction")||w.getAttribute("action");if(r=S?da(S,d):null,f=s.getAttribute("formmethod")||w.getAttribute("method")||fu,m=Ls(s.getAttribute("formenctype"))||Ls(w.getAttribute("enctype"))||du,p=new FormData(w,s),!h0()){let{name:y,type:M,value:T}=s;if(M==="image"){let q=y?`${y}.`:"";p.append(`${q}x`,"0"),p.append(`${q}y`,"0")}else y&&p.append(y,T)}}else{if(pu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=fu,r=null,m=du,g=s}return p&&m==="text/plain"&&(g=p,p=void 0),{action:r,method:f.toLowerCase(),encType:m,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Js(s,d){if(s===!1||s===null||typeof s>"u")throw new Error(d)}function v0(s,d,f,r){let m=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${r}`:m.pathname=`${m.pathname}.${r}`:m.pathname==="/"?m.pathname=`_root.${r}`:d&&da(m.pathname,d)==="/"?m.pathname=`${d.replace(/\/$/,"")}/_root.${r}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${r}`,m}async function y0(s,d){if(s.id in d)return d[s.id];try{let f=await import(s.module);return d[s.id]=f,f}catch(f){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function b0(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function x0(s,d,f){let r=await Promise.all(s.map(async m=>{let p=d.routes[m.route.id];if(p){let g=await y0(p,f);return g.links?g.links():[]}return[]}));return E0(r.flat(1).filter(b0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function fm(s,d,f,r,m,p){let g=(S,y)=>f[y]?S.route.id!==f[y].route.id:!0,w=(S,y)=>f[y].pathname!==S.pathname||f[y].route.path?.endsWith("*")&&f[y].params["*"]!==S.params["*"];return p==="assets"?d.filter((S,y)=>g(S,y)||w(S,y)):p==="data"?d.filter((S,y)=>{let M=r.routes[S.route.id];if(!M||!M.hasLoader)return!1;if(g(S,y)||w(S,y))return!0;if(S.route.shouldRevalidate){let T=S.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function S0(s,d,{includeHydrateFallback:f}={}){return j0(s.map(r=>{let m=d.routes[r.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function j0(s){return[...new Set(s)]}function N0(s){let d={},f=Object.keys(s).sort();for(let r of f)d[r]=s[r];return d}function E0(s,d){let f=new Set;return new Set(d),s.reduce((r,m)=>{let p=JSON.stringify(N0(m));return f.has(p)||(f.add(p),r.push({key:p,link:m})),r},[])}function Mm(){let s=j.useContext(Vl);return Js(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function z0(){let s=j.useContext(hu);return Js(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ks=j.createContext(void 0);Ks.displayName="FrameworkContext";function Om(){let s=j.useContext(Ks);return Js(s,"You must render this element inside a <HydratedRouter> element"),s}function T0(s,d){let f=j.useContext(Ks),[r,m]=j.useState(!1),[p,g]=j.useState(!1),{onFocus:w,onBlur:S,onMouseEnter:y,onMouseLeave:M,onTouchStart:T}=d,q=j.useRef(null);j.useEffect(()=>{if(s==="render"&&g(!0),s==="viewport"){let B=Q=>{Q.forEach(k=>{g(k.isIntersecting)})},U=new IntersectionObserver(B,{threshold:.5});return q.current&&U.observe(q.current),()=>{U.disconnect()}}},[s]),j.useEffect(()=>{if(r){let B=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(B)}}},[r]);let L=()=>{m(!0)},Y=()=>{m(!1),g(!1)};return f?s!=="intent"?[p,q,{}]:[p,q,{onFocus:Xn(w,L),onBlur:Xn(S,Y),onMouseEnter:Xn(y,L),onMouseLeave:Xn(M,Y),onTouchStart:Xn(T,L)}]:[!1,q,{}]}function Xn(s,d){return f=>{s&&s(f),f.defaultPrevented||d(f)}}function A0({page:s,...d}){let{router:f}=Mm(),r=j.useMemo(()=>mm(f.routes,s,f.basename),[f.routes,s,f.basename]);return r?j.createElement(M0,{page:s,matches:r,...d}):null}function w0(s){let{manifest:d,routeModules:f}=Om(),[r,m]=j.useState([]);return j.useEffect(()=>{let p=!1;return x0(s,d,f).then(g=>{p||m(g)}),()=>{p=!0}},[s,d,f]),r}function M0({page:s,matches:d,...f}){let r=Ya(),{future:m,manifest:p,routeModules:g}=Om(),{basename:w}=Mm(),{loaderData:S,matches:y}=z0(),M=j.useMemo(()=>fm(s,d,y,p,r,"data"),[s,d,y,p,r]),T=j.useMemo(()=>fm(s,d,y,p,r,"assets"),[s,d,y,p,r]),q=j.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let B=new Set,U=!1;if(d.forEach(k=>{let K=p.routes[k.route.id];!K||!K.hasLoader||(!M.some(oe=>oe.route.id===k.route.id)&&k.route.id in S&&g[k.route.id]?.shouldRevalidate||K.hasClientLoader?U=!0:B.add(k.route.id))}),B.size===0)return[];let Q=v0(s,w,m.unstable_trailingSlashAwareDataRequests,"data");return U&&B.size>0&&Q.searchParams.set("_routes",d.filter(k=>B.has(k.route.id)).map(k=>k.route.id).join(",")),[Q.pathname+Q.search]},[w,m.unstable_trailingSlashAwareDataRequests,S,r,p,M,d,s,g]),L=j.useMemo(()=>S0(T,p),[T,p]),Y=w0(T);return j.createElement(j.Fragment,null,q.map(B=>j.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...f})),L.map(B=>j.createElement("link",{key:B,rel:"modulepreload",href:B,...f})),Y.map(({key:B,link:U})=>j.createElement("link",{key:B,nonce:f.nonce,...U})))}function O0(...s){return d=>{s.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var D0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{D0&&(window.__reactRouterVersion="7.12.0")}catch{}function R0({basename:s,children:d,unstable_useTransitions:f,window:r}){let m=j.useRef();m.current==null&&(m.current=dg({window:r,v5Compat:!0}));let p=m.current,[g,w]=j.useState({action:p.action,location:p.location}),S=j.useCallback(y=>{f===!1?w(y):j.startTransition(()=>w(y))},[f]);return j.useLayoutEffect(()=>p.listen(S),[p,S]),j.createElement(c0,{basename:s,children:d,location:g.location,navigationType:g.action,navigator:p,unstable_useTransitions:f})}var Dm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ge=j.forwardRef(function({onClick:d,discover:f="render",prefetch:r="none",relative:m,reloadDocument:p,replace:g,state:w,target:S,to:y,preventScrollReset:M,viewTransition:T,unstable_defaultShouldRevalidate:q,...L},Y){let{basename:B,unstable_useTransitions:U}=j.useContext(_t),Q=typeof y=="string"&&Dm.test(y),k=xm(y,B);y=k.to;let K=Zg(y,{relative:m}),[oe,ye,ze]=T0(r,L),I=H0(y,{replace:g,state:w,target:S,preventScrollReset:M,relative:m,viewTransition:T,unstable_defaultShouldRevalidate:q,unstable_useTransitions:U});function we(Pe){d&&d(Pe),Pe.defaultPrevented||I(Pe)}let Ye=j.createElement("a",{...L,...ze,href:k.absoluteURL||K,onClick:k.isExternal||p?d:we,ref:O0(Y,ye),target:S,"data-discover":!Q&&f==="render"?"true":void 0});return oe&&!Q?j.createElement(j.Fragment,null,Ye,j.createElement(A0,{page:K})):Ye});ge.displayName="Link";var C0=j.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:r="",end:m=!1,style:p,to:g,viewTransition:w,children:S,...y},M){let T=Zn(g,{relative:y.relative}),q=Ya(),L=j.useContext(hu),{navigator:Y,basename:B}=j.useContext(_t),U=L!=null&&G0(T)&&w===!0,Q=Y.encodeLocation?Y.encodeLocation(T).pathname:T.pathname,k=q.pathname,K=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;f||(k=k.toLowerCase(),K=K?K.toLowerCase():null,Q=Q.toLowerCase()),K&&B&&(K=da(K,B)||K);const oe=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let ye=k===Q||!m&&k.startsWith(Q)&&k.charAt(oe)==="/",ze=K!=null&&(K===Q||!m&&K.startsWith(Q)&&K.charAt(Q.length)==="/"),I={isActive:ye,isPending:ze,isTransitioning:U},we=ye?d:void 0,Ye;typeof r=="function"?Ye=r(I):Ye=[r,ye?"active":null,ze?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let Pe=typeof p=="function"?p(I):p;return j.createElement(ge,{...y,"aria-current":we,className:Ye,ref:M,style:Pe,to:g,viewTransition:w},typeof S=="function"?S(I):S)});C0.displayName="NavLink";var _0=j.forwardRef(({discover:s="render",fetcherKey:d,navigate:f,reloadDocument:r,replace:m,state:p,method:g=fu,action:w,onSubmit:S,relative:y,preventScrollReset:M,viewTransition:T,unstable_defaultShouldRevalidate:q,...L},Y)=>{let{unstable_useTransitions:B}=j.useContext(_t),U=q0(),Q=Y0(w,{relative:y}),k=g.toLowerCase()==="get"?"get":"post",K=typeof w=="string"&&Dm.test(w),oe=ye=>{if(S&&S(ye),ye.defaultPrevented)return;ye.preventDefault();let ze=ye.nativeEvent.submitter,I=ze?.getAttribute("formmethod")||g,we=()=>U(ze||ye.currentTarget,{fetcherKey:d,method:I,navigate:f,replace:m,state:p,relative:y,preventScrollReset:M,viewTransition:T,unstable_defaultShouldRevalidate:q});B&&f!==!1?j.startTransition(()=>we()):we()};return j.createElement("form",{ref:Y,method:k,action:Q,onSubmit:r?S:oe,...L,"data-discover":!K&&s==="render"?"true":void 0})});_0.displayName="Form";function U0(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rm(s){let d=j.useContext(Vl);return De(d,U0(s)),d}function H0(s,{target:d,replace:f,state:r,preventScrollReset:m,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:w,unstable_useTransitions:S}={}){let y=Qs(),M=Ya(),T=Zn(s,{relative:p});return j.useCallback(q=>{if(m0(q,d)){q.preventDefault();let L=f!==void 0?f:kn(M)===kn(T),Y=()=>y(s,{replace:L,state:r,preventScrollReset:m,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:w});S?j.startTransition(()=>Y()):Y()}},[M,y,T,f,r,d,s,m,p,g,w,S])}var B0=0,L0=()=>`__${String(++B0)}__`;function q0(){let{router:s}=Rm("useSubmit"),{basename:d}=j.useContext(_t),f=l0(),r=s.fetch,m=s.navigate;return j.useCallback(async(p,g={})=>{let{action:w,method:S,encType:y,formData:M,body:T}=g0(p,d);if(g.navigate===!1){let q=g.fetcherKey||L0();await r(q,f,g.action||w,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:M,body:T,formMethod:g.method||S,formEncType:g.encType||y,flushSync:g.flushSync})}else await m(g.action||w,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:M,body:T,formMethod:g.method||S,formEncType:g.encType||y,replace:g.replace,state:g.state,fromRouteId:f,flushSync:g.flushSync,viewTransition:g.viewTransition})},[r,m,d,f])}function Y0(s,{relative:d}={}){let{basename:f}=j.useContext(_t),r=j.useContext(ma);De(r,"useFormAction must be used inside a RouteContext");let[m]=r.matches.slice(-1),p={...Zn(s||".",{relative:d})},g=Ya();if(s==null){p.search=g.search;let w=new URLSearchParams(p.search),S=w.getAll("index");if(S.some(M=>M==="")){w.delete("index"),S.filter(T=>T).forEach(T=>w.append("index",T));let M=w.toString();p.search=M?`?${M}`:""}}return(!s||s===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:fa([f,p.pathname])),kn(p)}function G0(s,{relative:d}={}){let f=j.useContext(jm);De(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Rm("useViewTransitionState"),m=Zn(s,{relative:d});if(!f.isTransitioning)return!1;let p=da(f.currentLocation.pathname,r)||f.currentLocation.pathname,g=da(f.nextLocation.pathname,r)||f.nextLocation.pathname;return mu(m.pathname,g)!=null||mu(m.pathname,p)!=null}function X0(){const[s,d]=j.useState(!1),[f,r]=j.useState(!1),[m,p]=j.useState(!1),[g,w]=j.useState(!1),[S,y]=j.useState(!1),M=Ya(),T=j.useRef(0);j.useEffect(()=>{d(!1),y(!1)},[M.pathname]),j.useEffect(()=>{localStorage.getItem("mode")==="dark"&&(r(!0),document.body.classList.add("dark"))},[]),j.useEffect(()=>{const U=()=>{const Q=window.scrollY;p(Q>10),w(Q>60&&Q>T.current),T.current=Q};return window.addEventListener("scroll",U,{passive:!0}),()=>window.removeEventListener("scroll",U)},[]);function q(){const U=!f;r(U),U?(document.body.classList.add("dark"),localStorage.setItem("mode","dark")):(document.body.classList.remove("dark"),localStorage.setItem("mode","light"))}const L=U=>M.pathname===U,Y=U=>M.pathname.startsWith(U),B=[{label:"Science Stream",path:"/academics/science"},{label:"Commerce Stream",path:"/academics/commerce"},{label:"Examination",path:"/academics/examination"},{label:"Timetable",path:"/academics/timetable"},{label:"Results",path:"/academics/results"}];return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsxs("header",{className:"header",children:[u.jsx("div",{className:`notice-bar ${g?"hidden":""}`,children:"📢 Admissions Open! Apply Now  |  New Session 2026–27"}),u.jsxs("nav",{className:`nav ${m?"scrolled":""}`,children:[u.jsx("div",{className:"logo",children:u.jsxs(ge,{to:"/",style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[u.jsx(k0,{}),u.jsxs("div",{children:[u.jsx("h3",{children:"SVV School"}),u.jsx("p",{children:"Nagpur, Maharashtra"})]})]})}),u.jsxs("ul",{className:"nav-links",style:{display:"flex"},children:[u.jsx("li",{children:u.jsx(ge,{className:L("/")?"activeLink":"",to:"/",children:"Home"})}),u.jsx("li",{children:u.jsx(ge,{className:L("/about")?"activeLink":"",to:"/about",children:"About"})}),u.jsxs("li",{className:"dropdown",children:[u.jsxs(ge,{to:"/academics",className:`dropdown-title ${Y("/academics")?"activeLink":""}`,children:["Academics ",u.jsx("span",{className:"dropdown-chevron",children:"▼"})]}),u.jsx("ul",{className:"dropdown-menu",children:B.map((U,Q)=>u.jsxs(Xs.Fragment,{children:[Q===2&&u.jsx("li",{children:u.jsx("div",{className:"dd-sep"})}),u.jsx("li",{children:u.jsx(ge,{to:U.path,className:M.pathname===U.path?"activeLink":"",children:U.label})})]},U.path))})]}),u.jsx("li",{children:u.jsx(ge,{className:L("/teachers")?"activeLink":"",to:"/teachers",children:"Teachers"})}),u.jsx("li",{children:u.jsx(ge,{className:L("/principal")?"activeLink":"",to:"/principal",children:"Principal"})}),u.jsx("li",{children:u.jsx(ge,{className:L("/management")?"activeLink":"",to:"/management",children:"Management"})}),u.jsx("li",{children:u.jsx(ge,{className:L("/gallery")?"activeLink":"",to:"/gallery",children:"Gallery"})}),u.jsx("li",{children:u.jsx(ge,{className:L("/success")?"activeLink":"",to:"/success",children:"Success"})}),u.jsx("li",{children:u.jsx(ge,{className:L("/contact")?"activeLink":"",to:"/contact",children:"Contact"})})]}),u.jsxs("div",{className:"right-controls",children:[u.jsx("button",{className:"darkBtn",onClick:q,children:f?"☀️ Light":"🌙 Dark"}),u.jsx("button",{className:"menu-btn",onClick:()=>d(!s),children:s?"✕":"☰"})]}),u.jsxs("div",{className:"top-bar",children:[u.jsx("span",{children:"📥 Download Brochure"}),u.jsxs("div",{className:"top-buttons",children:[u.jsx(ge,{to:"/contact#admission",children:u.jsx("button",{className:"enquire-btn",children:"Enquire Now"})}),u.jsx(ge,{to:"/disclosure",children:u.jsx("button",{className:"disclosure-btn",children:"Public Disclosure"})})]})]})]}),u.jsxs("div",{className:`mobile-panel ${s?"active":""}`,children:[u.jsx(ge,{to:"/",className:`mob-link ${L("/")?"activeLink":""}`,children:"Home"}),u.jsx(ge,{to:"/about",className:`mob-link ${L("/about")?"activeLink":""}`,children:"About"}),u.jsxs("div",{className:`mob-link mob-link-split ${Y("/academics")?"activeLink":""}`,children:[u.jsx(ge,{to:"/academics",style:{flex:1,color:"inherit",textDecoration:"none"},children:"Academics"}),u.jsx("span",{className:`mob-chevron ${S?"open":""}`,onClick:U=>{U.stopPropagation(),y(Q=>!Q)},style:{padding:"4px 8px",cursor:"pointer"},children:"▼"})]}),u.jsx("div",{className:`mob-sub ${S?"open":""}`,children:B.map(U=>u.jsx(ge,{to:U.path,className:`mob-sub-link ${M.pathname===U.path?"activeLink":""}`,children:U.label},U.path))}),u.jsx(ge,{to:"/teachers",className:`mob-link ${L("/teachers")?"activeLink":""}`,children:"Teachers"}),u.jsx(ge,{to:"/principal",className:`mob-link ${L("/principal")?"activeLink":""}`,children:"Principal"}),u.jsx(ge,{to:"/management",className:`mob-link ${L("/management")?"activeLink":""}`,children:"Management"}),u.jsx(ge,{to:"/gallery",className:`mob-link ${L("/gallery")?"activeLink":""}`,children:"Gallery"}),u.jsx(ge,{to:"/success",className:`mob-link ${L("/success")?"activeLink":""}`,children:"Success"}),u.jsx(ge,{to:"/contact",className:`mob-link ${L("/contact")?"activeLink":""}`,children:"Contact"}),u.jsx("div",{className:"mob-cta-wrap",children:u.jsx(ge,{to:"/contact#admission",className:"mob-cta",children:"📋 Apply for Admission"})})]})]})]})}function k0(){const[s,d]=j.useState(!1);return u.jsx("div",{className:"logo-img-box",children:s?u.jsx("div",{className:"logo-initials",children:"SVK"}):u.jsx("img",{src:"/logo.png",alt:"School Logo",onError:()=>d(!0)})})}function Q0(){return u.jsx("footer",{className:"footer",children:u.jsx("p",{children:"© 2026 Sarvodaya Vidyalaya Junior Science College Hingna | Internship Project"})})}function V0(){const[s,d]=j.useState(!1);j.useEffect(()=>{function r(){d(document.documentElement.scrollTop>350)}return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);function f(){window.scrollTo({top:0,behavior:"smooth"})}return s?u.jsx("button",{className:"topBtn",onClick:f,children:"↑"}):null}const Z0=["📢 Admissions open for Session 2026–27 — Apply before 30th April","🏆 Congratulations to our students for 100% result in HSC Board Exams 2025","📅 Annual Sports Day scheduled on 15th May 2026 — All students must participate","📚 New Science Lab inaugurated — state-of-the-art equipment for practical learning","🎉 Sarvodaya Vidyalaya ranked Top 10 schools in Nagpur District","📝 Unit Test schedule for June 2026 is now available on the Notice Board"];function J0(){const[s,d]=j.useState(!1),f=JSON.parse(localStorage.getItem("notices")||"[]"),r=f.length>0?f:Z0,m=[...r,...r],p=Math.max(20,r.length*7);return u.jsxs("div",{className:"news-ticker-wrap",children:[u.jsxs("div",{className:"ticker-label",children:[u.jsx("span",{children:"🔴"})," Latest News"]}),u.jsx("div",{className:"ticker-track-wrap",children:u.jsx("div",{className:"ticker-track",style:{"--ticker-duration":`${p}s`,animationPlayState:s?"paused":"running"},children:m.map((g,w)=>u.jsxs(Xs.Fragment,{children:[u.jsxs("span",{className:"ticker-item",children:[u.jsx("span",{className:"ticker-dot"}),g]}),u.jsx("span",{className:"ticker-sep",children:"|"})]},w))})}),u.jsx("button",{className:"ticker-pause-btn",onClick:()=>d(g=>!g),title:s?"Play":"Pause",children:s?"▶":"⏸"})]})}const K0=`
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
`;function $0(){const s=JSON.parse(localStorage.getItem("notices"))||[],d=JSON.parse(localStorage.getItem("events"))||[],f=[{title:u.jsxs(u.Fragment,{children:["Welcome to ",u.jsx("span",{children:"Sarvodaya Vidyalaya"})," Junior Science College"]}),desc:"Quality education with modern classrooms, experienced teachers, and a nurturing environment for every student to thrive.",btnText:"Admissions Open",link:"/contact#admission",img:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80"},{title:u.jsxs(u.Fragment,{children:["Smart Learning, ",u.jsx("span",{children:"Bright Future"})," Ahead"]}),desc:"Interactive teaching methods, smart classrooms, and skill-based learning designed for the leaders of tomorrow.",btnText:"Explore Academics",link:"/academics",img:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"},{title:u.jsxs(u.Fragment,{children:["Sports, Arts & ",u.jsx("span",{children:"Overall Development"})]}),desc:"We nurture physical fitness, creativity, and strong character through diverse co-curricular activities.",btnText:"View Gallery",link:"/gallery",img:"https://images.unsplash.com/photo-1519452635266-abab4954c08b?auto=format&fit=crop&w=1600&q=80"}],[r,m]=j.useState(0),p=j.useRef(null),g=()=>{clearInterval(p.current),p.current=setInterval(()=>{m(Y=>(Y+1)%f.length)},5e3)};j.useEffect(()=>(g(),()=>clearInterval(p.current)),[]);const w=Y=>{m(Y),g()},S=()=>{m(Y=>(Y-1+f.length)%f.length),g()},y=()=>{m(Y=>(Y+1)%f.length),g()},M={students:1200,teachers:80,awards:25,classrooms:50},[T,q]=j.useState({students:0,teachers:0,awards:0,classrooms:0});j.useEffect(()=>{let Y;const B=performance.now(),U=2e3,Q=k=>{const K=Math.min((k-B)/U,1),oe=1-Math.pow(1-K,3);q({students:Math.floor(oe*M.students),teachers:Math.floor(oe*M.teachers),awards:Math.floor(oe*M.awards),classrooms:Math.floor(oe*M.classrooms)}),K<1&&(Y=requestAnimationFrame(Q))};return Y=requestAnimationFrame(Q),()=>cancelAnimationFrame(Y)},[]);const L=[{name:"Rahul Sharma",role:"Parent",msg:"The teachers are genuinely supportive and the education quality is outstanding. My child has grown so much here."},{name:"Ananya Desai",role:"Student",msg:"I love the interactive smart classes and all the activities. Coming to school every day feels exciting."},{name:"Neha Verma",role:"Parent",msg:"A very disciplined school with great focus on academics, sports, and overall personality development."}];return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:K0}),u.jsxs("div",{className:"hero-wrap",children:[f.map((Y,B)=>u.jsx("div",{className:`hero-slide ${B===r?"active":""}`,style:{backgroundImage:`url(${Y.img})`}},B)),u.jsxs("div",{className:"hero-content",children:[u.jsxs("div",{className:"hero-badge",children:[u.jsx("span",{children:"✦"})," Est. Since Hingna · Session 2026–27"]}),u.jsx("h1",{className:"hero-title",children:f[r].title}),u.jsx("p",{className:"hero-desc",children:f[r].desc}),u.jsxs("div",{className:"hero-actions",children:[u.jsx(ge,{to:f[r].link,children:u.jsx("button",{className:"btn-primary",children:f[r].btnText})}),u.jsx(ge,{to:"/about",children:u.jsx("button",{className:"btn-outline",children:"Learn More"})})]})]}),u.jsx("div",{className:"slide-nav",children:f.map((Y,B)=>u.jsx("button",{className:`slide-dot ${B===r?"active":""}`,onClick:()=>w(B)},B))}),u.jsxs("div",{className:"slide-arrows",children:[u.jsx("button",{className:"arrow-btn",onClick:S,children:"◀"}),u.jsx("button",{className:"arrow-btn",onClick:y,children:"▶"})]})]}),u.jsx("div",{className:"info-bar",children:u.jsxs("div",{className:"info-grid",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("div",{className:"info-icon",children:"📌"}),u.jsx("div",{className:"info-label",children:"Admissions"}),u.jsx("div",{className:"info-sub",children:"Session 2026–27 now open for enrollment"}),u.jsx(ge,{to:"/contact#admission",className:"info-link",children:"Apply Now →"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("div",{className:"info-icon",children:"⏰"}),u.jsx("div",{className:"info-label",children:"School Timings"}),u.jsx("div",{className:"info-sub",children:"Mon – Sat: 8:00 AM to 2:30 PM"}),u.jsx("span",{className:"info-link",style:{color:"var(--text-muted)",cursor:"default"},children:"Sunday Holiday"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("div",{className:"info-icon",children:"📞"}),u.jsx("div",{className:"info-label",children:"Contact Us"}),u.jsx("div",{className:"info-sub",children:"We're here for admissions & support"}),u.jsx("span",{className:"info-link",children:"+91 98765 43210"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("div",{className:"info-icon",children:"🏫"}),u.jsx("div",{className:"info-label",children:"Facilities"}),u.jsx("div",{className:"info-sub",children:"Labs · Library · Smart Classes · Sports"}),u.jsx(ge,{to:"/about",className:"info-link",children:"View More →"})]})]})}),u.jsxs("section",{className:"section section-alt",children:[u.jsx("div",{className:"section-label",children:"Stay Updated"}),u.jsx("div",{className:"section-title",children:"Notice Board & Events"}),u.jsx("div",{className:"section-sub",children:"Stay informed about school announcements, important dates, and upcoming events."}),u.jsxs("div",{className:"two-col",children:[u.jsxs("div",{className:"board-card",children:[u.jsxs("div",{className:"board-header",children:[u.jsx("span",{children:"📢"}),u.jsx("h3",{children:"Notice Board"})]}),u.jsx("ul",{className:"notice-list",children:s.length===0?u.jsxs("li",{className:"notice-item",children:[u.jsx("div",{className:"notice-dot"}),"No notices at this time."]}):s.map((Y,B)=>u.jsxs("li",{className:"notice-item",children:[u.jsx("div",{className:"notice-dot"}),Y]},B))})]}),u.jsxs("div",{className:"board-card",children:[u.jsxs("div",{className:"board-header",children:[u.jsx("span",{children:"📅"}),u.jsx("h3",{children:"Upcoming Events"})]}),u.jsx("div",{className:"event-list",children:d.length===0?u.jsx("div",{className:"event-empty",children:"No upcoming events scheduled."}):d.map((Y,B)=>u.jsxs("div",{className:"event-item",children:[u.jsx("div",{className:"event-icon",children:"📅"}),u.jsx("div",{className:"event-text",children:Y})]},B))})]})]})]}),u.jsx("div",{className:"stats-section",children:u.jsxs("div",{style:{position:"relative",zIndex:1},children:[u.jsx("div",{className:"section-label",style:{color:"var(--gold)"},children:"By the Numbers"}),u.jsx("div",{className:"section-title",style:{color:"var(--white)"},children:"Our Achievements"}),u.jsx("div",{className:"section-sub",style:{color:"rgba(255,255,255,0.55)"},children:"We are proud of the community we have built over the years."}),u.jsx("div",{className:"stats-grid",children:[{num:T.students,label:"Students Enrolled",suffix:"+"},{num:T.teachers,label:"Expert Teachers",suffix:"+"},{num:T.awards,label:"Awards Won",suffix:"+"},{num:T.classrooms,label:"Classrooms",suffix:"+"}].map((Y,B)=>u.jsxs("div",{className:"stat-card",children:[u.jsxs("span",{className:"stat-num",children:[Y.num,Y.suffix]}),u.jsx("div",{className:"stat-label",children:Y.label})]},B))})]})}),u.jsxs("section",{className:"section section-alt",children:[u.jsx("div",{className:"section-label",children:"Voices of Trust"}),u.jsx("div",{className:"section-title",children:"What Our Community Says"}),u.jsx("div",{className:"section-sub",children:"Hear from the parents and students who are part of the Sarvodaya family."}),u.jsx("div",{className:"testimonials-grid",children:L.map((Y,B)=>u.jsxs("div",{className:"testi-card",children:[u.jsx("div",{className:"testi-quote",children:'"'}),u.jsx("div",{className:"testi-avatar",children:Y.name[0]}),u.jsx("p",{className:"testi-text",children:Y.msg}),u.jsx("div",{className:"testi-name",children:Y.name}),u.jsx("div",{className:"testi-role",children:Y.role})]},B))})]})]})}function W0(){const s=[{title:"Discipline",desc:"We believe discipline builds character and improves learning habits.",icon:"✅"},{title:"Excellence",desc:"We encourage students to aim high and achieve their best performance.",icon:"🏆"},{title:"Innovation",desc:"We promote smart learning, technology and creative thinking.",icon:"💡"},{title:"Respect",desc:"We teach students to respect teachers, parents and society.",icon:"🤝"}],d=[{name:"Smart Classrooms",icon:"🖥️"},{name:"Science Laboratory",icon:"🔬"},{name:"Computer Lab",icon:"💻"},{name:"Library",icon:"📚"},{name:"Sports Ground",icon:"⚽"},{name:"CCTV Security",icon:"📷"},{name:"Transportation",icon:"🚌"},{name:"Activity Rooms",icon:"🎭"}],f=[{year:"2000",text:"School foundation laid with quality education vision."},{year:"2010",text:"New campus expansion and modern learning facilities."},{year:"2018",text:"Smart classrooms and digital learning introduced."},{year:"2024",text:"Improved sports infrastructure and co-curricular programs."}];return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"page-hero",children:u.jsxs("div",{className:"page-hero-content",children:[u.jsx("h1",{children:"About Sarvodaya Vidyalaya Junior Science College Hingna"}),u.jsx("p",{children:"Sarvodaya Vidyalaya Junior Science College is committed to delivering quality education, skill development and overall growth for every student."})]})}),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Who We Are"}),u.jsx("p",{children:"Building bright futures with knowledge and values"})]}),u.jsxs("div",{className:"card-container",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Our Mission"}),u.jsx("p",{children:"To provide quality education and develop confident, disciplined and responsible students with strong moral values."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Our Vision"}),u.jsx("p",{children:"To be a leading educational institution recognized for excellence in academics, discipline, sports and creativity."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Our Objective"}),u.jsx("p",{children:"To focus on academics along with personality development through events, competitions, and activities."})]})]})]}),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Principal’s Message"}),u.jsx("p",{children:"Guidance, Discipline and Growth"})]}),u.jsxs("div",{className:"principal-box",children:[u.jsxs("div",{className:"principal-left",children:[u.jsx("div",{className:"principal-photo",children:"👩‍🏫"}),u.jsx("h3",{children:"Principal"}),u.jsx("p",{className:"principal-name",children:"Mrs. A. Sharma"})]}),u.jsxs("div",{className:"principal-right",children:[u.jsx("p",{children:"“Our goal is to provide the best learning environment where each student can explore their strengths. We focus on academic excellence, strong discipline and co-curricular development. Together, we shape responsible citizens for tomorrow.”"}),u.jsx("p",{className:"principal-sign",children:"— Principal"})]})]})]}),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Our Core Values"}),u.jsx("p",{children:"Values that shape every student’s journey"})]}),u.jsx("div",{className:"values-grid",children:s.map((r,m)=>u.jsxs("div",{className:"value-card",children:[u.jsx("div",{className:"value-icon",children:r.icon}),u.jsx("h3",{children:r.title}),u.jsx("p",{children:r.desc})]},m))})]}),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Facilities"}),u.jsx("p",{children:"Modern infrastructure for better learning"})]}),u.jsx("div",{className:"facility-grid",children:d.map((r,m)=>u.jsxs("div",{className:"facility-card",children:[u.jsx("span",{className:"facility-icon",children:r.icon}),u.jsx("p",{children:r.name})]},m))})]}),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Our Journey"}),u.jsx("p",{children:"Milestones in our growth"})]}),u.jsx("div",{className:"timeline",children:f.map((r,m)=>u.jsxs("div",{className:"timeline-item",children:[u.jsx("div",{className:"timeline-year",children:r.year}),u.jsx("div",{className:"timeline-text",children:r.text})]},m))})]}),u.jsx("section",{children:u.jsxs("div",{className:"cta-box",children:[u.jsx("h2",{children:"Ready to JoinSarvodaya Vidyalaya Junior Science College Hingna"}),u.jsx("p",{children:"Apply today and start your bright future with us."}),u.jsx(ge,{to:"/contact#admission",children:u.jsx("button",{className:"cta-btn",children:"Apply for Admission"})})]})})]})}function F0(){const[s,d]=j.useState([]);return j.useEffect(()=>{d(JSON.parse(localStorage.getItem("academics"))||[])},[]),u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Academics"}),u.jsx("p",{children:"Quality education from primary to higher secondary"})]}),u.jsxs("div",{className:"card-container",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Primary Section (1st - 5th)"}),u.jsx("p",{children:"Focus on building strong basics in reading, writing, and mathematics through interactive learning, storytelling, and fun activities."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Middle School (6th - 8th)"}),u.jsx("p",{children:"Concept-based learning with emphasis on science, mathematics, languages, and social studies along with regular tests and projects."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Secondary School (9th - 10th)"}),u.jsx("p",{children:"Intensive preparation for board examinations with experienced teachers, doubt-solving sessions, and revision classes."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Higher Secondary (11th - 12th)"}),u.jsx("p",{children:"Science and Commerce streams with career guidance, practical learning, and mentorship programs."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Subjects Offered"}),u.jsx("p",{children:"English, Mathematics, Science, Social Studies, Computer Science, Hindi, Physical Education, and Environmental Studies."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Teaching Methodology"}),u.jsx("p",{children:"Smart classrooms, project-based learning, group discussions, digital presentations, and practical demonstrations."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Examination System"}),u.jsx("p",{children:"Regular class tests, unit tests, mid-term examinations, and annual examinations to monitor student progress."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Academic Support"}),u.jsx("p",{children:"Extra doubt-solving classes, remedial sessions, and personalized mentoring for students needing additional guidance."})]})]}),u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Academics"}),u.jsx("p",{children:"Our courses and curriculum"})]}),u.jsx("div",{className:"card-container",children:s.length===0?u.jsx("p",{children:"No academic information added yet."}):s.map((f,r)=>u.jsx("div",{className:"card",children:u.jsx("p",{children:f})},r))})]})}function I0(){const[s,d]=j.useState([]),[f,r]=j.useState({open:!1,src:""});j.useEffect(()=>{d(JSON.parse(localStorage.getItem("gallery"))||[])},[]);function m(g){r({open:!0,src:g})}function p(){r({open:!1,src:""})}return u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"School Gallery"}),u.jsx("p",{children:"Campus, classrooms & student activities"})]}),u.jsx("div",{className:"gallery",children:s.map((g,w)=>u.jsx("img",{src:g,alt:"gallery-"+w,onClick:()=>m(g)},w))}),f.open&&u.jsxs("div",{className:"lightbox",onClick:p,children:[u.jsx("span",{className:"close-lightbox",onClick:p,children:"×"}),u.jsx("img",{src:f.src,alt:"Full View",onClick:g=>g.stopPropagation()})]})]})}const P0=`
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
`;function ev(){const[s,d]=j.useState({name:"",email:"",phone:"",stream:"",message:""}),[f,r]=j.useState(null),m=g=>{d({...s,[g.target.name]:g.target.value})},p=async g=>{g.preventDefault(),r("loading");try{(await fetch("https://svv-school-backend.onrender.com/api/admission",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok?(r("success"),d({name:"",email:"",phone:"",stream:"",message:""})):r("error")}catch(w){console.error(w),r("error")}};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:P0}),u.jsxs("div",{className:"contact-page",children:[u.jsxs("div",{className:"contact-hero",children:[u.jsx("div",{className:"hero-label",children:"Get in Touch"}),u.jsxs("h1",{className:"hero-title",children:["Contact & ",u.jsx("span",{children:"Admissions"})]}),u.jsx("p",{className:"hero-sub",children:"Reach out to us for admissions, queries, or general information. We're happy to help."})]}),u.jsxs("div",{className:"contact-grid",children:[u.jsxs("div",{className:"left-col",children:[u.jsxs("div",{className:"info-card",children:[u.jsxs("div",{className:"info-card-head",children:[u.jsx("div",{className:"info-icon",children:"📞"}),u.jsx("div",{className:"info-card-title",children:"Phone & Email"})]}),u.jsxs("div",{className:"info-card-body",children:[u.jsx("strong",{children:"+91 98765 43210"}),u.jsx("br",{}),"info@sarvodayavk.edu.in",u.jsx("br",{}),u.jsx("br",{}),u.jsx("strong",{children:"Office Hours:"})," Mon – Sat, 8:00 AM – 2:30 PM"]})]}),u.jsxs("div",{className:"info-card",children:[u.jsxs("div",{className:"info-card-head",children:[u.jsx("div",{className:"info-icon",children:"📍"}),u.jsx("div",{className:"info-card-title",children:"Our Address"})]}),u.jsxs("div",{className:"info-card-body",children:["Sarvodaya Vidyalaya Junior Science College",u.jsx("br",{}),u.jsx("strong",{children:"Hingna, Nagpur, Maharashtra – 441110"}),u.jsx("br",{}),"Near Main Bus Stop, Hingna Road"]})]}),u.jsxs("div",{className:"social-card",children:[u.jsx("div",{className:"social-card-title",children:"🌐 Connect With Us"}),u.jsxs("div",{className:"social-buttons",children:[u.jsxs("a",{href:"https://www.facebook.com/YOUR_ID",target:"_blank",rel:"noopener noreferrer",className:"social-btn facebook",children:[u.jsx("span",{className:"s-icon",children:"f"})," Facebook"]}),u.jsxs("a",{href:"https://twitter.com/YOUR_ID",target:"_blank",rel:"noopener noreferrer",className:"social-btn twitter",children:[u.jsx("span",{className:"s-icon",children:"𝕏"})," Twitter / X"]}),u.jsxs("a",{href:"https://www.instagram.com/YOUR_ID",target:"_blank",rel:"noopener noreferrer",className:"social-btn instagram",children:[u.jsx("span",{className:"s-icon",children:"◎"})," Instagram"]})]}),u.jsx("a",{href:"https://wa.me/91XXXXXXXXXX",target:"_blank",rel:"noopener noreferrer",className:"whatsapp-btn",children:"💬 Chat on WhatsApp"})]}),u.jsxs("div",{className:"map-card",children:[u.jsxs("div",{className:"map-header",children:[u.jsx("span",{children:"📍"}),u.jsx("h3",{children:"Our Location"})]}),u.jsx("iframe",{src:"https://www.google.com/maps?q=Hingna,Nagpur,Maharashtra&output=embed",width:"100%",height:"200",style:{border:0},allowFullScreen:"",loading:"lazy",title:"School Location Map"})]})]}),u.jsxs("div",{className:"form-card",id:"admission",children:[u.jsxs("div",{className:"form-header",children:[u.jsx("div",{className:"form-label-tag",children:"Admissions 2026–27"}),u.jsx("div",{className:"form-title",children:"Apply for Admission"}),u.jsx("p",{className:"form-desc",children:"Fill in the details below and our team will get back to you within 24 hours."})]}),f==="success"&&u.jsx("div",{className:"form-msg success",children:"✅ Admission form submitted successfully! We'll contact you soon."}),f==="error"&&u.jsx("div",{className:"form-msg error",children:"❌ Something went wrong. Please try again or call us directly."}),u.jsxs("form",{onSubmit:p,children:[u.jsxs("div",{className:"field-row",children:[u.jsxs("div",{className:"field-group",style:{marginBottom:0},children:[u.jsx("label",{children:"Student Name"}),u.jsx("input",{className:"field-input",type:"text",name:"name",placeholder:"Full name",value:s.name,onChange:m,required:!0})]}),u.jsxs("div",{className:"field-group",style:{marginBottom:0},children:[u.jsx("label",{children:"Phone Number"}),u.jsx("input",{className:"field-input",type:"text",name:"phone",placeholder:"+91 XXXXX XXXXX",value:s.phone,onChange:m,required:!0})]})]}),u.jsxs("div",{className:"field-group",children:[u.jsx("label",{children:"Email Address"}),u.jsx("input",{className:"field-input",type:"email",name:"email",placeholder:"your@email.com",value:s.email,onChange:m,required:!0})]}),u.jsxs("div",{className:"field-group",children:[u.jsx("label",{children:"Select Stream"}),u.jsx("div",{className:"stream-row",children:["Science","Commerce","Arts","Not decided"].map(g=>u.jsxs("div",{className:"stream-option",children:[u.jsx("input",{type:"radio",id:`stream-${g}`,name:"stream",value:g,checked:s.stream===g,onChange:m}),u.jsxs("label",{className:"stream-label",htmlFor:`stream-${g}`,children:[u.jsx("span",{className:"stream-dot"}),g]})]},g))})]}),u.jsxs("div",{className:"field-group",children:[u.jsx("label",{children:"Message / Query"}),u.jsx("textarea",{className:"field-input",name:"message",placeholder:"Any questions or additional information...",value:s.message,onChange:m})]}),u.jsx("button",{type:"submit",className:"submit-btn",disabled:f==="loading",children:f==="loading"?u.jsx(u.Fragment,{children:"⏳ Submitting..."}):u.jsx(u.Fragment,{children:"📋 Submit Admission Form"})})]})]})]})]})]})}const tv=[{name:"Mr. Rajesh Sharma",subject:"Mathematics",experience:"10+ Years",img:"https://randomuser.me/api/portraits/men/32.jpg"},{name:"Ms. Sneha Patil",subject:"Physics",experience:"8 Years",img:"https://randomuser.me/api/portraits/women/44.jpg"},{name:"Mr. Imran Khan",subject:"Chemistry",experience:"12 Years",img:"https://randomuser.me/api/portraits/men/55.jpg"},{name:"Mrs. Anjali Deshmukh",subject:"Biology",experience:"9 Years",img:"https://randomuser.me/api/portraits/women/68.jpg"}];function av(){return u.jsx("div",{className:"page",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"page-title",children:"Our Teachers"}),u.jsx("div",{className:"card-container",children:tv.map((s,d)=>u.jsxs("div",{className:"card teacher-card",children:[u.jsx("img",{src:s.img,alt:s.name}),u.jsx("h3",{children:s.name}),u.jsx("p",{children:u.jsx("strong",{children:s.subject})}),u.jsxs("p",{children:[s.experience," Experience"]})]},d))})]})})}const lv=[{name:"Dr. A. Deshmukh",role:"Principal",message:"Our vision is to provide quality education that nurtures creativity, discipline, and leadership among students.",img:"https://randomuser.me/api/portraits/men/11.jpg"},{name:"Mrs. S. Kulkarni",role:"Vice Principal",message:"We focus on academic excellence along with co-curricular activities for holistic development.",img:"https://randomuser.me/api/portraits/women/21.jpg"},{name:"Mr. R. Patil",role:"Director",message:"Our institution aims to build future-ready students with strong values and modern skills.",img:"https://randomuser.me/api/portraits/men/31.jpg"}];function nv(){return u.jsx("div",{className:"page",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"page-title",children:"Management Team"}),u.jsx("p",{className:"page-subtitle",children:"Meet the leaders guiding our institution towards excellence."}),u.jsx("div",{className:"card-container",children:lv.map((s,d)=>u.jsxs("div",{className:"card management-card",children:[u.jsx("img",{src:s.img,alt:s.name}),u.jsx("h3",{children:s.name}),u.jsx("p",{className:"role",children:s.role}),u.jsxs("p",{className:"message",children:["“",s.message,"”"]})]},d))})]})})}const iv=[{name:"Rahul Verma",achievement:"Selected in IIT Bombay",year:"2025",img:"https://randomuser.me/api/portraits/men/12.jpg"},{name:"Sneha Kulkarni",achievement:"MHT-CET Topper (99%)",year:"2024",img:"https://randomuser.me/api/portraits/women/22.jpg"},{name:"Amit Patil",achievement:"Placed at Google",year:"2023",img:"https://randomuser.me/api/portraits/men/45.jpg"},{name:"Priya Sharma",achievement:"NEET Rank under 500",year:"2025",img:"https://randomuser.me/api/portraits/women/30.jpg"}];function uv(){return u.jsx("div",{className:"page",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"page-title",children:"Success Stories"}),u.jsx("div",{className:"card-container",children:iv.map((s,d)=>u.jsxs("div",{className:"card success-card",children:[u.jsx("img",{src:s.img,alt:s.name}),u.jsx("h3",{children:s.name}),u.jsx("p",{children:s.achievement}),u.jsx("span",{className:"year",children:s.year})]},d))})]})})}const qt={name:"Dr. Sunita Sharma",role:"Principal",photo:"/principal.jpg",qualification:"M.Sc., B.Ed., Ph.D.",experience:"25+ Years",school:"Sarvodaya Vidyalaya",joined:"Since 2010"},cv=["Welcome to Sarvodaya Vidyalaya Junior Science College, Hingna — a place where knowledge meets character, and education goes beyond textbooks. It gives me immense pride and joy to address you as the Principal of this esteemed institution.","Our school has been a beacon of learning for over two decades, nurturing thousands of students who have gone on to make their mark in every field — from science and medicine to arts and administration. We believe that every child is unique and carries within them an extraordinary potential waiting to be discovered.","At Sarvodaya Vidyalaya, we do not just teach subjects — we build values. Our dedicated faculty works tirelessly to create an environment where curiosity is encouraged, discipline is practiced, and creativity is celebrated. We combine modern teaching methods with time-tested values to prepare students not just for examinations, but for life.","To our students: Dream big, work hard, and never stop learning. Your success is our mission and your character is our pride. To our parents: Thank you for entrusting us with your most precious responsibility. Together, we will ensure your child blossoms into a confident and compassionate individual."],sv="Education is not the filling of a pail, but the lighting of a fire. Our goal is to ignite that fire in every student.",rv=[{num:"25+",label:"Years Experience"},{num:"5000+",label:"Students Guided"},{num:"100%",label:"Board Results"},{num:"30+",label:"Awards Won"}];function ov(){const[s,d]=j.useState(!1);return u.jsxs("div",{className:"principal-page",children:[u.jsxs("div",{className:"principal-hero",children:[u.jsx("div",{className:"hero-label",children:"Leadership"}),u.jsxs("h1",{className:"hero-title",children:["Principal's ",u.jsx("span",{children:"Message"})]}),u.jsx("p",{className:"hero-sub",children:"A word from the heart of our institution"})]}),u.jsxs("div",{className:"principal-main",children:[u.jsxs("div",{className:"principal-grid",children:[u.jsxs("div",{className:"principal-photo-card",children:[u.jsx("div",{className:"photo-frame",children:s?u.jsxs("div",{className:"photo-placeholder",children:[u.jsx("div",{className:"photo-avatar",children:"👩‍💼"}),u.jsx("div",{className:"photo-avatar-text",children:"Photo Coming Soon"})]}):u.jsx("img",{src:qt.photo,alt:qt.name,onError:()=>d(!0)})}),u.jsx("div",{className:"photo-bar"}),u.jsxs("div",{className:"principal-info",children:[u.jsx("div",{className:"principal-name",children:qt.name}),u.jsx("div",{className:"principal-role",children:qt.role}),u.jsx("div",{className:"principal-divider"}),u.jsxs("div",{className:"principal-meta",children:[u.jsxs("div",{className:"meta-item",children:[u.jsx("div",{className:"meta-icon",children:"🎓"}),u.jsxs("div",{children:[u.jsx("strong",{children:"Qualification"}),qt.qualification]})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("div",{className:"meta-icon",children:"📅"}),u.jsxs("div",{children:[u.jsx("strong",{children:"Experience"}),qt.experience]})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("div",{className:"meta-icon",children:"🏫"}),u.jsxs("div",{children:[u.jsx("strong",{children:"Joined"}),qt.joined]})]})]})]})]}),u.jsxs("div",{className:"principal-message-card",children:[u.jsx("div",{className:"msg-label",children:"From the Desk of the Principal"}),u.jsx("div",{className:"msg-title",children:"Dear Students, Parents & Well-wishers,"}),u.jsx("span",{className:"msg-quote-mark",children:'"'}),u.jsxs("div",{className:"msg-body",children:[cv.map((f,r)=>u.jsx("p",{children:f},r)),u.jsx("div",{className:"msg-highlight",children:sv}),u.jsx("p",{children:"I invite you to walk through our corridors of learning with pride, purpose, and passion. Together, let us make Sarvodaya Vidyalaya a center of excellence that the entire community can be proud of."})]}),u.jsxs("div",{className:"msg-signature",children:[u.jsx("div",{className:"sig-avatar",children:qt.name.charAt(0)}),u.jsxs("div",{className:"sig-text",children:[u.jsx("div",{className:"sig-name",children:qt.name}),u.jsxs("div",{className:"sig-role",children:[qt.role," — ",qt.school]})]})]})]})]}),u.jsx("div",{className:"principal-stats",children:rv.map((f,r)=>u.jsxs("div",{className:"p-stat",children:[u.jsx("div",{className:"p-stat-num",children:f.num}),u.jsx("div",{className:"p-stat-label",children:f.label})]},r))})]})]})}function fv(){const[s,d]=j.useState(""),[f,r]=j.useState(""),m=Qs(),p=g=>{g.preventDefault(),s==="admin@dps.com"&&f==="admin123"?(localStorage.setItem("adminAuth","true"),m("/admin-dashboard")):alert("Invalid Login!")};return u.jsxs("section",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"Admin Login"}),u.jsx("p",{children:"Only for Authorized Users"})]}),u.jsxs("form",{className:"admin-form",onSubmit:p,children:[u.jsx("input",{type:"email",placeholder:"Admin Email",required:!0,value:s,onChange:g=>d(g.target.value)}),u.jsx("input",{type:"password",placeholder:"Password",required:!0,value:f,onChange:g=>r(g.target.value)}),u.jsx("button",{type:"submit",children:"Login"})]})]})}const dv=`
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
  .adm-topbar-left { display: flex; align-items: center; gap: 14px; }
  .adm-logo-box {
    width: 38px; height: 38px;
    border-radius: 9px;
    background: linear-gradient(135deg, var(--gold), #7a4e10);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 0.9rem; font-weight: 900;
    color: var(--white);
    box-shadow: 0 2px 10px rgba(201,146,42,0.3);
  }
  .adm-topbar-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem; font-weight: 700; color: var(--white);
  }
  .adm-topbar-sub { font-size: 0.7rem; color: rgba(255,255,255,0.4); letter-spacing: 0.05em; }
  .adm-topbar-right { display: flex; align-items: center; gap: 12px; }
  .adm-time { font-size: 0.75rem; color: rgba(255,255,255,0.4); font-weight: 400; }
  .adm-logout-btn {
    display: flex; align-items: center; gap: 7px;
    background: rgba(229,62,62,0.12);
    border: 1px solid rgba(229,62,62,0.25);
    color: #fc8181;
    padding: 8px 16px; border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem; font-weight: 600;
    cursor: pointer; transition: all 0.2s;
  }
  .adm-logout-btn:hover { background: rgba(229,62,62,0.22); border-color: rgba(229,62,62,0.45); color: #feb2b2; }

  /* ── BODY ── */
  .adm-body { padding: 36px 5vw; max-width: 1280px; margin: 0 auto; }

  .adm-page-heading { margin-bottom: 32px; }
  .adm-page-label {
    font-size: 0.7rem; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--gold);
    font-weight: 600; margin-bottom: 6px;
  }
  .adm-page-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem; font-weight: 900; color: var(--navy);
  }

  /* ── STAT CARDS ── */
  .adm-stats {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px; margin-bottom: 32px;
  }
  .adm-stat {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 14px; padding: 20px 22px;
    display: flex; align-items: center; gap: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .adm-stat:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
  .adm-stat-icon {
    width: 46px; height: 46px; border-radius: 12px;
    background: var(--gold-dim);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; flex-shrink: 0;
  }
  .adm-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.7rem; font-weight: 900; color: var(--navy); line-height: 1;
  }
  .adm-stat-label {
    font-size: 0.72rem; color: var(--muted);
    text-transform: uppercase; letter-spacing: 0.06em; margin-top: 3px;
  }

  /* ── GRIDS ── */
  .adm-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 20px; }
  .adm-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }

  /* ── PANEL ── */
  .adm-panel {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 18px; overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .adm-panel-head {
    background: var(--navy); padding: 16px 22px;
    display: flex; align-items: center; gap: 10px;
  }
  .adm-panel-head h3 {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem; font-weight: 700;
    color: var(--white); flex: 1;
  }
  .adm-panel-badge {
    background: var(--gold-dim); border: 1px solid rgba(201,146,42,0.3);
    color: var(--gold-light); font-size: 0.72rem; font-weight: 600;
    padding: 2px 10px; border-radius: 20px;
  }
  .adm-panel-body { padding: 20px 22px; }

  /* ── INPUTS ── */
  .adm-input-row { display: flex; gap: 10px; margin-bottom: 16px; }
  .adm-input {
    flex: 1; padding: 10px 14px;
    border: 1.5px solid #e2e8f0; border-radius: 9px;
    font-family: 'DM Sans', sans-serif; font-size: 0.85rem;
    color: var(--navy); background: #fafbfc; outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .adm-input::placeholder { color: #b0bac8; }
  .adm-input:focus {
    border-color: var(--gold); background: var(--white);
    box-shadow: 0 0 0 3px rgba(201,146,42,0.1);
  }
  textarea.adm-input { resize: vertical; min-height: 90px; line-height: 1.6; }

  /* ── BUTTONS ── */
  .adm-btn-add {
    background: var(--navy); color: var(--white); border: none;
    padding: 10px 18px; border-radius: 9px;
    font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 600;
    cursor: pointer; white-space: nowrap;
    transition: background 0.2s, transform 0.15s;
    display: flex; align-items: center; gap: 6px;
  }
  .adm-btn-add:hover { background: var(--navy-mid); transform: translateY(-1px); }

  .adm-btn-gold {
    background: var(--gold); color: var(--white); border: none;
    padding: 10px 18px; border-radius: 9px;
    font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 600;
    cursor: pointer; white-space: nowrap;
    transition: background 0.2s, transform 0.15s;
    display: flex; align-items: center; gap: 6px;
  }
  .adm-btn-gold:hover { background: var(--gold-light); transform: translateY(-1px); }

  .adm-btn-del {
    background: var(--danger-dim);
    border: 1px solid rgba(229,62,62,0.18);
    color: var(--danger); padding: 5px 11px; border-radius: 7px;
    font-family: 'DM Sans', sans-serif; font-size: 0.75rem; font-weight: 600;
    cursor: pointer; transition: all 0.18s; white-space: nowrap;
  }
  .adm-btn-del:hover { background: rgba(229,62,62,0.16); border-color: rgba(229,62,62,0.4); }

  /* ── LIST ── */
  .adm-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
  .adm-list-item {
    display: flex; align-items: center; justify-content: space-between;
    gap: 12px; padding: 10px 14px;
    background: #f8fafc; border: 1px solid #edf2f7;
    border-radius: 9px; font-size: 0.85rem; color: var(--navy);
    transition: background 0.15s;
  }
  .adm-list-item:hover { background: #f0f4f8; }
  .adm-list-item span { flex: 1; line-height: 1.4; }
  .adm-list-empty { text-align: center; padding: 20px; font-size: 0.83rem; color: var(--muted); }

  /* ── GALLERY ── */
  .adm-gallery-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 10px; margin-top: 14px;
  }
  .adm-gallery-item {
    position: relative; border-radius: 10px; overflow: hidden;
    border: 1px solid var(--border); aspect-ratio: 1; background: #f0f4f8;
  }
  .adm-gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .adm-gallery-del {
    position: absolute; top: 6px; right: 6px;
    background: rgba(229,62,62,0.85); color: white; border: none;
    width: 26px; height: 26px; border-radius: 6px;
    font-size: 0.75rem; font-weight: 700; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.18s;
  }
  .adm-gallery-del:hover { background: var(--danger); }

  .adm-file-zone {
    border: 2px dashed #cbd5e0; border-radius: 10px;
    padding: 18px 14px; text-align: center; cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    background: #fafbfc; margin-bottom: 10px; display: block;
  }
  .adm-file-zone:hover { border-color: var(--gold); background: var(--gold-dim); }
  .adm-file-zone input { display: none; }
  .adm-file-zone-label { font-size: 0.82rem; color: var(--muted); cursor: pointer; display: block; }
  .adm-file-zone-label strong { color: var(--gold); }
  .adm-file-selected { font-size: 0.78rem; color: var(--success); margin-top: 4px; font-weight: 500; }

  /* ── PRINCIPAL FORM ── */
  .adm-field-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
  .adm-field-label {
    font-size: 0.74rem; font-weight: 600;
    color: var(--navy); text-transform: uppercase; letter-spacing: 0.04em;
  }
  .adm-save-row { display: flex; justify-content: flex-end; margin-top: 6px; }
  .adm-save-badge {
    font-size: 0.75rem; color: var(--success); font-weight: 600;
    background: var(--success-dim); border: 1px solid rgba(56,161,105,0.2);
    padding: 4px 12px; border-radius: 20px;
    display: flex; align-items: center; gap: 6px;
  }

  /* ── TABLE ── */
  .adm-table-wrap {
    overflow-x: auto; margin-top: 16px;
    border-radius: 12px; border: 1px solid var(--border);
  }
  .adm-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
  .adm-table thead tr { background: var(--navy); }
  .adm-table thead th {
    padding: 13px 16px; text-align: left;
    font-size: 0.72rem; font-weight: 600;
    color: rgba(255,255,255,0.55);
    text-transform: uppercase; letter-spacing: 0.07em; white-space: nowrap;
  }
  .adm-table tbody tr { border-bottom: 1px solid #f0f4f8; transition: background 0.15s; }
  .adm-table tbody tr:hover { background: #f8fafc; }
  .adm-table tbody tr:last-child { border-bottom: none; }
  .adm-table td { padding: 12px 16px; color: var(--navy); vertical-align: top; line-height: 1.5; }
  .adm-table td.muted { color: var(--muted); font-size: 0.82rem; }

  /* stream badge */
  .stream-badge {
    display: inline-block;
    padding: 3px 10px; border-radius: 20px;
    font-size: 0.72rem; font-weight: 600;
    background: var(--gold-dim);
    color: var(--gold);
    border: 1px solid rgba(201,146,42,0.2);
    white-space: nowrap;
  }

  .adm-search-row { display: flex; gap: 10px; align-items: center; }
  .adm-search-row .adm-input { margin: 0; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1100px) {
    .adm-stats { grid-template-columns: repeat(3, 1fr); }
  }
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
`;function mv(){const s=Qs(),[d,f]=j.useState(""),[r,m]=j.useState(""),[p,g]=j.useState(""),[w,S]=j.useState([]),[y,M]=j.useState([]),[T,q]=j.useState([]),[L,Y]=j.useState([]),[B,U]=j.useState([]),[Q,k]=j.useState(""),[K,oe]=j.useState(""),[ye,ze]=j.useState(""),[I,we]=j.useState(""),[Ye,Pe]=j.useState(!1),[Xe,Ve]=j.useState(null),[Yt,Ut]=j.useState(""),[rt,D]=j.useState(""),G=window.location.hostname==="localhost"?"http://localhost:5000":"https://svv-school-backend.onrender.com";j.useEffect(()=>{const H=()=>{D(new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}))};H();const ne=setInterval(H,1e3);return()=>clearInterval(ne)},[]),j.useEffect(()=>{localStorage.getItem("adminAuth")||s("/admin"),S(JSON.parse(localStorage.getItem("notices"))||[]),M(JSON.parse(localStorage.getItem("events"))||[]),q(JSON.parse(localStorage.getItem("academics"))||[]),U(JSON.parse(localStorage.getItem("gallery"))||[]);const H=JSON.parse(localStorage.getItem("principalInfo")||"{}");H.name&&k(H.name),H.qual&&oe(H.qual),H.exp&&ze(H.exp),H.msg&&we(H.msg)},[s]),j.useEffect(()=>{fetch(`${G}/api/admissions`).then(H=>H.json()).then(H=>Y(H)).catch(H=>console.log(H))},[]);const W=(H,ne,tt,ot,Xt)=>{if(!H.trim())return;const St=[...ne,H.trim()];tt(St),localStorage.setItem(ot,JSON.stringify(St)),Xt("")},fe=(H,ne,tt,ot)=>{const Xt=ne.filter((St,Zl)=>Zl!==H);tt(Xt),localStorage.setItem(ot,JSON.stringify(Xt))},ve=()=>W(d,w,S,"notices",f),b=()=>W(r,y,M,"events",m),_=()=>W(p,T,q,"academics",g),X=H=>fe(H,w,S,"notices"),Z=H=>fe(H,y,M,"events"),P=H=>fe(H,T,q,"academics"),le=()=>{if(!Xe)return;const H=new FileReader;H.onloadend=()=>{const ne=[...B,H.result];U(ne),localStorage.setItem("gallery",JSON.stringify(ne)),Ve(null)},H.readAsDataURL(Xe)},de=H=>{const ne=B.filter((tt,ot)=>ot!==H);U(ne),localStorage.setItem("gallery",JSON.stringify(ne))},Ze=()=>{const H={name:Q,qual:K,exp:ye,msg:I};localStorage.setItem("principalInfo",JSON.stringify(H)),Pe(!0),setTimeout(()=>Pe(!1),3e3)},Oe=()=>{localStorage.removeItem("adminAuth"),s("/admin")},Ga=()=>{const ne=`Name,Email,Phone,Stream,Message
`+L.map(St=>`"${St.name}","${St.email}","${St.phone}","${St.stream||""}","${St.message||""}"`).join(`
`),tt=new Blob([ne],{type:"text/csv"}),ot=window.URL.createObjectURL(tt),Xt=document.createElement("a");Xt.href=ot,Xt.download="admissions.csv",Xt.click()},ha=L.filter(H=>H.name?.toLowerCase().includes(Yt.toLowerCase())),Gt=({icon:H,title:ne,count:tt,children:ot})=>u.jsxs("div",{className:"adm-panel",children:[u.jsxs("div",{className:"adm-panel-head",children:[u.jsx("span",{children:H}),u.jsx("h3",{children:ne}),tt!==void 0&&u.jsx("span",{className:"adm-panel-badge",children:tt})]}),u.jsx("div",{className:"adm-panel-body",children:ot})]});return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:dv}),u.jsxs("div",{className:"adm-wrap",children:[u.jsxs("div",{className:"adm-topbar",children:[u.jsxs("div",{className:"adm-topbar-left",children:[u.jsx("div",{className:"adm-logo-box",children:"SVK"}),u.jsxs("div",{children:[u.jsx("div",{className:"adm-topbar-title",children:"Admin Dashboard"}),u.jsx("div",{className:"adm-topbar-sub",children:"Sarvodaya Vidyalaya"})]})]}),u.jsxs("div",{className:"adm-topbar-right",children:[u.jsxs("span",{className:"adm-time",children:["🕐 ",rt]}),u.jsx("button",{className:"adm-logout-btn",onClick:Oe,children:"⬠ Logout"})]})]}),u.jsxs("div",{className:"adm-body",children:[u.jsxs("div",{className:"adm-page-heading",children:[u.jsx("div",{className:"adm-page-label",children:"Control Panel"}),u.jsx("div",{className:"adm-page-title",children:"Manage School Content"})]}),u.jsx("div",{className:"adm-stats",children:[{icon:"📢",label:"Notices",num:w.length},{icon:"📅",label:"Events",num:y.length},{icon:"📚",label:"Academics",num:T.length},{icon:"🖼️",label:"Gallery",num:B.length},{icon:"🎓",label:"Admissions",num:L.length}].map(H=>u.jsxs("div",{className:"adm-stat",children:[u.jsx("div",{className:"adm-stat-icon",children:H.icon}),u.jsxs("div",{children:[u.jsx("div",{className:"adm-stat-num",children:H.num}),u.jsx("div",{className:"adm-stat-label",children:H.label})]})]},H.label))}),u.jsxs("div",{className:"adm-grid-3",children:[u.jsxs(Gt,{icon:"📢",title:"Notices",count:w.length,children:[u.jsxs("div",{className:"adm-input-row",children:[u.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter notice...",value:d,onChange:H=>f(H.target.value),onKeyDown:H=>H.key==="Enter"&&ve()}),u.jsx("button",{className:"adm-btn-add",onClick:ve,children:"+ Add"})]}),u.jsxs("ul",{className:"adm-list",children:[w.length===0&&u.jsx("div",{className:"adm-list-empty",children:"No notices yet"}),w.map((H,ne)=>u.jsxs("li",{className:"adm-list-item",children:[u.jsx("span",{children:H}),u.jsx("button",{className:"adm-btn-del",onClick:()=>X(ne),children:"✕"})]},ne))]})]}),u.jsxs(Gt,{icon:"📅",title:"Events",count:y.length,children:[u.jsxs("div",{className:"adm-input-row",children:[u.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter event...",value:r,onChange:H=>m(H.target.value),onKeyDown:H=>H.key==="Enter"&&b()}),u.jsx("button",{className:"adm-btn-add",onClick:b,children:"+ Add"})]}),u.jsxs("ul",{className:"adm-list",children:[y.length===0&&u.jsx("div",{className:"adm-list-empty",children:"No events yet"}),y.map((H,ne)=>u.jsxs("li",{className:"adm-list-item",children:[u.jsx("span",{children:H}),u.jsx("button",{className:"adm-btn-del",onClick:()=>Z(ne),children:"✕"})]},ne))]})]}),u.jsxs(Gt,{icon:"📚",title:"Academics",count:T.length,children:[u.jsxs("div",{className:"adm-input-row",children:[u.jsx("input",{className:"adm-input",type:"text",placeholder:"Enter academic info...",value:p,onChange:H=>g(H.target.value),onKeyDown:H=>H.key==="Enter"&&_()}),u.jsx("button",{className:"adm-btn-add",onClick:_,children:"+ Add"})]}),u.jsxs("ul",{className:"adm-list",children:[T.length===0&&u.jsx("div",{className:"adm-list-empty",children:"No items yet"}),T.map((H,ne)=>u.jsxs("li",{className:"adm-list-item",children:[u.jsx("span",{children:H}),u.jsx("button",{className:"adm-btn-del",onClick:()=>P(ne),children:"✕"})]},ne))]})]})]}),u.jsxs("div",{className:"adm-grid-2",children:[u.jsxs(Gt,{icon:"🖼️",title:"Gallery",count:B.length,children:[u.jsxs("label",{className:"adm-file-zone",children:[u.jsx("input",{type:"file",accept:"image/*",onChange:H=>Ve(H.target.files[0])}),u.jsx("span",{className:"adm-file-zone-label",children:Xe?u.jsxs("span",{className:"adm-file-selected",children:["✅ ",Xe.name]}):u.jsxs(u.Fragment,{children:["📁 ",u.jsx("strong",{children:"Click to choose"})," an image to upload"]})})]}),u.jsx("button",{className:"adm-btn-gold",onClick:le,disabled:!Xe,style:{opacity:Xe?1:.5,cursor:Xe?"pointer":"not-allowed"},children:"⬆ Upload Image"}),u.jsxs("div",{className:"adm-gallery-grid",children:[B.length===0&&u.jsx("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:"20px",color:"var(--muted)",fontSize:"0.83rem"},children:"No images uploaded yet"}),B.map((H,ne)=>u.jsxs("div",{className:"adm-gallery-item",children:[u.jsx("img",{src:H,alt:`gallery-${ne}`}),u.jsx("button",{className:"adm-gallery-del",onClick:()=>de(ne),children:"✕"})]},ne))]})]}),u.jsxs(Gt,{icon:"👩‍💼",title:"Principal Info",children:[u.jsxs("div",{className:"adm-field-group",children:[u.jsx("label",{className:"adm-field-label",children:"Full Name"}),u.jsx("input",{className:"adm-input",type:"text",placeholder:"Dr. Sunita Sharma",value:Q,onChange:H=>k(H.target.value)})]}),u.jsxs("div",{className:"adm-field-group",children:[u.jsx("label",{className:"adm-field-label",children:"Qualification"}),u.jsx("input",{className:"adm-input",type:"text",placeholder:"M.Sc., B.Ed., Ph.D.",value:K,onChange:H=>oe(H.target.value)})]}),u.jsxs("div",{className:"adm-field-group",children:[u.jsx("label",{className:"adm-field-label",children:"Experience"}),u.jsx("input",{className:"adm-input",type:"text",placeholder:"25+ Years",value:ye,onChange:H=>ze(H.target.value)})]}),u.jsxs("div",{className:"adm-field-group",children:[u.jsx("label",{className:"adm-field-label",children:"Message (short)"}),u.jsx("textarea",{className:"adm-input",placeholder:"Write a short message from the principal...",value:I,onChange:H=>we(H.target.value)})]}),u.jsxs("div",{className:"adm-save-row",children:[Ye&&u.jsx("span",{className:"adm-save-badge",children:"✅ Saved successfully"}),u.jsx("button",{className:"adm-btn-gold",onClick:Ze,style:{marginLeft:"10px"},children:"💾 Save Changes"})]})]})]}),u.jsxs(Gt,{icon:"🎓",title:"Admission Requests",count:ha.length,children:[u.jsxs("div",{className:"adm-search-row",children:[u.jsx("input",{className:"adm-input",type:"text",placeholder:"🔍  Search student by name...",value:Yt,onChange:H=>Ut(H.target.value)}),u.jsx("button",{className:"adm-btn-gold",onClick:Ga,children:"⬇ Export CSV"})]}),u.jsx("div",{className:"adm-table-wrap",children:u.jsxs("table",{className:"adm-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"#"}),u.jsx("th",{children:"Name"}),u.jsx("th",{children:"Email"}),u.jsx("th",{children:"Phone"}),u.jsx("th",{children:"Stream"}),u.jsx("th",{children:"Message"})]})}),u.jsx("tbody",{children:ha.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"28px",color:"var(--muted)"},children:"No admission requests found"})}):ha.map((H,ne)=>u.jsxs("tr",{children:[u.jsx("td",{className:"muted",children:ne+1}),u.jsx("td",{children:u.jsx("strong",{children:H.name})}),u.jsx("td",{className:"muted",children:H.email}),u.jsx("td",{className:"muted",children:H.phone}),u.jsx("td",{children:H.stream?u.jsx("span",{className:"stream-badge",children:H.stream}):u.jsx("span",{style:{color:"var(--muted)"},children:"—"})}),u.jsx("td",{children:H.message||u.jsx("span",{style:{color:"var(--muted)"},children:"—"})})]},ne))})]})})]})]})]})]})}function hv(){return u.jsxs(R0,{children:[u.jsx(X0,{}),u.jsx(J0,{}),u.jsxs(s0,{children:[u.jsx(Rt,{path:"/",element:u.jsx($0,{})}),u.jsx(Rt,{path:"/about",element:u.jsx(W0,{})}),u.jsx(Rt,{path:"/academics",element:u.jsx(F0,{})}),u.jsx(Rt,{path:"/gallery",element:u.jsx(I0,{})}),u.jsx(Rt,{path:"/contact",element:u.jsx(ev,{})}),u.jsx(Rt,{path:"/teachers",element:u.jsx(av,{})}),u.jsx(Rt,{path:"/management",element:u.jsx(nv,{})}),u.jsx(Rt,{path:"/success",element:u.jsx(uv,{})}),u.jsx(Rt,{path:"/principal",element:u.jsx(ov,{})}),u.jsx(Rt,{path:"/admin",element:u.jsx(fv,{})}),u.jsx(Rt,{path:"/admin-dashboard",element:u.jsx(mv,{})})]}),u.jsx(V0,{}),u.jsx(Q0,{})]})}fg.createRoot(document.getElementById("root")).render(u.jsx(Xs.StrictMode,{children:u.jsx(hv,{})}));
