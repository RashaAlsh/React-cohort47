import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../hooks.jsx';
import { colorHearts } from '../util.js';

const Products = ({ productsList, loading, isFavoritePage }) => {
  const toggleFavorite = useFavorites().toggleFavorite;
  const favoritesList = useFavorites().favorites;

  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`${id}`);
  };

  if (isFavoritePage) {
    productsList = productsList.filter((product) =>
      favoritesList.includes(product.id)
    );
  }

  if (loading) {
    return <div className='products-list'>Loading...</div>;
  }

  return (
    <div className='products-list'>
      {productsList.map((product, index) => (
        <div key={index} className='product'>
          <img
            src={product.image}
            alt={product.title}
            onClick={() => {
              handleProductClick(product.id);
            }}
          />
          <img
            src={colorHearts(favoritesList, product.id)}
            onClick={() => {
              toggleFavorite(product.id);
            }}
            className='fav-icon'
            alt='heart image to favorite this item'
          />
          <p
            onClick={() => {
              handleProductClick(product.id);
            }}>
            {product.title}
          </p>
        </div>
      ))}
    </div>
  );
};

Products.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  isFavoritePage: PropTypes.bool,
};

export default Products;