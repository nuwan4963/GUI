import React from 'react'
import './Home.css'
//import binance from '../../assets/binance.png'
import funbird from '../../assets/funbird.png'
import coin from '../../assets/coin.png'

function Home() {
  return (
     <div className='home'>
        <div className='hero-layout'>
            {/* <div><img className='funbird'src></img></div>  */}
            <div className='hero'>
                <h1>Largest <br/> Crypto Marketplace</h1>
                <p>Welcome to the World's Largest Cryptocurrency Marketplace. Sign up to explore more cryptos </p>
                <div className='search-bar'>
                <img className='funbird'src={funbird}></img>
                <form action="/search" method="GET">
                     
                     <input  type="text" name="query" placeholder="Search Crypto..."/>
                     <button  type="submit">Search</button>
                </form>
                </div>
            </div>
           {/* <div><img src={binance}></img></div> */}
        </div>

         <div className='crypto-table'>
             <div className='table-layout'>
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p>24H Change</p>
                <p style={{textAlign:"right"}}>Market Cap</p>
            </div>
        </div>
     </div>
    // <div className='home'>
    //     <div className='hero'>
    //         <h1>Largest <br/> Crypto Marketplace</h1>
    //         <p>Welcome to the World's Largest Cryptocurrency Marketplace. Sign up to explore more cryptos </p>

    //         <form action="/search" method="GET">
    //             <input  type="text" name="query" placeholder="Search Crypto..."/>
    //             <button  type="submit">Search</button>
    //         </form>
    //     </div>     
    // </div>

  )
}

export default Home
