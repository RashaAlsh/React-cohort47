import { Link } from 'react-router-dom';
import { useFavorite } from '../context/FavoriteContext';
import heartReg from '../assets/heart-regular.svg'
import heartSol from '../assets/heart-solid.svg'

export default function Product({ product, setActiveProductInfo }) {
  const { favorites, toggleFavorite } = useFavorite();
  const isFavorite = favorites.includes(product.id);

  const handleClick = () => {
    setActiveProductInfo(product);
  }

  const handleFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(product.id);
  };
  
  return (
    <li className='product-card'>
      {/* takes user to the product detail page when clicking on entire component (except favorite button) */}
      <Link to={`/product/${product?.id}`} onClick={handleClick}> 
        <img src={product?.image} alt={product?.description} className='product-image'/>
        <div className='favorite-btn-container'>
          {/* 
          1-change source if favorite is already selected \ 
          2-pass function to handle favorite upon clicking
          */}
          <img src={isFavorite ? heartSol : heartReg} alt={isFavorite ? 'favorited' : 'not favorited'} className='heart' onClick={handleFavorite}/>
        </div>
        <p className='product-title'>{product?.title}</p>
      </Link>
    </li>
  );
};


export default Product