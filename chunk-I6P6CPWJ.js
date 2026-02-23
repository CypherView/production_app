import{d as Ve,e as Ee}from"./chunk-PHOSYVDR.js";import{f as ke,h as Fe}from"./chunk-HBFOC76W.js";import{d as fe}from"./chunk-PH5YALHE.js";import{l as ce,m as de}from"./chunk-6C6CC4KT.js";import{Ca as q,Ea as I,Fa as z,Ga as h,Ha as N,ea as Te,na as Ne,v as Me,xa as H,ya as R}from"./chunk-JAXNIEKX.js";import{e as De,l as ee,u as D}from"./chunk-FEC2V4R3.js";import{$ as F,Db as G,Gc as B,Ic as we,Jb as g,Kb as f,Kc as Z,Nb as _e,Ob as ge,Pb as d,Qb as a,Rb as p,Sb as oe,X as O,Y as A,Ya as s,Yb as X,Z as be,Zb as C,Zc as S,ad as T,ba as c,bc as v,bd as _,cc as r,dc as W,dd as pe,ec as j,ed as le,fc as Y,fd as M,gc as ye,ha as u,hc as $,ia as m,ic as L,jc as Q,lc as re,mb as w,nb as xe,qb as V,qc as b,rb as E,rc as se,sb as P,sc as ae,ta as Se,va as me,ya as y}from"./chunk-EG5ORV3B.js";import{a as U}from"./chunk-VB56BUGO.js";var Pe=`
    .p-steplist {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-step {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: dt('stepper.step.gap');
        padding: dt('stepper.step.padding');
    }

    .p-step:last-of-type {
        flex: initial;
    }

    .p-step-header {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration');
        border-radius: dt('stepper.step.header.border.radius');
        outline-color: transparent;
        background: transparent;
        padding: dt('stepper.step.header.padding');
        gap: dt('stepper.step.header.gap');
    }

    .p-step-header:focus-visible {
        box-shadow: dt('stepper.step.header.focus.ring.shadow');
        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');
        outline-offset: dt('stepper.step.header.focus.ring.offset');
    }

    .p-stepper.p-stepper-readonly .p-step {
        cursor: auto;
    }

    .p-step-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('stepper.step.title.color');
        font-weight: dt('stepper.step.title.font.weight');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('stepper.step.number.color');
        border: 2px solid dt('stepper.step.number.border.color');
        background: dt('stepper.step.number.background');
        min-width: dt('stepper.step.number.size');
        height: dt('stepper.step.number.size');
        line-height: dt('stepper.step.number.size');
        font-size: dt('stepper.step.number.font.size');
        z-index: 1;
        border-radius: dt('stepper.step.number.border.radius');
        position: relative;
        font-weight: dt('stepper.step.number.font.weight');
    }

    .p-step-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('stepper.step.number.border.radius');
        box-shadow: dt('stepper.step.number.shadow');
    }

    .p-step-active .p-step-header {
        cursor: default;
    }

    .p-step-active .p-step-number {
        background: dt('stepper.step.number.active.background');
        border-color: dt('stepper.step.number.active.border.color');
        color: dt('stepper.step.number.active.color');
    }

    .p-step-active .p-step-title {
        color: dt('stepper.step.title.active.color');
    }

    .p-step:not(.p-disabled):focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-step:has(~ .p-step-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepper-separator {
        flex: 1 1 0;
        background: dt('stepper.separator.background');
        width: 100%;
        height: dt('stepper.separator.size');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-steppanels {
        padding: dt('stepper.steppanels.padding');
    }

    .p-steppanel {
        background: dt('stepper.steppanel.background');
        color: dt('stepper.steppanel.color');
    }

    .p-stepper:has(.p-stepitem) {
        display: flex;
        flex-direction: column;
    }

    .p-stepitem {
        display: flex;
        flex-direction: column;
        flex: initial;
    }

    .p-stepitem.p-stepitem-active {
        flex: 1 1 auto;
    }

    .p-stepitem .p-step {
        flex: initial;
    }
    
    .p-stepitem .p-steppanel {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-stepitem .p-steppanel-content-wrapper {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
    }
    .p-stepitem .p-steppanel-content {
        width: 100%;
        padding: dt('stepper.steppanel.padding');
        margin-inline-start: 1rem;
    }

    .p-stepitem .p-stepper-separator {
        flex: 0 0 auto;
        width: dt('stepper.separator.size');
        height: auto;
        margin: dt('stepper.separator.margin');
        position: relative;
        left: calc(-1 * dt('stepper.separator.size'));
    }

    .p-stepitem .p-stepper-separator:dir(rtl) {
        left: calc(-9 * dt('stepper.separator.size'));
    }

    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepitem:last-of-type .p-steppanel {
        padding-inline-start: dt('stepper.step.number.size');
    }
`;var J=["*"],Ge=["content"],Je=(t,o,e)=>({activateCallback:t,value:o,active:e});function Ze(t,o){t&1&&oe(0,"p-stepper-separator")}function et(t,o){if(t&1){let e=C();a(0,"button",0),v("click",function(){u(e);let n=r();return m(n.onStepClick())}),a(1,"span",1),se(2),p(),a(3,"span",1),j(4),p()(),g(5,Ze,1,0,"p-stepper-separator")}if(t&2){let e=r();b(e.cx("header")),d("pBind",e.ptm("header"))("tabindex",e.isStepDisabled()?-1:void 0)("disabled",e.isStepDisabled()),G("id",e.id())("role","tab")("aria-controls",e.ariaControls()),s(),b(e.cx("number")),d("pBind",e.ptm("number")),s(),ae(e.value()),s(),b(e.cx("title")),d("pBind",e.ptm("title")),s(2),f(e.isSeparatorVisible()?5:-1)}}function tt(t,o){t&1&&X(0)}function nt(t,o){t&1&&oe(0,"p-stepper-separator")}function it(t,o){if(t&1&&(P(0,tt,1,0,"ng-container",2),g(1,nt,1,0,"p-stepper-separator")),t&2){let e=r();d("ngTemplateOutlet",e.content||e._contentTemplate)("ngTemplateOutletContext",Z(3,Je,e.onStepClick.bind(e),e.value(),e.active())),s(),f(e.isSeparatorVisible()?1:-1)}}function ot(t,o){t&1&&oe(0,"p-stepper-separator")}function rt(t,o){t&1&&X(0)}var st={root:({instance:t})=>["p-stepitem",{"p-stepitem-active":t.isActive()}]},Be=(()=>{class t extends q{name="stepitem";classes=st;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var at={root:"p-steplist"},Ie=(()=>{class t extends q{name="steplist";classes=at;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var pt={root:"p-steppanels"},ze=(()=>{class t extends q{name="steppanel";classes=pt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var lt={root:({instance:t})=>["p-steppanel",{"p-steppanel-active":t.isVertical()&&t.active()}],contentWrapper:"p-steppanel-content-wrapper",content:"p-steppanel-content"},Oe=(()=>{class t extends q{name="steppanel";classes=lt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var ct=`
${Pe}

.p-steppanel .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`,dt={root:({instance:t})=>["p-stepper p-component",{"p-readonly":t.linear()}],separator:"p-stepper-separator"},ue=(()=>{class t extends q{name="stepper";style=ct;classes=dt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var ut={root:({instance:t})=>["p-step",{"p-step-active":t.active(),"p-disabled":t.isStepDisabled()}],header:"p-step-header",number:"p-step-number",title:"p-step-title"},Ae=(()=>{class t extends q{name="step";classes=ut;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var We=new F("STEPPER_INSTANCE"),je=new F("STEPLIST_INSTANCE"),$e=new F("STEPITEM_INSTANCE"),Le=new F("STEP_INSTANCE"),Qe=new F("STEPPANEL_INSTANCE"),He=new F("STEPPANELS_INSTANCE"),Re=new F("STEPPERSEPARATOR_INSTANCE"),te=(()=>{class t extends z{$pcStepList=c(je,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});steps=le(O(()=>k));_componentStyle=c(Ie);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-step-list"]],contentQueries:function(i,n,l){i&1&&Q(l,n.steps,k,4),i&2&&re()},hostVars:2,hostBindings:function(i,n){i&2&&b(n.cx("root"))},features:[B([Ie,{provide:je,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:J,decls:1,vars:0,template:function(i,n){i&1&&(W(),j(0))},dependencies:[D,N],encapsulation:2,changeDetection:0})}return t})(),he=(()=>{class t extends z{$pcStepperSeparator=c(Re,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=c(ue);static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-stepper-separator"]],hostVars:2,hostBindings:function(i,n){i&2&&b(n.cx("separator"))},features:[B([ue,{provide:Re,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:J,decls:1,vars:0,template:function(i,n){i&1&&(W(),j(0))},dependencies:[D,N],encapsulation:2,changeDetection:0})}return t})(),ve=(()=>{class t extends z{$pcStepItem=c($e,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});_componentStyle=c(Be);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}pcStepper=c(O(()=>K));value=M();isActive=S(()=>this.pcStepper.value()===this.value());step=pe(O(()=>k));stepPanel=pe(O(()=>ne));constructor(){super(),me(()=>{this.step().value.set(this.value())}),me(()=>{this.stepPanel().value.set(this.value())})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["p-step-item"]],contentQueries:function(i,n,l){i&1&&(Q(l,n.step,k,5),Q(l,n.stepPanel,ne,5)),i&2&&re(2)},hostVars:3,hostBindings:function(i,n){i&2&&(G("data-p-active",n.isActive()),b(n.cx("root")))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[B([Be,{provide:$e,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:J,decls:1,vars:0,template:function(i,n){i&1&&(W(),j(0))},dependencies:[D,N],encapsulation:2,changeDetection:0})}return t})(),k=(()=>{class t extends z{$pcStep=c(Le,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});pcStepper=c(O(()=>K));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=M();disabled=_(!1,{transform:e=>fe(e)});active=S(()=>this.pcStepper.isStepActive(this.value()));isStepDisabled=S(()=>!this.active()&&(this.pcStepper.linear()||this.disabled()));id=S(()=>`${this.pcStepper.id()}_step_${this.value()}`);ariaControls=S(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isSeparatorVisible=S(()=>{if(this.pcStepper.stepList()){let e=this.pcStepper.stepList().steps(),i=e.indexOf(this),n=e.length;return i!==n-1}else return!1});content;templates;_contentTemplate;_componentStyle=c(Ae);onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}onStepClick(){this.pcStepper.updateValue(this.value())}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-step"]],contentQueries:function(i,n,l){if(i&1&&(Y(l,Ge,4),Y(l,H,4)),i&2){let x;$(x=L())&&(n.content=x.first),$(x=L())&&(n.templates=x)}},hostVars:6,hostBindings:function(i,n){i&2&&(G("aria-current",n.active()?"step":void 0)("role","presentation")("data-p-active",n.active())("data-p-disabled",n.isStepDisabled()),b(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[B([Ae,{provide:Le,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:J,decls:2,vars:1,consts:[["type","button",3,"click","pBind","tabindex","disabled"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(W(),g(0,et,6,16)(1,it,2,7)),i&2&&f(!n.content&&!n._contentTemplate?0:1)},dependencies:[D,ee,he,R,N,h],encapsulation:2,changeDetection:0})}return t})(),ne=(()=>{class t extends z{$pcStepPanel=c(Qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});pcStepper=c(O(()=>K));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=M(void 0);active=S(()=>this.pcStepper.value()===this.value());ariaControls=S(()=>`${this.pcStepper.id()}_step_${this.value()}`);id=S(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isVertical=S(()=>this.pcStepper.stepItems().length>0);isSeparatorVisible=S(()=>{if(this.pcStepper.stepItems()){let e=this.pcStepper.stepItems().length,i=Me(this.pcStepper.el.nativeElement,'[data-pc-name="steppanel"]');return Te(this.el.nativeElement,i)!==e-1}});computedMotionOptions=S(()=>U(U({},this.ptm("motion")),this.pcStepper.computedMotionOptions()));contentTemplate;templates;_contentTemplate;_componentStyle=c(Oe);onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}updateValue(e){this.pcStepper.updateValue(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-step-panel"]],contentQueries:function(i,n,l){if(i&1&&(Y(l,Ge,5),Y(l,H,4)),i&2){let x;$(x=L())&&(n.contentTemplate=x.first),$(x=L())&&(n.templates=x)}},hostVars:7,hostBindings:function(i,n){i&2&&(G("role","tabpanel")("aria-controls",n.ariaControls())("id",n.id())("data-p-active",n.active())("data-pc-name","steppanel"),b(n.cx("root")))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[B([Oe,{provide:Qe,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],decls:5,vars:16,consts:[["name","p-collapsible",3,"visible","disabled","options"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(a(0,"p-motion",0)(1,"div",1),g(2,ot,1,0,"p-stepper-separator"),a(3,"div",1),P(4,rt,1,0,"ng-container",2),p()()()),i&2&&(d("visible",n.active())("disabled",!n.isVertical())("options",n.computedMotionOptions()),s(),b(n.cx("contentWrapper")),d("pBind",n.ptm("contentWrapper")),s(),f(n.isSeparatorVisible()?2:-1),s(),b(n.cx("content")),d("pBind",n.ptm("content")),s(),d("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",Z(12,Je,n.updateValue.bind(n),n.value(),n.active())))},dependencies:[D,ee,he,R,N,h,Fe,ke],encapsulation:2,changeDetection:0})}return t})(),Ce=(()=>{class t extends z{$pcStepPanels=c(He,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});_componentStyle=c(ze);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-step-panels"]],hostVars:2,hostBindings:function(i,n){i&2&&b(n.cx("root"))},features:[B([ze,{provide:He,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:J,decls:1,vars:0,template:function(i,n){i&1&&(W(),j(0))},dependencies:[D,R,N],encapsulation:2,changeDetection:0})}return t})(),K=(()=>{class t extends z{$pcStepper=c(We,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});_componentStyle=c(ue);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=M(void 0);linear=_(!1,{transform:e=>fe(e)});transitionOptions=_("400ms cubic-bezier(0.86, 0, 0.07, 1)");motionOptions=_(void 0);computedMotionOptions=S(()=>U(U({},this.ptm("motion")),this.motionOptions()));id=Se(Ne("pn_id_"));stepItems=le(ve);steps=le(k);stepList=pe(te);updateValue(e){this.value.set(e)}isStepActive(e){return this.value()===e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-stepper"]],contentQueries:function(i,n,l){i&1&&(Q(l,n.stepItems,ve,4),Q(l,n.steps,k,4),Q(l,n.stepList,te,5)),i&2&&re(3)},hostVars:4,hostBindings:function(i,n){i&2&&(G("role","tablist")("id",n.id()),b(n.cx("root")))},inputs:{value:[1,"value"],linear:[1,"linear"],transitionOptions:[1,"transitionOptions"],motionOptions:[1,"motionOptions"]},outputs:{value:"valueChange"},features:[B([ue,{provide:We,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:J,decls:1,vars:0,template:function(i,n){i&1&&(W(),j(0))},dependencies:[D,R,N],encapsulation:2,changeDetection:0})}return t})(),Ke=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=xe({type:t});static \u0275inj=be({imports:[K,te,Ce,ne,ve,k,he,R,N,R,N]})}return t})();var vt=t=>({$implicit:t}),ht=(t,o,e)=>({"justify-end":t,"justify-between":o,"justify-start":e}),Ue=(t,o)=>o.value;function Ct(t,o){if(t&1&&(a(0,"p-step",2),se(1),p()),t&2){let e=o.$implicit;d("value",e.value),s(),ae(e.header)}}function bt(t,o){if(t&1&&(a(0,"p-step-list"),_e(1,Ct,2,2,"p-step",2,Ue),p()),t&2){let e=r();s(),ge(e.steps())}}function St(t,o){t&1&&X(0)}function xt(t,o){if(t&1){let e=C();a(0,"p-button",11),v("onClick",function(){u(e);let n=r(2).activateCallback,l=r().$implicit,x=r();return m(n(x.getPrevStep(l.value)))}),p()}}function yt(t,o){if(t&1){let e=C();a(0,"p-button",12),v("onClick",function(){u(e);let n=r(2).activateCallback,l=r().$implicit,x=r();return m(n(x.getNextStep(l.value)))}),p()}if(t&2){let e=r(3).$implicit;d("disabled",e.disableNext)}}function wt(t,o){if(t&1){let e=C();a(0,"p-button",13),v("onClick",function(){u(e);let n=r(4);return m(n.complete.emit())}),p()}if(t&2){let e=r(4);d("loading",e.loading())}}function Dt(t,o){if(t&1&&(a(0,"div",7),g(1,xt,1,0,"p-button",8),g(2,yt,1,1,"p-button",9)(3,wt,1,1,"p-button",10),p()),t&2){let e=r(2).$implicit,i=r();d("ngClass",Z(3,ht,i.isFirstStep(e.value),!i.isFirstStep(e.value)&&!i.isLastStep(e.value),i.isLastStep(e.value))),s(),f(i.isFirstStep(e.value)?-1:1),s(),f(i.isLastStep(e.value)?3:2)}}function Mt(t,o){if(t&1&&(a(0,"div",4)(1,"div",5),P(2,St,1,0,"ng-container",6),p(),g(3,Dt,4,7,"div",7),p()),t&2){let e=r().$implicit,i=r();s(2),d("ngTemplateOutlet",e.content)("ngTemplateOutletContext",we(3,vt,e)),s(),f(i.showNavButtons()?3:-1)}}function Tt(t,o){if(t&1&&(a(0,"p-step-panel",2),P(1,Mt,4,5,"ng-template",3),p()),t&2){let e=o.$implicit;d("value",e.value)}}var ie=class t{steps=_([]);currentStepValue=M(1);showNavButtons=_(!0);linearProgression=_(!1);containerClass=_("basis-[50rem]");showSteps=_(!0);stepChange=T();complete=T();nextStep=T();prevStep=T();loading=_(!1);isLastStep(o){return o===Math.max(...this.steps().map(e=>e.value))}isFirstStep(o){return o===Math.min(...this.steps().map(e=>e.value))}getNextStep(o){let e=this.steps().map(n=>n.value).sort((n,l)=>n-l),i=e.indexOf(o);return e[i+1]||o}getPrevStep(o){let e=this.steps().map(n=>n.value).sort((n,l)=>n-l),i=e.indexOf(o);return e[i-1]||o}goNext(){let o=this.getNextStep(this.currentStepValue());o!==this.currentStepValue()&&(this.currentStepValue.set(o),this.stepChange.emit(o),this.nextStep.emit(o))}goBack(){let o=this.getPrevStep(this.currentStepValue());o!==this.currentStepValue()&&(this.currentStepValue.set(o),this.stepChange.emit(o),this.prevStep.emit(o))}canFinish(){return this.isLastStep(this.currentStepValue())&&!(this.getCurrentStep()?.disableNext??!1)}getCurrentStep(){return this.steps().find(o=>o.value===this.currentStepValue())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-stepper"]],inputs:{steps:[1,"steps"],currentStepValue:[1,"currentStepValue"],showNavButtons:[1,"showNavButtons"],linearProgression:[1,"linearProgression"],containerClass:[1,"containerClass"],showSteps:[1,"showSteps"],loading:[1,"loading"]},outputs:{currentStepValue:"currentStepValueChange",stepChange:"stepChange",complete:"complete",nextStep:"nextStep",prevStep:"prevStep"},decls:6,vars:5,consts:[[1,"card","flex","justify-center"],[3,"value","linear"],[3,"value"],["pTemplate","content"],[1,"flex","flex-col"],[1,"min-h-48"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","pt-6",3,"ngClass"],["label","Back","severity","secondary","icon","pi pi-arrow-left"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"disabled"],["label","Finish","icon","pi pi-check","iconPos","right","severity","success",3,"loading"],["label","Back","severity","secondary","icon","pi pi-arrow-left",3,"onClick"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick","disabled"],["label","Finish","icon","pi pi-check","iconPos","right","severity","success",3,"onClick","loading"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"p-stepper",1),g(2,bt,3,0,"p-step-list"),a(3,"p-step-panels"),_e(4,Tt,2,1,"p-step-panel",2,Ue),p()()()),e&2&&(s(),b(i.containerClass()),d("value",i.currentStepValue())("linear",i.linearProgression()),s(),f(i.showSteps()?2:-1),s(2),ge(i.steps()))},dependencies:[D,De,ee,de,ce,H,Ke,K,te,Ce,ne,k],styles:["[_nghost-%COMP%]     .p-steps .p-steps-item.step-completed .p-menuitem-link .p-steps-number{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity, 1))}[_nghost-%COMP%]     .p-steps .p-steps-item.step-error .p-menuitem-link .p-steps-number{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}[_nghost-%COMP%]     .p-steps .p-steps-item.step-active .p-menuitem-link .p-steps-number{background-color:var(--color-primary-color)}[_nghost-%COMP%]     .stepper-numbered .p-steps-item:before{display:none}"]})};function Nt(t,o){if(t&1){let e=C();a(0,"p-button",8),v("onClick",function(){u(e);let n=r(3);return m(n.goBack())}),p()}}function kt(t,o){if(t&1){let e=C();a(0,"p-button",9),v("onClick",function(){u(e);let n=r(3);return m(n.goNext())}),p()}if(t&2){let e=r(3);d("disabled",!e.canGoNext())}}function Ft(t,o){if(t&1){let e=C();a(0,"p-button",10),v("onClick",function(){u(e);let n=r(3);return m(n.onComplete())}),p()}if(t&2){let e=r(3);d("disabled",!e.canFinish())("loading",e.loading())}}function Vt(t,o){if(t&1){let e=C();a(0,"div",3)(1,"p-button",4),v("onClick",function(){u(e);let n=r(2);return m(n.cancelWizard())}),p(),g(2,Nt,1,0,"p-button",5),g(3,kt,1,1,"p-button",6),g(4,Ft,1,2,"p-button",7),p()}if(t&2){let e=r(2);s(2),f(e.isFirstStep()?-1:2),s(),f(e.isLastStep()?-1:3),s(),f(e.isLastStep()?4:-1)}}function Et(t,o){if(t&1){let e=C();a(0,"div",1)(1,"app-stepper",2),v("stepChange",function(n){u(e);let l=r();return m(l.onStepChange(n))})("complete",function(){u(e);let n=r();return m(n.onStepComplete())}),p()(),g(2,Vt,5,3,"div",3)}if(t&2){let e,i=r();s(),d("steps",i.steps())("currentStepValue",i.currentStep())("linearProgression",i.linearProgression())("showNavButtons",!i.useWizardButtonsOnly())("showSteps",i.showSteps())("loading",i.loading()),s(),f(i.showFooterButtons()&&!((e=i.getCurrentStep())!=null&&e.hideDefaultFooter)?2:-1)}}function Pt(t,o){if(t&1){let e=C();a(0,"p-button",8),v("onClick",function(){u(e);let n=r(4);return m(n.goBack())}),p()}}function Bt(t,o){if(t&1){let e=C();a(0,"p-button",9),v("onClick",function(){u(e);let n=r(4);return m(n.goNext())}),p()}if(t&2){let e=r(4);d("disabled",!e.canGoNext())}}function It(t,o){if(t&1){let e=C();a(0,"p-button",10),v("onClick",function(){u(e);let n=r(4);return m(n.onComplete())}),p()}if(t&2){let e=r(4);d("disabled",!e.canFinish())("loading",e.loading())}}function zt(t,o){if(t&1){let e=C();a(0,"div",13)(1,"p-button",4),v("onClick",function(){u(e);let n=r(3);return m(n.cancelWizard())}),p(),g(2,Pt,1,0,"p-button",5),g(3,Bt,1,1,"p-button",6),g(4,It,1,2,"p-button",7),p()}if(t&2){let e=r(3);s(2),f(e.isFirstStep()?-1:2),s(),f(e.isLastStep()?-1:3),s(),f(e.isLastStep()?4:-1)}}function Ot(t,o){if(t&1&&g(0,zt,5,3,"div",13),t&2){let e,i=r(2);f(i.showFooterButtons()&&!((e=i.getCurrentStep())!=null&&e.hideDefaultFooter)?0:-1)}}function At(t,o){if(t&1){let e=C();a(0,"p-dialog",11),v("onHide",function(){u(e);let n=r();return m(n.hideDialog())})("visibleChange",function(){u(e);let n=r();return m(n.hideDialog())}),a(1,"div",1)(2,"app-stepper",2),v("stepChange",function(n){u(e);let l=r();return m(l.onStepChange(n))})("complete",function(){u(e);let n=r();return m(n.onStepComplete())}),p()(),P(3,Ot,1,1,"ng-template",12),p()}if(t&2){let e=r();d("visible",e.visible())("header",e.header())("modal",!0)("draggable",!1)("resizable",!1)("closeOnEscape",e.closeOnEscape()),s(2),d("steps",e.steps())("currentStepValue",e.currentStep())("linearProgression",e.linearProgression())("showNavButtons",!e.useWizardButtonsOnly())("showSteps",e.showSteps())("loading",e.loading())}}var Xe=class t{stepper;steps=_([]);visible=M(!1);header=_("Wizard");linearProgression=_(!0);showFooterButtons=_(!0);closeOnEscape=_(!0);useWizardButtonsOnly=_(!1);showSteps=_(!0);contentOnly=_(!1);loading=M(!1);visibleChange=T();onCancel=T();complete=T();stepChange=T();currentStep=M(1);hideDialog(){this.visible.set(!1),this.visibleChange.emit(!1)}cancelWizard(){this.onCancel.emit(),this.hideDialog()}onComplete(){if(this.steps().length===0){console.warn("No steps defined in the wizard");return}this.complete.emit(this.steps()),this.hideDialog()}test(){this.loading.set(!0)}onStepComplete(){this.onComplete()}onStepChange(o){this.currentStep.set(o),this.stepChange.emit(o)}isLastStep(){return this.steps().length===0?!0:this.currentStep()===Math.max(...this.steps().map(o=>o.value))}isFirstStep(){return this.steps().length===0?!0:this.currentStep()===Math.min(...this.steps().map(o=>o.value))}async goNext(){let o=this.steps().find(e=>e.value===this.currentStep());if(o?.validate){let e=o.validate();e instanceof Promise?await e.then(i=>{i&&this.stepper?.goNext()}):e&&this.stepper?.goNext()}else this.stepper?.goNext()}canGoNext(){let o=this.steps().find(e=>e.value===this.currentStep());return!this.isLastStep()&&!(o?.disableNext??!1)}goBack(){this.stepper?.goBack()}canFinish(){return this.isLastStep()&&(this.stepper?.canFinish()??!1)}getCurrentStep(){return this.steps().find(o=>o.value===this.currentStep())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-wizard"]],viewQuery:function(e,i){if(e&1&&ye(ie,5),e&2){let n;$(n=L())&&(i.stepper=n.first)}},inputs:{steps:[1,"steps"],visible:[1,"visible"],header:[1,"header"],linearProgression:[1,"linearProgression"],showFooterButtons:[1,"showFooterButtons"],closeOnEscape:[1,"closeOnEscape"],useWizardButtonsOnly:[1,"useWizardButtonsOnly"],showSteps:[1,"showSteps"],contentOnly:[1,"contentOnly"],loading:[1,"loading"],currentStep:[1,"currentStep"]},outputs:{visible:"visibleChange",loading:"loadingChange",visibleChange:"visibleChange",onCancel:"onCancel",complete:"complete",stepChange:"stepChange",currentStep:"currentStepChange"},decls:2,vars:1,consts:[["styleClass","wizard-dialog",3,"visible","header","modal","draggable","resizable","closeOnEscape"],[1,"wizard-content"],[3,"stepChange","complete","steps","currentStepValue","linearProgression","showNavButtons","showSteps","loading"],[1,"flex","justify-end","gap-2","w-full","mt-3"],["label","Cancel","icon","pi pi-times","severity","secondary",3,"onClick"],["label","Back","icon","pi pi-arrow-left","severity","secondary"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"disabled"],["label","Finish","icon","pi pi-check","severity","primary",3,"disabled","loading"],["label","Back","icon","pi pi-arrow-left","severity","secondary",3,"onClick"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick","disabled"],["label","Finish","icon","pi pi-check","severity","primary",3,"onClick","disabled","loading"],["styleClass","wizard-dialog",3,"onHide","visibleChange","visible","header","modal","draggable","resizable","closeOnEscape"],["pTemplate","footer"],[1,"flex","justify-end","gap-2","w-full"]],template:function(e,i){e&1&&g(0,Et,3,7)(1,At,4,12,"p-dialog",0),e&2&&f(i.contentOnly()?0:1)},dependencies:[D,Ee,Ve,H,de,ce,ie],styles:["[_nghost-%COMP%]     .wizard-dialog .wizard-content{height:auto;max-height:90vh;width:70vw;min-width:400px;max-width:800px;overflow:hidden}[_nghost-%COMP%]     .p-dialog-header{padding:.75rem 1rem}[_nghost-%COMP%]     .p-dialog-footer{padding:.75rem 1rem}.wizard-content[_ngcontent-%COMP%]{height:auto;max-height:90vh;min-width:400px;max-width:800px;overflow:hidden}"]})};export{Xe as a};
