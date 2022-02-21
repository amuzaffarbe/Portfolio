let div = document.querySelector(".div").children

const arr = []

const result = Object.entries(div)

result.map(i => {
    arr.push(i)
})


arr.map(i => {
    setInterval(() => {
        i[1].classList.add("show")
    }, 4500);
})