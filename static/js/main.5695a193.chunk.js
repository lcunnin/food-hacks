(this["webpackJsonpfood-hacks"]=this["webpackJsonpfood-hacks"]||[]).push([[0],{40:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(17),i=s.n(n),r=(s(8),s(3)),o=s(4),l=s.n(o),j=(s(40),s(0));function d(){return Object(j.jsx)("div",{children:Object(j.jsx)("header",{className:"navbar",children:Object(j.jsxs)("div",{className:"toolbar",children:[Object(j.jsx)("h2",{className:"title",children:" Food Hacks "}),Object(j.jsx)("div",{className:"user-info"})]})})})}var b=s(5),h=s(7);s(42);function m(){var e=Object(c.useState)({title:"",message:""}),t=Object(r.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),i=Object(r.a)(n,2),o=i[0],d=i[1],m=function(e){a(Object(h.a)(Object(h.a)({},s),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("form",{className:"new-entry-form",onSubmit:function(e){e.preventDefault(),d(!0),l.a.post("https://zn2o6.sse.codesandbox.io/api/posts/new",s).then((function(e){a(""),d(!1)})).catch((function(e){console.error(e.response.data),d(!1)}))},children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h4",{children:"Post a food tip or trick!"}),Object(j.jsx)("hr",{})]}),Object(j.jsxs)("div",{className:"form-content",children:[Object(j.jsx)("div",{className:"form-label",children:Object(j.jsx)("label",{htmlFor:"title",children:"Title"})}),Object(j.jsx)("div",{className:"form-text",children:Object(j.jsx)("input",{id:"title",name:"title",type:"text",maxLength:"100",placeholder:"Enter Title",value:s.title,onChange:m,required:!0})}),Object(j.jsx)("div",{className:"form-label",children:Object(j.jsx)("label",{htmlFor:"message",children:"Message"})}),Object(j.jsx)("div",{className:"form-textarea",children:Object(j.jsx)("textarea",{id:"message",name:"message",type:"text",cols:"50",rows:"30",maxLength:"300",placeholder:"Type Here",value:s.message,onChange:m,required:!0})}),Object(j.jsx)("button",{type:"submit",className:"submit-button",disabled:o,children:o?"Loading...":"Submit"})]})]})}function u(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),i=Object(r.a)(n,2),o=i[0],b=i[1];if(Object(c.useEffect)((function(){l.a.get("https://zn2o6.sse.codesandbox.io/api/posts",s).then((function(e){null!==e.data&&a(e.data)})).catch((function(e){console.error("Error fetching data: ",e),b(e)}))}),[s]),o)return"Opps...something went wrong!";var h=s.map((function(e){return Object(j.jsxs)("div",{className:"post-body",children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsx)("p",{children:e.message})]},e.id)}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsxs)("div",{className:"posts-container",children:[Object(j.jsx)("div",{className:"post-list",children:h}),Object(j.jsx)(m,{className:"submit-post-container"})]})]})}i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root"))},8:function(e,t,s){}},[[43,1,2]]]);
//# sourceMappingURL=main.5695a193.chunk.js.map