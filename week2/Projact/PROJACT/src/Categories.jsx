

const Categories = ({ categories, selectedCategory, onCategoryClick }) => {
    return (

 <div className="categories">
{categories.map((category) => (
<div key={category} className={`categoriesItem ${category === selectedCategory ? 'categoriesItemSelected' : ''}`}onClick={() => onCategoryClick(category)}>
{category} </div>))}
 </div>
    );
  };
  
  export default Categories;