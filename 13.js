Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: Para homens: (72.7h) - 58 Para mulheres: (62.1h) - 44.7

let altura = parseFloat(prompt("Digite a sua altura:"));
let sexo = prompt("Digite o seu sexo (M)asculino ou (F)eminino").toUpperCase()

if (sexo == 'M') {
  let resultado = (72.7 * altura) - 58
  console.log('O seu peso ideal para homens é:' + resultado)
}
else {
  if(sexo == 'F'){
    let resultado = (62.1 * altura) - 44.7
    console.log('O seu peso ideal para mulheres é:' + resultado)
  }

}

