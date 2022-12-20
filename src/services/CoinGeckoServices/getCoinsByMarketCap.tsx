import axios from "axios";
import { CoinGeckoCoin } from "../../models/CoingeckoCoin";


const getCoinsByMarketCap = async (
  limit:10,
  currency:"usd"
): Promise<CoinGeckoCoin[]> => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets`,
    {
      params: {
        per_page: limit,
        vs_currency: currency,
      },
    }
  );
  return response.data;
};

export default getCoinsByMarketCap;