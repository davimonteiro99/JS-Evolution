function areaQuadrado(lado){
 return lado * lado;
}

console.log(areaQuadrado(4));

function pi(){
    return 3.14;
}
var total = 5 * pi();
console.log(total)

function imc(peso, altura){
    var imc = peso / (altura * altura);
    return imc;
}
console.log(imc(61, 1.73))

function corFavorita(cor){
    if(cor === 'azul'){
        return 'eu gosto de ceu'
    } else if(cor === 'verde'){
        return 'Aqui é verdão'
    }else{
        return 'eu gosto de nada'
    }
}

addEventListener('click', function(){
    console.log('clicou')
});

function imc2(peso, altura){
    const imc = peso / (altura*altura);
    console.log(imc)
}
imc2(90, 1.90)


function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        console.log('Informe direito')
    }else if (idade < 60){
        console.log("ta novo")
        return false
    }else{
        console.log(" ta vei")
        return true
    }
}
terceiraIdade(30)

function paisesVisitar(paisesVisitados){
    const totalPaises = 193;
    return`Faltam visitar ${totalPaises - paisesVisitados}`
}

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro



