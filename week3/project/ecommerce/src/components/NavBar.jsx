import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const NavBar = ({ handleClick, title }) => {
  const navigate = useNavigate();
  const handleProductClick = (event) => {
    event.preventDefault();
    navigate(`/`);
    handleClick(false);
  };
  const handleFavoritesClick = (event) => {
    event.preventDefault();
    navigate(`/favorites`);
    handleClick(true);
  };

  return (
    <nav className='links'>
      <h2>{title}</h2>
      <div>
        <a href='/' onClick={(event) => handleProductClick(event)}>
          Products
        </a>
        <a href='/favorites' onClick={(event) => handleFavoritesClick(event)}>
          Favorites
        </a>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavBar;
