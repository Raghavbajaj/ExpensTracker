(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n(7),s=n.n(a),i=function(){return Object(c.jsx)("h2",{children:"Expense Tracker"})},o=n(3),u=n(8),j=n(4),l=function(t,e){switch(e.type){case"DELETE_TRANSACTION":return Object(j.a)(Object(j.a)({},t),{},{transaction:t.transaction.filter((function(t){return t.id!==e.payload}))});case"ADD_TRANSACTION":return Object(j.a)(Object(j.a)({},t),{},{transaction:[e.payload].concat(Object(u.a)(t.transaction))});default:return t}},d={transaction:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},b=Object(r.createContext)(d),x=function(t){var e=t.children,n=Object(r.useReducer)(l,d),a=Object(o.a)(n,2),s=a[0],i=a[1];return Object(c.jsx)(b.Provider,{value:{transaction:s.transaction,deleteTransaction:function(t){i({type:"DELETE_TRANSACTION",payload:t})},addTransaction:function(t){i({type:"ADD_TRANSACTION",payload:t})}},children:e})},O=function(){var t=Object(r.useContext)(b).transaction.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Your Balance"}),Object(c.jsxs)("h1",{children:["$",t]})]})},h=function(){var t=Object(r.useContext)(b).transaction.map((function(t){return t.amount}));console.log(t);var e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(c.jsxs)("div",{className:"inc-exp-container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Income"}),Object(c.jsxs)("p",{className:"money plus",children:["+$",e]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Expense"}),Object(c.jsxs)("p",{className:"money minus",children:["-$",n]})]})]})},m=function(t){var e=t.transaction,n=Object(r.useContext)(b).deleteTransaction,a=e.amount<0?"-":"+";return Object(c.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text," ",Object(c.jsxs)("span",{children:[a,"$",Math.abs(e.amount)]}),Object(c.jsx)("button",{onClick:function(){return n(e.id)},className:"delete-btn",children:"x"})]})},f=function(){var t=Object(r.useContext)(b).transaction;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"History"}),Object(c.jsx)("ul",{className:"list",children:t.map((function(t){return Object(c.jsx)(m,{transaction:t},t.id)}))})]})},p=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],s=Object(r.useState)(0),i=Object(o.a)(s,2),u=i[0],j=i[1],l=Object(r.useContext)(b).addTransaction;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Add new transaction"}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Math.floor(1e8*Math.random()),text:n,amount:+u};console.log(u),l(e)},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{htmlFor:"text",children:"Text"}),Object(c.jsx)("input",{type:"text",value:n,onChange:function(t){return a(t.target.value)},placeholder:"Enter text..."})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(c.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(c.jsx)("input",{type:"number",value:u,onChange:function(t){return j(t.target.value)},placeholder:"Enter amount..."})]}),Object(c.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};n(14);var v=function(){return Object(c.jsxs)(x,{children:[Object(c.jsx)(i,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(O,{}),Object(c.jsx)(h,{}),Object(c.jsx)(f,{}),Object(c.jsx)(p,{})]})]})};s.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.114a83bc.chunk.js.map