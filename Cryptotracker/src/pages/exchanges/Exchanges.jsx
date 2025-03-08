
import './Exchanges.css'
import React from 'react'

function Exchanges() {
  return (

    <div className='exchange'>
        <div className='exchange-top'>
            <div className='title-exch'>
            <h1>Manage Your all wallets <br/> & <br/>Exchanges from One Place</h1>
            </div>
            <p>Connect your entire portfolio to track, buy, swap, and stake your assets.</p>
            <div className='portfolio-section'>
               <a href='http://localhost:5173/metamaskconnect'>
                <div className='card-first'>
                <img className='connect-exch'src='metamask.png'></img>         
                <button className='button-exchange'>Connect</button>
               </div>
               </a>

              <a href='http://localhost:5173/binanceconnect'>
               <div className='card-first'>
                <img className='connect-exch'src='binance.png'></img>
                <button className='button-exchange'>Connect</button>
               </div>
               </a>

               <a href="http://localhost:5173/coinbase">
               <div className='card-first'>
                <img className='connect-exch'src='coinbase.png'></img>
                <button className='button-exchange'>Connect</button>
               </div>
               </a>

               <a href=''>
               <div className='card-first'>
                <img className='connect-exch' src='connect.svg'></img>
                <button className='button-exchange' >Others</button>
               </div>
               </a>

            </div>
        </div>
      
    </div>
  )
}

export default Exchanges
