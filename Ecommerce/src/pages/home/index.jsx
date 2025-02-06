
import produtos from '@/db/produtos.json'

import Vantagens from '../../components/Vantagens'
import Banner from './Banner'
import style from './Home.module.css'
import ProductCarousel from '@/components/ProductCarousel'

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
    </>
    
  )
}

export default Home