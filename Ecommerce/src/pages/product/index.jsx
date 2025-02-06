import React from 'react'
import { useParams } from 'react-router-dom'
import PaginaNaoEncontrada from '../naoencontrada'
import produtos from '@/db/produtos.json'
import Container from '../../components/Container'
import style from './Product.module.css'
import { FaTruck, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import FomatadorMoedas from '../../components/Formatador'
import CalculadorFrete from '../../components/CalculadorFrete'

const ProductPage = () => {

  const { id } = useParams()
  const produto = produtos.find(produto => produto.id == Number(id))
  if (!produto) { return <PaginaNaoEncontrada /> }

  const preco_produto = produto.preco
  return (
    <Container>
      <div className={style.Product}>
        <div className={style.Product_image}>
          <div className={style.Product_image_principal}></div>
          <div className={style.Product_image_alternativas}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={style.Product_info}>
          <div className={style.Product_info_header}>
            <h1>{produto.titulo}</h1>
            <p>{produto.descricao}</p>
          </div>
          <div className={style.Product_info_price}>
            <h2><FomatadorMoedas valor={preco_produto} /> à vista</h2>
            <p>12x de <FomatadorMoedas valor={preco_produto / 12} />  sem juros</p>

          </div>
          <div className={style.Product_info_colors}>
            <h2>Escolha a cor da pulseira</h2>
            <div>
              <button></button>
              <p>Branco</p>
            </div>

          </div>
          <div className={style.Product_info_frete}>
            <CalculadorFrete/>
            <div>
              <FaTruck size={20} />
              <p>Frete grátis a partir de R$ 200,00 para cidades do Estado de São Paulo</p>
            </div>

          </div>
          <div className={style.Product_info_acoes}>
            <button>
              <FaShoppingCart size={30} />
              Adicionar ao carrinho
            </button>
            <FaRegHeart size={30} />
          </div>
        </div>
      </div>
    </Container>

  )
}

export default ProductPage