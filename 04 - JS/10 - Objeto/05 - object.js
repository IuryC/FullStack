let ship = {
    name: "Sunny",
    type: "Navigation",
    maxCrew: 11,
    turnOn: function(){
        console.log("Preparando propulsão")
        console.log("Ligando computador de bordo")
    }
}

ship.velocity = 0
ship.speedUp = function(acceleration){
   this.velocity += acceleration
}

console.log(ship)

ship.speedUp(10)

console.log(ship)