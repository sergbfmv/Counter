import React from 'react';
import {Routes, Route} from "react-router-dom";
import './Counter.css'
import {SetCounter} from "./SetCounter/SetCounter";
import {ViewCounter} from "./ViewCounter/ViewCounter";

type CountPropsType = {
    count: number
    addCount: () => void
    resetCount: () => void
    maxCounter: number
    minCounter: number
    addMaxCounter: (value: number) => void
    addMinCounter: (value: number) => void
}

export const Counter = (props: CountPropsType) => {
    return (
        <div className='counter'>
            <Routes>
                <Route path='/' element={
                    <ViewCounter
                        count={props.count}
                        addCount={props.addCount}
                        resetCount={props.resetCount}
                        maxCounter={props.maxCounter}
                        minCounter={props.minCounter}
                    />
                }>
                </Route>
                <Route path='/settings' element={
                    <SetCounter
                        maxCounter={props.maxCounter}
                        minCounter={props.minCounter}
                        addMaxCounter={props.addMaxCounter}
                        addMinCounter={props.addMinCounter}
                    />
                }>
                </Route>
            </Routes>
        </div>
    );
};
