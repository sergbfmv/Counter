import React from 'react';
import {initialStateMinCounter} from "./MinValueCounterReducer";

type ActionType = CounterACType | ResetCounterACType

type CounterACType = ReturnType<typeof addCounterAC>
type ResetCounterACType = ReturnType<typeof resetCounterAC>

const initialState = initialStateMinCounter


export const counterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-COUNTER":
            return action.payload.count + 1
        case "RESET-COUNTER": {
            return action.payload.minCounter
        }

        default:
            return state
    }
}

export const addCounterAC = (count: number) => {
    return {
        type: 'ADD-COUNTER',
        payload: {
            count
        }
    } as const
}

export const resetCounterAC = (minCounter: number) => {
    return {
        type: 'RESET-COUNTER',
        payload: {
            minCounter
        }
    } as const
}