// Exo JS Dom Exo 2 

document.querySelector('#num1').addEventListener('input',
    function calcul() {
        let num = document.querySelector('#num1').value;

        let carre = num * num;
        let cube = num * num * num 
        document.querySelector('#num2').setAttribute('value', num)
        document.querySelector('#carre').setAttribute('value', carre);
        document.querySelector('#cube').setAttribute('value', cube);
        console.log("ok");
    }
)

