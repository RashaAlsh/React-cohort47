import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import Product from '../components/Product';
import { useFavorite } from '../context/FavoriteContext'
import useFetch from '../hooks/useFetch';
import { PRODUCTS_URL } from '../utils/PRODUCTS_URL';

FavoritesPage({ setActiveProductInfo }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const { favorites } = useFavorite();
  const { data, isLoading } = useFetch(PRODUCTS_URL);

  useEffect(() => {
    if (data) {
      const onlyFavorites = data.filter(product =>
        favorites.includes(product.id)
      );
      setFavoriteProducts(onlyFavorites);
    }
  }, [data, favorites]);

  return (
    <>
      <NavBar title={'Favorites'} />
      {favoriteProducts.length === 0 ? <p>You haven't chosen any favorites yet!</p> :
      <div className='product-card-list'>
        {isLoading ? <p>Loading...</p> : favoriteProducts.map(product => (
          <Product
            key={product.id}
            product={product}
            setActiveProductInfo={setActiveProductInfo}
          />
        ))}
      </div>
      }
    </>
  );
}


export default FavoritesPage