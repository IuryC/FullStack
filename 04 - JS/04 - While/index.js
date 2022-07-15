let velocity = 50
let acceleration = 5

while(velocity <= 100){
 //   console.log("Estamos a " + velocity + "km/s")
    velocity += acceleration
}

let constallation = "Andromeda"
let pos = 0
let constallationLenght = constallation.length

while(pos < constallationLenght){
    if(constallation[pos] == "a" || constallation[pos] == "A"){
        console.log(pos)
    }
    pos += 1
}