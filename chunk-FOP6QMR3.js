import{c as I,d as M,e as w,f as N,g as F,i as B,j as T,k as R,l as z,m as A,n as j,o as x,p as L,q as P,r as X,s as V}from"./chunk-4FEOIOEA.js";import{Da as C,Fa as E,Ga as D,Ha as s,za as r}from"./chunk-XAMKMYN3.js";import{u as v}from"./chunk-Q6W5A3C3.js";import{Ca as d,Ib as y,Kc as b,ba as c,ca as p,ea as m,ga as o,qb as u,rb as f,tc as k,ub as h,uc as S,vb as g}from"./chunk-5SRT5K2O.js";import{a,b as l}from"./chunk-VB56BUGO.js";var H=!1;function Q(){H||(B.register(w,R,z,I,A,N,M,F,T,X,V,P,L,x,j),H=!0)}var K=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;var J={root:{position:"relative"}},_={root:({instance:e})=>["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]},O=(()=>{class e extends C{name="skeleton";style=K;classes=_;inlineStyles=J;static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275prov=c({token:e,factory:e.\u0275fac})}return e})();var $=new m("SKELETON_INSTANCE"),q=(()=>{class e extends D{componentName="Skeleton";$pcSkeleton=o($,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=o(O);get containerStyle(){let t=this._componentStyle?.inlineStyles.root,n;return this.$unstyled()||(this.size?n=l(a({},t),{width:this.size,height:this.size,borderRadius:this.borderRadius}):n=l(a({},t),{width:this.width,height:this.height,borderRadius:this.borderRadius})),n}get dataP(){return this.cn({[this.shape]:this.shape})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275cmp=u({type:e,selectors:[["p-skeleton"]],hostVars:6,hostBindings:function(n,i){n&2&&(y("aria-hidden",!0)("data-p",i.dataP),k(i.containerStyle),S(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[b([O,{provide:$,useExisting:e},{provide:E,useExisting:e}]),h([s]),g],decls:0,vars:0,template:function(n,i){},dependencies:[v,r],encapsulation:2,changeDetection:0})}return e})(),ue=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=f({type:e});static \u0275inj=p({imports:[q,r,r]})}return e})();export{Q as a,q as b,ue as c};
