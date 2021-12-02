let flag = document.getElementById('flag');
let typeOfVehicles =  document.querySelector('#type');
let vehicle = typeOfVehicles.value;
let brands = document.getElementById('brands');
//the model select element
let models = document.getElementById('models'); 
let modelBtn = document.getElementById('modelBtn')

flag.addEventListener('click', () => {
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

modelBtn.addEventListener('click', () =>
     let
)
