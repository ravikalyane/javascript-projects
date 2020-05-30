// ------------------------------------------------ Analog Clock -------------------------------------------------- //
setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
    /*console.log(Date())*/
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

let toggleButton = document.querySelector(".toggle");
toggleButton.addEventListener("click", mode);
function mode() {
    document.querySelector(".toggle").style.justifyContent = "flex-end";
}

// --Clock color change--  //
let btnDark = document.querySelector("#dark-mode");
let btnLight = document.querySelector("#light-mode");

btnDark.addEventListener("click", darkModeClock);
btnLight.addEventListener("click", lightModeClock);

function darkModeClock() {
    var numberColor = document.querySelectorAll(".number");
    var i;
    for (i = 0; i < numberColor.length; i++) {
        numberColor[i].style.color = "white";
    }
    document.querySelector("#project-clock").style.backgroundImage = "linear-gradient(black, black)";
    document.querySelector(".clock").style.backgroundColor = "black";
    document.querySelector(".second").style.backgroundColor = "red";
    document.querySelector(".hour").style.backgroundColor = "red";
    document.querySelector(".minute").style.backgroundColor = "white";
    document.querySelector(".center-dot").style.backgroundColor = "white";
    document.querySelector("#dark-mode").style.display = "none";
    document.querySelector("#light-mode").style.display = "block";
    document.querySelector("#light-mode").style.color = "white";
}

function lightModeClock() {
    var numberColor = document.querySelectorAll(".number");
    var i;
    for (i = 0; i < numberColor.length; i++) {
        numberColor[i].style.color = "black";
    }
    document.querySelector("#project-clock").style.backgroundImage = "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)";
    document.querySelector(".clock").style.backgroundColor = "white";
    document.querySelector(".second").style.backgroundColor = "black";
    document.querySelector(".hour").style.backgroundColor = "black";
    document.querySelector(".minute").style.backgroundColor = "black";
    document.querySelector(".center-dot").style.backgroundColor = "black";
    document.querySelector("#dark-mode").style.display = "block";
    document.querySelector("#light-mode").style.display = "none";
}

// ------------------------------------------------- Digital Clock --------------------------------------------------- //
setInterval(digitalClock, 1000);
function digitalClock() {
    if (new Date().getHours() < 10) {
        document.querySelector(".digital-hours").innerHTML = "0" + new Date().getHours();
    } else {
        document.querySelector(".digital-hours").innerHTML = new Date().getHours();
    }

    if (new Date().getMinutes() < 10) {
        document.querySelector(".digital-minutes").innerHTML = "0" + new Date().getMinutes();
    } else {
        document.querySelector(".digital-minutes").innerHTML = new Date().getMinutes();
    }
    if (new Date().getSeconds() < 10) {
        document.querySelector(".digital-seconds").innerHTML = "0" + new Date().getSeconds();
    } else {
        document.querySelector(".digital-seconds").innerHTML = new Date().getSeconds();
    }
}

// ------------------------------------------------- Counter --------------------------------------------------- //
let count = 0,
    btnIncrease = document.querySelector("#increase"),
    btnDecrease = document.querySelector("#decrease");
btnReset = document.querySelector("#reset");

btnIncrease.addEventListener("click", increase);
btnDecrease.addEventListener("click", decrease);
btnReset.addEventListener("click", reset);

function increase() {
    count++;
    document.getElementById("count").innerHTML = count;
}
function decrease() {
    count--;
    document.getElementById("count").innerHTML = count;
}
function reset() {
    count = 0;
    document.getElementById("count").innerHTML = count;
}
