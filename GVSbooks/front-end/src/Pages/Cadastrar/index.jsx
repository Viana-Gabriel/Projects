import { useState } from "react"
import Container from "../../components/Container";

import style from './Cadastrar.module.css'
import sem_imagem from './sem-foto.jpg'
import { useLivroContext } from "../../Contexts/Livros";

export default function CadastrarLivro() {

  const { livros, setLivros } = useLivroContext()
  console.log(livros)

  const [error, setError] = useState('')
  const [sucess, setSucess] = useState('')
  const [status, setStatus] = useState(false)

  const [cadLivro, setCadLivro] = useState({
    titulo: '',
    descricao: '',
    autor: '',
    categoria: '',
    preco: '',
    imagem: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cadLivro.titulo === '' || cadLivro.descricao === '' || cadLivro.autor === '' || cadLivro.categoria === '' || cadLivro.preco === '' || cadLivro.imagem === '') {
      setSucess('')
      setStatus(false)
      setError('Preencha todos os dados')

    } else {
      setLivros([...livros , { id: livros.length + 1, ...cadLivro }])
      setCadLivro({ ...cadLivro, titulo: '', descricao: '', autor: '', categoria: '', preco: '', imagem: '' })
      setStatus(true)
      setSucess('Livro Cadastrado com sucesso !!! ')
    }

    
  }

  console.log(cadLivro.categoria)
  return (
    <>
      <Container>
        <div className={`${style.FormCadastro} flex`}>
          <div className={`${style.FormCadastro_Imagem}`}>
            <img src={cadLivro.imagem === '' ? sem_imagem : cadLivro.imagem} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Titulo</label>
              <input type="text" value={cadLivro.titulo} onChange={e => setCadLivro({ ...cadLivro, titulo: e.target.value })} />
            </div>
            <div>
              <label htmlFor="">Descricao</label>
              <textarea id="" cols="30" rows="6" value={cadLivro.descricao} onChange={e => setCadLivro({ ...cadLivro, descricao: e.target.value })} maxLength={700}></textarea>
            </div>

            <div>
              <label htmlFor="">Autor</label>
              <input type="text" value={cadLivro.autor} onChange={e => setCadLivro({ ...cadLivro, autor: e.target.value })} />
            </div>
            <div className={`${style.FormCadastro_metade} flex`}>
              <div>
                <label htmlFor="">Categoria</label>
                <input type="text" value={cadLivro.categoria} onChange={e => setCadLivro({ ...cadLivro, categoria: e.target.value.charAt(0).toUpperCase() + e.target.value.substring(1) })} />
              </div>

              <div>
                <label htmlFor="">preco</label>
                <input type="number" value={cadLivro.preco} step={'0.00'} onChange={e => setCadLivro({ ...cadLivro, preco: e.target.value })} />
              </div>

            </div>


            <div>
              <label htmlFor="">Endereço imagem</label>
              <input type="text" value={cadLivro.imagem} onChange={e => setCadLivro({ ...cadLivro, imagem: e.target.value })} />
            </div>
            <div>
              <span className={status
                ? style.FormCadastro_Sucess
                : style.FormCadastro_Error}>
                {status ? sucess : error}
              </span>
            </div>
            <button>Cadastrar Novo Livro</button>
          </form>
        </div >
      </Container >
    </>
  )
}
