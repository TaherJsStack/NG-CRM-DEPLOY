import{a as v,b as u,c as n,d as x,e as T,f as U,g as j,h as g,i as y,j as D,k as b,l as w}from"./chunk-YMYLDPC3.js";import{a as f,b as k,c as m}from"./chunk-CNR7Q3KD.js";import{r as e,s as d}from"./chunk-VEPIDZAA.js";import{b as I}from"./chunk-BYV455CZ.js";import{F as l,aa as p,ia as F,n as a,na as $,s as A}from"./chunk-MRUXGLTR.js";import{a as r,b as o}from"./chunk-MON7YFGF.js";var R=class{constructor(t,M="/assets/i18n/",h=".json"){this.http=t,this.prefix=M,this.suffix=h}getTranslation(t){return this.http.get(`${this.prefix}${t}${this.suffix}`)}};var O=(()=>{let t=class t{constructor(h,S){this.actions$=h,this.authService=S,this.login$=f(()=>this.actions$.pipe(m(v),p(({username:s,password:q})=>this.authService.login(s,q).pipe(A(c=>(this.authService.currentUser=c,this.authService.appToken=c.token,u({user:c}))),l(c=>a(n({error:c}))))))),this.getUserData$=f(()=>this.actions$.pipe(m(j),p(()=>this.authService.getuserData().pipe(A(s=>g({fullUserData:s})),l(s=>a(n({error:s}))))))),this.refreshToken$=f(()=>this.actions$.pipe(m(x),p(()=>this.authService.refreshToken().pipe(A(s=>u({user:s})),l(s=>a(n({error:s})))))))}};t.\u0275fac=function(S){return new(S||t)($(k),$(I))},t.\u0275prov=F({token:t,factory:t.\u0275fac});let i=t;return i})();var E={isAuthenticated:!1,fullUserData:{},user:{},error:null},V=d(E,e(u,(i,{user:t})=>o(r({},i),{isAuthenticated:!0,user:t,error:null})),e(n,(i,{error:t})=>o(r({},i),{isAuthenticated:!1,user:{},error:t})),e(T,(i,{user:t})=>o(r({},i),{isAuthenticated:!0,user:t,error:null})),e(U,(i,{error:t})=>o(r({},i),{isAuthenticated:!1,user:{},error:t})),e(y,(i,{user:t})=>o(r({},i),{isAuthenticated:!0,user:t})),e(D,()=>E),e(b,(i,{error:t})=>o(r({},i),{error:t})),e(w,(i,{user:t})=>o(r({},i),{user:t})),e(g,(i,{fullUserData:t})=>o(r({},i),{fullUserData:t})));export{R as a,O as b,V as c};
