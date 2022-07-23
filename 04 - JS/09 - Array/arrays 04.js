let spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"]

console.log(spaceshipNames)

removedSpaceships = spaceshipNames.splice(1, 2, "Deméter", "Puller", "Golias")
console.log(spaceshipNames)
console.log(removedSpaceships)

let extractedNames = spaceshipNames.slice(1, 3)
console.log(extractedNames)