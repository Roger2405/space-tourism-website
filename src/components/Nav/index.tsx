import { Link } from 'react-router-dom';
import Styles from './Nav.module.scss';

export default function Nav() {
    return (
        <nav className={Styles.navigation}>
            <Link to={'/'} className={Styles.link}><span>00</span>Home</Link>
            <Link to={'/destination'} className={Styles.link}><span>01</span>Destination</Link>
            <Link to={'/crew'} className={Styles.link}><span>02</span>Crew</Link>
            <Link to={'/technology'} className={Styles.link}><span>03</span>Technology</Link>
        </nav>
    )
}