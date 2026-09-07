const prompt = require("prompt-sync")();

let chaine = prompt("Entre chaine :")
let debut = Number(prompt("Entre debut :"))
let fin = Number(prompt("Entre fin :"))

function extraireChaine(chaine, debut, fin){
    let i = debut
    let str = ""
    while(i < fin){
        str += chaine[i]
        i++
    }
    return str

}
console.log(extraireChaine(chaine, debut,fin))