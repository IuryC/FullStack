let nomeNave = prompt("Insira o nome da nave: ")
let velocidadeNave = 0
let opcoes 

function menu() {
    let option
    while(option != 1 && option != 2 && option != 3 && option != 4){
        option = prompt("O que deseja fazer?\n" + 
                        "1 - Acelerar a nave em 5km/s\n" +
                        "2 - Desacelerar a nave em 5km/s\n"+
                        "3 - Imprimir dados de bordo\n" +
                        "4 - Sair do programa")
    }
    return option
}

function aumentarVelocidade(velocidadeNave){
    let novaVelocidade = velocidadeNave + 5
    return novaVelocidade
}

function reduzirVelocidade(velocidadeNave){
    novaVelocidade = velocidadeNave - 5
    if(novaVelocidade < 0){
        novaVelocidade = 0
    }
    return novaVelocidade
}

function mostrarDados(nome, velocidadeNave){
    alert("Nome: " + nomeNave +
          "\nVelocidade: " + velocidadeNave)
          
}

opcoes = menu()
console.log(opcoes)

while(opcoes != 4){
    switch(opcoes){
        case "1":
            velocidadeNave = aumentarVelocidade(velocidadeNave)
            break
        case "2":
            velocidadeNave = reduzirVelocidade(velocidadeNave)
            break
        case "3":
            mostrarDados(nomeNave, velocidadeNave)
            break
        case "4":
            alert("Programa encerrado") 
    }
}