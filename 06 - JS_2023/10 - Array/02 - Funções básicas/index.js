let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]
console.log(hitchedSpaceships)

hitchedSpaceships.push("Supernova") // adiciona um array no final
console.log(hitchedSpaceships)

let removedSpaceship = hitchedSpaceships.pop() //retira o último array e retorna o array excluido
console.log(hitchedSpaceships)
console.log("array removido: " + removedSpaceship)

removedSpaceship = hitchedSpaceships.shift() // retira o primeiro array
console.log(hitchedSpaceships)
console.log("Array removido: " + removedSpaceship) 

hitchedSpaceships.unshift("Sunny") // adiciona array no inicio
console.log(hitchedSpaceships, hitchedSpaceships.length) // .lenght imprime o tamanho do array

let elementalPos = hitchedSpaceships. indexOf("Elemental") // Identifica a posição do array quando encontra o elemento, do contrário: -1
console.log(elementalPos)