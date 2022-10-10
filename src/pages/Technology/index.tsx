import styles from './Technology.module.scss';

import Img01 from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import Img02 from '../../assets/technology/image-spaceport-landscape.jpg';
import Img03 from '../../assets/technology/image-space-capsule-landscape.jpg';
import { useState } from 'react';


export default function Technology() {
    const [techIndex, setTechIndex] = useState(0);

    const techContent = [
        {
            image: Img01,
            name: "LAUNCH VEHICLE",
            text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch"
        },
        {
            image: Img02,
            name: "SPACEPORT",
            text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            image: Img03,
            name: "SPACE CAPSULE",
            text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]
    return (
        <div className={styles.technology}>
            <h1 className={styles.title}><b>03</b>Space Launch 101</h1>
            <img className={styles.image} src={Img01} alt="" />


            <div className={styles.links}>
                <a onClick={() => setTechIndex(0)} className={`${styles.links__link} ${techIndex === 0 ? (styles.active) : ''}`}>1</a>
                <a onClick={() => setTechIndex(1)} className={`${styles.links__link} ${techIndex === 1 ? (styles.active) : ''}`}>2</a>
                <a onClick={() => setTechIndex(2)} className={`${styles.links__link} ${techIndex === 2 ? (styles.active) : ''}`}>3</a>
            </div>

            <p className={styles.subtitle}>THE TERMINOLOGY…</p>
            <h2 className={styles.name}>{techContent[techIndex].name}</h2>
            <p>{techContent[techIndex].text}</p>



        </div >
    )
}