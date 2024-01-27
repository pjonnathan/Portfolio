import { useState } from 'react'
import Navbar from './componets/navbar/navbar'
import './App.css'
import Home from './componets/home/home'
import Sobremim from './componets/sobre mim/sobremim'
import Portifolio from './componets/portifolio/portifolio'
import Contato from './componets/contato/contato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="main">
        <Home/>
        <Sobremim/>
        <Portifolio/>
        <Contato/>
      </div>
      <div className="nav">
        <Navbar/>
      </div>
    </div>
  )
}

export default App
