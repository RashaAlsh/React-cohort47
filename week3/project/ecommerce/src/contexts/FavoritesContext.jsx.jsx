import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const FavoritesContext = React.createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isFavoritePage , setIsFavoritePage] = useState(false);

  const toggleFavorite = (productID) => {
    if (favorites.includes(productID)) {
      setFavorites(favorites.filter((fav) => fav !== productID));
    } else {
      setFavorites([...favorites, productID]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavoritePage, setIsFavoritePage }}>
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};