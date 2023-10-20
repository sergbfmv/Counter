import {combineReducers, createStore} from "redux";
import {minValueCounterReducer} from "./MinValueCounterReducer";
import {maxValueCounterReducer} from "./MaxValueCounterReducer";
import {counterReducer} from "./CounterReducer";


const rootReducer = combineReducers({
    minCounter: minValueCounterReducer,
    maxCounter: maxValueCounterReducer,
    count: counterReducer
})

export type RootAppType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)