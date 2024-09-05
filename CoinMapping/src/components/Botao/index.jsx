// eslint-disable-next-line react/prop-types
const Botao = ({children}) => {
  return (
    <button className={'bg-primary_color text-white px-8 py-1 my-8'}>
      {children}
    </button>
  )
}

export default Botao