import React from 'react'
import './ProductCard.css'

import { use} from 'react'
import Reactcontext from '../ReactContext/Reactcontext.jsx';


const ProductCard = ({ product }) => {
   

 
    const {addingItem} = use(Reactcontext);  
    const passing = () => addingItem(product); 

    return (
        <div className="productDiv">
            <div className="imageDiv">
                <img src={product.images[0]} />
            </div>
            <div className="discount">
                <div>{`- ${product.discountPercentage}%`}</div>
            </div>
            <div className="iconDiv">
                <i className="bi bi-heart"></i>
            </div>
            <div className="content">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
            </div>
            <div className="priceBuy">
                <p>{`$${product.price}`}</p>
                <div><button onClick={passing}>Add to Cart</button></div>
            </div>
        </div>
    )
    
}
export default ProductCard