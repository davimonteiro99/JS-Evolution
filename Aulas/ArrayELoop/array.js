

/*for(let numero = 1; numero <= 10; numero++){
   console.log(numero) 
}*/

const videoGame = ['Swchit', 'Ps4', 'xbox'];

for(var item = 0; item < videoGame.length; item++){
 console.log(videoGame[item])
  if(videoGame[item] === 'Ps4'){
    break
  }
}

//for each

const frutas = ['banana', 'pera', 'arroz', 'abacaxi']

videoGame.forEach(function(fruta,index){
    console.log(fruta,index)
})

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const copaBrasil = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(var i = 0; i < copaBrasil.length; i++){
    console.log(`O brasil ganhou a copa de ${copaBrasil[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
//var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

var issoEumaSalada = ['banana', 'maça','pera','uva','pitonba']
for(var ii = 0; ii < issoEumaSalada.length; ii++){
    console.log(issoEumaSalada[ii])
    if(issoEumaSalada[ii] === 'pera'){
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

const ultima = frutas[frutas.length -1]

