/*
  Operador Spread, aprendendo sobre o espalhador em Javascript - Curso de Javascript Moderno - Aula 12

  Neste arquivo usamos:
  - seleção de elementos do DOM com `getElementsByTagName` (retorna um HTMLCollection);
  - conversão desse resultado em um array usando o operador spread `[...]` para poder usar
    métodos de array como `forEach`;
  - alteração do conteúdo (`innerHTML`) de cada elemento selecionado;
  - definição de uma função arrow `soma` e uso do operador spread para passar um array
    como argumentos separados para a função.
*/

// Seleciona todos os elementos <div> da página. O retorno é um HTMLCollection (tipo similar a array,
// mas não tem todos os métodos de array como forEach em alguns navegadores).
const objs1 = document.getElementsByTagName('div')

// Converte a HTMLCollection em um array real usando spread. Agora podemos usar métodos de array.
const objs2 = [...document.getElementsByTagName('div')]


// Percorre cada elemento <div> e altera seu conteúdo para a string 'Alterado'.
// O forEach recebe uma arrow function com o parâmetro 'element'.
objs2.forEach(element => 
    element.innerHTML = 'Alterado'
)

// Mostra no console o array de elementos já modificados.
console.log(objs2)


// Função soma com 3 parâmetros, escrita como arrow function.
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

// Array com valores a somar.
const valores = [2, 2, 2]

// Usa o operador spread para expandir o array em argumentos separados
// Equivalentemente: soma(valores[0], valores[1], valores[2])
console.log(soma(...valores))



