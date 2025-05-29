import React from 'react'
import { useParams } from 'react-router-dom';
import './CategoryPage.css'
import FilteredProducts from '../../FilteredProducts/FilteredProducts.jsx';


const CategoryPage = () => {
  const { categoryName } = useParams()
  // console.log(categoryName)
  return (
    <div className='mainDiv'>
      <h2 className='showingPage'>Showing products for: {categoryName}</h2>
        <FilteredProducts categoryName={categoryName} />
    </div>
  )
}
export default CategoryPage

