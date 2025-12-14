import '../styles/sideBar.css';
import { useState } from 'react';
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

  const [menuBtn, setMenuBtn] = useState(false);
  const handlesideBarBtn= ()=>{
setMenuBtn(!menuBtn)
  }
  return (
    <div className='sideBar-container'>
      
      <button className="sideBar-btn" onClick={handlesideBarBtn}>
        &#9776;
      </button>

      <aside className={`side-bar ${menuBtn ? 'active' : ''}`}>
        <button className='sideBar-closing' onClick={handlesideBarBtn}>X</button>
        <div className="sideBar-container">
          {items.map((item, index) => (
            <SideBarItem key={index} {...item} />
          ))}
        </div>
      </aside>
    </div>
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
