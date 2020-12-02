import React, { useState } from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import MenuIcon from '../../assets/images/menu.png'
import CloseIcon from '../../assets/images/close.png'

const Navigation: React.FC =()=> {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to='/'>
              <img src={Logo} alt='logo' height='50' />
          </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to='/shop'>Shop</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to='/bag'>Bag</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <img src={CloseIcon} alt='logo' height='50' className="menu-icon" />
        ) : (
            <img src={MenuIcon} alt='logo' height='50' className="menu-icon" />
        )}
      </div>
    </div>
    )
}
export default Navigation