var preco_1 = parseFloat(prompt("Preço 1 "));
var preco_2 = parseFloat(prompt("Preço 2 "));
var preco_3 = parseFloat(prompt("Preço 3 "));

if(preco_1 < preco_2 && preco_1 < preco_3 ) {
    console.log('Produto 1 é mais barato!')
}else if (preco_2 < preco_1 && preco_2 < preco_3) {
    console.log('Produto 2 é mais barato!')
}else if (preco_3 < preco_1 && preco_3 < preco_2) {
    console.log('Produto 3 é mais barato!')
}else {
    console.log('Os três produtos custam o mesmo preço')
}


let salarioAtual = parseInt(prompt("Qual o sálario atual? "))

let aumentoAplicado = parseInt(prompt("Aumento aplicado "))

let valorAumento = (salarioAtual * aumentoAplicado) / 100
let valorNovoSalario = salarioAtual + valorAumento


console.log("Sálario atual ",salarioAtual)
console.log("Aumento aplicado ",aumentoAplicado)
console.log("Valor aumento ",valorAumento)
console.log("Valor novo salario ",valorNovoSalario)

/*ATIVIDADE

As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.*/


let salario = parseFloat(prompt('Qual o valor do sálario? '))

if(salario <= 280) {
    let salarioAtual = salario
    let valorAplicado = '20%'
    let valorAumento = (280*20)/100
    let valorAposAumento = salarioAtual + valorAumento
    console.log('Sálario atual', salario)
    console.log('Valor aplicado ', valorAplicado)
    console.log('Valor do aumento ', valorAumento)
    console.log('Valor após aumento ', valorAposAumento)
    
}else if(salario > 280 && salario <= 700) {
    let salarioAtual = salario
    let valorAplicado = '15%'
    let valorAumento = (280*15)/100
    let valorAposAumento = salarioAtual + valorAumento
    console.log('Sálario atual', salario)
    console.log('Valor aplicado ', valorAplicado)
    console.log('Valor do aumento ', valorAumento)
    console.log('Valor após aumento ', valorAposAumento)
}else if(salario > 700 && salario <= 1500) {
    let salarioAtual = salario
    let valorAplicado = '10%'
    let valorAumento = (700*10)/100
    let valorAposAumento = salarioAtual + valorAumento
    console.log('Sálario atual', salario)
    console.log('Valor aplicado ', valorAplicado)
    console.log('Valor do aumento ', valorAumento)
    console.log('Valor após aumento ', valorAposAumento)
}else if(salario > 1500) {
    let salarioAtual = salario
    let valorAplicado = '5%'
    let valorAumento = (1500*5)/100
    let valorAposAumento = salarioAtual + valorAumento
    console.log('Sálario atual', salario)
    console.log('Valor aplicado ', valorAplicado)
    console.log('Valor do aumento ', valorAumento)
    console.log('Valor após aumento ', valorAposAumento)
}

//ATIVIDADE 2
//dado de entrada altua H
//calcular peso com formula
//homem ou mulher


let altura = parseFloat(prompt('Qual a sua altura? '))
let genero = prompt('Qual o seu genero? M ou F ')

if(genero == 'M') {
    let pesoM = (72.7*altura) - 58
    console.log('Sua altura atual é ', pesoM)
}else if(genero == 'F') {
    let pesoF = (62.1*altura) - 44.7
    console.log('Sua altura atual é ', pesoF)
}
