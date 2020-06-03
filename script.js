//-------Analog Clock-------//
setInterval(setClock, 1000)

const hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
clockContainer = document.querySelector('#project-clock'),
clock = document.querySelector('.clock'),
number = document.querySelectorAll('.number'),
centerDot = document.querySelector('.center-dot')
function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = currentDate.getMinutes() / 60
    const hoursRatio = currentDate.getHours() / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360)
}

setClock()

//Dark Mode
const btnSwitch = document.querySelector('.btn-switch')

btnSwitch.addEventListener('click', darkMode)
function darkMode(){
    let allElements = [hourHand, secondHand, clock, clockContainer, centerDot, minuteHand,]
    for(let i=0; i<allElements.length; i++){
        allElements[i].classList.toggle('dark')
    }
    for(let i=0; i<number.length; i++){
        number[i].classList.toggle('dark')
    }
}


//-------Digital Clock-------//
setInterval(digitalClock, 1000)
function digitalClock() {
    if (new Date().getHours() < 10) {
        document.querySelector(".digital-hours").innerHTML = "0" + new Date().getHours()
    } 
    else if (new Date().getHours()>12) {
        document.querySelector(".digital-hours").innerHTML = "0" + (new Date().getHours() - 12)  
    }
    else {
        document.querySelector(".digital-hours").innerHTML = new Date().getHours()
    }

    if (new Date().getMinutes() < 10) {
        document.querySelector(".digital-minutes").innerHTML = "0" + new Date().getMinutes()
    } else {
        document.querySelector(".digital-minutes").innerHTML = new Date().getMinutes()
    }
    if (new Date().getSeconds() < 10) {
        document.querySelector(".digital-seconds").innerHTML = "0" + new Date().getSeconds()
    } else {
        document.querySelector(".digital-seconds").innerHTML = new Date().getSeconds()
    }
}

//-------Counter-------//
let count = 0,
btnIncrease = document.querySelector("#increase"),
btnDecrease = document.querySelector("#decrease")
btnReset = document.querySelector("#reset")

btnIncrease.addEventListener("click", increase)
btnDecrease.addEventListener("click", decrease)
btnReset.addEventListener("click", reset)

function increase() {
    count++
    document.getElementById("count").innerHTML = count
}
function decrease() {
    count--
    document.getElementById("count").innerHTML = count
}
function reset() {
    count = 0
    document.getElementById("count").innerHTML = count
}
