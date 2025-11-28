// Atividade 3
// Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido. Veja o exemplo abaixo:
//
// ENTRADA                         SAÍDA
//
// Salário Bruto: 2000.00          Salário Líquido: 2800.00
// Adicional Noturno: 500.00
// Horas Extras: 100.00
// Descontos: 200.00
//
// SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS

// Entrada de dados
let read = require("readline-sync")

let salarioBruto = read.questionFloat("Digite o valor do salario bruto: ")
let adicionalNoturno = read.questionFloat("Digite o valor do adicional noturno: ")
let horasExtras = read.questionFloat("Digite o valor das horas extras: ")
let desconto = read.questionFloat("Digite o valor do desconto: ")
// Processamento de dados
const salarioliquido = salarioBruto+adicionalNoturno+
(horasExtras*5)-desconto
// Impressão
console.log(`O valor do Salario Liquido é: ${salarioliquido}`)