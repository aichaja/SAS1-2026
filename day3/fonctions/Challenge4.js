const prompt = require("prompt-sync")();

let nom = prompt("Entre nom :")
let titre = prompt("Entre titre :")

function saluerClient(nom,titre){
    if(titre == ""){
        console.log("Bonjour Client", nom)
    }
    else{
        console.log("Bonjour",titre, nom)
    }

}
saluerClient(nom,titre)

