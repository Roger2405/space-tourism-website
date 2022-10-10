import { useState } from 'react';
import styles from './Crew.module.scss';


import Photo01 from '../../assets/crew/image-douglas-hurley.png';
import Photo02 from '../../assets/crew/image-mark-shuttleworth.png';
import Photo03 from '../../assets/crew/image-victor-glover.png';
import Photo04 from '../../assets/crew/image-anousheh-ansari.png';
import Title from '../../components/Title';
import TextContainer from '../../components/TextContainer';


export default function Crew() {
    const [crewIndex, setCrewIndex] = useState(0);

    const crewContent = [
        {
            photo: Photo01,
            profession: "Commander",
            name: "Douglas Hurley",
            text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            photo: Photo02,
            profession: "Mission Specialist",
            name: "Mark Shuttleworth",
            text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            photo: Photo03,
            profession: "Pilot",
            name: "Victor Glover",
            text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
        },
        {
            photo: Photo04,
            profession: "Flight Engineer",
            name: "Anousheh Ansari",
            text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
        },

    ]

    return (
        <div className={styles.crew}>
            <Title index='2' >Meet your crew</Title>

            <div className={styles['div-photo']}>
                <img className={styles.photo} src={crewContent[crewIndex].photo} alt="" />
                <hr className={styles.line} />
                <div className={styles.links}>
                    <a onClick={() => setCrewIndex(0)} className={`${styles.links__link} ${crewIndex === 0 ? (styles.active) : ''}`}></a>
                    <a onClick={() => setCrewIndex(1)} className={`${styles.links__link} ${crewIndex === 1 ? (styles.active) : ''}`}></a>
                    <a onClick={() => setCrewIndex(2)} className={`${styles.links__link} ${crewIndex === 2 ? (styles.active) : ''}`}></a>
                    <a onClick={() => setCrewIndex(3)} className={`${styles.links__link} ${crewIndex === 3 ? (styles.active) : ''}`}></a>
                </div>
            </div>
            <div className={styles['div-info']}>
                <div className={styles.info}>
                    <p className={styles.info__profession}>{crewContent[crewIndex].profession}</p>
                    <h2 className={styles.info__name}>{crewContent[crewIndex].name}</h2>
                    <TextContainer>
                        {crewContent[crewIndex].text}
                    </TextContainer>
                </div>
            </div>


        </div>)
}