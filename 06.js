Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.


let raio = parseFloat(prompt("Informe o raio do círculo:"));

let area = Math.PI * Math.pow(raio, 2);

alert("A área do círculo é: " + area.toFixed(2));