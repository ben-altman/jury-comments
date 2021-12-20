// const baseURL = "http://localhost:3000"
const juriesList = document.querySelector('#jury-container')

class Jury {
    static all = []

    constructor({id, name, instrument, technique, slug}) {
        this.id = id
        this.name = name
        this.instrument = instrument
        this.technique = technique
        this.slug = slug
        Jury.all.push(this)
    }

    static getJuries() {
        fetch(baseURL + "/api/v1/juries")
        .then(response => response.json())
        .then(juryData => {
            juryData.forEach(jury => {
                let newJury = new Jury(jury)
                console.log(newJury) 
                newJury.addToDom()
              })
        })
    }

    addToDom() {
        
        let juryMarkup = `
            <div data-id="${this.id}" class="jury-card" id="jury-${this.id}" name="${this.slug}">
                <h3>${this.name}</h3>
                <p>${this.instrument}</p>
                <button data-id=${this.id}>edit</button>
            </div>`

        document.querySelector('#jury-container').innerHTML += juryMarkup
    }
}

