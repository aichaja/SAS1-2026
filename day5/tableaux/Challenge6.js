function inverserTableau(tab){
    let len = tab.length -1

    for(let i = 0; i < len; i++){
        let c = tab[len]
        tab[len] = tab[i]
        tab[i] = c
        len--
    }
    return tab
}
console.log(inverserTableau([1, 2, 3, 4]))