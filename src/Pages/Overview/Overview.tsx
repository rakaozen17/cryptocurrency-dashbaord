import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/Cards'
import PriceChart from '../../Components/Chart/PriceChart';
import {CoinGeckoCoin} from '../../models/CoingeckoCoin';
import getCoinsByMarketCap from '../../services/CoinGeckoServices/getCoinsByMarketCap';
import { convertTimestampToDate, getCryptocurrencyPrice } from '../../services/CoinGeckoServices/getPriceofCoin'

import './Overview.css'

const Overview = () => {

  const [coins, setCoins] = useState<CoinGeckoCoin[]>([]);
  const [data, setData] = useState<{date:string, price:string}[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoinsByMarketCap(10,"usd");
      setCoins(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await getCryptocurrencyPrice('bitcoin', 'usd');
      const mappedResponse = response.prices.map((item) => ({
        date : convertTimestampToDate(item[0]),
        price : parseFloat(item[1]).toFixed(2)
      }))
      setData(mappedResponse.slice(mappedResponse.length-20, mappedResponse.length));
    }
    fetchData();
  }, []);

  console.log(data);

    return (
    <div className='Overview-pages'>
        <div className="overview-container">
            <div className="card-container">
               { coins.slice(5,10).map((items, index) => (<Card key={index} coinName={items.name} priceChange={items.current_price.toString()} percentageChange={items.price_change_percentage_24h.toString().substring(0,5)} imgUrl={items.image} /> ))}
            </div>
            <div className="row-container">
              <div className="chart-container">
                <PriceChart data={data} /> 
              </div>
              <div className="status-container"></div>    
            </div>
        </div>
    </div>
  )
}

export default Overview