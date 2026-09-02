const prompt = require("prompt-sync")();

let N = prompt("N: ")

let Somme = 0
for(i = 1; i <= N; i++){
    Somme = Somme + i
}
console.log("Somme = ", Somme)