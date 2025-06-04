import React, { useContext, useState, useEffect } from 'react';
import ReactContext from '../../Context/ReactContext.jsx';
import ProductCard from '../Productcard/ProductCard';
import './WishList.css';
import { MoonLoader } from 'react-spinners';

const WishList = () => {
  const { itemsinwish } = useContext(ReactContext);
  const [wishLoader, setwishLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setwishLoader(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='mainwishDiv'>
      <h1 className='wishHeading'>WishList</h1>
      {wishLoader ? (
        <div className="loaderWrapper">
          <MoonLoader color="#2b303b" size={50} />
        </div>
      ) : (
        <div className='wishlistDiv'>
          {itemsinwish.length === 0 ? (
            <h2 className="noWishText">No items in wishlist</h2>
          ) : (
            itemsinwish.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default WishList;
