import React from 'react'
import Bannner from './components/Banner/Bannner'
import Servicios from './components/Servicios/Servicios'
import { Productos } from './components/Productos/Productos'


const App = () => {
  return (
    <div>
      <Bannner/>
      <Servicios/>
      <Productos/>
    </div>
  )
}

export default App