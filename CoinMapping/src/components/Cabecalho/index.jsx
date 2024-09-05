import { Link } from "react-router-dom"

const Cabecalho = () => {
  return (
    <header className='h-[65px] bg-primary_color flex justify-around items-center text-white text-lg'>
      <div>
        <Link to={'/'}><h1>CoinMapping</h1></Link>
      </div>
      <nav >
        <ul className={'w-[480px] flex justify-between items-center'}>
          <li> <Link to={'/quemsomos'}>Quem Somos</Link></li>
          <li> <Link to={'/login'}>Login</Link></li>
          <li> <Link to={'/cadastro'} className='bg-white text-black font-semibold px-8 py-2 hover:brightness-90'>Comece a gerenciar</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Cabecalho