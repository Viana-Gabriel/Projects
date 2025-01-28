import styled from "styled-components"

const ContainerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Container = ({children}) => {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}

export default Container