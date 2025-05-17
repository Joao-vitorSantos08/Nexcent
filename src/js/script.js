let menu = document.getElementById("menu-toggle")

let navegation = document.getElementById("navegation-mobile")

menu.addEventListener("click", function(){
    navegation.classList.toggle("show")
    menu.classList.toggle("active")
})

