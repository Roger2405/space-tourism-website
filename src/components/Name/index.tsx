import { ReactNode } from 'react';
import styles from './Name.module.scss';

interface Props {
    children?: ReactNode
}
export default function Name({ children }: Props) {
    return (
        <h2 className={styles.name}>{children}</h2>
    )
}