let pilotName = prompt("Qual é o seu nome?")
let velocity = 0
let newVelocity = prompt("A que velocidade você gostaria de acelerar?")
let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")

if(confirmVelocity){
    velocity = newVelocity
}

if(velocity <= 0){
    alert("A nave está parada, acelere")
} else if(velocity < 40){
    alert("Você está devagar, acelere")
} else if(velocity < 80){
    alert("Continue nessa velocidade")
} else if(velocity > 100){
    alert("Diminua ou morra")
} else {
    alert("Velocidade perigosa. Controle automático forçado")
}