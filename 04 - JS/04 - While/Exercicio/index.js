let nomeNave = prompt("Insira o nome da nave: ")
let dobraEspacial = prompt("Deseja entrar em dobra espacial? \n1 - Sim \n2 - Não")
let contadorDobras = 0
while(dobraEspacial != 2){
    contadorDobras++
    dobraEspacial = prompt("Deseja realizar uma nova dobra espacial? \n1 - Sim \n2 - Não")
}
alert("Nome da nave: " + nomeNave +  "\n Quantidade do dobras: " + contadorDobras)
