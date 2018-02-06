import { FIRST_LOAD_PAGE_SUCCESS, SEMESTER_CHANGED, COURCE_CHANGED, LEVEL_CHANGED } from '../constants/action-types'

const initialState = {

}

export default function timetable(state = initialState, action) {
    switch (action.type) {
        case COURCE_CHANGED:
        case SEMESTER_CHANGED:
        case LEVEL_CHANGED:
        case FIRST_LOAD_PAGE_SUCCESS:
            return action.payload.timetable
        default:
            return state
    }
}
