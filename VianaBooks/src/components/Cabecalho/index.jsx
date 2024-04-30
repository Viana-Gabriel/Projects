import style from './Cabecalho.module.css'

export default function Cabecalho() {
  return (
    <div className={`${style.Cabecalho} flex`}>
      <div className={`${style.Cabecalho_logo}`}>
        <h1>VianaBooks</h1>
      </div>
    </div>
  )
}
