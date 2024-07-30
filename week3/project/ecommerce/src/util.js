import HeartRegularIcon from './assets/heart-regular.svg';
import HeartSolidIcon from './assets/heart-solid.svg';

export const colorHearts = (favoritesList, productID) => {
  if (favoritesList.includes(productID)) {
    return HeartSolidIcon;
  } else {
    return HeartRegularIcon;
  }
};