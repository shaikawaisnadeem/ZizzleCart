import React, { useEffect } from 'react';
import './Productinfo.css'; 
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { HashLoader } from 'react-spinners';
import ProductReview from '../ProductReview/ProductReview';



const Productinfo = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
   useEffect(() => {
    setLoading(true)
    const infodata = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const resData = await res.json();
        setProduct(resData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      finally{
        setLoading(false)
      }
    };
    infodata();
  }, [id]);
  return loading ? (
  <div className='loaderInfo'>
    <HashLoader color="#2b303b" size={70} />
  </div>
) : (                                                                                  
  <div className='mainDivContainer'>
    <div className="product-container">
    <div className="product-image">
      {product.images && product.images.length > 0 ? (
        <img src={product.images[0]} alt={product.title} />
      ) : (
        <p>No Image Available</p>
      )}
    </div>

    <div className="product-details">
      <p className="product-category">{product.category || 'Unknown Category'}</p>
      <h1 className="product-title">{product.title || 'No Title'}</h1>
      <p className="rating">{product.rating || 'No rating'} ⭐️, ({(product.reviews?.length || 0)})</p>

      <div className="description-section">
        <h2>Description</h2>
        <p>{product.description || 'No description available.'}</p>
      </div>

      <div className="buttons">
        <button className="button add-to-cart">Add to Cart</button>
        <button className="button add-to-wishlist">Add to Wishlist</button>
      </div>
      <h2 className='impMsg'>Like it? Add it to your cart and make it yours!</h2>
    </div>
  </div>
   <ProductReview product={product}/>
  </div>

);
}

export default Productinfo;