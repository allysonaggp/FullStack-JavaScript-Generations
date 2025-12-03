// Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. 
// Em seguida, mostre na tela:
//
// Todos os elementos dos índices ímpares do vetor 
// Todos os elementos do vetor que são números pares
// A Soma de todos os elementos do vetor
// A Média de todos os elementos do vetor, armazenada em uma variável do tipo real

// Veja o exemplo abaixo:

//              ENTRADA                           SAÍDA
//--------------------------------------    ------------------------------
// vetor 2, 5, 1, 3, 4, 9, 7, 8, 10, 6      Elementos nos índices ímpares:
//                                          5 3 9 8 6
//                                        
//                                          Elementos pares:
//                                          2 4 8 10 6
//
//                                          Soma: 55
//
//                                          Média: 5.50

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Laços Condicionais
// Laços de Repetição
// Vetores

// cabeçalho
console.log("=================================================")
console.log("- Elementos nos índices ímpares e numeros pares -")
console.log("=================================================")


// Declaração de Variaveis
const read = require("readline-sync")
let numero, pares = [], indiceImpar = [], soma = 0, media = 0, contador = 0

// Entrada e processamento de dados 
for (let i = 0; i < 10; i++) {
    numero = read.questionInt("Digite um numero: ")

    if (numero % 2 === 0) pares.push(numero)
    if (i % 2 !== 0) indiceImpar.push(numero)

    soma += numero
    media = soma / 10

}

// Impressão na tela do terminal
console.log(`-------------------------------------------------
Elementos nos índices Impares:
${indiceImpar.join(" ")}

Elementos Pares:
${pares.join(" ")}

Soma: ${soma}
Média: ${media.toFixed(2)}`)

