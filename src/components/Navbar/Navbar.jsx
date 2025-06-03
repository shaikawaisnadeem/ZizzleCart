import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'
import { use } from 'react';
import ProductSearch from '../ProdcuctSearch/ProductSearch.jsx';

const Navbar = () => {
  const navigate = useNavigate()
  const addCart = () => {
    navigate('/AddToCart')
  }
  return (
    <>
      <nav className="custom-navbar">
        <a className="navbar-brand" href="#">ZizzleCart</a>

        <div className="search-container">
          <input type="search" className="searchbar" placeholder="Search Products..."  />
          <button className="search-button">Search</button>
        </div>

        <div className="nav-buttons">
          <a href="#" className="cart-icon" onClick={addCart}>
            <i className="bi bi-cart3"></i>
          </a>
          <button className="login-button">Login</button>
          <button className="register-button">Register</button>
        </div>
      </nav>
    </>

  );
};

export default Navbar;
