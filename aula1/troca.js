function troca(array, atual, menor){
    let maisBarato = array[menor];
    let livroAtual = array[atual];

    array[menor] = livroAtual;
    array[atual] = maisBarato;
}

module.exports = troca;