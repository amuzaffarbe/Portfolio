let color = document.querySelector(".color")
let blackColor = document.querySelector(".black-color")
let whiteColor = document.querySelector(".white-color")

// localStorage.removeItem("color")
color.classList.add(localStorage.getItem("color"))


blackColor.addEventListener("click", function () {
    color.classList.remove(localStorage.getItem("color"))
    localStorage.removeItem("color")
})

whiteColor.addEventListener("click", function () {
    color.classList.remove(localStorage.getItem("color"))
    localStorage.setItem("color", "white")
    color.classList.add(localStorage.getItem("color"))
})

    // Contact page

let names = document.querySelector(".ism-c")
let telefon = document.querySelector(".telefon-c")
let savol = document.querySelector(".savol-c")
let telegram = document.querySelector(".telegram-c")
let sendBtn = document.querySelector(".contact-send")

const sender = document.querySelector("#sender"),
    toast = document.querySelector(".toast"),
    closeIcon = document.querySelector(".close"),
    progress = document.querySelector(".progress"),
    text1 = document.querySelector(".text1"),
    text2 = document.querySelector(".text2");

let timer1, timer2;


sendBtn.addEventListener("click", () => {
    if (names.value == "" && telefon.value == "" && savol.value == "" && telegram.value == "") {
        return;
    } else {
        var my_text = `Yangi Feedback :%0A%0AIsmi - ${names.value}, %0A%0ASizga yuborgan matni - %0A${savol.value}, %0A%0ATelefon raqami - ${telefon.value}, %0A%0ATelegrami - ${telegram.value}`

        var token = "5252628125:AAFtsmD2VCHGGcq-J-7UB9sZ12q18LMm4U0";
        var chat_id = -1001682797143;
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
            progress.classList.remove("active");
        }, 5300);

        setTimeout(() => {
            window.location.reload()
        }, 5000);
    }
})

closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
        progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
    window.location.reload()
});
