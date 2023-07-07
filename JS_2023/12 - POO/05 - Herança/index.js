class Spaceship {
    constructor(name, maxCrew, MaxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.MaxRecommendedVelocity = MaxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.MaxRecommendedVelocity){
            alert("Velocidade máxima ultrapassada!!!\nDiminua ou poderá provocar danos à nave.")
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo equipamento de amostras e parando nave de descoberta")
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("fenix", 8, 240)

darwin.speedUp(210)
fenix.speedUp(230)
console.log(darwin)
console.log(fenix)

darwin.stop()
fenix.stop()
