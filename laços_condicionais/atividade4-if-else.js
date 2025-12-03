// Escreva um algoritmo que leia 3 palavras (string),
// que definem as características de um tipo de animal, 
// segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.

// Em seguida, mostre na tela qual dos animais foi escolhido, 
// baseado nas três palavras digitadas pelo usuário: 

// ENTRADA       |      SAÍDA
//--------------------------------
// vertebrado    |      Homem
// mamífero      |
// onívoro       |
// ---------------------------------
// invertebrado  |      Lagarta
// inseto        |
// herbívoro     |

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Operadores
// Laço Condicional If


//cabeçalho
console.log("--------------------------------------------------")
console.log("          Identificação do Animal                 ")
console.log("--------------------------------------------------")

//declaração de variaveis
let read, caracteristica1, caracteristica2, caracteristica3

//entrada de dados
read = require("readline-sync")
// Leitura da primeira característica
caracteristica1 = read.question("Digite o numero correspondente a primeira caracteristica do animal:\n1 - Vertebrado\n2 - Invertebrado\n\nResposta:   ")

if (caracteristica1 === "1") {
    // Vertebrado---------------------------------------
    caracteristica1 = "Vertebrado"

    // Leitura da segunda característica
    caracteristica2 = read.question("\nDigite o numero correspondente a segunda caracteristica do animal:\n1 - Ave\n2 - Mamifero\n\nResposta:   ")

    if (caracteristica2 === "1") {
        // Ave-----------------------------------------------
        caracteristica2 = "Ave"

        // Leitura da terceira característica
        caracteristica3 = read.question("\nDigite o numero correspondente a terceira caracteristica do animal:\n1 - Carnívoro\n2 - Onívoro\n\nResposta: ")

        if (caracteristica3 === "1") {
            // Carnívoro-----------------------------------------
            caracteristica3 = "Carnívoro"
            console.log("--------------------------------------------------")
            // Resultado
            console.log("O animal escolhido é: Águia")

        } else if (caracteristica3 === "2") {
            // Onívoro-----------------------------------------
            caracteristica3 = "Onívoro"
            console.log("--------------------------------------------------")
            // Resultado
            console.log("O animal escolhido é: Pomba")

        } else {
            console.log("Resposta inválida! Por favor, responda com 1 ou 2.")
        }

    } else if (caracteristica2 === "2") {
        caracteristica2 = "mamifero"

        // Leitura da terceira característica
        caracteristica3 = read.question("\nDigite o numero correspondente a terceira caracteristica do animal:\n1 - Onívoro\n2 - Herbivoro\n\nResposta: ")
        
        if (caracteristica3 === "1") {
            // Onívoro-----------------------------------------
            caracteristica3 = "Onívoro"
            console.log("--------------------------------------------------")
            // Resultado
            console.log("O animal escolhido é: Homem")

        } else if (caracteristica3 === "2") {
            // Herbívoro-----------------------------------------
            caracteristica3 = "Herbivoro"
            console.log("--------------------------------------------------")
            // Resultado
            console.log("O animal escolhido é: Vaca")
        }

        else {
            console.log("Resposta inválida! Por favor, responda com 1 ou 2.")
        }

    } else {
        console.log("Resposta inválida! Por favor, responda com 1 ou 2.")
    }
}
else if (caracteristica1 === "2") {
    caracteristica1 = "invertebrado"

    // Leitura da segunda característica
    caracteristica2 = read.question("\nDigite o numero correspondente a segunda caracteristica do animal:\n1 - Inseto\n2 - Anelídeo\n\nResposta:   ")
    
    if (caracteristica2 === "1") {
        caracteristica2 = "Inseto"

        // Leitura da terceira característica
        caracteristica3 = read.question("\nDigite o numero correspondente a terceira caracteristica do animal:\n1 - Hematófago\n2 - Herbivoro\n\nResposta: ")
        
        if (caracteristica3 === "1") {
            caracteristica3 = "Hematófago"
            console.log("--------------------------------------------------")
            // Resultado
            console.log("O animal escolhido é: Pulga")

        } else if (caracteristica3 === "2") {
            caracteristica3 = "Herbivoro"
            console.log("--------------------------------------------------")
            // Resultado
            console.log("O animal escolhido é: Lagarta")

        } else {
            console.log("Resposta inválida! Por favor, responda com 1 ou 2.")
        }

    } else if (caracteristica2 === "2") {
        caracteristica2 = "Anelídeo"

        // Leitura da terceira característica
        caracteristica3 = read.question("\nDigite o numero correspondente a terceira caracteristica do animal:\n1 - Hematófago\n2 - Onívoro\n\nResposta: ")

        if (caracteristica3 === "1") {
            caracteristica3 = "Hematófago"
            console.log("--------------------------------------------------")
            // Resultado
            console.log("O animal escolhido é: Sanguessuga")

        } else if (caracteristica3 === "2") {
            caracteristica3 = "Onívoro"
            console.log("--------------------------------------------------")
            // Resultado
            console.log("O animal escolhido é: Minhoca")
        }
        else {
            console.log("Resposta inválida! Por favor, responda com 1 ou 2.")
        }
    }

} else {
    console.log("Resposta inválida! Por favor, responda com 1 ou 2.")
}