let coinOne = document.querySelector("#coin-one")
let coinTwo = document.querySelector("#coin-two")

let conversionValue = document.querySelector("#conversion-value")
let conversionResponse = document.querySelector("#conversion-response p")


//eventos
conversionValue.addEventListener("keyup", initiatingRequest)


//funções


function initiatingRequest(e){
    if(e.key === "Enter"){
        requestOperation(coinOne.value, coinTwo.value, conversionValue.value)
        

        console.log("kkkkk")
    }
}

async function requestOperation(one, two, value){
    console.log(one, two, value)

    let request = await fetch(`http://api.exchangerate.host/convert?access_key=0cb1a5a7b2eab1d874e8b9d322383403&from=${one}&to=${two}&amount=${value}`)
    let convertRequest = await request.json()

    let valueResponse = convertRequest.result
    let valueResponseFormat = valueResponse.toFixed(2)
    console.log(valueResponse)
 
    console.log(convertRequest)

    conversionResponse.innerHTML = `<p>Resposta da conversão: ${valueResponseFormat} </p>`

}