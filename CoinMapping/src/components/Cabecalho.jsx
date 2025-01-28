import styled from "styled-components"
import logo from '@/assets/images/Logo.svg'
import { Header, NavHeader } from "@/styles/CabecalhoStyle"



const Cabecalho = () => {
  return (
    <Header>
        <div>
          <img src={logo} alt="" />
        </div>
        <nav>
          <NavHeader>
            
          </NavHeader>
        </nav>
    </Header>
  )
}


export default Cabecalho