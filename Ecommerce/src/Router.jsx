import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cabecalho from "@/components/Cabecalho"
import PaginaNaoEncontrada from "./pages/naoencontrada"
import Home from "./pages/home"
import CarrinhoPage from "./pages/cart"
import ProductPage from "./pages/product"
import ProdutosBuscados from "./pages/searchProduct"

function Router() {
  return (
   <BrowserRouter>
      <Cabecalho/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/login" element = {<>pagina login</>}/>
        <Route path="/cadastro" element = {<>Pagina cadastro</>}/>
        <Route path="/produtos" element={<ProdutosBuscados/>}/>
        <Route path="/produtos/:id" element={<ProductPage/>}/>
        <Route path="/carrinho" element={<CarrinhoPage/>}/>
        <Route path="/salvo" element={<>pagina salvos</>}/>
        <Route path="*" element={<PaginaNaoEncontrada/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default Router
