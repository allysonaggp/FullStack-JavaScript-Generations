// Escreva um algoritmo, que leia 10 números inteiros via teclado 
// e mostre na tela quantos números são pares e quantos número são ímpares. 
// Veja o exemplo abaixo:

//        ENTRADA                             SAÍDA
// ---------------------------------   --------------------------
// Digite o 1º número: 2               Total de números pares: 4
// Digite o 2º número: 7               Total de números ímpares: 6
// Digite o 3º número: 31
// Digite o 4º número: 4
// Digite o 5º número: 11
// Digite o 6º número: 6
// Digite o 7º número: 9
// Digite o 8º número: 25
// Digite o 9º número: 8
// Digite o 10º número: 15
// 

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Operadores
// Laços Condicionais
// Laço de Repetição FOR
//--------------------------------------------------------------------


// Cabeçalho
console.log("===============================================")
console.log("---- Contador de Números Pares e Ímpares ----")
console.log("===============================================")

// Declaração de variaveis
const read = require("readline-sync")
let lista = [], numero, pares = 0, impares = 0

// Entrada de dados e processamento
for (let i = 0; i < 3; i++) {
    numero = read.questionInt(`Digite o ${i + 1} numero: `)
    // Adiciona numero na lista
    lista[lista.length] = numero
}
// Contagem de pares e impares
for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) pares++
    else impares++
}
// Impressão de resultados

console.log(`\n-----------------------------------------------\nNumeros cadastrados: ${lista}\nTotal de números Pares: ${pares}\nTotal de numeros Impares: ${impares}`)
