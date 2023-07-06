let spaceship = {
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function(){
        alert("Preprando propulsão")
        alert("Ligando computador de bordo")
    }
}

spaceship.turnOn()

spaceship.velocity = 0
spaceship.speedUp = function(acceleration){
    this.velocity += acceleration
}