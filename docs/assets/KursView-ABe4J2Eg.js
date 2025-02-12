import{B as N,m as C,M as P,o as d,c as p,_ as R,a6 as j,a7 as O,a1 as r,a3 as T,r as K,k as c,W as A,a as n,P as S,Q as u,a4 as i,a5 as m,a8 as J,S as I,j as V,F as $,a9 as _,h as D}from"./index-DDcTqExs.js";var L=function(l){var e=l.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding-block: `).concat(e("textarea.padding.y"),`;
    padding-inline: `).concat(e("textarea.padding.x"),`;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background `).concat(e("textarea.transition.duration"),", color ").concat(e("textarea.transition.duration"),", border-color ").concat(e("textarea.transition.duration"),", outline-color ").concat(e("textarea.transition.duration"),", box-shadow ").concat(e("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    box-shadow: `).concat(e("textarea.focus.ring.shadow"),`;
    outline: `).concat(e("textarea.focus.ring.width")," ").concat(e("textarea.focus.ring.style")," ").concat(e("textarea.focus.ring.color"),`;
    outline-offset: `).concat(e("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(e("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(e("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(e("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(e("textarea.sm.font.size"),`;
    padding-block: `).concat(e("textarea.sm.padding.y"),`;
    padding-inline: `).concat(e("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(e("textarea.lg.font.size"),`;
    padding-block: `).concat(e("textarea.lg.padding.y"),`;
    padding-inline: `).concat(e("textarea.lg.padding.x"),`;
}
`)},U={root:function(l){var e=l.instance,g=l.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":g.autoResize,"p-textarea-sm p-inputfield-sm":g.size==="small","p-textarea-lg p-inputfield-lg":g.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},E=N.extend({name:"textarea",theme:L,classes:U}),H={name:"BaseTextarea",extends:P,props:{autoResize:Boolean},style:E,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},B={name:"Textarea",extends:H,inheritAttrs:!1,observer:null,mounted:function(){var l=this;this.autoResize&&(this.observer=new ResizeObserver(function(){l.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(l){this.autoResize&&this.resize(),this.writeValue(l.target.value,l)}},computed:{attrs:function(){return C(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},Y=["value","disabled","aria-invalid"];function q(t,l,e,g,v,a){return d(),p("textarea",C({class:t.cx("root"),value:t.d_value,disabled:t.disabled,"aria-invalid":t.invalid||void 0,onInput:l[0]||(l[0]=function(){return a.onInput&&a.onInput.apply(a,arguments)})},a.attrs),null,16,Y)}B.render=q;const M={class:"text-surface-500 dark:text-surface-400 block mb-8"},Q={class:"flex flex-col items-center w-full mb-4"},W={class:"flex justify-end gap-2"},G={class:""},X={class:"intro-box","data-aos":"fade-up","data-aos-delay":"100"},Z={class:"flex items-center justify-between w-full"},ee={class:"text-2xl flex-1 text-center"},te={class:"flex flex-row gap-5 justify-center items-center"},ae={key:0},ne={key:1},le={key:0},oe={__name:"KursBox",props:{title:String,description:String,lecturer:String,room:String,day:String,time:String,exam:Object,grade:String},setup(t){const l=j(),e=O(),g=()=>new Promise((s,o)=>{l.require({group:"templating",header:"Bestätigung",message:"Bitte bestätigen sie ihre An-/Abmeldung",icon:"pi pi-exclamation-circle",rejectProps:{label:"Cancel",icon:"pi pi-times",outlined:!0,size:"small"},acceptProps:{label:"Save",icon:"pi pi-check",size:"small"},accept:()=>{e.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3}),s(!0)},reject:()=>{e.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3}),o(!0)}})}),v=t;let a,f,x;const b=r(!1);if(!localStorage.getItem("sign"))a=r({}),f=r(!0),x=r(!0);else{console.log("--------------------------------------------------"),console.log(localStorage.getItem("sign")),a=r(JSON.parse(localStorage.getItem("sign")));let s=v.title;console.log(a.value[s]),f=r(!a.value[s]),x=r(!a.value[s+"Exam"])}T(a,s=>{localStorage.setItem("sign",JSON.stringify(s))},{deep:!0});const h=r(!1),y=r(!1),z=()=>{console.log("Triggered load"),h.value=!0,r({title:f.value}),a.value[v.title]=f.value,f.value=!f.value,setTimeout(()=>{h.value=!1},2e3)},w=async()=>{console.log("Triggered load");try{await g(),y.value=!0;const s=r({title:f.value});let o=v.title+"Exam";console.log(o),a.value[o]=x.value,x.value=!x.value,setTimeout(()=>{y.value=!1},2e3)}catch{console.log("Action was cancelled.")}};return(s,o)=>{const F=K("RouterLink");return d(),p($,null,[c(i(J),{visible:b.value,"onUpdate:visible":o[2]||(o[2]=k=>b.value=k),modal:"",header:"Feedback hinzufügen",style:{width:"25rem"}},{default:A(()=>[n("span",M,[o[4]||(o[4]=S(" Fügen Sie Feedback für den Kurs ")),n("strong",null,u(t.title),1),o[5]||(o[5]=S(" hinzu "))]),n("div",Q,[c(i(B),{rows:"10",cols:"35"})]),n("div",W,[c(i(m),{type:"button",label:"Cancel",severity:"secondary",onClick:o[0]||(o[0]=k=>b.value=!1)}),c(i(m),{type:"button",label:"Save",loading:s.adding,onClick:o[1]||(o[1]=k=>b.value=!1)},null,8,["loading"])])]),_:1},8,["visible"]),n("div",G,[n("div",X,[n("div",Z,[c(i(m),{type:"button",label:"Feedback",outlined:"",class:"opacity-0 back"}),n("h2",ee,u(t.title),1),c(i(m),{type:"button",label:"Feedback",outlined:"",onClick:o[3]||(o[3]=k=>b.value=!0)})]),n("div",te,[n("div",null,[n("ul",null,[n("li",null,"Beschreibung: "+u(t.description),1),n("li",null,[o[6]||(o[6]=S("Dozierender: ")),c(F,{to:"profil"},{default:A(()=>[n("u",null,u(t.lecturer),1)]),_:1})]),n("li",null,"Raum: "+u(t.room),1),n("li",null,"Tag: "+u(t.day),1),n("li",null,"Uhrzeit: "+u(t.time),1)]),i(f)?(d(),p("div",ae,[c(i(m),{type:"button",label:"Anmelden",icon:"pi pi-pen-to-square",loading:h.value,onClick:z},null,8,["loading"])])):(d(),p("div",ne,[c(i(m),{type:"button",label:"Abmelden",icon:"pi pi-times-circle",loading:h.value,onClick:z},null,8,["loading"])]))]),n("div",null,[t.exam?(d(),p("div",le,[n("ul",null,[n("li",null,"Prüfungsdatum: "+u(t.exam.examDate),1),n("li",null,"Prüfungsuhrzeit: "+u(t.exam.examTime),1),n("li",null,"Note: "+u(t.grade),1)]),i(x)?(d(),I(i(m),{key:0,type:"button",label:"Prüfungsanmeldung",loading:y.value,onClick:w},null,8,["loading"])):(d(),I(i(m),{key:1,type:"button",label:"Prüfungsabmeldung",loading:y.value,onClick:w},null,8,["loading"]))])):V("",!0)])])])])],64)}}},ie=R(oe,[["__scopeId","data-v-ca4f21b8"]]),re={class:"grid grid-cols-2 gap-8 mt-10"},se={__name:"KursSign",setup(t){const l=r([]);let e=localStorage.getItem("courses");return e?(l.value=JSON.parse(e),console.log(JSON.parse(e))):(l.value=_.value,console.log("In else"),console.log(l.value),localStorage.setItem("courses",JSON.stringify(_.value))),T(l,g=>{localStorage.setItem("courses",JSON.stringify(g))},{deep:!0}),console.log("DATAAAAAAAAAAAA"),console.log(l.value),(g,v)=>(d(),p("div",re,[(d(!0),p($,null,D(l.value,a=>(d(),p("div",{key:a.title},[c(ie,{title:a.title,description:a.description,lecturer:a.lecturer,room:a.room,day:a.day,time:a.time,exam:a.exam,grade:a.grade},null,8,["title","description","lecturer","room","day","time","exam","grade"])]))),128))]))}},de={__name:"KursView",setup(t){return(l,e)=>(d(),p($,null,[e[0]||(e[0]=n("h1",{class:"text-center"},"Kursanmeldung",-1)),c(se)],64))}};export{de as default};
