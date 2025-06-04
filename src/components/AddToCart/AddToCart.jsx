import React, { useContext, useState, useEffect } from 'react';
import ReactContext from '../../Context/ReactContext';
import './AddToCart.css';
import { MoonLoader } from 'react-spinners';

const AddToCart = () => {
  const { itemsinCart,setItemsInCart } = useContext(ReactContext);
  const [cartLoader, setCartLoader] = useState(true);

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setCartLoader(false);
    }, 300);
  }, []);
 const deleteItemFromCart = (productId) => {
  const updatedItems = itemsinCart.filter(item => item.id !== productId);
  setItemsInCart(updatedItems);
};

  const handleQuantityChange = (productId, value) => {
    const updatedQuantities = { ...quantities };
    if (value === '' || Number(value) < 1) {
      updatedQuantities[productId] = 1;
    } else {
      updatedQuantities[productId] = Number(value);
    }
    setQuantities(updatedQuantities);
  };

  return (
    <div className="cartContainer">
      <h1 className="cartHeading">Shopping Cart</h1>

      {cartLoader ? (
        <div className="loaderWrapper">
          <MoonLoader color="#2b303b" size={50} />
        </div>
      ) : itemsinCart.length > 0 ? (
        itemsinCart.map((product) => {
          const quantity = quantities[product.id] !== undefined
            ? quantities[product.id]
            : 1;

          return (
            <div className="cartItem" key={product.id}>
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
                <i className="bi bi-trash3" onClick={() => deleteItemFromCart(product.id)}></i>
                <p className="quantityProduct">
                  Quantity:
                  <input
                    type="number"
                    className="quantityInput"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(product.id, e.target.value)
                    }
                  />
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="noAdded">No Products in Cart</h1>
      )}
    </div>
  );
};

export default AddToCart;
