import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  Router  from './Router.jsx'
import { GlobalStyle } from './styles/GlobalStyle.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <Router/>
  </StrictMode>,
)
