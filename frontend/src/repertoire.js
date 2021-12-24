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
    }

    static displayForm(){
        // debugger
        document.querySelector('#new-repertoire').style.display="none"
        const html = Comment.formHTML
        console.log(Comment.formHTML)
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