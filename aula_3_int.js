
//pegar conteudo aula 2

//aula3 - condições OU e E

//E = && as duas condições precisam ser verdadeiras
//OU = || uma ou outra condição precisa ser verdadeira

//EX:

    let  nota_1 = parseInt(prompt("Qual a sua primeira nota? "));
    let nota_2 = parseInt(prompt("Qual a sua sefunda nota? "));
    let media = (nota_1 + nota_2)/2
    
    if(media < 7) {
        console.log("Aluno reprovado!")
    } else if(media >= 7 && media < 10) {
        console.log("Aluno foi aprovado!")
    } else {
        console.log("Aluno aprovado com distinção!")
    }


let  nota_1 = parseInt(prompt("Qual a sua primeira nota? "));
let nota_2 = parseInt(prompt("Qual a sua sefunda nota? "));
let media = (nota_1 + nota_2)/2;

if(media < 7) {
    console.log("Aluno reprovado!")
}else if(media >= 7 && media <=10) {
    console.log("Aluno aprovado!")
}else {
    console.log("Nota invalida, tente novamente")
}

//Nota não pode ser maior que 10 nem menor que zero, exibir nota invalida

let nota_1 = parseFloat(prompt("Qual a sua primeira nota? "));
    if(nota_1 <= 0 || nota_1 > 10) {
        console.log("Nota invalida")
    }else {
        let nota_2 = parseFloat(prompt("Qual a sua segunda nota? "));
    
    if(nota_2 <= 0 || nota_2 > 10) {
        console.log("Nota invalida")
    }else {
        let media = (nota_1 + nota_2)/2
        if(media <= 0 && media < 7) {
            console.log("Reprovado")
    }else if (media > 7 && media < 10) {
        console.log("Aprovado")
    }else {
    console.log("Aprovado com distinção")
        
        }
    }
}

//atividade final de aula: pergunte quantas horas trabalhadas e qual o valor da hora e calcule o valor das horas

let hora_trabalhada = parseInt(prompt("Qual o valor da hora trabalhada? "));
let valor_hora = parseInt(prompt("Quantas horas trabalhadas? "));
let soma_horas = hora_trabalhada * valor_hora

console.log(soma_horas)

