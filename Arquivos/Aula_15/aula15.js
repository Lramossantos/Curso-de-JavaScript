let nome = "Eric"
let idade = 20
let cidade = "São Paulo"

console.log("Início do laço.")
for (let i = 0; i < 10; i++) {
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`)
}
console.log("Fim do laço.")
console.log("--------------------------------------------------")


let numbero = 0
for (let i = 1; i <= 25; i++) {
    console.log("JavaSolutions - Valor da variável i: " + i)
}

console.log("--------------------------------------------------")
for (let i = 0; i >= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par.")
    } else {
        console.log(i + " é ímpar.")
    }
}