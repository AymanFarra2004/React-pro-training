import '../styles/home.css';
import Header from './Header';
import SideBar from './SideBar';
import HeroProducts from './HeroProducts';
import TodaysProducts from './TodaysProducts';
import Categories from './categories';
import BestSellingProducts from './BestSellingProducts';
export default function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <main>
          <div className="home-mainContent">
            <SideBar />
            <HeroProducts />
          </div>
          <TodaysProducts />
          <Categories />
          <BestSellingProducts />
        </main>
      </div>
    </>
  );
}
