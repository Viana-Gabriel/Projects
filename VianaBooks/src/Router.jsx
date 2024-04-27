import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import PageLivro from './Pages/PageLivro'
import NaoEncontrado from './Pages/NaoEncontrada'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

function Router() {

  return (
    <>
      <BrowserRouter>
        <Cabecalho/>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='*' element={<NaoEncontrado/>}/>
          <Route path='/Livros/:id' element={<PageLivro/>}/>
        </Routes>
      </BrowserRouter>
      <Rodape/>
    </>
  )
}

export default Router
