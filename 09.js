Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius. C = (5 * (F-32) / 9).


  let fahrenheit = parseFloat(prompt("Informe a temperatura em graus Fahrenheit:"));

let celsius = (5 * (fahrenheit - 32)) / 9;

alert("A temperatura em graus Celsius é: " + celsius.toFixed(2));
