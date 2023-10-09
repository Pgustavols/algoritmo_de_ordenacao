const livros = require('./listaDeLivros.json');
const troca2 = require('./troca2');

for(let atual = 0; atual < livros.length; atual++){
    let analise = atual;
    while(analise > 0 && livros[analise].preco < livros[analise - 1].preco){
        troca2(livros, analise)
    
        analise--;
    }   
}

console.log(livros);