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

// Cabeçalho
console.log("============================================================")
console.log("--------- Pesquisa interna Área de desenvolvimento ---------")
console.log("============================================================")

// Declaração de Variaveis
const read = require("readline-sync")
let idade, identidadeDeGenero, tipoDePessoaDesenvolvedora, mulherCis = 0, homemCis = 0, naoBinario = 0, mulherTrans = 0
homemTrans = 0, outros = 0, backend = 0, frontend = 0, mobile = 0, fullstack = 0, mediaIdade = 0, homemTransMobile = 0, naoBinarioFullstack = 0, homemCisMobile = 0, mulherCisFrontend = 0, mulherTransFrontend = 0, totalDePessoas = 0, lista = [], sair = false

// Entrada de Dados do genero
while (!sair) {
    idade = read.questionInt("Digite a idade: ")
    identidadeDeGenero = read.questionInt("\nDigite a identidade de gênero:\n1 - Mulher Cis \n2 - Homem Cis \n3 - Não Binário \n4 - Mulher Trans \n5 - Homem Trans \n6 - Outros \n\nResposta:  ")
    switch (identidadeDeGenero) {
        case 1:
            identidadeDeGenero = "mulherCis"
            mulherCis++
            break
        case 2:
            identidadeDeGenero = "homemCis"
            homemCis++
            break
        case 3:
            identidadeDeGenero = "naoBinario"
            naoBinario++
            break
        case 4:
            identidadeDeGenero = "mulherTrans"
            mulherTrans++
            break
        case 5:
            identidadeDeGenero = "homemTrans"
            homemTrans++
            break
        case 6:
            identidadeDeGenero = "outros"
            outros++
            break
        default:
            console.log("Opção inválida!")
            break
    }


    // Entrada de dados do tipo de pessoa desenvolvedora
    tipoDePessoaDesenvolvedora = read.questionInt("\nDigite o tipo de pessoa desenvolvedora:\n1 - Backend \n2 - Frontend \n3 - Mobile \n4 - FullStack \n\nResposta: ")
    switch (tipoDePessoaDesenvolvedora) {
        case 1:
            backend++
            break
        case 2:
            if (identidadeDeGenero === "mulherCis") {
                mulherCisFrontend++
            }
            else if (identidadeDeGenero === "mulherTrans") {
                mulherTransFrontend++
                console.log(mulherTransFrontend)
            } else {
                frontend++
            }
            break
        case 3:
            if ((identidadeDeGenero === "homemTrans") && (idade > 40)) {
                homemTransMobile++
            }
            else if ((identidadeDeGenero === "homemCis") && (idade > 40)) {
                homemCisMobile++
            } else {
                mobile++
            }
            break
        case 4:
            if ((identidadeDeGenero === "naoBinario") && (idade < 30)) {
                naoBinarioFullstack++
            } else {
                fullstack++
            }
            break
        default:
            console.log("Opção inválida!")
            break
    }

    //calculo total de pessoas
    lista[totalDePessoas] = idade
    totalDePessoas++

    // Declaração para sair do loop
    sair = read.keyInYNStrict("Deseja sair? ")
}


// função calcular media
function calcularMediaIdade(lista) {
    let somaIdade = 0, calcMediaIdade = 0

    for (let i = 0; i < lista.length; i++) {
        somaIdade = somaIdade + lista[i]
    }
    calcMediaIdade = somaIdade / lista.length
    return calcMediaIdade
}


// Declaracao das funções
mediaIdade = calcularMediaIdade(lista)

// Impressão de dados no terminal
console.log(`------------------------------------------------------------
Resposta pesquisa Interna:

O número de pessoas desenvolvedoras Backend: ${backend}
O número de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulherTransFrontend + mulherCisFrontend}
O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos:${homemCisMobile + homemTransMobile}
O número de Não Binários desenvolvedores FullStack menores de 30 anos:${naoBinarioFullstack}
O número total de pessoas que responderam à pesquisa: ${totalDePessoas}
A média de idade das pessoas que responderam à pesquisa: ${mediaIdade}
`)
