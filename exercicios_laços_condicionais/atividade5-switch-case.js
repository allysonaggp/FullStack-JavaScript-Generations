// Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) 
// e a quantidade comprada deste item (número inteiro). 
// A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

// Código do Produto     Produto             Preço Unitário
// 1                     Cachorro Quente     R$ 10.00    
// 2                     X-Salada            R$ 15.00
// 3                     X-Bacon             R$ 18.00
// 4                     Bauru               R$ 12.00
// 5                     Refrigerante        R$ 8.00
// 6                     Suco de laranja     R$ 13.00
//
// Valor total = quantidade * preço
//
//
// ENTRADA                       SAÍDA
// Código do Produto: 2          Produto: X-Salada
// Quantidade: 5                 Valor total: R$ 75.00
// Código do Produto: 4          Produto: Bauru
// Quantidade: 2                 Valor total: R$ 24.00
//
// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Operadores
// Laço Condicional Switch



// Declaração de Variaveis
let cachorroQuente, xSalada, xBacon, bauru, refrigerante, sucoLaranja, valorTotal, item, entrada
entrada = require("readline-sync")

// Cabeçalho
console.log('===============================================================')
console.log('=============Seja bemvindo a lanchonete da Thays===============')
console.log('===============================================================')

// Entrada de dados
item = entrada.questionFloat('\n\Digite o numero correspondente do seu pedido: \n1 - cachorro quente\n2 - x-salada \n3 - x-bacon \n4 - bauru \n5 - refrigerante \n6 - suco de laranja \n\nNumero do pedido:')
quantidade = entrada.questionInt('Digite a quantidade comprada desse item: ')
console.log('===============================================================')

// Processamento de dados e Impressão na tela do terminal
switch (item) {

    case 1:
        // Atribuição de valor
        cachorroQuente = 10.00
        //Impressão na tela do terminal com quantidade e valor total
        console.log(`Voce comprou ${quantidade} Cachorro quente Totalizando R$ ${(cachorroQuente * quantidade).toFixed(2)} `)
        break
    case 2:
        xSalada = 15.00
        console.log(`Voce comprou ${quantidade} X-Salada Totalizando R$ ${(xSalada * quantidade).toFixed(2)} `)
        break
    case 3:
        xBacon = 18.00
        console.log(`Voce comprou ${quantidade} X-Bacon Totalizando R$ ${(xBacon * quantidade).toFixed(2)} `)
        break
    case 4:
        bauru = 12.00
        console.log(`Voce comprou ${quantidade} Bauru Totalizando R$ ${(bauru * quantidade).toFixed(2)} `)
        break
    case 5:
        refrigerante = 8.00
        console.log(`Voce comprou ${quantidade} Refrigerante Totalizando R$ ${(refrigerante * quantidade).toFixed(2)} `)
        break
    case 6:
        sucoLaranja = 13.00
        console.log(`Voce comprou ${quantidade} Suco de Laranja Totalizando R$ ${(sucoLaranja * quantidade).toFixed(2)} `)
        break

    default:
        console.log('Digite apenas de 1 a 6')
        break
// Mensagem agradecimento
}console.log('Obrigado Volte Sempre!')
