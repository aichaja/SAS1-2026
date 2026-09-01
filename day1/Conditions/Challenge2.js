const prompt = require("prompt-sync")();

let nomber =  prompt("Nombre : ")

if (nomber < 0){
    console.log("Le nombre est négatif")
}
else if(nomber > 0){
    console.log("Le nombre est positif")
}
else{
    console.log("Le nombre est égal à zéro")
}