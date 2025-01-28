import style from './Cabecalho.module.css'
import Navagation from '@/components/Navigation'
import NavLink from '@/components/NavLink/'

import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Search from '@/components/Buscador';
import Container from '../Container';

const Cabecalho = () => {


  return (
    <header className={style.Cabecalho}>
      <Container classname={style.Cabecalho_container}>
        <div>
          <NavLink path={'/'}>
            Logo
          </NavLink>
        </div>
        <Search/>
        <Navagation>
          <div className={style.flex}>
            <NavLink path={'/login'}>Login</NavLink>
            <NavLink path={'/salvo'} >
              <FaHeart size={20} />
            </NavLink>
            <NavLink path={'/carrinho'}>
              <FaShoppingCart size={20} />
            </NavLink>
          </div>
        </Navagation>
      </Container>
    </header>
  )
}

export default Cabecalho