import axios from 'axios';
import { MarketChartData } from '../../models/CryptoPrice';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export async function getCryptocurrencyPrice(id: string, currency: string):Promise<MarketChartData>{
  const response = await axios.get(`${COINGECKO_API_URL}/coins/${id}/market_chart`, {
    params: {
      vs_currency: currency,
      days: 'max',
    },
  });
  return response.data;
}

export function convertTimestampToDate(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
    day: '2-digit',
    month: 'short',
  });
}