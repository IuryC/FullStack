let pilotName = prompt("Qual seu nome, piloto?")

let velocity = 0

let newVelocity = prompt("A que velocidade você gostaria de acelerar?")

let confirmVelocity = confirm("Estamos acelerando para" + newVelocity + "km/s")

if (confirmVelocity) {
    velocity = newVelocity
}

if (velocity <= 0) {
    alert("Nave está parada, considere partir")
} else {
    if (velocity < 40) {
        alert("Você está devagar, considere aumentar um pouco")
    } else if (velocity >= 40 && velocity < 80) {
        alert("Parece uma bola velocidade para se manter")
    } else if (velocity >= 80 && velocity < 100) {
        alert("Velocidade alta, considere diminuir")
    } else {
        alert("Velocidade Perigosa, controle autómatico forçado")
    }

}




alert("Nome do Piloto: " + pilotName + "\nVelocidade: " + velocity)