const prompt =require("prompt-sync")();

console.log("1 → Carte bancaire")
console.log("2 → PayPal")
console.log("3 → Virement bancaire")
console.log("4 → Paiement à la livraison")
console.log("5 → Carte cadeau")

let choix = Number(prompt("Choix :"))
let prix = Number(prompt("Entre le prix :"))

switch(choix){
    case 1:
        montantFinal = prix + (prix * 2 / 100)
        console.log("le montant final = ",montantFinal, "DH");
        break;
    case 2:
        montantFinal =prix +(prix * 3 / 100)
        console.log("le montant final = ",montantFinal, "DH");
        break;
    case 3:
        montantFinal = prix 
        console.log("le montant final = ",montantFinal, "DH");
        break;
    case 4:
        montantFinal = prix + 20
        console.log("le montant final = ",montantFinal, "DH");
        break;
    case 5:
        montantFinal = prix
        console.log("le montant final = ",montantFinal, "DH");
        break;
    
    default:
        console.log("Choix invalide.");
        

}

