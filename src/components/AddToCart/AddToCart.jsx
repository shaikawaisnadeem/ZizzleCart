import React, { useContext } from 'react';
import ReactContext from '../../Context/ReactContext';
import './AddToCart.css';

const AddToCart = () => {
  const { itemsinCart } = useContext(ReactContext);

  return (
    <div className='cartContainer'>
      <h1 className="cartHeading">Shopping Cart</h1>
      
      {itemsinCart.map((product, index) => (
        <div className="cartItem" key={index}>
          <div className="cartProductDetails">
            <div className="cartImageWrapper">
              <img src={product.images[0]} alt={product.title} />
            </div>
            <div className="cartTextInfo">
              <p>{product.category}</p>
              <h1>{product.title}</h1>
              <h2>$ {product.price}</h2>
            </div>
          </div>
          <div className="cartRemoveIcon">
            <i className="bi bi-trash3"></i>
            <p className='quantityProduct'>Quantity: {product.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
