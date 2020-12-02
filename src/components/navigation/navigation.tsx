import React, { useState } from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as BagIcon } from '../../assets/icons/shopping-bag.svg'
import CloseIcon from '../../assets/images/close.png'

const Navigation: React.FC =()=> {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <div className="navigation">
            <div className="logo-nav">
                <div className="logo-container">
                    <Link to='/'><img src={Logo} alt='logo' height='50' /></Link>
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to='/shop' className='nav-link'>Shop</Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to='/care' className='nav-link'>Sneaker Care</Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to='/bag' className='nav-link'>Bag</Link>
                    </li>
                </ul>
                <div className='bag'>
                    <BagIcon height='30'/>
                </div>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                <img src={CloseIcon} alt='logo' height='30' className="menu-icon" />
                ) : (
                    <MenuIcon height='30'/>
                )}
            </div>
        </div>
    )
}
export default Navigation