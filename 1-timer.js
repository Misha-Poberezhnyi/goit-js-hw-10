import"./assets/styles-jnHPBoGY.js";import{f as y,i as l}from"./assets/vendor-BbbuE1sJ.js";const r=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");let a=null,i=null;n.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(l.error({message:"Please choose a date in the future"}),n.disabled=!0):(a=t,n.disabled=!1)}};y(r,g);n.addEventListener("click",()=>{a&&(n.disabled=!0,r.disabled=!0,i=setInterval(()=>{const t=a-new Date;if(t<=0){clearInterval(i),r.disabled=!1,n.disabled=!0,l.success({message:"Time's up!"});return}const{days:c,hours:d,minutes:u,seconds:s}=q(t);S.textContent=o(c),p.textContent=o(d),b.textContent=o(u),D.textContent=o(s)},1e3))});function q(e){const s=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:m,minutes:f,seconds:h}}function o(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
