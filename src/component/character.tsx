import {ICharacter} from "../models/ICharacter";
import React,{FC, ReactNode} from "react";


type IProps = {character: ICharacter} & {children: ReactNode};

const Character: FC<IProps> = ({character, children}) => {
    const {
        lastName ,
        surName,
        age,
        photo,
       } = character;

    return (
        <div>
            <h2>{lastName} {surName}</h2>
            <h2>{age} Років</h2>
            <img src={photo} alt={lastName}/>
            <p>{children}</p>


        </div>
    )

}
export default Character;