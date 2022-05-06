import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer'



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer name="Seba" />
    </div>
    
    
  )
}

export default App
