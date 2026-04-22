import{d as Ve,e as Ee}from"./chunk-YK3FD2GD.js";import{j as ke,l as Fe,p as fe}from"./chunk-4AZSEV44.js";import{l as le,m as ce}from"./chunk-AEJLWDB4.js";import{Da as R,Fa as I,Ga as z,Ha as h,Ia as T,fa as Me,oa as Te,w as Ne,ya as Q,za as H}from"./chunk-VYLNIG6I.js";import{e as De,l as Y,u as D}from"./chunk-RFJ33KK6.js";import{$b as v,Db as q,Fc as B,Hb as g,Hc as we,Ib as f,Jc as X,Lb as me,Mb as _e,Nb as d,Ob as s,Pb as p,Qb as ne,Wb as U,Xb as C,Y as O,Ya as a,Z as A,Zc as S,_ as be,aa as F,bc as r,bd as M,ca as c,cc as W,cd as _,dc as j,ec as ge,ed as se,fc as xe,fd as pe,gc as L,gd as N,hc as $,ia as u,ic as ie,ja as m,kc as oe,mb as w,nb as ye,pc as b,qb as V,qc as re,rb as E,rc as ae,sb as P,ua as Se,wa as ue,ya as x}from"./chunk-Z5Z2PDTN.js";import{a as K}from"./chunk-VB56BUGO.js";var Pe=`
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
`;var G=["*"],Ge=["content"],Je=(t,o,e)=>({activateCallback:t,value:o,active:e});function Ze(t,o){t&1&&ne(0,"p-stepper-separator")}function et(t,o){if(t&1){let e=C();s(0,"button",0),v("click",function(){u(e);let n=r();return m(n.onStepClick())}),s(1,"span",1),re(2),p(),s(3,"span",1),j(4),p()(),g(5,Ze,1,0,"p-stepper-separator")}if(t&2){let e=r();b(e.cx("header")),d("pBind",e.ptm("header"))("tabindex",e.isStepDisabled()?-1:void 0)("disabled",e.isStepDisabled()),q("id",e.id())("role","tab")("aria-controls",e.ariaControls()),a(),b(e.cx("number")),d("pBind",e.ptm("number")),a(),ae(e.value()),a(),b(e.cx("title")),d("pBind",e.ptm("title")),a(2),f(e.isSeparatorVisible()?5:-1)}}function tt(t,o){t&1&&U(0)}function nt(t,o){t&1&&ne(0,"p-stepper-separator")}function it(t,o){if(t&1&&(P(0,tt,1,0,"ng-container",2),g(1,nt,1,0,"p-stepper-separator")),t&2){let e=r();d("ngTemplateOutlet",e.content||e._contentTemplate)("ngTemplateOutletContext",X(3,Je,e.onStepClick.bind(e),e.value(),e.active())),a(),f(e.isSeparatorVisible()?1:-1)}}function ot(t,o){t&1&&ne(0,"p-stepper-separator")}function rt(t,o){t&1&&U(0)}var at={root:({instance:t})=>["p-stepitem",{"p-stepitem-active":t.isActive()}]},Be=(()=>{class t extends R{name="stepitem";classes=at;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var st={root:"p-steplist"},Ie=(()=>{class t extends R{name="steplist";classes=st;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var pt={root:"p-steppanels"},ze=(()=>{class t extends R{name="steppanel";classes=pt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var lt={root:({instance:t})=>["p-steppanel",{"p-steppanel-active":t.isVertical()&&t.active()}],contentWrapper:"p-steppanel-content-wrapper",content:"p-steppanel-content"},Oe=(()=>{class t extends R{name="steppanel";classes=lt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var ct=`
${Pe}

.p-steppanel .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`,dt={root:({instance:t})=>["p-stepper p-component",{"p-readonly":t.linear()}],separator:"p-stepper-separator"},de=(()=>{class t extends R{name="stepper";style=ct;classes=dt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var ut={root:({instance:t})=>["p-step",{"p-step-active":t.active(),"p-disabled":t.isStepDisabled()}],header:"p-step-header",number:"p-step-number",title:"p-step-title"},Ae=(()=>{class t extends R{name="step";classes=ut;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var We=new F("STEPPER_INSTANCE"),je=new F("STEPLIST_INSTANCE"),Le=new F("STEPITEM_INSTANCE"),$e=new F("STEP_INSTANCE"),Qe=new F("STEPPANEL_INSTANCE"),He=new F("STEPPANELS_INSTANCE"),Re=new F("STEPPERSEPARATOR_INSTANCE"),Z=(()=>{class t extends z{$pcStepList=c(je,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});componentName="StepList";steps=pe(O(()=>k));_componentStyle=c(Ie);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-step-list"]],contentQueries:function(i,n,l){i&1&&ie(l,n.steps,k,4),i&2&&oe()},hostVars:2,hostBindings:function(i,n){i&2&&b(n.cx("root"))},features:[B([Ie,{provide:je,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:G,decls:1,vars:0,template:function(i,n){i&1&&(W(),j(0))},dependencies:[D,T],encapsulation:2,changeDetection:0})}return t})(),he=(()=>{class t extends z{$pcStepperSeparator=c(Re,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});componentName="StepperSeparator";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=c(de);static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-stepper-separator"]],hostVars:2,hostBindings:function(i,n){i&2&&b(n.cx("separator"))},features:[B([de,{provide:Re,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:G,decls:1,vars:0,template:function(i,n){i&1&&(W(),j(0))},dependencies:[D,T],encapsulation:2,changeDetection:0})}return t})(),ve=(()=>{class t extends z{$pcStepItem=c(Le,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});componentName="StepItem";_componentStyle=c(Be);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}pcStepper=c(O(()=>J));value=N();isActive=S(()=>this.pcStepper.value()===this.value());step=se(O(()=>k));stepPanel=se(O(()=>ee));constructor(){super(),ue(()=>{this.step().value.set(this.value())}),ue(()=>{this.stepPanel().value.set(this.value())})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["p-step-item"]],contentQueries:function(i,n,l){i&1&&ie(l,n.step,k,5)(l,n.stepPanel,ee,5),i&2&&oe(2)},hostVars:3,hostBindings:function(i,n){i&2&&(q("data-p-active",n.isActive()),b(n.cx("root")))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[B([Be,{provide:Le,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:G,decls:1,vars:0,template:function(i,n){i&1&&(W(),j(0))},dependencies:[D,T],encapsulation:2,changeDetection:0})}return t})(),k=(()=>{class t extends z{$pcStep=c($e,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});componentName="Step";pcStepper=c(O(()=>J));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=N();disabled=_(!1,{transform:e=>fe(e)});active=S(()=>this.pcStepper.isStepActive(this.value()));isStepDisabled=S(()=>!this.active()&&(this.pcStepper.linear()||this.disabled()));id=S(()=>`${this.pcStepper.id()}_step_${this.value()}`);ariaControls=S(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isSeparatorVisible=S(()=>{if(this.pcStepper.stepList()){let e=this.pcStepper.stepList().steps(),i=e.indexOf(this),n=e.length;return i!==n-1}else return!1});content;templates;_contentTemplate;_componentStyle=c(Ae);onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"&&(this._contentTemplate=e.template)})}onStepClick(){this.pcStepper.updateValue(this.value())}static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-step"]],contentQueries:function(i,n,l){if(i&1&&ge(l,Ge,4)(l,Q,4),i&2){let y;L(y=$())&&(n.content=y.first),L(y=$())&&(n.templates=y)}},hostVars:6,hostBindings:function(i,n){i&2&&(q("aria-current",n.active()?"step":void 0)("role","presentation")("data-p-active",n.active())("data-p-disabled",n.isStepDisabled()),b(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[B([Ae,{provide:$e,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:G,decls:2,vars:1,consts:[["type","button",3,"click","pBind","tabindex","disabled"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(W(),g(0,et,6,16)(1,it,2,7)),i&2&&f(!n.content&&!n._contentTemplate?0:1)},dependencies:[D,Y,he,H,T,h],encapsulation:2,changeDetection:0})}return t})(),ee=(()=>{class t extends z{$pcStepPanel=c(Qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});componentName="StepPanel";pcStepper=c(O(()=>J));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=N(void 0);active=S(()=>this.pcStepper.value()===this.value());ariaControls=S(()=>`${this.pcStepper.id()}_step_${this.value()}`);id=S(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isVertical=S(()=>this.pcStepper.stepItems().length>0);isSeparatorVisible=S(()=>{if(this.pcStepper.stepItems()){let e=this.pcStepper.stepItems().length,i=Ne(this.pcStepper.el.nativeElement,'[data-pc-name="steppanel"]');return Me(this.el.nativeElement,i)!==e-1}});computedMotionOptions=S(()=>K(K({},this.ptm("motion")),this.pcStepper.computedMotionOptions()));contentTemplate;templates;_contentTemplate;_componentStyle=c(Oe);onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"&&(this._contentTemplate=e.template)})}updateValue(e){this.pcStepper.updateValue(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-step-panel"]],contentQueries:function(i,n,l){if(i&1&&ge(l,Ge,5)(l,Q,4),i&2){let y;L(y=$())&&(n.contentTemplate=y.first),L(y=$())&&(n.templates=y)}},hostVars:7,hostBindings:function(i,n){i&2&&(q("role","tabpanel")("aria-controls",n.ariaControls())("id",n.id())("data-p-active",n.active())("data-pc-name","steppanel"),b(n.cx("root")))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[B([Oe,{provide:Qe,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],decls:5,vars:16,consts:[["name","p-collapsible",3,"visible","disabled","options"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(s(0,"p-motion",0)(1,"div",1),g(2,ot,1,0,"p-stepper-separator"),s(3,"div",1),P(4,rt,1,0,"ng-container",2),p()()()),i&2&&(d("visible",n.active())("disabled",!n.isVertical())("options",n.computedMotionOptions()),a(),b(n.cx("contentWrapper")),d("pBind",n.ptm("contentWrapper")),a(),f(n.isSeparatorVisible()?2:-1),a(),b(n.cx("content")),d("pBind",n.ptm("content")),a(),d("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",X(12,Je,n.updateValue.bind(n),n.value(),n.active())))},dependencies:[D,Y,he,H,T,h,Fe,ke],encapsulation:2,changeDetection:0})}return t})(),Ce=(()=>{class t extends z{$pcStepPanels=c(He,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});componentName="StepPanels";_componentStyle=c(ze);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-step-panels"]],hostVars:2,hostBindings:function(i,n){i&2&&b(n.cx("root"))},features:[B([ze,{provide:He,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:G,decls:1,vars:0,template:function(i,n){i&1&&(W(),j(0))},dependencies:[D,H,T],encapsulation:2,changeDetection:0})}return t})(),J=(()=>{class t extends z{componentName="Stepper";$pcStepper=c(We,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});_componentStyle=c(de);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=N(void 0);linear=_(!1,{transform:e=>fe(e)});transitionOptions=_("400ms cubic-bezier(0.86, 0, 0.07, 1)");motionOptions=_(void 0);computedMotionOptions=S(()=>K(K({},this.ptm("motion")),this.motionOptions()));id=Se(Te("pn_id_"));stepItems=pe(ve);steps=pe(k);stepList=se(Z);updateValue(e){this.value.set(e)}isStepActive(e){return this.value()===e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-stepper"]],contentQueries:function(i,n,l){i&1&&ie(l,n.stepItems,ve,4)(l,n.steps,k,4)(l,n.stepList,Z,5),i&2&&oe(3)},hostVars:4,hostBindings:function(i,n){i&2&&(q("role","tablist")("id",n.id()),b(n.cx("root")))},inputs:{value:[1,"value"],linear:[1,"linear"],transitionOptions:[1,"transitionOptions"],motionOptions:[1,"motionOptions"]},outputs:{value:"valueChange"},features:[B([de,{provide:We,useExisting:t},{provide:I,useExisting:t}]),V([h]),E],ngContentSelectors:G,decls:1,vars:0,template:function(i,n){i&1&&(W(),j(0))},dependencies:[D,H,T],encapsulation:2,changeDetection:0})}return t})(),Ke=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ye({type:t});static \u0275inj=be({imports:[J,Z,Ce,ee,ve,k,he,H,T,H,T]})}return t})();var vt=t=>({$implicit:t}),ht=(t,o,e)=>({"justify-end":t,"justify-between":o,"justify-start":e}),Ue=(t,o)=>o.value;function Ct(t,o){if(t&1&&(s(0,"p-step",2),re(1),p()),t&2){let e=o.$implicit;d("value",e.value),a(),ae(e.header)}}function bt(t,o){if(t&1&&(s(0,"p-step-list"),me(1,Ct,2,2,"p-step",2,Ue),p()),t&2){let e=r();a(),_e(e.steps())}}function St(t,o){t&1&&U(0)}function yt(t,o){if(t&1){let e=C();s(0,"p-button",11),v("onClick",function(){u(e);let n=r(2).activateCallback,l=r().$implicit,y=r();return m(n(y.getPrevStep(l.value)))}),p()}}function xt(t,o){if(t&1){let e=C();s(0,"p-button",12),v("onClick",function(){u(e);let n=r(2).activateCallback,l=r().$implicit,y=r();return m(n(y.getNextStep(l.value)))}),p()}if(t&2){let e=r(3).$implicit;d("disabled",e.disableNext)}}function wt(t,o){if(t&1){let e=C();s(0,"p-button",13),v("onClick",function(){u(e);let n=r(4);return m(n.complete.emit())}),p()}if(t&2){let e=r(4);d("loading",e.loading())}}function Dt(t,o){if(t&1&&(s(0,"div",7),g(1,yt,1,0,"p-button",8),g(2,xt,1,1,"p-button",9)(3,wt,1,1,"p-button",10),p()),t&2){let e=r(2).$implicit,i=r();d("ngClass",X(3,ht,i.isFirstStep(e.value),!i.isFirstStep(e.value)&&!i.isLastStep(e.value),i.isLastStep(e.value))),a(),f(i.isFirstStep(e.value)?-1:1),a(),f(i.isLastStep(e.value)?3:2)}}function Nt(t,o){if(t&1&&(s(0,"div",4)(1,"div",5),P(2,St,1,0,"ng-container",6),p(),g(3,Dt,4,7,"div",7),p()),t&2){let e=r().$implicit,i=r();a(2),d("ngTemplateOutlet",e.content)("ngTemplateOutletContext",we(3,vt,e)),a(),f(i.showNavButtons()?3:-1)}}function Mt(t,o){if(t&1&&(s(0,"p-step-panel",2),P(1,Nt,4,5,"ng-template",3),p()),t&2){let e=o.$implicit;d("value",e.value)}}var te=class t{steps=_([]);currentStepValue=N(1);showNavButtons=_(!0);linearProgression=_(!1);containerClass=_("basis-[50rem]");showSteps=_(!0);stepChange=M();complete=M();nextStep=M();prevStep=M();loading=_(!1);isLastStep(o){return o===Math.max(...this.steps().map(e=>e.value))}isFirstStep(o){return o===Math.min(...this.steps().map(e=>e.value))}getNextStep(o){let e=this.steps().map(n=>n.value).sort((n,l)=>n-l),i=e.indexOf(o);return e[i+1]||o}getPrevStep(o){let e=this.steps().map(n=>n.value).sort((n,l)=>n-l),i=e.indexOf(o);return e[i-1]||o}goNext(){let o=this.getNextStep(this.currentStepValue());o!==this.currentStepValue()&&(this.currentStepValue.set(o),this.stepChange.emit(o),this.nextStep.emit(o))}goBack(){let o=this.getPrevStep(this.currentStepValue());o!==this.currentStepValue()&&(this.currentStepValue.set(o),this.stepChange.emit(o),this.prevStep.emit(o))}canFinish(){return this.isLastStep(this.currentStepValue())&&!(this.getCurrentStep()?.disableNext??!1)}getCurrentStep(){return this.steps().find(o=>o.value===this.currentStepValue())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-stepper"]],inputs:{steps:[1,"steps"],currentStepValue:[1,"currentStepValue"],showNavButtons:[1,"showNavButtons"],linearProgression:[1,"linearProgression"],containerClass:[1,"containerClass"],showSteps:[1,"showSteps"],loading:[1,"loading"]},outputs:{currentStepValue:"currentStepValueChange",stepChange:"stepChange",complete:"complete",nextStep:"nextStep",prevStep:"prevStep"},decls:6,vars:5,consts:[[1,"card","flex","justify-center"],[3,"value","linear"],[3,"value"],["pTemplate","content"],[1,"flex","flex-col"],[1,"min-h-48"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","pt-6",3,"ngClass"],["label","Back","severity","secondary","icon","pi pi-arrow-left"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"disabled"],["label","Finish","icon","pi pi-check","iconPos","right","severity","success",3,"loading"],["label","Back","severity","secondary","icon","pi pi-arrow-left",3,"onClick"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick","disabled"],["label","Finish","icon","pi pi-check","iconPos","right","severity","success",3,"onClick","loading"]],template:function(e,i){e&1&&(s(0,"div",0)(1,"p-stepper",1),g(2,bt,3,0,"p-step-list"),s(3,"p-step-panels"),me(4,Mt,2,1,"p-step-panel",2,Ue),p()()()),e&2&&(a(),b(i.containerClass()),d("value",i.currentStepValue())("linear",i.linearProgression()),a(),f(i.showSteps()?2:-1),a(2),_e(i.steps()))},dependencies:[D,De,Y,ce,le,Q,Ke,J,Z,Ce,ee,k],styles:["[_nghost-%COMP%]     .p-steps .p-steps-item.step-completed .p-menuitem-link .p-steps-number{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity, 1))}[_nghost-%COMP%]     .p-steps .p-steps-item.step-error .p-menuitem-link .p-steps-number{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}[_nghost-%COMP%]     .p-steps .p-steps-item.step-active .p-menuitem-link .p-steps-number{background-color:var(--color-primary-color)}[_nghost-%COMP%]     .stepper-numbered .p-steps-item:before{display:none}"]})};function Tt(t,o){if(t&1){let e=C();s(0,"p-button",8),v("onClick",function(){u(e);let n=r(3);return m(n.goBack())}),p()}}function kt(t,o){if(t&1){let e=C();s(0,"p-button",9),v("onClick",function(){u(e);let n=r(3);return m(n.goNext())}),p()}if(t&2){let e=r(3);d("disabled",!e.canGoNext())}}function Ft(t,o){if(t&1){let e=C();s(0,"p-button",10),v("onClick",function(){u(e);let n=r(3);return m(n.onComplete())}),p()}if(t&2){let e=r(3);d("disabled",!e.canFinish())("loading",e.loading())}}function Vt(t,o){if(t&1){let e=C();s(0,"div",3)(1,"p-button",4),v("onClick",function(){u(e);let n=r(2);return m(n.cancelWizard())}),p(),g(2,Tt,1,0,"p-button",5),g(3,kt,1,1,"p-button",6),g(4,Ft,1,2,"p-button",7),p()}if(t&2){let e=r(2);a(2),f(e.isFirstStep()?-1:2),a(),f(e.isLastStep()?-1:3),a(),f(e.isLastStep()?4:-1)}}function Et(t,o){if(t&1){let e=C();s(0,"div",1)(1,"app-stepper",2),v("stepChange",function(n){u(e);let l=r();return m(l.onStepChange(n))})("complete",function(){u(e);let n=r();return m(n.onStepComplete())}),p()(),g(2,Vt,5,3,"div",3)}if(t&2){let e,i=r();a(),d("steps",i.steps())("currentStepValue",i.currentStep())("linearProgression",i.linearProgression())("showNavButtons",!i.useWizardButtonsOnly())("showSteps",i.showSteps())("loading",i.loading()),a(),f(i.showFooterButtons()&&!((e=i.getCurrentStep())!=null&&e.hideDefaultFooter)?2:-1)}}function Pt(t,o){if(t&1){let e=C();s(0,"p-button",8),v("onClick",function(){u(e);let n=r(4);return m(n.goBack())}),p()}}function Bt(t,o){if(t&1){let e=C();s(0,"p-button",9),v("onClick",function(){u(e);let n=r(4);return m(n.goNext())}),p()}if(t&2){let e=r(4);d("disabled",!e.canGoNext())}}function It(t,o){if(t&1){let e=C();s(0,"p-button",10),v("onClick",function(){u(e);let n=r(4);return m(n.onComplete())}),p()}if(t&2){let e=r(4);d("disabled",!e.canFinish())("loading",e.loading())}}function zt(t,o){if(t&1){let e=C();s(0,"div",13)(1,"p-button",4),v("onClick",function(){u(e);let n=r(3);return m(n.cancelWizard())}),p(),g(2,Pt,1,0,"p-button",5),g(3,Bt,1,1,"p-button",6),g(4,It,1,2,"p-button",7),p()}if(t&2){let e=r(3);a(2),f(e.isFirstStep()?-1:2),a(),f(e.isLastStep()?-1:3),a(),f(e.isLastStep()?4:-1)}}function Ot(t,o){if(t&1&&g(0,zt,5,3,"div",13),t&2){let e,i=r(2);f(i.showFooterButtons()&&!((e=i.getCurrentStep())!=null&&e.hideDefaultFooter)?0:-1)}}function At(t,o){if(t&1){let e=C();s(0,"p-dialog",11),v("onHide",function(){u(e);let n=r();return m(n.hideDialog())})("visibleChange",function(){u(e);let n=r();return m(n.hideDialog())}),s(1,"div",1)(2,"app-stepper",2),v("stepChange",function(n){u(e);let l=r();return m(l.onStepChange(n))})("complete",function(){u(e);let n=r();return m(n.onStepComplete())}),p()(),P(3,Ot,1,1,"ng-template",12),p()}if(t&2){let e=r();d("visible",e.visible())("header",e.header())("modal",!0)("draggable",!1)("resizable",!1)("closeOnEscape",e.closeOnEscape()),a(2),d("steps",e.steps())("currentStepValue",e.currentStep())("linearProgression",e.linearProgression())("showNavButtons",!e.useWizardButtonsOnly())("showSteps",e.showSteps())("loading",e.loading())}}var Xe=class t{stepper;steps=_([]);visible=N(!1);header=_("Wizard");linearProgression=_(!0);showFooterButtons=_(!0);closeOnEscape=_(!0);useWizardButtonsOnly=_(!1);showSteps=_(!0);contentOnly=_(!1);loading=N(!1);visibleChange=M();onCancel=M();complete=M();stepChange=M();currentStep=N(1);hideDialog(){this.visible.set(!1),this.visibleChange.emit(!1)}cancelWizard(){this.onCancel.emit(),this.hideDialog()}onComplete(){if(this.steps().length===0){console.warn("No steps defined in the wizard");return}this.complete.emit(this.steps()),this.hideDialog()}test(){this.loading.set(!0)}onStepComplete(){this.onComplete()}onStepChange(o){this.currentStep.set(o),this.stepChange.emit(o)}isLastStep(){return this.steps().length===0?!0:this.currentStep()===Math.max(...this.steps().map(o=>o.value))}isFirstStep(){return this.steps().length===0?!0:this.currentStep()===Math.min(...this.steps().map(o=>o.value))}async goNext(){let o=this.steps().find(e=>e.value===this.currentStep());if(o?.validate){let e=o.validate();e instanceof Promise?await e.then(i=>{i&&this.stepper?.goNext()}):e&&this.stepper?.goNext()}else this.stepper?.goNext()}canGoNext(){let o=this.steps().find(e=>e.value===this.currentStep());return!this.isLastStep()&&!(o?.disableNext??!1)}goBack(){this.stepper?.goBack()}canFinish(){return this.isLastStep()&&(this.stepper?.canFinish()??!1)}getCurrentStep(){return this.steps().find(o=>o.value===this.currentStep())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-wizard"]],viewQuery:function(e,i){if(e&1&&xe(te,5),e&2){let n;L(n=$())&&(i.stepper=n.first)}},inputs:{steps:[1,"steps"],visible:[1,"visible"],header:[1,"header"],linearProgression:[1,"linearProgression"],showFooterButtons:[1,"showFooterButtons"],closeOnEscape:[1,"closeOnEscape"],useWizardButtonsOnly:[1,"useWizardButtonsOnly"],showSteps:[1,"showSteps"],contentOnly:[1,"contentOnly"],loading:[1,"loading"],currentStep:[1,"currentStep"]},outputs:{visible:"visibleChange",loading:"loadingChange",visibleChange:"visibleChange",onCancel:"onCancel",complete:"complete",stepChange:"stepChange",currentStep:"currentStepChange"},decls:2,vars:1,consts:[["styleClass","wizard-dialog",3,"visible","header","modal","draggable","resizable","closeOnEscape"],[1,"wizard-content"],[3,"stepChange","complete","steps","currentStepValue","linearProgression","showNavButtons","showSteps","loading"],[1,"flex","justify-end","gap-2","w-full","mt-3"],["label","Cancel","icon","pi pi-times","severity","secondary",3,"onClick"],["label","Back","icon","pi pi-arrow-left","severity","secondary"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"disabled"],["label","Finish","icon","pi pi-check","severity","primary",3,"disabled","loading"],["label","Back","icon","pi pi-arrow-left","severity","secondary",3,"onClick"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick","disabled"],["label","Finish","icon","pi pi-check","severity","primary",3,"onClick","disabled","loading"],["styleClass","wizard-dialog",3,"onHide","visibleChange","visible","header","modal","draggable","resizable","closeOnEscape"],["pTemplate","footer"],[1,"flex","justify-end","gap-2","w-full"]],template:function(e,i){e&1&&g(0,Et,3,7)(1,At,4,12,"p-dialog",0),e&2&&f(i.contentOnly()?0:1)},dependencies:[D,Ee,Ve,Q,ce,le,te],styles:["[_nghost-%COMP%]     .wizard-dialog .wizard-content{height:auto;max-height:90vh;width:70vw;min-width:400px;max-width:800px;overflow:hidden}[_nghost-%COMP%]     .p-dialog-header{padding:.75rem 1rem}[_nghost-%COMP%]     .p-dialog-footer{padding:.75rem 1rem}.wizard-content[_ngcontent-%COMP%]{height:auto;max-height:90vh;min-width:400px;max-width:800px;overflow:hidden}"]})};export{Xe as a};
