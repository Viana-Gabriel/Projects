import React from 'react'
import Container from '@/components/Container'
import banner_image from './banner_image.png'
import style from './Banner.module.css'

const Banner = () => {
  return (
    <Container classname={style.container_banner}>
      <div>
        <img src={banner_image} alt="banner" />
      </div>
      <div>
        <p>Produtos de alta qualidade com preços baixos</p>
        <h1>Ofertas Imperdíveis</h1>
        <button>Compre Agora</button>
      </div>  
    </Container>
  )
}

export default Banner