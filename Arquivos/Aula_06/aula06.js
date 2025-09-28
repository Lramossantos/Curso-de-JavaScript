// Aula 06 - Resumo Completo das Aulas Anteriores com Exemplos Detalhados

/*
Aula 01 - Introdução ao JavaScript
----------------------------------
- JavaScript é uma linguagem de programação usada para criar páginas web interativas.
- Pode ser incluída em arquivos HTML usando a tag <script>.

Exemplo:
*/
alert('Bem-vindo ao Curso de JavaScript!');
console.log('Olá, mundo!');
document.write('<h2>Primeiro código JavaScript!</h2>');

/*
Aula 02 - Variáveis e Tipos de Dados
------------------------------------
- Variáveis armazenam valores que podem ser usados e modificados.
- Tipos de dados: string (texto), number (número), boolean (verdadeiro/falso), null, undefined.
- Declaração de variáveis: var, let, const.
*/

let nome = "Maria"; // string
const idade = 25;   // number
var ativo = true;   // boolean
let vazio = null;   // null
let indefinido;     // undefined

console.log(typeof nome);       // string
console.log(typeof idade);      // number
console.log(typeof ativo);      // boolean
console.log(typeof vazio);      // object (por padrão do JS)
console.log(typeof indefinido); // undefined

/*
Aula 03 - Operadores Aritméticos
--------------------------------
- Usados para realizar operações matemáticas.
- + (adição), - (subtração), * (multiplicação), / (divisão), % (resto), ++ (incremento), -- (decremento)
*/

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1

a++;
console.log(a); // 11

b--;
console.log(b); // 2

/*
Aula 04 - Operadores de Atribuição
----------------------------------
- Permitem atribuir e atualizar valores de variáveis.
- =, +=, -=, *=, /=, %=
*/

let x = 5;
x += 3; // x = x + 3
console.log(x); // 8

x -= 2; // x = x - 2
console.log(x); // 6

x *= 4; // x = x * 4
console.log(x); // 24

x /= 6; // x = x / 6
console.log(x); // 4

x %= 3; // x = x % 3
console.log(x); // 1

/*
Aula 05 - Operadores Relacionais
-------------------------------
- Usados para comparar valores e retornar true ou false.
- > (maior que), >= (maior ou igual), < (menor que), <= (menor ou igual)
- == (igualdade de valor), != (diferente de valor)
- === (igualdade de valor e tipo), !== (diferente de valor e tipo)
- ! (negação)
*/

console.log(10 > 5);      // true
console.log(10 >= 10);    // true
console.log(5 < 10);      // true
console.log(5 <= 5);      // true

console.log(5 == '5');    // true (compara só o valor)
console.log(5 != 10);     // true

console.log(5 === '5');   // false (compara valor e tipo)
console.log(5 !== '5');   // true

console.log(!(10 > 5));   // false (negação do resultado)

/*
Este arquivo resume e exemplifica todos os conceitos das aulas anteriores.
*/