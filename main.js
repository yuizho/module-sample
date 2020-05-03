import {
    http
} from './module/http.js'

const button = document.querySelector("#btn");
const message = document.querySelector('#message');
const img = document.querySelector('#img');
button.addEventListener('click', () => {
    message.textContent = 'Loading......';
    http.get('https://dog.ceo/api/breeds/image/random')
        .then((result) => {
            console.log(result);
            img.src = result.message;
            message.textContent = '';
        })
        .catch((error) => {
            alert(error.message);
        });
});