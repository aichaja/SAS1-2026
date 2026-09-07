const prompt = require("prompt-sync")();

let chaine = prompt("Entre chaine : ")

function nettoyerEspaces(chaine){
    let i = 0
    let len = chaine.length-1
    let str = ""
    while(chaine[i] == " "){
        
        i++
    }
    
    while(chaine[len] == " "){
        
        len--
    }
    while(i <= len){
        str += chaine[i]
        i++
    }
    return str


}
console.log(nettoyerEspaces(chaine))