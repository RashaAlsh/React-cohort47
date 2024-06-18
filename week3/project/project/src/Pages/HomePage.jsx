import { useState } from 'react';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar';

function Homepage({ setActiveProductInfo }) {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <>
      <NavBar title={'Products'}/>
      <CategoryList setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
      <ProductList activeCategory={activeCategory} setActiveProductInfo={setActiveProductInfo}/>
    </>
  )
};

export default Homepage