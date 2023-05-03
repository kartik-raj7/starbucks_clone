import React from 'react';
import style from './SliderBannerCard.module.scss';
import { Button } from 'antd';

const SliderBannerCard = ({ data }) => {
  // console.log(data);
  return (
    <div
      className={style.sliderBannerCard}
      style={{ backgroundImage: `url(${data.backgroundimage})` }}
    > 
    <div className={style.imagebox}>
        <img src={data.image} alt={data.title} className={style.images}/>
    </div>
    <div className={style.datadiv}>
      <h4>Presenting</h4>
      <h3>{data.title}</h3>
      <h4>{data.description}</h4>
      <div className={style.bottomdiv}>
        <div>
        <h5>Starting from</h5>
        <h3>₹{data.price}</h3>
        </div>
        <Button className={style.bannerbtn}>Order Now</Button>
      </div>
    </div>
      {/* other content */}
    </div>
  );
};

export default SliderBannerCard;