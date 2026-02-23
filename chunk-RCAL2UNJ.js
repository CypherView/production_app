import{Ca as V,Ea as H,Fa as L,Ga as g,xa as $,ya as k}from"./chunk-JAXNIEKX.js";import{g as j,h as A,l as R,u as q}from"./chunk-FEC2V4R3.js";import{$ as w,Db as m,Gc as P,Ic as T,Pb as o,Qb as _,Rb as y,Sb as C,Vc as Q,Wb as z,Xb as N,Y as I,Ya as l,Yb as x,Z as E,ba as h,cc as s,fc as v,hc as u,ic as f,mb as B,mc as D,nb as F,qb as O,qc as c,rb as S,sb as d,ya as b}from"./chunk-EG5ORV3B.js";var G=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var U=["content"],W=["opposite"],X=["marker"],M=e=>({$implicit:e});function Y(e,a){e&1&&x(0)}function Z(e,a){e&1&&x(0)}function ee(e,a){if(e&1&&(z(0),d(1,Z,1,0,"ng-container",3),N()),e&2){let t=s().$implicit,r=s();l(),o("ngTemplateOutlet",r.markerTemplate||r._markerTemplate)("ngTemplateOutletContext",T(2,M,t))}}function te(e,a){if(e&1&&C(0,"div",2),e&2){let t=s(2);c(t.cx("eventMarker")),o("pBind",t.ptm("eventMarker")),m("data-p",t.dataP)}}function ne(e,a){if(e&1&&C(0,"div",2),e&2){let t=s(2);c(t.cx("eventConnector")),o("pBind",t.ptm("eventConnector")),m("data-p",t.dataP)}}function ie(e,a){e&1&&x(0)}function re(e,a){if(e&1&&(_(0,"div",2)(1,"div",2),d(2,Y,1,0,"ng-container",3),y(),_(3,"div",2),d(4,ee,2,4,"ng-container",4)(5,te,1,4,"ng-template",null,0,Q)(7,ne,1,4,"div",5),y(),_(8,"div",2),d(9,ie,1,0,"ng-container",3),y()()),e&2){let t=a.$implicit,r=a.last,i=D(6),n=s();c(n.cx("event")),o("pBind",n.ptm("event")),m("data-p",n.dataP),l(),c(n.cx("eventOpposite")),o("pBind",n.ptm("eventOpposite")),m("data-p",n.dataP),l(),o("ngTemplateOutlet",n.oppositeTemplate||n._oppositeTemplate)("ngTemplateOutletContext",T(23,M,t)),l(),c(n.cx("eventSeparator")),o("pBind",n.ptm("eventSeparator")),m("data-p",n.dataP),l(),o("ngIf",n.markerTemplate||n._markerTemplate)("ngIfElse",i),l(3),o("ngIf",!r),l(),c(n.cx("eventContent")),o("pBind",n.ptm("eventContent")),m("data-p",n.dataP),l(),o("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",T(25,M,t))}}var oe={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},J=(()=>{class e extends V{name="timeline";style=G;classes=oe;static \u0275fac=(()=>{let t;return function(i){return(t||(t=b(e)))(i||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var K=new w("TIMELINE_INSTANCE"),le=(()=>{class e extends L{bindDirectiveInstance=h(g,{self:!0});$pcTimeline=h(K,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=h(J);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}get dataP(){return this.cn({[this.layout]:this.layout,[this.align]:this.align})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=b(e)))(i||e)}})();static \u0275cmp=B({type:e,selectors:[["p-timeline"]],contentQueries:function(r,i,n){if(r&1&&(v(n,U,4),v(n,W,4),v(n,X,4),v(n,$,4)),r&2){let p;u(p=f())&&(i.contentTemplate=p.first),u(p=f())&&(i.oppositeTemplate=p.first),u(p=f())&&(i.markerTemplate=p.first),u(p=f())&&(i.templates=p)}},hostVars:3,hostBindings:function(r,i){r&2&&(m("data-p",i.dataP),c(i.cn(i.cx("root"),i.styleClass)))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[P([J,{provide:K,useExisting:e},{provide:H,useExisting:e}]),O([g]),S],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(r,i){r&1&&d(0,re,10,27,"div",1),r&2&&o("ngForOf",i.value)},dependencies:[q,j,A,R,k,g],encapsulation:2,changeDetection:0})}return e})(),Ie=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=F({type:e});static \u0275inj=E({imports:[le,k,k]})}return e})();export{Ie as a};
