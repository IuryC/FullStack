let nomeNave = prompt("Insira o nome da nave: ")
let caractere = prompt("Qual caractere deseja substituir? ")
let newCaractere = prompt("Pelo qual caractere você quer substituir?")
let newNomeNave = ""

for(let i = 0; i < nomeNave.length; i++){
    if(nomeNave[i] == caractere){
        newNomeNave += newCaractere
    } else {
        newNomeNave += nomeNave[i]
    }
}

alert(newNomeNave)
alert(nomeNave)
