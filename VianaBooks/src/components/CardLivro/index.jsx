/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from './CardLivro.module.css'
import { useFavoriteContext } from "../../Contexts/Favorites";
import { FaBookmark,FaRegBookmark } from "react-icons/fa6";
export default function CardLivro({ id, titulo, autor, preco, imagem }) {


  const { favorite, addFavorite } = useFavoriteContext()

  const isFavorite = favorite.some( fav => fav.id === id)
  const favoritado = isFavorite ? <FaBookmark size={30}/> : <FaRegBookmark size={30}/>
  return (
    <div className={`${style.CardLivro} flex`}>
      <img src={`${imagem}`} alt="nao carregou" />
      <div>
        <h1>{titulo}</h1>
        <h2>{autor}</h2>
      </div>
      <h3>R$ {preco.toFixed(2)}</h3>
      <Link to={`/Livros/${id}`} className={style.CardLivro_link}>
        Mais informações
      </Link>
      <figure onClick={ ()=> addFavorite({id,titulo,autor,preco,imagem})} className={style.favorito}>{favoritado}</figure>
    </div>
  )
}
