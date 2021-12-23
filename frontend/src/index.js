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
    
    postFetch(nameInput, instrumentInput, techniqueInput)
}

function postFetch(name, instrument, technique) {
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
        const juryData = jury.data
        // render JSON response
        const juryMarkup = `
        <div data-id=${jury.id} class="jury-card">
            <h3>${jury.name}</h3>
            <p>${jury.instrument}</p>
            <button data-id=${jury.id}>View Details and Comment</button>
        </div>
        </br></br>`
        document.querySelector('#jury-container').innerHTML += juryMarkup;
        hideJuryForm()
    })
    .catch(function(error) {
        alert("Object did not save!");
        console.log(error.message);
    })
}

function viewAllJuries() {
    document.querySelector("#jury-container").style.display=""
}
