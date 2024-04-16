import{a as $}from"./chunk-FZNWOLMJ.js";import{c as z,d as V}from"./chunk-XGOQUTNT.js";import{l as B,n as N,o as F,r as T}from"./chunk-Y57JWQB6.js";import{b as A,d as x,g as L,h as q,k as D,m as j,o as G,p as U,r as Y,t as Z}from"./chunk-CP2DFGVH.js";import{k as E,m as R,u as k}from"./chunk-F3GOOGZS.js";import{Ac as s,Bb as u,Bc as d,Db as p,Nb as r,Ob as i,Pb as g,Qb as b,Rb as v,Yb as h,_b as M,bc as w,ib as n,ic as a,jb as P,jc as C,kc as m,qc as I,tc as O,ua as y,wb as S}from"./chunk-MRUXGLTR.js";import"./chunk-MON7YFGF.js";var H=(t,l)=>({"is-invalid":t,"is-valid":l});function Q(t,l){t&1&&(r(0,"div",21),a(1),s(2,"translate"),g(3,"br"),a(4),s(5,"translate"),g(6,"br"),a(7),s(8,"translate"),i()),t&2&&(n(),m(" ",d(2,3,"PasswordMustContain"),", "),n(3),m(" ",d(5,5,"oneLowerLetter"),", "),n(3),m(" ",d(8,7,"OneNumberAndOneSpecialCharacter"),". "))}function W(t,l){t&1&&(r(0,"div",23),a(1),s(2,"translate"),i()),t&2&&(n(),m(" ",d(2,1,"NewPasswordRequired")," "))}function X(t,l){t&1&&(r(0,"div",23),a(1),s(2,"translate"),i()),t&2&&(n(),m(" ",d(2,1,"PasswordMinLength")," "))}function ee(t,l){if(t&1&&(b(0),u(1,W,3,3,"div",22)(2,X,3,3,"div",22),v()),t&2){let _=M();n(),p("ngIf",_.form.controls.password.errors.required),n(),p("ngIf",_.form.controls.password.errors.minlength)}}function te(t,l){t&1&&(r(0,"div",23),a(1),s(2,"translate"),i()),t&2&&(n(),m(" ",d(2,1,"ConfirmPasswordRequired")," "))}function ne(t,l){t&1&&(r(0,"div",23),a(1),s(2,"translate"),i()),t&2&&(n(),m(" ",d(2,1,"PasswordNotMatch")," "))}function oe(t,l){if(t&1&&(b(0),u(1,te,3,3,"div",22)(2,ne,3,3,"div",22),v()),t&2){let _=M();n(),p("ngIf",_.form.controls.confirmPassword.errors.required),n(),p("ngIf",_.form.controls.confirmPassword.errors.mismatch)}}var ue=(()=>{let l=class l extends ${constructor(c,o,e){super(),this.formBuilder=c,this.router=o,this.activatedRoute=e,this.isSubmitted=!1,this.showPassword=!1,this.showConfirmPassword=!1}ngOnInit(){this.getActivatedRouteParams(),this.initForm()}getActivatedRouteParams(){this.activatedRoute.params.subscribe(c=>{let o=c.code;console.log("activatedRoute.queryParamMap resetCode ---> ",o),o&&this.checkCodevalidity()})}initForm(){this.form=this.formBuilder.group({password:["",[x.required,x.minLength(8),this.validatePasswordStrength]],confirmPassword:new D("",[x.required])},{validators:this.passwordMatchValidator})}validatePasswordStrength(c){let o=c.value;if(!o)return null;let e=/[A-Z]/.test(o),f=/[a-z]/.test(o),J=/[0-9]/.test(o),K=/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(o);return e&&f&&J&&K?null:{invalidPassword:!0}}passwordMatchValidator(c){let o=c.get("password"),e=c.get("confirmPassword");o&&e&&(o.value===e.value?e.setErrors(null):e.setErrors({mismatch:!0}))}checkCodevalidity(){}onSubmit(){if(this.form.invalid){this.isSubmitted=!0,console.log(this.form),this.showFormInputsValues(this.form);return}this.router.navigateByUrl("/modules")}showFormInputsValues(c){if(c.invalid){for(let o of Object.keys(c.controls))c.get(o).status==="INVALID"&&console.error(o,c.get(o).status);return}}};l.\u0275fac=function(o){return new(o||l)(P(Y),P(N),P(B))},l.\u0275cmp=y({type:l,selectors:[["app-reset-password"]],standalone:!0,features:[S,I],decls:42,vars:40,consts:[[1,"rounded-2"],[1,"header","mb-5"],[1,"text-center","d-block","mb-4","text-uppercase"],[1,"title","text-center"],[1,"text-uppercase","fw-bold"],[1,"sub-title","text-center"],[1,"text-lowercase","text-secondary"],[1,"text-uppercase"],["class","form-text text-danger",4,"ngIf"],[1,"needs-validation",3,"ngSubmit","formGroup"],[1,"mb-4","position-relative"],["for","",1,"form-label","mb-1"],["formControlName","password","id","","aria-describedby","Validators",1,"form-control",3,"type","placeholder","ngClass"],["type","button","aria-label","Toggle password visibility",1,"btn","position-absolute","password-eye",3,"click"],["aria-hidden","true",1,"fa",3,"ngClass"],[4,"ngIf"],["for","InputPassword1",1,"form-label","mb-1"],["formControlName","confirmPassword","id","InputPassword1",1,"form-control",3,"type","placeholder","ngClass"],["type","submit",1,"btn","btn-primary","w-100"],[1,"footer","text-center"],["routerLink","/authentication/forgot-password"],[1,"form-text","text-danger"],["class","form-text position-absolute",4,"ngIf"],[1,"form-text","position-absolute"]],template:function(o,e){if(o&1&&(r(0,"section",0)(1,"div",1)(2,"b",2),a(3,"System"),i(),r(4,"div",3)(5,"h4",4),a(6),s(7,"translate"),i()(),r(8,"div",5)(9,"p",6),a(10),s(11,"translate"),r(12,"strong",7),a(13,"system"),i(),a(14,"."),i()()(),u(15,Q,9,9,"div",8),r(16,"form",9),h("ngSubmit",function(){return e.onSubmit()}),r(17,"div",10)(18,"label",11),a(19),s(20,"translate"),i(),g(21,"input",12),s(22,"translate"),r(23,"button",13),h("click",function(){return e.showPassword=!e.showPassword}),g(24,"i",14),i(),u(25,ee,3,2,"ng-container",15),i(),r(26,"div",10)(27,"label",16),a(28),s(29,"translate"),i(),g(30,"input",17),s(31,"translate"),r(32,"button",13),h("click",function(){return e.showConfirmPassword=!e.showConfirmPassword}),g(33,"i",14),i(),u(34,oe,3,2,"ng-container",15),i(),r(35,"button",18),a(36),s(37,"translate"),i()(),r(38,"div",19)(39,"a",20),a(40),s(41,"translate"),i()()()),o&2){let f;n(6),m(" ",d(7,18,"ResetPassword")," !"),n(4),m(" ",d(11,20,"PleaseEnterYourNewPasswordFor")," "),n(5),p("ngIf",e.isSubmitted&&((f=e.form.get("password"))==null?null:f.hasError("invalidPassword"))),n(),p("formGroup",e.form),n(3),C(d(20,22,"NewPassword")),n(2),w("type",e.showPassword?"text":"password"),p("placeholder",d(22,24,"EnterNewPassword"))("ngClass",O(34,H,e.isSubmitted&&e.form.controls.password.errors,e.isSubmitted&&!e.form.controls.password.errors)),n(3),w("ngClass",e.showPassword?"fa-eye-slash":"fa-eye"),n(),p("ngIf",e.isSubmitted&&e.form.controls.password.errors),n(3),C(d(29,26,"ConfirmPassword")),n(2),w("type",e.showConfirmPassword?"text":"password"),p("placeholder",d(31,28,"EnterConfirmPassword"))("ngClass",O(37,H,e.isSubmitted&&e.form.controls.confirmPassword.errors,e.isSubmitted&&!e.form.controls.confirmPassword.errors)),n(3),w("ngClass",e.showPassword?"fa-eye-slash":"fa-eye"),n(),p("ngIf",e.isSubmitted&&e.form.controls.confirmPassword.errors),n(2),C(d(37,30,"Confirm")),n(4),C(d(41,32,"Signin"))}},dependencies:[k,E,R,Z,j,A,L,q,G,U,T,F,V,z],styles:['[data-theme=dark][_ngcontent-%COMP%]{--bg-nav-color: #2d3e4e;--bg-aside-color: #2d3e4e;--bg-body-color: rgba(47, 61, 72, .952);--bg-primary-color: #2d3e4e;--bg-secondary-color: #586d7e;--bg-success-color: #8097a7;--bg-info-color: #bcd3e1;--bg-white-color: #ffffff;--text-primary-color: #ffffff;--text-secondary-color: #586d7e;--text-success-color: #8097a7}[data-theme=light][_ngcontent-%COMP%]{--bg-nav-color: #4f80a7;--bg-aside-color: #324f67;--bg-body-color: #dcdcdc;--bg-primary-color: #2d3e4e;--bg-secondary-color: #586d7e;--bg-success-color: #586d7e;--bg-info-color: #2d3e4e;--bg-white-color: #fff;--text-primary-color: #000000;--text-secondary-color: #8097a7;--text-success-color: #586d7e}[_ngcontent-%COMP%]:root{--font-size-tertiary: 8px;--font-size-small: 9px;--font-size-medium: 10px;--font-size-extra-medium: 11px;--font-size-large: 12px;--font-size-extra-large: 13px}[data-theme=light][_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#2d3e4e;color:#fff}[data-theme=light][_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [data-theme=light][_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme=light][_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [data-theme=light][_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff!important}@media only screen and (max-width: 1552px){[_ngcontent-%COMP%]:root{--font-size-extra-medium: 10px;--font-size-extra-medium: 9px}}@media (max-width: 1199.98px){.card[_ngcontent-%COMP%]{margin-bottom:15px;--bs-card-cap-padding-y: 0;--bs-card-cap-paddi: 0 }}section[_ngcontent-%COMP%]{color:#fff;background-color:#052d49;padding:30px;border:1px solid #4f9bc3;display:flex;flex-direction:column;gap:25px;width:400px}section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#a55656}section[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#a55656}section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]   .password-eye[_ngcontent-%COMP%]{top:40%;right:20px;color:#00a6ff}section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]   .password-eye[_ngcontent-%COMP%]:hover{color:#00a6ff}section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]   .password-eye[_ngcontent-%COMP%]:active{border-color:transparent}section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%]{color:var(--bs-form-invalid-border-color);bottom:-20px}section[_ngcontent-%COMP%]   .stripe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#a55656;width:fit-content;margin:auto;padding:5px 20px;border-radius:18px;z-index:9999}section[_ngcontent-%COMP%]   .stripe[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:50% 0 0;width:100%;height:1px;background-color:#00a6ff;z-index:0}section[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#00a6ff;width:30px;height:30px}@media (max-width: 575.98px){section[_ngcontent-%COMP%]{width:325px}}@media (min-width: 576px) and (max-width: 767.98px){.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:.5rem 1rem}}@media (min-width: 768px) and (max-width: 991.98px){.container[_ngcontent-%COMP%]{max-width:960px}}@media (min-width: 992px) and (max-width: 1199.98px){.jumbotron[_ngcontent-%COMP%]{padding:4rem 2rem}}@media (min-width: 1200px){.container[_ngcontent-%COMP%]{max-width:1140px}}']});let t=l;return t})();export{ue as ResetPasswordComponent};
