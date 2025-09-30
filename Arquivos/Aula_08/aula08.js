// Aula 08 - Operadores Bitwise
// Para testar, chame lerBinario() no console!
// Tabela verdade dos operadores bitwise:
//
//   AND (E)         OR (OU)
//  ---------      ---------
//  1  1  1        1  1  1
//  1  0  0        1  0  1
//  0  1  0        0  1  1
//  0  0  0        0  0  0

// Operadores Bitwise em JavaScript
// ---------------------------------
// Operadores bitwise trabalham diretamente nos bits dos números.
// Exemplo fácil:
// 5 (0101) & 3 (0011) = 1 (0001)
//
// Tabela de números decimais e binários:
// | Decimal | Binário |
// |---------|---------|
// |   0     | 0000    |
// |   1     | 0001    |
// |   2     | 0010    |
// |   3     | 0011    |
// |   4     | 0100    |
// |   5     | 0101    |
// |   6     | 0110    |
// |   7     | 0111    |
// |   8     | 1000    |
// |   9     | 1001    |
// |  10     | 1010    |
// |  11     | 1011    |
// |  12     | 1100    |
// |  13     | 1101    |
// |  14     | 1110    |
// |  15     | 1111    |

let n1 = 13
let n2 = 14


console.log("Operadores Bitwise")
// AND 
let res = n1 & n2
console.log(n1 + " & " + n2 + " = " + res)

// OR
let res2 = n1 | n2
console.log(n1 + " | " + n2 + " = " + res)

// XOR
let res3 = n1 ^ n2
console.log(n1 + " ^ " + n2 + " = " + res)

// NOT
let res4 = ~n1
console.log(n1 + " ~ " + n2 + " = " + res)

// Deslocamento para esquerda
let res5 = n1 << 2
console.log(n1 + " << " + n2 + " = " + res)

// Deslocamento para direita
let res6 = n1 >> 2
console.log(n1 + " >> " + n2 + " = " + res)


