const prompt = require("prompt-sync")();
let chaine = prompt("Entre String :")

function estPalindrome(chaine){
    let i = 0
    let len = chaine.length - 1
    while(i <= len){
        if(chaine[i] != chaine[len]){
            return false;
        }
        i++;
        len--;
    }
    return true
}


console.log(estPalindrome(chaine))