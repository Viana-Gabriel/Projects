import { Link } from 'react-router-dom'
import style from './Cabecalho.module.css'

export default function Cabecalho() {
  return (
    <div className={`${style.Cabecalho} flex`}>
      <div className={`${style.Cabecalho_logo}`}>
         <Link to={'/'}><h1>GVSBooks</h1></Link>
      </div>
      <nav>
        <Link to={'/Favoritos'}>
          Livros Salvos
        </Link>
        <Link to={'/CadastrarLivros'}>
          Cadastrar Livros
        </Link>
      </nav>
      

    </div>
    
  )
}
