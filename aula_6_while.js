//revisão tipos de variaveis

// cntrl + D = seleciona e altera todas as escritas iguais
// cntrl + ; = comenta todo o codigo
// shift + alt + seta pra baixo = duplica as linhas


//WHILE - LAÇO DE REPETIÇÃO 'ENQUANTO' LAÇO INFINITO


// let x = 0

// while (x < 100000) {
//     console.log(x)
// }


//validando login

// let usuario = 'jessica'
// let senha = '123'
// let tentativa = 0

// while(true){
//     let user = prompt('Digite seu usuario. ')
//     let password = prompt('Digite sua senha. ')
//     if(user == usuario && password == senha){
//         console.log('Você está logado')
//         break
//     }else{
//         console.log('Usuario ou senha incorretos!')
//         tentativa++
//         if(tentativa == 3){
//             console.log('Seu usúario foi bloqueado')
//             break
//         }
//     }
// }

//escreva um programa => que vai pedir para 2 usuarios informem suas jogadas 1 pedra1 2 papel2 3 tesoura3 compare a jogada dos 2 usuarios e fale quem ganhou

let pedra1 = 'pedra'
let papel2 = 'papel'
let tesoura3 = 'tesoura'
console.log('Sendo: pedra  papel tesoura')

while(true) {
    
    let jogador1 = prompt("Digite sua jogada? ")
    let jogador2 = prompt("Digite sua jogada? ")
    if(jogador1 == pedra1 && jogador2 == papel2){
        console.log('jogador 2 ganhou')
    }else if(jogador2 == pedra1 && jogador1 == papel2){
        console.log('Jogador 1 ganhou')
    }

    if(jogador1 == tesoura3 && jogador2 == pedra1){
        console.log('Jogador 2 ganhou')
    }else if(jogador2 == tesoura3 && jogador1 == pedra1){
        console.log('Jogador 1 ganhou')
    }

    if(jogador1 == papel2 && jogador2 == tesoura3){
        console.log('jogador 2 ganhou')
    }else if(jogador2 == papel2 && jogador1 == tesoura3){
        console.log('Jogador 1 ganhou')
    }

    if(jogador1 == pedra1 && jogador2 == papel2){
        console.log('Jogador 2 ganhou')
    }else if(jogador2 == pedra1 && jogador1 == papel2){
        console.log('Jogador 1 ganhou')
    }

    if(jogador1 == tesoura3 && jogador2 == pedra1){
        console.log('Jogador 2 ganhou')
    }else if(jogador2 == tesoura3 && jogador1 == pedra1){
        console.log('Jogador 1 ganhou')
    }

    if(jogador1 == tesoura3 && jogador2 == tesoura3){
        console.log('Empate jogue novamente!')
    }

    if(jogador1 == papel2 && jogador2 == papel2){
        console.log('Empate jogue novamente!')
    }

    if(jogador1 == pedra1 && jogador2 == pedra1){
        console.log('Empate jogue novamente!')
         
    }
    
}

// 1 - validar jogada invalida
// 2 - contador de placar
// 3 - finalizar o jogo

CÓDIGO COM DESAFIO

let pedra1 = 'pedra'
let papel2 = 'papel'
let tesoura3 = 'tesoura'
console.log('Sendo: pedra  papel ou tesoura')

while(true) {
    let jogador1 = prompt("Digite sua jogada? ")
    let jogador2 = prompt("Digite sua jogada? ")
    if(jogador1 === pedra1 && jogador2 === papel2){
        console.log('jogador 2 ganhou')
    }else if(jogador2 === pedra1 && jogador1 === papel2){
        console.log('Jogador 1 ganhou')
    }else if(jogador1 === tesoura3 && jogador2 === pedra1){
        console.log('Jogador 2 ganhou')
    }else if(jogador2 === tesoura3 && jogador1 === pedra1){
        console.log('Jogador 1 ganhou')
    }else if(jogador1 === papel2 && jogador2 === tesoura3){
        console.log('Jogador 2 ganhou')
    }else if(jogador2 === papel2 && jogador1 === tesoura3){
        console.log('Jogador 1 ganhou')
    }else if(jogador1 === pedra1 && jogador2 === papel2){
        console.log('Jogador 2 ganhou')
    }else if(jogador2 === pedra1 && jogador1 === papel2){
        console.log('Jogador 1 ganhou')
    }else if(jogador1 === tesoura3 && jogador2 === pedra1){
        console.log('Jogador 2 ganhou')
    }else if(jogador2 === tesoura3 && jogador1 === pedra1){
        console.log('Jogador 1 ganhou')
    }else if(jogador1 == tesoura3 && jogador2 == tesoura3){
        console.log('Empate jogue novamente!')
    }else if(jogador1 == papel2 && jogador2 == papel2){
        console.log('Empate jogue novamente!')
    }else if(jogador1 == pedra1 && jogador2 == pedra1){
        console.log('Empate jogue novamente!')
    }else{
        console.log('Jogada invalida, tente novamente')
        
    }
    
}

// 1 - validar jogada invalida ok
// 2 - contador de placar
// 3 - finalizar o jogo


