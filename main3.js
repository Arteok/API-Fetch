let url = 'http://10.7.180.99/mapuche/rest/agentes'
fetch(url, {
    method: 'GET',    
    credentials: "include",  
    //credentials: "same-origin",
    //credentials: "true", 
    
    mode: ' cors',

    headers: {        
	        
        'Access-Control-Allow-Origin': '*',
        	
        //"Content-Type": "text/plain",
        //'Access-Control-Allow-Origin': true,
       
        Authorization: 'intranet:63d0cea9d550e495fde1b81310951bd7',
        'Content-Type': 'application/json;charset=utf-8'
    }
    //mode: 'cors'
    //mode: 'no-cors'
    //mode: 'same-origin'
})
//.then(response => response.json())
//.then(data => console.log(data));
.then(response => mostrarData(response))
    //.then(response => console.log())
    //.then(data => console.log(data))
    

    const mostrarData = (data) => {
        console .log(data)
        //let body = '';
        //document.getElementById('data').innerHTML = body
    }
     
        //let body = '';
        /*
        for (let i = 0; i < data.length; i++) {
            body +=
                `<tr><td>${data[i].legajo}</td><td>${data[i].agente}</td><td>${data[i].nombre}</td></tr>`
        } 
    }
    document.getElementById('data').innerHTML = body

/*
fetch("http://intranet:63d0cea9d550e495fde1b81310951bd7@10.7.180.99/mapuche/rest/agentes?limit=10000", { mode: 'no-cors' })
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data);
        let body = data;   
    
        document.getElementById('legajo').innerHTML = body; 
    }

*/


/*
var credentials = btoa("intranet:63d0cea9d550e495fde1b81310951bd7");
var auth = { "Authorization" : `Basic ${credentials}` };
fetch(url, { headers : auth, mode: 'no-cors' })*/
/*
const options = {	
	headers: {    
		Authorization : 'intranet:63d0cea9d550e495fde1b81310951bd7',    
	},
    mode: 'no-cors'
}
let url = 'http://10.7.180.99/mapuche/rest/agentes'
fetch(url, options)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    let body = '';
    for (let i = 0; i < data.legajo; i++) {
        body +=
            `<tr><td>${data[i].legajo}</td><td>${data[i].agente}</td><td>${data[i].fecha_ingreso}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}

*/


