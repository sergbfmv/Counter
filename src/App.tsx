import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {useDispatch, useSelector} from "react-redux";
import {RootAppType} from "./state/store";
import {addCounterAC, resetCounterAC} from "./state/CounterReducer";
import {addMaxCounterAC} from "./state/MaxValueCounterReducer";
import {addMinCounterAC} from "./state/MinValueCounterReducer";

function App() {
    // const [minCounter, setMinCounter] = useState(() => {
    //     const minLocalStorageValue = localStorage.getItem('minCounterValue')
    //     if (minLocalStorageValue) {
    //         return JSON.parse(minLocalStorageValue)
    //     }
    //     return 0
    // })
    // const [maxCounter, setMaxCounter] = useState(() => {
    //     const maxLocalStorageValue = localStorage.getItem('maxCounterValue')
    //     if (maxLocalStorageValue) {
    //         return JSON.parse(maxLocalStorageValue)
    //     }
    //     return 5
    // })
    // const [count, setCount] = useState<number>(minCounter)


    const minCounter = useSelector<RootAppType, number>(state => state.minCounter)
    const maxCounter = useSelector<RootAppType, number>(state => state.maxCounter)
    const count = useSelector<RootAppType, number>(state => state.count)

    const dispatch = useDispatch()

    const addCount = () => count < maxCounter && dispatch(addCounterAC(count))

    const addMaxCounter = (value: number) => {
        dispatch(addMaxCounterAC(value))
    }
    const addMinCounter = (value: number) => {
        dispatch(addMinCounterAC(value))
    }

    const resetCount = () => dispatch(resetCounterAC(minCounter))

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
