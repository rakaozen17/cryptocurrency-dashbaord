import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/Cards'
import {CoinGeckoCoin} from '../../models/CoingeckoCoin';
import getCoinsByMarketCap from '../../services/CoinGeckoServices/getCoinsByMarketCap';

import './Overview.css'

const Overview = () => {

  const [coins, setCoins] = useState<CoinGeckoCoin[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoinsByMarketCap(10,"usd");
      setCoins(data);
    };
    fetchData();
  }, []);

    return (
    <div className='Overview-pages'>
        <div className="overview-container">
            <div className="card-container">
               { coins.slice(4,8).map((items, index) => (<Card key={index} coinName={items.name} priceChange={items.current_price.toString()} percentageChange={items.price_change_percentage_24h.toString()} imgUrl={items.image}/> ))}
            </div>
        </div>
    </div>
  )
}

export default Overview