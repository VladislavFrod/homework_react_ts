import React, {FC, useState} from 'react';
import './App.css';
import {useToggle} from "./hooks/useToggle";
import {usePrevious} from "./hooks/usePrevious";


const App: FC = () => {
    const {value, handleToggle} = useToggle(false);
    const [count, setCount] = useState(0);
    const [currentCount, previousCount] = usePrevious(count);

    return (
        <div>
            <p>{value? 'True': 'False'}</p>
            <button onClick={handleToggle}>Click</button>
            <p>Current count: {currentCount}</p>
            <p>Previous count: {previousCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default App;
