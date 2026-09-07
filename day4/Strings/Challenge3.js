const prompt = require("prompt-sync")();

let chaine = prompt("Entre String : ")

function  inverserChaine(chaine){
    
    let str = ""
    let i = 0
    let len = chaine.length- 1
    
    while(len >= i){
        str += chaine[len]
        len--
    }
    return str

}
console.log(inverserChaine(chaine))