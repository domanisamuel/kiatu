import React, { useState } from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'

import BlackLogo from '../../assets/images/black-logo.png'
import WhiteLogo from '../../assets/images/white-logo.png'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as BagIcon } from '../../assets/icons/shopping-bag.svg'
import CloseIcon from '../../assets/images/close.png'

//themes
import { useTheme } from '../../themes/themeContext'

const Navigation: React.FC =()=> {
    // navigation
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    //themes
    const { theme, setTheme } = useTheme()
    const [ currentTheme, setCurrentTheme ] = useState('dark')
    const changeTheme =()=> {
        setCurrentTheme(currentTheme === 'light' ?  'dark' : 'light')
        setTheme(currentTheme)
        localStorage.setItem('_theme', currentTheme)
    }
    
    return (
        <div className="navigation">
            <div className="logo-nav">
                <Link to='/'>
                <span className="logo-container">
                   <img src={currentTheme === 'dark' ? BlackLogo : WhiteLogo} alt='logo' height='40' className='logo' />
                </span>
                </Link>
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
                    <Link to='/cart'><BagIcon height='30'/><span className='bag-count'>{0}</span></Link>
                </span>
                <span>
                    <button onClick={changeTheme}>{theme === 'dark' ? '🌞' : '🌙'}</button>
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