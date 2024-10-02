import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Saludo, SaludoMod, Contenedor, ContadorState } from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <div>
    <Saludo /> <br />
    <SaludoMod /> <br />
    <Contenedor /> <br />
    <ContadorState />
  </div>
  //</StrictMode>,
)




