// const baseURL = "http://localhost:3000"
const juriesList = document.querySelector('#juries-index')
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

    formatJuryShow(specs) {
        juriesList.style.display="none";
        juryShow.style.display="block"
        juryShow.setAttribute("data-id", specs.id);
        document.querySelector("#spec-name").innerText = specs.name
        document.querySelector("#spec-instrument").innerHTML = `<b>Instrument:</b> ${specs.instrument}`
        document.querySelector("#spec-technique").innerHTML = `<b>Technical studies:</b> ${specs.technique}`

        Repertoire.fetchRepertoires(this.id);
        Comment.fetchComments(this.id);
    }

    fetchJuryDetails(event) {
        let juryId = parseInt(event.target.getAttribute('data-id'));
        fetch(`http://localhost:3000/api/v1/juries/${juryId}`)
        .then(response => response.json())
        .then(specs => {
            this.formatJuryShow(specs)
        })
    }

    addToDom() {
        let juryMarkup = document.createElement('div')
        juryMarkup.setAttribute("class", "jury-card")
        juryMarkup.id = `jury-${this.id}`
        juryMarkup.setAttribute("name", `${this.slug}`)
        juryMarkup.innerHTML += `<h3>${this.name}</h3><p>${this.instrument}</p><button data-id=${this.id}>View Details and Comment</button>`
        document.querySelector('#juries-index').appendChild(juryMarkup)
        // node.appendChild(juryMarkup)
        juryMarkup.addEventListener('click', (event) => this.fetchJuryDetails(event))
        // debugger
    }

    static postFetch(name, instrument, technique) {
        const bodyData = {name, instrument, technique}
        fetch(baseURL + "/api/v1/juries", {
            // POST request
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(jury => {
            let newJury = new Jury(jury)
            newJury.addToDom()
            // render JSON response
            // let juryMarkup = `
            // <div data-id=${jury.id} class="jury-card">
            //     <h3>${jury.name}</h3>
            //     <p>${jury.instrument}</p>
            //     <button data-id=${jury.id}>View Details and Comment</button>
            // </div>
            // </br></br>`
            // document.querySelector('#jury-container').innerHTML += juryMarkup;
            hideJuryForm()
        })
        .catch(function(error) {
            alert("Object did not save!");
            console.log(error.message);
        })
    }
}

