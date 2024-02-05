let btn = document.querySelector('#btn');
btn.addEventListener('click', onc);

function onc() {
    let url = 'https://dog.ceo/api/breeds/image/random';

    fetch(url) 
        .then(response => response.json())
        .then(response => {
            let chien = response.message; 
            let img = document.querySelector("#img");
            img.setAttribute('src', chien);
        }
        );
}

        





    

    