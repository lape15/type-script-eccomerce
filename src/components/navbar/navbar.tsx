import {useState} from 'react'
import './navbar.scss';
import logo from '../../assets/images/logo.svg'
import avatar from '../../assets/images/image-avatar.png'
import menu from '../../assets/images/icon-menu.svg'
import closeIcon from '../../assets/images/icon-close.svg';
import Cart from '../cart/cart';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setShowMobileMenu(true)
    }
    const hideMobileMenu = () => {
        setShowMobileMenu(false)
    }
    return (
        <div className='navbar'>
            <div className="top logo">
                <div>
                    <button className="menu" onClick={handleMobileMenu} tabIndex ={1}> 
                        <img src={menu} />
                    </button>
                    <img src={logo}/>
                </div>
                <ul className="top list desktop-menu">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="top user">
                <Cart/>
                <div className='avatar-wrapper'><img className="avatar" src={avatar}/></div>
            </div>
            {
                showMobileMenu && 
                <div className='mobile-menu'>
                    <div className='overlay'></div>
                    <div className='mobile'>
                        <img src={closeIcon} onClick={hideMobileMenu}/>
                        <div>
                            <ul>
                                <li>Collections</li>
                                <li>Men</li>
                                <li>Women</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>                
            }
        </div>
    )
}

export default Navbar;