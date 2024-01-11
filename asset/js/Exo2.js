var age = prompt('Quelle age avez vous ?', '');

if( age <= 17){
    console.log("Vous êtes mineurs");
} else if ( age >= 18 && age <= 20) {
    console.log('Vous êtes majeurs en france');
} else if ( age >= 18 && age >= 20){
    console.log('Vous êtes majeurs partout dans le monde');
} else if ( age !== 0){
    alert('Faite f5 et saisissez un nombre');
}

