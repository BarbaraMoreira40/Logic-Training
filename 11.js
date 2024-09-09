/*Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre: o produto do dobro do primeiro com metade do segundo. a soma do triplo do primeiro com o terceiro. o terceiro elevado ao cubo.*/


  // Solicitar entrada do usuário
let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));
let num3 = parseFloat(prompt("Digite um número real: "));

// Calcular o produto do dobro do primeiro número com metade do segundo
let resultado1 = (2 * num1) * (num2 / 2);

// Calcular a soma do triplo do primeiro número com o terceiro
let resultado2 = (3 * num1) + num3;

// Calcular o terceiro número elevado ao cubo
let resultado3 = Math.pow(num3, 3);

// Exibir os resultados
console.log("O produto do dobro do primeiro com metade do segundo é: " + resultado1);
console.log("A soma do triplo do primeiro com o terceiro é: " + resultado2);
console.log("O terceiro número elevado ao cubo é: " + resultado3);