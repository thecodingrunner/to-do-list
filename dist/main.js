(()=>{"use strict";document.getElementById("form").addEventListener("submit",(function(e){e.preventDefault()}));const e=document.getElementById("taskBtn"),t=document.querySelector("dialog"),o=document.querySelector(".closeForm"),n=document.querySelector(".submit"),l=document.getElementById("title"),c=document.getElementById("description"),d=document.getElementById("date"),s=document.getElementById("priority");e.addEventListener("click",(()=>{t.showModal()})),o.addEventListener("click",(()=>{t.close(),console.log("test")})),n.addEventListener("click",(()=>{t.close(),console.log(l.value),console.log(c.value),console.log(d.value),console.log(s.value)}))})();