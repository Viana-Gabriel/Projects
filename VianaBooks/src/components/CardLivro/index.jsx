/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from './CardLivro.module.css'


export default function CardLivro({ id, titulo, autor }) {
  return (
      <div className={style.CardLivro}>
        <h2>{titulo}</h2>
        <h2>{autor}</h2>
        <Link to={`/Livros/${id}`} >
          Veja Mais
        </Link>
      </div>
  )
}
