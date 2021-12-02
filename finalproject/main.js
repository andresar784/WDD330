let flag = document.getElementById('flag');

let brands = document.getElementById('brands');
//the model select element
let models = document.getElementById('models'); 
let modelBtn = document.getElementById('modelBtn');
//the year select element
let years
let yearBtn = document.getElementById('yearBtn');
//the last button to consult something
let lastButton = document.getElementById('lastButton');

flag.addEventListener('click', () => {
    let typeOfVehicles =  document.querySelector('#type');
    let vehicle = typeOfVehicles.value;
    let urlbrands = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas`;
    console.log(urlbrands);
    fetch(urlbrands)
    .then( Response => {
        if(Response.ok){
            return Response;
        }
        throw Error(Response.statusText);
    })
    .then(response => response.json())
    .then( marcas  => {
        for (let marca of marcas) {
            var x = document.createElement("OPTION");
            x.setAttribute("value", marca.codigo);
            var t = document.createTextNode(marca.nome);
            x.appendChild(t);
            document.getElementById("brands").appendChild(x);
        }
     }
)})

modelBtn.addEventListener('click', () => {
    let typeOfVehicles =  document.querySelector('#type');
    let brandOfV =  document.querySelector('#brands');
    let codigo = brandOfV.value
    let vehicle = typeOfVehicles.value;
     let urlModels = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas/${codigo}/modelos`;
     console.log(urlModels);
     fetch(urlModels)
     .then( Response => {
        if(Response.ok){
            return Response;
        }
        throw Error(Response.statusText);
    })
    .then(response => response.json())
    .then( mods => {
        console.log(mods);
        for (let mod of mods.modelos){
            var x = document.createElement("OPTION");
            x.setAttribute("value", mod.nome);
            var t = document.createTextNode(mod.nome);
            x.appendChild(t);
            document.getElementById("models").appendChild(x);
        }
    } )
    }
    )

 yearBtn.addEventListener('click', () => {
    let typeOfVehicles =  document.querySelector('#type');
    let brandOfV =  document.querySelector('#brands');
    let codigo = brandOfV.value
    let vehicle = typeOfVehicles.value;
     let urlModels = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas/${codigo}/modelos`;
     console.log(urlModels);
     fetch(urlModels)
     .then( Response => {
        if(Response.ok){
            return Response;
        }
        throw Error(Response.statusText);
    })
    .then(response => response.json())
    .then( mods => {
        console.log(mods);
        for (let mod of mods.anos){
            var x = document.createElement("OPTION");
            x.setAttribute("value", mod.codigo);
            var t = document.createTextNode(mod.nome);
            x.appendChild(t);
            document.getElementById("year").appendChild(x);
        }
    } )
    }
    )
//function the get the last result, the price
lastButton.addEventListener('click', () => {
    let typeOfVehicles =  document.querySelector('#type');
    let brandOfV =  document.querySelector('#brands');
    let codigo = brandOfV.value
    let vehicle = typeOfVehicles.value;
    let urlconsult = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas/${codigo}/modelos/5940/anos/2014-3`;
     console.log(urlModels);
     fetch(urlModels)
     .then( Response => {
        if(Response.ok){
            return Response;
        }
        throw Error(Response.statusText);
    })
    .then(response => response.json())
    .then( mods => {
        console.log(mods);
        for (let mod of mods.anos){
            var x = document.createElement("OPTION");
            x.setAttribute("value", mod.nome);
            var t = document.createTextNode(mod.nome);
            x.appendChild(t);
            document.getElementById("year").appendChild(x);
        }
    } )
    }
    )
        

  
