class Spaceship {
    static get decelearationRate(){
        return 0.15
    }
    constructor(name) {
        this.name
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.decelearationRate))
    }
}

let spaceship = new Spaceship("Apollo")
spaceship.speedUp(100)
console.log(spaceship)