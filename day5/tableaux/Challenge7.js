function filtrerPairs(tab){
    let j = 0
    let arr = []
    for(let i = 0; i < tab.length ;i++){
        if(tab[i] % 2 == 0){
            arr[j] = tab[i]
            j++
        }
        
    }
    return arr
}
console.log(filtrerPairs([1, 2, 3, 4, 5, 6]))