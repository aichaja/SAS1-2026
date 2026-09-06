


function additionnerTout(...args){
    //console.log(args)
    return args.reduce((total, nombre) => {
        //console.log(total , nombre)
        return total + nombre;
    }, 0)

}
console.log(additionnerTout(10 ,20,30,40))