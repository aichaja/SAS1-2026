const prompt = require("prompt-sync")();
let note =  prompt("Note: ");

if(note >= 10){
    console.log("Admis")
}
else if(note < 10){
    console.log("Non admis")
}