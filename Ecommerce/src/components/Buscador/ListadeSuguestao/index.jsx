import React, { useMemo, useRef, useEffect } from 'react'
import NavLink from '@/components/NavLink'
import produtos from '@/db/produtos.json';
import style from './ListaDeSugestoes.module.css'

const ListaDeSugestoes = ({ valorBusca, mostrarSugestoes, setMostrarSugestoes, setBusca }) => {
  const containerRef = useRef(null);
  const sugestSearch = useMemo(() => {
    return produtos.filter(produto =>
      produto.titulo.toLowerCase().includes(valorBusca)
    ).slice(0, 8);
  }, [produtos, valorBusca])

  const tamanhoBusca = sugestSearch.length

  useEffect(() => {
    const handleClickFora = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setMostrarSugestoes(false);
      }
    };
    document.addEventListener('mousedown', handleClickFora);
    return () => {
      document.removeEventListener('mousedown', handleClickFora);
    };
  }, []);


  return (
    <div ref={containerRef} className={mostrarSugestoes ? style.Sugestoes : style.none} >
      <ul>
        {
          tamanhoBusca > 0 && mostrarSugestoes ?
            <>
              <p>{tamanhoBusca} resultados encontrad{tamanhoBusca > 0 ? 'os' : 'o'}</p>
              {
                sugestSearch.map(produto => (
                  <li onClick={() => setBusca('')} key={produto.id}>
                    <NavLink path={`/produtos/${produto.id}`}>
                      <div>

                      </div>
                      <div>
                        <h1>{produto.titulo}</h1>
                        <p>{produto.descricao}</p>
                      </div>
                    </NavLink>
                  </li>
                ))
              }
            </> :
            <li className={style.SugestaoNaoEncontrada}>
              nenhum produto encontrado
            </li>
        }
      </ul>
    </div >
  )
}

export default ListaDeSugestoes