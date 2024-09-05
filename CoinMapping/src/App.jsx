import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "@/Pages/Home"
import ErrorPage from "@/Pages/Error"
import LoginPage from "@/Pages/Login"
import CadastroPage from "@/Pages/Cadastro"
import QuemSomosPage from "@/Pages/QuemSomos"
import Cabecalho from "@/components/Cabecalho"
import Rodade from "@/components/Rodape"


function App() {

  return (
    <BrowserRouter>
      <Cabecalho/>
      <Routes>
        <Route index element = {<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<CadastroPage/>}/>
        <Route path="/quemsomos" element = {<QuemSomosPage/>}/>
        <Route path="*" element = {<ErrorPage/>}/>
      </Routes>
      <Rodade/>
    </BrowserRouter>
  )
}

export default App
