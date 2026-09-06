const prompt = require("prompt-sync")();

function verifierMotDePasse(motDePasse){
    motDePasse = prompt("Entre le mod de passe : ")
    if(motDePasse.length >= 8 && motDePasse.includes("@")){
        return true
    }
    else{
        return false
    }
}
console.log(verifierMotDePasse())