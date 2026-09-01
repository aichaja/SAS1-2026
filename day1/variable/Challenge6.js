const prompt = require("prompt-sync")();

let Partie1 =parseInt(prompt("Partie 1: "))
let Partie2 =parseInt(prompt("Partie 2: "))
let Partie3 =parseInt(prompt("Partie 3: "))
let Partie4 =parseInt(prompt("Partie 4: "))

scoretotal = (Partie1 + Partie2 + Partie3 + Partie4)
moyenne = scoretotal / 4

console.log("Score total : ", scoretotal)
console.log("Moyenne : ", moyenne)


