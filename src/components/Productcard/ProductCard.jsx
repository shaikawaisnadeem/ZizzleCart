import  { useState,React,  useContext} from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import ReactContext from '../../Context/ReactContext'

const ProductCard = ({ product }) => {
    const {add,itemsinCart} = useContext(ReactContext)
    // console.log(itemsinCart)
    const productFound = itemsinCart.find(each => each.id === product.id)
    console.log(product)
    const navigate = useNavigate()
    const [imgLoaded, setImgLoaded] = useState(false)
    const innerInfo = () => {
        navigate(`/product/${product.id}`)
    }
    const addingProduct = (e)=>{
        e.stopPropagation();
        add(product)
        
    }
    
    const cartMsg = productFound? 'Go To Cart' : 'Add To Cart'
    const gotoBag = (e)=>{
        if (cartMsg==='Go To Cart'){
        e.stopPropagation()
        navigate('/AddToCart')
        }
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
                <div><button onClick={cartMsg==='Go To Cart'? gotoBag: addingProduct}>{cartMsg}</button></div> 
                
            </div>
        </div>
    )
}

export default ProductCard