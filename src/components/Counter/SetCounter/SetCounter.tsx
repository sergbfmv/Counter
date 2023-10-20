import React from 'react';
import '../Counter.css'
import {Button} from "../../Button/Button";
import {SetDisplay} from './SetDisplay/SetDisplay';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

export type SetCounterPropsType = {
    maxCounter: number
    minCounter: number
    addMaxCounter: (value: number) => void
    addMinCounter: (value: number) => void
    setCount: (value: number) => void
}
export const SetCounter = (props: SetCounterPropsType) => {
    const dispatch = useDispatch()
    const onClickHandler = () => {
        props.addMaxCounter(props.maxCounter)
        props.addMinCounter(props.minCounter)
        props.setCount(props.maxCounter)
        // localStorage.setItem('minCounterValue', JSON.stringify(props.minCounter))
        // localStorage.setItem('maxCounterValue', JSON.stringify(props.maxCounter))
    }

    const invalidValue = props.minCounter >= props.maxCounter || props.minCounter < 0
    return (
        <>
            <SetDisplay
                addMaxCounter={props.addMaxCounter}
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
