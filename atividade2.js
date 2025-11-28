// Atividade 2
// Elabore um algoritmo em JavaScript que leia 4 notas de um participante,
// exiba na tela a média final do participante. Veja o exemplo abaixo:
//
// ENTRADA           SAÍDA
//
// Nota 1: 10.0      Média final: 8.1
// Nota 2: 8.0
// Nota 3: 7.0
// Nota 4: 7.5
//
// CALCULAR MÉDIA = (NOTA1 + NOTA2 + NOTA3 + NOTA4) / 4


// Entrada de dados.
let read = require("readline-sync")

let nota1 = read.questionFloat("Digite o valor da primeira nota: ")
let nota2 = read.questionFloat("Digite o valor da segunda nota: ")
let nota3 = read.questionFloat("Digite o valor da terceira nota: ")
let nota4 = read.questionFloat("Digite o valor da quarta nota: ")
// Processamento de dados
Media=(nota1+nota2+nota3+nota4)/4
//impressão no terminal
console.log(`A média é: ${Media.toFixed(1)}`)