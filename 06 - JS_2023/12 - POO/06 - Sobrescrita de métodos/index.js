class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }
    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity){
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!! \nDiminua ou a nave sofrerá danos.")
        }
    }
}

class TransportSpaceShip extends Spaceship {
    speedUp(){
        alert("Naves de transporte só aumenta a velocidade em 1km/s")
        this.currentVelocity += 1
    }

}

let transportSpaceship = new TransportSpaceShip("Transportadora", 4, 100)

transportSpaceship.speedUp()

let spaceship = new Spaceship("Sunny", 10, 200)

spaceship.speedUp(120)
spaceship.speedUp(100)

console.log(transportSpaceship.currentVelocity)
console.log(spaceship.currentVelocity)