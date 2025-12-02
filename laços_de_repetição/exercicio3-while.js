// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
// via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos 
// e o total de pessoas cuja idade, seja maior que 50 anos. 
// A leitura dos dados deve ser finalizada ao digitar uma idade negativa. 
// Veja o exemplo abaixo:

//        ENTRADA                        SAÍDA
// ------------------------   ------------------------------------------
// Digite uma idade: 80       Total de pessoas menores de 21 anos: 5
// Digite uma idade: 15       Total de pessoas maiores de 50 anos: 3
// Digite uma idade: 20
// Digite uma idade: 13
// Digite uma idade: 5
// Digite uma idade: 52
// Digite uma idade: 33
// Digite uma idade: 26
// Digite uma idade: 71
// Digite uma idade: 18
// Digite uma idade: -1
//

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Operadores
// Laços Condicionais
// Laço de Repetição WHILE
//--------------------------------------------------------------------

// Cabeçalho
console.log("============================================================")
console.log("---- Contador de Idades Menores que 21 e Maiores que 50 ----")
console.log("============================================================")

//  Declaração de variáveis
const read = require("readline-sync")
let idade = 0, totalMaiores50 = 0, totalMenores21 = 0, listaIdades = []

// Entrada de dados e processamento
while (idade >= 0) {
    idade = read.questionInt("Digite uma idade: ")
    if (idade < 21) totalMenores21++
    else if (idade > 50) totalMaiores50++
}
// Impressão de resultados
console.log(`\n----------------------------------------------\nTotal de pessoas menores de 21 anos: ${totalMenores21}\nTotal de pessoas maiores de 50 anos: ${totalMaiores50}`) 
