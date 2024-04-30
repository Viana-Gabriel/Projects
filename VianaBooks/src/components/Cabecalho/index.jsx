import { Link } from 'react-router-dom'
import style from './Cabecalho.module.css'
import { FaBookmark } from "react-icons/fa6";

export default function Cabecalho() {
  return (
    <div className={`${style.Cabecalho} flex`}>
      <div className={`${style.Cabecalho_logo}`}>
         <Link to={'/'}><h1>GVSBooks</h1></Link>
      </div>
      <nav className={`${style.Cabecalho_Nav} flex`}>
        <Link to={'/Favoritos'} className='flex'>
          Livros Salvos
          <FaBookmark />
        </Link>
        <Link to={'/CadastrarLivros'}>
          Cadastrar Livros
        </Link>
      </nav>
      
    </div>
    
  )
}
