const prompt = require("prompt-sync")();

let nombre = Number(prompt("Entre Nomber :"))

for(i = 1; nombre >= i;i++){
    if(nombre % i == 0){
        console.log(i)
    }
}
