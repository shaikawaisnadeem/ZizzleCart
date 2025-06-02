import React, { useState } from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
import { use } from 'react'
import Reactcontext from '../ReactContext/Reactcontext.jsx'
import { DotLoader } from 'react-spinners'

const ProductCard = ({ product }) => {
    const { addingItem } = use(Reactcontext)
    const navigate = useNavigate()
    const [imgLoaded, setImgLoaded] = useState(false)
    const innerInfo = () => {
        navigate(`/product/${product.id}`)
    }
    const passing = (e) => {
        e.stopPropagation()
        addingItem(product)
    }
    return (
        <div className="productDiv" onClick={innerInfo}>
            <div className="imageDiv" style={{ position: 'relative', minHeight: '200px' }}>
                {!imgLoaded && (
                    <div className="img-loader" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1
                    }}>
                        <DotLoader  color="#2b303b" size={20} />
                    </div>
                )}
                <img
                    src={product.images[0]}
                    alt={product.title}
                    style={imgLoaded ? {} : { visibility: 'hidden' }}
                    onLoad={() => setImgLoaded(true)}
                />
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