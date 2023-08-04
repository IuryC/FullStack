let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false
}


let { name: spaceshipName, crewQuantity: crewQuantity } = spaceship

//let spaceshipName = spaceship.name
//let crewQuantity = spaceship.crewQuantity

console.log(spaceshipName, crewQuantity)

let spaceships = ["Colossus", "Artemis", "Fenix"]

let[colossus, artemis, fenix, puller] = spaceships

console.log(colossus, artemis, fenix, puller)