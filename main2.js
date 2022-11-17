const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com'
	}
};
fetch('https://open-weather-map27.p.rapidapi.com/weather', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


const mostrarData = (data) => {
    console.log(data);
    let body = data;   

    document.getElementById('name').innerHTML = body;    
}




/*fetch(url)
    .then(response => response.text())
    .then(data => mostrarData(data))
    .catch(error => console.log(error)) */





/*anda
let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(response => response.text())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data);
    let body = data;   

    document.getElementById('name').innerHTML = body;    
}*/


/*//anda y devuelve los nombres de las montañas rusas
let url = 'https://coasters-api.herokuapp.com/'
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data);
    let body = "";
    
    for (let i = 0; i < data.length; i++) {
        body +=
            `<tr><td>${data[i].name}</td></tr>`
    }
    document.getElementById('name').innerHTML = body;    
}*/
