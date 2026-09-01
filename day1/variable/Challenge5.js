const prompt = require("prompt-sync")();

let min = prompt("Distance : ")

if (min < 60){
    console.log("Catégorie : Court métrage")
}
else if(min < 120){
    console.log("Catégorie : Film standard")
}
else{
    console.log("Catégorie : Film long")
}
