class Repertoire {
    constructor({composer, title}){
        this.composer = composer
        this.title = title
    }

    static fetchRepertoires(id){
        fetch(baseURL + `/api/v1/juries/${id}/repertoires`)
        .then(res => res.json())
        .then(repertoireData => console.log(repertoireData))
    }

}