const prompt = require("prompt-sync")();

let base = prompt("Base :")
let exposant = prompt("Exposant :")

let i = 1
let result = 1
while(i < exposant){
    result = base**exposant
    i++
    
}
console.log("Résultat :", result)