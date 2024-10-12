// Crie uma função para verificar se um valor é Truthy

function verificaAi(valor){
    return !! valor
}
verificaAi(0)

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(lados){
 let somaDosQuadrados = lados * 4
 return console.log(somaDosQuadrados)
}
quadrado()

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto( nome, sobrenome){
    return console.log('Seu nome é ' + nome , sobrenome)
}
nomeCompleto('davi', 'monteiro')

// Crie uma função que verifica se um número é par

function paEpu(numero){
    let ePAR = (numero % 2)
    if(ePAR == 0){
        console.log("PAR")
    }else{
        console.log("impa")
    }
}
paEpu()

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipo(tipoDeDado){
    console.log(typeof tipoDeDado)
}


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll' , function(){
    console.log('Davi')
})

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
 