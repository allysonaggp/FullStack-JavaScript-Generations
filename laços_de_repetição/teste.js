// let read, nomes, cadastroNomes;

// read = require("readline-sync")
// nomes = [];

// for (let i = 0; i < 5; i++) {
//     cadastroNomes = read.question("Oi Bom dia ! \nComo voce se chama ? ")
//     nomes.push(cadastroNomes)
//     console.log(`Bom dia ${nomes[i]}!`);
// } console.log(nomes)

const read = require("readline-sync")
let nomes = []
let continuar
do {
    let nome = read.question("digite seu nome: ")
    nomes[nomes.length]=nome
    console.log(nomes)
    continuar = read.keyInYNStrict("deseja continuar? ")
} while (continuar)
console.log(nomes)