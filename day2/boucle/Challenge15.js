const prompt = require("prompt-sync")();

let nombre = Number(prompt("Entre Nomber :"))
let result = 0

for(i = 1; i < nombre ; i++){ 
    if(nombre % i == 0){
       result = result + i 
    }

}
if(result == nombre){
    console.log("est un nombre parfait.")
}
else{
    console.log("pas un nombre parfait.")
}


   
    
       

