import{_ as a,o as n,c,a as o,t as l}from"./index-5a8162bf.js";const _={data(){return{data:{}}},mounted(){const e="https://randomuser.me/api/";console.log("產品環境"),this.$http.get(e).then(t=>{console.log(t),this.data=t.data.results[0],console.log(this.data)})}};const r={class:"about"},i=o("h1",null,"This is an about page",-1);function u(e,t,d,p,s,h){return n(),c("div",r,[i,o("p",null,l(s.data),1)])}const m=a(_,[["render",u]]);export{m as default};
