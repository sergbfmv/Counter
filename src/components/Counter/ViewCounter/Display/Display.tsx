import React from 'react';
import './Display.css'

type DisplayPropsTye = {
    count: number
    maxCounter: number
}
export const Display = (props: DisplayPropsTye) => {
    return (
        <div className={props.count === props.maxCounter ? 'display display-red' : 'display'}>
            {props.count}
        </div>
    );
};
