let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]
console.log(hitchedSpaceships)

hitchedSpaceships.push("Supernova") // adiciona um array no final
console.log(hitchedSpaceships)

let removedSpaceship = hitchedSpaceships.pop() //retira o último array e retorna o array excluido
console.log(hitchedSpaceships)
console.log("array removido: " + removedSpaceship)

removedSpaceship = hitchedSpaceships.shift()
console.log(hitchedSpaceships)
console.log("Array removido: " + removedSpaceship) 