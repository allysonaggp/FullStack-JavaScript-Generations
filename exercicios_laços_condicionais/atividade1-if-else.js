// Desenvolva um algoritmo que leia 3 valores inteiros A,
// B e C e imprima na tela se a soma de A + B é maior,
// menor ou igual a C.
//
// ENTRADA                   SAÍDA

// Digite o número A: 2      4 + 2 = 6 > 5
// Digite o número B: 4      A Soma de A + B é Maior do que C
// Digite o número C: 5
//-------------------------------------------------------------
// 
// Digite o número A: 2       2 + 2 = 4 < 5
// Digite o número B: 2       A Soma de A + B é Menor do que C
// Digite o número C: 5
//-------------------------------------------------------------
//
// Digite o número A: 2        2 + 2 = 4 = 4
// Digite o número B: 2        A Soma de A + B é Igual a C
// Digite o número C: 4
//-------------------------------------------------------------

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Operadores
// Laço Condicional IF

// Cabeçalho
console.log("===============================================================")
console.log("========================= Atividade 1 =========================")
console.log("===============================================================\n")

// Declaração de Variaveis
let read, a, b, c

// Entrada de dados
read = require("readline-sync")
a = read.questionInt("Digite o primeiro Valor: ")
b = read.questionInt("Digite o segundo Valor: ")
c = read.questionInt("digite o terceiro Valor: ")

// Processamento de dados
if (a + b > c) {
    // Impressão na tela do terminal
    console.log(`A soma de ${a} + ${b} é maior que ${c}`)
}
else if (a + b < c) {
    // Impressão na tela do terminal
    console.log(`A soma de ${a} + ${b} é menor que ${c}`)
}
else {
    // Impressão na tela do terminal
    console.log(`A soma de ${a} + ${b} é igual a ${c}`)
}