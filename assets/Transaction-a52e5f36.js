import{r as d,u as c,B as e,j as s,D as x}from"./index-53ed5952.js";import{S as _}from"./SubHeader-71fa3f8d.js";import{D as j}from"./Dates-40feda68.js";import{L as u}from"./LoadingModal-9f36426d.js";import{N as v}from"./Nodata-0ea00d8f.js";import{u as N}from"./useDispatch-1b47f568.js";function L(){const[t,n]=d.useState("withdraw"),i=N(),r=c(e.selectLoading),l=c(e.selectHasRows),p=()=>{const a={type:t};i(x.doFetch(a,a))};d.useEffect(()=>{p()},[i,t]);const o=c(e.selectRows),h=a=>s.jsxs("div",{className:"content__transaction",children:[s.jsxs("div",{className:"transaction__left",children:[s.jsx("div",{className:`transaction__right ${a.status==="canceled"?"red":a.status==="pending"?"pendings":""}`,children:a.status}),s.jsx("div",{className:"transaction__date",children:j.Date(a==null?void 0:a.createdAt)})]}),s.jsxs("div",{className:`transaction__right ${a.status==="canceled"?"red":a.status==="pending"?"pendings":""}`,children:[a.type==="deposit"?"-":"","$",a==null?void 0:a.amount]})]});return s.jsxs("div",{children:[s.jsx(_,{title:"Transaction",path:"/profile"}),s.jsx("div",{className:"order__list",children:s.jsxs("div",{className:"list__transaction",children:[s.jsx("div",{className:t===""?"active__transacttion":"",onClick:()=>n(""),children:s.jsx("span",{className:"",children:"All"})}),s.jsxs("div",{onClick:()=>n("withdraw"),className:t==="withdraw"?"active__transacttion":"",children:[" ",s.jsx("span",{children:"Withdraw"})]}),s.jsx("div",{onClick:()=>n("deposit"),className:t==="deposit"?"active__transacttion":"",children:s.jsx("span",{children:"Deposit"})})]})}),s.jsxs("div",{className:"transaction__content",children:[r&&s.jsx(u,{}),!r&&o&&o.map(a=>h(a)),!l&&s.jsx(v,{})]})]})}export{L as default};
