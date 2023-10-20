import React from 'react';

type ActionType = AddMinCounterACType

type AddMinCounterACType = ReturnType<typeof addMinCounterAC>

export const initialStateMinCounter = 0

export const minValueCounterReducer = (state = initialStateMinCounter, action: ActionType) => {
    switch (action.type) {
        case "ADD-MIN-COUNTER":
            return action.payload.minCount

        default:
            return state
    }
}

export const addMinCounterAC = (minCount: number) => {
    return {
        type: 'ADD-MIN-COUNTER',
        payload: {
            minCount
        }
    } as const
}