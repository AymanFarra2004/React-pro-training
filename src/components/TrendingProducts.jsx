import '../styles/trendingProducts.css';
import { Title } from './TodaysProducts';
import speakerImg from '../assets/images/speaker.svg';
export default function TrendingProducts() {
  return (
    <section className="trendingProducts-container">
      <TrendingProductInfo />
      <TrendingProductImg />
    </section>
  );
}
function TrendingProductInfo() {
  return (
    <article className="trendingProduct-info">
      <Title title="Categories" />
      <h1>Enhance Your Music Experience</h1>
      <TrendingProductTimer />
      <BuyNowBtn />
    </article>
  );
}
function TrendingProductTimer() {
  return (
    <div className="trendingProduct-timer">
      <div className="days-timer">
        <p>05</p>
        <span>Days</span>
      </div>
      <div className="hours-timer">
        <p>23</p>
        <span>Hours</span>
      </div>
      <div className="minutes-timer">
        <p>59</p>
        <span>Minutes</span>
      </div>
      <div className="secondes-timer">
        <p>38</p>
        <span>Secondes</span>
      </div>
    </div>
  );
}
function BuyNowBtn() {
    return(
        <button className='buyNow-btn'>Buy Now!</button>
    );
}


function TrendingProductImg() {
  return <article className="trendingProduct-img">
    <img src={speakerImg} alt='speaker image' />
    <div className='img-shadow'></div>
  </article>;
}
