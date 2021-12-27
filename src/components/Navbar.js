import logo from '../assets/Navbar/logo.png';
import { SearchIcon } from '@heroicons/react/solid';
import '../styles/Navbar.css';

function Navbar () {
  return (
    <header className="navbar">
      <img className='navbar-img' src={logo} alt='Logo' />
      <div className='navbar-container'>
        <input className='navbar-input' type='text' placeholder='Buscar video' />
        <SearchIcon className='navbar-icon' />
      </div>
    </header>
  )
}

export default Navbar;