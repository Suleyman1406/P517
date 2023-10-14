const wrapperElement = document.querySelector(".wrapper");
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open-btn");



sidebar.addEventListener("click",(e)=>e.stopPropagation());
sidebarOpenBtn.addEventListener("click",(e)=>{
  e.stopPropagation();
  wrapperElement.classList.toggle("sidebar-open")
})


window.addEventListener("click",()=>{
  if(wrapperElement.classList.contains("sidebar-open") && window.innerWidth <=968){
    wrapperElement.classList.remove("sidebar-open")
  }
})


window.addEventListener("resize",()=>{
  // if(wrapperElement.classList.contains("sidebar-open") && window.innerWidth <=968 && window.innerWidth > 967){
  //   wrapperElement.classList.remove("sidebar-open")
  // }
})
