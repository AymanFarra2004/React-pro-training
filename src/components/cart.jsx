import '../styles/cart.css';
import monitor from '../assets/images/monitor.png';
import joystick from '../assets/images/joystick.png';
import { Link } from 'react-router';

export default function CartPage() {
  const cartItems = [
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, img: monitor },
    { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, img: joystick },
  ];

  return (
    <div className="cart-container">
      <nav className="breadcrumb">
       <Link to="/"> Home </Link> / <span>Cart</span>
      </nav>

      <CartTable cartItems={cartItems} />
      <CartACtionBtns />
      <CartBottom />
    </div>
  );
}

function CartTable({ cartItems }) {
  return (
    <div className="cart-table">
      <div className="table-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {cartItems.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
}

function CartItem({ item }) {
  return (
    <div key={item.id} className="table-row">
      <div className="product-info-cart">
        <div className="product-img-cart">
          <button className="remove-btn">×</button>
          <img src={item.img} alt={item.name} />
        </div>
        {item.name}
      </div>
      <div className="product-price">${item.price}</div>
      <div className="product-quantity">
        <input type="number" defaultValue={item.quantity} min="1" />
      </div>
      <div className="product-subtotal">${item.price * item.quantity}</div>
    </div>
  );
}

function CartACtionBtns() {
  return (
    <div className="cart-actions">
      <Link to="/">
        <button className="btn-secondary">Return To Shop</button>
      </Link>
      <button className="btn-secondary">Update Cart</button>
    </div>
  );
}

function CartBottom() {
  return (
    <div className="cart-bottom">
      <div className="coupon-section">
        <input type="text" placeholder="Coupon Code" />
        <button className="btn-primary">Apply Coupon</button>
      </div>

      <div className="cart-total-card">
        <h3>Cart Total</h3>
        <div className="total-row">
          <span>Subtotal:</span>
          <span>$1750</span>
        </div>
        <div className="total-row">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="total-row final">
          <span>Total:</span>
          <span>$1750</span>
        </div>
        <Link to="/cart/checkout"><button className="btn-primary full-width">Procees to checkout</button></Link>
      </div>
    </div>
  );
}
