const livros = require('./listaDeLivros.json');
const menorValor = require('./menor');
const troca = require('./troca');

livros.forEach((_, indice) =>{
    let menor = menorValor(livros, indice);
    troca(livros, indice, menor);
})

console.log(livros);