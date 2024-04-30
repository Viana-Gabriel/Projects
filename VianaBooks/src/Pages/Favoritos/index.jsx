import { useFavoriteContext } from "../../Contexts/Favorites"
import CardLivro from "../../components/CardLivro"
import Container from "../../components/Container"
import style from "./Favoritos.module.css"

export default function Favoritos() {

  const { favorite } = useFavoriteContext()

  return (

    <Container>
      {
        favorite.length === 0
          ? (
            <div className={`${style.Favoritos} flex` }>
             <p>Nenhum livro salvo no momento...</p>
           </div>
          )
          : ( <div className={`${style.Favoritos} flex` }>
            {
              favorite.map((favoritos,i) =>(
               <CardLivro {...favoritos} key={i} />
               ))
            }
           </div>
           )
      }
    </Container>
  )
}
