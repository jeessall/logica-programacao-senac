
//AULA 01

//var
//let
//const

//variavel que o valor pode ser alterada
let idade = 25
idade = 15

console.log(idade)

//uma variavel que o valor não pode ser alterado
const idade = 25
idade = 15

console.log(idade)

let nome = "Jéssica"
let idade = 25
let altura = 1.63
let aprovado = true

console.log(nome)
console.log(idade)
console.log(altura)
console.log(aprovado)

//quando uma variavel declara sem aspas está declarando outra variavel e recebendo o valor dessa variavel
let teste = "Jéssica"
let nome = teste
let idade = 25
let altura = 1.63
let aprovado = true

console.log(nome)
console.log(idade)
console.log(altura)
console.log(aprovado)

//prompt exibe uma caixa para o usuario digitar um valor que foi definido por nós no tipo string(texto)
let nome = prompt("Qual o seu nome? ")
let idade = prompt("Qual a sua idade? ")
let altura = prompt("Qual a sua altura? ")
let aprovado = prompt("Você foi aprovado? ")

console.log(nome)
console.log(idade)
console.log(altura)
console.log(aprovado)

// operadores lógicos
// == igual valor igual
// > maior
// < menor
// >= maior igual
// <= menor igual
// = recebe
// === identico tipo e valor igual

//comparações lógicas
let x = 10
let y = 20

console.log(x == y)
console.log(x >= y)
console.log(x === y)
console.log(x < y)
console.log(x <= y)

/*operadores matematicos
soma +
subtração -
multiplicação *
exponenciação ** (ao quadrado)
divisão / 
*/

//comparações com tipos boleanos( false ou true)
let x = 5
let y = 5

console.log(x / y)
console.log(x * y)
console.log(x - y)
console.log(x ** y)
console.log(x + y)

//atividade 1 
//5 valores aleatorios de numeros para o usuario digitar
//e a media dos valores digitados

/*converter resultado para numero inteiro quando por padrão está recebendo uma string(texto)
para essa conversão usamos parseInt¨*/

let u1 = parseInt(prompt('Valor 1:  '))
let u2 = parseInt(prompt('Valor 1: '))
let u3 = parseInt(prompt('Valor 1: '))
let u4 = parseInt(prompt('Valor 1: '))
let u5 = parseInt(prompt('Valor 1: '))

let resultado = u1 + u2 + u3 + u4 + u5

console.log((resultado)/5)

//converter resultado para numero decimal parseFloat
let u1 = parseFloat(prompt('Valor 1:  '))
let u2 = parseFloat(prompt('Valor 1: '))
let u3 = parseFloat(prompt('Valor 1: '))
let u4 = parseFloat(prompt('Valor 1: '))
let u5 = parseFloat(prompt('Valor 1: '))

let resultado = u1 + u2 + u3 + u4 + u5

console.log((resultado)/5)

//atividade 2
/*calcular quantas latas de tinta pra pintar um determinada area
lata com 3.5l
cada lata pinta 12m2
medida usuario que escolhe*/

console.log("Cada tinta de 3,5l cobre uma área de 12m2")

let quantidadeDLatas = 3.5
let medidaMuro = parseInt(prompt('DIgite metros de área a ser pintada? '))

console.log(medidaMuro / 12)

//e se quiser colocar a cobertura individual de cada lata? (duvida)

let quantidadeDLatas = 3.5
let medidaMuro = parseInt(prompt('Digite quantos metros de área a ser pintada '))
let coberturaLata = parseInt(prompt('Quantos metros quadrados a tinta cobre? '))


console.log(medidaMuro / coberturaLata)











