import React, { useCallback, useContext } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import ReactContext from '../../Context/ReactContext.jsx';

const Navbar = () => {
  const navigate = useNavigate();

  const addCart = () => {
    navigate('/AddToCart');
  };

  const openWishlist = () => {
    navigate('/WishList');
  };
  const {itemsinCart} = useContext(ReactContext)

  return (
    <nav className="custom-navbar">
      <a className="navbar-brand" href="#">ZizzleCart</a>

      <div className="search-container">
        <input type="search" className="searchbar" placeholder="Search Products..." />
        <button className="search-button">Search</button>
      </div> 

      <div className="nav-buttons">
        <a href="#" className="icon-wrapper" onClick={addCart}>
          <i className="bi bi-cart3"></i>
          <p className='cart-count'>{itemsinCart.length}</p>
        </a>
        <a href="#" className="icon-wrapper" onClick={openWishlist}>
          <i className="bi bi-heart"  ></i>
        </a>
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
