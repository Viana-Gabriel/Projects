import { Link, useParams } from "react-router-dom"
import livros from '../../db/db_livros.json'
import NaoEncontrado from "../NaoEncontrada"
import Container from "../../components/Container"

export default function PageLivro() {

  const { id } = useParams()
  const livro = livros.find(livro => livro.id == Number(id))
  if (!livro) { return <NaoEncontrado /> }

  return (
    <>
      <Container>
        <div>
          <h1>{livro.titulo}</h1>
          <p>{livro.descricao}</p>
          <p>{livro.autor}</p>
        </div>
        <Link to={'/'}>
          Voltar para a Home
        </Link>
      </Container>
    </>

  )
}
