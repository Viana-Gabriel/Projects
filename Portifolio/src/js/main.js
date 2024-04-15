const frase = document.getElementById('frase_animada')

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

