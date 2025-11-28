//exercicio3
// Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido. Veja o exemplo abaixo:

// ENTRADA                         SAÍDA

// Salário Bruto: 2000.00          Salário Líquido: 2800.00
// Adicional Noturno: 500.00
// Horas Extras: 100.00
// Descontos: 200.00

// SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS

// Entrada de dados
let salarioBruto = 2000.00
let adicionalNoturno = 500.00
let horasExtras = 100.00
let desconto = 200.00
// Processamento de dados
const salarioliquido = salarioBruto+adicionalNoturno+
(horasExtras*5)-desconto
// Impressão
console.log(salarioliquido)