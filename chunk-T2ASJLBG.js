import{b as rt,e as ht}from"./chunk-53JQ5NAG.js";import{C as dt,J as ut,K as mt,M as gt,c as st,e as Ie,g as pt,h as Oe,i as ct}from"./chunk-HBFOC76W.js";import{c as Se}from"./chunk-PH5YALHE.js";import{d as ot,e as at,j as lt}from"./chunk-6C6CC4KT.js";import{Ba as nt,Ca as ee,Ea as te,Fa as de,Ga as x,H as Ae,Ha as it,Ja as Te,Q as Ye,S as Je,Z as Le,aa as ge,b as We,ba as pe,ca as ce,fa as Be,l as Xe,na as et,q as Ce,ua as we,w as re,x as R,xa as J,ya as S,za as tt}from"./chunk-JAXNIEKX.js";import{e as ye,g as Ze,h as le,k as ve,l as X,u as Y,v as xe}from"./chunk-FEC2V4R3.js";import{$ as H,Ac as je,Db as g,Eb as Qe,Fb as He,Gc as U,Hc as Ue,Ic as M,Jb as L,Jc as be,Kb as B,Kc as Ve,Pb as l,Qb as h,Rb as f,Sa as Re,Sb as E,Vc as Z,Wb as D,X as Pe,Xa as Ne,Xb as F,Y as N,Ya as p,Yb as O,Z as Q,Zb as k,Zc as P,ba as I,bc as w,bd as W,cc as s,dc as fe,ec as _e,fb as Me,fc as v,gc as j,ha as d,hc as _,ia as u,ic as b,ja as ne,kd as y,ld as A,mb as $,mc as ue,nb as K,nc as ae,oc as $e,pa as C,pc as se,qa as he,qb as q,qc as m,rb as G,rc as z,sb as c,sc as me,ta as oe,tc as Ee,uc as Ke,ya as V,yc as qe,zc as Ge}from"./chunk-EG5ORV3B.js";import{a as ie}from"./chunk-VB56BUGO.js";var ft=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var Vt=["container"],At=["icon"],Lt=["closeicon"],Bt=["*"],Dt=t=>({closeCallback:t});function Ft(t,r){t&1&&O(0)}function zt(t,r){if(t&1&&c(0,Ft,1,0,"ng-container",4),t&2){let e=s();l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}function Pt(t,r){if(t&1&&E(0,"i",1),t&2){let e=s();m(e.cn(e.cx("icon"),e.icon)),l("pBind",e.ptm("icon")),g("data-p",e.dataP)}}function Rt(t,r){t&1&&O(0)}function Nt(t,r){if(t&1&&c(0,Rt,1,0,"ng-container",5),t&2){let e=s();l("ngTemplateOutlet",e.containerTemplate||e._containerTemplate)("ngTemplateOutletContext",M(2,Dt,e.closeCallback))}}function Qt(t,r){if(t&1&&E(0,"span",9),t&2){let e=s(3);l("pBind",e.ptm("text"))("ngClass",e.cx("text"))("innerHTML",e.text,Re),g("data-p",e.dataP)}}function Ht(t,r){if(t&1&&(h(0,"div"),c(1,Qt,1,4,"span",8),f()),t&2){let e=s(2);p(),l("ngIf",!e.escape)}}function $t(t,r){if(t&1&&(h(0,"span",7),z(1),f()),t&2){let e=s(3);l("pBind",e.ptm("text"))("ngClass",e.cx("text")),g("data-p",e.dataP),p(),me(e.text)}}function Kt(t,r){if(t&1&&c(0,$t,2,4,"span",10),t&2){let e=s(2);l("ngIf",e.escape&&e.text)}}function qt(t,r){if(t&1&&(c(0,Ht,2,1,"div",6)(1,Kt,1,1,"ng-template",null,0,Z),h(3,"span",7),_e(4),f()),t&2){let e=ue(2),n=s();l("ngIf",!n.escape)("ngIfElse",e),p(3),l("pBind",n.ptm("text"))("ngClass",n.cx("text")),g("data-p",n.dataP)}}function Gt(t,r){if(t&1&&E(0,"i",7),t&2){let e=s(2);m(e.cn(e.cx("closeIcon"),e.closeIcon)),l("pBind",e.ptm("closeIcon"))("ngClass",e.closeIcon),g("data-p",e.dataP)}}function jt(t,r){t&1&&O(0)}function Ut(t,r){if(t&1&&c(0,jt,1,0,"ng-container",4),t&2){let e=s(2);l("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Zt(t,r){if(t&1&&(ne(),E(0,"svg",14)),t&2){let e=s(2);m(e.cx("closeIcon")),l("pBind",e.ptm("closeIcon")),g("data-p",e.dataP)}}function Wt(t,r){if(t&1){let e=k();h(0,"button",11),w("click",function(i){d(e);let o=s();return u(o.close(i))}),L(1,Gt,1,5,"i",12),L(2,Ut,1,1,"ng-container"),L(3,Zt,1,4,":svg:svg",13),f()}if(t&2){let e=s();m(e.cx("closeButton")),l("pBind",e.ptm("closeButton")),g("aria-label",e.closeAriaLabel)("data-p",e.dataP),p(),B(e.closeIcon?1:-1),p(),B(e.closeIconTemplate||e._closeIconTemplate?2:-1),p(),B(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var Xt={root:({instance:t})=>["p-message p-component p-message-"+t.severity,t.variant&&"p-message-"+t.variant,{"p-message-sm":t.size==="small","p-message-lg":t.size==="large"}],contentWrapper:"p-message-content-wrapper",content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},_t=(()=>{class t extends ee{name="message";style=ft;classes=Xt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var bt=new H("MESSAGE_INSTANCE"),Yt=(()=>{class t extends de{_componentStyle=I(_t);bindDirectiveInstance=I(x,{self:!0});$pcMessage=I(bt,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;motionOptions=W(void 0);computedMotionOptions=P(()=>ie(ie({},this.ptm("motion")),this.motionOptions()));onClose=new C;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=oe(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant==="outlined",simple:this.variant==="simple",[this.severity]:this.severity,[this.size]:this.size})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(t)))(i||t)}})();static \u0275cmp=$({type:t,selectors:[["p-message"]],contentQueries:function(n,i,o){if(n&1&&(v(o,Vt,4),v(o,At,4),v(o,Lt,4),v(o,J,4)),n&2){let a;_(a=b())&&(i.containerTemplate=a.first),_(a=b())&&(i.iconTemplate=a.first),_(a=b())&&(i.closeIconTemplate=a.first),_(a=b())&&(i.templates=a)}},hostAttrs:["role","alert","aria-live","polite"],hostVars:5,hostBindings:function(n,i){n&1&&(Qe(function(){return"p-message-enter-active"}),He(function(){return"p-message-leave-active"})),n&2&&(g("data-p",i.dataP),m(i.cn(i.cx("root"),i.styleClass)),$e("p-message-leave-active",!i.visible()))},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",y],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",y],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant",motionOptions:[1,"motionOptions"]},outputs:{onClose:"onClose"},features:[U([_t,{provide:bt,useExisting:t},{provide:te,useExisting:t}]),q([x]),G],ngContentSelectors:Bt,decls:7,vars:12,consts:[["escapeOut",""],[3,"pBind"],[3,"pBind","class"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(n,i){n&1&&(fe(),h(0,"div",1)(1,"div",1),L(2,zt,1,1,"ng-container"),L(3,Pt,1,4,"i",2),L(4,Nt,1,4,"ng-container")(5,qt,5,5),L(6,Wt,4,8,"button",3),f()()),n&2&&(m(i.cx("contentWrapper")),l("pBind",i.ptm("contentWrapper")),g("data-p",i.dataP),p(),m(i.cx("content")),l("pBind",i.ptm("content")),g("data-p",i.dataP),p(),B(i.iconTemplate||i._iconTemplate?2:-1),p(),B(i.icon?3:-1),p(),B(i.containerTemplate||i._containerTemplate?4:5),p(2),B(i.closable?6:-1))},dependencies:[Y,ye,le,X,Ie,Te,S,x,Oe],encapsulation:2,changeDetection:0})}return t})(),oo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=Q({imports:[Yt,S,S]})}return t})();var yt=`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled):hover {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('autocomplete.disabled.background');
        color: dt('autocomplete.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`;var Jt=["item"],en=["empty"],tn=["header"],nn=["footer"],on=["selecteditem"],an=["group"],sn=["loader"],ln=["removeicon"],rn=["loadingicon"],pn=["clearicon"],cn=["dropdownicon"],dn=["focusInput"],un=["multiIn"],mn=["multiContainer"],gn=["ddBtn"],hn=["items"],fn=["scroller"],_n=["overlay"],bn=t=>({i:t}),Ct=t=>({$implicit:t}),yn=(t,r,e)=>({removeCallback:t,index:r,class:e}),ke=t=>({height:t}),wt=(t,r)=>({$implicit:t,options:r}),vn=t=>({options:t}),xn=()=>({}),Cn=(t,r,e)=>({option:t,i:r,scrollerOptions:e}),wn=(t,r)=>({$implicit:t,index:r});function In(t,r){if(t&1){let e=k();h(0,"input",18,2),w("input",function(i){d(e);let o=s();return u(o.onInput(i))})("keydown",function(i){d(e);let o=s();return u(o.onKeyDown(i))})("change",function(i){d(e);let o=s();return u(o.onInputChange(i))})("focus",function(i){d(e);let o=s();return u(o.onInputFocus(i))})("blur",function(i){d(e);let o=s();return u(o.onInputBlur(i))})("paste",function(i){d(e);let o=s();return u(o.onInputPaste(i))})("keyup",function(i){d(e);let o=s();return u(o.onInputKeyUp(i))}),f()}if(t&2){let e=s();m(e.cn(e.cx("pcInputText"),e.inputStyleClass)),l("pAutoFocus",e.autofocus)("pt",e.ptm("pcInputText"))("ngStyle",e.inputStyle)("variant",e.$variant())("invalid",e.invalid())("pSize",e.size())("fluid",e.hasFluid)("unstyled",e.unstyled()),g("type",e.type)("value",e.inputValue())("id",e.inputId)("autocomplete",e.autocomplete)("placeholder",e.placeholder)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Tn(t,r){if(t&1){let e=k();ne(),h(0,"svg",21),w("click",function(){d(e);let i=s(2);return u(i.clear())}),f()}if(t&2){let e=s(2);m(e.cx("clearIcon")),l("pBind",e.ptm("clearIcon")),g("aria-hidden",!0)}}function On(t,r){}function Sn(t,r){t&1&&c(0,On,0,0,"ng-template")}function kn(t,r){if(t&1){let e=k();h(0,"span",22),w("click",function(){d(e);let i=s(2);return u(i.clear())}),c(1,Sn,1,0,null,23),f()}if(t&2){let e=s(2);m(e.cx("clearIcon")),l("pBind",e.ptm("clearIcon")),g("aria-hidden",!0),p(),l("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Mn(t,r){if(t&1&&(D(0),c(1,Tn,1,4,"svg",19)(2,kn,2,5,"span",20),F()),t&2){let e=s();p(),l("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),p(),l("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function En(t,r){t&1&&O(0)}function Vn(t,r){if(t&1){let e=k();h(0,"span",22),w("click",function(i){d(e);let o=s(2).index,a=s(2);return u(!a.readonly&&!a.$disabled()?a.removeOption(i,o):"")}),ne(),E(1,"svg",31),f()}if(t&2){let e=s(4);m(e.cx("chipIcon")),l("pBind",e.ptm("chipIcon")),p(),m(e.cx("chipIcon")),g("aria-hidden",!0)}}function An(t,r){}function Ln(t,r){t&1&&c(0,An,0,0,"ng-template")}function Bn(t,r){if(t&1&&(h(0,"span",32),c(1,Ln,1,0,null,29),f()),t&2){let e=s(2).index,n=s(2);l("pBind",n.ptm("chipIcon")),g("aria-hidden",!0),p(),l("ngTemplateOutlet",n.removeIconTemplate||n._removeIconTemplate)("ngTemplateOutletContext",Ve(4,yn,n.removeOption.bind(n),e,n.cx("chipIcon")))}}function Dn(t,r){if(t&1&&c(0,Vn,2,6,"span",20)(1,Bn,2,8,"span",30),t&2){let e=s(3);l("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),p(),l("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}function Fn(t,r){if(t&1){let e=k();h(0,"li",26,5)(2,"p-chip",28),w("onRemove",function(i){let o=d(e).index,a=s(2);return u(a.readonly?"":a.removeOption(i,o))}),c(3,En,1,0,"ng-container",29)(4,Dn,2,2,"ng-template",null,6,Z),f()()}if(t&2){let e=r.$implicit,n=r.index,i=s(2);m(i.cx("chipItem",M(17,bn,n))),l("pBind",i.ptm("chipItem")),g("id",i.id+"_multiple_option_"+n)("aria-label",i.getOptionLabel(e))("aria-setsize",i.modelValue().length)("aria-posinset",n+1)("aria-selected",!0),p(2),m(i.cx("pcChip")),l("pt",i.ptm("pcChip"))("label",!i.selectedItemTemplate&&!i._selectedItemTemplate&&i.getOptionLabel(e))("disabled",i.$disabled())("removable",!0)("unstyled",i.unstyled()),p(),l("ngTemplateOutlet",i.selectedItemTemplate||i._selectedItemTemplate)("ngTemplateOutletContext",M(19,Ct,e))}}function zn(t,r){if(t&1){let e=k();h(0,"ul",24,3),w("focus",function(i){d(e);let o=s();return u(o.onMultipleContainerFocus(i))})("blur",function(i){d(e);let o=s();return u(o.onMultipleContainerBlur(i))})("keydown",function(i){d(e);let o=s();return u(o.onMultipleContainerKeyDown(i))}),c(2,Fn,6,21,"li",25),h(3,"li",26)(4,"input",27,4),w("input",function(i){d(e);let o=s();return u(o.onInput(i))})("keydown",function(i){d(e);let o=s();return u(o.onKeyDown(i))})("change",function(i){d(e);let o=s();return u(o.onInputChange(i))})("focus",function(i){d(e);let o=s();return u(o.onInputFocus(i))})("blur",function(i){d(e);let o=s();return u(o.onInputBlur(i))})("paste",function(i){d(e);let o=s();return u(o.onInputPaste(i))})("keyup",function(i){d(e);let o=s();return u(o.onInputKeyUp(i))}),f()()()}if(t&2){let e=s();m(e.cx("inputMultiple")),l("pBind",e.ptm("inputMultiple"))("tabindex",-1),g("data-p",e.inputMultipleDataP)("aria-orientation","horizontal")("aria-activedescendant",e.focused?e.focusedMultipleOptionId:void 0),p(2),l("ngForOf",e.modelValue()),p(),m(e.cx("inputChip")),l("pBind",e.ptm("inputChip")),p(),m(e.cx("pcInputText")),l("pAutoFocus",e.autofocus)("pBind",e.ptm("input"))("ngStyle",e.inputStyle),g("type",e.type)("id",e.inputId)("autocomplete",e.autocomplete)("name",e.name())("minlength",e.minlength())("maxlength",e.maxlength())("size",e.size())("min",e.min())("max",e.max())("pattern",e.pattern())("placeholder",e.$filled()?null:e.placeholder)("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Pn(t,r){if(t&1&&(ne(),E(0,"svg",35)),t&2){let e=s(2);m(e.cx("loader")),l("pBind",e.ptm("loader"))("spin",!0),g("aria-hidden",!0)}}function Rn(t,r){}function Nn(t,r){t&1&&c(0,Rn,0,0,"ng-template")}function Qn(t,r){if(t&1&&(h(0,"span",32),c(1,Nn,1,0,null,23),f()),t&2){let e=s(2);m(e.cx("loader")),l("pBind",e.ptm("loader")),g("aria-hidden",!0),p(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Hn(t,r){if(t&1&&(D(0),c(1,Pn,1,5,"svg",33)(2,Qn,2,5,"span",34),F()),t&2){let e=s();p(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),p(),l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function $n(t,r){if(t&1&&E(0,"span",38),t&2){let e=s(2);l("ngClass",e.dropdownIcon),g("aria-hidden",!0)}}function Kn(t,r){if(t&1&&(ne(),E(0,"svg",40)),t&2){let e=s(3);l("pBind",e.ptm("dropdown"))}}function qn(t,r){}function Gn(t,r){t&1&&c(0,qn,0,0,"ng-template")}function jn(t,r){if(t&1&&(D(0),c(1,Kn,1,1,"svg",39)(2,Gn,1,0,null,23),F()),t&2){let e=s(2);p(),l("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),p(),l("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Un(t,r){if(t&1){let e=k();h(0,"button",36,7),w("click",function(i){d(e);let o=s();return u(o.handleDropdownClick(i))}),c(2,$n,1,2,"span",37)(3,jn,3,2,"ng-container",14),f()}if(t&2){let e=s();m(e.cx("dropdown")),l("pBind",e.ptm("dropdown"))("disabled",e.$disabled()),g("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),p(2),l("ngIf",e.dropdownIcon),p(),l("ngIf",!e.dropdownIcon)}}function Zn(t,r){t&1&&O(0)}function Wn(t,r){t&1&&O(0)}function Xn(t,r){if(t&1&&c(0,Wn,1,0,"ng-container",29),t&2){let e=r.$implicit,n=r.options;s(2);let i=ue(6);l("ngTemplateOutlet",i)("ngTemplateOutletContext",be(2,wt,e,n))}}function Yn(t,r){t&1&&O(0)}function Jn(t,r){if(t&1&&c(0,Yn,1,0,"ng-container",29),t&2){let e=r.options,n=s(4);l("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",M(2,vn,e))}}function ei(t,r){t&1&&(D(0),c(1,Jn,1,4,"ng-template",null,10,Z),F())}function ti(t,r){if(t&1){let e=k();h(0,"p-scroller",45,9),w("onLazyLoad",function(i){d(e);let o=s(2);return u(o.onLazyLoad.emit(i))}),c(2,Xn,1,5,"ng-template",null,1,Z)(4,ei,3,0,"ng-container",14),f()}if(t&2){let e=s(2);se(M(10,ke,e.scrollHeight)),l("tabindex",-1)("pt",e.ptm("virtualScroller"))("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),p(4),l("ngIf",e.loaderTemplate||e._loaderTemplate)}}function ni(t,r){t&1&&O(0)}function ii(t,r){if(t&1&&(D(0),c(1,ni,1,0,"ng-container",29),F()),t&2){s();let e=ue(6),n=s();p(),l("ngTemplateOutlet",e)("ngTemplateOutletContext",be(3,wt,n.visibleOptions(),Ue(2,xn)))}}function oi(t,r){if(t&1&&(h(0,"span"),z(1),f()),t&2){let e=s(2).$implicit,n=s(3);p(),me(n.getOptionGroupLabel(e.optionGroup))}}function ai(t,r){t&1&&O(0)}function si(t,r){if(t&1&&(D(0),h(1,"li",49),c(2,oi,2,1,"span",14)(3,ai,1,0,"ng-container",29),f(),F()),t&2){let e=s(),n=e.$implicit,i=e.index,o=s().options,a=s(2);p(),m(a.cx("optionGroup")),l("pBind",a.ptm("optionGroup"))("ngStyle",M(8,ke,o.itemSize+"px")),g("id",a.id+"_"+a.getOptionIndex(i,o)),p(),l("ngIf",!a.groupTemplate),p(),l("ngTemplateOutlet",a.groupTemplate)("ngTemplateOutletContext",M(10,Ct,n.optionGroup))}}function li(t,r){if(t&1&&(h(0,"span"),z(1),f()),t&2){let e=s(2).$implicit,n=s(3);p(),me(n.getOptionLabel(e))}}function ri(t,r){t&1&&O(0)}function pi(t,r){if(t&1){let e=k();D(0),h(1,"li",50),w("click",function(i){d(e);let o=s().$implicit,a=s(3);return u(a.onOptionSelect(i,o))})("mouseenter",function(i){d(e);let o=s().index,a=s().options,T=s(2);return u(T.onOptionMouseEnter(i,T.getOptionIndex(o,a)))}),c(2,li,2,1,"span",14)(3,ri,1,0,"ng-container",29),f(),F()}if(t&2){let e=s(),n=e.$implicit,i=e.index,o=s().options,a=s(2);p(),m(a.cx("option",Ve(15,Cn,n,i,o))),l("pBind",a.getPTOptions(n,o,i,"option"))("ngStyle",M(19,ke,o.itemSize+"px")),g("id",a.id+"_"+a.getOptionIndex(i,o))("aria-label",a.getOptionLabel(n))("aria-selected",a.isSelected(n))("data-p-selected",a.isSelected(n))("aria-disabled",a.isOptionDisabled(n))("data-p-focused",a.focusedOptionIndex()===a.getOptionIndex(i,o))("aria-setsize",a.ariaSetSize)("aria-posinset",a.getAriaPosInset(a.getOptionIndex(i,o))),p(),l("ngIf",!a.itemTemplate&&!a._itemTemplate),p(),l("ngTemplateOutlet",a.itemTemplate||a._itemTemplate)("ngTemplateOutletContext",be(21,wn,n,o.getOptions?o.getOptions(i):i))}}function ci(t,r){if(t&1&&c(0,si,4,12,"ng-container",14)(1,pi,4,24,"ng-container",14),t&2){let e=r.$implicit,n=s(3);l("ngIf",n.isOptionGroup(e)),p(),l("ngIf",!n.isOptionGroup(e))}}function di(t,r){if(t&1&&(D(0),z(1),F()),t&2){let e=s(4);p(),Ee(" ",e.searchResultMessageText," ")}}function ui(t,r){t&1&&O(0,null,12)}function mi(t,r){if(t&1&&(h(0,"li",49),c(1,di,2,1,"ng-container",51)(2,ui,2,0,"ng-container",23),f()),t&2){let e=s().options,n=s(2);m(n.cx("emptyMessage")),l("pBind",n.ptm("emptyMessage"))("ngStyle",M(7,ke,e.itemSize+"px")),p(),l("ngIf",!n.emptyTemplate&&!n._emptyTemplate)("ngIfElse",n.empty),p(),l("ngTemplateOutlet",n.emptyTemplate||n._emptyTemplate)}}function gi(t,r){if(t&1&&(h(0,"ul",46,11),c(2,ci,2,2,"ng-template",47)(3,mi,3,9,"li",48),f()),t&2){let e=r.$implicit,n=r.options,i=s(2);se(n.contentStyle),m(i.cn(i.cx("list"),n.contentStyleClass)),l("pBind",i.ptm("list")),g("id",i.id+"_list")("aria-label",i.listLabel),p(2),l("ngForOf",e),p(),l("ngIf",!e||e&&e.length===0&&i.showEmptyMessage)}}function hi(t,r){t&1&&O(0)}function fi(t,r){if(t&1&&(h(0,"div",41),c(1,Zn,1,0,"ng-container",23),h(2,"div",42),c(3,ti,5,12,"p-scroller",43)(4,ii,2,6,"ng-container",14),f(),c(5,gi,4,9,"ng-template",null,8,Z)(7,hi,1,0,"ng-container",23),f(),h(8,"span",44),z(9),f()),t&2){let e=s();m(e.cn(e.cx("overlay"),e.panelStyleClass)),l("pBind",e.ptm("overlay"))("ngStyle",e.panelStyle),p(),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),p(),m(e.cx("listContainer")),ae("max-height",e.virtualScroll?"auto":e.scrollHeight),l("pBind",e.ptm("listContainer"))("tabindex",-1),p(),l("ngIf",e.virtualScroll),p(),l("ngIf",!e.virtualScroll),p(3),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),p(2),Ee(" ",e.selectedMessageText," ")}}var _i=`
${yt}

/* For PrimeNG */
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
    border-color: dt('autocomplete.invalid.border.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: dt('autocomplete.focus.border.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
    color: dt('autocomplete.invalid.placeholder.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
    color: dt('autocomplete.invalid.placeholder.color');
}
`,bi={root:{position:"relative"}},yi={root:({instance:t})=>["p-autocomplete p-component p-inputwrapper",{"p-invalid":t.invalid(),"p-focus":t.focused,"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused&&!t.$disabled()||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.$disabled(),"p-autocomplete-fluid":t.hasFluid}],pcInputText:"p-autocomplete-input",inputMultiple:({instance:t})=>["p-autocomplete-input-multiple",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled"}],chipItem:({instance:t,i:r})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex()===r}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:({instance:t})=>["p-autocomplete-overlay p-component-overlay p-component",{"p-input-filled":t.$variant()==="filled","p-ripple-disabled":t.config.ripple()===!1}],listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:r,i:e,scrollerOptions:n})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(r),"p-focus":t.focusedOptionIndex()===t.getOptionIndex(e,n),"p-disabled":t.isOptionDisabled(r)}),emptyMessage:"p-autocomplete-empty-message",clearIcon:"p-autocomplete-clear-icon"},vt=(()=>{class t extends ee{name="autocomplete";style=_i;classes=yi;inlineStyles=bi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var xt=new H("AUTOCOMPLETE_INSTANCE"),vi={provide:ct,useExisting:Pe(()=>It),multi:!0},It=(()=>{class t extends ut{overlayService;zone;$pcAutoComplete=I(xt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=I(x,{self:!0});minLength=1;minQueryLength;delay=300;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;addOnTab=!1;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;addOnBlur=!1;separator;appendTo=W(void 0);motionOptions=W(void 0);completeMethod=new C;onSelect=new C;onUnselect=new C;onAdd=new C;onFocus=new C;onBlur=new C;onDropdownClick=new C;onClear=new C;onInputKeydown=new C;onKeyUp=new C;onShow=new C;onHide=new C;onLazyLoad=new C;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;onHostClick(e){this.onContainerClick(e)}value;_suggestions=oe(null);timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;focusedMultipleOptionIndex=oe(-1);focusedOptionIndex=oe(-1);_componentStyle=I(vt);$appendTo=P(()=>this.appendTo()||this.config.overlayAppendTo());visibleOptions=P(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=P(()=>{let e=this.modelValue(),n=this.optionValueSelected?(this.suggestions||[]).find(i=>ce(i,e,this.equalityKey())):e;if(ge(e))if(typeof e=="object"||this.optionValueSelected){let i=this.getOptionLabel(n);return i??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get searchResultMessageText(){return ge(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue()?.length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(tt.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}constructor(e,n){super(),this.overlayService=e,this.zone=n}onInit(){this.id=this.id||et("pn_id_"),this.cd.detectChanges()}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((n,i,o)=>{n.push({optionGroup:i,group:!0,index:o});let a=this.getOptionGroupChildren(i);return a&&a.forEach(T=>n.push(T)),n},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return Be(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?Be(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?pe(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.some(n=>ce(n,e,this.equalityKey())):!1:ce(this.modelValue(),e,this.equalityKey())}isOptionMatched(e,n){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===n.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL?.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.optionValue?void 0:this.dataKey}onContainerClick(e){this.$disabled()||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&R(this.inputEL?.nativeElement)}handleDropdownClick(e){let n;this.overlayVisible?this.hide(!0):(R(this.inputEL?.nativeElement),n=this.inputEL?.nativeElement?.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,n,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:n})}onInput(e){if(this.typeahead){let n=this.minQueryLength||this.minLength;this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength()!==null&&(i=i.split("").slice(0,this.maxlength()).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=n?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let n=!1;if(this.visibleOptions()){let i=this.visibleOptions().find(o=>this.isOptionMatched(o,this.inputEL?.nativeElement?.value||""));i!==void 0&&(n=!0,!this.isSelected(i)&&this.onOptionSelect(e,i))}n||(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.$disabled())return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.$disabled()||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){if(this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.addOnBlur&&this.multiple&&!this.typeahead){let n=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();n&&!this.isSelected(n)&&(this.updateModel([...this.modelValue()||[],n]),this.onAdd.emit({originalEvent:e,value:n}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="")}this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){if(this.separator&&this.multiple&&!this.typeahead){let n=(e.clipboardData||window.clipboardData)?.getData("Text");if(n){let i=n.split(this.separator),o=[...this.modelValue()||[]];if(i.forEach(a=>{let T=a.trim();T&&!this.isSelected(T)&&o.push(T)}),o.length>(this.modelValue()||[]).length){let a=o.slice((this.modelValue()||[]).length);this.updateModel(o),a.forEach(T=>{this.onAdd.emit({originalEvent:e,value:T})}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault()}}}else this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(this.onInputKeydown.emit(e),e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:this.handleSeparatorKey(e);break}}handleSeparatorKey(e){if(this.separator&&this.multiple&&!this.typeahead&&(this.separator===e.key||typeof this.separator=="string"&&e.key===this.separator||this.separator instanceof RegExp&&e.key.match(this.separator))){let n=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();n&&!this.isSelected(n)&&(this.updateModel([...this.modelValue()||[],n]),this.onAdd.emit({originalEvent:e,value:n}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault())}}onArrowDownKey(e){if(!this.overlayVisible)return;let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let n=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault(),e.stopPropagation()}}onArrowLeftKey(e){let n=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(Le(n.value)&&this.hasSelectedOption()?(R(this.multiContainerEL?.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:n}=e,i=n.value.length;n.setSelectionRange(0,e.shiftKey?i:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:n}=e,i=n.value.length;n.setSelectionRange(e.shiftKey?0:i,i),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){if(!this.typeahead&&!this.forceSelection&&this.multiple){let n=e.target.value?.trim();n&&!this.isSelected(n)&&(this.updateModel([...this.modelValue()||[],n]),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""))}if(this.overlayVisible)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide();else return;e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){if(this.focusedOptionIndex()!==-1){this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]);return}if(this.multiple&&!this.typeahead){let n=(this.multiInputEl?.nativeElement?.value||this.inputEL?.nativeElement?.value||"").trim();if(this.addOnTab&&n&&!this.isSelected(n)){this.updateModel([...this.modelValue()||[],n]),this.onAdd.emit({originalEvent:e,value:n}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.updateInputValue(),e.preventDefault(),this.overlayVisible&&this.hide();return}}this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(ge(this.modelValue())&&!this.inputEL?.nativeElement?.value){let n=this.modelValue()[this.modelValue().length-1],i=this.modelValue().slice(0,-1);this.updateModel(i),this.onUnselect.emit({originalEvent:e,value:n})}e.stopPropagation()}}onArrowLeftKeyOnMultiple(e){let n=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(n)}onArrowRightKeyOnMultiple(e){let n=this.focusedMultipleOptionIndex();n++,this.focusedMultipleOptionIndex.set(n),n>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),R(this.inputEL?.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,n,i=!0){this.multiple?(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.isSelected(n)||this.updateModel([...this.modelValue()||[],n])):this.updateModel(n),this.onSelect.emit({originalEvent:e,value:n}),i&&this.hide(!0)}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}search(e,n,i){n!=null&&(i==="input"&&n.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:n})))}removeOption(e,n){e.stopPropagation();let i=this.modelValue()[n],o=this.modelValue().filter((a,T)=>T!==n);this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:i}),R(this.inputEL?.nativeElement)}updateModel(e){let n=null;e&&(n=this.multiple?e.map(i=>this.getOptionValue(i)):this.getOptionValue(e)),this.value=n,this.writeModelValue(e),this.onModelChange(n),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=re(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,n){this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[n],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),e&&R(this.inputEL?.nativeElement),e&&R(this.inputEL?.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let n=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&R(this.inputEL?.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{n()},0)}clear(){this.updateModel(null),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.onClear.emit()}hasSelectedOption(){return ge(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}getOptionLabel(e){return this.optionLabel?pe(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?pe(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?pe(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?pe(e,this.optionGroupChildren):e.items}getPTOptions(e,n,i,o){return this.ptm(o,{context:{option:e,index:this.getOptionIndex(i,n),selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})}onOverlayBeforeEnter(){if(this.itemsWrapper=re(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?'[data-pc-name="virtualscroller"]':'[data-pc-name="pcoverlay"]'),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller?.viewInit()),this.visibleOptions()&&this.visibleOptions().length)if(this.virtualScroll){let e=this.modelValue()?this.focusedOptionIndex():-1;e!==-1&&this.scroller?.scrollToIndex(e)}else{let e=re(this.itemsWrapper,'[data-pc-section="option"][data-p-selected="true"]');e&&e.scrollIntoView({block:"nearest",inline:"center"})}}get containerDataP(){return this.cn({fluid:this.hasFluid})}get overlayDataP(){return this.cn({[`overlay-${this.$appendTo()}`]:!0})}get inputMultipleDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()==="filled",empty:!this.$filled(),[this.size()]:this.size()})}writeControlValue(e,n){let i=this.multiple?this.visibleOptions().filter(o=>e?.some(a=>ce(a,o,this.equalityKey()))):this.visibleOptions().find(o=>ce(e,o,this.equalityKey()));this.value=e,n(Le(i)?e:i),this.updateInputValue(),this.cd.markForCheck()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(n){return new(n||t)(Me(we),Me(he))};static \u0275cmp=$({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(n,i,o){if(n&1&&(v(o,Jt,5),v(o,en,5),v(o,tn,5),v(o,nn,5),v(o,on,5),v(o,an,5),v(o,sn,5),v(o,ln,5),v(o,rn,5),v(o,pn,5),v(o,cn,5),v(o,J,4)),n&2){let a;_(a=b())&&(i.itemTemplate=a.first),_(a=b())&&(i.emptyTemplate=a.first),_(a=b())&&(i.headerTemplate=a.first),_(a=b())&&(i.footerTemplate=a.first),_(a=b())&&(i.selectedItemTemplate=a.first),_(a=b())&&(i.groupTemplate=a.first),_(a=b())&&(i.loaderTemplate=a.first),_(a=b())&&(i.removeIconTemplate=a.first),_(a=b())&&(i.loadingIconTemplate=a.first),_(a=b())&&(i.clearIconTemplate=a.first),_(a=b())&&(i.dropdownIconTemplate=a.first),_(a=b())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&(j(dn,5),j(un,5),j(mn,5),j(gn,5),j(hn,5),j(fn,5),j(_n,5)),n&2){let o;_(o=b())&&(i.inputEL=o.first),_(o=b())&&(i.multiInputEl=o.first),_(o=b())&&(i.multiContainerEL=o.first),_(o=b())&&(i.dropdownButton=o.first),_(o=b())&&(i.itemsViewChild=o.first),_(o=b())&&(i.scroller=o.first),_(o=b())&&(i.overlayViewChild=o.first)}},hostVars:5,hostBindings:function(n,i){n&1&&w("click",function(a){return i.onHostClick(a)}),n&2&&(g("data-p",i.containerDataP),se(i.sx("root")),m(i.cn(i.cx("root"),i.styleClass)))},inputs:{minLength:[2,"minLength","minLength",A],minQueryLength:[2,"minQueryLength","minQueryLength",A],delay:[2,"delay","delay",A],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",y],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",y],virtualScroll:[2,"virtualScroll","virtualScroll",y],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",A],virtualScrollOptions:"virtualScrollOptions",autoHighlight:[2,"autoHighlight","autoHighlight",y],forceSelection:[2,"forceSelection","forceSelection",y],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",y],baseZIndex:[2,"baseZIndex","baseZIndex",A],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",y],group:[2,"group","group",y],completeOnFocus:[2,"completeOnFocus","completeOnFocus",y],showClear:[2,"showClear","showClear",y],dropdown:[2,"dropdown","dropdown",y],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",y],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",y],addOnTab:[2,"addOnTab","addOnTab",y],tabindex:[2,"tabindex","tabindex",A],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",y],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",y],selectOnFocus:[2,"selectOnFocus","selectOnFocus",y],searchLocale:[2,"searchLocale","searchLocale",y],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",y],typeahead:[2,"typeahead","typeahead",y],addOnBlur:[2,"addOnBlur","addOnBlur",y],separator:"separator",appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onAdd:"onAdd",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onInputKeydown:"onInputKeydown",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[U([vi,vt,{provide:xt,useExisting:t},{provide:te,useExisting:t}]),q([x]),G],decls:9,vars:14,consts:[["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["focusInput","","multiIn",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","pt","class","ngStyle","variant","invalid","pSize","fluid","unstyled","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"pBind","class","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","pRipple","",3,"pBind","class","disabled","click",4,"ngIf"],[3,"visibleChange","onBeforeEnter","onHide","hostAttrSelector","visible","options","target","appendTo","unstyled","pt","motionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pt","ngStyle","variant","invalid","pSize","fluid","unstyled"],["data-p-icon","times",3,"pBind","class","click",4,"ngIf"],[3,"pBind","class","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","pBind","tabindex"],["role","option",3,"pBind","class",4,"ngFor","ngForOf"],["role","option",3,"pBind"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pBind","ngStyle"],[3,"onRemove","pt","label","disabled","removable","unstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind",4,"ngIf"],["data-p-icon","times-circle"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","class","spin",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["data-p-icon","spinner",3,"pBind","spin"],["type","button","pRipple","",3,"click","pBind","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"],[3,"pBind","ngStyle"],[3,"pBind","tabindex"],[3,"tabindex","pt","items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","tabindex","pt","items","itemSize","autoSize","lazy","options"],["role","listbox",3,"pBind"],["ngFor","",3,"ngForOf"],["role","option",3,"pBind","class","ngStyle",4,"ngIf"],["role","option",3,"pBind","ngStyle"],["pRipple","","role","option",3,"click","mouseenter","pBind","ngStyle"],[4,"ngIf","ngIfElse"]],template:function(n,i){if(n&1){let o=k();c(0,In,2,32,"input",13)(1,Mn,3,2,"ng-container",14)(2,zn,7,37,"ul",15)(3,Hn,3,2,"ng-container",14)(4,Un,4,8,"button",16),h(5,"p-overlay",17,0),je("visibleChange",function(T){return d(o),Ge(i.overlayVisible,T)||(i.overlayVisible=T),u(T)}),w("onBeforeEnter",function(){return d(o),u(i.onOverlayBeforeEnter())})("onHide",function(){return d(o),u(i.hide())}),c(7,fi,10,15,"ng-template",null,1,Z),f()}n&2&&(l("ngIf",!i.multiple),p(),l("ngIf",i.$filled()&&!i.$disabled()&&i.showClear&&!i.loading),p(),l("ngIf",i.multiple),p(),l("ngIf",i.loading),p(),l("ngIf",i.dropdown),p(),l("hostAttrSelector",i.$attrSelector),qe("visible",i.overlayVisible),l("options",i.overlayOptions)("target","@parent")("appendTo",i.$appendTo())("unstyled",i.unstyled())("pt",i.ptm("pcOverlay"))("motionOptions",i.motionOptions()),g("data-p",i.overlayDataP))},dependencies:[Y,ye,Ze,le,X,ve,mt,dt,Te,gt,at,rt,lt,st,ht,S,Ie,it,x],encapsulation:2,changeDetection:0})}return t})(),Po=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=Q({imports:[It,S,S]})}return t})();var Tt=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var xi=["content"],Ci=t=>({$implicit:t});function wi(t,r){if(t&1&&(h(0,"div"),z(1),f()),t&2){let e=s(2);ae("display",e.value!=null&&e.value!==0?"flex":"none"),p(),Ke("",e.value,"",e.unit)}}function Ii(t,r){t&1&&O(0)}function Ti(t,r){if(t&1&&(h(0,"div",2)(1,"div",2),c(2,wi,2,4,"div",3)(3,Ii,1,0,"ng-container",4),f()()),t&2){let e=s();m(e.cn(e.cx("value"),e.valueStyleClass)),ae("width",e.value+"%")("display","flex")("background",e.color),l("pBind",e.ptm("value")),g("data-p",e.dataP),p(),m(e.cx("label")),l("pBind",e.ptm("label")),g("data-p",e.dataP),p(),l("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),p(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",M(17,Ci,e.value))}}function Oi(t,r){if(t&1&&E(0,"div",2),t&2){let e=s();m(e.cn(e.cx("value"),e.valueStyleClass)),ae("background",e.color),l("pBind",e.ptm("value")),g("data-p",e.dataP)}}var Si={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.mode=="determinate","p-progressbar-indeterminate":t.mode=="indeterminate"}],value:"p-progressbar-value",label:"p-progressbar-label"},Ot=(()=>{class t extends ee{name="progressbar";style=Tt;classes=Si;static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var St=new H("PROGRESSBAR_INSTANCE"),ki=(()=>{class t extends de{$pcProgressBar=I(St,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=I(x,{self:!0});value;showValue=!0;styleClass;valueStyleClass;unit="%";mode="determinate";color;contentTemplate;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=I(Ot);templates;_contentTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}get dataP(){return this.cn({determinate:this.mode==="determinate",indeterminate:this.mode==="indeterminate"})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(t)))(i||t)}})();static \u0275cmp=$({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(n,i,o){if(n&1&&(v(o,xi,4),v(o,J,4)),n&2){let a;_(a=b())&&(i.contentTemplate=a.first),_(a=b())&&(i.templates=a)}},hostVars:7,hostBindings:function(n,i){n&2&&(g("aria-valuemin",0)("aria-valuenow",i.value)("aria-valuemax",100)("aria-level",i.value+i.unit)("data-p",i.dataP),m(i.cn(i.cx("root"),i.styleClass)))},inputs:{value:[2,"value","value",A],showValue:[2,"showValue","showValue",y],styleClass:"styleClass",valueStyleClass:"valueStyleClass",unit:"unit",mode:"mode",color:"color"},features:[U([Ot,{provide:St,useExisting:t},{provide:te,useExisting:t}]),q([x]),G],decls:2,vars:2,consts:[[3,"class","pBind","width","display","background",4,"ngIf"],[3,"class","pBind","background",4,"ngIf"],[3,"pBind"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&c(0,Ti,4,19,"div",0)(1,Oi,1,6,"div",1),n&2&&(l("ngIf",i.mode==="determinate"),p(),l("ngIf",i.mode==="indeterminate"))},dependencies:[Y,le,X,S,x],encapsulation:2,changeDetection:0})}return t})(),ia=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=Q({imports:[ki,S,S]})}return t})();var kt=`
    .p-popover {
        margin-block-start: dt('popover.gutter');
        background: dt('popover.background');
        color: dt('popover.color');
        border: 1px solid dt('popover.border.color');
        border-radius: dt('popover.border.radius');
        box-shadow: dt('popover.shadow');
        will-change: transform;
    }

    .p-popover-content {
        padding: dt('popover.content.padding');
    }

    .p-popover-flipped {
        margin-block-start: calc(dt('popover.gutter') * -1);
        margin-block-end: dt('popover.gutter');
    }

    .p-popover:after,
    .p-popover:before {
        bottom: 100%;
        left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-popover:after {
        border-width: calc(dt('popover.gutter') - 2px);
        margin-left: calc(-1 * (dt('popover.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.background');
    }

    .p-popover:before {
        border-width: dt('popover.gutter');
        margin-left: calc(-1 * dt('popover.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.border.color');
    }

    .p-popover-flipped:after,
    .p-popover-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-popover.p-popover-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('popover.background');
    }

    .p-popover.p-popover-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('popover.border.color');
    }
`;var Mi=["content"],Ei=["*"],Vi=t=>({closeCallback:t});function Ai(t,r){}function Li(t,r){t&1&&c(0,Ai,0,0,"ng-template")}function Bi(t,r){if(t&1){let e=k();h(0,"div",1),w("click",function(i){d(e);let o=s();return u(o.onOverlayClick(i))})("pMotionOnEnter",function(i){d(e);let o=s();return u(o.onAnimationStart(i))})("pMotionOnAfterLeave",function(){d(e);let i=s();return u(i.onAnimationEnd())}),h(1,"div",2),w("click",function(i){d(e);let o=s();return u(o.onContentClick(i))})("mousedown",function(i){d(e);let o=s();return u(o.onContentClick(i))}),_e(2),c(3,Li,1,0,null,3),f()()}if(t&2){let e=s();se(e.sx("root")),m(e.cn(e.cx("root"),e.styleClass)),l("pBind",e.ptm("root"))("ngStyle",e.style)("pMotion",e.overlayVisible)("pMotionAppear",!0)("pMotionOptions",e.computedMotionOptions()),g("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),p(),m(e.cx("content")),l("pBind",e.ptm("content")),p(2),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",M(17,Vi,e.onCloseClick.bind(e)))}}var Di={root:()=>({position:"absolute"})},Fi={root:"p-popover p-component",content:"p-popover-content"},Mt=(()=>{class t extends ee{name="popover";style=kt;classes=Fi;inlineStyles=Di;static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})(),Et=new H("POPOVER_INSTANCE"),zi=(()=>{class t extends de{$pcPopover=I(Et,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=I(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo=W("body");autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";motionOptions=W(void 0);computedMotionOptions=P(()=>ie(ie({},this.ptm("motion")),this.motionOptions()));onShow=new C;onHide=new C;$appendTo=P(()=>this.appendTo()||this.config.overlayAppendTo());container;overlayVisible=!1;render=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=I(Mt);zone=I(he);overlayService=I(we);onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(xe(this.platformId)&&!this.documentClickListener){let e=Ye()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,e,i=>{this.dismissable&&(!this.container?.contains(i.target)&&this.target!==i.target&&!this.target.contains(i.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,n){this.overlayVisible?(this.hasTargetChanged(e,n)&&(this.destroyCallback=()=>{this.show(null,n||e.currentTarget||e.target)}),this.hide()):this.show(e,n)}show(e,n){n&&e&&e.stopPropagation(),this.container&&!this.overlayVisible&&(this.container=null),this.target=n||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck()}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let n=e.target;this.selfClick=e.offsetX<n.clientWidth&&e.offsetY<n.clientHeight}hasTargetChanged(e,n){return this.target!=null&&this.target!==(n||e.currentTarget||e.target)}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?Ce(this.document.body,this.container):Ce(this.$appendTo(),this.container))}restoreAppend(){this.container&&this.$appendTo()&&this.$appendTo()!=="self"&&Ce(this.el.nativeElement,this.container)}setZIndex(){this.autoZIndex&&Se.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay)}align(){if(this.target&&this.container){Xe(this.container,this.target,!1);let e=Ae(this.container),n=Ae(this.target),i=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),o=0;e.left<n.left&&(o=n.left-e.left-parseFloat(i)*2),this.container.style.setProperty(nt("popover.arrow.left").name,`${o}px`),e.top<n.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.$unstyled()&&We(this.container,"p-popover-flipped"))}}onAnimationStart(e){this.container=e.element,this.container?.setAttribute(this.$attrSelector,""),this.appendOverlay(),this.align(),this.setZIndex(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=n=>{this.container&&this.container.contains(n.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)}onAnimationEnd(){this.overlayVisible||(this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.autoZIndex&&Se.clear(this.container),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1,this.container=null)}focus(){let e=re(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!Je()&&this.hide()}bindDocumentResizeListener(){if(xe(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){xe(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new ot(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&Se.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(t)))(i||t)}})();static \u0275cmp=$({type:t,selectors:[["p-popover"]],contentQueries:function(n,i,o){if(n&1&&(v(o,Mi,4),v(o,J,4)),n&2){let a;_(a=b())&&(i.contentTemplate=a.first),_(a=b())&&(i.templates=a)}},hostBindings:function(n,i){n&1&&w("keydown.escape",function(a){return i.onEscapeKeydown(a)},Ne)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",y],style:"style",styleClass:"styleClass",appendTo:[1,"appendTo"],autoZIndex:[2,"autoZIndex","autoZIndex",y],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",A],focusOnShow:[2,"focusOnShow","focusOnShow",y],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"]},outputs:{onShow:"onShow",onHide:"onHide"},features:[U([Mt,{provide:Et,useExisting:t},{provide:te,useExisting:t}]),q([x]),G],ngContentSelectors:Ei,decls:1,vars:1,consts:[["role","dialog","pMotionName","p-anchored-overlay",3,"pBind","class","style","ngStyle","pMotion","pMotionAppear","pMotionOptions"],["role","dialog","pMotionName","p-anchored-overlay",3,"click","pMotionOnEnter","pMotionOnAfterLeave","pBind","ngStyle","pMotion","pMotionAppear","pMotionOptions"],[3,"click","mousedown","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(fe(),L(0,Bi,4,19,"div",0)),n&2&&B(i.render?0:-1)},dependencies:[Y,X,ve,S,x,Oe,pt],encapsulation:2,changeDetection:0})}return t})(),Ea=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=Q({imports:[zi,S,S]})}return t})();export{Yt as a,oo as b,ki as c,ia as d,It as e,Po as f,zi as g,Ea as h};
