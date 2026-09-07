function calculerSomme(tab){
    let i = 0
    let som = 0
    while(i < tab.length){
        som += tab[i]
        i++
    }
    return som
}
console.log(calculerSomme([5, 10, 15]))