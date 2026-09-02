const prompt = require("prompt-sync")();
let  Montant =  +prompt("Montant de la commande : ");

if (Montant >= 500){
    console.log("Livraison : Gratuite")
    console.log("Total à payer :", Montant, "DH")
}
else {
    console.log("livraison : 40 DH")
    total = Montant + 40
    console.log("Total à payer : ", total , "DH")
}