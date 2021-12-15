let flag = document.getElementById('flag');
let brands = document.getElementById('brands');
//the model select element
let models = document.getElementById('models'); 
let modelBtn = document.getElementById('modelBtn');
let yearBtn = document.getElementById('yearBtn');
//the last button to consult something
let lastButton = document.getElementById('lastConsult');
let moreInfobtn = document.getElementById('moreInfo');
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
            brands.disabled = false;
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
            models.disabled = false;
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
            year.disabled = false; 
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
    fetch(urlConsult)
     .then( Response => {
        if(Response.ok){
            return Response;
        }
        throw Error(Response.statusText);
    })
    .then(response => response.json())
    .then( mods => {
        console.log(mods)
        var x = document.createElement("DIV");
        x.setAttribute("name", mods.Valor);
        var t = document.createTextNode(`The value of ` + mods.Marca + ' ' + mods.Modelo + ' year ' + mods.AnoModelo + ' is: ' + mods.Valor);
        x.appendChild(t);
        document.getElementById("infoDiv").appendChild(x);
        }
)})

moreInfobtn.addEventListener('click', () => {
    let table = document.getElementById('table');
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
    fetch(urlConsult)
     .then( Response => {
        if(Response.ok){
            return Response;
        }
        throw Error(Response.statusText);
    })
    .then(response => response.json())
    .then( mods => {
        console.table(mods);
        let innerHtml = '';
        innerHtml += buildRow(mods);
        let table = document.getElementById('table1');
        table.innerHTML = innerHtml;        //  push in our created HTML text

    }
    )
})

function buildRow(mods) {
   return `
<tr>
    <th scope="row">Brand <td> ${mods.Marca}</td></th>
</tr>
<tr>
    <th scope="row">Year <td>${mods.AnoModelo}</td></th>
</tr>
<tr>
    <th scope="row">Model <td>${mods.Modelo}</td></th>
</tr>
<tr>
    <th scope="row">Codigo Fipe <td>${mods.CodigoFipe}</td></th>
</tr>
<tr>
    <th scope="row">Value <td>${mods.Valor}</td></th>
</tr>
<tr>
    <th scope="row">Fuel <td>${mods.Combustivel}</td></th>
</tr>
<tr>
    <th scope="row">Reference Month <td>${mods.MesReferencia}</td></th>
</tr>



`;
}

