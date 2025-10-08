import '../styles/todaysProducts.css';
import '../styles/ourProducts.css';
import swappingArrow from '../assets/images/arrow2-black.svg';
import joystick from '../assets/images/joystick.png';
import RGBkeyboard from '../assets/images/rgb-keyboard.png';
import monitor from '../assets/images/monitor.png';
import chair from '../assets/images/chair.png';
import favouriteIcon from '../assets/images/favourites-icon.svg';
import eye from '../assets/images/eye.svg';
import fourStarsEvaluate from '../assets/images/FourStars-evaluate.svg';
import { useState } from 'react';

export default function TodaysProducts() {
  return (
    <section className="today-products">
      <DepartmentTitle title="Today" />
      <div>
        <Title title="Flash Sales" />
        <Timer />
        <SwappingArrows section="todayProducts" />
      </div>
      <Products
        products={[
          {
            id: 1,
            name: 'HAVIT HV-G92 Gamepad',
            price: 160,
            discount: 40,
            img: joystick,
          },
          {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            price: 1160,
            discount: 35,
            img: RGBkeyboard,
          },
          {
            id: 3,
            name: 'IPS LCD Gaming Monitor',
            price: 400,
            discount: 30,
            img: monitor,
          },
          {
            id: 4,
            name: 'S-Series Comfort Chair ',
            price: 400,
            discount: 25,
            img: chair,
          },
        ]}
        viewAllBtn={true}
        isDiscountImg={true}
        isDiscountText={true}
        colorSwitch={false}
      />
    </section>
  );
}

export function DepartmentTitle(props) {
  return (
    <div className={`${props.title}-title dept-title`}>
      <div className="square-shape"></div>
      <h1>{props.title}</h1>
    </div>
  );
}
export function Title(props) {
  return <h2 className="title">{props.title}</h2>;
}
function Timer() {
  return (
    <div className="todayProduct-timer">
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
  );
}

export function SwappingArrows(props) {
  return (
    <div
      className={`swappingArrow-container-${props.section} swappingArrow-container`}
    >
      <button className="left-swappingArrow">
        <img src={swappingArrow} alt="left swapping arrow" />
      </button>
      <button className="right-swappingArrow">
        <img src={swappingArrow} alt="right swapping arrow" />
      </button>
    </div>
  );
}

export function Products(props) {
  const products = props.products;

  return (
    <section className="todayProducts-container">
      <div className="todayProducts-section">
        {products.map((product, index) => (
          <Product
            key={index}
            img={product.img}
            id={product.id}
            discount={product.discount}
            isDiscountImg={props.isDiscountImg}
            isDiscountText={props.isDiscountText}
            title={product.name}
            price={product.price}
            colorSwitch={props.colorSwitch}
            color1={product.colors?.color1}
            color2={product.colors?.color2}
          />
        ))}
      </div>
      {props.viewAllBtn && (
        <button className="allProducts-btn">View All Products</button>
      )}
    </section>
  );
}

function Product(props) {
  const [activeColor, setActiveColor] = useState('color-1');

  return (
    <article className={`product-${props.id}`}>
      <div className="product-img">
        <img src={props.img} alt={`${props.img} image`} />
        {props.isDiscountImg && (
          <div className="discount">-{props.discount}%</div>
        )}
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
        <div className={!props.isDiscountText ? 'product-info-discount' : ''}>
          <p className="product-price">
            {'$' + (props.price - props.price * (props.discount / 100))}{' '}
            {props.isDiscountText && <span>{'$' + props.price}</span>}
          </p>
          <div className="evaluate-part">
            <img src={fourStarsEvaluate} />
            <span>(55)</span>
          </div>
        </div>
        {props.colorSwitch && (
          <div className="product-color-switch">
            <button
              className={`product-color-1 ${
                activeColor === 'color-1' ? 'active' : ''
              }`}
              onClick={() => setActiveColor('color-1')}
              style={{ backgroundColor: props.color1 }}
            ></button>
            <button
              className={`product-color-2 ${
                activeColor === 'color-2' ? 'active' : ''
              }`}
              onClick={() => setActiveColor('color-2')}
              style={{ backgroundColor: props.color2 }}
            ></button>
          </div>
        )}
      </div>
    </article>
  );
}
