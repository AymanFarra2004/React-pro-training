import '../styles/Checkout.css';
import { useState } from 'react';
import monitor from '../assets/images/monitor.png';
import joystick from '../assets/images/joystick.png';
import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.png';
import { Link } from 'react-router';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const cartItems = [
    { id: 1, name: 'LCD Monitor', price: 650, img: monitor },
    { id: 2, name: 'H1 Gamepad', price: 1100, img: joystick },
  ];
  const bellingArray = [
    ['First Name', true, 'text'],
    ['Company Name', false, 'text'],
    ['Street Address', true, 'text'],
    ['Apartment, floor, etc. (optional)', false, 'text'],
    ['Town/City', true, 'text'],
    ['Phone Number', true, 'tel'],
    ['Email Address', true, 'email'],
  ];

  return (
    <div className="checkout-container">
      <nav className="breadcrumb">
        Account / My Account / Product / <Link to="/cart"> View Cart </Link>/{' '}
        <span>CheckOut</span>
      </nav>

      <h2 className="page-title">Billing Details</h2>

      <div className="checkout-layout">
        <BillingForm billinArray={bellingArray} />

        <div className="order-summary">
          <OrderItems cartItems={cartItems} />

          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>

          <PaymentMethods
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            visaImg={visa}
            masterCardImg={masterCard}
          />

          <div className="coupon-box">
            <input type="text" placeholder="Coupon Code" />
            <button className="btn-apply">Apply Coupon</button>
          </div>

          <button className="btn-place-order">Place Order</button>
        </div>
      </div>
    </div>
  );
}

function OrderItems({ cartItems }) {
  return (
    <div className="order-items">
      {cartItems.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function OrderItem({ item }) {
  return (
    <div className="item">
      <div className="item-info">
        <div className="item-img-checkout">
          <img src={item.img} alt={item.name} />
        </div>
        <span>{item.name}</span>
      </div>
      <span>${item.price}</span>
    </div>
  );
}

function BillingForm({ billinArray }) {
  return (
    <div className="billing-form">
      {billinArray.map(([label, required, type]) => (
        <div className="input-group" key={label}>
          <label>
            {label}
            {required && <span>*</span>}
          </label>
          <input type={type} />
        </div>
      ))}

      <div className="checkbox-group">
        <input type="checkbox" id="save-info" />
        <label htmlFor="save-info">
          Save this information for faster check-out next time
        </label>
      </div>
    </div>
  );
}

function PaymentMethods({
  paymentMethod,
  setPaymentMethod,
  visaImg,
  masterCardImg,
}) {
  return (
    <div className="payment-methods">
      <div className="radio-group">
        <div className="radio-option">
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === 'bank'}
            onChange={() => setPaymentMethod('bank')}
          />
          <label>Bank</label>
        </div>
        <div className="payment-icons">
          <img src={visaImg} alt="Visa" />
          <img src={masterCardImg} alt="Mastercard" />
        </div>
      </div>

      <div className="radio-option">
        <input
          type="radio"
          name="payment"
          checked={paymentMethod === 'cash'}
          onChange={() => setPaymentMethod('cash')}
        />
        <label>Cash on delivery</label>
      </div>
    </div>
  );
}
