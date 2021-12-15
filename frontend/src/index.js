const baseURL = "http://localhost:3000"

document.addEventListener('DOMContentLoaded', () => {
    getJuries()

    const createJuryForm = document.querySelector("#create-jury-form")

    createJuryForm.addEventListener("submit", (event) => createFormHandler(event))
})

function getJuries() {
    fetch(baseURL + "/api/v1/juries")
    .then(response => response.json())
    .then(juries => {
        juries.forEach(jury => {
            // double check how your data is nested in the console so you can successfully access the attributes of each individual object
            // debugger
            const juryMarkup = `
                <div data-id=${jury.id} class="jury-card">
                    <h3>${jury.name}</h3>
                    <p>${jury.instrument}</p>
                    <button data-id=${jury.id}>edit</button>
                </div>
                </br></br>`
      
            document.querySelector('#jury-container').innerHTML += juryMarkup
          })
    })
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
    console.log(bodyData);
    // fetch(endPoint, {
    //     // POST request
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(bodyData)
    //   })
    //   .then(response => response.json())
    //   .then(jury => {
    //     console.log(jury);
    //     const juryData = jury.data
    //     // render JSON response
    //     let newJury = new Jury(juryData, juryData.attributes)
    //     document.querySelector('#jury-container').innerHTML += newJury.renderJuryCard()
    //   })
}