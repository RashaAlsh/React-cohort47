import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProductDetailPage from '../pages/ProductDetailPage';
import Homepage from '../pages/HomePage';
import { FavoriteProvider } from '../context/FavoriteContext';
import FavoritesPage from '../pages/FavoritesPage';

function App() {
  const [activeProductInfo, setActiveProductInfo] = useState({});

  return (
    <div className='App'>
      <FavoriteProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage setActiveProductInfo={setActiveProductInfo} />} />
            <Route path='product/:id' element={<ProductDetailPage activeProductInfo={activeProductInfo} />} />
            <Route path='/favorites' element={<FavoritesPage setActiveProductInfo={setActiveProductInfo}/>}/>
          </Routes>
        </Router>
      </FavoriteProvider>
    </div>
  )
}

export default App;
