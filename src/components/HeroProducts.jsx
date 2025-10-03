import { useEffect } from "react";
import '../styles/heroProducts.css';
import appleIcon from '../assets/images/apple-icon.svg';
import heroProduct from '../assets/images/hero-product.svg';
import arrowIcon from '../assets/images/arrow2-icon.svg';


export default function HeroProducts() {
   useEffect(() => {
    const sliderBtns = document.querySelectorAll('.sliderBtn-container > div');
    sliderBtns.forEach((el, index) => {
      el.addEventListener('click', () => {
        sliderBtns.forEach((el) => el.classList.remove('active'));
        sliderBtns[index].classList.add('active');
      });
    });
  }, []); 
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
  return (
    <div className="sliderBtn-container">
      <div></div>
      <div></div>
      <div className="active"></div>
      <div></div>
      <div></div>
    </div>
  );
}

function HeroImg() {
  return <img src={heroProduct} alt="product image" />;
}
