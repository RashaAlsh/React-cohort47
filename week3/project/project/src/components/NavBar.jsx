import { Link } from 'react-router-dom';

export default function NavBar({ title }) {
  return (
    <div className='nav-bar-container homepage-nav'>
      <h1>{title}</h1>
      <div>
      <Link to={`/`}>
        <button className='nav-bar'>Products</button>
      </Link>
      <Link to={'/favorites'}>
        <button className='nav-bar'>Favorites</button>
      </Link>
      </div>  
    </div>
  )
}

export default NavBar
