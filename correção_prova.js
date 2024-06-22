// PROVA FINAL

//  Como você declararia uma variável chamada 'idade' e atribuía a ela o valor 25? Como você exibiria essa variável no console?  

// let idade = 25

// console.log('idade: ' + idade)

//   Imagine que você precisa calcular a soma de dois números, 10 e 20, e armazenar o resultado em uma variável chamada soma. Como você faria isso? 

// let soma_1 = 10
// let soma_2 = 20
// let soma = soma_1 + soma_2

// console.log('soma: ' + soma)

// Escreva um programa que verifique se um número armazenado na variável numero é positivo, negativo ou zero. Mostre uma mensagem correspondente no console.

// let numero = parseInt(prompt("Digite um numero de 0 à 2: "))

// if(numero == "1"){
//     console.log("numero negativo")
// }else if(numero == "2"){
//     console.log("numero positivo")
// }else if(numero == "0"){
//     console.log("esse numero é zero")
// }else{
//     console.log("numero invalido")
// }

// Como você criaria um loop que imprime os números de 1 a 10 no console?
// numeros = 0
// while(true){
//   numeros++
//   console.log(numeros)
//   if(numeros == 10){
//       break
//   }
// }

//   Crie um loop while que continua executando enquanto uma variável contador for menor que 5 e incremente o valor de contador a cada iteração. 
// contador = 0
// while(contador < 5){
//     contador++
//     console.log(contador)
// }

//   Escreva uma função chamada saudar que recebe um parâmetro nome e imprime "Olá, nome!" no console.

// let saudar = 'Olá, mundo!'

// console.log(saudar)

//   Como você criaria um array chamado frutas contendo as strings "maçã", "banana" e "laranja", e então imprimir o segundo elemento no console? 

// let frutas = ['maçã', 'banana', 'laranja']

// console.log(frutas[1])

//   Usando o array frutas do exemplo anterior, como você adicionaria a fruta "uva" ao final do array e depois removeria o primeiro elemento?  

// let frutas = ['maçã', 'banana', 'laranja']
// frutas.push('uva')
// frutas.shift()

// console.log(frutas)

//indexOf = remove o elemento pelo index

//   Crie um objeto chamado pessoa com as propriedades nome (string), idade (número) e cidade (string). Depois, acesse a propriedade nome e imprima seu valor no console.

// let pessoa =
//     {
//         'nome': 'Jéssica',
//         'idade': 25,
//         'cidade': 'Palhoça'
//     }
    
//     console.log(pessoa['nome'])

// Crie um programa em JavaScript que realiza as seguintes tarefas:

// Crie um array chamado pessoas que contém três objetos. Cada objeto deve representar uma pessoa com as seguintes propriedades: nome (string), idade (número) e cidade (string).

// Adicione um novo objeto ao array pessoas com os valores: nome = "Carlos", idade = 28, cidade = "Rio de Janeiro".Itere sobre o array pessoas e imprima o nome e a cidade de cada pessoa no console.

// Calcule a idade média das pessoas no array e armazene o resultado em uma variável chamada idadeMedia.

// Imprima o array pessoas atualizado e a variável idadeMedia no console.

// let pessoa = [
//     {
//         'nome': 'Jéssica',
//         'idade': 25,
//         'cidade': 'Palhoça'
//     }

// ]
//  pessoa.push({
//         'nome': 'Carlos',
//         'idade': 28,
//         'cidade': 'rio de janeiro'
//     })
    
// let idadeMedia = (pessoa[0][`idade`] + pessoa[1][`idade`]) / 2

// console.log(pessoa)
// console.log(pessoa[0]['nome'] , pessoa[0]['cidade'], pessoa[1]['nome'], pessoa[1]['cidade'])
// console.log(idadeMedia)

//CORREÇÃO PROVA

//ULTIMA QUESTÃO media das idades

// let idadeMedia = 0
// pessoas.forEach((pessoa)=>){
//     idadeMedia += pessoa['idade']
// })

// console.log(idadeMedia/pessoa.length)

//usando pesoa.length vai deixar a divisão de forma dinamica dividindo pela quantidade de elementos
