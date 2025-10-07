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
      <Products imgs={[jacket, handBag, rgbGaming, table]} viewAllBtn={false} />
    </section>
  );
}

function ViewAllButton() {
  return <button className="viewAll-btn">View All</button>;
}
