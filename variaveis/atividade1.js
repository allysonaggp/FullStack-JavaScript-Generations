// Atividade 1
// Dado o Fluxograma abaixo, desenvolva o algoritmo abaixo na Linguagem JavaScript: 
//
// ENTRADA               SAÍDA
//
// Salário: 10000.00     Novo Salário: 11000.00
// Abono: 1000.00

// Cabeçalho
console.log("===============================================================")
console.log("========================= Atividade 1 =========================")
console.log("===============================================================\n")

//Declaração de variaveis
let read, salario, abono, novoSalario

read = require("readline-sync")

// Entrada de dados da variavel Salario
salario = read.questionFloat("digite o salario: ")

// Saída de dados da variavel Salario
console.log(`O valor do salário é: ${salario}`)

// Entrada de dados da variavel Abono
abono = read.questionFloat("digite o abono: ")

// Saída de dados da variavel Abono
console.log(`O valor do abono é: ${abono}`)

// Função
function calculoNovoSalario(salario, abono) {
    calculo = salario + abono
    return calculo.toFixed(1)
}
// processamento de dados
novoSalario = calculoNovoSalario(salario, abono)

// Saída de dados na tela do terminal
console.log(`O valor do novo Salário é: ${novoSalario}`)