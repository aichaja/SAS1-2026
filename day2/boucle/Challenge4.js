const prompt = require("prompt-sync")();

let Nombre = prompt("Nombre: ")


for(i = 1; i <= 10; i++){
    multiplication = Nombre * i
    console.log(Nombre , "X" , i , "=", multiplication)
}
