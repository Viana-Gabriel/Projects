import { Link } from 'react-router-dom'
import style from './Cabecalho.module.css'
import { FaBookmark } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

export default function Cabecalho() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`${style.Cabecalho} flex`}>
      <div className={`${style.Cabecalho_logo}`}>
        <Link to={'/'}><h1>GVSBooks</h1></Link>
      </div>
      <div className={style.btn_Menu}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <IoMenu size={40} color='white' />
        </button>
      </div>
      <nav className={`${isOpen ? style.Cabecalho_NavMobile: ''} ${style.Cabecalho_Nav} flex`} onClick={() => setIsOpen(!isOpen)} >
        <Link to={'/Favoritos'} className='flex'  onClick={() => setIsOpen(!isOpen)}>
          Livros Salvos
          <FaBookmark />
        </Link>
        <Link to={'/CadastrarLivros'}  onClick={() => setIsOpen(!isOpen)}>
          Cadastrar Livros
        </Link>
      </nav>
    </div>

  )
}
