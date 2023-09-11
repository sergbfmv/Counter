import React from 'react';
import './SetDisplay.css'

type SetDisplayPropsType = {
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
                <label className='label' htmlFor={'max'}>max value:</label>
                <input
                    className={props.invalidValue ? 'input input-red' : 'input'}
                    value={props.maxCounter}
                    id={'max'}
                    type={"number"}
                    onChange={(e) => props.addMaxCounter(e.currentTarget.valueAsNumber)}
                />
            </div>
            <div className='item'>
                <label className='label' htmlFor={'min'}>start value:</label>
                <input
                    className={props.invalidValue ? 'input input-red' : 'input'}
                    value={props.minCounter}
                    id={'min'}
                    type={"number"}
                    onChange={(e) => props.addMinCounter(e.currentTarget.valueAsNumber)}
                />
            </div>
        </div>
    );
};
