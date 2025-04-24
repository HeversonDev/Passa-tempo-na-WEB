let playButton = document.querySelector("#play-image")
let pauseButton = document.querySelector("#pause-image")
let stopButton = document.querySelector("#stop-image")
let restartButton = document.querySelector("#restart-image")
let alertIcon = document.querySelector("#alert-icon-off")
let body = document.querySelector("body")

let minuteClock = document.querySelector("#minute-clock")
let clockSeconds = document.querySelector("#clock-seconds")


// counter parameters

let minutes = 24
let seconds = 60
let timer
let timerAlert

// functions 

playButton.addEventListener("click",()=>{

   timer = setInterval(startCounting,1000)

})


// timer play, countdown and automatic shutdown

function startCounting(){
    seconds--

    if(seconds >= 10){
        clockSeconds.innerHTML = seconds
    }else if(seconds < 10 && seconds >= 0){
        clockSeconds.innerHTML = `0${seconds}`
    }

    if(seconds < 0){
        seconds = 59
        minutes--
        clockSeconds.innerHTML = seconds
    }

    if(minutes >= 10){
        minuteClock.innerHTML = minutes
    }else if(minutes < 10){
        minuteClock.innerHTML = `0${minutes}`
    }

    if(seconds == 0 && minutes == 0){

        clearInterval(timer)
        body.style.backgroundColor = "red"
        timerAlert = setInterval(alertColor, 1000)

        if(alertIcon.getAttribute("id") === "alert-icon-off"){
            alertIcon.setAttribute("id", "alert-icon")
        }

    }

    console.log(seconds)
}


// pause action

pauseButton.addEventListener("click", ()=>{
    clearInterval(timer)
})

// closing action

stopButton.addEventListener("click", ()=>{

    clearInterval(timer)
    minutes = 24
    seconds = 60

    clearInterval(timerAlert)
    if(body.style.backgroundColor != "#5C5C5C"){
        body.removeAttribute("style")
    }

    minuteClock.innerHTML = `25`
    clockSeconds.innerHTML = `00`

})

// restart action 

restartButton.addEventListener("click", ()=>{

    minutes = 24
    seconds = 60

    minuteClock.innerHTML = minutes
    clockSeconds.innerHTML = seconds
})

// alert color

function alertColor(){  
    setTimeout(changeColor, 1000)
}

function changeColor(){

        if(body.style.backgroundColor === "red"){
            body.style.backgroundColor = "yellow"
        }else if(body.style.backgroundColor === "yellow"){
            body.style.backgroundColor = "red"
        }

        if(alertIcon.getAttribute("src") === "assets/icons/notificacao.png"){
            alertIcon.setAttribute("src", "assets/icons/notificacao (1).png")
        }else{
            alertIcon.setAttribute("src", "assets/icons/notificacao.png")
        }

}

// alert icon button

alertIcon.addEventListener("click", ()=>{

    clearInterval(timer)
    minutes = 24
    seconds = 60

    clearInterval(timerAlert)
    if(body.style.backgroundColor != "#5C5C5C"){
        body.removeAttribute("style")
    }

    if(alertIcon.getAttribute("id") === "alert-icon"){
        alertIcon.setAttribute("id", "alert-icon-off")
    }

    minuteClock.innerHTML = `25`
    clockSeconds.innerHTML = `00`

})