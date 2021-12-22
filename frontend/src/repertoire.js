class Repertoire {
    constructor({id, composer, title}){
        this.composer = composer
        this.title = title

        this.element = document.createElement("li")
        this.element.id = `reperoire-${id}`
        this.repList = document.querySelector("#repertoire-list");

    }

    static fetchRepertoires(id){
        fetch(baseURL + `/api/v1/juries/${id}/repertoires`)
        .then(res => res.json())
        .then(repertoireData => {
            repertoireData.forEach(repertoire => {
                let newRep = new Repertoire(repertoire)
                newRep.addToDom();
            })
        })
    }

    addToDom(){
        this.repList.appendChild(this.setElementHTML())
    }

    setElementHTML() {
        this.element.innerHTML = `
        <p><b>${this.composer} - ${this.title}</b></p> 
        `
        return this.element
    }

}