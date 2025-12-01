// Escreva um algoritmo que leia um número inteiro via teclado
// e mostre na tela uma mensagem indicando se este número é par ou ímpar 
// e se o número é positivo ou negativo. Veja os exemplos abaixo:

// ENTRADA                  SAÍDA

// Digite um número:  2     O Número 2 é par e positivo!
// Digite um número: -3     O Número -3 é ímpar e negativo!
// Digite um número: -2     O Número -2 é par e negativo!
// Digite um número:  3     O Número 3 é ímpar e positivo!
// ----------------------------------------------------------------------


// Cabeçalho
console.log("===============================================================")
console.log("========================= Atividade 4 =========================")
console.log("===============================================================\n")

// Declaração de Variaveis
let read, numero

// Entrada de dados
read = require("readline-sync")
numero = read.questionInt(" DFigite um numero inteiro: ")


// Processamento de dados e Impressão na tela do terminal
if (numero % 2 === 0) {
    if (numero > 0) {
        console.log(`O ${numero} é Par e Positivo`)
    }
    else {
        console.log(`O ${numero} é Par e Negativo`)
    }
} else {
    if (numero > 0) {
        console.log(`O ${numero} é Ímpar e Positivo`)
    }
    else {
        console.log(`O ${numero} é Ímpar e Negativo`)
    }
}
