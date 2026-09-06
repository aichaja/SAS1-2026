let prompt = require("prompt-sync")();

let string = prompt("Entre a string : ")
function compterCaracteres(chaine){
    let i = 0 
    while(chaine[i] != undefined){
        i++
    }
    return i
}
console.log(compterCaracteres(string))