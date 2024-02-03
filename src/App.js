import React from 'react'
import Bannner from './components/Banner/Bannner'
import Servicios from './components/Servicios/Servicios'
import { Productos } from './components/Productos/Productos'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Bannner/>
      <Servicios/>
      <Productos/>
      <Footer/>
    </div>
  )
}

export default App