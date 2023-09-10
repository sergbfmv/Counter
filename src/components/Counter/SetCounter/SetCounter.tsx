import React, {useState} from 'react';
import '../Counter.css'
import {Button} from "../../Button/Button";
import {SetDisplay} from './SetDisplay/SetDisplay';
import {NavLink} from "react-router-dom";

export type SetCounterPropsType = {
    maxCounter: number
    minCounter: number
    addMaxCounter: (value: number) => void
    addMinCounter: (value: number) => void
}
export const SetCounter = (props: SetCounterPropsType) => {
    const [maxValueCount, setMaxValueCount] = useState(0)
    const [minValueCount, setMinValueCount] = useState(0)

    const onClickHandler = () => {
        props.addMaxCounter(maxValueCount)
        props.addMinCounter(minValueCount)
    }

    const invalidValue = minValueCount >= maxValueCount || minValueCount < 0
    return (
        <>
            <SetDisplay
                maxValueCount={maxValueCount}
                setMaxValueCount={setMaxValueCount}
                minValueCount={minValueCount}
                setMinValueCount={setMinValueCount}
                invalidValue={invalidValue}
            />
            <div className='button-area'>
                <NavLink to={'/'}>
                    <Button disabled={invalidValue} name={'set'} callback={onClickHandler} />
                </NavLink>
            </div>
        </>
    );
};
