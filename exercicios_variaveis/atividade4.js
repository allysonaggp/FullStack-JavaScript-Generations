// Atividade 4
// Leia quatro valores (n1, n2, n3, n4). 
// A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4. 
// Veja os exemplos abaixo:
//
// ENTRADA        SAÍDA              |   ENTRADA        SAÍDA
//                                   |
// numero1: 5.0   Diferença: -26.0   |   numero1: 5.0   Diferença: 86.0
// numero2: 6.0                      |   numero2: 6.0
// numero3: 7.0                      |   numero3: -7.0
// numero4: 8.0                      |   numero4: 8.0
// 
// CALCULO = (n1 * n2) – (n3 * n4)

// Cabeçalho
console.log("===============================================================")
console.log("========================= Atividade 4 =========================")
console.log("===============================================================\n")

// Declaração de variaveis
let n1, n2, n3, n4, read, produto

// Entrada de dados
read = require("readline-sync")
n1 = read.questionFloat("Digite o primeiro valor: ")
n2 = read.questionFloat("Digite o segundo valor: ")
n3 = read.questionFloat("Digite o terceiro valor: ")
n4 = read.questionFloat("digite o quarto valor: ")

// Função
function calculoProduto(n1, n2, n3, n4) {
    calculo = (n1 * n2) - (n3 * n4)
    return calculo.toFixed(1)
}

// Processamento de dados
produto = calculoProduto(n1, n2, n3, n4)

// Impressão na tela do terminal
console.log(`A diferença do produto entre ${n1} e ${n2} pelo produto entre ${n3} e ${n4} é: ${produto}`)


