import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';

function App() {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <div className="App">
      <header className="App-header">Products</header>
      <div><CategoryList setActiveCategory={setActiveCategory} activeCategory={activeCategory}/></div>
      <div><ProductList activeCategory={activeCategory}/></div>
    </div>
  );
}

export default App;