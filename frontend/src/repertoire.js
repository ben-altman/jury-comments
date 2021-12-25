const repertoireList = document.querySelector("#repertoire-list")
const repertoireForm = document.querySelector("#repertoire-form")

class Repertoire {
    constructor({id, composer, title}){
        this.composer = composer
        this.title = title

        this.element = document.createElement("li")
        this.element.id = `repertoire-${id}`
    }

    static fetchRepertoires(id){
        fetch(baseURL + `/api/v1/juries/${id}/repertoires`)
        .then(res => res.json())
        .then(repertoireData => {
            repertoireData.forEach(repertoire => {
                let rep = new Repertoire(repertoire)
                rep.addToDom();
            })
        })
        this.listenForEvents()
    }

    static listenForEvents(){
        document.querySelector('#new-repertoire').addEventListener('click', this.displayForm)
        repertoireForm.addEventListener('submit', (e) => Repertoire.createRepertoire(e))
    }

    static createRepertoire(e){
        e.preventDefault();
        let composer = document.querySelector("#composer-input").value
        let title = document.querySelector("#title-input").value 
        let jury_id = juryShow.getAttribute("data-id")
        
        let repData = {composer, title}
        
        repertoireForm.reset()

        fetch(baseURL + `/api/v1/juries/${jury_id}/repertoires`, {
            // POST request
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            body: JSON.stringify(repData)
        })
        .then(response => response.json())
        .then(repertoire => {
            let newRep = new Repertoire(repertoire)
            newRep.addToDom()
            document.querySelector('#new-repertoire').style.display="block" 
            repertoireForm.style.display="none"
        })
    }

    static displayForm(){
        document.querySelector('#new-repertoire').style.display="none" 
        repertoireForm.style.display="block"
    }

    addToDom(){
        repertoireList.appendChild(this.setElementHTML())
    }

    setElementHTML() {
        this.element.innerHTML = `
        <p><b>${this.composer} - ${this.title}</b></p> 
        `
        return this.element
    }
}