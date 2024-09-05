import Titulo from '@/components/Titulo'
import recursos from '@/mocks/recursos.json'
import { useState } from 'react'
import Recurso from './Recurso'
import RecursoFiltrado from './RecursoFiltrado'

const Recursos = () => {
  const [recursoFiltrado, setRecursoFiltrado] = useState([])

  const FiltrarRecurso = (id) => {
    const recursoSelecionado = recursos.filter(recurso => recurso.id === id)
    setRecursoFiltrado(recursoSelecionado)
  }

  return (
    <section id='recursos' className='max-w-[1400px] mx-auto py-8 px-4 '>
      <Titulo>Recursos Oferecidos</Titulo>
      <nav className='flex justify-center gap-1 my-4 sm:gap-16'>
        {recursos.map(item => (
          <Recurso key={item.id} {...item} FiltrarRecurso={FiltrarRecurso} />
        ))}
      </nav>
      <RecursoFiltrado recursoFiltrado={recursoFiltrado} />
    </section>
  )
}

export default Recursos