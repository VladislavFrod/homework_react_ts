import React, {FC} from "react";
import './custom-button.module.css'
import styles from './custom-button.module.css'

interface IProps {
    nameOfClass?: string,
    // children?: React.ReactNode,
    label?: string
}

const CustomButton: FC<IProps> = ({label, nameOfClass}) => {
    return(

            <div>
                <h1>Test</h1>

                <button className={styles.btnFontSize}></button>
            </div>


    )
}
export default CustomButton;