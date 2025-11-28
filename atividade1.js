// Atividade 1
// Dado o Fluxograma abaixo, desenvolva o algoritmo abaixo na Linguagem JavaScript: 
//
// ENTRADA               SAÍDA
//
// Salário: 10000.00     Novo Salário: 11000.00
// Abono: 1000.00


let read = require("readline-sync")
// Entrada de dados da variavel Salario

let salario = read.questionFloat("digite o salario: ")
// Saída de dados

console.log(`O valor do salário é: ${salario}`)
// Entrada de dados da variavel abono

let abono = read.questionFloat("digite o abono: ")

// Saída de dados 
console.log(`O valor do abono é: ${abono}`)

// processamento de dados
let novoSalario = salario + abono

// Saída de dados na tela do terminal
console.log(`O valor do novo Salário é: ${novoSalario}`)