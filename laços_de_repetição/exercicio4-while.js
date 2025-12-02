// Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento 
// e precisam de um sistema para analisar os dados. 
// Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador:

// Idade (Número inteiro)
// Identidade de Gênero (Número Inteiro): 
// 1 – Mulher Cis
// 2 – Homem Cis
// 3 – Não Binário
// 4 – Mulher Trans
// 5 – Homem Trans
// 6 – Outros

// Pessoa Desenvolvedora (Número Inteiro):
// 1 – Backend
// 2 – Frontend
// 3 – Mobile
// 4 – FullStack

// Após digitar o Tipo de Pessoa Desenvolvedora, o sistema deverá perguntar ao usuário se ele deseja continuar 
// a leitura dos dados de um novo colaborador ou não (S/N). 
// Caso seja pressionada a tecla N, mostre na tela:

// O número de pessoas desenvolvedoras Backend
// O número de Mulheres Cis e Trans desenvolvedoras Frontend
// O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
// O número de Não Binários desenvolvedores FullStack menores de 30 anos
// O número total de pessoas que responderam à pesquisa
// A média de idade das pessoas que responderam à pesquisa
//--------------------------------------------------------------------

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Operadores
// Laços Condicionais
// Laço de Repetição WHILE


// Declaração de Variaveis
const read = require("readline-sync")
let idade, identidadeDeGenero, tipoDePessoaDesenvolvedora, mulherCis = 0, homemCis = 0, naoBinario = 0, mulherTrans = 0
homemTrans = 0, outros = 0, backend = 0, frontend = 0, mobile = 0, fullstack = 0, mediaIdade = 0, contador = 0, lista = [], sair = false

// Entrada de Dados e Processamento de dados
while (!sair) {
    idade = read.questionInt("Digite a idade: ")
    identidadeDeGenero = read.questionInt("\nDigite a identidade de gênero:\n1 - Mulher Cis \n2 - Homem Cis \n3 - Não Binário \n4 - Mulher \n5 - Homem Trans \n6 - Outros \n\nResposta:  ")
    switch (identidadeDeGenero) {
        case 1:
            mulherCis++
            break
        case 2:
            homemCis++
            break
        case 3:
            naoBinario++
            break
        case 4:
            mulherTrans++
            break
        case 5:
            homemTrans++
            break
        case 6:
            outros++
            break
        default:
            console.log("Opção inválida!")
            break
    }

    tipoDePessoaDesenvolvedora = read.questionInt("\nDigite o tipo de pessoa desenvolvedora:\n1 - Backend \n2 - Frontend \n3 - Mobile \n4 - FullStack \n\nResposta: ")
    switch (tipoDePessoaDesenvolvedora) {
        case 1:
            backend++
            break
        case 2:
            frontend++
            break
        case 3:
            mobile++
            break
        case 4:
            fullstack++
            break
        default:
            console.log("Opção inválida!")
            break

    }
    sair = read.keyInYNStrict("Deseja sair? ")

    lista[contador] = idade
    contador++
}
function calcularMediaIdade(lista) {
    for (let i = 0; i < lista.length; i++) {
        somaIdade += lista[i]
        return somaIdade / lista.length
    }
}
mediaIdade = calcularMediaIdade(lista)
console.log(`O número de pessoas desenvolvedoras Backend: ${backend}\n
O número de Mulheres Cis e Trans desenvolvedoras Frontend: \n
O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: \n
O número de Não Binários desenvolvedores FullStack menores de 30 anos: \n
O número total de pessoas que responderam à pesquisa: \n
A média de idade das pessoas que responderam à pesquisa: ${mediaIdade}\n 
Total pessoas: ${contador}
`)
