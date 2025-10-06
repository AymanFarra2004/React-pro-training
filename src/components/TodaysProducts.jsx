import '../styles/todaysProducts.css';
import swappingArrow from '../assets/images/arrow2-black.svg';
import joystick from '../assets/images/joystick.png';
import RGBkeyboard from '../assets/images/rgb-keyboard.png';
import monitor from '../assets/images/monitor.png';
import chair from '../assets/images/chair.png';
import favouriteIcon from '../assets/images/favourites-icon.svg';
import eye from '../assets/images/eye.svg';
import fourStarsEvaluate from '../assets/images/FourStars-evaluate.svg';

export default function TodaysProducts() {
  return (
    <section className="today-products">
      <Title title="Today" />
      <div>
        <Timer />
        <SwappingArrows section="SwappingArrows" />
      </div>
      <Products />
    </section>
  );
}

function Title(props) {
  return (
    <div className={`${props.title}-title`}>
      <div className="square-shape"></div>
      <h1>{props.title}</h1>
    </div>
  );
}

function Timer() {
  return (
    <div className="todayProduct-timer">
      <h2>Flash Sales</h2>
      <div className="timer">
        <div className="days-timer">
          <span>Days</span>
          <p>03</p>
        </div>
        <span>:</span>
        <div className="hours-timer">
          <span>Hours</span>
          <p>23</p>
        </div>
        <span>:</span>
        <div className="minutes-timer">
          <span>Minutes</span>
          <p>19</p>
        </div>
        <span>:</span>
        <div className="seconds-timer">
          <span>Seconds</span>
          <p>56</p>
        </div>
      </div>
    </div>
  );
}

function SwappingArrows(props) {
  return (
    <div className={`swappingArrow-container-${props.section}`}>
      <button className="left-swappingArrow">
        <img src={swappingArrow} alt="left swapping arrow" />
      </button>
      <button className="right-swappingArrow">
        <img src={swappingArrow} alt="right swapping arrow" />
      </button>
    </div>
  );
}

function Products() {
  const productsImgs = [joystick, RGBkeyboard, monitor, chair];
  let productName = "Product's Name";
  let productPrice = 500;
  let discount = 40;
  return (
    <section className="todayProducts-container">
      <div className="todayProducts-section">
        {productsImgs.map((imgSrc, index) => (
          <Product
            img={imgSrc}
            id={index}
            discount={discount}
            title={productName}
            price={productPrice}
          />
        ))}
      </div>
        <button className="allProducts-btn">View All Products</button>
    </section>
  );
}

function Product(props) {
    
  return (
    <article className={`product-${props.id}`}>
      <div className="product-img">
        <img src={props.img} />
        <div className="discount">-{props.discount}%</div>
        <div className="favourite-btn">
          <img src={favouriteIcon} />
        </div>
        <div className="visbilty-btn">
          <img src={eye} />
        </div>
        <div className="addToCart-btn">
          <button>Add To Cart</button>
        </div>
      </div>

      <div className="product-info">
        <h2>{props.title}</h2>
        <p className="product-price">
          {"$"+(props.price - props.price * (props.discount / 100))}{' '}
          <span>{"$"+props.price}</span>
        </p>
        <div className="evaluate-part">
          <img src={fourStarsEvaluate} />
          <span>(55)</span>
        </div>
      </div>
    </article>
  );
}
