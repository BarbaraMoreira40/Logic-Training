//Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.

Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.

Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.


  
let area =parseFloat (prompt("Digite a área a ser pintada em metros quadrados: "));
let litrosTotal = area/3;
let latas = Math.ceil(litrosTotal/18);
let custoTotal = latas * 80;

console. log("Quantidade de latas para serem compradas: " + latas);
console. log("O custo total é:  R$" + custoTotal);