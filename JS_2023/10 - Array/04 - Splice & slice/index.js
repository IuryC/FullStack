let spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"]

console.log(spaceshipNames)

let extractedNames = spaceshipNames.slice(1, 3)
console.log(extractedNames)

let removedSpaceship = spaceshipNames.splice(1, 2, "Deméter", "Puller", "Golias") //splice retorna os arrays removidos e também serve para deletar
console.log(spaceshipNames)
console.log(removedSpaceship)

