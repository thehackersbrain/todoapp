(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(18),l=a.n(n),o=(a(25),a(11)),r=a(20),i=(a(26),a(8)),d=a(0);function b(e){return Object(d.jsx)("div",{className:"Menu",children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:"Search"})]}):""]})]})})})}b.defaultProps={title:"Default Title",searchBar:!0};var j=b;var m=function(e){return Object(d.jsx)("div",{className:"todoitem container",children:Object(d.jsxs)("div",{className:"alert alert-success",role:"alert",children:[Object(d.jsx)("h4",{className:"alert-heading",children:e.todos.title}),Object(d.jsx)("p",{children:e.todos.desc}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)("button",{type:"button",className:"btn btn-outline-success",children:"Done"})}),Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return e.onDelete(e.todos)},children:"Delete"})})]})})]})})};var u=function(e){return Object(d.jsxs)("div",{className:"todoArea",children:[Object(d.jsx)("h2",{className:"my-4",children:"Todo List Items"}),0===e.todos.length?"Nothing to Show, You're All Done...":e.todos.map((function(t){return Object(d.jsx)(m,{todos:t,onDelete:e.onDelete},t.sno)}))]})};var h=function(){return Object(d.jsx)("div",{className:"footer my-5",children:Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("span",{className:"text-muted",children:Object(d.jsx)("p",{align:"center",children:"\xa9 2021 All Right Reserved | TheHackersBrain"})})})})})};a(33);var x=function(e){var t=Object(s.useState)(""),a=Object(o.a)(t,2),c=a[0],n=a[1],l=Object(s.useState)(""),r=Object(o.a)(l,2),i=r[0],b=r[1];return Object(d.jsxs)("div",{className:"container",style:{fontFamily:'"Montserrat"'},children:[Object(d.jsx)("button",{type:"button",className:"addBtn btn btn-outline-primary","data-bs-toggle":"modal","data-bs-target":"#todoform",children:Object(d.jsx)("i",{className:"bx bx-plus"})}),Object(d.jsx)("div",{className:"modal fade",id:"todoform",tabIndex:-1,"aria-labelledby":"todoformArea","aria-hidden":"true",children:Object(d.jsx)("div",{className:"modal-dialog",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h5",{className:"modal-title",id:"todoformArea",children:"Add Todo"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(d.jsx)("div",{className:"modal-body",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c&&i?e.addTodo(c,i):alert("Fields cannot be blank. :)")},children:[Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",id:"todotitle",placeholder:"Enter Title",value:c,onChange:function(e){return n(e.target.value)},required:!0})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("textarea",{className:"form-control",id:"tododesc",rows:3,placeholder:"Enter Description",required:!0,value:i,onChange:function(e){return b(e.target.value)}})}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add Todo"})]})]})})})]})})})]})};var O=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("h3",{className:"text-center",children:"About Page"})})},v=a(2);var N=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){b(l.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(l))},a=function(e,t){var a={sno:l.length+1,title:e,desc:t};b([].concat(Object(r.a)(l),[a]))},c=Object(s.useState)(e),n=Object(o.a)(c,2),l=n[0],b=n[1];return Object(s.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(l))}),[l]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(j,{title:"Todo App"}),Object(d.jsxs)(v.c,{children:[Object(d.jsx)(v.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)("div",{className:"TodoArea",children:[Object(d.jsx)(u,{todos:l,onDelete:t}),Object(d.jsx)(x,{addTodo:a})]})}}),Object(d.jsx)(v.a,{exact:!0,path:"/about",children:Object(d.jsx)(O,{})})]}),Object(d.jsx)(h,{})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),n(e),l(e)}))};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),p()}},[[34,1,2]]]);
//# sourceMappingURL=main.94af1130.chunk.js.map