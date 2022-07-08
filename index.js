//document.getElementById("count-el").innerText = 5

// //escrevendo variáveis no js
// let soma = 5 + 7
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch

// //console ajuda a debugar e checar/printar 
// console.log(count)
// console.log(soma)

// //operações com variáveis
// let count = 0
// count = count + 1
// count = count - 1
// console.log(count)

// inicializar a contagem como 0
// identificar cliques no botão ADICIONAR
// adicionar à variável quando o botão é clicado
// mudar a count-el no HTML para a nova contagem

//"camelCase" (primeira letra da segunda palavra em maiúsculo, 
// mas não a primeira letra da primeira palavra)
let countEl = document.getElementById("count-el") //passando o argumento

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}









