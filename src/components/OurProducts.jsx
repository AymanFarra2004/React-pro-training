import '../styles/ourProducts.css';
import { DepartmentTitle } from './TodaysProducts';
import { Title } from './TodaysProducts';
import { SwappingArrows } from './TodaysProducts';
import { Products } from './TodaysProducts';
import dogFood from '../assets/images/dog-food.svg';
import canonCamer from '../assets/images/canon-camera.svg';
import gamingLaoptop from '../assets/images/gaming-laptop.svg';
import curology from '../assets/images/curology.svg';
import carToy from '../assets/images/car-toy.svg';
import soccerShoes from '../assets/images/soccer-shoes.svg';
import gamepad1 from '../assets/images/gamepad1.svg';
import jacket1 from '../assets/images/jacket1.svg';
export default function OurProducts() {
  return (
    <section className="ourProducts-container">
      <DepartmentTitle title="Our Products" />
      <div>
        <Title title="Explore Our Products" />
        <SwappingArrows />
      </div>
      <Products
        products={[
          {
            id: 1,
            name: 'Breed Dry Dog Food',
            price: 100,
            discount: 0,
            img: dogFood,
          },
          {
            id: 2,
            name: 'CANON EOS DSLR Camera',
            price: 360,
            discount: 0,
            img: canonCamer,
          },
          {
            id: 3,
            name: 'ASUS FHD Gaming Laptop',
            price: 700,
            discount: 0,
            img: gamingLaoptop,
          },
          {
            id: 4,
            name: 'Curology Product Set',
            price: 500,
            discount: 0,
            img: curology,
          },
        ]}
        viewAllBtn={false}
        isDiscountImg={false}
        isDiscountText={false}
        colorSwitch={false}
      />
      <Products
        products={[
          {
            id: 1,
            name: 'Kids Electric Car',
            price: 960,
            discount: 0,
            img: carToy,
            colors: {
              color1: '#FB1314',
              color2: '#DB4444',
            },
          },
          {
            id: 2,
            name: 'Jr. Zoom Soccer Cleats',
            price: 1160,
            discount: 0,
            img: soccerShoes,
            colors: {
              color1: '#EEFF61',
              color2: '#DB4444',
            },
          },
          {
            id: 3,
            name: 'GP11 Shooter USB Gamepad',
            price: 660,
            discount: 0,
            img: gamepad1,
            colors: {
              color1: '#000000',
              color2: '#DB4444',
            },
          },
          {
            id: 4,
            name: 'Quilted Satin Jacket',
            price: 660,
            discount: 0,
            img: jacket1,
            colors: {
              color1: '#000000',
              color2: '#184A48',
            },
          },
        ]}
        viewAllBtn={true}
        isDiscountImg={false}
        isDiscountText={false}
        colorSwitch={true}
      />
    </section>
  );
}
