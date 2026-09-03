const prompt = require("prompt-sync")();

let nomber1 = prompt("Nombre 1 : ")
let operateur = prompt("Opérateur : ")
let nomber2 = prompt("Nombre 2 : ")

switch(operateur){
    case("+"):
        result = nomber1 + nomber2
        console.log("Résultat :", result)
        break;
    case("-"):
        result = nomber1 - nomber2
        console.log("Résultat :", result)
        break;
    case("*"):
        result = nomber1 * nomber2
        console.log("Résultat :", result)
        break;
    case("/"):
        result = nomber1 / nomber2
        console.log("Résultat :", result)
        break;
    case("%"):
        result = nomber1 % nomber2
        console.log("Résultat :", result)
        break;
}