function greetPilot(name, message = "Olá"){
    alert(message + ", " + name)
}

greetPilot("Luffy", "Seja bem vindo")

function speedUp(velocity, unity = "km/s", acceleration){
    let newVelocity = velocity + acceleration
    alert("Nova velocidade: " + newVelocity + unity)
}

speedUp(50, 40)

// Sempre deixar um parametro com valor padrão por ultimo