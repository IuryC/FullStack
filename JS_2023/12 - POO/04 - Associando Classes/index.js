class Captain {
    constructor(name, age, flightHours) {
        this.name = name
        this.age = age
        this. flightHours = flightHours
    }
}

class Spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours){
        this.name = name
        this.crewQuantity = crewQuantity
        this.captain = new Captain(captainName, captainAge, captainFlightHours)
    }
}

let spaceship = new Spaceship("Artemis", 19, "Luffy", 21, 2000)
console.log(spaceship)