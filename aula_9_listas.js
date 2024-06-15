//lista_compras = [["Carne", ["Promoção", "29,90"]]]
//console.log(lista_compras [0][1][0]);

//let animal = [{
   // "nome":"Cavalo",
  // "peso":"800kg",
 ///   "altura":"1.45 cm",
  //  "cor":"Marron",
 //  "raca": "Crioulo"
//},

   // console.log(animal['Cavalo'])


 //{
//"nome":"Cachorro",
//"pesso":"2kg",
//"altura":"20 cm",
//"cor":"Marron",
//"raca":"Caramelo",
//"filhotes": [


    //lista_compras = [["Carne", ["Promoção", "29,90"]]]
//console.log(lista_compras [0][1][0]);

let animal = [{
    "nome":"Cavalo",
   "peso":"800kg",
    "altura":"1.45 cm",
    "cor":"Marron",
   "raca": "Crioulo"
},

   // console.log(animal['Cavalo'])


 {
"nome":"Cachorro",
"pesso":"2kg",
"altura":"20 cm",
"cor":"Marron",
"raca":"Caramelo",
"filhotes": [
   
    {
        "nome":"zezinho 1",
        "idade":"2",
    }
]}]


animal[1]['filhotes'].forEach((filho)=> console.log(filho['nome']))

EXERCICIOS

let animal = [ 
{
"nome":"cavalo",
"peso":"800kg",
"altura":"1.45 cm",
"cor":"marrom",
"raça":"crioulo"
},
{
    "nome":"cachorro",
    "peso":"10kg",
    "altura": "60 cm",
    "cor":"branco com preto",
    "raça":"Border collie",
    "filhotes": [
     {
         "nome":"zezinho 1",
         "idade": "2",
     }
]

console.log(animal[1][1] ['nome'])


let animal = [
    {
        "nome":"cavalo",
        "peso":"800kg",
        "altura":"1.45 cm",
        "cor":"marrom",
        "raça":"crioulo"
    },
    {
        "nome":"cachorro",
        "peso":"10kg",
        "altura":"60 cm",
        "cor":"branco com preto",
        "raça":"Border collie",
        "filhotes":[
            {
                "nome": "zezinho 1",
                "idade": "2"
            }
        ]
    }
];
console.log(animal[1])
animal[1] ['filhotes'],forEach(filho => {
    console.log(filho['nome']);  
});

EXERCICIOS CORRETOS

let animal = [ 
{
"nome":"cavalo",
"peso":"800kg",
"altura":"1.45 cm",
"cor":"marrom",
"raça":"crioulo"
},
{
    "nome":"cachorro",
    "peso":"10kg",
    "altura": "60 cm",
    "cor":"branco com preto",
    "raça":"Border collie",
    "filhotes":[ 
     {
         "nome":"zezinho 1",
         "idade": "2",
     }
     ]
 }
]

console.log(animal[1]) //EXIBIR LISTA POSIÇÃO 1
animal[1]['filhotes'].forEach(filho => {
    console.log(filho['nome'])
})



// let animal = [
//     {
//         "nome":"cavalo",
//         "peso":"800kg",
//         "altura":"1.45 cm",
//         "cor":"marrom",
//         "raça":"crioulo"
//     },
//     {
//         "nome":"cachorro",
//         "peso":"10kg",
//         "altura":"60 cm",
//         "cor":"branco com preto",
//         "raça":"Border collie",
//         "filhotes":[
//             {
//                 "nome": "zezinho 1",
//                 "idade": "2"
//             }
//         ]
//     }
// ];

// //DENTRO DA LISTA NA POSIÇÃO [1] PEGANDO A LISTA DE FILHOTES DENTRO DA LISTA [1] PROCURANDO PELO NOME DENTRO DA LISTA
// console.log(animal[1])
// animal[1] ['filhotes'].forEach(filho => {
//     console.log(filho['nome']);  
// });
