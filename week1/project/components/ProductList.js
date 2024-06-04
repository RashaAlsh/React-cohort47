import { products } from '../fake-data/all-products';
import Product from './Product';

export default function ProductList({ activeCategory }) {
  const listItems = products.map((product, i) =>
    <Product product={product} key={product.title + i}/>
  );

  const filteredProducts = products.filter(product => product.category === activeCategory).map((product, i) =>
    <Product product={product} key={product.title + i}/>
  );

  const children = activeCategory === '' ? listItems : filteredProducts;

  return <ul className={'product-card-list'}>{children}</ul>;
}