const endPoint = "http://localhost:3000/api/v1/juries"

document.addEventListener('DOMContentLoaded', () => {
    getJuries()
})

function getJuries() {
    fetch(endPoint)
    .then(response => response.json())
    .then(juries => {
        juries.forEach(jury => {
            // double check how your data is nested in the console so you can successfully access the attributes of each individual object
            // debugger
            const juryMarkup = `
                <div data-id=${jury.id}>
                    <h3>${jury.name}</h3>
                    <p>${jury.instrument}</p>
                    <button data-id=${jury.id}>edit</button>
                </div>
                </br></br>`
      
            document.querySelector('#jury-container').innerHTML += juryMarkup
          })
    })
}
// const BACKEND_URL = 'http://127.0.0.1:3000';
// fetch(`${BACKEND_URL}/test`)
//     .then(response => response.json())
//     .then(parsedResponse => console.log(parsedResponse));

/*
const
fetch("http://127.0.0.1:3000")
*/

