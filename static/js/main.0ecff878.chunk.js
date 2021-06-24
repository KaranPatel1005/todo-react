(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),l=n.n(s),i=(n(14),n(4)),r=n(8),o=n(2),d=n(0);var u=function(e){return Object(d.jsxs)("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)},children:[Object(d.jsx)("span",{className:"visually-hidden",children:"Show "}),Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("span",{className:"visually-hidden",children:" tasks"})]})};var b=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],s=n[1],l=Object(c.useState)(""),i=Object(o.a)(l,2),r=i[0],u=i[1],b=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current}(a),j=Object(c.useRef)(null),m=Object(c.useRef)(null),f=Object(d.jsxs)("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),e.editTask(e.id,r),u(""),s(!1)},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("label",{className:"todo-label",htmlFor:e.id,children:["New name for ",e.name]}),Object(d.jsx)("input",{id:e.id,className:"todo-text",type:"text",value:r,onChange:function(e){u(e.target.value)},ref:j})]}),Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsxs)("button",{type:"button",className:"btn todo-cancel",onClick:function(){return s(!1)},children:["Cancel",Object(d.jsxs)("span",{className:"visually-hidden",children:["renaming ",e.name]})]}),Object(d.jsxs)("button",{type:"submit",className:"btn btn__primary todo-edit",children:["Save",Object(d.jsxs)("span",{className:"visually-hidden",children:["new name for ",e.name]})]})]})]}),O=Object(d.jsxs)("div",{className:"stack-small",children:[Object(d.jsxs)("div",{className:"c-cb",children:[Object(d.jsx)("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),Object(d.jsx)("label",{className:"todo-label",htmlFor:e.id,children:e.name})]}),Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsxs)("button",{type:"button",className:"btn",onClick:function(){return s(!0)},ref:m,children:["Edit ",Object(d.jsx)("span",{className:"visually-hidden",children:e.name})]}),Object(d.jsxs)("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)},children:["Delete ",Object(d.jsx)("span",{className:"visually-hidden",children:e.name})]})]})]});return Object(c.useEffect)((function(){!b&&a&&j.current.focus(),b&&!a&&m.current.focus()}),[b,a]),Object(d.jsx)("li",{className:"todo stack-small",children:a?f:O})};var j=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1],l=Object(c.useState)("false"),i=Object(o.a)(l,2),r=i[0],u=i[1];return Object(d.jsxs)("form",{onSubmit:function(t){""===a?(u(""),t.preventDefault()):(t.preventDefault(),e.addTask(a),s(""),u("false"))},children:[Object(d.jsx)("h2",{className:"label-wrapper",children:Object(d.jsx)("label",{htmlFor:"todo-input",className:"label__lg",children:"What need to be done?"})}),Object(d.jsx)("input",{type:"text",id:"todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:a,onChange:function(e){s(e.target.value)}}),Object(d.jsx)("span",{className:r?"visually-hidden":"text-red",children:"Wrtite something!"}),Object(d.jsx)("button",{type:"submit",className:"btn btn__primary btn__lg",children:"Add"})]})},m=n(9),f={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},O=Object.keys(f);var p=function(e){var t=Object(c.useState)(e.tasks),n=Object(o.a)(t,2),a=n[0],s=n[1],l=Object(c.useState)("All"),p=Object(o.a)(l,2),h=p[0],x=p[1];function v(e){var t=a.map((function(t){return e===t.id?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t}));s(t)}function g(e){var t=a.filter((function(t){return e!==t.id}));s(t)}function k(e,t){var n=a.map((function(n){return e===n.id?Object(i.a)(Object(i.a)({},n),{},{name:t}):n}));s(n)}var N=a.filter(f[h]).map((function(e){return Object(d.jsx)(b,{id:e.id,name:e.name,completed:e.completed,keys:e.id,toggleTaskCompleted:v,deleteTask:g,editTask:k})})),y=1!==N.length?"tasks":"task",C=0===N.length?"No Tasks":"".concat(N.length," ").concat(y," remaining"),S=O.map((function(e){return Object(d.jsx)(u,{name:e,isPressed:e===h,setFilter:x},e)})),_=Object(c.useRef)(null),T=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current}(a.length);return Object(c.useEffect)((function(){a.length-T===-1&&_.current.focus()}),[a.length,T]),Object(d.jsxs)("div",{className:"todoapp stack-large",children:[Object(d.jsx)("h1",{children:"TodoMatic"}),Object(d.jsx)(j,{addTask:function(e){var t={id:"todo-"+Object(m.a)(),name:e,completed:!1};s([].concat(Object(r.a)(a),[t]))}}),Object(d.jsx)("div",{className:"filter btn-group stack-exception",children:S}),Object(d.jsx)("h2",{id:"list-heading",tabIndex:"-1",ref:_,children:C}),Object(d.jsx)("ul",{rol:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading",children:N})]})};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{tasks:[{id:"todo-0",name:"Eat",completed:!0},{id:"todo-1",name:"Sleep",completed:!1},{id:"todo-2",name:"Repeat",completed:!1}]})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0ecff878.chunk.js.map