
function Verif() {
    var anniv = document.getElementById("anniv").value
    console.log(anniv);

    let date = new Date();
    let jour = date.getDate();
    let month = date.getMonth();
    let année = date.getFullYear();
    let mois = month + 1; 
    let mois1 = undefined;

    if(mois <=9){
        mois1 = "0"+mois;
        
    } else {
        mois1 = mois;
       
    }

    let jour1 = undefined;

    if(jour < 10){
        jour1 = "0"+jour;
        
    } else {
        jour1 = mois;
       
    }

    let today = année+"-"+mois1+"-"+jour1;

    if(anniv == today){
        alert("Moins 50 % sur le site grace a votre anniv");
    } else if( anniv !== today) {
       alert("Moins 10% sur le site");
    } else {
        alert("le programme na pas fonctionner");
    }
}


