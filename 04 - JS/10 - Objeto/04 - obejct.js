let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Ana Júlia", "Thiago"]
}

spaceship.crew.push("Ten. Fernanda")
//console.log(spaceship.crew[1])

let spaceships = [
    {name: "Elemental", crewQuantity: 10},
    {name: "Colossus", crewQuantity: 8},
    {name: "Helmet", crewQuantity: 15}
]

//console.log(spaceships[0].name)

spaceships.forEach(spaceship => {
    console.log(spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes.")
})

let navio = {
    name: "Sunny",
    maxCrew: 11,
    captain: {
        name: "Luffy",
        age: 21
    }
}
console.log(navio.captain)