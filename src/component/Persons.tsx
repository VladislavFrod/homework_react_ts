import React, {FC} from 'react';
import './person-style.module.css';
import styles from './person-style.module.css';

interface IProps {
    lastName: string,
    surName: string,
    age: number,
    stat: string,
    png: string
}

const Persons: FC<IProps> = ({lastName, surName, age, stat, png}) => {
    return (
        <img src={typeof png === 'string' ? png : png:src} alt={`${lastName}`}>

    )
}

export default Persons;