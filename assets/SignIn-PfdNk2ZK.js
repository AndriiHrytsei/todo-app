import{r as n,u as c,a as r,j as s,c as m,o as d,L as g,b as h}from"./index-CL6CLm8V.js";const x=()=>{const[t,e]=n.useState(""),[i,o]=n.useState(""),l=c(),u=r(),p=a=>{a.preventDefault(),l(m({email:t,password:i})),u("/tasks")};return s.jsxs("form",{onSubmit:p,children:[s.jsx("label",{htmlFor:"signUpEmail",children:"Email"}),s.jsx("input",{type:"email",name:"email",id:"signUpEmail",value:t,onChange:a=>e(a.currentTarget.value)}),s.jsx("label",{htmlFor:"signUpPassword",children:"Password"}),s.jsx("input",{type:"password",name:"password",id:"signUpPassword",value:i,onChange:a=>o(a.currentTarget.value)}),s.jsx("button",{type:"submit",children:"Submit"})]})},S=()=>{const t=r();return n.useEffect(()=>{d(h,e=>{e&&t("/tasks")})},[]),s.jsxs("main",{children:[s.jsx(g,{to:"/signUp",children:"Sign up"}),s.jsx("h1",{children:"Sign in"}),s.jsx(x,{})]})};export{S as default};