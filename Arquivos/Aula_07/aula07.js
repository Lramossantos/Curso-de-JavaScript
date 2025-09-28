// Exemplo de uso do operador lógico && (E)
// Verifica se a pessoa tem 18 anos ou mais E possui carteira para poder dirigir
let idade = 20;
let possuiCarteira = false;
if (idade >= 18 && possuiCarteira === true) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}




// Exemplo de uso do operador lógico || (OU)
// Verifica se está chovendo OU se a pessoa tem guarda-chuva para poder sair de casa
let estaChovendo = true;
let temGuardaChuva = false;
if (estaChovendo == true || temGuardaChuva == true) {
    console.log("Pode sair de casa");
} else {
    console.log("Fique em casa");
}




// Exemplo de uso do operador lógico ! (NÃO)
// Verifica se a pessoa NÃO está dormindo para saber se está acordada
let estaDormindo = false;
if (!estaDormindo == true) {
    console.log("A pessoa está acordada");
} else {
    console.log("A pessoa está dormindo");
}



/*
Tabela Verdade dos Operadores Lógicos

|   A    |   B    | A && B | A || B |  !A   |
|--------|--------|--------|-------|-------|
| true   | true   | true   | true  | false |
| true   | false  | false  | true  | false |
| false  | true   | false  | true  | true  |
| false  | false  | false  | false | true  |

- && (E): Só retorna true se ambos forem true.
- || (OU): Retorna true se pelo menos um for true.
- ! (NÃO): Inverte o valor lógico.
*/





