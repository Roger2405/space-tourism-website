import Logo from '../../assets/shared/logo.svg';
import MenuIcon from '../../assets/shared/icon-hamburger.svg';
import CloseIcon from '../../assets/shared/icon-close.svg';

import Styles from './Header.module.scss';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../Nav';
import { useState } from 'react';

export default function Header() {
    const [showNav, setShowNav] = useState(false);
    return (
        <>
            <header className={Styles.header}>
                <Link to={'/'} >
                    <img className={Styles.logo} src={Logo} alt="" />
                </Link>
                <img className={Styles.menu} onClick={() => setShowNav(!showNav)} src={!showNav ? MenuIcon : CloseIcon} alt="" />
                <div className={`${Styles['div-navigation']} ${!showNav ? (Styles.hide) : ''}`}>
                    <nav className={Styles.navigation} onClick={() => {
                        setShowNav(false)
                    }}>
                        <Link to={'/'} className={Styles.link}><span>00</span>Home</Link>
                        <Link to={'/destination'} className={Styles.link}><span>01</span>Destination</Link>
                        <Link to={'/crew'} className={Styles.link}><span>02</span>Crew</Link>
                        <Link to={'/technology'} className={Styles.link}><span>03</span>Technology</Link>
                    </nav>
                </div>
            </header>

            
            <Outlet />
        </>
    )
}