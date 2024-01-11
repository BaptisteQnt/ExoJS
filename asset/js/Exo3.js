var N1 = prompt('valeur1','');
let N2 = prompt('valeur2','');
let N3 = prompt('valeur3','');

if(N1 === N2 && N2 === N3){
    alert("Toute les val identique");
} else if (N1 === N2 && N2 !== N3){
    alert("Valeurs 1 et 2 sont identique");
} else if (N1 !== N2 && N2 === N3){
    alert ("Les val 2 et 3 sont identique");
} else if (N1 === N3 && N2 !== N1){
    alert("Les valeurs 1 et 3 sont identique");
}else {
    alert("Toutes les valeurs sont différentes");
}

