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

// Cabeçalho
console.log("===============================================================")
console.log("========================= Atividade 2 =========================")
console.log("===============================================================\n")

// Declaração de variaveis
let read, nota1, nota2, nota3, nota4, media
// Entrada de dados.
read = require("readline-sync")

nota1 = read.questionFloat("Digite o valor da primeira nota: ")
nota2 = read.questionFloat("Digite o valor da segunda nota: ")
nota3 = read.questionFloat("Digite o valor da terceira nota: ")
nota4 = read.questionFloat("Digite o valor da quarta nota: ")

// Função
function calculoMedia(nota1, nota2, nota3, nota4) {
    calculo = (nota1 + nota2 + nota3 + nota4) / 4
    return calculo.toFixed(1)
}

// Processamento de dados
media = calculoMedia(nota1, nota2, nota3, nota4)


// Impressão no terminal
console.log(`A média é: ${media}`)