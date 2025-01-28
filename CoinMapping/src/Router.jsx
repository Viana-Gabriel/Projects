import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cabecalho from './components/Cabecalho'

function Router() {
  return (
    <BrowserRouter>
      <Cabecalho/>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>

  )

}

export default Router
