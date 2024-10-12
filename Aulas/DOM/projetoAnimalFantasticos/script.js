

// // Retorne no console todas as imagens do site
// const imgAnimal = document.querySelectorAll('img')
// console.log(imgAnimal)
// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const imagemAtual = document.querySelectorAll('img[scr^="img/imagem"')
// console.log(imagemAtual)
// // Selecione todos os links internos (onde o href começa com #)
// const linkInterno = document.querySelectorAll('[herf^="#"')
// console.log(linkInterno)

// // Selecione o primeiro h2 dentro de .animais-descricao
// const h2Animal = document.querySelector('.animais-descricao h2');
// console.log(h2Animal)


// const imgs = document.querySelector('img')
// imgs.setAttribute('alt', 'raposa')

// const menu = document.querySelector('.menu');

// menu.className; // string
// menu.classList; // lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile'); // duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo'); // adiciona/remove a classe
// menu.classList.contains('ativo'); // true ou false
// menu.classList.replace('ativo', 'inativo');


// const img = document.querySelector('img');

// img.getAttribute('src'); // valor do src
// img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
// img.hasAttribute('id'); // true / false
// img.removeAttribute('alt'); // remove o alt

// img.hasAttributes(); // true / false se tem algum atributo

// const animais = document.querySelector('.animais');

// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string

// animais.attributes = 'class="ativo"'; // não funciona, read-only



// // Adicione a classe ativo a todos os itens do menu
// const itensMenu = document.querySelectorAll('.menu a')
// itensMenu.forEach((item) => {
//     item.classList.add('ativo')
// });

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// itensMenu.forEach((item) => {
//     item.classList.remove('ativo')
// });
// itensMenu[0].classList.add('ativo')
// // Verifique se as imagens possuem o atributo alt

// const imgs = document.querySelectorAll('img')
// imgs.forEach((img) => {
//    console.log(img.hasAttribute('alt'));
// })

// // Modifique o href do link externo no menu
// const links = document.querySelectorAll('a[href^="https"')
// links.setAttribute('href','https://www.google.com')


// const section = document.querySelector('.animais');

// section.clientHeight; // height + padding
// section.offsetHeight; // height + padding + border
// section.scrollHeight; // height total, mesmo dentro de scroll

// const section2 = document.querySelector('.animais');

// // Distância entre o topo do elemento e o topo da página
// section2.offsetTop;

// // Distância entre o canto esquerdo do elemento
// // e o canto esquerdo da página
// section2.offsetLeft;

// const section3 = document.querySelector('.animais');

// const rect = section3.getBoundingClientRect();
// rect.height; // height do elemento
// rect.width; // width do elemento
// rect.top; // distância entre o topo do elemento e o scroll


// window.innerWidth; // width do janela
// window.outerWidth; // soma dev tools também
// window.innerHeight; // height do janela
// window.outerHeight; // soma a barra de endereço

// window.pageYOffset; // distância total do scroll vertical
// window.pageXOffset; // distância total do scroll horizontal

// if(window.innerWidth < 600) {
//   console.log('Tela menor que 600px');
// }

// const small = window.matchMedia('(max-width: 600px)');

// if(small.matches) {
//   console.log('Tela menor que 600px')
// } else {
//   console.log('Tela maior que 600px')
// }


// Verifique a distância da primeira imagem
// em relação ao topo da página

// const img = document.querySelector('img')
// const imgTop = img.offsetTop
// console.log(imgTop)

// // Retorne a soma da largura de todas as imagens
// function somaImagem(){
//     const imagem = document.querySelectorAll('img')
//     let soma = 0;
//     imagem.forEach((imagen) =>{
//        soma += imagen.offsetWidth
//     })
//     console.log(soma)
// }

//     window.onload = function(){
//         somaImagem()
//     } 
// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)

// const links = document.querySelectorAll('a')
// links.forEach((link)=> {
//     const linkWidth =  link.offsetWidth;
//     const linkHeight =  link.offsetHeight;
//     if(linkWidth > 48 && linkWidth > 48){
//         console.log(link ,'recomendado')
//     }else{
//         console.log(link, 'não recomendado')
//     }
// })

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu

// const tamanho = window.matchMedia('(max-width: 720px)').matches;
// const menuus =  document.querySelector('.menu')
// if(tamanho){
//     menuus.classList.add('menu-mobile')
// }






