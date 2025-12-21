import '../styles/cart.css';
import { Link } from 'react-router';
import { useCart } from './genral/cartContext';

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <nav className="breadcrumb">
        <Link to="/"> Home </Link> / <span>Cart</span>
      </nav>

      <CartTable cartItems={cartItems} removeItem={removeFromCart} />
      <CartACtionBtns />
      <CartBottom />
    </div>
  );
}

function CartTable({ cartItems, removeItem }) {
  return (
    <div className="cart-table">
      <div className="table-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {cartItems.map((item) => (
        <CartItem item={item} removeItem={removeItem} />
      ))}
    </div>
  );
}

function CartItem({ item, removeItem }) {
  return (
    <div key={item.id} className="table-row">
      <div className="product-info-cart">
        <div className="product-img-cart">
          <button className="remove-btn" onClick={() => removeItem(item.id)}>
            ×
          </button>
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
        <Link to="/cart/checkout">
          <button className="btn-primary full-width">
            Procees to checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
