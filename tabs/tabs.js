const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")
const section3 = document.getElementById("section3")
const section4 = document.getElementById("section4")

btn4.addEventListener("click" ,()=>{
    section4.style.display="flex"
    section1.style.display="none"
    section2.style.display="none"
    section3.style.display="none"
})
btn3.addEventListener("click" ,()=>{
    section3.style.display="flex"
    section1.style.display="none"
    section2.style.display="none"
    section4.style.display="none"
})
btn2.addEventListener("click" ,()=>{
    section2.style.display="flex"
    section1.style.display="none"
    section4.style.display="none"
    section3.style.display="none"
})
btn1.addEventListener("click" ,()=>{
    section1.style.display="flex"
    section4.style.display="none"
    section2.style.display="none"
    section3.style.display="none"
})