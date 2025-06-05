import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section brand">
          <span className="icon">🛍️</span>
          <h2>Zizzle Cart</h2>
          <p>Your one-stop shop for the latest and greatest in tech and gadgets.</p>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Deals</li>
            <li>All Categories</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div className="footer-section connect">
          <h3>Connect</h3>
          <div className="social-icons">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
          <p>Subscribe to our newsletter for updates and special offers.</p>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p>© 2025 ZizzleCart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
