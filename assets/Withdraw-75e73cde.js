import{x as h,y as r,u as o,h as m,r as i,j as e,i as u,z as w}from"./index-53ed5952.js";import{S as p}from"./SubHeader-71fa3f8d.js";import{y as x,u as j,a as v,F as f,I as b}from"./InputFormItem-59836574.js";import{u as _}from"./useDispatch-1b47f568.js";const y=h().shape({amount:x.integer(r("entities.transaction.fields.amount"),{required:!0,min:10})});function k(){const s=o(m.selectCurrentUser),a=_();i.useEffect(()=>{},[s]);const n=({amount:d})=>{const c={status:"pending",date:new Date,user:s?s.id:null,type:"withdraw",amount:d,vip:s};a(u.doRefreshCurrentUser()),a(w.doCreate(c))},[l]=i.useState({amount:""}),t=j({resolver:v.yupResolver(y),mode:"onSubmit",defaultValues:l});return e.jsxs("div",{children:[e.jsx(p,{title:"WithDraw",path:"/"}),e.jsxs("div",{className:"withdraw__page",children:[e.jsxs("div",{className:"withdraw__content",children:[e.jsxs("div",{className:"withdraw__header",children:[e.jsx("h3",{className:"hall",style:{paddingTop:0},children:"Withdraw Amount:"}),e.jsxs("span",{style:{color:"black",fontSize:"14px"},children:["Availabe balance : ",s.balance," Usdt"]})]}),e.jsx(f,{...t,children:e.jsx("form",{onSubmit:t.handleSubmit(n),children:e.jsxs("div",{children:[e.jsx(b,{type:"text",name:"amount",placeholder:r("entities.transaction.fields.amount"),className:"input__withdraw"}),e.jsxs("div",{className:"number__click",children:[e.jsxs("div",{className:"withdraw__",children:[e.jsx("div",{children:" 30 "}),e.jsx("div",{children:"50"}),e.jsx("div",{children:"100"}),e.jsx("div",{children:"300"})]}),e.jsxs("div",{className:"withdraw__",children:[e.jsx("div",{children:"500"}),e.jsx("div",{children:"1000"}),e.jsx("div",{children:"3000"}),e.jsx("div",{children:"5000"})]})]}),e.jsx("button",{className:"confirm",type:"submit",children:"Confirm"})]})})})]}),e.jsxs("div",{className:"withdraw__rules",children:[e.jsx("div",{className:"rules__title",children:"Rules Description"}),e.jsxs("ul",{className:"rules__list",children:[e.jsxs("li",{children:["(1) The amount of single withdraw is between 20 ~ 100000000"," "]}),e.jsx("li",{children:"(2) the payment shall be made within 72 hours after the withdraw application is approved, and the actual time shall be subject to the system. The bank will charge a fee for each withdrawal, and the minumun withdraw amount is 20."}),e.jsxs("li",{children:["(3) Every accounts must complete a minumun purchaes order of 50 in order to whithdraw the money . if the member has not completed the corresponding order number. he/she cannot make a withdrawl. The member can make a full withdrawl if the account has completed more than 50 orders"," "]}),e.jsx("li",{children:"(4) withdraw time is 16:00-15:59"})]})]})]})]})}export{k as default};
