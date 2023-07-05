let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

hitchedSpaceships.forEach(function (currentSpaceship, index) {
    console.log("Nave: " + currentSpaceship + "\nÍndice: " + index)
})

let upcasedSpaceships = hitchedSpaceships.map(function (currentSpaceship) {
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})
console.log(upcasedSpaceships)


let withSevenChars = hitchedSpaceships.filter(element => { return element.length >= 7 }) // retorna o array
console.log(withSevenChars)

withSevenChars = hitchedSpaceships.find(element => { return element.length >= 7 }) // retorna o elemento, para no primeiro que encontrar
console.log(withSevenChars) 
