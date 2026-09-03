const prompt =require("prompt-sync")();

console.log("1 → Petit trajet")
console.log("2 → Trajet moyen")
console.log("3 → Long trajet")
console.log("4 → Trajet international")

let choix = Number(prompt("Choix :"))
let passager = Number(prompt("Entre le nombre de passagers :"))

switch(choix){
    case 1:
        total = 20 * passager
        console.log("Petit trajet        →", total , "DH");
        break;
    case 2:
        total = 50 * passager
        console.log("Trajet moyen        →", total , "DH");
        break;
    case 3:
        total = 100 * passager
        console.log("Long trajet        →", total , "DH");
        break;
    case 4:
        total = 500 * passager
        console.log("International        →", total , "DH");
        break;
    default:
        console.log("Choix invalide.");
        

}

if(passager > 5){
    console.log("total = ",total - (total * 15/100), "DH")
}

