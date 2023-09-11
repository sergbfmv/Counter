import React from 'react';
import './SetDisplay.css'
import {Input} from "../../../Input/Input";

export type SetDisplayPropsType = {
    invalidValue: boolean
    addMaxCounter: (value: number) => void
    addMinCounter: (value: number) => void
    maxCounter: number
    minCounter: number
}

export const SetDisplay = (props: SetDisplayPropsType) => {
    return (
        <div className='set-display'>
            <div className='item'>
                <label className='label' htmlFor={'max'}>Max value:</label>
                <Input id='max' invalidValue={props.invalidValue} counter={props.maxCounter} callback={props.addMaxCounter} />
            </div>
            <div className='item'>
                <label className='label' htmlFor={'min'}>Min value:</label>
                <Input id='min' invalidValue={props.invalidValue} counter={props.minCounter} callback={props.addMinCounter} />
            </div>
        </div>
    );
};
