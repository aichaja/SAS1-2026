const prompt = require("prompt-sync")();

let Nombre = prompt("Nombre de participants : ")

for( i = 1; i <= Nombre ; i++){
    console.log("Participant" , i)
}