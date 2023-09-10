import React, {useEffect, useState} from 'react';
import '../Counter.css'
import {Button} from "../../Button/Button";
import {SetDisplay} from './SetDisplay/SetDisplay';
import {NavLink} from "react-router-dom";

export type SetCounterPropsType = {
    maxCounter: number
    minCounter: number
    addMaxCounter: (value: number) => void
    addMinCounter: (value: number) => void
    setCount: (value: number) => void
}
export const SetCounter = (props: SetCounterPropsType) => {
    // const [maxValueCount, setMaxValueCount] = useState(props.maxCounter)
    // const [minValueCount, setMinValueCount] = useState(props.minCounter)

    const onClickHandler = () => {
        props.addMaxCounter(props.maxCounter)
        props.addMinCounter(props.minCounter)
        props.setCount(props.maxCounter)
    }

    const invalidValue = props.minCounter >= props.maxCounter || props.minCounter < 0
    return (
        <>
            <SetDisplay
                // maxValueCount={maxValueCount}
                addMaxCounter={props.addMaxCounter}
                // minValueCount={minValueCount}
                addMinCounter={props.addMinCounter}
                invalidValue={invalidValue}
                maxCounter={props.maxCounter}
                minCounter={props.minCounter}
            />
            <div className='button-area'>
                <NavLink to={'/'}>
                    <Button disabled={invalidValue} name={'set'} callback={onClickHandler}/>
                </NavLink>
            </div>
        </>
    );
};
