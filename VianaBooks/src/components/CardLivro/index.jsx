/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from './CardLivro.module.css'


export default function CardLivro({ id, titulo, autor, preco, imagem }) {

  /*  const precoConvertido = preco.toString().replace(".", ",") */
  return (
    <div className={`${style.CardLivro} flex`}>
      <img src={`assets/Livros/${imagem.toString().toLowerCase()}.jpg`} alt="nao carregou" />
      <div>
        <h1>{titulo}</h1>
        <h2>{autor}</h2>
      </div>
      <h3>R$ {preco.toFixed(2)}</h3>
      <Link to={`/Livros/${id}`} className={style.CardLivro_link}>
        Mais informações
      </Link>
    </div>
  )
}
