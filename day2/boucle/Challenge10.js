const prompt = require("prompt-sync")();

let nombre = 1
let i = 0
let somme = 0
while(nombre !== 0){
    nombre = Number(prompt("Saisie : "))
    
    somme = somme + nombre
    i++
}
console.log("Nombre de valeurs :" ,i - 1)
console.log("Somme :", somme)