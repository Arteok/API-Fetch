
let url = 'https://coasters-api.herokuapp.com/'
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data);
    let body = '';
    for (let i = 0; i < data.length; i++) {
        body +=
            `<tr><td>${data[i].country}</td><td>${data[i].name}</td><td>${data[i].length}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}
