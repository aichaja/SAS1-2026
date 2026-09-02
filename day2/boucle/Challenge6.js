const prompt =require("prompt-sync")();

let depart = prompt("Départ :")


while(depart >= 0 ){
    console.log(depart)
    depart--
}
console.log("Décollage !")