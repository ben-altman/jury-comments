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
    }

    addToDom(){
        this.repList = document.querySelector("#repertoire-list");
        this.repList.appendChild(this.setElementHTML())
    }

    setElementHTML() {
        this.element.innerHTML = `
        <p><b>${this.composer} - ${this.title}</b></p> 
        `
        return this.element
    }

}