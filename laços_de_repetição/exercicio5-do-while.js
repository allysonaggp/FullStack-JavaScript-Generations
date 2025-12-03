// Escreva um algoritmo, que leia números inteiros via teclado, 
// até que o número zero seja digitado. 
// Ao final, mostre na tela a soma de todos os números digitados, 
// que sejam positivos. Veja o exemplo abaixo:

//          ENTRADA                                SAÍDA
//-----------------------------      -----------------------------------
// Digite um número: 2                soma dos números positivos é: 36
// Digite um número: 7
// Digite um número: -31
// Digite um número: 4
// Digite um número: -11
// Digite um número: 6
// Digite um número: 9
// Digite um número: -25
// Digite um número: 8
// Digite um número: 0

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Operadores
// Laços Condicionais
// Laço de Repetição DO…WHILE


// Declaração de Variaveis
const read = require("readline-sync")
let numero, somaNumero = 0

// processamento de dados
do {
    numero = read.questionInt("Digite um numero: ")
    if (numero > 0) {
        somaNumero += numero
    }

} while (numero != 0)
    
// Impressao no terminal
console.log("A soma dos numeros é: " + somaNumero)
