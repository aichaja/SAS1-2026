const prompt = require("prompt-sync")();

let N = prompt("N = ")
let X = prompt("X = ")

let result = 0
let total = 0

for(i = 1; result < N ; i++){
    
        result = X * i
        console.log(result)
}
total = total + result
console.log("total", total)