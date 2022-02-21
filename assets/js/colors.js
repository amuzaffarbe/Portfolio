let color = document.querySelector(".color")
let blackColor = document.querySelector(".black-color")
let whiteColor = document.querySelector(".white-color")
let redColor = document.querySelector(".red-color")

// localStorage.removeItem("color")
color.classList.add(localStorage.getItem("color"))


blackColor.addEventListener("click", function(){
    color.classList.remove(localStorage.getItem("color"))
    localStorage.removeItem("color")
})

whiteColor.addEventListener("click", function(){
    color.classList.remove(localStorage.getItem("color"))
    localStorage.setItem("color", "white")
    color.classList.add(localStorage.getItem("color"))
})

redColor.addEventListener("click", function(){
    color.classList.remove(localStorage.getItem("color"))
    localStorage.setItem("color", "red")
    color.classList.add(localStorage.getItem("color"))
})