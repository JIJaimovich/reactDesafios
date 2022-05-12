import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'



function App() {  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
      {/* <ItemCount stock={5} inicio={0}/> */}
    </div>    
  )
}

export default App
