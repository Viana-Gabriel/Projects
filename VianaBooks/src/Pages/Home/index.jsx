import livros from '../../db/db_livros.json'
import Container from '../../components/Container'
import CardLivro from '../../components/CardLivro'
import style from './Home.module.css'

export default function Home() {
  return (
    <>
      <Container>
          <section className={`${style.CardsLivro} flex`}>
            {livros.map(livro => (
              <CardLivro {...livro} key={livro.id} />
            ))}
          </section>
      </Container>
    </>

  )
}
