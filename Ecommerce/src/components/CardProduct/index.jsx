import React from 'react'
import FormatadorMoedas from '@/components/Formatador'
import style from './CardProduct.module.css'
import NavLink from '../NavLink'
import img from '../../assets/produtos/1.png'

const CardProduct = ({ titulo, descricao, preco, id, src, destaque = true }) => {
  return (
    <div className={style.cardProduct}>
      
      {destaque ? <div className={style.destaque}>frete gratis</div> : '' }

      <div className={style.cardProduct_imagem}>
        <img src={img} alt="" />
      </div>
      <div>
        <h1 className={style.cardProduct_titulo}>{titulo}</h1>
        <p className={style.cardProduct_descricao}>{descricao}</p>
      </div>
      <div>
        Avaliacao
      </div>
      <div>
        <h2 className={style.cardProduct_preco}><FormatadorMoedas valor={preco} /> à vista</h2>
        <p className={style.cardProduct_precoParcelado}>12x de <FormatadorMoedas valor={preco / 12} /> sem juros</p>
      </div>
      <NavLink path={`/produtos/${id}`}>Compre agora</NavLink>
    </div>
  )
}

export default CardProduct