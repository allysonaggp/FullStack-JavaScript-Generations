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


//entrada de dados
let read = require("readline-sync")

let n1 = read.questionFloat("Digite o primeiro valor: ")
let n2 = read.questionFloat("Digite o segundo valor: ")
let n3 = read.questionFloat("Digite o terceiro valor: ")
let n4 = read.questionFloat("digite o quarto valor: ")

//processamento de dados
let calculo = (n1 * n2) - (n3 * n4)
//impressão na tela do terminal
console.log(`A diferença do produto entre ${n1} e ${n2} pelo produto entre ${n3} e ${n4} é: ${calculo.toFixed(1)}`)


