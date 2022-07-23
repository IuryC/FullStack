let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]
console.log(hitchedSpaceships)

hitchedSpaceships.push("Supernova") //adiciona elemento

console.log(hitchedSpaceships)

let ultimoRemovido = hitchedSpaceships.pop() //remove a última opção
let primeiroRemovido = hitchedSpaceships.shift() //remove a primeira opção
hitchedSpaceships.unshift("Fenix") //adiciona um array na posição 0
console.log(hitchedSpaceships)
console.log(ultimoRemovido)
console.log(primeiroRemovido)

let elementalPos = hitchedSpaceships.indexOf("Elemental")
console.log(elementalPos)
