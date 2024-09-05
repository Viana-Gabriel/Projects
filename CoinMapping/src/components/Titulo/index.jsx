
// eslint-disable-next-line react/prop-types
const Titulo = ({ children, alinhamento }) => {
  return (
    <h2 className={` text-${alinhamento} text-primary_color font-bold text-[30px] my-8`}>
      {children}
    </h2>
  )
}

export default Titulo