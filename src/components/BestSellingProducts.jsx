import '../styles/bestSellingProducts.css';
import { DepartmentTitle } from './TodaysProducts';
import { Title } from './TodaysProducts';
import { Products } from './TodaysProducts';
import jacket from '../assets/images/jacket.png';
import handBag from '../assets/images/hand-bag.png';
import rgbGaming from '../assets/images/rgb-gaming.png';
import table from '../assets/images/table.png';
export default function BestSellingProducts() {
  return (
    <section className="bestSellingProducts-container">
      <DepartmentTitle
        title="This Month"
        className="bestSellingProducts-deptTitle"
      />
      <div>
        <Title
          title="Best Selling Products"
          className="bestSellingProducts-title"
        />
        <ViewAllButton />
      </div>
      <Products
        products={
          [{
            id: 1,
            name: 'The north coat',
            price: 360,
            discount: 27,
            img: jacket,
          },
          {
            id: 2,
            name: 'Gucci duffle bag',
            price: 1160,
            discount: 22,
            img: handBag,
          },
          {
            id: 3,
            name: 'RGB liquid CPU Cooler',
            price: 160,
            discount: 20,
            img: rgbGaming,
          },
          {
            id: 4,
            name: 'Small BookSelf',
            price: 360,
            discount: 25,
            img: table,
          }]
        }
        viewAllBtn={false}
        isDiscountImg={false}
        isDiscountText={true}
        colorSwitch={false}
      />
    </section>
  );
}

function ViewAllButton() {
  return <button className="viewAll-btn">View All</button>;
}
