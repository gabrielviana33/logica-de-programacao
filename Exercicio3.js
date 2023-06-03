// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. 
// Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00

let preco = 60;
let desconto = 10;
let pagamentoParcelado = 0;

console.log(`O valor do preço à vista é: R$ ${preco - (desconto / 100 )*preco},00`);
console.log (`O valor do produto parcelado é três parcelas de: R$ ${preco / 3},00`);