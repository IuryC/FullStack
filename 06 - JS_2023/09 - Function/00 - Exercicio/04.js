// function saudacao(){
//     console.log("Bom dia, mundo")
// }
// saudacao()


// let entrada = prompt("Insira o número: ")
// let numInt = parseInt(entrada)

// function cubo(numInt){
//     let cuboCalculado = numInt * numInt * numInt
//     return cuboCalculado
// }
// let cuboIm = cubo(numInt)
// console.log(cuboIm)


// function conversao(fahrenheint){
//     let celsius = (fahrenheint - 32) * 0.5556
//     return celsius
// }


// let tempCelsius = conversao(150)
// console.log(tempCelsius)

let newTemp = 0
function fahrenheintToCelsius() {
    let convertedCelsius = (temperatura - 32) / 1.8
    return convertedCelsius
}

function celsiusToFahrenheit() {
    let convertedFahrenheit = temperatura * 1.8 + 32
    return convertedFahrenheit
}

function menu() {
    alert("1 - Celsius para Fahrenheit \n2 - Fahrenheint para Celsius")
}

menu()
let chosenOption = prompt("Insira o número da conversão desejada: ")
let temperatura = prompt("Insira a temperatura que deseja converter: ")

let chosenOptionInt = parseInt(chosenOption)

switch (chosenOptionInt) {
    case 1:
        newTemp = celsiusToFahrenheit()
        console.log("A temperatura: " + temperatura + ", convetida é: " + newTemp)
        break
    case 2:
        newTemp = fahrenheintToCelsius()
        console.log("A temperatura: " + temperatura + ", convertida é: " + newTemp)
}