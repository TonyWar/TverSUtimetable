import { FIRST_LOAD_PAGE_SUCCESS, SEMESTER_CHANGED, FACULTY_CHANGED, LEVEL_CHANGED } from '../constants/action-types'

const initialState = []

export default function directions(state = initialState, action) {
    switch (action.type) {
        case FACULTY_CHANGED:
            return initialState
        case SEMESTER_CHANGED:
        case LEVEL_CHANGED:
        case FIRST_LOAD_PAGE_SUCCESS:
            return action.payload.directions
        default:
            return state
    }
}
