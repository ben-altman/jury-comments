class Comment {
    constructor({id, content, score}){
        this.id = id
        this.content = content
        this.score = score
    
        this.element = document.createElement("div")
        this.element.id = `comment-${id}`
        
    }

    static fetchComments(id){
        fetch(baseURL + `/api/v1/juries/${id}/comments`)
        .then(res => res.json())
        .then(commentData => {
            commentData.forEach(comment => {
                let com = new Comment(comment)
                com.addToDom();
            })
        })
    }

    addToDom(){
        this.comList = document.querySelector("#comments-list");
        this.comList.appendChild(this.setElementHTML())
    }

    setElementHTML() {
        this.element.innerHTML = `
        <p><b>Score: </b>${this.score}</p>
        <p>${this.content}</p> 
        `
        return this.element
    }

}