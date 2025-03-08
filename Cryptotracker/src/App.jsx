
import React from 'react'
import NavBar from './Components/Nav/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Exchanges from './pages/exchanges/Exchanges'
import About from './pages/About/About'
import BinanceConnect from './pages/binanceConnect/BinanceConnect'
import MetaMaskConnect from './pages/metamastconnect/MetaMaskConnect'
import CoinBase from './pages/coinbase/CoinBase'
import CryptoCurrencies from './pages/cryptocurrencies/CryptoCurrencies'



const App = () => {
  return (
    <div className='app'>
      <NavBar/>
       
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login/' element={<Login/>}/> 
        <Route path='/register/' element={<Register/>}/> 
        <Route path='/exchanges/' element={<Exchanges/>}/>
        <Route path='/about/' element={<About/>}/>
        <Route path='/binanceconnect/' element={<BinanceConnect/>}/>
        <Route path='/metamaskconnect/' element={<MetaMaskConnect/>}/>
        <Route path='/coinbase/' element={<CoinBase/>}/>
        <Route path='cryptocurrencies/' element={<CryptoCurrencies/>}/>
      </Routes> 
    
      
      <Footer/>
      
      
    </div>
  )
}
export default App

