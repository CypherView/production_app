import{cb as u,gb as w,ib as v,jb as x,kb as i,lb as I}from"./chunk-3DIKE4RN.js";import{Ca as e,Jc as y,ba as d,ca as a,ea as l,ga as r,gc as b,hc as m,qb as s,rb as c,tc as h,ub as g,vb as f}from"./chunk-BW2RHRGY.js";var N=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-floatlabel .p-inputwrapper,
    .p-inputgroup .p-iftalabel .p-inputwrapper {
        display: inline-flex;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label,
    .p-inputgroup .p-floatlabel .p-inputwrapper ~ label,
    .p-inputgroup .p-iftalabel .p-inputwrapper ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`;var D=["*"],F=`
    ${N}

    /*For PrimeNG*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup > p-inputmask > .p-inputtext {
        width: 100%;
    }
`,j={root:({instance:p})=>["p-inputgroup",{"p-inputgroup-fluid":p.fluid}]},C=(()=>{class p extends w{name="inputgroup";style=F;classes=j;static \u0275fac=(()=>{let n;return function(t){return(n||(n=e(p)))(t||p)}})();static \u0275prov=d({token:p,factory:p.\u0275fac})}return p})();var M=new l("INPUTGROUP_INSTANCE"),k=(()=>{class p extends x{componentName="InputGroup";_componentStyle=r(C);$pcInputGroup=r(M,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(i,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;static \u0275fac=(()=>{let n;return function(t){return(n||(n=e(p)))(t||p)}})();static \u0275cmp=s({type:p,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostVars:2,hostBindings:function(o,t){o&2&&h(t.cn(t.cx("root"),t.styleClass))},inputs:{styleClass:"styleClass"},features:[y([C,{provide:M,useExisting:p},{provide:v,useExisting:p}]),g([i]),f],ngContentSelectors:D,decls:1,vars:0,template:function(o,t){o&1&&(b(),m(0))},dependencies:[I],encapsulation:2})}return p})(),z=(()=>{class p{static \u0275fac=function(o){return new(o||p)};static \u0275mod=c({type:p});static \u0275inj=a({imports:[k,u,u]})}return p})();export{k as a,z as b};
