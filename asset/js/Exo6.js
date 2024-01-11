var etage = prompt("Bienvenue sur ma super pyramide mario, combien d'étage veux-tu ?","");

function construction(){
    
    let b = "";
    for(let a = 0; a <= etage; a++){
        
        b = "#" + b;
        let c = b;
        console.log(c);
        // Correction
        // console.log(" ".repeat(etage - a)+ c);
    }
}

construction();

