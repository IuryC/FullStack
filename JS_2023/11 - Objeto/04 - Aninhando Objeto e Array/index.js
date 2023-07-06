
let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Ana Júlia", "Thiago"]
}

spaceship.crew.push("Ten. Fernanda")

console.log(spaceship)

let spaceships = [
    { name: "Elemental", crewQuantity: 10 },
    { name: "Colossus", crewQuantity: 8 },
    { name: "Helmet", crewQuantity: 15}
]

console.log(spaceships[1].crewQuantity)

spaceships.forEach(spaceship => {
    alert(spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes")
})

let nave = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name: "Hugo Trent",
        age: 37
    }
}

console.log(nave.captain.name)