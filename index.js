

/*Faça um Programa para uma loja de tintas.

O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.

Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.

Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:

comprar apenas latas de 18 litros;
comprar apenas galões de 3,6 litros;
misturar latas e galões, de forma que o preço seja o menor.
    Acrescente 10% de folga e sempre arredonde os valores para cima,
    isto é, considere latas cheias.*/

let area = parseFloat(prompt("Digite a área ser pintada em metros quadrados: "));
let litrosTotal = area / 6;

//a - apenas latas de 18L
let qtd_latas = Math.ceil(litrosTotal / 18);
let precoTotal_latas = qtd_latas * 80;
console.log("Quantidade a ser compradas de latas é: " + qtd_latas);
console.log(" O valor total a ser pago é: R$" + precoTotal_latas);

//b - apenas galao de 3.6L
let qtd_galoes = Math.ceil(litrosTotal / 3.6);
let precoTotal_Galao = qtd_galoes * 25;
console.log("Quantidade de galoes a serem compradas é: " + qtd_galoes);
console.log("O valor total a ser pago é: R$" + precoTotal_Galao);


//c - misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga

let litrosTotal_folga = litrosTotal * 1.1
let qtd_latas_mix = Math.trunc(litrosTotal_folga / 18);
let litrosTotal_folga_faltando = litrosTotal_folga - (qtd_latas_mix * 18)


let qtd_galoes_mix = Math.ceil(litrosTotal_folga_faltando/3.6)

 let valor_total_mix = (qtd_latas_mix * 80) + (qtd_galoes_mix * 25 )
 console.log ("A quantidade de latas a serem compradas é: " + qtd_latas_mix)
 console.log ("A quantidade de galoes a serem compradas é: " + qtd_galoes_mix)
 console.log ("O valor total a ser pago é: R$" + valor_total_mix)











