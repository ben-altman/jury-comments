const commentsList = document.querySelector("#comments-list")
const commentForm = document.querySelector("#comment-form")

class Comment {
    constructor({id, content, score}){
        this.id = id
        this.content = content
        this.score = score
    
        this.element = document.createElement("div")
        this.element.id = `comment-${id}`
        this.element.className = "comment-div"
        
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
        this.listenForEvents()
    }

    static listenForEvents(){
        document.querySelector('#new-comment').addEventListener('click', this.displayForm)
        commentForm.addEventListener('submit', (e) => Comment.createComment(e))
    }

    static createComment(e){
        e.preventDefault();
        let content = document.querySelector("#content").value
        let score = document.querySelector("#score").value 
        let jury_id = juryShow.getAttribute("data-id")
        
        let commentData = {content, score}
        
        commentForm.reset()

        fetch(baseURL + `/api/v1/juries/${jury_id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            body: JSON.stringify(commentData)
        })
        .then(response => response.json())
        .then(comment => {
            let newCom = new Comment(comment)
            newCom.addToDom()
            document.querySelector('#new-comment').style.display="" 
            commentForm.style.display="none"
        })
    }

    static displayForm(){ 
        document.querySelector('#new-comment').style.display="none" 
        commentForm.style.display="block"
    }

    addToDom(){
        commentsList.appendChild(this.setElementHTML())
    }

    setElementHTML() {
        this.element.innerHTML = `
        <p><b>Score: </b>${this.score}</p>
        <p>${this.content}</p> 
        `
        return this.element
    }
}