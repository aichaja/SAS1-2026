const prompt = require("prompt-sync")();

let age =  prompt("Âge : ");
if(age >= 18){
    console.log("Accès autorisé")
}
else{
    console.log("Accès refusé")
}
