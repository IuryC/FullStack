function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity)
}

speedUp(60, 10)
speedUp(60, 30)

function saudacao(nome, mensagem = "olá"){
    console.log(nome + ", " + mensagem)
}

saudacao("Luffy")


function newSpeedUp(velocity, acceleration, unidade = "km/s"){
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity + unidade)
}

newSpeedUp(10, 10)

function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity)
    return newVelocity
}

console.log(speedUp(50, 20))
