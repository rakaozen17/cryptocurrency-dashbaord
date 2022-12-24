import React from 'react';
import './Cards.css'

interface CardProps {
  coinName: string;
  priceChange: string;
  percentageChange: string;
  imgUrl : string
}

const Card: React.FC<CardProps> = ({ coinName, priceChange, percentageChange,imgUrl }) => {
  return (
    <div className={`card`}>
      <div className="card-con">
        <div className="card-top">
              <div className="img-card-container">
                  <img src={imgUrl} alt="" className="coin-image" />
              </div>
          </div>
          <div className="card-mid">
              <p className="card-title">{coinName}</p>
          </div>
          <div className="card-bottom">
              <div className="card-bottom-container">
                  <p className="card-price">${priceChange}</p>
                  <p className="card-description">{percentageChange}%</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Card;