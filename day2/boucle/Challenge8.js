const prompt = require("prompt-sync")();

let Nomber = prompt("Nombre de missions : ")

let i = 1
while(i <= Nomber){

    console.log("Mission ",i," → Score :" , i * 100)
    i++

}
