class ResouceProcessorStation {
    constructor(name, monthlyProcessing){
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing, hours){
        return monthlyProcessing / 720 * hours
    }
}

let processor = new ResouceProcessorStation("Gaia", 2000)

let totalProcessor = ResouceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)
console.log(totalProcessor)