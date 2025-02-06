import React from 'react'
import { useSearchParams } from 'react-router-dom'
import produtos from '@/db/produtos.json'
import CardProduct from '@/components/CardProduct'
import Container from '@/components/Container'

const ProdutosBuscados = () => {

  const [searchParametro] = useSearchParams()
  const busca = searchParametro.get("busca")

  const produtosBuscados = produtos.filter((produto) =>
    produto.titulo.toLowerCase().includes(busca.toLowerCase() || "")
  );

  return (
    <Container>

      {produtosBuscados.length > 0 ? (
        <>
          <h1>Resultados para: "{busca}"</h1>
          <div>
            {produtosBuscados.map((produto) => (
              <CardProduct {...produto} />
            ))}
          </div>

        </>

      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </Container>
  )

}

export default ProdutosBuscados