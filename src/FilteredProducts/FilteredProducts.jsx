import SyncLoader from 'react-spinners/SyncLoader'
import { useEffect, useState } from 'react'
import ProductCard from '../components/Productcard/ProductCard.jsx'
import './FilteredProducts.css'


const FilteredProducts = ({ categoryName }) => {
    const [loader, setLoader] = useState(false);
    const [products, setProducts] = useState([]);
    console.log(categoryName)
    useEffect(() => {
        setLoader(true);
        const url = `https://dummyjson.com/products/category/${categoryName}`;
        console.log(url)
        const options = {
            method: "GET"
        }
        const FilteredProduct = async () => {
            try {
                const res = await fetch(url, options);
                const resData = await res.json();
                setProducts(resData.products)
            }
            catch (error) {
                console.error("Error fetching products:", error);
            }
            finally {
                setLoader(false);
            }
        }
        FilteredProduct()
    }, [categoryName])
    return (
        <div className='filteredProductsContainer'>
            {loader ? (
                <div className="loaderWrapper">
                    <SyncLoader  className="loader" color="#2b303b" size={20} />
                    <p className="loaderText">Loading products...</p>
                </div>
            ) : (
                <div className="filteredProducts">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="noproductsDiv">
                            <p className="noproducts">Oops! No items available in this category.</p>
                        </div>
                    )}
                </div>
            )}

        </div>
    )
}

export default FilteredProducts