import{_ as y,a0 as h,a2 as k,o as a,c as s,F as d,l as g,a as r,b as p,a3 as c,e as z,w as T,d as v,N as U,t as m,a4 as V,T as b}from "./index-BHblVyR2.js";import{b as B,a as D}from "./index-XfQmYFa8.js";const N={class:"flex flex-col items-center justify-center gap-3"},w={class:"flex flex-col items-center justify-center gap-3"},K={key:0},S={__name:"KursMake",setup(_){const n=h(JSON.parse(localStorage.getItem("courses"))),i=["Titel","Beschreibung","Dozierender","Raum","Tag","Uhrzeit"],e=h({Titel:"",Beschreibung:"",Dozierender:"",Raum:"",Tag:"",Uhrzeit:null}),f= l=>l?new Intl.DateTimeFormat("de-DE",{hour:"2-digit",minute:"2-digit",hour12:!1}).format(l):"";k(n, l=>{localStorage.setItem("courses",JSON.stringify(l))},{deep:!0});const x=()=>{if(!e.value.Uhrzeit){alert("Bitte eine Uhrzeit auswählen!");return}const l={title:e.value.Titel,description:e.value.Beschreibung,lecturer:e.value.Dozierender,room:e.value.Raum,day:e.value.Tag,time:f(e.value.Uhrzeit)};n.value.push(l),e.value={Titel:"",Beschreibung:"",Dozierender:"",Raum:"",Tag:"",Uhrzeit:null}};return(l, o)=>(a(),s("div",N,[(a(),s(d,null,g(i, t=>r("div",{key:t},[p(c(D),{variant:"in"},{default:T(()=>[r("div",null,[t==="Uhrzeit"?(a(),v(c(B),{key:0,modelValue:e.value.Uhrzeit,"onUpdate:modelValue":o[0]||(o[0]= u=>e.value.Uhrzeit=u),timeOnly:"",fluid:""},null,8,["modelValue"])):(a(),v(c(U),{key:1,modelValue:e.value[t],"onUpdate:modelValue": u=>e.value[t]=u,type:"text"},null,8,["modelValue","onUpdate:modelValue"]))]),r("label",null,m(t),1)]),_:2},1024)])),64)),r("div",w,[p(c(V),{class:"my-10 char",type:"button",label:"Abschicken",icon:"pi pi-sign-in",onClick:x})]),n.value.length?(a(),s("div",K,[o[1]||(o[1]=r("h3",{class:"text-xl"},"Gespeicherte Kurse",-1)),r("ul",null,[(a(!0),s(d,null,g(n.value,(t, u)=>(a(),s("li",{key:u},[r("strong",null,m(t.title),1),b(" - "+m(t.time),1)]))),128))])])):z("",!0)]))}},F=y(S,[["__scopeId","data-v-13897a3a"]]),$={__name:"MakeKursView",setup(_){return(n, i)=>(a(),s(d,null,[i[0]||(i[0]=r("h1",{class:"text-center mb-4"},"Kurs erstellen",-1)),p(F)],64))}};export{$ as default};
