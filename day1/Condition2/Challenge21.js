const prompt = require("prompt-sync")();

let solde = prompt("Solde disponible : ")
let montant = prompt("Montant à retirer : ")
let cart = prompt("Carte (1 -> active ou 2 -> non : ")
let codePin = prompt("Code PIN : ")

if(montant > 0 && cart == 1 && montant <= solde && codePin == 1234){
    if(solde - montant >= 100){
        if(montant > 5000){
            console.log("Retrait maximum")
        }
        else if(montant > 3000){
            console.log("Retrait" ,montant)
            console.log("avertissement")
        }
        else{
            console.log("Retrait" ,montant)
        }
    }
    else{
        console.log("alerte")
    }
}