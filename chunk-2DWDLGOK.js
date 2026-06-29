import{d as Oe,e as Pe}from"./chunk-3IIPTDB3.js";import{b as Fe,d as ke,h as be}from"./chunk-VSUOX63F.js";import{l as me,m as ge}from"./chunk-2EGH7OFT.js";import{Da as q,Fa as A,Ga as z,Ha as C,Ia as E,fa as Ve,oa as Be,w as Ee,ya as Q,za as U}from"./chunk-XAMKMYN3.js";import{c as ue}from"./chunk-MUTFG37F.js";import{e as Me,l as ee,u as D}from"./chunk-Q6W5A3C3.js";import{$b as Y,Aa as fe,Ca as x,Ib as G,Kc as I,Mb as _,Mc as De,Nb as f,Oc as Z,Qb as ve,Rb as Ce,Sb as s,Tb as p,Ub as l,Vb as re,Vc as w,Wc as N,aa as W,ab as a,ac as h,ba as L,ca as we,cd as S,ea as F,ec as v,ga as c,gc as r,gd as V,hc as j,hd as g,ic as H,jc as he,jd as de,kc as Te,kd as ce,lc as $,ld as M,ma as u,mc as R,na as m,nc as ae,pc as se,qb as T,rb as Ne,ub as k,uc as b,vb as O,vc as pe,wb as P,wc as le,ya as oe}from"./chunk-5SRT5K2O.js";import{a as J}from"./chunk-VB56BUGO.js";var Ie=`
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
`;var K=["*"],Xe=["content"],Je=(t,o,e)=>({activateCallback:t,value:o,active:e});function nt(t,o){t&1&&re(0,"p-stepper-separator")}function it(t,o){if(t&1){let e=h();p(0,"button",0),v("click",function(){u(e);let n=r();return m(n.onStepClick())}),p(1,"span",1),pe(2),l(),p(3,"span",1),H(4),l()(),_(5,nt,1,0,"p-stepper-separator")}if(t&2){let e=r();b(e.cx("header")),s("pBind",e.ptm("header"))("tabindex",e.isStepDisabled()?-1:void 0)("disabled",e.isStepDisabled()),G("id",e.id())("role","tab")("aria-controls",e.ariaControls()),a(),b(e.cx("number")),s("pBind",e.ptm("number")),a(),le(e.value()),a(),b(e.cx("title")),s("pBind",e.ptm("title")),a(2),f(e.isSeparatorVisible()?5:-1)}}function ot(t,o){t&1&&Y(0)}function rt(t,o){t&1&&re(0,"p-stepper-separator")}function at(t,o){if(t&1&&(P(0,ot,1,0,"ng-container",2),_(1,rt,1,0,"p-stepper-separator")),t&2){let e=r();s("ngTemplateOutlet",e.content||e._contentTemplate)("ngTemplateOutletContext",Z(3,Je,e.onStepClick.bind(e),e.value(),e.active())),a(),f(e.isSeparatorVisible()?1:-1)}}function st(t,o){t&1&&re(0,"p-stepper-separator")}function pt(t,o){t&1&&Y(0)}var lt={root:({instance:t})=>["p-stepitem",{"p-stepitem-active":t.isActive()}]},Ae=(()=>{class t extends q{name="stepitem";classes=lt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var dt={root:"p-steplist"},ze=(()=>{class t extends q{name="steplist";classes=dt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var ct={root:"p-steppanels"},We=(()=>{class t extends q{name="steppanel";classes=ct;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var ut={root:({instance:t})=>["p-steppanel",{"p-steppanel-active":t.isVertical()&&t.active()}],contentWrapper:"p-steppanel-content-wrapper",content:"p-steppanel-content"},Le=(()=>{class t extends q{name="steppanel";classes=ut;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var mt=`
${Ie}

.p-steppanel .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`,gt={root:({instance:t})=>["p-stepper p-component",{"p-readonly":t.linear()}],separator:"p-stepper-separator"},_e=(()=>{class t extends q{name="stepper";style=mt;classes=gt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var _t={root:({instance:t})=>["p-step",{"p-step-active":t.active(),"p-disabled":t.isStepDisabled()}],header:"p-step-header",number:"p-step-number",title:"p-step-title"},je=(()=>{class t extends q{name="step";classes=_t;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var He=new F("STEPPER_INSTANCE"),$e=new F("STEPLIST_INSTANCE"),Re=new F("STEPITEM_INSTANCE"),Qe=new F("STEP_INSTANCE"),Ue=new F("STEPPANEL_INSTANCE"),qe=new F("STEPPANELS_INSTANCE"),Ge=new F("STEPPERSEPARATOR_INSTANCE"),te=(()=>{class t extends z{$pcStepList=c($e,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(C,{self:!0});componentName="StepList";steps=ce(W(()=>B));_componentStyle=c(ze);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-step-list"]],contentQueries:function(i,n,d){i&1&&ae(d,n.steps,B,4),i&2&&se()},hostVars:2,hostBindings:function(i,n){i&2&&b(n.cx("root"))},features:[I([ze,{provide:$e,useExisting:t},{provide:A,useExisting:t}]),k([C]),O],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){i&1&&(j(),H(0))},dependencies:[D,E],encapsulation:2,changeDetection:0})}return t})(),ye=(()=>{class t extends z{$pcStepperSeparator=c(Ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(C,{self:!0});componentName="StepperSeparator";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=c(_e);static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-stepper-separator"]],hostVars:2,hostBindings:function(i,n){i&2&&b(n.cx("separator"))},features:[I([_e,{provide:Ge,useExisting:t},{provide:A,useExisting:t}]),k([C]),O],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){i&1&&(j(),H(0))},dependencies:[D,E],encapsulation:2,changeDetection:0})}return t})(),Se=(()=>{class t extends z{$pcStepItem=c(Re,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(C,{self:!0});componentName="StepItem";_componentStyle=c(Ae);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}pcStepper=c(W(()=>X));value=M();isActive=S(()=>this.pcStepper.value()===this.value());step=de(W(()=>B));stepPanel=de(W(()=>ne));constructor(){super(),fe(()=>{this.step().value.set(this.value())}),fe(()=>{this.stepPanel().value.set(this.value())})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["p-step-item"]],contentQueries:function(i,n,d){i&1&&ae(d,n.step,B,5)(d,n.stepPanel,ne,5),i&2&&se(2)},hostVars:3,hostBindings:function(i,n){i&2&&(G("data-p-active",n.isActive()),b(n.cx("root")))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[I([Ae,{provide:Re,useExisting:t},{provide:A,useExisting:t}]),k([C]),O],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){i&1&&(j(),H(0))},dependencies:[D,E],encapsulation:2,changeDetection:0})}return t})(),B=(()=>{class t extends z{$pcStep=c(Qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(C,{self:!0});componentName="Step";pcStepper=c(W(()=>X));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=M();disabled=g(!1,{transform:e=>be(e)});active=S(()=>this.pcStepper.isStepActive(this.value()));isStepDisabled=S(()=>!this.active()&&(this.pcStepper.linear()||this.disabled()));id=S(()=>`${this.pcStepper.id()}_step_${this.value()}`);ariaControls=S(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isSeparatorVisible=S(()=>{if(this.pcStepper.stepList()){let e=this.pcStepper.stepList().steps(),i=e.indexOf(this),n=e.length;return i!==n-1}else return!1});content;templates;_contentTemplate;_componentStyle=c(je);onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"&&(this._contentTemplate=e.template)})}onStepClick(){this.pcStepper.updateValue(this.value())}static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-step"]],contentQueries:function(i,n,d){if(i&1&&he(d,Xe,4)(d,Q,4),i&2){let y;$(y=R())&&(n.content=y.first),$(y=R())&&(n.templates=y)}},hostVars:6,hostBindings:function(i,n){i&2&&(G("aria-current",n.active()?"step":void 0)("role","presentation")("data-p-active",n.active())("data-p-disabled",n.isStepDisabled()),b(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[I([je,{provide:Qe,useExisting:t},{provide:A,useExisting:t}]),k([C]),O],ngContentSelectors:K,decls:2,vars:1,consts:[["type","button",3,"click","pBind","tabindex","disabled"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(j(),_(0,it,6,16)(1,at,2,7)),i&2&&f(!n.content&&!n._contentTemplate?0:1)},dependencies:[D,ee,ye,U,E,C],encapsulation:2,changeDetection:0})}return t})(),ne=(()=>{class t extends z{$pcStepPanel=c(Ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(C,{self:!0});componentName="StepPanel";pcStepper=c(W(()=>X));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=M(void 0);active=S(()=>this.pcStepper.value()===this.value());ariaControls=S(()=>`${this.pcStepper.id()}_step_${this.value()}`);id=S(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isVertical=S(()=>this.pcStepper.stepItems().length>0);isSeparatorVisible=S(()=>{if(this.pcStepper.stepItems()){let e=this.pcStepper.stepItems().length,i=Ee(this.pcStepper.el.nativeElement,'[data-pc-name="steppanel"]');return Ve(this.el.nativeElement,i)!==e-1}});computedMotionOptions=S(()=>J(J({},this.ptm("motion")),this.pcStepper.computedMotionOptions()));contentTemplate;templates;_contentTemplate;_componentStyle=c(Le);onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"&&(this._contentTemplate=e.template)})}updateValue(e){this.pcStepper.updateValue(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-step-panel"]],contentQueries:function(i,n,d){if(i&1&&he(d,Xe,5)(d,Q,4),i&2){let y;$(y=R())&&(n.contentTemplate=y.first),$(y=R())&&(n.templates=y)}},hostVars:7,hostBindings:function(i,n){i&2&&(G("role","tabpanel")("aria-controls",n.ariaControls())("id",n.id())("data-p-active",n.active())("data-pc-name","steppanel"),b(n.cx("root")))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[I([Le,{provide:Ue,useExisting:t},{provide:A,useExisting:t}]),k([C]),O],decls:5,vars:16,consts:[["name","p-collapsible",3,"visible","disabled","options"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(p(0,"p-motion",0)(1,"div",1),_(2,st,1,0,"p-stepper-separator"),p(3,"div",1),P(4,pt,1,0,"ng-container",2),l()()()),i&2&&(s("visible",n.active())("disabled",!n.isVertical())("options",n.computedMotionOptions()),a(),b(n.cx("contentWrapper")),s("pBind",n.ptm("contentWrapper")),a(),f(n.isSeparatorVisible()?2:-1),a(),b(n.cx("content")),s("pBind",n.ptm("content")),a(),s("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",Z(12,Je,n.updateValue.bind(n),n.value(),n.active())))},dependencies:[D,ee,ye,U,E,C,ke,Fe],encapsulation:2,changeDetection:0})}return t})(),xe=(()=>{class t extends z{$pcStepPanels=c(qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(C,{self:!0});componentName="StepPanels";_componentStyle=c(We);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-step-panels"]],hostVars:2,hostBindings:function(i,n){i&2&&b(n.cx("root"))},features:[I([We,{provide:qe,useExisting:t},{provide:A,useExisting:t}]),k([C]),O],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){i&1&&(j(),H(0))},dependencies:[D,U,E],encapsulation:2,changeDetection:0})}return t})(),X=(()=>{class t extends z{componentName="Stepper";$pcStepper=c(He,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(C,{self:!0});_componentStyle=c(_e);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=M(void 0);linear=g(!1,{transform:e=>be(e)});transitionOptions=g("400ms cubic-bezier(0.86, 0, 0.07, 1)");motionOptions=g(void 0);computedMotionOptions=S(()=>J(J({},this.ptm("motion")),this.motionOptions()));id=oe(Be("pn_id_"));stepItems=ce(Se);steps=ce(B);stepList=de(te);updateValue(e){this.value.set(e)}isStepActive(e){return this.value()===e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-stepper"]],contentQueries:function(i,n,d){i&1&&ae(d,n.stepItems,Se,4)(d,n.steps,B,4)(d,n.stepList,te,5),i&2&&se(3)},hostVars:4,hostBindings:function(i,n){i&2&&(G("role","tablist")("id",n.id()),b(n.cx("root")))},inputs:{value:[1,"value"],linear:[1,"linear"],transitionOptions:[1,"transitionOptions"],motionOptions:[1,"motionOptions"]},outputs:{value:"valueChange"},features:[I([_e,{provide:He,useExisting:t},{provide:A,useExisting:t}]),k([C]),O],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){i&1&&(j(),H(0))},dependencies:[D,U,E],encapsulation:2,changeDetection:0})}return t})(),Ye=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ne({type:t});static \u0275inj=we({imports:[X,te,xe,ne,Se,B,ye,U,E,U,E]})}return t})();var bt=t=>({$implicit:t}),St=(t,o,e)=>({"justify-end":t,"justify-between":o,"justify-start":e}),Ze=(t,o)=>o.value;function yt(t,o){if(t&1&&(p(0,"p-step",2),pe(1),l()),t&2){let e=o.$implicit;s("value",e.value),a(),le(e.header)}}function xt(t,o){if(t&1&&(p(0,"p-step-list"),ve(1,yt,2,2,"p-step",2,Ze),l()),t&2){let e=r();a(),Ce(e.steps())}}function wt(t,o){t&1&&Y(0)}function Nt(t,o){if(t&1){let e=h();p(0,"p-button",11),w(1,"translate"),v("onClick",function(){u(e);let n=r(2).activateCallback,d=r().$implicit,y=r();return m(n(y.getPrevStep(d.value)))}),l()}t&2&&s("label",N(1,1,"SHARED.COMMON.BUTTONS.BACK"))}function Tt(t,o){if(t&1){let e=h();p(0,"p-button",12),w(1,"translate"),v("onClick",function(){u(e);let n=r(2).activateCallback,d=r().$implicit,y=r();return m(n(y.getNextStep(d.value)))}),l()}if(t&2){let e=r(3).$implicit;s("label",N(1,2,"SHARED.COMMON.BUTTONS.NEXT"))("disabled",e.disableNext)}}function Dt(t,o){if(t&1){let e=h();p(0,"p-button",13),w(1,"translate"),v("onClick",function(){u(e);let n=r(4);return m(n.complete.emit())}),l()}if(t&2){let e=r(4);s("label",N(1,2,"SHARED.COMMON.BUTTONS.FINISH"))("loading",e.loading())}}function Mt(t,o){if(t&1&&(p(0,"div",7),_(1,Nt,2,3,"p-button",8),_(2,Tt,2,4,"p-button",9)(3,Dt,2,4,"p-button",10),l()),t&2){let e=r(2).$implicit,i=r();s("ngClass",Z(3,St,i.isFirstStep(e.value),!i.isFirstStep(e.value)&&!i.isLastStep(e.value),i.isLastStep(e.value))),a(),f(i.isFirstStep(e.value)?-1:1),a(),f(i.isLastStep(e.value)?3:2)}}function Et(t,o){if(t&1&&(p(0,"div",4)(1,"div",5),P(2,wt,1,0,"ng-container",6),l(),_(3,Mt,4,7,"div",7),l()),t&2){let e=r().$implicit,i=r();a(2),s("ngTemplateOutlet",e.content)("ngTemplateOutletContext",De(3,bt,e)),a(),f(i.showNavButtons()?3:-1)}}function Vt(t,o){if(t&1&&(p(0,"p-step-panel",2),P(1,Et,4,5,"ng-template",3),l()),t&2){let e=o.$implicit;s("value",e.value)}}var ie=class t{steps=g([]);currentStepValue=M(1);showNavButtons=g(!0);linearProgression=g(!1);containerClass=g("basis-[50rem]");showSteps=g(!0);stepChange=V();complete=V();nextStep=V();prevStep=V();loading=g(!1);isLastStep(o){return o===Math.max(...this.steps().map(e=>e.value))}isFirstStep(o){return o===Math.min(...this.steps().map(e=>e.value))}getNextStep(o){let e=this.steps().map(n=>n.value).sort((n,d)=>n-d),i=e.indexOf(o);return e[i+1]||o}getPrevStep(o){let e=this.steps().map(n=>n.value).sort((n,d)=>n-d),i=e.indexOf(o);return e[i-1]||o}goNext(){let o=this.getNextStep(this.currentStepValue());o!==this.currentStepValue()&&(this.currentStepValue.set(o),this.stepChange.emit(o),this.nextStep.emit(o))}goBack(){let o=this.getPrevStep(this.currentStepValue());o!==this.currentStepValue()&&(this.currentStepValue.set(o),this.stepChange.emit(o),this.prevStep.emit(o))}canFinish(){return this.isLastStep(this.currentStepValue())&&!(this.getCurrentStep()?.disableNext??!1)}getCurrentStep(){return this.steps().find(o=>o.value===this.currentStepValue())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["app-stepper"]],inputs:{steps:[1,"steps"],currentStepValue:[1,"currentStepValue"],showNavButtons:[1,"showNavButtons"],linearProgression:[1,"linearProgression"],containerClass:[1,"containerClass"],showSteps:[1,"showSteps"],loading:[1,"loading"]},outputs:{currentStepValue:"currentStepValueChange",stepChange:"stepChange",complete:"complete",nextStep:"nextStep",prevStep:"prevStep"},decls:6,vars:5,consts:[[1,"card","flex","justify-center"],[3,"value","linear"],[3,"value"],["pTemplate","content"],[1,"flex","flex-col"],[1,"min-h-48"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","pt-6",3,"ngClass"],["severity","secondary","icon","pi pi-arrow-left",3,"label"],["icon","pi pi-arrow-right","iconPos","right",3,"label","disabled"],["icon","pi pi-check","iconPos","right","severity","success",3,"label","loading"],["severity","secondary","icon","pi pi-arrow-left",3,"onClick","label"],["icon","pi pi-arrow-right","iconPos","right",3,"onClick","label","disabled"],["icon","pi pi-check","iconPos","right","severity","success",3,"onClick","label","loading"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"p-stepper",1),_(2,xt,3,0,"p-step-list"),p(3,"p-step-panels"),ve(4,Vt,2,1,"p-step-panel",2,Ze),l()()()),e&2&&(a(),b(i.containerClass()),s("value",i.currentStepValue())("linear",i.linearProgression()),a(),f(i.showSteps()?2:-1),a(2),Ce(i.steps()))},dependencies:[D,Me,ee,ge,me,Q,Ye,X,te,xe,ne,B,ue],styles:["[_nghost-%COMP%]     .p-steps .p-steps-item.step-completed .p-menuitem-link .p-steps-number{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity, 1))}[_nghost-%COMP%]     .p-steps .p-steps-item.step-error .p-menuitem-link .p-steps-number{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}[_nghost-%COMP%]     .p-steps .p-steps-item.step-active .p-menuitem-link .p-steps-number{background-color:var(--color-primary-color)}[_nghost-%COMP%]     .stepper-numbered .p-steps-item:before{display:none}"]})};function Bt(t,o){if(t&1){let e=h();p(0,"p-button",8),w(1,"translate"),v("onClick",function(){u(e);let n=r(3);return m(n.goBack())}),l()}t&2&&s("label",N(1,1,"SHARED.COMMON.BUTTONS.BACK"))}function Ft(t,o){if(t&1){let e=h();p(0,"p-button",9),w(1,"translate"),v("onClick",function(){u(e);let n=r(3);return m(n.goNext())}),l()}if(t&2){let e=r(3);s("label",N(1,3,"SHARED.COMMON.BUTTONS.NEXT"))("disabled",!e.canGoNext())("loading",e.isValidating())}}function kt(t,o){if(t&1){let e=h();p(0,"p-button",10),w(1,"translate"),v("onClick",function(){u(e);let n=r(3);return m(n.onComplete())}),l()}if(t&2){let e=r(3);s("label",N(1,3,"SHARED.COMMON.BUTTONS.FINISH"))("disabled",!e.canFinish())("loading",e.loading())}}function Ot(t,o){if(t&1){let e=h();p(0,"div",3)(1,"p-button",4),w(2,"translate"),v("onClick",function(){u(e);let n=r(2);return m(n.cancelWizard())}),l(),_(3,Bt,2,3,"p-button",5),_(4,Ft,2,5,"p-button",6),_(5,kt,2,5,"p-button",7),l()}if(t&2){let e=r(2);a(),s("label",N(2,4,"SHARED.COMMON.BUTTONS.CANCEL")),a(2),f(e.isFirstStep()?-1:3),a(),f(e.isLastStep()?-1:4),a(),f(e.isLastStep()?5:-1)}}function Pt(t,o){if(t&1){let e=h();p(0,"div",1)(1,"app-stepper",2),v("stepChange",function(n){u(e);let d=r();return m(d.onStepChange(n))})("complete",function(){u(e);let n=r();return m(n.onStepComplete())}),l()(),_(2,Ot,6,6,"div",3)}if(t&2){let e,i=r();a(),s("steps",i.steps())("currentStepValue",i.currentStep())("linearProgression",i.linearProgression())("showNavButtons",!i.useWizardButtonsOnly())("showSteps",i.showSteps())("loading",i.loading()),a(),f(i.showFooterButtons()&&!((e=i.getCurrentStep())!=null&&e.hideDefaultFooter)?2:-1)}}function It(t,o){if(t&1){let e=h();p(0,"p-button",8),w(1,"translate"),v("onClick",function(){u(e);let n=r(4);return m(n.goBack())}),l()}t&2&&s("label",N(1,1,"SHARED.COMMON.BUTTONS.BACK"))}function At(t,o){if(t&1){let e=h();p(0,"p-button",15),w(1,"translate"),v("onClick",function(){u(e);let n=r(4);return m(n.goNext())}),l()}if(t&2){let e=r(4);s("label",N(1,2,"SHARED.COMMON.BUTTONS.NEXT"))("disabled",!e.canGoNext())}}function zt(t,o){if(t&1){let e=h();p(0,"p-button",10),w(1,"translate"),v("onClick",function(){u(e);let n=r(4);return m(n.onComplete())}),l()}if(t&2){let e=r(4);s("label",N(1,3,"SHARED.COMMON.BUTTONS.FINISH"))("disabled",!e.canFinish())("loading",e.loading())}}function Wt(t,o){if(t&1){let e=h();p(0,"div",13)(1,"p-button",4),w(2,"translate"),v("onClick",function(){u(e);let n=r(3);return m(n.cancelWizard())}),l(),_(3,It,2,3,"p-button",5),_(4,At,2,4,"p-button",14),_(5,zt,2,5,"p-button",7),l()}if(t&2){let e=r(3);a(),s("label",N(2,4,"SHARED.COMMON.BUTTONS.CANCEL")),a(2),f(e.isFirstStep()?-1:3),a(),f(e.isLastStep()?-1:4),a(),f(e.isLastStep()?5:-1)}}function Lt(t,o){if(t&1&&_(0,Wt,6,6,"div",13),t&2){let e,i=r(2);f(i.showFooterButtons()&&!((e=i.getCurrentStep())!=null&&e.hideDefaultFooter)?0:-1)}}function jt(t,o){if(t&1){let e=h();p(0,"p-dialog",11),v("onHide",function(){u(e);let n=r();return m(n.hideDialog())})("visibleChange",function(){u(e);let n=r();return m(n.hideDialog())}),p(1,"div",1)(2,"app-stepper",2),v("stepChange",function(n){u(e);let d=r();return m(d.onStepChange(n))})("complete",function(){u(e);let n=r();return m(n.onStepComplete())}),l()(),P(3,Lt,1,1,"ng-template",12),l()}if(t&2){let e=r();s("visible",e.visible())("header",e.header())("modal",!0)("draggable",!1)("resizable",!1)("closeOnEscape",e.closeOnEscape()),a(2),s("steps",e.steps())("currentStepValue",e.currentStep())("linearProgression",e.linearProgression())("showNavButtons",!e.useWizardButtonsOnly())("showSteps",e.showSteps())("loading",e.loading())}}var et=class t{stepper;steps=g([]);visible=M(!1);header=g("Wizard");linearProgression=g(!0);showFooterButtons=g(!0);closeOnEscape=g(!0);useWizardButtonsOnly=g(!1);showSteps=g(!0);contentOnly=g(!1);loading=M(!1);onCancel=V();complete=V();stepChange=V();currentStep=M(1);isValidating=oe(!1);hideDialog(){this.visible.set(!1)}cancelWizard(){this.onCancel.emit(),this.hideDialog()}onComplete(){if(this.steps().length===0){console.warn("No steps defined in the wizard");return}this.complete.emit(this.steps()),this.hideDialog()}test(){this.loading.set(!0)}onStepComplete(){this.onComplete()}onStepChange(o){this.currentStep.set(o),this.stepChange.emit(o)}isLastStep(){return this.steps().length===0?!0:this.currentStep()===Math.max(...this.steps().map(o=>o.value))}isFirstStep(){return this.steps().length===0?!0:this.currentStep()===Math.min(...this.steps().map(o=>o.value))}async goNext(){let o=this.steps().find(e=>e.value===this.currentStep());if(o?.validate){this.isValidating.set(!0);try{let e=o.validate();(e instanceof Promise?await e:e)&&this.stepper?.goNext()}finally{this.isValidating.set(!1)}}else this.stepper?.goNext()}canGoNext(){let o=this.steps().find(e=>e.value===this.currentStep());return!this.isLastStep()&&!(o?.disableNext??!1)}goBack(){this.stepper?.goBack()}canFinish(){return this.isLastStep()&&(this.stepper?.canFinish()??!1)}getCurrentStep(){return this.steps().find(o=>o.value===this.currentStep())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["app-wizard"]],viewQuery:function(e,i){if(e&1&&Te(ie,5),e&2){let n;$(n=R())&&(i.stepper=n.first)}},inputs:{steps:[1,"steps"],visible:[1,"visible"],header:[1,"header"],linearProgression:[1,"linearProgression"],showFooterButtons:[1,"showFooterButtons"],closeOnEscape:[1,"closeOnEscape"],useWizardButtonsOnly:[1,"useWizardButtonsOnly"],showSteps:[1,"showSteps"],contentOnly:[1,"contentOnly"],loading:[1,"loading"],currentStep:[1,"currentStep"]},outputs:{visible:"visibleChange",loading:"loadingChange",onCancel:"onCancel",complete:"complete",stepChange:"stepChange",currentStep:"currentStepChange"},decls:2,vars:1,consts:[["styleClass","wizard-dialog",3,"visible","header","modal","draggable","resizable","closeOnEscape"],[1,"wizard-content"],[3,"stepChange","complete","steps","currentStepValue","linearProgression","showNavButtons","showSteps","loading"],[1,"flex","justify-end","gap-2","w-full","mt-3"],["icon","pi pi-times","severity","secondary",3,"onClick","label"],["icon","pi pi-arrow-left","severity","secondary",3,"label"],["icon","pi pi-arrow-right","iconPos","right",3,"label","disabled","loading"],["icon","pi pi-check","severity","primary",3,"label","disabled","loading"],["icon","pi pi-arrow-left","severity","secondary",3,"onClick","label"],["icon","pi pi-arrow-right","iconPos","right",3,"onClick","label","disabled","loading"],["icon","pi pi-check","severity","primary",3,"onClick","label","disabled","loading"],["styleClass","wizard-dialog",3,"onHide","visibleChange","visible","header","modal","draggable","resizable","closeOnEscape"],["pTemplate","footer"],[1,"flex","justify-end","gap-2","w-full"],["icon","pi pi-arrow-right","iconPos","right",3,"label","disabled"],["icon","pi pi-arrow-right","iconPos","right",3,"onClick","label","disabled"]],template:function(e,i){e&1&&_(0,Pt,3,7)(1,jt,4,12,"p-dialog",0),e&2&&f(i.contentOnly()?0:1)},dependencies:[D,Pe,Oe,Q,ge,me,ie,ue],styles:["[_nghost-%COMP%]     .wizard-dialog .wizard-content{height:auto;max-height:90vh;min-height:400px;width:70vw;min-width:400px;max-width:800px;overflow:hidden}[_nghost-%COMP%]     .p-dialog-header{padding:.75rem 1rem}[_nghost-%COMP%]     .p-dialog-footer{padding:.75rem 1rem}.wizard-content[_ngcontent-%COMP%]{height:auto;max-height:90vh;min-height:400px;min-width:400px;max-width:800px;overflow:hidden}"]})};export{et as a};
