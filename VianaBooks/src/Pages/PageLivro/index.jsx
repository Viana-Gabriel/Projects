import { Link, useParams } from "react-router-dom"
import livros from '../../db/db_livros.json'
import NaoEncontrado from "../NaoEncontrada"
import Container from "../../components/Container"
import style from './Pagelivro.module.css'
export default function PageLivro() {

  const { id } = useParams()
  const livro = livros.find(livro => livro.id == Number(id))
  if (!livro) { return <NaoEncontrado /> }

  return (
    <>
      <Container>
        <div className={`${style.PageLivro} flex`}>
          <div>
            <img src={`/assets/Livros/${livro.imagem.toString().toLowerCase()}.jpg`} alt="nao carregou" />
          </div>
          <div className={`${style.PageLivro_Info}`}>
            <h1>{livro.titulo}</h1>
            <p>{livro.descricao}</p>
            <p>{livro.autor}</p>
            <p>{livro.preco}</p>

            <Link to={'/'}>
              Voltar para a Home
            </Link>
          </div>
        </div>
      </Container>
    </>

  )
}
