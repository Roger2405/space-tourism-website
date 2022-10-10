import styles from './Technology.module.scss';

import Img01landscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import Img01portrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import Img02landscape from '../../assets/technology/image-spaceport-landscape.jpg';
import Img02portrait from '../../assets/technology/image-spaceport-portrait.jpg';
import Img03landscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import Img03portrait from '../../assets/technology/image-space-capsule-portrait.jpg';
import { useState } from 'react';
import Title from '../../components/Title';
import TextContainer from '../../components/TextContainer';


export default function Technology() {
    const [techIndex, setTechIndex] = useState(0);

    const techContent = [
        {
            images: {
                mobile: Img01landscape,
                desktop: Img01portrait
            },
            name: "LAUNCH VEHICLE",
            text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch"
        },
        {
            images: {
                mobile: Img02landscape,
                desktop: Img02portrait
            },
            name: "SPACEPORT",
            text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            images: {
                mobile: Img03landscape,
                desktop: Img03portrait
            },
            name: "SPACE CAPSULE",
            text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]
    return (
        <div className={styles.technology}>
            <Title index='3' >Space Launch 101</Title>

            <picture>
                <source media='(max-width: 1439px' srcSet={techContent[techIndex].images.mobile} />
                <img className={styles.image} src={techContent[techIndex].images.desktop} alt="" />
            </picture>


            <div className={styles.links}>
                <a onClick={() => setTechIndex(0)} className={`${styles.links__link} ${techIndex === 0 ? (styles.active) : ''}`}>1</a>
                <a onClick={() => setTechIndex(1)} className={`${styles.links__link} ${techIndex === 1 ? (styles.active) : ''}`}>2</a>
                <a onClick={() => setTechIndex(2)} className={`${styles.links__link} ${techIndex === 2 ? (styles.active) : ''}`}>3</a>
            </div>

            <p className={styles.subtitle}>THE TERMINOLOGY…</p>
            <h2 className={styles.name}>{techContent[techIndex].name}</h2>
            <TextContainer>{techContent[techIndex].text}</TextContainer>



        </div >
    )
}