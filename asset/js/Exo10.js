

document.querySelector('#first').addEventListener('change',
    function mimic() {
        let text = document.querySelector('#first').value;
        document.querySelector('#second').setAttribute('value', text);
        console.log("ok");
    }
)
console.log(document.querySelector('#first'));



