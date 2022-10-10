import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Styles from './TextContainer.module.scss';

interface Props {
    children: ReactNode
}
export default function TextContainer({ children }: Props) {
    return (
        <p className={Styles.text}>
            {children}
        </p>
    )
}