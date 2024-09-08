const Recurso = ({ id, titulo, icon, FiltrarRecurso }) => {
  return (
    <button className={'flex flex-col items-center w-[25%] sm:w-auto hover:brightness-75'} onClick={() => FiltrarRecurso(id)}>
      <div className={'flex items-center justify-center border-2 border-primary_color rounded-full w-[75px] h-[75px] '}>
        <img src={icon} alt="" className={'w-[50px] h-[50px]'} />
      </div>
      <p className="text-[12px] text-primary_color font-semibold lg:text-lg">{titulo}</p>
    </button>
  )
}

export default Recurso