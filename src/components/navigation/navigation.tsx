import React, { useState } from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as BagIcon } from '../../assets/icons/shopping-bag.svg'
import CloseIcon from '../../assets/images/close.png'

// themes
import { useTheme, Theme } from '../../themes/themeContext'

const Navigation: React.FC =()=> {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // themes
    const { theme, setTheme } = useTheme();
    console.log(theme);

    return (
        <div className="navigation">
            <div className="logo-nav">
                <div className="logo-container">
                   <Link to='/'><img src={Logo} alt='logo' height='50' className='logo' /></Link>
                </div>
                <div className={click ? "nav-options active" : "nav-options"}>
                    <span className="option" onClick={closeMobileMenu}>
                        <Link to='/clothing' className='nav-link'>Clothing</Link>
                    </span>
                    <span className="option" onClick={closeMobileMenu}>
                        <Link to='/shoes' className='nav-link'>Footwear</Link>
                    </span>
                    <span className="option" onClick={closeMobileMenu}>
                        <Link to='/beauty' className='nav-link'>Beauty</Link>
                    </span>
                    <span className="option" onClick={closeMobileMenu}>
                        <Link to='/bags' className='nav-link'>Bags</Link>
                    </span>
                </div>
                {/* cart */}
                <span className='bag'>
                    <BagIcon height='30'/><span className='bag-count'>{0}</span>
                </span>
                <span>
                    <button onClick={() => setTheme(Theme.Dark)}>{theme}</button>
                </span>
                {/* menu */}
                <span className="mobile-menu" onClick={handleClick}>
                    {click ? (
                    <img src={CloseIcon} alt='logo' height='30' className="menu-icon" />
                    ) : (
                        <MenuIcon height='30'/>
                    )}
                </span>
            </div>
        </div>
    )
}
export default Navigation