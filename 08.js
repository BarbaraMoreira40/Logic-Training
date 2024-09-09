Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

  let valorHora = parseFloat(prompt("Informe quanto você ganha por hora:"));
let horasTrabalhadas = parseFloat(prompt("Informe o número de horas trabalhadas no mês:"));

let salario = valorHora * horasTrabalhadas;

alert("O total do seu salário no mês é: R$ " + salario.toFixed(2));
