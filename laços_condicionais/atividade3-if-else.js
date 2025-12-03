// Para doar sangue é necessário ter entre 18 e 69 anos. 
// Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. 
// Escreva um Algoritmo que leia via teclado o nome do doador (string), 
// a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). 
// Conforme as Regras para a doação de sangue citadas acima, 
// mostre na tela se o doador está Apto ou Não Apto para doar sangue. Veja os exemplos abaixo:

//            ENTRADA                                        SAÍDA

// Digite o Nome do doador: João da Silva    |   João da Silva não está apto para doar sangue!
// Digite a Idade do doador: 62              |
// Primeira doação de sangue? true           |
//-----------------------------------------------------------------------------------------

// Digite o Nome do doador: Maria dos Anjos  |   Maria dos Anjos está apta para doar sangue!
// Digite a Idade do doador: 50              |
// Primeira doação de sangue? true           |
//-----------------------------------------------------------------------------------------

// Digite o Nome do doador: Fábio Camões     |   Fábio Camões não está apto para doar sangue!
// Digite a Idade do doador: 14              |
// Primeira doação de sangue? false          |
//-----------------------------------------------------------------------------------------

// Digite o Nome do doador: Pedro Souza      |   Pedro Souza está apto para doar sangue!
// Digite a Idade do doador: 68              |
// Primeira doação de sangue? false          |


// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Operadores
// Laço Condicional IF

// Cabeçalho
console.log("--------------------------------------------------")       
console.log("          Verificação para Doação de Sangue       ")
console.log("--------------------------------------------------")
// Declaração de Variaveis
let read,nomeDoador,idadeDoador,primeiraDoacao

// Entrada de Dados
read=require("readline-sync")
nomeDoador=read.question("Digite o Nome do doador: ")
idadeDoador=read.questionInt("Digite a Idade do doador: ")
primeiraDoacao=read.question("\nJa doou sangue alguma vez:\n1 - Sim\n2 - Não\n\nResposta ")

// Estrutura de decisão e saída de dados
if(primeiraDoacao==="1"){
    primeiraDoacao=true
}else if(primeiraDoacao==="2"){
    primeiraDoacao=false
}else{
    console.log("Resposta inválida! Por favor, responda com 1 ou 2.")
}

console.log("--------------------------------------------------")   
if (idadeDoador>18 && idadeDoador<69 && primeiraDoacao===true){
    console.log(`Resultado da Verificação: ${nomeDoador} está apto a doar sangue!`)
}else{
    console.log(`Resultado da Verificação: ${nomeDoador} não está apto a doar sangue!`)
}