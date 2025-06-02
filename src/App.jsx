import {useState} from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.jsx'
import SideCategory from './components/SideCategory/SideCategory.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import CategoryPage from './components/CategoryPage/CategoryPage.jsx'
import Reactcontext from './components/ReactContext/Reactcontext.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Productinfo from './components/ProductInfo/Productinfo.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

const App = () => {

  const [itemsInCart, setItem] = useState([]); 

  const add = (product) => {
    const array =  [...itemsInCart, product]; 
    setItem(array);

  }
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Reactcontext value = {{itemsInCart, addingItem: add}}>
      <Navbar/>
       
      <div style={{display:"flex", margin: "20px",marginLeft:"25px",paddingTop:"80px"}}>
        <SideCategory />
       
        <Routes>
          <Route path="/" element={<FeaturedProducts />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:id" element={<Productinfo />} /> 
          <Route path = '*' element={<ErrorPage />} />
        </Routes>
        
      </div>
      
      </Reactcontext>
    </BrowserRouter>
  )
}
export default App