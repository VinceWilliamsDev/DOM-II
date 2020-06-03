// Your code goes here

const body = document.querySelector("body");

// keydown

body.addEventListener("keydown", event => {
    if (event.key = "A") {
        body.style.backgroundColor = "dodgerblue"
    }
});

const h2 = document.querySelectorAll("h2");

// mouseover

h2.forEach(header => {
    header.addEventListener("mouseover", event => {
    header.style.fontSize = "30px"
    })
})

//wheel

body.addEventListener("wheel", event => body.style.color = "red")

// load

window.addEventListener("load", event => console.log("page is loaded"))

// focus

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("focus", event => {
        event.style.boxShadow = "5px 5px black"
    })
})
