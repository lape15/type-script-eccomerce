import { ReactEventHandler, useState } from 'react';
import './navbar.scss';
import logo from '../../assets/images/logo.svg';
import plus from '../../assets/images/icon-plus.svg';
import avatar from '../../assets/images/image-avatar.png';
import menu from '../../assets/images/icon-menu.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import Cart from '../cart/cart';
import { Link, NavLink, Outlet } from 'react-router-dom';
import SHOP_DATA from '../../shop-data';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [collectionItems, setCollectionItems] = useState(false)
  const handleMobileMenu = () => {
    setShowMobileMenu(true);
  };
  const hideMobileMenu = () => {
    setShowMobileMenu(false);
  };
  const showCollectionItems = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setCollectionItems(!collectionItems)
  }
  const shopKey = Object.keys(SHOP_DATA);
  console.log( Outlet)
  return (
    <div className="navbar">
      <div className="top logo">
        <div>
          <button className="menu" onClick={handleMobileMenu} tabIndex={1}>          
              <img src={menu} />
          </button>
          <NavLink to="/">
            <img src={logo} />
          </NavLink>
        </div>
        <ul className="top list desktop-menu">
          <li className='collections'>
            <NavLink to="collections">Collections</NavLink>
          </li>
          <li>About</li>
          <li>Contact</li>
          <Outlet/>
        </ul>
      </div>
      <div className="top user">
        <Cart />
        <div className="avatar-wrapper">
          <img className="avatar" src={avatar} />
        </div>
      </div>
      {showMobileMenu && (
        <div className="mobile-menu">
          <div className="overlay"></div>
          <div className="mobile">
            <img src={closeIcon} onClick={hideMobileMenu} />
            <div>
              <ul>
                <li className='collections'>
                  <NavLink to="collections">Collections</NavLink>
                  &nbsp; &nbsp; &nbsp;<img src={plus} onClick={showCollectionItems} />
                    {
                      collectionItems && 
                      <ul className='collection-items'>
                      {
                        shopKey.map((key, idx) => 
                          <li>
                            <Link to={`/collections/${key}`} key={idx}>{key}</Link>
                          </li>
                        )
                      }
                      </ul>
                    }
                </li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
