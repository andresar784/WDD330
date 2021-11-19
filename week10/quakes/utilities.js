//rl). Add the code to make your function do a simple fetch 
//request using the url argument that should get passed in, and return the response in JSON. 
export async function getJson(url){
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
        }
    } catch (error) {
        console.log(error);
    }   
}

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}; 