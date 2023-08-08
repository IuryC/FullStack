class SpacialStation {
    constructor(name, plataformsQuantity) {
        this.name = name
        this.plataformsQuantity = plataformsQuantity
    }
}

let observatory = new SpacialStation("Observatório", 40)
console.log(observatory)

class Spaceship {
    constructor(name, type = "Descoberta") {
        this.name = name
        this.type = type
    }
}

let darwin = new Spaceship("Darwin", "Guerra")
let sunny = new Spaceship("Sunny")
console.log(darwin)
console.log(sunny)