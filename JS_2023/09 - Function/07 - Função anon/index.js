let doubleSpeed = function(velocity){
    return velocity * 2
}

let newVelocity = doubleSpeed(30)

console.log(newVelocity)

function speedUp(velocity, acceleration){
    return velocity + acceleration
}

let newSpeed = speedUp(40, 30)

console.log(newSpeed)