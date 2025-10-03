import '../styles/sideBar.css';
import arrowIcon from '../assets/images/arrow-icon.svg';
export default function SideBar() {
  const items = [
    { label: "Women's Fashion", hasArrow: true },
    { label: "Men's Fashion", hasArrow: true },
    { label: 'Electronics' },
    { label: 'Home & Lifestyle' },
    { label: 'Sports & Outdoor' },
    { label: "Baby's & Toys" },
    { label: 'Groceries & Pets' },
    { label: 'Health & Beauty' },
  ];
  return (
    <aside className="side-bar">
      {/* <WomensFashion />
      <MensFashion />
      <Electronics />
      <HomeLifestyle />
      <Medicine />
      <SportsOutdoor />
      <BabysToys />
      <GroceriesPets />
      <HealthBeauty /> */}
      <div className="sideBar-container">
        {items.map((item, index) => (
          <SideBarItem key={index} {...item} />
        ))}
      </div>
    </aside>
  );
}
function SideBarItem({ label, hasArrow }) {
  return (
    <button className="sideBar-item">
      <h3>{label}</h3>
      {hasArrow && <img src={arrowIcon} alt="arrow icon" />}
    </button>
  );
}
/* function WomensFashion() {
  return (
    <div className="women-fashion">
      <h3>Women's Fashion</h3>
        <img src={arrowIcon} />
    </div>
  );
}
function MensFashion() {
  return <div className="women-fashion">
      <h3>Men's Fashion</h3>
        <img src={arrowIcon} />
    </div>;
}
function Electronics() {
  return <h3>Electronics</h3>;
}
function HomeLifestyle() {
  return <h3>Home & Lifestyle</h3>;
}
function Medicine() {
  return <h3>Medicine</h3>;
}
function SportsOutdoor() {
  return <h3>Sports & Outdoor</h3>;
}
function BabysToys() {
  return <h3>Baby's & Toys</h3>;
}
function GroceriesPets() {
  return <h3>Groceries & Pets</h3>;
}
function HealthBeauty() {
  return <h3>Health & Beauty</h3>;
}
 */
