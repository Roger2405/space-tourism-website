import Logo from '../../assets/shared/logo.svg';
import MenuIcon from '../../assets/shared/icon-hamburger.svg';
import CloseIcon from '../../assets/shared/icon-close.svg';

import { Link, matchPath, Outlet, parsePath, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Styles from './Navigation.module.scss';

export default function Header() {
    const [showNav, setShowNav] = useState(false);

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(window.location.pathname)
    }, [])
    return (
        <>
            <header className={Styles.header}>
                <Link to={'/'} onClick={() => setActiveLink('')} >
                    <img className={Styles.logo} src={Logo} alt="" />
                </Link>
                <img className={Styles.menu} onClick={() => setShowNav(!showNav)} src={!showNav ? MenuIcon : CloseIcon} alt="" />
                <div className={`${Styles['div-navigation']} ${!showNav ? (Styles.hide) : ''}`}>
                    <nav className={Styles.navigation} onClick={(e) => {
                        setShowNav(false);
                        e.preventDefault();
                    }}>
                        <Link onClick={() => setActiveLink('')} to={'/'} className={`${Styles.link} ${activeLink === '' ? (Styles.active) : ''}`}><span>00</span>Home</Link>
                        <Link onClick={() => setActiveLink('/destination')} to={'/destination'} className={`${Styles.link} ${activeLink === '/destination' ? (Styles.active) : ''}`}><span>01</span>Destination</Link>
                        <Link onClick={() => setActiveLink('/crew')} to={'/crew'} className={`${Styles.link} ${activeLink === '/crew' ? (Styles.active) : ''}`}><span>02</span>Crew</Link>
                        <Link onClick={() => setActiveLink('/technology')} to={'/technology'} className={`${Styles.link} ${activeLink === '/technology' ? (Styles.active) : ''}`}><span>03</span>Technology</Link>
                    </nav>
                </div>
            </header>


            <Outlet />
        </>
    )
}