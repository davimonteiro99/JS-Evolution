// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const dadosPessoais = {
    nome: 'Davi',
    sobreNome: 'Monteiro',
    nomeCompleto: function(sobre){
       return console.log("" +this.nome+ " " +this.sobreNome)
    }
}
dadosPessoais.nomeCompleto()

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

  const cachorro ={
    raca: "Labrador",
    cor: 'Preto',
    idade: 10,
    mania(pessoa){
        if(pessoa === 'Homem'){
            console.log("Cachhoro late")
        }else{
            console.log("Cachorro não late")
        }
    }
  }

  cachorro.mania('Homem')
  
  