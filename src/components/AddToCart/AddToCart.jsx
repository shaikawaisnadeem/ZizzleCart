import React, { useContext, useState, useEffect } from 'react';
import ReactContext from '../../Context/ReactContext';
import './AddToCart.css';
import { MoonLoader } from 'react-spinners';

const AddToCart = () => {
  const { itemsinCart, add } = useContext(ReactContext);
  const [quantity, setQuantity] = useState(1); 
  const increament = (product) => {
    add(product);
  };

  const [cartLoader, setcartLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setcartLoader(false); 
    }, 1000); 
    return () => clearTimeout(timer); 
  }, []);

  const noProduct = <h1 className='noAdded'>No Products in Cart</h1>;

  return (
    <div className='cartContainer'>
      <h1 className="cartHeading">Shopping Cart</h1>

      {cartLoader ? (
        <div className="loaderWrapper">
          <MoonLoader  color="#2b303b" size={50} />
        </div>
      ) : (
        <>
          {itemsinCart.length > 0 ? (
            itemsinCart.map((product, index) => (
              <div className="cartItem" key={index}>
                <div className="cartProductDetails">
                  <div className="cartImageWrapper">
                    <img src={product.images[0]} alt={product.title} />
                  </div>
                  <div className="cartTextInfo">
                    <p>{product.category}</p>
                    <h1>{product.title}</h1>
                    <h2>$ {(product.price * quantity).toFixed(2)}</h2>
                  </div>
                </div>
                <div className="cartRemoveIcon">
                  <i className="bi bi-trash3"></i>
                  <p className='quantityProduct'>
                    Quantity: 
                    <input
                      type='number'
                      className='quantityInput'
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                    />
                  </p>
                  {/* <p className='increment-button' onClick={() => increament(product)}>+1</p> */}
                </div>
              </div>
            ))
          ) : (
            noProduct
          )}
        </>
      )}
    </div>
  );
};

export default AddToCart;
