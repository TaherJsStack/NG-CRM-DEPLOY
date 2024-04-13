import{Ha as te,M as W,Oc as x,U as J,W as X,c as g,da as ee,f as Z,g as F,ha as R,i as H,ia as _,ka as c,l as Y,ma as a,na as m,oa as O,qb as ne,s as Q,ua as I}from"./chunk-CSPISQ2Y.js";import{a as y,b as S}from"./chunk-MON7YFGF.js";var D={};function wt(e,n){if(D[e]=(D[e]||0)+1,typeof n=="function")return w(e,(...r)=>S(y({},n(...r)),{type:e}));switch(n?n._as:"empty"){case"empty":return w(e,()=>({type:e}));case"props":return w(e,r=>S(y({},r),{type:e}));default:throw new Error("Unexpected config.")}}function Mt(){return{_as:"props",_p:void 0}}function w(e,n){return Object.defineProperty(n,"type",{value:e,writable:!1})}var me="@ngrx/store/init",h=(()=>{class e extends F{constructor(){super({type:me})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})(),Ce=[h],Ee=new c("@ngrx/store Internal Root Guard"),re=new c("@ngrx/store Internal Initial State"),P=new c("@ngrx/store Initial State"),ve=new c("@ngrx/store Reducer Factory"),oe=new c("@ngrx/store Internal Reducer Factory Provider"),ge=new c("@ngrx/store Initial Reducers"),M=new c("@ngrx/store Internal Initial Reducers"),ie=new c("@ngrx/store Store Features"),ce=new c("@ngrx/store Internal Store Reducers"),C=new c("@ngrx/store Internal Feature Reducers"),se=new c("@ngrx/store Internal Feature Configs"),Fe=new c("@ngrx/store Internal Store Features"),ue=new c("@ngrx/store Internal Feature Reducers Token"),_e=new c("@ngrx/store Feature Reducers"),ae=new c("@ngrx/store User Provided Meta Reducers"),b=new c("@ngrx/store Meta Reducers"),de=new c("@ngrx/store Internal Resolved Meta Reducers"),le=new c("@ngrx/store User Runtime Checks Config"),fe=new c("@ngrx/store Internal User Runtime Checks Config"),E=new c("@ngrx/store Internal Runtime Checks"),z=new c("@ngrx/store Check if Action types are unique"),Ct=new c("@ngrx/store Root Store Provider"),Dt=new c("@ngrx/store Feature State Provider");function V(e,n={}){let t=Object.keys(e),r={};for(let i=0;i<t.length;i++){let s=t[i];typeof e[s]=="function"&&(r[s]=e[s])}let o=Object.keys(r);return function(s,l){s=s===void 0?n:s;let d=!1,f={};for(let u=0;u<o.length;u++){let p=o[u],Me=r[p],B=s[p],G=Me(B,l);f[p]=G,d=d||G!==B}return d?f:s}}function De(e,n){return Object.keys(e).filter(t=>t!==n).reduce((t,r)=>Object.assign(t,{[r]:e[r]}),{})}function Ie(...e){return function(n){if(e.length===0)return n;let t=e[e.length-1];return e.slice(0,-1).reduceRight((o,i)=>i(o),t(n))}}function be(e,n){return Array.isArray(n)&&n.length>0&&(e=Ie.apply(null,[...n,e])),(t,r)=>{let o=e(t);return(i,s)=>(i=i===void 0?r:i,o(i,s))}}function ke(e){let n=Array.isArray(e)&&e.length>0?Ie(...e):t=>t;return(t,r)=>(t=n(t),(o,i)=>(o=o===void 0?r:o,t(o,i)))}var v=class extends g{},j=class extends h{},Ue="@ngrx/store/update-reducers",A=(()=>{class e extends F{constructor(t,r,o,i){super(i(o,r)),this.dispatcher=t,this.initialState=r,this.reducers=o,this.reducerFactory=i}get currentReducers(){return this.reducers}addFeature(t){this.addFeatures([t])}addFeatures(t){let r=t.reduce((o,{reducers:i,reducerFactory:s,metaReducers:l,initialState:d,key:f})=>{let u=typeof i=="function"?ke(l)(i,d):be(s,l)(i,d);return o[f]=u,o},{});this.addReducers(r)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(r=>r.key))}addReducer(t,r){this.addReducers({[t]:r})}addReducers(t){this.reducers=y(y({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(r=>{this.reducers=De(this.reducers,r)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Ue,features:t})}ngOnDestroy(){this.complete()}}return e.\u0275fac=function(t){return new(t||e)(a(j),a(P),a(ge),a(ve))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})(),Ne=[A,{provide:v,useExisting:A},{provide:j,useExisting:h}],$=(()=>{class e extends Z{ngOnDestroy(){this.complete()}}return e.\u0275fac=(()=>{let n;return function(r){return(n||(n=te(e)))(r||e)}})(),e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})(),Pe=[$],T=class extends g{},pe=(()=>{class e extends F{constructor(t,r,o,i){super(i);let l=t.pipe(Y(H)).pipe(ee(r)),d={state:i},f=l.pipe(X(ze,d));this.stateSubscription=f.subscribe(({state:u,action:p})=>{this.next(u),o.next(p)})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}}return e.INIT=me,e.\u0275fac=function(t){return new(t||e)(a(h),a(v),a($),a(P))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})();function ze(e={state:void 0},[n,t]){let{state:r}=e;return{state:t(r,n),action:n}}var Ve=[pe,{provide:T,useExisting:pe}],K=(()=>{class e extends g{constructor(t,r,o){super(),this.actionsObserver=r,this.reducerManager=o,this.source=t}select(t,...r){return Ke.call(null,t,...r)(this)}lift(t){let r=new e(this,this.actionsObserver,this.reducerManager);return r.operator=t,r}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,r){this.reducerManager.addReducer(t,r)}removeReducer(t){this.reducerManager.removeReducer(t)}}return e.\u0275fac=function(t){return new(t||e)(a(T),a(h),a(A))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})(),$e=[K];function Ke(e,n,...t){return function(o){let i;if(typeof e=="string"){let s=[n,...t].filter(Boolean);i=o.pipe(J(e,...s))}else if(typeof e=="function")i=o.pipe(Q(s=>e(s,n)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return i.pipe(W())}}var L="https://ngrx.io/guide/store/configuration/runtime-checks";function ye(e){return e===void 0}function Re(e){return e===null}function je(e){return Array.isArray(e)}function Le(e){return typeof e=="string"}function qe(e){return typeof e=="boolean"}function Be(e){return typeof e=="number"}function Ae(e){return typeof e=="object"&&e!==null}function Ge(e){return Ae(e)&&!je(e)}function Ze(e){if(!Ge(e))return!1;let n=Object.getPrototypeOf(e);return n===Object.prototype||n===null}function k(e){return typeof e=="function"}function He(e){return k(e)&&e.hasOwnProperty("\u0275cmp")}function Ye(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var Qe=!1;function We(){return Qe}function he(e,n){return e===n}function Je(e,n,t){for(let r=0;r<e.length;r++)if(!t(e[r],n[r]))return!0;return!1}function Te(e,n=he,t=he){let r=null,o=null,i;function s(){r=null,o=null}function l(u=void 0){i={result:u}}function d(){i=void 0}function f(){if(i!==void 0)return i.result;if(!r)return o=e.apply(null,arguments),r=arguments,o;if(!Je(arguments,r,n))return o;let u=e.apply(null,arguments);return r=arguments,t(o,u)?o:(o=u,u)}return{memoized:f,reset:s,setResult:l,clearResult:d}}function Xe(...e){return tt(Te)(...e)}function et(e,n,t,r){if(t===void 0){let i=n.map(s=>s(e));return r.memoized.apply(null,i)}let o=n.map(i=>i(e,t));return r.memoized.apply(null,[...o,t])}function tt(e,n={stateFn:et}){return function(...t){let r=t;if(Array.isArray(r[0])){let[u,...p]=r;r=[...u,...p]}else r.length===1&&nt(r[0])&&(r=rt(r[0]));let o=r.slice(0,r.length-1),i=r[r.length-1],s=o.filter(u=>u.release&&typeof u.release=="function"),l=e(function(...u){return i.apply(null,u)}),d=Te(function(u,p){return n.stateFn.apply(null,[u,o,p,l])});function f(){d.reset(),l.reset(),s.forEach(u=>u.release())}return Object.assign(d.memoized,{release:f,projector:l.memoized,setResult:d.setResult,clearResult:d.clearResult})}}function kt(e){return Xe(n=>{let t=n[e];return!We()&&x()&&!(e in n)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},n=>n)}function nt(e){return!!e&&typeof e=="object"&&Object.values(e).every(n=>typeof n=="function")}function rt(e){let n=Object.values(e),t=Object.keys(e),r=(...o)=>t.reduce((i,s,l)=>S(y({},i),{[s]:o[l]}),{});return[...n,r]}function ot(e){return e instanceof c?m(e):e}function it(e,n){return n.map((t,r)=>{if(e[r]instanceof c){let o=m(e[r]);return{key:t.key,reducerFactory:o.reducerFactory?o.reducerFactory:V,metaReducers:o.metaReducers?o.metaReducers:[],initialState:o.initialState}}return t})}function ct(e){return e.map(n=>n instanceof c?m(n):n)}function Oe(e){return typeof e=="function"?e():e}function st(e,n){return e.concat(n)}function ut(){if(m(K,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function at(e,n){return function(t,r){let o=n.action(r)?U(r):r,i=e(t,o);return n.state()?U(i):i}}function U(e){Object.freeze(e);let n=k(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith("\u0275")&&Ye(e,t)&&(!n||t!=="caller"&&t!=="callee"&&t!=="arguments")){let r=e[t];(Ae(r)||k(r))&&!Object.isFrozen(r)&&U(r)}}),e}function dt(e,n){return function(t,r){if(n.action(r)){let i=N(r);Se(i,"action")}let o=e(t,r);if(n.state()){let i=N(o);Se(i,"state")}return o}}function N(e,n=[]){return(ye(e)||Re(e))&&n.length===0?{path:["root"],value:e}:Object.keys(e).reduce((r,o)=>{if(r)return r;let i=e[o];return He(i)?r:ye(i)||Re(i)||Be(i)||qe(i)||Le(i)||je(i)?!1:Ze(i)?N(i,[...n,o]):{path:[...n,o],value:i}},!1)}function Se(e,n){if(e===!1)return;let t=e.path.join("."),r=new Error(`Detected unserializable ${n} at "${t}". ${L}#strict${n}serializability`);throw r.value=e.value,r.unserializablePath=t,r}function lt(e,n){return function(t,r){if(n.action(r)&&!ne.isInAngularZone())throw new Error(`Action '${r.type}' running outside NgZone. ${L}#strictactionwithinngzone`);return e(t,r)}}function ft(e){return x()?y({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function pt({strictActionSerializability:e,strictStateSerializability:n}){return t=>e||n?dt(t,{action:r=>e&&!q(r),state:()=>n}):t}function yt({strictActionImmutability:e,strictStateImmutability:n}){return t=>e||n?at(t,{action:r=>e&&!q(r),state:()=>n}):t}function q(e){return e.type.startsWith("@ngrx")}function Rt({strictActionWithinNgZone:e}){return n=>e?lt(n,{action:t=>e&&!q(t)}):n}function ht(e){return[{provide:fe,useValue:e},{provide:le,useFactory:St,deps:[fe]},{provide:E,deps:[le],useFactory:ft},{provide:b,multi:!0,deps:[E],useFactory:yt},{provide:b,multi:!0,deps:[E],useFactory:pt},{provide:b,multi:!0,deps:[E],useFactory:Rt}]}function xe(){return[{provide:z,multi:!0,deps:[E],useFactory:mt}]}function St(e){return e}function mt(e){if(!e.strictActionTypeUniqueness)return;let n=Object.entries(D).filter(([,t])=>t>1).map(([t])=>t);if(n.length)throw new Error(`Action types are registered more than once, ${n.map(t=>`"${t}"`).join(", ")}. ${L}#strictactiontypeuniqueness`)}function Et(e={},n={}){return[{provide:Ee,useFactory:ut},{provide:re,useValue:n.initialState},{provide:P,useFactory:Oe,deps:[re]},{provide:M,useValue:e},{provide:ce,useExisting:e instanceof c?e:M},{provide:ge,deps:[M,[new O(ce)]],useFactory:ot},{provide:ae,useValue:n.metaReducers?n.metaReducers:[]},{provide:de,deps:[b,ae],useFactory:st},{provide:oe,useValue:n.reducerFactory?n.reducerFactory:V},{provide:ve,deps:[oe,de],useFactory:be},Ce,Ne,Pe,Ve,$e,ht(n.runtimeChecks),xe()]}function vt(e,n,t={}){return[{provide:se,multi:!0,useValue:e instanceof Object?{}:t},{provide:ie,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:!(t instanceof c)&&t.reducerFactory?t.reducerFactory:V,metaReducers:!(t instanceof c)&&t.metaReducers?t.metaReducers:[],initialState:!(t instanceof c)&&t.initialState?t.initialState:void 0}},{provide:Fe,deps:[se,ie],useFactory:it},{provide:C,multi:!0,useValue:e instanceof Object?e.reducer:n},{provide:ue,multi:!0,useExisting:n instanceof c?n:C},{provide:_e,multi:!0,deps:[C,[new O(ue)]],useFactory:ct},xe()]}var we=(()=>{class e{constructor(t,r,o,i,s,l){}}return e.\u0275fac=function(t){return new(t||e)(a(h),a(v),a($),a(K),a(Ee,8),a(z,8))},e.\u0275mod=I({type:e}),e.\u0275inj=_({}),e})(),gt=(()=>{class e{constructor(t,r,o,i,s){this.features=t,this.featureReducers=r,this.reducerManager=o;let l=t.map((d,f)=>{let p=r.shift()[f];return S(y({},d),{reducers:p,initialState:Oe(d.initialState)})});o.addFeatures(l)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}}return e.\u0275fac=function(t){return new(t||e)(a(Fe),a(_e),a(A),a(we),a(z,8))},e.\u0275mod=I({type:e}),e.\u0275inj=_({}),e})(),Ut=(()=>{class e{static forRoot(t,r){return{ngModule:we,providers:[...Et(t,r)]}}static forFeature(t,r,o={}){return{ngModule:gt,providers:[...vt(t,r,o)]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=I({type:e}),e.\u0275inj=_({}),e})();function Nt(...e){let n=e.pop(),t=e.map(r=>r.type);return{reducer:n,types:t}}function Pt(e,...n){let t=new Map;for(let r of n)for(let o of r.types){let i=t.get(o);if(i){let s=(l,d)=>r.reducer(i(l,d),d);t.set(o,s)}else t.set(o,r.reducer)}return function(r=e,o){let i=t.get(o.type);return i?i(r,o):r}}export{wt as a,Mt as b,me as c,h as d,P as e,v as f,j as g,Ue as h,$ as i,T as j,K as k,Ke as l,Xe as m,kt as n,we as o,gt as p,Ut as q,Nt as r,Pt as s};
