const prompt = require("prompt-sync")();

let r = prompt("Rayon : ")
let h = prompt("Hauteur : ")

 
Volume = 3.14159 * (r**2) * h

console.log("Volume :" , Volume ,"m³")