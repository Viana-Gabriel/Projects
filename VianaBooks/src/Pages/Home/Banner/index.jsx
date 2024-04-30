import { Link } from 'react-router-dom'
import style from './Banner.module.css'
import img_banner from './img_banner.png'
export default function Banner() {
  return (
    <div className={`${style.Banner} flex`}>
      <div>
        <h1>Encontre Informações sobre os livros Que você mais gosta</h1>
        <p>
           Site especializado em literatura, onde você encontrará informações detalhadas sobre autores, sinopses envolventes de livros e uma variedade de obras para explorar. 
        </p>
        <Link to={'/CadastrarLivros'}>Contribua Cadastrando livros</Link>
      </div>
      <div>
        <img src={img_banner} alt="" className={style.Banner_img} />
      </div>

    </div>
  )
}
