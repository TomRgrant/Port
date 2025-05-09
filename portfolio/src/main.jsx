import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/Global.css'
import Home from './Containers/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
