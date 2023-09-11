import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';

function App() {
    const [minCounter, setMinCounter] = useState(() => {
        const minLocalStorageValue = localStorage.getItem('minCounterValue')
        if (minLocalStorageValue) {
            return JSON.parse(minLocalStorageValue)
        }
        return 0
    })
    const [maxCounter, setMaxCounter] = useState(() => {
        const maxLocalStorageValue = localStorage.getItem('maxCounterValue')
        if (maxLocalStorageValue) {
            return JSON.parse(maxLocalStorageValue)
        }
        return 5
    })
    const [count, setCount] = useState<number>(minCounter)

    const addCount = () => count < maxCounter && setCount(count + 1)

    const addMaxCounter = (value: number) => {
        setMaxCounter(value)
    }
    const addMinCounter = (value: number) => {
        setMinCounter(value)
    }

    const resetCount = () => setCount(minCounter)

    return (
        <div className="App">
            <Counter
                count={count}
                addCount={addCount}
                resetCount={resetCount}
                maxCounter={maxCounter}
                minCounter={minCounter}
                addMaxCounter={addMaxCounter}
                addMinCounter={addMinCounter}
            />
        </div>
    );
}

export default App;
