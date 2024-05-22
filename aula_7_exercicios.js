//ESTRUTURA SEQUENCIAL

//Faça um Programa que converta metros para centímetros.

// let metro = parseInt(prompt('Quantos metros você quer converter? '))
// let conversao = 100 * metro

// console.log('Centimetros: ' + conversao)

//Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

// let comprimento = parseInt(prompt('Qual o comprimento da área? '))
// let altura = parseInt(prompt('Qual a altura da área? '))
// let area2 = (comprimento * altura)
// let valorDobrado = area2 * 2

// if(comprimento && altura == comprimento && altura){
//     console.log('Valor da área quadrada: ' + area2)
//     console.log('Valor da área quadrada multiplicado por 2: ' + valorDobrado)
// }


//EXERCICIO DE DECISÃO
//Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
 //verificar com professor
 
//  Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
//  console.log('M = matutino, V = vespertino, N = noturno')
//  let turno = prompt('Qual turno você estuda? ')
//  let M = 'm'
//  let V = 'v'
//  let N = 'n'
 
//  if(turno == M){
//      console.log('Bom dia!')
//  }else if(turno == V){
//      console.log('Boa tarde!')
//  }else if(turno == N){
//      console.log('Boa noite!')
//  }else{
//      let turno = prompt('Qual turno você estuda? ')
//  }

//Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

// let nota = parseInt(prompt('Informe uma nota: '))

// while(true){
//     if(nota <= 10){
//         console.log('Nota valida')
//         break
//     }else{
//         console.log('Nota invalida')
//         let nota = parseInt(prompt('Informe uma nota: '))
        
//     }
// }

//EXERCICIOS COM STRINGS

// Tamanho de strings. Faça um programa que leia 2 strings e informe o conteúdo delas seguido do seu comprimento. Informe também se as duas strings possuem o mesmo comprimento e são iguais ou diferentes no conteúdo.
// Compara duas strings
// String 1: Brasil Hexa 2006
// String 2: Brasil! Hexa 2006!
// Tamanho de "Brasil Hexa 2006": 16 caracteres
// Tamanho de "Brasil! Hexa 2006!": 18 caracteres
// As duas strings são de tamanhos diferentes.
// As duas strings possuem conteúdo diferente.

let string_1 = 'Brasil ganhou /'
let string_2 = 'Brasil ganhou! /'

console.log('Conteudo da String_1: ' + string_1 + 'Comprimento da string: ' + string_1.length)
console.log('Conteudo da String_2: ' + string_2 + 'Comprimento da string: ' + string_2.length)

if(string_1 === string_2){
    console.log('Strings iguais!')
}else{
    console.log('Strings com conteudos diferente e comprimento diferente')
}











