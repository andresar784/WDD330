export async function getJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            //console.log(response.json());
            return response.json();
        }
    } catch (error) {
        console.log(error);
    }
  }
  export function getLocation(options) {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}