/* Nav */
let buttonNav = document.querySelector(".mobile-nav-toggle")
let nav = document.querySelector("#nav")
let toggle = document.querySelector(".toggle")

buttonNav.addEventListener("click", () =>{
    console.log("click");
    console.log(toggle.classList.contains("close"))
    if(!toggle.classList.contains("close")){
        toggle.classList.add("close")
        toggle.src = "./assets/shared/icon-close.svg"
        nav.style.transform = 'translateX(0px)'
    }else{
        toggle.classList.remove("close")
        toggle.src = "./assets/shared/icon-hamburger.svg"
        nav.style.transform = 'translateX(300px)'
    }
})



