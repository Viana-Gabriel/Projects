import { Link, useParams } from "react-router-dom"
import NaoEncontrado from "../NaoEncontrada"
import Container from "../../components/Container"
import style from './Pagelivro.module.css'
import axios from 'axios'
import { useEffect, useState } from "react"

export default function PageLivro() {
  
  useEffect(() => {
    axios.get(`http://localhost:3001/livros/${id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => console.log(error))

    axios.get(`http://localhost:3001/livros`)
      .then(res => {
        setLivros(res.data)
        console.log(res.data)
      })
      .catch(error => console.log(error))
  }, [])

  const [livros, setLivros] = useState([])

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
