import React, {FC} from 'react';
import './App.css';
import {useToggle} from "./hooks/useToggle";

const App: FC = () => {
    const {value, handleToggle} = useToggle(false);

    return (
        <div>
            <p>{value? 'True': 'False'}</p>
            <button onClick={handleToggle}>Click</button>
        </div>
    );
};

export default App;
