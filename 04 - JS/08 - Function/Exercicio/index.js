let nomeNave = prompt("Insira o nome da nave: ")
let velocidadeNave = 0
let menu = prompt("1 - Acelerar em 5km/s \n2 - Desacelerar em 5km/s \n3 - Imprimir dados de bordo \n 4 - Sair do programa")

while(menu != 4){
    if(menu == 1){
        velocidadeNave = velocidadeNave + 5
        menu = prompt("1 - Acelerar em 5km/s \n2 - Desacelerar em 5km/s \n3 - Imprimir dados de bordo \n 4 - Sair do programa")
    } else if(menu == 2){
        if(velocidadeNave <= 0){
            alert("A velocidade não pode ser diminuida")
            menu = prompt("1 - Acelerar em 5km/s \n2 - Desacelerar em 5km/s \n3 - Imprimir dados de bordo \n4 - Sair do programa")
            continue
        }
        velocidadeNave = velocidadeNave - 5
        menu = prompt("1 - Acelerar em 5km/s \n2 - Desacelerar em 5km/s \n3 - Imprimir dados de bordo \n 4 - Sair do programa")
    } else if(menu == 3){
        alert("Nome da nave: " + nomeNave + ", velocidade da nave: "+ velocidadeNave)
        menu = prompt("1 - Acelerar em 5km/s \n2 - Desacelerar em 5km/s \n3 - Imprimir dados de bordo \n 4 - Sair do programa")
    } else {
        alert("Programa encerrado")
    }
}