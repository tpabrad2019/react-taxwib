/*

CODETEST - Brad Eichen

FetchApi.js
Function export of http request using fetch to get the necessary data.

*/

export const fetchPeople = () => {
    return fetch('https://randomuser.me/api/?results=20')
    .then(function(response) {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(response.status + ": " + response.statusText)
        }
    });
}