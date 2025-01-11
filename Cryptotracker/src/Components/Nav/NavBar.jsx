import React from 'react'
import './NavBar.css'
import logo from '../../assets/productimage.png'
//import { CoinContext } from '../../context/CoinContext'


const NavBar = () => {

    return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <ul>
            <li>Crypto Currencies</li>
            <li>Exchanges</li>
            <li>Commiunity</li>
            <li>More</li>
        </ul>
        
        <div className='nav-right'>

            <select >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="lkr">LKR</option>

            </select>
            <button>Sign Up<img src=" " alt=""></img></button>

        </div>
      
    </div>
  )
}

export default NavBar
