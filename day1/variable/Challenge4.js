const prompt = require("prompt-sync")();

let kilomètres = prompt("Distance : ")
let litres = prompt("Carburant : ")

Consommation = (litres / kilomètres) * 100



console.log("Consommation : ", Consommation ,"L/100 km")