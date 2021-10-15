import React, { useState } from 'react';
import { Button } from './Button';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };



  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
      <nav className='navbar'>      
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <ul className="nav-logoname">
          <li><img className="logo-icon" src={'https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_154,h_144,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp'} alt='TEN-LOGO.jpg' /></li>
          <li className="logo-name"><b>TEN</b></li>
        </ul>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/OnlineCourses'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Online Courses
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/More'
              className='nav-links'
              onClick={setDropdown}
            >
              More <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}            
          </li>          
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
            <SearchBar placeholder="Search" />
          </li>
        </ul>
        <div className="btn-nav">
        <Button />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;