(()=>{"use strict";const e=document.getElementById("main-container");let t=function(){const e=document.createElement("div");e.id="page-header";const t=document.createElement("div");return t.id="header-text",t.innerHTML="To Do List",e.appendChild(t),e},n=function(){const e=document.createElement("div");e.id="side-bar";const t=document.createElement("ul");t.id="task-selector";const n=document.createElement("li");n.id="all-tasks",n.innerHTML="Home";const d=document.createElement("li");d.id="today-tasks",d.innerHTML="Todays Tasks";const i=document.createElement("li");i.id="upcoming-tasks",i.innerHTML="Upcoming Tasks";const c=document.createElement("li");c.id="completed-tasks",c.innerHTML="Completed Tasks",t.appendChild(n),t.appendChild(d),t.appendChild(i),t.appendChild(c);const o=document.createElement("hr");return e.appendChild(t),e.appendChild(o),e},d=function(){const e=document.createElement("div");e.id="page-footer";const t=document.createElement("div");return t.id="footer-text",t.innerHTML="Developed by @ Copasetic Demon",e.appendChild(t),e};e.appendChild(t()),e.appendChild(n()),e.appendChild(d())})();