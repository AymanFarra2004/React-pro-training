import '../styles/categories.css';
import { DepartmentTitle } from './TodaysProducts';
import { Title } from './TodaysProducts';
import { SwappingArrows } from './TodaysProducts';
import { useState } from 'react';
import { PhoneIcon } from '../assets/images/catigoreisIcons/CategoriesIcons.jsx';
import { ComputerIcon } from '../assets/images/catigoreisIcons/CategoriesIcons.jsx';
import { SmartWatchIcon } from '../assets/images/catigoreisIcons/CategoriesIcons.jsx';
import { CameraIcon } from '../assets/images/catigoreisIcons/CategoriesIcons.jsx';
import { HeadphoneIcon } from '../assets/images/catigoreisIcons/CategoriesIcons.jsx';
import { GamingIcon } from '../assets/images/catigoreisIcons/CategoriesIcons.jsx';

export default function Categories() {
  return (
    <section className="categories-conatiner">
      <DepartmentTitle title="Categories" className="categories-deptTitle" />
      <div>
        <Title title="Browse By Category" className="categories-title" />
        <SwappingArrows />
      </div>
      <CategoriesBox />
    </section>
  );
}

function CategoriesBox() {
  const categories = [
    { name: 'Phones', img: PhoneIcon },
    { name: 'Computers', img: ComputerIcon },
    { name: 'Smart Watch', img: SmartWatchIcon },
    { name: 'Camera', img: CameraIcon },
    { name: 'Headphones', img: HeadphoneIcon },
    { name: 'Gaming', img: GamingIcon },
  ];
  return (
    <div className="categories-flexbox">
      {categories.map((category, index) => (
        <Category key={index} imgSrc={category.img} id={index} name={category.name} />
      ))}
    </div>
  );
}

function Category(props) {
    const [isSelected, setSelected] = useState(false);
    const updateSelected = ()=>{
        setSelected(!isSelected);
    }
    const setColor = isSelected ? "white" : "black";
  return (
    <div className={`${props.name}-category category ${isSelected ? "active" : ""}`} onClick={updateSelected}>
      <div className="icon"><props.imgSrc color={setColor}/></div>
      <h2 className={`${isSelected ? "active" : ""}`}>{`${props.name}`}</h2>
    </div>
  );
}
