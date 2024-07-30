import { useContext } from 'react';
import { FavoritesContext } from './contexts/FavoritesContext.jsx';

export const useFavorites = () => useContext(FavoritesContext);

