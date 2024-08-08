import { useState } from 'react'
import style from './Home.module.css'
import Container from '../../components/Container'
import CardLivro from '../../components/CardLivro'
import Filtragem from '../../components/Filtragem'
import Banner from './Banner'
import { useLivroContext } from '../../Contexts/Livros'


export default function Home() {
  
  const {livros} = useLivroContext()

  const [livrosFiltrar, setLivrosFiltrar] = useState(livros)
  const [busca, setBusca] = useState('')
  
  const livrosBusca = livrosFiltrar.filter(livro => livro.titulo.toLowerCase().includes(busca.toLowerCase()))

  function filtrarLivros(categoria) {
    if (categoria == 'Todos') {
      setLivrosFiltrar(livros)
    } else {
      const livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
      setLivrosFiltrar(livrosFiltrados)
    }
  }

  return (
    <>
      <Container >
        <Banner />
        <Filtragem filtrarLivros={filtrarLivros} livros={livros} busca={busca} setBusca={setBusca} />
        <section className={`${style.CardsLivro} flex`}>
          {
            livrosBusca.length === 0
              ? (
                <p>Nenhum Livro Encontrado</p>
              )
              : (livrosBusca.map(livro => (
                <CardLivro {...livro} key={livro.id} />
              )))
          }
        </section>

      </Container >
    </>

  )
}
