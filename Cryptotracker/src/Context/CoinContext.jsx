
import { createContext, useEffect } from "react";

export const CoinContext = createContext();



const CoinContextProvider = (props) =>{

    const [allCoin,setAllCoin] = userState([]);
    const [currency,setCurrency] = useState({
        name: "usd",
        Symbol: "$"
    })

    const fetchAllCoin = async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Kv5J9yNifVJq6AuV7F691UTU'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));
    }


    useEffect(()=>{
        fetchAllCoin();

    },[currency])


    const contexValue = {
        allCoin, currency,setCurrency
    }
     
    return(
        <CoinContext.Provider value={contexValue}>

            {props.chldren}

        </CoinContext.Provider>

    )

}
export default CoinContextProvider;