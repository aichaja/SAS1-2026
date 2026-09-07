const prompt = require("prompt-sync")();

let chaine = prompt("Entre String : ")


function compterVoyelles(chaine){
    let i = 0
    let j = 0
    let len = chaine.length
    while(i < len){
        if(chaine[i] == 'a' || chaine[i] == 'e' || chaine[i] == 'i' || chaine[i] == 'o' || chaine[i] == 'u' || chaine[i] == 'y'){
            j++
        }
        i++


    }
    return j
}
console.log(compterVoyelles(chaine))