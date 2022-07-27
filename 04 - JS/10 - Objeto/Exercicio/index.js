let spaceship = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
}

function registerSpaceship(){
    spaceship.name = prompt("Informe o nome da nave: ")
    spaceship.tipo = prompt("Informe o tipo da nave: ")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima: "))
}

let aceleracao = 0
function chooseOption(){
    let option = prompt("O que deseja fazer? " +
    "\n 1 - Acelerar" +
    "\n 2 - Parar"
    )

    while(option != 2){
        
    }
}

registerSpaceship()

chooseOption()
spaceship.speedUp(aceleracao)
console.log(spaceship.velocity)