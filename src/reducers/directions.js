import { INIT_SOME_TIMETABLE_SUCCESS } from '../constants/action-types'

const initialState = []

export default function directions(state = initialState, action) {
    switch (action.type) {
        case INIT_SOME_TIMETABLE_SUCCESS:
            return action.payload.directions
        default:
            return state
    }
}