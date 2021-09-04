alert("Bem-vindo ao programa de diferença de idade!")

let nomePessoaMaisVelha = prompt("Informe o nome da pessoa mais velha.")
let idadePessoaMaisVelha = prompt("Informe a idade da pessoa mais velha.")

let nomePessoaMaisNova = prompt("Informe o nome da pessoa mais nova.")
let idadePessoaMaisNova = prompt("Informe a idade da pessoa mais nova.")

let diferencaDeIdade = idadePessoaMaisVelha - idadePessoaMaisNova

alert("A pessoa mais velha se chama " + nomePessoaMaisVelha + "\nIdade: " + idadePessoaMaisVelha + " anos" +
"\n\nA pessoa mais nova se chama " + nomePessoaMaisNova + "\nIdade: " + idadePessoaMaisNova + " anos" +
"\n\nA diferença de idade entre " + nomePessoaMaisVelha + " e " + nomePessoaMaisNova + " é de " + diferencaDeIdade + " anos.")