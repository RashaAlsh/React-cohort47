
import { categories } from "../fake-data/all-categories";
import Category from "./Category";

export default function CategoryList({ setActiveCategory, activeCategory }) {
  const listItems = categories.map((category, i) =>
    <Category setActiveCategory={setActiveCategory} category={category} activeCategory={activeCategory} key={category + i}/> 
  );
  return <ul className={'category-list'}>{listItems}</ul>;
}
