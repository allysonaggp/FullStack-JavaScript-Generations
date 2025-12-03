// Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), 
// o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). 
// A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.
//
// Código do Cargo     Cargo      Percentual do Reajuste
//        1            Gerente              10%
//        2            Vendedor             7%
//        3            Supervisor           9%
//        4            Motorista            6%
//        5            Estoquista           5%
//        6            Técnico de TI        8%
//
//
// Novo Salário = salário + (reajuste * salário)

// Veja os exemplos abaixo:
// 
// ENTRADA                                    SAÍDA
// Nome do colaborador: João da Silva         Nome do colaborador: João da Silva
// Cargo: 1                                   Cargo: Gerente
// Salário: R$ 10000.00                       Salário: R$ 110000.00
// 
// 
// Nome do colaborador: Maria dos Anjos       Nome do colaborador: Maria dos Anjos
// Cargo: 5                                   Cargo: Estoquista
// Salário: R$ 2000.00                        Salário: R$ 2100.00
//
//
// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Operadores
// Laço Condicional Switch

// Cabeçalho
console.log("===============================================================")
console.log("============ Calculadora de reajuste de salario ===============")
console.log("===============================================================\n")
// Declaração de Variaveis
let read, nomeColaborador, codigoCargo, salario, novoSalario, reajuste, cargo

// Entrada de dados
read = require("readline-sync")
nomeColaborador = read.question("Digite o nome do colaborador: ")
codigoCargo = read.questionInt("digite o codigo do cargo:\n\n1 - Gerente\n2 - Venderdor\n3 - Supervisor\n4 - Motorista\n5 - Estoquestia\n6 - Técnico de TI\n\nCodigo do cargo:")
salario = read.questionFloat("Digite o salario do colaborador: ")

// Switch case para definir o cargo e o percentual do reajuste
switch (codigoCargo) {
    case 1:
        cargo = "Gerente"
        reajuste = 0.10
        break
    case 2:
        cargo = "Vendedor"
        reajuste = 0.07
        break
    case 3:
        cargo = "Supervisor"
        reajuste = 0.09
        break
    case 4:
        cargo = "Motorista"
        reajuste = 0.06
        break
    case 5:
        cargo = "Estoquista"
        reajuste = 0.05
        break
    case 6:
        cargo = "Técnico de TI"
        reajuste = 0.08
        break
    default:
        console.log("Digite um codigo valido de 1 a 6")
}
// Cálculo do novo salário
novoSalario = salario + (reajuste * salario)


// Impressão na tela do terminal
console.log("===============================================================")
console.log(`O nome do colaborador é: ${nomeColaborador}`)
console.log(`Cargo: ${cargo}`)
console.log(`Salario Reajustado R$: ${novoSalario.toFixed(2)}`)
