import { FIRST_LOAD_PAGE_SUCCESS, LEVEL_CHANGED, FACULTY_CHANGED, LEVEL_UPDATED, SEMESTER_UPDATED } from '../constants/action-types'

const initialState = [
]

export default function courses(state = initialState, action) {
    switch (action.type) {
        case LEVEL_CHANGED:
        case LEVEL_UPDATED:
        case SEMESTER_UPDATED:
        case FIRST_LOAD_PAGE_SUCCESS:
            const newList = []
            action.payload.courses.forEach(element => {
                if (newList.indexOf(element + '') === -1) {
                    newList.push(element + '')
                }
            })
            return newList
        case FACULTY_CHANGED:
            return initialState
        default:
            return state
    }
}
