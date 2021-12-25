const baseURL = "http://localhost:3000"

document.addEventListener('DOMContentLoaded', () => {
    Jury.getJuries()
    const createJuryForm = document.querySelector("#create-jury-form")
    createJuryForm.addEventListener("submit", (event) => createFormHandler(event))
    bindEventListeners()
})

function bindEventListeners(){
    document.getElementById("new-jury").addEventListener('click', displayJuryForm)
    document.getElementById("view-all").addEventListener('click', viewAllJuries)
}

function displayJuryForm() {
    document.getElementById("create-jury-form").hidden = false
}

function hideJuryForm() {
    form = document.getElementById("create-jury-form")
    form.reset();
    form.hidden = true;
}

function createFormHandler(event) {
    event.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const instrumentInput = document.querySelector('#input-instrument').value
    const techniqueInput = document.querySelector('#input-technique').value
    
    Jury.postFetch(nameInput, instrumentInput, techniqueInput)
}

function viewAllJuries() {
    const juriesIndex = document.querySelector("#juries-index")
    juriesIndex.style.display="flex"
    const juryShow = document.querySelector("#jury-show")
    juryShow.style.display="none"
    document.querySelector("#repertoire-list").innerHTML = ""
    document.querySelector("#comments-list").innerHTML = ""
}
