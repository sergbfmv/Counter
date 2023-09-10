import React from 'react';
import './Button.css'

type BtnPropsType = {
    disabled?: boolean
    name: string
    callback?: () => void
}
export const Button = (props: BtnPropsType) => {
    const onClickHandler = () => {
        if (props.callback) {
            props.callback()
        }
    }

    return (
        <button disabled={props.disabled} className='button' onClick={onClickHandler}>{props.name}</button>
    );
};
