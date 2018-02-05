import {  } from '../constants/action-types'

const initialState = {

}

export default function timetable(state = initialState, action) {
    switch (action.type) {
        // case INIT_SOME_TIMETABLE_SUCCESS:
        //     return action.payload.timetable
        // case CLEAR_TIMETABLE:
        //     return initialState
        default:
            return state
    }
}