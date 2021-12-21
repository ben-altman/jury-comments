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

    static viewJuryDetails(event) {
        if(event.target.tagName.toLowerCase() === 'button') {
            console.log(event.target)
            juriesList.style.display="none";
            juryShow.style="display"
            
            let jury = event.target.parentElement
            let juryId = parseInt(jury.id.split('-')[1])
            console.log(juryId);
        }    
    }

    addToDom() {
        let juryMarkup = document.createElement('div')
        juryMarkup.setAttribute("class", "jury-card")
        juryMarkup.id = `jury-${this.id}`
        juryMarkup.setAttribute("name", `${this.slug}`)
        juryMarkup.innerHTML += `<h3>${this.name}</h3><p>${this.instrument}</p><button>View Details and Comment</button>`
        document.querySelector('#jury-container').appendChild(juryMarkup)

        juryMarkup.addEventListener('click', Jury.viewJuryDetails)
    }
}

