import React from 'react';

type InputPropsType = {
    id: string
    invalidValue: boolean
    callback: (e: number) => void
    counter: number
}
export const Input = (props: InputPropsType) => {
    return (
        <>
            <input
                className={props.invalidValue ? 'input input-red' : 'input'}
                value={props.counter}
                id={props.id}
                type={"number"}
                onChange={(e) => {
                    const value = e.currentTarget.valueAsNumber;
                    if (!isNaN(value)) {
                        props.callback(value);
                    }
                }}
            />
        </>
    );
};

