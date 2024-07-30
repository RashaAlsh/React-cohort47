import PropTypes from 'prop-types';
import { useState } from 'react';

const Categories = ({ categoriesList, handleClick }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCategoryClick = (category, index) => {
   
    if (activeIndex === index) {
      setActiveIndex(null);
    }else{
        setActiveIndex(index);
    }
    handleClick(category);
  };

  return (
    <div className='navbar'>
      {categoriesList.map((category, index) => (
        <div
          key={index}
          className={`navbar-btn ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category, index)}>
          View: {category}
        </div>
      ))}
    </div>
  );
};

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Categories;