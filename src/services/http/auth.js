// LIB
import axios from 'axios';

export async function auth(route, json) {
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:3001/${route}`, json)
            .then(function (response) {
                console.log("request response 200 ok");
                resolve(response)
            })
            .catch(function (error) {
                console.log("request response error");
                reject(error)
            });
    })
}