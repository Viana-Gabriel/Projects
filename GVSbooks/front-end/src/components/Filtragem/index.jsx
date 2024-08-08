/* eslint-disable react/prop-types */
import { useState } from 'react'
import style from './Filtragem.module.css'


export default function Filtragem({ filtrarLivros, livros, busca, setBusca }) {
  
  const [filtro, setFiltro] = useState('')
  const [filtros,setFiltros] = useState(['Todos'])

  livros.map(livro => {
    if (!filtros.includes(livro.categoria))
      setFiltros([...filtros,livro.categoria])
  })

 
  return (
    <>
      <div className={`${style.Container_Filtrador} flex`}>
      <div className={`${style.Search} flex`}>
        <input type="text" placeholder='Busque por livros' value={busca} onChange={e => setBusca(e.target.value)} />
      </div>
      <div>
        <select value={filtro} onChange={e => setFiltro(filtrarLivros(e.target.value))}>
          {
            filtros.map(filtro => (
              <option key={filtro}>{filtro}</option>
            ))
          }
        </select>
      </div>
    </div>
    </>
    
  )
}
