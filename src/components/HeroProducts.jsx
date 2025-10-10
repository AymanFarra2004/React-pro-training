import { useState } from 'react';
import '../styles/heroProducts.css';
import appleIcon from '../assets/images/apple-icon.svg';
import heroProduct from '../assets/images/hero-product.svg';
import arrowIcon from '../assets/images/arrow2-icon.svg';

export default function HeroProducts() {
  return (
    <section className="hero-product">
      <HeroProductInfo />
      <SliderBtn />
      <HeroImg />
    </section>
  );
}

function HeroProductInfo() {
  return (
    <div className="heroProduct-info">
      <div>
        <img src={appleIcon} alt="apple icon" />
        <h3>iPhone 14 Series</h3>
      </div>
      <h2>Up to 10% off Voucher</h2>
      <button>
        Shop Now <img src={arrowIcon} alt="arrow icon" />
      </button>
    </div>
  );
}

function SliderBtn() {
  const [activeBtn, setActiveBtn] = useState('btn3');
  const activeBtnHandler = (btn) => {
    setActiveBtn(btn);
  };
  return (
    <div className="sliderBtn-container">
      <div
        onClick={() => activeBtnHandler('btn1')}
        className={`${activeBtn === 'btn1' ? 'active' : ''}`}
      ></div>
      <div
        onClick={() => activeBtnHandler('btn2')}
        className={`${activeBtn === 'btn2' ? 'active' : ''}`}
      ></div>
      <div
        onClick={() => activeBtnHandler('btn3')}
        className={`${activeBtn === 'btn3' ? 'active' : ''}`}
      ></div>
      <div
        onClick={() => activeBtnHandler('btn4')}
        className={`${activeBtn === 'btn4' ? 'active' : ''}`}
      ></div>
      <div
        onClick={() => activeBtnHandler('btn5')}
        className={`${activeBtn === 'btn5' ? 'active' : ''}`}
      ></div>
    </div>
  );
}

function HeroImg() {
  return <img src={heroProduct} alt="product image" />;
}
