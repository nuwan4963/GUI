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
        <div className='home-des'>
         <h2>All-In-One Crypto & Bitcoin Tracker to Manage Your Portfolio More Efficiently </h2>
         <h4>We’re the only platform on the market that supports all major crypto platforms and  DeFi protocols.</h4>
           <div className='hero-des'>
            
            <div className='col-des'>
              <div className='row-des'>
                    <div className='row-first'> 
                        <img className="image"src='folder.png'></img>
                        <p className='text'>300+ Wallets/Exchanges</p>
                    </div>
                    </div>
                    <p>Track everything wherever you keep it: Binance, Trust Wallet, and others.</p>

                
              <div className='row-des'>
                    <div className='row-first'> 
                        <img className="image"src='bitcoin.png'></img>
                        <p className='text'>300+ Wallets/Exchanges</p>
                     </div>
                    </div>
                    <p>Track everything wherever you keep it: Binance, Trust Wallet, and others.</p>
               
              <div className='row-des'>
                    <div className='row-first'> 
                        <img className="image"src='cryptocurrency.png'></img>
                        <p className='text'>300+ Wallets/Exchanges</p>
                    </div>
                    </div>
                    <p>Track everything wherever you keep it: Binance, Trust Wallet, and others.</p>
                
                
  
            </div>
            <img className='image2'src='bigbinance.jpeg'></img>
            
            </div>
        </div>
        
      
    </div>
  )
}

export default Home
