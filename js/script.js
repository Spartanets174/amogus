const btnOpen = document.getElementById("btn")
const modal = document.getElementById("modal")
const btnClose = document.getElementById("modal-close")
const num = document.getElementById("num")
const yes = document.getElementById("yes")
const no = document.getElementById("no")
const btn1 = document.getElementById("btn1")
btnOpen.addEventListener("click", ()=> {
    modal.classList.add("show");
    setTimeout(()=>{modal.classList.remove("show")},3000)
})
btnClose.addEventListener("click", ()=>{
    modal.classList.remove("show")
})
btn1.addEventListener("click", ()=>{
    if (num.value==getRandom()) {
        yes.classList.add("show");
        console.log(getRandom())
        yes.classList.remove("none")
        setTimeout(()=>{yes.classList.remove("show") 
        yes.classList.add("none")},2000)
    }
    else{
        console.log(getRandom())
        no.classList.add("show");
        no.classList.remove("none")
        setTimeout(()=>{no.classList.remove("show")
        no.classList.add("none")},2000)
    }
})
function getRandom() {
    return rnd = Math.floor(Math.random()*10+1);
}
/* ------------Слайдер------------- 1*/

let images = ["img/Основной.bmp","img/прокачка.bmp","img/предметы.bmp"]
let names = ["Картинка 1","Картинка 2","Картинка 3"]
let i=0
const slider1_content = document.querySelector(".slider1_content")
const name1 = document.querySelector(".slider1_name")

const slider1 = document.querySelector(".slider1_content")
setInterval(()=>{
    if (i>2&&i!=0) {
        i=0
        name1.style.color="black"
    }
    else{
        
        name1.style.color="white"
    }
    slider1_content.style.backgroundImage = "url("+ images[i] +")"
    name1.innerHTML = names[i]
   
    i++;

},2000)
/* ------------Слайдер #4------------- 1*/
const slider4= document.getElementById("slider4")
const btnLeft= document.getElementById("slider4_btn--left")
const btnRight= document.getElementById("slider4_btn--right")

const width = 500
let current = 0
let count = slider4.querySelectorAll(".slider4_item").length

function sliderPos (width,current){
    position = width * current
    slider4.style.transform ="translate("+position+"px)"
}
sliderPos(width,current)
btnLeft.addEventListener("click", ()=> {
    if (current >= 0) {
        current--
    }
    current++
    console.log(current)
    sliderPos(width,current)
})
btnRight.addEventListener("click", ()=> {
    if (current <= -count+2) {
        current++
    }
    current--
    console.log(current)
    sliderPos(width,current)
})