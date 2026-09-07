const prompt =require("prompt-sync")();

let chaine = prompt("Entre chaine :")
let fois = prompt("Entre fois :")

function repeterChaine(chaine, fois){
    let i = 0
    let str = "" 
    while(i < fois){
        let j = 0
        while(j < chaine.length){
            str += chaine[j]
            j++
        }
        i++

        
    } 
    return str
    

}
console.log(repeterChaine(chaine, fois))