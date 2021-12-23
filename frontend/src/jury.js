// const baseURL = "http://localhost:3000"
const juriesList = document.querySelector('#jury-container')
const juryShow = document.querySelector('#jury-show')

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
                newJury.addToDom()
              })
        })
    }

    static showJury(juryId) {
        fetch(`http://localhost:3000/api/v1/juries/${juryId}`)
        .then(response => response.json())
        .then(specs => {
            Jury.formatJuryDisplay(specs)
        })
    }

    static formatJuryDisplay() {
        const main = document.querySelector("main")
        // main.innerHTML = `
        // <h2>${this.name}</h2>`
    }

    static viewJuryDetails(event) {
        juriesList.style.display="none";
        juryShow.style="display"
        
        let juryId = parseInt(event.target.getAttribute('data-id'));
        Jury.showJury(juryId);
        Repertoire.fetchRepertoires(juryId);
    }

    addToDom() {
        let juryMarkup = document.createElement('div')
        juryMarkup.setAttribute("class", "jury-card")
        juryMarkup.id = `jury-${this.id}`
        juryMarkup.setAttribute("name", `${this.slug}`)
        juryMarkup.innerHTML += `<h3>${this.name}</h3><p>${this.instrument}</p><button data-id=${this.id}>View Details and Comment</button>`
        document.querySelector('#jury-container').appendChild(juryMarkup)

        juryMarkup.addEventListener('click', Jury.viewJuryDetails)
    }
}

