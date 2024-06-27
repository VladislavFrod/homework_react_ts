import React, {FC} from 'react';
import './person-style.module.css';
import styles from './person-style.module.css';

interface IProps {
    lastName: string,
    surName: string,
    age: number,
    image: string
}

const Persons: FC<IProps> = ({lastName, surName, age, image}) => {
    return (
        <div>
            <img src={image} alt={lastName} className={styles.imgPerson}/>
            <h2>Name: {lastName}</h2>
            <h2>Family: {surName}</h2>
            <h2>Age: {age}</h2>


        </div>

    )
}

export default Persons;