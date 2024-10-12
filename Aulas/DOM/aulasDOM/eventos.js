const img = document.querySelector('img')



const animaisListas = document.querySelector('.animais.lista')
 function callbackLista(event){
    console.log(event.currentTarget);
    console.log(event.target)
 }

 animaisListas.addEventListener('click', callbackLista)