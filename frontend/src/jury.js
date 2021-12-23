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
                newJury.addToDom(juriesList)
              })
        })
    }

    showJury(juryId) {
        // fetch(`http://localhost:3000/api/v1/juries/${juryId}`)
        // .then(response => response.json())
        // .then(specs => {
        //     Jury.formatJuryDisplay(specs)
        // })
    }

    formatJuryDisplay() {
        juriesList.style.display="none";
        juryShow.style="display"
        const main = document.querySelector("main")
        let juryName = document.createElement("h2")
        juryName.innerHTML = `${this.name}`
        juryShow.prepend(juryName, `${this.instrument}`, `${this.technique}`)
        // main.innerHTML = `
        // <h2>${this.name}</h2>`
        Repertoire.fetchRepertoires(this.id);
    }

    fetchJuryDetails(event) {
        
        let juryId = parseInt(event.target.getAttribute('data-id'));
        // debugger
        // this.showJury(juryId);
        fetch(`http://localhost:3000/api/v1/juries/${juryId}`)
        .then(response => response.json())
        .then(specs => {
            console.log(specs)
            this.formatJuryDisplay()
            
        })

        // Repertoire.fetchRepertoires(juryId);
    }

    addToDom() {
        let juryMarkup = document.createElement('div')
        juryMarkup.setAttribute("class", "jury-card")
        juryMarkup.id = `jury-${this.id}`
        juryMarkup.setAttribute("name", `${this.slug}`)
        juryMarkup.innerHTML += `<h3>${this.name}</h3><p>${this.instrument}</p><button data-id=${this.id}>View Details and Comment</button>`
        document.querySelector('#jury-container').appendChild(juryMarkup)
        // node.appendChild(juryMarkup)
        juryMarkup.addEventListener('click', (event) => this.fetchJuryDetails(event))
        // debugger
    }
}

