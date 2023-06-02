// EXERCÍCIO 2 
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00
// ---------------------------------------------------------------

let valorJantar = 80;
let taxaGarcom = 10;
let total = 0;

total = 80 + ((taxaGarcom / 100) * 80);
console.log ('Valor do jantar: R$' + valorJantar + ',00');
console.log ('Valor da taxa do garçon: R$' + (taxaGarcom / 100)*80);
console.log ('Valor total a pagar: R$' + total);