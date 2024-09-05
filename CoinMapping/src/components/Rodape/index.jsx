import { useLocation } from 'react-router-dom'

const Rodade = () => {
  const location = useLocation().pathname
  return (
    location === '/cadastro' || location === '/login' ?
      <></>
      :
      <footer className='h-[380px] bg-primary_color'>

      </footer>
  )
}

export default Rodade