const prompt = require("prompt-sync")();


let Longueur = parseInt(prompt("Longueur : "))
let Largeur = parseInt(prompt("Largeur : "))

Surface = Longueur * Largeur

Perimetre = (Longueur + Largeur)* 2

console.log("Surface : ", Surface ," m²")
console.log("Périmètre : ", Perimetre, "m")
