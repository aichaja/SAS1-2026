const prompt = require("prompt-sync")();

let noteCC = prompt("Contrôle continu : ")
let noteProjet = prompt("Projet : ")
let noteExamen = prompt("Examen : ")

Notefinale = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10

console.log("Note finale :" , Notefinale)