import React from 'react';
import './SetDisplay.css'

type SetDisplayPropsType = {
    maxValueCount: number
    setMaxValueCount: (e: number) => void
    minValueCount: number
    setMinValueCount: (e: number) => void
    invalidValue: boolean
}


export const SetDisplay = (props: SetDisplayPropsType) => {
    return (
        <div className='set-display'>
            <div className='item'>
                <label className='label' htmlFor={'max'}>max value:</label>
                <input
                    className={props.invalidValue ? 'input input-red' : 'input'}
                    value={props.maxValueCount}
                    id={'max'}
                    type={"number"}
                    onChange={(e) => props.setMaxValueCount(e.currentTarget.valueAsNumber)}
                />
            </div>
            <div className='item'>
                <label className='label' htmlFor={'min'}>start value:</label>
                <input
                    className={props.invalidValue ? 'input input-red' : 'input'}
                    value={props.minValueCount}
                    id={'min'}
                    type={"number"}
                    onChange={(e) => props.setMinValueCount(e.currentTarget.valueAsNumber)}
                />
            </div>
        </div>
    );
};
