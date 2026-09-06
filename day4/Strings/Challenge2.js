function compterLettre(chaine, lettre){
    let i = 0
    let j = 0
    while(chaine[i] != undefined){
        if(chaine[i] == lettre){
            j++
        }
        i++
    }
    return j
}
console.log(compterLettre("aichaalka", "a"))