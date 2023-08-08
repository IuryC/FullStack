function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration
    alert("A velocidade é: " + newVelocity)
    return newVelocity
}


let velocity = 80
let acceleration = 5

console.log(velocity)

velocity = speedUp(velocity, acceleration)

console.log(velocity)

speedUp(100, 10)