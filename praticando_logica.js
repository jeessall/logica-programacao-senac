// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

// let salario = parseInt(prompt('Qual o seu salário atual? '))
// let valorHora = parseInt(prompt('Qual o valor da hora? '))
// let quantidadeHora = parseInt(prompt('Quantas horas trabalhdas no mês? '))

// let totalSalario = salario + (valorHora * quantidadeHora)

// console.log('Salário total do mês: ' + totalSalario)

// Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// "Telefonou para a vítima?"
// "Esteve no local do crime?"
// "Mora perto da vítima?"
// "Devia para a vítima?"
// "Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

console.log('Responda 1 = sim e 2 = não')
resposta = 0

while(true){
    let pergunta_1 = prompt('Telefonou para a vítima? ')
    if(pergunta_1 == 1){
        resposta += 1
    }
    let pergunta_2 = prompt('Esteve no local do crime? ')
    if(pergunta_2 == 1){
        resposta += 1
    }
    let pergunta_3 = prompt('Mora perto da vítima? ')
    if(pergunta_3 == 1){
        resposta += 1
    }
    let pergunta_4 = prompt('Devia para a vítima? ')
    if(pergunta_4 == 1){
        resposta += 1
    }
    let pergunta_5 = prompt('Já trabalhou com a vítima? ')
    if(pergunta_5 == 1){
        resposta += 1
    }
    
    if(resposta == 2){
        console.log('Suspeito(a)')
    }else if(resposta == 3 || resposta == 4){
        console.log('Cumplice')
    }else if(resposta >= 5){
        console.log('Assassino!')
        break
    }else{
        console.log('Testemunha inocente, liberada!.')
        break
    }
    
}










