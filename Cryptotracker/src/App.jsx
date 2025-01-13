import React from 'react'
import NavBar from './Components/Nav/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './Components/Footer/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'



const App = () => {
  return (
    <div className='app'>
      <NavBar/>
       
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/' element={<Coin/>}/> 
        <Route path='/login/' element={<Login/>}/> 
        <Route path='/register/' element={<Register/>}/> 
      </Routes> 

      
      <Footer/>
      
      
    </div>
  )
}
export default App

