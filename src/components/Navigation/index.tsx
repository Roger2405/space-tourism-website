import Logo from '../../assets/shared/logo.svg';
import MenuIcon from '../../assets/shared/icon-hamburger.svg';
import CloseIcon from '../../assets/shared/icon-close.svg';

import { Link, matchPath, Outlet, parsePath, useParams } from 'react-router-dom';
import { useState } from 'react';

import Styles from './Navigation.module.scss';

export default function Header() {
    const [showNav, setShowNav] = useState(false);
    const [activeLink, setActiveLink] = useState(0);


    return (
        <>
            <header className={Styles.header}>
                <Link to={'/'} >
                    <img className={Styles.logo} src={Logo} alt="" />
                </Link>
                <img className={Styles.menu} onClick={() => setShowNav(!showNav)} src={!showNav ? MenuIcon : CloseIcon} alt="" />
                <div className={`${Styles['div-navigation']} ${!showNav ? (Styles.hide) : ''}`}>
                    <nav className={Styles.navigation} onClick={(e) => {
                        setShowNav(false);
                        e.preventDefault();
                    }}>
                        <Link onClick={() => setActiveLink(0)} to={'/'} className={`${Styles.link} ${activeLink === 0 ? (Styles.active) : ''}`}><span>00</span>Home</Link>
                        <Link onClick={() => setActiveLink(1)} to={'/destination'} className={`${Styles.link} ${activeLink === 1 ? (Styles.active) : ''}`}><span>01</span>Destination</Link>
                        <Link onClick={() => setActiveLink(2)} to={'/crew'} className={`${Styles.link} ${activeLink === 2 ? (Styles.active) : ''}`}><span>02</span>Crew</Link>
                        <Link onClick={() => setActiveLink(3)} to={'/technology'} className={`${Styles.link} ${activeLink === 3 ? (Styles.active) : ''}`}><span>03</span>Technology</Link>
                    </nav>
                </div>
            </header>


            <Outlet />
        </>
    )
}