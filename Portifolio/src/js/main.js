const frase = document.getElementById('frase_animada')
const cards_imagens = document.querySelectorAll('.card_imagem')

cards_imagens.forEach((card , i)=>{
  card.style.backgroundImage = `url('./src/imagens/icons_habilidades/${i+1}.svg')`
  card.style.backgroundSize = 'cover'
})

TextoAnimado(frase)

function TextoAnimado(texto){
  const textoArray = texto.innerHTML.split('')

  texto.innerHTML = ''

  textoArray.forEach((letra,i) => {
    setTimeout(()=>{
      texto.innerHTML += letra
    }, 75 * i)
  });

}

