import Logo from '../../assets/shared/logo.svg';
import MenuIcon from '../../assets/shared/icon-hamburger.svg';
import CloseIcon from '../../assets/shared/icon-close.svg';

import Styles from './Header.module.scss';

export default function Header() {

    return (
        <header className={Styles.header}>
            <img className={Styles.logo} src={Logo} alt="" />
            <img className={Styles.menu} src={MenuIcon} alt="" />

        </header>
    )
}