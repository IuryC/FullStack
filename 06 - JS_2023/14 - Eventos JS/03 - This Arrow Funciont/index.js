testingArrow() = {
    name: "Escola de JS",
    normalFunction: function() {
        console.log(this.name)
    },
    arrowFunction: () => {
        console.log(this.name)
    }
}
