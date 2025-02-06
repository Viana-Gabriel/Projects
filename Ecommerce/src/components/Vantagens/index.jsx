import React from 'react'
import Container from '@/components/Container'
import style from './Vantagens.module.css'

const Vantagens = () => {
  const vantagens = [
    {
      id: 1,
      tiulo: 'Entrega grátis em Sao Paulo',
      decricao: 'Acima de R$ 399,99'
    },
    {
      id: 2,
      tiulo: 'Pague parcelado',
      decricao: 'Até 12x sem juros'
    },
    {
      id: 3,
      tiulo: 'Loja 100% segura',
      decricao: 'Seus dados sempre protegidos'
    },
    {
      id: 4,
      tiulo: 'Precisa de Ajuda?',
      decricao: 'Suporte via whatsapp'
    }
  ]
  return (
    <Container classname={style.container_vantagens}>
      {vantagens.map(vantagem => (
        <div key={vantagem.id} className={style.vantagem}>
          <div>
              <img src={`/assets/vantagens/icons/${vantagem.id}.svg`} alt="" />
          </div>
          <div>
            <h2>{vantagem.tiulo}</h2>
            <p>{vantagem.decricao}</p>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default Vantagens