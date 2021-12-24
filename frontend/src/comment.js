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

    static displayForm(){

    }

    static formHtml(){
        return `
        <form id="comment-form">
            <label for="content">Enter your comment: </label>
            <textarea type="textarea" name="content" id="content" rows="10"></textarea>
            <label for="score">Overall Score: </label>
            <select name="score" id="score">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <input type="submit" value="Add your Comment">
        </form>`
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