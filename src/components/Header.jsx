import '../styles/header.css';
import searchIcon from '../assets/images/search-icon.svg';
import favouritesIcon from '../assets/images/favourites-icon.svg';
import cartIcon from '../assets/images/cart-icon.svg';
import { useState } from 'react';
export default function Header() {
  return (
    <header className="header">
      <TopHeader />
      <BottomHeader />
      <div className="header-underLine"></div>
    </header>
  );
}

function TopHeader() {
  return (
    <div className="topHeader-container">
      <section className="top-header">
        <div className="offers">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button>shopNow</button>
        </div>
        <div className="langauge-toggle">
          <select id="lang">
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </section>
    </div>
  );
}

function BottomHeader() {
  return (
    <div className="bottomHeader-container">
      <section className="bottom-header">
        <Logo />
        <div className="menu-toggle"></div>
        <NavBar />
        <SearchBar />
        <UserActions />
      </section>
    </div>
  );
}
function Logo() {
  return <h1>Exclusive</h1>;
}
function NavBar() {
  const [navBarBtn, setNavBarBtn] = useState(false);
  return (
    <div className="nav-bar">

        <button className="navBar-btn" onClick={() => setNavBarBtn(!navBarBtn)}>
          &#9776;
        </button>
      

      <nav className={`header-nav ${navBarBtn ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#signup">Sign Up</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="What are you looking for?" />
      <button>
        <img src={searchIcon} alt="search icon" />
      </button>
    </div>
  );
}
function UserActions() {
  return (
    <div className="user-actions">
      <img src={favouritesIcon} alt="favourites icon" />
      <img src={cartIcon} alt="cart icon" />
    </div>
  );
}
