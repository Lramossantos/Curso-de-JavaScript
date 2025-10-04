/*
  Aula 12 - Exemplo de objetos e operador spread

  Este arquivo demonstra:
  - criação de objetos simples (jogadores);
  - uso do operador spread (...) para copiar/mesclar objetos;
  - comportamento de sobrescrita: quando duas propriedades têm o mesmo nome,
    o valor do último objeto espalhado sobrescreve o anterior.
*/

// Objeto jogador1 com algumas propriedades (nome, clube, idade e atributos)
const jogador1 = {
    nome: "Cristiano Ronaldo",     // nome do jogador
    clube: "Manchester United",    // clube atual (string)
    idade: 37,                       // idade (number)
    energia: 100,                    // energia inicial (number)
    tentativas: 3,                   // número de tentativas/vidas
    forca: 90                        // atributo específico: força
}

// Objeto jogador2 com propriedades similares, mas valores diferentes
const jogador2 = {
    nome: "Lionel Messi",          // neste caso o nome difere do jogador1
    clube: "Paris Saint-Germain",  // clube diferente
    idade: 34,
    energia: 100,
    tentativas: 3,
    velocidade: 85                   // atributo específico: velocidade
}

// Cria um novo objeto mesclando jogador1 e jogador2 usando o operador spread.
// Ordem importante: primeiro espalhamos jogador1, depois jogador2.
// Se houver propriedades com o mesmo nome (por exemplo `nome`, `clube` ou `idade`),
// o valor vindo de `jogador2` (o último espalhado) vai sobrescrever o de `jogador1`.
const jogador3 = {
    ...jogador1, // copia todas as propriedades de jogador1
    ...jogador2  // copia todas as propriedades de jogador2, sobrescrevendo duplicatas
}

// Exibe o objeto resultante no console.
// Espera-se que as propriedades comuns (nome, clube, idade) venham de jogador2,
// enquanto atributos exclusivos (por exemplo `forca` e `velocidade`) sejam mantidos
// juntos no objeto final.
console.log(jogador3)