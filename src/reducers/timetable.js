import { FIRST_LOAD_PAGE_SUCCESS, SEMESTER_CHANGED, COURCE_CHANGED, LEVEL_CHANGED, FACULTY_CHANGED, COURCE_UPDATED, LEVEL_UPDATED, SEMESTER_UPDATED } from '../constants/action-types'

const initialState = {

}

export default function timetable(state = initialState, action) {
    switch (action.type) {
        case COURCE_UPDATED:
        case LEVEL_UPDATED:
        case COURCE_CHANGED:
        case SEMESTER_CHANGED:
        case SEMESTER_UPDATED:
        case LEVEL_CHANGED:
        case FIRST_LOAD_PAGE_SUCCESS:
            return action.payload.timetable
        case FACULTY_CHANGED:
            return initialState
        default:
            return state
    }
}
