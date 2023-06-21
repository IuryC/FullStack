let pilotName = prompt("Qual seu nome, piloto?")

let velocity = 0

let newVelocity = prompt("A que velocidade você gostaria de acelerar?")

let confirmVelocity = confirm("Estamos acelerando para" + newVelocity + "km/s")

if(confirmVelocity){
    velocity = newVelocity
}

if(velocity <=0){
    console.log("Nave está parada, considere partir")
} else {
    if(velocity < 40){
        console.log("Você está devagar, considere aumentar um pouco")
    } else {
        if(velocity >= 40 && velocity < 80){
            console.log("Parece uma bola velocidade para se manter")
        } else {
            if(velocity >= 80 && velocity < 100){
                console.log("Velocidade alta, considere diminuir")
            } else{
                if(velocity >= 100){
                    console.log("Velocidade Perigosa, controle autómatico forçado")
                }
               
            }
        }
    }
}

alert(pilotName)
alert(velocity)