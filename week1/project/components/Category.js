export default function Category({ category, activeCategory, setActiveCategory }) {

    const handleClick = () => {
      setActiveCategory(category.substring(6));
    };
  
    return (
      <li className={'category-item'}>
        <button className={activeCategory === category.substring(6) ? 'active' : ''} onClick={handleClick}>{category.substring(6)}</button>
      </li>
    );
  }