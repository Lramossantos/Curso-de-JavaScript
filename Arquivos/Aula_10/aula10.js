// 🧮 Declarando duas variáveis numéricas
let n = 0;
let m = 15;

// ➖ Subtração: n - m = -15
// 🧐 Verifica se o resultado é maior que 0
// Se for, retorna "positivo"; senão, "negativo"
let res = n - m > 0 ? "positivo" : "negativo";
console.log(res + " = " + (n - m)); // Saída: negativo = -15

// 🔢 Verificando se um número é par ou ímpar
let num = 3;
let result = num % 2 == 0 ? "par" : "ímpar";
console.log(result + " = " + (num % 2)); // Saída: ímpar = 1

// ⚠️ Aqui está o detalhe importante:
// A condição do operador ternário está usando uma string diretamente: "c" ? ...
// Como "c" é uma string não vazia, ela sempre será considerada **true** em JavaScript
// Ou seja, o valor de status será sempre "conectado", independentemente do conteúdo de status_usuario

let status_usuario = "c";
let status = status_usuario === "c" ? "conectado" : "desconectado";
console.log(status); // Saída correta: conectado
// Se status_usuario fosse uma string vazia "", o resultado ainda seria "conectado"