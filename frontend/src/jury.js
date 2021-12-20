const baseURL = "http://localhost:3000"
const juriesList = document.querySelector('#jury-container')

class Jury {
    static all = []

    constructor(id, name, instrument, technique) {
        this.id = id
        this.name = name
        this.instrument = instrument
        this.technique = technique
        Jury.all.push(this)
    }

}