//AULA DE ARRAYS LISTAS []

// let lista = ['maçã', 'uva', 'carne', 'arroz']

// //um objeto
// let pessoas = {
//     'nome': 'Jéssica',
//     'profissao': 'produção',
//     'admin':true
// }

// console.log(lista)
// console.log(lista.lenght) //metodo lenght em listas MEDE O TAMANHO DA LISTA (QUANTIDADE DE ELEMENTOS = 4)

// console.log(lista)
// console.log(lista[1])

// // lista.push('Alho') // metodo push adiciona um elemento na minha lista
// lista.push('Alho')

// console.log(lista)

// //metodo pop remove o ultimo elemento

// lista.pop()
// console.log(lista.pop())

//usando for em listas
//criei uma variavel que vai rodar dentro da minha lista exibindo todos os elementos dela em indice
// for(var item in lista){
//     console.log(item)
// }

//exibindo lista de forma dinamica, adicionando itens  em indice
// lista.push('Alho', 'Agua')
// for(var item in lista){
//     console.log(item)
// }

// lista exibindo os items de forma dinamica interação com os elementos da lista
// lista.push('Alho', 'Agua')
// for(var item in lista){
//     console.log(`${item} - ${lista[item]}`)
// }

//filtrar o elemento especifico usando um condição
// for(let item in lista){
//     if(lista[item] == 'uva'){
//         console.log(lista[item])
//         break
//     }
// }

//lista dentro de lista, navegando por elas
// let lista = ['maçã', 'uva', ['carne', 'arroz']]
// //nesse caso estou passando o indice da lista que quero acessar, e depois passando o indice do item que eu quero exibir dessa lista
// console.log(lista[2][1])

//LISTA DE OBJETOS

//um objeto
// let pessoas = {
//     'nome': 'Jéssica',
//     'profissao': 'produção',
//     'admin':true
// }

// console.log(pessoas['nome'])
// console.log(pessoas['profissao'])

//usando uma lista dentro de um objeto
// let pessoas = {
//     'nome': 'Jéssica',
//     'profissoes': ['produção', 'front end', 'dev web'],
//     'admin':true
// }

// console.log(pessoas['profissoes'][2])

//CONSTRUIR UM OBJETO DO TIPO CELULAR

// let celular = {
//     'Marca': 'Samgung J5',
//     'Cor': 'Preto',
//     'Preço': '1.249,90'
// }

//exibindo um item especifico
// console.log(celular[`Marca`])

//exibindo todos os itens de forma visivel 
// for(var item in celular){
//     console.log(`${item} - ${celular[item]}`)
// }

//ATIVIDADE AULA 8: FAÇA UM PROGRAMA QUE TENHA 4 OPÇÕES SENDO ELA CADASTRAR CLIENTE, REMOVER ULTIMO CLIENTE, VER LISTA DE CLIENTES, SAIR DA APLICAÇÃO


let listaUsuarios = []


while(true){
    
    console.log('Cadastre um usuario 1 = Cadastrar 2 = remover 3 = lista de clientes 4 = sair ')
    let opcao = prompt('Qual opção deseja usar? ')
    
    if(opcao == 1){
        let cadastrar = prompt('Qual o nome do usuario a ser cadastrado? ')
        listaUsuarios.push(cadastrar)
        console.log('Usuario cadastrado! ')
    }else if(opcao == 2){
        listaUsuarios.pop()
        console.log('Ultimo usuario foi removido com sucesso! ')
    }else if(opcao == 3){
        console.log(listaUsuarios)
    }else if(opcao == 4){
        console.log('Aplicação encerrada! ')
        break
    }else{
        console.log('Opção invalida!')
    }
}

//             break



