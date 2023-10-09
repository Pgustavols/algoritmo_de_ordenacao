function troca2(array, analise){
    let maisBarato = array[analise];
    let livroAnterior = array[analise - 1];

    array[analise] = livroAnterior;
    array[analise - 1] = maisBarato;
}

module.exports = troca2;