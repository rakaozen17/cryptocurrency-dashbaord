import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Label } from 'recharts';
import './PriceChart.css'

// export interface ChartData {
//   date: string;
//   price: number;
// }

const PriceChart = ({ data }: { data: {date:string, price:string}[] }) => {
  const parsedData = data.map(d => ({
    ...d,
    price: parseInt(d.price),
  }));

  const minPrice = Math.min(...parsedData.map(d => d.price));
  const maxPrice = Math.max(...parsedData.map(d => d.price));

  const minPriceRounded = Math.round(minPrice / 100) * 100;
  const maxPriceRounded = Math.round(maxPrice / 100) * 100;
  
  const yAxisDomain = [];
    let start = minPriceRounded - 100;

  while (start < maxPriceRounded + 100) {
    yAxisDomain.push(start);
    start += 100;
  }

  const tickFormatter = (value: any, index: number) => {
    if (index === 0) return '';
    return value;
  };



  return (
    <div className="chart-container">
    <div className="chart-detail">
      <div className="chart-title">Price</div>
      <div className="chart-description">The price of Bitcoin over the last few days</div>

    </div>
    <div className="chart-div">
    <AreaChart
      width={750}
      height={300}
      data={parsedData}
      margin={{ top: 10, right: 10, bottom: 10, left: 20 }}
      style={{
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: '#171C26',
        padding: 10,
        borderRadius: 10,
      }}
    >
      <Area type="monotone" dataKey="price" stroke="url(#linearGradientStroke)" strokeWidth={2} fill="url(#linearGradient)" dot={false} >
        {/* <LabelList dataKey="price" position="top" style={{ fontSize: 10 }} /> */}
      </Area>
      <XAxis dataKey="date" axisLine={false} tickLine={false} />
      <YAxis
          domain={yAxisDomain}
          tickMargin={8}
          tickLine={false}
          tickCount={yAxisDomain.length}
          axisLine={false}
        >
        <Label
          value="Price (USD)"
          position="insideLeft"  
          angle={-90}
          style={{ textAnchor: 'middle', fontSize: 14, fill: '#777', margin:'50px'}}
          dx={-20}
        />
      </YAxis>

      <Tooltip />
      <defs>
        <linearGradient id="linearGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2D2039" />
          <stop offset="100%" stopColor="#1A2234" />
        </linearGradient>
        <linearGradient id="linearGradientStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="blue" />
          <stop offset="100%" stopColor="purple" />
      </linearGradient>
      </defs>
    </AreaChart>
    </div>
    </div>
  );
};

export default PriceChart;
