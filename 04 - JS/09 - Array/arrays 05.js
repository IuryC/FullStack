let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Puller"]

let upcassedSpaceships = hitchedSpaceships.map(function(currentSpaceship, index){
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})
console.log(upcassedSpaceships)

let with7Chars = hitchedSpaceships.filter(element => {return element.length >= 7})
console.log(with7Chars)

with7Chars = hitchedSpaceships.find(element => {return element.length >= 7})
console.log(with7Chars)