import{u as Q}from"./apistore-ed4e5917.js";import{u as P,H as i,_ as u,a9 as X,a8 as ee,o as g,c as w,b as e,w as t,aa as le,ab as ae,N as d,ac as oe,O as D,ad as te,V as k,x as se,a2 as U,a1 as O,a4 as ne,a as de,t as x,z as r,ae as S,T as ue,al as re,$ as ie,a0 as n,am as C,an as me,af as pe,a5 as A,ag as ve,d as c,ao as ce,ah as Ve,r as T,aj as fe,I as be,J as ge,g as I,i as _e,ak as ye}from"./index-4ec66f5b.js";import{_ as Ee}from"./_plugin-vue_export-helper-c27b6911.js";const he=c(" Add Employee Details "),ke={class:"text-h5"},we=c(),Ue=c(" Cancel "),xe=c(" Save "),De=c(" mdi-pencil "),Ce=c(" mdi-delete "),Ae=P({setup(B){const p=Q(),_=i(-1),f=i(!1),v=i({show:!1,message:"",color:""}),V=i([]),b=i(null),y=i(!1),m=u(()=>[l=>!!l||"Email is required",l=>/.+@.+\..+/.test(l)||"Email must be valid"]),N=u(()=>[l=>!!l||"Mobile is required",l=>/^[0-9]+$/.test(l)||"Only numbers are accepted",l=>l.length===10||"Mobile must be 10 digits"]),R=u(()=>[l=>!!l||"Employee Name is required",l=>/^[a-zA-Z ]+$/.test(l)||"Only letters are allowed in the name"]),q=u(()=>[l=>!!l||"Aadhar No is required",l=>/^[0-9]+$/.test(l)||"Only numbers are accepted",l=>l.length===12||"Aadhar no must be 12 digits"]),L=u(()=>[l=>!!l||"Pan No is required",l=>l.length===10||"Pan no must be 10 characters"]),M=u(()=>[l=>!!l||"Date Of Joining is required"]),j=u(()=>[l=>!!l||"Date Of Birth is required"]),F=u(()=>[l=>!!l||"Employee ID is required",l=>l.length===5||"Employee ID must be 5 characters"]),$=u(()=>[l=>!!l||"Supervisor is required"]),z=u(()=>[l=>!!l||"Address is required"]),G=[{title:"Employee ID",key:"id"},{title:"Name",align:"start",sortable:!1,key:"employeename"},{title:"Phoneno",key:"phoneno"},{title:"Email",key:"no_of_branche"},{title:"Gender",key:"actions"},{title:"Aadhar",key:"actions"},{title:"Pan",key:"actions"},{title:"JoinDate",key:"actions"},{title:"BirthDate",key:"actions"},{title:"Branch",key:"actions"},{title:"Department",key:"actions"},{title:"Designation",key:"actions"},{title:"Role",key:"actions"},{title:"Address",key:"actions"},{title:"Supervisor",key:"actions"},{title:"Actions",key:"actions"}],o=i({emp_code:"",name:"",phoneno:"",email:"",supervisor:"",gender:"",adharno:"",panno:"",address:"",doj:"",dob:"",branch:"",department:"",designation:"",role:""}),Y=i({emp_code:"",name:"",phoneno:"",email:"",supervisor:"",gender:"",adharno:"",panno:"",address:"",doj:"",dob:"",branch:"",department:"",designation:"",role:""}),E=i(null);X(f,l=>{l||h()});const J=u(()=>_.value===-1?"Add New Employee":"Edit Employee details"),h=()=>{f.value=!1,Ve(()=>{o.value=Object.assign({},Y.value),_.value=-1})},W=async()=>{if(b.value){const l=await b.value.validate();console.log("Check",l.valid),l.valid===!0?(console.log("Form is valid, triggering API call..."),H()):v.value={show:!0,message:"Please fill out all mandatory fields",color:"error"}}};ee(()=>{p.getSupervisor().then(l=>{console.log({response:l}),l.status===1&&(V.value=l.data.map(a=>({value:a.manager_id,text:a.name})))})});const H=()=>{const l={emp_code:o.value.emp_code,name:o.value.name,phoneno:o.value.phoneno,email:o.value.email,manager_id:o.value.supervisor,gender:o.value.gender,adharno:o.value.adharno,panno:o.value.panno,address:o.value.address,doj:o.value.doj,dob:o.value.dob,branch:o.value.branch,department:o.value.department,designation:o.value.designation,role:o.value.role};p.Employeeregister(l).then(a=>{a.data.status==1?(v.value={show:!0,message:a.data.message,color:"primary"},h()):v.value={show:!0,message:a.data.message,color:"error"}}).catch(a=>console.log("errors",a))},K=()=>{},Z=()=>{};return(l,a)=>(g(),w("div",null,[e(ve,{headers:G,search:E.value,density:"compact","fixed-header":"","items-per-page":10,height:"400px"},{top:t(()=>[e(le,{prominent:"",dark:"",style:{"background-color":"rgb(255, 255, 255)"}},{default:t(()=>[e(ae,null,{text:t(()=>[e(d,{modelValue:E.value,"onUpdate:modelValue":a[0]||(a[0]=s=>E.value=s),label:"Search","prepend-inner-icon":"mdi-magnify",variant:"outlined","hide-details":"","single-line":""},null,8,["modelValue"])]),_:1}),e(oe,{class:"mx-4",inset:"",vertical:""}),e(D),e(te,{modelValue:f.value,"onUpdate:modelValue":a[17]||(a[17]=s=>f.value=s),"max-width":"800"},{activator:t(({props:s})=>[e(k,se({color:"primary",dark:"",variant:"flat","append-icon":"mdi-account-circle"},s),{default:t(()=>[he]),_:2},1040)]),default:t(()=>[e(U,{elevation:"10",class:"overflow-hidden"},{default:t(()=>[e(O,{class:"py-4 px-6"},{default:t(()=>[e(ne,null,{default:t(()=>[de("span",ke,x(r(J)),1)]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(ue,null,{default:t(()=>[e(re,{ref_key:"empregisterform",ref:b,modelValue:y.value,"onUpdate:modelValue":a[16]||(a[16]=s=>y.value=s)},{default:t(()=>[e(ie,null,{default:t(()=>[e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.emp_code,"onUpdate:modelValue":a[1]||(a[1]=s=>o.value.emp_code=s),label:"Employee ID",rules:r(F)},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.name,"onUpdate:modelValue":a[2]||(a[2]=s=>o.value.name=s),label:"Employee name",rules:r(R)},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.phoneno,"onUpdate:modelValue":a[3]||(a[3]=s=>o.value.phoneno=s),label:"Phone no",type:"number",rules:r(N)},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.email,"onUpdate:modelValue":a[4]||(a[4]=s=>o.value.email=s),label:"Email",rules:r(m)},null,8,["modelValue","rules"])]),_:1}),we,e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(C,{modelValue:o.value.gender,"onUpdate:modelValue":a[5]||(a[5]=s=>o.value.gender=s),label:"Gender",items:["Male","Female"]},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.adharno,"onUpdate:modelValue":a[6]||(a[6]=s=>o.value.adharno=s),label:"Aadhar No",type:"number",rules:r(q)},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.panno,"onUpdate:modelValue":a[7]||(a[7]=s=>o.value.panno=s),label:"Pan No",rules:r(L)},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.doj,"onUpdate:modelValue":a[8]||(a[8]=s=>o.value.doj=s),label:"Date of Joining",type:"date",rules:r(M)},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.dob,"onUpdate:modelValue":a[9]||(a[9]=s=>o.value.dob=s),label:"Date of Birth",type:"date",rules:r(j)},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.branch,"onUpdate:modelValue":a[10]||(a[10]=s=>o.value.branch=s),label:"Company Branch"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.department,"onUpdate:modelValue":a[11]||(a[11]=s=>o.value.department=s),label:"Company Department"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.designation,"onUpdate:modelValue":a[12]||(a[12]=s=>o.value.designation=s),label:"Designation"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value.role,"onUpdate:modelValue":a[13]||(a[13]=s=>o.value.role=s),label:"Role"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(C,{modelValue:o.value.supervisor,"onUpdate:modelValue":a[14]||(a[14]=s=>o.value.supervisor=s),items:V.value,"item-title":"text","item-value":"value",label:"Supervisor",rules:r($)},null,8,["modelValue","items","rules"])]),_:1}),e(n,{cols:"12",md:"6",sm:"6"},{default:t(()=>[e(me,{modelValue:o.value.address,"onUpdate:modelValue":a[15]||(a[15]=s=>o.value.address=s),label:"Address","row-height":"20",rows:"2","no-resize":"",rules:r(z)},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(pe,null,{default:t(()=>[e(D),e(k,{color:"blue-darken-1",variant:"text",onClick:h},{default:t(()=>[Ue]),_:1}),e(k,{color:"blue-darken-1",variant:"text",onClick:W},{default:t(()=>[xe]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":t(({item:s})=>[e(A,{class:"me-2 icon-hover",size:"small",color:"info",onClick:K},{default:t(()=>[De]),_:1}),e(A,{class:"icon-hover",size:"small",color:"error",onClick:Z},{default:t(()=>[Ce]),_:1})]),_:1},8,["search"]),e(ce,{modelValue:v.value.show,"onUpdate:modelValue":a[18]||(a[18]=s=>v.value.show=s),color:v.value.color,top:"",timeout:1e3},{default:t(()=>[c(x(v.value.message),1)]),_:1},8,["modelValue","color"])]))}});const Te=Ee(Ae,[["__scopeId","data-v-5bf5af31"]]),Ie={},Be=P({setup(B){const p=i("EMPLOYEE REGISTER/VIEW"),_=i(["EMPLOYEE REGISTER & VIEW","EMPLOYEE BULK UPLOAD"]),f=u(()=>{switch(p.value){case"EMPLOYEE REGISTER & VIEW":return Te;case"EMPLOYEE BULK UPLOAD":return Ie;default:return null}});return(v,V)=>{const b=T("v-tabs-window-item"),y=T("v-tabs-window");return g(),w("div",null,[e(U,{elevation:"10",class:"overflow-hidden"},{default:t(()=>[e(O,{class:"v-card-item bg-surface pt-4 pb-2"},{default:t(()=>[e(fe,{modelValue:p.value,"onUpdate:modelValue":V[0]||(V[0]=m=>p.value=m),"bg-color":"deep-purple-accent-4",color:"primary",density:"compact",grow:""},{default:t(()=>[(g(!0),w(be,null,ge(_.value,m=>(g(),I(ye,{key:m,value:m},{default:t(()=>[c(x(m),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(y,{modelValue:p.value,"onUpdate:modelValue":V[1]||(V[1]=m=>p.value=m)},{default:t(()=>[e(b,null,{default:t(()=>[e(U,{color:"basil",flat:""},{default:t(()=>[e(S,null,{default:t(()=>[(g(),I(_e(r(f))))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}});export{Be as default};