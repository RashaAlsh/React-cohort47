import useFetch from '../hooks/useFetch';
import { PRODUCTS_URL } from '../utils/PRODUCTS_URL';
import Product from './Product';

function ProductList({ activeCategory, setActiveProductInfo }) {
  const { data, isLoading } = useFetch(PRODUCTS_URL);

  // changed the name of the variables because will use it for rendering the product cards that are applicable only to the category selectd 
  const { data: filteredData, isLoading: loading } = useFetch(`${PRODUCTS_URL}/category/${activeCategory}`); // fetching this second time gives an error bc it's making the call while no activeCategory is selected

  // render only the product cards based on the array that is passed (saved in data from useFetch hook)
  const getProductCard = (products) => {
    return products?.map((product) => <Product product={product} key={product.id} setActiveProductInfo={setActiveProductInfo}/>);
  }

  // call getProductCard passing the data that was returned from useFetch hook
  const children = activeCategory === '' ? getProductCard(data) : getProductCard(filteredData);

  return (
    isLoading || loading ? <p>{'Loading...'}</p> : <ul className='product-card-list'>{children}</ul>
  );
}

export default ProductList