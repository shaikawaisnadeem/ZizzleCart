import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'
import { use} from 'react';
import Reactcontext from '../ReactContext/Reactcontext.jsx';

const Navbar = () => {
  // const [search, setSearch] = useState('')
  const {itemsInCart} =use(Reactcontext); 
  const len = itemsInCart.length;
  const navigate = useNavigate()
  const addCart = ()=>{
    navigate('/Cart')
  }
  return (
    <nav className="custom-navbar">
      <a className="navbar-brand" href="#">ZizzleCart</a>

      <div className="search-container">
        <input type="search" className="searchbar" placeholder="Search Products..." />
        <button className="search-button">Search</button>
      </div>

      <div className="nav-buttons">
        <a href="#" className="cart-icon" onClick={addCart}>
          <i className="bi bi-cart3"></i> 
          {/* <p>{len}</p> */}
        </a>
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
