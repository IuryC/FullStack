let spaceshipName = prompt("Insira o nome da espaçonave: ")
let newSpaceship = ""
let caracterDiff = prompt("Qual caractere você deseja substituir?")
let caracterSubs = prompt("Por qual caractere você deseja substituir?")

for(let i = 0; i < spaceshipName.length; i++){
    if(spaceshipName[i] == caracterDiff){
        newSpaceship += caracterSubs 
    } else {
        newSpaceship += spaceshipName[i]
    }
}
console.log(newSpaceship)