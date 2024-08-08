import { Link, useParams } from "react-router-dom"
import NaoEncontrado from "../NaoEncontrada"
import Container from "../../components/Container"
import style from './Pagelivro.module.css'
import { useLivroContext } from "../../Contexts/Livros"

export default function PageLivro() {
  

  const {livros} = useLivroContext()

  const { id } = useParams()
  const livro = livros.find(livro => livro.id == Number(id))
  if (!livro) { return <NaoEncontrado /> }

  return (

    <>
      <Container>
        <div className={`${style.PageLivro} flex`}>
          <div className={`${style.PageLivro_Imagem} flex`}>
            <img src={`${livro.imagem}`} alt="nao carregou" />
          </div>
          <div className={`${style.PageLivro_Info} flex`}>
            <h1>Livro: {livro.titulo}</h1>
            <div>
              <h2>Sinopse</h2>
              <p>{livro.descricao}</p>
            </div>
            <h2>Autor:{livro.autor}</h2>
            <p>Valor R$ {livro.preco}</p>
            <Link to={'/'} className="flex">
              Voltar para a Home
            </Link>
          </div>
        </div>
      </Container>
    </>

  )
}
