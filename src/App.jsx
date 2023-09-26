import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import CharSheet from './components/charSheet/CharSheet'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <Header/>
        <Home/>
        <CharSheet/>
      </div>
     
  )
}

export default App
