import React, { useContext } from 'react';
import ReactContext from '../../Context/ReactContext.jsx';
import ProductCard from '../Productcard/ProductCard';
import './WishList.css';

const WishList = () => {
  const { itemsinwish } = useContext(ReactContext);

  return (
    <div className='mainwishDiv'>
      <div className='wishlistDiv'>
        {itemsinwish.length === 0 ? (
          <h2 className="noWishText">No items in wishlist</h2>
        ) : (
          itemsinwish.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default WishList;
