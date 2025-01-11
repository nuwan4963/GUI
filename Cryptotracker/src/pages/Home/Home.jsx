import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='hero'>
            <h1>Largest <br/> Crypto Marketplace</h1>
            <p>Welcome to the World's Largest Cryptocurrency Marketplace. Sign up to explore more cryptos </p>

            <form action="/search" method="GET">
                <input  type="text" name="query" placeholder="Search Crypto..."/>
                <button  type="submit">Search</button>
            </form>
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
  )
}

export default Home
