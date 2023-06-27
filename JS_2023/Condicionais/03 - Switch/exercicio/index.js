let yearDistance = prompt("Qual a distância em anos-luz?")

alert("Para qual dessas opções você deseja converter? \n1- Parsec (PC) \n2- Unidade astronômica (AU) \n3- Quilômetros (km)")

let chosenOption = parseInt(prompt())
let chosenUnity
let distanciaConvertida

switch(chosenOption) {
    case 1:
        chosenUnity = "Parsec"
        distanciaConvertida = yearDistance * 0.306601
        break
    case 2:
        chosenUnity = "Unidade Astronômica"
        distanciaConvertida = yearDistance * 63241.1
        break
    case 3:
        chosenUnity = "Quilômetros"
        distanciaConvertida = yearDistance * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        distanciaConvertida = "Conversão fora do escopo"   
}

alert("Distância em anos luz: " + yearDistance + "\nUnidade selecionada: " + chosenUnity + "\nDistância após conversão: " + distanciaConvertida )
