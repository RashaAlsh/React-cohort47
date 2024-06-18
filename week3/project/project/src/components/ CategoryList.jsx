import Category from './Category';
import { PRODUCTS_URL } from '../utils/PRODUCTS_URL';
import useFetch from '../hooks/useFetch';

 function CategoryList({ setActiveCategory, activeCategory }) {
  const { data } = useFetch(`${PRODUCTS_URL}/categories`);

  const listItems = data?.map(category =>
    <Category 
    setActiveCategory={setActiveCategory} 
    category={category} 
    activeCategory={activeCategory} 
    key={category} /> 
  );
  
  return <ul className='category-list'>{listItems}</ul>;
}

export default CategoryList 