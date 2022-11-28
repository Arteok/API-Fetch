fetch("http://intranet:63d0cea9d550e495fde1b81310951bd7@10.7.180.99/mapuche/rest/agentes?limit=10000", { mode: 'cors' })
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data);
        let body = data;   
    
        document.getElementById('legajo').innerHTML = body; 
    }



   




/*
fetch('https://10.7.180.99/mapuche/rest/agentes', {
        method: "GET",
        headers: {
            Authorization: "intranet:63d0cea9d550e495fde1b81310951bd7",
            "Content-type": "application/json;charset=UTF-8"},
        mode: 'no-cors'})
*/
   /* var myHeaders = new Headers({
        'Authorization': `Basic ${btoa("intranet" + ':' + "63d0cea9d550e495fde1b81310951bd7")}`
    });
    
    fetch('https://10.7.180.99/mapuche/rest/agentes', {headers: myHeaders, mode: 'no-cors'})
        .then(response => console.log(response))

*/




 /*  fetch("http://intranet:63d0cea9d550e495fde1b81310951bd7@10.7.180.99/mapuche/rest/agentes", { mode: 'no-cors', headers: {'Content-Type': 'application/json'}})
    .then(response => response.json())
    .then(data => mostrarData(data))    
    //.catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data);*/
        //let body =data;
        /*for (let i = 0; i < data.legajo; i++) {
            body +=
                `<tr><td>${data[i].legajo}</td><td>${data[i].agente}</td><td>${data[i].fecha_ingreso}</td></tr>`
        }
        document.getElementById('data').innerHTML = body
    }

*/









//no anda
/*const options = {
	method: 'GET',
	headers: {
		Authorization: 'intranet:63d0cea9d550e495fde1b81310951bd7',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
    mode: 'cors',
    cache: 'default'
};
fetch('http://10.7.180.99/toba_mapuche/swagger/index.html?url=http://10.7.180.99/mapuche/rest/api-docs/agentes', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

/*
const mostrarData = (data) => {intranet 63d0cea9d550e495fde1b81310951bd7

    console.log(data);
    let body = data;   

    document.getElementById('name').innerHTML = body;    
}
http://10.7.180.99/toba_mapuche/swagger/index.html?url=http://10.7.180.99/mapuche/rest/api-docs

*/


//anda
/*
let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(response => response.text())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data);
    let body = data;   

    document.getElementById('name').innerHTML = body;    
}
*/

//anda y devuelve los nombres de las montañas rusas
/*let url = 'https://coasters-api.herokuapp.com/'
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
}
*/