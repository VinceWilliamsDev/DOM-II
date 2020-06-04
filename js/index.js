// Your code goes here

const body = document.querySelector("body");

// keydown

body.addEventListener("keydown", event => {
    if (event.key = "a") {
        body.style.backgroundColor = "dodgerblue"
    }
});

const h2 = document.querySelectorAll("h2");

// mouseover

h2.forEach(header => {
    header.addEventListener("mouseover", event => {
    event.target.style.fontSize = "30px"
    })
})

//wheel

body.addEventListener("wheel", event => body.style.color = "red")

// load

window.addEventListener("load", event => console.log("page is loaded"))

// focus

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("focus", event => {
        event.target.style.boxShadow = "3px 3px black"
    })
})

// resize

window.addEventListener("resize", event => {
    const height = window.innerHeight
    const width = window.innerWidth
    console.log( `the window size is ${height} x ${width}`)
})

// scroll
let currentPosition = window.scrollY

window.addEventListener("scroll", event => {
    if (currentPosition < window.scrollY) {
        body.style.backgroundColor = "yellow"
        currentPosition = window.scrollY
    } else if (currentPosition > window.scrollY) {
        body.style.backgroundColor = "orange"
        currentPosition = window.scrollY
    }
})

// select 

goodChoice = document.querySelectorAll(".destination h4")[2]
// console.log(goodChoice)

goodChoice.addEventListener("select", event => {
    alert("Good Choice")
})