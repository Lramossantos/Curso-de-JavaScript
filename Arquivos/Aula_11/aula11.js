// v1 é um número inteiro
let v1 = 10;

// v2 é uma string que contém o número "10"
let v2 = "10";

// v3 compara v1 e v2 usando === (comparação estrita)
// === verifica valor e tipo → 10 (number) !== "10" (string)
// Portanto, v3 será false
let v3 = v1 === v2;

// v4 é um objeto com uma propriedade chamada nome
let v4 = { nome: "João" };

// Exibe o valor e o tipo de v1 → number
console.log("Valor: " + v1 + " - Tipo: " + typeof(v1)); // Saída: Valor: 10 - Tipo: number

// Exibe o valor e o tipo de v2 → string
console.log("Valor: " + v2 + " - Tipo: " + typeof(v2)); // Saída: Valor: 10 - Tipo: string

// Exibe o valor e o tipo de v3 → boolean
console.log("Valor: " + v3 + " - Tipo: " + typeof(v3)); // Saída: Valor: false - Tipo: boolean

// Exibe o valor e o tipo de v4 → object
console.log("Valor: " + v4 + " - Tipo: " + typeof(v4)); // Saída: Valor: [object Object] - Tipo: object
