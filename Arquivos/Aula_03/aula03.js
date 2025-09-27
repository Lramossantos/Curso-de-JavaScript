"use strict";
// Aula 03 - Variáveis, Constantes e Tipos Primitivos

// Exemplo com let
if (true) {
    let mensagem = "Olá, let!";
    console.log(mensagem); // Funciona
}
// console.log(mensagem); // Erro: mensagem não está definida

// Exemplo com var
if (true) {
    var saudacao = "Olá, var!";
    console.log(saudacao); // Funciona
}
console.log(saudacao); // Funciona, pois var é global (ou da função)

function testeVar() {
    if (true) {
        var numero = 123;
    }
    console.log(numero); // Funciona, pois var tem escopo de função
}
testeVar();
// console.log(numero); // Erro: numero não está definida fora da função

function testeLet() {
    if (true) {
        let valor = 456;
        console.log(valor); // Funciona
    }
    // console.log(valor); // Erro: valor não está definida aqui
}
testeLet();

var x = 1;
var x = 2; // Ok, var permite redeclaração

let y = 1;
// let y = 2; // Erro, let não permite redeclaração no mesmo escopo

y = "novo valor"; // A redeclaração não é permitida, mas a atribuição é
console.log(y);

const curso = "JavaScript Básico";
curso = "Outro Curso"; // Erro, não pode reatribuir uma constante
console.log(curso);