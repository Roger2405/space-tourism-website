import { Link } from "react-router-dom";

import Header from "../../components/Header";

import Styles from './Home.module.scss';

export default function Home() {

    return (
        <div className={Styles.home}>
            <h1 className={Styles.title}>
                So, you want to travel to
                <br /><b>Space</b>
            </h1>
            <p className={Styles.text}>
                Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it.Well sit back, and relax
                because we’ll give you a truly out of this world experience!
            </p>
            <div className={Styles.explore}>
                <Link className={Styles.button} to={'/destination'} ><span>Explore</span></Link>
            </div>
        </div >



    )
}