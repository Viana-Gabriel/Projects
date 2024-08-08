import style from './Rodape.module.css'

export default function Rodape() {
  return (
    <footer className={`${style.Rodape} flex`}>
      <h2>
      &copy; Desenvolvido por Gabriel Viana - 2024
      </h2>
    </footer>
  )
}
