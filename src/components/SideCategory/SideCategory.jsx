import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideCategory.css'

const SideCategory = () => {
  return (
    <div className='sideNavbar'>
      <h1 className='headCate'>Categories</h1>
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}><p>All Categories</p></NavLink>
      <NavLink to="/category/smartphones" className={({ isActive }) => isActive ? "active" : ""}><p>Smartphones</p></NavLink>
      <NavLink to="/category/laptops" className={({ isActive }) => isActive ? "active" : ""}><p>Laptops</p></NavLink>
      <NavLink to="/category/fragrances" className={({ isActive }) => isActive ? "active" : ""}><p>Fragrances</p></NavLink>
      <NavLink to="/category/skincare" className={({ isActive }) => isActive ? "active" : ""}><p>Skincare</p></NavLink>
      <NavLink to="/category/groceries" className={({ isActive }) => isActive ? "active" : ""}><p>Groceries</p></NavLink>
      <NavLink to="/category/home-decoration" className={({ isActive }) => isActive ? "active" : ""}><p>Home Decoration</p></NavLink>
      <NavLink to="/category/furniture" className={({ isActive }) => isActive ? "active" : ""}><p>Furniture</p></NavLink>
      <NavLink to="/category/tops" className={({ isActive }) => isActive ? "active" : ""}><p>Tops</p></NavLink>
      <NavLink to="/category/womens-dresses" className={({ isActive }) => isActive ? "active" : ""}><p>Womens Dresses</p></NavLink>
      <NavLink to="/category/womens-shoes" className={({ isActive }) => isActive ? "active" : ""}><p>Womens Shoes</p></NavLink>
      <NavLink to="/category/mens-shirts" className={({ isActive }) => isActive ? "active" : ""}><p>Mens Shirts</p></NavLink>
      <NavLink to="/category/mens-shoes" className={({ isActive }) => isActive ? "active" : ""}><p>Mens Shoes</p></NavLink>
      <NavLink to="/category/mens-watches" className={({ isActive }) => isActive ? "active" : ""}><p>Mens watches</p></NavLink>
      <NavLink to="/category/womens-watches" className={({ isActive }) => isActive ? "active" : ""}><p>Womens Watches</p></NavLink>
      <NavLink to="/category/womens-bags" className={({ isActive }) => isActive ? "active" : ""}><p>Womens Bags</p></NavLink>
      <NavLink to="/category/womens-jewellery" className={({ isActive }) => isActive ? "active" : ""}><p>Womens Jewellery</p></NavLink>
      <NavLink to="/category/sunglasses" className={({ isActive }) => isActive ? "active" : ""}><p>Sunglasses</p></NavLink>
      <NavLink to="/category/automotive" className={({ isActive }) => isActive ? "active" : ""}><p>Automotive</p></NavLink>
      <NavLink to="/category/lighting" className={({ isActive }) => isActive ? "active" : ""}><p>Lighting</p></NavLink>
    </div>
  )
}

export default SideCategory
