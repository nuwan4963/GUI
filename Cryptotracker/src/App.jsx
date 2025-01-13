import React from 'react'
import NavBar from './Components/Nav/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import SocialFooter from './Components/Socialfooter/SocialFooter'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div className='app'>
      <NavBar/>
       
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/' element={<Coin/>}/> 
      </Routes> 

      <SocialFooter/>
      <Footer/>
      
      
    </div>
  )
}
export default App

