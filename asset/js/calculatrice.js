// Créez une page « calculatrice.html ».

// La page calculatrice contient un formulaire avec une sélection déroulante qui nous permet de choisir 
// le signe de l’opération (addition, soustraction, multiplication, division).

const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log(e);
        // console.log("Nombre:" + e.target.nombresaisie.value);
        let nbr = e.target.nombresaisie.value;
        let nbr2 = e.target.nombresaisie2.value;
        let operateur = e.target.op.value;
        if(operateur === '+'){
          let result =  Number(nbr) + Number(nbr2);
          alert(Number(nbr) + operateur + Number(nbr2) +'='+ result)
        } else if (operateur === '-'){
            let result = Number(nbr)- Number(nbr2);
            alert(Number(nbr) + operateur + Number(nbr2) +'='+ result)
        } else if(operateur === '*') {
            let result = Number(nbr)* Number(nbr2);
            alert(Number(nbr) + operateur + Number(nbr2) +'='+ result)
        } else if(operateur === '/'){
            let result = Number(nbr)/ Number(nbr2);
            alert(Number(nbr) + operateur + Number(nbr2) +'='+ result)
        } else {
            console.log('echec critique');
        }
        // console.log(nbr + operateur + nbr2);
        // console.log(nbr);
        // console.log(operateur);
    })

const link = document.querySelectorAll('a');

link[0].addEventListener('click', display);
link[1].addEventListener('click', none);

function none(){
    document.querySelector('.divc').classList.add('no');
    console.log('disparition');
}

function display(){
    document.querySelector('.divc').classList.remove('no');
    console.log('apparition');
}

const inf = document.querySelectorAll('.infos')

const field = document.querySelectorAll('.hov');

field.forEach( champs => {
    champs.addEventListener('mouseenter', oui)})

field.forEach( champs => {
    champs.addEventListener('mouseleave', non)})

function oui (){
    document.querySelector('#appn').classList.remove('no');
    console.log('oui');
}

function non (){
    document.querySelector('#appn').classList.add('no');
    console.log('non');
}

const ope = document.querySelector('#opera');

ope.addEventListener('mouseenter', oui2)

ope.addEventListener('mouseleave', non2)

function oui2 (){
    document.querySelector('#appope').classList.remove('no');
    console.log('oui');
}

function non2 (){
    document.querySelector('#appope').classList.add('no');
    console.log('non');
}

