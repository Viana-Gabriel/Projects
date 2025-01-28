import React, { useEffect, useState } from 'react'

const Home = () => {
  const [tamanhoJanela,setTamanhoJanela] = useState(0)
  useEffect(() => {
    setTamanhoJanela(window.innerWidth)
  }, [tamanhoJanela])


  return (
   <> <div>Home</div>
    {tamanhoJanela}</>
  )
}

export default Home