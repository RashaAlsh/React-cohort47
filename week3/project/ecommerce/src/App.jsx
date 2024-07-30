import { useState, useEffect, useCallback } from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import ProductInfo from './components/ProductInfo';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PRODUCTS_URL } from './constants.js';
import { FavoritesProvider } from './contexts/FavoritesContext.jsx';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});
  const [isFavoritePage, setIsFavoritePage] = useState(false);

  const handleCategoryClick = (category) => {
    if (category === activeCategory) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  const handleFavoriteClick = () => {
    setActiveCategory(null);
    setIsFavoritePage((prev)=>!prev);
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${PRODUCTS_URL}/categories`);
      const data = await res.json();
      setAllCategories(data);
    } catch (err) {
      setError({
        categoriesList: true,
        message: `Error fetching categories: ${err} `,
      });
    }
  };

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const url = activeCategory
        ? `${PRODUCTS_URL}/category/${activeCategory}`
        : PRODUCTS_URL;
      const response = await fetch(url);
      const result = await response.json();
      setProductsList(result);
    } catch (err) {
      setError({
        productsList: true,
        message: `Error fetching product data: ${err} `,
      });
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);

  // fetch data on mount for all categories and products
  useEffect(() => {
    fetchCategories();
    fetchProducts();
    return () => {
      setError({});
    };
  }, [fetchProducts]);
  // fetch products when active category changes
  useEffect(() => {
    fetchProducts();
    return () => {
      setError({});
    };
  }, [activeCategory, fetchProducts]);

  if (error.categoriesList) {
    return <div>{error.message}</div>;
  }

  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <NavBar handleClick={handleFavoriteClick} title='Products' />
                <Categories
                  categoriesList={allCategories}
                  handleClick={handleCategoryClick}
                />

                {error.productsList ? (
                  <div> {error.message}</div>
                ) : (
                  <Products
                    productsList={productsList}
                    loading={loading}
                    isFavoritePage={isFavoritePage}
                  />
                )}
              </div>
            }
          />
          <Route path='/:id' element={<ProductInfo />} />
          <Route path='favorites/:id' element={<ProductInfo />} />
          <Route
            path='/favorites'
            element={
              <div>
                <NavBar handleClick={handleFavoriteClick} title='Favorites' />
                <Products
                  productsList={productsList}
                  loading={loading}
                  isFavoritePage={isFavoritePage}
                />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;