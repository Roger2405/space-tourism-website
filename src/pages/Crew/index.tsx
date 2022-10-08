import { useState } from 'react';
import styles from './Crew.module.scss';


export default function Crew() {
    const [planetIndex, setPlanetIndex] = useState(0);

    const planetContent = [
        {
            name: "Moon",
            text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400",
            travelTime: "3 days"
        },
        {
            name: "Mars",
            text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil.",
            travelTime: "9 months"
        },
        {
            name: "Europa",
            text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil.",
            travelTime: "3 years"
        },
        {
            name: "Titan",
            text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home(just a few hundred degrees colder!).As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil.",
            travelTime: "7 years"
        }

    ]

    function changePlanet(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) {
        setPlanetIndex(index);
        e.preventDefault();
    }

    return (
        <div className={styles.crew}>
            <h1 className={styles.title}><b>01</b>Pick your destination</h1>

            <div className={styles.links}>
                <a className={`${styles.link} ${planetIndex === 0 ? (styles.active) : ''}`} onClick={(e) => changePlanet(e, 0)}>Moon</a>
                <a className={`${styles.link} ${planetIndex === 1 ? (styles.active) : ''}`} onClick={(e) => changePlanet(e, 1)}>Mars</a>
                <a className={`${styles.link} ${planetIndex === 2 ? (styles.active) : ''}`} onClick={(e) => changePlanet(e, 2)}>Europa</a>
                <a className={`${styles.link} ${planetIndex === 3 ? (styles.active) : ''}`} onClick={(e) => changePlanet(e, 3)}>Titan</a>
            </div>
            <div className={styles.planet}>
                <h2 className={styles.name}>{planetContent[planetIndex].name}</h2>

                <p className={styles.description}>
                    {planetContent[planetIndex].text}
                </p>

            </div>
            <hr className={styles.line} />

            <div className={styles.info}>
                <p className={styles.info__name}>Avg. distance</p>
                <p className={styles.info__data}>{planetContent[planetIndex].distance} km</p>
            </div>
            <div className={styles.info}>
                <p className={styles.info__name}>Est. travel time</p>
                <p className={styles.info__data}>{planetContent[planetIndex].travelTime}</p>
            </div>
        </div>)
}