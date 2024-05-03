import { Link } from 'react-router-dom'
import Container from '../../components/Container'

export default function NaoEncontrado() {
  return (
    <Container>
      <div>Nao encontrado</div>
      <Link to={'/'}>
          Voltar para a Home
        </Link>
    </Container>
  )
}
