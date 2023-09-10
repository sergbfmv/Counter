import React from 'react';
import {Display} from "./Display/Display";
import {Button} from "../../Button/Button";
import {NavLink} from "react-router-dom";

type ViewCounterPropsType = {
    count: number
    addCount: () => void
    resetCount: () => void
    maxCounter: number
    minCounter: number
}
export const ViewCounter = (props: ViewCounterPropsType) => {
    return (
        <>
            <Display count={props.count} maxCounter={props.maxCounter} />
            <div className='button-area'>
                <Button disabled={props.count === props.maxCounter} name={'inc'} callback={props.addCount} />
                <Button disabled={props.count === props.minCounter} name={'reset'} callback={props.resetCount} />
                <NavLink to='/settings'>
                    <Button name='set' ></Button>
                </NavLink>
            </div>
        </>
    );
};
