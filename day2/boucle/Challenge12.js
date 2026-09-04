const prompt = require("prompt-sync")();

let nombre = Number(prompt("Nomber :"))
console.log("Diviseurs :")
let total = 0
for(let i = 1; nombre >= i;i++){
    if(nombre % i == 0){
        
        console.log(i)
        total = total + 1
        
    }
    
}
console.log("Nombre de diviseurs :",total)
