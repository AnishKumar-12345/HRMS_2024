import{u as G}from"./apistore-ed4e5917.js";import{u as R,Z as ne,H as u,_ as g,a8 as re,a9 as F,r as J,o as w,c as U,b as e,w as a,a0 as r,a2 as b,ae as k,$ as C,V as q,z as m,a4 as A,a1 as ue,a as Z,t as x,T as ie,al as de,N as Y,am as ce,an as me,af as fe,O as ve,ad as pe,d,ao as j,I as H,ah as _e,g as L,y as he,J as ge,au as we,q as ye,l as Ve,m as be,av as ke,ag as xe,k as Se,a5 as P}from"./index-4ec66f5b.js";import{f as Ce}from"./index-c4405eea.js";const Le=Z("h2",null,"Leave Management",-1),De=d(" Request a Leave "),ze=d("Team Availability"),Ie={class:"text-h5"},Re=d(" Cancel "),Te=d(" Save "),$e=R({setup(T){const y=G(),f=ne(),o=f.current.value.colors.primary,c=f.current.value.colors.success,v=f.current.value.colors.error,D=f.current.value.colors.warning,V=u(-1),s=u(""),h=u(!1),i=u({show:!1,message:"",color:""}),$=u(null),N=u(!1),z=u(""),I=u(""),p=u({emp_id:"",leave_request_date:[""],leave_type:"",reason:""}),K=u({emp_id:"",leave_request_date:[""],leave_type:"",reason:""}),S=[16,3],Q=g(()=>({series:S,labels:["Total","Remaining"],dataLabels:{enabled:!1},tooltip:{theme:"dark",fillSeriesColor:!1},colors:[c,"#98aab4"],legend:{show:!0,position:"bottom",fontSize:"14px",color:c,formatter:function(l,t){return`${l}: ${t.w.globals.series[t.seriesIndex]}`}},stroke:{show:!1},responsive:[{breakpoint:991,options:{chart:{width:150}}}],plotOptions:{pie:{donut:{size:"80%",background:"none",labels:{show:!0,total:{showAlways:!0,show:!0,label:"Remaining",fontSize:"14px",color:o,formatter:()=>S[1].toString()},name:{show:!0,fontSize:"12px",color:void 0,offsetY:5},value:{show:!0,color:o}}}}}})),O=[8,5],W=g(()=>({series:S,labels:["Sick","Remaining"],dataLabels:{enabled:!1},tooltip:{theme:"dark",fillSeriesColor:!1},colors:[v,"#98aab4"],legend:{show:!0,position:"bottom",fontSize:"14px",color:c,formatter:function(l,t){return`${l}: ${t.w.globals.series[t.seriesIndex]}`}},stroke:{show:!1},responsive:[{breakpoint:991,options:{chart:{width:150}}}],plotOptions:{pie:{donut:{size:"80%",background:"none",labels:{show:!0,total:{showAlways:!0,show:!0,label:"Remaining",fontSize:"14px",color:o,formatter:()=>O[1].toString()},name:{show:!0,fontSize:"12px",color:void 0,offsetY:5},value:{show:!0,color:o}}}}}})),B=[8,5],X=g(()=>({series:S,labels:["Casual","Remaining"],dataLabels:{enabled:!1},tooltip:{theme:"dark",fillSeriesColor:!1},colors:[D,"#98aab4"],legend:{show:!0,position:"bottom",fontSize:"14px",color:c,formatter:function(l,t){return`${l}: ${t.w.globals.series[t.seriesIndex]}`}},stroke:{show:!1},responsive:[{breakpoint:991,options:{chart:{width:150}}}],plotOptions:{pie:{donut:{size:"80%",background:"none",labels:{show:!0,total:{showAlways:!0,show:!0,label:"Remaining",fontSize:"14px",color:o,formatter:()=>B[1].toString()},name:{show:!0,fontSize:"12px",color:void 0,offsetY:5},value:{show:!0,color:o}}}}}})),E=g(()=>[l=>!!l||"Date is required"]),ee=g(()=>[l=>!!l||"Leave Type is required"]),ae=g(()=>[l=>!!l||"Leave Reason is required"]);re(()=>{s.value=localStorage.getItem("HRMSuserID")||""});const te=g(()=>V.value===-1?"Request Leave":"Edit a Leave"),le=()=>{h.value=!0},M=()=>{h.value=!1,_e(()=>{p.value={...K.value},z.value="",I.value="",V.value=-1})};F(h,l=>{l||M()}),F([z,I],([l,t])=>{l&&t&&(p.value.leave_request_date=[l,t])});const oe=async()=>{$.value&&((await $.value.validate()).valid===!0?se():i.value={show:!0,message:"Please fill out all mandatory fields",color:"error"})},se=()=>{const l={Sick:"sick",Casual:"casual"},t={emp_id:s.value,leave_type:l[p.value.leave_type],leave_request_date:p.value.leave_request_date,reason:p.value.reason};y.SaveLeavedata(t).then(_=>{_.data.status==1?(i.value={show:!0,message:_.data.message,color:"primary"},M(),y.getLeavesdata(s.value)):i.value={show:!0,message:_.data.message,color:"error"}}).catch(_=>console.log("errors",_))};return(l,t)=>{const _=J("apexchart");return w(),U(H,null,[e(C,null,{default:a(()=>[e(r,{md:"8"},{default:a(()=>[e(b,{elevation:"0",class:"p-0 m-0"},{default:a(()=>[e(k,{class:"py-2 pa-2 ma-2"},{default:a(()=>[e(C,null,{default:a(()=>[e(r,{cols:"6",sm:"6",lg:"6",class:"d-flex flex-column align-center"},{default:a(()=>[Le]),_:1}),e(r,{cols:"6",sm:"6",lg:"6",class:"text-right"},{default:a(()=>[e(q,{color:"error",size:"small",dark:"",variant:"flat","append-icon":"mdi-account-circle",onClick:t[0]||(t[0]=n=>le())},{default:a(()=>[De]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{elevation:"0",class:"mt-2"},{default:a(()=>[e(k,{class:"py-2 pa-2 ma-2"},{default:a(()=>[e(C,null,{default:a(()=>[e(r,{cols:"12",md:"4",sm:"12"},{default:a(()=>[e(_,{type:"donut",height:"200",options:m(Q),series:S},null,8,["options"])]),_:1}),e(r,{cols:"12",md:"4",sm:"12"},{default:a(()=>[e(_,{type:"donut",height:"200",options:m(W),series:O},null,8,["options"])]),_:1}),e(r,{cols:"12",md:"4",sm:"12"},{default:a(()=>[e(_,{type:"donut",height:"200",options:m(X),series:B},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:a(()=>[e(b,{elevation:"0"},{default:a(()=>[e(A,{class:"text-h5"},{default:a(()=>[ze]),_:1}),e(k)]),_:1})]),_:1})]),_:1}),e(pe,{modelValue:h.value,"onUpdate:modelValue":t[6]||(t[6]=n=>h.value=n),"max-width":"800",persistent:""},{default:a(()=>[e(b,{elevation:"10",class:"overflow-hidden"},{default:a(()=>[e(ue,{class:"py-4 px-6"},{default:a(()=>[e(A,null,{default:a(()=>[Z("span",Ie,x(m(te)),1)]),_:1})]),_:1}),e(k,null,{default:a(()=>[e(ie,null,{default:a(()=>[e(de,{ref_key:"empleaveform",ref:$,modelValue:N.value,"onUpdate:modelValue":t[5]||(t[5]=n=>N.value=n)},{default:a(()=>[e(C,null,{default:a(()=>[e(r,{cols:"12",md:"4",sm:"12"},{default:a(()=>[e(Y,{modelValue:z.value,"onUpdate:modelValue":t[1]||(t[1]=n=>z.value=n),label:"From Date",type:"date",rules:m(E)},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"4",sm:"12"},{default:a(()=>[e(Y,{modelValue:I.value,"onUpdate:modelValue":t[2]||(t[2]=n=>I.value=n),label:"To Date",type:"date",rules:m(E)},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"4",sm:"12"},{default:a(()=>[e(ce,{rules:m(ee),modelValue:p.value.leave_type,"onUpdate:modelValue":t[3]||(t[3]=n=>p.value.leave_type=n),items:["Casual","Sick"],label:"Leave Type"},null,8,["rules","modelValue"])]),_:1}),e(r,{cols:"12",md:"12",sm:"12"},{default:a(()=>[e(me,{modelValue:p.value.reason,"onUpdate:modelValue":t[4]||(t[4]=n=>p.value.reason=n),label:"Leave Reason",rules:m(ae),"row-height":"30",rows:"3","no-resize":""},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(fe,null,{default:a(()=>[e(ve),e(q,{color:"blue-darken-1",variant:"text",onClick:M},{default:a(()=>[Re]),_:1}),e(q,{color:"blue-darken-1",variant:"text",onClick:oe},{default:a(()=>[Te]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(j,{modelValue:i.value.show,"onUpdate:modelValue":t[7]||(t[7]=n=>i.value.show=n),color:i.value.color,top:"",timeout:1e3},{default:a(()=>[d(x(i.value.message),1)]),_:1},8,["modelValue","color"])],64)}}}),Me=d(" Coming Public Holidays "),qe=d(" No holidays available for this month. "),Ae=R({setup(T){const y=u([{name:"New Year",date:"2024-01-01"},{name:"Republic Day",date:"2024-01-26"},{name:"Holi",date:"2024-03-25"},{name:"Independence Day",date:"2024-08-15"},{name:"Gandhi Jayanti",date:"2024-10-02"},{name:"Diwali",date:"2024-10-31"},{name:"Christmas",date:"2024-12-25"}]),f=v=>Ce(new Date(v),"MMMM d, yyyy"),o=new Date().getMonth(),c=g(()=>y.value.filter(v=>new Date(v.date).getMonth()===o));return(v,D)=>{const V=J("v-list-item-content");return w(),L(b,{elevation:"0"},{default:a(()=>[e(A,{class:"text-h6"},{default:a(()=>[Me]),_:1}),e(k,null,{default:a(()=>[m(c).length>0?(w(),L(he,{key:0},{default:a(()=>[(w(!0),U(H,null,ge(m(c),s=>(w(),L(ye,{key:s.date},{default:a(()=>[e(V,null,{default:a(()=>[e(Ve,null,{default:a(()=>[d(x(s.name),1)]),_:2},1024),e(be,null,{default:a(()=>[d(x(f(s.date)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(w(),L(we,{key:1,type:"info",dismissible:""},{default:a(()=>[qe]),_:1}))]),_:1})]),_:1})}}}),Ue=d(" mdi-pencil "),He=d(" mdi-delete "),Ne=R({setup(T){const y=G(),f=[{title:"Employee Name",key:"emp_id"},{title:"Applied Date",key:"applied_date"},{title:"Leave Request Dates",key:"leave_request_dates"},{title:"Leave Status",key:"leave_status"},{title:"Reason",key:"reason"},{title:"action",key:"actions"}],o=u({show:!1,message:"",color:""}),c=u([""]),v=u("");ke(()=>{v.value=localStorage.getItem("HRMSuserID")||"",y.getLeavesdata(v.value).then(s=>{s.status==1?(c.value=s.data,o.value={show:!0,message:s.message,color:"primary"}):o.value={show:!0,message:s.message,color:"error"}}).catch(s=>console.log("errors",s))});const D=()=>{},V=()=>{};return(s,h)=>(w(),U(H,null,[e(b,{elevation:"0",class:"mt-2"},{default:a(()=>[e(k,null,{default:a(()=>[e(xe,{headers:f,items:c.value},{"item.leave_status":a(({item:i})=>[e(Se,{color:i.leave_status=="Pending"?"error":"success"},{default:a(()=>[d(x(i.leave_status),1)]),_:2},1032,["color"])]),"item.actions":a(({item:i})=>[e(P,{class:"me-2 icon-hover",size:"small",color:"info",onClick:D},{default:a(()=>[Ue]),_:1}),e(P,{class:"icon-hover",size:"small",color:"error",onClick:V},{default:a(()=>[He]),_:1})]),_:1},8,["items"])]),_:1})]),_:1}),e(j,{modelValue:o.value.show,"onUpdate:modelValue":h[0]||(h[0]=i=>o.value.show=i),color:o.value.color,top:"",timeout:1e3},{default:a(()=>[d(x(o.value.message),1)]),_:1},8,["modelValue","color"])],64))}}),Fe=R({setup(T){return(y,f)=>(w(),L(C,{class:"pa-0 ma-0"},{default:a(()=>[e(r,{cols:"12",lg:"9"},{default:a(()=>[e($e)]),_:1}),e(r,{cols:"12",lg:"3"},{default:a(()=>[e(Ae)]),_:1}),e(r,{cols:"12",lg:"12"},{default:a(()=>[e(Ne)]),_:1})]),_:1}))}});export{Fe as default};
