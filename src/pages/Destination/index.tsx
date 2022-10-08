import styles from "./Destination.module.scss";

import Moon from '../../assets/destination/image-moon.png';

export default function Destination() {

    return (
        <div className={styles.destination}>
            <h1 className={styles.title}><b>01</b>Pick your destination</h1>
            <img className={styles.image} src={Moon} alt="" />

            <div className={styles.links}>
                <a href="">Moon</a>
                <a href="">Mars</a>
                <a href="">Europa</a>
                <a href="">Titan</a>
            </div>
            <div className={styles.planet}>
                <h2 className={styles.name}>Moon</h2>

                <p className={styles.description}>
                    See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                    regain perspective and come back refreshed. While you’re there, take in some history
                    by visiting the Luna 2 and Apollo 11 landing sites.
                </p>

            </div>
            <hr className={styles.line} />

            <div className={styles.info}>
                <p className={styles.info__name}>Avg. distance</p>
                <p className={styles.info__data}>384,400 km</p>
            </div>
            <div className={styles.info}>
                <p className={styles.info__name}>Est. travel time</p>
                <p className={styles.info__data}>3 days</p>
            </div>
        </div>)
}