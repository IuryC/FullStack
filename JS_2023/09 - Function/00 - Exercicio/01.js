let spaceship = prompt("Insira o nome da nave: ");
let actualVelocity = 0;

function speedUpVelocity() {
    let newVelocity = actualVelocity + 5;
    console.log("Estamos a: " + newVelocity);
    return newVelocity;
}

function speedDownVelocity() {
    let newVelocity = actualVelocity - 5;
    console.log("Estamos a: " + newVelocity);
    return newVelocity;
}

function menu() {
    let chosenOption = prompt("Selecione a opção desejada: \n1- Acelerar a nave \n2- Desacelerar a nave \n3- Imprimir dados de bordo \n4 - Sair do programa");
    return parseInt(chosenOption); // Converter para número inteiro
}

let option = menu();

while (option !== 4) {
    switch (option) {
        case 1:
            actualVelocity = speedUpVelocity();
            break;
        case 2:
            actualVelocity = speedDownVelocity();
            break;
        case 3:
            alert("Nome da nave: " + spaceship + "\nVelocidade atual: " + actualVelocity);
            break;
        default:
            console.log("Opção inválida.");
    }

    option = menu(); // Perguntar novamente a opção após cada ação
}
