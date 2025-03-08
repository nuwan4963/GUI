import React from 'react'
import './NavBar.css'
import logo from '../../assets/productimage.png'
import { CoinContext } from '../../Context/CoinContext'
import { useContext } from 'react'



const NavBar = () => {

    const {setCurrency} =useContext(CoinContext)

    const currencyHandler = (event)=>{
        switch(event.target.value){
            case "usd":{
                setCurrency({name:"usd", symbol:"$"});
                break;
            }
            case "eur":{
                setCurrency({name:"eur", symbol:"€"});
                break;
            }
            case "inr":{
                setCurrency({name:"lkr", symbol:"₨"});
                break;
            }
           default :{
                setCurrency({name:"usd", symbol:"$"});
                break;
            }
        }

    }

    return (
    <div className='navbar'>
        <a href='http://localhost:5173/'><img src={logo} alt="logo" className='logo'/></a>
        <ul>
            <li><a href="http://localhost:5173/cryptocurrencies">Crypto Currencies</a></li>
            <li><a href="http://localhost:5173/exchanges">Exchanges</a></li>
            <li>Pricing</li>
            <li><a href='http://localhost:5173/about'>About</a></li>
        </ul>
        
        <div className='nav-right'>

            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="lkr">LKR</option>

            </select>
            <button className='button-signup'><a href='http://localhost:5173/register'>Sign Up</a><img src=" " ></img></button>
            <a href="http://localhost:5173/login"><button className='button-login'>Login<img src=" " ></img></button></a>

        </div>
      
    </div>
  )
}

export default NavBar
