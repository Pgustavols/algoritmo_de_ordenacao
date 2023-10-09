function menorValor(array, inicio){
    let menor = inicio;
    for(let atual = inicio; atual < array.length; atual++){
        if(array[atual].preco < array[menor].preco){
            menor = atual;
        }
    }
    return menor;
}

module.exports = menorValor;
