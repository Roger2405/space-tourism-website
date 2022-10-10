
import { ReactNode } from 'react';
import './styles.scss';

interface Props {
    index: string,
    children?: ReactNode

}

export default function Title({ index, children }: Props) {
    return (
        <h1 className='title'><b>0{index}</b>{children}</h1>
    )
}