import{u as m}from"./app-04986369.js";import{d as p,a8 as u,C as d,r as f,aB as h,aC as y,D as k,o as g,i as x,aD as b}from"./index-2864f194.js";const C=p({__name:"Line",setup(_){const{isDark:o}=u(),l=d(()=>o.value?"dark":"default"),r=f(null),{setOptions:n,getInstance:i,resize:c}=h(r,{theme:l}),s=(()=>{const e=[];for(let t=1;t<31;t++)e.push(`${t}日`);return e})();n({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{bottom:"20px",right:"10px"},legend:{right:!0,data:["fork","star"]},calculable:!0,xAxis:[{triggerEvent:!0,type:"category",splitLine:{show:!1},axisTick:{show:!1},data:s}],yAxis:[{triggerEvent:!0,type:"value",splitLine:{show:!1},axisLine:{show:!0}}],dataZoom:[{type:"slider",show:!1,realtime:!0,startValue:0,endValue:24}],series:[{name:"fork",type:"line",symbolSize:10,symbol:"circle",color:"#f56c6c",markPoint:{label:{color:"#fff"},data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},data:[509,917,2455,2610,2719,3033,3044,3085,2708,2809,2117,2e3,1455,1210,719,733,944,2285,2208,3372,3936,3693,2962,2810,3519,2455,2610,2719,2484,2078]},{name:"star",type:"line",symbolSize:10,symbol:"circle",color:"#53a7ff",markPoint:{label:{color:"#fff"},data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},data:[2136,3693,2962,3810,3519,3484,3915,3823,3455,4310,4019,3433,3544,3885,4208,3372,3484,3915,3748,3675,4009,4433,3544,3285,4208,3372,3484,3915,3823,4265,4298]}],addTooltip:!0},{name:"click",callback:e=>{}},{name:"contextmenu",callback:e=>{}},{type:"zrender",name:"click",callback:e=>{}});let a=1;return y(()=>{a==s.length-24&&(a=0),i().dispatchAction({type:"dataZoom",startValue:a,endValue:a+24}),a++},2e3),k(()=>m().getSidebarStatus,()=>{b(600).then(()=>c())}),(e,t)=>(g(),x("div",{ref_key:"lineChartRef",ref:r,style:{width:"100%",height:"35vh"}},null,512))}});export{C as _};