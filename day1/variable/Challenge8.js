const prompt = require("prompt-sync")();

let U = prompt("Tension : ")
let I = prompt("Intensité : ")
let t = prompt("Temps : ")

Énergie = U * I * t

console.log("Énergie : ", Énergie, "Wh")