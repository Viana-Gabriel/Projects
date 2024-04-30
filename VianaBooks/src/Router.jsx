import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import PageLivro from './Pages/PageLivro'
import NaoEncontrado from './Pages/NaoEncontrada'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import CadastrarLivro from './Pages/Cadastrar'
import Favoritos from './Pages/Favoritos'
import FavoritesProvider from './Contexts/Favorites'

function Router() {

  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <FavoritesProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path='*' element={<NaoEncontrado />} />
            <Route path='/CadastrarLivros' element={<CadastrarLivro />} />
            <Route path='/Favoritos' element={<Favoritos />} />
            <Route path='/Livros/:id' element={<PageLivro />} />
          </Routes>
        </FavoritesProvider>
        <Rodape />
      </BrowserRouter>

    </>
  )
}

export default Router
