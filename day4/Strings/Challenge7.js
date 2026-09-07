const prompt = require("prompt-sync")();

let chaine = prompt("Entre chiane :")
let ancien = prompt("Entre ancien :")
let nouveau = prompt("Entre nouveau :")

function remplacerCaractere(chaine, ancien, nouveau){
    let i = 0
    let str = ""
    while(i < chaine.length){
        if(chaine[i] == ancien){
            str += nouveau
        }
        else{
            str += chaine[i]
        }
        i++
    }
    return str
}
console.log(remplacerCaractere(chaine, ancien , nouveau))
