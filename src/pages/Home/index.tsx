import { Link } from "react-router-dom";
import TextContainer from "../../components/TextContainer";


import Styles from './Home.module.scss';

export default function Home() {

    return (
        <div className={Styles.home}>
            <div className={Styles.content}>
                <h1 className={Styles.titleHome}>
                    So, you want to travel to
                    <br /><b>Space</b>
                </h1>
                <TextContainer>
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it.Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </TextContainer>
            </div>
            <div className={Styles.link}>
                <Link className={Styles.button} reloadDocument to={'/destination'} >
                    <span className={Styles.button__span}></span>
                    <span>Explore</span>
                </Link>
            </div>
        </div >



    )
}