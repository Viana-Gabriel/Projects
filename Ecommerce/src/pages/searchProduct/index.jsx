import React from 'react'
import { useSearchParams } from 'react-router-dom'
import produtos from '@/db/produtos.json'

const ProdutosBuscados = () => {

  const [searchParametro] = useSearchParams()
  const busca = searchParametro.get("busca")

  const produtosBuscados = produtos.filter((produto) =>
    produto.titulo.toLowerCase().includes(busca?.toLowerCase() || "")
  );

  return (
    <div>

      {produtosBuscados.length > 0 ? (
        <>
          <h1>Resultados para: "{busca}"</h1>
          <ul>
            {produtosBuscados.map((produto) => (
              <li key={produto.id}>{produto.titulo}</li>
            ))}
          </ul>

        </>

      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </div>
  )
}

export default ProdutosBuscados