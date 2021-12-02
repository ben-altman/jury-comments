// placeholder here 

// fetch("http://127.0.0.1:3000")

console.log('testing...')

const BACKEND_URL = 'http://127.0.0.1:3000';
fetch(`${BACKEND_URL}/test`)
    .then(response => response.json())
    .then(parsedResponse => console.log(parsedResponse));
