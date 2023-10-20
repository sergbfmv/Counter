import React from 'react';

type ActionType = AddMaxCounterACType

type AddMaxCounterACType = ReturnType<typeof addMaxCounterAC>
const initialState = 5

export const maxValueCounterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-MAX-COUNTER":
            return action.payload.maxCount

        default:
            return state
    }
}


export const addMaxCounterAC = (maxCount: number) => {
    return {
        type: 'ADD-MAX-COUNTER',
        payload: {
            maxCount
        }
    } as const
}