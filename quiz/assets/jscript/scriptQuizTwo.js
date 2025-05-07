//Elementos HTML a serem usados

let questionArea = document.querySelector(".question-area")
let questionDisplay = document.querySelector(".question")
let boxOfAlternatives = document.querySelector(".box-of-alternatives")
let resultArea = document.querySelector(".result-area")
let resultMessageone = document.querySelector(".result-message-one")
let resultMessageTwo = document.querySelector(".result-message-two")
let resultImg = document.querySelector(".result-area img")
let bttReset = document.querySelector("button")
let progress = document.querySelector(".progress")


//variáveis importantes para contabilidade de pergundas e pontos
let askInTurn = 0
let hits = 0

//chamando função de iniciar o game
startingGame()


// funções


//função de iniciar o game
function startingGame(){
    if(questions[askInTurn]){
        
        let questionMoment = questions[askInTurn]

        questionArea.style.display = "block"
        resultArea.style.display = "none"

        questionDisplay.innerHTML = `<h2 class="question">${questionMoment.question}</h2>`

        let optionsHtml = ""
        for(let i in questionMoment.alternatives){
            optionsHtml += `<div class="alternative-box" data-op="${i}"> <span>${parseInt(i)+1}</span><p>${questionMoment.alternatives[i]}</p> </div>`
            //`<p data-op="${i}"><span>${parseInt(i)+1}</span>${questionMoment.alternatives[i]}</p>`
        }

        boxOfAlternatives.innerHTML = optionsHtml
        document.querySelectorAll(".alternative-box").forEach(item =>{
            item.addEventListener("click", alternativeEvent)
        })


    }else{
        endOfQuiz()
    }
}

//função de click, contabiliza e avança a questão e contabiliza acertos
function alternativeEvent(e){
    let alternativeBox = e.currentTarget
    let chosenAlternative = parseInt(alternativeBox.getAttribute("data-op"))

    if(questions[askInTurn].response === chosenAlternative){
        hits++
        console.log(hits,"acertou")
    }

    askInTurn++
    startingGame()

    let pctProgress = Math.floor((askInTurn / questions.length) * 100)
    progress.style.width = `${pctProgress}%`

}


//função de tela final, mostra a tela de resultados e exibi os resultados atualizados
function endOfQuiz(){

    progress.style.width = "100%"

    questionArea.style.display = "none"
    resultArea.style.display = "flex"

    let correctAnswers = Math.floor((hits / questions.length) * 100) 
    console.log(correctAnswers)

    if(hits < 8){
        resultImg.setAttribute("src", "assets/icons/bravo.png")
        resultMessageone.innerHTML = `Ruim, Você só acertou ${correctAnswers}% das perguntas`
        resultMessageTwo.innerHTML = `Você acertou ${hits} de ${questions.length} perguntas`
    }else if(hits >= 8 && hits < 15){
        resultImg.setAttribute("src", "assets/icons/triste.png")
        resultMessageone.innerHTML = `Bom, Você acertou ${correctAnswers}% das perguntas`
        resultMessageTwo.innerHTML = `Você acertou ${hits} de ${questions.length} perguntas`
    }else if(hits >= 15){
        resultImg.setAttribute("src", "assets/icons/feliz.png")
        resultMessageone.innerHTML = `Parabéns, Você acertou ${correctAnswers}% das perguntas`
        resultMessageTwo.innerHTML = `Você acertou ${hits} de ${questions.length} perguntas`
    }
}

//botão de reiniciar o game, zera todos os dados
bttReset.addEventListener("click",()=>{
    askInTurn = 0
    hits = 0
    startingGame()
    progress.style.width = "0%"
})