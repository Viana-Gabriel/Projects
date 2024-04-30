import livros from '../../db/db_livros.json'
import Container from '../../components/Container'
import CardLivro from '../../components/CardLivro'

import style from './Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [livrosEstoque, setLivrosEstoque] = useState(livros)

  const [filtro, setFiltro] = useState(false)
  const [busca, setBusca] = useState('')

  const livrosBusca = livrosEstoque.filter(livro => livro.titulo.toLowerCase().includes(busca.toLowerCase()))

  const filtros = ['Todos']

  livros.forEach(livro => {
    if (!filtros.includes(livro.categoria))
      filtros.push(livro.categoria)
  })

  function filtrarLivros(categoria) {
    if(categoria == 'Todos'){
      setLivrosEstoque(livros)
    }else{
      const livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
      setLivrosEstoque(livrosFiltrados)
    }
  }

  return (
    <>
      <Container >
        <div className={`${style.Container_Filtrador} flex`}>
          <div className={`${style.Search} flex`}>
            <input type="text" placeholder='Busque por livros' value={busca} onChange={e => setBusca(e.target.value)} />
          </div>
          <div>
            <select value={filtro} onChange={e =>setFiltro(filtrarLivros(e.target.value))}>
              {
                filtros.map(filtro => (
                 <option key={filtro}>{filtro}</option>
                ))
              }
            </select>
          </div>
        </div>
        <section className={`${style.CardsLivro} flex`}>
          {livrosBusca.map(livro => (
            <CardLivro {...livro} key={livro.id} />
          ))}
        </section>
      </Container >
    </>

  )
}
