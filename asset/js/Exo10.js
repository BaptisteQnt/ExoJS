// Exercice JS Dom Exo 1

document.querySelector('#first').addEventListener('input',
    function mimic() {
        let text = document.querySelector('#first').value;
        document.querySelector('#second').setAttribute('value', text);
        console.log("ok");
    }
)
console.log(document.querySelector('#first'));



