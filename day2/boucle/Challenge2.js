const prompt = require("prompt-sync")();

let N = prompt("N: ")

for(i = 1; i <= N; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}