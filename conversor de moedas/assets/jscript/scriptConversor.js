let coinOne = document.querySelector("#coin-one")
let coinTwo = document.querySelector("#coin-two")

let conversionValue = document.querySelector("#conversion-value")
let conversionResponse = document.querySelector("#conversion-response p")
let convertCurrencyButton = document.querySelector("#convert-currency-button")


//eventos
conversionValue.addEventListener("keyup", initiatingRequest)
convertCurrencyButton.addEventListener("click", initiatingRequestBTT)

//funções


function initiatingRequest(e){
    if(e.key === "Enter"){
        requestOperation(coinOne.value, coinTwo.value, conversionValue.value)
    }
}

function initiatingRequestBTT(){
    requestOperation(coinOne.value, coinTwo.value, conversionValue.value)
}


async function requestOperation(one, two, value){
    console.log(one, two, value)

    let request = await fetch(`http://api.exchangerate.host/convert?access_key=0cb1a5a7b2eab1d874e8b9d322383403&from=${one}&to=${two}&amount=${value}`)
    let convertRequest = await request.json()

    let valueResponse = convertRequest.result
    let valueResponseFormat = valueResponse.toFixed(2)

        switch (one) {
            case "USD" :
                one = `DÓLAR AMERICANO`
                break
            case "BRL" :
                one = `REAL BRASILEIRO`
                break
            case "EUR" :
                one = `EURO`
                break
            case "JPY" :
                one = `IENE JAPONÊS`
                break
            case "GBP" :
                one = `LIBRA ESTERLINA`
                break
            case "CNY" :
                one = `YUAN CHINÊS (RENMINBI)`
                break
            case "CHF" :
                one = `FRANCO SUÍÇO`
                break
            case "CAD" :
                one = `DÓLAR CANADENSE`
                break
            case "AUD" :
                one = `DÓLAR AUSTRALIANO`
                break
            case "HKD" :
                one = `DÓLAR DE HONG KONG`
                break
        }

        switch (two) {
            case "USD" :
                two = `DÓLAR AMERICANO`
                break
            case "BRL" :
                two = `REAL BRASILEIRO`
                break
            case "EUR" :
                two = `EURO`
                break
            case "JPY" :
                two = `IENE JAPONÊS`
                break
            case "GBP" :
                two = `LIBRA ESTERLINA`
                break
            case "CNY" :
                two = `YUAN CHINÊS (RENMINBI)`
                break
            case "CHF" :
                two = `FRANCO SUÍÇO`
                break
            case "CAD" :
                two = `DÓLAR CANADENSE`
                break
            case "AUD" :
                two = `DÓLAR AUSTRALIANO`
                break
            case "HKD" :
                two = `DÓLAR DE HONG KONG`
                break
        }

    
    conversionResponse.innerHTML = `<p>Resposta da conversão: ${value} em ${one} são ${valueResponseFormat} em ${two} </p>`

}