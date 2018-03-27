import { FIRST_LOAD_PAGE_SUCCESS, SEMESTER_CHANGED, FACULTY_CHANGED, SEMESTER_UPDATED, FACULTY_UPDATED } from '../constants/action-types'

const initialState = [
]

export default function levels(state = initialState, action) {
    switch (action.type) {
        case SEMESTER_CHANGED:
        case SEMESTER_UPDATED:
        case FIRST_LOAD_PAGE_SUCCESS:
            return action.payload.levels
        case FACULTY_UPDATED:
        case FACULTY_CHANGED:
            return initialState
        default:
            return state
    }
}
