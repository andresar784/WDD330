let flag = document.getElementById('flag');
let brands = document.getElementById('brands');

flag.addEventListener('click', () => {
    
    let typeOfVehicles =  document.querySelector('#type');
    let vehicle = typeOfVehicles.value;
    let urlbrands = 'https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas';

    console.log(vehicle);
    fetch(urlbrands)
    .then( Response => {
        if(Response.ok){
            return Response;
        }
        throw Error(Response.statusText);
    })
    .then(response => response.json())
    .then( brands  => console.log(brands));
})