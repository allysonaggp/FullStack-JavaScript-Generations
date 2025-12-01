// Atividade 3
// Elabore um algoritmo em JavaScript , que leia o Salário Bruto, 
// o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, 
// exiba na tela o Salário Líquido. Veja o exemplo abaixo:
//
// ENTRADA                         SAÍDA
//
// Salário Bruto: 2000.00          Salário Líquido: 2800.00
// Adicional Noturno: 500.00
// Horas Extras: 100.00
// Descontos: 200.00
//
// SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS

// Cabeçalho
console.log("===============================================================")
console.log("========================= Atividade 3 =========================")
console.log("===============================================================\n")

// Declaração de variaveis
let read, salarioBruto, adicionalNoturno, horasExtras, desconto, salarioliquido

// Entrada de dados
read = require("readline-sync")

salarioBruto = read.questionFloat("Digite o valor do salario bruto: ")
adicionalNoturno = read.questionFloat("Digite o valor do adicional noturno: ")
horasExtras = read.questionFloat("Digite o valor das horas extras: ")
desconto = read.questionFloat("Digite o valor do desconto: ")

// Função salario liquido
function calculoSalarioliquido(salarioBruto, adicionalNoturno, horasExtras, desconto) {
    calculo = salarioBruto + adicionalNoturno +
        (horasExtras * 5) - desconto
    return calculo.toFixed(1)
}

// Processamento de dados
salarioliquido = calculoSalarioliquido(salarioBruto, adicionalNoturno, horasExtras, desconto)

// Impressão
console.log(`O valor do Salario Liquido é: ${salarioliquido}`)