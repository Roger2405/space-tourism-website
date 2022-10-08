import Logo from '../../assets/shared/logo.svg';
import MenuIcon from '../../assets/shared/icon-hamburger.svg';
import CloseIcon from '../../assets/shared/icon-close.svg';

import Styles from './Header.module.scss';
import { Link, Outlet } from 'react-router-dom';

export default function Header() {

    return (
        <>

            <header className={Styles.header}>
                <Link to={'/'} >
                    <img className={Styles.logo} src={Logo} alt="" />
                </Link>
                <img className={Styles.menu} src={MenuIcon} alt="" />

            </header>
            <Outlet />
        </>
    )
}