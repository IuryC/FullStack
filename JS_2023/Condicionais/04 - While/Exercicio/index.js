
let chosenOption = ""
let spaceWarp = 0

let spaceShipName = prompt("Insira o nome da nave: ")
chosenOption = prompt("Deseja entrar em manobra espacial: \n1 - Sim\n2 - Não")

while(chosenOption == "1"){
    spaceWarp += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?")
}

console.log("Nome da nave: " + spaceShipName + "\nNúmero de dobras: " + spaceWarp)