import React, { useState } from 'react';
import '../styles/productDetailsPage.css';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <div className="product-page">
      <nav className="breadcrumb">
        Account / Gaming / <span>Havic HV G-92 Gamepad</span>
      </nav>

      <div className="product-main">
        <div className="image-gallery">
          <div className="thumbnails">
            <div className="thumb">
              <img src="thumb1.png" alt="" />
            </div>
            <div className="thumb">
              <img src="thumb2.png" alt="" />
            </div>
            <div className="thumb">
              <img src="thumb3.png" alt="" />
            </div>
            <div className="thumb">
              <img src="thumb4.png" alt="" />
            </div>
          </div>
          <div className="main-display">
            <img src="main-gamepad.png" alt="Gamepad" />
          </div>
        </div>

        <div className="product-info-side">
          <h1 className="product-title">Havic HV G-92 Gamepad</h1>
          <div className="rating-row">
            <span className="stars">★★★★☆</span>
            <span className="reviews">(150 Reviews)</span>
            <span className="divider">|</span>
            <span className="stock">In Stock</span>
          </div>
          <div className="product-price-large">$192.00</div>
          <p className="description">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>

          <hr />

          <div className="options">
            <div className="option-row">
              <span>Colours:</span>
              <div className="color-circles">
                <div className="circle blue active"></div>
                <div className="circle red"></div>
              </div>
            </div>

            <div className="option-row">
              <span>Size:</span>
              <div className="size-btns">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={selectedSize === size ? 'active' : ''}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="purchase-row">
            <div className="quantity-selector">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span>{quantity}</span>
              <button
                className="plus"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button className="buy-now-btn">Buy Now</button>
            <button className="wishlist-btn">♡</button>
          </div>

          <div className="delivery-info">
            <div className="delivery-card">
              <div className="icon">🚚</div>
              <div className="text">
                <strong>Free Delivery</strong>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="delivery-card">
              <div className="icon">🔄</div>
              <div className="text">
                <strong>Return Delivery</strong>
                <p>
                  Free 30 Days Delivery Returns. <u>Details</u>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="related-section">
        <div className="section-header">
          <div className="red-box"></div>
          <span>Related Item</span>
        </div>
        <div className="product-grid">
          <div className="product-card">
            <div className="badge">-40%</div>
            <div className="card-image">
              <img src="gamepad-red.png" alt="" />
            </div>
            <button className="add-to-cart">Add To Cart</button>
            <h3>HAVIT HV-G92 Gamepad</h3>
            <div className="card-price">
              $120 <span>$160</span>
            </div>
            <div className="stars">★★★★★ (88)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
