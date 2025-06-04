import {use, useContext, useState} from 'react'
import { BrowserRouter, Routes, Route, useParams, isRouteErrorResponse } from 'react-router-dom'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.jsx'
import SideCategory from './components/SideCategory/SideCategory.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import CategoryPage from './components/CategoryPage/CategoryPage.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Productinfo from './components/ProductInfo/Productinfo.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import ReactContext from './Context/ReactContext.jsx'
import AddToCart from './components/AddToCart/AddToCart.jsx'
import WishList from './components/WishList/WishList.jsx'

const App = () => {
  const [itemsinCart,setItemsInCart] = useState([])
  const [itemsinwish, setitemsinwish] = useState([])

const wishadd = (product) => {
  setitemsinwish(prevItems => {
    const alreadyAdded = prevItems.some(item => item.id === product.id);
    if (alreadyAdded) {
      return prevItems.filter(item => item.id !== product.id); 
    } else {
      return [...prevItems, product];
    }
  });
};
console.log(itemsinwish)

  const add = (product) => {
  setItemsInCart(prevItems => {
    const existing = prevItems.find(item => item.id === product.id);

    if (existing) {
      return prevItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      console.log(itemsinCart)
      return [...prevItems, { ...product, quantity: 1,clicked:true}];
    }
  });
};
  return (
    
    <BrowserRouter>
       <ReactContext.Provider value={{ itemsinCart, setItemsInCart, add, itemsinwish, wishadd }}>
    <ScrollToTop/>
      <Navbar/>
      <div style={{display:"flex", margin: "20px",marginLeft:"25px",paddingTop:"80px"}}>
        <SideCategory />
       
        <Routes>
          <Route path="/" element={<FeaturedProducts />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:id" element={<Productinfo />} /> 
          <Route path='/AddToCart' element={<AddToCart/>}/>
          <Route path='/WishList'  element={<WishList/>}/>
          <Route path = '*' element={<ErrorPage />} />
        </Routes>
        
      </div>
      </ReactContext.Provider>
    </BrowserRouter>
  )
}
export default App