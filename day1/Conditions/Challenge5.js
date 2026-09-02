const prompt = require("prompt-sync")();
let  Note =  +prompt("Note : ");

if(Note < 10){
    console.log("Échec")
}
else if(Note >= 10 && Note <= 11.99 ){
    console.log("Passable")
}
else if(Note >= 12 && Note <= 13.99){
    console.log("Assez bien")
}
else if(Note >= 14 && Note <= 15.99){
    console.log("Bien")
}
else if(Note >= 16 && Note <= 17.99){
    console.log("Très bien")
}
else{
    console.log("Excellent")
}
