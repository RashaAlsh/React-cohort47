import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { PRODUCTS_URL } from '../constants.js';
import { useFavorites } from '../hooks.jsx';
import { colorHearts } from '../util.js';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const toggleFavorite = useFavorites().toggleFavorite;
  const favoritesList = useFavorites().favorites;

  const fetchProduct = useCallback(async () => {
    try {
      const res = await fetch(`${PRODUCTS_URL}/${id}`);
      const data = await res.json();
      setProduct({
        productID: data.id,
        productTitle: data.title,
        productDescription: data.description,
        productImgUrl: data.image,
      });
    } catch (err) {
      setProduct({
        error: true,
        message: err.message,
      });
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  if (product.error) {
    return <p>There was an error fetching the product: {product.message}</p>;
  }

  return (
    <div className='product-info'>
      <h2>{product.productTitle}</h2>
      <img src={product.productImgUrl} alt={product.productDescription} />
      <img
        src={colorHearts(favoritesList, product.productID)}
        onClick={() => {
          toggleFavorite(product.productID);
        }}
        className='fav-icon'
        alt='heart image to favorite this item'
      />
      <p>{product.productDescription}</p>
    </div>
  );
};
export default Product;