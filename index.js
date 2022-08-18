function snapCrackle(maxValue){
    let lista = []
    for(let i = 1; i <= maxValue; i++){
        if(i % 2 == 1 && i % 5 == 0){
            lista.push("Snap Crackle")
        }
        else if(i % 5 == 0){
            lista.push("Crackle")
        }
        else if(i % 2 == 1){
            lista.push("Snap")
        }else{
            lista.push(i)
        }
    }
    let lista2 = lista.join(', ')
    return lista2
}
console.log(snapCrackle(12))

