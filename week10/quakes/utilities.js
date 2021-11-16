//rl). Add the code to make your function do a simple fetch 
//request using the url argument that should get passed in, and return the response in JSON. 


export function getJson(url){
    return fetch(url)
    .then (function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
        }
         })
        .catch(function(error) {
            console.log(error);
    });   
}

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}; 