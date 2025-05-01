let select = document.querySelector("select")
let bttChangeTime = document.querySelector("button")

bttChangeTime.addEventListener("click", ()=>{
    clearInterval(timer)
    
    let changeTime = select.value
    let selectedTimeZone = "America/Sao_Paulo"

    if(changeTime === "br"){
        selectedTimeZone = "America/Sao_Paulo"
    }else if(changeTime === "eua"){
        selectedTimeZone = "America/New_York"
    }else if(changeTime === "cn"){
        selectedTimeZone = "Asia/Shanghai"
    }else if(changeTime === "jp"){
        selectedTimeZone = "Asia/Tokyo"
    }else if(changeTime === "de"){
        selectedTimeZone = "Europe/Berlin"
    }else if(changeTime === "uk"){
        selectedTimeZone = "Europe/London"
    }else if(changeTime === "fr"){
        selectedTimeZone = "Europe/Paris"
    }else if(changeTime === "in"){
        selectedTimeZone = "Asia/Kolkata"
    }else if(changeTime === "it"){
        selectedTimeZone = "Europe/Rome"
    }else if(changeTime === "ca"){
        selectedTimeZone = "America/Toronto"
    }else if(changeTime === "kr"){
        selectedTimeZone = "Asia/Seoul"
    }else if(changeTime === "au"){
        selectedTimeZone = "Australia/Sydney"
    }else if(changeTime === "es"){
        selectedTimeZone = "Europe/Madri"
    }else if(changeTime === "ru"){
        selectedTimeZone = "Europe/Moscow"
    }else if(changeTime === "sa"){
        selectedTimeZone = "Asia/Riyadh"
    }else if(changeTime === "ch"){
        selectedTimeZone = "Europe/Zurich"
    }else if(changeTime === "nl"){
        selectedTimeZone = "Europe/Amsterdam"
    }else if(changeTime === "se"){
        selectedTimeZone = "Europe/Stockholm"
    }else if(changeTime === "ae"){
        selectedTimeZone = "Asia/Dubai"
    }else if(changeTime === "sg"){
        selectedTimeZone = "Asia/Singapore"
    }
    

    
    console.log(changeTime)
    console.log(selectedTimeZone)

    startTimer(selectedTimeZone)
})


let selectedTimeZone = "America/Sao_Paulo"
let timer
startTimer(selectedTimeZone)



function startTimer(selectedTimeZone){
   timer = setInterval(function(){
    workClock(selectedTimeZone)
   },1000)
}

function workClock(selectedTimeZone){
    let rightTime = new Date()
    let timeInTheWorld = rightTime.toLocaleTimeString("pt-BR",{
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: `${selectedTimeZone}`
    })

    let [hour, minute, second] = timeInTheWorld.split(":")

    console.log(hour, minute, second)

    
    let hourScreen = document.querySelector(".hour")
    let minuteScreen = document.querySelector(".minutes")
    let secondScreen = document.querySelector(".seconds")

    hourScreen.innerHTML = hour
    minuteScreen.innerHTML = minute
    secondScreen.innerHTML = second
    
}