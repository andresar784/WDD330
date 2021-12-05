let flag = document.getElementById('flag');

let brands = document.getElementById('brands');
//the model select element
let models = document.getElementById('models'); 
let modelBtn = document.getElementById('modelBtn');
//the year select element
let years
let yearBtn = document.getElementById('yearBtn');
//the last button to consult something
let lastButton = document.getElementById('lastConsult');

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
            x.setAttribute("value", mod.codigo);
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
    //type of vehicle, cars, motorcycles, trucks
    let typeOfVehicles =  document.querySelector('#type');
    let vehicle = typeOfVehicles.value;
    //codigo of the brand selected 
    let brandOfV =  document.querySelector('#brands');
    let codigo = brandOfV.value
    // year of the vehicle
    let yearOfV = document.querySelector('#year');
    let year = yearOfV.value;
    // I need the number of the model that is returned in year search
    let modelNumber =  document.querySelector('#models');
    let modelNum = modelNumber.value;
    // the last url example is https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3
    let urlConsult = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas/${codigo}/modelos/${modelNum}/anos/${year}`;
     console.log('the last consult is ' + urlConsult);
     fetch(urlConsult)
     .then( Response => {
        if(Response.ok){
            return Response;
        }
        throw Error(Response.statusText);
    })
    .then(response => response.json())
    .then( mods => {
        var x = document.createElement("DIV");
        x.setAttribute("name", mods.Valor);
        var t = document.createTextNode(mods.Valor);
        x.appendChild(t);
        document.getElementById("infoDiv").appendChild(x);
        }
)})
        

  
