import React, { useEffect, useState } from 'react'
import funbird from '../../assets/funbird.png'
import './CryptoCurrencies.css'
import { useContext } from 'react'
import { CoinContext } from '../../Context/CoinContext'

function CryptoCurrencies() {

  const {allCoin,currency} = useContext(CoinContext); 
  const[displayCoin,setDisplayCoin] = useState([]);
  const[input,setInput] = useState('');

  const inputHandler =(event)=>{
    setInput(event.target.value);
    if(event.target.value===""){ //when we clear search item next set allCoin again
      setDisplayCoin(allCoin);
    }

  }
  const searchHandler =async(event)=>{
    event.preventDefault();
    const coins = await allCoin.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLowerCase())

    })
    setDisplayCoin(coins);
  }


  useEffect(()=>{
    setDisplayCoin(allCoin);

  },[allCoin])

  return (
     <div className='home'>
        <div className='hero-layout'>
            {/* <div><img className='coin1'src={coin1}></img></div> */}
            <div className='hero'>
                <h1  >Crypto Currencies</h1>
                
               
                <div className='search-bar'>
                <img className='funbird'src={funbird}></img>
                <form onSubmit={searchHandler} action="/search" method="GET">


                     <input  onChange={inputHandler} list="coinlist"value={input} type="text" name="query" placeholder="Search Crypto..." required/>
                     <button  type="submit">Search</button>
                
                    <datalist id='coinlist'>
                      
                      {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}

                    </datalist>
                
                </form>
                </div>
            </div>
         
        </div>

         <div className='crypto-table'>
             <div className='table-layout'>
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p className='change'>24H Change %</p>
                <p className='market-cap'>Market Cap</p>
                <p>Total Volume</p>
                <p>Price Change 24H</p>
                <p>Max Supply</p>
            </div>
            {
              displayCoin.slice(0,50).map((item,index)=>(
                <div className="table-layout" key={index}>
                  <p>{item.market_cap_rank}</p>
                  <div>
                    <img src={item.image} alt=""/>
                    <p>{item.name +" - "+ item.symbol}</p>
                  </div>
                  <p>{currency.symbol}  {item.current_price.toLocaleString()}</p>
                  <p className={item.price_change_percentage_24h>0?"green":"red"}>
                    {Math.floor(item.price_change_percentage_24h*100)/100}
                  </p>
                  <p className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
                  <p className='total-volume'>{currency.symbol}{item.total_volume.toLocaleString()}</p>
                  <p className='price-change-24H'>{currency.symbol}{item.price_change_24h.toLocaleString()}</p>
                  <p className='max-supply'>{currency.symbol}{item.max_supply}</p>
                </div>
              ))
            }
        </div>
     </div>

  )
}

export default CryptoCurrencies
