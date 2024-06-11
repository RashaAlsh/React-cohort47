import { Link } from 'react-router-dom';

const Products = ({ products }) => {
return (
  <ul className="products">
{products.map((product) => (
  <li key={product.id} className="productsItem">
  <Link to={`/product/${product.id}`}>
  <div className="product">
  <img className="productImage" src={product.image} alt={product.title} />
  <span className="productTitle" title={product.title}>{product.title}</span>
  </div>
  </Link>
  </li>
  ))}
  </ul>
  );
};

export default Products;