const navBars =document.querySelector(".fa-bars");
const navItems = document.querySelector(".header-title");
const btnLogin = document.querySelector(".btn");

navBars.addEventListener("click",()=>{
    // navItems.ClassList.toggle("active");
console.log("click");
navItems.classList.toggle("active");
btnLogin.classList.toggle("active");
})