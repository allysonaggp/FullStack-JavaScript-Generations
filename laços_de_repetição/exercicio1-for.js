// Escreva um algoritmo, que leia 2 números inteiros via teclado, 
// onde o primeiro número deve ser menor do que o segundo número. 
// Caso contrário, deve ser exibida uma mensagem na tela 
// informando que o intervalo é inválido e sair do programa. 
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. 
// Veja os exemplos abaixo:

//               ENTRADA                                      SAÍDA
// -------------------------------------------   --------------------------------
// Digite o primeiro número do intervalo: 10      No Intervalo entre 10 e 100:
//
// Digite o último número do intervalo: 100       15 é múltiplo de 3 e 5
//                                                30 é múltiplo de 3 e 5
//                                                45 é múltiplo de 3 e 5
//                                                60 é múltiplo de 3 e 5
//                                                75 é múltiplo de 3 e 5
//                                                90 é múltiplo de 3 e 5


//               ENTRADA                                      SAÍDA
//-------------------------------------------    --------------------------------
// Digite o primeiro número do intervalo: 100     Intervalo inválido!
//
// Digite o último número do intervalo: 10


//             ENTRADA                                      SAÍDA
// -------------------------------------------   --------------------------------
//
// Digite o primeiro número do intervalo: -10     Intervalo inválido!
//
// Digite o último número do intervalo: -100


//               ENTRADA                                      SAÍDA
// -------------------------------------------   --------------------------------
// Digite o primeiro número do intervalo: -100    No Intervalo entre -100 e -10:
//
// Digite o último número do intervalo: -10       -90 é múltiplo de 3 e 5
//                                                -75 é múltiplo de 3 e 5
//                                                -60 é múltiplo de 3 e 5
//                                                -45 é múltiplo de 3 e 5
//                                                -30 é múltiplo de 3 e 5
//                                                -15 é múltiplo de 3 e 5
// 
//

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Laços Condicionais


// cabeçalho
console.log("=================================================")
console.log("---- Números Múltiplos de 3 e 5 no Intervalo ----")
console.log("=================================================")

// Declaração de variáveis
const read = require("readline-sync")
let numero1, numero2

// Declaração de entrada de dados
numero1 = read.questionInt("Digite o Primeiro Numero: ")
numero2 = read.questionInt("Didite o Segundo Numero: ")

// Validação do intervalo
if (numero1 >= numero2) console.log("-------------------------------------------------\n\>Intervalo inválido!")

console.log("\n")
// Processamento e saída de dados    
for (let i = numero1; i <= numero2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é múltiplo de 3 e 5`)
                
    }

}
console.log("-------------------------------------------------")

