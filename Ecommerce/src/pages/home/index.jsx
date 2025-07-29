import Banner from './Banner'
import style from './Home.module.css'

import Container from '@/components/Container'
import Vantagens from '@/components/Vantagens'
import ProductCarousel from '@/components/ProductCarousel'

import produtos from '@/db/produtos.json'

import descubra_image from '@/assets/descubra_image.png'

const Home = () => {


  return (
    <>
      <section className={style.banner} id="banner">
        <Banner />
      </section>
      <section className={style.vantagens} id='vantagens'>
        <Vantagens/>
      </section>
      <section className={style.destaques} id='destaques'>
        <ProductCarousel products={produtos} title={'Produtos em Destaque'}/>
      </section>
      <section className={style.descubra} id='descubra'>
          <Container classname={style.container_descubra}>
            <div div className={style.descubra_info}>
              <h1>Descubra nossas coleções</h1>
              <p>Encontre a inspiração perfeita em nossas coleções cuidadosamente selecionadas. Produtos que combinam estilo, funcionalidade e inovação para acompanhar seu ritmo. Explore agora e transforme seu dia a dia com as melhores opções para você!</p>
              <div className={style.descubra_links}>
                <a href="">Explorar Coleçoes</a>
                <a href="">Ver Lançamentos</a>
              </div>
            </div>
            <div className={style.descubra_image}>
              <img src={descubra_image} alt="" />
      	      <div></div>
            </div>
          </Container>
      </section>
      <section className={style.destaques} id='destaques'>
        <ProductCarousel products={produtos} title={'Combine seu smartwatch com acessórios exclusivos!'}/>
      </section>
    </>
    
  )
}

export default Home