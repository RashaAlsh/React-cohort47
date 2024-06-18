import { useFavorite } from "../context/FavoriteContext";
import heartReg from '../assets/heart-regular.svg'
import heartSol from '../assets/heart-solid.svg'
import NavBar from "../components/NavBar";

 function ProductDetailPage({ activeProductInfo }) {
  const { favorites, toggleFavorite } = useFavorite();
  const isFavorite = favorites.includes(activeProductInfo.id);

  const handleFavorite = () => {
    toggleFavorite(activeProductInfo?.id);
  };

  return (
    <>
    <NavBar title={activeProductInfo.title}/>
      <div className='product-detail'>
        <p className='product-description'>{activeProductInfo.description}</p>
        <div className='product-detail-image-container'>
          <img src={activeProductInfo.image} alt={activeProductInfo.description} className='product-detail-image'/>
          <div className='favorite-btn-container'>
            <img src={isFavorite ? heartSol : heartReg} alt={isFavorite ? 'favorited' : 'not favorited'} className='heart' onClick={handleFavorite}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage