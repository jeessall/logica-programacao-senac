// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//AULA 4 LAÇOS DE REPETIÇÃO

/*let nome = "Jéssica"

console.log(nome.length)
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome[3])*/

//atributo .length tamanho de caracteres, quantidade de letras
//.toUpperCase deixa maiusculo
//.toLowerCase deixa minusculo

/*for(let variavel = 0; variavel <= 10; variavel++){
    console.log(variavel)
}

//dinamismo
let media = parseInt(prompt("Quantas medias você quer digitar? "))
for(let variavel = 0; variavel < media; variavel++){
    console.log(variavel)
}

let media = parseInt(prompt("Quantas medias você quer digitar? "))
let soma = 0
for(let variavel = 0; variavel < media; variavel++){
    console.log(soma)
}

let media = parseInt(prompt("Quantas medias você quer digitar? "))
let soma = 0
for(let variavel = 0; variavel < media; variavel++){
    soma += variavel
    console.log(soma)
}*/

/*a soma ta sendo somada com a variavel e a variavel ta sempre encrementando mais 1 no valor anterior exibindo o valor da soma com +1  
    EX: soma 1 variavel 1 = 1+1 = 2++ = 3
        soma 3 variavel 2 = 3+2 = 5++ = 6
        soma 6 variavel 3 = 6+3 = 9++ = 10 
        e assim por diante ...
let media = parseInt(prompt("Quantas medias você quer digitar? "))
let soma = 0
for(let variavel = 0; variavel < media; variavel++){
    soma += variavel
    console.log(`soma = ${soma} | variavel = ${variavel} | ${variavel + soma} `)
}

let numero = parseInt(prompt("Quantas numero deseja ver na tabuada? "))

for(let x = 0; x <= 10; x++){
    
    console.log(`${numero}X${x}=${numero*x}`)
}*/

/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';*/

let nome = prompt("Digite seu nome: ")

if(nome.length > 3) {
    
    let idade = parseInt(prompt("Digite sua idade: "))
    if(idade > 0){
        console.log("Idade:", idade)
    }else{
        console.log("Idade invalida, digite uma idade maior que 0")
    }
    
    let salario = prompt("Digite seu salario: ")
    if(salario > 0){
        console.log("salario:", salario)
    }else{
        console.log("salario invalido, digite um salario maior que 0")
    }
    
    let genero = prompt("Qual seu genero? (M) ou (F): ")
    if(genero == 'M'){
        console.log("Genero Masculino")
    }else if(genero == 'F'){
        console.log("Genero Feminino")
    }else{
        console.log("Genero invalido, digite M ou F")
    }
    
    let estadoCivil = prompt("Qual seu estado civil? (S), (C), (V), (D): ")
    if(estadoCivil == 'S' || estadoCivil == 'C' || estadoCivil == 'V' || estadoCivil =='D'){
        console.log("Estado civil:", estadoCivil)
    }else{
        console.log("Estado civil invalido")
    }
}else{
    console.log("Digite um nome com mais de 3 caracteres")
}
