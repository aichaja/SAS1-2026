
const prompt = require("prompt-sync")();

let N = Number(prompt("Entre Nomber :"))

let result = 1
for(i = 1;N >= i;i++){
    result = result * i
    
}
console.log(N,"! =", result)