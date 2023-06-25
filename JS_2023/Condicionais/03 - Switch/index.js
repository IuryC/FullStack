let spaceship = prompt("Escolha a nave desejada: \n1- Golias \n2- Raptor \n3- Enterprise")

switch (spaceship) {
    case "Golias":
        console.log("Nave mais resistente")
        break
    case "Raptor":
        console.log("Nave mais rápida")
        break
    case "Enterprise":
        console.log("Nave da Frota Estelar")
        break
    default:
        console.log("Nave comum") 
}


let velocity = 90
switch(velocity){
    case 80:
    case 90:
    case 100:
        console.log("Velocidade aceitável")
        break
    case 110:
        console.log("Velocidade alta, mas aceitável")
        break
    default:
        console.log("Velocidade não identificada")
}