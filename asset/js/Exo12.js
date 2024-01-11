// Aide de Google pour trouver une inspiration de comment résoudre l'exercice sans Copier Coller ou recopiage des solution 

// Je définis un Index pour pouvoir parcourir différentes div
let index = 0;

// Je viens créer un évenement "on click" sur le bouton HTML qui éxécute la fonction moov()
const btn = document.querySelector('#btn').addEventListener('click', function moov (){
    
    console.log('ok');
    console.log(index);
    
    // je Créer la fonction qui va me permettre de naviguer entre les carrés
    function chngC (){
        // Je définis les éléments HTML que je vais cibler 
        const car = document.querySelectorAll('.carre');
        // Je viens mettre une condition pour reset l'index quand le nombre de carrés totaux a été atteins d'où le .lenght
        if(index <= car.length){
            // Je viens mettre une condition pour remove le bg en supprimant une classe du carré anterieur uniquement si un tour a déja été faits
            if(index > 0){
                car[index - 1].classList.remove('bg');
                console.log('10');
            } else {
                console.log('00');
            }
            // Je rajoute une class avec class list add
            car[index].classList.add('bg');
            // J'incrémente l'index pour le tour suivant 
            index ++;
        } else {
            // réinitialise index lorsque que l'ensemble des carré est fait.
            index = 0
        }
    }

    chngC();
})


// 1 er essaie Non concluant

// const btn = document.querySelector('#btn');
// const car = document.querySelector('#div div');

// console.log(btn);

// btn.addEventListener('click', function permutation() {
//     console.log("Ca marche");
    

// }
// )
// for(i = 0; i > 3; i++){
//     car.nextSibling.classList.add("bg");
    
//  }

// car.childNodes.forEach(div => {
//     div.classList.add('bg');
// })